const { request } = require("../util/http");
const { now, delay } = require("../util/time");
const { w: slideW, getEP } = require("../geetest/slide.reversed");
const { w: fullpageW } = require("../geetest/fullpage.reversed");
const { w2: fullpageW2 } = require("../geetest/fullpage.reversed2");
const { seed: generateSeed } = require("../geetest/seed");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

const ssoUserId = "689ce122-9e1c-ba6e-ead3-74c926eabdbe";
const header = {
  ssoUserId: ssoUserId,
  Referer: "https://sso.ceair.com/",
  Accept: "application/json, text/javascript, */*; q=0.01",
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
};

const seed = generateSeed();

async function requestCaptcha() {
  const response = await request(
    "get",
    "https://sso.ceair.com/ecssoapi/api/sso/register",
    { t: now() },
    header
  );
  return response.data;
}

async function requestGetPHP(step = STEP.ONE, { gt, challenge }) {
  const payload =
    step === STEP.ONE
      ? {
          gt: gt,
          challenge: challenge,
          lang: "zh-cn",
          pt: 0,
          client_type: "web",
          w: fullpageW(gt, challenge, seed),
          callback: `geetest_${now()}`,
        }
      : {
          is_next: true,
          type: "slide3",
          gt: gt,
          challenge: challenge,
          lang: "zh-cn",
          https: false,
          protocol: "https://",
          offline: false,
          product: "popup",
          api_server: "api.geetest.com",
          isPC: true,
          autoReset: true,
          width: "100%",
          callback: `geetest_${now()}`,
        };

  const response = await request(
    "get",
    "https://api.geetest.com/get.php",
    payload,
    header
  );
  const json = JSON.parse(response.data.match(/^geetest_\d+\((.+)\)$/)[1]);
  const staticURL = "https://" + (json.static_servers || [])[0];
  return {
    gt: gt,
    challenge: challenge,
    c: json.c,
    s: json.s,
    fullbg: staticURL + json.fullbg,
    bg: staticURL + json.bg,
    gctpath: staticURL + json.gct_path,
  };
}

async function requestAjaxPHP(
  step = STEP.ONE,
  { gt, challenge, offset, track, passtime, imgload, c, s, gctPayload }
) {
  const payload =
    step === STEP.ONE
      ? {
          gt: gt,
          challenge: challenge,
          lang: "zh-cn",
          pt: 0,
          client_type: "web",
          w: `${fullpageW2(gt, challenge, seed)}`,
          callback: `geetest_${now()}`,
        }
      : {
          gt: gt,
          challenge: challenge,
          lang: "zh-cn",
          $_BBF: 0,
          client_type: "web",
          w: slideW(
            gt,
            challenge,
            generateSeed(),
            offset,
            track,
            passtime,
            imgload,
            c,
            s,
            gctPayload
          ),
          callback: `geetest_${now()}`,
        };
  const response = await request(
    "get",
    "https://api.geetest.com/ajax.php",
    payload,
    header
  );
  const json = JSON.parse(response.data.match(/^geetest_\d+\((.+)\)$/)[1]);
  return {
    gt: gt,
    challenge: challenge,
    validate: json.validate,
    success: json.success,
    message: json.message,
  };
}

async function calculateOffset(bg, fullbg) {
  return Promise.resolve().then(() =>
    (async function () {
      const { stdout } = await exec(`python3 python/img.py ${bg} ${fullbg}`);
      const offset = parseInt(stdout.toString());
      console.info("滑块偏移值: ", offset);
      return offset;
    })()
  );
}

let tracks;
function getTrack(offset) {
  if (!tracks) {
    tracks = require("../tracks.json");
  }
  for (const track of tracks) {
    let index = 0;
    for (const [x, y, t] of track) {
      if ([offset - 1, offset, offset + 1].includes(x)) {
        return track.slice(0, index + 1);
      }
      index++;
    }
  }
}

async function execGctjs(gctpath) {
  const response = await request("GET", gctpath, {}, header);
  const js = response.data;
  const pattern = /return\s(function\(t\)\{[\s\S]*?\});/g;
  const gctFn = js.match(pattern)[0];
  const payload = { lang: "zh-cn", ep: getEP() };
  const newjs =
    "window={};" +
    js.replace(
      pattern,
      `window._gct=${gctFn.replace(/^return/, "")};\n${gctFn}`
    ) +
    `function execGct(ep){window._gct(ep);return ep;}; execGct(${JSON.stringify(
      payload
    )})`;
  return eval(newjs);
}

const STEP = {
  ONE: Symbol(),
  TWO: Symbol(),
};

requestCaptcha()
  .then(({ gt, challenge }) => {
    return requestGetPHP(STEP.ONE, { gt, challenge });
  })
  .then(({ gt, challenge }) => {
    return requestAjaxPHP(STEP.ONE, { gt, challenge });
  })
  .then(({ gt, challenge }) => {
    return requestGetPHP(STEP.TWO, { gt, challenge });
  })
  .then(({ gt, challenge, c, s, bg, fullbg, gctpath }) => {
    return (async function () {
      const offset = await calculateOffset(bg, fullbg);
      const track = getTrack(offset);
      const imgload = parseInt(Math.random(100, 300));
      const passtime = track[track.length - 1][2];
      await delay(imgload);
      const gctPayload = await execGctjs(gctpath);
      return {
        gt,
        challenge,
        offset,
        track,
        passtime,
        imgload,
        c,
        s,
        gctPayload,
      };
    })();
  })
  .then((data) => {
    return requestAjaxPHP(STEP.TWO, data);
  })
  .then((data) => {
    console.log(data);
  });
