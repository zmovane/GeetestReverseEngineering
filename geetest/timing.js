const { now } = require("../util/time");

function timing() {
  const tm = {};
  tm["navigationStart"] = now();

  const uploadEventTiming = parseInt(Math.random() * 1000 + 2000);
  tm["unloadEventStart"] = tm["navigationStart"] + uploadEventTiming;
  tm["unloadEventEnd"] = tm["navigationStart"] + uploadEventTiming;
  tm["redirectStart"] = 0;
  tm["redirectEnd"] = 0;

  tm["fetchStart"] = tm["navigationStart"] + 1;

  const domainLookupTiming = 1;
  tm["domainLookupStart"] = tm["navigationStart"] + domainLookupTiming;
  tm["domainLookupEnd"] = tm["navigationStart"] + domainLookupTiming;

  const connectTiming = parseInt(Math.random() * 300 + 1000);
  tm["connectStart"] = tm["domainLookupEnd"] + 2;
  tm["connectEnd"] = tm["connectStart"] + connectTiming;
  tm["secureConnectionStart"] = tm["connectStart"];
  tm["requestStart"] = tm["connectEnd"] + 1;

  const responseTiming = parseInt(Math.random() * 80 + 200);
  tm["responseStart"] = tm["requestStart"] + responseTiming;
  tm["responseEnd"] = tm["responseStart"] + 1;

  const domTiming = parseInt(Math.random() * 10 + 20);
  tm["domLoading"] = tm["responseEnd"] + domTiming;
  tm["domInteractive"] = tm["domLoading"] + 140;
  tm["domContentLoadedEventStart"] = tm["domInteractive"];
  tm["domContentLoadedEventEnd"] = tm["domInteractive"] + 3;

  const loadTiming = parseInt(Math.random() * 300 + 2000);
  tm["domComplete"] = tm["domContentLoadedEventEnd"] + loadTiming;
  tm["loadEventStart"] = tm["domComplete"];
  tm["loadEventEnd"] = tm["domComplete"];

  const {
    navigationStart: a,
    unloadEventStart: b,
    unloadEventEnd: c,
    redirectStart: d,
    redirectEnd: e,
    fetchStart: f,
    domainLookupStart: g,
    domainLookupEnd: h,
    connectStart: i,
    connectEnd: j,
    secureConnectionStart: k,
    requestStart: l,
    responseStart: m,
    responseEnd: n,
    domLoading: o,
    domInteractive: p,
    domContentLoadedEventStart: q,
    domContentLoadedEventEnd: r,
    domComplete: s,
    loadEventStart: t,
    loadEventEnd: u,
  } = tm;
  return { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u };
}

module.exports = { timing }