const { $_BDg, $_BIAy, $_BHDt } = require("./fullpage.reversed");
const { j } = require("./encrypt");
function $_HAl(e) {
  var p = {
    move: 0,
    down: 1,
    up: 2,
    scroll: 3,
    focus: 4,
    blur: 5,
    unload: 6,
    unknown: 7,
  };
  function h(e, t) {
    for (var n = e["toString"](2), r = "", o = n["length"] + 1; o <= t; o += 1)
      r += "0";
    return (n = r + n);
  }
  var f = function (e) {
    var t = [],
      n = e["length"],
      r = 0;
    while (r < n) {
      var o = e[r],
        i = 0;
      while (1) {
        if (16 <= i) break;
        var s = r + i + 1;
        if (n <= s) break;
        if (e[s] !== o) break;
        i += 1;
      }
      r = r + 1 + i;
      var a = p[o];
      0 != i ? (t["push"](8 | a), t["push"](i - 1)) : t["push"](a);
    }
    for (
      var c = h(32768 | n, 16), _ = "", l = 0, u = t["length"];
      l < u;
      l += 1
    )
      _ += h(t[l], 4);
    return c + _;
  };
  function _(e, t) {
    for (var n = [], r = 0, o = e["length"]; r < o; r += 1) n["push"](t(e[r]));
    return n;
  }
  function g(e, t) {
    e = (function c(e) {
      var t = 32767,
        n = (e = _(e, function (e) {
          return t < e ? t : e < -t ? -t : e;
        }))["length"],
        r = 0,
        o = [];
      while (r < n) {
        var i = 1,
          s = e[r],
          a = Math["abs"](s);
        while (1) {
          if (n <= r + i) break;
          if (e[r + i] !== s) break;
          if (127 <= a || 127 <= i) break;
          i += 1;
        }
        1 < i
          ? o["push"]((s < 0 ? 49152 : 32768) | (i << 7) | a)
          : o["push"](s),
          (r += i);
      }
      return o;
    })(e);
    var n,
      r = [],
      o = [];
    _(e, function (e) {
      var t = Math["ceil"](
        (function n(e, t) {
          return 0 === e ? 0 : Math["log"](e) / Math["log"](t);
        })(Math["abs"](e) + 1, 16)
      );
      0 === t && (t = 1),
        r["push"](h(t - 1, 2)),
        o["push"](h(Math["abs"](e), 4 * t));
    });
    var i = r["join"](""),
      s = o["join"]("");
    return (
      (n = t
        ? _(
            (function a(e, t) {
              var n = [];
              return (
                _(e, function (e) {
                  t(e) && n["push"](e);
                }),
                n
              );
            })(e, function (e) {
              return 0 != e && e >> 15 != 1;
            }),
            function (e) {
              return e < 0 ? "1" : "0";
            }
          )["join"]("")
        : ""),
      h(32768 | e["length"], 16) + i + s + n
    );
  }
  return (function (e) {
    for (
      var t = [], n = [], r = [], o = [], i = 0, s = e["length"];
      i < s;
      i += 1
    ) {
      var a = e[i],
        c = a["length"];
      t["push"](a[0]),
        n["push"](2 === c ? a[1] : a[2]),
        3 === c && (r["push"](a[1][0]), o["push"](a[1][1]));
    }
    var _ = f(t) + g(n, !1) + g(r, !0) + g(o, !0),
      l = _["length"];
    return (
      l % 6 != 0 && (_ += h(0, 6 - (l % 6))),
      (function u(e) {
        for (var t = "", n = e["length"] / 6, r = 0; r < n; r += 1)
          t +=
            "()*,-./0123456789:?@ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~"[
              "charAt"
            ](parseInt(e["slice"](6 * r, 6 * (r + 1)), 2));
        return t;
      })(_)
    );
  })(e);
}

function $_BHEo() {
  return $_HAl($_BIAy());
}

