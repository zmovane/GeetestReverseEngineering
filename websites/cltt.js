const C = require("crypto-js");
const { request } = require("../util/http");
const { now } = require("../util/time");
const { v4 } = require("uuid");

const appSecret = "25F2448F83789A3968E8DC030988B938";
const appId = "64e43635ea9344baaac25b1059d09697";
const baseURL = "https://epass.cltt.org";

function generateUniqueKey() {
  var n,
    i,
    r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
      ""
    ),
    o = [];
  for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", n = 0; n < 36; n++)
    o[n] ||
      ((i = 0 | (16 * Math.random())), (o[n] = r[19 === n ? (3 & i) | 8 : i]));
  return o.join("");
}

function sign(appSecret, path, nonce, ts, appid) {
  const message = [path, nonce, ts, appid].join("|");
  return C.enc.Base64.stringify(C.HmacSHA256(message, appSecret));
}

async function getCaptcha() {
  const path = "/prod/user/auth/initCaptcha";

  const nonce = v4();
  const ts = now();
  const header = {
    Accept: "*/*",
    Host: "epass.cltt.org",
    Origin: "http://bm.cltt.org",
    Referer: "http://bm.cltt.org/",
    "S-Auth-Version": 1,
    "S-Auth-Timestamp": ts,
    "S-Auth-Stage": "RELEASE",
    "S-Auth-AppId": appId,
    "S-Auth-Nonce": nonce,
    "S-Auth-Signature": sign(appSecret, path, nonce, ts, appId),
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const uniqueKey = generateUniqueKey();
  const response = await request(
    "post",
    `${baseURL}${path}`,
    { uniqueKey: uniqueKey, clientType: "web" },
    header
  );
  return JSON.parse(response.data);
}
