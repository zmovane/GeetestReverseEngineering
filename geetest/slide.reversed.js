const { $_BDg, X, j } = require("./encrypt");
const { timing } = require("./timing");

function $_BBCA(t, e, n) {
  if (!e || !n) return t;
  var r,
    i = 0,
    o = t,
    s = e[0],
    a = e[2],
    _ = e[4];
  while ((r = n["substr"](i, 2))) {
    i += 2;
    var c = parseInt(r, 16),
      u = String["fromCharCode"](c),
      l = (s * c * c + a * c + _) % t["length"];
    o = o["substr"](0, l) + u + o["substr"](l);
  }
  return o;
}

function ct(t) {
  this["$_BBJp"] = t || [];
}

ct["prototype"] = {
  $_BJo: function (t) {
    var e = this["$_BBJp"];
    if (e["map"]) return new ct(e["map"](t));
    for (var n = [], r = 0, i = e["length"]; r < i; r += 1)
      n[r] = t(e[r], r, this);
    return new ct(n);
  },
};

function $_GEy(track) {
  function n(t) {
    var e = "()*,-./0123456789:?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqr",
      n = e["length"],
      r = "",
      i = Math["abs"](t),
      o = parseInt(i / n);
    n <= o && (o = n - 1), o && (r = e["charAt"](o));
    var s = "";
    return t < 0 && (s += "!"), r && (s += "$"), s + r + e["charAt"]((i %= n));
  }
  var t = (function (t) {
      for (var e, n, r, i = [], o = 0, s = 0, a = t["length"] - 1; s < a; s++)
        (e = Math["round"](t[s + 1][0] - t[s][0])),
          (n = Math["round"](t[s + 1][1] - t[s][1])),
          (r = Math["round"](t[s + 1][2] - t[s][2])),
          (0 == e && 0 == n && 0 == r) ||
            (0 == e && 0 == n ? (o += r) : (i["push"]([e, n, r + o]), (o = 0)));
      return 0 !== o && i["push"]([e, n, o]), i;
    })(track),
    r = [],
    i = [],
    o = [];
  return (
    new ct(t)["$_BJo"](function (t) {
      var e = (function (t) {
        for (
          var e = [
              [1, 0],
              [2, 0],
              [1, -1],
              [1, 1],
              [0, 1],
              [0, -1],
              [3, 0],
              [2, -1],
              [2, 1],
            ],
            n = 0,
            r = e["length"];
          n < r;
          n++
        )
          if (t[0] == e[n][0] && t[1] == e[n][1]) return "stuvwxyz~"[n];
        return 0;
      })(t);
      e ? i["push"](e) : (r["push"](n(t[0])), i["push"](n(t[1]))),
        o["push"](n(t[2]));
    }),
    r["join"]("") + "!!" + i["join"]("") + "!!" + o["join"]("")
  );
}

function GCG(t, e) {
  return (t >> e) & 1;
}

function GAC(t) {
  var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()";
  return t < 0 || t >= e["length"] ? "." : e["charAt"](t);
}

function $_GDR(t) {
  var _fdw = 7274496,
    _fex = 9483264,
    _fei = 19220,
    _fgb = 235,
    _fcu = ".";
  for (
    var e = function (t, e) {
        for (var n = 0, r = 23; 0 <= r; r -= 1)
          1 === GCG(e, r) && (n = (n << 1) + GCG(t, r));
        return n;
      },
      n = "",
      r = "",
      s = t["length"],
      a = 0;
    a < s;
    a += 3
  ) {
    var _;
    if (a + 2 < s)
      (_ = (t[a] << 16) + (t[a + 1] << 8) + t[a + 2]),
        (n +=
          GAC(e(_, _fdw)) +
          GAC(e(_, _fex)) +
          GAC(e(_, _fei)) +
          GAC(e(_, _fgb)));
    else {
      var c = s % 3;
      2 == c
        ? ((_ = (t[a] << 16) + (t[a + 1] << 8)),
          (n += GAC(e(_, _fdw)) + GAC(e(_, _fex)) + GAC(e(_, _fei))),
          (r = _fcu))
        : 1 == c &&
          ((_ = t[a] << 16),
          (n += GAC(e(_, _fdw)) + GAC(e(_, _fex))),
          (r = _fcu + _fcu));
    }
  }
  return {
    res: n,
    end: r,
  };
}

function $_GFM(t) {
  var { res, end } = $_GDR(t);
  return res + end;
}

function getUserResponse(t, e) {
  for (var n = e["slice"](-2), r = [], i = 0; i < n["length"]; i++) {
    var o = n["charCodeAt"](i);
    r[i] = 57 < o ? o - 87 : o - 48;
  }
  n = 36 * r[0] + r[1];
  var s,
    a = Math["round"](t) + n,
    _ = [[], [], [], [], []],
    c = {},
    u = 0;
  i = 0;
  for (var l = (e = e["slice"](0, -2))["length"]; i < l; i++)
    c[(s = e["charAt"](i))] ||
      ((c[s] = 1), _[u]["push"](s), (u = 5 == ++u ? 0 : u));
  var h,
    f = a,
    d = 4,
    p = "",
    g = [1, 2, 5, 10, 50];
  while (0 < f)
    0 <= f - g[d]
      ? ((h = parseInt(Math["random"]() * _[d]["length"], 10)),
        (p += _[d][h]),
        (f -= g[d]))
      : (_["splice"](d, 1), g["splice"](d, 1), (d -= 1));
  return p;
}

function getEP() {
  return {
    v: "7.8.6",
    $_BHR: false,
    me: true,
    td: -1,
    tm: timing(),
  };
}

function $_CCFP(s) {
  var t = new X()["encrypt"](s);
  while (!t || 256 !== t["length"]) t = new X()["encrypt"](s);
  return t;
}

/**
 *
 * @param {*} gt
 * @param {*} challenge
 * @param {*} seed
 * @param {*} offset    滑动位移
 * @param {*} track     滑动轨迹数据
 * @param {*} passtime  滑动时间
 * @param {*} imgload   图片加载时间
 * @param {*} c         请求 get.php 获得
 * @param {*} s         请求 get.php 获得
 * @returns
 */
function w(
  gt,
  challenge,
  seed,
  offset,
  track,
  passtime,
  imgload,
  c,
  s,
  gctPayload
) {
  var o = {
    lang: "zh-cn",
    userresponse: getUserResponse(offset, challenge),
    passtime: passtime,
    imgload: imgload,
    aa: $_BBCA($_GEy(track), c, s),
    ep: getEP(),
    rp: j(`${gt}${challenge.slice(0, 32)}${passtime}`),
  };
  var u = $_CCFP(seed);
  var l = new $_BDg().encrypt(JSON.stringify({ ...o, ...gctPayload }), seed);
  var h = $_GFM(l);
  return h + u;
}

module.exports = { w, getEP };
