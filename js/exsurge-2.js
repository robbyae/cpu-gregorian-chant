!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define("exsurge", [], e)
    : "object" == typeof exports
    ? (exports.exsurge = e())
    : (t.exsurge = e());
})(this, function () {
  return (function (t) {
    function e(n) {
      if (i[n]) return i[n].exports;
      var s = (i[n] = { exports: {}, id: n, loaded: !1 });
      return t[n].call(s.exports, s, s.exports, e), (s.loaded = !0), s.exports;
    }
    var i = {};
    return (e.m = t), (e.c = i), (e.p = ""), e(0);
  })([
    function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = i(1);
      Object.keys(n).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return n[t];
            },
          });
      });
      var s = i(2);
      Object.keys(s).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return s[t];
            },
          });
      });
      var o = i(3);
      Object.keys(o).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return o[t];
            },
          });
      });
      var r = i(4);
      Object.keys(r).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return r[t];
            },
          });
      });
      var a = i(8);
      Object.keys(a).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return a[t];
            },
          });
      });
      var u = i(9);
      Object.keys(u).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return u[t];
            },
          });
      });
      var h = i(10);
      Object.keys(h).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return h[t];
            },
          });
      });
      var l = i(11);
      Object.keys(l).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return l[t];
            },
          });
      });
      var c = i(13);
      Object.keys(c).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return c[t];
            },
          });
      });
      var f = i(12);
      Object.keys(f).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return f[t];
            },
          });
      });
      var p = i(14);
      Object.keys(p).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return p[t];
            },
          });
      });
      var d = i(7);
      Object.keys(d).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return d[t];
            },
          });
      });
    },
    function (t, e) {
      "use strict";
      function i(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function n(t) {
        return t;
      }
      function s(t) {
        return d.ToDeviceIndependent(t, d.Centimeters);
      }
      function o(t) {
        return d.ToDeviceIndependent(t, d.Millimeters);
      }
      function r(t) {
        return d.ToDeviceIndependent(t, d.Inches);
      }
      function a(t) {
        return d.FromDeviceIndependent(t, d.Centimeters);
      }
      function u(t) {
        return d.FromDeviceIndependent(t, d.Millimeters);
      }
      function h(t) {
        return d.FromDeviceIndependent(t, d.Inches);
      }
      function l() {
        function t() {
          return Math.floor(65536 * (1 + Math.random()))
            .toString(16)
            .substring(1);
        }
        return t() + t();
      }
      function c(t) {
        return Object.entries(t)
          .map(function (t) {
            var e = f(t, 2),
              i = e[0],
              n = e[1];
            return i && n && "class" !== i ? i + ": " + n + ";" : "";
          })
          .join("");
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var f = (function () {
          function t(t, e) {
            var i = [],
              n = !0,
              s = !1,
              o = void 0;
            try {
              for (
                var r, a = t[Symbol.iterator]();
                !(n = (r = a.next()).done) &&
                (i.push(r.value), !e || i.length !== e);
                n = !0
              );
            } catch (t) {
              (s = !0), (o = t);
            } finally {
              try {
                !n && a.return && a.return();
              } finally {
                if (s) throw o;
              }
            }
            return i;
          }
          return function (e, i) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return t(e, i);
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          };
        })(),
        p = (function () {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        })();
      (e.DeviceIndependent = n),
        (e.Centimeters = s),
        (e.Millimeters = o),
        (e.Inches = r),
        (e.ToCentimeters = a),
        (e.ToMillimeters = u),
        (e.ToInches = h),
        (e.generateRandomGuid = l),
        (e.getCssForProperties = c);
      var d = (e.Units = {
          DeviceIndepenedent: 0,
          Centimeters: 1,
          Millimeters: 2,
          Inches: 3,
          DIU_PER_INCH: 96,
          DIU_PER_CENTIMETER: 96 / 2.54,
          ToDeviceIndependent: function (t, e) {
            switch (e) {
              case s:
                return t * d.DIU_PER_CENTIMETER;
              case o:
                return (t * d.DIU_PER_CENTIMETER) / 10;
              case r:
                return t * d.DIU_PER_INCH;
              default:
                return t;
            }
          },
          FromDeviceIndependent: function (t, e) {
            switch (e) {
              case s:
                return t / d.DIU_PER_CENTIMETER;
              case o:
                return (t / d.DIU_PER_CENTIMETER) * 10;
              case r:
                return t / d.DIU_PER_INCH;
              default:
                return t;
            }
          },
          StringToUnitsType: function (t) {
            switch (t.ToLower()) {
              case "in":
              case "inches":
                return d.Inches;
              case "cm":
              case "centimeters":
                return d.Centimeters;
              case "mm":
              case "millimeters":
                return d.Millimeters;
              case "di":
              case "device-independent":
                return d.DeviceIndepenedent;
              default:
                return d.DeviceIndepenedent;
            }
          },
          UnitsTypeToString: function (t) {
            switch (t) {
              case d.Inches:
                return "in";
              case d.Centimeters:
                return "cm";
              case d.Millimeters:
                return "mm";
              case d.DeviceIndepenedent:
                return "device-independent";
              default:
                return "device-independent";
            }
          },
        }),
        g = (e.Point = (function () {
          function t(e, n) {
            i(this, t),
              (this.x = "undefined" != typeof e ? e : 0),
              (this.y = "undefined" != typeof n ? n : 0);
          }
          return (
            p(t, [
              {
                key: "clone",
                value: function () {
                  return new t(this.x, this.y);
                },
              },
              {
                key: "equals",
                value: function (t) {
                  return this.x === t.x && this.y === t.y;
                },
              },
            ]),
            t
          );
        })()),
        y =
          ((e.Rect = (function () {
            function t(e, n, s, o) {
              i(this, t),
                (this.x = "undefined" != typeof e ? e : 1 / 0),
                (this.y = "undefined" != typeof n ? n : 1 / 0),
                (this.width = "undefined" != typeof s ? s : -(1 / 0)),
                (this.height = "undefined" != typeof o ? o : -(1 / 0));
            }
            return (
              p(t, [
                {
                  key: "clone",
                  value: function () {
                    return new t(this.x, this.y, this.width, this.height);
                  },
                },
                {
                  key: "isEmpty",
                  value: function () {
                    return (
                      this.x === 1 / 0 &&
                      this.y === 1 / 0 &&
                      this.width === -(1 / 0) &&
                      this.height === -(1 / 0)
                    );
                  },
                },
                {
                  key: "right",
                  value: function () {
                    return this.x + this.width;
                  },
                },
                {
                  key: "bottom",
                  value: function () {
                    return this.y + this.height;
                  },
                },
                {
                  key: "equals",
                  value: function (t) {
                    return (
                      this.x === t.x &&
                      this.y === t.y &&
                      this.width === t.width &&
                      this.height === t.height
                    );
                  },
                },
                {
                  key: "contains",
                  value: function (t) {
                    return t instanceof g
                      ? t.x >= this.x &&
                          t.x <= this.x + this.width &&
                          t.y >= this.y &&
                          t.y <= this.y + this.height
                      : this.x <= t.x &&
                          this.x + this.width >= t.x + t.width &&
                          this.y <= t.y &&
                          this.y + this.height >= t.y + t.height;
                  },
                },
                {
                  key: "union",
                  value: function (t) {
                    var e = Math.max(this.x + this.width, t.x + t.width),
                      i = Math.max(this.y + this.height, t.y + t.height);
                    (this.x = Math.min(this.x, t.x)),
                      (this.y = Math.min(this.y, t.y)),
                      (this.width = e - this.x),
                      (this.height = i - this.y);
                  },
                },
              ]),
              t
            );
          })()),
          (e.Margins = (function () {
            function t(e, n, s, o) {
              i(this, t),
                (this.left = "undefined" != typeof e ? e : 0),
                (this.top = "undefined" != typeof n ? n : 0),
                (this.right = "undefined" != typeof s ? s : 0),
                (this.bottom = "undefined" != typeof o ? o : 0);
            }
            return (
              p(t, [
                {
                  key: "clone",
                  value: function () {
                    return new t(this.left, this.top, this.right, this.bottom);
                  },
                },
                {
                  key: "equals",
                  value: function (t) {
                    return (
                      this.left === t.left &&
                      this.top === t.top &&
                      this.right === t.right &&
                      this.bottom === t.bottom
                    );
                  },
                },
              ]),
              t
            );
          })()),
          (e.Size = (function () {
            function t(e, n) {
              i(this, t),
                (this.width = "undefined" != typeof e ? e : 0),
                (this.height = "undefined" != typeof n ? n : 0);
            }
            return (
              p(t, [
                {
                  key: "clone",
                  value: function () {
                    return new t(this.width, this.height);
                  },
                },
                {
                  key: "equals",
                  value: function (t) {
                    return this.width === t.width && this.height === t.height;
                  },
                },
              ]),
              t
            );
          })()),
          (e.Step = {
            Do: 0,
            Du: 1,
            Re: 2,
            Me: 3,
            Mi: 4,
            Fa: 5,
            Fu: 6,
            So: 7,
            La: 9,
            Te: 10,
            Ti: 11,
          })),
        v = [0, 0, 1, 1, 2, 3, 3, 4, 4, 5, 6, 6],
        m = [y.Do, y.Re, y.Mi, y.Fa, y.So, y.La, y.Ti];
      e.Pitch = (function () {
        function t(e, n) {
          i(this, t),
            "undefined" == typeof n && ((n = Math.floor(e / 12)), (e %= 12)),
            (this.step = e),
            (this.octave = n);
        }
        return (
          p(
            t,
            [
              {
                key: "toInt",
                value: function () {
                  return 12 * this.octave + this.step;
                },
              },
              {
                key: "transpose",
                value: function (e) {
                  return new t(this.toInt() + e);
                },
              },
              {
                key: "isHigherThan",
                value: function (t) {
                  return this.toInt() > t.toInt();
                },
              },
              {
                key: "isLowerThan",
                value: function (t) {
                  return this.toInt() < t.toInt();
                },
              },
              {
                key: "equals",
                value: function (t) {
                  return this.toInt() === t.toInt();
                },
              },
            ],
            [
              {
                key: "stepToStaffOffset",
                value: function (t) {
                  return v[t];
                },
              },
              {
                key: "staffOffsetToStep",
                value: function (t) {
                  for (; t < 0; ) t = m.length + t;
                  return m[t % m.length];
                },
              },
            ]
          ),
          t
        );
      })();
    },
    function (t, e) {
      "use strict";
      function i(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      }
      function n(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      function s(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = (function () {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        })(),
        r = (e.Language = (function () {
          function t(e) {
            s(this, t),
              (this.name = "undefined" != typeof e ? e : "<unknown>"),
              (this.centerNeume = !1);
          }
          return (
            o(t, [
              {
                key: "syllabify",
                value: function (t) {
                  var e = [];
                  if ("undefined" == typeof t || "" === t) return e;
                  for (
                    var i = t.split(/[\s]+/), n = 0, s = i.length;
                    n < s;
                    n++
                  )
                    e.push(this.syllabifyWord(i[n]));
                  return e;
                },
              },
            ]),
            t
          );
        })()),
        a = (e.English = (function (t) {
          function e() {
            s(this, e);
            var t = i(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(this, "English")
            );
            return (t.centerNeume = !0), t;
          }
          return (
            n(e, t),
            o(e, [
              {
                key: "findVowelSegment",
                value: function (t, e) {
                  var i =
                      /[a-z\u0300-\u0311äëïöüÿáéíóúýàèìòùỳāēīōūȳăĕĭŏŭæœ‿]+/i,
                    n = i.exec(t.slice(e));
                  return n
                    ? {
                        found: !0,
                        startIndex: e + n.index,
                        length: n[0].length,
                      }
                    : { found: !1, startIndex: -1, length: -1 };
                },
              },
            ]),
            e
          );
        })(r)),
        u = (e.Latin = (function (t) {
          function e() {
            s(this, e);
            var t = i(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(this, "Latin")
            );
            (t.diphthongs = ["ae", "au", "oe", "aé", "áu", "oé"]),
              (t.possibleDiphthongs = t.diphthongs.concat([
                "ei",
                "eu",
                "ui",
                "éi",
                "éu",
                "úi",
              ])),
              (t.regexVowel =
                /(i|(?:[qg]|^)u)?([eé][iu]|[uú]i|[ao][eé]|[aá]u|[aeiouáéíóúäëïöüāēīōūăĕĭŏŭåe̊o̊ůæœǽyýÿ])/i);
            var n = new Object();
            return (
              (n.huius = ["hui", "us"]),
              (n.cuius = ["cui", "us"]),
              (n.huic = ["huic"]),
              (n.cui = ["cui"]),
              (n.hui = ["hui"]),
              (n.euge = ["eu", "ge"]),
              (n.seu = ["seu"]),
              (t.vowels = [
                "a",
                "e",
                "i",
                "o",
                "u",
                "á",
                "é",
                "í",
                "ó",
                "ú",
                "ä",
                "ë",
                "ï",
                "ö",
                "ü",
                "ā",
                "ē",
                "ī",
                "ō",
                "ū",
                "ă",
                "ĕ",
                "ĭ",
                "ŏ",
                "ŭ",
                "å",
                "e̊",
                "o̊",
                "ů",
                "æ",
                "œ",
                "ǽ",
                "y",
                "ý",
                "ÿ",
              ]),
              (t.vowelsThatMightBeConsonants = ["i", "u"]),
              (t.muteConsonantsAndF = ["b", "c", "d", "g", "p", "t", "f"]),
              (t.liquidConsonants = ["l", "r"]),
              t
            );
          }
          return (
            n(e, t),
            o(e, [
              {
                key: "isVowel",
                value: function (t) {
                  for (var e = 0, i = this.vowels.length; e < i; e++)
                    if (this.vowels[e] === t) return !0;
                  return !1;
                },
              },
              {
                key: "isVowelThatMightBeConsonant",
                value: function (t) {
                  for (
                    var e = 0, i = this.vowelsThatMightBeConsonants.length;
                    e < i;
                    e++
                  )
                    if (this.vowelsThatMightBeConsonants[e] === t) return !0;
                  return !1;
                },
              },
              {
                key: "isVowelActingAsConsonant",
                value: function (t) {
                  return (
                    this.isVowelThatMightBeConsonant(t[0]) && this.isVowel(t[1])
                  );
                },
              },
              {
                key: "isMuteConsonantOrF",
                value: function (t) {
                  for (
                    var e = 0, i = this.muteConsonantsAndF.length;
                    e < i;
                    e++
                  )
                    if (this.muteConsonantsAndF[e] === t) return !0;
                  return !1;
                },
              },
              {
                key: "isLiquidConsonant",
                value: function (t) {
                  for (var e = 0, i = this.liquidConsonants.length; e < i; e++)
                    if (this.liquidConsonants[e] === t) return !0;
                  return !1;
                },
              },
              {
                key: "isDiphthong",
                value: function (t) {
                  for (var e = 0, i = this.diphthongs.length; e < i; e++)
                    if (this.diphthongs[e] === t) return !0;
                  return !1;
                },
              },
              {
                key: "isPossibleDiphthong",
                value: function (t) {
                  for (
                    var e = 0, i = this.possibleDiphthongs.length;
                    e < i;
                    e++
                  )
                    if (this.possibleDiphthongs[e] === t) return !0;
                  return !1;
                },
              },
              {
                key: "syllabifyWord",
                value: function (t) {
                  for (
                    var e,
                      i,
                      n,
                      s = [],
                      o = !1,
                      r = !1,
                      a = t.toLowerCase(),
                      u = 0,
                      h = function (e) {
                        o && (s.push(t.substr(u, e)), (u += e)), (o = !1);
                      },
                      l = 0,
                      c = a.length;
                    l < c;
                    l++
                  ) {
                    (e = a[l]), (i = "*"), (n = l + 1 < c), n && (i = a[l + 1]);
                    var f = this.isVowel(e);
                    "i" === e &&
                      (0 === l && n && this.isVowel(i)
                        ? (f = !1)
                        : r && n && this.isVowel(i) && (f = !1)),
                      "-" === e
                        ? ((o = !0), (r = !1), h(l - u), u++)
                        : f
                        ? ((o = !0),
                          r &&
                            !this.isDiphthong(a[l - 1] + "" + e) &&
                            (h(l - u), (o = !0)),
                          (r = !0))
                        : n &&
                          (("q" === e && "u" === i) ||
                          ("h" === i && ("c" === e || "p" === e || "t" === e))
                            ? (h(l - u), l++)
                            : r && this.isVowel(i)
                            ? h(l - u)
                            : this.isMuteConsonantOrF(e) &&
                              this.isLiquidConsonant(i)
                            ? h(l - u)
                            : o && h(l + 1 - u),
                          (r = !1));
                  }
                  return (
                    o
                      ? s.push(t.substr(u))
                      : u > 0 && (s[s.length - 1] += t.substr(u)),
                    s
                  );
                },
              },
              {
                key: "findVowelSegment",
                value: function (t, e) {
                  var i = this.regexVowel.exec(t.slice(e));
                  return i
                    ? (i[1] && (i.index += i[1].length),
                      {
                        found: !0,
                        startIndex: e + i.index,
                        length: i[2].length,
                      })
                    : { found: !1, startIndex: -1, length: -1 };
                },
              },
            ]),
            e
          );
        })(r)),
        h = (e.Spanish = (function (t) {
          function e() {
            s(this, e);
            var t = i(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(this, "Spanish")
            );
            return (
              (t.vowels = [
                "a",
                "e",
                "i",
                "o",
                "u",
                "y",
                "á",
                "é",
                "í",
                "ó",
                "ú",
                "ü",
              ]),
              (t.weakVowels = ["i", "u", "ü", "y"]),
              (t.strongVowels = ["a", "e", "o", "á", "é", "í", "ó", "ú"]),
              (t.diphthongs = [
                "ai",
                "ei",
                "oi",
                "ui",
                "ia",
                "ie",
                "io",
                "iu",
                "au",
                "eu",
                "ou",
                "ua",
                "ue",
                "uo",
                "ái",
                "éi",
                "ói",
                "úi",
                "iá",
                "ié",
                "ió",
                "iú",
                "áu",
                "éu",
                "óu",
                "uá",
                "ué",
                "uó",
                "üe",
                "üi",
              ]),
              (t.uDiphthongExceptions = [
                "gue",
                "gui",
                "qua",
                "que",
                "qui",
                "quo",
              ]),
              t
            );
          }
          return (
            n(e, t),
            o(e, [
              {
                key: "isVowel",
                value: function (t) {
                  for (var e = 0, i = this.vowels.length; e < i; e++)
                    if (this.vowels[e] === t) return !0;
                  return !1;
                },
              },
              {
                key: "isWeakVowel",
                value: function (t) {
                  for (var e = 0, i = this.weakVowels.length; e < i; e++)
                    if (this.weakVowels[e] === t) return !0;
                  return !1;
                },
              },
              {
                key: "isStrongVowel",
                value: function (t) {
                  for (var e = 0, i = this.strongVowels.length; e < i; e++)
                    if (this.strongVowels[e] === t) return !0;
                  return !1;
                },
              },
              {
                key: "isDiphthong",
                value: function (t) {
                  for (var e = 0, i = this.diphthongs.length; e < i; e++)
                    if (this.diphthongs[e] === t) return !0;
                  return !1;
                },
              },
              {
                key: "createSyllable",
                value: function (t) {
                  return t;
                },
              },
              {
                key: "syllabifyWord",
                value: function (t) {
                  for (
                    var e = [], i = !1, n = !1, s = !1, o = 0, r = 0;
                    r < t.length;
                    r++
                  ) {
                    var a = t[r].toLowerCase();
                    if (this.isVowel(a)) {
                      i = !0;
                      var u = this.isStrongVowel(a);
                      n &&
                        u &&
                        s &&
                        (e.push(this.createSyllable(t.substr(o, r - o))),
                        (o = r)),
                        (n = !0),
                        (s = u);
                    } else {
                      if (i) {
                        if ("-" === t[r])
                          e.push(this.createSyllable(t.substr(o, r - o))),
                            (o = ++r);
                        else {
                          for (
                            var h, l = 1, c = r + 1;
                            c < t.length && !this.isVowel(t[c]);
                            c++
                          )
                            l++;
                          1 === l
                            ? (e.push(this.createSyllable(t.substr(o, r - o))),
                              (o = r))
                            : 2 === l
                            ? ((h = t[r + 1].toLowerCase()),
                              "l" === h || "r" === h || ("c" === a && "h" === h)
                                ? (e.push(
                                    this.createSyllable(t.substr(o, r - o))
                                  ),
                                  (o = r++))
                                : (e.push(
                                    this.createSyllable(t.substr(o, ++r - o))
                                  ),
                                  (o = r)))
                            : 3 === l
                            ? ((h = t[r + 1].toLowerCase()),
                              "s" === h
                                ? ((r += 2),
                                  e.push(
                                    this.createSyllable(t.substr(o, r - o))
                                  ))
                                : e.push(
                                    this.createSyllable(t.substr(o, ++r - o))
                                  ),
                              (o = r))
                            : 4 === l &&
                              (e.push(
                                this.createSyllable(t.substr(o, r - o + 2))
                              ),
                              (o = r + 2),
                              (r += 3));
                        }
                        i = !1;
                      } else;
                      n = !1;
                    }
                  }
                  return (
                    i
                      ? e.push(t.substr(o))
                      : o > 0
                      ? (e[e.length - 1] += t.substr(o))
                      : 0 === e.length && e.push(this.createSyllable(t)),
                    e
                  );
                },
              },
              {
                key: "findVowelSegment",
                value: function (t, e) {
                  var i,
                    n,
                    s,
                    o = t.toLowerCase();
                  for (i = 0, n = this.diphthongs.length; i < n; i++) {
                    var r = this.diphthongs[i];
                    if (((s = o.indexOf(r, e)), s >= 0)) {
                      if ("u" === r[0] && s > 0)
                        for (
                          var a = t.substr(s - 1, 3).toLowerCase(),
                            u = 0,
                            h = this.uDiphthongExceptions.length;
                          i < h;
                          u++
                        )
                          if (a === this.uDiphthongExceptions[u])
                            return this.findVowelSegment(t, s + 1);
                      return { found: !0, startIndex: s, length: r.length };
                    }
                  }
                  for (i = 0, n = this.vowels.length; i < n; i++)
                    if (((s = o.indexOf(this.vowels[i], e)), s >= 0))
                      return { found: !0, startIndex: s, length: 1 };
                  return { found: !1, startIndex: -1, length: -1 };
                },
              },
            ]),
            e
          );
        })(r));
      e.language = { english: new a(), latin: new u(), spanish: new h() };
    },
    function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      e.Glyphs = {
        None: {
          paths: [{ type: "positive", data: "" }],
          bounds: { x: 0, y: 0, width: 0, height: 0 },
          origin: { x: 0, y: 0 },
          align: "left",
        },
        AcuteAccent: {
          paths: [
            {
              type: "positive",
              data: "M4 0C-.614.52-.614.52-.803-3.182l60.768-108.422c4.52-7.182 10.543-13.67 18.075-13.67 5.27 0 14.31 1.264 23.346 7.793 7.53 5.223 8.803 11.752 8.803 16.975 0 3.917-.52 11.1-8.05 17.628L4 0z",
            },
          ],
          bounds: { x: 0, y: 0, width: 0, height: 125.794 },
          origin: { x: 0.803, y: 125.274 },
          align: "left",
        },
        GraveAccent: {
          paths: [
            {
              type: "positive",
              data: "M105.386.26C110 .78 110 .78 110.189-2.922l-60.768-108.422c-4.52-7.182-10.543-13.67-18.075-13.67-5.27 0-14.31 1.264-23.346 7.793-7.53 5.223-8.803 11.752-8.803 16.975 0 3.917.52 11.1 8.05 17.628L105.386.26z",
            },
          ],
          bounds: { x: 0, y: 0, width: 0, height: 125.794 },
          origin: { x: 0, y: 125.274 },
          align: "left",
        },
        Circle: {
          paths: [
            {
              type: "positive",
              data: "M0 -50A50 50 0 0 0 100 -50 50 50 0 0 0 0 -50M10 -50A40 40 0 0 1 90 -50 40 40 0 0 1 10 -50",
            },
          ],
          bounds: { x: 0, y: 0, width: 100, height: 100 },
          origin: { x: -50, y: 100 },
        },
        Semicircle: {
          paths: [
            {
              type: "positive",
              data: "M0 -50A50 50 0 0 0 100 -50 5 5 0 0 0 90 -50 40 40 0 0 1 10 -50 5 5 0 0 0 0 -50",
            },
          ],
          bounds: { x: 0, y: 0, width: 100, height: 55 },
          origin: { x: -50, y: 50 },
        },
        ReversedSemicircle: {
          paths: [
            {
              type: "positive",
              data: "M0 0A50 50 0 0 1 100 0 5 5 0 0 1 90 0 40 40 0 0 0 10 0 5 5 0 0 1 0 0",
            },
          ],
          bounds: { x: 0, y: 0, width: 100, height: 55 },
          origin: { x: -50, y: 50 },
        },
        Stropha: {
          paths: [
            {
              type: "positive",
              data: "M1.22-73.438c4.165 13.02 12.238 27.084 24.217 42.188L49.657 0 34.812 27.344C18.666 55.47-.084 72.396-21.438 78.124c4.687-3.645 7.03-8.593 7.03-14.843 0-8.853-4.947-20.572-14.843-35.155L-48 0 1.22-73.438z",
            },
          ],
          bounds: { x: 0, y: 0, width: 97.657, height: 151.562 },
          origin: { x: 48, y: 73.438 },
          align: "left",
        },
        BeginningAscLiquescent: {
          paths: [
            {
              type: "positive",
              data: "M-50 43.688V-61c4.167 7.292 12.76 10.938 25.78 10.938 9.376 0 20.053-1.563 32.032-4.688C31.773-60.48 45.833-71.677 50-88.344v117.97C43.75 42.645 32.812 51.5 17.187 56.186-.52 61.398-15.886 64-28.906 64-42.97 64-50 57.23-50 43.687z",
            },
          ],
          bounds: { x: 0, y: 0, width: 100, height: 152.344 },
          origin: { x: 50, y: 88.344 },
          align: "left",
        },
        BeginningDesLiquescent: {
          paths: [
            {
              type: "positive",
              data: "M-50-56.03c0-13.022 7.03-19.532 21.094-19.532 13.02 0 28.385 2.604 46.093 7.812C32.813-63.583 43.75-54.73 50-41.187V76C45.833 59.854 31.77 48.656 7.812 42.406c-11.98-3.125-22.656-4.687-32.03-4.687-13.022 0-21.615 3.905-25.782 11.718v-105.47z",
            },
          ],
          bounds: { x: 0, y: 0, width: 100, height: 151.562 },
          origin: { x: 50, y: 75.562 },
          align: "left",
        },
        CustosDescLong: {
          paths: [
            {
              type: "positive",
              data: "M39.063 273.472c5.73.52 7.29-6.25 4.687-20.312V-65.59c-13.542 2.083-24.22 5.468-32.03 10.156C3.905-50.226 0-43.714 0-35.904V71.91c5.73-5.21 10.677-8.594 14.844-10.157 5.73-1.562 12.24-2.343 19.53-2.343v196.875c0 11.458 1.563 17.187 4.688 17.187",
            },
          ],
          bounds: { x: 0, y: 0, width: 46.353, height: 339.582 },
          origin: { x: 0, y: 65.59 },
          align: "left",
        },
        CustosDescShort: {
          paths: [
            {
              type: "positive",
              data: "M34.375 191.923c0 8.333 1.563 12.24 4.688 11.72 3.125-.522 4.687-7.033 4.687-19.533v-250c-13.542 2.084-24.22 5.47-32.03 10.157C3.905-50.525 0-44.015 0-36.203V71.61c5.73-5.208 10.677-8.593 14.844-10.156 5.73-1.562 12.24-2.344 19.53-2.344v132.813z",
            },
          ],
          bounds: { x: 0, y: 0, width: 43.75, height: 270.053 },
          origin: { x: 0, y: 65.89 },
          align: "left",
        },
        CustosLong: {
          paths: [
            {
              type: "positive",
              data: "M39.063-269.562c5.73-.52 7.29 6.25 4.687 20.312V69.5c-13.542-2.083-24.22-5.47-32.03-10.156C3.905 54.134 0 47.624 0 39.812V-68c5.73 5.208 10.677 8.594 14.844 10.156 5.73 1.563 12.24 2.344 19.53 2.344v-196.875c0-11.458 1.563-17.187 4.688-17.187z",
            },
          ],
          bounds: { x: 0, y: 0, width: 46.353, height: 339.582 },
          origin: { x: 0, y: 270.082 },
          align: "left",
        },
        CustosShort: {
          paths: [
            {
              type: "positive",
              data: "M34.375-188.125c0-8.333 1.563-12.24 4.688-11.72 3.125.522 4.687 7.033 4.687 19.532v250c-13.542-2.083-24.22-5.468-32.03-10.156C3.905 54.324 0 47.813 0 40V-67.813c5.73 5.21 10.677 8.594 14.844 10.157 5.73 1.562 12.24 2.344 19.53 2.343v-132.812z",
            },
          ],
          bounds: { x: 0, y: 0, width: 43.75, height: 270.052 },
          origin: { x: 0, y: 200.365 },
          align: "left",
        },
        DoClef: {
          paths: [
            {
              type: "positive",
              data: "M0 98.406V-97.688C0-118 5.99-134.275 17.97-146.516c11.978-12.24 27.603-18.36 46.874-18.36 10.937 0 19.53 3.126 25.78 9.376s9.376 14.583 9.376 25v107.813l-6.25-5.47c-4.167-3.645-10.287-7.42-18.36-11.327-8.072-3.907-16.796-5.86-26.17-5.86-11.46 0-21.486 4.427-30.08 13.282-8.593 8.854-12.89 19.53-12.89 32.03s4.297 23.308 12.89 32.423c8.594 9.115 18.62 13.672 30.08 13.672 9.374 0 18.098-1.822 26.17-5.468 8.073-3.646 14.193-7.292 18.36-10.938l6.25-6.25V132c0 9.896-3.125 18.1-9.375 24.61-6.25 6.51-14.844 9.765-25.78 9.765-19.272 0-34.897-6.25-46.876-18.75C5.99 135.125 0 118.72 0 98.405z",
            },
          ],
          bounds: { x: 0, y: 0, width: 100, height: 331.251 },
          origin: { x: 0, y: 164.876 },
          align: "left",
        },
        FaClef: {
          paths: [
            {
              type: "positive",
              data: "M85.156-32v193.75c0 9.375-1.562 14.323-4.687 14.844-1.564 0-2.605-.52-3.126-1.563-.52-1.04-.782-2.603-.78-4.686V56.28c-8.335-8.332-19.793-12.5-34.376-12.5-17.71 0-31.77 3.907-42.188 11.72V-32c0-18.23 14.193-27.344 42.578-27.344 28.385 0 42.578 9.115 42.578 27.344zM98.438 93V-92.156c0-19.27 5.73-34.896 17.187-46.875 11.458-11.98 26.562-17.97 45.313-17.97 10.937 0 19.14 2.865 24.61 8.594 5.467 5.73 8.202 13.542 8.202 23.437v103.126l-5.47-4.687c-3.645-3.647-9.374-7.293-17.186-10.94-7.813-3.645-15.886-5.467-24.22-5.468-11.978 0-22.004 4.167-30.077 12.5-8.073 8.334-12.11 18.36-12.11 30.08 0 11.717 4.037 22.004 12.11 30.858s18.1 13.28 30.078 13.28c8.333 0 16.406-1.822 24.22-5.468 7.81-3.645 13.54-7.03 17.186-10.156l5.47-5.468V125.81c0 9.896-2.865 17.84-8.594 23.83-5.73 5.988-13.802 8.983-24.22 8.983-18.75 0-33.853-6.12-45.31-18.36-11.46-12.24-17.19-27.994-17.19-47.265z",
            },
          ],
          bounds: { x: 0, y: 0, width: 193.752, height: 333.595 },
          origin: { x: 0.001, y: 157.001 },
          align: "left",
        },
        Flat: {
          paths: [
            {
              type: "positive",
              data: "M7.813-204.406c4.166 0 6.25 5.208 6.25 15.625L12.5-10.657C33.854 13.302 54.167 25.28 73.438 25.28c9.374 0 14.062-4.686 14.062-14.06 0-6.25-1.042-11.72-3.125-16.407-2.083-4.688-7.03-9.766-14.844-15.235-7.81-5.47-13.02-8.984-15.624-10.547L27.344-45.81V-80.97c17.187 0 33.073 4.82 47.656 14.454C89.583-56.88 96.875-47.376 96.875-38c0 67.708-.26 101.562-.78 101.563-38.543 0-69.532-12.24-92.97-36.72C0-52.322-1.042-123.936 0-188c0-10.937 2.604-16.406 7.813-16.406z",
            },
          ],
          bounds: { x: 0, y: 0, width: 97.917, height: 267.969 },
          origin: { x: 1.042, y: 204.406 },
          align: "left",
        },
        Mora: {
          paths: [
            {
              type: "positive",
              data: "M47.478-24c6.957 0 12.793 2.288 17.49 6.883C69.662-12.52 72-6.904 72-.267c0 6.64-2.337 12.352-7.033 17.118C60.27 21.618 54.435 24 47.477 24c-6.26 0-11.748-2.383-16.444-7.15C26.337 12.086 24 6.374 24-.265c0-6.638 2.337-12.255 7.033-16.85C35.73-21.713 41.217-24 47.478-24z",
            },
          ],
          bounds: { x: 0, y: 0, width: 48, height: 48 },
          origin: { x: -24, y: 24 },
          align: "left",
        },
        Natural: {
          paths: [
            {
              type: "positive",
              data: "M7.906-166.563c-2.864 0-5.614.52-8.218 1.563v13.28l.78 56.25.782 78.907v85.157c.52 3.646 2.604 5.73 6.25 6.25l23.438-3.906 23.437-3.907v29.69c0 42.186-.26 63.54-.78 64.06l6.25 2.345c1.04.52 2.082.78 3.124.78 2.603 0 4.947-1.3 7.03-3.905L67.656-71.25c-.52-2.604-2.083-3.906-4.687-3.906-7.814 0-17.19 1.04-28.126 3.125l-19.53 3.124.78-38.28V-165c-2.604-1.042-5.323-1.562-8.188-1.563zM55.938-40v71.875l-41.407 7.03c0-48.436.262-72.655.783-72.655L55.938-40z",
            },
          ],
          bounds: { x: 0, y: 0, width: 70.311, height: 330.469 },
          origin: { x: 0.312, y: 166.563 },
          align: "left",
        },
        Sharp: {
          paths: [
            {
              type: "positive",
              data: "m41.725,-73.773c-5.421,-0.241-10.878,5.856-6.549,12.357L67.061,-20.473 61.264,-12.5 13.436,-71.199c-5.634,-5.934-16.988,1.032-11.232,9.783L50.756,0.182 2.203,61.416c-6.745,7.984 3.442,17.859 11.232,9.783L61.264,12.5l5.797,7.973-31.885,40.943c-5.578,6.844 5.588,16.005 11.594,9.783L77.568,33.154 108.367,71.199c4.894,6.717 17.343,-1.575 11.232,-9.783L87.715,20.473 93.873,12.5 141.34,71.199c6.725,7.67 17.509,-2.248 11.596,-9.783L104.02,0.182 152.936,-61.416c5.52,-7.02-5.541,-16.309-11.596,-9.783L93.873,-12.5l-6.158,-7.973 31.884766,-40.943c5.407,-7.045-5.505,-15.924-11.232,-9.783L77.568,-33.154 46.77,-71.199c-1.435,-1.708-3.238,-2.494-5.044922,-2.574zM77.568,-8.516 84.09,0.182 77.568,8.516 70.684,0.182Z",
            },
          ],
          bounds: { x: 0, y: 0, width: 154.646, height: 147.987 },
          origin: { x: 0, y: 74.098 },
          align: "left",
        },
        OriscusAsc: {
          paths: [
            {
              type: "positive",
              data: "M50 30.25c0 12.5-3.125 21.354-9.375 26.562-3.125 2.605-7.813 3.907-14.063 3.907-3.125 0-5.99-.522-8.593-1.564-2.605-1.04-5.6-2.474-8.986-4.297C5.6 53.035 2.734 51.603.39 50.56c-2.343-1.04-5.338-2.474-8.984-4.296-3.646-1.823-6.77-3.256-9.375-4.297-2.603-1.043-5.468-1.564-8.593-1.564-6.25 0-10.937 1.563-14.062 4.688C-46.875 50.824-50 59.677-50 71.656v-106.25c0-13.02 3.125-21.875 9.375-26.562 3.125-2.604 7.813-3.906 14.063-3.907 3.125 0 5.99.52 8.593 1.563 2.605 1.042 5.73 2.474 9.376 4.297 3.646 1.823 6.51 2.995 8.594 3.516l10.938 5.468c6.25 3.126 11.458 4.69 15.624 4.69 6.25 0 10.938-1.564 14.063-4.69C46.875-55.426 50-64.02 50-76V30.25z",
            },
          ],
          bounds: { x: 0, y: 0, width: 100, height: 147.656 },
          origin: { x: 50, y: 76 },
          align: "left",
        },
        OriscusDes: {
          paths: [
            {
              type: "positive",
              data: "M-50 30.844v-106.25c0 11.458 3.125 20.052 9.375 25.78 3.125 3.126 7.813 4.69 14.063 4.688 4.687 0 13.41-3.255 26.17-9.765 12.762-6.51 21.746-9.766 26.954-9.766 6.25 0 10.938 1.303 14.063 3.907C46.875-55.874 50-47.02 50-34V72.25c0-11.98-3.125-20.833-9.375-26.563C37.5 42.563 32.812 41 26.562 41 21.875 41 13.023 44.385 0 51.156c-4.167 2.604-8.594 4.948-13.28 7.032-4.69 2.083-9.116 3.124-13.283 3.124-6.25 0-10.937-1.302-14.062-3.906C-46.875 52.198-50 43.344-50 30.844z",
            },
          ],
          bounds: { x: 0, y: 0, width: 100, height: 147.656 },
          origin: { x: 50, y: 75.406 },
          align: "left",
        },
        OriscusLiquescent: {
          paths: [
            {
              type: "positive",
              data: "M 19.055,78.887 C 20.242,78.487 21.532,77.890 22.925,77.097 24.318,76.304 26.700882,74.417 30.074,71.438 33.447,68.458 36.524,64.985 39.303,61.019 42.083,57.052 44.563,51.396 46.743,44.05 48.923,36.704 50.013,28.671 50.013,19.950525 L 50.013,-34.226 C 50.013,-54.464 42.074,-64.584 26.195,-64.584 20.248,-64.584 11.519,-61.410 0.007,-55.064 -11.506,-48.717 -20.235,-45.544 -26.182,-45.544 -34.515,-45.544 -40.568,-48.520 -44.340791,-54.473 -48.114,-60.426 -50.000,-67.369 -50.000,-75.303 L -50.000,30.07 C -50.000,49.909 -42.060754,59.829 -26.182,59.829 -21.023,59.829 -12.39,56.455 -0.284,49.709 11.822,42.963 20.648,39.59 26.195,39.59 29.369,40.777 30.362,44.25 29.17479,50.009 27.988,55.768 26.001,62.020829 23.216,68.767 z",
            },
          ],
          bounds: { x: 0, y: 0, width: 100, height: 147.656 },
          origin: { x: 50, y: 75.406 },
          align: "left",
        },
        PodatusLower: {
          paths: [
            {
              type: "positive",
              data: "M-4.688-30.28c22.396 0 34.636-.262 36.72-.782 5.728-1.563 8.593-5.21 8.593-10.938H50v97.656c0 2.604-1.302 4.167-3.906 4.688-5.21.52-21.355.78-48.438.78-23.958 0-38.54-.26-43.75-.78-2.604 0-3.906-1.302-3.906-3.906v-82.032c0-3.646 1.302-5.468 3.906-5.468h2.344c2.604.52 15.625.78 39.063.78z",
            },
          ],
          bounds: { x: 0, y: 0, width: 100, height: 103.124 },
          origin: { x: 50, y: 42 },
          align: "left",
        },
        PodatusUpper: {
          paths: [
            {
              type: "positive",
              data: "M-46.094-63.78c13.542 0 24.61 2.473 33.203 7.42C-4.298-51.41 0-43.99 0-34.093V62h-9.375c0-10.938-2.604-19.14-7.812-24.61-5.21-5.468-14.844-8.203-28.907-8.202-18.23 0-33.333 4.166-45.312 12.5v-75.782c0-19.79 15.104-29.687 45.312-29.687z",
            },
          ],
          bounds: { x: 0, y: 0, width: 91.406, height: 125.781 },
          origin: { x: 91.406, y: 63.781 },
          align: "right",
        },
        Porrectus1: {
          paths: [
            {
              type: "positive",
              data: "M233.594 162.875c-58.855 0-107.032-6.25-144.53-18.75C34.895 125.895-11.46 99.855-50 66V-52.75C-21.354-24.625 26.302 6.885 92.97 41.78 123.697 57.928 163.54 66 212.5 66c21.354 0 34.635-9.896 39.844-29.688V151.94c0 7.29-6.25 10.937-18.75 10.937z",
            },
          ],
          bounds: { x: 0, y: 0, width: 302.344, height: 215.627 },
          origin: { x: 50, y: 52.75 },
          align: "left",
        },
        Porrectus2: {
          paths: [
            {
              type: "positive",
              data: "M309.375 259.375c-50.52 0-110.938-22.396-181.25-67.188C48.437 141.667-10.938 94.272-50 50V-68.75C0-3.125 60.417 52.083 131.25 96.875c58.333 36.98 110.677 58.854 157.03 65.625h7.033c16.145 0 26.822-9.896 32.03-29.688v114.844c0 7.812-5.99 11.72-17.968 11.72z",
            },
          ],
          bounds: { x: 0, y: 0, width: 377.343, height: 328.126 },
          origin: { x: 50, y: 68.75 },
          align: "left",
        },
        Porrectus3: {
          paths: [
            {
              type: "positive",
              data: "M309.375 355.78c-48.96-16.666-109.115-55.468-180.47-116.405C79.428 198.23 19.793 134.687-50 48.75V-70C20 40 94.104 103.79 135.25 148.063 190 200 230 230 288.28 258.906c4.168 2.083 8.334 3.125 12.5 3.125 12.5 0 21.355-10.937 26.564-32.81v114.06c0 9.376-3.386 14.063-10.156 14.064-2.084 0-4.688-.522-7.813-1.563z",
            },
          ],
          bounds: { x: 0, y: 0, width: 377.344, height: 427.345 },
          origin: { x: 50, y: 70 },
          align: "left",
        },
        Porrectus4: {
          paths: [
            {
              type: "positive",
              data: "M350 453.438c-52.754-22.397-120-77.345-201.74-164.844C90.87 227.656 24.784 147.708-50 48.75V-70C-8.84-1.25 58.406 86.51 151.74 193.28c60.868 69.793 119.13 124.22 174.782 163.282 5.797 3.646 11.014 5.47 15.652 5.47 12.173 0 21.45-11.72 27.826-35.157V441.72c0 9.373-3.19 14.06-9.565 14.06-2.9 0-6.377-.78-10.435-2.342z",
            },
          ],
          bounds: { x: 0, y: 0, width: 420, height: 525.78 },
          origin: { x: 50, y: 70 },
          align: "left",
        },
        PunctumCavum: {
          paths: [
            {
              type: "positive",
              data: "M0-60.906c33.333 0 50 9.635 50 28.906v94.53C39.062 51.595 22.396 46.126 0 46.126s-39.063 5.47-50 16.406V-32c0-19.27 16.667-28.906 50-28.906z",
            },
            {
              type: "negative",
              data: "M.08-42.56c9.585.206 20.126.53 27.954 6.822 4.96 3.9 4.71 10.792 4.574 16.482v51.278C22.09 27.066 7.283 26.072.168 26.01c-7.72.23-21.895.935-32.616 4.674.04-19.197-.083-38.395.064-57.59.567-7.5 7.834-12.33 14.62-13.774 5.818-1.498 11.857-1.86 17.844-1.88z",
            },
          ],
          bounds: { x: 0, y: 0, width: 100, height: 123.438 },
          origin: { x: 50, y: 60.906 },
          align: "left",
        },
        PunctumQuadratum: {
          paths: [
            {
              type: "positive",
              data: "M0-60.906c33.333 0 50 9.635 50 28.906v94.53C39.062 51.595 22.396 46.126 0 46.126s-39.063 5.47-50 16.406V-32c0-19.27 16.667-28.906 50-28.906z",
            },
          ],
          bounds: { x: 0, y: 0, width: 100, height: 123.438 },
          origin: { x: 50, y: 60.906 },
          align: "left",
        },
        PunctumQuadratumLiquescent: {
          paths: [
            {
              type: "positive",
              data: "M0-36.5436c19.999799999999997 0 30 5.781 30 17.3436v56.717999999999996C23.437199999999997 30.956999999999997 13.4376 27.6756 0 27.6756s-23.4378 3.2819999999999996-30 9.843599999999999V-19.2c0-11.562 10.000200000000001-17.3436 30-17.3436z",
            },
          ],
          bounds: { x: 0, y: 0, width: 100, height: 123.438 },
          origin: { x: 50, y: 60.906 },
          align: "left",
        },
        PunctumQuadratumAscLiquescent: {
          paths: [
            {
              type: "positive",
              data: "M-50 43.688V-61c4.167 7.292 12.76 10.938 25.78 10.938 9.376 0 20.053-1.563 32.032-4.688C31.773-60.48 45.833-71.677 50-88.344v117.97C43.75 42.645 32.812 51.5 17.187 56.186-.52 61.398-15.886 64-28.906 64-42.97 64-50 57.23-50 43.687z",
            },
          ],
          bounds: { x: 0, y: 0, width: 100, height: 152.344 },
          origin: { x: 50, y: 88.344 },
          align: "left",
        },
        PunctumQuadratumDesLiquescent: {
          paths: [
            {
              type: "positive",
              data: "M-50-56.03c0-13.022 7.03-19.532 21.094-19.532 13.02 0 28.385 2.604 46.093 7.812C32.813-63.583 43.75-54.73 50-41.187V76C45.833 59.854 31.77 48.656 7.812 42.406c-11.98-3.125-22.656-4.687-32.03-4.687-13.022 0-21.615 3.905-25.782 11.718v-105.47z",
            },
          ],
          bounds: { x: 0, y: 0, width: 100, height: 151.562 },
          origin: { x: 50, y: 75.562 },
          align: "left",
        },
        PunctumInclinatum: {
          paths: [
            { type: "positive", data: "M0-75.78L50 0 0 75-50 0 0-75.78z" },
          ],
          bounds: { x: 0, y: 0, width: 100, height: 150.78 },
          origin: { x: 50, y: 75.78 },
          align: "left",
        },
        PunctumInclinatumLiquescent: {
          paths: [
            {
              type: "positive",
              data: "M 0,-53.164 35,-0.117 0,52.383 -35,-0.117 0,-53.164 z",
            },
          ],
          bounds: { x: 0, y: 0, width: 100, height: 105.546 },
          origin: { x: 50, y: 53.164 },
          align: "left",
        },
        Quilisma: {
          paths: [
            {
              type: "positive",
              data: "M-50 34.938V-51c5.73 20.833 13.02 31.25 21.875 31.25 7.813 0 12.5-15.625 14.063-46.875 3.645 12.5 6.9 21.224 9.765 26.172s6.9 7.422 12.11 7.422c5.208 0 9.374-14.324 12.5-42.97 5.73 22.917 10.677 34.375 14.843 34.375 5.73 0 10.677-15.885 14.844-47.656v100c0 17.707-3.125 26.56-9.375 26.56-4.688 0-9.115-5.988-13.28-17.968-2.085 21.875-8.074 32.813-17.97 32.813-7.813 0-16.146-7.292-25-21.875-4.688 20.312-10.677 30.47-17.97 30.47-5.207 0-9.244-2.605-12.108-7.814C-48.568 47.698-50 41.708-50 34.938z",
            },
          ],
          bounds: { x: 0, y: 0, width: 100, height: 150 },
          origin: { x: 50, y: 89.282 },
          align: "left",
        },
        TerminatingAscLiquescent: {
          paths: [
            {
              type: "positive",
              data: "M-9.375 40.22c0-11.98-4.948-17.97-14.844-17.97-10.936 0-19.53 3.646-25.78 10.938v-53.126c0-6.77 2.604-12.76 7.813-17.968 5.208-5.21 10.677-8.594 16.406-10.157 2.603-.52 5.207-.78 7.81-.78 3.647 0 7.032.78 10.157 2.343C-2.603-43.896 0-39.73 0-34V73.03h-9.375V40.22z",
            },
          ],
          bounds: { x: 0, y: 0, width: 49.999, height: 121.873 },
          origin: { x: 49.999, y: 48.843 },
          align: "right",
        },
        TerminatingDesLiquescent: {
          paths: [
            {
              type: "positive",
              data: "M-9.375-48.156V-80.97H0V26.845c0 5.73-2.604 9.896-7.813 12.5-3.125 1.562-6.51 2.343-10.156 2.343-2.603 0-5.207-.26-7.81-.78-5.73-1.563-11.2-4.95-16.407-10.157C-47.398 25.542-50 19.292-50 12v-52.344c6.25 7.292 14.844 10.938 25.78 10.938 9.897 0 14.845-6.25 14.845-18.75z",
            },
          ],
          bounds: { x: 0, y: 0, width: 50, height: 122.658 },
          origin: { x: 50, y: 80.97 },
          align: "right",
        },
        VerticalEpisemaAbove: {
          paths: [
            {
              type: "positive",
              data: "M-8-4c2 3 6 4 8 4s6-1 8-4v-52c-2-3-6-4-8-4s-6 1-8 4z",
            },
          ],
          bounds: { x: 0, y: 0, width: 16, height: 60 },
          origin: { x: 8, y: 60 },
          align: "left",
        },
        VerticalEpisemaBelow: {
          paths: [
            {
              type: "positive",
              data: "M-8 56c2 3 6 4 8 4s6-1 8-4v-52c-2-3-6-4-8-4s-6 1-8 4z",
            },
          ],
          bounds: { x: 0, y: 0, width: 16, height: 60 },
          origin: { x: 8, y: 0 },
          align: "left",
        },
        VirgaLong: {
          paths: [
            {
              type: "positive",
              data: "M50-38v285.156c0 6.77-2.344 10.937-7.03 12.5-1.564 0-2.605-.78-3.126-2.344-.52-1.562-.782-10.156-.782-25.78V54.186C29.168 45.334 16.146 40.907 0 40.907c-22.917 0-39.583 5.208-50 15.624V-38c0-19.27 16.667-28.906 50-28.906S50-57.27 50-38z",
            },
          ],
          bounds: { x: 0, y: 0, width: 100, height: 326.562 },
          origin: { x: 50, y: 66.906 },
          align: "left",
        },
        VirgaShort: {
          paths: [
            {
              type: "positive",
              data: "M50-38v211.72c0 7.29-2.344 11.457-7.03 12.5-1.564 0-2.606-.783-3.126-2.345-.52-1.563-.782-10.156-.782-25.78V54.187C29.167 45.332 16.146 40.906 0 40.906c-22.917 0-39.583 5.21-50 15.625V-38c0-19.27 16.667-28.906 50-28.906S50-57.27 50-38z",
            },
          ],
          bounds: { x: 0, y: 0, width: 100, height: 253.126 },
          origin: { x: 50, y: 66.906 },
          align: "left",
        },
        Virgula: {
          paths: [
            {
              type: "positive",
              data: "M8.178-55.66c0-22.137 12.092-33.2 36.287-33.2 11.835 0 23.53 5.66 35.108 16.98C91.15-60.547 96.94-41.766 96.94-15.534c0 53.515-31.646 87.487-94.937 101.895-2.048-2.06-3.077-5.146-3.077-9.273 0-1.03.247-1.8.76-2.316 42.71-19.027 64.075-41.678 64.075-67.92 0-11.322-2.325-20.326-6.945-27.016-4.62-6.69-9.52-11.052-14.676-13.11-5.147-2.048-11.836-3.85-20.07-5.403C12.81-39.707 8.18-45.37 8.18-55.66z",
            },
          ],
          bounds: { x: 0, y: 0, width: 98.014, height: 175.221 },
          origin: { x: 1.074, y: 88.86 },
          align: "left",
        },
      };
    },
    function (t, e, i) {
      "use strict";
      function n(t) {
        if (Array.isArray(t)) {
          for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
          return i;
        }
        return Array.from(t);
      }
      function s(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      }
      function o(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      function r(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function a() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "{}",
          i = "italic" === t["font-style"] ? "Italic" : "",
          n = "bold" === t["font-weight"] ? "Bold" : "";
        return e.replace("{}", "" + (i || n ? "" + n + i : "Regular"));
      }
      function u(t, e) {
        var i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = arguments[3];
        (this.tagName = t),
          (this.startIndex = e),
          (this.properties = i),
          n && (this.symbol = n);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ChantNotationElement =
          e.Annotations =
          e.Annotation =
          e.TextLeftRight =
          e.Subtitle =
          e.Title =
          e.Supertitle =
          e.TitleTextElement =
          e.DropCap =
          e.TranslationText =
          e.AboveLinesText =
          e.ChoralSign =
          e.Lyric =
          e.LyricArray =
          e.LyricType =
          e.TextElement =
          e.TextSpan =
          e.CurlyBraceVisualizer =
          e.RoundBraceVisualizer =
          e.GlyphVisualizer =
          e.LineaVisualizer =
          e.VirgaLineVisualizer =
          e.NeumeLineVisualizer =
          e.DividerLineVisualizer =
          e.ChantLayoutElement =
          e.ChantContext =
          e.TextMeasuringStrategy =
          e.QuickSvg =
          e.GlyphCode =
          e.DefaultTrailingSpace =
          e.TextTypesByClass =
          e.TextTypes =
          e.MarkingPositionHint =
            void 0);
      var h = function t(e, i, n) {
          null === e && (e = Function.prototype);
          var s = Object.getOwnPropertyDescriptor(e, i);
          if (void 0 === s) {
            var o = Object.getPrototypeOf(e);
            return null === o ? void 0 : t(o, i, n);
          }
          if ("value" in s) return s.value;
          var r = s.get;
          if (void 0 !== r) return r.call(n);
        },
        l = (function () {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        })(),
        c = (function () {
          function t(t, e) {
            var i = [],
              n = !0,
              s = !1,
              o = void 0;
            try {
              for (
                var r, a = t[Symbol.iterator]();
                !(n = (r = a.next()).done) &&
                (i.push(r.value), !e || i.length !== e);
                n = !0
              );
            } catch (t) {
              (s = !0), (o = t);
            } finally {
              try {
                !n && a.return && a.return();
              } finally {
                if (s) throw o;
              }
            }
            return i;
          }
          return function (e, i) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return t(e, i);
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          };
        })(),
        f = i(1),
        p = i(3),
        d = i(2),
        g = i(5),
        y = i(6),
        v = i(7),
        m = "undefined" != typeof document,
        b = function (t, e) {
          var i =
            t.notes[
              e.parentElement
                .querySelector("[element-index]")
                .getAttribute("element-index")
            ];
          return i.neume || i;
        },
        x = (e.MarkingPositionHint = { Default: 0, Above: 1, Below: 2 }),
        S = (e.TextTypes = {
          supertitle: {
            display: "Supertitle",
            defaultSize: function (t) {
              return (7 * t) / 6;
            },
            containedInScore: function (t) {
              return t.titles.hasSupertitle();
            },
            getFromScore: function (t) {
              return t.titles.supertitle;
            },
          },
          title: {
            display: "Title",
            defaultSize: function (t) {
              return (3 * t) / 2;
            },
            containedInScore: function (t) {
              return t.titles.hasTitle();
            },
            getFromScore: function (t) {
              return t.titles.title;
            },
          },
          subtitle: {
            display: "Subtitle",
            defaultSize: function (t) {
              return t;
            },
            containedInScore: function (t) {
              return t.titles.hasSubtitle();
            },
            getFromScore: function (t) {
              return t.titles.subtitle;
            },
          },
          leftRight: {
            display: "Left / Right Text",
            cssClass: "textLeftRight",
            defaultSize: function (t) {
              return 0.9 * t;
            },
            containedInScore: function (t) {
              return t.titles.hasTextLeft() || t.titles.hasTextRight();
            },
            getFromScore: function (t, e) {
              return t.titles[e.extraClass];
            },
            getFromSvgElem: function (t, e) {
              return t.titles[
                e.classList.contains("textRight") ? "textRight" : "textLeft"
              ];
            },
          },
          annotation: {
            display: "Annotation",
            defaultSize: function (t) {
              return (2 * t) / 3;
            },
            containedInScore: function (t) {
              return (
                !!t.annotation && (!t.mergeAnnotationWithTextLeft || t.dropCap)
              );
            },
            getFromScore: function (t, e) {
              var i = e.elementIndex,
                n = void 0 === i ? 0 : i;
              return (
                t.annotation &&
                (t.annotation.annotations
                  ? t.annotation.annotations[n]
                  : t.annotation)
              );
            },
          },
          dropCap: {
            display: "Drop Cap",
            defaultSize: function (t) {
              return 4 * t;
            },
            containedInScore: function (t) {
              return !!t.dropCap;
            },
            getFromScore: function (t) {
              return t.dropCap;
            },
          },
          al: {
            display: "Above Staff",
            cssClass: "aboveLinesText",
            defaultSize: function (t) {
              return t;
            },
            containedInScore: function (t) {
              return t.hasAboveLinesText;
            },
            getFromScore: function (t, e) {
              return t.notations[e.notation.notationIndex].alText[e.alIndex];
            },
            getFromSvgElem: function (t, e) {
              return b(t, e).alText[e.getAttribute("al-index") || 0];
            },
          },
          choralSign: {
            display: "Choral Sign",
            size: function (t) {
              return 1.5 * t.staffInterval;
            },
            containedInScore: function (t) {
              return !1;
            },
            getFromScore: function (t, e) {
              return t.notes[e.note.elementIndex].choralSign;
            },
          },
          lyric: {
            display: "Lyric",
            defaultSize: function (t) {
              return 0.9 * t;
            },
            containedInScore: function (t) {
              return t.hasLyrics;
            },
            getFromScore: function (t, e) {
              return t.notations[e.notation.notationIndex].lyrics[e.lyricIndex];
            },
            getFromSvgElem: function (t, e) {
              return b(t, e).lyrics[e.getAttribute("lyric-index") || 0];
            },
          },
          translation: {
            display: "Translation",
            defaultSize: function (t) {
              return 0.75 * t;
            },
            containedInScore: function (t) {
              return t.hasTranslations;
            },
            getFromScore: function (t, e) {
              return t.notations[e.notation.notationIndex].translationText[
                e.translationIndex
              ];
            },
            getFromSvgElem: function (t, e) {
              return b(t, e).translationText[
                e.getAttribute("translation-index") || 0
              ];
            },
          },
        }),
        L = (e.TextTypesByClass = {});
      Object.entries(S).forEach(function (t) {
        var e = c(t, 2),
          i = e[0],
          n = e[1],
          s = (n.cssClass = n.cssClass || i);
        (n.key = i), (L[s] = n);
      });
      var C = (e.DefaultTrailingSpace = function (t) {
        return t.intraNeumeSpacing * t.interSyllabicMultiplier;
      });
      C.isDefault = !0;
      var w = (e.GlyphCode = {
          None: "None",
          AcuteAccent: "AcuteAccent",
          GraveAccent: "GraveAccent",
          Circle: "Circle",
          Semicircle: "Semicircle",
          ReversedSemicircle: "ReversedSemicircle",
          Stropha: "Stropha",
          StrophaLiquescent: "StrophaLiquescent",
          BeginningAscLiquescent: "BeginningAscLiquescent",
          BeginningDesLiquescent: "BeginningDesLiquescent",
          CustosDescLong: "CustosDescLong",
          CustosDescShort: "CustosDescShort",
          CustosLong: "CustosLong",
          CustosShort: "CustosShort",
          DoClef: "DoClef",
          FaClef: "FaClef",
          Flat: "Flat",
          Mora: "Mora",
          Natural: "Natural",
          OriscusAsc: "OriscusAsc",
          OriscusDes: "OriscusDes",
          OriscusLiquescent: "OriscusLiquescent",
          PodatusLower: "PodatusLower",
          PodatusUpper: "PodatusUpper",
          Porrectus1: "Porrectus1",
          Porrectus2: "Porrectus2",
          Porrectus3: "Porrectus3",
          Porrectus4: "Porrectus4",
          PunctumCavum: "PunctumCavum",
          PunctumQuadratum: "PunctumQuadratum",
          PunctumQuadratumLiquescent: "PunctumQuadratumLiquescent",
          PunctumQuadratumAscLiquescent: "PunctumQuadratumAscLiquescent",
          PunctumQuadratumDesLiquescent: "PunctumQuadratumDesLiquescent",
          PunctumInclinatum: "PunctumInclinatum",
          PunctumInclinatumLiquescent: "PunctumInclinatumLiquescent",
          Quilisma: "Quilisma",
          Sharp: "Sharp",
          TerminatingAscLiquescent: "TerminatingAscLiquescent",
          TerminatingDesLiquescent: "TerminatingDesLiquescent",
          VerticalEpisemaAbove: "VerticalEpisemaAbove",
          VerticalEpisemaBelow: "VerticalEpisemaBelow",
          VirgaLong: "VirgaLong",
          VirgaShort: "VirgaShort",
          Virgula: "Virgula",
          UpperBrace: "UpperBrace",
        }),
        P = (e.QuickSvg = {
          ns: "http://www.w3.org/2000/svg",
          xmlns: "http://www.w3.org/2000/xmlns/",
          xlink: "http://www.w3.org/1999/xlink",
          hasDOMAccess: function () {
            return m;
          },
          svg: function (t, e) {
            var i = document.createElementNS(this.ns, "svg");
            i.setAttribute("xmlns", this.ns),
              i.setAttribute("version", "1.1"),
              i.setAttributeNS(this.xmlns, "xmlns:xlink", this.xlink),
              i.setAttribute("width", t),
              i.setAttribute("height", e);
            var n = document.createElementNS(this.ns, "defs");
            return (
              i.appendChild(n),
              (i.defs = n),
              (i.clearNotations = function () {
                for (i.removeChild(n); i.hasChildNodes(); )
                  i.removeChild(i.lastChild);
                i.appendChild(n);
              }),
              i
            );
          },
          rect: function (t, e) {
            var i = document.createElementNS(this.ns, "rect");
            return i.setAttribute("width", t), i.setAttribute("height", e), i;
          },
          line: function (t, e, i, n) {
            var s = document.createElementNS(this.ns, "line");
            return (
              s.setAttribute("x1", t),
              s.setAttribute("y1", e),
              s.setAttribute("x2", i),
              s.setAttribute("y2", n),
              s
            );
          },
          g: function () {
            var t = document.createElementNS(this.ns, "g");
            return t;
          },
          text: function () {
            var t = document.createElementNS(this.ns, "text");
            return t;
          },
          tspan: function (t) {
            var e = document.createElementNS(this.ns, "tspan");
            return (e.textContent = t), e;
          },
          use: function (t) {
            var e = document.createElementNS(this.ns, "use");
            return e.setAttributeNS(this.xlink, "xlink:href", "#" + t), e;
          },
          svgFragmentForGlyph: function (t) {
            for (var e = "", i = 0; i < t.paths.length; ++i) {
              var n = t.paths[i];
              e += P.createFragment(n.data ? "path" : "g", {
                d: n.data || void 0,
                fill: "negative" === n.type ? "#fff" : void 0,
              });
            }
            return e;
          },
          nodesForGlyph: function (t) {
            for (
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "createNode",
                i = [],
                n = 0;
              n < t.paths.length;
              ++n
            ) {
              var s = t.paths[n],
                o = {};
              s.data && (o.d = s.data),
                "negative" === s.type && (o.fill = "#fff"),
                i.push(P[e](s.data ? "path" : "g", o));
            }
            return i;
          },
          createNode: function (t, e, i) {
            var n = document.createElementNS(this.ns, t);
            e && e.source && ((n.source = e.source), delete e.source);
            for (var s in e)
              if (e.hasOwnProperty(s) && "undefined" != typeof e[s]) {
                var o = e[s],
                  r = s.match(/^([^:]+):([^:]+)$/);
                r
                  ? n.setAttributeNS(this[r[1]], r[2], o)
                  : n.setAttribute(s, o);
              }
            if (i)
              if ("string" == typeof i) n.textContent = i;
              else if (i.constructor === [].constructor)
                for (var a = 0; a < i.length; ++a) n.appendChild(i[a]);
              else n.appendChild(i);
            return n;
          },
          createSvgTree: function (t, e) {
            for (
              var i = arguments.length, n = Array(i > 2 ? i - 2 : 0), s = 2;
              s < i;
              s++
            )
              n[s - 2] = arguments[s];
            "class" in e && ((e.className = e.class), delete e.class),
              1 === n.length && n[0] instanceof Array && (n = n[0]);
            var o = function (t) {
              var e = !0,
                i = !1,
                n = void 0;
              try {
                for (
                  var s, o = Object.keys(t)[Symbol.iterator]();
                  !(e = (s = o.next()).done);
                  e = !0
                ) {
                  var r = s.value;
                  if (/[-:][a-z]/.test(r)) {
                    if (/^\w+-index$/.test(r)) continue;
                    var a = r.replace(/[-:]([a-z])/g, function (t, e) {
                      return e.toUpperCase();
                    });
                    (t[a] = t[r]), delete t[r];
                  }
                }
              } catch (t) {
                (i = !0), (n = t);
              } finally {
                try {
                  !e && o.return && o.return();
                } finally {
                  if (i) throw n;
                }
              }
            };
            o(e), e.style && o(e.style);
            var r = e.source;
            return (
              r && r.sourceGabc && (e["source-gabc"] = r.sourceGabc),
              { name: t, props: e, children: n }
            );
          },
          createFragment: function (t, e, i) {
            (void 0 !== i && null !== i) || (i = "");
            var n = "<" + t + " ";
            for (var s in e)
              e.hasOwnProperty(s) &&
                "undefined" != typeof e[s] &&
                (n += s + '="' + e[s] + '" ');
            return (n += ">" + i + "</" + t + ">");
          },
          parseFragment: function (t) {
            var e = document.createElement("svg");
            if (t) {
              var i = this.g();
              e.innerHTML =
                "<svg>" +
                t
                  .replace(/\n/, "")
                  .replace(/<(\w+)([^<]+?)\/>/g, "<$1$2></$1>") +
                "</svg>";
              for (var n = 0, s = e.firstChild.childNodes.length; n < s; n++)
                i.appendChild(e.firstChild.firstChild);
              return i;
            }
          },
          translate: function (t, e, i) {
            return (
              t.setAttribute("transform", "translate(" + e + "," + i + ")"), t
            );
          },
          scale: function (t, e, i) {
            return t.setAttribute("transform", "scale(" + e + "," + i + ")"), t;
          },
        }),
        k = (e.TextMeasuringStrategy = { Svg: 0, Canvas: 1, OpenTypeJS: 2 }),
        T =
          ((e.ChantContext = (function () {
            function t() {
              var e = this,
                i =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : P.hasDOMAccess()
                    ? k.Canvas
                    : k.OpenTypeJS;
              r(this, t),
                (this.textMeasuringStrategy = i),
                (this.defs = {}),
                (this.makeDefs = []),
                P.hasDOMAccess() && (this.defsNode = P.createNode("defs")),
                (this.textStyles = {}),
                (this.textColor = "#000"),
                this.setFont(
                  "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
                  16
                ),
                (this.rubricColor = "#d00"),
                (this.specialCharProperties = {
                  "font-family": "'Exsurge Characters'",
                  fill: this.rubricColor,
                  class: "rubric",
                }),
                (this.textBeforeSpecialChar = ""),
                (this.textAfterSpecialChar = "."),
                (this.specialCharMap = {
                  "℣": "v",
                  "℟": "r",
                  "+": "+",
                  "*": "*",
                }),
                (this.plusProperties = {}),
                (this.asteriskProperties = {}),
                (this.specialCharText = function (t) {
                  return e.specialCharMap[t] || t;
                }),
                (this.fontStyleDictionary = {
                  b: { "font-weight": "bold" },
                  i: { "font-style": "italic" },
                  u: { "text-decoration": "underline" },
                  ul: { "text-decoration": "underline" },
                  c: { fill: this.rubricColor, class: "rubric" },
                  sc: {
                    "font-variant": "small-caps",
                    "font-variant-caps": "small-caps",
                    "font-feature-settings": "'smcp'",
                    "-webkit-font-feature-settings": "'smcp'",
                  },
                  v: {},
                }),
                (this.markupSymbolDictionary = {
                  "*": "b",
                  _: "i",
                  "^": "c",
                  "%": "sc",
                }),
                (this.textStyles.al.prefix = "<i>"),
                (this.textStyles.translation.prefix = "<i>"),
                (this.textStyles.dropCap.padding = 1),
                (this.textStyles.annotation.padding = 1),
                (this.minLedgerSeparation = 2),
                (this.minSpaceAboveStaff = 2),
                (this.minSpaceBelowStaff = 1),
                (this.spaceBetweenSystems = 1.5),
                (this.glyphPunctumWidth =
                  p.Glyphs.PunctumQuadratum.bounds.width),
                (this.glyphPunctumHeight =
                  p.Glyphs.PunctumQuadratum.bounds.height),
                (this.maxExtraSpaceInStaffIntervals = 0.5),
                (this.activeClef = null),
                (this.neumeLineColor = "#000"),
                (this.staffLineColor = "#000"),
                (this.dividerLineColor = "#000"),
                (this.defaultLanguage = d.language.latin),
                (this.pixelRatio = window.devicePixelRatio || 1),
                i === k.Svg
                  ? ((this.svgTextMeasurer = P.svg(0, 0)),
                    this.svgTextMeasurer.setAttribute("id", "TextMeasurer"),
                    this.svgTextMeasurer.setAttribute(
                      "style",
                      "position:absolute"
                    ),
                    document.body.insertBefore(
                      this.svgTextMeasurer,
                      document.body.firstChild
                    ))
                  : i === k.Canvas && this.makeCanvasIfNeeded(),
                (this.syllableConnector = "-"),
                (this.scaleDefs = !0),
                this.setGlyphScaling(1 / 16),
                (this.interSyllabicMultiplier = 2.5),
                (this.accidentalSpaceMultiplier = 2),
                (this.interVerbalMultiplier = 1),
                (this.drawGuides = !1),
                (this.drawDebuggingBounds = !0),
                (this.activeNotations = null),
                (this.currNotationIndex = -1),
                (this.minSyllablesLastLine = 0),
                (this.minNotesLastLine = 0),
                (this.condensingTolerance = 0.3),
                (this.autoColor = !0),
                (this.useExtraTextOnly = !0),
                (this.noteIdPrefix = "note-"),
                this.insertFontsInDoc();
            }
            return (
              l(t, [
                {
                  key: "getFontForProperties",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      e = arguments[1],
                      i = (a(t), a(t, e));
                    return (
                      this.fontDictionary &&
                      (this.fontDictionary[i] ||
                        this.fontDictionary[e] ||
                        this.fontDictionary.Regular)
                    );
                  },
                },
                {
                  key: "setFont",
                  value: function (t) {
                    var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 16,
                      i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {},
                      n = arguments[3],
                      s = !0,
                      o = !1,
                      r = void 0;
                    try {
                      for (
                        var a, u = Object.entries(S)[Symbol.iterator]();
                        !(s = (a = u.next()).done);
                        s = !0
                      ) {
                        var h = c(a.value, 2),
                          l = h[0],
                          f = h[1],
                          p = (this.textStyles[l] = this.textStyles[l] || {});
                        (p.size = f.defaultSize
                          ? f.defaultSize(e, this)
                          : f.size(this)),
                          (p.font = t),
                          (p.color = this.textColor || "#000");
                      }
                    } catch (t) {
                      (o = !0), (r = t);
                    } finally {
                      try {
                        !s && u.return && u.return();
                      } finally {
                        if (o) throw r;
                      }
                    }
                    (this.baseTextStyle = i),
                      n &&
                        ((this.textMeasuringStrategy = k.OpenTypeJS),
                        (this.fontDictionary = n));
                  },
                },
                {
                  key: "setRubricColor",
                  value: function (t) {
                    (this.rubricColor = t),
                      (this.specialCharProperties.fill = t),
                      (this.fontStyleDictionary.c.fill = t);
                  },
                },
                {
                  key: "setScaleDefs",
                  value: function (t) {
                    (t = !!t),
                      this.scaleDefs !== t &&
                        ((this.scaleDefs = t),
                        this.setGlyphScaling(this.glyphScaling));
                  },
                },
                {
                  key: "createStyleCss",
                  value: function () {
                    var t = "",
                      e = !0,
                      i = !1,
                      n = void 0;
                    try {
                      for (
                        var s, o = Object.entries(S)[Symbol.iterator]();
                        !(e = (s = o.next()).done);
                        e = !0
                      ) {
                        var r = c(s.value, 2),
                          a = r[0],
                          u = r[1],
                          h = u.cssClass,
                          l = this.textStyles[a],
                          f = l.color,
                          p = l.font,
                          d = l.size;
                        t +=
                          "svg.Exsurge ." +
                          h +
                          "{fill:" +
                          f +
                          ";font-family:" +
                          p +
                          ";font-size:" +
                          d +
                          "px;font-kerning:normal}";
                      }
                    } catch (t) {
                      (i = !0), (n = t);
                    } finally {
                      try {
                        !e && o.return && o.return();
                      } finally {
                        if (i) throw n;
                      }
                    }
                    return t;
                  },
                },
                {
                  key: "createStyleNode",
                  value: function () {
                    var t = P.createNode("style", {});
                    return (t.textContent = this.createStyleCss()), t;
                  },
                },
                {
                  key: "createStyleTree",
                  value: function () {
                    return {
                      name: "style",
                      props: {},
                      children: [this.createStyleCss()],
                    };
                  },
                },
                {
                  key: "createStyle",
                  value: function () {
                    return "<style>" + this.createStyleCss() + "</style>";
                  },
                },
                {
                  key: "updateHyphenWidth",
                  value: function () {
                    var t = new I(
                        this,
                        this.syllableConnector,
                        M.SingleSyllable
                      ),
                      e =
                        this.minLyricWordSpacing /
                          (this.hyphenWidth || this.minLyricWordSpacing) || 1;
                    (this.hyphenWidth = t.bounds.width),
                      (this.minLyricWordSpacing = e * this.hyphenWidth);
                  },
                },
                {
                  key: "setStaffHeight",
                  value: function (t) {
                    this.setGlyphScaling(t / 600);
                  },
                },
                {
                  key: "setGlyphScaling",
                  value: function (t) {
                    for (
                      this.glyphScaling = t,
                        this.staffInterval =
                          this.glyphPunctumWidth * this.glyphScaling,
                        this.staffLineWeight =
                          Math.ceil((5 * this.staffInterval) / 8) / 5,
                        this.neumeLineWeight = this.staffLineWeight,
                        this.dividerLineWeight = this.neumeLineWeight,
                        this.episemaLineWeight = 1.25 * this.neumeLineWeight,
                        this.intraNeumeSpacing = this.staffInterval / 2;
                      this.defsNode && this.defsNode.firstChild;

                    )
                      this.defsNode.removeChild(this.defsNode.firstChild);
                    for (var e = 0; e < this.makeDefs.length; ++e)
                      this.makeDefs[e]();
                    this.updateHyphenWidth();
                  },
                },
                {
                  key: "calculateHeightFromStaffPosition",
                  value: function (t) {
                    return -t * this.staffInterval;
                  },
                },
                {
                  key: "insertFontsInDoc",
                  value: function () {
                    if (m) {
                      var t = document.getElementById("exsurge-fonts");
                      null === t &&
                        ((t = document.createElement("style")),
                        (t.id = "exsurge-fonts"),
                        document.head.appendChild(t));
                    }
                  },
                },
                {
                  key: "findNextNeume",
                  value: function () {
                    if ("undefined" == typeof this.currNotationIndex)
                      throw "findNextNeume() called without a valid currNotationIndex set";
                    for (
                      var t = this.currNotationIndex + 1;
                      t < this.notations.length;
                      t++
                    ) {
                      var e = this.notations[t];
                      if (e.isNeume && !e.hasNoWidth) return e;
                    }
                    return null;
                  },
                },
                {
                  key: "makeCanvasIfNeeded",
                  value: function () {
                    this.canvas ||
                      ((this.canvas = document.createElement("canvas")),
                      (this.canvasCtxt = this.canvas.getContext("2d")));
                  },
                },
                {
                  key: "setCanvasSize",
                  value: function (t, e) {
                    var i =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 1;
                    this.makeCanvasIfNeeded(),
                      (this.canvas.style.width = t * i + "px"),
                      (this.canvas.style.height = e * i + "px"),
                      (i *= this.pixelRatio),
                      (this.canvas.width = t * i),
                      (this.canvas.height = e * i),
                      this.canvasCtxt.setTransform(i, 0, 0, i, 0, 0);
                  },
                },
              ]),
              t
            );
          })()),
          (e.ChantLayoutElement = (function () {
            function t() {
              r(this, t),
                (this.bounds = new f.Rect()),
                (this.origin = new f.Point(0, 0)),
                (this.selected = !1),
                (this.highlighted = !1);
            }
            return (
              l(t, [
                {
                  key: "draw",
                  value: function (t) {
                    throw "ChantLayout Elements must implement draw(ctxt)";
                  },
                },
                {
                  key: "createSvgNode",
                  value: function (t) {
                    throw "ChantLayout Elements must implement createSvgNode(ctxt)";
                  },
                },
                {
                  key: "createSvgFragment",
                  value: function (t) {
                    throw "ChantLayout Elements must implement createSvgFragment(ctxt)";
                  },
                },
              ]),
              t
            );
          })())),
        O =
          ((e.DividerLineVisualizer = (function (t) {
            function e(t, i, n, o) {
              r(this, e);
              var a = s(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(this)
              );
              a.divider = o;
              var u = t.calculateHeightFromStaffPosition(i),
                h = t.calculateHeightFromStaffPosition(n);
              if (u > h) {
                var l = u;
                (u = h), (h = l);
              }
              return (
                (a.bounds.x = 0),
                (a.bounds.y = u),
                (a.bounds.width = t.dividerLineWeight),
                (a.bounds.height = h - u),
                (a.origin.x = a.bounds.width / 2),
                (a.origin.y = u),
                a
              );
            }
            return (
              o(e, t),
              l(e, [
                {
                  key: "draw",
                  value: function (t) {
                    var e = t.canvasCtxt;
                    (e.fillStyle = t.dividerLineColor),
                      e.fillRect(
                        this.bounds.x,
                        this.bounds.y,
                        t.dividerLineWeight,
                        this.bounds.height
                      );
                  },
                },
                {
                  key: "getSvgProps",
                  value: function (t) {
                    var e = {
                      x: this.bounds.x,
                      y: this.bounds.y,
                      width: t.dividerLineWeight,
                      height: this.bounds.height,
                      fill: t.dividerLineColor,
                      class: "dividerLine",
                    };
                    return (
                      this.divider &&
                        (this.divider.selected && (e.class += " selected"),
                        (e["source-index"] = this.divider.sourceIndex),
                        (e["element-index"] = this.divider.elementIndex),
                        (e.source = this.divider)),
                      e
                    );
                  },
                },
                {
                  key: "createSvgNode",
                  value: function (t) {
                    return P.createNode("rect", this.getSvgProps(t));
                  },
                },
                {
                  key: "createSvgTree",
                  value: function (t) {
                    return P.createSvgTree("rect", this.getSvgProps(t));
                  },
                },
                {
                  key: "createSvgFragment",
                  value: function (t) {
                    return P.createFragment("rect", this.getSvgProps(t));
                  },
                },
              ]),
              e
            );
          })(T)),
          (e.NeumeLineVisualizer = (function (t) {
            function e(t, i, n, o) {
              r(this, e);
              var a = s(
                  this,
                  (e.__proto__ || Object.getPrototypeOf(e)).call(this)
                ),
                u = i.staffPosition,
                h = n.staffPosition;
              if (u < h) {
                var l = u;
                (u = h), (h = l);
              }
              var c = t.calculateHeightFromStaffPosition(u),
                f = 0;
              return (
                o &&
                  (u - h === 1 && Math.abs(u) % 2 === 1 && h > -3 && h--,
                  (f += (t.glyphPunctumHeight * t.glyphScaling) / 2.2)),
                (f += t.calculateHeightFromStaffPosition(h)),
                (a.bounds.x = 0),
                (a.bounds.y = c),
                (a.bounds.width = t.neumeLineWeight),
                (a.bounds.height = f - c),
                (a.origin.x = 0),
                (a.origin.y = 0),
                a
              );
            }
            return (
              o(e, t),
              l(e, [
                {
                  key: "draw",
                  value: function (t) {
                    var e = t.canvasCtxt;
                    (e.fillStyle = t.neumeLineColor),
                      e.fillRect(
                        this.bounds.x,
                        this.bounds.y,
                        t.neumeLineWeight,
                        this.bounds.height
                      );
                  },
                },
                {
                  key: "getSvgProps",
                  value: function (t) {
                    return {
                      x: this.bounds.x,
                      y: this.bounds.y,
                      width: t.neumeLineWeight,
                      height: this.bounds.height,
                      fill: t.neumeLineColor,
                      class: "neumeLine",
                    };
                  },
                },
                {
                  key: "createSvgNode",
                  value: function (t) {
                    return P.createNode("rect", this.getSvgProps(t));
                  },
                },
                {
                  key: "createSvgTree",
                  value: function (t) {
                    return P.createSvgTree("rect", this.getSvgProps(t));
                  },
                },
                {
                  key: "createSvgFragment",
                  value: function (t) {
                    return P.createFragment("rect", this.getSvgProps(t));
                  },
                },
              ]),
              e
            );
          })(T)),
          (e.VirgaLineVisualizer = (function (t) {
            function e(t, i) {
              r(this, e);
              var n,
                o = s(
                  this,
                  (e.__proto__ || Object.getPrototypeOf(e)).call(this)
                ),
                a = i.staffPosition,
                u = t.calculateHeightFromStaffPosition(a);
              return (
                (n =
                  0 === Math.abs(a % 2)
                    ? u + 1.8 * t.staffInterval
                    : u + 2.7 * t.staffInterval),
                (o.bounds.x = 0),
                (o.bounds.y = u),
                (o.bounds.width = t.neumeLineWeight),
                (o.bounds.height = n - u),
                (o.origin.x = 0),
                (o.origin.y = 0),
                o
              );
            }
            return (
              o(e, t),
              l(e, [
                {
                  key: "draw",
                  value: function (t) {
                    var e = t.canvasCtxt;
                    (e.fillStyle = t.neumeLineColor),
                      e.fillRect(
                        this.bounds.x,
                        this.bounds.y,
                        t.neumeLineWeight,
                        this.bounds.height
                      );
                  },
                },
                {
                  key: "getSvgProps",
                  value: function (t) {
                    return {
                      x: this.bounds.x,
                      y: this.bounds.y,
                      width: t.neumeLineWeight,
                      height: this.bounds.height,
                      fill: t.neumeLineColor,
                      class: "neumeLine",
                    };
                  },
                },
                {
                  key: "createSvgNode",
                  value: function (t) {
                    return P.createNode("rect", this.getSvgProps(t));
                  },
                },
                {
                  key: "createSvgTree",
                  value: function (t) {
                    return P.createSvgTree("rect", this.getSvgProps(t));
                  },
                },
                {
                  key: "createSvgFragment",
                  value: function (t) {
                    return P.createFragment("rect", this.getSvgProps(t));
                  },
                },
              ]),
              e
            );
          })(T)),
          (e.LineaVisualizer = (function (t) {
            function e(t, i) {
              r(this, e);
              var n = s(
                  this,
                  (e.__proto__ || Object.getPrototypeOf(e)).call(this)
                ),
                o = i.staffPosition,
                a = t.calculateHeightFromStaffPosition(o) - i.origin.y,
                u = a + i.bounds.height;
              return (
                (n.bounds.x = 0),
                (n.bounds.y = a),
                (n.bounds.width = 5 * t.neumeLineWeight + i.bounds.width),
                (n.bounds.height = u - a),
                (n.origin.x = 2.5 * t.neumeLineWeight),
                (n.origin.y = 0),
                n
              );
            }
            return (
              o(e, t),
              l(e, [
                {
                  key: "draw",
                  value: function (t) {
                    var e = t.canvasCtxt;
                    (e.fillStyle = t.neumeLineColor),
                      e.fillRect(
                        this.bounds.x,
                        this.bounds.y,
                        t.neumeLineWeight,
                        this.bounds.height
                      ),
                      e.fillRect(
                        this.bounds.x + this.bounds.width - t.neumeLineWeight,
                        this.bounds.y,
                        t.neumeLineWeight,
                        this.bounds.height
                      );
                  },
                },
                {
                  key: "getSvgProps",
                  value: function (t, e) {
                    return {
                      x: e,
                      y: this.bounds.y,
                      width: t.neumeLineWeight,
                      height: this.bounds.height,
                      fill: t.neumeLineColor,
                      class: "neumeLine",
                    };
                  },
                },
                {
                  key: "createSvgNode",
                  value: function (t) {
                    var e = this;
                    return P.createNode(
                      "g",
                      null,
                      [
                        this.bounds.x,
                        this.bounds.x + this.bounds.width - t.neumeLineWeight,
                      ].map(function (i) {
                        return P.createNode("rect", e.getSvgProps(t, i));
                      })
                    );
                  },
                },
                {
                  key: "createSvgTree",
                  value: function (t) {
                    var e = this;
                    return P.createSvgTree.apply(
                      P,
                      ["g", {}].concat(
                        n(
                          [
                            this.bounds.x,
                            this.bounds.x +
                              this.bounds.width -
                              t.neumeLineWeight,
                          ].map(function (i) {
                            return P.createSvgTree("rect", e.getSvgProps(t, i));
                          })
                        )
                      )
                    );
                  },
                },
                {
                  key: "createSvgFragment",
                  value: function (t) {
                    var e = this;
                    return P.createFragment(
                      "g",
                      null,
                      [
                        this.bounds.x,
                        this.bounds.x + this.bounds.width - t.neumeLineWeight,
                      ]
                        .map(function (i) {
                          return P.createFragment("rect", e.getSvgProps(t, i));
                        })
                        .join("")
                    );
                  },
                },
              ]),
              e
            );
          })(T)),
          (e.GlyphVisualizer = (function (t) {
            function e(t, i) {
              r(this, e);
              var n = s(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(this)
              );
              return (n.glyph = null), n.setGlyph(t, i), n;
            }
            return (
              o(e, t),
              l(e, [
                {
                  key: "setGlyph",
                  value: function (t, e) {
                    if (this.glyphCode !== e) {
                      "undefined" == typeof e || null === e || "" === e
                        ? (e = this.glyphCode = w.None)
                        : (this.glyphCode = e);
                      var i = (this.glyph = p.Glyphs[e]);
                      if (!t.defs.hasOwnProperty(e)) {
                        var s = function () {
                            var i = { id: e, class: "glyph" };
                            return (
                              t.scaleDefs === !0 &&
                                (i.transform = "scale(" + t.glyphScaling + ")"),
                              i
                            );
                          },
                          o = function () {
                            var n = s();
                            (t.defs[e] = P.createFragment(
                              "g",
                              n,
                              P.svgFragmentForGlyph(i)
                            )),
                              t.defsNode &&
                                t.defsNode.appendChild(
                                  P.createNode("g", n, P.nodesForGlyph(i))
                                );
                          };
                        (o.makeSvgTree = function () {
                          return P.createSvgTree.apply(
                            P,
                            ["g", s()].concat(
                              n(P.nodesForGlyph(i, "createSvgTree"))
                            )
                          );
                        }),
                          (o.glyphCode = e),
                          o(),
                          t.makeDefs.push(o);
                      }
                      this.align = this.glyph.align;
                    }
                    (this.origin.x = this.glyph.origin.x * t.glyphScaling),
                      (this.origin.y = this.glyph.origin.y * t.glyphScaling),
                      (this.bounds.x = 0),
                      (this.bounds.y = -this.origin.y),
                      (this.bounds.width =
                        this.glyph.bounds.width * t.glyphScaling),
                      (this.bounds.height =
                        this.glyph.bounds.height * t.glyphScaling);
                  },
                },
                {
                  key: "setStaffPosition",
                  value: function (t, e) {
                    this.bounds.y =
                      t.calculateHeightFromStaffPosition(e) - this.origin.y;
                  },
                },
                {
                  key: "draw",
                  value: function (t) {
                    var e = t.canvasCtxt,
                      i = this.bounds.x + this.origin.x,
                      n = this.bounds.y + this.origin.y;
                    e.translate(i, n), e.scale(t.glyphScaling, t.glyphScaling);
                    for (var s = 0; s < this.glyph.paths.length; s++) {
                      var o = this.glyph.paths[s];
                      (e.fillStyle =
                        "negative" === o.type ? "#fff" : t.neumeLineColor),
                        e.fill(new Path2D(o.data));
                    }
                    e.scale(1 / t.glyphScaling, 1 / t.glyphScaling),
                      e.translate(-i, -n);
                  },
                },
                {
                  key: "getSvgAttributes",
                  value: function (t, e) {
                    var i = "";
                    if (/^Porrectus\d$/.test(this.glyphCode)) {
                      var n = e.neume.notes,
                        s = n.indexOf(e),
                        o = n[s + 1];
                      i = e.selected
                        ? o.selected
                          ? "selected"
                          : "selectedA"
                        : o.selected
                        ? "selectedB"
                        : "";
                    } else {
                      var r =
                        e && (e.selected || (e.model && e.model.selected));
                      i = r ? "selected" : "";
                    }
                    var a = { "xlink:href": "#" + this.glyphCode, class: i };
                    if (
                      e &&
                      ((a["source-index"] = e.sourceIndex),
                      (a["element-index"] = e.elementIndex),
                      "noteIndex" in e &&
                        ((a.class += " note"),
                        (a.id = t.noteIdPrefix + (e.noteIndex + 1)),
                        e.neume))
                    ) {
                      var u = e.glyphVisualizer.glyphCode;
                      /^Porrectus/.test(u)
                        ? (a.class += " porrectus porrectus-start")
                        : "None" === u &&
                          (a.class += " porrectus porrectus-end");
                    }
                    return (
                      t.scaleDefs === !0
                        ? ((a.x = this.bounds.x + this.origin.x),
                          (a.y = this.bounds.y + this.origin.y))
                        : ((a.x =
                            (this.bounds.x + this.origin.x) / t.glyphScaling),
                          (a.y =
                            (this.bounds.y + this.origin.y) / t.glyphScaling),
                          (a.transform = "scale(" + t.glyphScaling + ")")),
                      a
                    );
                  },
                },
                {
                  key: "createSvgNode",
                  value: function (t, e) {
                    var i = this.getSvgAttributes(t, e);
                    return (i.source = e), P.createNode("use", i);
                  },
                },
                {
                  key: "createSvgTree",
                  value: function (t, e) {
                    var i = this.getSvgAttributes(t, e);
                    return e && (i.source = e), P.createSvgTree("use", i);
                  },
                },
                {
                  key: "createSvgFragment",
                  value: function (t, e) {
                    return P.createFragment("use", this.getSvgAttributes(t, e));
                  },
                },
              ]),
              e
            );
          })(T))),
        _ =
          ((e.RoundBraceVisualizer = (function (t) {
            function e(t, i, n, o, a) {
              r(this, e);
              var u = s(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(this)
              );
              if (i > n) {
                var h = i;
                (i = n), (n = h);
              }
              return (
                (u.isAbove = a),
                (u.braceHeight = (3 * t.staffInterval) / 2),
                (u.bounds = new f.Rect(
                  i,
                  a ? o - u.braceHeight : o,
                  n - i,
                  u.braceHeight
                )),
                (u.origin.x = 0),
                (u.origin.y = 0),
                u
              );
            }
            return (
              o(e, t),
              l(e, [
                {
                  key: "getSvgPathProps",
                  value: function (t) {
                    return {
                      d: this.generatePathString(),
                      stroke: t.neumeLineColor,
                      "stroke-width": t.staffLineWeight + "px",
                      fill: "none",
                      class: "brace",
                    };
                  },
                },
                {
                  key: "createSvgNode",
                  value: function (t) {
                    var e = P.createNode("path", this.getSvgPathProps(t));
                    return this.accent
                      ? P.createNode("g", { class: "accentedBrace" }, [
                          e,
                          this.accent.createSvgNode(t),
                        ])
                      : e;
                  },
                },
                {
                  key: "createSvgTree",
                  value: function (t) {
                    var e = P.createSvgTree("path", this.getSvgPathProps(t));
                    return this.accent
                      ? P.createSvgTree(
                          "g",
                          { class: "accentedBrace" },
                          e,
                          this.accent.createSvgTree(t)
                        )
                      : e;
                  },
                },
                {
                  key: "createSvgFragment",
                  value: function (t) {
                    var e = P.createFragment("path", this.getSvgPathProps(t));
                    return this.accent
                      ? ((e += this.accent.createSvgFragment(t)),
                        P.createFragment("g", { class: "accentedBrace" }, e))
                      : e;
                  },
                },
                {
                  key: "generatePathString",
                  value: function () {
                    var t,
                      e,
                      i,
                      n = this.bounds.x,
                      s = this.bounds.right(),
                      o = this.bounds.width;
                    (e = o / 6),
                      (i = this.bounds.height),
                      this.isAbove
                        ? ((t = this.bounds.bottom()), (i = -i))
                        : (t = this.bounds.y);
                    var r = n + e,
                      a = t + i,
                      u = s - e,
                      h = 2;
                    return (
                      "M " +
                      n.toFixed(h) +
                      " " +
                      t.toFixed(h) +
                      " C " +
                      r.toFixed(h) +
                      " " +
                      a.toFixed(h) +
                      " " +
                      u.toFixed(h) +
                      " " +
                      a.toFixed(h) +
                      " " +
                      s.toFixed(h) +
                      " " +
                      t.toFixed(h)
                    );
                  },
                },
              ]),
              e
            );
          })(T)),
          (e.CurlyBraceVisualizer = (function (t) {
            function e(t, i, n, o) {
              var a =
                  !(arguments.length > 4 && void 0 !== arguments[4]) ||
                  arguments[4],
                u =
                  arguments.length > 5 &&
                  void 0 !== arguments[5] &&
                  arguments[5];
              r(this, e);
              var h = s(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(this)
              );
              if (i > n) {
                var l = i;
                (i = n), (n = l);
              }
              (h.isAbove = a),
                (h.braceHeight = t.staffInterval / 2),
                a && (o -= h.braceHeight);
              var c = new f.Rect(i, o, n - i, h.braceHeight);
              return (
                u &&
                  a &&
                  ((h.accent = new O(t, w.AcuteAccent)),
                  (h.accent.bounds.x += c.x + (n - i) / 2),
                  (h.accent.bounds.y += c.y - t.staffInterval / 4),
                  c.union(h.accent.bounds)),
                (h.bounds = c),
                (h.origin.x = 0),
                (h.origin.y = 0),
                h
              );
            }
            return (
              o(e, t),
              l(e, [
                {
                  key: "getSvgPathProps",
                  value: function (t) {
                    return {
                      d: this.generatePathString(),
                      stroke: t.neumeLineColor,
                      "stroke-width": t.staffLineWeight + "px",
                      fill: "none",
                      class: "brace",
                    };
                  },
                },
                {
                  key: "createSvgNode",
                  value: function (t) {
                    var e = P.createNode("path", this.getSvgPathProps(t));
                    return this.accent
                      ? P.createNode("g", { class: "accentedBrace" }, [
                          e,
                          this.accent.createSvgNode(t),
                        ])
                      : e;
                  },
                },
                {
                  key: "createSvgTree",
                  value: function (t) {
                    var e = P.createSvgTree("path", this.getSvgPathProps(t));
                    return this.accent
                      ? P.createSvgTree(
                          "g",
                          { class: "accentedBrace" },
                          e,
                          this.accent.createSvgTree(t)
                        )
                      : e;
                  },
                },
                {
                  key: "createSvgFragment",
                  value: function (t) {
                    var e = P.createFragment("path", this.getSvgPathProps(t));
                    return this.accent
                      ? ((e += this.accent.createSvgFragment(t)),
                        P.createFragment("g", { class: "accentedBrace" }, e))
                      : e;
                  },
                },
                {
                  key: "generatePathString",
                  value: function () {
                    var t,
                      e,
                      i = 0.6,
                      n = this.bounds.x,
                      s = this.bounds.right(),
                      o = this.bounds.width;
                    this.isAbove
                      ? ((t = this.bounds.bottom()), (e = -this.braceHeight))
                      : ((t = this.bounds.y), (e = this.braceHeight));
                    var r = t + i * e,
                      a = n + 0.25 * o,
                      u = t + (1 - i) * e,
                      h = n + 0.5 * o,
                      l = t + e,
                      c = t + i * e,
                      f = n + 0.75 * o,
                      p = t + (1 - i) * e,
                      d = 2;
                    return (
                      "M " +
                      n.toFixed(d) +
                      " " +
                      t.toFixed(d) +
                      " Q " +
                      n.toFixed(d) +
                      " " +
                      r.toFixed(d) +
                      " " +
                      a.toFixed(d) +
                      " " +
                      u.toFixed(d) +
                      " T " +
                      h.toFixed(d) +
                      " " +
                      l.toFixed(d) +
                      " M " +
                      s.toFixed(d) +
                      " " +
                      t.toFixed(d) +
                      " Q " +
                      s.toFixed(d) +
                      " " +
                      c.toFixed(d) +
                      " " +
                      f.toFixed(d) +
                      " " +
                      p.toFixed(d) +
                      " T " +
                      h.toFixed(d) +
                      " " +
                      l.toFixed(d)
                    );
                  },
                },
              ]),
              e
            );
          })(T)),
          (e.TextSpan = (function () {
            function t(e, i, n) {
              var s =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 0;
              r(this, t),
                ("undefined" != typeof i && null !== i) || (i = {}),
                (this.text = e),
                (this.properties = i),
                (this.activeTags = n || []),
                (this.index = s);
            }
            return (
              l(t, [
                {
                  key: "clone",
                  value: function () {
                    return new t(
                      this.text,
                      this.properties,
                      this.activeTags,
                      this.index
                    );
                  },
                },
              ]),
              t
            );
          })()));
      u.createStackFrame = function (t, e, i) {
        var n =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          s =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        return new u(e, i, Object.assign({}, t.fontStyleDictionary[e], n), s);
      };
      var N = { "&": "&amp;", "<": "&lt;", ">": "&gt;" },
        A = (e.TextElement = (function (t) {
          function e(t, i, n, o, a, u, h) {
            r(this, e);
            var l = s(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(this)
            );
            return (
              (l.bounds.x = 0),
              (l.bounds.y = 0),
              (l.bounds.width = 0),
              (l.bounds.height = 0),
              (l.origin.x = 0),
              (l.origin.y = 0),
              (l.fontFamily = n),
              (l.fontSize = o),
              (l.textAnchor = a),
              (l.sourceIndex = u),
              (l.sourceGabc = h),
              (l.dominantBaseline = "baseline"),
              l.generateSpansFromText(t, i),
              l.recalculateMetrics(t),
              l
            );
          }
          return (
            o(e, t),
            l(
              e,
              [
                {
                  key: "getFromScore",
                  value: function (t) {
                    return this.textType.getFromScore(t, this);
                  },
                },
                {
                  key: "generateSpansFromText",
                  value: function (t, e) {
                    var i = this;
                    if (
                      ((e = e.replace(/\s+/g, " ")),
                      (this.text = ""),
                      (this.spans = []),
                      "*" === e || "+" === e || "†" === e)
                    ) {
                      var n =
                        "*" === e
                          ? t.asteriskProperties
                          : "+" === e
                          ? t.plusProperties
                          : null;
                      return (
                        (e = t.specialCharText(e) || e),
                        void this.spans.push(new _(e, n))
                      );
                    }
                    for (
                      var s = [],
                        o = 0,
                        r = 0,
                        a = function (t, e) {
                          return t.Symbol === e;
                        },
                        h = function (t, e, n) {
                          if ("" !== t || i.dropCap) {
                            i.text += t;
                            for (var o = {}, a = 0; a < s.length; a++)
                              Object.assign(o, s[a].properties);
                            n && Object.assign(o, n),
                              r && ((o.newLine = r), (r = 0)),
                              i.spans.push(
                                new _(
                                  t,
                                  o,
                                  s.map(function (t) {
                                    return t.tagName;
                                  }),
                                  e
                                )
                              );
                          }
                        },
                        l =
                          /(<br\/?>)|<v>([\s\S]*?)(?:<\/v>|$)|(\*)(?=\s*\*|[^*]*(?:$|<v>))|(\+)|<sp>(?:(~)|(')?([ao]e|[æœaeiouy])|([arv])\/)<\/sp>|([arv])\/\.|([℣℟])\.?|(?:([*_^%])|<(\/)?([bciuv]|ul|sc|font)(?:\s+(?:family="([^"]+)"|fill="([^"]+)"|class="([^"]+)"))*>)(?=(?:(.+?)(?:\11|<\/\13>))?)/gi,
                        f = /(\\grecross)|\{greextra\}\{([^}]*)\}/g,
                        p = null,
                        d = !1,
                        m = function () {
                          return h(e.substring(o, p.index), o);
                        };
                      (p = l.exec(e));

                    ) {
                      var b = p,
                        x = c(b, 18),
                        S = x[1],
                        L = x[2],
                        C = x[3],
                        w = x[4],
                        P = x[5],
                        k = x[6],
                        T = x[7],
                        O = x[8],
                        N = x[9],
                        A = x[10],
                        M = x[11],
                        I = x[12],
                        B = x[13],
                        E = x[14],
                        D = x[15],
                        F = x[16],
                        z = x[17];
                      if (((O = O || N || A), S)) p.index > o && m(), r++;
                      else if (L) {
                        m();
                        for (var j = void 0, V = 0, G = 0; (j = f.exec(L)); ) {
                          V < j.index &&
                            (h(L.slice(V, j.index), p.index + V + G), (G = 3));
                          var H = j,
                            q = c(H, 3),
                            R = q[1],
                            W = q[2];
                          R && (W = "Cross");
                          var Q = v.greextraGlyphs[W];
                          Q &&
                            h(Q, p.index + j.index + G, {
                              "font-family": "greextra",
                            }),
                            (V = f.lastIndex),
                            (G = 3);
                        }
                        V < L.length && h(L.slice(V), p.index + V + G);
                      } else if (C)
                        m(),
                          s.length > 0 && s[s.length - 1].symbol === C
                            ? s.pop()
                            : h(
                                t.specialCharText(C) || "*",
                                p.index,
                                t.asteriskProperties
                              );
                      else if (w)
                        m(),
                          h(
                            t.specialCharText(w) || "+",
                            p.index,
                            t.plusProperties
                          );
                      else if (P) m(), h("∼", p.index);
                      else if (T) {
                        var U = (0, y.makeLigature)(T);
                        k && (U = (0, g.addAccent)(U)), m(), h(U, p.index);
                      } else if (O)
                        m(),
                          h(
                            t.textBeforeSpecialChar +
                              t.specialCharText(O) +
                              t.textAfterSpecialChar,
                            p.index,
                            t.specialCharProperties
                          );
                      else {
                        if ("*" === M)
                          if (z && /[^\s*]/.test(z)) d = !0;
                          else {
                            if (!d) continue;
                            d = !1;
                          }
                        if (
                          (M &&
                            ((B = t.markupSymbolDictionary[M]),
                            s.length > 0 &&
                              s[s.length - 1].tagName === B &&
                              s[s.length - 1].symbol === M &&
                              (I = !0)),
                          s.length > 0 && s[s.length - 1].tagName === B)
                        )
                          I && (m(), s.pop());
                        else {
                          if (s.filter(a).length > 0) {
                            (o = s[s.length - 1].startIndex), s.pop();
                            continue;
                          }
                          if ((m(), I)) {
                            var J = s.findIndex(function (t) {
                              return t.tagName === B;
                            });
                            J >= 0 && s.splice(J, 1);
                          } else {
                            var $ = {};
                            E && ($["font-family"] = E),
                              D && ($.fill = D),
                              F && ($.class = F),
                              s.push(u.createStackFrame(t, B, p.index, $, M));
                          }
                        }
                      }
                      o = p.index + p[0].length;
                    }
                    (o < e.length || 0 === this.spans.length) &&
                      h(e.slice(o), o);
                  },
                },
                {
                  key: "getCanvasFontForProperties",
                  value: function (t) {
                    var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      i = "";
                    "italic" === e["font-style"] && (i += "italic "),
                      "small-caps" === e["font-variant"] &&
                        (i += "small-caps "),
                      "bold" === e["font-weight"] && (i += "bold ");
                    var n = parseFloat(e["font-size"]) || this.fontSize(t);
                    return (
                      /%$/.test(e["font-size"]) &&
                        (n *= this.fontSize(t) / 100),
                      (i += n * (this.resize || 1) + "px "),
                      (i += e["font-family"] || this.fontFamily(t))
                    );
                  },
                },
                {
                  key: "measureSubstringBBox",
                  value: function (t, e) {
                    return this.measureSubstring(t, e, !0);
                  },
                },
                {
                  key: "measureSubstring",
                  value: function (t, e) {
                    var i =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                    if (0 === e) return 0;
                    if ((e || (e = 1 / 0), e < 0)) {
                      var n = -e;
                      e = 1 / 0;
                    }
                    for (
                      var s = t.canvasCtxt,
                        o = 0,
                        r = [],
                        a = [this.spans[0]],
                        u = 0,
                        h = 1,
                        l = this.fontSize(t) * (this.resize || 1),
                        c = new f.Rect(0, 0, 0, 0),
                        p = 0;
                      p < this.spans.length;
                      p++
                    ) {
                      var d = this.spans[p],
                        g = d.text.slice(0, e - u);
                      if (d.properties.newLine) {
                        if (
                          ((h += parseInt(d.properties.newLine) || 1),
                          n || this.rightAligned !== !0 || e !== 1 / 0)
                        ) {
                          if (0 === --n) break;
                        } else
                          (a[a.length - 1].properties.xOffset =
                            this.firstLineMaxWidth - o),
                            a.push(d);
                        r.push(o), (o = 0);
                      }
                      if (t.textMeasuringStrategy === k.Canvas) {
                        s.font = this.getCanvasFontForProperties(
                          t,
                          d.properties
                        );
                        var y = s.measureText(g, o, l * (h - 1));
                        if ("actualBoundingBoxAscent" in y) {
                          var v = y.actualBoundingBoxLeft;
                          c.union(
                            new f.Rect(
                              o - v,
                              l * (h - 1) - y.actualBoundingBoxAscent,
                              y.width + v,
                              y.actualBoundingBoxDescent +
                                y.actualBoundingBoxAscent
                            )
                          ),
                            this instanceof B && (o += Math.max(0, v));
                        } else c.union(new f.Rect(o, l * (h - 2), y.width, l));
                        o += y.width;
                      } else if (
                        t.textMeasuringStrategy === k.OpenTypeJS &&
                        t.fontDictionary
                      ) {
                        var m = t.getFontForProperties(
                            d.properties,
                            d.properties["font-family"] || this.fontFamily(t)
                          ),
                          b = { features: { liga: !0 } };
                        "small-caps" === d.properties["font-variant"] &&
                          (b.features.smcp = !0);
                        var x = parseFloat(d.properties["font-size"]) || l;
                        /%$/.test(d.properties["font-size"]) && (x *= l / 100);
                        var S = m
                            .getPath(g, o, l * (h - 1), x, b)
                            .getBoundingBox(),
                          L = m.getAdvanceWidth(g, x, b);
                        c.union(
                          new f.Rect(o + S.x1, S.y1, L - S.x1, S.y2 - S.y1)
                        ),
                          (o += L),
                          this instanceof B && (o -= S.x1);
                      }
                      if (((u += g.length), u === e)) break;
                    }
                    if (
                      (!n &&
                        o &&
                        a.length &&
                        this.rightAligned === !0 &&
                        e === 1 / 0 &&
                        (a[a.length - 1].properties.xOffset =
                          this.firstLineMaxWidth - o),
                      (o = Math.max.apply(Math, [o].concat(r))),
                      i === !0)
                    ) {
                      var C = c.height,
                        w = c.y,
                        P = c.x;
                      return { width: o, height: C, x: P, y: w };
                    }
                    return o;
                  },
                },
                {
                  key: "recalculateMetrics",
                  value: function (t) {
                    var e =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1];
                    if (
                      (e &&
                        (delete this.maxWidth,
                        delete this.firstLineMaxWidth,
                        delete this.rightAligned,
                        delete this.resize,
                        delete this.numLines,
                        this.spans.forEach(function (t) {
                          delete t.properties.xOffset,
                            t.properties.newLine === !0 &&
                              (delete t.properties.newLine,
                              (t.text = " " + t.text));
                        })),
                      (this.bounds.x = 0),
                      (this.bounds.y = 0),
                      (this.origin.x = 0),
                      t.textMeasuringStrategy === k.Svg)
                    ) {
                      for (; t.svgTextMeasurer.firstChild; )
                        t.svgTextMeasurer.removeChild(
                          t.svgTextMeasurer.firstChild
                        );
                      t.svgTextMeasurer.appendChild(this.createSvgNode(t)),
                        t.svgTextMeasurer.appendChild(t.createStyleNode());
                      var i = t.svgTextMeasurer.firstChild.getBBox();
                      (this.bounds.width = i.width),
                        (this.bounds.height = i.height),
                        (this.origin.y = -i.y),
                        (this.origin.x = -i.x);
                    } else {
                      var n = this.measureSubstringBBox(t);
                      (this.bounds.width = n.width),
                        (this.bounds.height = n.height),
                        (this.origin.y = -n.y),
                        (this.origin.x = -n.x);
                    }
                    this.numLines = this.spans.reduce(function (t, e) {
                      return (
                        t +
                        (e.properties.newLine
                          ? parseInt(e.properties.newLine) || 1
                          : 0)
                      );
                    }, 1);
                  },
                },
                {
                  key: "setMaxWidth",
                  value: function (t, e) {
                    var i =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : e;
                    if (
                      (this.spans.filter(function (t) {
                        return t.properties.newLine === !0;
                      }).length && this.recalculateMetrics(t),
                      this.bounds.width > e)
                    ) {
                      this.maxWidth = e;
                      var n = e / this.bounds.width;
                      if (this instanceof I && n >= 0.85) this.resize = n;
                      else {
                        i < 0 && (i = e), (this.firstLineMaxWidth = i);
                        for (
                          var s, o = 0, r = null, a = /\s+|$/g, u = i;
                          (s = a.exec(this.text)) && (!r || s.index > r.index);

                        ) {
                          var h = this.measureSubstring(t, s.index);
                          if (h > u && r) {
                            for (
                              var l, c = 0, f = 0;
                              f < r.index && c < this.spans.length;

                            ) {
                              var p = this.spans[c++];
                              f +=
                                p.text.length + (p.properties.newLine ? 1 : 0);
                            }
                            if (f > r.index) {
                              var d = this.spans[--c];
                              f -= d.text.length;
                            }
                            var g = this.spans[c],
                              y = g.text.slice(0, r.index - f),
                              v = g.text.slice(r.index + r[0].length - f),
                              m = [];
                            if (
                              ((this.rightAligned = u === i && i !== e),
                              y && m.push(new _(y, g.properties, g.activeTags)),
                              v
                                ? m.push(
                                    new _(
                                      v,
                                      Object.assign({}, g.properties, {
                                        newLine: !0,
                                      }),
                                      g.activeTags
                                    )
                                  )
                                : this.spans[c + 1] &&
                                  (this.spans[c + 1].properties.newLine = !0),
                              (l = this.spans).splice.apply(
                                l,
                                [c, 1].concat(m)
                              ),
                              (this.needsLayout = !0),
                              (u = e),
                              s.index === this.text.length ||
                                this.measureSubstring(t) <= e)
                            )
                              break;
                            (h = 0), (s = r = null);
                          }
                          (o = h), (r = s);
                        }
                      }
                      this.recalculateMetrics(t, !1);
                    }
                  },
                },
                {
                  key: "getCssClasses",
                  value: function () {
                    return (this.textType && this.textType.cssClass) || "";
                  },
                },
                {
                  key: "getExtraStyleProperties",
                  value: function (t) {
                    return t.baseTextStyle || {};
                  },
                },
                {
                  key: "draw",
                  value: function (t) {
                    var e = t.canvasCtxt;
                    "middle" === this.textAnchor
                      ? (e.textAlign = "center")
                      : (e.textAlign = "start");
                    for (var i = 0, n = 0, s = 0; s < this.spans.length; s++) {
                      var o = this.spans[s],
                        r = o.properties.xOffset || 0;
                      o.properties.newLine
                        ? ((count = parseInt(o.properties.newLine) || 1),
                          e.translate(i + r, this.fontSize(t) * count),
                          (i = -r),
                          (n -= this.fontSize(t)))
                        : r && (e.translate(i + r, 0), (i = -r));
                      var a = Object.assign(
                        {},
                        this.getExtraStyleProperties(t),
                        o.properties
                      );
                      (e.font = this.getCanvasFontForProperties(t, a)),
                        (e.fillStyle = a.fill || "#000"),
                        e.fillText(
                          o.text,
                          this.bounds.x,
                          this.bounds.y,
                          o.properties.textLength || void 0
                        );
                      var u = e.measureText(
                        o.text,
                        this.bounds.x,
                        this.bounds.y
                      );
                      (i -= u.width), e.translate(u.width, 0);
                    }
                    e.translate(i, n);
                  },
                },
                {
                  key: "getSvgProps",
                  value: function () {
                    return {
                      "source-index": this.sourceIndex,
                      x: this.bounds.x,
                      y: this.bounds.y,
                      class: this.getCssClasses().trim(),
                      "text-anchor": this.textAnchor,
                    };
                  },
                },
                {
                  key: "getSpanOptions",
                  value: function (t, e) {
                    var i =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2],
                      n = {
                        "source-index": t.index,
                        class: t.properties.class,
                        style: i
                          ? Object.assign({}, t.properties)
                          : (0, f.getCssForProperties)(t.properties),
                      };
                    if (t.properties.newLine) {
                      var s = t.properties.xOffset || 0;
                      (n.dy =
                        1.1 * (parseInt(t.properties.newLine) || 1) + "em"),
                        (n.x = this.bounds.x + s);
                    } else
                      t.properties.xOffset &&
                        (n.x = this.bounds.x + t.properties.xOffset);
                    return (
                      t.properties.textLength &&
                        ((n.textLength = t.properties.textLength),
                        (n.lengthAdjust = "spacingAndGlyphs"),
                        (n.y = this.bounds.y)),
                      this.resize &&
                        (n["font-size"] =
                          t.properties["font-size"] ||
                          this.fontSize(e) * this.resize),
                      n
                    );
                  },
                },
                {
                  key: "createSvgNode",
                  value: function (t) {
                    for (var e = [], i = 0; i < this.spans.length; i++) {
                      var n = this.spans[i],
                        s = this.getSpanOptions(n, t);
                      e.push(P.createNode("tspan", s, n.text));
                    }
                    var o = this.getSvgProps(),
                      r = this.getExtraStyleProperties(t);
                    return (
                      (o.style = (0, f.getCssForProperties)(r)),
                      r.class && (o.class = r.class + " " + o.class),
                      (o.source = this),
                      (this.svgNode = P.createNode("text", o, e))
                    );
                  },
                },
                {
                  key: "createSvgTree",
                  value: function (t) {
                    for (var e = [], i = 0; i < this.spans.length; i++) {
                      var n = this.spans[i],
                        s = this.getSpanOptions(n, t, !0);
                      e.push(P.createSvgTree("tspan", s, n.text));
                    }
                    var o = this.getSvgProps();
                    return (
                      (o.style = this.getExtraStyleProperties(t)),
                      o.style.class &&
                        (o.class = o.style.class + " " + o.class),
                      (o.source = this),
                      P.createSvgTree.apply(P, ["text", o].concat(e))
                    );
                  },
                },
                {
                  key: "createSvgFragment",
                  value: function (t) {
                    for (var i = "", n = 0; n < this.spans.length; n++) {
                      var s = this.spans[n],
                        o = this.getSpanOptions(s, t);
                      i += P.createFragment(
                        "tspan",
                        o,
                        e.escapeForTspan(s.text)
                      );
                    }
                    var r = this.getSvgProps(),
                      a = this.getExtraStyleProperties(t);
                    return (
                      (r.style = (0, f.getCssForProperties)(a)),
                      a.class && (r.class = a.class + " " + r.class),
                      t.setFontFamilyAttributes &&
                        (r["font-size"] = this.fontSize(t)),
                      P.createFragment("text", r, i)
                    );
                  },
                },
              ],
              [
                {
                  key: "escapeForTspan",
                  value: function (t) {
                    return String(t).replace(/[&<>]/g, function (t) {
                      return N[t];
                    });
                  },
                },
              ]
            ),
            e
          );
        })(T)),
        M = (e.LyricType = {
          SingleSyllable: 0,
          BeginningSyllable: 1,
          MiddleSyllable: 2,
          EndingSyllable: 3,
          Directive: 4,
        }),
        I =
          ((e.LyricArray = {
            getLeft: function (t) {
              if (0 === t.length) return NaN;
              for (var e = Number.MAX_VALUE, i = 0; i < t.length; i++)
                t[i] &&
                  (e = Math.min(e, t[i].notation.bounds.x + t[i].bounds.x));
              return e;
            },
            getRight: function (t, e) {
              if (0 === t.length) return NaN;
              for (var i = Number.MIN_VALUE, n = 0; n < t.length; n++) {
                var s = t[n];
                s &&
                  (i = Math.max(
                    i,
                    s.notation.bounds.x +
                      s.bounds.x +
                      s.bounds.width +
                      (e && s.allowsConnector() && !s.needsConnector
                        ? s.getConnectorWidth()
                        : 0)
                  ));
              }
              return i;
            },
            hasOnlyOneLyric: function (t) {
              return (
                1 ===
                t.filter(function (t) {
                  return t.originalText;
                }).length
              );
            },
            indexOfLyric: function (t) {
              return t.indexOf(
                t.filter(function (t) {
                  return t.originalText;
                })[0]
              );
            },
            mergeIn: function (t, e) {
              for (var i = 0; i < e.length; ++i)
                (!e[i].originalText && t[i]) || (t[i] = e[i]);
            },
            mergeInArray: function (t, e) {
              for (var i = 0; i < e.length; ++i) this.mergeIn(t, e[i].lyrics);
            },
            setNotation: function (t, e) {
              e.lyrics = t;
              for (var i = 0; i < t.length; ++i) t[i].notation = e;
            },
          }),
          (e.Lyric = (function (t) {
            function e(t, i, n, o, a, u) {
              r(this, e);
              var h = s(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(
                  this,
                  t,
                  (t.textStyles.lyric.prefix || "") + i,
                  function (t) {
                    return t.textStyles.lyric.font;
                  },
                  function (t) {
                    return t.textStyles.lyric.size;
                  },
                  "start",
                  u,
                  i
                )
              );
              return (
                (h.textType = S.lyric),
                (h.originalText = i),
                (h.notation = o),
                (h.notations = a),
                "undefined" == typeof n || null === n || "" === n
                  ? (h.lyricType = M.SingleSyllable)
                  : (h.lyricType = n),
                (h.centerStartIndex = -1),
                (h.centerLength = i.length),
                (h.needsConnector = !1),
                (h.language = null),
                h.allowsConnector &&
                  (h.connectorSpan = new _(t.syllableConnector)),
                h
              );
            }
            return (
              o(e, t),
              l(e, [
                {
                  key: "allowsConnector",
                  value: function () {
                    return (
                      this.lyricType === M.BeginningSyllable ||
                      this.lyricType === M.MiddleSyllable
                    );
                  },
                },
                {
                  key: "setForceConnector",
                  value: function (t) {
                    this.forceConnector = t && this.allowsConnector();
                  },
                },
                {
                  key: "setNeedsConnector",
                  value: function (t, e) {
                    if (t === !0 || this.forceConnector)
                      (this.needsConnector = !0),
                        "undefined" != typeof e
                          ? this.setConnectorWidth(e)
                          : (this.bounds.width =
                              this.widthWithoutConnector +
                              this.getConnectorWidth()),
                        this.spans.length > 0 &&
                          this.spans[this.spans.length - 1] !==
                            this.connectorSpan &&
                          this.spans.push(this.connectorSpan);
                    else {
                      (this.connectorWidth = 0),
                        (this.needsConnector = !1),
                        (this.bounds.width = this.widthWithoutConnector);
                      var i = this.spans.pop();
                      i && i !== this.connectorSpan && this.spans.push(i);
                    }
                  },
                },
                {
                  key: "setConnectorWidth",
                  value: function (t) {
                    (this.connectorWidth = t),
                      (this.connectorSpan.properties = Object.assign(
                        {},
                        this.connectorSpan.properties,
                        { textLength: t }
                      )),
                      this.needsConnector &&
                        (this.bounds.width =
                          this.widthWithoutConnector +
                          this.getConnectorWidth());
                  },
                },
                {
                  key: "getConnectorWidth",
                  value: function () {
                    return this.connectorWidth || this.defaultConnectorWidth;
                  },
                },
                {
                  key: "getLeft",
                  value: function () {
                    return this.notation.bounds.x + this.bounds.x;
                  },
                },
                {
                  key: "getRight",
                  value: function () {
                    return (
                      this.notation.bounds.x + this.bounds.x + this.bounds.width
                    );
                  },
                },
                {
                  key: "recalculateMetrics",
                  value: function (t) {
                    var i =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1];
                    this.setNeedsConnector(),
                      h(
                        e.prototype.__proto__ ||
                          Object.getPrototypeOf(e.prototype),
                        "recalculateMetrics",
                        this
                      ).call(this, t, i),
                      (this.widthWithoutConnector = this.bounds.width),
                      (this.connectorWidth = 0),
                      (this.defaultConnectorWidth = t.hyphenWidth);
                    var n,
                      s,
                      o = this.language || t.defaultLanguage,
                      r = this.widthWithoutConnector / 2,
                      a = this.widthWithoutConnector;
                    if (
                      (this.centerStartIndex >= 0 &&
                        (this.centerStartIndex >= this.text.length ||
                          this.centerLength < 0 ||
                          this.centerStartIndex + this.centerLength >
                            this.text.length) &&
                        (this.centerStartIndex = -1),
                      0 === this.text.length)
                    )
                      this.dropCap &&
                        this.originalText &&
                        ((r = t.hyphenWidth / 2), (a = t.hyphenWidth));
                    else if (this.centerStartIndex >= 0)
                      t.textMeasuringStrategy === k.Svg
                        ? ((n = t.svgTextMeasurer.firstChild.getSubStringLength(
                            0,
                            this.centerStartIndex
                          )),
                          (s = t.svgTextMeasurer.firstChild.getSubStringLength(
                            0,
                            this.centerStartIndex + this.centerLength
                          )))
                        : ((n = this.measureSubstring(
                            t,
                            this.centerStartIndex
                          )),
                          (s = this.measureSubstring(
                            t,
                            this.centerStartIndex + this.centerLength
                          ))),
                        (r = (n + s) / 2),
                        (a = s - n);
                    else if (this.lyricType !== M.Directive) {
                      var u = this.text.lastIndexOf(" ") + 1;
                      u > 0 &&
                        !this.text
                          .slice(u)
                          .match(/[a-záéíóúýäëïöüÿàèìòùỳāēīōūȳăĕĭŏŭ]/i) &&
                        (u = 0);
                      var l = o.findVowelSegment(this.text, u);
                      if (l.found !== !0) {
                        var c = this.text.slice(u).match(/[a-z]+/i);
                        c
                          ? ((l.startIndex = u + c.index),
                            (l.length = c[0].length))
                          : ((l.startIndex = u),
                            (l.length = this.text.length - u));
                      }
                      t.textMeasuringStrategy === k.Svg
                        ? ((n = t.svgTextMeasurer.firstChild.getSubStringLength(
                            0,
                            l.startIndex
                          )),
                          (s = t.svgTextMeasurer.firstChild.getSubStringLength(
                            0,
                            l.startIndex + l.length
                          )))
                        : ((n = this.measureSubstring(t, l.startIndex)),
                          (s = this.measureSubstring(
                            t,
                            l.startIndex + l.length
                          ))),
                        (r = (n + s) / 2),
                        (a = s - n);
                    }
                    (this.vowelSegmentWidth = a),
                      (this.bounds.x = -r),
                      (this.bounds.y = 0),
                      (this.origin.x = r);
                  },
                },
                {
                  key: "generateDropCap",
                  value: function (t) {
                    if (this.dropCap) return this.dropCap;
                    if (
                      this.spans[0].properties["font-family"] ===
                      t.specialCharProperties["font-family"]
                    )
                      return null;
                    var e = this.spans[0].clone();
                    e.text = e.text.slice(0, 1).toUpperCase();
                    var i = e.text.toLowerCase();
                    if (e.text === i) return null;
                    e.activeTags.indexOf("sc") >= 0 && (e.text = i);
                    var n = (this.dropCap = new B(t, "", this.sourceIndex));
                    n.spans = [e];
                    var s = this.sourceGabc.match(
                      /^(?:<\/?[^>]>)*.?(?:<\/[^>]>)*/
                    )[0].length;
                    return (
                      (n.sourceGabc = this.sourceGabc.slice(0, s)),
                      (this.sourceIndex += n.sourceGabc.length),
                      (this.sourceGabc = this.sourceGabc.slice(s)),
                      (this.spans[0].text = this.spans[0].text.slice(1)),
                      (this.text = this.text.slice(1)),
                      this.centerStartIndex--,
                      n
                    );
                  },
                },
                {
                  key: "getCssClasses",
                  value: function () {
                    var t = this.lyricType === M.Directive ? "directive " : "";
                    return (
                      t +
                      h(
                        e.prototype.__proto__ ||
                          Object.getPrototypeOf(e.prototype),
                        "getCssClasses",
                        this
                      ).call(this)
                    );
                  },
                },
                {
                  key: "getExtraStyleProperties",
                  value: function (t) {
                    var i = h(
                      e.prototype.__proto__ ||
                        Object.getPrototypeOf(e.prototype),
                      "getExtraStyleProperties",
                      this
                    ).call(this, t);
                    return (
                      this.lyricType === M.Directive &&
                        t.autoColor === !0 &&
                        (i = Object.assign({}, i, { fill: t.rubricColor })),
                      i
                    );
                  },
                },
              ]),
              e
            );
          })(A))),
        B =
          ((e.ChoralSign = (function (t) {
            function e(t, i, n, o) {
              r(this, e);
              var a = s(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(
                  this,
                  t,
                  (t.textStyles.choralSign.prefix || "") + i,
                  function (t) {
                    return t.textStyles.choralSign.font;
                  },
                  S.choralSign.size,
                  "start",
                  o,
                  i
                )
              );
              return (
                (a.positionHint = x.Default),
                (a.note = n),
                (a.textType = S.choralSign),
                a
              );
            }
            return (
              o(e, t),
              l(e, [
                {
                  key: "recalculateMetrics",
                  value: function (t) {
                    h(
                      e.prototype.__proto__ ||
                        Object.getPrototypeOf(e.prototype),
                      "recalculateMetrics",
                      this
                    ).call(this, t);
                  },
                },
                {
                  key: "performLayout",
                  value: function (t) {
                    this.recalculateMetrics(t),
                      (this.bounds.x =
                        this.note.bounds.x +
                        Math.max(0, (t.staffInterval - this.bounds.width) / 2));
                    var e = void 0,
                      i = void 0;
                    this.positionHint === x.Below
                      ? ((e = -1),
                        (i = this.note.staffPosition + 2 * e),
                        (i += i % 2 === 0 ? 0.3 : 1))
                      : ((e = 1),
                        (i = this.note.staffPosition + 2 * e),
                        (i += i % 2 === 0 ? 0.3 : -0.4)),
                      (this.bounds.y =
                        t.calculateHeightFromStaffPosition(i) + this.origin.y);
                  },
                },
              ]),
              e
            );
          })(A)),
          (e.AboveLinesText = (function (t) {
            function e(t, i, n, o) {
              r(this, e);
              var a = s(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(
                  this,
                  t,
                  (t.textStyles.al.prefix || "") + i,
                  function (t) {
                    return t.textStyles.al.font;
                  },
                  function (t) {
                    return t.textStyles.al.size;
                  },
                  "start",
                  o,
                  i
                )
              );
              return (
                (a.notation = n),
                (a.textType = S.al),
                (a.padding = t.staffInterval / 2),
                a
              );
            }
            return o(e, t), e;
          })(A)),
          (e.TranslationText = (function (t) {
            function e(t, i, n, o) {
              r(this, e);
              var a = i,
                u = "start";
              "/" === i
                ? ((i = ""), (u = "end"))
                : (i = (t.textStyles.translation.prefix || "") + i);
              var h = s(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(
                  this,
                  t,
                  i,
                  function (t) {
                    return t.textStyles.translation.font;
                  },
                  function (t) {
                    return t.textStyles.translation.size;
                  },
                  u,
                  o,
                  a
                )
              );
              return (
                (h.notation = n),
                (h.textType = S.translation),
                (h.padding = t.staffInterval / 2),
                h
              );
            }
            return o(e, t), e;
          })(A)),
          (e.DropCap = (function (t) {
            function e(t, i, n) {
              r(this, e);
              var o = s(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(
                  this,
                  t,
                  (t.textStyles.dropCap.prefix || "") + i,
                  function (t) {
                    return t.textStyles.dropCap.font;
                  },
                  function (t) {
                    return t.textStyles.dropCap.size;
                  },
                  "middle",
                  n,
                  i
                )
              );
              return (
                (o.textType = S.dropCap),
                (o.padding = t.staffInterval * t.textStyles.dropCap.padding),
                o
              );
            }
            return o(e, t), e;
          })(A))),
        E = (e.TitleTextElement = (function (t) {
          function e(t, i, n, o, a, u, h) {
            return (
              r(this, e),
              s(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(
                  this,
                  t,
                  i,
                  n,
                  o,
                  a,
                  u,
                  h
                )
              )
            );
          }
          return o(e, t), e;
        })(A)),
        D =
          ((e.Supertitle = (function (t) {
            function e(t, i, n) {
              r(this, e);
              var o = s(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(
                  this,
                  t,
                  (t.textStyles.supertitle.prefix || "") + i,
                  function (t) {
                    return t.textStyles.supertitle.font;
                  },
                  function (t) {
                    return t.textStyles.supertitle.size;
                  },
                  "middle",
                  n,
                  i
                )
              );
              return (
                (o.textType = S.supertitle),
                (o.padding = function (t) {
                  return (
                    ((Number(t.textStyles.supertitle.padding) || 1) *
                      t.textStyles.supertitle.size) /
                    3
                  );
                }),
                o
              );
            }
            return o(e, t), e;
          })(E)),
          (e.Title = (function (t) {
            function e(t, i, n) {
              r(this, e);
              var o = s(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(
                  this,
                  t,
                  (t.textStyles.title.prefix || "") + i,
                  function (t) {
                    return t.textStyles.title.font;
                  },
                  function (t) {
                    return t.textStyles.title.size;
                  },
                  "middle",
                  n,
                  i
                )
              );
              return (
                (o.textType = S.title),
                (o.padding = function (t) {
                  return (
                    ((Number(t.textStyles.title.padding) || 1) *
                      t.textStyles.title.size) /
                    3
                  );
                }),
                o
              );
            }
            return o(e, t), e;
          })(E)),
          (e.Subtitle = (function (t) {
            function e(t, i, n) {
              r(this, e);
              var o = s(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(
                  this,
                  t,
                  (t.textStyles.subtitle.prefix || "") + i,
                  function (t) {
                    return t.textStyles.subtitle.font;
                  },
                  function (t) {
                    return t.textStyles.subtitle.size;
                  },
                  "middle",
                  n,
                  i
                )
              );
              return (
                (o.textType = S.subtitle),
                (o.padding = function (t) {
                  return (
                    ((Number(t.textStyles.subtitle.padding) || 1) *
                      t.textStyles.subtitle.size) /
                    3
                  );
                }),
                o
              );
            }
            return o(e, t), e;
          })(E)),
          (e.TextLeftRight = (function (t) {
            function e(t, i, n, o) {
              r(this, e);
              var a = s(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(
                  this,
                  t,
                  (t.textStyles.leftRight.prefix || "") + i,
                  function (t) {
                    return t.textStyles.leftRight.font;
                  },
                  function (t) {
                    return t.textStyles.leftRight.size;
                  },
                  "textLeft" === n ? "start" : "end",
                  o,
                  i
                )
              );
              return (
                (a.textType = S.leftRight),
                (a.extraClass = "textLeft" === n ? "textLeft" : "textRight"),
                (a.headerKey = "textLeft" === n ? "text-left" : "text-right"),
                (a.padding = function (t) {
                  return (
                    ((Number(t.textStyles.leftRight.padding) || 1) *
                      t.textStyles.leftRight.size) /
                    5
                  );
                }),
                a
              );
            }
            return (
              o(e, t),
              l(e, [
                {
                  key: "getCssClasses",
                  value: function () {
                    return (
                      this.extraClass +
                      " " +
                      h(
                        e.prototype.__proto__ ||
                          Object.getPrototypeOf(e.prototype),
                        "getCssClasses",
                        this
                      ).call(this)
                    );
                  },
                },
              ]),
              e
            );
          })(E)),
          (e.Annotation = (function (t) {
            function e(t, i) {
              r(this, e);
              var n = s(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(
                  this,
                  t,
                  (t.textStyles.annotation.prefix || "") + i,
                  function (t) {
                    return t.textStyles.annotation.font;
                  },
                  function (t) {
                    return t.textStyles.annotation.size;
                  },
                  "middle"
                )
              );
              return (
                (n.textType = S.annotation),
                (n.padding = t.staffInterval * t.textStyles.annotation.padding),
                (n.dominantBaseline = "hanging"),
                n
              );
            }
            return o(e, t), e;
          })(A)));
      (e.Annotations = (function (t) {
        function e(t) {
          r(this, e);
          var i = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          i.lineHeight = 1.1;
          for (
            var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), a = 1;
            a < n;
            a++
          )
            o[a - 1] = arguments[a];
          return (
            (i.annotations = o.map(function (e) {
              return new D(t, e);
            })),
            (i.padding = Math.max.apply(
              null,
              i.annotations.map(function (t) {
                return t.padding;
              })
            )),
            i
          );
        }
        return (
          o(e, t),
          l(e, [
            {
              key: "updateBounds",
              value: function (t) {
                t || (t = 1);
                for (var e = 0; e < this.annotations.length; ++e) {
                  var i = this.annotations[e];
                  (i.bounds.x += this.bounds.x * t),
                    (i.bounds.y += this.bounds.y * t);
                }
              },
            },
            {
              key: "recalculateMetrics",
              value: function (t) {
                (this.bounds.x = 0),
                  (this.bounds.y = 0),
                  (this.bounds.width = 0),
                  (this.bounds.height = 0),
                  (this.origin.x = 0),
                  (this.origin.y = 0);
                for (var e = 0, i = 0; i < this.annotations.length; ++i) {
                  var n = this.annotations[i];
                  n.recalculateMetrics(t),
                    (this.bounds.width = Math.max(
                      this.bounds.width,
                      n.bounds.width
                    )),
                    (n.bounds.y += e),
                    (this.bounds.height = n.bounds.bottom()),
                    (this.origin.y = this.origin.y || n.origin.y),
                    (e += n.fontSize(t) * (n.resize || 1) * this.lineHeight);
                }
              },
            },
            {
              key: "draw",
              value: function (t) {
                this.updateBounds(),
                  this.annotations.forEach(function (e) {
                    e.draw(t);
                  }),
                  this.updateBounds(-1);
              },
            },
            {
              key: "createSvgNode",
              value: function (t) {
                this.updateBounds();
                var e = this.annotations.map(function (e) {
                  return e.createSvgNode(t);
                });
                return this.updateBounds(-1), e;
              },
            },
            {
              key: "createSvgTree",
              value: function (t) {
                this.updateBounds();
                var e = this.annotations.map(function (e) {
                  return e.createSvgTree(t);
                });
                return this.updateBounds(-1), { children: e };
              },
            },
            {
              key: "createSvgFragment",
              value: function (t) {
                this.updateBounds();
                var e = this.annotations
                  .map(function (e) {
                    return e.createSvgFragment(t);
                  })
                  .join("");
                return this.updateBounds(-1), e;
              },
            },
          ]),
          e
        );
      })(T)),
        (e.ChantNotationElement = (function (t) {
          function e() {
            r(this, e);
            var t = s(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(this)
            );
            return (
              (t.leadingSpace = 0),
              (t.trailingSpace = C),
              (t.keepWithNext = !1),
              (t.needsLayout = !0),
              (t.lyrics = []),
              (t.score = null),
              (t.line = null),
              (t.visualizers = []),
              t
            );
          }
          return (
            o(e, t),
            l(e, [
              {
                key: "hasLyrics",
                value: function () {
                  return 0 !== this.lyrics.length;
                },
              },
              {
                key: "getAllLyricsLeft",
                value: function () {
                  if (0 === this.lyrics.length) return this.bounds.right();
                  for (
                    var t = Number.MAX_VALUE, e = 0;
                    e < this.lyrics.length;
                    e++
                  )
                    this.lyrics[e] &&
                      (t = Math.min(t, this.lyrics[e].bounds.x));
                  return this.bounds.x + t;
                },
              },
              {
                key: "getAllLyricsRight",
                value: function () {
                  if (0 === this.lyrics.length) return this.bounds.x;
                  for (
                    var t = Number.MIN_VALUE, e = 0;
                    e < this.lyrics.length;
                    e++
                  )
                    this.lyrics[e] &&
                      (t = Math.max(
                        t,
                        this.lyrics[e].bounds.x + this.lyrics[e].bounds.width
                      ));
                  return this.bounds.x + t;
                },
              },
              {
                key: "addVisualizer",
                value: function (t) {
                  t.ignoreBounds ||
                    (this.bounds.isEmpty()
                      ? (this.bounds = t.bounds.clone())
                      : this.bounds.union(t.bounds)),
                    this.visualizers.push(t);
                },
              },
              {
                key: "prependVisualizer",
                value: function (t) {
                  this.bounds.isEmpty()
                    ? (this.bounds = t.bounds.clone())
                    : this.bounds.union(t.bounds),
                    this.visualizers.unshift(t);
                },
              },
              {
                key: "performLayout",
                value: function (t) {
                  "function" == typeof this.trailingSpace
                    ? (this.calculatedTrailingSpace = this.trailingSpace(t))
                    : (this.calculatedTrailingSpace = this.trailingSpace),
                    (this.visualizers = []),
                    (this.bounds = new f.Rect(
                      1 / 0,
                      1 / 0,
                      -(1 / 0),
                      -(1 / 0)
                    ));
                  for (var e = 0; e < this.lyrics.length; e++)
                    this.lyrics[e].recalculateMetrics(t);
                  if (this.alText)
                    for (e = 0; e < this.alText.length; e++)
                      this.alText[e].recalculateMetrics(t);
                  if (this.translationText)
                    for (e = 0; e < this.translationText.length; e++)
                      this.translationText[e].recalculateMetrics(t);
                },
              },
              { key: "resetDependencies", value: function () {} },
              {
                key: "finishLayout",
                value: function (t) {
                  var e = this;
                  this.bounds.x = 0;
                  var i =
                      (this.lyrics[0] && this.lyrics[0].language) ||
                      t.defaultLanguage,
                    n = i.centerNeume
                      ? function (i) {
                          return (i.bounds.x =
                            e.bounds.width + t.staffInterval <
                            i.vowelSegmentWidth
                              ? e.bounds.width / 2 - i.origin.x
                              : e.origin.x - i.origin.x);
                        }
                      : function (t) {
                          return (t.bounds.x = e.origin.x - t.origin.x);
                        };
                  this.lyrics.forEach(n), (this.needsLayout = !1);
                },
              },
              {
                key: "draw",
                value: function (t) {
                  var e = t.canvasCtxt;
                  e.translate(this.bounds.x, 0);
                  for (var i = 0; i < this.visualizers.length; i++)
                    this.visualizers[i].draw(t);
                  for (i = 0; i < this.lyrics.length; i++)
                    this.lyrics[i].draw(t);
                  if (this.translationText)
                    for (i = 0; i < this.translationText.length; i++)
                      this.translationText[i].draw(t);
                  if (this.alText)
                    for (i = 0; i < this.alText.length; i++)
                      this.alText[i].draw(t);
                  e.translate(-this.bounds.x, 0);
                },
              },
              {
                key: "getInnerSvgNodes",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "createSvgNode",
                    i = [];
                  for (s = 0; s < this.lyrics.length; s++)
                    i.push(this.lyrics[s][e](t));
                  if (this.translationText)
                    for (s = 0; s < this.translationText.length; s++)
                      i.push(this.translationText[s][e](t));
                  if (this.alText)
                    for (s = 0; s < this.alText.length; s++)
                      i.push(this.alText[s][e](t));
                  if (this.visualizers.length) {
                    for (var n = [], s = 0; s < this.visualizers.length; s++)
                      n.push(this.visualizers[s][e](t, this));
                    "createSvgTree" === e
                      ? i.push(
                          P.createSvgTree.apply(
                            P,
                            ["g", { class: "Notations" }].concat(n)
                          )
                        )
                      : i.push(P.createNode("g", { class: "Notations" }, n));
                  }
                  return i;
                },
              },
              {
                key: "getSvgProps",
                value: function () {
                  return {
                    class: "ChantNotationElement " + this.constructor.name + " " + this.glyphCode, // TELEPORT
                    transform: "translate(" + this.bounds.x + ",0)",
                  };
                },
              },
              {
                key: "createSvgNode",
                value: function (t) {
                  var e = this.getInnerSvgNodes(t, "createSvgNode"),
                    i = this.getSvgProps();
                  return (i.source = this), P.createNode("g", i, e);
                },
              },
              {
                key: "createSvgTree",
                value: function (t) {
                  var e = this.getInnerSvgNodes(t, "createSvgTree"),
                    i = this.getSvgProps();
                  return (
                    (i.source = this),
                    P.createSvgTree.apply(P, ["g", i].concat(n(e)))
                  );
                },
              },
              {
                key: "createSvgFragment",
                value: function (t) {
                  var e = "";
                  for (i = 0; i < this.lyrics.length; i++)
                    e += this.lyrics[i].createSvgFragment(t);
                  if (this.translationText)
                    for (i = 0; i < this.translationText.length; i++)
                      e += this.translationText[i].createSvgFragment(t);
                  if (this.alText)
                    for (i = 0; i < this.alText.length; i++)
                      e += this.alText[i].createSvgFragment(t);
                  for (var i = 0; i < this.visualizers.length; i++)
                    e += this.visualizers[i].createSvgFragment(t, this);
                  return P.createFragment("g", this.getSvgProps(), e);
                },
              },
            ]),
            e
          );
        })(T));
    },
    function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      e.addAccent = function (t) {
        return (
          {
            Æ: "Ǽ",
            Œ: "Œ́",
            A: "Á",
            E: "É",
            I: "Í",
            O: "Ó",
            U: "Ú",
            Y: "Ý",
            æ: "ǽ",
            œ: "œ́",
            a: "á",
            e: "é",
            i: "í",
            o: "ó",
            u: "ú",
            y: "ý",
          }[t] || t
        );
      };
    },
    function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      e.makeLigature = function (t) {
        return { AE: "Æ", Ae: "Æ", ae: "æ", OE: "Œ", Oe: "Œ", oe: "œ" }[t] || t;
      };
    },
    function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      e.greextraGlyphs = {
        MedicaeaFlat: "",
        HufnagelCustosUpShort: "",
        HufnagelCustosUpLong: "",
        HufnagelCustosUpMedium: "",
        HufnagelCustosDownShort: "",
        HufnagelCustosDownLong: "",
        HufnagelCustosDownMedium: "",
        MedicaeaCustosUpShort: "",
        MedicaeaCustosUpLong: "",
        MedicaeaCustosUpMedium: "",
        MedicaeaCustosDownShort: "",
        MedicaeaCustosDownLong: "",
        MedicaeaCustosDownMedium: "",
        MensuralCustosUpShort: "",
        MensuralCustosUpLong: "",
        MensuralCustosUpMedium: "",
        MensuralCustosDownShort: "",
        MensuralCustosDownLong: "",
        MensuralCustosDownMedium: "",
        MensuralFlat: "",
        HufnagelFlat: "",
        MedicaeaCClef: "",
        MedicaeaCClefChange: "",
        MedicaeaFClef: "",
        MedicaeaFClefChange: "",
        HufnagelCClef: "",
        HufnagelCClefChange: "",
        HufnagelFClef: "",
        HufnagelFClefChange: "",
        HugnagelCFClef: "",
        HufnagelCFClefChange: "",
        MensuralFlatHole: "",
        HufnagelFlatHole: "",
        MedicaeaFlatHole: "",
        StarSix: "",
        Dagger: "",
        "Bar.alt": "",
        StarHeight: "",
        Cross: "",
        "RBar.alt": "",
        "VBar.alt": "",
        Drawing1: "",
        Drawing2: "",
        RWithBarGoth: "",
        VWithBarGoth: "",
        Line1: "",
        Line2: "",
        Line3: "",
        Line4: "",
        Line5: "",
        "Cross.alt": "",
        ABarCaption: "",
        RBarCaption: "",
        VBarCaption: "",
        ABarCaptionSC: "",
        RBarCaptionSC: "",
        VBarCaptionSC: "",
        ABar: "",
        RBar: "",
        VBar: "",
        ABarSC: "",
        RBarSC: "",
        VBarSC: "",
        ABarSmall: "",
        RBarSmall: "",
        VBarSmall: "",
        ABarSmallSC: "",
        RBarSmallSC: "",
        VBarSmallSC: "",
        "RBar.alt2": "",
        "VBar.alt2": "",
        ABarCaptionSlant: "",
        RBarCaptionSlant: "",
        VBarCaptionSlant: "",
        ABarSlant: "",
        RBarSlant: "",
        VBarSlant: "",
        ABarSmallSlant: "",
        RBarSmallSlant: "",
        VBarSmallSlant: "",
      };
    },
    function (t, e, i) {
      "use strict";
      function n(t) {
        if (Array.isArray(t)) {
          for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
          return i;
        }
        return Array.from(t);
      }
      function s(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      }
      function r(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ChantDocument =
          e.ChantScore =
          e.ChantMapping =
          e.ChantLineBreak =
          e.TextOnly =
          e.FaClef =
          e.DoClef =
          e.Clef =
          e.Note =
          e.NoteShapeModifiers =
          e.NoteShape =
          e.LiquescentType =
            void 0);
      var a = function t(e, i, n) {
          null === e && (e = Function.prototype);
          var s = Object.getOwnPropertyDescriptor(e, i);
          if (void 0 === s) {
            var o = Object.getPrototypeOf(e);
            return null === o ? void 0 : t(o, i, n);
          }
          if ("value" in s) return s.value;
          var r = s.get;
          if (void 0 !== r) return r.call(n);
        },
        u = (function () {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        })(),
        h = i(9),
        l = i(11),
        c = i(1),
        f = i(4),
        p = i(12),
        d = i(14),
        g = (e.LiquescentType = {
          None: 0,
          Large: 1,
          Small: 2,
          Ascending: 4,
          Descending: 8,
          InitioDebilis: 16,
          LargeAscending: 5,
          LargeDescending: 9,
          SmallAscending: 6,
          SmallDescending: 10,
        }),
        y = (e.NoteShape = {
          Default: 0,
          Virga: 1,
          Inclinatum: 2,
          Quilisma: 3,
          Stropha: 4,
          Oriscus: 5,
        }),
        v = (e.NoteShapeModifiers = {
          None: 0,
          Ascending: 1,
          Descending: 2,
          Cavum: 4,
          Stemmed: 8,
          Linea: 16,
          Reverse: 32,
        }),
        m = (e.Note = (function (t) {
          function e(t) {
            s(this, e);
            var i = o(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(this)
            );
            return (
              "undefined" != typeof t ? (i.pitch = t) : (i.pitch = null),
              (i.glyphVisualizer = null),
              (i.staffPosition = 0),
              (i.liquescent = g.None),
              (i.shape = y.Default),
              (i.shapeModifiers = v.None),
              (i.neume = null),
              (i.episemata = []),
              (i.morae = []),
              i
            );
          }
          return (
            r(e, t),
            u(e, [
              {
                key: "setGlyph",
                value: function (t, e) {
                  this.glyphVisualizer
                    ? this.glyphVisualizer.setGlyph(t, e)
                    : (this.glyphVisualizer = new f.GlyphVisualizer(t, e)),
                    this.glyphVisualizer.setStaffPosition(
                      t,
                      this.staffPosition
                    ),
                    (this.bounds.x = this.glyphVisualizer.bounds.x),
                    (this.bounds.y = this.glyphVisualizer.bounds.y),
                    (this.bounds.width = this.glyphVisualizer.bounds.width),
                    (this.bounds.height = this.glyphVisualizer.bounds.height),
                    (this.origin.x = this.glyphVisualizer.origin.x),
                    (this.origin.y = this.glyphVisualizer.origin.y);
                },
              },
              {
                key: "shapeModifierMatches",
                value: function (t) {
                  return t === v.None
                    ? this.shapeModifier === v.None
                    : this.shapeModifier & (0 !== t);
                },
              },
              {
                key: "draw",
                value: function (t) {
                  (this.glyphVisualizer.bounds.x = this.bounds.x),
                    (this.glyphVisualizer.bounds.y = this.bounds.y),
                    this.glyphVisualizer.draw(t);
                },
              },
              {
                key: "createSvgNode",
                value: function (t) {
                  return (
                    (this.glyphVisualizer.bounds.x = this.bounds.x),
                    (this.glyphVisualizer.bounds.y = this.bounds.y),
                    (this.svgNode = this.glyphVisualizer.createSvgNode(
                      t,
                      this
                    )),
                    this.svgNode
                  );
                },
              },
              {
                key: "createSvgTree",
                value: function (t) {
                  return (
                    (this.glyphVisualizer.bounds.x = this.bounds.x),
                    (this.glyphVisualizer.bounds.y = this.bounds.y),
                    this.glyphVisualizer.createSvgTree(t, this)
                  );
                },
              },
              {
                key: "createSvgFragment",
                value: function (t) {
                  return (
                    (this.glyphVisualizer.bounds.x = this.bounds.x),
                    (this.glyphVisualizer.bounds.y = this.bounds.y),
                    this.glyphVisualizer.createSvgFragment(t, this)
                  );
                },
              },
            ]),
            e
          );
        })(f.ChantLayoutElement)),
        b = (e.Clef = (function (t) {
          function e(t, i) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            s(this, e);
            var r = o(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(this)
            );
            return (
              (r.isClef = !0),
              (r.staffPosition = t),
              (r.octave = i),
              (r.defaultAccidental = n),
              (r.activeAccidental = n),
              (r.keepWithNext = !0),
              r
            );
          }
          return (
            r(e, t),
            u(
              e,
              [
                {
                  key: "resetAccidentals",
                  value: function () {
                    this.activeAccidental = this.defaultAccidental;
                  },
                },
                { key: "pitchToStaffPosition", value: function (t) {} },
                {
                  key: "performLayout",
                  value: function (t) {
                    (t.activeClef = this),
                      this.defaultAccidental &&
                        this.defaultAccidental.performLayout(t),
                      a(
                        e.prototype.__proto__ ||
                          Object.getPrototypeOf(e.prototype),
                        "performLayout",
                        this
                      ).call(this, t);
                  },
                },
                {
                  key: "finishLayout",
                  value: function (t) {
                    if (this.defaultAccidental) {
                      var i = this.defaultAccidental.createGlyphVisualizer(t);
                      (i.bounds.x +=
                        this.visualizers[0].bounds.right() +
                        t.intraNeumeSpacing),
                        this.addVisualizer(i);
                    }
                    a(
                      e.prototype.__proto__ ||
                        Object.getPrototypeOf(e.prototype),
                      "finishLayout",
                      this
                    ).call(this, t);
                  },
                },
                {
                  key: "clone",
                  value: function t() {
                    if (this.model) return this.model.clone();
                    var t = new this.constructor(
                      this.staffPosition,
                      this.octave,
                      this.defaultAccidental
                    );
                    return (
                      (t.sourceGabc = this.sourceGabc),
                      (t.sourceIndex = this.sourceIndex),
                      (t.elementIndex = this.elementIndex),
                      (t.model = this),
                      t
                    );
                  },
                },
              ],
              [
                {
                  key: "default",
                  value: function () {
                    return S;
                  },
                },
              ]
            ),
            e
          );
        })(f.ChantNotationElement)),
        x = (e.DoClef = (function (t) {
          function e(t, i) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            s(this, e);
            var r = o(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, n)
            );
            return (r.leadingSpace = 0), r;
          }
          return (
            r(e, t),
            u(e, [
              {
                key: "pitchToStaffPosition",
                value: function (t) {
                  return (
                    7 * (t.octave - this.octave) +
                    this.staffPosition +
                    c.Pitch.stepToStaffOffset(t.step) -
                    c.Pitch.stepToStaffOffset(c.Step.Do)
                  );
                },
              },
              {
                key: "staffPositionToPitch",
                value: function (t) {
                  var e = t - this.staffPosition,
                    i = Math.floor(e / 7),
                    n = c.Pitch.staffOffsetToStep(e);
                  return (
                    this.activeAccidental &&
                      this.activeAccidental.staffPosition === t &&
                      (n += this.activeAccidental.accidentalType),
                    new c.Pitch(n, this.octave + i)
                  );
                },
              },
              {
                key: "performLayout",
                value: function (t) {
                  a(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "performLayout",
                    this
                  ).call(this, t);
                  var i = new f.GlyphVisualizer(t, f.GlyphCode.DoClef);
                  i.setStaffPosition(t, this.staffPosition),
                    this.addVisualizer(i),
                    this.finishLayout(t);
                },
              },
            ]),
            e
          );
        })(b)),
        S = new x(3, 2),
        L =
          ((e.FaClef = (function (t) {
            function e(t, i) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null;
              s(this, e);
              var r = o(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i, n)
              );
              return (r.octave = i), (r.leadingSpace = 0), r;
            }
            return (
              r(e, t),
              u(e, [
                {
                  key: "pitchToStaffPosition",
                  value: function (t) {
                    return (
                      7 * (t.octave - this.octave) +
                      this.staffPosition +
                      c.Pitch.stepToStaffOffset(t.step) -
                      c.Pitch.stepToStaffOffset(c.Step.Fa)
                    );
                  },
                },
                {
                  key: "staffPositionToPitch",
                  value: function (t) {
                    var e = t - this.staffPosition + 3,
                      i = Math.floor(e / 7),
                      n = c.Pitch.staffOffsetToStep(e);
                    return (
                      this.activeAccidental &&
                        this.activeAccidental.staffPosition === t &&
                        (n += this.activeAccidental.accidentalType),
                      new c.Pitch(n, this.octave + i)
                    );
                  },
                },
                {
                  key: "performLayout",
                  value: function (t) {
                    a(
                      e.prototype.__proto__ ||
                        Object.getPrototypeOf(e.prototype),
                      "performLayout",
                      this
                    ).call(this, t);
                    var i = new f.GlyphVisualizer(t, f.GlyphCode.FaClef);
                    i.setStaffPosition(t, this.staffPosition),
                      this.addVisualizer(i),
                      this.finishLayout(t);
                  },
                },
              ]),
              e
            );
          })(b)),
          (e.TextOnly = (function (t) {
            function e(t, i) {
              s(this, e);
              var n = o(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(this)
              );
              return (
                (n.sourceIndex = t),
                (n.sourceLength = i),
                (n.sourceGabc = ""),
                (n.trailingSpace = 0),
                n
              );
            }
            return (
              r(e, t),
              u(e, [
                {
                  key: "performLayout",
                  value: function (t) {
                    a(
                      e.prototype.__proto__ ||
                        Object.getPrototypeOf(e.prototype),
                      "performLayout",
                      this
                    ).call(this, t),
                      this.addVisualizer(
                        new f.GlyphVisualizer(t, f.GlyphCode.None)
                      ),
                      (this.origin.x = 0),
                      (this.origin.y = 0),
                      this.finishLayout(t);
                  },
                },
              ]),
              e
            );
          })(f.ChantNotationElement))),
        C =
          ((e.ChantLineBreak = (function (t) {
            function e(t) {
              s(this, e);
              var i = o(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(this)
              );
              return (
                (i.calculatedTrailingSpace = i.trailingSpace = 0),
                (i.justify = t),
                i
              );
            }
            return (
              r(e, t),
              u(e, [
                {
                  key: "performLayout",
                  value: function (t) {
                    this.bounds = new c.Rect(0, 0, 0, 0);
                  },
                },
                {
                  key: "clone",
                  value: function () {
                    var t = new e();
                    return (t.justify = this.justify), t;
                  },
                },
              ]),
              e
            );
          })(f.ChantNotationElement)),
          (e.ChantMapping = function t(e, i, n) {
            s(this, t),
              (this.source = e),
              (this.notations = i),
              (this.sourceIndex = n);
          }),
          new f.TextSpan(" • ")),
        w = function () {
          for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          return e.reduce(function (t, e) {
            return t && t.length
              ? e && e.length
                ? t.concat(C, e)
                : t
              : e && e.length
              ? e
              : [];
          });
        },
        P = (e.ChantScore = (function () {
          function t(e) {
            var i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [],
              n = arguments[2];
            s(this, t),
              (this.mappings = i),
              (this.lines = []),
              (this.notes = []),
              e && (this.titles = new d.Titles(e, this)),
              (this.startingClef = null),
              (this.useDropCap = n),
              (this.dropCap = null),
              (this.annotation = null),
              (this.compiled = !1),
              (this.autoColoring = !0),
              (this.needsLayout = !0),
              (this.bounds = new c.Rect()),
              (this.mergeAnnotationWithTextLeft = w),
              e && this.updateNotations(e);
          }
          return (
            u(t, [
              {
                key: "copyLines",
                value: function (e, i) {
                  var n = new t();
                  (n.lines = this.lines.slice(e, i)),
                    (n.bounds = this.bounds.clone());
                  var s = n.lines.slice(-1)[0];
                  return (
                    (n.bounds.height = s.bounds.bottom() - s.origin.y),
                    0 === e &&
                      ((n.titles = this.titles),
                      (n.dropCap = this.dropCap),
                      (n.annotation = this.annotation)),
                    n
                  );
                },
              },
              {
                key: "updateSelection",
                value: function (t) {
                  this.selection = t;
                  var e = (t && t.element) || { indices: [] },
                    i = e.indices,
                    n = e.insertion;
                  !n &&
                    1 === i.length &&
                    this.notes[i[0]] instanceof L &&
                    (n = { afterElementIndex: i[0] });
                  for (var s = 0; s < this.notes.length; ++s) {
                    var o = this.notes[s];
                    o.selected = i.includes(s);
                  }
                  (this.startingClef.model || this.startingClef).selected =
                    i.includes(-1);
                  for (var r = 0; r < this.lines.length; ++r)
                    this.lines[r].insertionCursor = null;
                  this.insertionElement = null;
                  var a = null;
                  n &&
                    ("number" == typeof n.chantLine
                      ? ((a = this.lines[n.chantLine]),
                        (this.insertionElement = a.startingClef),
                        (a.insertionCursor = new l.InsertionCursor()))
                      : "number" == typeof n.afterElementIndex &&
                        ((this.insertionElement =
                          this.notes[n.afterElementIndex]),
                        this.insertionElement
                          ? this.insertionElement.neume &&
                            (this.insertionElement =
                              this.insertionElement.neume)
                          : ((a = this.lines[0]),
                            (this.insertionElement = a.startingClef)),
                        a ||
                          (a =
                            this.insertionElement.line ||
                            this.lines[this.lines.length - 1]),
                        (a.insertionCursor = new l.InsertionCursor())));
                },
              },
              {
                key: "updateNotations",
                value: function (t) {
                  var e, i, n, s;
                  (this.notations = []),
                    (this.notes = []),
                    (this.hasLyrics = !1),
                    (this.hasAboveLinesText = !1),
                    (this.hasTranslations = !1);
                  var o = (this.selection && this.selection.element) || {
                      indices: [],
                    },
                    r = o.indices,
                    a = 0;
                  for (
                    this.startingClef = null, e = 0;
                    e < this.mappings.length;
                    e++
                  )
                    for (
                      n = this.mappings[e], i = 0;
                      i < n.notations.length;
                      i++
                    ) {
                      if (
                        ((s = n.notations[i]),
                        (s.score = this),
                        (s.mapping = n),
                        !this.startingClef)
                      )
                        if (s.isNeume) this.startingClef = b.default();
                        else if (s.isClef) {
                          this.startingClef = s;
                          continue;
                        }
                      (s.notationIndex = this.notations.push(s) - 1),
                        !this.hasLyrics &&
                          s.hasLyrics() &&
                          (this.hasLyrics = !0),
                        !this.hasAboveLinesText &&
                          s.alText &&
                          (this.hasAboveLinesText = !0),
                        !this.hasTranslations &&
                          s.translationText &&
                          (this.hasTranslations = !0);
                      var u = s.notes || [s],
                        h = !0,
                        l = !1,
                        c = void 0;
                      try {
                        for (
                          var f, p = u[Symbol.iterator]();
                          !(h = (f = p.next()).done);
                          h = !0
                        ) {
                          var d = f.value,
                            g = (d.elementIndex = this.notes.push(d) - 1);
                          d instanceof m ? (d.noteIndex = g - a) : ++a,
                            (d.selected = r.includes(g));
                        }
                      } catch (t) {
                        (l = !0), (c = t);
                      } finally {
                        try {
                          !h && p.return && p.return();
                        } finally {
                          if (l) throw c;
                        }
                      }
                    }
                  this.startingClef || (this.startingClef = b.default()),
                    (this.startingClef.elementIndex = -1),
                    this.useDropCap
                      ? this.recreateDropCap(t)
                      : (this.dropCap = null),
                    (this.needsLayout = !0);
                },
              },
              {
                key: "recreateDropCap",
                value: function (t) {
                  this.dropCap = null;
                  for (var e = 0; e < this.notations.length; e++)
                    if (
                      this.notations[e].hasLyrics() &&
                      null !== this.notations[e].lyrics[0] &&
                      this.notations[e].lyrics[0].spans &&
                      this.notations[e].lyrics[0].spans.length
                    ) {
                      var i = this.notations[e],
                        n = i.lyrics[0];
                      return (
                        this.useDropCap
                          ? (this.dropCap = n.generateDropCap(t))
                          : ((n.dropCap = null),
                            n.generateSpansFromText(t, n.originalText)),
                        void (i.needsLayout = !0)
                      );
                    }
                },
              },
              {
                key: "initializeLayout",
                value: function (t) {
                  (t.activeClef = this.startingClef),
                    (t.notations = this.notations),
                    (t.currNotationIndex = 0),
                    this.dropCap && this.dropCap.recalculateMetrics(t),
                    this.annotation && this.annotation.recalculateMetrics(t);
                },
              },
              {
                key: "performLayout",
                value: function (t, e) {
                  if (e || this.needsLayout !== !1) {
                    t.updateHyphenWidth(), this.initializeLayout(t);
                    for (var i = 0; i < this.notations.length; i++) {
                      var n = this.notations[i];
                      (e || n.needsLayout) &&
                        ((t.currNotationIndex = i), n.performLayout(t));
                    }
                    this.needsLayout = !1;
                  }
                },
              },
              {
                key: "performLayoutAsync",
                value: function (t, e) {
                  var i = this;
                  return this.needsLayout === !1
                    ? void (
                        e &&
                        setTimeout(function () {
                          return e();
                        }, 0)
                      )
                    : t.onFontLoaded
                    ? void t.onFontLoaded.push(function () {
                        return i.performLayoutAsync(t, e);
                      })
                    : (t.updateHyphenWidth(),
                      !t.hyphenWidth ||
                      t.hyphenWidth / t.textStyles.lyric.size > 0.6
                        ? void setTimeout(function () {
                            i.performLayoutAsync(t, e);
                          }, 100)
                        : (this.initializeLayout(t),
                          void setTimeout(function () {
                            return i.layoutElementsAsync(t, 0, e);
                          }, 0)));
                },
              },
              {
                key: "layoutElementsAsync",
                value: function (t, e, i) {
                  var n = this;
                  if (e >= this.notations.length)
                    return (
                      (this.needsLayout = !1),
                      void (
                        i &&
                        setTimeout(function () {
                          return i();
                        }, 0)
                      )
                    );
                  0 === e && (t.activeClef = this.startingClef);
                  var s = new Date().getTime() + 50;
                  do {
                    var o = this.notations[e];
                    o.needsLayout &&
                      ((t.currNotationIndex = e), o.performLayout(t)),
                      e++;
                  } while (
                    e < this.notations.length &&
                    new Date().getTime() < s
                  );
                  setTimeout(function () {
                    return n.layoutElementsAsync(t, e, i);
                  }, 0);
                },
              },
              {
                key: "layoutChantLines",
                value: function (t, e, i) {
                  if (
                    ((this.lines = []),
                    this.mergeAnnotationWithTextLeft &&
                      this.annotation &&
                      !this.dropCap)
                  ) {
                    var s = this.annotation,
                      o = s.annotations
                        ? s.annotations.map(function (t) {
                            return t.spans;
                          })
                        : [s.spans];
                    (this.overrideTextLeft = new f.TextLeftRight(
                      t,
                      "",
                      "textLeft"
                    )),
                      t.mapAnnotationSpansToTextLeft &&
                        (o = o.map(t.mapAnnotationSpansToTextLeft)),
                      (this.overrideTextLeft.spans =
                        this.mergeAnnotationWithTextLeft.apply(
                          this,
                          n(o).concat([
                            this.titles.textLeft && this.titles.textLeft.spans,
                          ])
                        ));
                  } else this.overrideTextLeft = null;
                  var r = e > 0 ? this.titles.layoutTitles(t, e) : 0,
                    a = 0;
                  t.activeClef = this.startingClef;
                  var u = t.staffInterval * t.spaceBetweenSystems;
                  do {
                    var l = new h.ChantLine(this);
                    l.buildFromChantNotationIndex(t, a, e),
                      (a = l.notationsStartIndex + l.numNotationsOnLine),
                      l.performLayout(t),
                      (l.elementIndex = this.lines.length),
                      this.lines.push(l),
                      (l.bounds.y = -l.bounds.y + r),
                      (r += l.bounds.height + u);
                  } while (a < this.notations.length);
                  var c = this.lines[this.lines.length - 1];
                  (this.bounds.x = 0),
                    (this.bounds.y = 0),
                    (this.bounds.width = c.bounds.width),
                    (this.bounds.height = r - u),
                    (this.pages = [this]),
                    this.selection && this.updateSelection(this.selection),
                    i && i(this);
                },
              },
              {
                key: "paginate",
                value: function (t) {
                  if (t) {
                    this.pages = [];
                    for (var e = 0, i = 0, n = 1; n < this.lines.length; ++n) {
                      var s = this.lines[n],
                        o = s.bounds.bottom() - e - s.origin.y;
                      o > t
                        ? (this.pages.push(this.copyLines(i, n)),
                          (i = n),
                          (e = s.bounds.y - s.origin.y),
                          (s.bounds.y = s.origin.y))
                        : (s.bounds.y -= e);
                    }
                    this.pages.push(this.copyLines(i, this.lines.length));
                  }
                },
              },
              {
                key: "draw",
                value: function (t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 1;
                  t.setCanvasSize(this.bounds.width, this.bounds.height, e);
                  var i = t.canvasCtxt;
                  i.clearRect(0, 0, t.canvas.width, t.canvas.height),
                    i.translate(this.bounds.x, this.bounds.y),
                    this.titles && this.titles.draw(t);
                  for (var n = 0; n < this.lines.length; n++)
                    this.lines[n].draw(t);
                  i.translate(-this.bounds.x, -this.bounds.y);
                },
              },
              {
                key: "getSvgProps",
                value: function (t, e) {
                  var i =
                      "number" == typeof e
                        ? e * this.bounds.width
                        : e
                        ? void 0
                        : this.bounds.width,
                    n = e ? void 0 : this.bounds.height;
                  return {
                    xmlns: "http://www.w3.org/2000/svg",
                    version: "1.1",
                    class:
                      "Exsurge ChantScore" +
                      (t.editable ? " EditableChantScore" : ""),
                    width: i,
                    height: n,
                    viewBox: [0, 0, this.bounds.width, this.bounds.height].join(
                      " "
                    ),
                  };
                },
              },
              {
                key: "createSvgNode",
                value: function (t) {
                  var e = [t.defsNode.cloneNode(!0)];
                  e[0].appendChild(t.createStyleNode()),
                    this.titles && e.push(this.titles.createSvgNode(t));
                  for (var i = 0; i < this.lines.length; i++)
                    e.push(this.lines[i].createSvgNode(t));
                  return (
                    (e = f.QuickSvg.createNode("g", {}, e)),
                    (e = f.QuickSvg.createNode("svg", this.getSvgProps(t), e)),
                    (e.source = this),
                    (this.svg = e),
                    e
                  );
                },
              },
              {
                key: "createSvgTree",
                value: function (t, e) {
                  var i = [
                    f.QuickSvg.createSvgTree.apply(
                      f.QuickSvg,
                      ["defs", {}].concat(
                        n(
                          t.makeDefs.map(function (t) {
                            return t.makeSvgTree();
                          })
                        ),
                        [t.createStyleTree()]
                      )
                    ),
                  ];
                  this.titles && i.push(this.titles.createSvgTree(t));
                  for (var s = 0; s < this.lines.length; s++)
                    i.push(this.lines[s].createSvgTree(t));
                  i = f.QuickSvg.createSvgTree.apply(
                    f.QuickSvg,
                    ["g", {}].concat(n(i))
                  );
                  var o = this.getSvgProps(t, e);
                  return (
                    (o.source = this),
                    (i = f.QuickSvg.createSvgTree("svg", o, i))
                  );
                },
              },
              {
                key: "createSvg",
                value: function (t) {
                  var e = "";
                  for (var i in t.defs)
                    t.defs.hasOwnProperty(i) && (e += t.defs[i]);
                  (e += t.createStyle()),
                    (e = f.QuickSvg.createFragment("defs", {}, e)),
                    this.titles && (e += this.titles.createSvgFragment(t));
                  for (var n = 0; n < this.lines.length; n++)
                    e += this.lines[n].createSvgFragment(t);
                  return (
                    (e = f.QuickSvg.createFragment("g", {}, e)),
                    (e = f.QuickSvg.createFragment(
                      "svg",
                      this.getSvgProps(t),
                      e
                    ))
                  );
                },
              },
              {
                key: "createSvgNodeForEachLine",
                value: function (t) {
                  for (var e = [], i = 0, n = 0; n < this.lines.length; n++) {
                    var s = [
                      t.defsNode.cloneNode(!0),
                      this.lines[n].createSvgNode(t, i),
                    ];
                    s[0].appendChild(t.createStyleNode());
                    var o = this.lines[n].bounds.height + 1.5 * t.staffInterval;
                    (s = f.QuickSvg.createNode("g", {}, s)),
                      (s = f.QuickSvg.createNode(
                        "svg",
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          version: "1.1",
                          class: "Exsurge ChantScore",
                          width: this.bounds.width,
                          height: o,
                          viewBox: [0, 0, this.bounds.width, o].join(" "),
                        },
                        s
                      )),
                      e.push(s),
                      (i += o);
                  }
                  return e;
                },
              },
              {
                key: "createSvgForEachLine",
                value: function (t) {
                  var e = "",
                    i = "";
                  for (var n in t.defs)
                    t.defs.hasOwnProperty(n) && (i += t.defs[n]);
                  (i += t.createStyle()),
                    (i = f.QuickSvg.createFragment("defs", {}, i));
                  for (var s = 0, o = 0; o < this.lines.length; o++) {
                    var r = i + this.lines[o].createSvgFragment(t, s),
                      a = this.lines[o].bounds.height + 1.5 * t.staffInterval;
                    (r = f.QuickSvg.createFragment("g", {}, r)),
                      (r = f.QuickSvg.createFragment(
                        "svg",
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          version: "1.1",
                          "xmlns:xlink": "http://www.w3.org/1999/xlink",
                          class: "Exsurge ChantScore",
                          width: this.bounds.width,
                          height: a,
                        },
                        r
                      )),
                      (e += r),
                      (s += a);
                  }
                  return e;
                },
              },
              {
                key: "unserializeFromJson",
                value: function (t, e) {
                  (this.autoColoring = t["auto-coloring"]),
                    null !== t.annotation && "" !== t.annotation
                      ? (this.annotation = new f.Annotation(e, t.annotation))
                      : (this.annotation = null);
                  var i = "auto" === t["drop-cap"];
                  p.Gabc.parseChantNotations(t.notations, this, i);
                },
              },
              {
                key: "serializeToJson",
                value: function () {
                  var t = {};
                  return (
                    (t.type = "score"),
                    (t["auto-coloring"] = !0),
                    null !== this.annotation
                      ? (t.annotation = this.annotation.unsanitizedText)
                      : (t.annotation = ""),
                    t
                  );
                },
              },
            ]),
            t
          );
        })());
      e.ChantDocument = (function () {
        function t() {
          s(this, t);
          var e = {
            layout: {
              units: "mm",
              "default-font": { "font-family": "Crimson", "font-size": 14 },
              page: {
                width: 8.5,
                height: 11,
                "margin-left": 0,
                "margin-top": 0,
                "margin-right": 0,
                "margin-bottom": 0,
              },
            },
            scores: [],
          };
          this.copyLayout(this, e), (this.scores = e.scores);
        }
        return (
          u(t, [
            {
              key: "copyLayout",
              value: function (t, e) {
                t.layout = {
                  units: e.layout.units,
                  "default-font": {
                    "font-family": e.layout["default-font"]["font-family"],
                    "font-size": e.layout["default-font"]["font-size"],
                  },
                  page: {
                    width: e.layout.page.width,
                    height: e.layout.page.height,
                    "margin-left": e.layout.page["margin-left"],
                    "margin-top": e.layout.page["margin-top"],
                    "margin-right": e.layout.page["margin-right"],
                    "margin-bottom": e.layout.page["margin-bottom"],
                  },
                };
              },
            },
            {
              key: "unserializeFromJson",
              value: function (t) {
                this.copyLayout(this, t), (this.scores = []);
                for (var e = 0; e < t.scores.length; e++) {
                  var i = new P();
                  i.unserializeFromJson(t.scores[e]), this.scores.push(i);
                }
              },
            },
            {
              key: "serializeToJson",
              value: function () {
                var t = {};
                this.copyLayout(t, this), (t.scores = []);
                for (var e = 0; e < this.scores.length; e++)
                  t.scores.push(this.scores[e].serializeToJson());
                return t;
              },
            },
          ]),
          t
        );
      })();
    },
    function (t, e, i) {
      "use strict";
      function n(t) {
        if (Array.isArray(t)) {
          for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
          return i;
        }
        return Array.from(t);
      }
      function s(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      }
      function r(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ChantLine = void 0);
      var a = (function () {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        })(),
        u = i(8),
        h = i(10),
        l = i(11),
        c = i(1),
        f = i(4),
        p = i(3);
      e.ChantLine = (function (t) {
        function e(t) {
          s(this, e);
          var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          return (
            (i.score = t),
            (i.notationsStartIndex = 0),
            (i.numNotationsOnLine = 0),
            (i.notationBounds = null),
            (i.staffLeft = 0),
            (i.staffRight = 0),
            (i.startingClef = null),
            (i.custos = null),
            (i.justify = !0),
            (i.ledgerLines = []),
            (i.braces = []),
            (i.nextLine = null),
            (i.previousLine = null),
            (i.lyricLineHeight = 0),
            (i.lyricLineBaseline = 0),
            (i.numLyricLines = 0),
            (i.spaceAfterNotations = 0),
            (i.spaceBetweenTextTracks = 0),
            (i.lastLyrics = []),
            i
          );
        }
        return (
          r(e, t),
          a(e, [
            {
              key: "performLayout",
              value: function (t) {
                this.notationBounds = new c.Rect(
                  this.staffLeft,
                  -(t.staffLineWeight / 2 + 3 + t.minSpaceAboveStaff) *
                    t.staffInterval,
                  this.staffRight - this.staffLeft,
                  (t.staffLineWeight + 6 + t.minSpaceAboveStaff) *
                    t.staffInterval
                );
                var e,
                  i = this.score.notations,
                  n =
                    null === this.extraTextOnlyIndex
                      ? this.notationsStartIndex + this.numNotationsOnLine
                      : this.extraTextOnlyIndex,
                  s = this.notationsStartIndex + this.numNotationsOnLine,
                  o = null;
                for (
                  this.notationBounds.union(this.startingClef.bounds),
                    this.lyricLineHeight = 1.1 * t.textStyles.lyric.size,
                    this.lyricLineBaseline = 0,
                    this.numLyricLines = 0,
                    this.altLineHeight = 0,
                    this.altLineBaseline = 0,
                    this.numAltLines = 0,
                    this.translationLineHeight =
                      1.1 * t.textStyles.translation.size,
                    this.translationLineBaseline = 0,
                    this.numTranslationLines = 0,
                    e = this.notationsStartIndex;
                  e < n;
                  e++
                )
                  (o = i[e]),
                    this.notationBounds.union(o.bounds),
                    o.lyrics.length &&
                      o.lyrics[0].text &&
                      (o.lyrics[0].origin.y > this.lyricLineBaseline &&
                        (this.lyricLineBaseline = o.lyrics[0].origin.y),
                      o.lyrics.length > this.numLyricLines &&
                        (this.numLyricLines = o.lyrics.length)),
                    o.alText &&
                      this.numAltLines < o.alText.length &&
                      (o.alText[0].bounds.height > this.altLineHeight &&
                        (this.altLineHeight = o.alText[0].bounds.height),
                      o.alText[0].origin.y > this.altLineBaseline &&
                        (this.altLineBaseline = o.alText[0].origin.y),
                      o.alText.length > this.numAltLines &&
                        (this.numAltLines = o.alText.length)),
                    o.translationText &&
                      o.translationText[0] &&
                      o.translationText[0].text &&
                      (o.translationText[0].origin.y >
                        this.translationLineBaseline &&
                        (this.translationLineBaseline =
                          o.translationText[0].origin.y),
                      o.translationText.length > this.numTranslationLines &&
                        (this.numTranslationLines = o.translationText.length));
                for (
                  this.custos && this.notationBounds.union(this.custos.bounds),
                    e = 0;
                  e < this.braces.length;
                  e++
                )
                  this.notationBounds.union(this.braces[e].bounds);
                var r =
                  this.notationBounds.bottom() +
                  t.minSpaceBelowStaff * t.staffInterval;
                for (
                  this.lyricLineBaseline += r,
                    this.translationLineBaseline += r,
                    this.altLineBaseline +=
                      this.notationBounds.y -
                      this.altLineHeight -
                      0.5 * t.staffInterval,
                    e = this.notationsStartIndex;
                  e < n;
                  e++
                ) {
                  o = i[e];
                  for (var a = 0, h = 0; h < o.lyrics.length; h++)
                    (o.lyrics[h].bounds.y = a + this.lyricLineBaseline),
                      (a += this.lyricLineHeight);
                  if (o.translationText)
                    for (h = 0; h < o.translationText.length; h++)
                      (o.translationText[h].bounds.y =
                        a + this.translationLineBaseline),
                        (a += this.translationLineHeight);
                  if (o.alText)
                    for (a = 0, h = 0; h < o.alText.length; h++)
                      (o.alText[h].bounds.y = a + this.altLineBaseline),
                        (a -= 1.1 * t.textStyles.al.size);
                }
                if (((this.extraTextOnlyHeight = 0), t.useExtraTextOnly)) {
                  var l = this.extraTextOnlyLyricIndex;
                  if (null === this.extraTextOnlyIndex) {
                    var f = i[n - 1] || {};
                    f.constructor === u.ChantLineBreak && (f = i[n - 2]),
                      f.constructor === u.TextOnly &&
                        1 === f.lyrics.length &&
                        f.lyrics[0].bounds.height > this.lyricLineHeight &&
                        (this.extraTextOnlyHeight = this.lyricLineHeight);
                  } else {
                    var p = null,
                      d = 0;
                    (a = (this.numLyricLines - 1) * this.lyricLineHeight),
                      (a +=
                        this.numTranslationLines * this.translationLineHeight);
                    var g = 0;
                    for (e = this.extraTextOnlyIndex; e < s; e++)
                      (o = i[e]),
                        o.lyrics[l] &&
                          ((p = o.lyrics[l]),
                          p.lineWidth &&
                            ((d = this.staffRight - p.lineWidth),
                            (a += this.lyricLineHeight),
                            g++),
                          (g += p.numLines - 1),
                          (p.bounds.y = a + this.lyricLineBaseline),
                          (o.bounds.x += d));
                    this.extraTextOnlyHeight = this.lyricLineHeight * g;
                  }
                }
                if (this.startingClef.hasLyrics())
                  for (a = 0, h = 0; h < this.startingClef.lyrics.length; h++)
                    (this.startingClef.lyrics[h].bounds.y =
                      a + this.lyricLineBaseline),
                      (a += this.lyricLineHeight);
                if (0 === this.notationsStartIndex) {
                  if (null !== this.score.annotation) {
                    if (
                      ((this.score.annotation.bounds.x = this.staffLeft / 2),
                      (this.score.annotation.bounds.y = 3 * -t.staffInterval),
                      null !== this.score.dropCap)
                    ) {
                      var y =
                        this.lyricLineBaseline -
                        this.score.annotation.bounds.height -
                        t.staffInterval * t.textStyles.annotation.padding -
                        this.score.dropCap.origin.y;
                      y < this.score.annotation.bounds.y
                        ? (this.score.annotation.bounds.y = y)
                        : (this.score.annotation.bounds.y =
                            (this.score.annotation.bounds.y + y) / 2),
                        this.score.annotation.bounds.y <
                          this.notationBounds.y &&
                          ((this.notationBounds.y =
                            this.score.annotation.bounds.y),
                          (this.notationBounds.height +=
                            this.notationBounds.y -
                            this.score.annotation.bounds.y));
                    }
                    this.score.annotation.bounds.y +=
                      this.score.annotation.origin.y;
                  }
                  null !== this.score.dropCap &&
                    ((this.score.dropCap.bounds.x = this.staffLeft / 2),
                    (this.score.dropCap.bounds.y =
                      this.lyricLineBaseline - this.score.dropCap.origin.y),
                    this.notationBounds.union(this.score.dropCap.bounds),
                    (this.score.dropCap.bounds.y = this.lyricLineBaseline));
                }
                if (this.numLyricLines > 0) {
                  var v = new c.Rect(
                    0,
                    r,
                    0,
                    this.lyricLineHeight * this.numLyricLines +
                      this.extraTextOnlyHeight +
                      this.translationLineHeight * this.numTranslationLines
                  );
                  this.notationBounds.union(v);
                }
                if (this.numAltLines > 0) {
                  var m = new c.Rect(
                    0,
                    this.notationBounds.y -
                      this.altLineHeight -
                      0.5 * t.staffInterval -
                      1.1 * t.textStyles.al.size * (this.numAltLines - 1),
                    0,
                    1.1 * t.textStyles.al.size * this.numAltLines
                  );
                  this.notationBounds.union(m);
                }
                this.notationBounds.union(
                  new c.Rect(
                    0,
                    0,
                    0,
                    (3 + t.staffLineWeight / 2 + t.minSpaceBelowStaff) *
                      t.staffInterval
                  )
                );
                var b = this.notationBounds.height;
                (this.bounds.x = 0),
                  (this.bounds.y = this.notationBounds.y),
                  (this.bounds.width = this.notationBounds.right()),
                  (this.bounds.height = b),
                  (this.origin = new c.Point(
                    this.staffLeft,
                    -this.notationBounds.y
                  ));
              },
            },
            {
              key: "layoutInsertionCursor",
              value: function (t) {
                return (
                  this.insertionCursor &&
                    (this.insertionCursor.performLayout(t),
                    (this.insertionCursor.bounds.x =
                      this.score.insertionElement.bounds.right() +
                      ((this.score.insertionElement.trailingSpace &&
                        this.score.insertionElement.calculatedTrailingSpace) ||
                        0) /
                        2 -
                      this.insertionCursor.origin.x)),
                  this.insertionCursor
                );
              },
            },
            {
              key: "draw",
              value: function (t) {
                var e = t.canvasCtxt;
                e.translate(this.bounds.x, this.bounds.y);
                var i,
                  n,
                  s = this.staffLeft,
                  o = this.staffRight;
                for (
                  e.lineWidth = t.staffLineWeight,
                    e.strokeStyle = t.staffLineColor,
                    i = -3;
                  i <= 3;
                  i += 2
                )
                  (n = t.staffInterval * i),
                    e.beginPath(),
                    e.moveTo(s, n),
                    e.lineTo(o, n),
                    e.stroke();
                for (
                  this.layoutInsertionCursor(t) && this.insertionCursor.draw(t),
                    i = 0;
                  i < this.ledgerLines.length;
                  i++
                ) {
                  var r = this.ledgerLines[i];
                  (n = t.calculateHeightFromStaffPosition(r.staffPosition)),
                    e.beginPath(),
                    e.moveTo(r.x1, n),
                    e.lineTo(r.x2, n),
                    e.stroke();
                }
                0 === this.notationsStartIndex &&
                  (null !== this.score.dropCap && this.score.dropCap.draw(t),
                  null === this.score.annotation ||
                    (this.score.mergeAnnotationWithTextLeft &&
                      !this.score.dropCap) ||
                    this.score.annotation.draw(t));
                var a = this.score.notations,
                  u = this.notationsStartIndex + this.numNotationsOnLine;
                for (i = this.notationsStartIndex; i < u; i++) a[i].draw(t);
                this.startingClef.draw(t),
                  this.custos && this.custos.draw(t),
                  e.translate(-this.bounds.x, -this.bounds.y);
              },
            },
            {
              key: "getInnerNodes",
              value: function (t) {
                var e,
                  i =
                    (arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : { quickSvg: "createNode", elements: "createSvgNode" }),
                  n = [],
                  s = this.staffLeft,
                  o = this.staffRight;
                for (
                  t.editable &&
                    n.push(
                      f.QuickSvg[i.quickSvg]("rect", {
                        key: "insertion",
                        x: s,
                        y: t.staffInterval * -3,
                        width: o - s,
                        height: 6 * t.staffInterval,
                        fill: "none",
                      })
                    ),
                    e = -3;
                  e <= 3;
                  e += 2
                )
                  n.push(
                    f.QuickSvg[i.quickSvg]("line", {
                      key: e,
                      x1: s,
                      y1: t.staffInterval * e,
                      x2: o,
                      y2: t.staffInterval * e,
                      stroke: t.staffLineColor,
                      "stroke-width": t.staffLineWeight,
                      class: "staffLine",
                    })
                  );
                for (
                  n = [f.QuickSvg[i.quickSvg]("g", { class: "staffLines" }, n)],
                    this.layoutInsertionCursor(t) &&
                      n.push(this.insertionCursor[i.elements](t)),
                    e = 0;
                  e < this.ledgerLines.length;
                  e++
                ) {
                  var r = this.ledgerLines[e],
                    a = t.calculateHeightFromStaffPosition(r.staffPosition);
                  n.push(
                    f.QuickSvg[i.quickSvg]("line", {
                      x1: r.x1,
                      y1: a,
                      x2: r.x2,
                      y2: a,
                      stroke: t.staffLineColor,
                      "stroke-width": t.staffLineWeight,
                      class: "ledgerLine",
                    })
                  );
                }
                for (e = 0; e < this.braces.length; e++)
                  n.push(this.braces[e][i.elements](t));
                0 === this.notationsStartIndex &&
                  (null !== this.score.dropCap &&
                    n.push(this.score.dropCap[i.elements](t)),
                  null === this.score.annotation ||
                    (this.score.mergeAnnotationWithTextLeft &&
                      !this.score.dropCap) ||
                    (n = n.concat(this.score.annotation[i.elements](t)))),
                  n.push(this.startingClef[i.elements](t));
                var u = this.score.notations,
                  h = this.notationsStartIndex + this.numNotationsOnLine;
                for (e = this.notationsStartIndex; e < h; e++)
                  n.push(u[e][i.elements](t));
                return this.custos && n.push(this.custos[i.elements](t)), n;
              },
            },
            {
              key: "createSvgNode",
              value: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                  i = this.getInnerNodes(t, e, {
                    quickSvg: "createNode",
                    elements: "createSvgNode",
                  });
                return f.QuickSvg.createNode(
                  "g",
                  {
                    class: "chantLine",
                    transform:
                      "translate(" +
                      this.bounds.x +
                      "," +
                      (this.bounds.y - e) +
                      ")",
                    "element-index": this.elementIndex,
                    source: this,
                  },
                  i
                );
              },
            },
            {
              key: "createSvgTree",
              value: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                  i = this.getInnerNodes(t, e, {
                    quickSvg: "createSvgTree",
                    elements: "createSvgTree",
                  });
                return f.QuickSvg.createSvgTree.apply(
                  f.QuickSvg,
                  [
                    "g",
                    {
                      class: "chantLine",
                      transform:
                        "translate(" +
                        this.bounds.x +
                        "," +
                        (this.bounds.y - e) +
                        ")",
                      "element-index": this.elementIndex,
                    },
                  ].concat(n(i))
                );
              },
            },
            {
              key: "createSvgFragment",
              value: function (t) {
                var e,
                  i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                  n = "",
                  s = this.staffLeft,
                  o = this.staffRight;
                for (e = -3; e <= 3; e += 2)
                  n += f.QuickSvg.createFragment("line", {
                    x1: s,
                    y1: t.staffInterval * e,
                    x2: o,
                    y2: t.staffInterval * e,
                    stroke: t.staffLineColor,
                    "stroke-width": t.staffLineWeight,
                    class: "staffLine",
                  });
                for (
                  n = f.QuickSvg.createFragment(
                    "g",
                    { class: "staffLines" },
                    n
                  ),
                    this.layoutInsertionCursor(t) &&
                      (n += this.insertionCursor.createSvgFragment(t)),
                    e = 0;
                  e < this.ledgerLines.length;
                  e++
                ) {
                  var r = this.ledgerLines[e],
                    a = t.calculateHeightFromStaffPosition(r.staffPosition);
                  n += f.QuickSvg.createFragment("line", {
                    x1: r.x1,
                    y1: a,
                    x2: r.x2,
                    y2: a,
                    stroke: t.staffLineColor,
                    "stroke-width": t.staffLineWeight,
                    class: "ledgerLine",
                  });
                }
                for (e = 0; e < this.braces.length; e++)
                  n += this.braces[e].createSvgFragment(t);
                0 === this.notationsStartIndex &&
                  (null !== this.score.dropCap &&
                    (n += this.score.dropCap.createSvgFragment(t)),
                  null === this.score.annotation ||
                    (this.score.mergeAnnotationWithTextLeft &&
                      !this.score.dropCap) ||
                    (n += this.score.annotation.createSvgFragment(t))),
                  (n += this.startingClef.createSvgFragment(t));
                var u = this.score.notations,
                  h = this.notationsStartIndex + this.numNotationsOnLine;
                for (e = this.notationsStartIndex; e < h; e++)
                  n += u[e].createSvgFragment(t);
                return (
                  this.custos && (n += this.custos.createSvgFragment(t)),
                  f.QuickSvg.createFragment(
                    "g",
                    {
                      class: "chantLine",
                      transform:
                        "translate(" +
                        this.bounds.x +
                        "," +
                        (this.bounds.y - i) +
                        ")",
                      "element-index": this.elementIndex,
                    },
                    n
                  )
                );
              },
            },
            {
              key: "generateCurlyBraceDrawable",
              value: function (t, e, i, n, s) {
                var o;
                o = s ? -t.staffInterval / 2 : t.staffInterval / 2;
                var r = 0.6,
                  a = i - e,
                  u = e,
                  h = n + r * o,
                  l = e + 0.25 * a,
                  c = n + (1 - r) * o,
                  p = e + 0.5 * a,
                  d = n + o,
                  g = i,
                  y = n + r * o,
                  v = e + 0.75 * a,
                  m = n + (1 - r) * o,
                  b =
                    "M " +
                    e +
                    " " +
                    n +
                    " Q " +
                    u +
                    " " +
                    h +
                    " " +
                    l +
                    " " +
                    c +
                    " T " +
                    p +
                    " " +
                    d +
                    " M " +
                    i +
                    " " +
                    n +
                    " Q " +
                    g +
                    " " +
                    y +
                    " " +
                    v +
                    " " +
                    m +
                    " T " +
                    p +
                    " " +
                    d;
                return f.QuickSvg.createFragment("path", {
                  d: b,
                  stroke: t.neumeLineColor,
                  "stroke-width": t.neumeLineWeight + "px",
                  fill: "none",
                });
              },
            },
            {
              key: "buildFromChantNotationIndex",
              value: function (t, e, i) {
                var n = this.score.notations,
                  s = null,
                  o = null,
                  r = null,
                  a = [],
                  h = [];
                if (
                  ((this.notationsStartIndex = e),
                  (this.numNotationsOnLine = 0),
                  (this.staffLeft = 0),
                  (this.paddingLeft = 0),
                  (this.extraTextOnlyIndex = null),
                  (this.extraTextOnlyLyricIndex = 0),
                  i > 0 ? (this.staffRight = i) : (this.staffRight = 1 / 0),
                  0 === this.notationsStartIndex)
                ) {
                  var c = 0;
                  null !== this.score.dropCap &&
                    (c =
                      this.score.dropCap.bounds.width +
                      2 * this.score.dropCap.padding),
                    null === this.score.annotation ||
                      (this.score.mergeAnnotationWithTextLeft &&
                        !this.score.dropCap) ||
                      (c = Math.max(
                        c,
                        this.score.annotation.bounds.width +
                          2 * this.score.annotation.padding
                      )),
                    (this.staffLeft += c),
                    null !== this.score.dropCap &&
                      (this.paddingLeft =
                        (c - this.score.dropCap.bounds.width) / 2);
                } else if (
                  ((o = n[e - 1]),
                  o.constructor === l.DoubleBar &&
                    o.hasLyrics() &&
                    (o.lyrics.length > 1 ||
                      !o.lyrics[0].text.match(/^(i\.?)+j\.?/)))
                ) {
                  s = o.lyrics.map(function (e) {
                    var i = new f.Lyric(
                      t,
                      e.originalText,
                      e.lyricType,
                      e.notation,
                      e.notations,
                      e.sourceIndex
                    );
                    return (
                      (i.elidesToNext = e.elidesToNext),
                      (e.bounds.y = Number.MAX_SAFE_INTEGER),
                      i
                    );
                  });
                  var d = s
                    .map(function (t) {
                      return t.bounds.x;
                    })
                    .reduce(function (t, e) {
                      return t < e ? t : e;
                    });
                  s.forEach(function (t) {
                    t.bounds.x -= d;
                  });
                }
                n.length &&
                  n[e].isClef &&
                  ((t.activeClef = n[e]), e++, this.notationsStartIndex++),
                  (this.startingClef = t.activeClef.clone()),
                  this.startingClef.performLayout(t),
                  (this.startingClef.bounds.x = this.staffLeft);
                var g = this.startingClef;
                s && f.LyricArray.setNotation(s, g);
                var y,
                  v,
                  m =
                    this.staffRight -
                    p.Glyphs.CustosLong.bounds.width * t.glyphScaling,
                  b = null,
                  x = n.length - 1;
                g.hasLyrics() &&
                  f.LyricArray.mergeIn(this.lastLyrics, g.lyrics),
                  t.lastStartBrace &&
                    !t.lastStartBrace.note &&
                    (t.lastStartBrace.note = this.startingClef);
                var S, L;
                for (y = e; y <= x; y++) {
                  (o = g), g.constructor !== u.TextOnly && (r = g), (g = n[y]);
                  var C;
                  C =
                    y === x ||
                    g.constructor === l.Custos ||
                    (o.constructor === l.Custos && g.isDivider) ||
                    (g.constructor === u.ChantLineBreak &&
                      r.constructor === l.Custos)
                      ? this.staffRight
                      : y === x - 1
                      ? Math.max(m, this.staffRight - n[x].bounds.width)
                      : m;
                  var w =
                    !g.isDivider &&
                    g.constructor !== u.ChantLineBreak &&
                    g.constructor !== l.Custos &&
                    !(
                      g.constructor === u.TextOnly &&
                      g.hasLyrics() &&
                      /^(?:[*†]|i+j\.?)$/.test(g.lyrics[0].text)
                    ) &&
                    x - y > 1 &&
                    !r.keepWithNext &&
                    r.bounds.right() >= m;
                  (w =
                    w ||
                    (null !== this.extraTextOnlyIndex &&
                      g.constructor !== u.TextOnly &&
                      g.constructor !== u.ChantLineBreak &&
                      g.constructor !== l.Custos &&
                      g.hasLyrics())),
                    g instanceof u.TextOnly &&
                      o === r &&
                      ((S = this.lastLyrics.slice()), (L = y)),
                    g instanceof u.TextOnly &&
                      n[L] &&
                      !n[L].hasLyrics() &&
                      (L = y),
                    g.hasLyrics() &&
                      g.lyrics[0].needsLayout &&
                      g.lyrics[0].recalculateMetrics(t);
                  var P,
                    k =
                      !w &&
                      this.positionNotationElement(
                        t,
                        this.lastLyrics,
                        r,
                        g,
                        C,
                        this.extraTextOnlyIndex ? [] : h
                      ),
                    T =
                      t.useExtraTextOnly &&
                      g.constructor === u.TextOnly &&
                      f.LyricArray.hasOnlyOneLyric(g.lyrics) &&
                      (k === !1 || null !== this.extraTextOnlyIndex);
                  if (
                    T &&
                    null === this.extraTextOnlyIndex &&
                    ((P = f.LyricArray.indexOfLyric(g.lyrics)), L === y)
                  ) {
                    var O = n[y].lyrics[P].text;
                    if (O.length <= 1) {
                      var _ = n[y + 1];
                      T =
                        _ &&
                        _.constructor === u.TextOnly &&
                        _.lyrics[P] &&
                        _.lyrics[P].text.length > 0;
                    }
                  }
                  if (T) {
                    var N;
                    if (
                      ((P = this.extraTextOnlyLyricIndex),
                      null === this.extraTextOnlyIndex && n[L].lyrics.length)
                    ) {
                      if (
                        L === this.notationsStartIndex ||
                        !t.startExtraTextOnlyFromFirst
                      ) {
                        L = y;
                        var A = n
                          .slice(this.notationsStartIndex, y)
                          .reverse()
                          .find(function (t) {
                            return t.hasLyrics();
                          });
                        S = (A && A.lyrics.slice()) || [];
                      }
                      (this.extraTextOnlyIndex = L),
                        (P = this.extraTextOnlyLyricIndex =
                          f.LyricArray.indexOfLyric(g.lyrics)),
                        (this.lastLyricsBeforeTextOnly = S),
                        (this.lastLyrics = []),
                        (y = L - 1),
                        (this.numNotationsOnLine =
                          L - this.notationsStartIndex);
                      continue;
                    }
                    if (
                      (delete g.lyrics[P].lineWidth,
                      !k || y === this.extraTextOnlyIndex)
                    ) {
                      g.bounds.x = g.lyrics[P].origin.x;
                      var M = t.startExtraTextOnlyFromFirst
                        ? f.LyricArray.getRight(this.lastLyrics) +
                          (t.minLyricWordSpacing || 0)
                        : 0;
                      g.lyrics[P].setMaxWidth(
                        t,
                        this.staffRight,
                        this.staffRight - M
                      ),
                        (N = g);
                    }
                    N && (N.lyrics[P].lineWidth = g.lyrics[P].getRight());
                  } else if (k === !1) {
                    for (
                      var I = function (t) {
                        var e = n[t];
                        if (e.constructor !== u.TextOnly) return !1;
                        var i = n.slice(t + 1).findIndex(function (t) {
                          return t.isDivider;
                        });
                        return (
                          !(i < 0) &&
                          n.slice(t + 1, t + 1 + i).every(function (t) {
                            return t.constructor === u.TextOnly;
                          })
                        );
                      };
                      this.numNotationsOnLine > 1 &&
                      (g.isDivider || g.constructor === l.Custos || I(y));

                    )
                      (g = n[--y]),
                        this.numNotationsOnLine--,
                        this.lastLyricsBeforeTextOnly &&
                          I(y) &&
                          delete this.lastLyricsBeforeTextOnly;
                    var B = n.slice(y + 1),
                      E = 0,
                      D = 0;
                    for (
                      t.minSyllablesLastLine &&
                        t.minNotesLastLine &&
                        ((E = B.filter(function (t) {
                          return t.hasLyrics();
                        }).length),
                        (D = B.flatMap(function (t) {
                          return t.notes;
                        }).filter(function (t) {
                          return !!t;
                        }).length)),
                        v = y - 1;
                      v > this.notationsStartIndex;
                      v--
                    ) {
                      var F = n[v];
                      if (
                        ((g = n[v + 1]),
                        t.minSyllablesLastLine &&
                          t.minNotesLastLine &&
                          ((E += g.hasLyrics() ? 1 : 0),
                          (D += (g.notes || []).length)),
                        F.firstWithNoWidth)
                      )
                        this.numNotationsOnLine--;
                      else if (b)
                        this.numNotationsOnLine--, F === b && (b = null);
                      else if (
                        !g ||
                        !g.notes ||
                        (g.notes[0].shape !== u.NoteShape.Quilisma &&
                          g.notes[0].shape !== u.NoteShape.Inclinatum)
                      )
                        if (
                          E < t.minSyllablesLastLine &&
                          D < t.minNotesLastLine
                        )
                          this.numNotationsOnLine--;
                        else {
                          if (F.keepWithNext !== !0) break;
                          F.allowLineBreakBeforeNext &&
                            !this.maxNumNotationsOnLine &&
                            (this.maxNumNotationsOnLine =
                              this.numNotationsOnLine),
                            this.numNotationsOnLine--;
                        }
                      else this.numNotationsOnLine--;
                    }
                    if (
                      (this.extraTextOnlyIndex &&
                        this.notationsStartIndex + this.numNotationsOnLine <=
                          this.extraTextOnlyIndex &&
                        (this.extraTextOnlyIndex = null),
                      0 === this.numNotationsOnLine &&
                        (this.numNotationsOnLine = 1),
                      (g = this.findNeumesToJustify(a)),
                      (this.lastLyrics = a),
                      this.maxNumNotationsOnLine)
                    ) {
                      var z = this.getWhitespaceOnRight(t);
                      z / this.toJustify.length >
                        t.staffInterval * t.maxExtraSpaceInStaffIntervals &&
                        (f.LyricArray.mergeInArray(
                          a,
                          n.slice(
                            this.notationsStartIndex + this.numNotationsOnLine,
                            this.notationsStartIndex +
                              this.maxNumNotationsOnLine
                          )
                        ),
                        (this.numNotationsOnLine = this.maxNumNotationsOnLine),
                        delete this.maxNumNotationsOnLine);
                    }
                    var j =
                      this.score.notations[
                        null === this.extraTextOnlyIndex
                          ? this.notationsStartIndex + this.numNotationsOnLine
                          : this.extraTextOnlyIndex
                      ];
                    if (
                      (j &&
                        j.hasLyrics() &&
                        (j.lyrics[0].lyricType ===
                          f.LyricType.BeginningSyllable ||
                          j.lyrics[0].lyricType ===
                            f.LyricType.SingleSyllable) &&
                        this.toJustify.push(this.custos),
                      v >= 1 &&
                        n[v].isDivider &&
                        n[v - 1].constructor === l.Custos)
                    ) {
                      for (
                        a = [], y = v - 2;
                        y >= this.notationsStartIndex;
                        y--
                      )
                        if (n[y].hasLyrics()) {
                          f.LyricArray.mergeIn(a, n[y].lyrics);
                          break;
                        }
                      (h.sum -= h.pop().condensable),
                        (h.sum -= h.pop().condensable),
                        this.positionNotationElement(
                          t,
                          a,
                          n[v - 2],
                          n[v],
                          this.staffRight,
                          h
                        ),
                        (this.custos = n[v - 1]),
                        (this.custos.bounds.x =
                          this.staffRight -
                          this.custos.bounds.width -
                          this.custos.leadingSpace);
                    }
                    break;
                  }
                  if (
                    (g.hasLyrics() &&
                      f.LyricArray.mergeIn(this.lastLyrics, g.lyrics),
                    b && g === b.translationText[0].endNeume
                      ? (b = null)
                      : g.translationText &&
                        g.translationText.length &&
                        g.translationText[0].endNeume &&
                        (b = g),
                    (g.line = this),
                    this.numNotationsOnLine++,
                    g.isClef && (t.activeClef = g),
                    g.constructor === u.ChantLineBreak && i > 0)
                  ) {
                    (this.justify =
                      g.justify ||
                      null !== this.extraTextOnlyIndex ||
                      this.getWhitespaceOnRight(t) < 0),
                      this.justify && this.findNeumesToJustify(a);
                    break;
                  }
                  g.constructor === l.Custos
                    ? (this.custos = g)
                    : g.isNeume && (this.custos = null);
                }
                for (
                  var V =
                      this.notationsStartIndex + this.numNotationsOnLine - 1,
                    G = n[V] || {};
                  V > 0 &&
                  (G.constructor === u.ChantLineBreak ||
                    G.constructor === l.Custos ||
                    G.constructor === u.TextOnly);

                )
                  G = n[--V];
                var H =
                  this.notationsStartIndex + this.numNotationsOnLine ===
                  n.length;
                if (
                  (((this.justify && null !== this.extraTextOnlyIndex) ||
                    (i > 0 && H)) &&
                    (this.toJustify || this.findNeumesToJustify(a),
                    (this.justify =
                      (!H || G.isDivider) &&
                      this.getWhitespaceOnRight(t) /
                        (this.toJustify.length || 1) <=
                        t.staffInterval * t.maxExtraSpaceInStaffIntervals)),
                  !this.custos)
                )
                  for (
                    y = this.notationsStartIndex + this.numNotationsOnLine;
                    y < n.length;
                    y++
                  ) {
                    var q = n[y];
                    if (q.isNeume) {
                      (this.custos = new l.Custos(!0)),
                        (t.currNotationIndex = y - 1),
                        this.custos.performLayout(t),
                        this.justify
                          ? (this.custos.bounds.x =
                              this.staffRight -
                              this.custos.bounds.width -
                              this.custos.leadingSpace)
                          : (this.custos.bounds.x =
                              r.bounds.right() + r.calculatedTrailingSpace);
                      break;
                    }
                  }
                if (
                  (this.lastLyricsBeforeTextOnly &&
                    ((this.lastLyrics = this.lastLyricsBeforeTextOnly),
                    delete this.lastLyricsBeforeTextOnly),
                  i > 0)
                ) {
                  var R = this.getWhitespaceOnRight(),
                    W = this.staffRight;
                  R < 0 && (W -= R);
                }
                for (y = 0; this.lastLyrics && this.lastLyrics[y]; ) {
                  var Q = this.lastLyrics[y];
                  if (
                    Q.allowsConnector() &&
                    (Q.setNeedsConnector(!0, 0),
                    i > 0 &&
                      t.minLyricWordSpacing < t.hyphenWidth &&
                      ((R = W - Q.getRight()), R < 0))
                  ) {
                    var U = Math.max(
                      t.hyphenWidth + R,
                      this.lastLyrics.length > 1
                        ? t.intraNeumeSpacing
                        : t.minLyricWordSpacing
                    );
                    Q.setConnectorWidth(U);
                  }
                  ++y;
                }
                i <= 0 &&
                  ((this.staffRight =
                    n[
                      this.notationsStartIndex + this.numNotationsOnLine - 1
                    ].bounds.right()),
                  (this.justify = !1)),
                  this.justifyElements(t, this.justify, h),
                  this.centerDividers(),
                  this.finishLayout(t);
              },
            },
            {
              key: "centerDividers",
              value: function () {
                for (
                  var t,
                    e =
                      null === this.extraTextOnlyIndex
                        ? this.notationsStartIndex + this.numNotationsOnLine
                        : this.extraTextOnlyIndex,
                    i = this.notationsStartIndex;
                  i < e;
                  i++
                )
                  if (((t = this.score.notations[i]), t && t.isDivider)) {
                    var n = 1,
                      s = this.score.notations[i - 1],
                      o =
                        i + 1 === e ? this.custos : this.score.notations[i + 1];
                    if (
                      (s === o &&
                        o === this.custos &&
                        ((s = this.score.notations[i - 2]),
                        (o.bounds.x = this.staffRight - o.bounds.width)),
                      s && o)
                    ) {
                      var r = t.bounds.x,
                        a = t.bounds.width,
                        h =
                          s instanceof u.TextOnly && s.hasLyrics()
                            ? s.lyrics[0].getRight()
                            : s.bounds.right(),
                        c =
                          o instanceof u.TextOnly && o.hasLyrics()
                            ? o.lyrics[0].getLeft()
                            : o.bounds.x;
                      if (s instanceof u.TextOnly) {
                        var f = this.score.notations
                          .slice(this.notationsStartIndex, i)
                          .reverse()
                          .find(function (t) {
                            return !(t instanceof u.TextOnly);
                          });
                        h = f ? f.bounds.right() : 0;
                      }
                      if (
                        (h && (t.bounds.x = (h + c - a) / 2), t.hasLyrics())
                      ) {
                        var p = r - t.bounds.x;
                        for (n = t.lyrics.length - 1; n >= 0; n--)
                          (t.lyrics[n].bounds.x += p),
                            (t.lyrics[n].needsLayout = !0);
                      }
                    } else
                      i !== e - 1 ||
                        !this.justify ||
                        (t.constructor !== l.DoubleBar &&
                          t.constructor !== l.FullBar) ||
                        (t.bounds.x = this.staffRight - t.bounds.width);
                  }
              },
            },
            {
              key: "findNeumesToJustify",
              value: function (t) {
                this.toJustify = [];
                for (
                  var e,
                    i = null,
                    n = null,
                    s = null,
                    o = this.notationsStartIndex + this.numNotationsOnLine,
                    r = this.notationsStartIndex;
                  r < o;
                  r++
                ) {
                  (e = s),
                    (i = this.score.notations[r]),
                    (n = i.isAccidental && this.score.notations[++r]),
                    (s = n || i);
                  var a = s.hasLyrics();
                  i &&
                    e &&
                    ((null !== this.extraTextOnlyIndex &&
                      r >= this.extraTextOnlyIndex &&
                      i.constructor === u.TextOnly) ||
                      (null !== e &&
                        (f.LyricArray.mergeIn(t, e.lyrics),
                        e.keepWithNext === !0)) ||
                      (!i.isDivider &&
                        t.length &&
                        t[0].allowsConnector() &&
                        a) ||
                      (s.constructor !== u.ChantLineBreak &&
                        (s !== this.custos || a) &&
                        ((0 === r && this.score.useDropCap && a) ||
                          this.toJustify.push(i))));
                }
                return null !== s && f.LyricArray.mergeIn(t, s.lyrics), s;
              },
            },
            {
              key: "getWhitespaceOnRight",
              value: function (t) {
                var e = this.score.notations,
                  i = this.notationsStartIndex + this.numNotationsOnLine,
                  n = e[i - 1];
                null !== this.extraTextOnlyIndex &&
                  n.constructor === u.TextOnly &&
                  ((i = this.extraTextOnlyIndex), (n = e[i - 1]));
                var s = n ? n.bounds.right() + n.calculatedTrailingSpace : 0,
                  o = this.lastLyricsBeforeTextOnly || this.lastLyrics,
                  r = o.length ? f.LyricArray.getRight(o) : 0;
                return (
                  this.custos
                    ? ((s +=
                        this.custos.bounds.width + this.custos.leadingSpace),
                      this.custos.hasLyrics() &&
                        (r = f.LyricArray.getRight(this.custos.lyrics)))
                    : t &&
                      i < e.length &&
                      (s += p.Glyphs.CustosLong.bounds.width * t.glyphScaling),
                  this.staffRight - Math.max(r, s)
                );
              },
            },
            {
              key: "justifyElements",
              value: function (t, e, i) {
                var n,
                  s = this.toJustify || [],
                  o = this.score.notations,
                  r = this.notationsStartIndex + this.numNotationsOnLine,
                  a = o[this.notationsStartIndex + this.numNotationsOnLine - 1],
                  h =
                    this.staffRight < 1 / 0 &&
                    this.custos &&
                    a.keepWithNext &&
                    this.custos.bounds.x -
                      a.bounds.right() -
                      a.calculatedTrailingSpace;
                if (h > 0) {
                  for (n = 0; this.lastLyrics && this.lastLyrics[n]; ) {
                    var l = this.lastLyrics[n];
                    if (l.allowsConnector()) {
                      var c = l.getConnectorWidth();
                      if (t.minLyricWordSpacing < c) {
                        var p = Math.max(
                          c - h,
                          this.lastLyrics.length > 1
                            ? t.intraNeumeSpacing
                            : t.minLyricWordSpacing
                        );
                        l.setConnectorWidth(p);
                      }
                    }
                    ++n;
                  }
                  this.custos.bounds.x =
                    a.bounds.right() + a.calculatedTrailingSpace;
                }
                var d = this.getWhitespaceOnRight();
                if (
                  !(
                    Math.abs(d) < 0.5 ||
                    (d > 0 && ((e && 0 === s.length) || !e))
                  )
                ) {
                  this.condensableSpaces = i;
                  var g,
                    y,
                    v = 0,
                    m = d / s.length,
                    b = 0,
                    x = 0;
                  d < 0 &&
                    ((s = i.filter(function (t) {
                      return t.condensable > 0;
                    })),
                    (b = d / i.sum),
                    (m = 0));
                  var S = s[x++],
                    L = !1;
                  for (n = this.notationsStartIndex; n < r; n++)
                    (y = g),
                      (g = o[n]),
                      (null !== this.extraTextOnlyIndex &&
                        n >= this.extraTextOnlyIndex &&
                        g.constructor === u.TextOnly) ||
                        (b || g !== this.custos
                          ? (b
                              ? S &&
                                S.notation === g &&
                                ((v += b * S.condensable), (S = s[x++]))
                              : S === g
                              ? (y.hasNoWidth ? (L = !0) : (v += m),
                                (S = s[x++]))
                              : L && !y.hasNoWidth && ((L = !1), (v += m)),
                            (g.bounds.x += v))
                          : g.hasLyrics()
                          ? ((g.bounds.x = Math.min(
                              g.bounds.x +
                                (this.staffRight -
                                  f.LyricArray.getRight(g.lyrics)),
                              this.staffRight - g.bounds.width
                            )),
                            (v += m))
                          : (g.bounds.x = Math.min(
                              g.bounds.x + v,
                              this.staffRight - g.bounds.width
                            )));
                  h > 0 &&
                    (this.custos.bounds.x =
                      a.bounds.right() + a.calculatedTrailingSpace);
                }
              },
            },
            {
              key: "handleEndBrace",
              value: function (t, e, i) {
                var s = t.lastStartBrace;
                if (s) {
                  var o,
                    r = s.notationIndex,
                    a = this.score.notations,
                    u = t.intraNeumeSpacing / 2,
                    l = s.note;
                  o = s.isAbove
                    ? Math.min.apply(
                        Math,
                        [t.calculateHeightFromStaffPosition(4)].concat(
                          n(
                            [l, e].concat(a.slice(r, i + 1)).map(function (t) {
                              return t.bounds.y - u;
                            })
                          )
                        )
                      )
                    : Math.max.apply(
                        Math,
                        [t.calculateHeightFromStaffPosition(-4)].concat(
                          n(
                            [l, e].concat(a.slice(r, i + 1)).map(function (t) {
                              return t.bounds.bottom() + u;
                            })
                          )
                        )
                      );
                  var c = !1;
                  s.shape === h.BraceShape.RoundBrace
                    ? this.braces.push(
                        new f.RoundBraceVisualizer(
                          t,
                          s.getAttachmentX(l),
                          e.braceEnd.getAttachmentX(e),
                          o,
                          s.isAbove
                        )
                      )
                    : (s.shape === h.BraceShape.AccentedCurlyBrace && (c = !0),
                      this.braces.push(
                        new f.CurlyBraceVisualizer(
                          t,
                          s.getAttachmentX(l),
                          e.braceEnd.getAttachmentX(e),
                          o,
                          s.isAbove,
                          c
                        )
                      )),
                    delete t.lastStartBrace;
                }
              },
            },
            {
              key: "finishLayout",
              value: function (t) {
                var e = this;
                this.ledgerLines = [];
                for (
                  var i = this.score.notations,
                    s = this.notationsStartIndex + this.numNotationsOnLine,
                    o = function (i) {
                      var n =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : i,
                        s =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : i.staffPosition,
                        o =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : i.neume
                            ? i.neume.bounds.x
                            : 0;
                      if (s >= 5 || s <= -5) {
                        var r = o + i.bounds.x - t.intraNeumeSpacing,
                          a =
                            o +
                            n.bounds.x +
                            n.bounds.width +
                            t.intraNeumeSpacing;
                        s -= s > 0 ? (s - 1) % 2 : (s + 1) % 2;
                        var u = t.staffInterval * t.minLedgerSeparation;
                        if (
                          e.ledgerLines.length > 0 &&
                          e.ledgerLines[e.ledgerLines.length - 1].x2 + u >= r
                        ) {
                          var h =
                            (r - e.ledgerLines[e.ledgerLines.length - 1].x2) /
                            2;
                          (e.ledgerLines[e.ledgerLines.length - 1].x2 += h),
                            (r -= h);
                        }
                        a > e.staffRight && (a = e.staffRight),
                          e.ledgerLines.push({
                            x1: r,
                            x2: a,
                            staffPosition: s,
                          });
                      }
                    },
                    r = [],
                    a = null,
                    u = Number.MAX_VALUE,
                    c = Number.MIN_VALUE,
                    p = function (i, n, s) {
                      i.setMaxWidth(t, e.staffRight),
                        (i.bounds.x = 0),
                        s &&
                          (i.bounds.x = (i.bounds.x + s - i.bounds.width) / 2);
                      var o = n.bounds.x + i.bounds.right() - e.staffRight;
                      o > 0 && (i.bounds.x -= o),
                        n.bounds.x + i.bounds.x < 0 &&
                          (i.bounds.x = -n.bounds.x);
                    },
                    d = this.notationsStartIndex;
                  d < s;
                  d++
                ) {
                  var g = i[d];
                  if (
                    ((u = Math.min(u, g.bounds.y)),
                    (c = Math.max(c, g.bounds.bottom())),
                    g.constructor !== l.Custos)
                  ) {
                    if (g.alText)
                      for (var y = 0; y < g.alText.length; y++)
                        p(g.alText[y], g);
                    if (g.translationText)
                      for (y = 0; y < g.translationText.length; y++) {
                        var v = g.translationText[y];
                        if (v.endNeume) {
                          var m = v.endNeume.hasLyrics()
                            ? v.endNeume.bounds.x +
                              Math.max.apply(
                                Math,
                                n(
                                  v.endNeume.lyrics.map(function (t) {
                                    return t.bounds.right();
                                  })
                                )
                              )
                            : v.endNeume.bounds.right();
                          (m -= g.bounds.x), p(v, g, m);
                        } else p(v, g);
                      }
                    if (g.isNeume) {
                      for (y = 0; y < g.ledgerLines.length; y++) {
                        var b = g.ledgerLines[y];
                        o(b.element, b.endElem, b.staffPosition);
                      }
                      for (y = 0; y < g.notes.length; y++) {
                        var x,
                          S = g.notes[y];
                        for (
                          0 === S.episemata.length && (r = []), x = 0;
                          x < S.episemata.length;
                          x++
                        ) {
                          var L = S.episemata[x],
                            C = 0;
                          if (
                            (r.length > 0 &&
                              (C =
                                g.bounds.x +
                                L.bounds.x -
                                (r[r.length - 1].note.neume.bounds.x +
                                  r[r.length - 1].bounds.right())),
                            0 === r.length ||
                              r[r.length - 1].positionHint !== L.positionHint ||
                              r[r.length - 1].terminating === !0 ||
                              r[r.length - 1].alignment ===
                                h.HorizontalEpisemaAlignment.Left ||
                              r[r.length - 1].alignment ===
                                h.HorizontalEpisemaAlignment.Center ||
                              L.alignment ===
                                h.HorizontalEpisemaAlignment.Right ||
                              L.alignment ===
                                h.HorizontalEpisemaAlignment.Center ||
                              (C > 2 * t.intraNeumeSpacing &&
                                S.glyphVisualizer.glyphCode !==
                                  f.GlyphCode.None))
                          )
                            r = [L];
                          else {
                            var w;
                            if (
                              ((w =
                                L.positionHint === f.MarkingPositionHint.Below
                                  ? Math.max(
                                      L.bounds.y,
                                      r[r.length - 1].bounds.y
                                    )
                                  : Math.min(
                                      L.bounds.y,
                                      r[r.length - 1].bounds.y
                                    )),
                              L.bounds.y !== w)
                            )
                              L.bounds.y = w;
                            else
                              for (var P = 0; P < r.length; P++)
                                r[P].bounds.y = w;
                            var k =
                              g.bounds.x +
                              L.bounds.x -
                              (r[r.length - 1].note.neume.bounds.x +
                                r[r.length - 1].bounds.x);
                            k < 0 &&
                              ((k *= -1), (r[r.length - 1].bounds.x -= k)),
                              (r[r.length - 1].bounds.width = k),
                              r.push(L);
                          }
                        }
                        S.braceEnd && this.handleEndBrace(t, S, d),
                          S.braceStart &&
                            ((t.lastStartBrace = a = S.braceStart),
                            (a.notationIndex = d));
                      }
                    }
                  } else o(g);
                }
                if (null !== a && this.custos) {
                  var T = i[s],
                    O = T.notes && T.notes[0],
                    _ = i[s + 1],
                    N = _ && _.notes && _.notes[0],
                    A =
                      (O && O.braceEnd) || (T.isAccidental && N && N.braceEnd);
                  A
                    ? ((this.custos.braceEnd = A),
                      this.handleEndBrace(t, this.custos, d))
                    : ((this.braceStart = a),
                      (this.custos.braceEnd = new h.BracePoint(
                        this.custos,
                        a.isAbove,
                        a.shape,
                        h.BraceAttachment.Right
                      )),
                      this.handleEndBrace(t, this.custos, d - 1),
                      (t.lastStartBrace = new h.BracePoint(
                        null,
                        a.isAbove,
                        a.shape,
                        h.BraceAttachment.Left
                      )),
                      (t.lastStartBrace.notationIndex = d));
                }
                this.custos && o(this.custos);
              },
            },
            {
              key: "positionNotationElement",
              value: function (t, e, i, n, s) {
                var o =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : [];
                o.hasOwnProperty("sum") || (o.sum = 0);
                var r,
                  a = { notation: n },
                  h = !1;
                if (
                  ((n.hasNoWidth && n.firstWithNoWidth !== n) ||
                  !i.firstWithNoWidth
                    ? (n.bounds.x = i.bounds.right())
                    : ((n.bounds.x = i.firstWithNoWidth.bounds.x), (h = !0)),
                  (n.constructor === u.TextOnly &&
                    null === this.extraTextOnlyIndex) ||
                  (!n.hasLyrics() && i.calculatedTrailingSpace < 0)
                    ? ((n.calculatedTrailingSpace = i.calculatedTrailingSpace),
                      n.hasLyrics() &&
                        (n.calculatedTrailingSpace -= n.lyrics[0].bounds.width),
                      n.constructor === u.TextOnly &&
                        1 === n.lyrics.length &&
                        n.lyrics[0].setMaxWidth(
                          t,
                          this.staffRight,
                          this.staffRight -
                            f.LyricArray.getRight(e) -
                            t.minLyricWordSpacing
                        ))
                    : h || (n.bounds.x += i.calculatedTrailingSpace),
                  n.hasLyrics() &&
                    !i.isDivider &&
                    !i.isAccidental &&
                    this.numNotationsOnLine > 0 &&
                    (n.lyrics[0].lyricType === f.LyricType.SingleSyllable ||
                      n.lyrics[0].lyricType ===
                        f.LyricType.BeginningSyllable) &&
                    (n.bounds.x +=
                      t.intraNeumeSpacing * t.interVerbalMultiplier),
                  n.hasNoWidth || h
                    ? (a.total = a.condensable = 0)
                    : null !== this.extraTextOnlyIndex &&
                      n.constructor === u.TextOnly
                    ? ((n.bounds.x = 0), (a.total = a.condensable = 0))
                    : ((a.total = n.bounds.x - i.bounds.right()),
                      (a.condensable = a.total * t.condensingTolerance)),
                  0 === e.length)
                ) {
                  var l = n.bounds.right() + n.calculatedTrailingSpace;
                  for (r = 0; r < n.lyrics.length; r++) {
                    var c = n.lyrics[r],
                      p =
                        c.allowsConnector() &&
                        c.dropCap &&
                        c.originalText &&
                        !c.text;
                    c.setNeedsConnector(p);
                    var d = this.staffLeft - this.paddingLeft;
                    c.getLeft() < d && (n.bounds.x -= c.getLeft() - d),
                      (a.condensable = Math.min(
                        a.condensable,
                        c.getLeft() - d
                      )),
                      (l = Math.max(l, c.getRight()));
                  }
                  return (
                    !(l > s + o.sum + a.condensable) &&
                    (o.push(a), (o.sum += a.condensable), !0)
                  );
                }
                if (
                  (n.firstOfSyllable &&
                    e.length &&
                    !n.hasLyrics() &&
                    ((n.bounds.x = Math.max(n.bounds.x, e[0].getRight())),
                    (a.total = n.bounds.x - i.bounds.right()),
                    (a.condensable = a.total * t.condensingTolerance)),
                  n.hasLyrics() === !1)
                )
                  return (
                    !(
                      n.bounds.right() + n.calculatedTrailingSpace >
                      s + o.sum + a.condensable
                    ) && (o.push(a), (o.sum += a.condensable), !0)
                  );
                do {
                  var g = !1,
                    y = !1;
                  for (r = 0; r < n.lyrics.length; r++)
                    if (n.lyrics[r].originalText) {
                      var v = 0,
                        m = [],
                        b = null;
                      if (r < e.length && e[r]) {
                        v = e[r].getRight();
                        var x = o
                          .map(function (t) {
                            return t.notation;
                          })
                          .lastIndexOf(e[r].notation);
                        x >= 0
                          ? ((m = o.slice(x + 1)),
                            (m.sum = m
                              .map(function (t) {
                                return t.condensable;
                              })
                              .reduce(function (t, e) {
                                return t + e;
                              }, 0)))
                          : (m.sum = 0);
                      }
                      n.lyrics[r].setNeedsConnector(!1);
                      var S = n.lyrics[r].getLeft();
                      if (e[r] && e[r].allowsConnector() !== !1)
                        if (v + 0.1 > S - m.sum - a.condensable) {
                          var L = v - S;
                          L < -0.1 &&
                            !(function () {
                              var t = L / (m.sum + a.condensable),
                                e = 0;
                              m.forEach(function (i) {
                                (e += t * i.condensable),
                                  (i.notation.bounds.x += e);
                              });
                            })(),
                            (n.bounds.x += L),
                            (b = 0),
                            (y = !0),
                            (g = L > 0.5);
                        } else {
                          if (t.minLyricWordSpacing < t.hyphenWidth) {
                            var C = S - v;
                            if (C < t.hyphenWidth) {
                              var w =
                                e.length > 1
                                  ? t.intraNeumeSpacing
                                  : t.minLyricWordSpacing;
                              e[r].setConnectorWidth(Math.max(w, C));
                            }
                          }
                          if (
                            (e[r].setNeedsConnector(!0),
                            (v = e[r].getRight()),
                            v + 0.1 > S)
                          ) {
                            var P = v - S;
                            (n.bounds.x += P), (b = 0), (g = P > 0.5);
                          } else b = S - v;
                        }
                      else {
                        var k = S - v - t.minLyricWordSpacing;
                        if (k < 0) {
                          var T = v + t.minLyricWordSpacing - S;
                          (n.bounds.x += T), (b = 0), (g = T > 0.5);
                        } else b = k;
                      }
                      null !== b &&
                        b < m.sum + a.condensable &&
                        !(function () {
                          var t = b / (m.sum + a.condensable);
                          (a.condensable *= t),
                            m.sum &&
                              (m.forEach(function (e) {
                                e.condensable *= t;
                              }),
                              (o.sum = o
                                .map(function (t) {
                                  return t.condensable;
                                })
                                .reduce(function (t, e) {
                                  return t + e;
                                }, 0)));
                        })();
                    }
                } while (n.lyrics.length > 1 && g && y);
                for (r = Math.min(n.lyrics.length, e.length) - 1; r >= 0; r--) {
                  var O = e[r];
                  O.needsConnector &&
                    O.connectorWidth &&
                    ((S = n.lyrics[r].getLeft()),
                    (v = O.getRight() - O.connectorWidth),
                    (C = S - v),
                    C >= t.hyphenWidth && (C = 0),
                    O.setConnectorWidth(C));
                }
                if (
                  n.bounds.right() + n.calculatedTrailingSpace <
                    s + o.sum + a.condensable &&
                  f.LyricArray.getRight(n.lyrics, !0) <=
                    this.staffRight + o.sum + a.condensable
                ) {
                  if (i.isAccidental) {
                    var _ =
                      n.bounds.x -
                      i.bounds.width -
                      i.calculatedTrailingSpace -
                      i.bounds.x;
                    if (((i.bounds.x += _), Math.abs(_) > 0.1)) {
                      var N = o[o.length - 1];
                      (o.sum -= N.condensable), (N.condensable = 0);
                    }
                  }
                  return o.push(a), (o.sum += a.condensable), !0;
                }
                return !1;
              },
            },
            {
              key: "bisectNotationAtX",
              value: function (t) {
                for (
                  var e =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    i = -1,
                    n = Math.min(this.numNotationsOnLine, 1 / 0),
                    s = i + ((n - i) >> 1),
                    o = this.score.notations.slice(
                      this.notationsStartIndex,
                      this.notationsStartIndex + this.numNotationsOnLine
                    );
                  i < s;

                ) {
                  var r = o[s],
                    a = r.bounds.x;
                  a > t ? (n = s) : (i = s), (s = i + ((n - i) >> 1));
                }
                var u = o[s];
                if (e && u && 0 === u.bounds.width && s + 1 < o.length) {
                  var h = o[s + 1],
                    l = t - u.bounds.x,
                    c = h.bounds.x - t;
                  0 === h.bounds.width && c < l && ++s;
                }
                return o[s];
              },
            },
          ]),
          e
        );
      })(f.ChantLayoutElement);
    },
    function (t, e, i) {
      "use strict";
      function n(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      }
      function o(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.BracePoint =
          e.BraceAttachment =
          e.BraceShape =
          e.Mora =
          e.Ictus =
          e.HorizontalEpisema =
          e.HorizontalEpisemaAlignment =
          e.Accent =
            void 0);
      var r = (function () {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        })(),
        a = i(8),
        u = i(4),
        h =
          ((e.Accent = (function (t) {
            function e(t, i) {
              var o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : u.GlyphCode.AcuteAccent;
              n(this, e);
              var r = s(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, o)
              );
              return (
                (r.note = i), (r.positionHint = u.MarkingPositionHint.Above), r
              );
            }
            return (
              o(e, t),
              r(e, [
                {
                  key: "performLayout",
                  value: function (t) {
                    (this.bounds.x =
                      this.note.bounds.x + this.bounds.width / 2),
                      this.setStaffPosition(
                        t,
                        Math.max(this.note.staffPosition + 1, 4)
                      );
                  },
                },
              ]),
              e
            );
          })(u.GlyphVisualizer)),
          (e.HorizontalEpisemaAlignment = {
            Default: 0,
            Left: 1,
            Center: 2,
            Right: 3,
          })),
        l =
          ((e.HorizontalEpisema = (function (t) {
            function e(t) {
              n(this, e);
              var i = s(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(this)
              );
              return (
                (i.note = t),
                (i.positionHint = u.MarkingPositionHint.Default),
                (i.terminating = !1),
                (i.alignment = h.Default),
                i
              );
            }
            return (
              o(e, t),
              r(e, [
                {
                  key: "performLayout",
                  value: function (t) {
                    var e,
                      i = 0,
                      n = 0.25 * t.staffInterval,
                      s = this.note.glyphVisualizer.glyphCode,
                      o = this.note.neume.ledgerLines[0] || {},
                      r = !1;
                    if (s === u.GlyphCode.PunctumInclinatum) {
                      var a = this.note.neume.notes,
                        l = a.indexOf(this.note),
                        c = a[l - 1];
                      c &&
                        c.glyphVisualizer.glyphCode ===
                          u.GlyphCode.PunctumInclinatum &&
                        c.staffPosition - this.note.staffPosition === 1 &&
                        (r = !0);
                    }
                    this.positionHint === u.MarkingPositionHint.Below
                      ? ((i = this.note.bounds.bottom() + n),
                        s === u.GlyphCode.None && (i += t.staffInterval / 2),
                        (e = Math.ceil(i / t.staffInterval)),
                        e % 2 === 0
                          ? (e = (e + 0.75 + (i - n) / t.staffInterval) / 2)
                          : ((e =
                              (2 *
                                Math.ceil((1.5 * i) / t.staffInterval - 0.5) +
                                1) /
                              3),
                            Math.abs(e) % 2 === 1 &&
                              (e +=
                                Math.abs(e) < 4 || o.staffPosition === -e
                                  ? 2 / 3
                                  : 1 / 3)))
                      : ((i = this.note.bounds.y - n),
                        (e = Math.floor(i / t.staffInterval)),
                        e % 2 === 0
                          ? (e = (e - 0.75 + (i + n) / t.staffInterval) / 2)
                          : ((e =
                              (2 *
                                Math.floor((1.5 * i) / t.staffInterval - 0.5) +
                                1) /
                              3),
                            Math.abs(e) % 2 === 1 &&
                              (e -=
                                Math.abs(e) < 4 || o.staffPosition === -e
                                  ? 2 / 3
                                  : 1 / 3))),
                      (i = e * t.staffInterval);
                    var f = this.note.bounds.width,
                      p = this.note.bounds.x;
                    s === u.GlyphCode.Porrectus1 ||
                    s === u.GlyphCode.Porrectus2 ||
                    s === u.GlyphCode.Porrectus3 ||
                    s === u.GlyphCode.Porrectus4
                      ? (f = t.staffInterval)
                      : s === u.GlyphCode.None
                      ? ((f = t.staffInterval), (p -= f))
                      : r
                      ? ((f *= 2 / 3), (p += 0.5 * f))
                      : s === u.GlyphCode.PunctumInclinatumLiquescent &&
                        ((f *= 2 / 3), (p += 0.25 * f)),
                      this.alignment === h.Left
                        ? (f *= 0.8)
                        : this.alignment === h.Center
                        ? ((p += 0.1 * f), (f *= 0.8))
                        : this.alignment === h.Right &&
                          ((p += 0.2 * f), (f *= 0.8)),
                      (this.bounds.x = p),
                      (this.bounds.y = i - t.episemaLineWeight / 2),
                      (this.bounds.width = f),
                      (this.bounds.height = t.episemaLineWeight),
                      (this.origin.x = 0),
                      (this.origin.y = 0);
                  },
                },
                {
                  key: "draw",
                  value: function (t) {
                    var e = t.canvasCtxt;
                    (e.fillStyle = t.neumeLineColor),
                      e.fillRect(
                        this.bounds.x,
                        this.bounds.y,
                        this.bounds.width,
                        this.bounds.height
                      );
                  },
                },
                {
                  key: "getSvgProps",
                  value: function (t) {
                    return {
                      x: this.bounds.x,
                      y: this.bounds.y,
                      width: this.bounds.width,
                      height: this.bounds.height,
                      fill: t.neumeLineColor,
                      class: "horizontalEpisema",
                    };
                  },
                },
                {
                  key: "createSvgNode",
                  value: function (t) {
                    return u.QuickSvg.createNode("rect", this.getSvgProps(t));
                  },
                },
                {
                  key: "createSvgTree",
                  value: function (t) {
                    return u.QuickSvg.createSvgTree(
                      "rect",
                      this.getSvgProps(t)
                    );
                  },
                },
                {
                  key: "createSvgFragment",
                  value: function (t) {
                    return u.QuickSvg.createFragment(
                      "rect",
                      this.getSvgProps(t)
                    );
                  },
                },
              ]),
              e
            );
          })(u.ChantLayoutElement)),
          (e.Ictus = (function (t) {
            function e(t, i) {
              n(this, e);
              var o = s(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(
                  this,
                  t,
                  u.GlyphCode.VerticalEpisemaAbove
                )
              );
              return (
                (o.note = i),
                (o.positionHint = u.MarkingPositionHint.Default),
                o
              );
            }
            return (
              o(e, t),
              r(e, [
                {
                  key: "performLayout",
                  value: function (t) {
                    var e,
                      i = this.note.glyphVisualizer.glyphCode,
                      n = this.positionHint || u.MarkingPositionHint.Below,
                      s =
                        this.note.staffPosition +
                        (n === u.MarkingPositionHint.Above ? 1 : -1),
                      o =
                        this.note.episemata.length > 0 &&
                        (this.note.episemata[0].positionHint ||
                          u.MarkingPositionHint.Above) === n,
                      r = 1,
                      a = -0.2,
                      h = 0,
                      l =
                        s % 2 &&
                        (Math.abs(s) < 4 ||
                          (this.note.neume.ledgerLines[0] || {})
                            .staffPosition === s);
                    i === u.GlyphCode.Porrectus1 ||
                    i === u.GlyphCode.Porrectus2 ||
                    i === u.GlyphCode.Porrectus3 ||
                    i === u.GlyphCode.Porrectus4
                      ? (e = t.staffInterval / 2)
                      : i === u.GlyphCode.None
                      ? (e = -t.staffInterval / 2)
                      : ((e = this.note.bounds.width / 2),
                        i !== u.GlyphCode.PunctumInclinatum ||
                          l ||
                          o ||
                          (h = 0.3)),
                      this.positionHint === u.MarkingPositionHint.Above
                        ? ((i = u.GlyphCode.VerticalEpisemaAbove), (r *= -1))
                        : (i = u.GlyphCode.VerticalEpisemaBelow),
                      o && (h = 0.4),
                      (r *= t.staffInterval * (h + (l ? 0.3 : a))),
                      this.setGlyph(t, i),
                      this.setStaffPosition(t, s),
                      (this.bounds.x = this.note.bounds.x + e - this.origin.x),
                      (this.bounds.y += r);
                  },
                },
              ]),
              e
            );
          })(u.GlyphVisualizer)),
          (e.Mora = (function (t) {
            function e(t, i) {
              n(this, e);
              var o = s(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(
                  this,
                  t,
                  u.GlyphCode.Mora
                )
              );
              return (
                (o.note = i),
                (o.positionHint = u.MarkingPositionHint.Default),
                (o.horizontalOffset = t.staffInterval / 2 + o.origin.x),
                o
              );
            }
            return (
              o(e, t),
              r(e, [
                {
                  key: "performLayout",
                  value: function (t) {
                    this.setGlyph(t, this.glyphCode),
                      (this.horizontalOffset =
                        t.staffInterval / 2 + this.origin.x);
                    var e = this.note.staffPosition;
                    this.setStaffPosition(t, e);
                    var i,
                      n = 0,
                      s = this.note.neume.notes.indexOf(this.note);
                    if (s >= 0)
                      if ((++s, this.note.neume.notes.length > s))
                        (i = this.note.neume.notes[s]),
                          i.morae &&
                          i.morae.length &&
                          this.note.neume.notes.length === s + 1
                            ? (this.horizontalOffset +=
                                i.bounds.right() - this.note.bounds.right())
                            : i.bounds.right() > this.note.bounds.right()
                            ? (this.horizontalOffset =
                                (i.bounds.right() -
                                  this.note.bounds.right() -
                                  this.bounds.right()) /
                                2)
                            : (i = null);
                      else if (this.note.neume.notes.length === s)
                        if (0 === this.note.neume.trailingSpace) {
                          var o = this.note.neume.score.notations.indexOf(
                            this.note.neume
                          );
                          if (o >= 0) {
                            var r = this.note.neume.score.notations[o + 1];
                            r && r.notes && (i = r.notes[0]);
                          }
                        } else
                          this.note.shape !== a.NoteShape.Inclinatum &&
                            (this.note.neume.calculatedTrailingSpace +=
                              this.origin.x);
                    this.positionHint === u.MarkingPositionHint.Above
                      ? (n -=
                          e % 2 === 0
                            ? 1.75 * t.staffInterval
                            : 0.75 * t.staffInterval)
                      : this.positionHint === u.MarkingPositionHint.Below
                      ? (n +=
                          e % 2 === 0
                            ? 1.75 * t.staffInterval
                            : 0.75 * t.staffInterval)
                      : e % 2 === 0
                      ? i &&
                        i.staffPosition === e - 1 &&
                        (n -= 0.25 * t.staffInterval)
                      : (n -= 0.75 * t.staffInterval),
                      (this.bounds.x =
                        this.horizontalOffset + this.note.bounds.right()),
                      (this.bounds.y += n);
                  },
                },
              ]),
              e
            );
          })(u.GlyphVisualizer)),
          (e.BraceShape = {
            RoundBrace: 0,
            CurlyBrace: 1,
            AccentedCurlyBrace: 2,
          }),
          (e.BraceAttachment = { Left: 0, Right: 1 }));
      e.BracePoint = (function (t) {
        function e(t, i, o, r) {
          n(this, e);
          var a = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          return (
            (a.note = t), (a.isAbove = i), (a.shape = o), (a.attachment = r), a
          );
        }
        return (
          o(e, t),
          r(e, [
            {
              key: "getAttachmentX",
              value: function (t) {
                return (
                  t || (t = this.note),
                  this.attachment === l.Left
                    ? (t.neume ? t.neume.bounds.x : 0) + t.bounds.x
                    : (t.neume ? t.neume.bounds.x : 0) + t.bounds.right()
                );
              },
            },
          ]),
          e
        );
      })(u.ChantLayoutElement);
    },
    function (t, e, i) {
      "use strict";
      function n(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      }
      function o(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Virgula =
          e.Accidental =
          e.AccidentalType =
          e.DoubleBar =
          e.DominicanBar =
          e.InsertionCursor =
          e.FullBar =
          e.HalfBar =
          e.QuarterBar =
          e.Divider =
          e.Custos =
            void 0);
      var r = (function () {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        })(),
        a = function t(e, i, n) {
          null === e && (e = Function.prototype);
          var s = Object.getOwnPropertyDescriptor(e, i);
          if (void 0 === s) {
            var o = Object.getPrototypeOf(e);
            return null === o ? void 0 : t(o, i, n);
          }
          if ("value" in s) return s.value;
          var r = s.get;
          if (void 0 !== r) return r.call(n);
        },
        u = i(1),
        h = i(4),
        l =
          ((e.Custos = (function (t) {
            function e() {
              var t =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              n(this, e);
              var i = s(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(this)
              );
              return (i.auto = t), (i.staffPosition = 0), i;
            }
            return (
              o(e, t),
              r(
                e,
                [
                  {
                    key: "performLayout",
                    value: function (t) {
                      if (
                        (a(
                          e.prototype.__proto__ ||
                            Object.getPrototypeOf(e.prototype),
                          "performLayout",
                          this
                        ).call(this, t),
                        this.auto)
                      ) {
                        var i = t.findNextNeume();
                        for (
                          i &&
                          (this.staffPosition =
                            t.activeClef.pitchToStaffPosition(
                              i.notes[0].pitch
                            ));
                          this.staffPosition < -6;

                        )
                          this.staffPosition += 7;
                        for (; this.staffPosition > 6; )
                          this.staffPosition -= 7;
                      }
                      var n = new h.GlyphVisualizer(
                        t,
                        e.getGlyphCode(this.staffPosition)
                      );
                      n.setStaffPosition(t, this.staffPosition),
                        this.addVisualizer(n),
                        this.finishLayout(t);
                    },
                  },
                  {
                    key: "resetDependencies",
                    value: function () {
                      this.auto && (this.needsLayout = !0);
                    },
                  },
                ],
                [
                  {
                    key: "getGlyphCode",
                    value: function (t) {
                      return t <= 2
                        ? Math.abs(t) % 2 === 1
                          ? h.GlyphCode.CustosLong
                          : h.GlyphCode.CustosShort
                        : Math.abs(t) % 2 === 1
                        ? h.GlyphCode.CustosDescLong
                        : h.GlyphCode.CustosDescShort;
                    },
                  },
                ]
              ),
              e
            );
          })(h.ChantNotationElement)),
          (e.Divider = (function (t) {
            function e() {
              n(this, e);
              var t = s(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(this)
              );
              return (t.isDivider = !0), (t.resetsAccidentals = !0), t;
            }
            return o(e, t), e;
          })(h.ChantNotationElement))),
        c =
          ((e.QuarterBar = (function (t) {
            function e() {
              return (
                n(this, e),
                s(
                  this,
                  (e.__proto__ || Object.getPrototypeOf(e)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              o(e, t),
              r(e, [
                {
                  key: "performLayout",
                  value: function (t) {
                    a(
                      e.prototype.__proto__ ||
                        Object.getPrototypeOf(e.prototype),
                      "performLayout",
                      this
                    ).call(this, t),
                      this.addVisualizer(
                        new h.DividerLineVisualizer(t, 2, 4, this)
                      ),
                      (this.origin.x = this.bounds.width / 2),
                      this.finishLayout(t);
                  },
                },
              ]),
              e
            );
          })(l)),
          (e.HalfBar = (function (t) {
            function e() {
              return (
                n(this, e),
                s(
                  this,
                  (e.__proto__ || Object.getPrototypeOf(e)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              o(e, t),
              r(e, [
                {
                  key: "performLayout",
                  value: function (t) {
                    a(
                      e.prototype.__proto__ ||
                        Object.getPrototypeOf(e.prototype),
                      "performLayout",
                      this
                    ).call(this, t),
                      this.addVisualizer(
                        new h.DividerLineVisualizer(t, -2, 2, this)
                      ),
                      (this.origin.x = this.bounds.width / 2),
                      this.finishLayout(t);
                  },
                },
              ]),
              e
            );
          })(l)),
          (e.FullBar = (function (t) {
            function e() {
              return (
                n(this, e),
                s(
                  this,
                  (e.__proto__ || Object.getPrototypeOf(e)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              o(e, t),
              r(e, [
                {
                  key: "performLayout",
                  value: function (t) {
                    a(
                      e.prototype.__proto__ ||
                        Object.getPrototypeOf(e.prototype),
                      "performLayout",
                      this
                    ).call(this, t),
                      this.addVisualizer(
                        new h.DividerLineVisualizer(t, -3, 3, this)
                      ),
                      (this.origin.x = this.bounds.width / 2),
                      this.finishLayout(t);
                  },
                },
              ]),
              e
            );
          })(l)),
          (e.InsertionCursor = (function (t) {
            function e() {
              return (
                n(this, e),
                s(
                  this,
                  (e.__proto__ || Object.getPrototypeOf(e)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              o(e, t),
              r(e, [
                {
                  key: "performLayout",
                  value: function (t) {
                    a(
                      e.prototype.__proto__ ||
                        Object.getPrototypeOf(e.prototype),
                      "performLayout",
                      this
                    ).call(this, t),
                      this.addVisualizer(new h.DividerLineVisualizer(t, -4, 4)),
                      (this.origin.x = this.bounds.width / 2),
                      (this.bounds.width = 0),
                      (this.bounds.height = 0),
                      this.finishLayout(t);
                  },
                },
              ]),
              e
            );
          })(l)),
          (e.DominicanBar = (function (t) {
            function e(t) {
              n(this, e);
              var i = s(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(this)
              );
              t--;
              var o = t % 2;
              return (i.staffPosition = t - 2 * o), i;
            }
            return (
              o(e, t),
              r(e, [
                {
                  key: "performLayout",
                  value: function (t) {
                    a(
                      e.prototype.__proto__ ||
                        Object.getPrototypeOf(e.prototype),
                      "performLayout",
                      this
                    ).call(this, t),
                      this.addVisualizer(
                        new h.DividerLineVisualizer(
                          t,
                          this.staffPosition - 3,
                          this.staffPosition,
                          this
                        )
                      ),
                      (this.origin.x = this.bounds.width / 2),
                      this.finishLayout(t);
                  },
                },
              ]),
              e
            );
          })(l)),
          (e.DoubleBar = (function (t) {
            function e() {
              return (
                n(this, e),
                s(
                  this,
                  (e.__proto__ || Object.getPrototypeOf(e)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              o(e, t),
              r(e, [
                {
                  key: "performLayout",
                  value: function (t) {
                    a(
                      e.prototype.__proto__ ||
                        Object.getPrototypeOf(e.prototype),
                      "performLayout",
                      this
                    ).call(this, t);
                    var i = new h.DividerLineVisualizer(t, -3, 3, this);
                    (i.bounds.x = 0), this.addVisualizer(i);
                    var n = new h.DividerLineVisualizer(t, -3, 3, this);
                    (n.bounds.x = 2 * t.intraNeumeSpacing - n.bounds.width),
                      this.addVisualizer(n),
                      (this.origin.x = this.bounds.width / 2),
                      this.finishLayout(t);
                  },
                },
              ]),
              e
            );
          })(l)),
          (e.AccidentalType = { Flat: -1, Natural: 0, Sharp: 1 }));
      (e.Accidental = (function (t) {
        function e(t, i) {
          n(this, e);
          var o = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          return (
            (o.isAccidental = !0),
            (o.keepWithNext = !0),
            (o.staffPosition = t),
            (o.accidentalType = i),
            o
          );
        }
        return (
          o(e, t),
          r(e, [
            {
              key: "performLayout",
              value: function (t) {
                a(
                  e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                  "performLayout",
                  this
                ).call(this, t),
                  this.addVisualizer(this.createGlyphVisualizer(t)),
                  this.finishLayout(t);
              },
            },
            {
              key: "createGlyphVisualizer",
              value: function (t) {
                var e = h.GlyphCode.Flat;
                switch (this.accidentalType) {
                  case c.Natural:
                    e = h.GlyphCode.Natural;
                    break;
                  case c.Sharp:
                    e = h.GlyphCode.Sharp;
                    break;
                  default:
                    e = h.GlyphCode.Flat;
                }
                var i = new h.GlyphVisualizer(t, e);
                return i.setStaffPosition(t, this.staffPosition), i;
              },
            },
            {
              key: "adjustStep",
              value: function (t) {
                switch (this.accidentalType) {
                  case c.Flat:
                    if (t === u.Step.Ti) return u.Step.Te;
                    if (t === u.Step.Mi) return u.Step.Me;
                    break;
                  case c.Sharp:
                    if (t === u.Step.Do) return u.Step.Du;
                    if (t === u.Step.Fa) return u.Step.Fu;
                    break;
                  case c.Natural:
                    if (t === u.Step.Te) return u.Step.Ti;
                    if (t === u.Step.Me) return u.Step.Mi;
                    if (t === u.Step.Du) return u.Step.Do;
                    if (t === u.Step.Fu) return u.Step.Fa;
                }
                return t;
              },
            },
            {
              key: "applyToPitch",
              value: function (t) {
                this.pitch.octave === t.octave &&
                  (t.step = this.adjustStep(t.step));
              },
            },
          ]),
          e
        );
      })(h.ChantNotationElement)),
        (e.Virgula = (function (t) {
          function e() {
            n(this, e);
            var t = s(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(this)
            );
            return (t.resetsAccidentals = !1), (t.staffPosition = 3), t;
          }
          return (
            o(e, t),
            r(e, [
              {
                key: "performLayout",
                value: function (t) {
                  a(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "performLayout",
                    this
                  ).call(this, t);
                  var i = new h.GlyphVisualizer(t, h.GlyphCode.Virgula);
                  i.setStaffPosition(t, this.staffPosition),
                    this.addVisualizer(i),
                    (this.origin.x = this.bounds.width / 2),
                    this.finishLayout(t);
                },
              },
            ]),
            e
          );
        })(l));
    },
    function (t, e, i) {
      "use strict";
      function n(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return (e.default = t), e;
      }
      function s(t) {
        if (Array.isArray(t)) {
          for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
          return i;
        }
        return Array.from(t);
      }
      function o(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Gabc = e.GabcHeader = void 0);
      var r = (function () {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        })(),
        a = i(1),
        u = i(4),
        h = i(8),
        l = i(10),
        c = n(l),
        f = i(11),
        p = n(f),
        d = i(13),
        g = n(d),
        y = /(?=\S)((?:<v>[\s\S]*<\/v>|[^(])*)(?:\(?([^)]*)\)?)?/g,
        v = /<alt>(.*?)<\/alt>|\[(alt:)?(.*?)\]/g,
        m =
          /z0|z|Z|::|:|[,;][1-6]?|`|[cf][1-4]|cb[1-4]|\/+| |\!|-?[a-mA-M][oOwWvVrRsxy#~\+><_\.'012345]*(?:\[[^\]]*\]?)*|\{([^}]+)\}?/g,
        b = 1,
        x = /^([a-z]+):(.*)/,
        S = /([ou])(b|cb|cba):([01])(?:([{}])|;(\d*(?:\.\d+)?)mm)/,
        L = function (t) {
          return t.intraNeumeSpacing * t.accidentalSpaceMultiplier;
        },
        C = function (t) {
          return function (e) {
            return e.intraNeumeSpacing * t;
          };
        },
        w = /(?:^|\n)%%\s?\n/,
        P = /^([\w-_.]+):\s*((?:[^;\r\n]|;[ \t])*)(?:;|$)/i,
        k = /^%.*/,
        T = (e.GabcHeader = (function () {
          function t(e) {
            o(this, t),
              "string" != typeof e && (e = ""),
              (this.comments = []),
              (this.cValues = {}),
              (this.original = "");
            var i = e.match(w);
            if (i)
              for (
                var n = (this.original = e.slice(0, i.index + i[0].length)),
                  s = n.split(/\r?\n/g),
                  r = 0;
                r < s.length;
                ++r
              ) {
                var a = s[r],
                  u = P.exec(a);
                if (u) {
                  var h = u[1].replace(/-([a-z])/g, function (t, e) {
                    return e.toUpperCase();
                  });
                  if (this[u[1]]) {
                    var l = u[1] + "Array";
                    this[l] || (this[l] = [this[u[1]]]), this[l].push(u[2]);
                  } else this[u[1]] = u[2];
                  h !== u[1] && (this[h] = this[u[1]]);
                } else if ((u = k.exec(a)) && "%%" !== a)
                  if ((u = P.exec(a.slice(1)))) {
                    var c = u[1].replace(/-([a-z])/g, function (t, e) {
                      return e.toUpperCase();
                    });
                    (this.cValues[u[1]] = u[2]),
                      c !== u[1] && (this.cValues[c] = u[2]);
                  } else this.comments[r] = a;
              }
          }
          return (
            r(t, null, [
              {
                key: "getLength",
                value: function (t) {
                  var e = t.match(w);
                  return e ? e.index + e[0].length : 0;
                },
              },
            ]),
            r(t, [
              {
                key: "toString",
                value: function () {
                  var t = [];
                  for (var e in this)
                    if (
                      "string" == typeof this[e] &&
                      !/^(length|original|comments|cValues)$/.test(e)
                    ) {
                      var i = e.replace(/[A-Z]/g, function (t) {
                        return "-" + t.toLowerCase();
                      });
                      if (!(i !== e && i in this)) {
                        var n = this[e + "Array"];
                        if (n)
                          for (var s = 0; s < n.length; ++s)
                            t.push(e + ": " + n[s] + ";");
                        else t.push(e + ": " + this[e] + ";");
                      }
                    }
                  for (var o in this.cValues)
                    0 !== o.length &&
                      this.cValues.hasOwnProperty(o) &&
                      t.push("%" + o + ": " + this.cValues[o] + ";");
                  for (var r in this.comments)
                    if (this.comments.hasOwnProperty(r))
                      try {
                        t.splice(r, 0, this.comments[r]);
                      } catch (t) {
                        console.warn(t);
                      }
                  return t.join("\n") + "\n%%\n";
                },
              },
            ]),
            t
          );
        })()),
        O = function (t) {
          return t.reduce(function (t, e) {
            return t + (e.notes ? e.notes.length : 1);
          }, 0);
        };
      e.Gabc = (function () {
        function t() {
          o(this, t);
        }
        return (
          r(t, null, [
            {
              key: "createMappingsFromSource",
              value: function (t, e) {
                var i = T.getLength(e);
                e = e.slice(i);
                var n = this.splitWords(e);
                t.activeClef = h.Clef.default();
                var s = this.createMappingsFromWords(t, n, function (e) {
                  return (t.activeClef = e);
                });
                return (
                  s.length > 0 &&
                    s[s.length - 1].notations.length > 0 &&
                    (s[s.length - 1].notations[
                      s[s.length - 1].notations.length - 1
                    ].trailingSpace = 0),
                  s
                );
              },
            },
            {
              key: "diffDescriptorsAndNewWords",
              value: function (t, e) {
                var i,
                  n = {};
                for (i = 0; i < t.length; i++)
                  (n[t[i].source] = n[t[i].source] || []),
                    n[t[i].source].push(i);
                var s,
                  o,
                  r,
                  a,
                  u = [];
                for (s = o = r = 0, a = 0; a < e.length; a++) {
                  var h = [];
                  for (
                    n[e[a]] = n[e[a]] || [], i = 0;
                    i < n[e[a]].length;
                    i++
                  ) {
                    var l = n[e[a]][i];
                    (h[l] = ((l && u[l - 1]) || 0) + 1),
                      h[l] > r &&
                        ((r = h[l]), (s = l - r + 1), (o = a - r + 1));
                  }
                  u = h;
                }
                if (0 === r) {
                  var c = [];
                  return (
                    t.length && c.push(["-", t]),
                    e.length && c.push(["+", e]),
                    c
                  );
                }
                return [].concat(
                  this.diffDescriptorsAndNewWords(t.slice(0, s), e.slice(0, o)),
                  [["=", e.slice(o, o + r)]],
                  this.diffDescriptorsAndNewWords(
                    t.slice(s + r),
                    e.slice(o + r)
                  )
                );
              },
            },
            {
              key: "updateMappingsFromSource",
              value: function (t, e, i) {
                var n =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : null,
                  s =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : null,
                  o = T.getLength(i);
                (i = i.slice(o)),
                  e.pop(),
                  null === n && (n = NaN),
                  null === s && (s = NaN);
                var r,
                  a,
                  l,
                  f,
                  p = this.splitWords(i),
                  d = this.diffDescriptorsAndNewWords(e, p),
                  g = 0,
                  y = 0,
                  v = 0,
                  m = 0;
                t.activeClef = h.Clef.default();
                for (var b = [], x = 0; x < d.length; x++) {
                  var S = d[x][0],
                    L = d[x][1];
                  if (
                    (g > 0 &&
                      (y = e[g - 1].sourceIndex + e[g - 1].source.length + 1),
                    "=" === S)
                  ) {
                    var C = y - e[g].sourceIndex;
                    for (r = 0; r < L.length; r++, g++) {
                      if (
                        ((f = e[g]),
                        0 === m &&
                          f.notations.length &&
                          f.notations[0].isClef &&
                          (m = -1),
                        n >= m || s >= m)
                      ) {
                        var w = O(f.notations);
                        if ((n >= m && n < m + w) || (s >= m && s < m + w)) {
                          var P = f.sourceIndex + C;
                          (f = this.createMappingFromWord(
                            t,
                            L[r],
                            P,
                            b,
                            n - m
                          )),
                            e.splice(g, 1, f),
                            (m += w);
                          continue;
                        }
                        m += w;
                      }
                      for (
                        f.sourceIndex += C, a = 0;
                        a < f.notations.length;
                        a++
                      ) {
                        var k = f.notations[a],
                          _ =
                            f.notations[a - 1] &&
                            f.notations[a - 1].isAccidental;
                        if (
                          (k.resetDependencies(),
                          k.isClef && (t.activeClef = e[g].notations[a]),
                          k.isAccidental
                            ? (t.activeClef.activeAccidental = k)
                            : (k.resetsAccidentals ||
                                (!_ &&
                                  k.hasLyrics() &&
                                  k.lyrics[0].lyricType <=
                                    u.LyricType.BeginningSyllable)) &&
                              t.activeClef.resetAccidentals(),
                          k.notes)
                        )
                          for (l = 0; l < k.notes.length; ++l) {
                            var N = k.notes[l];
                            (N.sourceIndex += C),
                              (N.pitch = t.activeClef.staffPositionToPitch(
                                N.staffPosition
                              )),
                              N.braceEnd &&
                                N.braceEnd.automatic &&
                                delete N.braceEnd,
                              !this.needToEndBrace || N.braceStart || N.braceEnd
                                ? N.braceStart &&
                                  N.braceStart.automatic &&
                                  (this.needToEndBrace = N.braceStart)
                                : ((N.braceEnd = new c.BracePoint(
                                    N,
                                    this.needToEndBrace.isAbove,
                                    this.needToEndBrace.shape,
                                    this.needToEndBrace.attachment ===
                                    c.BraceAttachment.Left
                                      ? c.BraceAttachment.Right
                                      : c.BraceAttachment.Left
                                  )),
                                  (N.braceEnd.automatic = !0),
                                  delete this.needToEndBrace);
                          }
                        if (k.translationText) {
                          for (l = 0; l < k.translationText.length; ++l) {
                            var A = k.translationText[l];
                            if (
                              (delete A.endNeume,
                              (k.translationText[l].sourceIndex += C),
                              "end" === A.textAnchor && b[0])
                            ) {
                              var M = b[0].translationText[l];
                              M && (M.endNeume = k);
                            }
                          }
                          b[0] = k;
                        }
                        if (C) {
                          for (
                            "number" == typeof k.sourceIndex &&
                              (k.sourceIndex += C),
                              l = 0;
                            l < k.lyrics.length;
                            ++l
                          )
                            k.lyrics[l].sourceIndex += C;
                          if (k.alText)
                            for (l = 0; l < k.alText.length; ++l)
                              k.alText[l].sourceIndex += C;
                        }
                      }
                    }
                  } else if ("-" === S) e.splice(g, L.length);
                  else if ("+" === S)
                    for (r = 0; r < L.length; r++) {
                      if (
                        ((v = L[r].length + 1),
                        (f = this.createMappingFromWord(t, L[r], y, b, n - m)),
                        0 === m && f.notations.length && f.notations[0].isClef)
                      ) {
                        m = -1;
                        var I = O(f.notations);
                        n < I &&
                          (f = this.createMappingFromWord(
                            t,
                            L[r],
                            y,
                            b,
                            n - m
                          ));
                      }
                      for (a = 0; a < f.notations.length; a++) {
                        var B = f.notations[a];
                        (m += B.notes ? B.notes.length : 1),
                          B.isClef && (t.activeClef = f.notations[a]);
                      }
                      e.splice(g++, 0, f), (y += v);
                    }
                }
                return (
                  e.length > 0 &&
                    e[e.length - 1].notations.length > 0 &&
                    (e[e.length - 1].notations[
                      e[e.length - 1].notations.length - 1
                    ].trailingSpace = 0),
                  o
                );
              },
            },
            {
              key: "createMappingsFromWords",
              value: function (t, e) {
                for (
                  var i = [], n = 0, s = 0, o = [], r = 0;
                  r < e.length;
                  r++
                ) {
                  (n += s), (s = e[r].length + 1);
                  var a = e[r].trim();
                  if ("" !== a) {
                    var u = this.createMappingFromWord(t, a, n, o);
                    u && i.push(u);
                  }
                }
                return i;
              },
            },
            {
              key: "createMappingFromWord",
              value: function (t, e, i, n, o) {
                for (var r = [], a = [], l = 0; (f = y.exec(e)); ) r.push(f);
                for (var c = 0; c < r.length; c++) {
                  var f = r[c],
                    p = f[1].replace(
                      /(^|<\/sp>)([\s\S]*?)($|<sp>)/g,
                      function (t, e, i, n) {
                        return "" + e + i.replace(/~/g, " ") + n;
                      }
                    ),
                    d = [],
                    g = [],
                    m = f[2];
                  0 === l &&
                    /[a-z]/i.test(p) &&
                    /[a-m]/i.test(m) &&
                    t.activeClef.resetAccidentals();
                  var b = this.parseNotations(
                    t,
                    m,
                    i + f.index + f[1].length + 1,
                    o
                  );
                  if (0 !== b.length) {
                    o >= 0 && (o -= O(b)),
                      (b[0].firstOfSyllable = !!p),
                      (b[0].firstOfParentheses = !0),
                      a.push.apply(a, s(b));
                    for (var x = null, S = 0; S < b.length; S++) {
                      var L = b[S];
                      if (!(L.isAccidental && S + 1 < b.length)) {
                        x = L;
                        break;
                      }
                    }
                    for (var C = v.exec(), w = 0; (C = v.exec(p)); ) {
                      var P = C.index;
                      if (
                        ((p = p.slice(0, P) + p.slice(P + C[0].length)),
                        (P += i + w + 1),
                        "string" == typeof C[1])
                      ) {
                        var k = new u.AboveLinesText(t, C[1], x, P + 4);
                        k.alIndex = d.push(k) - 1;
                      } else if ("string" == typeof C[2]) {
                        var T = new u.AboveLinesText(
                          t,
                          C[3],
                          x,
                          P + C[2].length
                        );
                        T.alIndex = d.push(T) - 1;
                      } else {
                        var _ = new u.TranslationText(t, C[3], x, P);
                        _.translationIndex = g.push(_) - 1;
                      }
                      (w += C[0].length), v.exec();
                    }
                    if ("" !== p || 0 !== d.length) {
                      if (null === x) return new h.ChantMapping(e, a, i);
                      if ((d.length && (x.alText = d), g.length)) {
                        for (x.translationText = g, S = 0; S < g.length; ++S) {
                          var N = g[S];
                          if ("end" === N.textAnchor && n[0]) {
                            var A = n[0].translationText[S];
                            A && (A.endNeume = x);
                          }
                        }
                        n[0] = x;
                      }
                      if ("" !== p) {
                        var M;
                        (M =
                          L.isNeume || L.constructor === h.TextOnly
                            ? 0 === l && c === r.length - 1
                              ? u.LyricType.SingleSyllable
                              : 0 === l && c < r.length - 1
                              ? u.LyricType.BeginningSyllable
                              : c === r.length - 1
                              ? u.LyricType.EndingSyllable
                              : u.LyricType.MiddleSyllable
                            : u.LyricType.Directive),
                          l++;
                        var I = this.createSyllableLyrics(
                          t,
                          p,
                          M,
                          x,
                          b,
                          i + f.index
                        );
                        null !== I && 0 !== I.length && (x.lyrics = I);
                      }
                    }
                  }
                }
                return new h.ChantMapping(e, a, i);
              },
            },
            {
              key: "createSyllableLyrics",
              value: function (t, e, i, n, s, o) {
                for (
                  var r = this,
                    a = [],
                    h = e.split("|"),
                    l = function () {
                      (f = h[c]),
                        c > 0 &&
                          (f.match(/\s$/)
                            ? ((f = f.replace(/s+$/, "")),
                              (i = u.LyricType.EndingSyllable))
                            : (i = u.LyricType.MiddleSyllable)),
                        (p = f);
                      for (
                        var e = /<v>[\s\S]*?<\/v>/, l = void 0, v = [];
                        (l = e.exec(p));

                      ) {
                        var m = l.index,
                          b = l[0].length;
                        (v[m] = b), (p = p.slice(0, m) + p.slice(m + b));
                      }
                      if (((d = p.indexOf("{")), (g = 0), d >= 0)) {
                        var x = p.indexOf("}");
                        if (x >= 0 && x > d) {
                          var S = function (t) {
                            var e = 0;
                            for (var i in v) {
                              if (!(v.hasOwnProperty(i) && t >= i)) break;
                              e += v[i];
                            }
                            return t + e;
                          };
                          (d = S(d)),
                            (x = S(x)),
                            (g = x - d - 1),
                            (f =
                              f.substring(0, d) +
                              f.substring(d + 1, x) +
                              f.substring(x + 1, f.length));
                        } else d = -1;
                      }
                      if (((y = r.makeLyric(t, f, i, n, s, o)), d >= 0)) {
                        var L = 0,
                          C = -1,
                          w = !0,
                          P = !1,
                          k = void 0;
                        try {
                          for (
                            var T, O = y.spans[Symbol.iterator]();
                            !(w = (T = O.next()).done);
                            w = !0
                          ) {
                            var _ = T.value;
                            if (
                              (d >= _.index &&
                                d <= _.index + _.text.length &&
                                ((C = d + g), (d += L - _.index)),
                              C >= 0 &&
                                C >= _.index &&
                                C <= _.index + _.text.length)
                            ) {
                              (C += L - _.index), (g = C - d), (C = -1);
                              break;
                            }
                            L += _.text.length;
                          }
                        } catch (t) {
                          (P = !0), (k = t);
                        } finally {
                          try {
                            !w && O.return && O.return();
                          } finally {
                            if (P) throw k;
                          }
                        }
                        C >= 0 && ((C = L), (g = C - d));
                      }
                      d >= 0 &&
                        ((y.centerStartIndex = d), (y.centerLength = g)),
                        (y.lyricIndex = a.push(y) - 1),
                        (o += f.length + 1);
                    },
                    c = 0;
                  c < h.length;
                  c++
                ) {
                  var f, p, d, g, y;
                  l();
                }
                return (n.lyrics = a), a;
              },
            },
            {
              key: "makeLyric",
              value: function (t, e, i, n, s, o) {
                var r = !1,
                  a = !1;
                e.length > 1 &&
                  ("-" === e[e.length - 1]
                    ? ((a = !0),
                      i === u.LyricType.EndingSyllable
                        ? (i = u.LyricType.MiddleSyllable)
                        : i === u.LyricType.SingleSyllable &&
                          (i = u.LyricType.BeginningSyllable),
                      (e = e.slice(0, -1)))
                    : " " === e[e.length - 1]
                    ? (i === u.LyricType.MiddleSyllable
                        ? (i = u.LyricType.EndingSyllable)
                        : i === u.LyricType.BeginningSyllable &&
                          (i = u.LyricType.SingleSyllable),
                      (e = e.slice(0, -1)))
                    : /<\/i>$/.test(e) && (r = !0)),
                  e.match(/^(?:[*†]+|i+j|\d+)\.?$/) &&
                    (i = u.LyricType.Directive);
                var h = new u.Lyric(t, e, i, n, s, o);
                return (h.elidesToNext = r), a && h.setForceConnector(!0), h;
              },
            },
            {
              key: "parseNotations",
              value: function (t, e, i, n) {
                var o = this;
                if (!e) return [new h.TextOnly(i, 0)];
                for (
                  var r,
                    a = i,
                    l = 0,
                    c = [],
                    f = [],
                    d = u.DefaultTrailingSpace,
                    g = function (t) {
                      f.length > 0 && (f[f.length - 1].sourceGabc += t);
                    },
                    y = function (e) {
                      if (f.length > 0) {
                        for (
                          var n = o.createNeumesFromNotes(t, f, d), s = 0;
                          s < n.length;
                          s++
                        )
                          c.push(n[s]);
                        f = [];
                      }
                      if (((d = u.DefaultTrailingSpace), null !== e)) {
                        var a = c[c.length - 1];
                        (e.sourceIndex = i),
                          (e.sourceGabc = r[0]),
                          e.isClef
                            ? ((t.activeClef = e),
                              a &&
                                a.trailingSpace.isDefault &&
                                a.isDivider &&
                                (a.trailingSpace = L))
                            : e.isAccidental
                            ? (t.activeClef.activeAccidental = e)
                            : e.trailingSpace.isDefault && e instanceof p.Custos
                            ? (e.trailingSpace = L)
                            : e.resetsAccidentals &&
                              t.activeClef.resetAccidentals(),
                          c.push(e);
                      }
                    },
                    v = new RegExp(m.source, "g");
                  (r = v.exec(e));

                ) {
                  (i = a + r.index), (l = r[0].length);
                  var x = r[0];
                  switch (x) {
                    case ",":
                      y(new p.QuarterBar());
                      break;
                    case "`":
                      y(new p.Virgula());
                      break;
                    case ";":
                      y(new p.HalfBar());
                      break;
                    case ";1":
                    case ";2":
                    case ";3":
                    case ";4":
                    case ";5":
                    case ";6":
                    case ",1":
                    case ",2":
                    case ",3":
                    case ",4":
                    case ",5":
                    case ",6":
                      y(new p.DominicanBar(parseInt(x[1], 10)));
                      break;
                    case ":":
                      y(new p.FullBar());
                      break;
                    case "::":
                      y(new p.DoubleBar());
                      break;
                    case "c1":
                      y((t.activeClef = new h.DoClef(-3, 2)));
                      break;
                    case "c2":
                      y((t.activeClef = new h.DoClef(-1, 2)));
                      break;
                    case "c3":
                      y((t.activeClef = new h.DoClef(1, 2)));
                      break;
                    case "c4":
                      y((t.activeClef = new h.DoClef(3, 2)));
                      break;
                    case "f1":
                      y((t.activeClef = new h.FaClef(-3, 2)));
                      break;
                    case "f2":
                      y((t.activeClef = new h.FaClef(-1, 2)));
                      break;
                    case "f3":
                      y((t.activeClef = new h.FaClef(1, 2)));
                      break;
                    case "f4":
                      y((t.activeClef = new h.FaClef(3, 2)));
                      break;
                    case "cb1":
                      y(
                        (t.activeClef = new h.DoClef(
                          -3,
                          2,
                          new p.Accidental(-4, p.AccidentalType.Flat)
                        ))
                      );
                      break;
                    case "cb2":
                      y(
                        (t.activeClef = new h.DoClef(
                          -1,
                          2,
                          new p.Accidental(-2, p.AccidentalType.Flat)
                        ))
                      );
                      break;
                    case "cb3":
                      y(
                        (t.activeClef = new h.DoClef(
                          1,
                          2,
                          new p.Accidental(0, p.AccidentalType.Flat)
                        ))
                      );
                      break;
                    case "cb4":
                      y(
                        (t.activeClef = new h.DoClef(
                          3,
                          2,
                          new p.Accidental(2, p.AccidentalType.Flat)
                        ))
                      );
                      break;
                    case "z":
                      y(new h.ChantLineBreak(!0));
                      break;
                    case "Z":
                      y(new h.ChantLineBreak(!1));
                      break;
                    case "z0":
                      y(new p.Custos(!0));
                      break;
                    case "!":
                      (d = 0), g(x), y(null);
                      break;
                    case " ":
                      (d = C(2)), g(x), y(null);
                      break;
                    default:
                      if ("/" === x[0]) (d = C(x.length)), g(x), y(null);
                      else if (x.length > 1 && "+" === x[1]) {
                        var S = new p.Custos();
                        (S.staffPosition = this.gabcHeightToExsurgeHeight(
                          x[0]
                        )),
                          y(S);
                      } else if (x.length > 1 && /[xy#]/.test(x[1])) {
                        var w;
                        switch (x[1]) {
                          case "y":
                            w = p.AccidentalType.Natural;
                            break;
                          case "#":
                            w = p.AccidentalType.Sharp;
                            break;
                          default:
                            w = p.AccidentalType.Flat;
                        }
                        var P = [];
                        this.createNoteFromData(t, t.activeClef, x, P, i);
                        var k = new p.Accidental(P[0].staffPosition, w);
                        (k.pitch = this.gabcHeightToExsurgePitch(
                          t.activeClef,
                          x[0]
                        )),
                          (k.sourceIndex = i),
                          (k.sourceLength = l),
                          (k.trailingSpace = L),
                          (t.activeClef.activeAccidental = k),
                          y(k);
                      } else
                        x.length > 1 && "{" === x[0]
                          ? !(function () {
                              (d = 0), y(null);
                              var e = o.parseNotations(t, r[b], i + 1);
                              e.forEach(function (t) {
                                (t.hasNoWidth = !0),
                                  (t.firstWithNoWidth = e[0]);
                              }),
                                c.push.apply(c, s(e));
                            })()
                          : (n === -1 && ((d = C(1)), y(null)),
                            this.createNoteFromData(t, t.activeClef, x, f, i),
                            --n);
                  }
                }
                return y(null), c;
              },
            },
            {
              key: "createNeumesFromNotes",
              value: function (t, e, i) {
                for (
                  var n = [],
                    s = 0,
                    o = 0,
                    r = function (t, i) {
                      var r,
                        u =
                          !(arguments.length > 2 && void 0 !== arguments[2]) ||
                          arguments[2];
                      if (((r = i ? o : u ? o - 1 : o - 2), !(r < 0))) {
                        for (; s <= r; ) {
                          var l = e[s++];
                          t.addNote(l),
                            l.alText &&
                              (t.alText || (t.alText = []),
                              t.alText.push(l.alText),
                              (l.alText.noteIndex = s - 1));
                        }
                        return (
                          n.push(t),
                          i === !1 &&
                            (o--,
                            u === !1 && o--,
                            (t.keepWithNext = !0),
                            e[o + 1].shape === h.NoteShape.Quilisma
                              ? (t.trailingSpace = 0)
                              : ((t.trailingSpace = C(1)),
                                (t.allowLineBreakBeforeNext = !0))),
                          a
                        );
                      }
                    },
                    a = {
                      neume: function () {
                        return new g.Punctum();
                      },
                      handle: function (t, e) {
                        return t.shape === h.NoteShape.Virga
                          ? w
                          : t.shape === h.NoteShape.Stropha
                          ? k
                          : t.shape === h.NoteShape.Oriscus
                          ? f
                          : t.shape === h.NoteShape.Inclinatum
                          ? c
                          : t.shapeModifiers & h.NoteShapeModifiers.Cavum
                          ? r(new g.Punctum(), !0)
                          : l;
                      },
                    },
                    l = {
                      neume: function () {
                        return new g.Punctum();
                      },
                      handle: function (t, e, i) {
                        if (
                          t.shape ||
                          e.liquescent === h.LiquescentType.Small
                        ) {
                          var n = new g.Punctum(),
                            s = r(n, !1);
                          return (
                            t.staffPosition > e.staffPosition &&
                              (t.staffPosition % 2 === 1 ||
                                e.staffPosition !== t.staffPosition - 1 ||
                                !e.morae ||
                                0 === e.morae.length) &&
                              (n.trailingSpace = 0),
                            s
                          );
                        }
                        if (t.staffPosition > e.staffPosition)
                          return (
                            t.ictus &&
                              (t.ictus.positionHint =
                                u.MarkingPositionHint.Above),
                            p
                          );
                        if (t.staffPosition < e.staffPosition) {
                          if (
                            (e.ictus &&
                              (e.ictus.positionHint =
                                u.MarkingPositionHint.Above),
                            t.shape === h.NoteShape.Inclinatum)
                          )
                            return y;
                          if (e.staffPosition - t.staffPosition <= 4) return d;
                        } else if (!e.morae || !e.morae.length) return T;
                        return r(new g.Punctum(), !1);
                      },
                    },
                    c = {
                      neume: function () {
                        return new g.PunctaInclinata();
                      },
                      handle: function () {
                        return I.shape !== h.NoteShape.Inclinatum
                          ? r(new g.PunctaInclinata(), !1)
                          : c;
                      },
                    },
                    f = {
                      neume: function () {
                        return new g.Oriscus();
                      },
                      handle: function (t, e) {
                        if (t.shape === h.NoteShape.Default) {
                          if (t.staffPosition > e.staffPosition)
                            return (
                              (e.shapeModifiers |=
                                h.NoteShapeModifiers.Ascending),
                              r(new g.PesQuassus(), !0)
                            );
                          if (t.staffPosition < e.staffPosition)
                            return (
                              (e.shapeModifiers |=
                                h.NoteShapeModifiers.Descending),
                              r(new g.Clivis(), !0)
                            );
                        }
                        var i = new g.Oriscus(),
                          n = r(i, !1);
                        return (
                          t.staffPosition > e.staffPosition &&
                            (t.staffPosition % 2 === 1 ||
                              e.staffPosition !== t.staffPosition - 1 ||
                              !e.morae ||
                              0 === e.morae.length) &&
                            (i.trailingSpace = 0),
                          n
                        );
                      },
                    },
                    p = {
                      neume: function () {
                        return new g.Podatus();
                      },
                      handle: function (t, e) {
                        return t.staffPosition > e.staffPosition
                          ? (t.ictus &&
                              (t.ictus.positionHint =
                                u.MarkingPositionHint.Above),
                            e.ictus &&
                              (e.ictus.positionHint =
                                u.MarkingPositionHint.Below),
                            e.shape === h.NoteShape.Oriscus ? b : S)
                          : t.staffPosition < e.staffPosition
                          ? t.shape === h.NoteShape.Inclinatum
                            ? m
                            : _
                          : r(new g.Podatus(), !1);
                      },
                    },
                    d = {
                      neume: function () {
                        return new g.Clivis();
                      },
                      handle: function (t, e) {
                        return t.shape === h.NoteShape.Default &&
                          t.staffPosition > e.staffPosition
                          ? (t.ictus &&
                              (t.ictus.positionHint =
                                u.MarkingPositionHint.Above),
                            v)
                          : r(new g.Clivis(), !1);
                      },
                    },
                    y = {
                      neume: function () {
                        return new g.Climacus();
                      },
                      handle: function (t, e) {
                        return t.shape !== h.NoteShape.Inclinatum
                          ? r(new g.Climacus(), !1)
                          : A;
                      },
                    },
                    v = {
                      neume: function () {
                        return new g.Porrectus();
                      },
                      handle: function (t, e) {
                        return t.shape === h.NoteShape.Default &&
                          t.staffPosition < e.staffPosition
                          ? r(new g.PorrectusFlexus(), !0)
                          : r(new g.Porrectus(), !1);
                      },
                    },
                    m = {
                      neume: function () {
                        return new g.PesSubpunctis();
                      },
                      handle: function (t, e) {
                        return t.shape !== h.NoteShape.Inclinatum
                          ? r(new g.PesSubpunctis(), !1)
                          : A;
                      },
                    },
                    b = {
                      neume: function () {
                        return new g.Salicus();
                      },
                      handle: function (t, e) {
                        return t.staffPosition < e.staffPosition
                          ? x
                          : r(new g.Salicus(), !1);
                      },
                    },
                    x = {
                      neume: function () {
                        return new g.SalicusFlexus();
                      },
                      handle: function (t, e) {
                        return r(new g.SalicusFlexus(), !1);
                      },
                    },
                    S = {
                      neume: function () {
                        return new g.Scandicus();
                      },
                      handle: function (t, e) {
                        return e.shape === h.NoteShape.Virga &&
                          t.shape === h.NoteShape.Inclinatum &&
                          t.staffPosition < e.staffPosition
                          ? r(new g.Podatus(), !1, !1)
                          : t.shape === h.NoteShape.Default &&
                            t.staffPosition < e.staffPosition
                          ? L
                          : r(new g.Scandicus(), !1);
                      },
                    },
                    L = {
                      neume: function () {
                        return new g.ScandicusFlexus();
                      },
                      handle: function (t, e) {
                        return r(new g.ScandicusFlexus(), !1);
                      },
                    },
                    w = {
                      neume: function () {
                        return new g.Virga();
                      },
                      handle: function (t, e) {
                        return t.shape === h.NoteShape.Inclinatum &&
                          t.staffPosition < e.staffPosition
                          ? y
                          : t.shape === h.NoteShape.Virga &&
                            t.staffPosition === e.staffPosition
                          ? P
                          : r(new g.Virga(), !1);
                      },
                    },
                    P = {
                      neume: function () {
                        return new g.Bivirga();
                      },
                      handle: function (t, e) {
                        return t.shape === h.NoteShape.Virga &&
                          t.staffPosition === e.staffPosition
                          ? r(new g.Trivirga(), !0)
                          : r(new g.Bivirga(), !1);
                      },
                    },
                    k = {
                      neume: function () {
                        return new g.Apostropha();
                      },
                      handle: function (t, e) {
                        return t.staffPosition === e.staffPosition
                          ? T
                          : r(new g.Apostropha(), !1);
                      },
                    },
                    T = {
                      neume: function () {
                        return new g.Distropha();
                      },
                      handle: function (t, e) {
                        return t.staffPosition === e.staffPosition
                          ? e.morae && e.morae.length
                            ? r(new g.Distropha(), !1)
                            : O
                          : r(new g.Apostropha(), !1, !1);
                      },
                    },
                    O = {
                      neume: function () {
                        return new g.Tristropha();
                      },
                      handle: function (t, e) {
                        return r(new g.Distropha(), !1, !1);
                      },
                    },
                    _ = {
                      neume: function () {
                        return new g.Torculus();
                      },
                      handle: function (t, i) {
                        if (
                          t.shape === h.NoteShape.Default &&
                          t.staffPosition > i.staffPosition
                        ) {
                          var n = e[o - 2];
                          if (n && n.staffPosition - i.staffPosition <= 4)
                            return (
                              t.ictus &&
                                (t.ictus.positionHint =
                                  u.MarkingPositionHint.Above),
                              N
                            );
                        }
                        return r(new g.Torculus(), !1);
                      },
                    },
                    N = {
                      neume: function () {
                        return new g.TorculusResupinus();
                      },
                      handle: function (t, e) {
                        return t.shape === h.NoteShape.Default &&
                          t.staffPosition < e.staffPosition
                          ? r(new g.TorculusResupinusFlexus(), !0)
                          : r(new g.TorculusResupinus(), !1);
                      },
                    },
                    A = a;
                  o < e.length;

                ) {
                  var M = o > 0 ? e[o - 1] : null,
                    I = e[o];
                  (A = A.handle(I, M, e.length - 1 - o)),
                    o === e.length - 1 && A !== a && r(A.neume(), !0),
                    o++;
                }
                return (
                  n.length > 0 &&
                    (i.isDefault ||
                      ((n[n.length - 1].trailingSpace = i),
                      (n[n.length - 1].keepWithNext = !0),
                      i > 0 &&
                        (n[n.length - 1].allowLineBreakBeforeNext = n[
                          n.length - 1
                        ].keepWithNext =
                          !0))),
                  n
                );
              },
            },
            {
              key: "createNoteFromData",
              value: function (t, e, i, n, s) {
                var o = new h.Note();
                if (((o.sourceIndex = s), (o.sourceGabc = i), i.length < 1))
                  throw "Invalid note data: " + i;
                if (
                  ("-" === i[0] &&
                    ((o.liquescent = h.LiquescentType.InitioDebilis),
                    (i = i.substring(1))),
                  i.length < 1)
                )
                  throw "Invalid note data: " + i;
                var r = this.gabcHeightToExsurgePitch(e, i[0]);
                i[0] === i[0].toUpperCase() &&
                  (o.shape = h.NoteShape.Inclinatum),
                  (o.staffPosition = this.gabcHeightToExsurgeHeight(i[0])),
                  (o.pitch = r);
                for (var l, f = n.length, p = o, d = 1; d < i.length; d++) {
                  var g = i[d],
                    y = "\0",
                    v = d + 1 < i.length;
                  switch ((v && (y = i[d + 1]), g)) {
                    case ".":
                      if (((l = null), o.morae.length > 0 && n.length)) {
                        var m = n.slice(-1)[0],
                          b = o.morae.slice(-1)[0];
                        b.note = m;
                      }
                      (l = new c.Mora(t, o)),
                        v && "1" === y
                          ? (l.positionHint = u.MarkingPositionHint.Above)
                          : v &&
                            "0" === y &&
                            (l.positionHint = u.MarkingPositionHint.Below),
                        o.morae.push(l);
                      break;
                    case "_":
                      var x = !1;
                      for (l = new c.HorizontalEpisema(p); v; ) {
                        if ("0" === y)
                          l.positionHint = u.MarkingPositionHint.Below;
                        else if ("1" === y)
                          l.positionHint = u.MarkingPositionHint.Above;
                        else if ("2" === y) l.terminating = !0;
                        else if ("3" === y)
                          l.alignment = c.HorizontalEpisemaAlignment.Left;
                        else if ("4" === y)
                          l.alignment = c.HorizontalEpisemaAlignment.Center;
                        else {
                          if ("5" !== y) break;
                          l.alignment = c.HorizontalEpisemaAlignment.Right;
                        }
                        l.alignment !== c.HorizontalEpisemaAlignment.Default &&
                          l.positionHint !== u.MarkingPositionHint.Below &&
                          (x = !0),
                          d++,
                          (v = d + 1 < i.length),
                          v && (y = i[d + 1]);
                      }
                      p && p.episemata.push(l),
                        p === o && x
                          ? (p = o)
                          : f >= 0 && n.length > 0 && (p = n[--f]);
                      break;
                    case "'":
                      (l = new c.Ictus(t, o)),
                        v && "1" === y
                          ? (l.positionHint = u.MarkingPositionHint.Above)
                          : v && "0" === y
                          ? (l.positionHint = u.MarkingPositionHint.Below)
                          : o.shape === h.NoteShape.Virga &&
                            (l.positionHint = u.MarkingPositionHint.Above),
                        (o.ictus = l);
                      break;
                    case "r":
                      if (v && /^[0-5]$/.test(y)) {
                        switch (y) {
                          case "0":
                            (o.shapeModifiers |= h.NoteShapeModifiers.Cavum),
                              (o.shapeModifiers |= h.NoteShapeModifiers.Linea);
                            break;
                          case "1":
                            o.accent = new c.Accent(
                              t,
                              o,
                              u.GlyphCode.AcuteAccent
                            );
                            break;
                          case "2":
                            o.accent = new c.Accent(
                              t,
                              o,
                              u.GlyphCode.GraveAccent
                            );
                            break;
                          case "3":
                            o.accent = new c.Accent(t, o, u.GlyphCode.Circle);
                            break;
                          case "4":
                            o.accent = new c.Accent(
                              t,
                              o,
                              u.GlyphCode.Semicircle
                            );
                            break;
                          case "5":
                            o.accent = new c.Accent(
                              t,
                              o,
                              u.GlyphCode.ReversedSemicircle
                            );
                        }
                        d++;
                      } else o.shapeModifiers |= h.NoteShapeModifiers.Cavum;
                      break;
                    case "R":
                      o.shapeModifiers |= h.NoteShapeModifiers.Linea;
                      break;
                    case "s":
                      if (o.shape === h.NoteShape.Stropha) {
                        var S = new h.Note();
                        (S.sourceIndex = s + d),
                          (S.sourceGabc = "s"),
                          (S.staffPosition = o.staffPosition),
                          (S.pitch = o.pitch),
                          n.push(o),
                          (o = S),
                          f++;
                      }
                      o.shape = h.NoteShape.Stropha;
                      break;
                    case "v":
                      if (o.shape === h.NoteShape.Virga) {
                        var L = new h.Note();
                        (L.sourceIndex = s + d),
                          (L.sourceGabc = "v"),
                          (L.staffPosition = o.staffPosition),
                          (L.pitch = o.pitch),
                          n.push(o),
                          (o = L),
                          f++;
                      }
                      o.shape = h.NoteShape.Virga;
                      break;
                    case "V":
                      (o.shape = h.NoteShape.Virga),
                        (o.shapeModifers |= h.NoteShapeModifiers.Reverse);
                      break;
                    case "w":
                      o.shape = h.NoteShape.Quilisma;
                      break;
                    case "o":
                      (o.shape = h.NoteShape.Oriscus),
                        v && "<" === y
                          ? ((o.shapeModifiers |=
                              h.NoteShapeModifiers.Ascending),
                            d++)
                          : v &&
                            ">" === y &&
                            ((o.shapeModifiers |=
                              h.NoteShapeModifiers.Descending),
                            d++);
                      break;
                    case "O":
                      (o.shape = h.NoteShape.Oriscus),
                        v && "<" === y
                          ? ((o.shapeModifiers |=
                              h.NoteShapeModifiers.Ascending |
                              h.NoteShapeModifiers.Stemmed),
                            d++)
                          : v && ">" === y
                          ? ((o.shapeModifiers |=
                              h.NoteShapeModifiers.Descending |
                              h.NoteShapeModifiers.Stemmed),
                            d++)
                          : (o.shapeModifiers |= h.NoteShapeModifiers.Stemmed);
                      break;
                    case "~":
                      o.shape === h.NoteShape.Inclinatum
                        ? (o.liquescent |= h.LiquescentType.Small)
                        : o.shape === h.NoteShape.Oriscus
                        ? (o.liquescent |= h.LiquescentType.Large)
                        : (o.liquescent |= h.LiquescentType.Small);
                      break;
                    case "<":
                      o.liquescent |= h.LiquescentType.Ascending;
                      break;
                    case ">":
                      o.liquescent |= h.LiquescentType.Descending;
                      break;
                    case "x":
                      o.pitch.step === a.Step.Mi
                        ? (o.pitch.step = a.Step.Me)
                        : o.pitch.step === a.Step.Ti &&
                          (o.pitch.step = a.Step.Te);
                      break;
                    case "y":
                      o.pitch.step === a.Step.Te
                        ? (o.pitch.step = a.Step.Ti)
                        : o.pitch.step === a.Step.Me
                        ? (o.pitch.step = a.Step.Mi)
                        : o.pitch.step === a.Step.Du
                        ? (o.pitch.step = a.Step.Do)
                        : o.pitch.step === a.Step.Fu &&
                          (o.pitch.step = a.Step.Fa);
                      break;
                    case "#":
                      o.pitch.step === a.Step.Do
                        ? (o.pitch.step = a.Step.Du)
                        : o.pitch.step === a.Step.Fa &&
                          (o.pitch.step = a.Step.Fu);
                      break;
                    case "[":
                      for (var C = ++d; d < i.length && "]" !== i[d]; ) d++;
                      this.processInstructionForNote(
                        t,
                        o,
                        i.substring(C, d),
                        C
                      );
                  }
                }
                !this.needToEndBrace ||
                  o.braceStart ||
                  o.braceEnd ||
                  /[xy#]/.test(g) ||
                  ((o.braceEnd = new c.BracePoint(
                    o,
                    this.needToEndBrace.isAbove,
                    this.needToEndBrace.shape,
                    this.needToEndBrace.attachment === c.BraceAttachment.Left
                      ? c.BraceAttachment.Right
                      : c.BraceAttachment.Left
                  )),
                  (o.braceEnd.automatic = !0),
                  delete this.needToEndBrace),
                  n.push(o);
              },
            },
            {
              key: "processInstructionForNote",
              value: function (t, e, i, n) {
                var s = i.match(x);
                if (null !== s) {
                  var o = s[1],
                    r = s[2];
                  switch (o) {
                    case "cs":
                      return void (e.choralSign = new u.ChoralSign(
                        t,
                        r,
                        e,
                        e.sourceIndex + n,
                        i.length
                      ));
                    case "alt":
                      return void (e.alText = new u.AboveLinesText(
                        t,
                        r,
                        e,
                        e.sourceIndex + n,
                        i.length
                      ));
                  }
                  if (((s = i.match(S)), null !== s)) {
                    var a = "o" === s[1],
                      h = c.BraceShape.CurlyBrace;
                    switch (s[2]) {
                      case "b":
                        h = c.BraceShape.RoundBrace;
                        break;
                      case "cb":
                        h = c.BraceShape.CurlyBrace;
                        break;
                      case "cba":
                        h = c.BraceShape.AccentedCurlyBrace;
                    }
                    var l =
                      "1" === s[3]
                        ? c.BraceAttachment.Left
                        : c.BraceAttachment.Right;
                    "{" === s[4] || s[5]
                      ? (e.braceStart = new c.BracePoint(e, a, h, l))
                      : (e.braceEnd = new c.BracePoint(e, a, h, l)),
                      s[5] &&
                        ((e.braceStart.automatic = !0),
                        (this.needToEndBrace = e.braceStart));
                  }
                }
              },
            },
            {
              key: "splitWords",
              value: function (t) {
                return (
                  (t = t.replace(/\)\s(?=[^\)]*(?:\(|$))/g, ")\n")),
                  t.split(/\n/g)
                );
              },
            },
            {
              key: "parseSource",
              value: function (t) {
                return this.parseWords(this.splitWords(t));
              },
            },
            {
              key: "parseWords",
              value: function (t) {
                for (var e = [], i = 0; i < t.length; i++)
                  e.push(this.parseWord(t[i]));
                return e;
              },
            },
            {
              key: "parseWord",
              value: function (t) {
                var e = [],
                  i = [];
                for (e.wordLength = t.length; (s = y.exec(t)); ) i.push(s);
                for (var n = 0; n < i.length; n++) {
                  var s = i[n],
                    o = s[1].trim().split("|"),
                    r = s[2];
                  e.push({ notations: r, lyrics: o });
                }
                return e;
              },
            },
            {
              key: "gabcHeightToExsurgeHeight",
              value: function (t) {
                return t.toLowerCase().charCodeAt(0) - "a".charCodeAt(0) - 6;
              },
            },
            {
              key: "gabcHeightToExsurgePitch",
              value: function (t, e) {
                var i = this.gabcHeightToExsurgeHeight(e),
                  n = t.staffPositionToPitch(i);
                return n;
              },
            },
          ]),
          t
        );
      })();
    },
    function (t, e, i) {
      "use strict";
      function n(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      }
      function s(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      function o(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Virga =
          e.Tristropha =
          e.TorculusResupinusFlexus =
          e.TorculusResupinus =
          e.Torculus =
          e.ScandicusFlexus =
          e.Scandicus =
          e.SalicusFlexus =
          e.Salicus =
          e.Punctum =
          e.PunctaInclinata =
          e.PorrectusFlexus =
          e.Porrectus =
          e.Podatus =
          e.PesSubpunctis =
          e.PesQuassus =
          e.Oriscus =
          e.Distropha =
          e.Clivis =
          e.Climacus =
          e.Trivirga =
          e.Bivirga =
          e.Apostropha =
          e.Neume =
            void 0);
      var r = function t(e, i, n) {
          null === e && (e = Function.prototype);
          var s = Object.getOwnPropertyDescriptor(e, i);
          if (void 0 === s) {
            var o = Object.getPrototypeOf(e);
            return null === o ? void 0 : t(o, i, n);
          }
          if ("value" in s) return s.value;
          var r = s.get;
          if (void 0 !== r) return r.call(n);
        },
        a = (function () {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        })(),
        u = i(8),
        h = i(4),
        l = i(3),
        c = (function () {
          function t(e, i) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
            o(this, t),
              (this.ctxt = e),
              (this.neume = i),
              (this.x = n),
              (this.lastNote = null),
              (this.lineIsHanging = !1),
              (this.minX = 0);
          }
          return (
            a(t, [
              {
                key: "lineFrom",
                value: function (t) {
                  var e = this.ctxt.notations[this.ctxt.currNotationIndex - 1];
                  return (
                    0 === this.x && e && e.notes && 0 === e.trailingSpace
                      ? ((this.lastNote = e.notes.slice(-1)[0]),
                        (this.minX = -this.ctxt.neumeLineWeight))
                      : ((this.lastNote = t), (this.lineIsHanging = !0)),
                    this
                  );
                },
              },
              {
                key: "noteAt",
                value: function (t, e) {
                  var i =
                    !(arguments.length > 2 && void 0 !== arguments[2]) ||
                    arguments[2];
                  if (!t)
                    throw "NeumeBuilder.noteAt: note must be a valid note";
                  if (!e)
                    throw "NeumeBuilder.noteAt: glyph must be a valid glyph code";
                  t.setGlyph(this.ctxt, e);
                  var n = "right" === t.glyphVisualizer.align,
                    s =
                      i &&
                      null !== this.lastNote &&
                      (this.lineIsHanging ||
                        (this.lastNote.glyphVisualizer &&
                          "right" === this.lastNote.glyphVisualizer.align) ||
                        Math.abs(
                          this.lastNote.staffPosition - t.staffPosition
                        ) > 1);
                  if (s) {
                    var o = new h.NeumeLineVisualizer(
                      this.ctxt,
                      this.lastNote,
                      t,
                      this.lineIsHanging
                    );
                    this.neume.addVisualizer(o),
                      (o.bounds.x = Math.max(
                        this.minX,
                        this.x - o.bounds.width
                      )),
                      n || (this.x = o.bounds.x);
                  }
                  var r = 0;
                  if (t.shapeModifiers & u.NoteShapeModifiers.Linea) {
                    var a = new h.LineaVisualizer(this.ctxt, t);
                    this.neume.addVisualizer(a),
                      (t.origin.x += a.origin.x),
                      (r = a.origin.x);
                  }
                  return (
                    n && this.lastNote
                      ? (t.bounds.x = this.x - t.bounds.width)
                      : ((t.bounds.x = this.x + r),
                        (this.x += t.bounds.width + r)),
                    this.neume.addVisualizer(t),
                    (this.lastNote = t),
                    (this.lineIsHanging = !1),
                    this
                  );
                },
              },
              {
                key: "virgaAt",
                value: function (t) {
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  this.noteAt(t, h.GlyphCode.PunctumQuadratum);
                  var e = new h.VirgaLineVisualizer(this.ctxt, t);
                  return (
                    (this.x -= e.bounds.width),
                    t.shapeModifers & u.NoteShapeModifiers.Reverse
                      ? (e.bounds.x = 0)
                      : (e.bounds.x = this.x),
                    this.neume.addVisualizer(e),
                    (this.lastNote = t),
                    (this.lineIsHanging = !1),
                    this
                  );
                },
              },
              {
                key: "advanceBy",
                value: function (t) {
                  return (
                    (this.lastNote = null),
                    (this.lineIsHanging = !1),
                    (this.x += t),
                    this
                  );
                },
              },
              {
                key: "withLineEndingAt",
                value: function (t) {
                  if (null !== this.lastNote) {
                    var e = new h.NeumeLineVisualizer(
                      this.ctxt,
                      this.lastNote,
                      t,
                      !0
                    );
                    return (
                      this.neume.addVisualizer(e),
                      (this.x -= e.bounds.width),
                      (e.bounds.x = this.x),
                      this.neume.addVisualizer(e),
                      (this.lastNote = t),
                      this
                    );
                  }
                },
              },
              {
                key: "withPodatus",
                value: function (t, e) {
                  var i, n;
                  return (
                    t.liquescent === u.LiquescentType.InitioDebilis
                      ? ((i =
                          e.liquescent === u.LiquescentType.None
                            ? h.GlyphCode.PunctumQuadratum
                            : h.GlyphCode.PunctumQuadratumDesLiquescent),
                        (n = h.GlyphCode.TerminatingDesLiquescent))
                      : e.liquescent & u.LiquescentType.Small
                      ? ((n = h.GlyphCode.BeginningAscLiquescent),
                        (i = h.GlyphCode.TerminatingAscLiquescent))
                      : e.liquescent & u.LiquescentType.Ascending
                      ? ((n = h.GlyphCode.PunctumQuadratum),
                        (i = h.GlyphCode.PunctumQuadratumAscLiquescent))
                      : e.liquescent & u.LiquescentType.Descending
                      ? ((n = h.GlyphCode.PunctumQuadratum),
                        (i = h.GlyphCode.PunctumQuadratumDesLiquescent))
                      : ((n = h.GlyphCode.PodatusLower),
                        (i = h.GlyphCode.PodatusUpper)),
                    t.shape === u.NoteShape.Quilisma &&
                      (n = h.GlyphCode.Quilisma),
                    this.noteAt(t, n).noteAt(e, i),
                    (this.lastNote = null),
                    this
                  );
                },
              },
              {
                key: "withClivis",
                value: function (t, e) {
                  var i;
                  return (
                    t.shape === u.NoteShape.Oriscus
                      ? this.noteAt(t, h.GlyphCode.OriscusDes, !1)
                      : this.lineFrom(e).noteAt(
                          t,
                          h.GlyphCode.PunctumQuadratum
                        ),
                    (i =
                      e.liquescent & u.LiquescentType.Small
                        ? h.GlyphCode.TerminatingDesLiquescent
                        : e.liquescent === u.LiquescentType.Ascending
                        ? h.GlyphCode.PunctumQuadratumAscLiquescent
                        : e.liquescent === u.LiquescentType.Descending
                        ? h.GlyphCode.PunctumQuadratumDesLiquescent
                        : h.GlyphCode.PunctumQuadratum),
                    this.noteAt(e, i),
                    (this.lastNote = null),
                    this
                  );
                },
              },
              {
                key: "withInclinata",
                value: function (t) {
                  for (
                    var e = t[0].staffPosition,
                      i = t[0].staffPosition,
                      n =
                        l.Glyphs.PunctumInclinatum.bounds.width *
                        this.ctxt.glyphScaling,
                      s = 0;
                    s < t.length;
                    s++, i = e
                  ) {
                    var o = t[s];
                    o.liquescent & u.LiquescentType.Small
                      ? o.setGlyph(
                          this.ctxt,
                          h.GlyphCode.PunctumInclinatumLiquescent
                        )
                      : o.liquescent & u.LiquescentType.Large
                      ? o.setGlyph(this.ctxt, h.GlyphCode.Stropha)
                      : o.setGlyph(this.ctxt, h.GlyphCode.PunctumInclinatum),
                      (e = o.staffPosition);
                    var r = Math.abs(i - e);
                    switch (r) {
                      case 0:
                        r = 1.1;
                        break;
                      default:
                        r *= 2 / 3;
                    }
                    s > 0 && (this.x += n * r),
                      (o.bounds.x = this.x),
                      this.neume.addVisualizer(o);
                  }
                  return this;
                },
              },
              {
                key: "withPorrectusSwash",
                value: function (t, e) {
                  var i =
                    null !== this.lastNote &&
                    (this.lineIsHanging ||
                      (this.lastNote.glyphVisualizer &&
                        "right" === this.lastNote.glyphVisualizer.align) ||
                      Math.abs(this.lastNote.staffPosition - t.staffPosition) >
                        1);
                  if (i) {
                    var n = new h.NeumeLineVisualizer(
                      this.ctxt,
                      this.lastNote,
                      t,
                      this.lineIsHanging
                    );
                    (this.x = Math.max(this.minX, this.x - n.bounds.width)),
                      (n.bounds.x = this.x),
                      this.neume.addVisualizer(n);
                  }
                  var s;
                  switch (t.staffPosition - e.staffPosition) {
                    case 1:
                      s = h.GlyphCode.Porrectus1;
                      break;
                    case 2:
                      s = h.GlyphCode.Porrectus2;
                      break;
                    case 3:
                      s = h.GlyphCode.Porrectus3;
                      break;
                    case 4:
                      s = h.GlyphCode.Porrectus4;
                      break;
                    default:
                      s = h.GlyphCode.None;
                  }
                  return (
                    t.setGlyph(this.ctxt, s),
                    (t.bounds.x = this.x),
                    e.setGlyph(this.ctxt, h.GlyphCode.None),
                    (this.x = t.bounds.right()),
                    (e.bounds.x = this.x - e.bounds.width),
                    this.neume.addVisualizer(t),
                    this.neume.addVisualizer(e),
                    (this.lastNote = e),
                    (this.lineIsHanging = !1),
                    this
                  );
                },
              },
            ]),
            t
          );
        })(),
        f = (e.Neume = (function (t) {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
            o(this, e);
            var i = n(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(this)
            );
            (i.isNeume = !0), (i.notes = t);
            for (var s = 0; s < t.length; s++) t[s].neume = i;
            return i;
          }
          return (
            s(e, t),
            a(e, [
              {
                key: "addNote",
                value: function (t) {
                  (t.neume = this), this.notes.push(t);
                },
              },
              {
                key: "performLayout",
                value: function (t) {
                  r(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "performLayout",
                    this
                  ).call(this, t);
                },
              },
              {
                key: "finishLayout",
                value: function (t) {
                  (this.ledgerLines = this.requiresLedgerLine()),
                    this.positionMarkings();
                  for (var i = 0; i < this.notes.length; i++) {
                    var n,
                      s = this.notes[i];
                    for (n = 0; n < s.episemata.length; n++)
                      s.episemata[n].performLayout(t),
                        this.addVisualizer(s.episemata[n]);
                    for (n = 0; n < s.morae.length; n++)
                      s.morae[n].performLayout(t),
                        this.addVisualizer(s.morae[n]);
                    s.ictus &&
                      (s.ictus.performLayout(t), this.addVisualizer(s.ictus)),
                      s.accent &&
                        (s.accent.performLayout(t),
                        this.addVisualizer(s.accent)),
                      s.choralSign &&
                        (s.choralSign.performLayout(t),
                        this.addVisualizer(s.choralSign));
                  }
                  (this.origin.x = this.notes[0].origin.x),
                    (this.origin.y = this.notes[0].origin.y),
                    r(
                      e.prototype.__proto__ ||
                        Object.getPrototypeOf(e.prototype),
                      "finishLayout",
                      this
                    ).call(this, t);
                },
              },
              {
                key: "requiresLedgerLine",
                value: function () {
                  var t = !1,
                    e = !1,
                    i = !1,
                    n = !1,
                    s = [];
                  if (!this.notes) return s;
                  for (var o = 0; o < this.notes.length; ++o) {
                    var r = this.notes[o],
                      a = r.staffPosition;
                    if (a >= 4) {
                      if (
                        ((e = e || a >= 5),
                        t === !1 && (t = Math.max(0, o - 1)),
                        a >= 5)
                      )
                        continue;
                    } else if (
                      a <= -4 &&
                      ((n = n || a <= -5),
                      i === !1 && (i = Math.max(0, o - 1)),
                      a <= -5)
                    )
                      continue;
                    if (e || n) {
                      var u = o;
                      s.push({
                        element: this.notes[t || i || 0],
                        endElem: this.notes[u],
                        staffPosition: e ? 5 : -5,
                      }),
                        (t = i = e = n = !1);
                    }
                  }
                  return (
                    (e || n) &&
                      s.push({
                        element: this.notes[t || i || 0],
                        endElem: this.notes[this.notes.length - 1],
                        staffPosition: e ? 5 : -5,
                      }),
                    s
                  );
                },
              },
              { key: "resetDependencies", value: function () {} },
              {
                key: "build",
                value: function (t) {
                  return new c(t, this);
                },
              },
              {
                key: "positionEpisemata",
                value: function (t, e) {
                  var i;
                  for (i = 0; i < t.episemata.length; i++)
                    t.episemata[i].positionHint ===
                      h.MarkingPositionHint.Default &&
                      (t.episemata[i].positionHint = e);
                  return (
                    t.choralSign && (t.choralSign.positionHint = e),
                    t.episemata.length
                  );
                },
              },
              {
                key: "positionEpisemataAbove",
                value: function (t) {
                  return this.positionEpisemata(t, h.MarkingPositionHint.Above);
                },
              },
              {
                key: "positionEpisemataBelow",
                value: function (t) {
                  return this.positionEpisemata(t, h.MarkingPositionHint.Below);
                },
              },
              {
                key: "positionPodatusEpisemata",
                value: function (t, e) {
                  this.positionEpisemataBelow(t),
                    this.positionEpisemataAbove(e),
                    e.ictus &&
                      (e.ictus.positionHint = h.MarkingPositionHint.Above);
                },
              },
              {
                key: "positionInclinataMorae",
                value: function (t) {
                  if (
                    ((t = t.slice(-2)),
                    !(t.length < 2 || t[1].staffPosition > t[0].staffPosition))
                  ) {
                    var e,
                      i = t[1],
                      n = t[0];
                    1 === Math.abs(i.staffPosition % 2) &&
                      n.staffPosition - i.staffPosition === 1 &&
                      i.morae.length > 0 &&
                      ((e = i.morae.slice(-1)[0]),
                      e.positionHint === h.MarkingPositionHint.Default &&
                        (e.positionHint = h.MarkingPositionHint.Below));
                  }
                },
              },
              {
                key: "positionPodatusMorae",
                value: function (t, e) {
                  var i;
                  1 === Math.abs(t.staffPosition % 2) &&
                    (1 === t.morae.length
                      ? (i = t.morae[0])
                      : e.morae.length > 1 && (i = e.morae[0]),
                    i &&
                      i.positionHint === h.MarkingPositionHint.Default &&
                      (i.positionHint = h.MarkingPositionHint.Below)),
                    t.morae.length > 0 &&
                      0 === e.morae.length &&
                      (t.morae[0].ignoreBounds = !0);
                },
              },
              {
                key: "positionPodatusMarkings",
                value: function (t, e) {
                  this.positionPodatusEpisemata(t, e),
                    this.positionPodatusMorae(t, e);
                },
              },
              {
                key: "positionTorculusMarkings",
                value: function (t, e, i) {
                  var n = this.positionClivisMarkings(e, i);
                  return (n =
                    this.positionEpisemata(
                      t,
                      n
                        ? h.MarkingPositionHint.Above
                        : h.MarkingPositionHint.Below
                    ) && n);
                },
              },
              {
                key: "positionClivisMorae",
                value: function (t, e) {
                  var i = t.morae.concat(e.morae);
                  e.morae.length &&
                    t.staffPosition - e.staffPosition === 1 &&
                    1 === Math.abs(e.staffPosition % 2) &&
                    (i.slice(-1)[0].positionHint = h.MarkingPositionHint.Below);
                },
              },
              {
                key: "positionClivisEpisemata",
                value: function (t, e) {
                  var i = this.positionEpisemataAbove(t);
                  return (
                    this.positionEpisemata(
                      e,
                      i
                        ? h.MarkingPositionHint.Above
                        : h.MarkingPositionHint.Below
                    ),
                    i
                  );
                },
              },
              {
                key: "positionClivisMarkings",
                value: function (t, e) {
                  return (
                    this.positionClivisMorae(t, e),
                    this.positionClivisEpisemata(t, e)
                  );
                },
              },
              {
                key: "positionPorrectusMarkings",
                value: function (t, e, i) {
                  this.positionClivisEpisemata(t, e),
                    this.positionPodatusMarkings(e, i);
                },
              },
              {
                key: "positionPorrectusFlexusMarkings",
                value: function (t, e, i, n) {
                  var s = this.positionEpisemataAbove(t);
                  (s = this.positionClivisMarkings(i, n) || s),
                    this.positionEpisemata(
                      e,
                      s
                        ? h.MarkingPositionHint.Above
                        : h.MarkingPositionHint.Below
                    );
                },
              },
              { key: "positionMarkings", value: function () {} },
            ]),
            e
          );
        })(h.ChantNotationElement)),
        p = (e.Apostropha = (function (t) {
          function e() {
            return (
              o(this, e),
              n(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            s(e, t),
            a(
              e,
              [
                {
                  key: "positionMarkings",
                  value: function () {
                    for (
                      var t = h.MarkingPositionHint.Above, e = 0;
                      e < this.notes[0].episemata.length;
                      e++
                    )
                      this.notes[0].episemata[e].positionHint ===
                      h.MarkingPositionHint.Default
                        ? (this.notes[0].episemata[e].positionHint = t)
                        : (t = this.notes[0].episemata[e].positionHint),
                        (t =
                          t === h.MarkingPositionHint.Above
                            ? h.MarkingPositionHint.Below
                            : h.MarkingPositionHint.Above);
                  },
                },
                {
                  key: "performLayout",
                  value: function (t) {
                    r(
                      e.prototype.__proto__ ||
                        Object.getPrototypeOf(e.prototype),
                      "performLayout",
                      this
                    ).call(this, t),
                      this.build(t).noteAt(
                        this.notes[0],
                        e.getNoteGlyphCode(this.notes[0])
                      ),
                      this.finishLayout(t);
                  },
                },
              ],
              [
                {
                  key: "getNoteGlyphCode",
                  value: function (t) {
                    return t.shape === u.NoteShape.Stropha
                      ? h.GlyphCode.Stropha
                      : t.liquescent & u.LiquescentType.Ascending
                      ? h.GlyphCode.PunctumQuadratumAscLiquescent
                      : t.liquescent & u.LiquescentType.Descending
                      ? h.GlyphCode.PunctumQuadratumDesLiquescent
                      : t.shapeModifiers & u.NoteShapeModifiers.Cavum
                      ? h.GlyphCode.PunctumCavum
                      : h.GlyphCode.PunctumQuadratum;
                  },
                },
              ]
            ),
            e
          );
        })(f));
      (e.Bivirga = (function (t) {
        function e() {
          return (
            o(this, e),
            n(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
            )
          );
        }
        return (
          s(e, t),
          a(e, [
            {
              key: "positionMarkings",
              value: function () {
                this.positionEpisemataAbove(this.notes[0]),
                  this.positionEpisemataAbove(this.notes[1]);
              },
            },
            {
              key: "performLayout",
              value: function (t) {
                r(
                  e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                  "performLayout",
                  this
                ).call(this, t),
                  this.build(t)
                    .virgaAt(this.notes[0])
                    .advanceBy(t.intraNeumeSpacing)
                    .virgaAt(this.notes[1]),
                  this.finishLayout(t);
              },
            },
          ]),
          e
        );
      })(f)),
        (e.Trivirga = (function (t) {
          function e() {
            return (
              o(this, e),
              n(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            s(e, t),
            a(e, [
              {
                key: "positionMarkings",
                value: function () {
                  this.positionEpisemataAbove(this.notes[0]),
                    this.positionEpisemataAbove(this.notes[1]),
                    this.positionEpisemataAbove(this.notes[2]);
                },
              },
              {
                key: "performLayout",
                value: function (t) {
                  r(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "performLayout",
                    this
                  ).call(this, t),
                    this.build(t)
                      .virgaAt(this.notes[0])
                      .advanceBy(t.intraNeumeSpacing)
                      .virgaAt(this.notes[1])
                      .advanceBy(t.intraNeumeSpacing)
                      .virgaAt(this.notes[2]),
                    this.finishLayout(t);
                },
              },
            ]),
            e
          );
        })(f)),
        (e.Climacus = (function (t) {
          function e() {
            return (
              o(this, e),
              n(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            s(e, t),
            a(e, [
              {
                key: "positionMarkings",
                value: function () {
                  for (var t = 0; t < this.notes.length; t++)
                    this.positionEpisemataAbove(this.notes[t]);
                  this.positionInclinataMorae(this.notes);
                },
              },
              {
                key: "performLayout",
                value: function (t) {
                  r(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "performLayout",
                    this
                  ).call(this, t),
                    this.build(t)
                      .virgaAt(this.notes[0])
                      .advanceBy(t.intraNeumeSpacing)
                      .withInclinata(this.notes.slice(1)),
                    this.finishLayout(t);
                },
              },
            ]),
            e
          );
        })(f)),
        (e.Clivis = (function (t) {
          function e() {
            return (
              o(this, e),
              n(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            s(e, t),
            a(e, [
              {
                key: "positionMarkings",
                value: function () {
                  this.positionClivisMarkings(this.notes[0], this.notes[1]);
                },
              },
              {
                key: "performLayout",
                value: function (t) {
                  r(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "performLayout",
                    this
                  ).call(this, t);
                  var i = this.notes[0],
                    n = this.notes[1];
                  this.build(t).withClivis(i, n), this.finishLayout(t);
                },
              },
            ]),
            e
          );
        })(f)),
        (e.Distropha = (function (t) {
          function e() {
            return (
              o(this, e),
              n(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            s(e, t),
            a(e, [
              {
                key: "positionMarkings",
                value: function () {
                  this.positionEpisemataAbove(this.notes[0]),
                    this.positionEpisemataAbove(this.notes[1]);
                },
              },
              {
                key: "performLayout",
                value: function (t) {
                  r(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "performLayout",
                    this
                  ).call(this, t);
                  var i = this.notes.map(function (t) {
                      return p.getNoteGlyphCode(t);
                    }),
                    n = t.intraNeumeSpacing;
                  i.slice(0, 2).forEach(function (e) {
                    e === h.GlyphCode.Stropha && (n -= t.intraNeumeSpacing / 4);
                  }),
                    this.build(t)
                      .noteAt(this.notes[0], i[0])
                      .advanceBy(n)
                      .noteAt(this.notes[1], i[1]),
                    this.finishLayout(t);
                },
              },
            ]),
            e
          );
        })(f)),
        (e.Oriscus = (function (t) {
          function e() {
            return (
              o(this, e),
              n(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            s(e, t),
            a(e, [
              {
                key: "positionMarkings",
                value: function () {
                  this.positionEpisemataAbove(this.notes[0]);
                },
              },
              {
                key: "performLayout",
                value: function (t) {
                  r(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "performLayout",
                    this
                  ).call(this, t);
                  var i,
                    n = this.notes[0];
                  if (n.liquescent !== u.LiquescentType.None)
                    i = h.GlyphCode.OriscusLiquescent;
                  else if (n.shapeModifiers & u.NoteShapeModifiers.Ascending)
                    i = h.GlyphCode.OriscusAsc;
                  else if (n.shapeModifiers & u.NoteShapeModifiers.Descending)
                    i = h.GlyphCode.OriscusDes;
                  else {
                    i = h.GlyphCode.OriscusDes;
                    var s = t.findNextNeume();
                    if (s) {
                      var o = t.activeClef.pitchToStaffPosition(
                        s.notes[0].pitch
                      );
                      o > n.staffPosition && (i = h.GlyphCode.OriscusAsc);
                    }
                  }
                  this.build(t).noteAt(n, i), this.finishLayout(t);
                },
              },
              {
                key: "resetDependencies",
                value: function () {
                  this.notes[0].shapeModifiers &
                    u.NoteShapeModifiers.Ascending ||
                    this.notes[0].shapeModifiers &
                      u.NoteShapeModifiers.Descending ||
                    (this.needsLayout = !0);
                },
              },
            ]),
            e
          );
        })(f)),
        (e.PesQuassus = (function (t) {
          function e() {
            return (
              o(this, e),
              n(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            s(e, t),
            a(e, [
              {
                key: "performLayout",
                value: function (t) {
                  r(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "performLayout",
                    this
                  ).call(this, t);
                  var i,
                    n = this.notes[0],
                    s = this.notes[1],
                    o = n.staffPosition,
                    a = s.staffPosition;
                  i =
                    n.shape === u.NoteShape.Oriscus
                      ? h.GlyphCode.OriscusAsc
                      : h.GlyphCode.PunctumQuadratum;
                  var l = this.build(t).noteAt(n, i);
                  a - o === 1
                    ? l.virgaAt(s)
                    : s.liquescent === u.LiquescentType.LargeDescending
                    ? l
                        .noteAt(s, h.GlyphCode.PunctumQuadratumDesLiquescent)
                        .withLineEndingAt(n)
                    : l
                        .noteAt(s, h.GlyphCode.PunctumQuadratum)
                        .withLineEndingAt(n),
                    this.finishLayout(t);
                },
              },
            ]),
            e
          );
        })(f)),
        (e.PesSubpunctis = (function (t) {
          function e() {
            return (
              o(this, e),
              n(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            s(e, t),
            a(e, [
              {
                key: "positionMarkings",
                value: function () {
                  this.positionPodatusEpisemata(this.notes[0], this.notes[1]);
                  for (var t = 2; t < this.notes.length; ++t)
                    this.positionEpisemataAbove(this.notes[t]);
                  this.positionInclinataMorae(this.notes.slice(1));
                },
              },
              {
                key: "performLayout",
                value: function (t) {
                  r(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "performLayout",
                    this
                  ).call(this, t),
                    this.build(t)
                      .withPodatus(this.notes[0], this.notes[1])
                      .advanceBy(0.68 * t.intraNeumeSpacing)
                      .withInclinata(this.notes.slice(2)),
                    this.finishLayout(t);
                },
              },
            ]),
            e
          );
        })(f)),
        (e.Podatus = (function (t) {
          function e() {
            return (
              o(this, e),
              n(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            s(e, t),
            a(e, [
              {
                key: "positionMarkings",
                value: function () {
                  this.positionPodatusMarkings(this.notes[0], this.notes[1]);
                },
              },
              {
                key: "performLayout",
                value: function (t) {
                  r(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "performLayout",
                    this
                  ).call(this, t),
                    this.build(t).withPodatus(this.notes[0], this.notes[1]),
                    this.finishLayout(t);
                },
              },
            ]),
            e
          );
        })(f)),
        (e.Porrectus = (function (t) {
          function e() {
            return (
              o(this, e),
              n(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            s(e, t),
            a(e, [
              {
                key: "positionMarkings",
                value: function () {
                  this.positionPorrectusMarkings(
                    this.notes[0],
                    this.notes[1],
                    this.notes[2]
                  );
                },
              },
              {
                key: "performLayout",
                value: function (t) {
                  r(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "performLayout",
                    this
                  ).call(this, t);
                  var i,
                    n = this.notes[0],
                    s = this.notes[1],
                    o = this.notes[2];
                  (i =
                    o.liquescent & u.LiquescentType.Small
                      ? h.GlyphCode.TerminatingAscLiquescent
                      : o.liquescent & u.LiquescentType.Descending
                      ? h.GlyphCode.PunctumQuadratumDesLiquescent
                      : h.GlyphCode.PodatusUpper),
                    this.build(t)
                      .lineFrom(s)
                      .withPorrectusSwash(n, s)
                      .noteAt(o, i),
                    this.finishLayout(t);
                },
              },
            ]),
            e
          );
        })(f)),
        (e.PorrectusFlexus = (function (t) {
          function e() {
            return (
              o(this, e),
              n(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            s(e, t),
            a(e, [
              {
                key: "positionMarkings",
                value: function () {
                  this.positionPorrectusFlexusMarkings(
                    this.notes[0],
                    this.notes[1],
                    this.notes[2],
                    this.notes[3]
                  );
                },
              },
              {
                key: "performLayout",
                value: function (t) {
                  r(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "performLayout",
                    this
                  ).call(this, t);
                  var i,
                    n = this.notes[0],
                    s = this.notes[1],
                    o = this.notes[2],
                    a = this.notes[3],
                    l = h.GlyphCode.PunctumQuadratum;
                  a.liquescent & u.LiquescentType.Small
                    ? ((l = h.GlyphCode.PunctumQuadratumDesLiquescent),
                      (i = h.GlyphCode.TerminatingDesLiquescent))
                    : (i =
                        a.liquescent & u.LiquescentType.Ascending
                          ? h.GlyphCode.PunctumQuadratumAscLiquescent
                          : a.liquescent & u.LiquescentType.Descending
                          ? h.GlyphCode.PunctumQuadratumDesLiquescent
                          : h.GlyphCode.PunctumQuadratum),
                    this.build(t)
                      .lineFrom(s)
                      .withPorrectusSwash(n, s)
                      .noteAt(o, l)
                      .noteAt(a, i),
                    this.finishLayout(t);
                },
              },
            ]),
            e
          );
        })(f)),
        (e.PunctaInclinata = (function (t) {
          function e() {
            return (
              o(this, e),
              n(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            s(e, t),
            a(e, [
              {
                key: "positionMarkings",
                value: function () {
                  this.positionInclinataMorae(this.notes);
                },
              },
              {
                key: "performLayout",
                value: function (t) {
                  r(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "performLayout",
                    this
                  ).call(this, t),
                    this.build(t).withInclinata(this.notes),
                    this.finishLayout(t);
                },
              },
            ]),
            e
          );
        })(f)),
        (e.Punctum = (function (t) {
          function e() {
            return (
              o(this, e),
              n(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            s(e, t),
            a(e, [
              {
                key: "positionMarkings",
                value: function () {
                  this.positionEpisemataAbove(this.notes[0]);
                },
              },
              {
                key: "performLayout",
                value: function (t) {
                  r(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "performLayout",
                    this
                  ).call(this, t);
                  var i = this.notes[0],
                    n = h.GlyphCode.PunctumQuadratum;
                  (n =
                    i.liquescent !== u.LiquescentType.None
                      ? i.shape === u.NoteShape.Inclinatum
                        ? h.GlyphCode.PunctumInclinatumLiquescent
                        : i.shape === u.NoteShape.Oriscus
                        ? h.GlyphCode.OriscusLiquescent
                        : i.liquescent & u.LiquescentType.Ascending
                        ? h.GlyphCode.PunctumQuadratumAscLiquescent
                        : i.liquescent & u.LiquescentType.Descending
                        ? h.GlyphCode.PunctumQuadratumDesLiquescent
                        : h.GlyphCode.PunctumQuadratumLiquescent
                      : i.shapeModifiers & u.NoteShapeModifiers.Cavum
                      ? h.GlyphCode.PunctumCavum
                      : i.shape === u.NoteShape.Inclinatum
                      ? h.GlyphCode.PunctumInclinatum
                      : i.shape === u.NoteShape.Quilisma
                      ? h.GlyphCode.Quilisma
                      : h.GlyphCode.PunctumQuadratum),
                    this.build(t).noteAt(i, n),
                    this.finishLayout(t);
                },
              },
            ]),
            e
          );
        })(f)),
        (e.Salicus = (function (t) {
          function e() {
            return (
              o(this, e),
              n(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            s(e, t),
            a(e, [
              {
                key: "positionMarkings",
                value: function () {
                  for (var t = 0; t < this.notes.length; t++)
                    this.positionEpisemataBelow(this.notes[t]);
                },
              },
              {
                key: "performLayout",
                value: function (t) {
                  r(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "performLayout",
                    this
                  ).call(this, t);
                  var i = this.notes[0],
                    n = this.notes[1],
                    s = this.notes[2],
                    o = this.build(t).noteAt(i, h.GlyphCode.PunctumQuadratum);
                  n.shapeModifiers & u.NoteShapeModifiers.Stemmed ||
                    o.advanceBy(t.intraNeumeSpacing),
                    o.noteAt(n, h.GlyphCode.OriscusAsc),
                    s.liquescent & u.LiquescentType.Small
                      ? o.noteAt(s, h.GlyphCode.TerminatingAscLiquescent)
                      : s.liquescent === u.LiquescentType.Ascending
                      ? o.noteAt(s, h.GlyphCode.PunctumQuadratumAscLiquescent)
                      : s.liquescent === u.LiquescentType.Descending
                      ? o.noteAt(s, h.GlyphCode.PunctumQuadratumDesLiquescent)
                      : o.virgaAt(s),
                    this.finishLayout(t);
                },
              },
            ]),
            e
          );
        })(f)),
        (e.SalicusFlexus = (function (t) {
          function e() {
            return (
              o(this, e),
              n(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            s(e, t),
            a(e, [
              {
                key: "positionMarkings",
                value: function () {
                  var t = this.positionTorculusMarkings(
                    this.notes[1],
                    this.notes[2],
                    this.notes[3]
                  );
                  this.positionEpisemata(
                    this.notes[0],
                    t
                      ? h.MarkingPositionHint.Above
                      : h.MarkingPositionHint.Below
                  );
                },
              },
              {
                key: "performLayout",
                value: function (t) {
                  r(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "performLayout",
                    this
                  ).call(this, t);
                  var i = this.notes[0],
                    n = this.notes[1],
                    s = this.notes[2],
                    o = this.notes[3],
                    a = this.build(t).noteAt(i, h.GlyphCode.PunctumQuadratum);
                  n.shapeModifiers & u.NoteShapeModifiers.Stemmed ||
                    a.advanceBy(t.intraNeumeSpacing),
                    a.noteAt(n, h.GlyphCode.OriscusAsc),
                    o.liquescent & u.LiquescentType.Small
                      ? a.noteAt(s, h.GlyphCode.PunctumQuadratumDesLiquescent)
                      : a.noteAt(s, h.GlyphCode.PunctumQuadratum),
                    o.liquescent & u.LiquescentType.Small
                      ? a.noteAt(o, h.GlyphCode.TerminatingDesLiquescent)
                      : o.liquescent & u.LiquescentType.Ascending
                      ? a.noteAt(o, h.GlyphCode.PunctumQuadratumAscLiquescent)
                      : o.liquescent & u.LiquescentType.Descending
                      ? a.noteAt(o, h.GlyphCode.PunctumQuadratumDesLiquescent)
                      : a.noteAt(o, h.GlyphCode.PunctumQuadratum),
                    this.finishLayout(t);
                },
              },
            ]),
            e
          );
        })(f)),
        (e.Scandicus = (function (t) {
          function e() {
            return (
              o(this, e),
              n(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            s(e, t),
            a(e, [
              {
                key: "positionMarkings",
                value: function () {
                  this.notes[2].shape === u.NoteShape.Virga
                    ? (this.positionPodatusMarkings(
                        this.notes[0],
                        this.notes[1]
                      ),
                      this.positionEpisemataAbove(this.notes[2]))
                    : (this.positionEpisemataBelow(this.notes[0]),
                      this.positionPodatusMarkings(
                        this.notes[1],
                        this.notes[2]
                      ));
                },
              },
              {
                key: "performLayout",
                value: function (t) {
                  r(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "performLayout",
                    this
                  ).call(this, t);
                  var i = this.notes[0],
                    n = this.notes[1],
                    s = this.notes[2];
                  s.shape === u.NoteShape.Virga
                    ? this.build(t).withPodatus(i, n).virgaAt(s)
                    : this.build(t)
                        .noteAt(
                          i,
                          i.shape === u.NoteShape.Quilisma
                            ? h.GlyphCode.Quilisma
                            : h.GlyphCode.PunctumQuadratum
                        )
                        .withPodatus(n, s),
                    this.finishLayout(t);
                },
              },
            ]),
            e
          );
        })(f)),
        (e.ScandicusFlexus = (function (t) {
          function e() {
            return (
              o(this, e),
              n(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            s(e, t),
            a(e, [
              {
                key: "positionMarkings",
                value: function () {
                  this.notes[2].shape === u.NoteShape.Virga
                    ? (this.positionPodatusMarkings(
                        this.notes[0],
                        this.notes[1]
                      ),
                      this.positionClivisMarkings(this.notes[2], this.notes[3]))
                    : (this.positionEpisemataBelow(this.notes[0]),
                      this.positionPodatusMarkings(
                        this.notes[1],
                        this.notes[2]
                      ),
                      this.positionEpisemataAbove(this.notes[3]));
                },
              },
              {
                key: "performLayout",
                value: function (t) {
                  r(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "performLayout",
                    this
                  ).call(this, t);
                  var i = this.notes[0],
                    n = this.notes[1],
                    s = this.notes[2],
                    o = this.notes[3];
                  if (s.shape === u.NoteShape.Virga)
                    this.build(t)
                      .withPodatus(i, n)
                      .advanceBy(t.intraNeumeSpacing)
                      .withClivis(s, o);
                  else {
                    var a = h.GlyphCode.PunctumQuadratum;
                    o.liquescent & u.LiquescentType.Ascending
                      ? (a = h.GlyphCode.PunctumQuadratumAscLiquescent)
                      : o.liquescent & u.LiquescentType.Descending &&
                        (a = h.GlyphCode.PunctumQuadratumDesLiquescent),
                      this.build(t)
                        .noteAt(i, h.GlyphCode.PunctumQuadratum)
                        .withPodatus(n, s)
                        .advanceBy(t.intraNeumeSpacing)
                        .noteAt(o, a);
                  }
                  this.finishLayout(t);
                },
              },
            ]),
            e
          );
        })(f)),
        (e.Torculus = (function (t) {
          function e() {
            return (
              o(this, e),
              n(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            s(e, t),
            a(e, [
              {
                key: "positionMarkings",
                value: function () {
                  this.positionTorculusMarkings(
                    this.notes[0],
                    this.notes[1],
                    this.notes[2]
                  );
                },
              },
              {
                key: "performLayout",
                value: function (t) {
                  r(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "performLayout",
                    this
                  ).call(this, t);
                  var i,
                    n,
                    s = this.notes[0],
                    o = this.notes[1],
                    a = this.notes[2];
                  (i =
                    s.liquescent === u.LiquescentType.InitioDebilis
                      ? h.GlyphCode.TerminatingDesLiquescent
                      : s.shape === u.NoteShape.Quilisma
                      ? h.GlyphCode.Quilisma
                      : h.GlyphCode.PunctumQuadratum),
                    (n =
                      a.liquescent & u.LiquescentType.Small
                        ? h.GlyphCode.TerminatingDesLiquescent
                        : a.liquescent & u.LiquescentType.Ascending
                        ? h.GlyphCode.PunctumQuadratumAscLiquescent
                        : a.liquescent & u.LiquescentType.Descending
                        ? h.GlyphCode.PunctumQuadratumDesLiquescent
                        : h.GlyphCode.PunctumQuadratum),
                    this.build(t)
                      .noteAt(s, i)
                      .noteAt(o, h.GlyphCode.PunctumQuadratum)
                      .noteAt(a, n),
                    this.finishLayout(t);
                },
              },
            ]),
            e
          );
        })(f)),
        (e.TorculusResupinus = (function (t) {
          function e() {
            return (
              o(this, e),
              n(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            s(e, t),
            a(e, [
              {
                key: "positionMarkings",
                value: function () {
                  this.positionPorrectusMarkings(
                    this.notes[1],
                    this.notes[2],
                    this.notes[3]
                  ),
                    this.positionClivisEpisemata(this.notes[1], this.notes[0]);
                },
              },
              {
                key: "performLayout",
                value: function (t) {
                  r(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "performLayout",
                    this
                  ).call(this, t);
                  var i,
                    n,
                    s = this.notes[0],
                    o = this.notes[1],
                    a = this.notes[2],
                    l = this.notes[3];
                  (i =
                    s.liquescent === u.LiquescentType.InitioDebilis
                      ? h.GlyphCode.TerminatingDesLiquescent
                      : s.shape === u.NoteShape.Quilisma
                      ? h.GlyphCode.Quilisma
                      : h.GlyphCode.PunctumQuadratum),
                    (n =
                      l.liquescent & u.LiquescentType.Small
                        ? h.GlyphCode.TerminatingAscLiquescent
                        : a.liquescent & u.LiquescentType.Descending
                        ? h.GlyphCode.PunctumQuadratumDesLiquescent
                        : h.GlyphCode.PodatusUpper),
                    this.build(t)
                      .noteAt(s, i)
                      .withPorrectusSwash(o, a)
                      .noteAt(l, n),
                    this.finishLayout(t);
                },
              },
            ]),
            e
          );
        })(f)),
        (e.TorculusResupinusFlexus = (function (t) {
          function e() {
            return (
              o(this, e),
              n(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            s(e, t),
            a(e, [
              {
                key: "positionMarkings",
                value: function () {
                  this.positionPorrectusFlexusMarkings(
                    this.notes[1],
                    this.notes[2],
                    this.notes[3],
                    this.notes[4]
                  ),
                    this.positionClivisEpisemata(this.notes[1], this.notes[0]);
                },
              },
              {
                key: "performLayout",
                value: function (t) {
                  r(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "performLayout",
                    this
                  ).call(this, t);
                  var i,
                    n,
                    s = this.notes[0],
                    o = this.notes[1],
                    a = this.notes[2],
                    l = this.notes[3],
                    c = this.notes[4],
                    f = h.GlyphCode.PunctumQuadratum;
                  (i =
                    s.liquescent === u.LiquescentType.InitioDebilis
                      ? h.GlyphCode.TerminatingDesLiquescent
                      : s.shape === u.NoteShape.Quilisma
                      ? h.GlyphCode.Quilisma
                      : h.GlyphCode.PunctumQuadratum),
                    c.liquescent & u.LiquescentType.Small
                      ? ((f = h.GlyphCode.PunctumQuadratumDesLiquescent),
                        (n = h.GlyphCode.TerminatingDesLiquescent))
                      : (n =
                          c.liquescent & u.LiquescentType.Ascending
                            ? h.GlyphCode.PunctumQuadratumAscLiquescent
                            : c.liquescent & u.LiquescentType.Descending
                            ? h.GlyphCode.PunctumQuadratumDesLiquescent
                            : h.GlyphCode.PunctumQuadratum),
                    this.build(t)
                      .noteAt(s, i)
                      .withPorrectusSwash(o, a)
                      .noteAt(l, f)
                      .noteAt(c, n),
                    this.finishLayout(t);
                },
              },
            ]),
            e
          );
        })(f)),
        (e.Tristropha = (function (t) {
          function e() {
            return (
              o(this, e),
              n(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            s(e, t),
            a(e, [
              {
                key: "positionMarkings",
                value: function () {
                  this.positionEpisemataAbove(this.notes[0]),
                    this.positionEpisemataAbove(this.notes[1]),
                    this.positionEpisemataAbove(this.notes[2]);
                },
              },
              {
                key: "performLayout",
                value: function (t) {
                  r(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "performLayout",
                    this
                  ).call(this, t);
                  var i = this.notes.map(function (t) {
                      return p.getNoteGlyphCode(t);
                    }),
                    n =
                      i[0] === h.GlyphCode.Stropha
                        ? t.intraNeumeSpacing / 2
                        : t.intraNeumeSpacing;
                  this.build(t)
                    .noteAt(this.notes[0], i[0])
                    .advanceBy(n)
                    .noteAt(this.notes[1], i[1])
                    .advanceBy(n)
                    .noteAt(this.notes[2], i[2]),
                    this.finishLayout(t);
                },
              },
            ]),
            e
          );
        })(f)),
        (e.Virga = (function (t) {
          function e() {
            return (
              o(this, e),
              n(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            s(e, t),
            a(e, [
              {
                key: "positionMarkings",
                value: function () {
                  this.positionEpisemataAbove(this.notes[0]);
                },
              },
              {
                key: "performLayout",
                value: function (t) {
                  r(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "performLayout",
                    this
                  ).call(this, t),
                    this.build(t).virgaAt(this.notes[0]),
                    this.finishLayout(t);
                },
              },
            ]),
            e
          );
        })(f));
    },
    function (t, e, i) {
      "use strict";
      function n(t) {
        if (Array.isArray(t)) {
          for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
          return i;
        }
        return Array.from(t);
      }
      function s(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      }
      function r(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Titles = void 0);
      var a = (function () {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        })(),
        u = i(1),
        h = i(4);
      e.Titles = (function (t) {
        function e(t, i) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = n.supertitle,
            a = n.title,
            u = n.subtitle,
            h = n.textLeft,
            l = n.textRight;
          s(this, e);
          var c = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          return (
            (c.score = i),
            c.setSupertitle(t, r),
            c.setTitle(t, a),
            c.setSubtitle(t, u),
            c.setTextLeft(t, h),
            c.setTextRight(t, l),
            c
          );
        }
        return (
          r(e, t),
          a(e, [
            {
              key: "setBoundsX",
              value: function (t, e, i) {
                var n = this[e];
                switch (t.textStyles[e].alignment) {
                  case "left":
                    (n.textAnchor = "start"), (n.bounds.x = 0);
                    break;
                  case "right":
                    (n.textAnchor = "end"), (n.bounds.x = i);
                    break;
                  case "center":
                  default:
                    (n.textAnchor = "middle"), (n.bounds.x = i / 2);
                }
              },
            },
            {
              key: "layoutTitles",
              value: function (t, e) {
                this.bounds = new u.Rect(0, 0, 0, 0);
                var i = 0;
                this.supertitle &&
                  (this.supertitle.recalculateMetrics(t),
                  this.supertitle.setMaxWidth(t, e),
                  this.setBoundsX(t, "supertitle", e),
                  (this.supertitle.bounds.y = i),
                  this.bounds.union(this.supertitle.bounds),
                  (this.supertitle.bounds.y += this.supertitle.origin.y),
                  (i +=
                    this.supertitle.bounds.height +
                    this.supertitle.padding(t))),
                  this.title &&
                    (i && (i += this.title.padding(t)),
                    this.title.recalculateMetrics(t),
                    this.title.setMaxWidth(t, e),
                    this.setBoundsX(t, "title", e),
                    (this.title.bounds.y = i),
                    this.bounds.union(this.title.bounds),
                    (this.title.bounds.y += this.title.origin.y),
                    (i += this.title.bounds.height + this.title.padding(t))),
                  this.subtitle &&
                    (i && (i += this.subtitle.padding(t)),
                    this.subtitle.recalculateMetrics(t),
                    this.subtitle.setMaxWidth(t, e),
                    this.setBoundsX(t, "subtitle", e),
                    (this.subtitle.bounds.y = i),
                    this.bounds.union(this.subtitle.bounds),
                    (this.subtitle.bounds.y += this.subtitle.origin.y),
                    (i +=
                      this.subtitle.bounds.height + this.subtitle.padding(t)));
                var n = i,
                  s = this.score.overrideTextLeft || this.textLeft;
                return (
                  s &&
                    (s.recalculateMetrics(t),
                    (s.bounds.y = i),
                    this.bounds.union(s.bounds),
                    (s.bounds.y += s.origin.y),
                    (n = i + s.bounds.height + s.padding(t))),
                  this.textRight &&
                    (this.textRight.recalculateMetrics(t),
                    (this.textRight.bounds.x = e),
                    (this.textRight.bounds.y = i),
                    this.bounds.union(this.textRight.bounds),
                    (this.textRight.bounds.y += this.textRight.origin.y),
                    (n = Math.max(
                      n,
                      i +
                        this.textRight.bounds.height +
                        this.textRight.padding(t)
                    ))),
                  n
                );
              },
            },
            {
              key: "setSupertitle",
              value: function (t, e) {
                this.supertitle = e ? new h.Supertitle(t, e) : null;
              },
            },
            {
              key: "setTitle",
              value: function (t, e) {
                this.title = e ? new h.Title(t, e) : null;
              },
            },
            {
              key: "setSubtitle",
              value: function (t, e) {
                this.subtitle = e ? new h.Subtitle(t, e) : null;
              },
            },
            {
              key: "setTextLeft",
              value: function (t, e) {
                this.textLeft = e
                  ? new h.TextLeftRight(t, e, "textLeft")
                  : null;
              },
            },
            {
              key: "setTextRight",
              value: function (t, e) {
                this.textRight = e
                  ? new h.TextLeftRight(t, e, "textRight")
                  : null;
              },
            },
            {
              key: "hasSupertitle",
              value: function (t, e) {
                return !!this.supertitle;
              },
            },
            {
              key: "hasTitle",
              value: function (t, e) {
                return !!this.title;
              },
            },
            {
              key: "hasSubtitle",
              value: function (t, e) {
                return !!this.subtitle;
              },
            },
            {
              key: "hasTextLeft",
              value: function (t, e) {
                return !!this.textLeft;
              },
            },
            {
              key: "hasTextRight",
              value: function (t, e) {
                return !!this.textRight;
              },
            },
            {
              key: "draw",
              value: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 1,
                  i = t.canvasCtxt;
                i.translate(this.bounds.x, this.bounds.y);
                for (
                  var n = [
                      this.supertitle,
                      this.title,
                      this.subtitle,
                      this.score.overrideTextLeft || this.textLeft,
                      this.textRight,
                    ],
                    s = 0;
                  s < n.length;
                  s++
                ) {
                  var o = n[s];
                  o && o.draw(t, e);
                }
                i.translate(-this.bounds.x, -this.bounds.y);
              },
            },
            {
              key: "getInnerNodes",
              value: function (t) {
                for (
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "createSvgNode",
                    i = [],
                    n = [
                      this.supertitle,
                      this.title,
                      this.subtitle,
                      this.score.overrideTextLeft || this.textLeft,
                      this.textRight,
                    ],
                    s = 0;
                  s < n.length;
                  s++
                ) {
                  var o = n[s];
                  o && i.push(o[e](t));
                }
                return i;
              },
            },
            {
              key: "createSvgNode",
              value: function (t) {
                var e = this.getInnerNodes(t, "createSvgNode"),
                  i = h.QuickSvg.createNode("g", { class: "Titles" }, e);
                return (i.source = this), (this.svg = i), i;
              },
            },
            {
              key: "createSvgTree",
              value: function (t) {
                var e = this.getInnerNodes(t, "createSvgTree");
                return h.QuickSvg.createSvgTree.apply(
                  h.QuickSvg,
                  ["g", { class: "Titles", source: this }].concat(n(e))
                );
              },
            },
            {
              key: "createSvgFragment",
              value: function (t) {
                for (
                  var e = "",
                    i = [
                      this.supertitle,
                      this.title,
                      this.subtitle,
                      this.score.overrideTextLeft || this.textLeft,
                      this.textRight,
                    ],
                    n = 0;
                  n < i.length;
                  n++
                ) {
                  var s = i[n];
                  s && (e += s.createSvgFragment(t));
                }
                return (e = h.QuickSvg.createFragment(
                  "g",
                  { class: "Titles" },
                  e
                ));
              },
            },
          ]),
          e
        );
      })(h.ChantLayoutElement);
    },
  ]);
});
//# sourceMappingURL=exsurge.min.js.map
