function RQOH(t) {
  var e = 5381;
  var n = t["length"];
  var r = 0;
  while (n--) {
    e = (e << 5) + e + t["charCodeAt"](r++);
  }
  e &= ~(1 << 31);
  return e;
}
function SNvj(t) {
  if (t["lang"] && t["ep"]) {
    t[e] = RQOH(SNvj["toString"]() + RQOH(RQOH["toString"]())) + "";
  }
  function Oo() {
    this["lang"] = t["lang"];
    this["ep"] = t["ep"];
  }
  Oo["prototype"] = new TqMu();
  function TqMu() {}
  TqMu["prototype"]["gg"] = {
    n: HgnP,
    s: FYin,
    e: li,
    es: MPiv,
    en: IBgQ,
    w: KSnO,
    wn: LqQZ,
    ws: JBDY,
    f: QwLP,
  };
  return new Oo();
}

function gct(t) {
  if (t && Object["prototype"]["toString"]["call"](t) === "[object Object]") {
    return SNvj(t);
  }
  return RQOH(RQOH["toString"]());
}
