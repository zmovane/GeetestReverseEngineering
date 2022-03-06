const { request } = require("../util/http");
const { now } = require("../util/time");
const { w: slideW } = require("../geetest/slide.reversed");
const { w: fullpageW } = require("../geetest/fullpage.reversed");
const { seed } = require("../geetest/seed");

const header = {
  Origin: "https://paicc-core.pingan.com.cn",
  Referer:
    "https://paicc-core.pingan.com.cn/paicc-core-web/webapi/login.view?tabs=account&appId=16666",
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
};
async function requestCaptcha() {
  const response = await request(
    "get",
    "https://paicc-core.pingan.com.cn/paicc-core-web/webapi/gt/register",
    { t: now() },
    header
  );
  return response.data;
}

async function requestGetPHP(step = 1, { gt, challenge, seed }) {
  const payload =
    step === 1
      ? {
          gt: gt,
          challenge: challenge,
          lang: "zh-cn",
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
    "https://captcha-api.pingan.com/get.php",
    payload,
    header
  );
  console.log(response.data);
  return response.data;
}

async function requestAjaxPHP(
  step = 1,
  { gt, challenge, offset, passtime, track, c, s }
) {
  const payload =
    step === 1
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
          gt: gt,
          challenge: `${challenge}gj`,
          lang: "zh-cn",
          $_BBF: 0,
          client_type: "web",
          w: slideW(offset, challenge, passtime, track, c, s),
          callback: `geetest_${now()}`,
        };
  await request("get", "https://api.geetest.com/ajax.php", payload, header);
  return { gt: gt, challenge: challenge };
}
