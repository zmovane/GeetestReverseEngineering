const { $_BDg, $_BIAy, $_BHDt } = require("./fullpage.reversed");

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

function j(e) {
  function c(e, t) {
    return (e << t) | (e >>> (32 - t));
  }
  function call(e, t) {
    return (
      (o = 2147483648 & e),
      (i = 2147483648 & t),
      (s = (1073741823 & e) + (1073741823 & t)),
      (n = 1073741824 & e) & (r = 1073741824 & t)
        ? 2147483648 ^ s ^ o ^ i
        : n | r
        ? 1073741824 & s
          ? 3221225472 ^ s ^ o ^ i
          : 1073741824 ^ s ^ o ^ i
        : s ^ o ^ i
    );
  }

  function AA(e, t, n) {
    return (e & t) | (~e & n);
  }
  function BB(e, t, n) {
    return (e & n) | (t & ~n);
  }
  function CC(e, t, n) {
    return e ^ t ^ n;
  }
  function DD(e, t, n) {
    return t ^ (e | ~n);
  }
  function T(e, t, n, r, o, i, s) {
    return call(c((e = call(e, call(call(AA(t, n, r), o), s))), i), t);
  }
  function N(e, t, n, r, o, i, s) {
    return call(c((e = call(e, call(call(BB(t, n, r), o), s))), i), t);
  }
  function R(e, t, n, r, o, i, s) {
    return call(c((e = call(e, call(call(CC(t, n, r), o), s))), i), t);
  }
  function O(e, t, n, r, o, i, s) {
    return call(c((e = call(e, call(call(DD(t, n, r), o), s))), i), t);
  }

  function I(e) {
    var t,
      n = "",
      r = "";
    for (t = 0; t <= 3; t++)
      n += (r = "0" + ((e >>> (8 * t)) & 255)["toString"](16))["substr"](
        r["length"] - 2,
        2
      );
    return n;
  }
  var s, a, l, u, p, h, f, g, d, v;
  for (
    s = (function m(e) {
      var t,
        len = e["length"],
        r = len + 8,
        o = 16 * (1 + (r - (r % 64)) / 64),
        i = Array(o - 1),
        s = 0,
        a = 0;
      while (a < len)
        (s = (a % 4) * 8),
          (i[(t = (a - (a % 4)) / 4)] = i[t] | (e["charCodeAt"](a) << s)),
          a++;
      return (
        (s = (a % 4) * 8),
        (i[(t = (a - (a % 4)) / 4)] = i[t] | (128 << s)),
        (i[o - 2] = len << 3),
        (i[o - 1] = len >>> 29),
        i
      );
    })(
      (e = (function w(e) {
        e = e["replace"](/\r\n/g, "");
        for (var t = "", n = 0; n < e["length"]; n++) {
          var r = e["charCodeAt"](n);
          r < 128
            ? (t += String["fromCharCode"](r))
            : (127 < r && r < 2048
                ? (t += String["fromCharCode"]((r >> 6) | 192))
                : ((t += String["fromCharCode"]((r >> 12) | 224)),
                  (t += String["fromCharCode"](((r >> 6) & 63) | 128))),
              (t += String["fromCharCode"]((63 & r) | 128)));
        }
        return t;
      })(e))
    ),
      f = 1732584193,
      g = 4023233417,
      d = 2562383102,
      v = 271733878,
      a = 0;
    a < s["length"];
    a += 16
  )
    (g = O(
      (g = O(
        (g = O(
          (g = O(
            (g = R(
              (g = R(
                (g = R(
                  (g = R(
                    (g = N(
                      (g = N(
                        (g = N(
                          (g = N(
                            (g = T(
                              (g = T(
                                (g = T(
                                  (g = T(
                                    (u = g),
                                    (d = T(
                                      (p = d),
                                      (v = T(
                                        (h = v),
                                        (f = T(
                                          (l = f),
                                          g,
                                          d,
                                          v,
                                          s[a + 0],
                                          7,
                                          3614090360
                                        )),
                                        g,
                                        d,
                                        s[a + 1],
                                        12,
                                        3905402710
                                      )),
                                      f,
                                      g,
                                      s[a + 2],
                                      17,
                                      606105819
                                    )),
                                    v,
                                    f,
                                    s[a + 3],
                                    22,
                                    3250441966
                                  )),
                                  (d = T(
                                    d,
                                    (v = T(
                                      v,
                                      (f = T(
                                        f,
                                        g,
                                        d,
                                        v,
                                        s[a + 4],
                                        7,
                                        4118548399
                                      )),
                                      g,
                                      d,
                                      s[a + 5],
                                      12,
                                      1200080426
                                    )),
                                    f,
                                    g,
                                    s[a + 6],
                                    17,
                                    2821735955
                                  )),
                                  v,
                                  f,
                                  s[a + 7],
                                  22,
                                  4249261313
                                )),
                                (d = T(
                                  d,
                                  (v = T(
                                    v,
                                    (f = T(
                                      f,
                                      g,
                                      d,
                                      v,
                                      s[a + 8],
                                      7,
                                      1770035416
                                    )),
                                    g,
                                    d,
                                    s[a + 9],
                                    12,
                                    2336552879
                                  )),
                                  f,
                                  g,
                                  s[a + 10],
                                  17,
                                  4294925233
                                )),
                                v,
                                f,
                                s[a + 11],
                                22,
                                2304563134
                              )),
                              (d = T(
                                d,
                                (v = T(
                                  v,
                                  (f = T(f, g, d, v, s[a + 12], 7, 1804603682)),
                                  g,
                                  d,
                                  s[a + 13],
                                  12,
                                  4254626195
                                )),
                                f,
                                g,
                                s[a + 14],
                                17,
                                2792965006
                              )),
                              v,
                              f,
                              s[a + 15],
                              22,
                              1236535329
                            )),
                            (d = N(
                              d,
                              (v = N(
                                v,
                                (f = N(f, g, d, v, s[a + 1], 5, 4129170786)),
                                g,
                                d,
                                s[a + 6],
                                9,
                                3225465664
                              )),
                              f,
                              g,
                              s[a + 11],
                              14,
                              643717713
                            )),
                            v,
                            f,
                            s[a + 0],
                            20,
                            3921069994
                          )),
                          (d = N(
                            d,
                            (v = N(
                              v,
                              (f = N(f, g, d, v, s[a + 5], 5, 3593408605)),
                              g,
                              d,
                              s[a + 10],
                              9,
                              38016083
                            )),
                            f,
                            g,
                            s[a + 15],
                            14,
                            3634488961
                          )),
                          v,
                          f,
                          s[a + 4],
                          20,
                          3889429448
                        )),
                        (d = N(
                          d,
                          (v = N(
                            v,
                            (f = N(f, g, d, v, s[a + 9], 5, 568446438)),
                            g,
                            d,
                            s[a + 14],
                            9,
                            3275163606
                          )),
                          f,
                          g,
                          s[a + 3],
                          14,
                          4107603335
                        )),
                        v,
                        f,
                        s[a + 8],
                        20,
                        1163531501
                      )),
                      (d = N(
                        d,
                        (v = N(
                          v,
                          (f = N(f, g, d, v, s[a + 13], 5, 2850285829)),
                          g,
                          d,
                          s[a + 2],
                          9,
                          4243563512
                        )),
                        f,
                        g,
                        s[a + 7],
                        14,
                        1735328473
                      )),
                      v,
                      f,
                      s[a + 12],
                      20,
                      2368359562
                    )),
                    (d = R(
                      d,
                      (v = R(
                        v,
                        (f = R(f, g, d, v, s[a + 5], 4, 4294588738)),
                        g,
                        d,
                        s[a + 8],
                        11,
                        2272392833
                      )),
                      f,
                      g,
                      s[a + 11],
                      16,
                      1839030562
                    )),
                    v,
                    f,
                    s[a + 14],
                    23,
                    4259657740
                  )),
                  (d = R(
                    d,
                    (v = R(
                      v,
                      (f = R(f, g, d, v, s[a + 1], 4, 2763975236)),
                      g,
                      d,
                      s[a + 4],
                      11,
                      1272893353
                    )),
                    f,
                    g,
                    s[a + 7],
                    16,
                    4139469664
                  )),
                  v,
                  f,
                  s[a + 10],
                  23,
                  3200236656
                )),
                (d = R(
                  d,
                  (v = R(
                    v,
                    (f = R(f, g, d, v, s[a + 13], 4, 681279174)),
                    g,
                    d,
                    s[a + 0],
                    11,
                    3936430074
                  )),
                  f,
                  g,
                  s[a + 3],
                  16,
                  3572445317
                )),
                v,
                f,
                s[a + 6],
                23,
                76029189
              )),
              (d = R(
                d,
                (v = R(
                  v,
                  (f = R(f, g, d, v, s[a + 9], 4, 3654602809)),
                  g,
                  d,
                  s[a + 12],
                  11,
                  3873151461
                )),
                f,
                g,
                s[a + 15],
                16,
                530742520
              )),
              v,
              f,
              s[a + 2],
              23,
              3299628645
            )),
            (d = O(
              d,
              (v = O(
                v,
                (f = O(f, g, d, v, s[a + 0], 6, 4096336452)),
                g,
                d,
                s[a + 7],
                10,
                1126891415
              )),
              f,
              g,
              s[a + 14],
              15,
              2878612391
            )),
            v,
            f,
            s[a + 5],
            21,
            4237533241
          )),
          (d = O(
            d,
            (v = O(
              v,
              (f = O(f, g, d, v, s[a + 12], 6, 1700485571)),
              g,
              d,
              s[a + 3],
              10,
              2399980690
            )),
            f,
            g,
            s[a + 10],
            15,
            4293915773
          )),
          v,
          f,
          s[a + 1],
          21,
          2240044497
        )),
        (d = O(
          d,
          (v = O(
            v,
            (f = O(f, g, d, v, s[a + 8], 6, 1873313359)),
            g,
            d,
            s[a + 15],
            10,
            4264355552
          )),
          f,
          g,
          s[a + 6],
          15,
          2734768916
        )),
        v,
        f,
        s[a + 13],
        21,
        1309151649
      )),
      (d = O(
        d,
        (v = O(
          v,
          (f = O(f, g, d, v, s[a + 4], 6, 4149444226)),
          g,
          d,
          s[a + 11],
          10,
          3174756917
        )),
        f,
        g,
        s[a + 2],
        15,
        718787259
      )),
      v,
      f,
      s[a + 9],
      21,
      3951481745
    )),
      (f = call(f, l)),
      (g = call(g, u)),
      (d = call(d, p)),
      (v = call(v, h));
  return (I(f) + I(g) + I(d) + I(v))["toLowerCase"]();
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