function w2(gt, challenge, seed, ckey, skey) {
  var p = {
    $_FGX: {
      $_FHp: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()",
      $_FIg: ".",
      $_FJm: 7274496,
      $_GAV: 9483264,
      $_GBW: 19220,
      $_GCY: 235,
      $_GDj: 24,
    },
    $_FHp: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()",
    $_FIg: ".",
    $_FJm: 7274496,
    $_GAV: 9483264,
    $_GBW: 19220,
    $_GCY: 235,
    $_GDj: 24,
    $_GEW: function (e) {
      for (var t = [], n = 0, r = e["length"]; n < r; n += 1)
        t["push"](e["charCodeAt"](n));
      return t;
    },
    $_GFv: function (e) {
      for (var t = "", n = 0, r = e["length"]; n < r; n += 1)
        t += String["fromCharCode"](e[n]);
      return t;
    },
    $_GGr: function (e) {
      var t =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()";
      return e < 0 || e >= t["length"] ? "." : t["charAt"](e);
    },
    $_GHZ: function (e) {
      return this["$_FHp"]["indexOf"](e);
    },
    $_GIs: function (e, t) {
      return (e >> t) & 1;
    },
    $_GJq: function (e, o) {
      var i = this;
      o || (o = i);
      for (
        var t = function (e, t) {
            for (var n = 0, r = 23; 0 <= r; r -= 1)
              1 === ((t >> r) & 1) && (n = (n << 1) + ((e >> r) & 1));
            return n;
          },
          n = "",
          r = "",
          s = e["length"],
          a = 0;
        a < s;
        a += 3
      ) {
        var c;
        if (a + 2 < s)
          (c = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2]),
            (n +=
              i["$_GGr"](t(c, 7274496)) +
              i["$_GGr"](t(c, 9483264)) +
              i["$_GGr"](t(c, 19220)) +
              i["$_GGr"](t(c, 235)));
        else {
          var _ = s % 3;
          2 == _
            ? ((c = (e[a] << 16) + (e[a + 1] << 8)),
              (n +=
                i["$_GGr"](t(c, 7274496)) +
                i["$_GGr"](t(c, 9483264)) +
                i["$_GGr"](t(c, 19220))),
              (r = "."))
            : 1 == _ &&
              ((c = e[a] << 16),
              (n += i["$_GGr"](t(c, 7274496)) + i["$_GGr"](t(c, 9483264))),
              (r = "." + "."));
        }
      }
      return {
        res: n,
        end: r,
      };
    },
    $_HAl: function (e) {
      var t = this["$_GJq"](this["$_GEW"](e));
      return t["res"] + t["end"];
    },
    $_HBh: function (e) {
      var t = this["$_GJq"](e);
      return t["res"] + t["end"];
    },
    $_HCe: function (e, i) {
      var s = this;
      i || (i = s);
      for (
        var t = function (e, t) {
            if (e < 0) return 0;
            for (var n = 5, r = 0, o = i["$_GDj"] - 1; 0 <= o; o -= 1)
              1 === s["$_GIs"](t, o) &&
                ((r += s["$_GIs"](e, n) << o), (n -= 1));
            return r;
          },
          n = e["length"],
          r = "",
          o = 0;
        o < n;
        o += 4
      ) {
        var a =
            t(s["$_GHZ"](e["charAt"](o)), 7274496) +
            t(s["$_GHZ"](e["charAt"](o + 1)), 9483264) +
            t(s["$_GHZ"](e["charAt"](o + 2)), 19220) +
            t(s["$_GHZ"](e["charAt"](o + 3)), 235),
          c = (a >> 16) & 255;
        if (((r += String["fromCharCode"](c)), e["charAt"](o + 2) !== ".")) {
          var _ = (a >> 8) & 255;
          if (((r += String["fromCharCode"](_)), e["charAt"](o + 3) !== ".")) {
            var l = 255 & a;
            r += String["fromCharCode"](l);
          }
        }
      }
      return r;
    },
    $_HDX: function (e) {
      var t = 4 - (e["length"] % 4);
      if (t < 4) for (var n = 0; n < t; n += 1) e += this["$_FIg"];
      return this["$_HCe"](e);
    },
    $_HEq: function (e) {
      return this["$_HDX"](e);
    },
  };
  var e = $_BHDt(),
    t = $_BHEo(),
    n = $_BHEo(),
    passtime = parseInt(Math.random() * 1000);
  function tt() {
    return (
      (function (e, t, n) {
        if (!t || !n) return e;
        var r,
          o = 0,
          i = e,
          s = t[0],
          a = t[2],
          c = t[4];
        while ((r = n["substr"](o, 2))) {
          o += 2;
          var _ = parseInt(r, 16),
            l = String["fromCharCode"](_),
            u = (s * _ * _ + a * _ + c) % e["length"];
          i = i["substr"](0, u) + l + i["substr"](u);
        }
        return i;
      })(e, ckey, skey) || -1
    );
  }

  var msg = {
    lang: "zh-cn",
    type: "fullpage",
    tt: tt(),
    light: "DIV_0",
    s: j(p["$_HAl"](t)),
    h: j(p["$_HAl"](n)),
    hh: j(n),
    hi: j($_BHDt()),
    vip_order: -1,
    ct: -1,
    ep: {
      v: "9.0.9",
      $_BBn: false,
      te: false,
      $_BCU: true,
      ven: "Google Inc. (Apple)",
      ren: "ANGLE (Apple, Apple M1, OpenGL 4.1 Metal - 76.3)",
    },
    passtime: passtime,
    rp: j(gt + challenge + passtime),
  };
  var w = "";
  var _ = $_BDg();
  ($_CEGn = (function l() {
    var t = ["bbOy"];
    return function (e) {
      t["push"](e["toString"]());
      var r = "";
      !(function o(e, t) {
        function n(e) {
          var t = 5381,
            n = e["length"],
            r = 0;
          while (n--) t = (t << 5) + t + e["charCodeAt"](r++);
          return (t &= ~(1 << 31));
        }
        100 < new Date()["getTime"]() - t["getTime"]() && (e = "qwe"),
          (msg["captcha_token"] = n(
            o["toString"]() + n(n["toString"]()) + n(e["toString"]())
          )),
          (r = JSON.stringify(msg));
      })(t["shift"](), new Date()),
        (w = p["$_HBh"](_["encrypt"](r, seed)));
    };
  })()),
    $_CEGn("");
  return w;
}

module.exports = { w2 };
