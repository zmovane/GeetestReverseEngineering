const { $_BDg, X } = require("./encrypt");

var f = {
  $_BIGk: [
    "A",
    "ARTICLE",
    "ASIDE",
    "AUDIO",
    "BASE",
    "BUTTON",
    "CANVAS",
    "CODE",
    "IFRAME",
    "IMG",
    "INPUT",
    "LABEL",
    "LINK",
    "NAV",
    "OBJECT",
    "OL",
    "PICTURE",
    "PRE",
    "SECTION",
    "SELECT",
    "SOURCE",
    "SPAN",
    "STYLE",
    "TABLE",
    "TEXTAREA",
    "VIDEO",
  ],
  $_BIHf: ["DIV", "P", "UL", "LI", "SCRIPT"],

  $_BIEj: function (e) {
    return e ? 1 : 0;
  },
  $_BIDM: 0,
  $_BIBS: -1,
  $_BIFS: function (e) {
    return void 0 === e;
  },
};

function $_BAIt(e) {
  var t = f["$_BIGk"]["concat"](f["$_BIHf"]);
  if (t["indexOf"]) return t["indexOf"](e);
  for (var n = 0, r = t["length"]; n < r; n += 1) if (t[n] === e) return n;
  return -1;
}

function $_BIAy() {
  function s(e) {
    if (e) {
      if (1 === e["nodeType"]) {
        var t = (e["nodeName"] || "")["toUpperCase"]();
        -1 < $_BAIt(t) && (i[t] ? (i[t] += 1) : (i[t] = 1));
      }
      for (var n = e["childNodes"], r = 0, o = n["length"]; r < o; r += 1)
        s(n[r]);
    }
  }
  var window = {};
  var e = window,
    t = e["screen"] || {},
    p = e["document"] || {},
    h = e["navigator"] || {},
    n = undefined; //p["documentElement"],
  // f = this,
  i = {};
  // s(p);
  var r = undefined; // n["textContent"] || n["innerText"];
  i["textLength"] = undefined; // r["length"];
  try {
    var o = n["innerHTML"];
    i["HTMLLength"] = o["length"];
  } catch (g) {}
  (i["documentMode"] = p["documentMode"] || p["compatMode"]),
    (i["browserLanguage"] = h["language"] || h["userLanguage"]),
    (i["browserLanguages"] = h["languages"] && h["languages"]["join"](",")),
    (i["systemLanguage"] = h["systemLanguage"]),
    (i["devicePixelRatio"] = e["devicePixelRatio"]),
    (i["colorDepth"] = t["colorDepth"]),
    (i["userAgent"] = h["userAgent"]),
    (i["cookieEnabled"] = f["$_BIEj"](h["cookieEnabled"])),
    (i["netEnabled"] = f["$_BIEj"](h["onLine"])),
    (i["innerWidth"] = e["innerWidth"]),
    (i["innerHeight"] = e["innerHeight"]);
  try {
    (i["outerWidth"] = e["outerWidth"]), (i["outerHeight"] = e["outerHeight"]);
  } catch (g) {
    (i["outerWidth"] = f["$_BIDM"]), (i["outerHeight"] = f["$_BIDM"]);
  }
  (i["screenWidth"] = t["width"]),
    (i["screenHeight"] = t["height"]),
    (i["screenAvailWidth"] = t["availWidth"]),
    (i["screenAvailHeight"] = t["availHeight"]),
    (i["screenLeft"] = t["left"] || e["screenLeft"]),
    (i["screenTop"] = t["top"] || e["screenTop"]),
    (i["screenAvailLeft"] = t["availLeft"]),
    (i["screenAvailTop"] = t["availTop"]);
  try {
    i["localStorageEnabled"] = f["$_BIEj"](e["localStorage"]);
  } catch (g) {
    i["localStorageEnabled"] = f["$_BIDM"];
  }
  try {
    i["sessionStorageEnabled"] = f["$_BIEj"](e["sessionStorage"]);
  } catch (g) {
    i["sessionStorageEnabled"] = f["$_BIDM"];
  }
  var y = /msie 6\.0/i["test"](h["userAgent"]);
  var b = /msie 7\.0/i["test"](h["userAgent"]);
  return (
    (i["indexedDBEnabled"] = f["$_BIEj"](e["indexedDB"])),
    (i["CPUClass"] = h["cpuClass"]),
    (i["platform"] = h["platform"]),
    (i["doNotTrack"] = f["$_BIEj"](h["doNotTrack"])),
    (i["timezone"] = new Date()["getTimezoneOffset"]() / 60),
    (i["canvas2DFP"] = (function () {
      var e = null; // p["createElement"]("canvas"),
      t = null; // e["getContext"] && e["getContext"]("2d");
      if (t) {
        var n = [];
        return (
          (e["width"] = 2e3),
          (e["height"] = 200),
          (e["style"]["display"] = "inline"),
          t["rect"](0, 0, 11, 11),
          t["rect"](3, 3, 6, 6),
          n["push"](
            "canvas winding:" +
              (!1 === t["isPointInPath"](5, 5, "evenodd") ? "yes" : "no")
          ),
          (t["textBaseline"] = "alphabetic"),
          (t["fillStyle"] = "#f60"),
          t["fillRect"](125, 1, 62, 20),
          (t["fillStyle"] = "#069"),
          (t["font"] = "11pt Arial"),
          t["fillText"]("Cwm fjordbank glyphs vext quiz, 😃", 2, 15),
          (t["fillStyle"] = "rgba(102, 204, 0, 0.7)"),
          (t["font"] = "18pt Arial"),
          t["fillText"]("Cwm fjordbank glyphs vext quiz, 😃", 4, 45),
          (t["globalCompositeOperation"] = "multiply"),
          (t["fillStyle"] = "rgb(255,0,255)"),
          t["beginPath"](),
          t["arc"](52, 50, 50, 0, 2 * Math["PI"], !0),
          t["closePath"](),
          t["fill"](),
          (t["fillStyle"] = "rgb(0,255,255)"),
          t["beginPath"](),
          t["arc"](100, 50, 50, 0, 2 * Math["PI"], !0),
          t["closePath"](),
          t["fill"](),
          (t["fillStyle"] = "rgb(255,255,0)"),
          t["beginPath"](),
          t["arc"](75, 100, 50, 0, 2 * Math["PI"], !0),
          t["closePath"](),
          t["fill"](),
          (t["fillStyle"] = "rgb(255,0,255)"),
          t["arc"](75, 75, 75, 0, 2 * Math["PI"], !0),
          t["arc"](75, 75, 25, 0, 2 * Math["PI"], !0),
          t["fill"]("evenodd"),
          n["push"]("canvas fp:" + e["toDataURL"]()),
          j(n["join"]("~"))
        );
      }
      return f["$_BIDM"];
    })()),
    (i["canvas3DFP"] = (function () {
      try {
        if (/\(i[^;]+;( U;)? CPU.+Mac OS X/["test"](h["userAgent"]))
          return f["$_BIDM"];
        var e = p["createElement"]("canvas"),
          t =
            e["getContext"] &&
            (e["getContext"]("webgl") || e["getContext"]("experimental-webgl"));
        if (t) {
          var r = [],
            o = t["createBuffer"]();
          t["bindBuffer"](t["ARRAY_BUFFER"], o);
          var i = new Float32Array([
            -0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0,
          ]);
          t["bufferData"](t["ARRAY_BUFFER"], i, t["STATIC_DRAW"]),
            (o["itemSize"] = 3),
            (o["numItems"] = 3);
          var s = t["createProgram"](),
            a = t["createShader"](t["VERTEX_SHADER"]);
          t["shaderSource"](
            a,
            "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
          ),
            t["compileShader"](a);
          var c = t["createShader"](t["FRAGMENT_SHADER"]);
          return (
            t["shaderSource"](
              c,
              "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"
            ),
            t["compileShader"](c),
            t["attachShader"](s, a),
            t["attachShader"](s, c),
            t["linkProgram"](s),
            t["useProgram"](s),
            (s["vertexPosAttrib"] = t["getAttribLocation"](s, "attrVertex")),
            (s["offsetUniform"] = t["getUniformLocation"](s, "uniformOffset")),
            t["enableVertexAttribArray"](s["vertexPosArray"]),
            t["vertexAttribPointer"](
              s["vertexPosAttrib"],
              o["itemSize"],
              t["FLOAT"],
              !1,
              0,
              0
            ),
            t["uniform2f"](s["offsetUniform"], 1, 1),
            t["drawArrays"](t["TRIANGLE_STRIP"], 0, o["numItems"]),
            null != t["canvas"] && r["push"](t["canvas"]["toDataURL"]()),
            r["push"](
              "extensions:" + t["getSupportedExtensions"]()["join"](";")
            ),
            r["push"](
              "webgl aliased line width range:" +
                n(t["getParameter"](t["ALIASED_LINE_WIDTH_RANGE"]))
            ),
            r["push"](
              "webgl aliased point size range:" +
                n(t["getParameter"](t["ALIASED_POINT_SIZE_RANGE"]))
            ),
            r["push"]("webgl alpha bits:" + t["getParameter"](t["ALPHA_BITS"])),
            r["push"](
              "webgl antialiasing:" +
                (t["getContextAttributes"]()["antialias"] ? "yes" : "no")
            ),
            r["push"]("webgl blue bits:" + t["getParameter"](t["BLUE_BITS"])),
            r["push"]("webgl depth bits:" + t["getParameter"](t["DEPTH_BITS"])),
            r["push"]("webgl green bits:" + t["getParameter"](t["GREEN_BITS"])),
            r["push"](
              "webgl max anisotropy:" +
                ((u =
                  (_ = t)["getExtension"]("EXT_texture_filter_anisotropic") ||
                  _["getExtension"]("WEBKIT_EXT_texture_filter_anisotropic") ||
                  _["getExtension"]("MOZ_EXT_texture_filter_anisotropic"))
                  ? (0 ===
                      (l = _["getParameter"](
                        u["MAX_TEXTURE_MAX_ANISOTROPY_EXT"]
                      )) && (l = 2),
                    l)
                  : null)
            ),
            r["push"](
              "webgl max combined texture image units:" +
                t["getParameter"](t["MAX_COMBINED_TEXTURE_IMAGE_UNITS"])
            ),
            r["push"](
              "webgl max cube map texture size:" +
                t["getParameter"](t["MAX_CUBE_MAP_TEXTURE_SIZE"])
            ),
            r["push"](
              "webgl max fragment uniform vectors:" +
                t["getParameter"](t["MAX_FRAGMENT_UNIFORM_VECTORS"])
            ),
            r["push"](
              "webgl max render buffer size:" +
                t["getParameter"](t["MAX_RENDERBUFFER_SIZE"])
            ),
            r["push"](
              "webgl max texture image units:" +
                t["getParameter"](t["MAX_TEXTURE_IMAGE_UNITS"])
            ),
            r["push"](
              "webgl max texture size:" +
                t["getParameter"](t["MAX_TEXTURE_SIZE"])
            ),
            r["push"](
              "webgl max varying vectors:" +
                t["getParameter"](t["MAX_VARYING_VECTORS"])
            ),
            r["push"](
              "webgl max vertex attribs:" +
                t["getParameter"](t["MAX_VERTEX_ATTRIBS"])
            ),
            r["push"](
              "webgl max vertex texture image units:" +
                t["getParameter"](t["MAX_VERTEX_TEXTURE_IMAGE_UNITS"])
            ),
            r["push"](
              "webgl max vertex uniform vectors:" +
                t["getParameter"](t["MAX_VERTEX_UNIFORM_VECTORS"])
            ),
            r["push"](
              "webgl max viewport dims:" +
                n(t["getParameter"](t["MAX_VIEWPORT_DIMS"]))
            ),
            r["push"]("webgl red bits:" + t["getParameter"](t["RED_BITS"])),
            r["push"]("webgl renderer:" + t["getParameter"](t["RENDERER"])),
            r["push"](
              "webgl shading language version:" +
                t["getParameter"](t["SHADING_LANGUAGE_VERSION"])
            ),
            r["push"](
              "webgl stencil bits:" + t["getParameter"](t["STENCIL_BITS"])
            ),
            r["push"]("webgl vendor:" + t["getParameter"](t["VENDOR"])),
            r["push"]("webgl version:" + t["getParameter"](t["VERSION"])),
            t["getShaderPrecisionFormat"]
              ? (r["push"](
                  "webgl vertex shader high float precision:" +
                    t["getShaderPrecisionFormat"](
                      t["VERTEX_SHADER"],
                      t["HIGH_FLOAT"]
                    )["precision"]
                ),
                r["push"](
                  "webgl vertex shader high float precision rangeMin:" +
                    t["getShaderPrecisionFormat"](
                      t["VERTEX_SHADER"],
                      t["HIGH_FLOAT"]
                    )["rangeMin"]
                ),
                r["push"](
                  "webgl vertex shader high float precision rangeMax:" +
                    t["getShaderPrecisionFormat"](
                      t["VERTEX_SHADER"],
                      t["HIGH_FLOAT"]
                    )["rangeMax"]
                ),
                r["push"](
                  "webgl vertex shader medium float precision:" +
                    t["getShaderPrecisionFormat"](
                      t["VERTEX_SHADER"],
                      t["MEDIUM_FLOAT"]
                    )["precision"]
                ),
                r["push"](
                  "webgl vertex shader medium float precision rangeMin:" +
                    t["getShaderPrecisionFormat"](
                      t["VERTEX_SHADER"],
                      t["MEDIUM_FLOAT"]
                    )["rangeMin"]
                ),
                r["push"](
                  "webgl vertex shader medium float precision rangeMax:" +
                    t["getShaderPrecisionFormat"](
                      t["VERTEX_SHADER"],
                      t["MEDIUM_FLOAT"]
                    )["rangeMax"]
                ),
                r["push"](
                  "webgl vertex shader low float precision:" +
                    t["getShaderPrecisionFormat"](
                      t["VERTEX_SHADER"],
                      t["LOW_FLOAT"]
                    )["precision"]
                ),
                r["push"](
                  "webgl vertex shader low float precision rangeMin:" +
                    t["getShaderPrecisionFormat"](
                      t["VERTEX_SHADER"],
                      t["LOW_FLOAT"]
                    )["rangeMin"]
                ),
                r["push"](
                  "webgl vertex shader low float precision rangeMax:" +
                    t["getShaderPrecisionFormat"](
                      t["VERTEX_SHADER"],
                      t["LOW_FLOAT"]
                    )["rangeMax"]
                ),
                r["push"](
                  "webgl fragment shader high float precision:" +
                    t["getShaderPrecisionFormat"](
                      t["FRAGMENT_SHADER"],
                      t["HIGH_FLOAT"]
                    )["precision"]
                ),
                r["push"](
                  "webgl fragment shader high float precision rangeMin:" +
                    t["getShaderPrecisionFormat"](
                      t["FRAGMENT_SHADER"],
                      t["HIGH_FLOAT"]
                    )["rangeMin"]
                ),
                r["push"](
                  "webgl fragment shader high float precision rangeMax:" +
                    t["getShaderPrecisionFormat"](
                      t["FRAGMENT_SHADER"],
                      t["HIGH_FLOAT"]
                    )["rangeMax"]
                ),
                r["push"](
                  "webgl fragment shader medium float precision:" +
                    t["getShaderPrecisionFormat"](
                      t["FRAGMENT_SHADER"],
                      t["MEDIUM_FLOAT"]
                    )["precision"]
                ),
                r["push"](
                  "webgl fragment shader medium float precision rangeMin:" +
                    t["getShaderPrecisionFormat"](
                      t["FRAGMENT_SHADER"],
                      t["MEDIUM_FLOAT"]
                    )["rangeMin"]
                ),
                r["push"](
                  "webgl fragment shader medium float precision rangeMax:" +
                    t["getShaderPrecisionFormat"](
                      t["FRAGMENT_SHADER"],
                      t["MEDIUM_FLOAT"]
                    )["rangeMax"]
                ),
                r["push"](
                  "webgl fragment shader low float precision:" +
                    t["getShaderPrecisionFormat"](
                      t["FRAGMENT_SHADER"],
                      t["LOW_FLOAT"]
                    )["precision"]
                ),
                r["push"](
                  "webgl fragment shader low float precision rangeMin:" +
                    t["getShaderPrecisionFormat"](
                      t["FRAGMENT_SHADER"],
                      t["LOW_FLOAT"]
                    )["rangeMin"]
                ),
                r["push"](
                  "webgl fragment shader low float precision rangeMax:" +
                    t["getShaderPrecisionFormat"](
                      t["FRAGMENT_SHADER"],
                      t["LOW_FLOAT"]
                    )["rangeMax"]
                ),
                r["push"](
                  "webgl vertex shader high int precision:" +
                    t["getShaderPrecisionFormat"](
                      t["VERTEX_SHADER"],
                      t["HIGH_INT"]
                    )["precision"]
                ),
                r["push"](
                  "webgl vertex shader high int precision rangeMin:" +
                    t["getShaderPrecisionFormat"](
                      t["VERTEX_SHADER"],
                      t["HIGH_INT"]
                    )["rangeMin"]
                ),
                r["push"](
                  "webgl vertex shader high int precision rangeMax:" +
                    t["getShaderPrecisionFormat"](
                      t["VERTEX_SHADER"],
                      t["HIGH_INT"]
                    )["rangeMax"]
                ),
                r["push"](
                  "webgl vertex shader medium int precision:" +
                    t["getShaderPrecisionFormat"](
                      t["VERTEX_SHADER"],
                      t["MEDIUM_INT"]
                    )["precision"]
                ),
                r["push"](
                  "webgl vertex shader medium int precision rangeMin:" +
                    t["getShaderPrecisionFormat"](
                      t["VERTEX_SHADER"],
                      t["MEDIUM_INT"]
                    )["rangeMin"]
                ),
                r["push"](
                  "webgl vertex shader medium int precision rangeMax:" +
                    t["getShaderPrecisionFormat"](
                      t["VERTEX_SHADER"],
                      t["MEDIUM_INT"]
                    )["rangeMax"]
                ),
                r["push"](
                  "webgl vertex shader low int precision:" +
                    t["getShaderPrecisionFormat"](
                      t["VERTEX_SHADER"],
                      t["LOW_INT"]
                    )["precision"]
                ),
                r["push"](
                  "webgl vertex shader low int precision rangeMin:" +
                    t["getShaderPrecisionFormat"](
                      t["VERTEX_SHADER"],
                      t["LOW_INT"]
                    )["rangeMin"]
                ),
                r["push"](
                  "webgl vertex shader low int precision rangeMax:" +
                    t["getShaderPrecisionFormat"](
                      t["VERTEX_SHADER"],
                      t["LOW_INT"]
                    )["rangeMax"]
                ),
                r["push"](
                  "webgl fragment shader high int precision:" +
                    t["getShaderPrecisionFormat"](
                      t["FRAGMENT_SHADER"],
                      t["HIGH_INT"]
                    )["precision"]
                ),
                r["push"](
                  "webgl fragment shader high int precision rangeMin:" +
                    t["getShaderPrecisionFormat"](
                      t["FRAGMENT_SHADER"],
                      t["HIGH_INT"]
                    )["rangeMin"]
                ),
                r["push"](
                  "webgl fragment shader high int precision rangeMax:" +
                    t["getShaderPrecisionFormat"](
                      t["FRAGMENT_SHADER"],
                      t["HIGH_INT"]
                    )["rangeMax"]
                ),
                r["push"](
                  "webgl fragment shader medium int precision:" +
                    t["getShaderPrecisionFormat"](
                      t["FRAGMENT_SHADER"],
                      t["MEDIUM_INT"]
                    )["precision"]
                ),
                r["push"](
                  "webgl fragment shader medium int precision rangeMin:" +
                    t["getShaderPrecisionFormat"](
                      t["FRAGMENT_SHADER"],
                      t["MEDIUM_INT"]
                    )["rangeMin"]
                ),
                r["push"](
                  "webgl fragment shader medium int precision rangeMax:" +
                    t["getShaderPrecisionFormat"](
                      t["FRAGMENT_SHADER"],
                      t["MEDIUM_INT"]
                    )["rangeMax"]
                ),
                r["push"](
                  "webgl fragment shader low int precision:" +
                    t["getShaderPrecisionFormat"](
                      t["FRAGMENT_SHADER"],
                      t["LOW_INT"]
                    )["precision"]
                ),
                r["push"](
                  "webgl fragment shader low int precision rangeMin:" +
                    t["getShaderPrecisionFormat"](
                      t["FRAGMENT_SHADER"],
                      t["LOW_INT"]
                    )["rangeMin"]
                ),
                r["push"](
                  "webgl fragment shader low int precision rangeMax:" +
                    t["getShaderPrecisionFormat"](
                      t["FRAGMENT_SHADER"],
                      t["LOW_INT"]
                    )["rangeMax"]
                ),
                j(r["join"]("~")))
              : j(r["join"]("~"))
          );
        }
        return f["$_BIDM"];
      } catch (g) {
        return f["$_BIDM"];
      }
      var _, l, u;
    })()),
    (i["plugins"] = (function () {
      if (!h["plugins"]) return f["$_BIBS"];
      for (
        var e = [],
          t = 0,
          n = 40 < h["plugins"]["length"] ? 40 : h["plugins"]["length"];
        t < n;
        t += 1
      ) {
        var r = h["plugins"][t];
        e["push"](r["filename"] && r["filename"]["replace"](/\s/g, ""));
      }
      return e["join"](",");
    })()),
    (i["maxTouchPoints"] = f["$_BIFS"](h["maxTouchPoints"])
      ? f["$_BIFS"](h["msMaxTouchPoints"])
        ? 0
        : h["msMaxTouchPoints"]
      : h["maxTouchPoints"]),
    (i["flashEnabled"] = f["$_BIFS"](e["swfobject"])
      ? f["$_BIBS"]
      : f["$_BIEj"](
          e["swfobject"]["hasFlashPlayerVersion"] &&
            e["swfobject"]["hasFlashPlayerVersion"]("9.0.0")
        )),
    (i["javaEnabled"] = (function () {
      try {
        return f["$_BIFS"](h["javaEnabled"])
          ? f["$_BIBS"]
          : f["$_BIEj"](h["javaEnabled"]());
      } catch (g) {
        return f["$_BIBS"];
      }
    })()),
    (i["hardwareConcurrency"] = h["hardwareConcurrency"]),
    (i["jsFonts"] =
      y || b || w
        ? ["monospace", "sans-serif", "serif"]["join"](",")
        : (function () {
            function t(e) {
              for (var t = !1, n = 0; n < l["length"]; n++)
                if (
                  (t =
                    e[n]["offsetWidth"] !== r[l[n]] ||
                    e[n]["offsetHeight"] !== i[l[n]])
                )
                  return t;
            }
            function h() {
              var e = O["createElement"]("span");
              return (
                (e["style"]["position"] = "absolute"),
                (e["style"]["left"] = "-9999px"),
                (e["style"]["fontSize"] = "72px"),
                (e["innerHTML"] = "mmmmmmmmmmlli"),
                e
              );
            }
            var l = ["monospace", "sans-serif", "serif"],
              u = [
                "Andale Mono",
                "Arial",
                "Arial Black",
                "Arial Hebrew",
                "Arial MT",
                "Arial Narrow",
                "Arial Rounded MT Bold",
                "Arial Unicode MS",
                "Bitstream Vera Sans Mono",
                "Book Antiqua",
                "Bookman Old Style",
                "Calibri",
                "Cambria",
                "Cambria Math",
                "Century",
                "Century Gothic",
                "Century Schoolbook",
                "Comic Sans",
                "Comic Sans MS",
                "Consolas",
                "Courier",
                "Courier New",
                "Garamond",
                "Geneva",
                "Georgia",
                "Helvetica",
                "Helvetica Neue",
                "Impact",
                "Lucida Bright",
                "Lucida Calligraphy",
                "Lucida Console",
                "Lucida Fax",
                "LUCIDA GRANDE",
                "Lucida Handwriting",
                "Lucida Sans",
                "Lucida Sans Typewriter",
                "Lucida Sans Unicode",
                "Microsoft Sans Serif",
                "Monaco",
                "Monotype Corsiva",
                "MS Gothic",
                "MS Outlook",
                "MS PGothic",
                "MS Reference Sans Serif",
                "MS Sans Serif",
                "MS Serif",
                "MYRIAD",
                "MYRIAD PRO",
                "Palatino",
                "Palatino Linotype",
                "Segoe Print",
                "Segoe Script",
                "Segoe UI",
                "Segoe UI Light",
                "Segoe UI Semibold",
                "Segoe UI Symbol",
                "Tahoma",
                "Times",
                "Times New Roman",
                "Times New Roman PS",
                "Trebuchet MS",
                "Verdana",
                "Wingdings",
                "Wingdings 2",
                "Wingdings 3",
              ],
              e = O["getElementsByTagName"]("body")[0];
            if (!e) return l["push"]("Aria1"), l["join"](",");
            var o = O["createElement"]("div"),
              p = O["createElement"]("div"),
              r = {},
              i = {},
              n = (function () {
                for (var e = [], t = 0, n = l["length"]; t < n; t++) {
                  var r = h();
                  (r["style"]["fontFamily"] = l[t]),
                    o["appendChild"](r),
                    e["push"](r);
                }
                return e;
              })();
            e["appendChild"](o);
            for (var s = 0, a = l["length"]; s < a; s++)
              (r[l[s]] = n[s]["offsetWidth"]), (i[l[s]] = n[s]["offsetHeight"]);
            var c = (function () {
              for (var e, t, n, r = {}, o = 0, i = u["length"]; o < i; o++) {
                for (var s = [], a = 0, c = l["length"]; a < c; a++) {
                  var _ =
                    ((e = u[o]),
                    (t = l[a]),
                    (n = void 0),
                    ((n = h())["style"]["fontFamily"] = "'" + e + "'," + t),
                    n);
                  p["appendChild"](_), s["push"](_);
                }
                r[u[o]] = s;
              }
              return r;
            })();
            e["appendChild"](p);
            for (var _ = [], f = 0, g = u["length"]; f < g; f++)
              t(c[u[f]]) && _["push"](u[f]["replace"](/\s/g, ""));
            var d = _["join"](",");
            return e["removeChild"](p), e["removeChild"](o), d;
          })()),
    (i["mediaDevices"] = f["$_BIBS"]),
    i
  );
}

function $_BHDt() {
  var r = $_BIAy();
  r["timestamp"] = new Date()["getTime"]();
  r["deviceorientation"] = -1;
  r["touchEvent"] = -1;
  r["performanceTiming"] = -1;
  r["internalip"] = -1;

  function $_BGx(e) {
    var t = [
      "textLength",
      "HTMLLength",
      "documentMode",
      "A",
      "ARTICLE",
      "ASIDE",
      "AUDIO",
      "BASE",
      "BUTTON",
      "CANVAS",
      "CODE",
      "IFRAME",
      "IMG",
      "INPUT",
      "LABEL",
      "LINK",
      "NAV",
      "OBJECT",
      "OL",
      "PICTURE",
      "PRE",
      "SECTION",
      "SELECT",
      "SOURCE",
      "SPAN",
      "STYLE",
      "TABLE",
      "TEXTAREA",
      "VIDEO",
      "screenLeft",
      "screenTop",
      "screenAvailLeft",
      "screenAvailTop",
      "innerWidth",
      "innerHeight",
      "outerWidth",
      "outerHeight",
      "browserLanguage",
      "browserLanguages",
      "systemLanguage",
      "devicePixelRatio",
      "colorDepth",
      "userAgent",
      "cookieEnabled",
      "netEnabled",
      "screenWidth",
      "screenHeight",
      "screenAvailWidth",
      "screenAvailHeight",
      "localStorageEnabled",
      "sessionStorageEnabled",
      "indexedDBEnabled",
      "CPUClass",
      "platform",
      "doNotTrack",
      "timezone",
      "canvas2DFP",
      "canvas3DFP",
      "plugins",
      "maxTouchPoints",
      "flashEnabled",
      "javaEnabled",
      "hardwareConcurrency",
      "jsFonts",
      "timestamp",
      "performanceTiming",
      "internalip",
      "mediaDevices",
      "DIV",
      "P",
      "UL",
      "LI",
      "SCRIPT",
      "deviceorientation",
      "touchEvent",
    ];
    if (t["map"]) return t["map"](e);
    for (var n = [], r = 0, o = t["length"]; r < o; r += 1)
      n[r] = e(t[r], r, this);
    return n;
  }

  var o = [];
  return (
    $_BGx(function (e) {
      var t = r[e];
      o["push"](typeof t === "undefined" ? -1 : t);
    }),
    o["join"]("!!")
  );
}

const o = (gt, challenge) => {
  return {
    aspect_radio: {
      slide: 103,
      click: 128,
      voice: 128,
      pencil: 128,
      beeline: 50,
    },
    i: $_BHDt(),
    beeline: "/static/js/beeline.1.0.1.js",
    cc: 8,
    challenge: challenge,
    click: "/static/js/click.3.0.2.js",
    fullpage: "/static/js/fullpage.9.0.9.js",
    geetest: "/static/js/geetest.6.0.9.js",
    gt: gt,
    new_captcha: undefined,
    offline: false,
    pencil: "/static/js/pencil.1.0.3.js",
    product: "popup",
    protocol: "https://",
    slide: "/static/js/slide.7.8.6.js",
    static_servers: ["static.geetest.com/", "dn-staticdown.qbox.me/"],
    type: "fullpage",
    voice: "/static/js/voice.1.2.0.js",
    width: "100%",
    ww: true,
  };
};

function $_GGr(e) {
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()";
  return e < 0 || e >= t["length"] ? "." : t["charAt"](e);
}

function $_GJq(e) {
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
          $_GGr(t(c, 7274496)) +
          $_GGr(t(c, 9483264)) +
          $_GGr(t(c, 19220)) +
          $_GGr(t(c, 235)));
    else {
      var _ = s % 3;
      2 == _
        ? ((c = (e[a] << 16) + (e[a + 1] << 8)),
          (n +=
            $_GGr(t(c, 7274496)) + $_GGr(t(c, 9483264)) + $_GGr(t(c, 19220))),
          (r = "."))
        : 1 == _ &&
          ((c = e[a] << 16),
          (n += $_GGr(t(c, 7274496)) + $_GGr(t(c, 9483264))),
          (r = "." + "."));
    }
  }
  return {
    res: n,
    end: r,
  };
}

function $_CCFP(s) {
  var t = new X()["encrypt"](s);
  while (!t || 256 !== t["length"]) t = new X()["encrypt"](s);
  return t;
}

function w(gt, challenge, seed) {
  var r = $_CCFP(seed);
  var encrypted = new $_BDg().encrypt1(JSON.stringify(o(gt, challenge)), seed);
  var { res, end } = $_GJq(encrypted);
  var i = res + end;
  return i + r;
}

module.exports = { w, $_BIAy, $_BDg, $_GJq, $_BHDt };
