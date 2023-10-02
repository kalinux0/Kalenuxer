(() => {
    var e = {
            945: function(e, t, n) {
                e.exports = function() {
                    "use strict";

                    function e(e, t) {
                        if (null == e) return {};
                        var n, r, o = {},
                            u = Object.keys(e);
                        for (r = 0; r < u.length; r++) n = u[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                        return o
                    }

                    function t(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })) }
                    var r = { name: "prettier", version: "2.2.1", description: "Prettier is an opinionated code formatter", bin: "./bin/prettier.js", repository: "prettier/prettier", homepage: "https://prettier.io", author: "James Long", license: "MIT", main: "./index.js", browser: "./standalone.js", unpkg: "./standalone.js", engines: { node: ">=10.13.0" }, files: ["index.js", "standalone.js", "src", "bin"], dependencies: { "@angular/compiler": "10.2.3", "@babel/code-frame": "7.10.4", "@babel/parser": "7.12.5", "@glimmer/syntax": "0.66.0", "@iarna/toml": "2.2.5", "@typescript-eslint/typescript-estree": "4.8.1", "angular-estree-parser": "2.2.1", "angular-html-parser": "1.7.1", camelcase: "6.2.0", chalk: "4.1.0", "ci-info": "watson/ci-info#f43f6a1cefff47fb361c88cf4b943fdbcaafe540", "cjk-regex": "2.0.0", cosmiconfig: "7.0.0", dashify: "2.0.0", diff: "5.0.0", editorconfig: "0.15.3", "editorconfig-to-prettier": "0.2.0", "escape-string-regexp": "4.0.0", espree: "7.3.0", esutils: "2.0.3", "fast-glob": "3.2.4", "fast-json-stable-stringify": "2.1.0", "find-parent-dir": "0.3.0", "flow-parser": "0.138.0", "get-stdin": "8.0.0", globby: "11.0.1", graphql: "15.4.0", "html-element-attributes": "2.3.0", "html-styles": "1.0.0", "html-tag-names": "1.1.5", "html-void-elements": "1.0.5", ignore: "4.0.6", "jest-docblock": "26.0.0", json5: "2.1.3", leven: "3.1.0", "lines-and-columns": "1.1.6", "linguist-languages": "7.12.1", lodash: "4.17.20", mem: "8.0.0", meriyah: "3.1.6", minimatch: "3.0.4", minimist: "1.2.5", "n-readlines": "1.0.1", outdent: "0.7.1", "parse-srcset": "ikatyang/parse-srcset#54eb9c1cb21db5c62b4d0e275d7249516df6f0ee", "please-upgrade-node": "3.2.0", "postcss-less": "3.1.4", "postcss-media-query-parser": "0.2.3", "postcss-scss": "2.1.1", "postcss-selector-parser": "2.2.3", "postcss-values-parser": "2.0.1", "regexp-util": "1.2.2", "remark-footnotes": "2.0.0", "remark-math": "3.0.1", "remark-parse": "8.0.3", resolve: "1.19.0", semver: "7.3.2", "string-width": "4.2.0", typescript: "4.1.2", "unicode-regex": "3.0.0", unified: "9.2.0", vnopts: "1.0.2", "yaml-unist-parser": "1.3.1" }, devDependencies: { "@babel/core": "7.12.3", "@babel/preset-env": "7.12.1", "@babel/types": "7.12.6", "@glimmer/reference": "0.66.0", "@rollup/plugin-alias": "3.1.1", "@rollup/plugin-babel": "5.2.1", "@rollup/plugin-commonjs": "16.0.0", "@rollup/plugin-json": "4.1.0", "@rollup/plugin-node-resolve": "10.0.0", "@rollup/plugin-replace": "2.3.4", "@types/estree": "0.0.45", "@types/node": "14.14.0", "@typescript-eslint/types": "4.8.1", "babel-jest": "26.6.3", "babel-loader": "8.2.1", benchmark: "2.1.4", "builtin-modules": "3.1.0", "cross-env": "7.0.2", cspell: "4.2.2", eslint: "7.13.0", "eslint-config-prettier": "6.15.0", "eslint-formatter-friendly": "7.0.0", "eslint-plugin-import": "2.22.1", "eslint-plugin-jest": "24.1.3", "eslint-plugin-prettier-internal-rules": "file:scripts/tools/eslint-plugin-prettier-internal-rules", "eslint-plugin-react": "7.21.5", "eslint-plugin-unicorn": "23.0.0", execa: "4.1.0", jest: "26.6.3", "jest-snapshot-serializer-ansi": "1.0.0", "jest-snapshot-serializer-raw": "1.1.0", "jest-watch-typeahead": "0.6.1", "npm-run-all": "4.1.5", "path-browserify": "1.0.1", prettier: "2.2.0", rimraf: "3.0.2", rollup: "2.33.3", "rollup-plugin-node-globals": "1.4.0", "rollup-plugin-terser": "7.0.2", shelljs: "0.8.4", "snapshot-diff": "0.8.1", "strip-ansi": "6.0.0", "synchronous-promise": "2.0.15", tempy: "1.0.0", "terser-webpack-plugin": "5.0.3", webpack: "5.5.1" }, scripts: { prepublishOnly: 'echo "Error: must publish from dist/" && exit 1', "prepare-release": "yarn && yarn build && yarn test:dist", test: "jest", "test:dev-package": "cross-env INSTALL_PACKAGE=1 jest", "test:dist": "cross-env NODE_ENV=production jest", "test:dist-standalone": "cross-env NODE_ENV=production TEST_STANDALONE=1 jest", "test:integration": "jest tests_integration", "perf:repeat": "yarn && yarn build && cross-env NODE_ENV=production node ./dist/bin-prettier.js --debug-repeat ${PERF_REPEAT:-1000} --loglevel debug ${PERF_FILE:-./index.js} > /dev/null", "perf:repeat-inspect": "yarn && yarn build && cross-env NODE_ENV=production node --inspect-brk ./dist/bin-prettier.js --debug-repeat ${PERF_REPEAT:-1000} --loglevel debug ${PERF_FILE:-./index.js} > /dev/null", "perf:benchmark": "yarn && yarn build && cross-env NODE_ENV=production node ./dist/bin-prettier.js --debug-benchmark --loglevel debug ${PERF_FILE:-./index.js} > /dev/null", lint: "run-p lint:*", "lint:typecheck": "tsc", "lint:eslint": "cross-env EFF_NO_LINK_RULES=true eslint . --format friendly", "lint:changelog": "node ./scripts/lint-changelog.js", "lint:prettier": 'prettier . "!test*" --check', "lint:dist": 'eslint --no-eslintrc --no-ignore --env=es6,browser --parser-options=ecmaVersion:2018 "dist/!(bin-prettier|index|third-party).js"', "lint:spellcheck": 'cspell "**/*" ".github/**/*"', "lint:deps": "node ./scripts/check-deps.js", fix: "run-s fix:eslint fix:prettier", "fix:eslint": "yarn lint:eslint --fix", "fix:prettier": "yarn lint:prettier --write", build: "node --max-old-space-size=3072 ./scripts/build/build.js", "build-docs": "node ./scripts/build-docs.js" } };

                    function o() {}

                    function u(e, t, n, r, o) {
                        for (var u = 0, i = t.length, a = 0, s = 0; u < i; u++) {
                            var c = t[u];
                            if (c.removed) {
                                if (c.value = e.join(r.slice(s, s + c.count)), s += c.count, u && t[u - 1].added) {
                                    var l = t[u - 1];
                                    t[u - 1] = t[u], t[u] = l
                                }
                            } else {
                                if (!c.added && o) {
                                    var p = n.slice(a, a + c.count);
                                    p = p.map((function(e, t) { var n = r[s + t]; return n.length > e.length ? n : e })), c.value = e.join(p)
                                } else c.value = e.join(n.slice(a, a + c.count));
                                a += c.count, c.added || (s += c.count)
                            }
                        }
                        var d = t[i - 1];
                        return i > 1 && "string" == typeof d.value && (d.added || d.removed) && e.equals("", d.value) && (t[i - 2].value += d.value, t.pop()), t
                    }

                    function i(e) { return { newPos: e.newPos, components: e.components.slice(0) } }
                    o.prototype = {
                        diff: function(e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                r = n.callback;
                            "function" == typeof n && (r = n, n = {}), this.options = n;
                            var o = this;

                            function a(e) { return r ? (setTimeout((function() { r(void 0, e) }), 0), !0) : e }
                            e = this.castInput(e), t = this.castInput(t), e = this.removeEmpty(this.tokenize(e));
                            var s = (t = this.removeEmpty(this.tokenize(t))).length,
                                c = e.length,
                                l = 1,
                                p = s + c,
                                d = [{ newPos: -1, components: [] }],
                                f = this.extractCommon(d[0], t, e, 0);
                            if (d[0].newPos + 1 >= s && f + 1 >= c) return a([{ value: this.join(t), count: t.length }]);

                            function h() {
                                for (var n = -1 * l; n <= l; n += 2) {
                                    var r = void 0,
                                        p = d[n - 1],
                                        f = d[n + 1],
                                        h = (f ? f.newPos : 0) - n;
                                    p && (d[n - 1] = void 0);
                                    var m = p && p.newPos + 1 < s,
                                        g = f && 0 <= h && h < c;
                                    if (m || g) {
                                        if (!m || g && p.newPos < f.newPos ? (r = i(f), o.pushComponent(r.components, void 0, !0)) : ((r = p).newPos++, o.pushComponent(r.components, !0, void 0)), h = o.extractCommon(r, t, e, n), r.newPos + 1 >= s && h + 1 >= c) return a(u(o, r.components, t, e, o.useLongestToken));
                                        d[n] = r
                                    } else d[n] = void 0
                                }
                                l++
                            }
                            if (r) ! function e() {
                                setTimeout((function() {
                                    if (l > p) return r();
                                    h() || e()
                                }), 0)
                            }();
                            else
                                for (; l <= p;) { var m = h(); if (m) return m }
                        },
                        pushComponent: function(e, t, n) {
                            var r = e[e.length - 1];
                            r && r.added === t && r.removed === n ? e[e.length - 1] = { count: r.count + 1, added: t, removed: n } : e.push({ count: 1, added: t, removed: n })
                        },
                        extractCommon: function(e, t, n, r) { for (var o = t.length, u = n.length, i = e.newPos, a = i - r, s = 0; i + 1 < o && a + 1 < u && this.equals(t[i + 1], n[a + 1]);) i++, a++, s++; return s && e.components.push({ count: s }), e.newPos = i, a },
                        equals: function(e, t) { return this.options.comparator ? this.options.comparator(e, t) : e === t || this.options.ignoreCase && e.toLowerCase() === t.toLowerCase() },
                        removeEmpty: function(e) { for (var t = [], n = 0; n < e.length; n++) e[n] && t.push(e[n]); return t },
                        castInput: function(e) { return e },
                        tokenize: function(e) { return e.split("") },
                        join: function(e) { return e.join("") }
                    };
                    var a = new o;

                    function s(e, t) {
                        if ("function" == typeof e) t.callback = e;
                        else if (e)
                            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                        return t
                    }
                    var c = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,
                        l = /\S/,
                        p = new o;
                    p.equals = function(e, t) { return this.options.ignoreCase && (e = e.toLowerCase(), t = t.toLowerCase()), e === t || this.options.ignoreWhitespace && !l.test(e) && !l.test(t) }, p.tokenize = function(e) { for (var t = e.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), n = 0; n < t.length - 1; n++) !t[n + 1] && t[n + 2] && c.test(t[n]) && c.test(t[n + 2]) && (t[n] += t[n + 2], t.splice(n + 1, 2), n--); return t };
                    var d = new o;

                    function f(e, t, n) { return d.diff(e, t, n) }
                    d.tokenize = function(e) {
                        var t = [],
                            n = e.split(/(\n|\r\n)/);
                        n[n.length - 1] || n.pop();
                        for (var r = 0; r < n.length; r++) {
                            var o = n[r];
                            r % 2 && !this.options.newlineIsToken ? t[t.length - 1] += o : (this.options.ignoreWhitespace && (o = o.trim()), t.push(o))
                        }
                        return t
                    };
                    var h = new o;
                    h.tokenize = function(e) { return e.split(/(\S.+?[.!?])(?=\s+|$)/) };
                    var m = new o;

                    function g(e) { return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

                    function D(e) { return function(e) { if (Array.isArray(e)) return y(e) }(e) || function(e) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e) }(e) || function(e, t) { if (e) { if ("string" == typeof e) return y(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(e, t) : void 0 } }(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

                    function y(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                        return r
                    }
                    m.tokenize = function(e) { return e.split(/([{}:;,]|\s+)/) };
                    var E = Object.prototype.toString,
                        C = new o;

                    function b(e, t, n, r, o) {
                        var u, i;
                        for (t = t || [], n = n || [], r && (e = r(o, e)), u = 0; u < t.length; u += 1)
                            if (t[u] === e) return n[u];
                        if ("[object Array]" === E.call(e)) { for (t.push(e), i = new Array(e.length), n.push(i), u = 0; u < e.length; u += 1) i[u] = b(e[u], t, n, r, o); return t.pop(), n.pop(), i }
                        if (e && e.toJSON && (e = e.toJSON()), "object" === g(e) && null !== e) {
                            t.push(e), i = {}, n.push(i);
                            var a, s = [];
                            for (a in e) e.hasOwnProperty(a) && s.push(a);
                            for (s.sort(), u = 0; u < s.length; u += 1) i[a = s[u]] = b(e[a], t, n, r, a);
                            t.pop(), n.pop()
                        } else i = e;
                        return i
                    }
                    C.useLongestToken = !0, C.tokenize = d.tokenize, C.castInput = function(e) {
                        var t = this.options,
                            n = t.undefinedReplacement,
                            r = t.stringifyReplacer,
                            o = void 0 === r ? function(e, t) { return void 0 === t ? n : t } : r;
                        return "string" == typeof e ? e : JSON.stringify(b(e, null, null, o), o, "  ")
                    }, C.equals = function(e, t) { return o.prototype.equals.call(C, e.replace(/,([\r\n])/g, "$1"), t.replace(/,([\r\n])/g, "$1")) };
                    var v = new o;

                    function A(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.split(/\r\n|[\n\v\f\r\x85]/),
                            r = e.match(/\r\n|[\n\v\f\r\x85]/g) || [],
                            o = [],
                            u = 0;

                        function i() {
                            var e = {};
                            for (o.push(e); u < n.length;) {
                                var r = n[u];
                                if (/^(\-\-\-|\+\+\+|@@)\s/.test(r)) break;
                                var i = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(r);
                                i && (e.index = i[1]), u++
                            }
                            for (a(e), a(e), e.hunks = []; u < n.length;) {
                                var c = n[u];
                                if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(c)) break;
                                if (/^@@/.test(c)) e.hunks.push(s());
                                else {
                                    if (c && t.strict) throw new Error("Unknown line " + (u + 1) + " " + JSON.stringify(c));
                                    u++
                                }
                            }
                        }

                        function a(e) {
                            var t = /^(---|\+\+\+)\s+(.*)$/.exec(n[u]);
                            if (t) {
                                var r = "---" === t[1] ? "old" : "new",
                                    o = t[2].split("\t", 2),
                                    i = o[0].replace(/\\\\/g, "\\");
                                /^".*"$/.test(i) && (i = i.substr(1, i.length - 2)), e[r + "FileName"] = i, e[r + "Header"] = (o[1] || "").trim(), u++
                            }
                        }

                        function s() {
                            var e = u,
                                o = n[u++].split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),
                                i = { oldStart: +o[1], oldLines: void 0 === o[2] ? 1 : +o[2], newStart: +o[3], newLines: void 0 === o[4] ? 1 : +o[4], lines: [], linedelimiters: [] };
                            0 === i.oldLines && (i.oldStart += 1), 0 === i.newLines && (i.newStart += 1);
                            for (var a = 0, s = 0; u < n.length && !(0 === n[u].indexOf("--- ") && u + 2 < n.length && 0 === n[u + 1].indexOf("+++ ") && 0 === n[u + 2].indexOf("@@")); u++) {
                                var c = 0 == n[u].length && u != n.length - 1 ? " " : n[u][0];
                                if ("+" !== c && "-" !== c && " " !== c && "\\" !== c) break;
                                i.lines.push(n[u]), i.linedelimiters.push(r[u] || "\n"), "+" === c ? a++ : "-" === c ? s++ : " " === c && (a++, s++)
                            }
                            if (a || 1 !== i.newLines || (i.newLines = 0), s || 1 !== i.oldLines || (i.oldLines = 0), t.strict) { if (a !== i.newLines) throw new Error("Added line count did not match for hunk at line " + (e + 1)); if (s !== i.oldLines) throw new Error("Removed line count did not match for hunk at line " + (e + 1)) }
                            return i
                        }
                        for (; u < n.length;) i();
                        return o
                    }

                    function F(e, t, n) {
                        var r = !0,
                            o = !1,
                            u = !1,
                            i = 1;
                        return function a() {
                            if (r && !u) {
                                if (o ? i++ : r = !1, e + i <= n) return i;
                                u = !0
                            }
                            if (!o) return u || (r = !0), t <= e - i ? -i++ : (o = !0, a())
                        }
                    }

                    function x(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if ("string" == typeof t && (t = A(t)), Array.isArray(t)) {
                            if (t.length > 1) throw new Error("applyPatch only works with a single input.");
                            t = t[0]
                        }
                        var r, o, u = e.split(/\r\n|[\n\v\f\r\x85]/),
                            i = e.match(/\r\n|[\n\v\f\r\x85]/g) || [],
                            a = t.hunks,
                            s = n.compareLine || function(e, t, n, r) { return t === r },
                            c = 0,
                            l = n.fuzzFactor || 0,
                            p = 0,
                            d = 0;

                        function f(e, t) {
                            for (var n = 0; n < e.lines.length; n++) {
                                var r = e.lines[n],
                                    o = r.length > 0 ? r[0] : " ",
                                    i = r.length > 0 ? r.substr(1) : r;
                                if (" " === o || "-" === o) {
                                    if (!s(t + 1, u[t], o, i) && ++c > l) return !1;
                                    t++
                                }
                            }
                            return !0
                        }
                        for (var h = 0; h < a.length; h++) {
                            for (var m = a[h], g = u.length - m.oldLines, D = 0, y = d + m.oldStart - 1, E = F(y, p, g); void 0 !== D; D = E())
                                if (f(m, y + D)) { m.offset = d += D; break }
                            if (void 0 === D) return !1;
                            p = m.offset + m.oldStart + m.oldLines
                        }
                        for (var C = 0, b = 0; b < a.length; b++) {
                            var v = a[b],
                                x = v.oldStart + v.offset + C - 1;
                            C += v.newLines - v.oldLines;
                            for (var S = 0; S < v.lines.length; S++) {
                                var w = v.lines[S],
                                    T = w.length > 0 ? w[0] : " ",
                                    B = w.length > 0 ? w.substr(1) : w,
                                    k = v.linedelimiters[S];
                                if (" " === T) x++;
                                else if ("-" === T) u.splice(x, 1), i.splice(x, 1);
                                else if ("+" === T) u.splice(x, 0, B), i.splice(x, 0, k), x++;
                                else if ("\\" === T) { var N = v.lines[S - 1] ? v.lines[S - 1][0] : null; "+" === N ? r = !0 : "-" === N && (o = !0) }
                            }
                        }
                        if (r)
                            for (; !u[u.length - 1];) u.pop(), i.pop();
                        else o && (u.push(""), i.push("\n"));
                        for (var P = 0; P < u.length - 1; P++) u[P] = u[P] + i[P];
                        return u.join("")
                    }

                    function S(e, t, n, r, o, u, i) {
                        i || (i = {}), void 0 === i.context && (i.context = 4);
                        var a = f(n, r, i);

                        function s(e) { return e.map((function(e) { return " " + e })) }
                        a.push({ value: "", lines: [] });
                        for (var c = [], l = 0, p = 0, d = [], h = 1, m = 1, g = function(e) {
                                var t = a[e],
                                    o = t.lines || t.value.replace(/\n$/, "").split("\n");
                                if (t.lines = o, t.added || t.removed) {
                                    var u;
                                    if (!l) {
                                        var f = a[e - 1];
                                        l = h, p = m, f && (d = i.context > 0 ? s(f.lines.slice(-i.context)) : [], l -= d.length, p -= d.length)
                                    }(u = d).push.apply(u, D(o.map((function(e) { return (t.added ? "+" : "-") + e })))), t.added ? m += o.length : h += o.length
                                } else {
                                    if (l)
                                        if (o.length <= 2 * i.context && e < a.length - 2) {
                                            var g;
                                            (g = d).push.apply(g, D(s(o)))
                                        } else {
                                            var y, E = Math.min(o.length, i.context);
                                            (y = d).push.apply(y, D(s(o.slice(0, E))));
                                            var C = { oldStart: l, oldLines: h - l + E, newStart: p, newLines: m - p + E, lines: d };
                                            if (e >= a.length - 2 && o.length <= i.context) {
                                                var b = /\n$/.test(n),
                                                    v = /\n$/.test(r),
                                                    A = 0 == o.length && d.length > C.oldLines;
                                                !b && A && n.length > 0 && d.splice(C.oldLines, 0, "\\ No newline at end of file"), (b || A) && v || d.push("\\ No newline at end of file")
                                            }
                                            c.push(C), l = 0, p = 0, d = []
                                        }
                                    h += o.length, m += o.length
                                }
                            }, y = 0; y < a.length; y++) g(y);
                        return { oldFileName: e, newFileName: t, oldHeader: o, newHeader: u, hunks: c }
                    }

                    function w(e, t, n, r, o, u, i) {
                        return function(e) {
                            var t = [];
                            e.oldFileName == e.newFileName && t.push("Index: " + e.oldFileName), t.push("==================================================================="), t.push("--- " + e.oldFileName + (void 0 === e.oldHeader ? "" : "\t" + e.oldHeader)), t.push("+++ " + e.newFileName + (void 0 === e.newHeader ? "" : "\t" + e.newHeader));
                            for (var n = 0; n < e.hunks.length; n++) {
                                var r = e.hunks[n];
                                0 === r.oldLines && (r.oldStart -= 1), 0 === r.newLines && (r.newStart -= 1), t.push("@@ -" + r.oldStart + "," + r.oldLines + " +" + r.newStart + "," + r.newLines + " @@"), t.push.apply(t, r.lines)
                            }
                            return t.join("\n") + "\n"
                        }(S(e, t, n, r, o, u, i))
                    }

                    function T(e, t) {
                        if (t.length > e.length) return !1;
                        for (var n = 0; n < t.length; n++)
                            if (t[n] !== e[n]) return !1;
                        return !0
                    }

                    function B(e) {
                        var t = U(e.lines),
                            n = t.oldLines,
                            r = t.newLines;
                        void 0 !== n ? e.oldLines = n : delete e.oldLines, void 0 !== r ? e.newLines = r : delete e.newLines
                    }

                    function k(e, t) { if ("string" == typeof e) { if (/^@@/m.test(e) || /^Index:/m.test(e)) return A(e)[0]; if (!t) throw new Error("Must provide a base reference or pass in a patch"); return S(void 0, void 0, t, e) } return e }

                    function N(e) { return e.newFileName && e.newFileName !== e.oldFileName }

                    function P(e, t, n) { return t === n ? t : (e.conflict = !0, { mine: t, theirs: n }) }

                    function O(e, t) { return e.oldStart < t.oldStart && e.oldStart + e.oldLines < t.oldStart }

                    function _(e, t) { return { oldStart: e.oldStart, oldLines: e.oldLines, newStart: e.newStart + t, newLines: e.newLines, lines: e.lines } }

                    function L(e, t, n, r, o) {
                        var u = { offset: t, lines: n, index: 0 },
                            i = { offset: r, lines: o, index: 0 };
                        for (R(e, u, i), R(e, i, u); u.index < u.lines.length && i.index < i.lines.length;) {
                            var a = u.lines[u.index],
                                s = i.lines[i.index];
                            if ("-" !== a[0] && "+" !== a[0] || "-" !== s[0] && "+" !== s[0])
                                if ("+" === a[0] && " " === s[0]) {
                                    var c;
                                    (c = e.lines).push.apply(c, D(V(u)))
                                } else if ("+" === s[0] && " " === a[0]) {
                                var l;
                                (l = e.lines).push.apply(l, D(V(i)))
                            } else "-" === a[0] && " " === s[0] ? M(e, u, i) : "-" === s[0] && " " === a[0] ? M(e, i, u, !0) : a === s ? (e.lines.push(a), u.index++, i.index++) : j(e, V(u), V(i));
                            else I(e, u, i)
                        }
                        q(e, u), q(e, i), B(e)
                    }

                    function I(e, t, n) {
                        var r = V(t),
                            o = V(n);
                        if ($(r) && $(o)) { var u, i; if (T(r, o) && W(n, r, r.length - o.length)) return void(u = e.lines).push.apply(u, D(r)); if (T(o, r) && W(t, o, o.length - r.length)) return void(i = e.lines).push.apply(i, D(o)) } else if (function(e, t) { return e.length === t.length && T(e, t) }(r, o)) { var a; return void(a = e.lines).push.apply(a, D(r)) }
                        j(e, r, o)
                    }

                    function M(e, t, n, r) {
                        var o, u = V(t),
                            i = function(e, t) {
                                for (var n = [], r = [], o = 0, u = !1, i = !1; o < t.length && e.index < e.lines.length;) {
                                    var a = e.lines[e.index],
                                        s = t[o];
                                    if ("+" === s[0]) break;
                                    if (u = u || " " !== a[0], r.push(s), o++, "+" === a[0])
                                        for (i = !0;
                                            "+" === a[0];) n.push(a), a = e.lines[++e.index];
                                    s.substr(1) === a.substr(1) ? (n.push(a), e.index++) : i = !0
                                }
                                if ("+" === (t[o] || "")[0] && u && (i = !0), i) return n;
                                for (; o < t.length;) r.push(t[o++]);
                                return { merged: r, changes: n }
                            }(n, u);
                        i.merged ? (o = e.lines).push.apply(o, D(i.merged)) : j(e, r ? i : u, r ? u : i)
                    }

                    function j(e, t, n) { e.conflict = !0, e.lines.push({ conflict: !0, mine: t, theirs: n }) }

                    function R(e, t, n) {
                        for (; t.offset < n.offset && t.index < t.lines.length;) {
                            var r = t.lines[t.index++];
                            e.lines.push(r), t.offset++
                        }
                    }

                    function q(e, t) {
                        for (; t.index < t.lines.length;) {
                            var n = t.lines[t.index++];
                            e.lines.push(n)
                        }
                    }

                    function V(e) {
                        for (var t = [], n = e.lines[e.index][0]; e.index < e.lines.length;) {
                            var r = e.lines[e.index];
                            if ("-" === n && "+" === r[0] && (n = "+"), n !== r[0]) break;
                            t.push(r), e.index++
                        }
                        return t
                    }

                    function $(e) { return e.reduce((function(e, t) { return e && "-" === t[0] }), !0) }

                    function W(e, t, n) { for (var r = 0; r < n; r++) { var o = t[t.length - n + r].substr(1); if (e.lines[e.index + r] !== " " + o) return !1 } return e.index += n, !0 }

                    function U(e) {
                        var t = 0,
                            n = 0;
                        return e.forEach((function(e) {
                            if ("string" != typeof e) {
                                var r = U(e.mine),
                                    o = U(e.theirs);
                                void 0 !== t && (r.oldLines === o.oldLines ? t += r.oldLines : t = void 0), void 0 !== n && (r.newLines === o.newLines ? n += r.newLines : n = void 0)
                            } else void 0 === n || "+" !== e[0] && " " !== e[0] || n++, void 0 === t || "-" !== e[0] && " " !== e[0] || t++
                        })), { oldLines: t, newLines: n }
                    }

                    function J(e) { return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") }
                    v.tokenize = function(e) { return e.slice() }, v.join = v.removeEmpty = function(e) { return e };
                    var z = Object.freeze({
                        __proto__: null,
                        Diff: o,
                        applyPatch: x,
                        applyPatches: function(e, t) {
                            "string" == typeof e && (e = A(e));
                            var n = 0;
                            ! function r() {
                                var o = e[n++];
                                if (!o) return t.complete();
                                t.loadFile(o, (function(e, n) {
                                    if (e) return t.complete(e);
                                    var u = x(n, o, t);
                                    t.patched(o, u, (function(e) {
                                        if (e) return t.complete(e);
                                        r()
                                    }))
                                }))
                            }()
                        },
                        canonicalize: b,
                        convertChangesToDMP: function(e) { for (var t, n, r = [], o = 0; o < e.length; o++) n = (t = e[o]).added ? 1 : t.removed ? -1 : 0, r.push([n, t.value]); return r },
                        convertChangesToXML: function(e) {
                            for (var t = [], n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.added ? t.push("<ins>") : r.removed && t.push("<del>"), t.push(J(r.value)), r.added ? t.push("</ins>") : r.removed && t.push("</del>")
                            }
                            return t.join("")
                        },
                        createPatch: function(e, t, n, r, o, u) { return w(e, e, t, n, r, o, u) },
                        createTwoFilesPatch: w,
                        diffArrays: function(e, t, n) { return v.diff(e, t, n) },
                        diffChars: function(e, t, n) { return a.diff(e, t, n) },
                        diffCss: function(e, t, n) { return m.diff(e, t, n) },
                        diffJson: function(e, t, n) { return C.diff(e, t, n) },
                        diffLines: f,
                        diffSentences: function(e, t, n) { return h.diff(e, t, n) },
                        diffTrimmedLines: function(e, t, n) { var r = s(n, { ignoreWhitespace: !0 }); return d.diff(e, t, r) },
                        diffWords: function(e, t, n) { return n = s(n, { ignoreWhitespace: !0 }), p.diff(e, t, n) },
                        diffWordsWithSpace: function(e, t, n) { return p.diff(e, t, n) },
                        merge: function(e, t, n) {
                            e = k(e, n), t = k(t, n);
                            var r = {};
                            (e.index || t.index) && (r.index = e.index || t.index), (e.newFileName || t.newFileName) && (N(e) ? N(t) ? (r.oldFileName = P(r, e.oldFileName, t.oldFileName), r.newFileName = P(r, e.newFileName, t.newFileName), r.oldHeader = P(r, e.oldHeader, t.oldHeader), r.newHeader = P(r, e.newHeader, t.newHeader)) : (r.oldFileName = e.oldFileName, r.newFileName = e.newFileName, r.oldHeader = e.oldHeader, r.newHeader = e.newHeader) : (r.oldFileName = t.oldFileName || e.oldFileName, r.newFileName = t.newFileName || e.newFileName, r.oldHeader = t.oldHeader || e.oldHeader, r.newHeader = t.newHeader || e.newHeader)), r.hunks = [];
                            for (var o = 0, u = 0, i = 0, a = 0; o < e.hunks.length || u < t.hunks.length;) {
                                var s = e.hunks[o] || { oldStart: 1 / 0 },
                                    c = t.hunks[u] || { oldStart: 1 / 0 };
                                if (O(s, c)) r.hunks.push(_(s, i)), o++, a += s.newLines - s.oldLines;
                                else if (O(c, s)) r.hunks.push(_(c, a)), u++, i += c.newLines - c.oldLines;
                                else {
                                    var l = { oldStart: Math.min(s.oldStart, c.oldStart), oldLines: 0, newStart: Math.min(s.newStart + i, c.oldStart + a), newLines: 0, lines: [] };
                                    L(l, s.oldStart, s.lines, c.oldStart, c.lines), u++, o++, r.hunks.push(l)
                                }
                            }
                            return r
                        },
                        parsePatch: A,
                        structuredPatch: S
                    });

                    function H(e) { return { type: "concat", parts: e } }

                    function G(e) { return { type: "indent", contents: e } }

                    function X(e, t) { return { type: "align", contents: t, n: e } }

                    function Y(e, t) { return { type: "group", id: (t = t || {}).id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates } }
                    const K = { type: "break-parent" },
                        Q = H([{ type: "line", hard: !0 }, K]),
                        Z = H([{ type: "line", hard: !0, literal: !0 }, K]);
                    var ee = {
                        concat: H,
                        join: function(e, t) { const n = []; for (let r = 0; r < t.length; r++) 0 !== r && n.push(e), n.push(t[r]); return H(n) },
                        line: { type: "line" },
                        softline: { type: "line", soft: !0 },
                        hardline: Q,
                        literalline: Z,
                        group: Y,
                        conditionalGroup: function(e, t) { return Y(e[0], Object.assign({}, t, { expandedStates: e })) },
                        fill: function(e) { return { type: "fill", parts: e } },
                        lineSuffix: function(e) { return { type: "line-suffix", contents: e } },
                        lineSuffixBoundary: { type: "line-suffix-boundary" },
                        cursor: { type: "cursor", placeholder: Symbol("cursor") },
                        breakParent: K,
                        ifBreak: function(e, t, n) { return { type: "if-break", breakContents: e, flatContents: t, groupId: (n = n || {}).groupId } },
                        trim: { type: "trim" },
                        indent: G,
                        align: X,
                        addAlignmentToDoc: function(e, t, n) {
                            let r = e;
                            if (t > 0) {
                                for (let e = 0; e < Math.floor(t / n); ++e) r = G(r);
                                r = X(t % n, r), r = X(-1 / 0, r)
                            }
                            return r
                        },
                        markAsRoot: function(e) { return X({ type: "root" }, e) },
                        dedentToRoot: function(e) { return X(-1 / 0, e) },
                        dedent: function(e) { return X(-1, e) }
                    };
                    const te = e => !Number.isNaN(e) && e >= 4352 && (e <= 4447 || 9001 === e || 9002 === e || 11904 <= e && e <= 12871 && 12351 !== e || 12880 <= e && e <= 19903 || 19968 <= e && e <= 42182 || 43360 <= e && e <= 43388 || 44032 <= e && e <= 55203 || 63744 <= e && e <= 64255 || 65040 <= e && e <= 65049 || 65072 <= e && e <= 65131 || 65281 <= e && e <= 65376 || 65504 <= e && e <= 65510 || 110592 <= e && e <= 110593 || 127488 <= e && e <= 127569 || 131072 <= e && e <= 262141);
                    var ne = te,
                        re = te;
                    ne.default = re;
                    const oe = e => {
                        if ("string" != typeof(e = e.replace(/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g, "  ")) || 0 === e.length) return 0;
                        e = (e => "string" == typeof e ? e.replace((({ onlyFirst: e = !1 } = {}) => { const t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|"); return new RegExp(t, e ? void 0 : "g") })(), "") : e)(e);
                        let t = 0;
                        for (let n = 0; n < e.length; n++) {
                            const r = e.codePointAt(n);
                            r <= 31 || r >= 127 && r <= 159 || r >= 768 && r <= 879 || (r > 65535 && n++, t += ne(r) ? 2 : 1)
                        }
                        return t
                    };
                    var ue = oe,
                        ie = oe;
                    ue.default = ie;
                    var ae = e => { if ("string" != typeof e) throw new TypeError("Expected a string"); return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d") },
                        se = e => e[e.length - 1],
                        ce = void 0 !== n.g ? n.g : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};

                    function le() { throw new Error("setTimeout has not been defined") }

                    function pe() { throw new Error("clearTimeout has not been defined") }
                    var de = le,
                        fe = pe;

                    function he(e) { if (de === setTimeout) return setTimeout(e, 0); if ((de === le || !de) && setTimeout) return de = setTimeout, setTimeout(e, 0); try { return de(e, 0) } catch (t) { try { return de.call(null, e, 0) } catch (t) { return de.call(this, e, 0) } } }
                    "function" == typeof ce.setTimeout && (de = setTimeout), "function" == typeof ce.clearTimeout && (fe = clearTimeout);
                    var me, ge = [],
                        De = !1,
                        ye = -1;

                    function Ee() { De && me && (De = !1, me.length ? ge = me.concat(ge) : ye = -1, ge.length && Ce()) }

                    function Ce() {
                        if (!De) {
                            var e = he(Ee);
                            De = !0;
                            for (var t = ge.length; t;) {
                                for (me = ge, ge = []; ++ye < t;) me && me[ye].run();
                                ye = -1, t = ge.length
                            }
                            me = null, De = !1,
                                function(e) { if (fe === clearTimeout) return clearTimeout(e); if ((fe === pe || !fe) && clearTimeout) return fe = clearTimeout, clearTimeout(e); try { fe(e) } catch (t) { try { return fe.call(null, e) } catch (t) { return fe.call(this, e) } } }(e)
                        }
                    }

                    function be(e, t) { this.fun = e, this.array = t }

                    function ve() {}
                    be.prototype.run = function() { this.fun.apply(null, this.array) };
                    var Ae = ve,
                        Fe = ve,
                        xe = ve,
                        Se = ve,
                        we = ve,
                        Te = ve,
                        Be = ve,
                        ke = ce.performance || {},
                        Ne = ke.now || ke.mozNow || ke.msNow || ke.oNow || ke.webkitNow || function() { return (new Date).getTime() },
                        Pe = new Date,
                        Oe = {
                            nextTick: function(e) {
                                var t = new Array(arguments.length - 1);
                                if (arguments.length > 1)
                                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                ge.push(new be(e, t)), 1 !== ge.length || De || he(Ce)
                            },
                            title: "browser",
                            browser: !0,
                            env: {},
                            argv: [],
                            version: "",
                            versions: {},
                            on: Ae,
                            addListener: Fe,
                            once: xe,
                            off: Se,
                            removeListener: we,
                            removeAllListeners: Te,
                            emit: Be,
                            binding: function(e) { throw new Error("process.binding is not supported") },
                            cwd: function() { return "/" },
                            chdir: function(e) { throw new Error("process.chdir is not supported") },
                            umask: function() { return 0 },
                            hrtime: function(e) {
                                var t = .001 * Ne.call(ke),
                                    n = Math.floor(t),
                                    r = Math.floor(t % 1 * 1e9);
                                return e && (n -= e[0], (r -= e[1]) < 0 && (n--, r += 1e9)), [n, r]
                            },
                            platform: "browser",
                            release: {},
                            config: {},
                            uptime: function() { return (new Date - Pe) / 1e3 }
                        },
                        _e = "object" == typeof Oe && Oe.env && Oe.env.NODE_DEBUG && /\bsemver\b/i.test(Oe.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {},
                        Le = { SEMVER_SPEC_VERSION: "2.0.0", MAX_LENGTH: 256, MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991, MAX_SAFE_COMPONENT_LENGTH: 16 },
                        Ie = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {};

                    function Me(e, t, n) { return e(n = { path: t, exports: {}, require: function(e, t) { return function() { throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs") }(null == t && n.path) } }, n.exports), n.exports }

                    function je(e) { return e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e }
                    var Re = Me((function(e, t) {
                        const { MAX_SAFE_COMPONENT_LENGTH: n } = Le, r = (t = e.exports = {}).re = [], o = t.src = [], u = t.t = {};
                        let i = 0;
                        const a = (e, t, n) => {
                            const a = i++;
                            _e(a, t), u[e] = a, o[a] = t, r[a] = new RegExp(t, n ? "g" : void 0)
                        };
                        a("NUMERICIDENTIFIER", "0|[1-9]\\d*"), a("NUMERICIDENTIFIERLOOSE", "[0-9]+"), a("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), a("MAINVERSION", "(".concat(o[u.NUMERICIDENTIFIER], ")\\.") + "(".concat(o[u.NUMERICIDENTIFIER], ")\\.") + "(".concat(o[u.NUMERICIDENTIFIER], ")")), a("MAINVERSIONLOOSE", "(".concat(o[u.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(o[u.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(o[u.NUMERICIDENTIFIERLOOSE], ")")), a("PRERELEASEIDENTIFIER", "(?:".concat(o[u.NUMERICIDENTIFIER], "|").concat(o[u.NONNUMERICIDENTIFIER], ")")), a("PRERELEASEIDENTIFIERLOOSE", "(?:".concat(o[u.NUMERICIDENTIFIERLOOSE], "|").concat(o[u.NONNUMERICIDENTIFIER], ")")), a("PRERELEASE", "(?:-(".concat(o[u.PRERELEASEIDENTIFIER], "(?:\\.").concat(o[u.PRERELEASEIDENTIFIER], ")*))")), a("PRERELEASELOOSE", "(?:-?(".concat(o[u.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(o[u.PRERELEASEIDENTIFIERLOOSE], ")*))")), a("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), a("BUILD", "(?:\\+(".concat(o[u.BUILDIDENTIFIER], "(?:\\.").concat(o[u.BUILDIDENTIFIER], ")*))")), a("FULLPLAIN", "v?".concat(o[u.MAINVERSION]).concat(o[u.PRERELEASE], "?").concat(o[u.BUILD], "?")), a("FULL", "^".concat(o[u.FULLPLAIN], "$")), a("LOOSEPLAIN", "[v=\\s]*".concat(o[u.MAINVERSIONLOOSE]).concat(o[u.PRERELEASELOOSE], "?").concat(o[u.BUILD], "?")), a("LOOSE", "^".concat(o[u.LOOSEPLAIN], "$")), a("GTLT", "((?:<|>)?=?)"), a("XRANGEIDENTIFIERLOOSE", "".concat(o[u.NUMERICIDENTIFIERLOOSE], "|x|X|\\*")), a("XRANGEIDENTIFIER", "".concat(o[u.NUMERICIDENTIFIER], "|x|X|\\*")), a("XRANGEPLAIN", "[v=\\s]*(".concat(o[u.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(o[u.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(o[u.XRANGEIDENTIFIER], ")") + "(?:".concat(o[u.PRERELEASE], ")?").concat(o[u.BUILD], "?") + ")?)?"), a("XRANGEPLAINLOOSE", "[v=\\s]*(".concat(o[u.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(o[u.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(o[u.XRANGEIDENTIFIERLOOSE], ")") + "(?:".concat(o[u.PRERELEASELOOSE], ")?").concat(o[u.BUILD], "?") + ")?)?"), a("XRANGE", "^".concat(o[u.GTLT], "\\s*").concat(o[u.XRANGEPLAIN], "$")), a("XRANGELOOSE", "^".concat(o[u.GTLT], "\\s*").concat(o[u.XRANGEPLAINLOOSE], "$")), a("COERCE", "".concat("(^|[^\\d])(\\d{1,").concat(n, "})") + "(?:\\.(\\d{1,".concat(n, "}))?") + "(?:\\.(\\d{1,".concat(n, "}))?") + "(?:$|[^\\d])"), a("COERCERTL", o[u.COERCE], !0), a("LONETILDE", "(?:~>?)"), a("TILDETRIM", "(\\s*)".concat(o[u.LONETILDE], "\\s+"), !0), t.tildeTrimReplace = "$1~", a("TILDE", "^".concat(o[u.LONETILDE]).concat(o[u.XRANGEPLAIN], "$")), a("TILDELOOSE", "^".concat(o[u.LONETILDE]).concat(o[u.XRANGEPLAINLOOSE], "$")), a("LONECARET", "(?:\\^)"), a("CARETTRIM", "(\\s*)".concat(o[u.LONECARET], "\\s+"), !0), t.caretTrimReplace = "$1^", a("CARET", "^".concat(o[u.LONECARET]).concat(o[u.XRANGEPLAIN], "$")), a("CARETLOOSE", "^".concat(o[u.LONECARET]).concat(o[u.XRANGEPLAINLOOSE], "$")), a("COMPARATORLOOSE", "^".concat(o[u.GTLT], "\\s*(").concat(o[u.LOOSEPLAIN], ")$|^$")), a("COMPARATOR", "^".concat(o[u.GTLT], "\\s*(").concat(o[u.FULLPLAIN], ")$|^$")), a("COMPARATORTRIM", "(\\s*)".concat(o[u.GTLT], "\\s*(").concat(o[u.LOOSEPLAIN], "|").concat(o[u.XRANGEPLAIN], ")"), !0), t.comparatorTrimReplace = "$1$2$3", a("HYPHENRANGE", "^\\s*(".concat(o[u.XRANGEPLAIN], ")") + "\\s+-\\s+" + "(".concat(o[u.XRANGEPLAIN], ")") + "\\s*$"), a("HYPHENRANGELOOSE", "^\\s*(".concat(o[u.XRANGEPLAINLOOSE], ")") + "\\s+-\\s+" + "(".concat(o[u.XRANGEPLAINLOOSE], ")") + "\\s*$"), a("STAR", "(<|>)?=?\\s*\\*"), a("GTE0", "^\\s*>=\\s*0.0.0\\s*$"), a("GTE0PRE", "^\\s*>=\\s*0.0.0-0\\s*$")
                    }));
                    const qe = /^[0-9]+$/,
                        Ve = (e, t) => {
                            const n = qe.test(e),
                                r = qe.test(t);
                            return n && r && (e = +e, t = +t), e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1
                        };
                    var $e = { compareIdentifiers: Ve, rcompareIdentifiers: (e, t) => Ve(t, e) };
                    const { MAX_LENGTH: We, MAX_SAFE_INTEGER: Ue } = Le, { re: Je, t: ze } = Re, { compareIdentifiers: He } = $e;
                    class Ge {
                        constructor(e, t) {
                            if (t && "object" == typeof t || (t = { loose: !!t, includePrerelease: !1 }), e instanceof Ge) {
                                if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) return e;
                                e = e.version
                            } else if ("string" != typeof e) throw new TypeError("Invalid Version: ".concat(e));
                            if (e.length > We) throw new TypeError("version is longer than ".concat(We, " characters"));
                            _e("SemVer", e, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
                            const n = e.trim().match(t.loose ? Je[ze.LOOSE] : Je[ze.FULL]);
                            if (!n) throw new TypeError("Invalid Version: ".concat(e));
                            if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > Ue || this.major < 0) throw new TypeError("Invalid major version");
                            if (this.minor > Ue || this.minor < 0) throw new TypeError("Invalid minor version");
                            if (this.patch > Ue || this.patch < 0) throw new TypeError("Invalid patch version");
                            n[4] ? this.prerelease = n[4].split(".").map((e => { if (/^[0-9]+$/.test(e)) { const t = +e; if (t >= 0 && t < Ue) return t } return e })) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format()
                        }
                        format() { return this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch), this.prerelease.length && (this.version += "-".concat(this.prerelease.join("."))), this.version }
                        toString() { return this.version }
                        compare(e) {
                            if (_e("SemVer.compare", this.version, this.options, e), !(e instanceof Ge)) {
                                if ("string" == typeof e && e === this.version) return 0;
                                e = new Ge(e, this.options)
                            }
                            return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e)
                        }
                        compareMain(e) { return e instanceof Ge || (e = new Ge(e, this.options)), He(this.major, e.major) || He(this.minor, e.minor) || He(this.patch, e.patch) }
                        comparePre(e) {
                            if (e instanceof Ge || (e = new Ge(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
                            if (!this.prerelease.length && e.prerelease.length) return 1;
                            if (!this.prerelease.length && !e.prerelease.length) return 0;
                            let t = 0;
                            do {
                                const n = this.prerelease[t],
                                    r = e.prerelease[t];
                                if (_e("prerelease compare", t, n, r), void 0 === n && void 0 === r) return 0;
                                if (void 0 === r) return 1;
                                if (void 0 === n) return -1;
                                if (n !== r) return He(n, r)
                            } while (++t)
                        }
                        compareBuild(e) {
                            e instanceof Ge || (e = new Ge(e, this.options));
                            let t = 0;
                            do {
                                const n = this.build[t],
                                    r = e.build[t];
                                if (_e("prerelease compare", t, n, r), void 0 === n && void 0 === r) return 0;
                                if (void 0 === r) return 1;
                                if (void 0 === n) return -1;
                                if (n !== r) return He(n, r)
                            } while (++t)
                        }
                        inc(e, t) {
                            switch (e) {
                                case "premajor":
                                    this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);
                                    break;
                                case "preminor":
                                    this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
                                    break;
                                case "prepatch":
                                    this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
                                    break;
                                case "prerelease":
                                    0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
                                    break;
                                case "major":
                                    0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                                    break;
                                case "minor":
                                    0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this.prerelease = [];
                                    break;
                                case "patch":
                                    0 === this.prerelease.length && this.patch++, this.prerelease = [];
                                    break;
                                case "pre":
                                    if (0 === this.prerelease.length) this.prerelease = [0];
                                    else { let e = this.prerelease.length; for (; --e >= 0;) "number" == typeof this.prerelease[e] && (this.prerelease[e]++, e = -2); - 1 === e && this.prerelease.push(0) }
                                    t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
                                    break;
                                default:
                                    throw new Error("invalid increment argument: ".concat(e))
                            }
                            return this.format(), this.raw = this.version, this
                        }
                    }
                    var Xe = Ge,
                        Ye = (e, t, n) => new Xe(e, n).compare(new Xe(t, n)),
                        Ke = Me((function(e, t) {
                            function n() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t] }

                            function r() { return "undefined" != typeof WeakMap ? new WeakMap : { add: n, delete: n, get: n, set: n, has: function(e) { return !1 } } }
                            Object.defineProperty(t, "__esModule", { value: !0 });
                            var o = Object.prototype.hasOwnProperty,
                                u = function(e, t) { return o.call(e, t) };

                            function i(e, t) { for (var n in t) u(t, n) && (e[n] = t[n]); return e }
                            var a = /^[ \t]*(?:\r\n|\r|\n)/,
                                s = /(?:\r\n|\r|\n)[ \t]*$/,
                                c = /^(?:[\r\n]|$)/,
                                l = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/,
                                p = /^[ \t]*[\r\n][ \t\r\n]*$/;

                            function d(e, t, n) {
                                var r = 0,
                                    o = e[0].match(l);
                                o && (r = o[1].length);
                                var u = new RegExp("(\\r\\n|\\r|\\n).{0," + r + "}", "g");
                                t && (e = e.slice(1));
                                var i = n.newline,
                                    c = n.trimLeadingNewline,
                                    p = n.trimTrailingNewline,
                                    d = "string" == typeof i,
                                    f = e.length;
                                return e.map((function(e, t) { return e = e.replace(u, "$1"), 0 === t && c && (e = e.replace(a, "")), t === f - 1 && p && (e = e.replace(s, "")), d && (e = e.replace(/\r\n|\n|\r/g, (function(e) { return i }))), e }))
                            }

                            function f(e, t) { for (var n = "", r = 0, o = e.length; r < o; r++) n += e[r], r < o - 1 && (n += t[r]); return n }

                            function h(e) { return u(e, "raw") && u(e, "length") }
                            var m = function e(t) {
                                var n = r(),
                                    o = r();
                                return i((function r(u) {
                                    for (var a = [], s = 1; s < arguments.length; s++) a[s - 1] = arguments[s];
                                    if (h(u)) {
                                        var l = u,
                                            g = (a[0] === r || a[0] === m) && p.test(l[0]) && c.test(l[1]),
                                            D = g ? o : n,
                                            y = D.get(l);
                                        return y || (y = d(l, g, t), D.set(l, y)), 0 === a.length ? y[0] : f(y, g ? a.slice(1) : a)
                                    }
                                    return e(i(i({}, t), u || {}))
                                }), { string: function(e) { return d([e], !1, t)[0] } })
                            }({ trimLeadingNewline: !0, trimTrailingNewline: !0 });
                            t.outdent = m, t.default = m;
                            try { e.exports = m, Object.defineProperty(m, "__esModule", { value: !0 }), m.default = m, m.outdent = m } catch (e) {}
                        }));

                    function Qe() { const e = t(["\n      Require either '@prettier' or '@format' to be present in the file's first docblock comment\n      in order for it to be formatted.\n    "]); return Qe = function() { return e }, e }

                    function Ze() { const e = t(["\n      Format code starting at a given character offset.\n      The range will extend backwards to the start of the first line containing the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]); return Ze = function() { return e }, e }

                    function et() { const e = t(["\n      Format code ending at a given character offset (exclusive).\n      The range will extend forwards to the end of the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]); return et = function() { return e }, e }

                    function tt() { const e = t(["\n      Custom directory that contains prettier plugins in node_modules subdirectory.\n      Overrides default behavior when plugins are searched relatively to the location of Prettier.\n      Multiple values are accepted.\n    "]); return tt = function() { return e }, e }

                    function nt() { const e = t(["\n          Maintain existing\n          (mixed values within one file are normalised by looking at what's used after the first line)\n        "]); return nt = function() { return e }, e }

                    function rt() { const e = t(["\n      Print (to stderr) where a cursor at the given position would move to after formatting.\n      This option cannot be used with --range-start and --range-end.\n    "]); return rt = function() { return e }, e }
                    const { outdent: ot } = Ke, ut = "Config", it = "Editor", at = "Other", st = "Global", ct = "Special", lt = { cursorOffset: { since: "1.4.0", category: ct, type: "int", default: -1, range: { start: -1, end: 1 / 0, step: 1 }, description: ot(rt()), cliCategory: it }, endOfLine: { since: "1.15.0", category: st, type: "choice", default: [{ since: "1.15.0", value: "auto" }, { since: "2.0.0", value: "lf" }], description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: ot(nt()) }] }, filepath: { since: "1.4.0", category: ct, type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: at, cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { since: "1.8.0", category: ct, type: "boolean", default: !1, description: "Insert @format pragma into file's first docblock comment.", cliCategory: at }, parser: { since: "0.0.10", category: st, type: "choice", default: [{ since: "0.0.10", value: "babylon" }, { since: "1.13.0", value: void 0 }], description: "Which parser to use.", exception: e => "string" == typeof e || "function" == typeof e, choices: [{ value: "flow", description: "Flow" }, { value: "babel", since: "1.16.0", description: "JavaScript" }, { value: "babel-flow", since: "1.16.0", description: "Flow" }, { value: "babel-ts", since: "2.0.0", description: "TypeScript" }, { value: "typescript", since: "1.4.0", description: "TypeScript" }, { value: "espree", since: "2.2.0", description: "JavaScript" }, { value: "meriyah", since: "2.2.0", description: "JavaScript" }, { value: "css", since: "1.7.1", description: "CSS" }, { value: "less", since: "1.7.1", description: "Less" }, { value: "scss", since: "1.7.1", description: "SCSS" }, { value: "json", since: "1.5.0", description: "JSON" }, { value: "json5", since: "1.13.0", description: "JSON5" }, { value: "json-stringify", since: "1.13.0", description: "JSON.stringify" }, { value: "graphql", since: "1.5.0", description: "GraphQL" }, { value: "markdown", since: "1.8.0", description: "Markdown" }, { value: "mdx", since: "1.15.0", description: "MDX" }, { value: "vue", since: "1.10.0", description: "Vue" }, { value: "yaml", since: "1.14.0", description: "YAML" }, { value: "glimmer", since: null, description: "Handlebars" }, { value: "html", since: "1.15.0", description: "HTML" }, { value: "angular", since: "1.15.0", description: "Angular" }, { value: "lwc", since: "1.17.0", description: "Lightning Web Components" }] }, plugins: { since: "1.10.0", type: "path", array: !0, default: [{ value: [] }], category: st, description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: e => "string" == typeof e || "object" == typeof e, cliName: "plugin", cliCategory: ut }, pluginSearchDirs: { since: "1.13.0", type: "path", array: !0, default: [{ value: [] }], category: st, description: ot(tt()), exception: e => "string" == typeof e || "object" == typeof e, cliName: "plugin-search-dir", cliCategory: ut }, printWidth: { since: "0.0.0", category: st, type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: 1 / 0, step: 1 } }, rangeEnd: { since: "1.4.0", category: ct, type: "int", default: 1 / 0, range: { start: 0, end: 1 / 0, step: 1 }, description: ot(et()), cliCategory: it }, rangeStart: { since: "1.4.0", category: ct, type: "int", default: 0, range: { start: 0, end: 1 / 0, step: 1 }, description: ot(Ze()), cliCategory: it }, requirePragma: { since: "1.7.0", category: ct, type: "boolean", default: !1, description: ot(Qe()), cliCategory: at }, tabWidth: { type: "int", category: st, default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: 1 / 0, step: 1 } }, useTabs: { since: "1.0.0", category: st, type: "boolean", default: !1, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { since: "2.1.0", category: st, type: "choice", default: [{ since: "2.1.0", value: "auto" }], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } }, pt = Ye, dt = (e, t, n) => Ye(e, t, n) < 0, ft = (e, t, n) => Ye(e, t, n) >= 0, ht = r.version, mt = lt;
                    var gt = {
                        getSupportInfo: function({ plugins: t = [], showUnreleased: n = !1, showDeprecated: r = !1, showInternal: o = !1 } = {}) {
                            const u = ht.split("-", 1)[0],
                                i = t.reduce(((e, t) => e.concat(t.languages || [])), []).filter(s),
                                a = ((e, t) => Object.entries(e).map((([e, t]) => Object.assign({ name: e }, t))))(Object.assign({}, ...t.map((({ options: e }) => e)), mt)).filter((e => s(e) && c(e))).sort(((e, t) => e.name === t.name ? 0 : e.name < t.name ? -1 : 1)).map((function(t) { return o ? t : e(t, ["cliName", "cliCategory", "cliDescription"]) })).map((e => {
                                    e = Object.assign({}, e), Array.isArray(e.default) && (e.default = 1 === e.default.length ? e.default[0].value : e.default.filter(s).sort(((e, t) => pt(t.since, e.since)))[0].value), Array.isArray(e.choices) && (e.choices = e.choices.filter((e => s(e) && c(e))), "parser" === e.name && function(e, t, n) {
                                        const r = new Set(e.choices.map((e => e.value)));
                                        for (const o of t)
                                            if (o.parsers)
                                                for (const t of o.parsers)
                                                    if (!r.has(t)) {
                                                        r.add(t);
                                                        const u = n.find((e => e.parsers && e.parsers[t]));
                                                        let i = o.name;
                                                        u && u.name && (i += " (plugin: ".concat(u.name, ")")), e.choices.push({ value: t, description: i })
                                                    }
                                    }(e, i, t));
                                    const n = t.filter((t => t.defaultOptions && void 0 !== t.defaultOptions[e.name])).reduce(((t, n) => (t[n.name] = n.defaultOptions[e.name], t)), {});
                                    return Object.assign({}, e, { pluginDefaults: n })
                                }));
                            return { languages: i, options: a };

                            function s(e) { return n || !("since" in e) || e.since && ft(u, e.since) }

                            function c(e) { return r || !("deprecated" in e) || e.deprecated && dt(u, e.deprecated) }
                        }
                    };
                    const { getSupportInfo: Dt } = gt, yt = /[^\x20-\x7F]/;

                    function Et(e) {
                        return (t, n, r) => {
                            const o = r && r.backwards;
                            if (!1 === n) return !1;
                            const { length: u } = t;
                            let i = n;
                            for (; i >= 0 && i < u;) {
                                const n = t.charAt(i);
                                if (e instanceof RegExp) { if (!e.test(n)) return i } else if (!e.includes(n)) return i;
                                o ? i-- : i++
                            }
                            return (-1 === i || i === u) && i
                        }
                    }
                    const Ct = Et(/\s/),
                        bt = Et(" \t"),
                        vt = Et(",; \t"),
                        At = Et(/[^\n\r]/);

                    function Ft(e, t) {
                        if (!1 === t) return !1;
                        if ("/" === e.charAt(t) && "*" === e.charAt(t + 1))
                            for (let n = t + 2; n < e.length; ++n)
                                if ("*" === e.charAt(n) && "/" === e.charAt(n + 1)) return n + 2;
                        return t
                    }

                    function xt(e, t) { return !1 !== t && ("/" === e.charAt(t) && "/" === e.charAt(t + 1) ? At(e, t) : t) }

                    function St(e, t, n) { const r = n && n.backwards; if (!1 === t) return !1; const o = e.charAt(t); if (r) { if ("\r" === e.charAt(t - 1) && "\n" === o) return t - 2; if ("\n" === o || "\r" === o || "\u2028" === o || "\u2029" === o) return t - 1 } else { if ("\r" === o && "\n" === e.charAt(t + 1)) return t + 2; if ("\n" === o || "\r" === o || "\u2028" === o || "\u2029" === o) return t + 1 } return t }

                    function wt(e, t, n) { const r = bt(e, (n = n || {}).backwards ? t - 1 : t, n); return r !== St(e, r, n) }

                    function Tt(e, t) {
                        let n = null,
                            r = t;
                        for (; r !== n;) n = r, r = vt(e, r), r = Ft(e, r), r = bt(e, r);
                        return r = xt(e, r), r = St(e, r), !1 !== r && wt(e, r)
                    }

                    function Bt(e, t) {
                        let n = null,
                            r = t;
                        for (; r !== n;) n = r, r = bt(e, r), r = Ft(e, r), r = xt(e, r), r = St(e, r);
                        return r
                    }

                    function kt(e, t, n) { return Bt(e, n(t)) }

                    function Nt(e, t, n) { let r = 0; for (let o = n = n || 0; o < e.length; ++o) "\t" === e[o] ? r = r + t - r % t : r++; return r }

                    function Pt(e, t) {
                        const n = e.slice(1, -1),
                            r = { quote: '"', regex: /"/g },
                            o = { quote: "'", regex: /'/g },
                            u = "'" === t ? o : r,
                            i = u === o ? r : o;
                        let a = u.quote;
                        return (n.includes(u.quote) || n.includes(i.quote)) && (a = (n.match(u.regex) || []).length > (n.match(i.regex) || []).length ? i.quote : u.quote), a
                    }

                    function Ot(e, t, n) {
                        const r = '"' === t ? "'" : '"',
                            o = e.replace(/\\([\S\s])|(["'])/g, ((e, o, u) => o === r ? o : u === t ? "\\" + u : u || (n && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(o) ? o : "\\" + o)));
                        return t + o + t
                    }

                    function _t(e, t) {
                        (e.comments || (e.comments = [])).push(t), t.printed = !1, "JSXText" === e.type && (t.printed = !0)
                    }
                    var Lt = {
                            inferParserByLanguage: function(e, t) { const { languages: n } = Dt({ plugins: t.plugins }), r = n.find((({ name: t }) => t.toLowerCase() === e)) || n.find((({ aliases: t }) => Array.isArray(t) && t.includes(e))) || n.find((({ extensions: t }) => Array.isArray(t) && t.includes(".".concat(e)))); return r && r.parsers[0] },
                            replaceEndOfLineWith: function(e, t) { const n = []; for (const r of e.split("\n")) 0 !== n.length && n.push(t), n.push(r); return n },
                            getStringWidth: function(e) { return e ? yt.test(e) ? ue(e) : e.length : 0 },
                            getMaxContinuousCount: function(e, t) { const n = e.match(new RegExp("(".concat(ae(t), ")+"), "g")); return null === n ? 0 : n.reduce(((e, n) => Math.max(e, n.length / t.length)), 0) },
                            getMinNotPresentContinuousCount: function(e, t) {
                                const n = e.match(new RegExp("(".concat(ae(t), ")+"), "g"));
                                if (null === n) return 0;
                                const r = new Map;
                                let o = 0;
                                for (const e of n) {
                                    const n = e.length / t.length;
                                    r.set(n, !0), n > o && (o = n)
                                }
                                for (let e = 1; e < o; e++)
                                    if (!r.get(e)) return e;
                                return o + 1
                            },
                            getPenultimate: e => e[e.length - 2],
                            getLast: se,
                            getNextNonSpaceNonCommentCharacterIndexWithStartIndex: Bt,
                            getNextNonSpaceNonCommentCharacterIndex: kt,
                            getNextNonSpaceNonCommentCharacter: function(e, t, n) { return e.charAt(kt(e, t, n)) },
                            skip: Et,
                            skipWhitespace: Ct,
                            skipSpaces: bt,
                            skipToLineEnd: vt,
                            skipEverythingButNewLine: At,
                            skipInlineComment: Ft,
                            skipTrailingComment: xt,
                            skipNewline: St,
                            isNextLineEmptyAfterIndex: Tt,
                            isNextLineEmpty: function(e, t, n) { return Tt(e, n(t)) },
                            isPreviousLineEmpty: function(e, t, n) { let r = n(t) - 1; return r = bt(e, r, { backwards: !0 }), r = St(e, r, { backwards: !0 }), r = bt(e, r, { backwards: !0 }), r !== St(e, r, { backwards: !0 }) },
                            hasNewline: wt,
                            hasNewlineInRange: function(e, t, n) {
                                for (let r = t; r < n; ++r)
                                    if ("\n" === e.charAt(r)) return !0;
                                return !1
                            },
                            hasSpaces: function(e, t, n) { return bt(e, (n = n || {}).backwards ? t - 1 : t, n) !== t },
                            getAlignmentSize: Nt,
                            getIndentSize: function(e, t) { const n = e.lastIndexOf("\n"); return -1 === n ? 0 : Nt(e.slice(n + 1).match(/^[\t ]*/)[0], t) },
                            getPreferredQuote: Pt,
                            printString: function(e, t, n) {
                                const r = e.slice(1, -1),
                                    o = !r.includes('"') && !r.includes("'"),
                                    u = "json" === t.parser ? '"' : t.__isInHtmlAttribute ? "'" : Pt(e, t.singleQuote ? "'" : '"');
                                return n ? o ? u + r + u : e : Ot(r, u, !("css" === t.parser || "less" === t.parser || "scss" === t.parser || t.embeddedInHtml))
                            },
                            printNumber: function(e) { return e.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "") },
                            isNodeIgnoreComment: function(e) { return "prettier-ignore" === e.value.trim() },
                            makeString: Ot,
                            addLeadingComment: function(e, t) { t.leading = !0, t.trailing = !1, _t(e, t) },
                            addDanglingComment: function(e, t, n) { t.leading = !1, t.trailing = !1, n && (t.marker = n), _t(e, t) },
                            addTrailingComment: function(e, t) { t.leading = !1, t.trailing = !0, _t(e, t) },
                            isFrontMatterNode: function(e) { return e && "front-matter" === e.type },
                            getShebang: function(e) { if (!e.startsWith("#!")) return ""; const t = e.indexOf("\n"); return -1 === t ? e : e.slice(0, t) }
                        },
                        It = {
                            guessEndOfLine: function(e) { const t = e.indexOf("\r"); return t >= 0 ? "\n" === e.charAt(t + 1) ? "crlf" : "cr" : "lf" },
                            convertEndOfLineToChars: function(e) {
                                switch (e) {
                                    case "cr":
                                        return "\r";
                                    case "crlf":
                                        return "\r\n";
                                    default:
                                        return "\n"
                                }
                            },
                            countEndOfLineChars: function(e, t) {
                                let n;
                                if ("\n" === t) n = /\n/g;
                                else if ("\r" === t) n = /\r/g;
                                else {
                                    if ("\r\n" !== t) throw new Error('Unexpected "eol" '.concat(JSON.stringify(t), "."));
                                    n = /\r\n/g
                                }
                                const r = e.match(n);
                                return r ? r.length : 0
                            },
                            normalizeEndOfLine: function(e) { return e.replace(/\r\n?/g, "\n") }
                        };
                    const { getStringWidth: Mt } = Lt, { convertEndOfLineToChars: jt } = It, { concat: Rt, fill: qt, cursor: Vt } = ee;
                    let $t;

                    function Wt(e, t) { return Jt(e, { type: "indent" }, t) }

                    function Ut(e, t, n) { return t === -1 / 0 ? e.root || { value: "", length: 0, queue: [] } : t < 0 ? Jt(e, { type: "dedent" }, n) : t ? "root" === t.type ? Object.assign({}, e, { root: e }) : Jt(e, { type: "string" == typeof t ? "stringAlign" : "numberAlign", n: t }, n) : e }

                    function Jt(e, t, n) {
                        const r = "dedent" === t.type ? e.queue.slice(0, -1) : e.queue.concat(t);
                        let o = "",
                            u = 0,
                            i = 0,
                            a = 0;
                        for (const e of r) switch (e.type) {
                            case "indent":
                                l(), n.useTabs ? s(1) : c(n.tabWidth);
                                break;
                            case "stringAlign":
                                l(), o += e.n, u += e.n.length;
                                break;
                            case "numberAlign":
                                i += 1, a += e.n;
                                break;
                            default:
                                throw new Error("Unexpected type '".concat(e.type, "'"))
                        }
                        return p(), Object.assign({}, e, { value: o, length: u, queue: r });

                        function s(e) { o += "\t".repeat(e), u += n.tabWidth * e }

                        function c(e) { o += " ".repeat(e), u += e }

                        function l() { n.useTabs ? (i > 0 && s(i), d()) : p() }

                        function p() { a > 0 && c(a), d() }

                        function d() { i = 0, a = 0 }
                    }

                    function zt(e) {
                        if (0 === e.length) return 0;
                        let t = 0;
                        for (; e.length > 0 && "string" == typeof e[e.length - 1] && e[e.length - 1].match(/^[\t ]*$/);) t += e.pop().length;
                        if (e.length && "string" == typeof e[e.length - 1]) {
                            const n = e[e.length - 1].replace(/[\t ]*$/, "");
                            t += e[e.length - 1].length - n.length, e[e.length - 1] = n
                        }
                        return t
                    }

                    function Ht(e, t, n, r, o) {
                        let u = t.length;
                        const i = [e],
                            a = [];
                        for (; n >= 0;) {
                            if (0 === i.length) {
                                if (0 === u) return !0;
                                i.push(t[u - 1]), u--;
                                continue
                            }
                            const [e, s, c] = i.pop();
                            if ("string" == typeof c) a.push(c), n -= Mt(c);
                            else switch (c.type) {
                                case "concat":
                                    for (let t = c.parts.length - 1; t >= 0; t--) i.push([e, s, c.parts[t]]);
                                    break;
                                case "indent":
                                    i.push([Wt(e, r), s, c.contents]);
                                    break;
                                case "align":
                                    i.push([Ut(e, c.n, r), s, c.contents]);
                                    break;
                                case "trim":
                                    n += zt(a);
                                    break;
                                case "group":
                                    if (o && c.break) return !1;
                                    i.push([e, c.break ? 1 : s, c.contents]), c.id && ($t[c.id] = i[i.length - 1][1]);
                                    break;
                                case "fill":
                                    for (let t = c.parts.length - 1; t >= 0; t--) i.push([e, s, c.parts[t]]);
                                    break;
                                case "if-break":
                                    { const t = c.groupId ? $t[c.groupId] : s;1 === t && c.breakContents && i.push([e, s, c.breakContents]), 2 === t && c.flatContents && i.push([e, s, c.flatContents]); break }
                                case "line":
                                    switch (s) {
                                        case 2:
                                            if (!c.hard) { c.soft || (a.push(" "), n -= 1); break }
                                            return !0;
                                        case 1:
                                            return !0
                                    }
                            }
                        }
                        return !1
                    }
                    var Gt = {
                        printDocToString: function(e, t) {
                            $t = {};
                            const n = t.printWidth,
                                r = jt(t.endOfLine);
                            let o = 0;
                            const u = [
                                    [{ value: "", length: 0, queue: [] }, 1, e]
                                ],
                                i = [];
                            let a = !1,
                                s = [];
                            for (; 0 !== u.length;) {
                                const [e, c, l] = u.pop();
                                if ("string" == typeof l) {
                                    const e = "\n" !== r && l.includes("\n") ? l.replace(/\n/g, r) : l;
                                    i.push(e), o += Mt(e)
                                } else switch (l.type) {
                                    case "cursor":
                                        i.push(Vt.placeholder);
                                        break;
                                    case "concat":
                                        for (let t = l.parts.length - 1; t >= 0; t--) u.push([e, c, l.parts[t]]);
                                        break;
                                    case "indent":
                                        u.push([Wt(e, t), c, l.contents]);
                                        break;
                                    case "align":
                                        u.push([Ut(e, l.n, t), c, l.contents]);
                                        break;
                                    case "trim":
                                        o -= zt(i);
                                        break;
                                    case "group":
                                        switch (c) {
                                            case 2:
                                                if (!a) { u.push([e, l.break ? 1 : 2, l.contents]); break }
                                            case 1:
                                                {
                                                    a = !1;
                                                    const r = [e, 2, l.contents],
                                                        i = n - o;
                                                    if (!l.break && Ht(r, u, i, t)) u.push(r);
                                                    else if (l.expandedStates) { const n = l.expandedStates[l.expandedStates.length - 1]; if (l.break) { u.push([e, 1, n]); break } for (let r = 1; r < l.expandedStates.length + 1; r++) { if (r >= l.expandedStates.length) { u.push([e, 1, n]); break } { const n = [e, 2, l.expandedStates[r]]; if (Ht(n, u, i, t)) { u.push(n); break } } } } else u.push([e, 1, l.contents]);
                                                    break
                                                }
                                        }
                                        l.id && ($t[l.id] = u[u.length - 1][1]);
                                        break;
                                    case "fill":
                                        {
                                            const r = n - o,
                                                { parts: i } = l;
                                            if (0 === i.length) break;
                                            const [a, s] = i,
                                            p = [e, 2, a],
                                            d = [e, 1, a],
                                            f = Ht(p, [], r, t, !0);
                                            if (1 === i.length) { f ? u.push(p) : u.push(d); break }
                                            const h = [e, 2, s],
                                                m = [e, 1, s];
                                            if (2 === i.length) { f ? (u.push(h), u.push(p)) : (u.push(m), u.push(d)); break }
                                            i.splice(0, 2);
                                            const g = [e, c, qt(i)],
                                                D = i[0];Ht([e, 2, Rt([a, s, D])], [], r, t, !0) ? (u.push(g), u.push(h), u.push(p)) : f ? (u.push(g), u.push(m), u.push(p)) : (u.push(g), u.push(m), u.push(d));
                                            break
                                        }
                                    case "if-break":
                                        { const t = l.groupId ? $t[l.groupId] : c;1 === t && l.breakContents && u.push([e, c, l.breakContents]), 2 === t && l.flatContents && u.push([e, c, l.flatContents]); break }
                                    case "line-suffix":
                                        s.push([e, c, l.contents]);
                                        break;
                                    case "line-suffix-boundary":
                                        s.length > 0 && u.push([e, c, { type: "line", hard: !0 }]);
                                        break;
                                    case "line":
                                        switch (c) {
                                            case 2:
                                                if (!l.hard) { l.soft || (i.push(" "), o += 1); break }
                                                a = !0;
                                            case 1:
                                                if (s.length) { u.push([e, c, l]), u.push(...s.reverse()), s = []; break }
                                                l.literal ? e.root ? (i.push(r, e.root.value), o = e.root.length) : (i.push(r), o = 0) : (o -= zt(i), i.push(r + e.value), o = e.length)
                                        }
                                }
                                0 === u.length && s.length && (u.push(...s.reverse()), s = [])
                            }
                            const c = i.indexOf(Vt.placeholder);
                            if (-1 !== c) {
                                const e = i.indexOf(Vt.placeholder, c + 1),
                                    t = i.slice(0, c).join(""),
                                    n = i.slice(c + 1, e).join("");
                                return { formatted: t + n + i.slice(e + 1).join(""), cursorNodeStart: t.length, cursorNodeText: n }
                            }
                            return { formatted: i.join("") }
                        }
                    };
                    const { literalline: Xt, concat: Yt } = ee, Kt = {};

                    function Qt(e, t, n, r) {
                        const o = [e];
                        for (; 0 !== o.length;) {
                            const e = o.pop();
                            if (e !== Kt) {
                                if (n && o.push(e, Kt), !t || !1 !== t(e))
                                    if ("concat" === e.type || "fill" === e.type)
                                        for (let t = e.parts.length - 1; t >= 0; --t) o.push(e.parts[t]);
                                    else if ("if-break" === e.type) e.flatContents && o.push(e.flatContents), e.breakContents && o.push(e.breakContents);
                                else if ("group" === e.type && e.expandedStates)
                                    if (r)
                                        for (let t = e.expandedStates.length - 1; t >= 0; --t) o.push(e.expandedStates[t]);
                                    else o.push(e.contents);
                                else e.contents && o.push(e.contents)
                            } else n(o.pop())
                        }
                    }

                    function Zt(e, t) {
                        if ("concat" === e.type || "fill" === e.type) { const n = e.parts.map((e => Zt(e, t))); return t(Object.assign({}, e, { parts: n })) }
                        if ("if-break" === e.type) {
                            const n = e.breakContents && Zt(e.breakContents, t),
                                r = e.flatContents && Zt(e.flatContents, t);
                            return t(Object.assign({}, e, { breakContents: n, flatContents: r }))
                        }
                        if (e.contents) { const n = Zt(e.contents, t); return t(Object.assign({}, e, { contents: n })) }
                        return t(e)
                    }

                    function en(e, t, n) {
                        let r = n,
                            o = !1;
                        return Qt(e, (function(e) { const n = t(e); if (void 0 !== n && (o = !0, r = n), o) return !1 })), r
                    }

                    function tn(e) { return "string" != typeof e && ("line" === e.type || void 0) }

                    function nn(e) { return !("group" !== e.type || !e.break) || !("line" !== e.type || !e.hard) || "break-parent" === e.type || void 0 }

                    function rn(e) {
                        if (e.length > 0) {
                            const t = e[e.length - 1];
                            t.expandedStates || (t.break = !0)
                        }
                        return null
                    }

                    function on(e) { return "line" !== e.type || e.hard ? "if-break" === e.type ? e.flatContents || "" : e : e.soft ? "" : " " }

                    function un(e) {
                        const t = [],
                            n = e.filter(Boolean);
                        for (; 0 !== n.length;) {
                            const e = n.shift();
                            e && ("concat" !== e.type ? 0 === t.length || "string" != typeof t[t.length - 1] || "string" != typeof e ? t.push(e) : t[t.length - 1] += e : n.unshift(...e.parts))
                        }
                        return t
                    }

                    function an(e) {
                        if ("concat" === e.type) {
                            const t = [];
                            for (let n = 0; n < e.parts.length; ++n) {
                                const r = e.parts[n];
                                if ("string" != typeof r && "concat" === r.type) t.push(...an(r).parts);
                                else { const e = an(r); "" !== e && t.push(e) }
                            }
                            return Object.assign({}, e, { parts: t })
                        }
                        return "if-break" === e.type ? Object.assign({}, e, { breakContents: null != e.breakContents ? an(e.breakContents) : null, flatContents: null != e.flatContents ? an(e.flatContents) : null }) : "group" === e.type ? Object.assign({}, e, { contents: an(e.contents), expandedStates: e.expandedStates ? e.expandedStates.map(an) : e.expandedStates }) : e.contents ? Object.assign({}, e, { contents: an(e.contents) }) : e
                    }

                    function sn(e) { if ("string" == typeof e) return JSON.stringify(e); if ("line" === e.type) return e.literal ? "literalline" : e.hard ? "hardline" : e.soft ? "softline" : "line"; if ("break-parent" === e.type) return "breakParent"; if ("trim" === e.type) return "trim"; if ("concat" === e.type) return "[" + e.parts.map(sn).join(", ") + "]"; if ("indent" === e.type) return "indent(" + sn(e.contents) + ")"; if ("align" === e.type) return e.n === -1 / 0 ? "dedentToRoot(" + sn(e.contents) + ")" : e.n < 0 ? "dedent(" + sn(e.contents) + ")" : "root" === e.n.type ? "markAsRoot(" + sn(e.contents) + ")" : "align(" + JSON.stringify(e.n) + ", " + sn(e.contents) + ")"; if ("if-break" === e.type) return "ifBreak(" + sn(e.breakContents) + (e.flatContents ? ", " + sn(e.flatContents) : "") + ")"; if ("group" === e.type) return e.expandedStates ? "conditionalGroup([" + e.expandedStates.map(sn).join(",") + "])" : (e.break ? "wrappedGroup" : "group") + "(" + sn(e.contents) + ")"; if ("fill" === e.type) return "fill(" + e.parts.map(sn).join(", ") + ")"; if ("line-suffix" === e.type) return "lineSuffix(" + sn(e.contents) + ")"; if ("line-suffix-boundary" === e.type) return "lineSuffixBoundary"; throw new Error("Unknown doc type " + e.type) }
                    var cn = {
                        builders: ee,
                        printer: Gt,
                        utils: {
                            isEmpty: function(e) { return "string" == typeof e && 0 === e.length },
                            willBreak: function(e) { return en(e, nn, !1) },
                            isLineNext: function(e) { return en(e, tn, !1) },
                            traverseDoc: Qt,
                            findInDoc: en,
                            mapDoc: Zt,
                            propagateBreaks: function(e) {
                                const t = new Set,
                                    n = [];
                                Qt(e, (function(e) {
                                    if ("break-parent" === e.type && rn(n), "group" === e.type) {
                                        if (n.push(e), t.has(e)) return !1;
                                        t.add(e)
                                    }
                                }), (function(e) { "group" === e.type && n.pop().break && rn(n) }), !0)
                            },
                            removeLines: function(e) { return Zt(e, on) },
                            stripTrailingHardline: function e(t, n = !1) {
                                if ("concat" === t.type && 0 !== t.parts.length) {
                                    const r = n ? function(e) { let t, { parts: n } = e; for (let r = e.parts.length; r > 0 && !t; r--) t = n[r - 1]; return "group" === t.type && (n = t.contents.parts), n }(t) : t.parts,
                                        o = r[r.length - 1];
                                    if ("concat" === o.type) return 2 === o.parts.length && o.parts[0].hard && "break-parent" === o.parts[1].type ? { type: "concat", parts: r.slice(0, -1) } : { type: "concat", parts: t.parts.slice(0, -1).concat(e(o)) }
                                }
                                return t
                            },
                            normalizeParts: un,
                            normalizeDoc: function(e) { return Zt(e, (e => e.parts ? Object.assign({}, e, { parts: un(e.parts) }) : e)) },
                            replaceNewlinesWithLiterallines: function(e) { return Zt(e, (e => "string" == typeof e && e.includes("\n") ? Yt(e.split(/(\n)/g).map(((e, t) => t % 2 == 0 ? e : Xt))) : e)) }
                        },
                        debug: { printDocToDebug: e => sn(an(e)) }
                    };
                    const ln = () => !1,
                        pn = () => "";
                    var dn = { existsSync: ln, readFileSync: pn },
                        fn = Object.freeze({ __proto__: null, existsSync: ln, readFileSync: pn, default: dn });

                    function hn(e) { if ("string" != typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e)) }

                    function mn(e, t) {
                        for (var n, r = "", o = 0, u = -1, i = 0, a = 0; a <= e.length; ++a) {
                            if (a < e.length) n = e.charCodeAt(a);
                            else {
                                if (47 === n) break;
                                n = 47
                            }
                            if (47 === n) {
                                if (u === a - 1 || 1 === i);
                                else if (u !== a - 1 && 2 === i) {
                                    if (r.length < 2 || 2 !== o || 46 !== r.charCodeAt(r.length - 1) || 46 !== r.charCodeAt(r.length - 2))
                                        if (r.length > 2) { var s = r.lastIndexOf("/"); if (s !== r.length - 1) {-1 === s ? (r = "", o = 0) : o = (r = r.slice(0, s)).length - 1 - r.lastIndexOf("/"), u = a, i = 0; continue } } else if (2 === r.length || 1 === r.length) { r = "", o = 0, u = a, i = 0; continue }
                                    t && (r.length > 0 ? r += "/.." : r = "..", o = 2)
                                } else r.length > 0 ? r += "/" + e.slice(u + 1, a) : r = e.slice(u + 1, a), o = a - u - 1;
                                u = a, i = 0
                            } else 46 === n && -1 !== i ? ++i : i = -1
                        }
                        return r
                    }
                    var gn = {
                        resolve: function() {
                            for (var e, t = "", n = !1, r = arguments.length - 1; r >= -1 && !n; r--) {
                                var o;
                                r >= 0 ? o = arguments[r] : (void 0 === e && (e = Oe.cwd()), o = e), hn(o), 0 !== o.length && (t = o + "/" + t, n = 47 === o.charCodeAt(0))
                            }
                            return t = mn(t, !n), n ? t.length > 0 ? "/" + t : "/" : t.length > 0 ? t : "."
                        },
                        normalize: function(e) {
                            if (hn(e), 0 === e.length) return ".";
                            var t = 47 === e.charCodeAt(0),
                                n = 47 === e.charCodeAt(e.length - 1);
                            return 0 !== (e = mn(e, !t)).length || t || (e = "."), e.length > 0 && n && (e += "/"), t ? "/" + e : e
                        },
                        isAbsolute: function(e) { return hn(e), e.length > 0 && 47 === e.charCodeAt(0) },
                        join: function() {
                            if (0 === arguments.length) return ".";
                            for (var e, t = 0; t < arguments.length; ++t) {
                                var n = arguments[t];
                                hn(n), n.length > 0 && (void 0 === e ? e = n : e += "/" + n)
                            }
                            return void 0 === e ? "." : gn.normalize(e)
                        },
                        relative: function(e, t) {
                            if (hn(e), hn(t), e === t) return "";
                            if ((e = gn.resolve(e)) === (t = gn.resolve(t))) return "";
                            for (var n = 1; n < e.length && 47 === e.charCodeAt(n); ++n);
                            for (var r = e.length, o = r - n, u = 1; u < t.length && 47 === t.charCodeAt(u); ++u);
                            for (var i = t.length - u, a = o < i ? o : i, s = -1, c = 0; c <= a; ++c) {
                                if (c === a) { if (i > a) { if (47 === t.charCodeAt(u + c)) return t.slice(u + c + 1); if (0 === c) return t.slice(u + c) } else o > a && (47 === e.charCodeAt(n + c) ? s = c : 0 === c && (s = 0)); break }
                                var l = e.charCodeAt(n + c);
                                if (l !== t.charCodeAt(u + c)) break;
                                47 === l && (s = c)
                            }
                            var p = "";
                            for (c = n + s + 1; c <= r; ++c) c !== r && 47 !== e.charCodeAt(c) || (0 === p.length ? p += ".." : p += "/..");
                            return p.length > 0 ? p + t.slice(u + s) : (u += s, 47 === t.charCodeAt(u) && ++u, t.slice(u))
                        },
                        _makeLong: function(e) { return e },
                        dirname: function(e) {
                            if (hn(e), 0 === e.length) return ".";
                            for (var t = e.charCodeAt(0), n = 47 === t, r = -1, o = !0, u = e.length - 1; u >= 1; --u)
                                if (47 === (t = e.charCodeAt(u))) { if (!o) { r = u; break } } else o = !1;
                            return -1 === r ? n ? "/" : "." : n && 1 === r ? "//" : e.slice(0, r)
                        },
                        basename: function(e, t) {
                            if (void 0 !== t && "string" != typeof t) throw new TypeError('"ext" argument must be a string');
                            hn(e);
                            var n, r = 0,
                                o = -1,
                                u = !0;
                            if (void 0 !== t && t.length > 0 && t.length <= e.length) {
                                if (t.length === e.length && t === e) return "";
                                var i = t.length - 1,
                                    a = -1;
                                for (n = e.length - 1; n >= 0; --n) { var s = e.charCodeAt(n); if (47 === s) { if (!u) { r = n + 1; break } } else -1 === a && (u = !1, a = n + 1), i >= 0 && (s === t.charCodeAt(i) ? -1 == --i && (o = n) : (i = -1, o = a)) }
                                return r === o ? o = a : -1 === o && (o = e.length), e.slice(r, o)
                            }
                            for (n = e.length - 1; n >= 0; --n)
                                if (47 === e.charCodeAt(n)) { if (!u) { r = n + 1; break } } else -1 === o && (u = !1, o = n + 1);
                            return -1 === o ? "" : e.slice(r, o)
                        },
                        extname: function(e) {
                            hn(e);
                            for (var t = -1, n = 0, r = -1, o = !0, u = 0, i = e.length - 1; i >= 0; --i) {
                                var a = e.charCodeAt(i);
                                if (47 !== a) - 1 === r && (o = !1, r = i + 1), 46 === a ? -1 === t ? t = i : 1 !== u && (u = 1) : -1 !== t && (u = -1);
                                else if (!o) { n = i + 1; break }
                            }
                            return -1 === t || -1 === r || 0 === u || 1 === u && t === r - 1 && t === n + 1 ? "" : e.slice(t, r)
                        },
                        format: function(e) {
                            if (null === e || "object" != typeof e) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
                            return function(e, t) {
                                var n = t.dir || t.root,
                                    r = t.base || (t.name || "") + (t.ext || "");
                                return n ? n === t.root ? n + r : n + "/" + r : r
                            }(0, e)
                        },
                        parse: function(e) {
                            hn(e);
                            var t = { root: "", dir: "", base: "", ext: "", name: "" };
                            if (0 === e.length) return t;
                            var n, r = e.charCodeAt(0),
                                o = 47 === r;
                            o ? (t.root = "/", n = 1) : n = 0;
                            for (var u = -1, i = 0, a = -1, s = !0, c = e.length - 1, l = 0; c >= n; --c)
                                if (47 !== (r = e.charCodeAt(c))) - 1 === a && (s = !1, a = c + 1), 46 === r ? -1 === u ? u = c : 1 !== l && (l = 1) : -1 !== u && (l = -1);
                                else if (!s) { i = c + 1; break }
                            return -1 === u || -1 === a || 0 === l || 1 === l && u === a - 1 && u === i + 1 ? -1 !== a && (t.base = t.name = 0 === i && o ? e.slice(1, a) : e.slice(i, a)) : (0 === i && o ? (t.name = e.slice(1, u), t.base = e.slice(1, a)) : (t.name = e.slice(i, u), t.base = e.slice(i, a)), t.ext = e.slice(u, a)), i > 0 ? t.dir = e.slice(0, i - 1) : o && (t.dir = "/"), t
                        },
                        sep: "/",
                        delimiter: ":",
                        win32: null,
                        posix: null
                    };
                    gn.posix = gn;
                    var Dn = gn,
                        yn = Object.freeze(Object.assign(Object.create(null), Dn, { default: Dn, __moduleExports: Dn })),
                        En = [],
                        Cn = [],
                        bn = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                        vn = !1;

                    function An() {
                        vn = !0;
                        for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = 0, n = e.length; t < n; ++t) En[t] = e[t], Cn[e.charCodeAt(t)] = t;
                        Cn["-".charCodeAt(0)] = 62, Cn["_".charCodeAt(0)] = 63
                    }

                    function Fn(e, t, n) { for (var r, o, u = [], i = t; i < n; i += 3) r = (e[i] << 16) + (e[i + 1] << 8) + e[i + 2], u.push(En[(o = r) >> 18 & 63] + En[o >> 12 & 63] + En[o >> 6 & 63] + En[63 & o]); return u.join("") }

                    function xn(e) {
                        var t;
                        vn || An();
                        for (var n = e.length, r = n % 3, o = "", u = [], i = 16383, a = 0, s = n - r; a < s; a += i) u.push(Fn(e, a, a + i > s ? s : a + i));
                        return 1 === r ? (t = e[n - 1], o += En[t >> 2], o += En[t << 4 & 63], o += "==") : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], o += En[t >> 10], o += En[t >> 4 & 63], o += En[t << 2 & 63], o += "="), u.push(o), u.join("")
                    }

                    function Sn(e, t, n, r, o) {
                        var u, i, a = 8 * o - r - 1,
                            s = (1 << a) - 1,
                            c = s >> 1,
                            l = -7,
                            p = n ? o - 1 : 0,
                            d = n ? -1 : 1,
                            f = e[t + p];
                        for (p += d, u = f & (1 << -l) - 1, f >>= -l, l += a; l > 0; u = 256 * u + e[t + p], p += d, l -= 8);
                        for (i = u & (1 << -l) - 1, u >>= -l, l += r; l > 0; i = 256 * i + e[t + p], p += d, l -= 8);
                        if (0 === u) u = 1 - c;
                        else {
                            if (u === s) return i ? NaN : 1 / 0 * (f ? -1 : 1);
                            i += Math.pow(2, r), u -= c
                        }
                        return (f ? -1 : 1) * i * Math.pow(2, u - r)
                    }

                    function wn(e, t, n, r, o, u) {
                        var i, a, s, c = 8 * u - o - 1,
                            l = (1 << c) - 1,
                            p = l >> 1,
                            d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                            f = r ? 0 : u - 1,
                            h = r ? 1 : -1,
                            m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, i = l) : (i = Math.floor(Math.log(t) / Math.LN2), t * (s = Math.pow(2, -i)) < 1 && (i--, s *= 2), (t += i + p >= 1 ? d / s : d * Math.pow(2, 1 - p)) * s >= 2 && (i++, s /= 2), i + p >= l ? (a = 0, i = l) : i + p >= 1 ? (a = (t * s - 1) * Math.pow(2, o), i += p) : (a = t * Math.pow(2, p - 1) * Math.pow(2, o), i = 0)); o >= 8; e[n + f] = 255 & a, f += h, a /= 256, o -= 8);
                        for (i = i << o | a, c += o; c > 0; e[n + f] = 255 & i, f += h, i /= 256, c -= 8);
                        e[n + f - h] |= 128 * m
                    }
                    var Tn = {}.toString,
                        Bn = Array.isArray || function(e) { return "[object Array]" == Tn.call(e) };

                    function kn() { return Pn.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823 }

                    function Nn(e, t) { if (kn() < t) throw new RangeError("Invalid typed array length"); return Pn.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = Pn.prototype : (null === e && (e = new Pn(t)), e.length = t), e }

                    function Pn(e, t, n) { if (!(Pn.TYPED_ARRAY_SUPPORT || this instanceof Pn)) return new Pn(e, t, n); if ("number" == typeof e) { if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string"); return Ln(this, e) } return On(this, e, t, n) }

                    function On(e, t, n, r) {
                        if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, r) { if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds"); if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds"); return t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r), Pn.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = Pn.prototype : e = In(e, t), e }(e, t, n, r) : "string" == typeof t ? function(e, t, n) {
                            if ("string" == typeof n && "" !== n || (n = "utf8"), !Pn.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                            var r = 0 | Rn(t, n),
                                o = (e = Nn(e, r)).write(t, n);
                            return o !== r && (e = e.slice(0, o)), e
                        }(e, t, n) : function(e, t) { if (jn(t)) { var n = 0 | Mn(t.length); return 0 === (e = Nn(e, n)).length || t.copy(e, 0, 0, n), e } if (t) { if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? Nn(e, 0) : In(e, t); if ("Buffer" === t.type && Bn(t.data)) return In(e, t.data) } var r; throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.") }(e, t)
                    }

                    function _n(e) { if ("number" != typeof e) throw new TypeError('"size" argument must be a number'); if (e < 0) throw new RangeError('"size" argument must not be negative') }

                    function Ln(e, t) {
                        if (_n(t), e = Nn(e, t < 0 ? 0 : 0 | Mn(t)), !Pn.TYPED_ARRAY_SUPPORT)
                            for (var n = 0; n < t; ++n) e[n] = 0;
                        return e
                    }

                    function In(e, t) {
                        var n = t.length < 0 ? 0 : 0 | Mn(t.length);
                        e = Nn(e, n);
                        for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
                        return e
                    }

                    function Mn(e) { if (e >= kn()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kn().toString(16) + " bytes"); return 0 | e }

                    function jn(e) { return !(null == e || !e._isBuffer) }

                    function Rn(e, t) {
                        if (jn(e)) return e.length;
                        if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                        "string" != typeof e && (e = "" + e);
                        var n = e.length;
                        if (0 === n) return 0;
                        for (var r = !1;;) switch (t) {
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return n;
                            case "utf8":
                            case "utf-8":
                            case void 0:
                                return dr(e).length;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return 2 * n;
                            case "hex":
                                return n >>> 1;
                            case "base64":
                                return fr(e).length;
                            default:
                                if (r) return dr(e).length;
                                t = ("" + t).toLowerCase(), r = !0
                        }
                    }

                    function qn(e, t, n) {
                        var r = !1;
                        if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                        if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                        if ((n >>>= 0) <= (t >>>= 0)) return "";
                        for (e || (e = "utf8");;) switch (e) {
                            case "hex":
                                return tr(this, t, n);
                            case "utf8":
                            case "utf-8":
                                return Kn(this, t, n);
                            case "ascii":
                                return Zn(this, t, n);
                            case "latin1":
                            case "binary":
                                return er(this, t, n);
                            case "base64":
                                return Yn(this, t, n);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return nr(this, t, n);
                            default:
                                if (r) throw new TypeError("Unknown encoding: " + e);
                                e = (e + "").toLowerCase(), r = !0
                        }
                    }

                    function Vn(e, t, n) {
                        var r = e[t];
                        e[t] = e[n], e[n] = r
                    }

                    function $n(e, t, n, r, o) {
                        if (0 === e.length) return -1;
                        if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                            if (o) return -1;
                            n = e.length - 1
                        } else if (n < 0) {
                            if (!o) return -1;
                            n = 0
                        }
                        if ("string" == typeof t && (t = Pn.from(t, r)), jn(t)) return 0 === t.length ? -1 : Wn(e, t, n, r, o);
                        if ("number" == typeof t) return t &= 255, Pn.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : Wn(e, [t], n, r, o);
                        throw new TypeError("val must be string, number or Buffer")
                    }

                    function Wn(e, t, n, r, o) {
                        var u, i = 1,
                            a = e.length,
                            s = t.length;
                        if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                            if (e.length < 2 || t.length < 2) return -1;
                            i = 2, a /= 2, s /= 2, n /= 2
                        }

                        function c(e, t) { return 1 === i ? e[t] : e.readUInt16BE(t * i) }
                        if (o) {
                            var l = -1;
                            for (u = n; u < a; u++)
                                if (c(e, u) === c(t, -1 === l ? 0 : u - l)) { if (-1 === l && (l = u), u - l + 1 === s) return l * i } else -1 !== l && (u -= u - l), l = -1
                        } else
                            for (n + s > a && (n = a - s), u = n; u >= 0; u--) {
                                for (var p = !0, d = 0; d < s; d++)
                                    if (c(e, u + d) !== c(t, d)) { p = !1; break }
                                if (p) return u
                            }
                        return -1
                    }

                    function Un(e, t, n, r) {
                        n = Number(n) || 0;
                        var o = e.length - n;
                        r ? (r = Number(r)) > o && (r = o) : r = o;
                        var u = t.length;
                        if (u % 2 != 0) throw new TypeError("Invalid hex string");
                        r > u / 2 && (r = u / 2);
                        for (var i = 0; i < r; ++i) {
                            var a = parseInt(t.substr(2 * i, 2), 16);
                            if (isNaN(a)) return i;
                            e[n + i] = a
                        }
                        return i
                    }

                    function Jn(e, t, n, r) { return hr(dr(t, e.length - n), e, n, r) }

                    function zn(e, t, n, r) { return hr(function(e) { for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n)); return t }(t), e, n, r) }

                    function Hn(e, t, n, r) { return zn(e, t, n, r) }

                    function Gn(e, t, n, r) { return hr(fr(t), e, n, r) }

                    function Xn(e, t, n, r) { return hr(function(e, t) { for (var n, r, o, u = [], i = 0; i < e.length && !((t -= 2) < 0); ++i) r = (n = e.charCodeAt(i)) >> 8, o = n % 256, u.push(o), u.push(r); return u }(t, e.length - n), e, n, r) }

                    function Yn(e, t, n) { return 0 === t && n === e.length ? xn(e) : xn(e.slice(t, n)) }

                    function Kn(e, t, n) {
                        n = Math.min(e.length, n);
                        for (var r = [], o = t; o < n;) {
                            var u, i, a, s, c = e[o],
                                l = null,
                                p = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                            if (o + p <= n) switch (p) {
                                case 1:
                                    c < 128 && (l = c);
                                    break;
                                case 2:
                                    128 == (192 & (u = e[o + 1])) && (s = (31 & c) << 6 | 63 & u) > 127 && (l = s);
                                    break;
                                case 3:
                                    u = e[o + 1], i = e[o + 2], 128 == (192 & u) && 128 == (192 & i) && (s = (15 & c) << 12 | (63 & u) << 6 | 63 & i) > 2047 && (s < 55296 || s > 57343) && (l = s);
                                    break;
                                case 4:
                                    u = e[o + 1], i = e[o + 2], a = e[o + 3], 128 == (192 & u) && 128 == (192 & i) && 128 == (192 & a) && (s = (15 & c) << 18 | (63 & u) << 12 | (63 & i) << 6 | 63 & a) > 65535 && s < 1114112 && (l = s)
                            }
                            null === l ? (l = 65533, p = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), o += p
                        }
                        return function(e) { var t = e.length; if (t <= Qn) return String.fromCharCode.apply(String, e); for (var n = "", r = 0; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += Qn)); return n }(r)
                    }
                    Pn.TYPED_ARRAY_SUPPORT = void 0 === ce.TYPED_ARRAY_SUPPORT || ce.TYPED_ARRAY_SUPPORT, Pn.poolSize = 8192, Pn._augment = function(e) { return e.__proto__ = Pn.prototype, e }, Pn.from = function(e, t, n) { return On(null, e, t, n) }, Pn.TYPED_ARRAY_SUPPORT && (Pn.prototype.__proto__ = Uint8Array.prototype, Pn.__proto__ = Uint8Array), Pn.alloc = function(e, t, n) { return function(e, t, n, r) { return _n(t), t <= 0 ? Nn(e, t) : void 0 !== n ? "string" == typeof r ? Nn(e, t).fill(n, r) : Nn(e, t).fill(n) : Nn(e, t) }(null, e, t, n) }, Pn.allocUnsafe = function(e) { return Ln(null, e) }, Pn.allocUnsafeSlow = function(e) { return Ln(null, e) }, Pn.isBuffer = function(e) { return null != e && (!!e._isBuffer || mr(e) || function(e) { return "function" == typeof e.readFloatLE && "function" == typeof e.slice && mr(e.slice(0, 0)) }(e)) }, Pn.compare = function(e, t) {
                        if (!jn(e) || !jn(t)) throw new TypeError("Arguments must be Buffers");
                        if (e === t) return 0;
                        for (var n = e.length, r = t.length, o = 0, u = Math.min(n, r); o < u; ++o)
                            if (e[o] !== t[o]) { n = e[o], r = t[o]; break }
                        return n < r ? -1 : r < n ? 1 : 0
                    }, Pn.isEncoding = function(e) {
                        switch (String(e).toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "latin1":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1
                        }
                    }, Pn.concat = function(e, t) {
                        if (!Bn(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                        if (0 === e.length) return Pn.alloc(0);
                        var n;
                        if (void 0 === t)
                            for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                        var r = Pn.allocUnsafe(t),
                            o = 0;
                        for (n = 0; n < e.length; ++n) {
                            var u = e[n];
                            if (!jn(u)) throw new TypeError('"list" argument must be an Array of Buffers');
                            u.copy(r, o), o += u.length
                        }
                        return r
                    }, Pn.byteLength = Rn, Pn.prototype._isBuffer = !0, Pn.prototype.swap16 = function() { var e = this.length; if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var t = 0; t < e; t += 2) Vn(this, t, t + 1); return this }, Pn.prototype.swap32 = function() { var e = this.length; if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var t = 0; t < e; t += 4) Vn(this, t, t + 3), Vn(this, t + 1, t + 2); return this }, Pn.prototype.swap64 = function() { var e = this.length; if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var t = 0; t < e; t += 8) Vn(this, t, t + 7), Vn(this, t + 1, t + 6), Vn(this, t + 2, t + 5), Vn(this, t + 3, t + 4); return this }, Pn.prototype.toString = function() { var e = 0 | this.length; return 0 === e ? "" : 0 === arguments.length ? Kn(this, 0, e) : qn.apply(this, arguments) }, Pn.prototype.equals = function(e) { if (!jn(e)) throw new TypeError("Argument must be a Buffer"); return this === e || 0 === Pn.compare(this, e) }, Pn.prototype.inspect = function() { var e = ""; return this.length > 0 && (e = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), this.length > 50 && (e += " ... ")), "<Buffer " + e + ">" }, Pn.prototype.compare = function(e, t, n, r, o) {
                        if (!jn(e)) throw new TypeError("Argument must be a Buffer");
                        if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), t < 0 || n > e.length || r < 0 || o > this.length) throw new RangeError("out of range index");
                        if (r >= o && t >= n) return 0;
                        if (r >= o) return -1;
                        if (t >= n) return 1;
                        if (this === e) return 0;
                        for (var u = (o >>>= 0) - (r >>>= 0), i = (n >>>= 0) - (t >>>= 0), a = Math.min(u, i), s = this.slice(r, o), c = e.slice(t, n), l = 0; l < a; ++l)
                            if (s[l] !== c[l]) { u = s[l], i = c[l]; break }
                        return u < i ? -1 : i < u ? 1 : 0
                    }, Pn.prototype.includes = function(e, t, n) { return -1 !== this.indexOf(e, t, n) }, Pn.prototype.indexOf = function(e, t, n) { return $n(this, e, t, n, !0) }, Pn.prototype.lastIndexOf = function(e, t, n) { return $n(this, e, t, n, !1) }, Pn.prototype.write = function(e, t, n, r) {
                        if (void 0 === t) r = "utf8", n = this.length, t = 0;
                        else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
                        else {
                            if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                            t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                        }
                        var o = this.length - t;
                        if ((void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                        r || (r = "utf8");
                        for (var u = !1;;) switch (r) {
                            case "hex":
                                return Un(this, e, t, n);
                            case "utf8":
                            case "utf-8":
                                return Jn(this, e, t, n);
                            case "ascii":
                                return zn(this, e, t, n);
                            case "latin1":
                            case "binary":
                                return Hn(this, e, t, n);
                            case "base64":
                                return Gn(this, e, t, n);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return Xn(this, e, t, n);
                            default:
                                if (u) throw new TypeError("Unknown encoding: " + r);
                                r = ("" + r).toLowerCase(), u = !0
                        }
                    }, Pn.prototype.toJSON = function() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } };
                    var Qn = 4096;

                    function Zn(e, t, n) {
                        var r = "";
                        n = Math.min(e.length, n);
                        for (var o = t; o < n; ++o) r += String.fromCharCode(127 & e[o]);
                        return r
                    }

                    function er(e, t, n) {
                        var r = "";
                        n = Math.min(e.length, n);
                        for (var o = t; o < n; ++o) r += String.fromCharCode(e[o]);
                        return r
                    }

                    function tr(e, t, n) {
                        var r = e.length;
                        (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                        for (var o = "", u = t; u < n; ++u) o += pr(e[u]);
                        return o
                    }

                    function nr(e, t, n) { for (var r = e.slice(t, n), o = "", u = 0; u < r.length; u += 2) o += String.fromCharCode(r[u] + 256 * r[u + 1]); return o }

                    function rr(e, t, n) { if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint"); if (e + t > n) throw new RangeError("Trying to access beyond buffer length") }

                    function or(e, t, n, r, o, u) { if (!jn(e)) throw new TypeError('"buffer" argument must be a Buffer instance'); if (t > o || t < u) throw new RangeError('"value" argument is out of bounds'); if (n + r > e.length) throw new RangeError("Index out of range") }

                    function ur(e, t, n, r) { t < 0 && (t = 65535 + t + 1); for (var o = 0, u = Math.min(e.length - n, 2); o < u; ++o) e[n + o] = (t & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o) }

                    function ir(e, t, n, r) { t < 0 && (t = 4294967295 + t + 1); for (var o = 0, u = Math.min(e.length - n, 4); o < u; ++o) e[n + o] = t >>> 8 * (r ? o : 3 - o) & 255 }

                    function ar(e, t, n, r, o, u) { if (n + r > e.length) throw new RangeError("Index out of range"); if (n < 0) throw new RangeError("Index out of range") }

                    function sr(e, t, n, r, o) { return o || ar(e, 0, n, 4), wn(e, t, n, r, 23, 4), n + 4 }

                    function cr(e, t, n, r, o) { return o || ar(e, 0, n, 8), wn(e, t, n, r, 52, 8), n + 8 }
                    Pn.prototype.slice = function(e, t) {
                        var n, r = this.length;
                        if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), Pn.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = Pn.prototype;
                        else {
                            var o = t - e;
                            n = new Pn(o, void 0);
                            for (var u = 0; u < o; ++u) n[u] = this[u + e]
                        }
                        return n
                    }, Pn.prototype.readUIntLE = function(e, t, n) { e |= 0, t |= 0, n || rr(e, t, this.length); for (var r = this[e], o = 1, u = 0; ++u < t && (o *= 256);) r += this[e + u] * o; return r }, Pn.prototype.readUIntBE = function(e, t, n) { e |= 0, t |= 0, n || rr(e, t, this.length); for (var r = this[e + --t], o = 1; t > 0 && (o *= 256);) r += this[e + --t] * o; return r }, Pn.prototype.readUInt8 = function(e, t) { return t || rr(e, 1, this.length), this[e] }, Pn.prototype.readUInt16LE = function(e, t) { return t || rr(e, 2, this.length), this[e] | this[e + 1] << 8 }, Pn.prototype.readUInt16BE = function(e, t) { return t || rr(e, 2, this.length), this[e] << 8 | this[e + 1] }, Pn.prototype.readUInt32LE = function(e, t) { return t || rr(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3] }, Pn.prototype.readUInt32BE = function(e, t) { return t || rr(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]) }, Pn.prototype.readIntLE = function(e, t, n) { e |= 0, t |= 0, n || rr(e, t, this.length); for (var r = this[e], o = 1, u = 0; ++u < t && (o *= 256);) r += this[e + u] * o; return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r }, Pn.prototype.readIntBE = function(e, t, n) { e |= 0, t |= 0, n || rr(e, t, this.length); for (var r = t, o = 1, u = this[e + --r]; r > 0 && (o *= 256);) u += this[e + --r] * o; return u >= (o *= 128) && (u -= Math.pow(2, 8 * t)), u }, Pn.prototype.readInt8 = function(e, t) { return t || rr(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e] }, Pn.prototype.readInt16LE = function(e, t) { t || rr(e, 2, this.length); var n = this[e] | this[e + 1] << 8; return 32768 & n ? 4294901760 | n : n }, Pn.prototype.readInt16BE = function(e, t) { t || rr(e, 2, this.length); var n = this[e + 1] | this[e] << 8; return 32768 & n ? 4294901760 | n : n }, Pn.prototype.readInt32LE = function(e, t) { return t || rr(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24 }, Pn.prototype.readInt32BE = function(e, t) { return t || rr(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3] }, Pn.prototype.readFloatLE = function(e, t) { return t || rr(e, 4, this.length), Sn(this, e, !0, 23, 4) }, Pn.prototype.readFloatBE = function(e, t) { return t || rr(e, 4, this.length), Sn(this, e, !1, 23, 4) }, Pn.prototype.readDoubleLE = function(e, t) { return t || rr(e, 8, this.length), Sn(this, e, !0, 52, 8) }, Pn.prototype.readDoubleBE = function(e, t) { return t || rr(e, 8, this.length), Sn(this, e, !1, 52, 8) }, Pn.prototype.writeUIntLE = function(e, t, n, r) {
                        e = +e, t |= 0, n |= 0, r || or(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                        var o = 1,
                            u = 0;
                        for (this[t] = 255 & e; ++u < n && (o *= 256);) this[t + u] = e / o & 255;
                        return t + n
                    }, Pn.prototype.writeUIntBE = function(e, t, n, r) {
                        e = +e, t |= 0, n |= 0, r || or(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                        var o = n - 1,
                            u = 1;
                        for (this[t + o] = 255 & e; --o >= 0 && (u *= 256);) this[t + o] = e / u & 255;
                        return t + n
                    }, Pn.prototype.writeUInt8 = function(e, t, n) { return e = +e, t |= 0, n || or(this, e, t, 1, 255, 0), Pn.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1 }, Pn.prototype.writeUInt16LE = function(e, t, n) { return e = +e, t |= 0, n || or(this, e, t, 2, 65535, 0), Pn.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : ur(this, e, t, !0), t + 2 }, Pn.prototype.writeUInt16BE = function(e, t, n) { return e = +e, t |= 0, n || or(this, e, t, 2, 65535, 0), Pn.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : ur(this, e, t, !1), t + 2 }, Pn.prototype.writeUInt32LE = function(e, t, n) { return e = +e, t |= 0, n || or(this, e, t, 4, 4294967295, 0), Pn.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : ir(this, e, t, !0), t + 4 }, Pn.prototype.writeUInt32BE = function(e, t, n) { return e = +e, t |= 0, n || or(this, e, t, 4, 4294967295, 0), Pn.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : ir(this, e, t, !1), t + 4 }, Pn.prototype.writeIntLE = function(e, t, n, r) {
                        if (e = +e, t |= 0, !r) {
                            var o = Math.pow(2, 8 * n - 1);
                            or(this, e, t, n, o - 1, -o)
                        }
                        var u = 0,
                            i = 1,
                            a = 0;
                        for (this[t] = 255 & e; ++u < n && (i *= 256);) e < 0 && 0 === a && 0 !== this[t + u - 1] && (a = 1), this[t + u] = (e / i >> 0) - a & 255;
                        return t + n
                    }, Pn.prototype.writeIntBE = function(e, t, n, r) {
                        if (e = +e, t |= 0, !r) {
                            var o = Math.pow(2, 8 * n - 1);
                            or(this, e, t, n, o - 1, -o)
                        }
                        var u = n - 1,
                            i = 1,
                            a = 0;
                        for (this[t + u] = 255 & e; --u >= 0 && (i *= 256);) e < 0 && 0 === a && 0 !== this[t + u + 1] && (a = 1), this[t + u] = (e / i >> 0) - a & 255;
                        return t + n
                    }, Pn.prototype.writeInt8 = function(e, t, n) { return e = +e, t |= 0, n || or(this, e, t, 1, 127, -128), Pn.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1 }, Pn.prototype.writeInt16LE = function(e, t, n) { return e = +e, t |= 0, n || or(this, e, t, 2, 32767, -32768), Pn.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : ur(this, e, t, !0), t + 2 }, Pn.prototype.writeInt16BE = function(e, t, n) { return e = +e, t |= 0, n || or(this, e, t, 2, 32767, -32768), Pn.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : ur(this, e, t, !1), t + 2 }, Pn.prototype.writeInt32LE = function(e, t, n) { return e = +e, t |= 0, n || or(this, e, t, 4, 2147483647, -2147483648), Pn.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : ir(this, e, t, !0), t + 4 }, Pn.prototype.writeInt32BE = function(e, t, n) { return e = +e, t |= 0, n || or(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), Pn.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : ir(this, e, t, !1), t + 4 }, Pn.prototype.writeFloatLE = function(e, t, n) { return sr(this, e, t, !0, n) }, Pn.prototype.writeFloatBE = function(e, t, n) { return sr(this, e, t, !1, n) }, Pn.prototype.writeDoubleLE = function(e, t, n) { return cr(this, e, t, !0, n) }, Pn.prototype.writeDoubleBE = function(e, t, n) { return cr(this, e, t, !1, n) }, Pn.prototype.copy = function(e, t, n, r) {
                        if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
                        if (0 === e.length || 0 === this.length) return 0;
                        if (t < 0) throw new RangeError("targetStart out of bounds");
                        if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                        if (r < 0) throw new RangeError("sourceEnd out of bounds");
                        r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                        var o, u = r - n;
                        if (this === e && n < t && t < r)
                            for (o = u - 1; o >= 0; --o) e[o + t] = this[o + n];
                        else if (u < 1e3 || !Pn.TYPED_ARRAY_SUPPORT)
                            for (o = 0; o < u; ++o) e[o + t] = this[o + n];
                        else Uint8Array.prototype.set.call(e, this.subarray(n, n + u), t);
                        return u
                    }, Pn.prototype.fill = function(e, t, n, r) {
                        if ("string" == typeof e) {
                            if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
                                var o = e.charCodeAt(0);
                                o < 256 && (e = o)
                            }
                            if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                            if ("string" == typeof r && !Pn.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                        } else "number" == typeof e && (e &= 255);
                        if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                        if (n <= t) return this;
                        var u;
                        if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                            for (u = t; u < n; ++u) this[u] = e;
                        else {
                            var i = jn(e) ? e : dr(new Pn(e, r).toString()),
                                a = i.length;
                            for (u = 0; u < n - t; ++u) this[u + t] = i[u % a]
                        }
                        return this
                    };
                    var lr = /[^+\/0-9A-Za-z-_]/g;

                    function pr(e) { return e < 16 ? "0" + e.toString(16) : e.toString(16) }

                    function dr(e, t) {
                        var n;
                        t = t || 1 / 0;
                        for (var r = e.length, o = null, u = [], i = 0; i < r; ++i) {
                            if ((n = e.charCodeAt(i)) > 55295 && n < 57344) {
                                if (!o) {
                                    if (n > 56319) {
                                        (t -= 3) > -1 && u.push(239, 191, 189);
                                        continue
                                    }
                                    if (i + 1 === r) {
                                        (t -= 3) > -1 && u.push(239, 191, 189);
                                        continue
                                    }
                                    o = n;
                                    continue
                                }
                                if (n < 56320) {
                                    (t -= 3) > -1 && u.push(239, 191, 189), o = n;
                                    continue
                                }
                                n = 65536 + (o - 55296 << 10 | n - 56320)
                            } else o && (t -= 3) > -1 && u.push(239, 191, 189);
                            if (o = null, n < 128) {
                                if ((t -= 1) < 0) break;
                                u.push(n)
                            } else if (n < 2048) {
                                if ((t -= 2) < 0) break;
                                u.push(n >> 6 | 192, 63 & n | 128)
                            } else if (n < 65536) {
                                if ((t -= 3) < 0) break;
                                u.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                            } else {
                                if (!(n < 1114112)) throw new Error("Invalid code point");
                                if ((t -= 4) < 0) break;
                                u.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                            }
                        }
                        return u
                    }

                    function fr(e) {
                        return function(e) {
                            var t, n, r, o, u, i;
                            vn || An();
                            var a = e.length;
                            if (a % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                            u = "=" === e[a - 2] ? 2 : "=" === e[a - 1] ? 1 : 0, i = new bn(3 * a / 4 - u), r = u > 0 ? a - 4 : a;
                            var s = 0;
                            for (t = 0, n = 0; t < r; t += 4, n += 3) o = Cn[e.charCodeAt(t)] << 18 | Cn[e.charCodeAt(t + 1)] << 12 | Cn[e.charCodeAt(t + 2)] << 6 | Cn[e.charCodeAt(t + 3)], i[s++] = o >> 16 & 255, i[s++] = o >> 8 & 255, i[s++] = 255 & o;
                            return 2 === u ? (o = Cn[e.charCodeAt(t)] << 2 | Cn[e.charCodeAt(t + 1)] >> 4, i[s++] = 255 & o) : 1 === u && (o = Cn[e.charCodeAt(t)] << 10 | Cn[e.charCodeAt(t + 1)] << 4 | Cn[e.charCodeAt(t + 2)] >> 2, i[s++] = o >> 8 & 255, i[s++] = 255 & o), i
                        }(function(e) { if ((e = function(e) { return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "") }(e).replace(lr, "")).length < 2) return ""; for (; e.length % 4 != 0;) e += "="; return e }(e))
                    }

                    function hr(e, t, n, r) { for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o]; return o }

                    function mr(e) { return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e) }
                    var gr = je(fn);
                    class Dr extends Error {}
                    class yr extends Error {}
                    class Er extends Error {}
                    var Cr = { ConfigError: Dr, DebugError: yr, UndefinedParserError: Er },
                        br = function(e, t) {
                            return (br = Object.setPrototypeOf || { __proto__: [] }
                                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
                        },
                        vr = function() {
                            return (vr = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                return e
                            }).apply(this, arguments)
                        };

                    function Ar(e) {
                        var t = "function" == typeof Symbol && Symbol.iterator,
                            n = t && e[t],
                            r = 0;
                        if (n) return n.call(e);
                        if (e && "number" == typeof e.length) return { next: function() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e } } };
                        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                    }

                    function Fr(e, t) {
                        var n = "function" == typeof Symbol && e[Symbol.iterator];
                        if (!n) return e;
                        var r, o, u = n.call(e),
                            i = [];
                        try {
                            for (;
                                (void 0 === t || t-- > 0) && !(r = u.next()).done;) i.push(r.value)
                        } catch (e) { o = { error: e } } finally { try { r && !r.done && (n = u.return) && n.call(u) } finally { if (o) throw o.error } }
                        return i
                    }

                    function xr(e) { return this instanceof xr ? (this.v = e, this) : new xr(e) }
                    var Sr = Object.freeze({
                            __proto__: null,
                            __extends: function(e, t) {
                                function n() { this.constructor = e }
                                br(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                            },
                            get __assign() { return vr },
                            __rest: function(e, t) { var n = {}; for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]); if (null != e && "function" == typeof Object.getOwnPropertySymbols) { var o = 0; for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]) } return n },
                            __decorate: function(e, t, n, r) {
                                var o, u = arguments.length,
                                    i = u < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, r);
                                else
                                    for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (i = (u < 3 ? o(i) : u > 3 ? o(t, n, i) : o(t, n)) || i);
                                return u > 3 && i && Object.defineProperty(t, n, i), i
                            },
                            __param: function(e, t) { return function(n, r) { t(n, r, e) } },
                            __metadata: function(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) },
                            __awaiter: function(e, t, n, r) {
                                return new(n || (n = Promise))((function(o, u) {
                                    function i(e) { try { s(r.next(e)) } catch (e) { u(e) } }

                                    function a(e) { try { s(r.throw(e)) } catch (e) { u(e) } }

                                    function s(e) {
                                        var t;
                                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(i, a)
                                    }
                                    s((r = r.apply(e, t || [])).next())
                                }))
                            },
                            __generator: function(e, t) {
                                var n, r, o, u, i = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
                                return u = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (u[Symbol.iterator] = function() { return this }), u;

                                function a(u) {
                                    return function(a) {
                                        return function(u) {
                                            if (n) throw new TypeError("Generator is already executing.");
                                            for (; i;) try {
                                                if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
                                                switch (r = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                                                    case 0:
                                                    case 1:
                                                        o = u;
                                                        break;
                                                    case 4:
                                                        return i.label++, { value: u[1], done: !1 };
                                                    case 5:
                                                        i.label++, r = u[1], u = [0];
                                                        continue;
                                                    case 7:
                                                        u = i.ops.pop(), i.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== u[0] && 2 !== u[0])) { i = 0; continue }
                                                        if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) { i.label = u[1]; break }
                                                        if (6 === u[0] && i.label < o[1]) { i.label = o[1], o = u; break }
                                                        if (o && i.label < o[2]) { i.label = o[2], i.ops.push(u); break }
                                                        o[2] && i.ops.pop(), i.trys.pop();
                                                        continue
                                                }
                                                u = t.call(e, i)
                                            } catch (e) { u = [6, e], r = 0 } finally { n = o = 0 }
                                            if (5 & u[0]) throw u[1];
                                            return { value: u[0] ? u[1] : void 0, done: !0 }
                                        }([u, a])
                                    }
                                }
                            },
                            __createBinding: function(e, t, n, r) { void 0 === r && (r = n), e[r] = t[n] },
                            __exportStar: function(e, t) { for (var n in e) "default" === n || t.hasOwnProperty(n) || (t[n] = e[n]) },
                            __values: Ar,
                            __read: Fr,
                            __spread: function() { for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Fr(arguments[t])); return e },
                            __spreadArrays: function() {
                                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                                var r = Array(e),
                                    o = 0;
                                for (t = 0; t < n; t++)
                                    for (var u = arguments[t], i = 0, a = u.length; i < a; i++, o++) r[o] = u[i];
                                return r
                            },
                            __await: xr,
                            __asyncGenerator: function(e, t, n) {
                                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                                var r, o = n.apply(e, t || []),
                                    u = [];
                                return r = {}, i("next"), i("throw"), i("return"), r[Symbol.asyncIterator] = function() { return this }, r;

                                function i(e) { o[e] && (r[e] = function(t) { return new Promise((function(n, r) { u.push([e, t, n, r]) > 1 || a(e, t) })) }) }

                                function a(e, t) {
                                    try {
                                        (n = o[e](t)).value instanceof xr ? Promise.resolve(n.value.v).then(s, c) : l(u[0][2], n)
                                    } catch (e) { l(u[0][3], e) }
                                    var n
                                }

                                function s(e) { a("next", e) }

                                function c(e) { a("throw", e) }

                                function l(e, t) { e(t), u.shift(), u.length && a(u[0][0], u[0][1]) }
                            },
                            __asyncDelegator: function(e) {
                                var t, n;
                                return t = {}, r("next"), r("throw", (function(e) { throw e })), r("return"), t[Symbol.iterator] = function() { return this }, t;

                                function r(r, o) { t[r] = e[r] ? function(t) { return (n = !n) ? { value: xr(e[r](t)), done: "return" === r } : o ? o(t) : t } : o }
                            },
                            __asyncValues: function(e) {
                                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                                var t, n = e[Symbol.asyncIterator];
                                return n ? n.call(e) : (e = Ar(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() { return this }, t);

                                function r(n) { t[n] = e[n] && function(t) { return new Promise((function(r, o) {! function(e, t, n, r) { Promise.resolve(r).then((function(t) { e({ value: t, done: n }) }), t) }(r, o, (t = e[n](t)).done, t.value) })) } }
                            },
                            __makeTemplateObject: function(e, t) { return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e },
                            __importStar: function(e) {
                                if (e && e.__esModule) return e;
                                var t = {};
                                if (null != e)
                                    for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                return t.default = e, t
                            },
                            __importDefault: function(e) { return e && e.__esModule ? e : { default: e } },
                            __classPrivateFieldGet: function(e, t) { if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance"); return t.get(e) },
                            __classPrivateFieldSet: function(e, t, n) { if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance"); return t.set(e, n), n }
                        }),
                        wr = Me((function(e, t) {
                            Object.defineProperty(t, "__esModule", { value: !0 }), t.apiDescriptor = {
                                key: e => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e),
                                value(e) { if (null === e || "object" != typeof e) return JSON.stringify(e); if (Array.isArray(e)) return "[".concat(e.map((e => t.apiDescriptor.value(e))).join(", "), "]"); const n = Object.keys(e); return 0 === n.length ? "{}" : "{ ".concat(n.map((n => "".concat(t.apiDescriptor.key(n), ": ").concat(t.apiDescriptor.value(e[n])))).join(", "), " }") },
                                pair: ({ key: e, value: n }) => t.apiDescriptor.value({
                                    [e]: n
                                })
                            }
                        })),
                        Tr = Me((function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), Sr.__exportStar(wr, t) })),
                        Br = /[|\\{}()[\]^$+*?.]/g,
                        kr = function(e) { if ("string" != typeof e) throw new TypeError("Expected a string"); return e.replace(Br, "\\$&") },
                        Nr = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
                        Pr = Me((function(e) {
                            var t = {};
                            for (var n in Nr) Nr.hasOwnProperty(n) && (t[Nr[n]] = n);
                            var r = e.exports = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };
                            for (var o in r)
                                if (r.hasOwnProperty(o)) {
                                    if (!("channels" in r[o])) throw new Error("missing channels property: " + o);
                                    if (!("labels" in r[o])) throw new Error("missing channel labels property: " + o);
                                    if (r[o].labels.length !== r[o].channels) throw new Error("channel and label counts mismatch: " + o);
                                    var u = r[o].channels,
                                        i = r[o].labels;
                                    delete r[o].channels, delete r[o].labels, Object.defineProperty(r[o], "channels", { value: u }), Object.defineProperty(r[o], "labels", { value: i })
                                }
                            r.rgb.hsl = function(e) {
                                var t, n, r = e[0] / 255,
                                    o = e[1] / 255,
                                    u = e[2] / 255,
                                    i = Math.min(r, o, u),
                                    a = Math.max(r, o, u),
                                    s = a - i;
                                return a === i ? t = 0 : r === a ? t = (o - u) / s : o === a ? t = 2 + (u - r) / s : u === a && (t = 4 + (r - o) / s), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (i + a) / 2, [t, 100 * (a === i ? 0 : n <= .5 ? s / (a + i) : s / (2 - a - i)), 100 * n]
                            }, r.rgb.hsv = function(e) {
                                var t, n, r, o, u, i = e[0] / 255,
                                    a = e[1] / 255,
                                    s = e[2] / 255,
                                    c = Math.max(i, a, s),
                                    l = c - Math.min(i, a, s),
                                    p = function(e) { return (c - e) / 6 / l + .5 };
                                return 0 === l ? o = u = 0 : (u = l / c, t = p(i), n = p(a), r = p(s), i === c ? o = r - n : a === c ? o = 1 / 3 + t - r : s === c && (o = 2 / 3 + n - t), o < 0 ? o += 1 : o > 1 && (o -= 1)), [360 * o, 100 * u, 100 * c]
                            }, r.rgb.hwb = function(e) {
                                var t = e[0],
                                    n = e[1],
                                    o = e[2];
                                return [r.rgb.hsl(e)[0], 1 / 255 * Math.min(t, Math.min(n, o)) * 100, 100 * (o = 1 - 1 / 255 * Math.max(t, Math.max(n, o)))]
                            }, r.rgb.cmyk = function(e) {
                                var t, n = e[0] / 255,
                                    r = e[1] / 255,
                                    o = e[2] / 255;
                                return [100 * ((1 - n - (t = Math.min(1 - n, 1 - r, 1 - o))) / (1 - t) || 0), 100 * ((1 - r - t) / (1 - t) || 0), 100 * ((1 - o - t) / (1 - t) || 0), 100 * t]
                            }, r.rgb.keyword = function(e) {
                                var n = t[e];
                                if (n) return n;
                                var r, o, u, i = 1 / 0;
                                for (var a in Nr)
                                    if (Nr.hasOwnProperty(a)) {
                                        var s = (o = e, u = Nr[a], Math.pow(o[0] - u[0], 2) + Math.pow(o[1] - u[1], 2) + Math.pow(o[2] - u[2], 2));
                                        s < i && (i = s, r = a)
                                    }
                                return r
                            }, r.keyword.rgb = function(e) { return Nr[e] }, r.rgb.xyz = function(e) {
                                var t = e[0] / 255,
                                    n = e[1] / 255,
                                    r = e[2] / 255;
                                return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92)), 100 * (.2126 * t + .7152 * n + .0722 * r), 100 * (.0193 * t + .1192 * n + .9505 * r)]
                            }, r.rgb.lab = function(e) {
                                var t = r.rgb.xyz(e),
                                    n = t[0],
                                    o = t[1],
                                    u = t[2];
                                return o /= 100, u /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116) - 16, 500 * (n - o), 200 * (o - (u = u > .008856 ? Math.pow(u, 1 / 3) : 7.787 * u + 16 / 116))]
                            }, r.hsl.rgb = function(e) {
                                var t, n, r, o, u, i = e[0] / 360,
                                    a = e[1] / 100,
                                    s = e[2] / 100;
                                if (0 === a) return [u = 255 * s, u, u];
                                t = 2 * s - (n = s < .5 ? s * (1 + a) : s + a - s * a), o = [0, 0, 0];
                                for (var c = 0; c < 3; c++)(r = i + 1 / 3 * -(c - 1)) < 0 && r++, r > 1 && r--, u = 6 * r < 1 ? t + 6 * (n - t) * r : 2 * r < 1 ? n : 3 * r < 2 ? t + (n - t) * (2 / 3 - r) * 6 : t, o[c] = 255 * u;
                                return o
                            }, r.hsl.hsv = function(e) {
                                var t = e[0],
                                    n = e[1] / 100,
                                    r = e[2] / 100,
                                    o = n,
                                    u = Math.max(r, .01);
                                return n *= (r *= 2) <= 1 ? r : 2 - r, o *= u <= 1 ? u : 2 - u, [t, 100 * (0 === r ? 2 * o / (u + o) : 2 * n / (r + n)), (r + n) / 2 * 100]
                            }, r.hsv.rgb = function(e) {
                                var t = e[0] / 60,
                                    n = e[1] / 100,
                                    r = e[2] / 100,
                                    o = Math.floor(t) % 6,
                                    u = t - Math.floor(t),
                                    i = 255 * r * (1 - n),
                                    a = 255 * r * (1 - n * u),
                                    s = 255 * r * (1 - n * (1 - u));
                                switch (r *= 255, o) {
                                    case 0:
                                        return [r, s, i];
                                    case 1:
                                        return [a, r, i];
                                    case 2:
                                        return [i, r, s];
                                    case 3:
                                        return [i, a, r];
                                    case 4:
                                        return [s, i, r];
                                    case 5:
                                        return [r, i, a]
                                }
                            }, r.hsv.hsl = function(e) {
                                var t, n, r, o = e[0],
                                    u = e[1] / 100,
                                    i = e[2] / 100,
                                    a = Math.max(i, .01);
                                return r = (2 - u) * i, n = u * a, [o, 100 * (n = (n /= (t = (2 - u) * a) <= 1 ? t : 2 - t) || 0), 100 * (r /= 2)]
                            }, r.hwb.rgb = function(e) {
                                var t, n, r, o, u, i, a, s = e[0] / 360,
                                    c = e[1] / 100,
                                    l = e[2] / 100,
                                    p = c + l;
                                switch (p > 1 && (c /= p, l /= p), r = 6 * s - (t = Math.floor(6 * s)), 0 != (1 & t) && (r = 1 - r), o = c + r * ((n = 1 - l) - c), t) {
                                    default:
                                        case 6:
                                        case 0:
                                        u = n,
                                    i = o,
                                    a = c;
                                    break;
                                    case 1:
                                            u = o,
                                        i = n,
                                        a = c;
                                        break;
                                    case 2:
                                            u = c,
                                        i = n,
                                        a = o;
                                        break;
                                    case 3:
                                            u = c,
                                        i = o,
                                        a = n;
                                        break;
                                    case 4:
                                            u = o,
                                        i = c,
                                        a = n;
                                        break;
                                    case 5:
                                            u = n,
                                        i = c,
                                        a = o
                                }
                                return [255 * u, 255 * i, 255 * a]
                            }, r.cmyk.rgb = function(e) {
                                var t = e[0] / 100,
                                    n = e[1] / 100,
                                    r = e[2] / 100,
                                    o = e[3] / 100;
                                return [255 * (1 - Math.min(1, t * (1 - o) + o)), 255 * (1 - Math.min(1, n * (1 - o) + o)), 255 * (1 - Math.min(1, r * (1 - o) + o))]
                            }, r.xyz.rgb = function(e) {
                                var t, n, r, o = e[0] / 100,
                                    u = e[1] / 100,
                                    i = e[2] / 100;
                                return n = -.9689 * o + 1.8758 * u + .0415 * i, r = .0557 * o + -.204 * u + 1.057 * i, t = (t = 3.2406 * o + -1.5372 * u + -.4986 * i) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (r = Math.min(Math.max(0, r), 1))]
                            }, r.xyz.lab = function(e) {
                                var t = e[0],
                                    n = e[1],
                                    r = e[2];
                                return n /= 100, r /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
                            }, r.lab.xyz = function(e) {
                                var t, n, r, o = e[0];
                                t = e[1] / 500 + (n = (o + 16) / 116), r = n - e[2] / 200;
                                var u = Math.pow(n, 3),
                                    i = Math.pow(t, 3),
                                    a = Math.pow(r, 3);
                                return n = u > .008856 ? u : (n - 16 / 116) / 7.787, t = i > .008856 ? i : (t - 16 / 116) / 7.787, r = a > .008856 ? a : (r - 16 / 116) / 7.787, [t *= 95.047, n *= 100, r *= 108.883]
                            }, r.lab.lch = function(e) {
                                var t, n = e[0],
                                    r = e[1],
                                    o = e[2];
                                return (t = 360 * Math.atan2(o, r) / 2 / Math.PI) < 0 && (t += 360), [n, Math.sqrt(r * r + o * o), t]
                            }, r.lch.lab = function(e) {
                                var t, n = e[0],
                                    r = e[1];
                                return t = e[2] / 360 * 2 * Math.PI, [n, r * Math.cos(t), r * Math.sin(t)]
                            }, r.rgb.ansi16 = function(e) {
                                var t = e[0],
                                    n = e[1],
                                    o = e[2],
                                    u = 1 in arguments ? arguments[1] : r.rgb.hsv(e)[2];
                                if (0 === (u = Math.round(u / 50))) return 30;
                                var i = 30 + (Math.round(o / 255) << 2 | Math.round(n / 255) << 1 | Math.round(t / 255));
                                return 2 === u && (i += 60), i
                            }, r.hsv.ansi16 = function(e) { return r.rgb.ansi16(r.hsv.rgb(e), e[2]) }, r.rgb.ansi256 = function(e) {
                                var t = e[0],
                                    n = e[1],
                                    r = e[2];
                                return t === n && n === r ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5)
                            }, r.ansi16.rgb = function(e) { var t = e % 10; if (0 === t || 7 === t) return e > 50 && (t += 3.5), [t = t / 10.5 * 255, t, t]; var n = .5 * (1 + ~~(e > 50)); return [(1 & t) * n * 255, (t >> 1 & 1) * n * 255, (t >> 2 & 1) * n * 255] }, r.ansi256.rgb = function(e) { if (e >= 232) { var t = 10 * (e - 232) + 8; return [t, t, t] } var n; return e -= 16, [Math.floor(e / 36) / 5 * 255, Math.floor((n = e % 36) / 6) / 5 * 255, n % 6 / 5 * 255] }, r.rgb.hex = function(e) { var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase(); return "000000".substring(t.length) + t }, r.hex.rgb = function(e) {
                                var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                                if (!t) return [0, 0, 0];
                                var n = t[0];
                                3 === t[0].length && (n = n.split("").map((function(e) { return e + e })).join(""));
                                var r = parseInt(n, 16);
                                return [r >> 16 & 255, r >> 8 & 255, 255 & r]
                            }, r.rgb.hcg = function(e) {
                                var t, n = e[0] / 255,
                                    r = e[1] / 255,
                                    o = e[2] / 255,
                                    u = Math.max(Math.max(n, r), o),
                                    i = Math.min(Math.min(n, r), o),
                                    a = u - i;
                                return t = a <= 0 ? 0 : u === n ? (r - o) / a % 6 : u === r ? 2 + (o - n) / a : 4 + (n - r) / a + 4, t /= 6, [360 * (t %= 1), 100 * a, 100 * (a < 1 ? i / (1 - a) : 0)]
                            }, r.hsl.hcg = function(e) {
                                var t, n = e[1] / 100,
                                    r = e[2] / 100,
                                    o = 0;
                                return (t = r < .5 ? 2 * n * r : 2 * n * (1 - r)) < 1 && (o = (r - .5 * t) / (1 - t)), [e[0], 100 * t, 100 * o]
                            }, r.hsv.hcg = function(e) {
                                var t = e[1] / 100,
                                    n = e[2] / 100,
                                    r = t * n,
                                    o = 0;
                                return r < 1 && (o = (n - r) / (1 - r)), [e[0], 100 * r, 100 * o]
                            }, r.hcg.rgb = function(e) {
                                var t = e[0] / 360,
                                    n = e[1] / 100,
                                    r = e[2] / 100;
                                if (0 === n) return [255 * r, 255 * r, 255 * r];
                                var o, u = [0, 0, 0],
                                    i = t % 1 * 6,
                                    a = i % 1,
                                    s = 1 - a;
                                switch (Math.floor(i)) {
                                    case 0:
                                        u[0] = 1, u[1] = a, u[2] = 0;
                                        break;
                                    case 1:
                                        u[0] = s, u[1] = 1, u[2] = 0;
                                        break;
                                    case 2:
                                        u[0] = 0, u[1] = 1, u[2] = a;
                                        break;
                                    case 3:
                                        u[0] = 0, u[1] = s, u[2] = 1;
                                        break;
                                    case 4:
                                        u[0] = a, u[1] = 0, u[2] = 1;
                                        break;
                                    default:
                                        u[0] = 1, u[1] = 0, u[2] = s
                                }
                                return o = (1 - n) * r, [255 * (n * u[0] + o), 255 * (n * u[1] + o), 255 * (n * u[2] + o)]
                            }, r.hcg.hsv = function(e) {
                                var t = e[1] / 100,
                                    n = t + e[2] / 100 * (1 - t),
                                    r = 0;
                                return n > 0 && (r = t / n), [e[0], 100 * r, 100 * n]
                            }, r.hcg.hsl = function(e) {
                                var t = e[1] / 100,
                                    n = e[2] / 100 * (1 - t) + .5 * t,
                                    r = 0;
                                return n > 0 && n < .5 ? r = t / (2 * n) : n >= .5 && n < 1 && (r = t / (2 * (1 - n))), [e[0], 100 * r, 100 * n]
                            }, r.hcg.hwb = function(e) {
                                var t = e[1] / 100,
                                    n = t + e[2] / 100 * (1 - t);
                                return [e[0], 100 * (n - t), 100 * (1 - n)]
                            }, r.hwb.hcg = function(e) {
                                var t = e[1] / 100,
                                    n = 1 - e[2] / 100,
                                    r = n - t,
                                    o = 0;
                                return r < 1 && (o = (n - r) / (1 - r)), [e[0], 100 * r, 100 * o]
                            }, r.apple.rgb = function(e) { return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255] }, r.rgb.apple = function(e) { return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535] }, r.gray.rgb = function(e) { return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255] }, r.gray.hsl = r.gray.hsv = function(e) { return [0, 0, e[0]] }, r.gray.hwb = function(e) { return [0, 100, e[0]] }, r.gray.cmyk = function(e) { return [0, 0, 0, e[0]] }, r.gray.lab = function(e) { return [e[0], 0, 0] }, r.gray.hex = function(e) {
                                var t = 255 & Math.round(e[0] / 100 * 255),
                                    n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
                                return "000000".substring(n.length) + n
                            }, r.rgb.gray = function(e) { return [(e[0] + e[1] + e[2]) / 3 / 255 * 100] }
                        }));

                    function Or(e, t) { return function(n) { return t(e(n)) } }

                    function _r(e, t) { for (var n = [t[e].parent, e], r = Pr[t[e].parent][e], o = t[e].parent; t[o].parent;) n.unshift(t[o].parent), r = Or(Pr[t[o].parent][o], r), o = t[o].parent; return r.conversion = n, r }
                    var Lr = {};
                    Object.keys(Pr).forEach((function(e) {
                        Lr[e] = {}, Object.defineProperty(Lr[e], "channels", { value: Pr[e].channels }), Object.defineProperty(Lr[e], "labels", { value: Pr[e].labels });
                        var t = function(e) {
                            for (var t = function(e) {
                                    var t = function() { for (var e = {}, t = Object.keys(Pr), n = t.length, r = 0; r < n; r++) e[t[r]] = { distance: -1, parent: null }; return e }(),
                                        n = [e];
                                    for (t[e].distance = 0; n.length;)
                                        for (var r = n.pop(), o = Object.keys(Pr[r]), u = o.length, i = 0; i < u; i++) {
                                            var a = o[i],
                                                s = t[a]; - 1 === s.distance && (s.distance = t[r].distance + 1, s.parent = r, n.unshift(a))
                                        }
                                    return t
                                }(e), n = {}, r = Object.keys(t), o = r.length, u = 0; u < o; u++) {
                                var i = r[u];
                                null !== t[i].parent && (n[i] = _r(i, t))
                            }
                            return n
                        }(e);
                        Object.keys(t).forEach((function(n) {
                            var r = t[n];
                            Lr[e][n] = function(e) {
                                var t = function(t) {
                                    if (null == t) return t;
                                    arguments.length > 1 && (t = Array.prototype.slice.call(arguments));
                                    var n = e(t);
                                    if ("object" == typeof n)
                                        for (var r = n.length, o = 0; o < r; o++) n[o] = Math.round(n[o]);
                                    return n
                                };
                                return "conversion" in e && (t.conversion = e.conversion), t
                            }(r), Lr[e][n].raw = function(e) { var t = function(t) { return null == t ? t : (arguments.length > 1 && (t = Array.prototype.slice.call(arguments)), e(t)) }; return "conversion" in e && (t.conversion = e.conversion), t }(r)
                        }))
                    }));
                    var Ir = Lr,
                        Mr = Me((function(e) {
                            const t = (e, t) => function() { const n = e.apply(Ir, arguments); return "[".concat(n + t, "m") },
                                n = (e, t) => function() { const n = e.apply(Ir, arguments); return "[".concat(38 + t, ";5;").concat(n, "m") },
                                r = (e, t) => function() { const n = e.apply(Ir, arguments); return "[".concat(38 + t, ";2;").concat(n[0], ";").concat(n[1], ";").concat(n[2], "m") };
                            Object.defineProperty(e, "exports", {
                                enumerable: !0,
                                get: function() {
                                    const e = new Map,
                                        o = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], gray: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
                                    o.color.grey = o.color.gray;
                                    for (const t of Object.keys(o)) {
                                        const n = o[t];
                                        for (const t of Object.keys(n)) {
                                            const r = n[t];
                                            o[t] = { open: "[".concat(r[0], "m"), close: "[".concat(r[1], "m") }, n[t] = o[t], e.set(r[0], r[1])
                                        }
                                        Object.defineProperty(o, t, { value: n, enumerable: !1 }), Object.defineProperty(o, "codes", { value: e, enumerable: !1 })
                                    }
                                    const u = e => e,
                                        i = (e, t, n) => [e, t, n];
                                    o.color.close = "[39m", o.bgColor.close = "[49m", o.color.ansi = { ansi: t(u, 0) }, o.color.ansi256 = { ansi256: n(u, 0) }, o.color.ansi16m = { rgb: r(i, 0) }, o.bgColor.ansi = { ansi: t(u, 10) }, o.bgColor.ansi256 = { ansi256: n(u, 10) }, o.bgColor.ansi16m = { rgb: r(i, 10) };
                                    for (let e of Object.keys(Ir)) { if ("object" != typeof Ir[e]) continue; const u = Ir[e]; "ansi16" === e && (e = "ansi"), "ansi16" in u && (o.color.ansi[e] = t(u.ansi16, 0), o.bgColor.ansi[e] = t(u.ansi16, 10)), "ansi256" in u && (o.color.ansi256[e] = n(u.ansi256, 0), o.bgColor.ansi256[e] = n(u.ansi256, 10)), "rgb" in u && (o.color.ansi16m[e] = r(u.rgb, 0), o.bgColor.ansi16m[e] = r(u.rgb, 10)) }
                                    return o
                                }
                            })
                        })),
                        jr = (e, t) => {
                            t = t || Oe.argv;
                            const n = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--",
                                r = t.indexOf(n + e),
                                o = t.indexOf("--");
                            return -1 !== r && (-1 === o || r < o)
                        },
                        Rr = je(Object.freeze({ __proto__: null, default: { EOL: "\n", platform: () => "browser", cpus: () => [{ model: "Prettier" }] } }));
                    const qr = Oe.env;
                    let Vr;

                    function $r(e) {
                        return function(e) { return 0 !== e && { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 } }(function(e) {
                            if (!1 === Vr) return 0;
                            if (jr("color=16m") || jr("color=full") || jr("color=truecolor")) return 3;
                            if (jr("color=256")) return 2;
                            if (e && !e.isTTY && !0 !== Vr) return 0;
                            const t = Vr ? 1 : 0;
                            if ("win32" === Oe.platform) { const e = Rr.release().split("."); return Number(Oe.versions.node.split(".")[0]) >= 8 && Number(e[0]) >= 10 && Number(e[2]) >= 10586 ? Number(e[2]) >= 14931 ? 3 : 2 : 1 }
                            if ("CI" in qr) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some((e => e in qr)) || "codeship" === qr.CI_NAME ? 1 : t;
                            if ("TEAMCITY_VERSION" in qr) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(qr.TEAMCITY_VERSION) ? 1 : 0;
                            if ("truecolor" === qr.COLORTERM) return 3;
                            if ("TERM_PROGRAM" in qr) {
                                const e = parseInt((qr.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
                                switch (qr.TERM_PROGRAM) {
                                    case "iTerm.app":
                                        return e >= 3 ? 3 : 2;
                                    case "Apple_Terminal":
                                        return 2
                                }
                            }
                            return /-256(color)?$/i.test(qr.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(qr.TERM) || "COLORTERM" in qr ? 1 : (qr.TERM, t)
                        }(e))
                    }
                    jr("no-color") || jr("no-colors") || jr("color=false") ? Vr = !1 : (jr("color") || jr("colors") || jr("color=true") || jr("color=always")) && (Vr = !0), "FORCE_COLOR" in qr && (Vr = 0 === qr.FORCE_COLOR.length || 0 !== parseInt(qr.FORCE_COLOR, 10));
                    var Wr = { supportsColor: $r, stdout: $r(Oe.stdout), stderr: $r(Oe.stderr) };
                    const Ur = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
                        Jr = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
                        zr = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
                        Hr = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi,
                        Gr = new Map([
                            ["n", "\n"],
                            ["r", "\r"],
                            ["t", "\t"],
                            ["b", "\b"],
                            ["f", "\f"],
                            ["v", "\v"],
                            ["0", "\0"],
                            ["\\", "\\"],
                            ["e", ""],
                            ["a", ""]
                        ]);

                    function Xr(e) { return "u" === e[0] && 5 === e.length || "x" === e[0] && 3 === e.length ? String.fromCharCode(parseInt(e.slice(1), 16)) : Gr.get(e) || e }

                    function Yr(e, t) {
                        const n = [],
                            r = t.trim().split(/\s*,\s*/g);
                        let o;
                        for (const t of r)
                            if (isNaN(t)) {
                                if (!(o = t.match(zr))) throw new Error("Invalid Chalk template style argument: ".concat(t, " (in style '").concat(e, "')"));
                                n.push(o[2].replace(Hr, ((e, t, n) => t ? Xr(t) : n)))
                            } else n.push(Number(t));
                        return n
                    }

                    function Kr(e) {
                        Jr.lastIndex = 0;
                        const t = [];
                        let n;
                        for (; null !== (n = Jr.exec(e));) {
                            const e = n[1];
                            if (n[2]) {
                                const r = Yr(e, n[2]);
                                t.push([e].concat(r))
                            } else t.push([e])
                        }
                        return t
                    }

                    function Qr(e, t) {
                        const n = {};
                        for (const e of t)
                            for (const t of e.styles) n[t[0]] = e.inverse ? null : t.slice(1);
                        let r = e;
                        for (const e of Object.keys(n))
                            if (Array.isArray(n[e])) {
                                if (!(e in r)) throw new Error("Unknown Chalk style: ".concat(e));
                                r = n[e].length > 0 ? r[e].apply(r, n[e]) : r[e]
                            }
                        return r
                    }
                    var Zr = (e, t) => {
                            const n = [],
                                r = [];
                            let o = [];
                            if (t.replace(Ur, ((t, u, i, a, s, c) => {
                                    if (u) o.push(Xr(u));
                                    else if (a) {
                                        const t = o.join("");
                                        o = [], r.push(0 === n.length ? t : Qr(e, n)(t)), n.push({ inverse: i, styles: Kr(a) })
                                    } else if (s) {
                                        if (0 === n.length) throw new Error("Found extraneous } in Chalk template literal");
                                        r.push(Qr(e, n)(o.join(""))), o = [], n.pop()
                                    } else o.push(c)
                                })), r.push(o.join("")), n.length > 0) { const e = "Chalk template literal is missing ".concat(n.length, " closing bracket").concat(1 === n.length ? "" : "s", " (`}`)"); throw new Error(e) }
                            return r.join("")
                        },
                        eo = Me((function(e) {
                            const t = Wr.stdout,
                                n = "win32" === Oe.platform && !(Oe.env.TERM || "").toLowerCase().startsWith("xterm"),
                                r = ["ansi", "ansi", "ansi256", "ansi16m"],
                                o = new Set(["gray"]),
                                u = Object.create(null);

                            function i(e, n) {
                                n = n || {};
                                const r = t ? t.level : 0;
                                e.level = void 0 === n.level ? r : n.level, e.enabled = "enabled" in n ? n.enabled : e.level > 0
                            }

                            function a(e) {
                                if (!this || !(this instanceof a) || this.template) { const t = {}; return i(t, e), t.template = function() { const e = [].slice.call(arguments); return p.apply(null, [t.template].concat(e)) }, Object.setPrototypeOf(t, a.prototype), Object.setPrototypeOf(t.template, t), t.template.constructor = a, t.template }
                                i(this, e)
                            }
                            n && (Mr.blue.open = "[94m");
                            for (const e of Object.keys(Mr)) Mr[e].closeRe = new RegExp(kr(Mr[e].close), "g"), u[e] = {get() { const t = Mr[e]; return c.call(this, this._styles ? this._styles.concat(t) : [t], this._empty, e) } };
                            u.visible = {get() { return c.call(this, this._styles || [], !0, "visible") } }, Mr.color.closeRe = new RegExp(kr(Mr.color.close), "g");
                            for (const e of Object.keys(Mr.color.ansi)) o.has(e) || (u[e] = {get() { const t = this.level; return function() { const n = { open: Mr.color[r[t]][e].apply(null, arguments), close: Mr.color.close, closeRe: Mr.color.closeRe }; return c.call(this, this._styles ? this._styles.concat(n) : [n], this._empty, e) } } });
                            Mr.bgColor.closeRe = new RegExp(kr(Mr.bgColor.close), "g");
                            for (const e of Object.keys(Mr.bgColor.ansi)) o.has(e) || (u["bg" + e[0].toUpperCase() + e.slice(1)] = {get() { const t = this.level; return function() { const n = { open: Mr.bgColor[r[t]][e].apply(null, arguments), close: Mr.bgColor.close, closeRe: Mr.bgColor.closeRe }; return c.call(this, this._styles ? this._styles.concat(n) : [n], this._empty, e) } } });
                            const s = Object.defineProperties((() => {}), u);

                            function c(e, t, n) {
                                const r = function() { return l.apply(r, arguments) };
                                r._styles = e, r._empty = t;
                                const o = this;
                                return Object.defineProperty(r, "level", { enumerable: !0, get: () => o.level, set(e) { o.level = e } }), Object.defineProperty(r, "enabled", { enumerable: !0, get: () => o.enabled, set(e) { o.enabled = e } }), r.hasGrey = this.hasGrey || "gray" === n || "grey" === n, r.__proto__ = s, r
                            }

                            function l() {
                                const e = arguments,
                                    t = e.length;
                                let r = String(arguments[0]);
                                if (0 === t) return "";
                                if (t > 1)
                                    for (let n = 1; n < t; n++) r += " " + e[n];
                                if (!this.enabled || this.level <= 0 || !r) return this._empty ? "" : r;
                                const o = Mr.dim.open;
                                n && this.hasGrey && (Mr.dim.open = "");
                                for (const e of this._styles.slice().reverse()) r = e.open + r.replace(e.closeRe, e.open) + e.close, r = r.replace(/\r?\n/g, "".concat(e.close, "$&").concat(e.open));
                                return Mr.dim.open = o, r
                            }

                            function p(e, t) {
                                if (!Array.isArray(t)) return [].slice.call(arguments, 1).join(" ");
                                const n = [].slice.call(arguments, 2),
                                    r = [t.raw[0]];
                                for (let e = 1; e < t.length; e++) r.push(String(n[e - 1]).replace(/[{}\\]/g, "\\$&")), r.push(String(t.raw[e]));
                                return Zr(e, r.join(""))
                            }
                            Object.defineProperties(a.prototype, u), e.exports = a(), e.exports.supportsColor = t, e.exports.default = e.exports
                        })),
                        to = Me((function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), t.commonDeprecatedHandler = (e, t, { descriptor: n }) => { const r = ["".concat(eo.default.yellow("string" == typeof e ? n.key(e) : n.pair(e)), " is deprecated")]; return t && r.push("we now treat it as ".concat(eo.default.blue("string" == typeof t ? n.key(t) : n.pair(t)))), r.join("; ") + "." } })),
                        no = Me((function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), Sr.__exportStar(to, t) })),
                        ro = Me((function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), t.commonInvalidHandler = (e, t, n) => ["Invalid ".concat(eo.default.red(n.descriptor.key(e)), " value."), "Expected ".concat(eo.default.blue(n.schemas[e].expected(n)), ","), "but received ".concat(eo.default.red(n.descriptor.value(t)), ".")].join(" ") })),
                        oo = Me((function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), Sr.__exportStar(ro, t) })),
                        uo = [],
                        io = [],
                        ao = Me((function(e, t) {
                            Object.defineProperty(t, "__esModule", { value: !0 }), t.levenUnknownHandler = (e, t, { descriptor: n, logger: r, schemas: o }) => {
                                const u = ["Ignored unknown option ".concat(eo.default.yellow(n.pair({ key: e, value: t })), ".")],
                                    i = Object.keys(o).sort().find((t => function(e, t) {
                                        if (e === t) return 0;
                                        var n = e;
                                        e.length > t.length && (e = t, t = n);
                                        var r = e.length,
                                            o = t.length;
                                        if (0 === r) return o;
                                        if (0 === o) return r;
                                        for (; r > 0 && e.charCodeAt(~-r) === t.charCodeAt(~-o);) r--, o--;
                                        if (0 === r) return o;
                                        for (var u, i, a, s, c = 0; c < r && e.charCodeAt(c) === t.charCodeAt(c);) c++;
                                        if (o -= c, 0 == (r -= c)) return o;
                                        for (var l = 0, p = 0; l < r;) io[c + l] = e.charCodeAt(c + l), uo[l] = ++l;
                                        for (; p < o;)
                                            for (u = t.charCodeAt(c + p), a = p++, i = p, l = 0; l < r; l++) s = u === io[c + l] ? a : a + 1, a = uo[l], i = uo[l] = a > i ? s > i ? i + 1 : s : s > a ? a + 1 : s;
                                        return i
                                    }(e, t) < 3));
                                i && u.push("Did you mean ".concat(eo.default.blue(n.key(i)), "?")), r.warn(u.join(" "))
                            }
                        })),
                        so = Me((function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), Sr.__exportStar(ao, t) })),
                        co = Me((function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), Sr.__exportStar(no, t), Sr.__exportStar(oo, t), Sr.__exportStar(so, t) })),
                        lo = Me((function(e, t) {
                            Object.defineProperty(t, "__esModule", { value: !0 });
                            const n = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];

                            function r(e, t) {
                                const r = new e(t),
                                    i = Object.create(r);
                                for (const e of n) e in t && (i[e] = u(t[e], r, o.prototype[e].length));
                                return i
                            }
                            t.createSchema = r;
                            class o {
                                constructor(e) { this.name = e.name }
                                static create(e) { return r(this, e) }
                                default (e) {}
                                expected(e) { return "nothing" }
                                validate(e, t) { return !1 }
                                deprecated(e, t) { return !1 }
                                forward(e, t) {}
                                redirect(e, t) {}
                                overlap(e, t, n) { return e }
                                preprocess(e, t) { return e }
                                postprocess(e, t) { return e }
                            }

                            function u(e, t, n) { return "function" == typeof e ? (...r) => e(...r.slice(0, n - 1), t, ...r.slice(n - 1)) : () => e }
                            t.Schema = o
                        })),
                        po = Me((function(e, t) {
                            Object.defineProperty(t, "__esModule", { value: !0 });
                            class n extends lo.Schema {
                                constructor(e) { super(e), this._sourceName = e.sourceName }
                                expected(e) { return e.schemas[this._sourceName].expected(e) }
                                validate(e, t) { return t.schemas[this._sourceName].validate(e, t) }
                                redirect(e, t) { return this._sourceName }
                            }
                            t.AliasSchema = n
                        })),
                        fo = Me((function(e, t) {
                            Object.defineProperty(t, "__esModule", { value: !0 });
                            class n extends lo.Schema {
                                expected() { return "anything" }
                                validate() { return !0 }
                            }
                            t.AnySchema = n
                        })),
                        ho = Me((function(e, t) {
                            Object.defineProperty(t, "__esModule", { value: !0 });
                            class n extends lo.Schema {
                                constructor(e) {
                                    var { valueSchema: t, name: n = t.name } = e, r = Sr.__rest(e, ["valueSchema", "name"]);
                                    super(Object.assign({}, r, { name: n })), this._valueSchema = t
                                }
                                expected(e) { return "an array of ".concat(this._valueSchema.expected(e)) }
                                validate(e, t) { if (!Array.isArray(e)) return !1; const n = []; for (const r of e) { const e = t.normalizeValidateResult(this._valueSchema.validate(r, t), r);!0 !== e && n.push(e.value) } return 0 === n.length || { value: n } }
                                deprecated(e, t) { const n = []; for (const r of e) { const e = t.normalizeDeprecatedResult(this._valueSchema.deprecated(r, t), r);!1 !== e && n.push(...e.map((({ value: e }) => ({ value: [e] })))) } return n }
                                forward(e, t) {
                                    const n = [];
                                    for (const o of e) {
                                        const e = t.normalizeForwardResult(this._valueSchema.forward(o, t), o);
                                        n.push(...e.map(r))
                                    }
                                    return n
                                }
                                redirect(e, t) {
                                    const n = [],
                                        o = [];
                                    for (const u of e) { const e = t.normalizeRedirectResult(this._valueSchema.redirect(u, t), u); "remain" in e && n.push(e.remain), o.push(...e.redirect.map(r)) }
                                    return 0 === n.length ? { redirect: o } : { redirect: o, remain: n }
                                }
                                overlap(e, t) { return e.concat(t) }
                            }

                            function r({ from: e, to: t }) { return { from: [e], to: t } }
                            t.ArraySchema = n
                        })),
                        mo = Me((function(e, t) {
                            Object.defineProperty(t, "__esModule", { value: !0 });
                            class n extends lo.Schema {
                                expected() { return "true or false" }
                                validate(e) { return "boolean" == typeof e }
                            }
                            t.BooleanSchema = n
                        })),
                        go = Me((function(e, t) {
                            function n(e, t) { return "string" == typeof e || "key" in e ? { from: t, to: e } : "from" in e ? { from: e.from, to: e.to } : { from: t, to: e.to } }

                            function r(e, t) { return void 0 === e ? [] : Array.isArray(e) ? e.map((e => n(e, t))) : [n(e, t)] }
                            Object.defineProperty(t, "__esModule", { value: !0 }), t.recordFromArray = function(e, t) {
                                const n = Object.create(null);
                                for (const r of e) {
                                    const e = r[t];
                                    if (n[e]) throw new Error("Duplicate ".concat(t, " ").concat(JSON.stringify(e)));
                                    n[e] = r
                                }
                                return n
                            }, t.mapFromArray = function(e, t) {
                                const n = new Map;
                                for (const r of e) {
                                    const e = r[t];
                                    if (n.has(e)) throw new Error("Duplicate ".concat(t, " ").concat(JSON.stringify(e)));
                                    n.set(e, r)
                                }
                                return n
                            }, t.createAutoChecklist = function() { const e = Object.create(null); return t => { const n = JSON.stringify(t); return !!e[n] || (e[n] = !0, !1) } }, t.partition = function(e, t) {
                                const n = [],
                                    r = [];
                                for (const o of e) t(o) ? n.push(o) : r.push(o);
                                return [n, r]
                            }, t.isInt = function(e) { return e === Math.floor(e) }, t.comparePrimitive = function(e, t) {
                                if (e === t) return 0;
                                const n = typeof e,
                                    r = typeof t,
                                    o = ["undefined", "object", "boolean", "number", "string"];
                                return n !== r ? o.indexOf(n) - o.indexOf(r) : "string" !== n ? Number(e) - Number(t) : e.localeCompare(t)
                            }, t.normalizeDefaultResult = function(e) { return void 0 === e ? {} : e }, t.normalizeValidateResult = function(e, t) { return !0 === e || (!1 === e ? { value: t } : e) }, t.normalizeDeprecatedResult = function(e, t, n = !1) { return !1 !== e && (!0 === e ? !!n || [{ value: t }] : "value" in e ? [e] : 0 !== e.length && e) }, t.normalizeTransferResult = n, t.normalizeForwardResult = r, t.normalizeRedirectResult = function(e, t) { const n = r("object" == typeof e && "redirect" in e ? e.redirect : e, t); return 0 === n.length ? { remain: t, redirect: n } : "object" == typeof e && "remain" in e ? { remain: e.remain, redirect: n } : { redirect: n } }
                        })),
                        Do = Me((function(e, t) {
                            Object.defineProperty(t, "__esModule", { value: !0 });
                            class n extends lo.Schema {
                                constructor(e) { super(e), this._choices = go.mapFromArray(e.choices.map((e => e && "object" == typeof e ? e : { value: e })), "value") }
                                expected({ descriptor: e }) {
                                    const t = Array.from(this._choices.keys()).map((e => this._choices.get(e))).filter((e => !e.deprecated)).map((e => e.value)).sort(go.comparePrimitive).map(e.value),
                                        n = t.slice(0, -2),
                                        r = t.slice(-2);
                                    return n.concat(r.join(" or ")).join(", ")
                                }
                                validate(e) { return this._choices.has(e) }
                                deprecated(e) { const t = this._choices.get(e); return !(!t || !t.deprecated) && { value: e } }
                                forward(e) { const t = this._choices.get(e); return t ? t.forward : void 0 }
                                redirect(e) { const t = this._choices.get(e); return t ? t.redirect : void 0 }
                            }
                            t.ChoiceSchema = n
                        })),
                        yo = Me((function(e, t) {
                            Object.defineProperty(t, "__esModule", { value: !0 });
                            class n extends lo.Schema {
                                expected() { return "a number" }
                                validate(e, t) { return "number" == typeof e }
                            }
                            t.NumberSchema = n
                        })),
                        Eo = Me((function(e, t) {
                            Object.defineProperty(t, "__esModule", { value: !0 });
                            class n extends yo.NumberSchema {
                                expected() { return "an integer" }
                                validate(e, t) { return !0 === t.normalizeValidateResult(super.validate(e, t), e) && go.isInt(e) }
                            }
                            t.IntegerSchema = n
                        })),
                        Co = Me((function(e, t) {
                            Object.defineProperty(t, "__esModule", { value: !0 });
                            class n extends lo.Schema {
                                expected() { return "a string" }
                                validate(e) { return "string" == typeof e }
                            }
                            t.StringSchema = n
                        })),
                        bo = Me((function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), Sr.__exportStar(po, t), Sr.__exportStar(fo, t), Sr.__exportStar(ho, t), Sr.__exportStar(mo, t), Sr.__exportStar(Do, t), Sr.__exportStar(Eo, t), Sr.__exportStar(yo, t), Sr.__exportStar(Co, t) })),
                        vo = Me((function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), t.defaultDescriptor = wr.apiDescriptor, t.defaultUnknownHandler = ao.levenUnknownHandler, t.defaultInvalidHandler = oo.commonInvalidHandler, t.defaultDeprecatedHandler = to.commonDeprecatedHandler })),
                        Ao = Me((function(e, t) {
                            Object.defineProperty(t, "__esModule", { value: !0 }), t.normalize = (e, t, r) => new n(t, r).normalize(e);
                            class n {
                                constructor(e, t) {
                                    const { logger: n = console, descriptor: r = vo.defaultDescriptor, unknown: o = vo.defaultUnknownHandler, invalid: u = vo.defaultInvalidHandler, deprecated: i = vo.defaultDeprecatedHandler } = t || {};
                                    this._utils = { descriptor: r, logger: n || { warn: () => {} }, schemas: go.recordFromArray(e, "name"), normalizeDefaultResult: go.normalizeDefaultResult, normalizeDeprecatedResult: go.normalizeDeprecatedResult, normalizeForwardResult: go.normalizeForwardResult, normalizeRedirectResult: go.normalizeRedirectResult, normalizeValidateResult: go.normalizeValidateResult }, this._unknownHandler = o, this._invalidHandler = u, this._deprecatedHandler = i, this.cleanHistory()
                                }
                                cleanHistory() { this._hasDeprecationWarned = go.createAutoChecklist() }
                                normalize(e) {
                                    const t = {},
                                        n = [e],
                                        r = () => {
                                            for (; 0 !== n.length;) {
                                                const e = n.shift(),
                                                    r = this._applyNormalization(e, t);
                                                n.push(...r)
                                            }
                                        };
                                    r();
                                    for (const e of Object.keys(this._utils.schemas)) {
                                        const r = this._utils.schemas[e];
                                        if (!(e in t)) {
                                            const t = go.normalizeDefaultResult(r.default(this._utils));
                                            "value" in t && n.push({
                                                [e]: t.value
                                            })
                                        }
                                    }
                                    r();
                                    for (const e of Object.keys(this._utils.schemas)) {
                                        const n = this._utils.schemas[e];
                                        e in t && (t[e] = n.postprocess(t[e], this._utils))
                                    }
                                    return t
                                }
                                _applyNormalization(e, t) {
                                    const n = [],
                                        [r, o] = go.partition(Object.keys(e), (e => e in this._utils.schemas));
                                    for (const o of r) {
                                        const r = this._utils.schemas[o],
                                            u = r.preprocess(e[o], this._utils),
                                            i = go.normalizeValidateResult(r.validate(u, this._utils), u);
                                        if (!0 !== i) { const { value: e } = i, t = this._invalidHandler(o, e, this._utils); throw "string" == typeof t ? new Error(t) : t }
                                        const a = ({ from: e, to: t }) => {
                                                n.push("string" == typeof t ? {
                                                    [t]: e
                                                } : {
                                                    [t.key]: t.value
                                                })
                                            },
                                            s = ({ value: e, redirectTo: t }) => {
                                                const n = go.normalizeDeprecatedResult(r.deprecated(e, this._utils), u, !0);
                                                if (!1 !== n)
                                                    if (!0 === n) this._hasDeprecationWarned(o) || this._utils.logger.warn(this._deprecatedHandler(o, t, this._utils));
                                                    else
                                                        for (const { value: e }
                                                            of n) {
                                                            const n = { key: o, value: e };
                                                            if (!this._hasDeprecationWarned(n)) {
                                                                const r = "string" == typeof t ? { key: t, value: e } : t;
                                                                this._utils.logger.warn(this._deprecatedHandler(n, r, this._utils))
                                                            }
                                                        }
                                            };
                                        go.normalizeForwardResult(r.forward(u, this._utils), u).forEach(a);
                                        const c = go.normalizeRedirectResult(r.redirect(u, this._utils), u);
                                        if (c.redirect.forEach(a), "remain" in c) {
                                            const e = c.remain;
                                            t[o] = o in t ? r.overlap(t[o], e, this._utils) : e, s({ value: e })
                                        }
                                        for (const { from: e, to: t }
                                            of c.redirect) s({ value: e, redirectTo: t })
                                    }
                                    for (const r of o) {
                                        const o = e[r],
                                            u = this._unknownHandler(r, o, this._utils);
                                        if (u)
                                            for (const e of Object.keys(u)) {
                                                const r = {
                                                    [e]: u[e]
                                                };
                                                e in this._utils.schemas ? n.push(r) : Object.assign(t, r)
                                            }
                                    }
                                    return n
                                }
                            }
                            t.Normalizer = n
                        })),
                        Fo = Me((function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), Sr.__exportStar(Tr, t), Sr.__exportStar(co, t), Sr.__exportStar(bo, t), Sr.__exportStar(Ao, t), Sr.__exportStar(lo, t) }));
                    const xo = [],
                        So = [],
                        wo = (e, t) => {
                            if (e === t) return 0;
                            const n = e;
                            e.length > t.length && (e = t, t = n);
                            let r = e.length,
                                o = t.length;
                            for (; r > 0 && e.charCodeAt(~-r) === t.charCodeAt(~-o);) r--, o--;
                            let u, i, a, s, c = 0;
                            for (; c < r && e.charCodeAt(c) === t.charCodeAt(c);) c++;
                            if (r -= c, o -= c, 0 === r) return o;
                            let l = 0,
                                p = 0;
                            for (; l < r;) So[l] = e.charCodeAt(c + l), xo[l] = ++l;
                            for (; p < o;)
                                for (u = t.charCodeAt(c + p), a = p++, i = p, l = 0; l < r; l++) s = u === So[l] ? a : a + 1, a = xo[l], i = xo[l] = a > i ? s > i ? i + 1 : s : s > a ? a + 1 : s;
                            return i
                        };
                    var To = wo,
                        Bo = wo;
                    To.default = Bo;
                    var ko = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
                    const No = {};
                    for (const e of Object.keys(ko)) No[ko[e]] = e;
                    const Po = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };
                    var Oo = Po;
                    for (const e of Object.keys(Po)) {
                        if (!("channels" in Po[e])) throw new Error("missing channels property: " + e);
                        if (!("labels" in Po[e])) throw new Error("missing channel labels property: " + e);
                        if (Po[e].labels.length !== Po[e].channels) throw new Error("channel and label counts mismatch: " + e);
                        const { channels: t, labels: n } = Po[e];
                        delete Po[e].channels, delete Po[e].labels, Object.defineProperty(Po[e], "channels", { value: t }), Object.defineProperty(Po[e], "labels", { value: n })
                    }

                    function _o(e, t) { return function(n) { return t(e(n)) } }

                    function Lo(e, t) {
                        const n = [t[e].parent, e];
                        let r = Oo[t[e].parent][e],
                            o = t[e].parent;
                        for (; t[o].parent;) n.unshift(t[o].parent), r = _o(Oo[t[o].parent][o], r), o = t[o].parent;
                        return r.conversion = n, r
                    }
                    Po.rgb.hsl = function(e) {
                        const t = e[0] / 255,
                            n = e[1] / 255,
                            r = e[2] / 255,
                            o = Math.min(t, n, r),
                            u = Math.max(t, n, r),
                            i = u - o;
                        let a, s;
                        u === o ? a = 0 : t === u ? a = (n - r) / i : n === u ? a = 2 + (r - t) / i : r === u && (a = 4 + (t - n) / i), a = Math.min(60 * a, 360), a < 0 && (a += 360);
                        const c = (o + u) / 2;
                        return s = u === o ? 0 : c <= .5 ? i / (u + o) : i / (2 - u - o), [a, 100 * s, 100 * c]
                    }, Po.rgb.hsv = function(e) {
                        let t, n, r, o, u;
                        const i = e[0] / 255,
                            a = e[1] / 255,
                            s = e[2] / 255,
                            c = Math.max(i, a, s),
                            l = c - Math.min(i, a, s),
                            p = function(e) { return (c - e) / 6 / l + .5 };
                        return 0 === l ? (o = 0, u = 0) : (u = l / c, t = p(i), n = p(a), r = p(s), i === c ? o = r - n : a === c ? o = 1 / 3 + t - r : s === c && (o = 2 / 3 + n - t), o < 0 ? o += 1 : o > 1 && (o -= 1)), [360 * o, 100 * u, 100 * c]
                    }, Po.rgb.hwb = function(e) {
                        const t = e[0],
                            n = e[1];
                        let r = e[2];
                        const o = Po.rgb.hsl(e)[0],
                            u = 1 / 255 * Math.min(t, Math.min(n, r));
                        return r = 1 - 1 / 255 * Math.max(t, Math.max(n, r)), [o, 100 * u, 100 * r]
                    }, Po.rgb.cmyk = function(e) {
                        const t = e[0] / 255,
                            n = e[1] / 255,
                            r = e[2] / 255,
                            o = Math.min(1 - t, 1 - n, 1 - r);
                        return [100 * ((1 - t - o) / (1 - o) || 0), 100 * ((1 - n - o) / (1 - o) || 0), 100 * ((1 - r - o) / (1 - o) || 0), 100 * o]
                    }, Po.rgb.keyword = function(e) {
                        const t = No[e];
                        if (t) return t;
                        let n, r = 1 / 0;
                        for (const t of Object.keys(ko)) {
                            const i = (u = ko[t], ((o = e)[0] - u[0]) ** 2 + (o[1] - u[1]) ** 2 + (o[2] - u[2]) ** 2);
                            i < r && (r = i, n = t)
                        }
                        var o, u;
                        return n
                    }, Po.keyword.rgb = function(e) { return ko[e] }, Po.rgb.xyz = function(e) {
                        let t = e[0] / 255,
                            n = e[1] / 255,
                            r = e[2] / 255;
                        return t = t > .04045 ? ((t + .055) / 1.055) ** 2.4 : t / 12.92, n = n > .04045 ? ((n + .055) / 1.055) ** 2.4 : n / 12.92, r = r > .04045 ? ((r + .055) / 1.055) ** 2.4 : r / 12.92, [100 * (.4124 * t + .3576 * n + .1805 * r), 100 * (.2126 * t + .7152 * n + .0722 * r), 100 * (.0193 * t + .1192 * n + .9505 * r)]
                    }, Po.rgb.lab = function(e) {
                        const t = Po.rgb.xyz(e);
                        let n = t[0],
                            r = t[1],
                            o = t[2];
                        return n /= 95.047, r /= 100, o /= 108.883, n = n > .008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116, r = r > .008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116, o = o > .008856 ? o ** (1 / 3) : 7.787 * o + 16 / 116, [116 * r - 16, 500 * (n - r), 200 * (r - o)]
                    }, Po.hsl.rgb = function(e) {
                        const t = e[0] / 360,
                            n = e[1] / 100,
                            r = e[2] / 100;
                        let o, u, i;
                        if (0 === n) return i = 255 * r, [i, i, i];
                        o = r < .5 ? r * (1 + n) : r + n - r * n;
                        const a = 2 * r - o,
                            s = [0, 0, 0];
                        for (let e = 0; e < 3; e++) u = t + 1 / 3 * -(e - 1), u < 0 && u++, u > 1 && u--, i = 6 * u < 1 ? a + 6 * (o - a) * u : 2 * u < 1 ? o : 3 * u < 2 ? a + (o - a) * (2 / 3 - u) * 6 : a, s[e] = 255 * i;
                        return s
                    }, Po.hsl.hsv = function(e) {
                        const t = e[0];
                        let n = e[1] / 100,
                            r = e[2] / 100,
                            o = n;
                        const u = Math.max(r, .01);
                        return r *= 2, n *= r <= 1 ? r : 2 - r, o *= u <= 1 ? u : 2 - u, [t, 100 * (0 === r ? 2 * o / (u + o) : 2 * n / (r + n)), (r + n) / 2 * 100]
                    }, Po.hsv.rgb = function(e) {
                        const t = e[0] / 60,
                            n = e[1] / 100;
                        let r = e[2] / 100;
                        const o = Math.floor(t) % 6,
                            u = t - Math.floor(t),
                            i = 255 * r * (1 - n),
                            a = 255 * r * (1 - n * u),
                            s = 255 * r * (1 - n * (1 - u));
                        switch (r *= 255, o) {
                            case 0:
                                return [r, s, i];
                            case 1:
                                return [a, r, i];
                            case 2:
                                return [i, r, s];
                            case 3:
                                return [i, a, r];
                            case 4:
                                return [s, i, r];
                            case 5:
                                return [r, i, a]
                        }
                    }, Po.hsv.hsl = function(e) {
                        const t = e[0],
                            n = e[1] / 100,
                            r = e[2] / 100,
                            o = Math.max(r, .01);
                        let u, i;
                        i = (2 - n) * r;
                        const a = (2 - n) * o;
                        return u = n * o, u /= a <= 1 ? a : 2 - a, u = u || 0, i /= 2, [t, 100 * u, 100 * i]
                    }, Po.hwb.rgb = function(e) {
                        const t = e[0] / 360;
                        let n = e[1] / 100,
                            r = e[2] / 100;
                        const o = n + r;
                        let u;
                        o > 1 && (n /= o, r /= o);
                        const i = Math.floor(6 * t),
                            a = 1 - r;
                        u = 6 * t - i, 0 != (1 & i) && (u = 1 - u);
                        const s = n + u * (a - n);
                        let c, l, p;
                        switch (i) {
                            default:
                                case 6:
                                case 0:
                                c = a,
                            l = s,
                            p = n;
                            break;
                            case 1:
                                    c = s,
                                l = a,
                                p = n;
                                break;
                            case 2:
                                    c = n,
                                l = a,
                                p = s;
                                break;
                            case 3:
                                    c = n,
                                l = s,
                                p = a;
                                break;
                            case 4:
                                    c = s,
                                l = n,
                                p = a;
                                break;
                            case 5:
                                    c = a,
                                l = n,
                                p = s
                        }
                        return [255 * c, 255 * l, 255 * p]
                    }, Po.cmyk.rgb = function(e) {
                        const t = e[0] / 100,
                            n = e[1] / 100,
                            r = e[2] / 100,
                            o = e[3] / 100;
                        return [255 * (1 - Math.min(1, t * (1 - o) + o)), 255 * (1 - Math.min(1, n * (1 - o) + o)), 255 * (1 - Math.min(1, r * (1 - o) + o))]
                    }, Po.xyz.rgb = function(e) {
                        const t = e[0] / 100,
                            n = e[1] / 100,
                            r = e[2] / 100;
                        let o, u, i;
                        return o = 3.2406 * t + -1.5372 * n + -.4986 * r, u = -.9689 * t + 1.8758 * n + .0415 * r, i = .0557 * t + -.204 * n + 1.057 * r, o = o > .0031308 ? 1.055 * o ** (1 / 2.4) - .055 : 12.92 * o, u = u > .0031308 ? 1.055 * u ** (1 / 2.4) - .055 : 12.92 * u, i = i > .0031308 ? 1.055 * i ** (1 / 2.4) - .055 : 12.92 * i, o = Math.min(Math.max(0, o), 1), u = Math.min(Math.max(0, u), 1), i = Math.min(Math.max(0, i), 1), [255 * o, 255 * u, 255 * i]
                    }, Po.xyz.lab = function(e) {
                        let t = e[0],
                            n = e[1],
                            r = e[2];
                        return t /= 95.047, n /= 100, r /= 108.883, t = t > .008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116, n = n > .008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116, r = r > .008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116, [116 * n - 16, 500 * (t - n), 200 * (n - r)]
                    }, Po.lab.xyz = function(e) {
                        let t, n, r;
                        n = (e[0] + 16) / 116, t = e[1] / 500 + n, r = n - e[2] / 200;
                        const o = n ** 3,
                            u = t ** 3,
                            i = r ** 3;
                        return n = o > .008856 ? o : (n - 16 / 116) / 7.787, t = u > .008856 ? u : (t - 16 / 116) / 7.787, r = i > .008856 ? i : (r - 16 / 116) / 7.787, t *= 95.047, n *= 100, r *= 108.883, [t, n, r]
                    }, Po.lab.lch = function(e) {
                        const t = e[0],
                            n = e[1],
                            r = e[2];
                        let o;
                        return o = 360 * Math.atan2(r, n) / 2 / Math.PI, o < 0 && (o += 360), [t, Math.sqrt(n * n + r * r), o]
                    }, Po.lch.lab = function(e) {
                        const t = e[0],
                            n = e[1],
                            r = e[2] / 360 * 2 * Math.PI;
                        return [t, n * Math.cos(r), n * Math.sin(r)]
                    }, Po.rgb.ansi16 = function(e, t = null) { const [n, r, o] = e; let u = null === t ? Po.rgb.hsv(e)[2] : t; if (u = Math.round(u / 50), 0 === u) return 30; let i = 30 + (Math.round(o / 255) << 2 | Math.round(r / 255) << 1 | Math.round(n / 255)); return 2 === u && (i += 60), i }, Po.hsv.ansi16 = function(e) { return Po.rgb.ansi16(Po.hsv.rgb(e), e[2]) }, Po.rgb.ansi256 = function(e) {
                        const t = e[0],
                            n = e[1],
                            r = e[2];
                        return t === n && n === r ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5)
                    }, Po.ansi16.rgb = function(e) { let t = e % 10; if (0 === t || 7 === t) return e > 50 && (t += 3.5), t = t / 10.5 * 255, [t, t, t]; const n = .5 * (1 + ~~(e > 50)); return [(1 & t) * n * 255, (t >> 1 & 1) * n * 255, (t >> 2 & 1) * n * 255] }, Po.ansi256.rgb = function(e) { if (e >= 232) { const t = 10 * (e - 232) + 8; return [t, t, t] } let t; return e -= 16, [Math.floor(e / 36) / 5 * 255, Math.floor((t = e % 36) / 6) / 5 * 255, t % 6 / 5 * 255] }, Po.rgb.hex = function(e) { const t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase(); return "000000".substring(t.length) + t }, Po.hex.rgb = function(e) {
                        const t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                        if (!t) return [0, 0, 0];
                        let n = t[0];
                        3 === t[0].length && (n = n.split("").map((e => e + e)).join(""));
                        const r = parseInt(n, 16);
                        return [r >> 16 & 255, r >> 8 & 255, 255 & r]
                    }, Po.rgb.hcg = function(e) {
                        const t = e[0] / 255,
                            n = e[1] / 255,
                            r = e[2] / 255,
                            o = Math.max(Math.max(t, n), r),
                            u = Math.min(Math.min(t, n), r),
                            i = o - u;
                        let a, s;
                        return a = i < 1 ? u / (1 - i) : 0, s = i <= 0 ? 0 : o === t ? (n - r) / i % 6 : o === n ? 2 + (r - t) / i : 4 + (t - n) / i, s /= 6, s %= 1, [360 * s, 100 * i, 100 * a]
                    }, Po.hsl.hcg = function(e) {
                        const t = e[1] / 100,
                            n = e[2] / 100,
                            r = n < .5 ? 2 * t * n : 2 * t * (1 - n);
                        let o = 0;
                        return r < 1 && (o = (n - .5 * r) / (1 - r)), [e[0], 100 * r, 100 * o]
                    }, Po.hsv.hcg = function(e) {
                        const t = e[1] / 100,
                            n = e[2] / 100,
                            r = t * n;
                        let o = 0;
                        return r < 1 && (o = (n - r) / (1 - r)), [e[0], 100 * r, 100 * o]
                    }, Po.hcg.rgb = function(e) {
                        const t = e[0] / 360,
                            n = e[1] / 100,
                            r = e[2] / 100;
                        if (0 === n) return [255 * r, 255 * r, 255 * r];
                        const o = [0, 0, 0],
                            u = t % 1 * 6,
                            i = u % 1,
                            a = 1 - i;
                        let s = 0;
                        switch (Math.floor(u)) {
                            case 0:
                                o[0] = 1, o[1] = i, o[2] = 0;
                                break;
                            case 1:
                                o[0] = a, o[1] = 1, o[2] = 0;
                                break;
                            case 2:
                                o[0] = 0, o[1] = 1, o[2] = i;
                                break;
                            case 3:
                                o[0] = 0, o[1] = a, o[2] = 1;
                                break;
                            case 4:
                                o[0] = i, o[1] = 0, o[2] = 1;
                                break;
                            default:
                                o[0] = 1, o[1] = 0, o[2] = a
                        }
                        return s = (1 - n) * r, [255 * (n * o[0] + s), 255 * (n * o[1] + s), 255 * (n * o[2] + s)]
                    }, Po.hcg.hsv = function(e) {
                        const t = e[1] / 100,
                            n = t + e[2] / 100 * (1 - t);
                        let r = 0;
                        return n > 0 && (r = t / n), [e[0], 100 * r, 100 * n]
                    }, Po.hcg.hsl = function(e) {
                        const t = e[1] / 100,
                            n = e[2] / 100 * (1 - t) + .5 * t;
                        let r = 0;
                        return n > 0 && n < .5 ? r = t / (2 * n) : n >= .5 && n < 1 && (r = t / (2 * (1 - n))), [e[0], 100 * r, 100 * n]
                    }, Po.hcg.hwb = function(e) {
                        const t = e[1] / 100,
                            n = t + e[2] / 100 * (1 - t);
                        return [e[0], 100 * (n - t), 100 * (1 - n)]
                    }, Po.hwb.hcg = function(e) {
                        const t = e[1] / 100,
                            n = 1 - e[2] / 100,
                            r = n - t;
                        let o = 0;
                        return r < 1 && (o = (n - r) / (1 - r)), [e[0], 100 * r, 100 * o]
                    }, Po.apple.rgb = function(e) { return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255] }, Po.rgb.apple = function(e) { return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535] }, Po.gray.rgb = function(e) { return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255] }, Po.gray.hsl = function(e) { return [0, 0, e[0]] }, Po.gray.hsv = Po.gray.hsl, Po.gray.hwb = function(e) { return [0, 100, e[0]] }, Po.gray.cmyk = function(e) { return [0, 0, 0, e[0]] }, Po.gray.lab = function(e) { return [e[0], 0, 0] }, Po.gray.hex = function(e) {
                        const t = 255 & Math.round(e[0] / 100 * 255),
                            n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
                        return "000000".substring(n.length) + n
                    }, Po.rgb.gray = function(e) { return [(e[0] + e[1] + e[2]) / 3 / 255 * 100] };
                    const Io = {};
                    Object.keys(Oo).forEach((e => {
                        Io[e] = {}, Object.defineProperty(Io[e], "channels", { value: Oo[e].channels }), Object.defineProperty(Io[e], "labels", { value: Oo[e].labels });
                        const t = function(e) {
                            const t = function(e) {
                                    const t = function() {
                                            const e = {},
                                                t = Object.keys(Oo);
                                            for (let n = t.length, r = 0; r < n; r++) e[t[r]] = { distance: -1, parent: null };
                                            return e
                                        }(),
                                        n = [e];
                                    for (t[e].distance = 0; n.length;) {
                                        const e = n.pop(),
                                            r = Object.keys(Oo[e]);
                                        for (let o = r.length, u = 0; u < o; u++) {
                                            const o = r[u],
                                                i = t[o]; - 1 === i.distance && (i.distance = t[e].distance + 1, i.parent = e, n.unshift(o))
                                        }
                                    }
                                    return t
                                }(e),
                                n = {},
                                r = Object.keys(t);
                            for (let e = r.length, o = 0; o < e; o++) {
                                const e = r[o];
                                null !== t[e].parent && (n[e] = Lo(e, t))
                            }
                            return n
                        }(e);
                        Object.keys(t).forEach((n => {
                            const r = t[n];
                            Io[e][n] = function(e) {
                                const t = function(...t) {
                                    const n = t[0];
                                    if (null == n) return n;
                                    n.length > 1 && (t = n);
                                    const r = e(t);
                                    if ("object" == typeof r)
                                        for (let e = r.length, t = 0; t < e; t++) r[t] = Math.round(r[t]);
                                    return r
                                };
                                return "conversion" in e && (t.conversion = e.conversion), t
                            }(r), Io[e][n].raw = function(e) { const t = function(...t) { const n = t[0]; return null == n ? n : (n.length > 1 && (t = n), e(t)) }; return "conversion" in e && (t.conversion = e.conversion), t }(r)
                        }))
                    }));
                    var Mo = Io,
                        jo = Me((function(e) {
                            const t = (e, t) => (...n) => { const r = e(...n); return "[".concat(r + t, "m") },
                                n = (e, t) => (...n) => { const r = e(...n); return "[".concat(38 + t, ";5;").concat(r, "m") },
                                r = (e, t) => (...n) => { const r = e(...n); return "[".concat(38 + t, ";2;").concat(r[0], ";").concat(r[1], ";").concat(r[2], "m") },
                                o = e => e,
                                u = (e, t, n) => [e, t, n],
                                i = (e, t, n) => { Object.defineProperty(e, t, { get: () => { const r = n(); return Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0 }), r }, enumerable: !0, configurable: !0 }) };
                            let a;
                            const s = (e, t, n, r) => {
                                void 0 === a && (a = Mo);
                                const o = r ? 10 : 0,
                                    u = {};
                                for (const [r, i] of Object.entries(a)) {
                                    const a = "ansi16" === r ? "ansi" : r;
                                    r === t ? u[a] = e(n, o) : "object" == typeof i && (u[a] = e(i[t], o))
                                }
                                return u
                            };
                            Object.defineProperty(e, "exports", {
                                enumerable: !0,
                                get: function() {
                                    const e = new Map,
                                        a = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], blackBright: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
                                    a.color.gray = a.color.blackBright, a.bgColor.bgGray = a.bgColor.bgBlackBright, a.color.grey = a.color.blackBright, a.bgColor.bgGrey = a.bgColor.bgBlackBright;
                                    for (const [t, n] of Object.entries(a)) {
                                        for (const [t, r] of Object.entries(n)) a[t] = { open: "[".concat(r[0], "m"), close: "[".concat(r[1], "m") }, n[t] = a[t], e.set(r[0], r[1]);
                                        Object.defineProperty(a, t, { value: n, enumerable: !1 })
                                    }
                                    return Object.defineProperty(a, "codes", { value: e, enumerable: !1 }), a.color.close = "[39m", a.bgColor.close = "[49m", i(a.color, "ansi", (() => s(t, "ansi16", o, !1))), i(a.color, "ansi256", (() => s(n, "ansi256", o, !1))), i(a.color, "ansi16m", (() => s(r, "rgb", u, !1))), i(a.bgColor, "ansi", (() => s(t, "ansi16", o, !0))), i(a.bgColor, "ansi256", (() => s(n, "ansi256", o, !0))), i(a.bgColor, "ansi16m", (() => s(r, "rgb", u, !0))), a
                                }
                            })
                        })),
                        Ro = (e, t = Oe.argv) => {
                            const n = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--",
                                r = t.indexOf(n + e),
                                o = t.indexOf("--");
                            return -1 !== r && (-1 === o || r < o)
                        },
                        qo = je(Object.freeze({ __proto__: null, default: { isatty: () => !1 } }));
                    const { env: Vo } = Oe;
                    let $o;

                    function Wo(e) { return 0 !== e && { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 } }

                    function Uo(e, t) {
                        if (0 === $o) return 0;
                        if (Ro("color=16m") || Ro("color=full") || Ro("color=truecolor")) return 3;
                        if (Ro("color=256")) return 2;
                        if (e && !t && void 0 === $o) return 0;
                        const n = $o || 0;
                        if ("dumb" === Vo.TERM) return n;
                        if ("win32" === Oe.platform) { const e = Rr.release().split("."); return Number(e[0]) >= 10 && Number(e[2]) >= 10586 ? Number(e[2]) >= 14931 ? 3 : 2 : 1 }
                        if ("CI" in Vo) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some((e => e in Vo)) || "codeship" === Vo.CI_NAME ? 1 : n;
                        if ("TEAMCITY_VERSION" in Vo) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(Vo.TEAMCITY_VERSION) ? 1 : 0;
                        if ("GITHUB_ACTIONS" in Vo) return 1;
                        if ("truecolor" === Vo.COLORTERM) return 3;
                        if ("TERM_PROGRAM" in Vo) {
                            const e = parseInt((Vo.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
                            switch (Vo.TERM_PROGRAM) {
                                case "iTerm.app":
                                    return e >= 3 ? 3 : 2;
                                case "Apple_Terminal":
                                    return 2
                            }
                        }
                        return /-256(color)?$/i.test(Vo.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(Vo.TERM) || "COLORTERM" in Vo ? 1 : n
                    }
                    Ro("no-color") || Ro("no-colors") || Ro("color=false") || Ro("color=never") ? $o = 0 : (Ro("color") || Ro("colors") || Ro("color=true") || Ro("color=always")) && ($o = 1), "FORCE_COLOR" in Vo && ($o = "true" === Vo.FORCE_COLOR ? 1 : "false" === Vo.FORCE_COLOR ? 0 : 0 === Vo.FORCE_COLOR.length ? 1 : Math.min(parseInt(Vo.FORCE_COLOR, 10), 3));
                    var Jo = { supportsColor: function(e) { return Wo(Uo(e, e && e.isTTY)) }, stdout: Wo(Uo(!0, qo.isatty(1))), stderr: Wo(Uo(!0, qo.isatty(2))) };
                    const zo = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
                        Ho = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
                        Go = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
                        Xo = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,
                        Yo = new Map([
                            ["n", "\n"],
                            ["r", "\r"],
                            ["t", "\t"],
                            ["b", "\b"],
                            ["f", "\f"],
                            ["v", "\v"],
                            ["0", "\0"],
                            ["\\", "\\"],
                            ["e", ""],
                            ["a", ""]
                        ]);

                    function Ko(e) {
                        const t = "u" === e[0],
                            n = "{" === e[1];
                        return t && !n && 5 === e.length || "x" === e[0] && 3 === e.length ? String.fromCharCode(parseInt(e.slice(1), 16)) : t && n ? String.fromCodePoint(parseInt(e.slice(2, -1), 16)) : Yo.get(e) || e
                    }

                    function Qo(e, t) {
                        const n = [],
                            r = t.trim().split(/\s*,\s*/g);
                        let o;
                        for (const t of r) {
                            const r = Number(t);
                            if (Number.isNaN(r)) {
                                if (!(o = t.match(Go))) throw new Error("Invalid Chalk template style argument: ".concat(t, " (in style '").concat(e, "')"));
                                n.push(o[2].replace(Xo, ((e, t, n) => t ? Ko(t) : n)))
                            } else n.push(r)
                        }
                        return n
                    }

                    function Zo(e) {
                        Ho.lastIndex = 0;
                        const t = [];
                        let n;
                        for (; null !== (n = Ho.exec(e));) {
                            const e = n[1];
                            if (n[2]) {
                                const r = Qo(e, n[2]);
                                t.push([e].concat(r))
                            } else t.push([e])
                        }
                        return t
                    }

                    function eu(e, t) {
                        const n = {};
                        for (const e of t)
                            for (const t of e.styles) n[t[0]] = e.inverse ? null : t.slice(1);
                        let r = e;
                        for (const [e, t] of Object.entries(n))
                            if (Array.isArray(t)) {
                                if (!(e in r)) throw new Error("Unknown Chalk style: ".concat(e));
                                r = t.length > 0 ? r[e](...t) : r[e]
                            }
                        return r
                    }
                    var tu = (e, t) => {
                        const n = [],
                            r = [];
                        let o = [];
                        if (t.replace(zo, ((t, u, i, a, s, c) => {
                                if (u) o.push(Ko(u));
                                else if (a) {
                                    const t = o.join("");
                                    o = [], r.push(0 === n.length ? t : eu(e, n)(t)), n.push({ inverse: i, styles: Zo(a) })
                                } else if (s) {
                                    if (0 === n.length) throw new Error("Found extraneous } in Chalk template literal");
                                    r.push(eu(e, n)(o.join(""))), o = [], n.pop()
                                } else o.push(c)
                            })), r.push(o.join("")), n.length > 0) { const e = "Chalk template literal is missing ".concat(n.length, " closing bracket").concat(1 === n.length ? "" : "s", " (`}`)"); throw new Error(e) }
                        return r.join("")
                    };
                    const { stdout: nu, stderr: ru } = Jo, { stringReplaceAll: ou, stringEncaseCRLFWithFirstIndex: uu } = {
                        stringReplaceAll: (e, t, n) => {
                            let r = e.indexOf(t);
                            if (-1 === r) return e;
                            const o = t.length;
                            let u = 0,
                                i = "";
                            do { i += e.substr(u, r - u) + t + n, u = r + o, r = e.indexOf(t, u) } while (-1 !== r);
                            return i += e.substr(u), i
                        },
                        stringEncaseCRLFWithFirstIndex: (e, t, n, r) => {
                            let o = 0,
                                u = "";
                            do {
                                const i = "\r" === e[r - 1];
                                u += e.substr(o, (i ? r - 1 : r) - o) + t + (i ? "\r\n" : "\n") + n, o = r + 1, r = e.indexOf("\n", o)
                            } while (-1 !== r);
                            return u += e.substr(o), u
                        }
                    }, { isArray: iu } = Array, au = ["ansi", "ansi", "ansi256", "ansi16m"], su = Object.create(null);
                    class cu { constructor(e) { return lu(e) } }
                    const lu = e => {
                        const t = {};
                        return ((e, t = {}) => {
                            if (t.level && !(Number.isInteger(t.level) && t.level >= 0 && t.level <= 3)) throw new Error("The `level` option should be an integer from 0 to 3");
                            const n = nu ? nu.level : 0;
                            e.level = void 0 === t.level ? n : t.level
                        })(t, e), t.template = (...e) => yu(t.template, ...e), Object.setPrototypeOf(t, pu.prototype), Object.setPrototypeOf(t.template, t), t.template.constructor = () => { throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.") }, t.template.Instance = cu, t.template
                    };

                    function pu(e) { return lu(e) }
                    for (const [e, t] of Object.entries(jo)) su[e] = {get() { const n = mu(this, hu(t.open, t.close, this._styler), this._isEmpty); return Object.defineProperty(this, e, { value: n }), n } };
                    su.visible = {get() { const e = mu(this, this._styler, !0); return Object.defineProperty(this, "visible", { value: e }), e } };
                    const du = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
                    for (const e of du) su[e] = {get() { const { level: t } = this; return function(...n) { const r = hu(jo.color[au[t]][e](...n), jo.color.close, this._styler); return mu(this, r, this._isEmpty) } } };
                    for (const e of du) su["bg" + e[0].toUpperCase() + e.slice(1)] = {get() { const { level: t } = this; return function(...n) { const r = hu(jo.bgColor[au[t]][e](...n), jo.bgColor.close, this._styler); return mu(this, r, this._isEmpty) } } };
                    const fu = Object.defineProperties((() => {}), Object.assign({}, su, { level: { enumerable: !0, get() { return this._generator.level }, set(e) { this._generator.level = e } } })),
                        hu = (e, t, n) => { let r, o; return void 0 === n ? (r = e, o = t) : (r = n.openAll + e, o = t + n.closeAll), { open: e, close: t, openAll: r, closeAll: o, parent: n } },
                        mu = (e, t, n) => { const r = (...e) => iu(e[0]) && iu(e[0].raw) ? gu(r, yu(r, ...e)) : gu(r, 1 === e.length ? "" + e[0] : e.join(" ")); return Object.setPrototypeOf(r, fu), r._generator = e, r._styler = t, r._isEmpty = n, r },
                        gu = (e, t) => {
                            if (e.level <= 0 || !t) return e._isEmpty ? "" : t;
                            let n = e._styler;
                            if (void 0 === n) return t;
                            const { openAll: r, closeAll: o } = n;
                            if (-1 !== t.indexOf(""))
                                for (; void 0 !== n;) t = ou(t, n.close, n.open), n = n.parent;
                            const u = t.indexOf("\n");
                            return -1 !== u && (t = uu(t, o, r, u)), r + t + o
                        };
                    let Du;
                    const yu = (e, ...t) => {
                        const [n] = t;
                        if (!iu(n) || !iu(n.raw)) return t.join(" ");
                        const r = t.slice(1),
                            o = [n.raw[0]];
                        for (let e = 1; e < n.length; e++) o.push(String(r[e - 1]).replace(/[{}\\]/g, "\\$&"), String(n.raw[e]));
                        return void 0 === Du && (Du = tu), Du(e, o.join(""))
                    };
                    Object.defineProperties(pu.prototype, su);
                    const Eu = pu();
                    Eu.supportsColor = nu, Eu.stderr = pu({ level: ru ? ru.level : 0 }), Eu.stderr.supportsColor = ru;
                    var Cu = Eu,
                        bu = function(e, t) { for (var n = -1, r = t.length, o = e.length; ++n < r;) e[o + n] = t[n]; return e },
                        vu = "object" == typeof Ie && Ie && Ie.Object === Object && Ie,
                        Au = "object" == typeof self && self && self.Object === Object && self,
                        Fu = (vu || Au || Function("return this")()).Symbol,
                        xu = Object.prototype,
                        Su = xu.hasOwnProperty,
                        wu = xu.toString,
                        Tu = Fu ? Fu.toStringTag : void 0,
                        Bu = Object.prototype.toString,
                        ku = Fu ? Fu.toStringTag : void 0,
                        Nu = function(e) {
                            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : ku && ku in Object(e) ? function(e) {
                                var t = Su.call(e, Tu),
                                    n = e[Tu];
                                try { e[Tu] = void 0; var r = !0 } catch (e) {}
                                var o = wu.call(e);
                                return r && (t ? e[Tu] = n : delete e[Tu]), o
                            }(e) : function(e) { return Bu.call(e) }(e)
                        },
                        Pu = function(e) { return null != e && "object" == typeof e },
                        Ou = function(e) { return Pu(e) && "[object Arguments]" == Nu(e) },
                        _u = Object.prototype,
                        Lu = _u.hasOwnProperty,
                        Iu = _u.propertyIsEnumerable,
                        Mu = Ou(function() { return arguments }()) ? Ou : function(e) { return Pu(e) && Lu.call(e, "callee") && !Iu.call(e, "callee") },
                        ju = Array.isArray,
                        Ru = Fu ? Fu.isConcatSpreadable : void 0,
                        qu = function(e) { return ju(e) || Mu(e) || !!(Ru && e && e[Ru]) },
                        Vu = function e(t, n, r, o, u) {
                            var i = -1,
                                a = t.length;
                            for (r || (r = qu), u || (u = []); ++i < a;) {
                                var s = t[i];
                                n > 0 && r(s) ? n > 1 ? e(s, n - 1, r, o, u) : bu(u, s) : o || (u[u.length] = s)
                            }
                            return u
                        },
                        $u = function(e) { return null != e && e.length ? Vu(e, 1) : [] };
                    const Wu = { key: e => 1 === e.length ? "-".concat(e) : "--".concat(e), value: e => Fo.apiDescriptor.value(e), pair: ({ key: e, value: t }) => !1 === t ? "--no-".concat(e) : !0 === t ? Wu.key(e) : "" === t ? "".concat(Wu.key(e), " without an argument") : "".concat(Wu.key(e), "=").concat(t) };
                    class Uu extends Fo.ChoiceSchema {
                        constructor({ name: e, flags: t }) { super({ name: e, choices: t }), this._flags = t.slice().sort() }
                        preprocess(e, t) { if ("string" == typeof e && 0 !== e.length && !this._flags.includes(e)) { const n = this._flags.find((t => To(t, e) < 3)); if (n) return t.logger.warn(["Unknown flag ".concat(Cu.yellow(t.descriptor.value(e)), ","), "did you mean ".concat(Cu.blue(t.descriptor.value(n)), "?")].join(" ")), n } return e }
                        expected() { return "a flag" }
                    }
                    let Ju;

                    function zu(t, n, { logger: r, isCLI: o = !1, passThrough: u = !1 } = {}) {
                        const i = u ? Array.isArray(u) ? (e, t) => u.includes(e) ? {
                                [e]: t
                            } : void 0 : (e, t) => ({
                                [e]: t
                            }) : (t, n, r) => { const o = e(r.schemas, ["_"]); return Fo.levenUnknownHandler(t, n, Object.assign({}, r, { schemas: o })) },
                            a = o ? Wu : Fo.apiDescriptor,
                            s = function(e, { isCLI: t }) {
                                const n = [];
                                t && n.push(Fo.AnySchema.create({ name: "_" }));
                                for (const r of e) n.push(Hu(r, { isCLI: t, optionInfos: e })), r.alias && t && n.push(Fo.AliasSchema.create({ name: r.alias, sourceName: r.name }));
                                return n
                            }(n, { isCLI: o }),
                            c = new Fo.Normalizer(s, { logger: r, unknown: i, descriptor: a }),
                            l = !1 !== r;
                        l && Ju && (c._hasDeprecationWarned = Ju);
                        const p = c.normalize(t);
                        return l && (Ju = c._hasDeprecationWarned), p
                    }

                    function Hu(e, { isCLI: t, optionInfos: n }) {
                        let r;
                        const o = { name: e.name },
                            u = {};
                        switch (e.type) {
                            case "int":
                                r = Fo.IntegerSchema, t && (o.preprocess = e => Number(e));
                                break;
                            case "string":
                                r = Fo.StringSchema;
                                break;
                            case "choice":
                                r = Fo.ChoiceSchema, o.choices = e.choices.map((t => "object" == typeof t && t.redirect ? Object.assign({}, t, { redirect: { to: { key: e.name, value: t.redirect } } }) : t));
                                break;
                            case "boolean":
                                r = Fo.BooleanSchema;
                                break;
                            case "flag":
                                r = Uu, o.flags = $u(n.map((e => [e.alias, e.description && e.name, e.oppositeDescription && "no-".concat(e.name)].filter(Boolean))));
                                break;
                            case "path":
                                r = Fo.StringSchema;
                                break;
                            default:
                                throw new Error("Unexpected type ".concat(e.type))
                        }
                        if (e.exception ? o.validate = (t, n, r) => e.exception(t) || n.validate(t, r) : o.validate = (e, t, n) => void 0 === e || t.validate(e, n), e.redirect && (u.redirect = t => t ? { to: { key: e.redirect.option, value: e.redirect.value } } : void 0), e.deprecated && (u.deprecated = !0), t && !e.array) {
                            const e = o.preprocess || (e => e);
                            o.preprocess = (t, n, r) => n.preprocess(e(Array.isArray(t) ? t[t.length - 1] : t), r)
                        }
                        return e.array ? Fo.ArraySchema.create(Object.assign({}, t ? { preprocess: e => [].concat(e) } : {}, u, { valueSchema: r.create(o) })) : r.create(Object.assign({}, o, u))
                    }
                    var Gu = function(e, t, n) { return zu(e, t, n) };

                    function Xu(e, t) { const { ignoreDecorators: n } = t || {}; if (!n) { const t = e.declaration && e.declaration.decorators || e.decorators; if (t && t.length > 0) return Xu(t[0]) } return e.range ? e.range[0] : e.start }

                    function Yu(e) { const t = e.range ? e.range[1] : e.end; return e.typeAnnotation ? Math.max(t, Yu(e.typeAnnotation)) : t }

                    function Ku(e, t) { return Xu(e) === Xu(t) }
                    var Qu = { locStart: Xu, locEnd: Yu, composeLoc: function(e, t = e) { const n = Xu(e); return [n, "number" == typeof t ? n + t : Yu(t)] }, hasSameLocStart: Ku, hasSameLoc: function(e, t) { return Ku(e, t) && function(e, t) { return Yu(e) === Yu(t) }(e, t) } },
                        Zu = Me((function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), t.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyus]{1,6}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g, t.matchToToken = function(e) { var t = { type: "invalid", value: e[0], closed: void 0 }; return e[1] ? (t.type = "string", t.closed = !(!e[3] && !e[4])) : e[5] ? t.type = "comment" : e[6] ? (t.type = "comment", t.closed = !!e[7]) : e[8] ? t.type = "regex" : e[9] ? t.type = "number" : e[10] ? t.type = "name" : e[11] ? t.type = "punctuator" : e[12] && (t.type = "whitespace"), t } })),
                        ei = Me((function(e, t) {
                            Object.defineProperty(t, "__esModule", { value: !0 }), t.isIdentifierStart = c, t.isIdentifierChar = l, t.isIdentifierName = function(e) {
                                let t = !0;
                                for (let n = 0, r = Array.from(e); n < r.length; n++) {
                                    const e = r[n].codePointAt(0);
                                    if (t) {
                                        if (!c(e)) return !1;
                                        t = !1
                                    } else if (!l(e)) return !1
                                }
                                return !t
                            };
                            let n = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࣇऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-鿼ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-ꟊꟵ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
                                r = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿᫀᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿";
                            const o = new RegExp("[" + n + "]"),
                                u = new RegExp("[" + n + r + "]");
                            n = r = null;
                            const i = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938],
                                a = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];

                            function s(e, t) { let n = 65536; for (let r = 0, o = t.length; r < o; r += 2) { if (n += t[r], n > e) return !1; if (n += t[r + 1], n >= e) return !0 } return !1 }

                            function c(e) { return e < 65 ? 36 === e : e <= 90 || (e < 97 ? 95 === e : e <= 122 || (e <= 65535 ? e >= 170 && o.test(String.fromCharCode(e)) : s(e, i))) }

                            function l(e) { return e < 48 ? 36 === e : e < 58 || !(e < 65) && (e <= 90 || (e < 97 ? 95 === e : e <= 122 || (e <= 65535 ? e >= 170 && u.test(String.fromCharCode(e)) : s(e, i) || s(e, a)))) }
                        })),
                        ti = Me((function(e, t) {
                            Object.defineProperty(t, "__esModule", { value: !0 }), t.isReservedWord = u, t.isStrictReservedWord = i, t.isStrictBindOnlyReservedWord = a, t.isStrictBindReservedWord = function(e, t) { return i(e, t) || a(e) }, t.isKeyword = function(e) { return n.has(e) };
                            const n = new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"]),
                                r = new Set(["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"]),
                                o = new Set(["eval", "arguments"]);

                            function u(e, t) { return t && "await" === e || "enum" === e }

                            function i(e, t) { return u(e, t) || r.has(e) }

                            function a(e) { return o.has(e) }
                        })),
                        ni = Me((function(e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), Object.defineProperty(t, "isIdentifierName", { enumerable: !0, get: function() { return ei.isIdentifierName } }), Object.defineProperty(t, "isIdentifierChar", { enumerable: !0, get: function() { return ei.isIdentifierChar } }), Object.defineProperty(t, "isIdentifierStart", { enumerable: !0, get: function() { return ei.isIdentifierStart } }), Object.defineProperty(t, "isReservedWord", { enumerable: !0, get: function() { return ti.isReservedWord } }), Object.defineProperty(t, "isStrictBindOnlyReservedWord", { enumerable: !0, get: function() { return ti.isStrictBindOnlyReservedWord } }), Object.defineProperty(t, "isStrictBindReservedWord", { enumerable: !0, get: function() { return ti.isStrictBindReservedWord } }), Object.defineProperty(t, "isStrictReservedWord", { enumerable: !0, get: function() { return ti.isStrictReservedWord } }), Object.defineProperty(t, "isKeyword", { enumerable: !0, get: function() { return ti.isKeyword } }) })),
                        ri = /[|\\{}()[\]^$+*?.]/g,
                        oi = function(e) { if ("string" != typeof e) throw new TypeError("Expected a string"); return e.replace(ri, "\\$&") },
                        ui = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] },
                        ii = Me((function(e) {
                            var t = {};
                            for (var n in ui) ui.hasOwnProperty(n) && (t[ui[n]] = n);
                            var r = e.exports = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };
                            for (var o in r)
                                if (r.hasOwnProperty(o)) {
                                    if (!("channels" in r[o])) throw new Error("missing channels property: " + o);
                                    if (!("labels" in r[o])) throw new Error("missing channel labels property: " + o);
                                    if (r[o].labels.length !== r[o].channels) throw new Error("channel and label counts mismatch: " + o);
                                    var u = r[o].channels,
                                        i = r[o].labels;
                                    delete r[o].channels, delete r[o].labels, Object.defineProperty(r[o], "channels", { value: u }), Object.defineProperty(r[o], "labels", { value: i })
                                }
                            r.rgb.hsl = function(e) {
                                var t, n, r = e[0] / 255,
                                    o = e[1] / 255,
                                    u = e[2] / 255,
                                    i = Math.min(r, o, u),
                                    a = Math.max(r, o, u),
                                    s = a - i;
                                return a === i ? t = 0 : r === a ? t = (o - u) / s : o === a ? t = 2 + (u - r) / s : u === a && (t = 4 + (r - o) / s), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (i + a) / 2, [t, 100 * (a === i ? 0 : n <= .5 ? s / (a + i) : s / (2 - a - i)), 100 * n]
                            }, r.rgb.hsv = function(e) {
                                var t, n, r, o, u, i = e[0] / 255,
                                    a = e[1] / 255,
                                    s = e[2] / 255,
                                    c = Math.max(i, a, s),
                                    l = c - Math.min(i, a, s),
                                    p = function(e) { return (c - e) / 6 / l + .5 };
                                return 0 === l ? o = u = 0 : (u = l / c, t = p(i), n = p(a), r = p(s), i === c ? o = r - n : a === c ? o = 1 / 3 + t - r : s === c && (o = 2 / 3 + n - t), o < 0 ? o += 1 : o > 1 && (o -= 1)), [360 * o, 100 * u, 100 * c]
                            }, r.rgb.hwb = function(e) {
                                var t = e[0],
                                    n = e[1],
                                    o = e[2];
                                return [r.rgb.hsl(e)[0], 1 / 255 * Math.min(t, Math.min(n, o)) * 100, 100 * (o = 1 - 1 / 255 * Math.max(t, Math.max(n, o)))]
                            }, r.rgb.cmyk = function(e) {
                                var t, n = e[0] / 255,
                                    r = e[1] / 255,
                                    o = e[2] / 255;
                                return [100 * ((1 - n - (t = Math.min(1 - n, 1 - r, 1 - o))) / (1 - t) || 0), 100 * ((1 - r - t) / (1 - t) || 0), 100 * ((1 - o - t) / (1 - t) || 0), 100 * t]
                            }, r.rgb.keyword = function(e) {
                                var n = t[e];
                                if (n) return n;
                                var r, o, u, i = 1 / 0;
                                for (var a in ui)
                                    if (ui.hasOwnProperty(a)) {
                                        var s = (o = e, u = ui[a], Math.pow(o[0] - u[0], 2) + Math.pow(o[1] - u[1], 2) + Math.pow(o[2] - u[2], 2));
                                        s < i && (i = s, r = a)
                                    }
                                return r
                            }, r.keyword.rgb = function(e) { return ui[e] }, r.rgb.xyz = function(e) {
                                var t = e[0] / 255,
                                    n = e[1] / 255,
                                    r = e[2] / 255;
                                return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92)), 100 * (.2126 * t + .7152 * n + .0722 * r), 100 * (.0193 * t + .1192 * n + .9505 * r)]
                            }, r.rgb.lab = function(e) {
                                var t = r.rgb.xyz(e),
                                    n = t[0],
                                    o = t[1],
                                    u = t[2];
                                return o /= 100, u /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116) - 16, 500 * (n - o), 200 * (o - (u = u > .008856 ? Math.pow(u, 1 / 3) : 7.787 * u + 16 / 116))]
                            }, r.hsl.rgb = function(e) {
                                var t, n, r, o, u, i = e[0] / 360,
                                    a = e[1] / 100,
                                    s = e[2] / 100;
                                if (0 === a) return [u = 255 * s, u, u];
                                t = 2 * s - (n = s < .5 ? s * (1 + a) : s + a - s * a), o = [0, 0, 0];
                                for (var c = 0; c < 3; c++)(r = i + 1 / 3 * -(c - 1)) < 0 && r++, r > 1 && r--, u = 6 * r < 1 ? t + 6 * (n - t) * r : 2 * r < 1 ? n : 3 * r < 2 ? t + (n - t) * (2 / 3 - r) * 6 : t, o[c] = 255 * u;
                                return o
                            }, r.hsl.hsv = function(e) {
                                var t = e[0],
                                    n = e[1] / 100,
                                    r = e[2] / 100,
                                    o = n,
                                    u = Math.max(r, .01);
                                return n *= (r *= 2) <= 1 ? r : 2 - r, o *= u <= 1 ? u : 2 - u, [t, 100 * (0 === r ? 2 * o / (u + o) : 2 * n / (r + n)), (r + n) / 2 * 100]
                            }, r.hsv.rgb = function(e) {
                                var t = e[0] / 60,
                                    n = e[1] / 100,
                                    r = e[2] / 100,
                                    o = Math.floor(t) % 6,
                                    u = t - Math.floor(t),
                                    i = 255 * r * (1 - n),
                                    a = 255 * r * (1 - n * u),
                                    s = 255 * r * (1 - n * (1 - u));
                                switch (r *= 255, o) {
                                    case 0:
                                        return [r, s, i];
                                    case 1:
                                        return [a, r, i];
                                    case 2:
                                        return [i, r, s];
                                    case 3:
                                        return [i, a, r];
                                    case 4:
                                        return [s, i, r];
                                    case 5:
                                        return [r, i, a]
                                }
                            }, r.hsv.hsl = function(e) {
                                var t, n, r, o = e[0],
                                    u = e[1] / 100,
                                    i = e[2] / 100,
                                    a = Math.max(i, .01);
                                return r = (2 - u) * i, n = u * a, [o, 100 * (n = (n /= (t = (2 - u) * a) <= 1 ? t : 2 - t) || 0), 100 * (r /= 2)]
                            }, r.hwb.rgb = function(e) {
                                var t, n, r, o, u, i, a, s = e[0] / 360,
                                    c = e[1] / 100,
                                    l = e[2] / 100,
                                    p = c + l;
                                switch (p > 1 && (c /= p, l /= p), r = 6 * s - (t = Math.floor(6 * s)), 0 != (1 & t) && (r = 1 - r), o = c + r * ((n = 1 - l) - c), t) {
                                    default:
                                        case 6:
                                        case 0:
                                        u = n,
                                    i = o,
                                    a = c;
                                    break;
                                    case 1:
                                            u = o,
                                        i = n,
                                        a = c;
                                        break;
                                    case 2:
                                            u = c,
                                        i = n,
                                        a = o;
                                        break;
                                    case 3:
                                            u = c,
                                        i = o,
                                        a = n;
                                        break;
                                    case 4:
                                            u = o,
                                        i = c,
                                        a = n;
                                        break;
                                    case 5:
                                            u = n,
                                        i = c,
                                        a = o
                                }
                                return [255 * u, 255 * i, 255 * a]
                            }, r.cmyk.rgb = function(e) {
                                var t = e[0] / 100,
                                    n = e[1] / 100,
                                    r = e[2] / 100,
                                    o = e[3] / 100;
                                return [255 * (1 - Math.min(1, t * (1 - o) + o)), 255 * (1 - Math.min(1, n * (1 - o) + o)), 255 * (1 - Math.min(1, r * (1 - o) + o))]
                            }, r.xyz.rgb = function(e) {
                                var t, n, r, o = e[0] / 100,
                                    u = e[1] / 100,
                                    i = e[2] / 100;
                                return n = -.9689 * o + 1.8758 * u + .0415 * i, r = .0557 * o + -.204 * u + 1.057 * i, t = (t = 3.2406 * o + -1.5372 * u + -.4986 * i) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (r = Math.min(Math.max(0, r), 1))]
                            }, r.xyz.lab = function(e) {
                                var t = e[0],
                                    n = e[1],
                                    r = e[2];
                                return n /= 100, r /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
                            }, r.lab.xyz = function(e) {
                                var t, n, r, o = e[0];
                                t = e[1] / 500 + (n = (o + 16) / 116), r = n - e[2] / 200;
                                var u = Math.pow(n, 3),
                                    i = Math.pow(t, 3),
                                    a = Math.pow(r, 3);
                                return n = u > .008856 ? u : (n - 16 / 116) / 7.787, t = i > .008856 ? i : (t - 16 / 116) / 7.787, r = a > .008856 ? a : (r - 16 / 116) / 7.787, [t *= 95.047, n *= 100, r *= 108.883]
                            }, r.lab.lch = function(e) {
                                var t, n = e[0],
                                    r = e[1],
                                    o = e[2];
                                return (t = 360 * Math.atan2(o, r) / 2 / Math.PI) < 0 && (t += 360), [n, Math.sqrt(r * r + o * o), t]
                            }, r.lch.lab = function(e) {
                                var t, n = e[0],
                                    r = e[1];
                                return t = e[2] / 360 * 2 * Math.PI, [n, r * Math.cos(t), r * Math.sin(t)]
                            }, r.rgb.ansi16 = function(e) {
                                var t = e[0],
                                    n = e[1],
                                    o = e[2],
                                    u = 1 in arguments ? arguments[1] : r.rgb.hsv(e)[2];
                                if (0 === (u = Math.round(u / 50))) return 30;
                                var i = 30 + (Math.round(o / 255) << 2 | Math.round(n / 255) << 1 | Math.round(t / 255));
                                return 2 === u && (i += 60), i
                            }, r.hsv.ansi16 = function(e) { return r.rgb.ansi16(r.hsv.rgb(e), e[2]) }, r.rgb.ansi256 = function(e) {
                                var t = e[0],
                                    n = e[1],
                                    r = e[2];
                                return t === n && n === r ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5)
                            }, r.ansi16.rgb = function(e) { var t = e % 10; if (0 === t || 7 === t) return e > 50 && (t += 3.5), [t = t / 10.5 * 255, t, t]; var n = .5 * (1 + ~~(e > 50)); return [(1 & t) * n * 255, (t >> 1 & 1) * n * 255, (t >> 2 & 1) * n * 255] }, r.ansi256.rgb = function(e) { if (e >= 232) { var t = 10 * (e - 232) + 8; return [t, t, t] } var n; return e -= 16, [Math.floor(e / 36) / 5 * 255, Math.floor((n = e % 36) / 6) / 5 * 255, n % 6 / 5 * 255] }, r.rgb.hex = function(e) { var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase(); return "000000".substring(t.length) + t }, r.hex.rgb = function(e) {
                                var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                                if (!t) return [0, 0, 0];
                                var n = t[0];
                                3 === t[0].length && (n = n.split("").map((function(e) { return e + e })).join(""));
                                var r = parseInt(n, 16);
                                return [r >> 16 & 255, r >> 8 & 255, 255 & r]
                            }, r.rgb.hcg = function(e) {
                                var t, n = e[0] / 255,
                                    r = e[1] / 255,
                                    o = e[2] / 255,
                                    u = Math.max(Math.max(n, r), o),
                                    i = Math.min(Math.min(n, r), o),
                                    a = u - i;
                                return t = a <= 0 ? 0 : u === n ? (r - o) / a % 6 : u === r ? 2 + (o - n) / a : 4 + (n - r) / a + 4, t /= 6, [360 * (t %= 1), 100 * a, 100 * (a < 1 ? i / (1 - a) : 0)]
                            }, r.hsl.hcg = function(e) {
                                var t, n = e[1] / 100,
                                    r = e[2] / 100,
                                    o = 0;
                                return (t = r < .5 ? 2 * n * r : 2 * n * (1 - r)) < 1 && (o = (r - .5 * t) / (1 - t)), [e[0], 100 * t, 100 * o]
                            }, r.hsv.hcg = function(e) {
                                var t = e[1] / 100,
                                    n = e[2] / 100,
                                    r = t * n,
                                    o = 0;
                                return r < 1 && (o = (n - r) / (1 - r)), [e[0], 100 * r, 100 * o]
                            }, r.hcg.rgb = function(e) {
                                var t = e[0] / 360,
                                    n = e[1] / 100,
                                    r = e[2] / 100;
                                if (0 === n) return [255 * r, 255 * r, 255 * r];
                                var o, u = [0, 0, 0],
                                    i = t % 1 * 6,
                                    a = i % 1,
                                    s = 1 - a;
                                switch (Math.floor(i)) {
                                    case 0:
                                        u[0] = 1, u[1] = a, u[2] = 0;
                                        break;
                                    case 1:
                                        u[0] = s, u[1] = 1, u[2] = 0;
                                        break;
                                    case 2:
                                        u[0] = 0, u[1] = 1, u[2] = a;
                                        break;
                                    case 3:
                                        u[0] = 0, u[1] = s, u[2] = 1;
                                        break;
                                    case 4:
                                        u[0] = a, u[1] = 0, u[2] = 1;
                                        break;
                                    default:
                                        u[0] = 1, u[1] = 0, u[2] = s
                                }
                                return o = (1 - n) * r, [255 * (n * u[0] + o), 255 * (n * u[1] + o), 255 * (n * u[2] + o)]
                            }, r.hcg.hsv = function(e) {
                                var t = e[1] / 100,
                                    n = t + e[2] / 100 * (1 - t),
                                    r = 0;
                                return n > 0 && (r = t / n), [e[0], 100 * r, 100 * n]
                            }, r.hcg.hsl = function(e) {
                                var t = e[1] / 100,
                                    n = e[2] / 100 * (1 - t) + .5 * t,
                                    r = 0;
                                return n > 0 && n < .5 ? r = t / (2 * n) : n >= .5 && n < 1 && (r = t / (2 * (1 - n))), [e[0], 100 * r, 100 * n]
                            }, r.hcg.hwb = function(e) {
                                var t = e[1] / 100,
                                    n = t + e[2] / 100 * (1 - t);
                                return [e[0], 100 * (n - t), 100 * (1 - n)]
                            }, r.hwb.hcg = function(e) {
                                var t = e[1] / 100,
                                    n = 1 - e[2] / 100,
                                    r = n - t,
                                    o = 0;
                                return r < 1 && (o = (n - r) / (1 - r)), [e[0], 100 * r, 100 * o]
                            }, r.apple.rgb = function(e) { return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255] }, r.rgb.apple = function(e) { return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535] }, r.gray.rgb = function(e) { return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255] }, r.gray.hsl = r.gray.hsv = function(e) { return [0, 0, e[0]] }, r.gray.hwb = function(e) { return [0, 100, e[0]] }, r.gray.cmyk = function(e) { return [0, 0, 0, e[0]] }, r.gray.lab = function(e) { return [e[0], 0, 0] }, r.gray.hex = function(e) {
                                var t = 255 & Math.round(e[0] / 100 * 255),
                                    n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
                                return "000000".substring(n.length) + n
                            }, r.rgb.gray = function(e) { return [(e[0] + e[1] + e[2]) / 3 / 255 * 100] }
                        }));

                    function ai(e, t) { return function(n) { return t(e(n)) } }

                    function si(e, t) { for (var n = [t[e].parent, e], r = ii[t[e].parent][e], o = t[e].parent; t[o].parent;) n.unshift(t[o].parent), r = ai(ii[t[o].parent][o], r), o = t[o].parent; return r.conversion = n, r }
                    var ci = {};
                    Object.keys(ii).forEach((function(e) {
                        ci[e] = {}, Object.defineProperty(ci[e], "channels", { value: ii[e].channels }), Object.defineProperty(ci[e], "labels", { value: ii[e].labels });
                        var t = function(e) {
                            for (var t = function(e) {
                                    var t = function() { for (var e = {}, t = Object.keys(ii), n = t.length, r = 0; r < n; r++) e[t[r]] = { distance: -1, parent: null }; return e }(),
                                        n = [e];
                                    for (t[e].distance = 0; n.length;)
                                        for (var r = n.pop(), o = Object.keys(ii[r]), u = o.length, i = 0; i < u; i++) {
                                            var a = o[i],
                                                s = t[a]; - 1 === s.distance && (s.distance = t[r].distance + 1, s.parent = r, n.unshift(a))
                                        }
                                    return t
                                }(e), n = {}, r = Object.keys(t), o = r.length, u = 0; u < o; u++) {
                                var i = r[u];
                                null !== t[i].parent && (n[i] = si(i, t))
                            }
                            return n
                        }(e);
                        Object.keys(t).forEach((function(n) {
                            var r = t[n];
                            ci[e][n] = function(e) {
                                var t = function(t) {
                                    if (null == t) return t;
                                    arguments.length > 1 && (t = Array.prototype.slice.call(arguments));
                                    var n = e(t);
                                    if ("object" == typeof n)
                                        for (var r = n.length, o = 0; o < r; o++) n[o] = Math.round(n[o]);
                                    return n
                                };
                                return "conversion" in e && (t.conversion = e.conversion), t
                            }(r), ci[e][n].raw = function(e) { var t = function(t) { return null == t ? t : (arguments.length > 1 && (t = Array.prototype.slice.call(arguments)), e(t)) }; return "conversion" in e && (t.conversion = e.conversion), t }(r)
                        }))
                    }));
                    var li = ci,
                        pi = Me((function(e) {
                            const t = (e, t) => function() { const n = e.apply(li, arguments); return "[".concat(n + t, "m") },
                                n = (e, t) => function() { const n = e.apply(li, arguments); return "[".concat(38 + t, ";5;").concat(n, "m") },
                                r = (e, t) => function() { const n = e.apply(li, arguments); return "[".concat(38 + t, ";2;").concat(n[0], ";").concat(n[1], ";").concat(n[2], "m") };
                            Object.defineProperty(e, "exports", {
                                enumerable: !0,
                                get: function() {
                                    const e = new Map,
                                        o = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], gray: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
                                    o.color.grey = o.color.gray;
                                    for (const t of Object.keys(o)) {
                                        const n = o[t];
                                        for (const t of Object.keys(n)) {
                                            const r = n[t];
                                            o[t] = { open: "[".concat(r[0], "m"), close: "[".concat(r[1], "m") }, n[t] = o[t], e.set(r[0], r[1])
                                        }
                                        Object.defineProperty(o, t, { value: n, enumerable: !1 }), Object.defineProperty(o, "codes", { value: e, enumerable: !1 })
                                    }
                                    const u = e => e,
                                        i = (e, t, n) => [e, t, n];
                                    o.color.close = "[39m", o.bgColor.close = "[49m", o.color.ansi = { ansi: t(u, 0) }, o.color.ansi256 = { ansi256: n(u, 0) }, o.color.ansi16m = { rgb: r(i, 0) }, o.bgColor.ansi = { ansi: t(u, 10) }, o.bgColor.ansi256 = { ansi256: n(u, 10) }, o.bgColor.ansi16m = { rgb: r(i, 10) };
                                    for (let e of Object.keys(li)) { if ("object" != typeof li[e]) continue; const u = li[e]; "ansi16" === e && (e = "ansi"), "ansi16" in u && (o.color.ansi[e] = t(u.ansi16, 0), o.bgColor.ansi[e] = t(u.ansi16, 10)), "ansi256" in u && (o.color.ansi256[e] = n(u.ansi256, 0), o.bgColor.ansi256[e] = n(u.ansi256, 10)), "rgb" in u && (o.color.ansi16m[e] = r(u.rgb, 0), o.bgColor.ansi16m[e] = r(u.rgb, 10)) }
                                    return o
                                }
                            })
                        }));
                    const di = Oe.env;
                    let fi;

                    function hi(e) {
                        return function(e) { return 0 !== e && { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 } }(function(e) {
                            if (!1 === fi) return 0;
                            if (jr("color=16m") || jr("color=full") || jr("color=truecolor")) return 3;
                            if (jr("color=256")) return 2;
                            if (e && !e.isTTY && !0 !== fi) return 0;
                            const t = fi ? 1 : 0;
                            if ("win32" === Oe.platform) { const e = Rr.release().split("."); return Number(Oe.versions.node.split(".")[0]) >= 8 && Number(e[0]) >= 10 && Number(e[2]) >= 10586 ? Number(e[2]) >= 14931 ? 3 : 2 : 1 }
                            if ("CI" in di) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some((e => e in di)) || "codeship" === di.CI_NAME ? 1 : t;
                            if ("TEAMCITY_VERSION" in di) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(di.TEAMCITY_VERSION) ? 1 : 0;
                            if ("truecolor" === di.COLORTERM) return 3;
                            if ("TERM_PROGRAM" in di) {
                                const e = parseInt((di.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
                                switch (di.TERM_PROGRAM) {
                                    case "iTerm.app":
                                        return e >= 3 ? 3 : 2;
                                    case "Apple_Terminal":
                                        return 2
                                }
                            }
                            return /-256(color)?$/i.test(di.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(di.TERM) || "COLORTERM" in di ? 1 : (di.TERM, t)
                        }(e))
                    }
                    jr("no-color") || jr("no-colors") || jr("color=false") ? fi = !1 : (jr("color") || jr("colors") || jr("color=true") || jr("color=always")) && (fi = !0), "FORCE_COLOR" in di && (fi = 0 === di.FORCE_COLOR.length || 0 !== parseInt(di.FORCE_COLOR, 10));
                    var mi = { supportsColor: hi, stdout: hi(Oe.stdout), stderr: hi(Oe.stderr) };
                    const gi = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
                        Di = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
                        yi = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
                        Ei = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi,
                        Ci = new Map([
                            ["n", "\n"],
                            ["r", "\r"],
                            ["t", "\t"],
                            ["b", "\b"],
                            ["f", "\f"],
                            ["v", "\v"],
                            ["0", "\0"],
                            ["\\", "\\"],
                            ["e", ""],
                            ["a", ""]
                        ]);

                    function bi(e) { return "u" === e[0] && 5 === e.length || "x" === e[0] && 3 === e.length ? String.fromCharCode(parseInt(e.slice(1), 16)) : Ci.get(e) || e }

                    function vi(e, t) {
                        const n = [],
                            r = t.trim().split(/\s*,\s*/g);
                        let o;
                        for (const t of r)
                            if (isNaN(t)) {
                                if (!(o = t.match(yi))) throw new Error("Invalid Chalk template style argument: ".concat(t, " (in style '").concat(e, "')"));
                                n.push(o[2].replace(Ei, ((e, t, n) => t ? bi(t) : n)))
                            } else n.push(Number(t));
                        return n
                    }

                    function Ai(e) {
                        Di.lastIndex = 0;
                        const t = [];
                        let n;
                        for (; null !== (n = Di.exec(e));) {
                            const e = n[1];
                            if (n[2]) {
                                const r = vi(e, n[2]);
                                t.push([e].concat(r))
                            } else t.push([e])
                        }
                        return t
                    }

                    function Fi(e, t) {
                        const n = {};
                        for (const e of t)
                            for (const t of e.styles) n[t[0]] = e.inverse ? null : t.slice(1);
                        let r = e;
                        for (const e of Object.keys(n))
                            if (Array.isArray(n[e])) {
                                if (!(e in r)) throw new Error("Unknown Chalk style: ".concat(e));
                                r = n[e].length > 0 ? r[e].apply(r, n[e]) : r[e]
                            }
                        return r
                    }
                    var xi = (e, t) => {
                            const n = [],
                                r = [];
                            let o = [];
                            if (t.replace(gi, ((t, u, i, a, s, c) => {
                                    if (u) o.push(bi(u));
                                    else if (a) {
                                        const t = o.join("");
                                        o = [], r.push(0 === n.length ? t : Fi(e, n)(t)), n.push({ inverse: i, styles: Ai(a) })
                                    } else if (s) {
                                        if (0 === n.length) throw new Error("Found extraneous } in Chalk template literal");
                                        r.push(Fi(e, n)(o.join(""))), o = [], n.pop()
                                    } else o.push(c)
                                })), r.push(o.join("")), n.length > 0) { const e = "Chalk template literal is missing ".concat(n.length, " closing bracket").concat(1 === n.length ? "" : "s", " (`}`)"); throw new Error(e) }
                            return r.join("")
                        },
                        Si = Me((function(e) {
                            const t = mi.stdout,
                                n = "win32" === Oe.platform && !(Oe.env.TERM || "").toLowerCase().startsWith("xterm"),
                                r = ["ansi", "ansi", "ansi256", "ansi16m"],
                                o = new Set(["gray"]),
                                u = Object.create(null);

                            function i(e, n) {
                                n = n || {};
                                const r = t ? t.level : 0;
                                e.level = void 0 === n.level ? r : n.level, e.enabled = "enabled" in n ? n.enabled : e.level > 0
                            }

                            function a(e) {
                                if (!this || !(this instanceof a) || this.template) { const t = {}; return i(t, e), t.template = function() { const e = [].slice.call(arguments); return p.apply(null, [t.template].concat(e)) }, Object.setPrototypeOf(t, a.prototype), Object.setPrototypeOf(t.template, t), t.template.constructor = a, t.template }
                                i(this, e)
                            }
                            n && (pi.blue.open = "[94m");
                            for (const e of Object.keys(pi)) pi[e].closeRe = new RegExp(oi(pi[e].close), "g"), u[e] = {get() { const t = pi[e]; return c.call(this, this._styles ? this._styles.concat(t) : [t], this._empty, e) } };
                            u.visible = {get() { return c.call(this, this._styles || [], !0, "visible") } }, pi.color.closeRe = new RegExp(oi(pi.color.close), "g");
                            for (const e of Object.keys(pi.color.ansi)) o.has(e) || (u[e] = {get() { const t = this.level; return function() { const n = { open: pi.color[r[t]][e].apply(null, arguments), close: pi.color.close, closeRe: pi.color.closeRe }; return c.call(this, this._styles ? this._styles.concat(n) : [n], this._empty, e) } } });
                            pi.bgColor.closeRe = new RegExp(oi(pi.bgColor.close), "g");
                            for (const e of Object.keys(pi.bgColor.ansi)) o.has(e) || (u["bg" + e[0].toUpperCase() + e.slice(1)] = {get() { const t = this.level; return function() { const n = { open: pi.bgColor[r[t]][e].apply(null, arguments), close: pi.bgColor.close, closeRe: pi.bgColor.closeRe }; return c.call(this, this._styles ? this._styles.concat(n) : [n], this._empty, e) } } });
                            const s = Object.defineProperties((() => {}), u);

                            function c(e, t, n) {
                                const r = function() { return l.apply(r, arguments) };
                                r._styles = e, r._empty = t;
                                const o = this;
                                return Object.defineProperty(r, "level", { enumerable: !0, get: () => o.level, set(e) { o.level = e } }), Object.defineProperty(r, "enabled", { enumerable: !0, get: () => o.enabled, set(e) { o.enabled = e } }), r.hasGrey = this.hasGrey || "gray" === n || "grey" === n, r.__proto__ = s, r
                            }

                            function l() {
                                const e = arguments,
                                    t = e.length;
                                let r = String(arguments[0]);
                                if (0 === t) return "";
                                if (t > 1)
                                    for (let n = 1; n < t; n++) r += " " + e[n];
                                if (!this.enabled || this.level <= 0 || !r) return this._empty ? "" : r;
                                const o = pi.dim.open;
                                n && this.hasGrey && (pi.dim.open = "");
                                for (const e of this._styles.slice().reverse()) r = e.open + r.replace(e.closeRe, e.open) + e.close, r = r.replace(/\r?\n/g, "".concat(e.close, "$&").concat(e.open));
                                return pi.dim.open = o, r
                            }

                            function p(e, t) {
                                if (!Array.isArray(t)) return [].slice.call(arguments, 1).join(" ");
                                const n = [].slice.call(arguments, 2),
                                    r = [t.raw[0]];
                                for (let e = 1; e < t.length; e++) r.push(String(n[e - 1]).replace(/[{}\\]/g, "\\$&")), r.push(String(t.raw[e]));
                                return xi(e, r.join(""))
                            }
                            Object.defineProperties(a.prototype, u), e.exports = a(), e.exports.supportsColor = t, e.exports.default = e.exports
                        })),
                        wi = Me((function(e, t) {
                            Object.defineProperty(t, "__esModule", { value: !0 }), t.shouldHighlight = c, t.getChalk = l, t.default = function(e, t = {}) {
                                return c(t) ? function(e, t) {
                                    return t.replace(r.default, (function(...t) {
                                        const n = function(e) { const [t, n] = e.slice(-2), o = (0, r.matchToToken)(e); if ("name" === o.type) { if ((0, ni.isKeyword)(o.value) || (0, ni.isReservedWord)(o.value)) return "keyword"; if (a.test(o.value) && ("<" === n[t - 1] || "</" == n.substr(t - 2, 2))) return "jsx_tag"; if (o.value[0] !== o.value[0].toLowerCase()) return "capitalized" } return "punctuator" === o.type && s.test(o.value) ? "bracket" : "invalid" !== o.type || "@" !== o.value && "#" !== o.value ? o.type : "punctuator" }(t),
                                            o = e[n];
                                        return o ? t[0].split(i).map((e => o(e))).join("\n") : t[0]
                                    }))
                                }(function(e) { return { keyword: e.cyan, capitalized: e.yellow, jsx_tag: e.yellow, punctuator: e.yellow, number: e.magenta, string: e.green, regex: e.magenta, comment: e.grey, invalid: e.white.bgRed.bold } }(l(t)), e) : e
                            };
                            var n, r = function(e) {
                                    if (e && e.__esModule) return e;
                                    if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
                                    var t = u();
                                    if (t && t.has(e)) return t.get(e);
                                    var n = {},
                                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var o in e)
                                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                                            var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                                            i && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = e[o]
                                        }
                                    return n.default = e, t && t.set(e, n), n
                                }(Zu),
                                o = (n = Si) && n.__esModule ? n : { default: n };

                            function u() { if ("function" != typeof WeakMap) return null; var e = new WeakMap; return u = function() { return e }, e }
                            const i = /\r\n|[\n\r\u2028\u2029]/,
                                a = /^[a-z][\w-]*$/i,
                                s = /^[()[\]{}]$/;

                            function c(e) { return o.default.supportsColor || e.forceColor }

                            function l(e) { let t = o.default; return e.forceColor && (t = new o.default.constructor({ enabled: !0, level: 1 })), t }
                        })),
                        Ti = Me((function(e, t) {
                            Object.defineProperty(t, "__esModule", { value: !0 }), t.codeFrameColumns = i, t.default = function(e, t, n, r = {}) {
                                if (!o) {
                                    o = !0;
                                    const e = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
                                    Oe.emitWarning ? Oe.emitWarning(e, "DeprecationWarning") : (new Error(e).name = "DeprecationWarning", console.warn(new Error(e)))
                                }
                                return i(e, { start: { column: n = Math.max(n, 0), line: t } }, r)
                            };
                            var n = function(e) {
                                if (e && e.__esModule) return e;
                                if (null === e || "object" != typeof e && "function" != typeof e) return { default: e };
                                var t = r();
                                if (t && t.has(e)) return t.get(e);
                                var n = {},
                                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                for (var u in e)
                                    if (Object.prototype.hasOwnProperty.call(e, u)) {
                                        var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
                                        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]
                                    }
                                return n.default = e, t && t.set(e, n), n
                            }(wi);

                            function r() { if ("function" != typeof WeakMap) return null; var e = new WeakMap; return r = function() { return e }, e }
                            let o = !1;
                            const u = /\r\n|[\n\r\u2028\u2029]/;

                            function i(e, t, r = {}) {
                                const o = (r.highlightCode || r.forceColor) && (0, n.shouldHighlight)(r),
                                    i = (0, n.getChalk)(r),
                                    a = function(e) { return { gutter: e.grey, marker: e.red.bold, message: e.red.bold } }(i),
                                    s = (e, t) => o ? e(t) : t,
                                    c = e.split(u),
                                    { start: l, end: p, markerLines: d } = function(e, t, n) {
                                        const r = Object.assign({ column: 0, line: -1 }, e.start),
                                            o = Object.assign({}, r, e.end),
                                            { linesAbove: u = 2, linesBelow: i = 3 } = n || {},
                                            a = r.line,
                                            s = r.column,
                                            c = o.line,
                                            l = o.column;
                                        let p = Math.max(a - (u + 1), 0),
                                            d = Math.min(t.length, c + i); - 1 === a && (p = 0), -1 === c && (d = t.length);
                                        const f = c - a,
                                            h = {};
                                        if (f)
                                            for (let e = 0; e <= f; e++) {
                                                const n = e + a;
                                                if (s)
                                                    if (0 === e) {
                                                        const e = t[n - 1].length;
                                                        h[n] = [s, e - s + 1]
                                                    } else if (e === f) h[n] = [0, l];
                                                else {
                                                    const r = t[n - e].length;
                                                    h[n] = [0, r]
                                                } else h[n] = !0
                                            } else h[a] = s === l ? !s || [s, 0] : [s, l - s];
                                        return { start: p, end: d, markerLines: h }
                                    }(t, c, r),
                                    f = t.start && "number" == typeof t.start.column,
                                    h = String(p).length;
                                let m = (o ? (0, n.default)(e, r) : e).split(u).slice(l, p).map(((e, t) => {
                                    const n = l + 1 + t,
                                        o = " ".concat(n).slice(-h),
                                        u = " ".concat(o, " | "),
                                        i = d[n],
                                        c = !d[n + 1];
                                    if (i) {
                                        let t = "";
                                        if (Array.isArray(i)) {
                                            const n = e.slice(0, Math.max(i[0] - 1, 0)).replace(/[^\t]/g, " "),
                                                o = i[1] || 1;
                                            t = ["\n ", s(a.gutter, u.replace(/\d/g, " ")), n, s(a.marker, "^").repeat(o)].join(""), c && r.message && (t += " " + s(a.message, r.message))
                                        }
                                        return [s(a.marker, ">"), s(a.gutter, u), e, t].join("")
                                    }
                                    return " ".concat(s(a.gutter, u)).concat(e)
                                })).join("\n");
                                return r.message && !f && (m = "".concat(" ".repeat(h + 1)).concat(r.message, "\n").concat(m)), o ? i.reset(m) : m
                            }
                        })),
                        Bi = je(yn);
                    const { ConfigError: ki } = Cr, { locStart: Ni, locEnd: Pi } = Qu, Oi = Object.getOwnPropertyNames, _i = Object.getOwnPropertyDescriptor;

                    function Li(e) {
                        const t = {};
                        for (const n of e.plugins)
                            if (n.parsers)
                                for (const e of Oi(n.parsers)) Object.defineProperty(t, e, _i(n.parsers, e));
                        return t
                    }

                    function Ii(e, t) { if (t = t || Li(e), "function" == typeof e.parser) return { parse: e.parser, astFormat: "estree", locStart: Ni, locEnd: Pi }; if ("string" == typeof e.parser) { if (Object.prototype.hasOwnProperty.call(t, e.parser)) return t[e.parser]; throw new ki("Couldn't resolve parser \"".concat(e.parser, '". Parsers must be explicitly added to the standalone bundle.')) } }
                    var Mi = {
                        parse: function(e, t) {
                            const n = Li(t),
                                r = Object.keys(n).reduce(((e, t) => Object.defineProperty(e, t, { enumerable: !0, get: () => n[t].parse })), {}),
                                o = Ii(t, n);
                            try { return o.preprocess && (e = o.preprocess(e, t)), { text: e, ast: o.parse(e, r, t) } } catch (t) { const { loc: n } = t; if (n) { const { codeFrameColumns: r } = Ti; throw t.codeFrame = r(e, n, { highlightCode: !0 }), t.message += "\n" + t.codeFrame, t } throw t.stack }
                        },
                        resolveParser: Ii
                    };
                    const { UndefinedParserError: ji } = Cr, { getSupportInfo: Ri } = gt, { resolveParser: qi } = Mi, Vi = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null };

                    function $i(e, t) {
                        const n = Bi.basename(e).toLowerCase(),
                            r = Ri({ plugins: t }).languages.filter((e => null !== e.since));
                        let o = r.find((e => e.extensions && e.extensions.some((e => n.endsWith(e))) || e.filenames && e.filenames.some((e => e.toLowerCase() === n))));
                        if (!o && !n.includes(".")) {
                            const t = function(e) {
                                if ("string" != typeof e) return "";
                                let t;
                                try { t = gr.openSync(e, "r") } catch (e) { return "" }
                                try {
                                    const n = new class {
                                            constructor(e, t) {
                                                (t = t || {}).readChunk || (t.readChunk = 1024), t.newLineCharacter ? t.newLineCharacter = t.newLineCharacter.charCodeAt(0) : t.newLineCharacter = 10, this.fd = "number" == typeof e ? e : gr.openSync(e, "r"), this.options = t, this.newLineCharacter = t.newLineCharacter, this.reset()
                                            }
                                            _searchInBuffer(e, t) {
                                                let n = -1;
                                                for (let r = 0; r <= e.length; r++)
                                                    if (e[r] === t) { n = r; break }
                                                return n
                                            }
                                            reset() { this.eofReached = !1, this.linesCache = [], this.fdPosition = 0 }
                                            close() { gr.closeSync(this.fd), this.fd = null }
                                            _extractLines(e) {
                                                let t;
                                                const n = [];
                                                let r = 0,
                                                    o = 0;
                                                for (;;) {
                                                    let u = e[r++];
                                                    if (u === this.newLineCharacter) t = e.slice(o, r), n.push(t), o = r;
                                                    else if (void 0 === u) break
                                                }
                                                let u = e.slice(o, r);
                                                return u.length && n.push(u), n
                                            }
                                            _readChunk(e) {
                                                let t, n = 0;
                                                const r = [];
                                                do {
                                                    const e = new Pn(this.options.readChunk);
                                                    t = gr.readSync(this.fd, e, 0, this.options.readChunk, this.fdPosition), n += t, this.fdPosition = this.fdPosition + t, r.push(e)
                                                } while (t && -1 === this._searchInBuffer(r[r.length - 1], this.options.newLineCharacter));
                                                let o = Pn.concat(r);
                                                return t < this.options.readChunk && (this.eofReached = !0, o = o.slice(0, n)), n && (this.linesCache = this._extractLines(o), e && (this.linesCache[0] = Pn.concat([e, this.linesCache[0]]))), n
                                            }
                                            next() { if (!this.fd) return !1; let e, t = !1; return this.eofReached && 0 === this.linesCache.length || (this.linesCache.length || (e = this._readChunk()), this.linesCache.length && (t = this.linesCache.shift(), t[t.length - 1] !== this.newLineCharacter && (e = this._readChunk(t), e && (t = this.linesCache.shift()))), this.eofReached && 0 === this.linesCache.length && this.close(), t && t[t.length - 1] === this.newLineCharacter && (t = t.slice(0, t.length - 1))), t }
                                        }(t).next().toString("utf8"),
                                        r = n.match(/^#!\/(?:usr\/)?bin\/env\s+(\S+)/);
                                    if (r) return r[1];
                                    const o = n.match(/^#!\/(?:usr\/(?:local\/)?)?bin\/(\S+)/);
                                    return o ? o[1] : ""
                                } catch (e) { return "" } finally { try { gr.closeSync(t) } catch (e) {} }
                            }(e);
                            o = r.find((e => e.interpreters && e.interpreters.includes(t)))
                        }
                        return o && o.parsers[0]
                    }
                    var Wi = {
                            normalize: function(e, t) {
                                t = t || {};
                                const n = Object.assign({}, e),
                                    r = Ri({ plugins: e.plugins, showUnreleased: !0, showDeprecated: !0 }).options,
                                    o = Object.assign({}, Vi, function(e) {
                                        for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n;) {
                                            var o = e[t];
                                            r[o[0]] = o[1]
                                        }
                                        return r
                                    }(r.filter((e => void 0 !== e.default)).map((e => [e.name, e.default]))));
                                if (!n.parser)
                                    if (n.filepath) { if (n.parser = $i(n.filepath, n.plugins), !n.parser) throw new ji("No parser could be inferred for file: ".concat(n.filepath)) } else(t.logger || console).warn("No parser and no filepath given, using 'babel' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred."), n.parser = "babel";
                                const u = qi(Gu(n, [r.find((e => "parser" === e.name))], { passThrough: !0, logger: !1 }));
                                n.astFormat = u.astFormat, n.locEnd = u.locEnd, n.locStart = u.locStart;
                                const i = function(e) { const { astFormat: t } = e; if (!t) throw new Error("getPlugin() requires astFormat to be set"); const n = e.plugins.find((e => e.printers && e.printers[t])); if (!n) throw new Error("Couldn't find plugin for AST format \"".concat(t, '"')); return n }(n);
                                n.printer = i.printers[n.astFormat];
                                const a = r.filter((e => e.pluginDefaults && void 0 !== e.pluginDefaults[i.name])).reduce(((e, t) => Object.assign(e, {
                                        [t.name]: t.pluginDefaults[i.name]
                                    })), {}),
                                    s = Object.assign({}, o, a);
                                return Object.keys(s).forEach((e => { null == n[e] && (n[e] = s[e]) })), "json" === n.parser && (n.trailingComma = "none"), Gu(n, r, Object.assign({ passThrough: Object.keys(Vi) }, t))
                            },
                            hiddenDefaults: Vi,
                            inferParser: $i
                        },
                        Ui = function e(t, n, r) {
                            if (Array.isArray(t)) return t.map((t => e(t, n, r))).filter(Boolean);
                            if (!t || "object" != typeof t) return t;
                            const o = n.printer.massageAstNode;
                            let u;
                            u = o && o.ignoredProperties ? o.ignoredProperties : new Set;
                            const i = {};
                            for (const r of Object.keys(t)) u.has(r) || "function" == typeof t[r] || (i[r] = e(t[r], n, t));
                            if (o) { const e = o(t, i, r); if (null === e) return; if (e) return e }
                            return i
                        };

                    function Ji() {}
                    Ji.ok = function() {}, Ji.strictEqual = function() {};
                    var zi = je(Object.freeze({ __proto__: null, default: Ji }));
                    const { builders: { concat: Hi, line: Gi, hardline: Xi, breakParent: Yi, indent: Ki, lineSuffix: Qi, join: Zi, cursor: ea } } = cn, { hasNewline: ta, skipNewline: na, skipSpaces: ra, isPreviousLineEmpty: oa, addLeadingComment: ua, addDanglingComment: ia, addTrailingComment: aa } = Lt, sa = Symbol("child-nodes");

                    function ca(e, t, n) { if (!e) return; const { printer: r, locStart: o, locEnd: u } = t; if (n) { if (r.canAttachComment && r.canAttachComment(e)) { let t; for (t = n.length - 1; t >= 0 && !(o(n[t]) <= o(e) && u(n[t]) <= u(e)); --t); return void n.splice(t + 1, 0, e) } } else if (e[sa]) return e[sa]; const i = r.getCommentChildNodes && r.getCommentChildNodes(e, t) || "object" == typeof e && Object.keys(e).filter((e => "enclosingNode" !== e && "precedingNode" !== e && "followingNode" !== e && "tokens" !== e && "comments" !== e)).map((t => e[t])); return i ? (n || Object.defineProperty(e, sa, { value: n = [], enumerable: !1 }), i.forEach((e => { ca(e, t, n) })), n) : void 0 }

                    function la(e, t, n) {
                        const { locStart: r, locEnd: o } = n, u = r(t), i = o(t), a = ca(e, n);
                        let s, c, l = 0,
                            p = a.length;
                        for (; l < p;) {
                            const e = l + p >> 1,
                                d = a[e],
                                f = r(d),
                                h = o(d);
                            if (f <= u && i <= h) return t.enclosingNode = d, void la(d, t, n);
                            if (f <= u) s = d, l = e + 1;
                            else {
                                if (!(i <= f)) throw new Error("Comment location overlaps with node location");
                                c = d, p = e
                            }
                        }
                        if (t.enclosingNode && "TemplateLiteral" === t.enclosingNode.type) {
                            const { quasis: e } = t.enclosingNode, r = fa(e, t, n);
                            s && fa(e, s, n) !== r && (s = null), c && fa(e, c, n) !== r && (c = null)
                        }
                        s && (t.precedingNode = s), c && (t.followingNode = c)
                    }

                    function pa(e, t, n) {
                        const r = e.length;
                        if (0 === r) return;
                        const { precedingNode: o, followingNode: u, enclosingNode: i } = e[0], a = n.printer.getGapRegex && n.printer.getGapRegex(i) || /^[\s(]*$/;
                        let s, c = n.locStart(u);
                        for (s = r; s > 0; --s) {
                            const r = e[s - 1];
                            zi.strictEqual(r.precedingNode, o), zi.strictEqual(r.followingNode, u);
                            const i = t.slice(n.locEnd(r), c);
                            if (!a.test(i)) break;
                            c = n.locStart(r)
                        }
                        e.forEach(((e, t) => { t < s ? aa(o, e) : ua(u, e) }));
                        for (const e of[o, u]) e.comments && e.comments.length > 1 && e.comments.sort(((e, t) => n.locStart(e) - n.locStart(t)));
                        e.length = 0
                    }

                    function da(e, t) { return e.getValue().printed = !0, t.printer.printComment(e, t) }

                    function fa(e, t, n) {
                        const r = n.locStart(t) - 1;
                        for (let t = 1; t < e.length; ++t)
                            if (r < n.locStart(e[t])) return t - 1;
                        return 0
                    }

                    function ha(e, t, n) { return e.getNode() === t.cursorNode && e.getValue() ? Hi([ea, n, ea]) : n }
                    var ma = {
                        attach: function(e, t, n, r) {
                            if (!Array.isArray(e)) return;
                            const o = [],
                                { locStart: u, locEnd: i } = r;
                            e.forEach(((a, s) => {
                                if ("json" === r.parser || "json5" === r.parser || "__js_expression" === r.parser || "__vue_expression" === r.parser) { if (u(a) - u(t) <= 0) return void ua(t, a); if (i(a) - i(t) >= 0) return void aa(t, a) }
                                la(t, a, r);
                                const { precedingNode: c, enclosingNode: l, followingNode: p } = a, d = r.printer.handleComments && r.printer.handleComments.ownLine ? r.printer.handleComments.ownLine : () => !1, f = r.printer.handleComments && r.printer.handleComments.endOfLine ? r.printer.handleComments.endOfLine : () => !1, h = r.printer.handleComments && r.printer.handleComments.remaining ? r.printer.handleComments.remaining : () => !1, m = e.length - 1 === s;
                                if (ta(n, u(a), { backwards: !0 })) d(a, n, r, t, m) || (p ? ua(p, a) : c ? aa(c, a) : ia(l || t, a));
                                else if (ta(n, i(a))) f(a, n, r, t, m) || (c ? aa(c, a) : p ? ua(p, a) : ia(l || t, a));
                                else if (h(a, n, r, t, m));
                                else if (c && p) {
                                    const e = o.length;
                                    e > 0 && o[e - 1].followingNode !== a.followingNode && pa(o, n, r), o.push(a)
                                } else c ? aa(c, a) : p ? ua(p, a) : ia(l || t, a)
                            })), pa(o, n, r), e.forEach((e => { delete e.precedingNode, delete e.enclosingNode, delete e.followingNode }))
                        },
                        printComments: function(e, t, n, r) {
                            const o = e.getValue(),
                                u = t(e),
                                i = o && o.comments;
                            if (!i || 0 === i.length) return ha(e, n, u);
                            const a = [],
                                s = [r ? ";" : "", u];
                            return e.each((e => {
                                const t = e.getValue(),
                                    { leading: r, trailing: o } = t;
                                if (r) {
                                    const r = function(e, t) {
                                        const n = e.getValue(),
                                            r = da(e, t);
                                        if (!r) return "";
                                        if (t.printer.isBlockComment && t.printer.isBlockComment(n)) { const e = ta(t.originalText, t.locEnd(n)) ? ta(t.originalText, t.locStart(n), { backwards: !0 }) ? Xi : Gi : " "; return Hi([r, e]) }
                                        return Hi([r, Xi])
                                    }(e, n);
                                    if (!r) return;
                                    a.push(r);
                                    const o = n.originalText,
                                        u = na(o, ra(o, n.locEnd(t)));
                                    !1 !== u && ta(o, u) && a.push(Xi)
                                } else o && s.push(function(e, t) {
                                    const n = e.getValue(),
                                        r = da(e, t);
                                    if (!r) return "";
                                    const { printer: o, originalText: u, locStart: i } = t, a = o.isBlockComment && o.isBlockComment(n);
                                    if (ta(u, i(n), { backwards: !0 })) { const e = oa(u, n, i); return Qi(Hi([Xi, e ? Xi : "", r])) }
                                    let s = Hi([" ", r]);
                                    return a || (s = Hi([Qi(s), Yi])), s
                                }(e, n))
                            }), "comments"), ha(e, n, Hi(a.concat(s)))
                        },
                        printDanglingComments: function(e, t, n, r) {
                            const o = [],
                                u = e.getValue();
                            return u && u.comments ? (e.each((e => { const n = e.getValue();!n || n.leading || n.trailing || r && !r(n) || o.push(da(e, t)) }), "comments"), 0 === o.length ? "" : n ? Zi(Xi, o) : Ki(Hi([Xi, Zi(Xi, o)]))) : ""
                        },
                        getSortedChildNodes: ca,
                        ensureAllCommentsPrinted: function(e) {
                            e && e.forEach((e => {
                                if (!e.printed) throw new Error('Comment "' + e.value.trim() + '" was not printed. Please report this error!');
                                delete e.printed
                            }))
                        }
                    };

                    function ga(e, t) { const n = Da(e.stack, t); return -1 === n ? null : e.stack[n] }

                    function Da(e, t) { for (let n = e.length - 1; n >= 0; n -= 2) { const r = e[n]; if (r && !Array.isArray(r) && --t < 0) return n } return -1 }
                    var ya = class {
                        constructor(e) { this.stack = [e] }
                        getName() { const { stack: e } = this, { length: t } = e; return t > 1 ? e[t - 2] : null }
                        getValue() { return se(this.stack) }
                        getNode(e = 0) { return ga(this, e) }
                        getParentNode(e = 0) { return ga(this, e + 1) }
                        call(e, ...t) { const { stack: n } = this, { length: r } = n; let o = se(n); for (const e of t) o = o[e], n.push(e, o); const u = e(this); return n.length = r, u }
                        callParent(e, t = 0) {
                            const n = Da(this.stack, t + 1),
                                r = this.stack.splice(n + 1),
                                o = e(this);
                            return this.stack.push(...r), o
                        }
                        each(e, ...t) {
                            const { stack: n } = this, { length: r } = n;
                            let o = se(n);
                            for (const e of t) o = o[e], n.push(e, o);
                            for (let t = 0; t < o.length; ++t) n.push(t, o[t]), e(this, t), n.length -= 2;
                            n.length = r
                        }
                        map(e, ...t) { const n = []; return this.each(((t, r) => { n[r] = e(t, r) }), ...t), n }
                        match(...e) {
                            let t = this.stack.length - 1,
                                n = null,
                                r = this.stack[t--];
                            for (const o of e) {
                                if (void 0 === r) return !1;
                                let e = null;
                                if ("number" == typeof n && (e = n, n = this.stack[t--], r = this.stack[t--]), o && !o(r, n, e)) return !1;
                                n = this.stack[t--], r = this.stack[t--]
                            }
                            return !0
                        }
                    };
                    const { utils: { stripTrailingHardline: Ea } } = cn, { normalize: Ca } = Wi;
                    var ba = function(e, t, n, r) {
                        if (n.printer.embed && "auto" === n.embeddedLanguageFormatting) return n.printer.embed(e, t, ((e, t, o) => function(e, t, n, r, { stripTrailingHardline: o = !1 } = {}) {
                            const u = Ca(Object.assign({}, n, t, { parentParser: n.parser, embeddedInHtml: !(!n.embeddedInHtml && "html" !== n.parser && "vue" !== n.parser && "angular" !== n.parser && "lwc" !== n.parser), originalText: e }), { passThrough: !0 }),
                                i = Mi.parse(e, u),
                                { ast: a } = i;
                            e = i.text;
                            const s = a.comments;
                            delete a.comments, ma.attach(s, a, e, u), u[Symbol.for("comments")] = s || [], u[Symbol.for("tokens")] = a.tokens || [];
                            const c = r(a, u);
                            return ma.ensureAllCommentsPrinted(s), o ? "string" == typeof c ? c.replace(/(?:\r?\n)*$/, "") : Ea(c, !0) : c
                        }(e, t, n, r, o)), n)
                    };
                    const va = cn,
                        Aa = va.builders,
                        { concat: Fa, hardline: xa, addAlignmentToDoc: Sa } = Aa,
                        wa = va.utils;

                    function Ta(e, t, n = 0) {
                        const { printer: r } = t;
                        r.preprocess && (e = r.preprocess(e, t));
                        const o = new Map;
                        let u = function e(n, u) {
                            const i = n.getValue(),
                                a = i && "object" == typeof i && void 0 === u;
                            if (a && o.has(i)) return o.get(i);
                            let s;
                            return s = r.willPrintOwnComments && r.willPrintOwnComments(n, t) ? Ba(n, t, e, u) : ma.printComments(n, (n => Ba(n, t, e, u)), t, u && u.needsSemi), a && o.set(i, s), s
                        }(new ya(e));
                        return n > 0 && (u = Sa(Fa([xa, u]), n, t.tabWidth)), wa.propagateBreaks(u), u
                    }

                    function Ba(e, t, n, r) {
                        zi.ok(e instanceof ya);
                        const o = e.getValue(),
                            { printer: u } = t;
                        if (u.hasPrettierIgnore && u.hasPrettierIgnore(e)) return function(e, t) { const { originalText: n, [Symbol.for("comments")]: r, locStart: o, locEnd: u } = t, i = o(e), a = u(e); for (const e of r) o(e) >= i && u(e) <= a && (e.printed = !0); return n.slice(i, a) }(o, t);
                        if (o) try { const r = ba(e, n, t, Ta); if (r) return r } catch (e) { if (Ie.PRETTIER_DEBUG) throw e }
                        return u.print(e, t, n, r)
                    }
                    var ka = Ta;

                    function Na(e, t, n, r, o = []) { if (!(t < n.locStart(e) || t > n.locEnd(e))) { for (const u of ma.getSortedChildNodes(e, n)) { const i = Na(u, t, n, r, [e, ...o]); if (i) return i } return !r || r(e) ? { node: e, parentNodes: o } : void 0 } }
                    const Pa = new Set(["ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral"]),
                        Oa = new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);

                    function _a(e, t) {
                        if (null == t) return !1;
                        switch (e.parser) {
                            case "flow":
                            case "babel":
                            case "babel-flow":
                            case "babel-ts":
                            case "typescript":
                            case "espree":
                            case "meriyah":
                                return function(e) { return "Directive" === e || "TypeAlias" === e || "TSExportAssignment" === e || e.startsWith("Declare") || e.startsWith("TSDeclare") || e.endsWith("Statement") || e.endsWith("Declaration") }(t.type);
                            case "json":
                                return Pa.has(t.type);
                            case "graphql":
                                return Oa.has(t.kind);
                            case "vue":
                                return "root" !== t.tag
                        }
                        return !1
                    }
                    var La = {
                        calculateRange: function(e, t, n) {
                            const r = e.slice(t.rangeStart, t.rangeEnd),
                                o = Math.max(t.rangeStart + r.search(/\S/), t.rangeStart);
                            let u;
                            for (u = t.rangeEnd; u > t.rangeStart && !/\S/.test(e[u - 1]); --u);
                            const i = Na(n, o, t, (e => _a(t, e))),
                                a = Na(n, u, t, (e => _a(t, e)));
                            if (!i || !a) return { rangeStart: 0, rangeEnd: 0 };
                            const { startNode: s, endNode: c } = function(e, t, n) {
                                let r = e.node,
                                    o = t.node;
                                if (r === o) return { startNode: r, endNode: o };
                                for (const r of t.parentNodes) {
                                    if (!("Program" !== r.type && "File" !== r.type && n.locStart(r) >= n.locStart(e.node))) break;
                                    o = r
                                }
                                for (const o of e.parentNodes) {
                                    if (!("Program" !== o.type && "File" !== o.type && n.locEnd(o) <= n.locEnd(t.node))) break;
                                    r = o
                                }
                                return { startNode: r, endNode: o }
                            }(i, a, t);
                            return { rangeStart: Math.min(t.locStart(s), t.locStart(c)), rangeEnd: Math.max(t.locEnd(s), t.locEnd(c)) }
                        },
                        findNodeAtOffset: Na
                    };
                    const { printer: { printDocToString: Ia }, debug: { printDocToDebug: Ma } } = cn, { getAlignmentSize: ja } = Lt, { guessEndOfLine: Ra, convertEndOfLineToChars: qa, countEndOfLineChars: Va, normalizeEndOfLine: $a } = It, Wa = Wi.normalize, Ua = Symbol("cursor");

                    function Ja(e, t, n) { const r = t.comments; return r && (delete t.comments, ma.attach(r, t, e, n)), n[Symbol.for("comments")] = r || [], n[Symbol.for("tokens")] = t.tokens || [], n.originalText = e, r }

                    function za(e, t, n) {
                        if (!e || !e.trim().length) return { formatted: "", cursorOffset: -1 };
                        n = n || 0;
                        const { ast: r, text: o } = Mi.parse(e, t);
                        if (t.cursorOffset >= 0) {
                            const e = La.findNodeAtOffset(r, t.cursorOffset, t);
                            e && e.node && (t.cursorNode = e.node)
                        }
                        const u = Ja(o, r, t),
                            i = ka(r, t, n),
                            a = Ia(i, t);
                        if (ma.ensureAllCommentsPrinted(u), n > 0) {
                            const e = a.formatted.trim();
                            void 0 !== a.cursorNodeStart && (a.cursorNodeStart -= a.formatted.indexOf(e)), a.formatted = e + qa(t.endOfLine)
                        }
                        if (t.cursorOffset >= 0) {
                            let e, n, r, u, i;
                            if (t.cursorNode && a.cursorNodeText ? (e = t.locStart(t.cursorNode), n = o.slice(e, t.locEnd(t.cursorNode)), r = t.cursorOffset - e, u = a.cursorNodeStart, i = a.cursorNodeText) : (e = 0, n = o, r = t.cursorOffset, u = 0, i = a.formatted), n === i) return { formatted: a.formatted, cursorOffset: u + r };
                            const s = n.split("");
                            s.splice(r, 0, Ua);
                            const c = i.split(""),
                                l = z.diffArrays(s, c);
                            let p = u;
                            for (const e of l)
                                if (e.removed) { if (e.value.includes(Ua)) break } else p += e.count;
                            return { formatted: a.formatted, cursorOffset: p }
                        }
                        return { formatted: a.formatted, cursorOffset: -1 }
                    }

                    function Ha(e, t, n) { return "number" != typeof t || isNaN(t) || t < 0 || t > e.length ? n : t }

                    function Ga(e, t) { let { cursorOffset: n, rangeStart: r, rangeEnd: o } = t; return n = Ha(e, n, -1), r = Ha(e, r, 0), o = Ha(e, o, e.length), Object.assign({}, t, { cursorOffset: n, rangeStart: r, rangeEnd: o }) }

                    function Xa(e, t) {
                        let { cursorOffset: n, rangeStart: r, rangeEnd: o, endOfLine: u } = Ga(e, t);
                        const i = "\ufeff" === e.charAt(0);
                        if (i && (e = e.slice(1), n--, r--, o--), "auto" === u && (u = Ra(e)), e.includes("\r")) {
                            const t = t => Va(e.slice(0, Math.max(t, 0)), "\r\n");
                            n -= t(n), r -= t(r), o -= t(o), e = $a(e)
                        }
                        return { hasBOM: i, text: e, options: Ga(e, Object.assign({}, t, { cursorOffset: n, rangeStart: r, rangeEnd: o, endOfLine: u })) }
                    }

                    function Ya(e, t) {
                        let { hasBOM: n, text: r, options: o } = Xa(e, Wa(t));
                        const u = Mi.resolveParser(o),
                            i = !u.hasPragma || u.hasPragma(r);
                        if (o.requirePragma && !i) return { formatted: e, cursorOffset: t.cursorOffset };
                        let a;
                        return o.rangeStart > 0 || o.rangeEnd < r.length ? a = function(e, t) {
                            const { ast: n, text: r } = Mi.parse(e, t), { rangeStart: o, rangeEnd: u } = La.calculateRange(r, t, n), i = r.slice(o, u), a = Math.min(o, r.lastIndexOf("\n", o) + 1), s = r.slice(a, o).match(/^\s*/)[0], c = ja(s, t.tabWidth), l = za(i, Object.assign({}, t, { rangeStart: 0, rangeEnd: 1 / 0, cursorOffset: t.cursorOffset > o && t.cursorOffset < u ? t.cursorOffset - o : -1, endOfLine: "lf" }), c), p = l.formatted.trimEnd();
                            let { cursorOffset: d } = t;
                            d >= u ? d = t.cursorOffset + (p.length - i.length) : l.cursorOffset >= 0 && (d = l.cursorOffset + o);
                            let f = r.slice(0, o) + p + r.slice(u);
                            if ("lf" !== t.endOfLine) {
                                const e = qa(t.endOfLine);
                                d >= 0 && "\r\n" === e && (d += Va(f.slice(0, d), "\n")), f = f.replace(/\n/g, e)
                            }
                            return { formatted: f, cursorOffset: d }
                        }(r, o) : (!i && o.insertPragma && o.printer.insertPragma && (r = o.printer.insertPragma(r)), a = za(r, o)), n && (a.formatted = "\ufeff" + a.formatted, a.cursorOffset >= 0 && a.cursorOffset++), a
                    }
                    var Ka = { formatWithCursor: Ya, parse(e, t, n) { const { text: r, options: o } = Xa(e, Wa(t)), u = Mi.parse(r, o); return n && (u.ast = Ui(u.ast, o)), u }, formatAST(e, t) { t = Wa(t); const n = ka(e, t); return Ia(n, t) }, formatDoc: (e, t) => Ya(Ma(e), Object.assign({}, t, { parser: "babel" })).formatted, printToDoc(e, t) { t = Wa(t); const { ast: n, text: r } = Mi.parse(e, t); return Ja(r, n, t), ka(n, t) }, printDocToString: (e, t) => Ia(e, Wa(t)) };
                    const { getMaxContinuousCount: Qa, getStringWidth: Za, getAlignmentSize: es, getIndentSize: ts, skip: ns, skipWhitespace: rs, skipSpaces: os, skipNewline: us, skipToLineEnd: is, skipEverythingButNewLine: as, skipInlineComment: ss, skipTrailingComment: cs, hasNewline: ls, hasNewlineInRange: ps, hasSpaces: ds, isNextLineEmpty: fs, isNextLineEmptyAfterIndex: hs, isPreviousLineEmpty: ms, getNextNonSpaceNonCommentCharacterIndex: gs, makeString: Ds, addLeadingComment: ys, addDanglingComment: Es, addTrailingComment: Cs } = Lt;
                    var bs = { getMaxContinuousCount: Qa, getStringWidth: Za, getAlignmentSize: es, getIndentSize: ts, skip: ns, skipWhitespace: rs, skipSpaces: os, skipNewline: us, skipToLineEnd: is, skipEverythingButNewLine: as, skipInlineComment: ss, skipTrailingComment: cs, hasNewline: ls, hasNewlineInRange: ps, hasSpaces: ds, isNextLineEmpty: fs, isNextLineEmptyAfterIndex: hs, isPreviousLineEmpty: ms, getNextNonSpaceNonCommentCharacterIndex: gs, makeString: Ds, addLeadingComment: ys, addDanglingComment: Es, addTrailingComment: Cs },
                        vs = function(t, n) { const { languageId: r } = t, o = e(t, ["languageId"]); return Object.assign({ linguistLanguageId: r }, o, n(t)) },
                        As = Me((function(e) {
                            ! function() {
                                function t(e) {
                                    if (null == e) return !1;
                                    switch (e.type) {
                                        case "BlockStatement":
                                        case "BreakStatement":
                                        case "ContinueStatement":
                                        case "DebuggerStatement":
                                        case "DoWhileStatement":
                                        case "EmptyStatement":
                                        case "ExpressionStatement":
                                        case "ForInStatement":
                                        case "ForStatement":
                                        case "IfStatement":
                                        case "LabeledStatement":
                                        case "ReturnStatement":
                                        case "SwitchStatement":
                                        case "ThrowStatement":
                                        case "TryStatement":
                                        case "VariableDeclaration":
                                        case "WhileStatement":
                                        case "WithStatement":
                                            return !0
                                    }
                                    return !1
                                }

                                function n(e) {
                                    switch (e.type) {
                                        case "IfStatement":
                                            return null != e.alternate ? e.alternate : e.consequent;
                                        case "LabeledStatement":
                                        case "ForStatement":
                                        case "ForInStatement":
                                        case "WhileStatement":
                                        case "WithStatement":
                                            return e.body
                                    }
                                    return null
                                }
                                e.exports = {
                                    isExpression: function(e) {
                                        if (null == e) return !1;
                                        switch (e.type) {
                                            case "ArrayExpression":
                                            case "AssignmentExpression":
                                            case "BinaryExpression":
                                            case "CallExpression":
                                            case "ConditionalExpression":
                                            case "FunctionExpression":
                                            case "Identifier":
                                            case "Literal":
                                            case "LogicalExpression":
                                            case "MemberExpression":
                                            case "NewExpression":
                                            case "ObjectExpression":
                                            case "SequenceExpression":
                                            case "ThisExpression":
                                            case "UnaryExpression":
                                            case "UpdateExpression":
                                                return !0
                                        }
                                        return !1
                                    },
                                    isStatement: t,
                                    isIterationStatement: function(e) {
                                        if (null == e) return !1;
                                        switch (e.type) {
                                            case "DoWhileStatement":
                                            case "ForInStatement":
                                            case "ForStatement":
                                            case "WhileStatement":
                                                return !0
                                        }
                                        return !1
                                    },
                                    isSourceElement: function(e) { return t(e) || null != e && "FunctionDeclaration" === e.type },
                                    isProblematicIfStatement: function(e) {
                                        var t;
                                        if ("IfStatement" !== e.type) return !1;
                                        if (null == e.alternate) return !1;
                                        t = e.consequent;
                                        do {
                                            if ("IfStatement" === t.type && null == t.alternate) return !0;
                                            t = n(t)
                                        } while (t);
                                        return !1
                                    },
                                    trailingStatement: n
                                }
                            }()
                        })),
                        Fs = Me((function(e) {
                            ! function() {
                                var t, n, r, o, u, i;

                                function a(e) { return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(Math.floor((e - 65536) / 1024) + 55296) + String.fromCharCode((e - 65536) % 1024 + 56320) }
                                for (n = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/, NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/ }, t = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/ }, r = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279], o = new Array(128), i = 0; i < 128; ++i) o[i] = i >= 97 && i <= 122 || i >= 65 && i <= 90 || 36 === i || 95 === i;
                                for (u = new Array(128), i = 0; i < 128; ++i) u[i] = i >= 97 && i <= 122 || i >= 65 && i <= 90 || i >= 48 && i <= 57 || 36 === i || 95 === i;
                                e.exports = { isDecimalDigit: function(e) { return 48 <= e && e <= 57 }, isHexDigit: function(e) { return 48 <= e && e <= 57 || 97 <= e && e <= 102 || 65 <= e && e <= 70 }, isOctalDigit: function(e) { return e >= 48 && e <= 55 }, isWhiteSpace: function(e) { return 32 === e || 9 === e || 11 === e || 12 === e || 160 === e || e >= 5760 && r.indexOf(e) >= 0 }, isLineTerminator: function(e) { return 10 === e || 13 === e || 8232 === e || 8233 === e }, isIdentifierStartES5: function(e) { return e < 128 ? o[e] : n.NonAsciiIdentifierStart.test(a(e)) }, isIdentifierPartES5: function(e) { return e < 128 ? u[e] : n.NonAsciiIdentifierPart.test(a(e)) }, isIdentifierStartES6: function(e) { return e < 128 ? o[e] : t.NonAsciiIdentifierStart.test(a(e)) }, isIdentifierPartES6: function(e) { return e < 128 ? u[e] : t.NonAsciiIdentifierPart.test(a(e)) } }
                            }()
                        })),
                        xs = Me((function(e) {
                            ! function() {
                                var t = Fs;

                                function n(e, t) { return !(!t && "yield" === e) && r(e, t) }

                                function r(e, t) {
                                    if (t && function(e) {
                                            switch (e) {
                                                case "implements":
                                                case "interface":
                                                case "package":
                                                case "private":
                                                case "protected":
                                                case "public":
                                                case "static":
                                                case "let":
                                                    return !0;
                                                default:
                                                    return !1
                                            }
                                        }(e)) return !0;
                                    switch (e.length) {
                                        case 2:
                                            return "if" === e || "in" === e || "do" === e;
                                        case 3:
                                            return "var" === e || "for" === e || "new" === e || "try" === e;
                                        case 4:
                                            return "this" === e || "else" === e || "case" === e || "void" === e || "with" === e || "enum" === e;
                                        case 5:
                                            return "while" === e || "break" === e || "catch" === e || "throw" === e || "const" === e || "yield" === e || "class" === e || "super" === e;
                                        case 6:
                                            return "return" === e || "typeof" === e || "delete" === e || "switch" === e || "export" === e || "import" === e;
                                        case 7:
                                            return "default" === e || "finally" === e || "extends" === e;
                                        case 8:
                                            return "function" === e || "continue" === e || "debugger" === e;
                                        case 10:
                                            return "instanceof" === e;
                                        default:
                                            return !1
                                    }
                                }

                                function o(e, t) { return "null" === e || "true" === e || "false" === e || n(e, t) }

                                function u(e, t) { return "null" === e || "true" === e || "false" === e || r(e, t) }

                                function i(e) {
                                    var n, r, o;
                                    if (0 === e.length) return !1;
                                    if (o = e.charCodeAt(0), !t.isIdentifierStartES5(o)) return !1;
                                    for (n = 1, r = e.length; n < r; ++n)
                                        if (o = e.charCodeAt(n), !t.isIdentifierPartES5(o)) return !1;
                                    return !0
                                }

                                function a(e) {
                                    var n, r, o, u, i;
                                    if (0 === e.length) return !1;
                                    for (i = t.isIdentifierStartES6, n = 0, r = e.length; n < r; ++n) {
                                        if (55296 <= (o = e.charCodeAt(n)) && o <= 56319) {
                                            if (++n >= r) return !1;
                                            if (!(56320 <= (u = e.charCodeAt(n)) && u <= 57343)) return !1;
                                            o = 1024 * (o - 55296) + (u - 56320) + 65536
                                        }
                                        if (!i(o)) return !1;
                                        i = t.isIdentifierPartES6
                                    }
                                    return !0
                                }
                                e.exports = { isKeywordES5: n, isKeywordES6: r, isReservedWordES5: o, isReservedWordES6: u, isRestrictedWord: function(e) { return "eval" === e || "arguments" === e }, isIdentifierNameES5: i, isIdentifierNameES6: a, isIdentifierES5: function(e, t) { return i(e) && !o(e, t) }, isIdentifierES6: function(e, t) { return a(e) && !u(e, t) } }
                            }()
                        }));
                    const Ss = Me((function(e, t) { t.ast = As, t.code = Fs, t.keyword = xs })).keyword.isIdentifierNameES5,
                        { getLast: ws, hasNewline: Ts, hasNewlineInRange: Bs, skipWhitespace: ks } = Lt,
                        { locStart: Ns, locEnd: Ps, hasSameLocStart: Os } = Qu,
                        _s = "(?:(?=.)\\s)",
                        Ls = new RegExp("^".concat(_s, "*:")),
                        Is = new RegExp("^".concat(_s, "*::"));

                    function Ms(e, t) { if (!e || "object" != typeof e) return !1; if (Array.isArray(e)) return e.some((e => Ms(e, t))); const n = t(e); return "boolean" == typeof n ? n : Object.keys(e).some((n => Ms(e[n], t))) }

                    function js(e) { return "AssignmentExpression" === e.type || "BinaryExpression" === e.type || "LogicalExpression" === e.type || "NGPipeExpression" === e.type || "ConditionalExpression" === e.type || "CallExpression" === e.type || "OptionalCallExpression" === e.type || "MemberExpression" === e.type || "OptionalMemberExpression" === e.type || "SequenceExpression" === e.type || "TaggedTemplateExpression" === e.type || "BindExpression" === e.type || "UpdateExpression" === e.type && !e.prefix || "TSAsExpression" === e.type || "TSNonNullExpression" === e.type }

                    function Rs(e) { return "Block" === e.type || "CommentBlock" === e.type || "MultiLine" === e.type }
                    const qs = new Set(["ExportDefaultDeclaration", "ExportDefaultSpecifier", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration"]);

                    function Vs(e) { return e && qs.has(e.type) }

                    function $s(e) { return "BooleanLiteral" === e.type || "DirectiveLiteral" === e.type || "Literal" === e.type || "NullLiteral" === e.type || "NumericLiteral" === e.type || "BigIntLiteral" === e.type || "DecimalLiteral" === e.type || "RegExpLiteral" === e.type || "StringLiteral" === e.type || "TemplateLiteral" === e.type || "TSTypeLiteral" === e.type || "JSXText" === e.type }

                    function Ws(e) { return "NumericLiteral" === e.type || "Literal" === e.type && "number" == typeof e.value }

                    function Us(e) { return "StringLiteral" === e.type || "Literal" === e.type && "string" == typeof e.value }

                    function Js(e) { return "FunctionExpression" === e.type || "ArrowFunctionExpression" === e.type }

                    function zs(e) { return !("CallExpression" !== e.type && "OptionalCallExpression" !== e.type || "Identifier" !== e.callee.type || "async" !== e.callee.name && "inject" !== e.callee.name && "fakeAsync" !== e.callee.name) }

                    function Hs(e) { return "JSXElement" === e.type || "JSXFragment" === e.type }

                    function Gs(e) { return "get" === e.kind || "set" === e.kind }

                    function Xs(e) { return Gs(e) || Os(e, e.value) }
                    const Ys = new Set(["BinaryExpression", "LogicalExpression", "NGPipeExpression"]),
                        Ks = new Set(["AnyTypeAnnotation", "TSAnyKeyword", "NullLiteralTypeAnnotation", "TSNullKeyword", "ThisTypeAnnotation", "TSThisType", "NumberTypeAnnotation", "TSNumberKeyword", "VoidTypeAnnotation", "TSVoidKeyword", "BooleanTypeAnnotation", "TSBooleanKeyword", "BigIntTypeAnnotation", "TSBigIntKeyword", "SymbolTypeAnnotation", "TSSymbolKeyword", "StringTypeAnnotation", "TSStringKeyword", "BooleanLiteralTypeAnnotation", "StringLiteralTypeAnnotation", "BigIntLiteralTypeAnnotation", "NumberLiteralTypeAnnotation", "TSLiteralType", "TSTemplateLiteralType", "EmptyTypeAnnotation", "MixedTypeAnnotation", "TSNeverKeyword", "TSObjectKeyword", "TSUndefinedKeyword", "TSUnknownKeyword"]),
                        Qs = /^(skip|[fx]?(it|describe|test))$/;

                    function Zs(e) { return "CallExpression" === e.type || "OptionalCallExpression" === e.type }
                    const ec = new RegExp("([ \n\r\t]+)"),
                        tc = new RegExp("[^ \n\r\t]");

                    function nc(e) { return $s(e) && (tc.test(ic(e)) || !/\n/.test(ic(e))) }

                    function rc(e, t) { return Hs(t) ? gc(t) : t.comments && t.comments.some((t => t.leading && Ts(e, Ps(t)))) }

                    function oc(e) { return /^(\d+|\d+\.\d+)$/.test(e) }

                    function uc(e) { return e.quasis.some((e => e.value.raw.includes("\n"))) }

                    function ic(e) { return e.extra ? e.extra.raw : e.raw }
                    const ac = { "==": !0, "!=": !0, "===": !0, "!==": !0 },
                        sc = { "*": !0, "/": !0, "%": !0 },
                        cc = { ">>": !0, ">>>": !0, "<<": !0 },
                        lc = {};

                    function pc(e) { return lc[e] }[
                        ["|>"],
                        ["??"],
                        ["||"],
                        ["&&"],
                        ["|"],
                        ["^"],
                        ["&"],
                        ["==", "===", "!=", "!=="],
                        ["<", ">", "<=", ">=", "in", "instanceof"],
                        [">>", "<<", ">>>"],
                        ["+", "-"],
                        ["*", "/", "%"],
                        ["**"]
                    ].forEach(((e, t) => { e.forEach((e => { lc[e] = t })) }));
                    const dc = new WeakMap;

                    function fc(e) { if (dc.has(e)) return dc.get(e); const t = []; return e.this && t.push(e.this), Array.isArray(e.parameters) ? t.push(...e.parameters) : Array.isArray(e.params) && t.push(...e.params), e.rest && t.push(e.rest), dc.set(e, t), t }
                    const hc = new WeakMap;

                    function mc(e) { return "prettier-ignore" === e.value.trim() }

                    function gc(e) { return e && (e.comments && e.comments.length > 0 && e.comments.some((e => mc(e) && !e.unignore)) || e.prettierIgnore) }

                    function Dc(e) { return gc(e.getValue()) }
                    var yc = {
                        classChildNeedsASIProtection: function(e) {
                            if (e) {
                                if (e.static || e.accessibility) return !1;
                                if (!e.computed) { const t = e.key && e.key.name; if ("in" === t || "instanceof" === t) return !0 }
                                switch (e.type) {
                                    case "ClassProperty":
                                    case "FieldDefinition":
                                    case "TSAbstractClassProperty":
                                        return e.computed;
                                    case "MethodDefinition":
                                    case "TSAbstractMethodDefinition":
                                    case "ClassMethod":
                                    case "ClassPrivateMethod":
                                        {
                                            const t = e.value ? e.value.async : e.async,
                                                n = e.value ? e.value.generator : e.generator;
                                            return !(t || "get" === e.kind || "set" === e.kind || !e.computed && !n)
                                        }
                                    case "TSIndexSignature":
                                        return !0;
                                    default:
                                        return !1
                                }
                            }
                        },
                        classPropMayCauseASIProblems: function(e) { const t = e.getNode(); if ("ClassProperty" !== t.type && "FieldDefinition" !== t.type) return !1; const n = t.key && t.key.name; return !("static" !== n && "get" !== n && "set" !== n || t.value || t.typeAnnotation) || void 0 },
                        getFunctionParameters: fc,
                        iterateFunctionParametersPath: function(e, t) {
                            const n = e.getValue();
                            let r = 0;
                            const o = e => t(e, r++);
                            n.this && e.call(o, "this"), Array.isArray(n.parameters) ? e.each(o, "parameters") : Array.isArray(n.params) && e.each(o, "params"), n.rest && e.call(o, "rest")
                        },
                        getCallArguments: function(e) { if (hc.has(e)) return hc.get(e); const t = "ImportExpression" === e.type ? [e.source] : e.arguments; return hc.set(e, t), t },
                        iterateCallArgumentsPath: function(e, t) { "ImportExpression" === e.getValue().type ? e.call((e => t(e, 0)), "source") : e.each(t, "arguments") },
                        hasRestParameter: function(e) { if (e.rest) return !0; const t = fc(e); return t.length > 0 && "RestElement" === ws(t).type },
                        getLeftSidePathName: function(e, t) { if (t.expressions) return ["expressions", 0]; if (t.left) return ["left"]; if (t.test) return ["test"]; if (t.object) return ["object"]; if (t.callee) return ["callee"]; if (t.tag) return ["tag"]; if (t.argument) return ["argument"]; if (t.expression) return ["expression"]; throw new Error("Unexpected node has no left side.") },
                        getParentExportDeclaration: function(e) { const t = e.getParentNode(); return "declaration" === e.getName() && Vs(t) ? t : null },
                        getTypeScriptMappedTypeModifier: function(e, t) { return "+" === e ? "+" + t : "-" === e ? "-" + t : t },
                        hasDanglingComments: function(e) { return e.comments && e.comments.some((e => !e.leading && !e.trailing)) },
                        hasFlowAnnotationComment: function(e) { return e && Rs(e[0]) && Is.test(e[0].value) },
                        hasFlowShorthandAnnotationComment: function(e) { return e.extra && e.extra.parenthesized && e.trailingComments && Rs(e.trailingComments[0]) && Ls.test(e.trailingComments[0].value) },
                        hasLeadingComment: function(e) { return e.comments && e.comments.some((e => e.leading)) },
                        hasLeadingOwnLineComment: rc,
                        hasNakedLeftSide: js,
                        hasNewlineBetweenOrAfterDecorators: function(e, t) { return Bs(t.originalText, Ns(e.decorators[0]), Ps(ws(e.decorators))) || Ts(t.originalText, Ps(ws(e.decorators))) },
                        hasNgSideEffect: function(e) {
                            return Ms(e.getValue(), (e => {
                                switch (e.type) {
                                    case void 0:
                                        return !1;
                                    case "CallExpression":
                                    case "OptionalCallExpression":
                                    case "AssignmentExpression":
                                        return !0
                                }
                            }))
                        },
                        hasNode: Ms,
                        hasPrettierIgnore: function(e) {
                            return Dc(e) || function(e) {
                                const t = e.getValue(),
                                    n = e.getParentNode();
                                if (!(n && t && Hs(t) && Hs(n))) return !1;
                                let r = null;
                                for (let e = n.children.indexOf(t); e > 0; e--) { const t = n.children[e - 1]; if ("JSXText" !== t.type || nc(t)) { r = t; break } }
                                return r && "JSXExpressionContainer" === r.type && "JSXEmptyExpression" === r.expression.type && r.expression.comments && r.expression.comments.some((e => mc(e)))
                            }(e)
                        },
                        hasTrailingComment: function(e) { return e.comments && e.comments.some((e => e.trailing)) },
                        hasTrailingLineComment: function(e) { return e.comments && e.comments.some((e => e.trailing && !Rs(e))) },
                        hasIgnoreComment: Dc,
                        hasNodeIgnoreComment: gc,
                        identity: function(e) { return e },
                        isBinaryish: function(e) { return Ys.has(e.type) },
                        isBlockComment: Rs,
                        isLineComment: function(e) { return "Line" === e.type || "CommentLine" === e.type || "SingleLine" === e.type || "HashbangComment" === e.type || "HTMLOpen" === e.type || "HTMLClose" === e.type },
                        isPrettierIgnoreComment: mc,
                        isCallOrOptionalCallExpression: Zs,
                        isEmptyJSXElement: function(e) { if (0 === e.children.length) return !0; if (e.children.length > 1) return !1; const t = e.children[0]; return $s(t) && !nc(t) },
                        isExportDeclaration: Vs,
                        isFlowAnnotationComment: function(e, t) {
                            const n = Ns(t),
                                r = ks(e, Ps(t));
                            return !1 !== r && "/*" === e.slice(n, n + 2) && "*/" === e.slice(r, r + 2)
                        },
                        isFunctionCompositionArgs: function(e) {
                            if (e.length <= 1) return !1;
                            let t = 0;
                            for (const n of e)
                                if (Js(n)) { if (t += 1, t > 1) return !0 } else if (Zs(n))
                                for (const e of n.arguments)
                                    if (Js(e)) return !0;
                            return !1
                        },
                        isFunctionNotation: Xs,
                        isFunctionOrArrowExpression: Js,
                        isGetterOrSetter: Gs,
                        isJestEachTemplateLiteral: function(e, t) { const n = /^[fx]?(describe|it|test)$/; return "TaggedTemplateExpression" === t.type && t.quasi === e && "MemberExpression" === t.tag.type && "Identifier" === t.tag.property.type && "each" === t.tag.property.name && ("Identifier" === t.tag.object.type && n.test(t.tag.object.name) || "MemberExpression" === t.tag.object.type && "Identifier" === t.tag.object.property.type && ("only" === t.tag.object.property.name || "skip" === t.tag.object.property.name) && "Identifier" === t.tag.object.object.type && n.test(t.tag.object.object.name)) },
                        isJSXNode: Hs,
                        isJSXWhitespaceExpression: function(e) { return "JSXExpressionContainer" === e.type && $s(e.expression) && " " === e.expression.value && !e.expression.comments },
                        isLastStatement: function(e) {
                            const t = e.getParentNode();
                            if (!t) return !0;
                            const n = e.getValue(),
                                r = (t.body || t.consequent).filter((e => "EmptyStatement" !== e.type));
                            return r[r.length - 1] === n
                        },
                        isLiteral: $s,
                        isLongCurriedCallExpression: function(e) {
                            const t = e.getValue(),
                                n = e.getParentNode();
                            return Zs(t) && Zs(n) && n.callee === t && t.arguments.length > n.arguments.length && n.arguments.length > 0
                        },
                        isSimpleCallArgument: function e(t, n) {
                            if (n >= 2) return !1;
                            const r = t => e(t, n + 1),
                                o = "Literal" === t.type && "regex" in t && t.regex.pattern || "RegExpLiteral" === t.type && t.pattern;
                            return !(o && o.length > 5) && ("Literal" === t.type || "BigIntLiteral" === t.type || "DecimalLiteral" === t.type || "BooleanLiteral" === t.type || "NullLiteral" === t.type || "NumericLiteral" === t.type || "RegExpLiteral" === t.type || "StringLiteral" === t.type || "Identifier" === t.type || "ThisExpression" === t.type || "Super" === t.type || "PrivateName" === t.type || "ArgumentPlaceholder" === t.type || "Import" === t.type || ("TemplateLiteral" === t.type ? t.expressions.every(r) : "ObjectExpression" === t.type ? t.properties.every((e => !e.computed && (e.shorthand || e.value && r(e.value)))) : "ArrayExpression" === t.type ? t.elements.every((e => null === e || r(e))) : "ImportExpression" === t.type ? r(t.source) : "CallExpression" === t.type || "OptionalCallExpression" === t.type || "NewExpression" === t.type ? e(t.callee, n) && t.arguments.every(r) : "MemberExpression" === t.type || "OptionalMemberExpression" === t.type ? e(t.object, n) && e(t.property, n) : "UnaryExpression" !== t.type || "!" !== t.operator && "-" !== t.operator ? "TSNonNullExpression" === t.type && e(t.expression, n) : e(t.argument, n)))
                        },
                        isMeaningfulJSXText: nc,
                        isMemberExpressionChain: function e(t) { return ("MemberExpression" === t.type || "OptionalMemberExpression" === t.type) && ("Identifier" === t.object.type || e(t.object)) },
                        isMemberish: function(e) { return "MemberExpression" === e.type || "OptionalMemberExpression" === e.type || "BindExpression" === e.type && Boolean(e.object) },
                        isNgForOf: function(e, t, n) { return "NGMicrosyntaxKeyedExpression" === e.type && "of" === e.key.name && 1 === t && "NGMicrosyntaxLet" === n.body[0].type && null === n.body[0].value },
                        isNumericLiteral: Ws,
                        isObjectType: function(e) { return "ObjectTypeAnnotation" === e.type || "TSTypeLiteral" === e.type },
                        isObjectTypePropertyAFunction: function(e) { return !("ObjectTypeProperty" !== e.type && "ObjectTypeInternalSlot" !== e.type || "FunctionTypeAnnotation" !== e.value.type || e.static || Xs(e)) },
                        isSimpleType: function(e) { return !(!e || ("GenericTypeAnnotation" !== e.type && "TSTypeReference" !== e.type || e.typeParameters) && !Ks.has(e.type)) },
                        isSimpleNumber: oc,
                        isSimpleTemplateLiteral: function(e) {
                            let t = "expressions";
                            "TSTemplateLiteralType" === e.type && (t = "types");
                            const n = e[t];
                            return 0 !== n.length && n.every((e => {
                                if (e.comments) return !1;
                                if ("Identifier" === e.type || "ThisExpression" === e.type) return !0;
                                if ("MemberExpression" === e.type || "OptionalMemberExpression" === e.type) {
                                    let t = e;
                                    for (;
                                        "MemberExpression" === t.type || "OptionalMemberExpression" === t.type;) { if ("Identifier" !== t.property.type && "Literal" !== t.property.type && "StringLiteral" !== t.property.type && "NumericLiteral" !== t.property.type) return !1; if (t = t.object, t.comments) return !1 }
                                    return "Identifier" === t.type || "ThisExpression" === t.type
                                }
                                return !1
                            }))
                        },
                        isStringLiteral: Us,
                        isStringPropSafeToUnquote: function(e, t) { return "json" !== t.parser && Us(e.key) && ic(e.key).slice(1, -1) === e.key.value && (Ss(e.key.value) && !(("typescript" === t.parser || "babel-ts" === t.parser) && "ClassProperty" === e.type) || oc(e.key.value) && String(Number(e.key.value)) === e.key.value && ("babel" === t.parser || "espree" === t.parser || "meriyah" === t.parser)) },
                        isTemplateOnItsOwnLine: function(e, t) { return ("TemplateLiteral" === e.type && uc(e) || "TaggedTemplateExpression" === e.type && uc(e.quasi)) && !Ts(t, Ns(e), { backwards: !0 }) },
                        isTestCall: function e(t, n) { if ("CallExpression" !== t.type) return !1; if (1 === t.arguments.length) { if (zs(t) && n && e(n)) return Js(t.arguments[0]); if ("Identifier" === (r = t).callee.type && /^(before|after)(Each|All)$/.test(r.callee.name) && 1 === r.arguments.length) return zs(t.arguments[0]) } else if ((2 === t.arguments.length || 3 === t.arguments.length) && ("Identifier" === t.callee.type && Qs.test(t.callee.name) || function(e) { return ("MemberExpression" === e.callee.type || "OptionalMemberExpression" === e.callee.type) && "Identifier" === e.callee.object.type && "Identifier" === e.callee.property.type && Qs.test(e.callee.object.name) && ("only" === e.callee.property.name || "skip" === e.callee.property.name) }(t)) && (function(e) { return "TemplateLiteral" === e.type }(t.arguments[0]) || Us(t.arguments[0]))) return !(t.arguments[2] && !Ws(t.arguments[2])) && ((2 === t.arguments.length ? Js(t.arguments[1]) : function(e) { return "FunctionExpression" === e.type || "ArrowFunctionExpression" === e.type && "BlockStatement" === e.body.type }(t.arguments[1]) && fc(t.arguments[1]).length <= 1) || zs(t.arguments[1])); var r; return !1 },
                        isTheOnlyJSXElementInMarkdown: function(e, t) { if ("markdown" !== e.parentParser && "mdx" !== e.parentParser) return !1; const n = t.getNode(); if (!n.expression || !Hs(n.expression)) return !1; const r = t.getParentNode(); return "Program" === r.type && 1 === r.body.length },
                        isTSXFile: function(e) { return e.filepath && /\.tsx$/i.test(e.filepath) },
                        isTypeAnnotationAFunction: function(e) { return !("TypeAnnotation" !== e.type && "TSTypeAnnotation" !== e.type || "FunctionTypeAnnotation" !== e.typeAnnotation.type || e.static || Os(e, e.typeAnnotation)) },
                        matchJsxWhitespaceRegex: ec,
                        needsHardlineAfterDanglingComment: function(e) { if (!e.comments) return !1; const t = ws(e.comments.filter((e => !e.leading && !e.trailing))); return t && !Rs(t) },
                        rawText: ic,
                        returnArgumentHasLeadingComment: function(e, t) {
                            if (rc(e.originalText, t)) return !0;
                            if (js(t)) {
                                let r, o = t;
                                for (; r = (n = o).expressions ? n.expressions[0] : n.left || n.test || n.callee || n.object || n.tag || n.argument || n.expression;)
                                    if (o = r, rc(e.originalText, o)) return !0
                            }
                            var n;
                            return !1
                        },
                        shouldPrintComma: function(e, t = "es5") { return "es5" === e.trailingComma && "es5" === t || "all" === e.trailingComma && ("all" === t || "es5" === t) },
                        isBitwiseOperator: function(e) { return !!cc[e] || "|" === e || "^" === e || "&" === e },
                        shouldFlatten: function(e, t) { return !(pc(t) !== pc(e) || "**" === e || ac[e] && ac[t] || "%" === t && sc[e] || "%" === e && sc[t] || t !== e && sc[t] && sc[e] || cc[e] && cc[t]) },
                        startsWithNoLookaheadToken: function e(t, n) {
                            switch ((t = function(e) { for (; e.left;) e = e.left; return e }(t)).type) {
                                case "FunctionExpression":
                                case "ClassExpression":
                                case "DoExpression":
                                    return n;
                                case "ObjectExpression":
                                    return !0;
                                case "MemberExpression":
                                case "OptionalMemberExpression":
                                    return e(t.object, n);
                                case "TaggedTemplateExpression":
                                    return "FunctionExpression" !== t.tag.type && e(t.tag, n);
                                case "CallExpression":
                                case "OptionalCallExpression":
                                    return "FunctionExpression" !== t.callee.type && e(t.callee, n);
                                case "ConditionalExpression":
                                    return e(t.test, n);
                                case "UpdateExpression":
                                    return !t.prefix && e(t.argument, n);
                                case "BindExpression":
                                    return t.object && e(t.object, n);
                                case "SequenceExpression":
                                    return e(t.expressions[0], n);
                                case "TSAsExpression":
                                    return e(t.expression, n);
                                default:
                                    return !1
                            }
                        },
                        getPrecedence: pc
                    };
                    const { getLast: Ec, hasNewline: Cc, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: bc, getNextNonSpaceNonCommentCharacter: vc, hasNewlineInRange: Ac, addLeadingComment: Fc, addTrailingComment: xc, addDanglingComment: Sc, getNextNonSpaceNonCommentCharacterIndex: wc } = Lt, { isBlockComment: Tc, getFunctionParameters: Bc, isPrettierIgnoreComment: kc, isJSXNode: Nc, hasFlowShorthandAnnotationComment: Pc, hasFlowAnnotationComment: Oc, hasIgnoreComment: _c } = yc, { locStart: Lc, locEnd: Ic } = Qu;

                    function Mc(e, t) {
                        const n = (e.body || e.properties).find((({ type: e }) => "EmptyStatement" !== e));
                        n ? Fc(n, t) : Sc(e, t)
                    }

                    function jc(e, t) { "BlockStatement" === e.type ? Mc(e, t) : Fc(e, t) }

                    function Rc(e, t) { const { precedingNode: n, enclosingNode: r, followingNode: o } = e; return !(!r || "IfStatement" !== r.type || !o || (")" === vc(t, e, Ic) ? (xc(n, e), 0) : n === r.consequent && o === r.alternate ? ("BlockStatement" === n.type ? xc(n, e) : Sc(r, e), 0) : "BlockStatement" === o.type ? (Mc(o, e), 0) : "IfStatement" === o.type ? (jc(o.consequent, e), 0) : r.consequent !== o || (Fc(o, e), 0))) }

                    function qc(e, t) { const { precedingNode: n, enclosingNode: r, followingNode: o } = e; return !(!r || "WhileStatement" !== r.type || !o || (")" === vc(t, e, Ic) ? (xc(n, e), 0) : "BlockStatement" === o.type ? (Mc(o, e), 0) : r.body !== o || (Fc(o, e), 0))) }

                    function Vc(e) { const { precedingNode: t, enclosingNode: n, followingNode: r } = e; return !(!n || "TryStatement" !== n.type && "CatchClause" !== n.type || !r || ("CatchClause" === n.type && t ? (xc(t, e), 0) : "BlockStatement" === r.type ? (Mc(r, e), 0) : "TryStatement" === r.type ? (jc(r.finalizer, e), 0) : "CatchClause" !== r.type || (jc(r.body, e), 0))) }

                    function $c(e) {
                        const { precedingNode: t, enclosingNode: n, followingNode: r } = e;
                        if (n && ("ClassDeclaration" === n.type || "ClassExpression" === n.type || "DeclareClass" === n.type || "DeclareInterface" === n.type || "InterfaceDeclaration" === n.type || "TSInterfaceDeclaration" === n.type)) {
                            if (n.decorators && n.decorators.length > 0 && (!r || "Decorator" !== r.type)) return xc(n.decorators[n.decorators.length - 1], e), !0;
                            if (n.body && r === n.body) return Mc(n.body, e), !0;
                            if (r)
                                for (const o of["implements", "extends", "mixins"])
                                    if (n[o] && r === n[o][0]) return !t || t !== n.id && t !== n.typeParameters && t !== n.superClass ? Sc(n, e, o) : xc(t, e), !0
                        }
                        return !1
                    }

                    function Wc(e, t) { const { precedingNode: n, enclosingNode: r } = e; return (r && n && ("Property" === r.type || "TSDeclareMethod" === r.type || "TSAbstractMethodDefinition" === r.type) && "Identifier" === n.type && r.key === n && ":" !== vc(t, n, Ic) || !(!n || !r || "Decorator" !== n.type || "ClassMethod" !== r.type && "ClassProperty" !== r.type && "FieldDefinition" !== r.type && "TSAbstractClassProperty" !== r.type && "TSAbstractMethodDefinition" !== r.type && "TSDeclareMethod" !== r.type && "MethodDefinition" !== r.type)) && (xc(n, e), !0) }

                    function Uc(e, t) { const { precedingNode: n, enclosingNode: r, followingNode: o } = e; if (n && "FunctionTypeParam" === n.type && r && "FunctionTypeAnnotation" === r.type && o && "FunctionTypeParam" !== o.type) return xc(n, e), !0; if (n && ("Identifier" === n.type || "AssignmentPattern" === n.type) && r && Xc(r) && ")" === vc(t, e, Ic)) return xc(n, e), !0; if (r && "FunctionDeclaration" === r.type && o && "BlockStatement" === o.type) { const n = (() => { const e = Bc(r); if (0 !== e.length) return bc(t, Ic(Ec(e))); const n = bc(t, Ic(r.id)); return !1 !== n && bc(t, n + 1) })(); if (Lc(e) > n) return Mc(o, e), !0 } return !1 }

                    function Jc(e) { const { enclosingNode: t } = e; return !(!t || "ImportSpecifier" !== t.type || (Fc(t, e), 0)) }

                    function zc(e) { const { enclosingNode: t } = e; return !(!t || "LabeledStatement" !== t.type || (Fc(t, e), 0)) }

                    function Hc(e, t, n) { const { enclosingNode: r } = e; return t && t.body && 0 === t.body.length ? (n ? Sc(t, e) : Fc(t, e), !0) : !(!r || "Program" !== r.type || 0 !== r.body.length || !r.directives || 0 !== r.directives.length || (n ? Sc(r, e) : Fc(r, e), 0)) }

                    function Gc(e) { const { enclosingNode: t, followingNode: n } = e; if (kc(e) && t && "TSMappedType" === t.type && n && "TSTypeParameter" === n.type && n.constraint) return t.prettierIgnore = !0, e.unignore = !0, !0 }

                    function Xc(e) { return "ArrowFunctionExpression" === e.type || "FunctionExpression" === e.type || "FunctionDeclaration" === e.type || "ObjectMethod" === e.type || "ClassMethod" === e.type || "TSDeclareFunction" === e.type || "TSCallSignatureDeclaration" === e.type || "TSConstructSignatureDeclaration" === e.type || "TSMethodSignature" === e.type || "TSConstructorType" === e.type || "TSFunctionType" === e.type || "TSDeclareMethod" === e.type }

                    function Yc(e) { return Tc(e) && "*" === e.value[0] && /@type\b/.test(e.value) }
                    var Kc = {
                        handleOwnLineComment: function(e, t, n, r, o) { return Gc(e) || Uc(e, t) || function(e) { const { enclosingNode: t, followingNode: n } = e; return !(!t || "MemberExpression" !== t.type && "OptionalMemberExpression" !== t.type || !n || "Identifier" !== n.type || (Fc(t, e), 0)) }(e) || Rc(e, t) || qc(e, t) || Vc(e) || $c(e) || Jc(e) || function(e) { const { enclosingNode: t } = e; return !(!t || "ForInStatement" !== t.type && "ForOfStatement" !== t.type || (Fc(t, e), 0)) }(e) || function(e) { const { precedingNode: t, enclosingNode: n, followingNode: r } = e; return !n || "UnionTypeAnnotation" !== n.type && "TSUnionType" !== n.type ? (r && ("UnionTypeAnnotation" === r.type || "TSUnionType" === r.type) && kc(e) && (r.types[0].prettierIgnore = !0, e.unignore = !0), !1) : (kc(e) && (r.prettierIgnore = !0, e.unignore = !0), !!t && (xc(t, e), !0)) }(e) || Hc(e, r, o) || function(e, t) { const { precedingNode: n, enclosingNode: r } = e; return !!(n && "ImportSpecifier" === n.type && r && "ImportDeclaration" === r.type && Cc(t, Ic(e))) && (xc(n, e), !0) }(e, t) || function(e) { const { enclosingNode: t } = e; return !(!t || "AssignmentPattern" !== t.type || (Fc(t, e), 0)) }(e) || Wc(e, t) || zc(e) },
                        handleEndOfLineComment: function(e, t, n, r, o) { return function(e) { const { followingNode: t } = e; return !(!t || !Yc(e) || (Fc(t, e), 0)) }(e) || Uc(e, t) || function(e, t) { const { precedingNode: n, enclosingNode: r, followingNode: o } = e, u = n && !Ac(t, Ic(n), Lc(e)); return !(n && u || !r || "ConditionalExpression" !== r.type && "TSConditionalType" !== r.type || !o || (Fc(o, e), 0)) }(e, t) || Jc(e) || Rc(e, t) || qc(e, t) || Vc(e) || $c(e) || zc(e) || function(e) { const { precedingNode: t, enclosingNode: n } = e; return !!(n && ("CallExpression" === n.type || "OptionalCallExpression" === n.type) && t && n.callee === t && n.arguments.length > 0) && (Fc(n.arguments[0], e), !0) }(e) || function(e) { const { enclosingNode: t } = e; return !(!t || "Property" !== t.type && "ObjectProperty" !== t.type || (Fc(t, e), 0)) }(e) || Hc(e, r, o) || function(e) { const { enclosingNode: t } = e; return !(!t || "TypeAlias" !== t.type || (Fc(t, e), 0)) }(e) || function(e) { const { enclosingNode: t, followingNode: n } = e; return !(!t || "VariableDeclarator" !== t.type && "AssignmentExpression" !== t.type || !n || "ObjectExpression" !== n.type && "ArrayExpression" !== n.type && "TemplateLiteral" !== n.type && "TaggedTemplateExpression" !== n.type && !Tc(e) || (Fc(n, e), 0)) }(e) },
                        handleRemainingComment: function(e, t, n, r, o) { return !!(Gc(e) || Rc(e, t) || qc(e, t) || function(e) { const { precedingNode: t, enclosingNode: n } = e; return !(!n || "ObjectProperty" !== n.type && "Property" !== n.type || !n.shorthand || n.key !== t || "AssignmentPattern" !== n.value.type || (xc(n.value.left, e), 0)) }(e) || function(e, t) { if (")" !== vc(t, e, Ic)) return !1; const { enclosingNode: n } = e; return n && (Xc(n) && 0 === Bc(n).length || ("CallExpression" === n.type || "OptionalCallExpression" === n.type || "NewExpression" === n.type) && 0 === n.arguments.length) ? (Sc(n, e), !0) : !(!n || "MethodDefinition" !== n.type || 0 !== Bc(n.value).length || (Sc(n.value, e), 0)) }(e, t) || Wc(e, t) || Hc(e, r, o) || function(e, t) { const { enclosingNode: n } = e; if (!n || "ArrowFunctionExpression" !== n.type) return !1; const r = wc(t, e, Ic); return !1 !== r && "=>" === t.slice(r, r + 2) && (Sc(n, e), !0) }(e, t) || function(e, t) { if ("(" !== vc(t, e, Ic)) return !1; const { precedingNode: n, enclosingNode: r } = e; return !(!n || !r || "FunctionDeclaration" !== r.type && "FunctionExpression" !== r.type && "ClassMethod" !== r.type && "MethodDefinition" !== r.type && "ObjectMethod" !== r.type || (xc(n, e), 0)) }(e, t) || function(e) { const { precedingNode: t, enclosingNode: n, followingNode: r } = e; return !(!n || "TSMappedType" !== n.type || (r && "TSTypeParameter" === r.type && r.name ? (Fc(r.name, e), 0) : !t || "TSTypeParameter" !== t.type || !t.constraint || (xc(t.constraint, e), 0))) }(e) || function(e) { const { enclosingNode: t } = e; return !(!t || "ContinueStatement" !== t.type && "BreakStatement" !== t.type || t.label || (xc(t, e), 0)) }(e) || function(e, t) { const { enclosingNode: n, followingNode: r } = e; return !(r || !n || "TSMethodSignature" !== n.type && "TSDeclareFunction" !== n.type && "TSAbstractMethodDefinition" !== n.type || ";" !== vc(t, e, Ic) || (xc(n, e), 0)) }(e, t)) },
                        hasLeadingComment: function(e, t = (() => !0)) { return e.leadingComments ? e.leadingComments.some(t) : !!e.comments && e.comments.some((e => e.leading && t(e))) },
                        isTypeCastComment: Yc,
                        getGapRegex: function(e) { if (e && "BinaryExpression" !== e.type && "LogicalExpression" !== e.type) return /^[\s&(|]*$/ },
                        getCommentChildNodes: function(e, t) { if (("typescript" === t.parser || "flow" === t.parser || "espree" === t.parser || "meriyah" === t.parser) && "MethodDefinition" === e.type && e.value && "FunctionExpression" === e.value.type && 0 === Bc(e.value).length && !e.value.returnType && (!e.value.typeParameters || 0 === e.value.typeParameters.length) && e.value.body) return [...e.decorators || [], e.key, e.value.body] },
                        willPrintOwnComments: function(e) {
                            const t = e.getValue(),
                                n = e.getParentNode();
                            return (t && (Nc(t) || Pc(t) || n && ("CallExpression" === n.type || "OptionalCallExpression" === n.type) && (Oc(t.leadingComments) || Oc(t.trailingComments))) || n && ("JSXSpreadAttribute" === n.type || "JSXSpreadChild" === n.type || "UnionTypeAnnotation" === n.type || "TSUnionType" === n.type || ("ClassDeclaration" === n.type || "ClassExpression" === n.type) && n.superClass === t)) && (!_c(e) || "UnionTypeAnnotation" === n.type || "TSUnionType" === n.type)
                        }
                    };
                    const { getStringWidth: Qc, getIndentSize: Zc } = Lt, { builders: { concat: el, join: tl, hardline: nl, softline: rl, group: ol, indent: ul, align: il, lineSuffixBoundary: al, addAlignmentToDoc: sl }, printer: { printDocToString: cl }, utils: { mapDoc: ll } } = cn, { isBinaryish: pl, isJestEachTemplateLiteral: dl, isSimpleTemplateLiteral: fl } = yc;

                    function hl(e) { return e.replace(/([\\`]|\${)/g, "\\$1") }
                    var ml = {
                        printTemplateLiteral: function(e, t, n) {
                            const r = e.getValue();
                            if ("TemplateLiteral" === r.type && dl(r, e.getParentNode())) {
                                const r = function(e, t, n) {
                                    const r = e.getNode(),
                                        o = r.quasis[0].value.raw.trim().split(/\s*\|\s*/);
                                    if (o.length > 1 || o.some((e => 0 !== e.length))) {
                                        t.__inJestEach = !0;
                                        const u = e.map(n, "expressions");
                                        t.__inJestEach = !1;
                                        const i = [],
                                            a = u.map((e => "${" + cl(e, Object.assign({}, t, { printWidth: 1 / 0, endOfLine: "lf" })).formatted + "}")),
                                            s = [{ hasLineBreak: !1, cells: [] }];
                                        for (let e = 1; e < r.quasis.length; e++) {
                                            const t = s[s.length - 1],
                                                n = a[e - 1];
                                            t.cells.push(n), n.includes("\n") && (t.hasLineBreak = !0), r.quasis[e].value.raw.includes("\n") && s.push({ hasLineBreak: !1, cells: [] })
                                        }
                                        const c = Math.max(o.length, ...s.map((e => e.cells.length))),
                                            l = Array.from({ length: c }).fill(0),
                                            p = [{ cells: o }, ...s.filter((e => 0 !== e.cells.length))];
                                        for (const { cells: e }
                                            of p.filter((e => !e.hasLineBreak))) e.forEach(((e, t) => { l[t] = Math.max(l[t], Qc(e)) }));
                                        return i.push(al, "`", ul(el([nl, tl(nl, p.map((e => tl(" | ", e.cells.map(((t, n) => e.hasLineBreak ? t : t + " ".repeat(l[n] - Qc(t))))))))])), nl, "`"), el(i)
                                    }
                                }(e, n, t);
                                if (r) return r
                            }
                            let o = "expressions";
                            "TSTemplateLiteralType" === r.type && (o = "types");
                            const u = [];
                            let i = e.map(t, o);
                            const a = fl(r);
                            return a && (i = i.map((e => cl(e, Object.assign({}, n, { printWidth: 1 / 0 })).formatted))), u.push(al, "`"), e.each((e => {
                                const s = e.getName();
                                if (u.push(t(e)), s < i.length) {
                                    const { tabWidth: t } = n, c = e.getValue(), l = Zc(c.value.raw, t);
                                    let p = i[s];
                                    if (!a) {
                                        const e = r[o][s];
                                        (e.comments && e.comments.length || "MemberExpression" === e.type || "OptionalMemberExpression" === e.type || "ConditionalExpression" === e.type || "SequenceExpression" === e.type || "TSAsExpression" === e.type || pl(e)) && (p = el([ul(el([rl, p])), rl]))
                                    }
                                    const d = 0 === l && c.value.raw.endsWith("\n") ? il(-1 / 0, p) : sl(p, l, t);
                                    u.push(ol(el(["${", d, al, "}"])))
                                }
                            }), "quasis"), u.push("`"), el(u)
                        },
                        printTemplateExpressions: function(e, t) { return e.map((e => function(e, t) { const n = e.getValue(); let r = t(e); return n.comments && n.comments.length && (r = ol(el([ul(el([rl, r])), rl]))), el(["${", r, al, "}"]) }(e, t)), "expressions") },
                        escapeTemplateCharacters: function(e, t) { return ll(e, (e => { if (!e.parts) return e; const n = e.parts.map((e => "string" == typeof e ? t ? e.replace(/(\\*)`/g, "$1$1\\`") : hl(e) : e)); return Object.assign({}, e, { parts: n }) })) },
                        uncookTemplateElementValue: hl
                    };
                    const { builders: { indent: gl, softline: Dl, literalline: yl, concat: El, dedentToRoot: Cl } } = cn, { escapeTemplateCharacters: bl } = ml;
                    const { builders: { indent: vl, hardline: Al, softline: Fl, concat: xl }, utils: { mapDoc: Sl, replaceNewlinesWithLiterallines: wl } } = cn, { printTemplateExpressions: Tl } = ml;
                    const { builders: { indent: Bl, join: kl, hardline: Nl, concat: Pl } } = cn, { escapeTemplateCharacters: Ol, printTemplateExpressions: _l } = ml;

                    function Ll(e) { const t = []; let n = !1; return e.map((e => e.trim())).forEach(((e, r, o) => { "" !== e && ("" === o[r - 1] && n ? t.push(Pl([Nl, e])) : t.push(e), n = !0) })), 0 === t.length ? null : kl(Nl, t) }
                    const { builders: { indent: Il, line: Ml, hardline: jl, concat: Rl, group: ql }, utils: { mapDoc: Vl } } = cn, { printTemplateExpressions: $l, uncookTemplateElementValue: Wl } = ml;
                    let Ul = 0;
                    const { isBlockComment: Jl } = yc, { hasLeadingComment: zl } = Kc;
                    const Hl = [(e, t) => "ObjectExpression" === e.type && "properties" === t, (e, t) => "CallExpression" === e.type && "Identifier" === e.callee.type && "Component" === e.callee.name && "arguments" === t, (e, t) => "Decorator" === e.type && "expression" === t];

                    function Gl(e) { return "Identifier" === e.type && "styled" === e.name }

                    function Xl(e) { return /^[A-Z]/.test(e.object.name) && "extend" === e.property.name }

                    function Yl(e, t) { return zl(e, (e => Jl(e) && e.value === " ".concat(t, " "))) }
                    const { isBlockComment: Kl } = yc, Ql = new Set(["range", "raw", "comments", "leadingComments", "trailingComments", "innerComments", "extra", "start", "end", "loc", "flags", "errors", "tokens"]);

                    function Zl(e, t, n) {
                        if ("Program" === e.type && delete t.sourceType, "BigIntLiteral" !== e.type && "BigIntLiteralTypeAnnotation" !== e.type || t.value && (t.value = t.value.toLowerCase()), "BigIntLiteral" !== e.type && "Literal" !== e.type || t.bigint && (t.bigint = t.bigint.toLowerCase()), "DecimalLiteral" === e.type && (t.value = Number(t.value)), "EmptyStatement" === e.type) return null;
                        if ("JSXText" === e.type) return null;
                        if ("JSXExpressionContainer" === e.type && ("Literal" === e.expression.type || "StringLiteral" === e.expression.type) && " " === e.expression.value) return null;
                        "Property" !== e.type && "ObjectProperty" !== e.type && "MethodDefinition" !== e.type && "ClassProperty" !== e.type && "ClassMethod" !== e.type && "FieldDefinition" !== e.type && "TSDeclareMethod" !== e.type && "TSPropertySignature" !== e.type && "ObjectTypeProperty" !== e.type || "object" != typeof e.key || !e.key || "Literal" !== e.key.type && "NumericLiteral" !== e.key.type && "StringLiteral" !== e.key.type && "Identifier" !== e.key.type || delete t.key, "OptionalMemberExpression" === e.type && !1 === e.optional && (t.type = "MemberExpression", delete t.optional), "JSXElement" === e.type && "style" === e.openingElement.name.name && e.openingElement.attributes.some((e => "jsx" === e.name.name)) && t.children.filter((e => "JSXExpressionContainer" === e.type && "TemplateLiteral" === e.expression.type)).map((e => e.expression)).reduce(((e, t) => e.concat(t.quasis)), []).forEach((e => delete e.value)), "JSXAttribute" === e.type && "css" === e.name.name && "JSXExpressionContainer" === e.value.type && "TemplateLiteral" === e.value.expression.type && t.value.expression.quasis.forEach((e => delete e.value)), "JSXAttribute" === e.type && e.value && "Literal" === e.value.type && /["']|&quot;|&apos;/.test(e.value.value) && (t.value.value = t.value.value.replace(/["']|&quot;|&apos;/g, '"'));
                        const r = e.expression || e.callee;
                        if ("Decorator" === e.type && "CallExpression" === r.type && "Component" === r.callee.name && 1 === r.arguments.length) {
                            const n = e.expression.arguments[0].properties;
                            t.expression.arguments[0].properties.forEach(((e, t) => {
                                let r = null;
                                switch (n[t].key.name) {
                                    case "styles":
                                        "ArrayExpression" === e.value.type && (r = e.value.elements[0]);
                                        break;
                                    case "template":
                                        "TemplateLiteral" === e.value.type && (r = e.value)
                                }
                                r && r.quasis.forEach((e => delete e.value))
                            }))
                        }
                        "TaggedTemplateExpression" !== e.type || "MemberExpression" !== e.tag.type && ("Identifier" !== e.tag.type || "gql" !== e.tag.name && "graphql" !== e.tag.name && "css" !== e.tag.name && "md" !== e.tag.name && "markdown" !== e.tag.name && "html" !== e.tag.name) && "CallExpression" !== e.tag.type || t.quasi.quasis.forEach((e => delete e.value)), "TemplateLiteral" === e.type && ((e.leadingComments && e.leadingComments.some((e => Kl(e) && ["GraphQL", "HTML"].some((t => e.value === " ".concat(t, " "))))) || "CallExpression" === n.type && "graphql" === n.callee.name) && t.quasis.forEach((e => delete e.value)), e.leadingComments || t.quasis.forEach((e => { e.value && delete e.value.cooked }))), "InterpreterDirective" === e.type && (t.value = t.value.trimEnd())
                    }
                    Zl.ignoredProperties = Ql;
                    var ep = Zl;
                    const tp = e => { if ("string" != typeof e) throw new TypeError("Expected a string"); const t = e.match(/(?:\r?\n)/g) || []; if (0 === t.length) return; const n = t.filter((e => "\r\n" === e)).length; return n > t.length - n ? "\r\n" : "\n" };
                    var np = tp;
                    np.graceful = e => "string" == typeof e && tp(e) || "\n";
                    var rp = Me((function(e, t) {
                        function n() { const e = Rr; return n = function() { return e }, e }

                        function r() { const e = (t = np) && t.__esModule ? t : { default: t }; var t; return r = function() { return e }, e }
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.extract = function(e) { const t = e.match(i); return t ? t[0].trimLeft() : "" }, t.strip = function(e) { const t = e.match(i); return t && t[0] ? e.substring(t[0].length) : e }, t.parse = function(e) { return f(e).pragmas }, t.parseWithComments = f, t.print = function({ comments: e = "", pragmas: t = {} }) {
                            const o = (0, r().default)(e) || n().EOL,
                                u = Object.keys(t),
                                i = u.map((e => h(e, t[e]))).reduce(((e, t) => e.concat(t)), []).map((e => " * " + e + o)).join("");
                            if (!e) { if (0 === u.length) return ""; if (1 === u.length && !Array.isArray(t[u[0]])) { const e = t[u[0]]; return "".concat("/**", " ").concat(h(u[0], e)[0]).concat(" */") } }
                            const a = e.split(o).map((e => "".concat(" *", " ").concat(e))).join(o) + o;
                            return "/**" + o + (e ? a : "") + (e && u.length ? " *" + o : "") + i + " */"
                        };
                        const o = /\*\/$/,
                            u = /^\/\*\*/,
                            i = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/,
                            a = /(^|\s+)\/\/([^\r\n]*)/g,
                            s = /^(\r?\n)+/,
                            c = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g,
                            l = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g,
                            p = /(\r?\n|^) *\* ?/g,
                            d = [];

                        function f(e) {
                            const t = (0, r().default)(e) || n().EOL;
                            e = e.replace(u, "").replace(o, "").replace(p, "$1");
                            let i = "";
                            for (; i !== e;) i = e, e = e.replace(c, "".concat(t, "$1 $2").concat(t));
                            e = e.replace(s, "").trimRight();
                            const f = Object.create(null),
                                h = e.replace(l, "").replace(s, "").trimRight();
                            let m;
                            for (; m = l.exec(e);) { const e = m[2].replace(a, ""); "string" == typeof f[m[1]] || Array.isArray(f[m[1]]) ? f[m[1]] = d.concat(f[m[1]], e) : f[m[1]] = e }
                            return { comments: h, pragmas: f }
                        }

                        function h(e, t) { return d.concat(t).map((t => "@".concat(e, " ").concat(t).trim())) }
                    }));
                    const { parseWithComments: op, strip: up, extract: ip, print: ap } = rp, { getShebang: sp } = Lt, { normalizeEndOfLine: cp } = It;

                    function lp(e) {
                        const t = sp(e);
                        t && (e = e.slice(t.length + 1));
                        const n = ip(e),
                            { pragmas: r, comments: o } = op(n);
                        return { shebang: t, text: e, pragmas: r, comments: o }
                    }
                    var pp = { hasPragma: function(e) { const t = Object.keys(lp(e).pragmas); return t.includes("prettier") || t.includes("format") }, insertPragma: function(e) { const { shebang: t, text: n, pragmas: r, comments: o } = lp(e), u = up(n), i = ap({ pragmas: Object.assign({ format: "" }, r), comments: o.trimStart() }); return (t ? "".concat(t, "\n") : "") + cp(i) + (u.startsWith("\n") ? "\n" : "\n\n") + u } };
                    const { getFunctionParameters: dp, getLeftSidePathName: fp, hasFlowShorthandAnnotationComment: hp, hasNakedLeftSide: mp, hasNode: gp, isBitwiseOperator: Dp, startsWithNoLookaheadToken: yp, shouldFlatten: Ep, getPrecedence: Cp } = yc;

                    function bp(e, t) {
                        const n = e.getParentNode();
                        if (!n) return !1;
                        const r = e.getName(),
                            o = e.getNode();
                        if (t.__isInHtmlInterpolation && !t.bracketSpacing && function(e) {
                                switch (e.type) {
                                    case "ObjectExpression":
                                        return !0;
                                    default:
                                        return !1
                                }
                            }(o) && vp(e)) return !0;
                        if (function(e) { return "BlockStatement" === e.type || "BreakStatement" === e.type || "ClassBody" === e.type || "ClassDeclaration" === e.type || "ClassMethod" === e.type || "ClassProperty" === e.type || "FieldDefinition" === e.type || "ClassPrivateProperty" === e.type || "ContinueStatement" === e.type || "DebuggerStatement" === e.type || "DeclareClass" === e.type || "DeclareExportAllDeclaration" === e.type || "DeclareExportDeclaration" === e.type || "DeclareFunction" === e.type || "DeclareInterface" === e.type || "DeclareModule" === e.type || "DeclareModuleExports" === e.type || "DeclareVariable" === e.type || "DoWhileStatement" === e.type || "EnumDeclaration" === e.type || "ExportAllDeclaration" === e.type || "ExportDefaultDeclaration" === e.type || "ExportNamedDeclaration" === e.type || "ExpressionStatement" === e.type || "ForInStatement" === e.type || "ForOfStatement" === e.type || "ForStatement" === e.type || "FunctionDeclaration" === e.type || "IfStatement" === e.type || "ImportDeclaration" === e.type || "InterfaceDeclaration" === e.type || "LabeledStatement" === e.type || "MethodDefinition" === e.type || "ReturnStatement" === e.type || "SwitchStatement" === e.type || "ThrowStatement" === e.type || "TryStatement" === e.type || "TSDeclareFunction" === e.type || "TSEnumDeclaration" === e.type || "TSImportEqualsDeclaration" === e.type || "TSInterfaceDeclaration" === e.type || "TSModuleDeclaration" === e.type || "TSNamespaceExportDeclaration" === e.type || "TypeAlias" === e.type || "VariableDeclaration" === e.type || "WhileStatement" === e.type || "WithStatement" === e.type }(o)) return !1;
                        if ("flow" !== t.parser && hp(e.getValue())) return !0;
                        if ("Identifier" === o.type) return !!(o.extra && o.extra.parenthesized && /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(o.name));
                        switch (n.type) {
                            case "ParenthesizedExpression":
                                return !1;
                            case "ClassDeclaration":
                            case "ClassExpression":
                                if ("superClass" === r && ("ArrowFunctionExpression" === o.type || "AssignmentExpression" === o.type || "AwaitExpression" === o.type || "BinaryExpression" === o.type || "ConditionalExpression" === o.type || "LogicalExpression" === o.type || "NewExpression" === o.type || "ObjectExpression" === o.type || "ParenthesizedExpression" === o.type || "SequenceExpression" === o.type || "TaggedTemplateExpression" === o.type || "UnaryExpression" === o.type || "UpdateExpression" === o.type || "YieldExpression" === o.type)) return !0;
                                break;
                            case "ExportDefaultDeclaration":
                                return Ap(e, t) || "SequenceExpression" === o.type;
                            case "Decorator":
                                if ("expression" === r) {
                                    let e = !1,
                                        t = !1,
                                        n = o;
                                    for (; n;) switch (n.type) {
                                        case "MemberExpression":
                                            t = !0, n = n.object;
                                            break;
                                        case "CallExpression":
                                            if (t || e) return !0;
                                            e = !0, n = n.callee;
                                            break;
                                        case "Identifier":
                                            return !1;
                                        default:
                                            return !0
                                    }
                                    return !0
                                }
                                break;
                            case "ExpressionStatement":
                                if (yp(o, !0)) return !0;
                                break;
                            case "ArrowFunctionExpression":
                                if ("body" === r && "SequenceExpression" !== o.type && yp(o, !1)) return !0
                        }
                        switch (o.type) {
                            case "SpreadElement":
                            case "SpreadProperty":
                                return "object" === r && "MemberExpression" === n.type;
                            case "UpdateExpression":
                                if ("UnaryExpression" === n.type) return o.prefix && ("++" === o.operator && "+" === n.operator || "--" === o.operator && "-" === n.operator);
                            case "UnaryExpression":
                                switch (n.type) {
                                    case "UnaryExpression":
                                        return o.operator === n.operator && ("+" === o.operator || "-" === o.operator);
                                    case "BindExpression":
                                        return !0;
                                    case "MemberExpression":
                                    case "OptionalMemberExpression":
                                        return "object" === r;
                                    case "TaggedTemplateExpression":
                                        return !0;
                                    case "NewExpression":
                                    case "CallExpression":
                                    case "OptionalCallExpression":
                                        return "callee" === r;
                                    case "BinaryExpression":
                                        return "left" === r && "**" === n.operator;
                                    case "TSNonNullExpression":
                                        return !0;
                                    default:
                                        return !1
                                }
                            case "BinaryExpression":
                                if ("UpdateExpression" === n.type || "PipelineTopicExpression" === n.type && "|>" === o.operator) return !0;
                                if ("in" === o.operator && function(e) {
                                        let t = 0,
                                            n = e.getValue();
                                        for (; n;) {
                                            const r = e.getParentNode(t++);
                                            if (r && "ForStatement" === r.type && r.init === n) return !0;
                                            n = r
                                        }
                                        return !1
                                    }(e)) return !0;
                                if ("|>" === o.operator && o.extra && o.extra.parenthesized) { const t = e.getParentNode(1); if ("BinaryExpression" === t.type && "|>" === t.operator) return !0 }
                            case "TSTypeAssertion":
                            case "TSAsExpression":
                            case "LogicalExpression":
                                switch (n.type) {
                                    case "ConditionalExpression":
                                        return "TSAsExpression" === o.type;
                                    case "CallExpression":
                                    case "NewExpression":
                                    case "OptionalCallExpression":
                                        return "callee" === r;
                                    case "ClassExpression":
                                    case "ClassDeclaration":
                                        return "superClass" === r;
                                    case "TSTypeAssertion":
                                    case "TaggedTemplateExpression":
                                    case "UnaryExpression":
                                    case "JSXSpreadAttribute":
                                    case "SpreadElement":
                                    case "SpreadProperty":
                                    case "BindExpression":
                                    case "AwaitExpression":
                                    case "TSAsExpression":
                                    case "TSNonNullExpression":
                                    case "UpdateExpression":
                                        return !0;
                                    case "MemberExpression":
                                    case "OptionalMemberExpression":
                                        return "object" === r;
                                    case "AssignmentExpression":
                                        return "left" === r && ("TSTypeAssertion" === o.type || "TSAsExpression" === o.type);
                                    case "LogicalExpression":
                                        if ("LogicalExpression" === o.type) return n.operator !== o.operator;
                                    case "BinaryExpression":
                                        {
                                            const { operator: e, type: t } = o;
                                            if (!e && "TSTypeAssertion" !== t) return !0;
                                            const u = Cp(e),
                                                i = n.operator,
                                                a = Cp(i);
                                            return a > u || "right" === r && a === u || a === u && !Ep(i, e) || (a < u && "%" === e ? "+" === i || "-" === i : !!Dp(i))
                                        }
                                    default:
                                        return !1
                                }
                            case "SequenceExpression":
                                switch (n.type) {
                                    case "ReturnStatement":
                                    case "ForStatement":
                                        return !1;
                                    case "ExpressionStatement":
                                        return "expression" !== r;
                                    case "ArrowFunctionExpression":
                                        return "body" !== r;
                                    default:
                                        return !0
                                }
                            case "YieldExpression":
                                if ("UnaryExpression" === n.type || "AwaitExpression" === n.type || "TSAsExpression" === n.type || "TSNonNullExpression" === n.type) return !0;
                            case "AwaitExpression":
                                switch (n.type) {
                                    case "TaggedTemplateExpression":
                                    case "UnaryExpression":
                                    case "LogicalExpression":
                                    case "SpreadElement":
                                    case "SpreadProperty":
                                    case "TSAsExpression":
                                    case "TSNonNullExpression":
                                    case "BindExpression":
                                        return !0;
                                    case "MemberExpression":
                                    case "OptionalMemberExpression":
                                        return "object" === r;
                                    case "NewExpression":
                                    case "CallExpression":
                                    case "OptionalCallExpression":
                                        return "callee" === r;
                                    case "ConditionalExpression":
                                        return "test" === r;
                                    case "BinaryExpression":
                                        return !(!o.argument && "|>" === n.operator);
                                    default:
                                        return !1
                                }
                            case "TSJSDocFunctionType":
                            case "TSConditionalType":
                                if ("extendsType" === r && "TSConditionalType" === n.type) return !0;
                            case "TSFunctionType":
                            case "TSConstructorType":
                                if ("checkType" === r && "TSConditionalType" === n.type) return !0;
                            case "TSUnionType":
                            case "TSIntersectionType":
                                if ("TSUnionType" === n.type || "TSIntersectionType" === n.type) return !0;
                            case "TSInferType":
                                if ("TSInferType" === o.type && "TSRestType" === n.type) return !1;
                            case "TSTypeOperator":
                                return "TSArrayType" === n.type || "TSOptionalType" === n.type || "TSRestType" === n.type || "objectType" === r && "TSIndexedAccessType" === n.type || "TSTypeOperator" === n.type || "TSTypeAnnotation" === n.type && /^TSJSDoc/.test(e.getParentNode(1).type);
                            case "ArrayTypeAnnotation":
                                return "NullableTypeAnnotation" === n.type;
                            case "IntersectionTypeAnnotation":
                            case "UnionTypeAnnotation":
                                return "ArrayTypeAnnotation" === n.type || "NullableTypeAnnotation" === n.type || "IntersectionTypeAnnotation" === n.type || "UnionTypeAnnotation" === n.type;
                            case "NullableTypeAnnotation":
                                return "ArrayTypeAnnotation" === n.type;
                            case "FunctionTypeAnnotation":
                                { const t = "NullableTypeAnnotation" === n.type ? e.getParentNode(1) : n; return "UnionTypeAnnotation" === t.type || "IntersectionTypeAnnotation" === t.type || "ArrayTypeAnnotation" === t.type || "NullableTypeAnnotation" === t.type || "FunctionTypeParam" === n.type && null === n.name && dp(o).some((e => e.typeAnnotation && "NullableTypeAnnotation" === e.typeAnnotation.type)) }
                            case "StringLiteral":
                            case "NumericLiteral":
                            case "Literal":
                                if ("string" == typeof o.value && "ExpressionStatement" === n.type && !n.directive) { const t = e.getParentNode(1); return "Program" === t.type || "BlockStatement" === t.type }
                                return "object" === r && "MemberExpression" === n.type && "number" == typeof o.value;
                            case "AssignmentExpression":
                                { const t = e.getParentNode(1); return "body" === r && "ArrowFunctionExpression" === n.type || ("key" !== r || "ClassProperty" !== n.type && "FieldDefinition" !== n.type || !n.computed) && ("init" !== r && "update" !== r || "ForStatement" !== n.type) && ("ExpressionStatement" === n.type ? "ObjectPattern" === o.left.type : !("key" === r && "TSPropertySignature" === n.type || "AssignmentExpression" === n.type || "SequenceExpression" === n.type && t && "ForStatement" === t.type && (t.init === n || t.update === n) || "value" === r && "Property" === n.type && t && "ObjectPattern" === t.type && t.properties.includes(n) || "NGChainedExpression" === n.type)) }
                            case "ConditionalExpression":
                                switch (n.type) {
                                    case "TaggedTemplateExpression":
                                    case "UnaryExpression":
                                    case "SpreadElement":
                                    case "SpreadProperty":
                                    case "BinaryExpression":
                                    case "LogicalExpression":
                                    case "NGPipeExpression":
                                    case "ExportDefaultDeclaration":
                                    case "AwaitExpression":
                                    case "JSXSpreadAttribute":
                                    case "TSTypeAssertion":
                                    case "TypeCastExpression":
                                    case "TSAsExpression":
                                    case "TSNonNullExpression":
                                        return !0;
                                    case "NewExpression":
                                    case "CallExpression":
                                    case "OptionalCallExpression":
                                        return "callee" === r;
                                    case "ConditionalExpression":
                                        return "test" === r;
                                    case "MemberExpression":
                                    case "OptionalMemberExpression":
                                        return "object" === r;
                                    default:
                                        return !1
                                }
                            case "FunctionExpression":
                                switch (n.type) {
                                    case "NewExpression":
                                    case "CallExpression":
                                    case "OptionalCallExpression":
                                        return "callee" === r;
                                    case "TaggedTemplateExpression":
                                        return !0;
                                    default:
                                        return !1
                                }
                            case "ArrowFunctionExpression":
                                switch (n.type) {
                                    case "PipelineTopicExpression":
                                        return !(!o.extra || !o.extra.parenthesized);
                                    case "BinaryExpression":
                                        return "|>" !== n.operator || o.extra && o.extra.parenthesized;
                                    case "NewExpression":
                                    case "CallExpression":
                                    case "OptionalCallExpression":
                                        return "callee" === r;
                                    case "MemberExpression":
                                    case "OptionalMemberExpression":
                                        return "object" === r;
                                    case "TSAsExpression":
                                    case "BindExpression":
                                    case "TaggedTemplateExpression":
                                    case "UnaryExpression":
                                    case "LogicalExpression":
                                    case "AwaitExpression":
                                    case "TSTypeAssertion":
                                        return !0;
                                    case "ConditionalExpression":
                                        return "test" === r;
                                    default:
                                        return !1
                                }
                            case "ClassExpression":
                                switch (n.type) {
                                    case "NewExpression":
                                        return "callee" === r;
                                    default:
                                        return !1
                                }
                            case "OptionalMemberExpression":
                            case "OptionalCallExpression":
                                { const t = e.getParentNode(1); if ("object" === r && "MemberExpression" === n.type || "callee" === r && ("CallExpression" === n.type || "NewExpression" === n.type) || "TSNonNullExpression" === n.type && "MemberExpression" === t.type && t.object === n) return !0 }
                            case "CallExpression":
                            case "MemberExpression":
                            case "TaggedTemplateExpression":
                            case "TSNonNullExpression":
                                if ("callee" === r && ("BindExpression" === n.type || "NewExpression" === n.type)) {
                                    let e = o;
                                    for (; e;) switch (e.type) {
                                        case "CallExpression":
                                        case "OptionalCallExpression":
                                            return !0;
                                        case "MemberExpression":
                                        case "OptionalMemberExpression":
                                        case "BindExpression":
                                            e = e.object;
                                            break;
                                        case "TaggedTemplateExpression":
                                            e = e.tag;
                                            break;
                                        case "TSNonNullExpression":
                                            e = e.expression;
                                            break;
                                        default:
                                            return !1
                                    }
                                }
                                return !1;
                            case "BindExpression":
                                return "callee" === r && ("BindExpression" === n.type || "NewExpression" === n.type) || "object" === r && ("MemberExpression" === n.type || "OptionalMemberExpression" === n.type);
                            case "NGPipeExpression":
                                return !("NGRoot" === n.type || "NGMicrosyntaxExpression" === n.type || !("ObjectProperty" !== n.type || o.extra && o.extra.parenthesized) || "ArrayExpression" === n.type || ("CallExpression" === n.type || "OptionalCallExpression" === n.type) && n.arguments[r] === o || "right" === r && "NGPipeExpression" === n.type || "property" === r && "MemberExpression" === n.type || "AssignmentExpression" === n.type);
                            case "JSXFragment":
                            case "JSXElement":
                                return "callee" === r || "left" === r && "BinaryExpression" === n.type && "<" === n.operator || "ArrayExpression" !== n.type && "ArrowFunctionExpression" !== n.type && "AssignmentExpression" !== n.type && "AssignmentPattern" !== n.type && "BinaryExpression" !== n.type && "CallExpression" !== n.type && "NewExpression" !== n.type && "ConditionalExpression" !== n.type && "ExpressionStatement" !== n.type && "JsExpressionRoot" !== n.type && "JSXAttribute" !== n.type && "JSXElement" !== n.type && "JSXExpressionContainer" !== n.type && "JSXFragment" !== n.type && "LogicalExpression" !== n.type && "ObjectProperty" !== n.type && "OptionalCallExpression" !== n.type && "Property" !== n.type && "ReturnStatement" !== n.type && "ThrowStatement" !== n.type && "TypeCastExpression" !== n.type && "VariableDeclarator" !== n.type && "YieldExpression" !== n.type;
                            case "TypeAnnotation":
                                return "returnType" === r && "ArrowFunctionExpression" === n.type && function(e) { return gp(e, (e => "ObjectTypeAnnotation" === e.type && gp(e, (e => "FunctionTypeAnnotation" === e.type || void 0)) || void 0)) }(o)
                        }
                        return !1
                    }

                    function vp(e) {
                        const t = e.getValue(),
                            n = e.getParentNode(),
                            r = e.getName();
                        switch (n.type) {
                            case "NGPipeExpression":
                                if ("number" == typeof r && n.arguments[r] === t && n.arguments.length - 1 === r) return e.callParent(vp);
                                break;
                            case "ObjectProperty":
                                if ("value" === r) { const t = e.getParentNode(1); return t.properties[t.properties.length - 1] === n }
                                break;
                            case "BinaryExpression":
                            case "LogicalExpression":
                                if ("right" === r) return e.callParent(vp);
                                break;
                            case "ConditionalExpression":
                                if ("alternate" === r) return e.callParent(vp);
                                break;
                            case "UnaryExpression":
                                if (n.prefix) return e.callParent(vp)
                        }
                        return !1
                    }

                    function Ap(e, t) {
                        const n = e.getValue(),
                            r = e.getParentNode();
                        return "FunctionExpression" === n.type || "ClassExpression" === n.type ? "ExportDefaultDeclaration" === r.type || !bp(e, t) : !(!mp(n) || "ExportDefaultDeclaration" !== r.type && bp(e, t)) && e.call((e => Ap(e, t)), ...fp(e, n))
                    }
                    var Fp = bp;
                    const { builders: { concat: xp, join: Sp, line: wp, group: Tp, softline: Bp, indent: kp } } = cn;
                    var Np = {
                            isVueEventBindingExpression: function e(t) {
                                switch (t.type) {
                                    case "MemberExpression":
                                        switch (t.property.type) {
                                            case "Identifier":
                                            case "NumericLiteral":
                                            case "StringLiteral":
                                                return e(t.object)
                                        }
                                        return !1;
                                    case "Identifier":
                                        return !0;
                                    default:
                                        return !1
                                }
                            },
                            printHtmlBinding: function(e, t, n) {
                                const r = e.getValue();
                                if (t.__onHtmlBindingRoot && null === e.getName() && t.__onHtmlBindingRoot(r, t), "File" === r.type) return t.__isVueForBindingLeft ? e.call((e => {
                                    const t = Sp(xp([",", wp]), e.map(n, "params")),
                                        { params: r } = e.getValue();
                                    return 1 === r.length ? t : xp(["(", kp(xp([Bp, Tp(t)])), Bp, ")"])
                                }), "program", "body", 0) : t.__isVueBindings ? e.call((e => Sp(xp([",", wp]), e.map(n, "params"))), "program", "body", 0) : void 0
                            }
                        },
                        Pp = function(e, t) {
                            switch (t.parser) {
                                case "json":
                                case "json5":
                                case "json-stringify":
                                case "__js_expression":
                                case "__vue_expression":
                                    return Object.assign({}, e, { type: t.parser.startsWith("__") ? "JsExpressionRoot" : "JsonRoot", node: e, comments: [], rootMarker: t.rootMarker });
                                default:
                                    return e
                            }
                        };
                    const { builders: { concat: Op, group: _p, indent: Lp, join: Ip, line: Mp, hardline: jp } } = cn, { hasNewlineBetweenOrAfterDecorators: Rp, getParentExportDeclaration: qp } = yc;
                    var Vp = { printOptionalToken: function(e) { const t = e.getValue(); return !t.optional || "Identifier" === t.type && t === e.getParentNode().key ? "" : "OptionalCallExpression" === t.type || "OptionalMemberExpression" === t.type && t.computed ? "?." : "?" }, printFunctionTypeParameters: function(e, t, n) { const r = e.getValue(); return r.typeArguments ? e.call(n, "typeArguments") : r.typeParameters ? e.call(n, "typeParameters") : "" }, printBindExpressionCallee: function(e, t, n) { return Op(["::", e.call(n, "callee")]) }, printTypeScriptModifiers: function(e, t, n) { const r = e.getValue(); return r.modifiers && r.modifiers.length ? Op([Ip(" ", e.map(n, "modifiers")), " "]) : "" }, printDecorators: function(e, t, n) { const r = e.getValue(); return _p(Op([Ip(Mp, e.map(n, "decorators")), Rp(r, t) ? jp : Mp])) }, printFlowDeclaration: function(e, t) { const n = qp(e); return n ? (zi.strictEqual(n.type, "DeclareExportDeclaration"), t) : Op(["declare ", t]) }, adjustClause: function(e, t, n) { return "EmptyStatement" === e.type ? ";" : "BlockStatement" === e.type || n ? Op([" ", t]) : Lp(Op([Mp, t])) } };
                    const { builders: { concat: $p, softline: Wp, group: Up, indent: Jp, join: zp, line: Hp, ifBreak: Gp, hardline: Xp } } = cn, { printDanglingComments: Yp } = ma, { hasDanglingComments: Kp, shouldPrintComma: Qp, needsHardlineAfterDanglingComment: Zp } = yc, { locStart: ed, hasSameLoc: td } = Qu;

                    function nd(e, t, n) { const r = e.getValue(); if (!r.source) return ""; const o = []; return od(r, t) || o.push(" from"), o.push(" ", e.call(n, "source")), $p(o) }

                    function rd(e, t, n) {
                        const r = e.getValue();
                        if (od(r, t)) return "";
                        const o = [" "];
                        if (r.specifiers && r.specifiers.length > 0) {
                            const u = [],
                                i = [];
                            e.each((t => {
                                const r = e.getValue().type;
                                if ("ExportNamespaceSpecifier" === r || "ExportDefaultSpecifier" === r || "ImportNamespaceSpecifier" === r || "ImportDefaultSpecifier" === r) u.push(n(t));
                                else {
                                    if ("ExportSpecifier" !== r && "ImportSpecifier" !== r) throw new Error("Unknown specifier type ".concat(JSON.stringify(r)));
                                    i.push(n(t))
                                }
                            }), "specifiers"), o.push(zp(", ", u)), 0 !== i.length && (0 !== u.length && o.push(", "), i.length > 1 || u.length > 0 || r.specifiers.some((e => e.comments)) ? o.push(Up($p(["{", Jp($p([t.bracketSpacing ? Hp : Wp, zp($p([",", Hp]), i)])), Gp(Qp(t) ? "," : ""), t.bracketSpacing ? Hp : Wp, "}"]))) : o.push($p(["{", t.bracketSpacing ? " " : "", $p(i), t.bracketSpacing ? " " : "", "}"])))
                        } else o.push("{}");
                        return $p(o)
                    }

                    function od(e, t) { const { type: n, importKind: r, source: o, specifiers: u } = e; return !("ImportDeclaration" !== n || Array.isArray(u) && u.length > 0 || "type" === r || /{\s*}/.test(t.originalText.slice(ed(e), ed(o)))) }

                    function ud(e, t, n) { const r = e.getNode(); return Array.isArray(r.assertions) && 0 !== r.assertions.length ? $p([" assert {", t.bracketSpacing ? " " : "", zp(", ", e.map(n, "assertions")), t.bracketSpacing ? " " : "", "}"]) : "" }
                    var id = {
                        printImportDeclaration: function(e, t, n) {
                            const r = e.getValue(),
                                o = t.semi ? ";" : "",
                                u = [],
                                { importKind: i } = r;
                            return u.push("import"), i && "value" !== i && u.push(" ", i), u.push(rd(e, t, n), nd(e, t, n), ud(e, t, n)), u.push(o), $p(u)
                        },
                        printExportDeclaration: function(e, t, n) {
                            const r = e.getValue(),
                                o = [],
                                { type: u, exportKind: i, declaration: a } = r;
                            return "DeclareExportDeclaration" === u && o.push("declare "), o.push("export"), (r.default || "ExportDefaultDeclaration" === u) && o.push(" default"), Kp(r) && (o.push(" ", Yp(e, t, !0)), Zp(r) && o.push(Xp)), a ? o.push(" ", e.call(n, "declaration")) : o.push("type" === i ? " type" : "", rd(e, t, n), nd(e, t, n), ud(e, t, n)),
                                function(e, t) { if (!t.semi) return !1; const { type: n, declaration: r } = e, o = e.default || "ExportDefaultDeclaration" === n; if (!r) return !0; const { type: u } = r; return !(!o || "ClassDeclaration" === u || "FunctionDeclaration" === u || "TSInterfaceDeclaration" === u || "DeclareClass" === u || "DeclareFunction" === u || "TSDeclareFunction" === u || "EnumDeclaration" === u) }(r, t) && o.push(";"), $p(o)
                        },
                        printExportAllDeclaration: function(e, t, n) {
                            const r = e.getValue();
                            let o = t.semi ? ";" : "";
                            const u = [],
                                { type: i, exportKind: a, exported: s } = r;
                            return "DeclareExportAllDeclaration" === i && (u.push("declare "), o = ""), u.push("export"), "type" === a && u.push(" type"), u.push(" *"), s && u.push(" as ", e.call(n, "exported")), u.push(nd(e, t, n), ud(e, t, n), o), $p(u)
                        },
                        printModuleSpecifier: function(e, t, n) {
                            const r = e.getNode(),
                                { type: o, importKind: u } = r,
                                i = [];
                            "ImportSpecifier" === o && u && i.push(u, " ");
                            const a = o.startsWith("Import"),
                                s = a ? "imported" : "local",
                                c = a ? "local" : "exported";
                            let l = "",
                                p = "";
                            return "ExportNamespaceSpecifier" === o || "ImportNamespaceSpecifier" === o ? l = "*" : r[s] && (l = e.call(n, s)), !r[c] || r[s] && td(r[s], r[c]) || (p = e.call(n, c)), i.push(l, l && p ? " as " : "", p), $p(i)
                        }
                    };
                    const { hasNewlineInRange: ad } = Lt, { isJSXNode: sd, isBlockComment: cd } = yc, { locStart: ld, locEnd: pd } = Qu, { builders: { concat: dd, line: fd, softline: hd, group: md, indent: gd, align: Dd, ifBreak: yd, dedent: Ed, breakParent: Cd } } = cn;
                    var bd = function(e, t, n, r) {
                        const o = e.getValue(),
                            u = o[r.consequentNodePropertyName],
                            i = o[r.alternateNodePropertyName],
                            a = [];
                        let s = !1;
                        const c = e.getParentNode(),
                            l = c.type === r.conditionalNodeType && r.testNodePropertyNames.some((e => c[e] === o));
                        let p, d, f = c.type === r.conditionalNodeType && !l,
                            h = 0;
                        do { d = p || o, p = e.getParentNode(h), h++ } while (p && p.type === r.conditionalNodeType && r.testNodePropertyNames.every((e => p[e] !== d)));
                        const m = p || c,
                            g = d;
                        if (r.shouldCheckJsx && (sd(o[r.testNodePropertyNames[0]]) || sd(u) || sd(i) || function(e) { return function(e) { const t = []; return function e(n) { "ConditionalExpression" === n.type ? (e(n.test), e(n.consequent), e(n.alternate)) : t.push(n) }(e), t }(e).some(sd) }(g))) {
                            s = !0, f = !0;
                            const t = e => dd([yd("(", ""), gd(dd([hd, e])), hd, yd(")", "")]),
                                o = e => "NullLiteral" === e.type || "Literal" === e.type && null === e.value || "Identifier" === e.type && "undefined" === e.name;
                            a.push(" ? ", o(u) ? e.call(n, r.consequentNodePropertyName) : t(e.call(n, r.consequentNodePropertyName)), " : ", i.type === r.conditionalNodeType || o(i) ? e.call(n, r.alternateNodePropertyName) : t(e.call(n, r.alternateNodePropertyName)))
                        } else {
                            const s = dd([fd, "? ", u.type === r.conditionalNodeType ? yd("", "(") : "", Dd(2, e.call(n, r.consequentNodePropertyName)), u.type === r.conditionalNodeType ? yd("", ")") : "", fd, ": ", i.type === r.conditionalNodeType ? e.call(n, r.alternateNodePropertyName) : Dd(2, e.call(n, r.alternateNodePropertyName))]);
                            a.push(c.type !== r.conditionalNodeType || c[r.alternateNodePropertyName] === o || l ? s : t.useTabs ? Ed(gd(s)) : Dd(Math.max(0, t.tabWidth - 2), s))
                        }
                        const D = $u([...r.testNodePropertyNames.map((e => o[e].comments)), u.comments, i.comments]).filter(Boolean).some((e => cd(e) && ad(t.originalText, ld(e), pd(e)))),
                            y = !s && ("MemberExpression" === c.type || "OptionalMemberExpression" === c.type || "NGPipeExpression" === c.type && c.left === o) && !c.computed,
                            E = (e => c === m ? md(e, { shouldBreak: D }) : D ? dd([e, Cd]) : e)(dd([].concat((C = dd(r.beforeParts()), c.type === r.conditionalNodeType && c[r.alternateNodePropertyName] === o ? Dd(2, C) : C), f ? dd(a) : gd(dd(a)), r.afterParts(y))));
                        var C;
                        return l ? md(dd([gd(dd([hd, E])), hd])) : E
                    };
                    const { getNextNonSpaceNonCommentCharacter: vd, isNextLineEmpty: Ad } = Lt, { printDanglingComments: Fd } = ma, { builders: { concat: xd, line: Sd, hardline: wd, softline: Td, group: Bd, indent: kd, ifBreak: Nd }, utils: { removeLines: Pd } } = cn, { getFunctionParameters: Od, iterateFunctionParametersPath: _d, isSimpleType: Ld, isTestCall: Id, isTypeAnnotationAFunction: Md, isObjectType: jd, isObjectTypePropertyAFunction: Rd, hasRestParameter: qd, shouldPrintComma: Vd } = yc, { locEnd: $d } = Qu, { printFunctionTypeParameters: Wd } = Vp;

                    function Ud(e) { if (!e) return !1; const t = Od(e); if (1 !== t.length) return !1; const [n] = t; return !n.comments && ("ObjectPattern" === n.type || "ArrayPattern" === n.type || "Identifier" === n.type && n.typeAnnotation && ("TypeAnnotation" === n.typeAnnotation.type || "TSTypeAnnotation" === n.typeAnnotation.type) && jd(n.typeAnnotation.typeAnnotation) || "FunctionTypeParam" === n.type && jd(n.typeAnnotation) || "AssignmentPattern" === n.type && ("ObjectPattern" === n.left.type || "ArrayPattern" === n.left.type) && ("Identifier" === n.right.type || "ObjectExpression" === n.right.type && 0 === n.right.properties.length || "ArrayExpression" === n.right.type && 0 === n.right.elements.length)) }
                    var Jd = {
                        printFunctionParameters: function(e, t, n, r, o) {
                            const u = e.getValue(),
                                i = Od(u),
                                a = o ? Wd(e, n, t) : "";
                            if (0 === i.length) return xd([a, "(", Fd(e, n, !0, (e => ")" === vd(n.originalText, e, $d))), ")"]);
                            const s = e.getParentNode(),
                                c = Id(s),
                                l = Ud(u),
                                p = r && !i.some((e => e.comments)),
                                d = [];
                            if (_d(e, ((e, r) => {
                                    const o = r === i.length - 1;
                                    o && u.rest && d.push("..."), d.push(e.call(t)), o || (d.push(","), c || l || p ? d.push(" ") : Ad(n.originalText, i[r], $d) ? d.push(wd, wd) : d.push(Sd))
                                })), p) return Bd(xd([Pd(a), "(", xd(d.map(Pd)), ")"]));
                            const f = i.every((e => !e.decorators));
                            return l && f || c ? xd([a, "(", xd(d), ")"]) : (Rd(s) || Md(s) || "TypeAlias" === s.type || "UnionTypeAnnotation" === s.type || "TSUnionType" === s.type || "IntersectionTypeAnnotation" === s.type || "FunctionTypeAnnotation" === s.type && s.returnType === u) && 1 === i.length && null === i[0].name && u.this !== i[0] && i[0].typeAnnotation && null === u.typeParameters && Ld(i[0].typeAnnotation) && !u.rest ? "always" === n.arrowParens ? xd(["(", xd(d), ")"]) : xd(d) : xd([a, "(", kd(xd([Td, xd(d)])), Nd(!qd(u) && Vd(n, "all") ? "," : ""), Td, ")"])
                        },
                        shouldHugFunctionParameters: Ud
                    };
                    const { builders: { concat: zd } } = cn, { isFlowAnnotationComment: Hd, isSimpleType: Gd, isObjectType: Xd } = yc;
                    var Yd = {
                        printTypeAnnotation: function(e, t, n) {
                            const r = e.getValue();
                            if (!r.typeAnnotation) return "";
                            const o = e.getParentNode(),
                                u = r.definite || o && "VariableDeclarator" === o.type && o.definite,
                                i = "DeclareFunction" === o.type && o.id === r;
                            return Hd(t.originalText, r.typeAnnotation) ? zd([" /*: ", e.call(n, "typeAnnotation"), " */"]) : zd([i ? "" : u ? "!: " : ": ", e.call(n, "typeAnnotation")])
                        },
                        shouldHugType: function(e) {
                            if (Gd(e) || Xd(e)) return !0;
                            if ("UnionTypeAnnotation" === e.type || "TSUnionType" === e.type) {
                                const t = e.types.filter((e => "VoidTypeAnnotation" === e.type || "TSVoidKeyword" === e.type || "NullLiteralTypeAnnotation" === e.type || "TSNullKeyword" === e.type)).length,
                                    n = e.types.some((e => "ObjectTypeAnnotation" === e.type || "TSTypeLiteral" === e.type || "GenericTypeAnnotation" === e.type || "TSTypeReference" === e.type));
                                if (e.types.length - 1 === t && n) return !0
                            }
                            return !1
                        }
                    };
                    const { printDanglingComments: Kd } = ma, { builders: { concat: Qd, line: Zd, softline: ef, group: tf, indent: nf, ifBreak: rf } } = cn, { getLast: of, isNextLineEmpty: uf } = Lt, { hasDanglingComments: af, shouldPrintComma: sf } = yc, { locEnd: cf } = Qu, { printOptionalToken: lf } = Vp, { printTypeAnnotation: pf } = Yd;

                    function df(e, t, n, r) { const o = []; let u = []; return e.each((e => { o.push(Qd(u)), o.push(tf(r(e))), u = [",", Zd], e.getValue() && uf(t.originalText, e.getValue(), cf) && u.push(ef) }), n), Qd(o) }
                    var ff = {
                        printArray: function(e, t, n) {
                            const r = e.getValue(),
                                o = [],
                                u = "TupleExpression" === r.type ? "#[" : "[";
                            if (0 === r.elements.length) af(r) ? o.push(tf(Qd([u, Kd(e, t), ef, "]"]))) : o.push(u, "]");
                            else {
                                const i = of(r.elements),
                                    a = !(i && "RestElement" === i.type),
                                    s = a && null === i,
                                    c = !t.__inJestEach && r.elements.length > 1 && r.elements.every(((e, t, n) => { const r = e && e.type; if ("ArrayExpression" !== r && "ObjectExpression" !== r) return !1; const o = n[t + 1]; if (o && r !== o.type) return !1; const u = "ArrayExpression" === r ? "elements" : "properties"; return e[u] && e[u].length > 1 }));
                                o.push(tf(Qd([u, nf(Qd([ef, df(e, t, "elements", n)])), s ? "," : "", rf(a && !s && sf(t) ? "," : ""), Kd(e, t, !0), ef, "]"]), { shouldBreak: c }))
                            }
                            return o.push(lf(e), pf(e, t, n)), Qd(o)
                        },
                        printArrayItems: df
                    };
                    const { printDanglingComments: hf } = ma, { builders: { concat: mf, line: gf, softline: Df, group: yf, indent: Ef, ifBreak: Cf, hardline: bf } } = cn, { getLast: vf, isNextLineEmpty: Af, hasNewlineInRange: Ff, hasNewline: xf } = Lt, { hasDanglingComments: Sf, shouldPrintComma: wf, hasNodeIgnoreComment: Tf, isBlockComment: Bf } = yc, { locStart: kf, locEnd: Nf } = Qu, { printOptionalToken: Pf } = Vp, { shouldHugFunctionParameters: Of } = Jd, { printTypeAnnotation: _f, shouldHugType: Lf } = Yd;
                    var If = {
                        printObject: function(e, t, n) {
                            const r = t.semi ? ";" : "",
                                o = e.getValue();
                            let u;
                            u = "TSTypeLiteral" === o.type ? "members" : "TSInterfaceBody" === o.type ? "body" : "properties";
                            const i = "ObjectTypeAnnotation" === o.type,
                                a = [];
                            i && a.push("indexers", "callProperties", "internalSlots"), a.push(u);
                            const s = a.map((e => o[e][0])).sort(((e, t) => kf(e) - kf(t)))[0],
                                c = e.getParentNode(0),
                                l = i && c && ("InterfaceDeclaration" === c.type || "DeclareInterface" === c.type || "DeclareClass" === c.type) && "body" === e.getName(),
                                p = "TSInterfaceBody" === o.type || l || "ObjectPattern" === o.type && "FunctionDeclaration" !== c.type && "FunctionExpression" !== c.type && "ArrowFunctionExpression" !== c.type && "ObjectMethod" !== c.type && "ClassMethod" !== c.type && "ClassPrivateMethod" !== c.type && "AssignmentPattern" !== c.type && "CatchClause" !== c.type && o.properties.some((e => e.value && ("ObjectPattern" === e.value.type || "ArrayPattern" === e.value.type))) || "ObjectPattern" !== o.type && s && Ff(t.originalText, kf(o), kf(s)),
                                d = l ? ";" : "TSInterfaceBody" === o.type || "TSTypeLiteral" === o.type ? Cf(r, ";") : ",",
                                f = "RecordExpression" === o.type ? "#{" : o.exact ? "{|" : "{",
                                h = o.exact ? "|}" : "}",
                                m = [];
                            a.forEach((t => {
                                e.each((e => {
                                    const t = e.getValue();
                                    m.push({ node: t, printed: n(e), loc: kf(t) })
                                }), t)
                            }));
                            let g = [];
                            const D = m.sort(((e, t) => e.loc - t.loc)).map((e => { const n = mf(g.concat(yf(e.printed))); return g = [d, gf], "TSPropertySignature" !== e.node.type && "TSMethodSignature" !== e.node.type && "TSConstructSignatureDeclaration" !== e.node.type || !Tf(e.node) || g.shift(), Af(t.originalText, e.node, Nf) && g.push(bf), n }));
                            if (o.inexact) {
                                let n;
                                if (Sf(o)) {
                                    const r = !o.comments.every((e => Bf(e))),
                                        u = hf(e, t, !0);
                                    n = mf([u, r || xf(t.originalText, Nf(o.comments[o.comments.length - 1])) ? bf : gf, "..."])
                                } else n = "...";
                                D.push(mf(g.concat(n)))
                            }
                            const y = vf(o[u]),
                                E = !(o.inexact || y && "RestElement" === y.type || y && ("TSPropertySignature" === y.type || "TSCallSignatureDeclaration" === y.type || "TSMethodSignature" === y.type || "TSConstructSignatureDeclaration" === y.type) && Tf(y));
                            let C;
                            if (0 === D.length) {
                                if (!Sf(o)) return mf([f, h, _f(e, t, n)]);
                                C = yf(mf([f, hf(e, t), Df, h, Pf(e), _f(e, t, n)]))
                            } else C = mf([f, Ef(mf([t.bracketSpacing ? gf : Df, mf(D)])), Cf(E && ("," !== d || wf(t)) ? d : ""), mf([t.bracketSpacing ? gf : Df, h]), Pf(e), _f(e, t, n)]);
                            return e.match((e => "ObjectPattern" === e.type && !e.decorators), ((e, t, n) => Of(e) && ("params" === t || "parameters" === t || "this" === t || "rest" === t) && 0 === n)) || e.match(Lf, ((e, t) => "typeAnnotation" === t), ((e, t) => "typeAnnotation" === t), ((e, t, n) => Of(e) && ("params" === t || "parameters" === t || "this" === t || "rest" === t) && 0 === n)) ? C : yf(C, { shouldBreak: p })
                        }
                    };
                    const { printComments: Mf, printDanglingComments: jf } = ma, { builders: { concat: Rf, line: qf, hardline: Vf, softline: $f, group: Wf, indent: Uf, conditionalGroup: Jf, fill: zf, ifBreak: Hf, lineSuffixBoundary: Gf }, utils: { willBreak: Xf, isLineNext: Yf, isEmpty: Kf } } = cn, { getLast: Qf, getPreferredQuote: Zf } = Lt, { hasTrailingComment: eh, isEmptyJSXElement: th, isJSXWhitespaceExpression: nh, isJSXNode: rh, isMeaningfulJSXText: oh, matchJsxWhitespaceRegex: uh, rawText: ih, isLiteral: ah, isCallOrOptionalCallExpression: sh, isStringLiteral: ch, isBinaryish: lh, isBlockComment: ph } = yc, { willPrintOwnComments: dh } = Kc;

                    function fh(e, t, n, r) { return e ? "" : "JSXElement" === n.type && !n.closingElement || r && "JSXElement" === r.type && !r.closingElement ? 1 === t.length ? $f : Vf : $f }

                    function hh(e, t, n, r) { return e ? Vf : 1 === t.length ? "JSXElement" === n.type && !n.closingElement || r && "JSXElement" === r.type && !r.closingElement ? Vf : $f : Vf }

                    function mh(e, t, n) {
                        const r = e.getValue();
                        return Rf(["{", e.call((e => {
                            const r = Rf(["...", n(e)]),
                                o = e.getValue();
                            return o.comments && o.comments.length && dh(e) ? Rf([Uf(Rf([$f, Mf(e, (() => r), t)])), $f]) : r
                        }), "JSXSpreadAttribute" === r.type ? "argument" : "expression"), "}"])
                    }
                    var gh = {
                        printJsxElement: function(e, t, n) {
                            const r = Mf(e, (() => function(e, t, n) {
                                const r = e.getValue();
                                if ("JSXElement" === r.type && th(r)) return Rf([e.call(n, "openingElement"), e.call(n, "closingElement")]);
                                const o = "JSXElement" === r.type ? e.call(n, "openingElement") : e.call(n, "openingFragment"),
                                    u = "JSXElement" === r.type ? e.call(n, "closingElement") : e.call(n, "closingFragment");
                                if (1 === r.children.length && "JSXExpressionContainer" === r.children[0].type && ("TemplateLiteral" === r.children[0].expression.type || "TaggedTemplateExpression" === r.children[0].expression.type)) return Rf([o, Rf(e.map(n, "children")), u]);
                                r.children = r.children.map((e => nh(e) ? { type: "JSXText", value: " ", raw: " " } : e));
                                const i = r.children.filter(rh).length > 0,
                                    a = r.children.filter((e => "JSXExpressionContainer" === e.type)).length > 1,
                                    s = "JSXElement" === r.type && r.openingElement.attributes.length > 1;
                                let c = Xf(o) || i || s || a;
                                const l = "mdx" === e.getParentNode().rootMarker,
                                    p = t.singleQuote ? "{' '}" : '{" "}',
                                    d = l ? Rf([" "]) : Hf(Rf([p, $f]), " "),
                                    f = r.openingElement && r.openingElement.name && "fbt" === r.openingElement.name.name,
                                    h = function(e, t, n, r, o) {
                                        const u = e.getValue(),
                                            i = [];
                                        return e.each(((e, t) => {
                                            const a = e.getValue();
                                            if (ah(a)) {
                                                const e = ih(a);
                                                if (oh(a)) {
                                                    const n = e.split(uh);
                                                    if ("" === n[0]) {
                                                        if (i.push(""), n.shift(), /\n/.test(n[0])) {
                                                            const e = u.children[t + 1];
                                                            i.push(hh(o, n[1], a, e))
                                                        } else i.push(r);
                                                        n.shift()
                                                    }
                                                    let s;
                                                    if ("" === Qf(n) && (n.pop(), s = n.pop()), 0 === n.length) return;
                                                    if (n.forEach(((e, t) => { t % 2 == 1 ? i.push(qf) : i.push(e) })), void 0 !== s)
                                                        if (/\n/.test(s)) {
                                                            const e = u.children[t + 1];
                                                            i.push(hh(o, Qf(i), a, e))
                                                        } else i.push(r);
                                                    else {
                                                        const e = u.children[t + 1];
                                                        i.push(fh(o, Qf(i), a, e))
                                                    }
                                                } else /\n/.test(e) ? e.match(/\n/g).length > 1 && (i.push(""), i.push(Vf)) : (i.push(""), i.push(r))
                                            } else {
                                                const r = n(e);
                                                i.push(r);
                                                const s = u.children[t + 1];
                                                if (s && oh(s)) {
                                                    const e = ih(s).trim().split(uh)[0];
                                                    i.push(fh(o, e, a, s))
                                                } else i.push(Vf)
                                            }
                                        }), "children"), i
                                    }(e, 0, n, d, f),
                                    m = r.children.some((e => oh(e)));
                                for (let e = h.length - 2; e >= 0; e--) {
                                    const t = "" === h[e] && "" === h[e + 1],
                                        n = h[e] === Vf && "" === h[e + 1] && h[e + 2] === Vf,
                                        r = (h[e] === $f || h[e] === Vf) && "" === h[e + 1] && h[e + 2] === d,
                                        o = h[e] === d && "" === h[e + 1] && (h[e + 2] === $f || h[e + 2] === Vf),
                                        u = h[e] === d && "" === h[e + 1] && h[e + 2] === d,
                                        i = h[e] === $f && "" === h[e + 1] && h[e + 2] === Vf || h[e] === Vf && "" === h[e + 1] && h[e + 2] === $f;
                                    n && m || t || r || u || i ? h.splice(e, 2) : o && h.splice(e + 1, 2)
                                }
                                for (; h.length && (Yf(Qf(h)) || Kf(Qf(h)));) h.pop();
                                for (; h.length && (Yf(h[0]) || Kf(h[0])) && (Yf(h[1]) || Kf(h[1]));) h.shift(), h.shift();
                                const g = [];
                                h.forEach(((e, t) => {
                                    if (e === d) { if (1 === t && "" === h[t - 1]) return 2 === h.length ? void g.push(p) : void g.push(Rf([p, Vf])); if (t === h.length - 1) return void g.push(p); if ("" === h[t - 1] && h[t - 2] === Vf) return void g.push(p) }
                                    g.push(e), Xf(e) && (c = !0)
                                }));
                                const D = m ? zf(g) : Wf(Rf(g), { shouldBreak: !0 });
                                if (l) return D;
                                const y = Wf(Rf([o, Uf(Rf([Vf, D])), Vf, u]));
                                return c ? y : Jf([Wf(Rf([o, Rf(h), u])), y])
                            }(e, t, n)), t);
                            return function(e, t, n) {
                                const r = e.getParentNode();
                                if (!r) return t;
                                if ({ ArrayExpression: !0, JSXAttribute: !0, JSXElement: !0, JSXExpressionContainer: !0, JSXFragment: !0, ExpressionStatement: !0, CallExpression: !0, OptionalCallExpression: !0, ConditionalExpression: !0, JsExpressionRoot: !0 }[r.type]) return t;
                                const o = e.match(void 0, (e => "ArrowFunctionExpression" === e.type), sh, (e => "JSXExpressionContainer" === e.type)),
                                    u = Fp(e, n);
                                return Wf(Rf([u ? "" : Hf("("), Uf(Rf([$f, t])), $f, u ? "" : Hf(")")]), { shouldBreak: o })
                            }(e, r, t)
                        },
                        printJsxAttribute: function(e, t, n) {
                            const r = e.getValue(),
                                o = [];
                            if (o.push(e.call(n, "name")), r.value) {
                                let u;
                                if (ch(r.value)) {
                                    let e = ih(r.value).replace(/&apos;/g, "'").replace(/&quot;/g, '"');
                                    const n = Zf(e, t.jsxSingleQuote ? "'" : '"'),
                                        o = "'" === n ? "&apos;" : "&quot;";
                                    e = e.slice(1, -1).replace(new RegExp(n, "g"), o), u = Rf([n, e, n])
                                } else u = e.call(n, "value");
                                o.push("=", u)
                            }
                            return Rf(o)
                        },
                        printJsxOpeningElement: function(e, t, n) {
                            const r = e.getValue(),
                                o = r.name && r.name.comments && r.name.comments.length > 0 || r.typeParameters && r.typeParameters.comments && r.typeParameters.comments.length > 0;
                            if (r.selfClosing && !r.attributes.length && !o) return Rf(["<", e.call(n, "name"), e.call(n, "typeParameters"), " />"]);
                            if (r.attributes && 1 === r.attributes.length && r.attributes[0].value && ch(r.attributes[0].value) && !r.attributes[0].value.value.includes("\n") && !o && (!r.attributes[0].comments || !r.attributes[0].comments.length)) return Wf(Rf(["<", e.call(n, "name"), e.call(n, "typeParameters"), " ", Rf(e.map(n, "attributes")), r.selfClosing ? " />" : ">"]));
                            const u = r.attributes.length && eh(Qf(r.attributes)),
                                i = !r.attributes.length && !o || t.jsxBracketSameLine && (!o || r.attributes.length) && !u,
                                a = r.attributes && r.attributes.some((e => e.value && ch(e.value) && e.value.value.includes("\n")));
                            return Wf(Rf(["<", e.call(n, "name"), e.call(n, "typeParameters"), Rf([Uf(Rf(e.map((e => Rf([qf, n(e)])), "attributes"))), r.selfClosing ? qf : i ? ">" : $f]), r.selfClosing ? "/>" : i ? "" : ">"]), { shouldBreak: a })
                        },
                        printJsxClosingElement: function(e, t, n) { return Rf(["</", e.call(n, "name"), ">"]) },
                        printJsxOpeningClosingFragment: function(e, t) {
                            const n = e.getValue(),
                                r = n.comments && n.comments.length,
                                o = r && !n.comments.every((e => ph(e))),
                                u = "JSXOpeningFragment" === n.type;
                            return Rf([u ? "<" : "</", Uf(Rf([o ? Vf : r && !u ? " " : "", jf(e, t, !0)])), o ? Vf : "", ">"])
                        },
                        printJsxExpressionContainer: function(e, t, n) {
                            const r = e.getValue(),
                                o = e.getParentNode(0),
                                u = r.expression.comments && r.expression.comments.length > 0,
                                i = "JSXEmptyExpression" === r.expression.type || !u && ("ArrayExpression" === r.expression.type || "ObjectExpression" === r.expression.type || "ArrowFunctionExpression" === r.expression.type || "CallExpression" === r.expression.type || "OptionalCallExpression" === r.expression.type || "FunctionExpression" === r.expression.type || "TemplateLiteral" === r.expression.type || "TaggedTemplateExpression" === r.expression.type || "DoExpression" === r.expression.type || rh(o) && ("ConditionalExpression" === r.expression.type || lh(r.expression)));
                            return Wf(Rf(i ? ["{", e.call(n, "expression"), Gf, "}"] : ["{", Uf(Rf([$f, e.call(n, "expression")])), $f, Gf, "}"]))
                        },
                        printJsxEmptyExpression: function(e, t) {
                            const n = e.getValue(),
                                r = n.comments && !n.comments.every((e => ph(e)));
                            return Rf([jf(e, t, !r), r ? Vf : ""])
                        },
                        printJsxSpreadAttribute: mh,
                        printJsxSpreadChild: mh
                    };
                    const { printDanglingComments: Dh } = ma, { builders: { concat: yh, join: Eh, line: Ch, hardline: bh, softline: vh, group: Ah, indent: Fh, ifBreak: xh } } = cn, { hasDanglingComments: Sh, isTestCall: wh, isBlockComment: Th, shouldPrintComma: Bh } = yc, { shouldHugType: kh } = Yd, Nh = new WeakMap;

                    function Ph(e) { return Nh.has(e) || Nh.set(e, Symbol("typeParameters")), Nh.get(e) }

                    function Oh(e, t) {
                        const n = e.getValue();
                        if (!Sh(n)) return "";
                        const r = n.comments.every((e => Th(e))),
                            o = Dh(e, t, r);
                        return r ? o : yh([o, bh])
                    }
                    var _h = { printTypeParameters: function(e, t, n, r) { const o = e.getValue(); if (!o[r]) return ""; if (!Array.isArray(o[r])) return e.call(n, r); const u = e.getNode(2); return null != u && wh(u) || 0 === o[r].length || 1 === o[r].length && (kh(o[r][0]) || "GenericTypeAnnotation" === o[r][0].type && kh(o[r][0].id) || "TSTypeReference" === o[r][0].type && kh(o[r][0].typeName) || "NullableTypeAnnotation" === o[r][0].type) ? yh(["<", Eh(", ", e.map(n, r)), Oh(e, t), ">"]) : Ah(yh(["<", Fh(yh([vh, Eh(yh([",", Ch]), e.map(n, r))])), xh("typescript" !== t.parser && "babel-ts" !== t.parser && Bh(t, "all") ? "," : ""), vh, ">"]), { id: Ph(o) }) }, getTypeParametersGroupId: Ph };
                    const { printComments: Lh } = ma, { printString: Ih, printNumber: Mh } = Lt, { builders: { concat: jh } } = cn, { isNumericLiteral: Rh, isSimpleNumber: qh, isStringLiteral: Vh, isStringPropSafeToUnquote: $h, rawText: Wh } = yc, Uh = new WeakMap;
                    var Jh = {
                        printPropertyKey: function(e, t, n) {
                            const r = e.getNode();
                            if (r.computed) return jh(["[", e.call(n, "key"), "]"]);
                            const o = e.getParentNode(),
                                { key: u } = r;
                            if ("ClassPrivateProperty" === r.type && "Identifier" === u.type) return jh(["#", e.call(n, "key")]);
                            if ("consistent" === t.quoteProps && !Uh.has(o)) {
                                const e = (o.properties || o.body || o.members).some((e => !e.computed && e.key && Vh(e.key) && !$h(e, t)));
                                Uh.set(o, e)
                            }
                            if (("Identifier" === u.type || Rh(u) && qh(Mh(Wh(u))) && String(u.value) === Mh(Wh(u)) && "typescript" !== t.parser && "babel-ts" !== t.parser) && ("json" === t.parser || "consistent" === t.quoteProps && Uh.get(o))) { const n = Ih(JSON.stringify("Identifier" === u.type ? u.name : u.value.toString()), t); return e.call((e => Lh(e, (() => n), t)), "key") }
                            return $h(r, t) && ("as-needed" === t.quoteProps || "consistent" === t.quoteProps && !Uh.get(o)) ? e.call((e => Lh(e, (() => /^\d/.test(u.value) ? Mh(u.value) : u.value), t)), "key") : e.call(n, "key")
                        }
                    };
                    const { printDanglingComments: zh } = ma, { getNextNonSpaceNonCommentCharacterIndex: Hh } = Lt, { builders: { concat: Gh, line: Xh, softline: Yh, group: Kh, indent: Qh, ifBreak: Zh, hardline: em } } = cn, { getFunctionParameters: tm, hasDanglingComments: nm, hasLeadingOwnLineComment: rm, isFlowAnnotationComment: om, isJSXNode: um, isTemplateOnItsOwnLine: im, shouldPrintComma: am, startsWithNoLookaheadToken: sm, returnArgumentHasLeadingComment: cm, isBinaryish: lm, isLineComment: pm } = yc, { locEnd: dm } = Qu, { printFunctionParameters: fm } = Jd, { printPropertyKey: hm } = Jh, { printFunctionTypeParameters: mm } = Vp;

                    function gm(e, t, n) { const r = [mm(e, t, n), Kh(Gh([fm(e, n, t), ym(e, n, t)]))]; return e.getNode().body ? r.push(" ", e.call(n, "body")) : r.push(t.semi ? ";" : ""), Gh(r) }

                    function Dm(e, t) { return "always" !== t.arrowParens && "avoid" === t.arrowParens && function(e) { const t = tm(e); return !(1 !== t.length || e.typeParameters || nm(e) || "Identifier" !== t[0].type || t[0].typeAnnotation || t[0].comments || t[0].optional || e.predicate || e.returnType) }(e.getValue()) }

                    function ym(e, t, n) {
                        const r = e.getValue(),
                            o = e.call(t, "returnType");
                        if (r.returnType && om(n.originalText, r.returnType)) return Gh([" /*: ", o, " */"]);
                        const u = [o];
                        return r.returnType && r.returnType.typeAnnotation && u.unshift(": "), r.predicate && u.push(r.returnType ? " " : ": ", e.call(t, "predicate")), Gh(u)
                    }
                    var Em = {
                        printFunctionDeclaration: function(e, t, n, r) {
                            const o = e.getValue(),
                                u = [];
                            return o.async && u.push("async "), o.generator ? u.push("function* ") : u.push("function "), o.id && u.push(e.call(t, "id")), u.push(mm(e, n, t), Kh(Gh([fm(e, t, n, r), ym(e, t, n)])), o.body ? " " : "", e.call(t, "body")), Gh(u)
                        },
                        printArrowFunctionExpression: function(e, t, n, r) {
                            const o = e.getValue(),
                                u = [];
                            o.async && u.push("async "), Dm(e, t) ? u.push(e.call(n, "params", 0)) : u.push(Kh(Gh([fm(e, n, t, r && (r.expandLastArg || r.expandFirstArg), !0), ym(e, n, t)])));
                            const i = zh(e, t, !0, (e => { const n = Hh(t.originalText, e, dm); return !1 !== n && "=>" === t.originalText.slice(n, n + 2) }));
                            i && u.push(" ", i), u.push(" =>");
                            const a = e.call((e => n(e, r)), "body");
                            if (!rm(t.originalText, o.body) && ("ArrayExpression" === o.body.type || "ObjectExpression" === o.body.type || "BlockStatement" === o.body.type || um(o.body) || im(o.body, t.originalText) || "ArrowFunctionExpression" === o.body.type || "DoExpression" === o.body.type)) return Kh(Gh([Gh(u), " ", a]));
                            if ("SequenceExpression" === o.body.type) return Kh(Gh([Gh(u), Kh(Gh([" (", Qh(Gh([Yh, a])), Yh, ")"]))]));
                            const s = (r && r.expandLastArg || "JSXExpressionContainer" === e.getParentNode().type) && !(o.comments && o.comments.length),
                                c = r && r.expandLastArg && am(t, "all"),
                                l = "ConditionalExpression" === o.body.type && !sm(o.body, !1);
                            return Kh(Gh([Gh(u), Kh(Gh([Qh(Gh([Xh, l ? Zh("", "(") : "", a, l ? Zh("", ")") : ""])), s ? Gh([Zh(c ? "," : ""), Yh]) : ""]))]))
                        },
                        printMethod: function(e, t, n) {
                            const r = e.getNode(),
                                { kind: o } = r,
                                u = r.value || r,
                                i = [];
                            return o && "init" !== o && "method" !== o && "constructor" !== o ? (zi.ok("get" === o || "set" === o), i.push(o, " ")) : u.async && i.push("async "), u.generator && i.push("*"), i.push(hm(e, t, n), r.optional || r.key.optional ? "?" : "", r === u ? gm(e, t, n) : e.call((e => gm(e, t, n)), "value")), Gh(i)
                        },
                        printReturnAndThrowArgument: function(e, t, n) {
                            const r = e.getValue(),
                                o = t.semi ? ";" : "",
                                u = [];
                            r.argument && (cm(t, r.argument) ? u.push(Gh([" (", Qh(Gh([em, e.call(n, "argument")])), em, ")"])) : lm(r.argument) || "SequenceExpression" === r.argument.type ? u.push(Kh(Gh([Zh(" (", " "), Qh(Gh([Yh, e.call(n, "argument")])), Yh, Zh(")")]))) : u.push(" ", e.call(n, "argument")));
                            const i = Array.isArray(r.comments) && r.comments[r.comments.length - 1],
                                a = i && pm(i);
                            return a && u.push(o), nm(r) && u.push(" ", zh(e, t, !0)), a || u.push(o), Gh(u)
                        },
                        shouldPrintParamsWithoutParens: Dm
                    };
                    const { printComments: Cm, printDanglingComments: bm } = ma, { builders: { concat: vm, join: Am, line: Fm, hardline: xm, softline: Sm, group: wm, indent: Tm, ifBreak: Bm } } = cn, { hasTrailingComment: km, hasTrailingLineComment: Nm } = yc, { getTypeParametersGroupId: Pm } = _h, { printMethod: Om } = Em, { printDecorators: _m } = Vp;

                    function Lm(e) { return e.typeParameters && !Nm(e.typeParameters) && ! function(e) { return ["superClass", "extends", "mixins", "implements"].filter((t => !!e[t])).length > 1 }(e) }

                    function Im(e, t, n, r) { const o = e.getValue(); if (!o[r] || 0 === o[r].length) return ""; const u = bm(e, t, !0, (({ marker: e }) => e === r)); return vm([Lm(o) ? Bm(" ", Fm, { groupId: Pm(o.typeParameters) }) : Fm, u, u && xm, r, wm(Tm(vm([Fm, Am(vm([",", Fm]), e.map(n, r))])))]) }

                    function Mm(e, t, n) { const r = e.call(n, "superClass"); return "AssignmentExpression" === e.getParentNode().type ? wm(Bm(vm(["(", Tm(vm([Sm, r])), Sm, ")"]), r)) : r }
                    var jm = {
                        printClass: function(e, t, n) {
                            const r = e.getValue(),
                                o = [];
                            r.abstract && o.push("abstract "), o.push("class");
                            const u = r.id && km(r.id) || r.superClass && r.superClass.comments && 0 !== r.superClass.comments.length || r.extends && 0 !== r.extends.length || r.mixins && 0 !== r.mixins.length || r.implements && 0 !== r.implements.length,
                                i = [],
                                a = [];
                            if (r.id && i.push(" ", e.call(n, "id")), i.push(e.call(n, "typeParameters")), r.superClass) {
                                const r = vm(["extends ", Mm(e, 0, n), e.call(n, "superTypeParameters")]),
                                    o = e.call((e => Cm(e, (() => r), t)), "superClass");
                                u ? a.push(Fm, wm(o)) : a.push(" ", o)
                            } else a.push(Im(e, t, n, "extends"));
                            if (a.push(Im(e, t, n, "mixins")), a.push(Im(e, t, n, "implements")), u) {
                                const e = vm(a);
                                Lm(r) ? o.push(wm(vm(i.concat(Bm(Tm(e), e))))) : o.push(wm(Tm(vm(i.concat(e)))))
                            } else o.push(...i, ...a);
                            return o.push(" ", e.call(n, "body")), vm(o)
                        },
                        printClassMethod: function(e, t, n) {
                            const r = e.getValue(),
                                o = [];
                            return r.decorators && 0 !== r.decorators.length && o.push(_m(e, t, n)), r.accessibility && o.push(r.accessibility + " "), r.static && o.push("static "), ("TSAbstractMethodDefinition" === r.type || r.abstract) && o.push("abstract "), o.push(Om(e, t, n)), vm(o)
                        }
                    };
                    const { getLast: Rm, getPenultimate: qm, isNextLineEmpty: Vm } = Lt, { getFunctionParameters: $m, iterateFunctionParametersPath: Wm, hasLeadingComment: Um, hasTrailingComment: Jm, isFunctionCompositionArgs: zm, isJSXNode: Hm, isLongCurriedCallExpression: Gm, shouldPrintComma: Xm, getCallArguments: Ym, iterateCallArgumentsPath: Km } = yc, { locEnd: Qm } = Qu, { builders: { concat: Zm, line: eg, hardline: tg, softline: ng, group: rg, indent: og, conditionalGroup: ug, ifBreak: ig, breakParent: ag }, utils: { willBreak: sg } } = cn;

                    function cg(e) { return "ObjectExpression" === e.type && (e.properties.length > 0 || e.comments) || "ArrayExpression" === e.type && (e.elements.length > 0 || e.comments) || "TSTypeAssertion" === e.type && cg(e.expression) || "TSAsExpression" === e.type && cg(e.expression) || "FunctionExpression" === e.type || "ArrowFunctionExpression" === e.type && (!e.returnType || !e.returnType.typeAnnotation || "TSTypeReference" !== e.returnType.typeAnnotation.type) && ("BlockStatement" === e.body.type || "ArrowFunctionExpression" === e.body.type || "ObjectExpression" === e.body.type || "ArrayExpression" === e.body.type || "CallExpression" === e.body.type || "OptionalCallExpression" === e.body.type || "ConditionalExpression" === e.body.type || Hm(e.body)) }
                    var lg = function(e, t, n) {
                        const r = e.getValue(),
                            o = "ImportExpression" === r.type,
                            u = Ym(r);
                        if (0 === u.length) return Zm(["(", ma.printDanglingComments(e, t, !0), ")"]);
                        if (2 === u.length && "ArrowFunctionExpression" === u[0].type && 0 === $m(u[0]).length && "BlockStatement" === u[0].body.type && "ArrayExpression" === u[1].type && !u.some((e => e.comments))) return Zm(["(", e.call(n, "arguments", 0), ", ", e.call(n, "arguments", 1), ")"]);
                        let i = !1,
                            a = !1,
                            s = !1;
                        const c = u.length - 1,
                            l = [];
                        Km(e, ((e, r) => {
                            const o = e.getNode(),
                                u = [n(e)];
                            r === c || (Vm(t.originalText, o, Qm) ? (0 === r && (s = !0), i = !0, u.push(",", tg, tg)) : u.push(",", eg)), a = function(e, t) { if (!e || "ArrowFunctionExpression" !== e.type || !e.body || "BlockStatement" !== e.body.type || 0 === $m(e).length) return !1; let r = !1; return Wm(t, (e => { r = r || sg(Zm([n(e)])) })), r }(o, e), l.push(Zm(u))
                        }));
                        const p = o || r.callee && "Import" === r.callee.type || !Xm(t, "all") ? "" : ",";

                        function d() { return rg(Zm(["(", og(Zm([eg, Zm(l)])), p, eg, ")"]), { shouldBreak: !0 }) }
                        if ("Decorator" !== e.getParentNode().type && zm(u)) return d();
                        const f = function(e) { if (2 !== e.length) return !1; const [t, n] = e; return !(t.comments && t.comments.length || "FunctionExpression" !== t.type && ("ArrowFunctionExpression" !== t.type || "BlockStatement" !== t.body.type) || "FunctionExpression" === n.type || "ArrowFunctionExpression" === n.type || "ConditionalExpression" === n.type || cg(n)) }(u),
                            h = function(e) {
                                const t = Rm(e),
                                    n = qm(e);
                                return !Um(t) && !Jm(t) && cg(t) && (!n || n.type !== t.type)
                            }(u);
                        if (f || h) {
                            const t = (f ? l.slice(1).some(sg) : l.slice(0, -1).some(sg)) || i || a;
                            let o = [];
                            Km(e, ((e, t) => { f && 0 === t && (o = [Zm([e.call((e => n(e, { expandFirstArg: !0 }))), l.length > 1 ? "," : "", s ? tg : eg, s ? tg : ""])].concat(l.slice(1))), h && t === u.length - 1 && (o = l.slice(0, -1).concat(e.call((e => n(e, { expandLastArg: !0 }))))) }));
                            const c = l.some(sg),
                                p = Zm(["(", Zm(o), ")"]);
                            return Zm([c ? ag : "", ug([c || r.typeArguments || r.typeParameters ? ig(d(), p) : p, Zm(f ? ["(", rg(o[0], { shouldBreak: !0 }), Zm(o.slice(1)), ")"] : ["(", Zm(l.slice(0, -1)), rg(Rm(o), { shouldBreak: !0 }), ")"]), d()], { shouldBreak: t })])
                        }
                        const m = Zm(["(", og(Zm([ng, Zm(l)])), ig(p), ng, ")"]);
                        return Gm(e) ? m : rg(m, { shouldBreak: l.some(sg) || i })
                    };
                    const { builders: { concat: pg, softline: dg, group: fg, indent: hg } } = cn, { isNumericLiteral: mg } = yc, { printOptionalToken: gg } = Vp;

                    function Dg(e, t, n) {
                        const r = e.call(n, "property"),
                            o = e.getValue(),
                            u = gg(e);
                        return o.computed ? !o.property || mg(o.property) ? pg([u, "[", r, "]"]) : fg(pg([u, "[", hg(pg([dg, r])), dg, "]"])) : pg([u, ".", r])
                    }
                    var yg = {
                        printMemberExpression: function(e, t, n) {
                            const r = e.getValue(),
                                o = e.getParentNode();
                            let u, i = 0;
                            do { u = e.getParentNode(i), i++ } while (u && ("MemberExpression" === u.type || "OptionalMemberExpression" === u.type || "TSNonNullExpression" === u.type));
                            const a = u && ("NewExpression" === u.type || "BindExpression" === u.type || "VariableDeclarator" === u.type && "Identifier" !== u.id.type || "AssignmentExpression" === u.type && "Identifier" !== u.left.type) || r.computed || "Identifier" === r.object.type && "Identifier" === r.property.type && "MemberExpression" !== o.type && "OptionalMemberExpression" !== o.type;
                            return pg([e.call(n, "object"), a ? Dg(e, 0, n) : fg(hg(pg([dg, Dg(e, 0, n)])))])
                        },
                        printMemberLookup: Dg
                    };
                    const { getLast: Eg, isNextLineEmpty: Cg, isNextLineEmptyAfterIndex: bg, getNextNonSpaceNonCommentCharacterIndex: vg } = Lt, { hasLeadingComment: Ag, hasTrailingComment: Fg, isCallOrOptionalCallExpression: xg, isFunctionOrArrowExpression: Sg, isLongCurriedCallExpression: wg, isMemberish: Tg, isNumericLiteral: Bg, isSimpleCallArgument: kg } = yc, { locEnd: Ng } = Qu, { builders: { concat: Pg, join: Og, hardline: _g, group: Lg, indent: Ig, conditionalGroup: Mg, breakParent: jg }, utils: { willBreak: Rg } } = cn, { printMemberLookup: qg } = yg, { printOptionalToken: Vg, printFunctionTypeParameters: $g, printBindExpressionCallee: Wg } = Vp;
                    var Ug = function(e, t, n) {
                        const r = e.getParentNode(),
                            o = !r || "ExpressionStatement" === r.type,
                            u = [];

                        function i(e) { const { originalText: n } = t, r = vg(n, e, Ng); return ")" === n.charAt(r) ? !1 !== r && bg(n, r + 1) : Cg(n, e, Ng) }

                        function a(e) {
                            const r = e.getValue();
                            xg(r) && (Tg(r.callee) || xg(r.callee)) ? (u.unshift({ node: r, printed: Pg([ma.printComments(e, (() => Pg([Vg(e), $g(e, t, n), lg(e, t, n)])), t), i(r) ? _g : ""]) }), e.call((e => a(e)), "callee")) : Tg(r) ? (u.unshift({ node: r, needsParens: Fp(e, t), printed: ma.printComments(e, (() => "OptionalMemberExpression" === r.type || "MemberExpression" === r.type ? qg(e, t, n) : Wg(e, t, n)), t) }), e.call((e => a(e)), "object")) : "TSNonNullExpression" === r.type ? (u.unshift({ node: r, printed: ma.printComments(e, (() => "!"), t) }), e.call((e => a(e)), "expression")) : u.unshift({ node: r, printed: e.call(n) })
                        }
                        const s = e.getValue();
                        u.unshift({ node: s, printed: Pg([Vg(e), $g(e, t, n), lg(e, t, n)]) }), s.callee && e.call((e => a(e)), "callee");
                        const c = [];
                        let l = [u[0]],
                            p = 1;
                        for (; p < u.length && ("TSNonNullExpression" === u[p].node.type || xg(u[p].node) || ("MemberExpression" === u[p].node.type || "OptionalMemberExpression" === u[p].node.type) && u[p].node.computed && Bg(u[p].node.property)); ++p) l.push(u[p]);
                        if (!xg(u[0].node))
                            for (; p + 1 < u.length && Tg(u[p].node) && Tg(u[p + 1].node); ++p) l.push(u[p]);
                        c.push(l), l = [];
                        let d = !1;
                        for (; p < u.length; ++p) {
                            if (d && Tg(u[p].node)) {
                                if (u[p].node.computed && Bg(u[p].node.property)) { l.push(u[p]); continue }
                                c.push(l), l = [], d = !1
                            }(xg(u[p].node) || "ImportExpression" === u[p].node.type) && (d = !0), l.push(u[p]), u[p].node.comments && u[p].node.comments.some((e => e.trailing)) && (c.push(l), l = [], d = !1)
                        }

                        function f(e) { return /^[A-Z]|^[$_]+$/.test(e) }
                        l.length > 0 && c.push(l);
                        const h = c.length >= 2 && !c[1][0].node.comments && function(e) { const n = e[1].length && e[1][0].node.computed; if (1 === e[0].length) { const r = e[0][0].node; return "ThisExpression" === r.type || "Identifier" === r.type && (f(r.name) || o && function(e) { return e.length <= t.tabWidth }(r.name) || n) } const r = Eg(e[0]).node; return ("MemberExpression" === r.type || "OptionalMemberExpression" === r.type) && "Identifier" === r.property.type && (f(r.property.name) || n) }(c);

                        function m(e) { const t = e.map((e => e.printed)); return e.length > 0 && e[e.length - 1].needsParens ? Pg(["(", ...t, ")"]) : Pg(t) }
                        const g = c.map(m),
                            D = Pg(g),
                            y = h ? 3 : 2,
                            E = $u(c),
                            C = E.slice(1, -1).some((e => Ag(e.node))) || E.slice(0, -1).some((e => Fg(e.node))) || c[y] && Ag(c[y][0].node);
                        if (c.length <= y && !C) return wg(e) ? D : Lg(D);
                        const b = Eg(c[h ? 1 : 0]).node,
                            v = !xg(b) && i(b),
                            A = Pg([m(c[0]), h ? Pg(c.slice(1, 2).map(m)) : "", v ? _g : "", function(e) { return 0 === e.length ? "" : Ig(Lg(Pg([_g, Og(_g, e.map(m))]))) }(c.slice(h ? 2 : 1))]),
                            F = u.map((({ node: e }) => e)).filter(xg);
                        return C || F.length > 2 && F.some((e => !e.arguments.every((e => kg(e, 0))))) || g.slice(0, -1).some(Rg) || function() {
                            const e = Eg(Eg(c)).node,
                                t = Eg(g);
                            return xg(e) && Rg(t) && F.slice(0, -1).some((e => e.arguments.some(Sg)))
                        }() ? Lg(A) : Pg([Rg(D) || v ? jg : "", Mg([D, A])])
                    };
                    const { builders: { concat: Jg, join: zg, group: Hg } } = cn, { getCallArguments: Gg, hasFlowAnnotationComment: Xg, isCallOrOptionalCallExpression: Yg, isMemberish: Kg, isTemplateOnItsOwnLine: Qg, isTestCall: Zg, iterateCallArgumentsPath: eD } = yc, { printOptionalToken: tD, printFunctionTypeParameters: nD } = Vp;
                    var rD = {
                        printCallExpression: function(e, t, n) {
                            const r = e.getValue(),
                                o = "NewExpression" === r.type,
                                u = "ImportExpression" === r.type,
                                i = tD(e),
                                a = Gg(r);
                            if (a.length > 0 && (!u && !o && "Identifier" === r.callee.type && ("require" === r.callee.name || "define" === r.callee.name) || 1 === a.length && Qg(a[0], t.originalText) || !o && Zg(r, e.getParentNode()))) { const r = []; return eD(e, (e => { r.push(n(e)) })), Jg([o ? "new " : "", e.call(n, "callee"), i, nD(e, t, n), Jg(["(", zg(", ", r), ")"])]) }
                            const s = ("babel" === t.parser || "babel-flow" === t.parser) && r.callee && "Identifier" === r.callee.type && Xg(r.callee.trailingComments);
                            if (s && (r.callee.trailingComments[0].printed = !0), !u && !o && Kg(r.callee) && !e.call((e => Fp(e, t)), "callee")) return Ug(e, t, n);
                            const c = Jg([o ? "new " : "", u ? "import" : e.call(n, "callee"), i, s ? "/*:: ".concat(r.callee.trailingComments[0].value.slice(2).trim(), " */") : "", nD(e, t, n), lg(e, t, n)]);
                            return u || Yg(r.callee) ? Hg(c) : c
                        }
                    };
                    const { builders: { concat: oD, join: uD, line: iD, group: aD, indent: sD, ifBreak: cD } } = cn, { hasTrailingComment: lD, hasTrailingLineComment: pD, identity: dD } = yc, { getTypeParametersGroupId: fD } = _h, { printTypeScriptModifiers: hD } = Vp;
                    var mD = {
                        printInterface: function(e, t, n) {
                            const r = e.getValue(),
                                o = [];
                            ("DeclareInterface" === r.type || r.declare) && o.push("declare "), "TSInterfaceDeclaration" === r.type && o.push(r.abstract ? "abstract " : "", hD(e, t, n)), o.push("interface");
                            const u = [],
                                i = [];
                            "InterfaceTypeAnnotation" !== r.type && u.push(" ", e.call(n, "id"), e.call(n, "typeParameters"));
                            const a = r.typeParameters && !pD(r.typeParameters);
                            if (r.extends && 0 !== r.extends.length && i.push(a ? cD(" ", iD, { groupId: fD(r.typeParameters) }) : iD, "extends ", (1 === r.extends.length ? dD : sD)(uD(oD([",", iD]), e.map(n, "extends")))), r.id && lD(r.id) || r.extends && 0 !== r.extends.length) {
                                const e = oD(i);
                                a ? o.push(aD(oD(u.concat(cD(sD(e), e))))) : o.push(aD(sD(oD(u.concat(e)))))
                            } else o.push(...u, ...i);
                            return o.push(" ", e.call(n, "body")), aD(oD(o))
                        }
                    };
                    const { printComments: gD } = ma, { getLast: DD } = Lt, { builders: { concat: yD, join: ED, line: CD, softline: bD, group: vD, indent: AD, align: FD, ifBreak: xD }, utils: { normalizeParts: SD } } = cn, { hasLeadingOwnLineComment: wD, hasTrailingLineComment: TD, isBinaryish: BD, isJSXNode: kD, shouldFlatten: ND } = yc;
                    let PD = 0;

                    function OD(e, t, n, r, o) {
                        let u = [];
                        const i = e.getValue();
                        if (BD(i)) {
                            ND(i.operator, i.left.operator) ? u = u.concat(e.call((e => OD(e, t, n, !0, o)), "left")) : u.push(vD(e.call(t, "left")));
                            const a = _D(i),
                                s = ("|>" === i.operator || "NGPipeExpression" === i.type || "|" === i.operator && "__vue_expression" === n.parser) && !wD(n.originalText, i.right),
                                c = "NGPipeExpression" === i.type ? "|" : i.operator,
                                l = "NGPipeExpression" === i.type && 0 !== i.arguments.length ? vD(AD(yD([bD, ": ", ED(yD([bD, ":", xD(" ")]), e.map(t, "arguments").map((e => FD(2, vD(e)))))]))) : "",
                                p = yD(a ? [c, " ", e.call(t, "right"), l] : [s ? CD : "", c, s ? " " : CD, e.call(t, "right"), l]),
                                d = e.getParentNode(),
                                f = TD(i.left),
                                h = f || !(o && "LogicalExpression" === i.type) && d.type !== i.type && i.left.type !== i.type && i.right.type !== i.type;
                            u.push(s ? "" : " ", h ? vD(p, { shouldBreak: f }) : p), r && i.comments && (u = SD(gD(e, (() => yD(u)), n).parts))
                        } else u.push(vD(e.call(t)));
                        return u
                    }

                    function _D(e) { return "LogicalExpression" === e.type && ("ObjectExpression" === e.right.type && 0 !== e.right.properties.length || "ArrayExpression" === e.right.type && 0 !== e.right.elements.length || !!kD(e.right)) }
                    var LD = {
                        printBinaryishExpression: function(e, t, n) {
                            const r = e.getValue(),
                                o = e.getParentNode(),
                                u = e.getParentNode(1),
                                i = r !== o.body && ("IfStatement" === o.type || "WhileStatement" === o.type || "SwitchStatement" === o.type || "DoWhileStatement" === o.type),
                                a = OD(e, n, t, !1, i);
                            if (i) return yD(a);
                            if (("CallExpression" === o.type || "OptionalCallExpression" === o.type) && o.callee === r || "UnaryExpression" === o.type || ("MemberExpression" === o.type || "OptionalMemberExpression" === o.type) && !o.computed) return vD(yD([AD(yD([bD, yD(a)])), bD]));
                            const s = "ReturnStatement" === o.type || "ThrowStatement" === o.type || "JSXExpressionContainer" === o.type && "JSXAttribute" === u.type || "|" !== r.operator && "JsExpressionRoot" === o.type || "NGPipeExpression" !== r.type && ("NGRoot" === o.type && "__ng_binding" === t.parser || "NGMicrosyntaxExpression" === o.type && "NGMicrosyntax" === u.type && 1 === u.body.length) || r === o.body && "ArrowFunctionExpression" === o.type || r !== o.body && "ForStatement" === o.type || "ConditionalExpression" === o.type && "ReturnStatement" !== u.type && "ThrowStatement" !== u.type && "CallExpression" !== u.type && "OptionalCallExpression" !== u.type || "TemplateLiteral" === o.type,
                                c = "AssignmentExpression" === o.type || "VariableDeclarator" === o.type || "ClassProperty" === o.type || "FieldDefinition" === o.type || "TSAbstractClassProperty" === o.type || "ClassPrivateProperty" === o.type || "ObjectProperty" === o.type || "Property" === o.type,
                                l = BD(r.left) && ND(r.operator, r.left.operator);
                            if (s || _D(r) && !l || !_D(r) && c) return vD(yD(a));
                            if (0 === a.length) return "";
                            const p = kD(r.right),
                                d = a.findIndex((e => "string" != typeof e && "group" === e.type)),
                                f = a.slice(0, -1 === d ? 1 : d + 1),
                                h = yD(a.slice(f.length, p ? -1 : void 0)),
                                m = Symbol("logicalChain-" + ++PD),
                                g = vD(yD([...f, AD(h)]), { id: m });
                            if (!p) return g;
                            const D = DD(a);
                            return vD(yD([g, xD(AD(D), D, { groupId: m })]))
                        },
                        shouldInlineLogicalExpression: _D
                    };
                    const { builders: { concat: ID, line: MD, group: jD, indent: RD } } = cn, { hasLeadingOwnLineComment: qD, isBinaryish: VD, isMemberExpressionChain: $D, isStringLiteral: WD } = yc, { shouldInlineLogicalExpression: UD } = LD;

                    function JD(e, t, n, r, o, u) { if (!r) return t; const i = zD(e, r, o, u); return jD(ID([t, n, i])) }

                    function zD(e, t, n, r) { return qD(r.originalText, t) ? RD(ID([MD, n])) : VD(t) && !UD(t) || "ConditionalExpression" === t.type && VD(t.test) && !UD(t.test) || "StringLiteralTypeAnnotation" === t.type || "ClassExpression" === t.type && t.decorators && t.decorators.length || ("Identifier" === e.type || WD(e) || "MemberExpression" === e.type) && (WD(t) || $D(t)) && "json" !== r.parser && "json5" !== r.parser || "SequenceExpression" === t.type ? jD(RD(ID([MD, n]))) : ID([" ", n]) }
                    var HD = { printVariableDeclarator: function(e, t, n) { const r = e.getValue(); return JD(r.id, e.call(n, "id"), " =", r.init, r.init && e.call(n, "init"), t) }, printAssignmentExpression: function(e, t, n) { const r = e.getValue(); return JD(r.left, e.call(n, "left"), ID([" ", r.operator]), r.right, e.call(n, "right"), t) }, printAssignment: JD, printAssignmentRight: zD };
                    const { isNextLineEmpty: GD } = Lt, { builders: { concat: XD, join: YD, hardline: KD } } = cn, { classChildNeedsASIProtection: QD, classPropMayCauseASIProblems: ZD, getLeftSidePathName: ey, hasNakedLeftSide: ty, isJSXNode: ny, isLastStatement: ry, isTheOnlyJSXElementInMarkdown: oy } = yc, { locEnd: uy } = Qu, { shouldPrintParamsWithoutParens: iy } = Em;

                    function ay({ path: e, index: t, bodyNode: n, isClass: r }, o, u) {
                        const i = e.getValue();
                        if (!i) return;
                        if ("EmptyStatement" === i.type) return;
                        const a = u(e),
                            s = o.originalText,
                            c = [];
                        if (o.semi || r || oy(o, e) || ! function(e, t) { return "ExpressionStatement" === e.getNode().type && e.call((e => sy(e, t)), "expression") }(e, o) ? c.push(a) : i.comments && i.comments.some((e => e.leading)) ? c.push(u(e, { needsSemi: !0 })) : c.push(";", a), !o.semi && r)
                            if (ZD(e)) c.push(";");
                            else if ("ClassProperty" === i.type || "FieldDefinition" === i.type) {
                            const e = n.body[t + 1];
                            QD(e) && c.push(";")
                        }
                        return GD(s, i, uy) && !ry(e) && c.push(KD), XD(c)
                    }

                    function sy(e, t) { const n = e.getValue(); return !!(Fp(e, t) || "ParenthesizedExpression" === n.type || "TypeCastExpression" === n.type || "ArrowFunctionExpression" === n.type && !iy(e, t) || "ArrayExpression" === n.type || "ArrayPattern" === n.type || "UnaryExpression" === n.type && n.prefix && ("+" === n.operator || "-" === n.operator) || "TemplateLiteral" === n.type || "TemplateElement" === n.type || ny(n) || "BindExpression" === n.type && !n.object || "RegExpLiteral" === n.type || "Literal" === n.type && n.pattern || "Literal" === n.type && n.regex) || !!ty(n) && e.call((e => sy(e, t)), ...ey(e, n)) }
                    var cy = {
                        printStatementSequence: function(e, t, n) {
                            const r = e.getNode(),
                                o = "ClassBody" === r.type,
                                u = e.map(((u, i) => ay({ path: e, index: i, bodyNode: r, isClass: o }, t, n))).filter(Boolean);
                            return YD(KD, u)
                        }
                    };
                    const { printDanglingComments: ly } = ma, { isNextLineEmpty: py } = Lt, { builders: { concat: dy, hardline: fy, indent: hy } } = cn, { hasDanglingComments: my } = yc, { locEnd: gy } = Qu, { printStatementSequence: Dy } = cy;
                    var yy = {
                        printBlock: function(e, t, n) {
                            const r = e.getValue(),
                                o = [],
                                u = t.semi ? ";" : "",
                                i = e.call((e => Dy(e, t, n)), "body");
                            "StaticBlock" === r.type && o.push("static ");
                            const a = r.body.some((e => "EmptyStatement" !== e.type)),
                                s = r.directives && r.directives.length > 0,
                                c = e.getParentNode(),
                                l = e.getParentNode(1);
                            return a || s || my(r) || "ArrowFunctionExpression" !== c.type && "FunctionExpression" !== c.type && "FunctionDeclaration" !== c.type && "ObjectMethod" !== c.type && "ClassMethod" !== c.type && "ClassPrivateMethod" !== c.type && "ForStatement" !== c.type && "WhileStatement" !== c.type && "DoWhileStatement" !== c.type && "DoExpression" !== c.type && ("CatchClause" !== c.type || l.finalizer) && "TSModuleDeclaration" !== c.type && "TSDeclareFunction" !== c.type && "StaticBlock" !== r.type ? (o.push("{"), s && e.each((e => { o.push(hy(dy([fy, n(e), u]))), py(t.originalText, e.getValue(), gy) && o.push(fy) }), "directives"), a && o.push(hy(dy([fy, i]))), o.push(ly(e, t)), o.push(fy, "}"), dy(o)) : dy([...o, "{}"])
                        }
                    };
                    const { hasNewline: Ey } = Lt, { builders: { concat: Cy, join: by, hardline: vy } } = cn, { isLineComment: Ay, isBlockComment: Fy } = yc, { locStart: xy, locEnd: Sy } = Qu;
                    var wy = {
                        printComment: function(e, t) {
                            const n = e.getValue();
                            if (Ay(n)) return t.originalText.slice(xy(n), Sy(n)).trimEnd();
                            if (Fy(n)) {
                                if (function(e) { const t = "*".concat(e.value, "*").split("\n"); return t.length > 1 && t.every((e => "*" === e.trim()[0])) }(n)) { const e = function(e) { const t = e.value.split("\n"); return Cy(["/*", by(vy, t.map(((e, n) => 0 === n ? e.trimEnd() : " " + (n < t.length - 1 ? e.trim() : e.trimStart())))), "*/"]) }(n); return n.trailing && !Ey(t.originalText, xy(n), { backwards: !0 }) ? Cy([vy, e]) : e }
                                const e = Sy(n),
                                    r = "*-/" === t.originalText.slice(e - 3, e);
                                return "/*" + n.value + (r ? "*-/" : "*/")
                            }
                            throw new Error("Not a comment: " + JSON.stringify(n))
                        }
                    };
                    const { hasNewline: Ty, hasNewlineInRange: By, getLast: ky, printString: Ny, printNumber: Py, isNextLineEmpty: Oy } = Lt, { builders: { concat: _y, join: Ly, line: Iy, hardline: My, softline: jy, literalline: Ry, group: qy, indent: Vy, align: $y, conditionalGroup: Wy, ifBreak: Uy }, utils: { isEmpty: Jy } } = cn, { insertPragma: zy } = pp, { printHtmlBinding: Hy, isVueEventBindingExpression: Gy } = Np, { getFunctionParameters: Xy, getCallArguments: Yy, getParentExportDeclaration: Ky, getTypeScriptMappedTypeModifier: Qy, hasDanglingComments: Zy, hasFlowShorthandAnnotationComment: eE, hasLeadingOwnLineComment: tE, hasNewlineBetweenOrAfterDecorators: nE, hasNgSideEffect: rE, hasPrettierIgnore: oE, hasTrailingComment: uE, isExportDeclaration: iE, isFunctionNotation: aE, isGetterOrSetter: sE, isLiteral: cE, isNgForOf: lE, isObjectType: pE, isObjectTypePropertyAFunction: dE, isTheOnlyJSXElementInMarkdown: fE, isTSXFile: hE, isBlockComment: mE, needsHardlineAfterDanglingComment: gE, rawText: DE, shouldPrintComma: yE } = yc, { locStart: EE, locEnd: CE } = Qu, { printOptionalToken: bE, printBindExpressionCallee: vE, printTypeScriptModifiers: AE, printDecorators: FE, printFlowDeclaration: xE, adjustClause: SE } = Vp, { printImportDeclaration: wE, printExportDeclaration: TE, printExportAllDeclaration: BE, printModuleSpecifier: kE } = id, { printFunctionParameters: NE } = Jd, { printTemplateLiteral: PE } = ml, { printArray: OE, printArrayItems: _E } = ff, { printObject: LE } = If, { printTypeAnnotation: IE, shouldHugType: ME } = Yd, { printJsxElement: jE, printJsxAttribute: RE, printJsxOpeningElement: qE, printJsxClosingElement: VE, printJsxOpeningClosingFragment: $E, printJsxExpressionContainer: WE, printJsxEmptyExpression: UE, printJsxSpreadAttribute: JE, printJsxSpreadChild: zE } = gh, { printClass: HE, printClassMethod: GE } = jm, { printTypeParameters: XE } = _h, { printPropertyKey: YE } = Jh, { printFunctionDeclaration: KE, printArrowFunctionExpression: QE, printMethod: ZE, printReturnAndThrowArgument: eC } = Em, { printCallExpression: tC } = rD, { printInterface: nC } = mD, { printVariableDeclarator: rC, printAssignmentExpression: oC, printAssignment: uC, printAssignmentRight: iC } = HD, { printBinaryishExpression: aC } = LD, { printStatementSequence: sC } = cy, { printMemberExpression: cC } = yg, { printBlock: lC } = yy, { printComment: pC } = wy;

                    function dC(e, t, n) {
                        const r = DE(e),
                            o = n || "DirectiveLiteral" === e.type;
                        return Ny(r, t, o)
                    }

                    function fC(e) { const t = e.flags.split("").sort().join(""); return "/".concat(e.pattern, "/").concat(t) }
                    var hC = {
                        preprocess: Pp,
                        print: function(e, t, n, r) {
                            const o = e.getValue();
                            let u = !1;
                            const i = function(e, t, n, r) {
                                const o = e.getValue(),
                                    u = t.semi ? ";" : "";
                                if (!o) return "";
                                if ("string" == typeof o) return o;
                                const i = Hy(e, t, n);
                                if (i) return i;
                                let a = [];
                                switch (o.type) {
                                    case "JsExpressionRoot":
                                        return e.call(n, "node");
                                    case "JsonRoot":
                                        return _y([e.call(n, "node"), My]);
                                    case "File":
                                        return o.program && o.program.interpreter && a.push(e.call((e => e.call(n, "interpreter")), "program")), a.push(e.call(n, "program")), _y(a);
                                    case "Program":
                                        {
                                            const r = !o.body.every((({ type: e }) => "EmptyStatement" === e)) || o.comments;
                                            if (o.directives) {
                                                const i = o.directives.length;
                                                e.each(((e, o) => { a.push(n(e), u, My), (o < i - 1 || r) && Oy(t.originalText, e.getValue(), CE) && a.push(My) }), "directives")
                                            }
                                            return a.push(e.call((e => sC(e, t, n)), "body")),
                                            a.push(ma.printDanglingComments(e, t, !0)),
                                            r && a.push(My),
                                            _y(a)
                                        }
                                    case "EmptyStatement":
                                        return "";
                                    case "ExpressionStatement":
                                        if (o.directive) return _y([dC(o.expression, t, !0), u]);
                                        if ("__vue_event_binding" === t.parser) { const t = e.getParentNode(); if ("Program" === t.type && 1 === t.body.length && t.body[0] === o) return _y([e.call(n, "expression"), Gy(o.expression) ? ";" : ""]) }
                                        return _y([e.call(n, "expression"), fE(t, e) ? "" : u]);
                                    case "ParenthesizedExpression":
                                        return o.expression.comments ? qy(_y(["(", Vy(_y([jy, e.call(n, "expression")])), jy, ")"])) : _y(["(", e.call(n, "expression"), ")"]);
                                    case "AssignmentExpression":
                                        return oC(e, t, n);
                                    case "VariableDeclarator":
                                        return rC(e, t, n);
                                    case "BinaryExpression":
                                    case "LogicalExpression":
                                    case "NGPipeExpression":
                                        return aC(e, t, n);
                                    case "AssignmentPattern":
                                        return _y([e.call(n, "left"), " = ", e.call(n, "right")]);
                                    case "TSTypeAssertion":
                                        {
                                            const t = !("ArrayExpression" === o.expression.type || "ObjectExpression" === o.expression.type),
                                                r = qy(_y(["<", Vy(_y([jy, e.call(n, "typeAnnotation")])), jy, ">"])),
                                                u = _y([Uy("("), Vy(_y([jy, e.call(n, "expression")])), jy, Uy(")")]);
                                            return t ? Wy([_y([r, e.call(n, "expression")]), _y([r, qy(u, { shouldBreak: !0 })]), _y([r, e.call(n, "expression")])]) : qy(_y([r, e.call(n, "expression")]))
                                        }
                                    case "OptionalMemberExpression":
                                    case "MemberExpression":
                                        return cC(e, t, n);
                                    case "MetaProperty":
                                        return _y([e.call(n, "meta"), ".", e.call(n, "property")]);
                                    case "BindExpression":
                                        return o.object && a.push(e.call(n, "object")), a.push(qy(Vy(_y([jy, vE(e, t, n)])))), _y(a);
                                    case "Identifier":
                                        return _y([o.name, bE(e), IE(e, t, n)]);
                                    case "V8IntrinsicIdentifier":
                                        return _y(["%", o.name]);
                                    case "SpreadElement":
                                    case "SpreadElementPattern":
                                    case "SpreadProperty":
                                    case "SpreadPropertyPattern":
                                    case "RestElement":
                                    case "ObjectTypeSpreadProperty":
                                        return _y(["...", e.call(n, "argument"), IE(e, t, n)]);
                                    case "FunctionDeclaration":
                                    case "FunctionExpression":
                                        return a.push(KE(e, n, t, r && r.expandLastArg && Yy(e.getParentNode()).length > 1)), o.body || a.push(u), _y(a);
                                    case "ArrowFunctionExpression":
                                        return QE(e, t, n, r);
                                    case "YieldExpression":
                                        return a.push("yield"), o.delegate && a.push("*"), o.argument && a.push(" ", e.call(n, "argument")), _y(a);
                                    case "AwaitExpression":
                                        { a.push("await"), o.argument && a.push(" ", e.call(n, "argument")); const t = e.getParentNode(); return ("CallExpression" === t.type || "OptionalCallExpression" === t.type) && t.callee === o || ("MemberExpression" === t.type || "OptionalMemberExpression" === t.type) && t.object === o ? qy(_y([Vy(_y([jy, _y(a)])), jy])) : _y(a) }
                                    case "TSExportAssignment":
                                        return _y(["export = ", e.call(n, "expression"), u]);
                                    case "ExportDefaultDeclaration":
                                    case "ExportNamedDeclaration":
                                    case "DeclareExportDeclaration":
                                        return TE(e, t, n);
                                    case "ExportAllDeclaration":
                                    case "DeclareExportAllDeclaration":
                                        return BE(e, t, n);
                                    case "ImportDeclaration":
                                        return wE(e, t, n);
                                    case "ImportSpecifier":
                                    case "ExportSpecifier":
                                    case "ImportNamespaceSpecifier":
                                    case "ExportNamespaceSpecifier":
                                    case "ImportDefaultSpecifier":
                                    case "ExportDefaultSpecifier":
                                        return kE(e, t, n);
                                    case "ImportAttribute":
                                        return _y([e.call(n, "key"), ": ", e.call(n, "value")]);
                                    case "Import":
                                        return "import";
                                    case "TSModuleBlock":
                                    case "BlockStatement":
                                    case "StaticBlock":
                                        return lC(e, t, n);
                                    case "ThrowStatement":
                                    case "ReturnStatement":
                                        return _y(["ReturnStatement" === o.type ? "return" : "throw", eC(e, t, n)]);
                                    case "NewExpression":
                                    case "ImportExpression":
                                    case "OptionalCallExpression":
                                    case "CallExpression":
                                        return tC(e, t, n);
                                    case "ObjectTypeInternalSlot":
                                        return _y([o.static ? "static " : "", "[[", e.call(n, "id"), "]]", bE(e), o.method ? "" : ": ", e.call(n, "value")]);
                                    case "ObjectExpression":
                                    case "ObjectPattern":
                                    case "ObjectTypeAnnotation":
                                    case "TSInterfaceBody":
                                    case "TSTypeLiteral":
                                    case "RecordExpression":
                                        return LE(e, t, n);
                                    case "ObjectProperty":
                                    case "Property":
                                        return o.method || "get" === o.kind || "set" === o.kind ? ZE(e, t, n) : (o.shorthand ? a.push(e.call(n, "value")) : a.push(uC(o.key, YE(e, t, n), ":", o.value, e.call(n, "value"), t)), _y(a));
                                    case "ClassMethod":
                                    case "ClassPrivateMethod":
                                    case "MethodDefinition":
                                    case "TSAbstractMethodDefinition":
                                    case "TSDeclareMethod":
                                        return GE(e, t, n);
                                    case "ObjectMethod":
                                        return ZE(e, t, n);
                                    case "Decorator":
                                        return _y(["@", e.call(n, "expression"), e.call(n, "callee")]);
                                    case "ArrayExpression":
                                    case "ArrayPattern":
                                    case "TupleExpression":
                                        return OE(e, t, n);
                                    case "SequenceExpression":
                                        { const t = e.getParentNode(0); if ("ExpressionStatement" === t.type || "ForStatement" === t.type) { const t = []; return e.each((e => { 0 === e.getName() ? t.push(n(e)) : t.push(",", Vy(_y([Iy, n(e)]))) }), "expressions"), qy(_y(t)) } return qy(_y([Ly(_y([",", Iy]), e.map(n, "expressions"))])) }
                                    case "ThisExpression":
                                        return "this";
                                    case "Super":
                                        return "super";
                                    case "NullLiteral":
                                        return "null";
                                    case "RegExpLiteral":
                                        return fC(o);
                                    case "NumericLiteral":
                                        return Py(o.extra.raw);
                                    case "DecimalLiteral":
                                        return Py(o.value) + "m";
                                    case "BigIntLiteral":
                                        return (o.bigint || o.extra.raw).toLowerCase();
                                    case "BooleanLiteral":
                                    case "StringLiteral":
                                    case "Literal":
                                        return o.regex ? fC(o.regex) : o.bigint ? o.raw.toLowerCase() : "number" == typeof o.value ? Py(o.raw) : "string" != typeof o.value ? "" + o.value : dC(o, t);
                                    case "Directive":
                                        return e.call(n, "value");
                                    case "DirectiveLiteral":
                                        return dC(o, t);
                                    case "UnaryExpression":
                                        return a.push(o.operator), /[a-z]$/.test(o.operator) && a.push(" "), o.argument.comments && o.argument.comments.length > 0 ? a.push(qy(_y(["(", Vy(_y([jy, e.call(n, "argument")])), jy, ")"]))) : a.push(e.call(n, "argument")), _y(a);
                                    case "UpdateExpression":
                                        return a.push(e.call(n, "argument"), o.operator), o.prefix && a.reverse(), _y(a);
                                    case "ConditionalExpression":
                                        return bd(e, t, n, { beforeParts: () => [e.call(n, "test")], afterParts: e => [e ? jy : ""], shouldCheckJsx: !0, conditionalNodeType: "ConditionalExpression", consequentNodePropertyName: "consequent", alternateNodePropertyName: "alternate", testNodePropertyNames: ["test"] });
                                    case "VariableDeclaration":
                                        {
                                            const t = e.map((e => n(e)), "declarations"),
                                                r = e.getParentNode(),
                                                i = "ForStatement" === r.type || "ForInStatement" === r.type || "ForOfStatement" === r.type,
                                                s = o.declarations.some((e => e.init));
                                            let c;
                                            return 1 !== t.length || o.declarations[0].comments ? t.length > 0 && (c = Vy(t[0])) : c = t[0],
                                            a = [o.declare ? "declare " : "", o.kind, c ? _y([" ", c]) : "", Vy(_y(t.slice(1).map((e => _y([",", s && !i ? My : Iy, e])))))],
                                            i && r.body !== o || a.push(u),
                                            qy(_y(a))
                                        }
                                    case "TSTypeAliasDeclaration":
                                        { o.declare && a.push("declare "); const r = iC(o.id, o.typeAnnotation, o.typeAnnotation && e.call(n, "typeAnnotation"), t); return a.push("type ", e.call(n, "id"), e.call(n, "typeParameters"), " =", r, u), qy(_y(a)) }
                                    case "WithStatement":
                                        return qy(_y(["with (", e.call(n, "object"), ")", SE(o.body, e.call(n, "body"))]));
                                    case "IfStatement":
                                        {
                                            const r = SE(o.consequent, e.call(n, "consequent")),
                                                u = qy(_y(["if (", qy(_y([Vy(_y([jy, e.call(n, "test")])), jy])), ")", r]));
                                            if (a.push(u), o.alternate) {
                                                const r = uE(o.consequent) && o.consequent.comments.some((e => e.trailing && !mE(e))) || gE(o),
                                                    u = "BlockStatement" === o.consequent.type && !r;
                                                a.push(u ? " " : My), Zy(o) && a.push(ma.printDanglingComments(e, t, !0), r ? My : " "), a.push("else", qy(SE(o.alternate, e.call(n, "alternate"), "IfStatement" === o.alternate.type)))
                                            }
                                            return _y(a)
                                        }
                                    case "ForStatement":
                                        {
                                            const r = SE(o.body, e.call(n, "body")),
                                                u = ma.printDanglingComments(e, t, !0),
                                                i = u ? _y([u, jy]) : "";
                                            return o.init || o.test || o.update ? _y([i, qy(_y(["for (", qy(_y([Vy(_y([jy, e.call(n, "init"), ";", Iy, e.call(n, "test"), ";", Iy, e.call(n, "update")])), jy])), ")", r]))]) : _y([i, qy(_y(["for (;;)", r]))])
                                        }
                                    case "WhileStatement":
                                        return qy(_y(["while (", qy(_y([Vy(_y([jy, e.call(n, "test")])), jy])), ")", SE(o.body, e.call(n, "body"))]));
                                    case "ForInStatement":
                                        return qy(_y(["for (", e.call(n, "left"), " in ", e.call(n, "right"), ")", SE(o.body, e.call(n, "body"))]));
                                    case "ForOfStatement":
                                        return qy(_y(["for", o.await ? " await" : "", " (", e.call(n, "left"), " of ", e.call(n, "right"), ")", SE(o.body, e.call(n, "body"))]));
                                    case "DoWhileStatement":
                                        {
                                            const t = SE(o.body, e.call(n, "body")),
                                                r = qy(_y(["do", t]));
                                            return a = [r],
                                            "BlockStatement" === o.body.type ? a.push(" ") : a.push(My),
                                            a.push("while ("),
                                            a.push(qy(_y([Vy(_y([jy, e.call(n, "test")])), jy])), ")", u),
                                            _y(a)
                                        }
                                    case "DoExpression":
                                        return _y(["do ", e.call(n, "body")]);
                                    case "BreakStatement":
                                        return a.push("break"), o.label && a.push(" ", e.call(n, "label")), a.push(u), _y(a);
                                    case "ContinueStatement":
                                        return a.push("continue"), o.label && a.push(" ", e.call(n, "label")), a.push(u), _y(a);
                                    case "LabeledStatement":
                                        return "EmptyStatement" === o.body.type ? _y([e.call(n, "label"), ":;"]) : _y([e.call(n, "label"), ": ", e.call(n, "body")]);
                                    case "TryStatement":
                                        return _y(["try ", e.call(n, "block"), o.handler ? _y([" ", e.call(n, "handler")]) : "", o.finalizer ? _y([" finally ", e.call(n, "finalizer")]) : ""]);
                                    case "CatchClause":
                                        if (o.param) {
                                            const r = o.param.comments && o.param.comments.some((e => !mE(e) || e.leading && Ty(t.originalText, CE(e)) || e.trailing && Ty(t.originalText, EE(e), { backwards: !0 }))),
                                                u = e.call(n, "param");
                                            return _y(["catch ", _y(r ? ["(", Vy(_y([jy, u])), jy, ") "] : ["(", u, ") "]), e.call(n, "body")])
                                        }
                                        return _y(["catch ", e.call(n, "body")]);
                                    case "SwitchStatement":
                                        return _y([qy(_y(["switch (", Vy(_y([jy, e.call(n, "discriminant")])), jy, ")"])), " {", o.cases.length > 0 ? Vy(_y([My, Ly(My, e.map((e => { const r = e.getValue(); return _y([e.call(n), o.cases.indexOf(r) !== o.cases.length - 1 && Oy(t.originalText, r, CE) ? My : ""]) }), "cases"))])) : "", My, "}"]);
                                    case "SwitchCase":
                                        {
                                            o.test ? a.push("case ", e.call(n, "test"), ":") : a.push("default:");
                                            const r = o.consequent.filter((e => "EmptyStatement" !== e.type));
                                            if (r.length > 0) {
                                                const o = e.call((e => sC(e, t, n)), "consequent");
                                                a.push(1 === r.length && "BlockStatement" === r[0].type ? _y([" ", o]) : Vy(_y([My, o])))
                                            }
                                            return _y(a)
                                        }
                                    case "DebuggerStatement":
                                        return _y(["debugger", u]);
                                    case "JSXAttribute":
                                        return RE(e, t, n);
                                    case "JSXIdentifier":
                                        return "" + o.name;
                                    case "JSXNamespacedName":
                                        return Ly(":", [e.call(n, "namespace"), e.call(n, "name")]);
                                    case "JSXMemberExpression":
                                        return Ly(".", [e.call(n, "object"), e.call(n, "property")]);
                                    case "TSQualifiedName":
                                        return Ly(".", [e.call(n, "left"), e.call(n, "right")]);
                                    case "JSXSpreadAttribute":
                                        return JE(e, t, n);
                                    case "JSXSpreadChild":
                                        return zE(e, t, n);
                                    case "JSXExpressionContainer":
                                        return WE(e, t, n);
                                    case "JSXFragment":
                                    case "JSXElement":
                                        return jE(e, t, n);
                                    case "JSXOpeningElement":
                                        return qE(e, t, n);
                                    case "JSXClosingElement":
                                        return VE(e, t, n);
                                    case "JSXOpeningFragment":
                                    case "JSXClosingFragment":
                                        return $E(e, t);
                                    case "JSXText":
                                        throw new Error("JSXTest should be handled by JSXElement");
                                    case "JSXEmptyExpression":
                                        return UE(e, t);
                                    case "ClassBody":
                                        return o.comments || 0 !== o.body.length ? _y(["{", o.body.length > 0 ? Vy(_y([My, e.call((e => sC(e, t, n)), "body")])) : ma.printDanglingComments(e, t), My, "}"]) : "{}";
                                    case "ClassProperty":
                                    case "FieldDefinition":
                                    case "TSAbstractClassProperty":
                                    case "ClassPrivateProperty":
                                        return o.decorators && 0 !== o.decorators.length && a.push(FE(e, t, n)), o.accessibility && a.push(o.accessibility + " "), o.declare && a.push("declare "), o.static && a.push("static "), ("TSAbstractClassProperty" === o.type || o.abstract) && a.push("abstract "), o.readonly && a.push("readonly "), o.variance && a.push(e.call(n, "variance")), a.push(YE(e, t, n), bE(e), IE(e, t, n)), o.value && a.push(" =", iC(o.key, o.value, e.call(n, "value"), t)), a.push(u), qy(_y(a));
                                    case "ClassDeclaration":
                                    case "ClassExpression":
                                        return o.declare && a.push("declare "), a.push(HE(e, t, n)), _y(a);
                                    case "TSInterfaceHeritage":
                                    case "TSExpressionWithTypeArguments":
                                        return a.push(e.call(n, "expression")), o.typeParameters && a.push(e.call(n, "typeParameters")), _y(a);
                                    case "TemplateElement":
                                        return Ly(Ry, o.value.raw.split(/\r?\n/g));
                                    case "TSTemplateLiteralType":
                                    case "TemplateLiteral":
                                        return PE(e, n, t);
                                    case "TaggedTemplateExpression":
                                        return _y([e.call(n, "tag"), e.call(n, "typeParameters"), e.call(n, "quasi")]);
                                    case "Node":
                                    case "Printable":
                                    case "SourceLocation":
                                    case "Position":
                                    case "Statement":
                                    case "Function":
                                    case "Pattern":
                                    case "Expression":
                                    case "Declaration":
                                    case "Specifier":
                                    case "NamedSpecifier":
                                    case "Comment":
                                    case "MemberTypeAnnotation":
                                    case "Type":
                                        throw new Error("unprintable type: " + JSON.stringify(o.type));
                                    case "TypeAnnotation":
                                    case "TSTypeAnnotation":
                                        return o.typeAnnotation ? e.call(n, "typeAnnotation") : "";
                                    case "TSNamedTupleMember":
                                        return _y([e.call(n, "label"), o.optional ? "?" : "", ": ", e.call(n, "elementType")]);
                                    case "TSTupleType":
                                    case "TupleTypeAnnotation":
                                        {
                                            const r = "TSTupleType" === o.type ? "elementTypes" : "types",
                                                u = o[r].length > 0 && "TSRestType" === ky(o[r]).type;
                                            return qy(_y(["[", Vy(_y([jy, _E(e, t, r, n)])), Uy(yE(t, "all") && !u ? "," : ""), ma.printDanglingComments(e, t, !0), jy, "]"]))
                                        }
                                    case "ExistsTypeAnnotation":
                                        return "*";
                                    case "EmptyTypeAnnotation":
                                        return "empty";
                                    case "MixedTypeAnnotation":
                                        return "mixed";
                                    case "ArrayTypeAnnotation":
                                        return _y([e.call(n, "elementType"), "[]"]);
                                    case "BooleanLiteralTypeAnnotation":
                                        return "" + o.value;
                                    case "DeclareClass":
                                        return xE(e, HE(e, t, n));
                                    case "TSDeclareFunction":
                                        return _y([o.declare ? "declare " : "", KE(e, n, t), u]);
                                    case "DeclareFunction":
                                        return xE(e, _y(["function ", e.call(n, "id"), o.predicate ? " " : "", e.call(n, "predicate"), u]));
                                    case "DeclareModule":
                                        return xE(e, _y(["module ", e.call(n, "id"), " ", e.call(n, "body")]));
                                    case "DeclareModuleExports":
                                        return xE(e, _y(["module.exports", ": ", e.call(n, "typeAnnotation"), u]));
                                    case "DeclareVariable":
                                        return xE(e, _y(["var ", e.call(n, "id"), u]));
                                    case "DeclareOpaqueType":
                                    case "OpaqueType":
                                        return a.push("opaque type ", e.call(n, "id"), e.call(n, "typeParameters")), o.supertype && a.push(": ", e.call(n, "supertype")), o.impltype && a.push(" = ", e.call(n, "impltype")), a.push(u), "DeclareOpaqueType" === o.type ? xE(e, _y(a)) : _y(a);
                                    case "EnumDeclaration":
                                        return _y(["enum ", e.call(n, "id"), " ", e.call(n, "body")]);
                                    case "EnumBooleanBody":
                                    case "EnumNumberBody":
                                    case "EnumStringBody":
                                    case "EnumSymbolBody":
                                        if ("EnumSymbolBody" === o.type || o.explicitType) {
                                            let e = null;
                                            switch (o.type) {
                                                case "EnumBooleanBody":
                                                    e = "boolean";
                                                    break;
                                                case "EnumNumberBody":
                                                    e = "number";
                                                    break;
                                                case "EnumStringBody":
                                                    e = "string";
                                                    break;
                                                case "EnumSymbolBody":
                                                    e = "symbol"
                                            }
                                            a.push("of ", e, " ")
                                        }
                                        if (0 !== o.members.length || o.hasUnknownMembers) {
                                            const r = o.members.length ? [My, _E(e, t, "members", n), o.hasUnknownMembers || yE(t) ? "," : ""] : [];
                                            a.push(qy(_y(["{", Vy(_y([...r, ...o.hasUnknownMembers ? [My, "..."] : []])), ma.printDanglingComments(e, t, !0), My, "}"])))
                                        } else a.push(qy(_y(["{", ma.printDanglingComments(e, t), jy, "}"])));
                                        return _y(a);
                                    case "EnumBooleanMember":
                                    case "EnumNumberMember":
                                    case "EnumStringMember":
                                        return _y([e.call(n, "id"), " = ", "object" == typeof o.init ? e.call(n, "init") : String(o.init)]);
                                    case "EnumDefaultedMember":
                                        return e.call(n, "id");
                                    case "FunctionTypeAnnotation":
                                    case "TSFunctionType":
                                        {
                                            const r = e.getParentNode(0),
                                                u = e.getParentNode(1),
                                                i = e.getParentNode(2);
                                            let s = "TSFunctionType" === o.type || !(("ObjectTypeProperty" === r.type || "ObjectTypeInternalSlot" === r.type) && !r.variance && !r.optional && EE(r) === EE(o) || "ObjectTypeCallProperty" === r.type || i && "DeclareFunction" === i.type),
                                                c = s && ("TypeAnnotation" === r.type || "TSTypeAnnotation" === r.type);
                                            const l = c && s && ("TypeAnnotation" === r.type || "TSTypeAnnotation" === r.type) && "ArrowFunctionExpression" === u.type;
                                            return dE(r) && (s = !0, c = !0),
                                            l && a.push("("),
                                            a.push(NE(e, n, t, !1, !0)),
                                            (o.returnType || o.predicate || o.typeAnnotation) && a.push(s ? " => " : ": ", e.call(n, "returnType"), e.call(n, "predicate"), e.call(n, "typeAnnotation")),
                                            l && a.push(")"),
                                            qy(_y(a))
                                        }
                                    case "TSRestType":
                                        return _y(["...", e.call(n, "typeAnnotation")]);
                                    case "TSOptionalType":
                                        return _y([e.call(n, "typeAnnotation"), "?"]);
                                    case "FunctionTypeParam":
                                        { const t = o.name ? e.call(n, "name") : e.getParentNode().this === o ? "this" : ""; return _y([t, bE(e), t ? ": " : "", e.call(n, "typeAnnotation")]) }
                                    case "DeclareInterface":
                                    case "InterfaceDeclaration":
                                    case "InterfaceTypeAnnotation":
                                    case "TSInterfaceDeclaration":
                                        return nC(e, t, n);
                                    case "ClassImplements":
                                    case "InterfaceExtends":
                                        return _y([e.call(n, "id"), e.call(n, "typeParameters")]);
                                    case "TSClassImplements":
                                        return _y([e.call(n, "expression"), e.call(n, "typeParameters")]);
                                    case "TSIntersectionType":
                                    case "IntersectionTypeAnnotation":
                                        {
                                            const t = e.map(n, "types"),
                                                r = [];
                                            let u = !1;
                                            for (let e = 0; e < t.length; ++e) 0 === e ? r.push(t[e]) : pE(o.types[e - 1]) && pE(o.types[e]) ? r.push(_y([" & ", u ? Vy(t[e]) : t[e]])) : pE(o.types[e - 1]) || pE(o.types[e]) ? (e > 1 && (u = !0), r.push(" & ", e > 1 ? Vy(t[e]) : t[e])) : r.push(Vy(_y([" &", Iy, t[e]])));
                                            return qy(_y(r))
                                        }
                                    case "TSUnionType":
                                    case "UnionTypeAnnotation":
                                        {
                                            const r = e.getParentNode(),
                                                u = !("TypeParameterInstantiation" === r.type || "TSTypeParameterInstantiation" === r.type || "GenericTypeAnnotation" === r.type || "TSTypeReference" === r.type || "TSTypeAssertion" === r.type || "TupleTypeAnnotation" === r.type || "TSTupleType" === r.type || "FunctionTypeParam" === r.type && !r.name && e.getParentNode(1).this !== r || ("TypeAlias" === r.type || "VariableDeclarator" === r.type || "TSTypeAliasDeclaration" === r.type) && tE(t.originalText, o)),
                                                i = ME(o),
                                                a = e.map((e => { let r = e.call(n); return i || (r = $y(2, r)), ma.printComments(e, (() => r), t) }), "types");
                                            if (i) return Ly(" | ", a);
                                            const s = u && !tE(t.originalText, o),
                                                c = _y([Uy(_y([s ? Iy : "", "| "])), Ly(_y([Iy, "| "]), a)]);
                                            return Fp(e, t) ? qy(_y([Vy(c), jy])) : "TupleTypeAnnotation" === r.type && r.types.length > 1 || "TSTupleType" === r.type && r.elementTypes.length > 1 ? qy(_y([Vy(_y([Uy(_y(["(", jy])), c])), jy, Uy(")")])) : qy(u ? Vy(c) : c)
                                        }
                                    case "NullableTypeAnnotation":
                                        return _y(["?", e.call(n, "typeAnnotation")]);
                                    case "Variance":
                                        { const { kind: e } = o; return zi.ok("plus" === e || "minus" === e), "plus" === e ? "+" : "-" }
                                    case "ObjectTypeCallProperty":
                                        return o.static && a.push("static "), a.push(e.call(n, "value")), _y(a);
                                    case "ObjectTypeIndexer":
                                        return _y([o.variance ? e.call(n, "variance") : "", "[", e.call(n, "id"), o.id ? ": " : "", e.call(n, "key"), "]: ", e.call(n, "value")]);
                                    case "ObjectTypeProperty":
                                        { let r = ""; return o.proto ? r = "proto " : o.static && (r = "static "), _y([r, sE(o) ? o.kind + " " : "", o.variance ? e.call(n, "variance") : "", YE(e, t, n), bE(e), aE(o) ? "" : ": ", e.call(n, "value")]) }
                                    case "QualifiedTypeIdentifier":
                                        return _y([e.call(n, "qualification"), ".", e.call(n, "id")]);
                                    case "StringLiteralTypeAnnotation":
                                        return dC(o, t);
                                    case "NumberLiteralTypeAnnotation":
                                        zi.strictEqual(typeof o.value, "number");
                                    case "BigIntLiteralTypeAnnotation":
                                        return null != o.extra ? Py(o.extra.raw) : Py(o.raw);
                                    case "DeclareTypeAlias":
                                    case "TypeAlias":
                                        {
                                            ("DeclareTypeAlias" === o.type || o.declare) && a.push("declare ");
                                            const r = iC(o.id, o.right, e.call(n, "right"), t);
                                            return a.push("type ", e.call(n, "id"), e.call(n, "typeParameters"), " =", r, u),
                                            qy(_y(a))
                                        }
                                    case "TypeCastExpression":
                                        return _y(["(", e.call(n, "expression"), IE(e, t, n), ")"]);
                                    case "TypeParameterDeclaration":
                                    case "TypeParameterInstantiation":
                                        {
                                            const r = XE(e, t, n, "params");
                                            if ("flow" === t.parser) {
                                                const e = EE(o),
                                                    n = CE(o),
                                                    u = t.originalText.lastIndexOf("/*", e),
                                                    i = t.originalText.indexOf("*/", n);
                                                if (-1 !== u && -1 !== i) { const e = t.originalText.slice(u + 2, i).trim(); if (e.startsWith("::") && !e.includes("/*") && !e.includes("*/")) return _y(["/*:: ", r, " */"]) }
                                            }
                                            return r
                                        }
                                    case "TSTypeParameterDeclaration":
                                    case "TSTypeParameterInstantiation":
                                        return XE(e, t, n, "params");
                                    case "TSTypeParameter":
                                    case "TypeParameter":
                                        { const r = e.getParentNode(); if ("TSMappedType" === r.type) return a.push("[", e.call(n, "name")), o.constraint && a.push(" in ", e.call(n, "constraint")), r.nameType && a.push(" as ", e.callParent((e => e.call(n, "nameType")))), a.push("]"), _y(a);o.variance && a.push(e.call(n, "variance")), a.push(e.call(n, "name")), o.bound && (a.push(": "), a.push(e.call(n, "bound"))), o.constraint && a.push(" extends ", e.call(n, "constraint")), o.default && a.push(" = ", e.call(n, "default")); const u = e.getNode(2); return 1 === Xy(r).length && hE(t) && !o.constraint && "ArrowFunctionExpression" === u.type && a.push(","), _y(a) }
                                    case "TypeofTypeAnnotation":
                                        return _y(["typeof ", e.call(n, "argument")]);
                                    case "InferredPredicate":
                                        return "%checks";
                                    case "DeclaredPredicate":
                                        return _y(["%checks(", e.call(n, "value"), ")"]);
                                    case "TSAbstractKeyword":
                                        return "abstract";
                                    case "AnyTypeAnnotation":
                                    case "TSAnyKeyword":
                                        return "any";
                                    case "TSAsyncKeyword":
                                        return "async";
                                    case "BooleanTypeAnnotation":
                                    case "TSBooleanKeyword":
                                        return "boolean";
                                    case "BigIntTypeAnnotation":
                                    case "TSBigIntKeyword":
                                        return "bigint";
                                    case "TSConstKeyword":
                                        return "const";
                                    case "TSDeclareKeyword":
                                        return "declare";
                                    case "TSExportKeyword":
                                        return "export";
                                    case "NullLiteralTypeAnnotation":
                                    case "TSNullKeyword":
                                        return "null";
                                    case "TSNeverKeyword":
                                        return "never";
                                    case "NumberTypeAnnotation":
                                    case "TSNumberKeyword":
                                        return "number";
                                    case "TSObjectKeyword":
                                        return "object";
                                    case "TSProtectedKeyword":
                                        return "protected";
                                    case "TSPrivateKeyword":
                                        return "private";
                                    case "TSPublicKeyword":
                                        return "public";
                                    case "TSReadonlyKeyword":
                                        return "readonly";
                                    case "SymbolTypeAnnotation":
                                    case "TSSymbolKeyword":
                                        return "symbol";
                                    case "TSStaticKeyword":
                                        return "static";
                                    case "StringTypeAnnotation":
                                    case "TSStringKeyword":
                                        return "string";
                                    case "TSUndefinedKeyword":
                                        return "undefined";
                                    case "TSUnknownKeyword":
                                        return "unknown";
                                    case "VoidTypeAnnotation":
                                    case "TSVoidKeyword":
                                        return "void";
                                    case "TSAsExpression":
                                        return _y([e.call(n, "expression"), " as ", e.call(n, "typeAnnotation")]);
                                    case "TSArrayType":
                                        return _y([e.call(n, "elementType"), "[]"]);
                                    case "TSPropertySignature":
                                        return o.export && a.push("export "), o.accessibility && a.push(o.accessibility + " "), o.static && a.push("static "), o.readonly && a.push("readonly "), a.push(YE(e, t, n), bE(e)), o.typeAnnotation && (a.push(": "), a.push(e.call(n, "typeAnnotation"))), o.initializer && a.push(" = ", e.call(n, "initializer")), _y(a);
                                    case "TSParameterProperty":
                                        return o.accessibility && a.push(o.accessibility + " "), o.export && a.push("export "), o.static && a.push("static "), o.readonly && a.push("readonly "), a.push(e.call(n, "parameter")), _y(a);
                                    case "GenericTypeAnnotation":
                                    case "TSTypeReference":
                                        return _y([e.call(n, "TSTypeReference" === o.type ? "typeName" : "id"), XE(e, t, n, "typeParameters")]);
                                    case "TSTypeQuery":
                                        return _y(["typeof ", e.call(n, "exprName")]);
                                    case "TSIndexSignature":
                                        {
                                            const r = e.getParentNode(),
                                                i = o.parameters.length > 1 ? Uy(yE(t) ? "," : "") : "",
                                                a = qy(_y([Vy(_y([jy, Ly(_y([", ", jy]), e.map(n, "parameters"))])), i, jy]));
                                            return _y([o.export ? "export " : "", o.accessibility ? _y([o.accessibility, " "]) : "", o.static ? "static " : "", o.readonly ? "readonly " : "", o.declare ? "declare " : "", "[", o.parameters ? a : "", o.typeAnnotation ? "]: " : "]", o.typeAnnotation ? e.call(n, "typeAnnotation") : "", "ClassBody" === r.type ? u : ""])
                                        }
                                    case "TSTypePredicate":
                                        return _y([o.asserts ? "asserts " : "", e.call(n, "parameterName"), o.typeAnnotation ? _y([" is ", e.call(n, "typeAnnotation")]) : ""]);
                                    case "TSNonNullExpression":
                                        return _y([e.call(n, "expression"), "!"]);
                                    case "ThisTypeAnnotation":
                                    case "TSThisType":
                                        return "this";
                                    case "TSImportType":
                                        return _y([o.isTypeOf ? "typeof " : "", "import(", e.call(n, o.parameter ? "parameter" : "argument"), ")", o.qualifier ? _y([".", e.call(n, "qualifier")]) : "", XE(e, t, n, "typeParameters")]);
                                    case "TSLiteralType":
                                        return e.call(n, "literal");
                                    case "TSIndexedAccessType":
                                        return _y([e.call(n, "objectType"), "[", e.call(n, "indexType"), "]"]);
                                    case "TSConstructSignatureDeclaration":
                                    case "TSCallSignatureDeclaration":
                                    case "TSConstructorType":
                                        if ("TSCallSignatureDeclaration" !== o.type && a.push("new "), a.push(qy(NE(e, n, t, !1, !0))), o.returnType || o.typeAnnotation) {
                                            const t = "TSConstructorType" === o.type;
                                            a.push(t ? " => " : ": ", e.call(n, "returnType"), e.call(n, "typeAnnotation"))
                                        }
                                        return _y(a);
                                    case "TSTypeOperator":
                                        return _y([o.operator, " ", e.call(n, "typeAnnotation")]);
                                    case "TSMappedType":
                                        { const r = By(t.originalText, EE(o), CE(o)); return qy(_y(["{", Vy(_y([t.bracketSpacing ? Iy : jy, o.readonly ? _y([Qy(o.readonly, "readonly"), " "]) : "", AE(e, t, n), e.call(n, "typeParameter"), o.optional ? Qy(o.optional, "?") : "", o.typeAnnotation ? ": " : "", e.call(n, "typeAnnotation"), Uy(u, "")])), ma.printDanglingComments(e, t, !0), t.bracketSpacing ? Iy : jy, "}"]), { shouldBreak: r }) }
                                    case "TSMethodSignature":
                                        return a.push(o.accessibility ? _y([o.accessibility, " "]) : "", o.export ? "export " : "", o.static ? "static " : "", o.readonly ? "readonly " : "", o.computed ? "[" : "", e.call(n, "key"), o.computed ? "]" : "", bE(e), NE(e, n, t, !1, !0)), (o.returnType || o.typeAnnotation) && a.push(": ", e.call(n, "returnType"), e.call(n, "typeAnnotation")), qy(_y(a));
                                    case "TSNamespaceExportDeclaration":
                                        return a.push("export as namespace ", e.call(n, "id")), t.semi && a.push(";"), qy(_y(a));
                                    case "TSEnumDeclaration":
                                        return o.declare && a.push("declare "), o.modifiers && a.push(AE(e, t, n)), o.const && a.push("const "), a.push("enum ", e.call(n, "id"), " "), 0 === o.members.length ? a.push(qy(_y(["{", ma.printDanglingComments(e, t), jy, "}"]))) : a.push(qy(_y(["{", Vy(_y([My, _E(e, t, "members", n), yE(t, "es5") ? "," : ""])), ma.printDanglingComments(e, t, !0), My, "}"]))), _y(a);
                                    case "TSEnumMember":
                                        return a.push(e.call(n, "id")), o.initializer && a.push(" = ", e.call(n, "initializer")), _y(a);
                                    case "TSImportEqualsDeclaration":
                                        return o.isExport && a.push("export "), a.push("import ", e.call(n, "id"), " = ", e.call(n, "moduleReference")), t.semi && a.push(";"), qy(_y(a));
                                    case "TSExternalModuleReference":
                                        return _y(["require(", e.call(n, "expression"), ")"]);
                                    case "TSModuleDeclaration":
                                        {
                                            const r = e.getParentNode(),
                                                i = cE(o.id),
                                                s = "TSModuleDeclaration" === r.type,
                                                c = o.body && "TSModuleDeclaration" === o.body.type;
                                            if (s) a.push(".");
                                            else { o.declare && a.push("declare "), a.push(AE(e, t, n)); const r = t.originalText.slice(EE(o), EE(o.id)); "Identifier" === o.id.type && "global" === o.id.name && !/namespace|module/.test(r) || a.push(i || /(^|\s)module(\s|$)/.test(r) ? "module " : "namespace ") }
                                            return a.push(e.call(n, "id")),
                                            c ? a.push(e.call(n, "body")) : o.body ? a.push(" ", qy(e.call(n, "body"))) : a.push(u),
                                            _y(a)
                                        }
                                    case "PrivateName":
                                        return _y(["#", e.call(n, o.id ? "id" : "name")]);
                                    case "TSPrivateIdentifier":
                                        return o.escapedText;
                                    case "TSConditionalType":
                                        return bd(e, t, n, { beforeParts: () => [e.call(n, "checkType"), " ", "extends", " ", e.call(n, "extendsType")], afterParts: () => [], shouldCheckJsx: !1, conditionalNodeType: "TSConditionalType", consequentNodePropertyName: "trueType", alternateNodePropertyName: "falseType", testNodePropertyNames: ["checkType", "extendsType"] });
                                    case "TSInferType":
                                        return _y(["infer", " ", e.call(n, "typeParameter")]);
                                    case "InterpreterDirective":
                                        return a.push("#!", o.value, My), Oy(t.originalText, o, CE) && a.push(My), _y(a);
                                    case "NGRoot":
                                        return _y([].concat(e.call(n, "node"), o.node.comments && 0 !== o.node.comments.length ? _y([" //", o.node.comments[0].value.trimEnd()]) : []));
                                    case "NGChainedExpression":
                                        return qy(Ly(_y([";", Iy]), e.map((e => rE(e) ? n(e) : _y(["(", n(e), ")"])), "expressions")));
                                    case "NGEmptyExpression":
                                        return "";
                                    case "NGQuotedExpression":
                                        return _y([o.prefix, ": ", o.value.trim()]);
                                    case "NGMicrosyntax":
                                        return _y(e.map(((e, t) => _y([0 === t ? "" : lE(e.getValue(), t, o) ? " " : _y([";", Iy]), n(e)])), "body"));
                                    case "NGMicrosyntaxKey":
                                        return /^[$_a-z][\w$]*(-[$_a-z][\w$])*$/i.test(o.name) ? o.name : JSON.stringify(o.name);
                                    case "NGMicrosyntaxExpression":
                                        return _y([e.call(n, "expression"), null === o.alias ? "" : _y([" as ", e.call(n, "alias")])]);
                                    case "NGMicrosyntaxKeyedExpression":
                                        {
                                            const t = e.getName(),
                                                r = e.getParentNode(),
                                                u = lE(o, t, r) || (1 === t && ("then" === o.key.name || "else" === o.key.name) || 2 === t && "else" === o.key.name && "NGMicrosyntaxKeyedExpression" === r.body[t - 1].type && "then" === r.body[t - 1].key.name) && "NGMicrosyntaxExpression" === r.body[0].type;
                                            return _y([e.call(n, "key"), u ? " " : ": ", e.call(n, "expression")])
                                        }
                                    case "NGMicrosyntaxLet":
                                        return _y(["let ", e.call(n, "key"), null === o.value ? "" : _y([" = ", e.call(n, "value")])]);
                                    case "NGMicrosyntaxAs":
                                        return _y([e.call(n, "key"), " as ", e.call(n, "alias")]);
                                    case "PipelineBareFunction":
                                        return e.call(n, "callee");
                                    case "PipelineTopicExpression":
                                        return e.call(n, "expression");
                                    case "PipelinePrimaryTopicReference":
                                        return a.push("#"), _y(a);
                                    case "ArgumentPlaceholder":
                                        return "?";
                                    case "TSJSDocAllType":
                                        return "*";
                                    case "TSJSDocUnknownType":
                                        return "?";
                                    case "TSJSDocNullableType":
                                        return _y(["?", e.call(n, "typeAnnotation")]);
                                    case "TSJSDocNonNullableType":
                                        return _y(["!", e.call(n, "typeAnnotation")]);
                                    case "TSJSDocFunctionType":
                                        return _y(["function(", "): ", e.call(n, "typeAnnotation")]);
                                    default:
                                        throw new Error("unknown type: " + JSON.stringify(o.type))
                                }
                            }(e, t, n, r);
                            if (!o || Jy(i)) return i;
                            const a = Ky(e),
                                s = [];
                            if ("ClassMethod" === o.type || "ClassPrivateMethod" === o.type || "ClassProperty" === o.type || "FieldDefinition" === o.type || "TSAbstractClassProperty" === o.type || "ClassPrivateProperty" === o.type || "MethodDefinition" === o.type || "TSAbstractMethodDefinition" === o.type || "TSDeclareMethod" === o.type);
                            else if (o.decorators && o.decorators.length > 0 && !(a && EE(a, { ignoreDecorators: !0 }) > EE(o.decorators[0]))) {
                                const r = "ClassExpression" === o.type || "ClassDeclaration" === o.type || nE(o, t) ? My : Iy;
                                e.each((e => {
                                    let t = e.getValue();
                                    t = t.expression ? t.expression : t.callee, s.push(n(e), r)
                                }), "decorators"), a && s.unshift(My)
                            } else iE(o) && o.declaration && o.declaration.decorators && o.declaration.decorators.length > 0 && EE(o, { ignoreDecorators: !0 }) > EE(o.declaration.decorators[0]) ? e.each((e => {
                                const t = "Decorator" === e.getValue().type ? "" : "@";
                                s.push(t, n(e), My)
                            }), "declaration", "decorators") : u = Fp(e, t);
                            const c = [];
                            if (u && c.unshift("("), c.push(i), u) {
                                const t = e.getValue();
                                eE(t) && (c.push(" /*"), c.push(t.trailingComments[0].value.trimStart()), c.push("*/"), t.trailingComments[0].printed = !0), c.push(")")
                            }
                            return s.length > 0 ? qy(_y(s.concat(c))) : _y(c)
                        },
                        embed: function(e, t, n, r) {
                            const o = e.getValue();
                            if ("TemplateLiteral" !== o.type || function({ quasis: e }) { return e.some((({ value: { cooked: e } }) => null === e)) }(o)) return;
                            const u = function(e) {
                                return function(e) {
                                    const t = e.getValue(),
                                        n = e.getParentNode(),
                                        r = e.getParentNode(1);
                                    return r && t.quasis && "JSXExpressionContainer" === n.type && "JSXElement" === r.type && "style" === r.openingElement.name.name && r.openingElement.attributes.some((e => "jsx" === e.name.name)) || n && "TaggedTemplateExpression" === n.type && "Identifier" === n.tag.type && "css" === n.tag.name || n && "TaggedTemplateExpression" === n.type && "MemberExpression" === n.tag.type && "css" === n.tag.object.name && ("global" === n.tag.property.name || "resolve" === n.tag.property.name)
                                }(e) || function(e) {
                                    const t = e.getParentNode();
                                    if (!t || "TaggedTemplateExpression" !== t.type) return !1;
                                    const { tag: n } = t;
                                    switch (n.type) {
                                        case "MemberExpression":
                                            return Gl(n.object) || Xl(n);
                                        case "CallExpression":
                                            return Gl(n.callee) || "MemberExpression" === n.callee.type && ("MemberExpression" === n.callee.object.type && (Gl(n.callee.object.object) || Xl(n.callee.object)) || "CallExpression" === n.callee.object.type && Gl(n.callee.object.callee));
                                        case "Identifier":
                                            return "css" === n.name;
                                        default:
                                            return !1
                                    }
                                }(e) || function(e) {
                                    const t = e.getParentNode(),
                                        n = e.getParentNode(1);
                                    return n && "JSXExpressionContainer" === t.type && "JSXAttribute" === n.type && "JSXIdentifier" === n.name.type && "css" === n.name.name
                                }(e) || function(e) { return e.match((e => "TemplateLiteral" === e.type), ((e, t) => "ArrayExpression" === e.type && "elements" === t), ((e, t) => ("Property" === e.type || "ObjectProperty" === e.type) && "Identifier" === e.key.type && "styles" === e.key.name && "value" === t), ...Hl) }(e) ? "css" : function(e) {
                                    const t = e.getValue(),
                                        n = e.getParentNode();
                                    return Yl(t, "GraphQL") || n && ("TaggedTemplateExpression" === n.type && ("MemberExpression" === n.tag.type && "graphql" === n.tag.object.name && "experimental" === n.tag.property.name || "Identifier" === n.tag.type && ("gql" === n.tag.name || "graphql" === n.tag.name)) || "CallExpression" === n.type && "Identifier" === n.callee.type && "graphql" === n.callee.name)
                                }(e) ? "graphql" : function(e) { return Yl(e.getValue(), "HTML") || e.match((e => "TemplateLiteral" === e.type), ((e, t) => "TaggedTemplateExpression" === e.type && "Identifier" === e.tag.type && "html" === e.tag.name && "quasi" === t)) }(e) ? "html" : function(e) { return e.match((e => "TemplateLiteral" === e.type), ((e, t) => ("Property" === e.type || "ObjectProperty" === e.type) && "Identifier" === e.key.type && "template" === e.key.name && "value" === t), ...Hl) }(e) ? "angular" : function(e) {
                                    const t = e.getValue(),
                                        n = e.getParentNode();
                                    return n && "TaggedTemplateExpression" === n.type && 1 === t.quasis.length && "Identifier" === n.tag.type && ("md" === n.tag.name || "markdown" === n.tag.name)
                                }(e) ? "markdown" : void 0
                            }(e);
                            return u ? "markdown" === u ? function(e, t, n) {
                                let r = e.getValue().quasis[0].value.raw.replace(/((?:\\\\)*)\\`/g, ((e, t) => "\\".repeat(t.length / 2) + "`"));
                                const o = function(e) { const t = e.match(/^([^\S\n]*)\S/m); return null === t ? "" : t[1] }(r),
                                    u = "" !== o;
                                u && (r = r.replace(new RegExp("^".concat(o), "gm"), ""));
                                const i = bl(n(r, { parser: "markdown", __inJsTemplate: !0 }, { stripTrailingHardline: !0 }), !0);
                                return El(["`", u ? gl(El([Dl, i])) : El([yl, Cl(i)]), Dl, "`"])
                            }(e, 0, n) : "css" === u ? function(e, t, n) {
                                const r = e.getValue(),
                                    o = r.quasis.map((e => e.value.raw));
                                let u = 0;
                                return function(e, t, n) {
                                    if (1 === t.quasis.length && !t.quasis[0].value.raw.trim()) return "``";
                                    const r = function(e, t) {
                                        if (!t || !t.length) return e;
                                        let n = 0;
                                        const r = Sl(e, (e => {
                                            if (!e || !e.parts || !e.parts.length) return e;
                                            let { parts: r } = e;
                                            const o = r.indexOf("@"),
                                                u = o + 1;
                                            if (o > -1 && "string" == typeof r[u] && r[u].startsWith("prettier-placeholder")) {
                                                const e = r[o],
                                                    t = r[u],
                                                    n = r.slice(u + 1);
                                                r = r.slice(0, o).concat([e + t]).concat(n)
                                            }
                                            const i = [];
                                            return r.forEach((e => { "string" == typeof e && e.includes("@prettier-placeholder") ? e.split(/@prettier-placeholder-(\d+)-id/).forEach(((e, r) => { r % 2 != 0 ? (i.push(t[e]), n++) : i.push(wl(e)) })) : i.push(e) })), Object.assign({}, e, { parts: i })
                                        }));
                                        return t.length === n ? r : null
                                    }(e, n);
                                    if (!r) throw new Error("Couldn't insert all the expressions");
                                    return xl(["`", vl(xl([Al, r])), Fl, "`"])
                                }(n(o.reduce(((e, t, n) => 0 === n ? t : e + "@prettier-placeholder-" + u++ + "-id" + t), ""), { parser: "scss" }, { stripTrailingHardline: !0 }), r, Tl(e, t))
                            }(e, t, n) : "graphql" === u ? function(e, t, n) {
                                const r = e.getValue(),
                                    o = r.quasis.length;
                                if (1 === o && "" === r.quasis[0].value.raw.trim()) return "``";
                                const u = _l(e, t),
                                    i = [];
                                for (let e = 0; e < o; e++) {
                                    const t = 0 === e,
                                        a = e === o - 1,
                                        s = r.quasis[e].value.cooked,
                                        c = s.split("\n"),
                                        l = c.length,
                                        p = u[e],
                                        d = l > 2 && "" === c[0].trim() && "" === c[1].trim(),
                                        f = l > 2 && "" === c[l - 1].trim() && "" === c[l - 2].trim(),
                                        h = c.every((e => /^\s*(?:#[^\n\r]*)?$/.test(e)));
                                    if (!a && /#[^\n\r]*$/.test(c[l - 1])) return null;
                                    let m = null;
                                    m = h ? Ll(c) : n(s, { parser: "graphql" }, { stripTrailingHardline: !0 }), m ? (m = Ol(m, !1), !t && d && i.push(""), i.push(m), !a && f && i.push("")) : t || a || !d || i.push(""), p && i.push(p)
                                }
                                return Pl(["`", Bl(Pl([Nl, kl(Nl, i)])), Nl, "`"])
                            }(e, t, n) : "html" === u || "angular" === u ? function(e, t, n, r, { parser: o }) {
                                const u = e.getValue(),
                                    i = Ul;
                                Ul = Ul + 1 >>> 0;
                                const a = e => "PRETTIER_HTML_PLACEHOLDER_".concat(e, "_").concat(i, "_IN_JS"),
                                    s = u.quasis.map(((e, t, n) => t === n.length - 1 ? e.value.cooked : e.value.cooked + a(t))).join(""),
                                    c = $l(e, t);
                                if (0 === c.length && 0 === s.trim().length) return "``";
                                const l = new RegExp(a("(\\d+)"), "g");
                                let p = 0;
                                const d = n(s, { parser: o, __onHtmlRoot(e) { p = e.children.length } }, { stripTrailingHardline: !0 }),
                                    f = Vl(d, (e => {
                                        if ("string" != typeof e) return e;
                                        const t = [],
                                            n = e.split(l);
                                        for (let e = 0; e < n.length; e++) {
                                            let o = n[e];
                                            if (e % 2 == 0) { o && (o = Wl(o), r.embeddedInHtml && (o = o.replace(/<\/(script)\b/gi, "<\\/$1")), t.push(o)); continue }
                                            const u = +o;
                                            t.push(c[u])
                                        }
                                        return Rl(t)
                                    })),
                                    h = /^\s/.test(s) ? " " : "",
                                    m = /\s$/.test(s) ? " " : "",
                                    g = "ignore" === r.htmlWhitespaceSensitivity ? jl : h && m ? Ml : null;
                                return ql(Rl(g ? ["`", Il(Rl([g, ql(f)])), g, "`"] : ["`", h, p > 1 ? Il(ql(f)) : ql(f), m, "`"]))
                            }(e, t, n, r, { parser: u }) : void 0 : void 0
                        },
                        insertPragma: zy,
                        massageAstNode: ep,
                        hasPrettierIgnore: oE,
                        willPrintOwnComments: Kc.willPrintOwnComments,
                        canAttachComment: function(e) { return e.type && "CommentBlock" !== e.type && "CommentLine" !== e.type && "Line" !== e.type && "Block" !== e.type && "EmptyStatement" !== e.type && "TemplateElement" !== e.type && "Import" !== e.type },
                        printComment: pC,
                        isBlockComment: mE,
                        handleComments: { ownLine: Kc.handleOwnLineComment, endOfLine: Kc.handleEndOfLineComment, remaining: Kc.handleRemainingComment },
                        getGapRegex: Kc.getGapRegex,
                        getCommentChildNodes: Kc.getCommentChildNodes
                    };
                    const { builders: { concat: mC, hardline: gC, indent: DC, join: yC } } = cn, EC = new Set(["start", "end", "extra", "loc", "comments", "errors", "range"]);

                    function CC(e, t) { const { type: n } = e; return "Identifier" === n ? { type: "StringLiteral", value: e.name } : "UnaryExpression" === n && "+" === e.operator ? t.argument : void 0 }
                    CC.ignoredProperties = EC;
                    var bC = {
                        preprocess: Pp,
                        print: function(e, t, n) {
                            const r = e.getValue();
                            switch (r.type) {
                                case "JsonRoot":
                                    return mC([e.call(n, "node"), gC]);
                                case "ArrayExpression":
                                    return 0 === r.elements.length ? "[]" : mC(["[", DC(mC([gC, yC(mC([",", gC]), e.map(n, "elements"))])), gC, "]"]);
                                case "ObjectExpression":
                                    return 0 === r.properties.length ? "{}" : mC(["{", DC(mC([gC, yC(mC([",", gC]), e.map(n, "properties"))])), gC, "}"]);
                                case "ObjectProperty":
                                    return mC([e.call(n, "key"), ": ", e.call(n, "value")]);
                                case "UnaryExpression":
                                    return mC(["+" === r.operator ? "" : r.operator, e.call(n, "argument")]);
                                case "NullLiteral":
                                    return "null";
                                case "BooleanLiteral":
                                    return r.value ? "true" : "false";
                                case "StringLiteral":
                                case "NumericLiteral":
                                    return JSON.stringify(r.value);
                                case "Identifier":
                                    return JSON.stringify(r.name);
                                default:
                                    throw new Error("unknown type: " + JSON.stringify(r.type))
                            }
                        },
                        massageAstNode: CC
                    };
                    const vC = "Common";
                    var AC = { bracketSpacing: { since: "0.0.0", category: vC, type: "boolean", default: !0, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, singleQuote: { since: "0.0.0", category: vC, type: "boolean", default: !1, description: "Use single quotes instead of double quotes." }, proseWrap: { since: "1.8.2", category: vC, type: "choice", default: [{ since: "1.8.2", value: !0 }, { since: "1.9.0", value: "preserve" }], description: "How to wrap prose.", choices: [{ since: "1.9.0", value: "always", description: "Wrap prose if it exceeds the print width." }, { since: "1.9.0", value: "never", description: "Do not wrap prose." }, { since: "1.9.0", value: "preserve", description: "Wrap prose as-is." }] } };
                    const FC = "JavaScript";
                    var xC = { arrowParens: { since: "1.9.0", category: FC, type: "choice", default: [{ since: "1.9.0", value: "avoid" }, { since: "2.0.0", value: "always" }], description: "Include parentheses around a sole arrow function parameter.", choices: [{ value: "always", description: "Always include parens. Example: `(x) => x`" }, { value: "avoid", description: "Omit parens when possible. Example: `x => x`" }] }, bracketSpacing: AC.bracketSpacing, jsxBracketSameLine: { since: "0.17.0", category: FC, type: "boolean", default: !1, description: "Put > on the last line instead of at a new line." }, semi: { since: "1.0.0", category: FC, type: "boolean", default: !0, description: "Print semicolons.", oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them." }, singleQuote: AC.singleQuote, jsxSingleQuote: { since: "1.15.0", category: FC, type: "boolean", default: !1, description: "Use single quotes in JSX." }, quoteProps: { since: "1.17.0", category: FC, type: "choice", default: "as-needed", description: "Change when properties in objects are quoted.", choices: [{ value: "as-needed", description: "Only add quotes around object properties where required." }, { value: "consistent", description: "If at least one property in an object requires quotes, quote all properties." }, { value: "preserve", description: "Respect the input use of quotes in object properties." }] }, trailingComma: { since: "0.0.0", category: FC, type: "choice", default: [{ since: "0.0.0", value: !1 }, { since: "0.19.0", value: "none" }, { since: "2.0.0", value: "es5" }], description: "Print trailing commas wherever possible when multi-line.", choices: [{ value: "es5", description: "Trailing commas where valid in ES5 (objects, arrays, etc.)" }, { value: "none", description: "No trailing commas." }, { value: "all", description: "Trailing commas wherever possible (including function arguments)." }] } },
                        SC = { name: "JavaScript", type: "programming", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", color: "#f1e05a", aliases: ["js", "node"], extensions: [".js", "._js", ".bones", ".cjs", ".es", ".es6", ".frag", ".gs", ".jake", ".jsb", ".jscad", ".jsfl", ".jsm", ".jss", ".mjs", ".njs", ".pac", ".sjs", ".ssjs", ".xsjs", ".xsjslib"], filenames: ["Jakefile"], interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell"], languageId: 183 },
                        wC = { name: "JSON", type: "data", tmScope: "source.json", aceMode: "json", codemirrorMode: "javascript", codemirrorMimeType: "application/json", searchable: !1, extensions: [".json", ".avsc", ".geojson", ".gltf", ".har", ".ice", ".JSON-tmLanguage", ".jsonl", ".mcmeta", ".tfstate", ".tfstate.backup", ".topojson", ".webapp", ".webmanifest", ".yy", ".yyp"], filenames: [".arcconfig", ".htmlhintrc", ".tern-config", ".tern-project", ".watchmanconfig", "composer.lock", "mcmod.info"], languageId: 174 },
                        TC = { languages: [vs(SC, (e => ({ since: "0.0.0", parsers: ["babel", "espree", "meriyah", "babel-flow", "babel-ts", "flow", "typescript"], vscodeLanguageIds: ["javascript", "mongo"], extensions: [...e.extensions, ".wxs"] }))), vs(SC, (() => ({ name: "Flow", since: "0.0.0", parsers: ["flow", "babel-flow"], vscodeLanguageIds: ["javascript"], aliases: [], filenames: [], extensions: [".js.flow"] }))), vs({ name: "JSX", type: "programming", group: "JavaScript", extensions: [".jsx"], tmScope: "source.js.jsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", languageId: 178 }, (() => ({ since: "0.0.0", parsers: ["babel", "babel-flow", "babel-ts", "flow", "typescript", "espree", "meriyah"], vscodeLanguageIds: ["javascriptreact"] }))), vs({ name: "TypeScript", type: "programming", color: "#2b7489", aliases: ["ts"], interpreters: ["deno", "ts-node"], extensions: [".ts"], tmScope: "source.ts", aceMode: "typescript", codemirrorMode: "javascript", codemirrorMimeType: "application/typescript", languageId: 378 }, (() => ({ since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescript"] }))), vs({ name: "TSX", type: "programming", group: "TypeScript", extensions: [".tsx"], tmScope: "source.tsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", languageId: 94901924 }, (() => ({ since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescriptreact"] }))), vs(wC, (() => ({ name: "JSON.stringify", since: "1.13.0", parsers: ["json-stringify"], vscodeLanguageIds: ["json"], extensions: [], filenames: ["package.json", "package-lock.json", "composer.json"] }))), vs(wC, (e => ({ since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["json"], filenames: [...e.filenames, ".prettierrc"], extensions: e.extensions.filter((e => ".jsonl" !== e)) }))), vs({ name: "JSON with Comments", type: "data", group: "JSON", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", aliases: ["jsonc"], extensions: [".jsonc", ".sublime-build", ".sublime-commands", ".sublime-completions", ".sublime-keymap", ".sublime-macro", ".sublime-menu", ".sublime-mousemap", ".sublime-project", ".sublime-settings", ".sublime-theme", ".sublime-workspace", ".sublime_metrics", ".sublime_session"], filenames: [".babelrc", ".eslintrc.json", ".jscsrc", ".jshintrc", ".jslintrc", "devcontainer.json", "jsconfig.json", "language-configuration.json", "tsconfig.json", "tslint.json"], languageId: 423 }, (e => ({ since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["jsonc"], filenames: [...e.filenames, ".eslintrc"] }))), vs({ name: "JSON5", type: "data", extensions: [".json5"], tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "application/json", languageId: 175 }, (() => ({ since: "1.13.0", parsers: ["json5"], vscodeLanguageIds: ["json5"] })))], options: xC, printers: { estree: hC, "estree-json": bC }, parsers: {get babel() { return {}.parsers.babel }, get "babel-flow" () { return {}.parsers["babel-flow"] }, get "babel-ts" () { return {}.parsers["babel-ts"] }, get json() { return {}.parsers.json }, get json5() { return {}.parsers.json5 }, get "json-stringify" () { return {}.parsers["json-stringify"] }, get __js_expression() { return {}.parsers.__js_expression }, get __vue_expression() { return {}.parsers.__vue_expression }, get __vue_event_binding() { return {}.parsers.__vue_event_binding }, get flow() { return {}.parsers.flow }, get typescript() { return {}.parsers.typescript }, get __ng_action() { return {}.parsers.__ng_action }, get __ng_binding() { return {}.parsers.__ng_binding }, get __ng_interpolation() { return {}.parsers.__ng_interpolation }, get __ng_directive() { return {}.parsers.__ng_directive }, get espree() { return {}.parsers.espree }, get meriyah() { return {}.parsers.meriyah } } };
                    const { isFrontMatterNode: BC } = Lt, kC = new Set(["raw", "raws", "sourceIndex", "source", "before", "after", "trailingComma"]);

                    function NC(e, t, n) {
                        if (BC(e) && "yaml" === e.lang && delete t.value, "css-comment" === e.type && "css-root" === n.type && 0 !== n.nodes.length) { if ((n.nodes[0] === e || BC(n.nodes[0]) && n.nodes[1] === e) && (delete t.text, /^\*\s*@(format|prettier)\s*$/.test(e.text))) return null; if ("css-root" === n.type && se(n.nodes) === e) return null }
                        if ("value-root" === e.type && delete t.text, "media-query" !== e.type && "media-query-list" !== e.type && "media-feature-expression" !== e.type || delete t.value, "css-rule" === e.type && delete t.params, "selector-combinator" === e.type && (t.value = t.value.replace(/\s+/g, " ")), "media-feature" === e.type && (t.value = t.value.replace(/ /g, "")), ("value-word" === e.type && (e.isColor && e.isHex || ["initial", "inherit", "unset", "revert"].includes(t.value.replace().toLowerCase())) || "media-feature" === e.type || "selector-root-invalid" === e.type || "selector-pseudo" === e.type) && (t.value = t.value.toLowerCase()), "css-decl" === e.type && (t.prop = t.prop.toLowerCase()), "css-atrule" !== e.type && "css-import" !== e.type || (t.name = t.name.toLowerCase()), "value-number" === e.type && (t.unit = t.unit.toLowerCase()), "media-feature" !== e.type && "media-keyword" !== e.type && "media-type" !== e.type && "media-unknown" !== e.type && "media-url" !== e.type && "media-value" !== e.type && "selector-attribute" !== e.type && "selector-string" !== e.type && "selector-class" !== e.type && "selector-combinator" !== e.type && "value-string" !== e.type || !t.value || (t.value = t.value.replace(/'/g, '"').replace(/\\([^\dA-Fa-f])/g, "$1")), "selector-attribute" === e.type && (t.attribute = t.attribute.trim(), t.namespace && "string" == typeof t.namespace && (t.namespace = t.namespace.trim(), 0 === t.namespace.length && (t.namespace = !0)), t.value && (t.value = t.value.trim().replace(/^["']|["']$/g, ""), delete t.quoted)), "media-value" !== e.type && "media-type" !== e.type && "value-number" !== e.type && "selector-root-invalid" !== e.type && "selector-class" !== e.type && "selector-combinator" !== e.type && "selector-tag" !== e.type || !t.value || (t.value = t.value.replace(/([\d+.Ee-]+)([A-Za-z]*)/g, ((e, t, n) => { const r = Number(t); return isNaN(r) ? e : r + n.toLowerCase() }))), "selector-tag" === e.type) {
                            const n = e.value.toLowerCase();
                            ["from", "to"].includes(n) && (t.value = n)
                        }
                        "css-atrule" === e.type && "supports" === e.name.toLowerCase() && delete t.value, "selector-unknown" === e.type && delete t.value
                    }
                    NC.ignoredProperties = kC;
                    var PC = NC;
                    const { builders: { hardline: OC, concat: _C, markAsRoot: LC } } = cn, IC = { "---": "yaml", "+++": "toml" };
                    var MC = {
                        parse: function(e) {
                            const t = Object.keys(IC).map(ae).join("|"),
                                n = e.match(new RegExp("^(".concat(t, ")([^\\n]*)\\n(?:([\\s\\S]*?)\\n)?\\1[^\\n\\S]*(\\n|$)")));
                            if (null === n) return { frontMatter: null, content: e };
                            const [r, o, u, i] = n;
                            let a = IC[o];
                            return "toml" !== a && u && u.trim() && (a = u.trim()), { frontMatter: { type: "front-matter", lang: a, value: i, raw: r.replace(/\n$/, "") }, content: r.replace(/[^\n]/g, " ") + e.slice(r.length) }
                        },
                        print: function(e, t) {
                            if ("yaml" === e.lang) {
                                const n = e.value.trim(),
                                    r = n ? t(n, { parser: "yaml" }, { stripTrailingHardline: !0 }) : "";
                                return LC(_C(["---", OC, r, r ? OC : "", "---"]))
                            }
                        }
                    };
                    const { builders: { hardline: jC, concat: RC } } = cn, { print: qC } = MC;
                    const { parse: VC } = MC;
                    var $C = { hasPragma: function(e) { return pp.hasPragma(VC(e).content) }, insertPragma: function(e) { const { frontMatter: t, content: n } = VC(e); return (t ? t.raw + "\n\n" : "") + pp.insertPragma(n) } };
                    const WC = new Set(["red", "green", "blue", "alpha", "a", "rgb", "hue", "h", "saturation", "s", "lightness", "l", "whiteness", "w", "blackness", "b", "tint", "shade", "blend", "blenda", "contrast", "hsl", "hsla", "hwb", "hwba"]);

                    function UC(e, t) {
                        const n = [].concat(t);
                        let r, o = -1;
                        for (; r = e.getParentNode(++o);)
                            if (n.includes(r.type)) return o;
                        return -1
                    }

                    function JC(e, t) { const n = UC(e, t); return -1 === n ? null : e.getParentNode(n) }

                    function zC(e) { return "value-operator" === e.type && "*" === e.value }

                    function HC(e) { return "value-operator" === e.type && "/" === e.value }

                    function GC(e) { return "value-operator" === e.type && "+" === e.value }

                    function XC(e) { return "value-operator" === e.type && "-" === e.value }

                    function YC(e) { return "value-operator" === e.type && "%" === e.value }

                    function KC(e) { return "value-comma_group" === e.type && e.groups && e.groups[1] && "value-colon" === e.groups[1].type }

                    function QC(e) { return "value-paren_group" === e.type && e.groups && e.groups[0] && KC(e.groups[0]) }
                    var ZC = {
                            getAncestorCounter: UC,
                            getAncestorNode: JC,
                            getPropOfDeclNode: function(e) { const t = JC(e, "css-decl"); return t && t.prop && t.prop.toLowerCase() },
                            hasSCSSInterpolation: function(e) {
                                if (e && e.length)
                                    for (let t = e.length - 1; t > 0; t--)
                                        if ("word" === e[t].type && "{" === e[t].value && "word" === e[t - 1].type && e[t - 1].value.endsWith("#")) return !0;
                                return !1
                            },
                            hasStringOrFunction: function(e) {
                                if (e && e.length)
                                    for (let t = 0; t < e.length; t++)
                                        if ("string" === e[t].type || "func" === e[t].type) return !0;
                                return !1
                            },
                            maybeToLowerCase: function(e) { return e.includes("$") || e.includes("@") || e.includes("#") || e.startsWith("%") || e.startsWith("--") || e.startsWith(":--") || e.includes("(") && e.includes(")") ? e : e.toLowerCase() },
                            insideValueFunctionNode: function(e, t) { const n = JC(e, "value-func"); return n && n.value && n.value.toLowerCase() === t },
                            insideICSSRuleNode: function(e) { const t = JC(e, "css-rule"); return t && t.raws && t.raws.selector && (t.raws.selector.startsWith(":import") || t.raws.selector.startsWith(":export")) },
                            insideAtRuleNode: function(e, t) {
                                const n = [].concat(t),
                                    r = JC(e, "css-atrule");
                                return r && n.includes(r.name.toLowerCase())
                            },
                            insideURLFunctionInImportAtRuleNode: function(e) {
                                const t = e.getValue(),
                                    n = JC(e, "css-atrule");
                                return n && "import" === n.name && "url" === t.groups[0].value && 2 === t.groups.length
                            },
                            isKeyframeAtRuleKeywords: function(e, t) { const n = JC(e, "css-atrule"); return n && n.name && n.name.toLowerCase().endsWith("keyframes") && ["from", "to"].includes(t.toLowerCase()) },
                            isWideKeywords: function(e) { return ["initial", "inherit", "unset", "revert"].includes(e.toLowerCase()) },
                            isSCSS: function(e, t) { return "less" === e || "scss" === e ? "scss" === e : /(\w\s*:\s*[^:}]+|#){|@import[^\n]+(?:url|,)/.test(t) },
                            isSCSSVariable: function(e) { return !(!e || "word" !== e.type || !e.value.startsWith("$")) },
                            isLastNode: function(e, t) { const n = e.getParentNode(); if (!n) return !1; const { nodes: r } = n; return r && r.indexOf(t) === r.length - 1 },
                            isLessParser: function(e) { return "css" === e.parser || "less" === e.parser },
                            isSCSSControlDirectiveNode: function(e) { return "css-atrule" === e.type && ["if", "else", "for", "each", "while"].includes(e.name) },
                            isDetachedRulesetDeclarationNode: function(e) { return !!e.selector && ("string" == typeof e.selector && /^@.+:.*$/.test(e.selector) || e.selector.value && /^@.+:.*$/.test(e.selector.value)) },
                            isRelationalOperatorNode: function(e) { return "value-word" === e.type && ["<", ">", "<=", ">="].includes(e.value) },
                            isEqualityOperatorNode: function(e) { return "value-word" === e.type && ["==", "!="].includes(e.value) },
                            isMultiplicationNode: zC,
                            isDivisionNode: HC,
                            isAdditionNode: GC,
                            isSubtractionNode: XC,
                            isModuloNode: YC,
                            isMathOperatorNode: function(e) { return zC(e) || HC(e) || GC(e) || XC(e) || YC(e) },
                            isEachKeywordNode: function(e) { return "value-word" === e.type && "in" === e.value },
                            isForKeywordNode: function(e) { return "value-word" === e.type && ["from", "through", "end"].includes(e.value) },
                            isURLFunctionNode: function(e) { return "value-func" === e.type && "url" === e.value.toLowerCase() },
                            isIfElseKeywordNode: function(e) { return "value-word" === e.type && ["and", "or", "not"].includes(e.value) },
                            hasComposesNode: function(e) { return e.value && "value-root" === e.value.type && e.value.group && "value-value" === e.value.group.type && "composes" === e.prop.toLowerCase() },
                            hasParensAroundNode: function(e) { return e.value && e.value.group && e.value.group.group && "value-paren_group" === e.value.group.group.type && null !== e.value.group.group.open && null !== e.value.group.group.close },
                            hasEmptyRawBefore: function(e) { return e.raws && "" === e.raws.before },
                            isSCSSNestedPropertyNode: function(e) { return !!e.selector && e.selector.replace(/\/\*.*?\*\//, "").replace(/\/\/.*?\n/, "").trim().endsWith(":") },
                            isDetachedRulesetCallNode: function(e) { return e.raws && e.raws.params && /^\(\s*\)$/.test(e.raws.params) },
                            isTemplatePlaceholderNode: function(e) { return e.name.startsWith("prettier-placeholder") },
                            isTemplatePropNode: function(e) { return e.prop.startsWith("@prettier-placeholder") },
                            isPostcssSimpleVarNode: function(e, t) { return "$$" === e.value && "value-func" === e.type && t && "value-word" === t.type && !t.raws.before },
                            isKeyValuePairNode: KC,
                            isKeyValuePairInParenGroupNode: QC,
                            isSCSSMapItemNode: function(e) { const t = e.getValue(); if (0 === t.groups.length) return !1; const n = e.getParentNode(1); if (!(QC(t) || n && QC(n))) return !1; const r = JC(e, "css-decl"); return !!(r && r.prop && r.prop.startsWith("$")) || !!QC(n) || "value-func" === n.type },
                            isInlineValueCommentNode: function(e) { return "value-comment" === e.type && e.inline },
                            isHashNode: function(e) { return "value-word" === e.type && "#" === e.value },
                            isLeftCurlyBraceNode: function(e) { return "value-word" === e.type && "{" === e.value },
                            isRightCurlyBraceNode: function(e) { return "value-word" === e.type && "}" === e.value },
                            isWordNode: function(e) { return ["value-word", "value-atword"].includes(e.type) },
                            isColonNode: function(e) { return "value-colon" === e.type },
                            isMediaAndSupportsKeywords: function(e) { return e.value && ["not", "and", "or"].includes(e.value.toLowerCase()) },
                            isColorAdjusterFuncNode: function(e) { return "value-func" === e.type && WC.has(e.value.toLowerCase()) },
                            lastLineHasInlineComment: function(e) { return /\/\//.test(e.split(/[\n\r]/).pop()) },
                            stringifyNode: function e(t) {
                                if (t.groups) return (t.open && t.open.value ? t.open.value : "") + t.groups.reduce(((n, r, o) => n + e(r) + ("comma_group" === t.groups[0].type && o !== t.groups.length - 1 ? "," : "")), "") + (t.close && t.close.value ? t.close.value : "");
                                const n = t.raws && t.raws.before ? t.raws.before : "",
                                    r = t.raws && t.raws.quote ? t.raws.quote : "";
                                return n + r + ("atword" === t.type ? "@" : "") + (t.value ? t.value : "") + r + (t.unit ? t.unit : "") + (t.group ? e(t.group) : "") + (t.raws && t.raws.after ? t.raws.after : "")
                            },
                            isAtWordPlaceholderNode: function(e) { return e && "value-atword" === e.type && e.value.startsWith("prettier-placeholder-") }
                        },
                        eb = function(e, t) { let n = 0; for (let r = 0; r < e.line - 1; ++r) n = t.indexOf("\n", n) + 1; return n + e.column };
                    const { getLast: tb, skipEverythingButNewLine: nb } = Lt;

                    function rb(e, t) { return "number" == typeof e.sourceIndex ? e.sourceIndex : e.source ? eb(e.source.start, t) - 1 : null }

                    function ob(e, t) { if ("css-comment" === e.type && e.inline) return nb(t, e.source.startOffset); const n = e.nodes && tb(e.nodes); return n && e.source && !e.source.end && (e = n), e.source && e.source.end ? eb(e.source.end, t) : null }

                    function ub(e, t, n) { e.source && (e.source.startOffset = rb(e, n) + t, e.source.endOffset = ob(e, n) + t); for (const r in e) { const o = e[r]; "source" !== r && o && "object" == typeof o && ub(o, t, n) } }

                    function ib(e) { let t = e.source.startOffset; return "string" == typeof e.prop && (t += e.prop.length), "css-atrule" === e.type && "string" == typeof e.name && (t += 1 + e.name.length + e.raws.afterName.match(/^\s*:?\s*/)[0].length), "css-atrule" !== e.type && e.raws && "string" == typeof e.raws.between && (t += e.raws.between.length), t }
                    var ab = {
                        locStart: function(e) { return e.source.startOffset },
                        locEnd: function(e) { return e.source.endOffset },
                        calculateLoc: function e(t, n) { t.source && (t.source.startOffset = rb(t, n), t.source.endOffset = ob(t, n)); for (const r in t) { const o = t[r]; "source" !== r && o && "object" == typeof o && ("value-root" === o.type || "value-unknown" === o.type ? ub(o, ib(t), o.text || o.value) : e(o, n)) } },
                        replaceQuotesInInlineComments: function(e) {
                            let t, n = "initial",
                                r = "initial",
                                o = !1;
                            const u = [];
                            for (let i = 0; i < e.length; i++) {
                                const a = e[i];
                                switch (n) {
                                    case "initial":
                                        if ("'" === a) { n = "single-quotes"; continue }
                                        if ('"' === a) { n = "double-quotes"; continue }
                                        if (("u" === a || "U" === a) && "url(" === e.slice(i, i + 4).toLowerCase()) { n = "url", i += 3; continue }
                                        if ("*" === a && "/" === e[i - 1]) { n = "comment-block"; continue }
                                        if ("/" === a && "/" === e[i - 1]) { n = "comment-inline", t = i - 1; continue }
                                        continue;
                                    case "single-quotes":
                                        if ("'" === a && "\\" !== e[i - 1] && (n = r, r = "initial"), "\n" === a || "\r" === a) return e;
                                        continue;
                                    case "double-quotes":
                                        if ('"' === a && "\\" !== e[i - 1] && (n = r, r = "initial"), "\n" === a || "\r" === a) return e;
                                        continue;
                                    case "url":
                                        if (")" === a && (n = "initial"), "\n" === a || "\r" === a) return e;
                                        if ("'" === a) { n = "single-quotes", r = "url"; continue }
                                        if ('"' === a) { n = "double-quotes", r = "url"; continue }
                                        continue;
                                    case "comment-block":
                                        "/" === a && "*" === e[i - 1] && (n = "initial");
                                        continue;
                                    case "comment-inline":
                                        '"' !== a && "'" !== a && "*" !== a || (o = !0), "\n" !== a && "\r" !== a || (o && u.push([t, i]), n = "initial", o = !1);
                                        continue
                                }
                            }
                            for (const [t, n] of u) e = e.slice(0, t) + e.slice(t, n).replace(/["'*]/g, " ") + e.slice(n);
                            return e
                        }
                    };
                    const { printNumber: sb, printString: cb, hasNewline: lb, isFrontMatterNode: pb, isNextLineEmpty: db } = Lt, { builders: { concat: fb, join: hb, line: mb, hardline: gb, softline: Db, group: yb, fill: Eb, indent: Cb, dedent: bb, ifBreak: vb, breakParent: Ab }, utils: { removeLines: Fb } } = cn, { insertPragma: xb } = $C, { getAncestorNode: Sb, getPropOfDeclNode: wb, maybeToLowerCase: Tb, insideValueFunctionNode: Bb, insideICSSRuleNode: kb, insideAtRuleNode: Nb, insideURLFunctionInImportAtRuleNode: Pb, isKeyframeAtRuleKeywords: Ob, isWideKeywords: _b, isSCSS: Lb, isLastNode: Ib, isLessParser: Mb, isSCSSControlDirectiveNode: jb, isDetachedRulesetDeclarationNode: Rb, isRelationalOperatorNode: qb, isEqualityOperatorNode: Vb, isMultiplicationNode: $b, isDivisionNode: Wb, isAdditionNode: Ub, isSubtractionNode: Jb, isMathOperatorNode: zb, isEachKeywordNode: Hb, isForKeywordNode: Gb, isURLFunctionNode: Xb, isIfElseKeywordNode: Yb, hasComposesNode: Kb, hasParensAroundNode: Qb, hasEmptyRawBefore: Zb, isKeyValuePairNode: ev, isDetachedRulesetCallNode: tv, isTemplatePlaceholderNode: nv, isTemplatePropNode: rv, isPostcssSimpleVarNode: ov, isSCSSMapItemNode: uv, isInlineValueCommentNode: iv, isHashNode: av, isLeftCurlyBraceNode: sv, isRightCurlyBraceNode: cv, isWordNode: lv, isColonNode: pv, isMediaAndSupportsKeywords: dv, isColorAdjusterFuncNode: fv, lastLineHasInlineComment: hv, isAtWordPlaceholderNode: mv } = ZC, { locStart: gv, locEnd: Dv } = ab;

                    function yv(e) { return "es5" === e.trailingComma || "all" === e.trailingComma }

                    function Ev(e, t, n) {
                        const r = e.getValue(),
                            o = [];
                        return e.each(((e, u) => {
                            const i = r.nodes[u - 1];
                            if (i && "css-comment" === i.type && "prettier-ignore" === i.text.trim()) {
                                const n = e.getValue();
                                o.push(t.originalText.slice(gv(n), Dv(n)))
                            } else o.push(e.call(n));
                            u !== r.nodes.length - 1 && ("css-comment" === r.nodes[u + 1].type && !lb(t.originalText, gv(r.nodes[u + 1]), { backwards: !0 }) && !pb(r.nodes[u]) || "css-atrule" === r.nodes[u + 1].type && "else" === r.nodes[u + 1].name && "css-comment" !== r.nodes[u].type ? o.push(" ") : (o.push(t.__isHTMLStyleAttribute ? mb : gb), db(t.originalText, e.getValue(), Dv) && !pb(r.nodes[u]) && o.push(gb)))
                        }), "nodes"), fb(o)
                    }
                    const Cv = /(["'])(?:(?!\1)[^\\]|\\[\S\s])*\1/g,
                        bv = new RegExp(Cv.source + "|" + "(".concat(/[$@]?[A-Z_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/g.source, ")?") + "(".concat(/(?:\d*\.\d+|\d+\.?)(?:[Ee][+-]?\d+)?/g.source, ")") + "(".concat(/[A-Za-z]+/g.source, ")?"), "g");

                    function vv(e, t) { return e.replace(Cv, (e => cb(e, t))) }

                    function Av(e, t) { const n = t.singleQuote ? "'" : '"'; return e.includes('"') || e.includes("'") ? e : n + e + n }

                    function Fv(e) { return e.replace(bv, ((e, t, n, r, o) => !n && r ? xv(r) + Tb(o || "") : e)) }

                    function xv(e) { return sb(e).replace(/\.0(?=$|e)/, "") }
                    var Sv = {
                            print: function(e, t, n) {
                                const r = e.getValue();
                                if (!r) return "";
                                if ("string" == typeof r) return r;
                                switch (r.type) {
                                    case "front-matter":
                                        return fb([r.raw, gb]);
                                    case "css-root":
                                        {
                                            const o = Ev(e, t, n),
                                                u = r.raws.after.trim();
                                            return fb([o, u ? " ".concat(u) : "", o.parts.length ? gb : ""])
                                        }
                                    case "css-comment":
                                        {
                                            const e = r.inline || r.raws.inline,
                                                n = t.originalText.slice(gv(r), Dv(r));
                                            return e ? n.trimEnd() : n
                                        }
                                    case "css-rule":
                                        return fb([e.call(n, "selector"), r.important ? " !important" : "", r.nodes ? fb([r.selector && "selector-unknown" === r.selector.type && hv(r.selector.value) ? mb : " ", "{", r.nodes.length > 0 ? Cb(fb([gb, Ev(e, t, n)])) : "", gb, "}", Rb(r) ? ";" : ""]) : ";"]);
                                    case "css-decl":
                                        {
                                            const o = e.getParentNode(),
                                                { between: u } = r.raws,
                                                i = u.trim(),
                                                a = ":" === i;
                                            let s = Kb(r) ? Fb(e.call(n, "value")) : e.call(n, "value");
                                            return !a && hv(i) && (s = Cb(fb([gb, bb(s)]))),
                                            fb([r.raws.before.replace(/[\s;]/g, ""), kb(e) ? r.prop : Tb(r.prop), i.startsWith("//") ? " " : "", i, r.extend ? "" : " ", Mb(t) && r.extend && r.selector ? fb(["extend(", e.call(n, "selector"), ")"]) : "", s, r.raws.important ? r.raws.important.replace(/\s*!\s*important/i, " !important") : r.important ? " !important" : "", r.raws.scssDefault ? r.raws.scssDefault.replace(/\s*!default/i, " !default") : r.scssDefault ? " !default" : "", r.raws.scssGlobal ? r.raws.scssGlobal.replace(/\s*!global/i, " !global") : r.scssGlobal ? " !global" : "", r.nodes ? fb([" {", Cb(fb([Db, Ev(e, t, n)])), Db, "}"]) : rv(r) && !o.raws.semicolon && ";" !== t.originalText[Dv(r) - 1] ? "" : t.__isHTMLStyleAttribute && Ib(e, r) ? vb(";", "") : ";"])
                                        }
                                    case "css-atrule":
                                        {
                                            const o = e.getParentNode(),
                                                u = nv(r) && !o.raws.semicolon && ";" !== t.originalText[Dv(r) - 1];
                                            if (Mb(t)) { if (r.mixin) return fb([e.call(n, "selector"), r.important ? " !important" : "", u ? "" : ";"]); if (r.function) return fb([r.name, fb([e.call(n, "params")]), u ? "" : ";"]); if (r.variable) return fb(["@", r.name, ": ", r.value ? fb([e.call(n, "value")]) : "", r.raws.between.trim() ? r.raws.between.trim() + " " : "", r.nodes ? fb(["{", Cb(fb([r.nodes.length > 0 ? Db : "", Ev(e, t, n)])), Db, "}"]) : "", u ? "" : ";"]) }
                                            return fb(["@", tv(r) || r.name.endsWith(":") ? r.name : Tb(r.name), r.params ? fb([tv(r) ? "" : nv(r) ? "" === r.raws.afterName ? "" : r.name.endsWith(":") ? " " : /^\s*\n\s*\n/.test(r.raws.afterName) ? fb([gb, gb]) : /^\s*\n/.test(r.raws.afterName) ? gb : " " : " ", e.call(n, "params")]) : "", r.selector ? Cb(fb([" ", e.call(n, "selector")])) : "", r.value ? yb(fb([" ", e.call(n, "value"), jb(r) ? Qb(r) ? " " : mb : ""])) : "else" === r.name ? " " : "", r.nodes ? fb([jb(r) ? "" : r.selector && !r.selector.nodes && "string" == typeof r.selector.value && hv(r.selector.value) || !r.selector && "string" == typeof r.params && hv(r.params) ? mb : " ", "{", Cb(fb([r.nodes.length > 0 ? Db : "", Ev(e, t, n)])), Db, "}"]) : u ? "" : ";"])
                                        }
                                    case "media-query-list":
                                        { const t = []; return e.each((e => { const r = e.getValue(); "media-query" === r.type && "" === r.value || t.push(e.call(n)) }), "nodes"), yb(Cb(hb(mb, t))) }
                                    case "media-query":
                                        return fb([hb(" ", e.map(n, "nodes")), Ib(e, r) ? "" : ","]);
                                    case "media-type":
                                        return Fv(vv(r.value, t));
                                    case "media-feature-expression":
                                        return r.nodes ? fb(["(", fb(e.map(n, "nodes")), ")"]) : r.value;
                                    case "media-feature":
                                        return Tb(vv(r.value.replace(/ +/g, " "), t));
                                    case "media-colon":
                                        return fb([r.value, " "]);
                                    case "media-value":
                                        return Fv(vv(r.value, t));
                                    case "media-keyword":
                                        return vv(r.value, t);
                                    case "media-url":
                                        return vv(r.value.replace(/^url\(\s+/gi, "url(").replace(/\s+\)$/gi, ")"), t);
                                    case "media-unknown":
                                        return r.value;
                                    case "selector-root":
                                        return yb(fb([Nb(e, "custom-selector") ? fb([Sb(e, "css-atrule").customSelector, mb]) : "", hb(fb([",", Nb(e, ["extend", "custom-selector", "nest"]) ? mb : gb]), e.map(n, "nodes"))]));
                                    case "selector-selector":
                                        return yb(Cb(fb(e.map(n, "nodes"))));
                                    case "selector-comment":
                                        return r.value;
                                    case "selector-string":
                                        return vv(r.value, t);
                                    case "selector-tag":
                                        {
                                            const t = e.getParentNode(),
                                                n = t && t.nodes.indexOf(r),
                                                o = n && t.nodes[n - 1];
                                            return fb([r.namespace ? fb([!0 === r.namespace ? "" : r.namespace.trim(), "|"]) : "", "selector-nesting" === o.type ? r.value : Fv(Ob(e, r.value) ? r.value.toLowerCase() : r.value)])
                                        }
                                    case "selector-id":
                                        return fb(["#", r.value]);
                                    case "selector-class":
                                        return fb([".", Fv(vv(r.value, t))]);
                                    case "selector-attribute":
                                        return fb(["[", r.namespace ? fb([!0 === r.namespace ? "" : r.namespace.trim(), "|"]) : "", r.attribute.trim(), r.operator ? r.operator : "", r.value ? Av(vv(r.value.trim(), t), t) : "", r.insensitive ? " i" : "", "]"]);
                                    case "selector-combinator":
                                        {
                                            if ("+" === r.value || ">" === r.value || "~" === r.value || ">>>" === r.value) {
                                                const t = e.getParentNode(),
                                                    n = "selector-selector" === t.type && t.nodes[0] === r ? "" : mb;
                                                return fb([n, r.value, Ib(e, r) ? "" : " "])
                                            }
                                            const n = r.value.trim().startsWith("(") ? mb : "",
                                                o = Fv(vv(r.value.trim(), t)) || mb;
                                            return fb([n, o])
                                        }
                                    case "selector-universal":
                                        return fb([r.namespace ? fb([!0 === r.namespace ? "" : r.namespace.trim(), "|"]) : "", r.value]);
                                    case "selector-pseudo":
                                        return fb([Tb(r.value), r.nodes && r.nodes.length > 0 ? fb(["(", hb(", ", e.map(n, "nodes")), ")"]) : ""]);
                                    case "selector-nesting":
                                        return r.value;
                                    case "selector-unknown":
                                        {
                                            const n = Sb(e, "css-rule");
                                            if (n && n.isSCSSNesterProperty) return Fv(vv(Tb(r.value), t));
                                            const o = e.getParentNode();
                                            if (o.raws && o.raws.selector) {
                                                const e = gv(o),
                                                    n = e + o.raws.selector.length;
                                                return t.originalText.slice(e, n).trim()
                                            }
                                            const u = e.getParentNode(1);
                                            if ("value-paren_group" === o.type && u && "value-func" === u.type && "selector" === u.value) {
                                                const e = gv(o.open) + 1,
                                                    n = Dv(o.close) - 1,
                                                    r = t.originalText.slice(e, n).trim();
                                                return hv(r) ? fb([Ab, r]) : r
                                            }
                                            return r.value
                                        }
                                    case "value-value":
                                    case "value-root":
                                        return e.call(n, "group");
                                    case "value-comment":
                                        return t.originalText.slice(gv(r), Dv(r));
                                    case "value-comma_group":
                                        {
                                            const t = e.getParentNode(),
                                                o = e.getParentNode(1),
                                                u = wb(e),
                                                i = u && "value-value" === t.type && ("grid" === u || u.startsWith("grid-template")),
                                                a = Sb(e, "css-atrule"),
                                                s = a && jb(a),
                                                c = e.map(n, "groups"),
                                                l = [],
                                                p = Bb(e, "url");
                                            let d = !1,
                                                f = !1;
                                            for (let n = 0; n < r.groups.length; ++n) {
                                                l.push(c[n]);
                                                const u = r.groups[n - 1],
                                                    h = r.groups[n],
                                                    m = r.groups[n + 1],
                                                    g = r.groups[n + 2];
                                                if (p) {
                                                    (m && Ub(m) || Ub(h)) && l.push(" ");
                                                    continue
                                                }
                                                if (!m) continue;
                                                if ("value-word" === h.type && h.value.endsWith("-") && mv(m)) continue;
                                                const D = "value-string" === h.type && h.value.startsWith("#{"),
                                                    y = d && "value-string" === m.type && m.value.endsWith("}");
                                                if (D || y) { d = !d; continue }
                                                if (d) continue;
                                                if (pv(h) || pv(m)) continue;
                                                if ("value-atword" === h.type && "" === h.value) continue;
                                                if ("~" === h.value) continue;
                                                if (h.value && h.value.includes("\\") && m && "value-comment" !== m.type) continue;
                                                if (u && u.value && u.value.indexOf("\\") === u.value.length - 1 && "value-operator" === h.type && "/" === h.value) continue;
                                                if ("\\" === h.value) continue;
                                                if (ov(h, m)) continue;
                                                if (av(h) || sv(h) || cv(m) || sv(m) && Zb(m) || cv(h) && Zb(m)) continue;
                                                if ("--" === h.value && av(m)) continue;
                                                const E = zb(h),
                                                    C = zb(m);
                                                if ((E && av(m) || C && cv(h)) && Zb(m)) continue;
                                                if (Bb(e, "calc") && (Ub(h) || Ub(m) || Jb(h) || Jb(m)) && Zb(m)) continue;
                                                const b = (Ub(h) || Jb(h)) && 0 === n && ("value-number" === m.type || m.isHex) && o && fv(o) && !Zb(m),
                                                    v = g && "value-func" === g.type || g && lv(g) || "value-func" === h.type || lv(h),
                                                    A = "value-func" === m.type || lv(m) || u && "value-func" === u.type || u && lv(u);
                                                if ($b(m) || $b(h) || Bb(e, "calc") || b || !(Wb(m) && !v || Wb(h) && !A || Ub(m) && !v || Ub(h) && !A || Jb(m) || Jb(h)) || !(Zb(m) || E && (!u || u && zb(u))))
                                                    if (iv(h)) {
                                                        if ("value-paren_group" === t.type) { l.push(bb(gb)); continue }
                                                        l.push(gb)
                                                    } else s && (Vb(m) || qb(m) || Yb(m) || Hb(h) || Gb(h)) || a && "namespace" === a.name.toLowerCase() ? l.push(" ") : i ? h.source && m.source && h.source.start.line !== m.source.start.line ? (l.push(gb), f = !0) : l.push(" ") : C ? l.push(" ") : m && "..." === m.value || mv(h) && mv(m) && Dv(h) === gv(m) || l.push(mb)
                                            }
                                            return f && l.unshift(gb),
                                            s ? yb(Cb(fb(l))) : Pb(e) ? yb(Eb(l)) : yb(Cb(Eb(l)))
                                        }
                                    case "value-paren_group":
                                        {
                                            const o = e.getParentNode();
                                            if (o && Xb(o) && (1 === r.groups.length || r.groups.length > 0 && "value-comma_group" === r.groups[0].type && r.groups[0].groups.length > 0 && "value-word" === r.groups[0].groups[0].type && r.groups[0].groups[0].value.startsWith("data:"))) return fb([r.open ? e.call(n, "open") : "", hb(",", e.map(n, "groups")), r.close ? e.call(n, "close") : ""]);
                                            if (!r.open) {
                                                const t = e.map(n, "groups"),
                                                    r = [];
                                                for (let e = 0; e < t.length; e++) 0 !== e && r.push(fb([",", mb])), r.push(t[e]);
                                                return yb(Cb(Eb(r)))
                                            }
                                            const u = uv(e),
                                                i = r.groups[r.groups.length - 1],
                                                a = i && "value-comment" === i.type;
                                            return yb(fb([r.open ? e.call(n, "open") : "", Cb(fb([Db, hb(fb([",", mb]), e.map((e => {
                                                const t = e.getValue(),
                                                    r = n(e);
                                                return ev(t) && "value-comma_group" === t.type && t.groups && t.groups[2] && "value-paren_group" === t.groups[2].type ? (r.contents.contents.parts[1] = yb(r.contents.contents.parts[1]), yb(bb(r))) : r
                                            }), "groups"))])), vb(!a && Lb(t.parser, t.originalText) && u && yv(t) ? "," : ""), Db, r.close ? e.call(n, "close") : ""]), { shouldBreak: u })
                                        }
                                    case "value-func":
                                        return fb([r.value, Nb(e, "supports") && dv(r) ? " " : "", e.call(n, "group")]);
                                    case "value-paren":
                                        return r.value;
                                    case "value-number":
                                        return fb([xv(r.value), Tb(r.unit)]);
                                    case "value-operator":
                                        return r.value;
                                    case "value-word":
                                        return r.isColor && r.isHex || _b(r.value) ? r.value.toLowerCase() : r.value;
                                    case "value-colon":
                                        {
                                            const t = e.getParentNode(),
                                                n = t && t.groups.indexOf(r),
                                                o = n && t.groups[n - 1];
                                            return fb([r.value, o && "\\" === o.value[o.value.length - 1] || Bb(e, "url") ? "" : mb])
                                        }
                                    case "value-comma":
                                        return fb([r.value, " "]);
                                    case "value-string":
                                        return cb(r.raws.quote + r.value + r.raws.quote, t);
                                    case "value-atword":
                                        return fb(["@", r.value]);
                                    case "value-unicode-range":
                                    case "value-unknown":
                                        return r.value;
                                    default:
                                        throw new Error("Unknown postcss type ".concat(JSON.stringify(r.type)))
                                }
                            },
                            embed: function(e, t, n) { const r = e.getValue(); if ("front-matter" === r.type) { const e = qC(r, n); return e ? RC([e, jC]) : "" } },
                            insertPragma: xb,
                            massageAstNode: PC
                        },
                        wv = { singleQuote: AC.singleQuote },
                        Tv = { languages: [vs({ name: "CSS", type: "markup", tmScope: "source.css", aceMode: "css", codemirrorMode: "css", codemirrorMimeType: "text/css", color: "#563d7c", extensions: [".css"], languageId: 50 }, (e => ({ since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["css"], extensions: [...e.extensions, ".wxss"] }))), vs({ name: "PostCSS", type: "markup", tmScope: "source.postcss", group: "CSS", extensions: [".pcss", ".postcss"], aceMode: "text", languageId: 262764437 }, (() => ({ since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["postcss"] }))), vs({ name: "Less", type: "markup", color: "#1d365d", extensions: [".less"], tmScope: "source.css.less", aceMode: "less", codemirrorMode: "css", codemirrorMimeType: "text/css", languageId: 198 }, (() => ({ since: "1.4.0", parsers: ["less"], vscodeLanguageIds: ["less"] }))), vs({ name: "SCSS", type: "markup", color: "#c6538c", tmScope: "source.css.scss", aceMode: "scss", codemirrorMode: "css", codemirrorMimeType: "text/x-scss", extensions: [".scss"], languageId: 329 }, (() => ({ since: "1.4.0", parsers: ["scss"], vscodeLanguageIds: ["scss"] })))], options: wv, printers: { postcss: Sv }, parsers: {get css() { return {}.parsers.css }, get less() { return {}.parsers.less }, get scss() { return {}.parsers.scss } } };

                    function Bv(e, t) {
                        if ("TextNode" === e.type) {
                            const n = e.chars.trim();
                            if (!n) return null;
                            t.chars = n
                        }
                    }
                    Bv.ignoredProperties = new Set(["loc", "selfClosing"]);
                    var kv = Bv;
                    const Nv = new Set(["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "isindex", "keygen", "link", "menuitem", "meta", "nextid", "param", "source", "track", "wbr"]);

                    function Pv(e) { return Ov(e, ["TextNode"]) && !/\S/.test(e.chars) }

                    function Ov(e, t) { return e && t.some((t => e.type === t)) }

                    function _v(e, t) {
                        const n = e.getValue(),
                            r = e.getParentNode(0) || {},
                            o = r.children || r.body || r.parts || [],
                            u = o.indexOf(n);
                        return -1 !== u && o[u + t]
                    }

                    function Lv(e, t = 1) { return _v(e, -t) }

                    function Iv(e) { return _v(e, 1) }

                    function Mv(e) { return Ov(e, ["MustacheCommentStatement"]) && "string" == typeof e.value && "prettier-ignore" === e.value.trim() }
                    var jv = {
                        getNextNode: Iv,
                        getPreviousNode: Lv,
                        hasPrettierIgnore: function(e) {
                            const t = e.getValue(),
                                n = Lv(e, 2);
                            return Mv(t) || Mv(n)
                        },
                        isNextNodeOfSomeType: function(e, t) { return Ov(Iv(e), t) },
                        isNodeOfSomeType: Ov,
                        isParentOfSomeType: function(e, t) { return Ov(e.getParentNode(0), t) },
                        isPreviousNodeOfSomeType: function(e, t) { return Ov(Lv(e), t) },
                        isVoid: function(e) { return function(e) { return Ov(e, ["ElementNode"]) && "string" == typeof e.tag && (function(e) { return e.toUpperCase() === e }(e.tag[0]) || e.tag.includes(".")) }(e) && e.children.every((e => Pv(e))) || Nv.has(e.tag) },
                        isWhitespaceNode: Pv
                    };
                    const { builders: { concat: Rv, group: qv, hardline: Vv, ifBreak: $v, indent: Wv, join: Uv, line: Jv, softline: zv } } = cn, { locStart: Hv, locEnd: Gv } = { locStart: function(e) { return e.loc.start.offset }, locEnd: function(e) { return e.loc.end.offset } }, { getNextNode: Xv, getPreviousNode: Yv, hasPrettierIgnore: Kv, isNextNodeOfSomeType: Qv, isNodeOfSomeType: Zv, isParentOfSomeType: eA, isPreviousNodeOfSomeType: tA, isVoid: nA, isWhitespaceNode: rA } = jv;

                    function oA(e, t) { const n = e.getValue(); return Rv(["<", n.tag, uA(e, t), NA(n), aA(n)]) }

                    function uA(e, t) { const n = e.getValue(); return Wv(Rv([n.attributes.length ? Jv : "", Uv(Jv, e.map(t, "attributes")), n.modifiers.length ? Jv : "", Uv(Jv, e.map(t, "modifiers")), n.comments.length ? Jv : "", Uv(Jv, e.map(t, "comments"))])) }

                    function iA(e, t, n) { return Rv(e.map(((e, r) => 0 === r ? Rv([zv, n(e, t, n)]) : n(e, t, n)), "children")) }

                    function aA(e) { return nA(e) ? $v(Rv([zv, "/>"]), Rv([" />", zv])) : $v(Rv([zv, ">"]), ">") }

                    function sA(e) {
                        const t = !1 === e.escaped ? "{{{" : "{{",
                            n = e.strip && e.strip.open ? "~" : "";
                        return Rv([t, n])
                    }

                    function cA(e) {
                        const t = !1 === e.escaped ? "}}}" : "}}",
                            n = e.strip && e.strip.close ? "~" : "";
                        return Rv([n, t])
                    }

                    function lA(e) {
                        const t = sA(e),
                            n = e.openStrip.open ? "~" : "";
                        return Rv([t, n, "#"])
                    }

                    function pA(e) {
                        const t = cA(e),
                            n = e.openStrip.close ? "~" : "";
                        return Rv([n, t])
                    }

                    function dA(e) {
                        const t = sA(e),
                            n = e.closeStrip.open ? "~" : "";
                        return Rv([t, n, "/"])
                    }

                    function fA(e) {
                        const t = cA(e),
                            n = e.closeStrip.close ? "~" : "";
                        return Rv([n, t])
                    }

                    function hA(e) {
                        const t = sA(e),
                            n = e.inverseStrip.open ? "~" : "";
                        return Rv([t, n])
                    }

                    function mA(e) {
                        const t = cA(e),
                            n = e.inverseStrip.close ? "~" : "";
                        return Rv([n, t])
                    }

                    function gA(e, t) { const n = e.getValue(); return qv(Rv([lA(n), TA(e, t), NA(n.program), zv, pA(n)])) }

                    function DA(e) { return Rv([Vv, hA(e), "else", mA(e)]) }

                    function yA(e, t) { const n = e.getParentNode(1); return Rv([hA(n), "else ", TA(e, t), mA(n)]) }

                    function EA(e, t) { const n = e.getValue(); return Rv([CA(n) ? zv : Vv, dA(n), e.call(t, "path"), fA(n)]) }

                    function CA(e) { return Zv(e, ["BlockStatement"]) && e.program.body.every((e => rA(e))) }

                    function bA(e) { return Zv(e, ["BlockStatement"]) && e.inverse }

                    function vA(e, t) { if (CA(e.getValue())) return ""; const n = e.call(t, "program"); return Wv(Rv([Vv, n])) }

                    function AA(e, t) {
                        const n = e.getValue(),
                            r = e.call(t, "inverse"),
                            o = Rv([Vv, r]);
                        return function(e) { return bA(e) && 1 === e.inverse.body.length && Zv(e.inverse.body[0], ["BlockStatement"]) && "if" === e.inverse.body[0].path.parts[0] }(n) ? o : bA(n) ? Rv([DA(n), Wv(o)]) : ""
                    }

                    function FA(e) { return (e = "string" == typeof e ? e : "").split("\n").length - 1 }

                    function xA(e = 0, t = 0) { return new Array(Math.min(e, t)).fill(Vv) }

                    function SA(e, t) {
                        const n = { quote: '"', regex: /"/g },
                            r = { quote: "'", regex: /'/g },
                            o = t.singleQuote ? r : n,
                            u = o === r ? n : r;
                        let i = !1;
                        (e.includes(o.quote) || e.includes(u.quote)) && (i = (e.match(o.regex) || []).length > (e.match(u.regex) || []).length);
                        const a = i ? u : o,
                            s = e.replace(a.regex, "\\".concat(a.quote));
                        return Rv([a.quote, s, a.quote])
                    }

                    function wA(e, t) {
                        const n = BA(e, t),
                            r = kA(e, t);
                        return r ? Wv(Rv([n, Jv, qv(r)])) : n
                    }

                    function TA(e, t) {
                        const n = BA(e, t),
                            r = kA(e, t);
                        return r ? Wv(qv(Rv([n, Jv, r]))) : n
                    }

                    function BA(e, t) { return e.call(t, "path") }

                    function kA(e, t) {
                        const n = e.getValue(),
                            r = [];
                        if (n.params.length) {
                            const n = e.map(t, "params");
                            r.push(...n)
                        }
                        if (n.hash && n.hash.pairs.length > 0) {
                            const n = e.call(t, "hash");
                            r.push(n)
                        }
                        return r.length ? Uv(Jv, r) : ""
                    }

                    function NA(e) { return e && e.blockParams.length ? Rv([" as |", e.blockParams.join(" "), "|"]) : "" }
                    var PA = {
                            print: function(e, t, n) {
                                const r = e.getValue();
                                if (!r) return "";
                                if (Kv(e)) return t.originalText.slice(Hv(r), Gv(r));
                                switch (r.type) {
                                    case "Block":
                                    case "Program":
                                    case "Template":
                                        return qv(Rv(e.map(n, "body")));
                                    case "ElementNode":
                                        { const o = Qv(e, ["ElementNode"]) ? Vv : ""; if (nA(r)) return Rv([qv(oA(e, n)), o]); const u = r.children.every((e => rA(e))); return Rv([qv(oA(e, n)), qv(Rv([u ? "" : Wv(iA(e, t, n)), r.children.length ? Vv : "", Rv(["</", r.tag, ">"])])), o]) }
                                    case "BlockStatement":
                                        {
                                            const t = e.getParentNode(1),
                                                o = t && t.inverse && 1 === t.inverse.body.length && t.inverse.body[0] === r && "if" === t.inverse.body[0].path.parts[0];
                                            return Rv(o ? [yA(e, n), vA(e, n), AA(e, n)] : [gA(e, n), qv(Rv([vA(e, n), AA(e, n), EA(e, n)]))])
                                        }
                                    case "ElementModifierStatement":
                                        return qv(Rv(["{{", TA(e, n), zv, "}}"]));
                                    case "MustacheStatement":
                                        {
                                            const t = eA(e, ["AttrNode", "ConcatStatement"]),
                                                o = eA(e, ["ElementNode"]) && 0 === r.hash.pairs.length && function(e) { return 0 === e.params.length }(r),
                                                u = t || o;
                                            return qv(Rv([sA(r), u ? Wv(zv) : "", TA(e, n), zv, cA(r)]))
                                        }
                                    case "SubExpression":
                                        return qv(Rv(["(", wA(e, n), zv, ")"]));
                                    case "AttrNode":
                                        {
                                            const o = "TextNode" === r.value.type;
                                            if (o && "" === r.value.chars && Hv(r.value) === Gv(r.value)) return Rv([r.name]);
                                            const u = e.call(n, "value"),
                                                i = o ? SA(u.parts.join(), t) : u;
                                            return Rv([r.name, "=", i])
                                        }
                                    case "ConcatStatement":
                                        { const r = t.singleQuote ? "'" : '"'; return Rv([r, ...e.map((e => n(e)), "parts"), r]) }
                                    case "Hash":
                                        return Rv([Uv(Jv, e.map(n, "pairs"))]);
                                    case "HashPair":
                                        return Rv([r.key, "=", e.call(n, "value")]);
                                    case "TextNode":
                                        {
                                            const t = 2,
                                                n = !Yv(e),
                                                o = !Xv(e),
                                                u = !/\S/.test(r.chars),
                                                i = FA(r.chars);
                                            let a = function(e) { return FA(((e = "string" == typeof e ? e : "").match(/^([^\S\n\r]*[\n\r])+/g) || [])[0] || "") }(r.chars),
                                                s = function(e) { return FA(((e = "string" == typeof e ? e : "").match(/([\n\r][^\S\n\r]*)+$/g) || [])[0] || "") }(r.chars);
                                            if ((n || o) && u && eA(e, ["Block", "ElementNode", "Template"])) return "";
                                            if (u && i ? (a = Math.min(i, t), s = 0) : (Qv(e, ["BlockStatement", "ElementNode"]) && (s = Math.max(s, 1)), tA(e, ["BlockStatement", "ElementNode"]) && (a = Math.max(a, 1))), e.stack.includes("attributes")) {
                                                if (! function(e, t) { return eA(e, ["AttrNode"]) && e.getParentNode().name.toLowerCase() === t || eA(e, ["ConcatStatement"]) && e.getParentNode(1).name.toLowerCase() === t }(e, "class")) return Rv([r.chars]);
                                                let n = "",
                                                    o = "";
                                                return eA(e, ["ConcatStatement"]) && (tA(e, ["MustacheStatement"]) && (n = " "), Qv(e, ["MustacheStatement"]) && (o = " ")), Rv([...xA(a, t), r.chars.replace(/^\s+/g, n).replace(/\s+$/, o), ...xA(s, t)])
                                            }
                                            let c = "",
                                                l = "";0 === s && Qv(e, ["MustacheStatement"]) && (l = " "),
                                            0 === a && tA(e, ["MustacheStatement"]) && (c = " "),
                                            n && (a = 0, c = ""),
                                            o && (s = 0, l = "");
                                            let p = r.chars;
                                            return p.startsWith("{{") && p.includes("}}") && (p = "\\" + p),
                                            Rv([...xA(a, t), p.replace(/^\s+/g, c).replace(/\s+$/, l), ...xA(s, t)])
                                        }
                                    case "MustacheCommentStatement":
                                        { const e = r.value.includes("}}") ? "--" : ""; return Rv(["{{!", e, r.value, e, "}}"]) }
                                    case "PathExpression":
                                        return r.original;
                                    case "BooleanLiteral":
                                        return String(r.value);
                                    case "CommentStatement":
                                        return Rv(["\x3c!--", r.value, "--\x3e"]);
                                    case "StringLiteral":
                                        return SA(r.value, t);
                                    case "NumberLiteral":
                                        return String(r.value);
                                    case "UndefinedLiteral":
                                        return "undefined";
                                    case "NullLiteral":
                                        return "null";
                                    default:
                                        throw new Error("unknown glimmer type: " + JSON.stringify(r.type))
                                }
                            },
                            massageAstNode: kv
                        },
                        OA = { languages: [vs({ name: "Handlebars", type: "markup", color: "#f7931e", aliases: ["hbs", "htmlbars"], extensions: [".handlebars", ".hbs"], tmScope: "text.html.handlebars", aceMode: "handlebars", languageId: 155 }, (() => ({ since: null, parsers: ["glimmer"], vscodeLanguageIds: ["handlebars"] })))], printers: { glimmer: PA }, parsers: {get glimmer() { return {}.parsers.glimmer } } };
                    const { builders: { concat: _A, join: LA, hardline: IA, line: MA, softline: jA, group: RA, indent: qA, ifBreak: VA } } = cn, { isNextLineEmpty: $A } = Lt, { insertPragma: WA } = { hasPragma: function(e) { return /^\s*#[^\S\n]*@(format|prettier)\s*(\n|$)/.test(e) }, insertPragma: function(e) { return "# @format\n\n" + e } }, { locStart: UA, locEnd: JA } = { locStart: function(e) { return "number" == typeof e.start ? e.start : e.loc && e.loc.start }, locEnd: function(e) { return "number" == typeof e.end ? e.end : e.loc && e.loc.end } };

                    function zA(e, t, n) { if (0 === n.directives.length) return ""; const r = LA(MA, e.map(t, "directives")); return "FragmentDefinition" === n.kind || "OperationDefinition" === n.kind ? RA(_A([MA, r])) : _A([" ", RA(qA(_A([jA, r])))]) }

                    function HA(e, t, n) { const r = e.getValue().length; return e.map(((e, o) => { const u = n(e); return $A(t.originalText, e.getValue(), JA) && o < r - 1 ? _A([u, IA]) : u })) }

                    function GA(e, t, n) {
                        const r = e.getNode(),
                            o = [],
                            { interfaces: u } = r,
                            i = e.map((e => n(e)), "interfaces");
                        for (let e = 0; e < u.length; e++) {
                            const n = u[e];
                            o.push(i[e]);
                            const r = u[e + 1];
                            if (r) {
                                const e = t.originalText.slice(n.loc.end, r.loc.start),
                                    u = e.includes("#"),
                                    i = e.replace(/#.*/g, "").trim();
                                o.push("," === i ? "," : " &"), o.push(u ? MA : " ")
                            }
                        }
                        return o
                    }

                    function XA() {}
                    XA.ignoredProperties = new Set(["loc", "comments"]);
                    var YA = {
                            print: function(e, t, n) {
                                const r = e.getValue();
                                if (!r) return "";
                                if ("string" == typeof r) return r;
                                switch (r.kind) {
                                    case "Document":
                                        { const o = []; return e.each(((e, u) => { o.push(_A([e.call(n)])), u !== r.definitions.length - 1 && (o.push(IA), $A(t.originalText, e.getValue(), JA) && o.push(IA)) }), "definitions"), _A([_A(o), IA]) }
                                    case "OperationDefinition":
                                        {
                                            const o = "{" !== t.originalText[UA(r)],
                                                u = !!r.name;
                                            return _A([o ? r.operation : "", o && u ? _A([" ", e.call(n, "name")]) : "", r.variableDefinitions && r.variableDefinitions.length ? RA(_A(["(", qA(_A([jA, LA(_A([VA("", ", "), jA]), e.map(n, "variableDefinitions"))])), jA, ")"])) : "", zA(e, n, r), r.selectionSet && (o || u) ? " " : "", e.call(n, "selectionSet")])
                                        }
                                    case "FragmentDefinition":
                                        return _A(["fragment ", e.call(n, "name"), r.variableDefinitions && r.variableDefinitions.length ? RA(_A(["(", qA(_A([jA, LA(_A([VA("", ", "), jA]), e.map(n, "variableDefinitions"))])), jA, ")"])) : "", " on ", e.call(n, "typeCondition"), zA(e, n, r), " ", e.call(n, "selectionSet")]);
                                    case "SelectionSet":
                                        return _A(["{", qA(_A([IA, LA(IA, e.call((e => HA(e, t, n)), "selections"))])), IA, "}"]);
                                    case "Field":
                                        return RA(_A([r.alias ? _A([e.call(n, "alias"), ": "]) : "", e.call(n, "name"), r.arguments.length > 0 ? RA(_A(["(", qA(_A([jA, LA(_A([VA("", ", "), jA]), e.call((e => HA(e, t, n)), "arguments"))])), jA, ")"])) : "", zA(e, n, r), r.selectionSet ? " " : "", e.call(n, "selectionSet")]));
                                    case "Name":
                                        return r.value;
                                    case "StringValue":
                                        return r.block ? _A(['"""', IA, LA(IA, r.value.replace(/"""/g, "\\$&").split("\n")), IA, '"""']) : _A(['"', r.value.replace(/["\\]/g, "\\$&").replace(/\n/g, "\\n"), '"']);
                                    case "IntValue":
                                    case "FloatValue":
                                    case "EnumValue":
                                        return r.value;
                                    case "BooleanValue":
                                        return r.value ? "true" : "false";
                                    case "NullValue":
                                        return "null";
                                    case "Variable":
                                        return _A(["$", e.call(n, "name")]);
                                    case "ListValue":
                                        return RA(_A(["[", qA(_A([jA, LA(_A([VA("", ", "), jA]), e.map(n, "values"))])), jA, "]"]));
                                    case "ObjectValue":
                                        return RA(_A(["{", t.bracketSpacing && r.fields.length > 0 ? " " : "", qA(_A([jA, LA(_A([VA("", ", "), jA]), e.map(n, "fields"))])), jA, VA("", t.bracketSpacing && r.fields.length > 0 ? " " : ""), "}"]));
                                    case "ObjectField":
                                    case "Argument":
                                        return _A([e.call(n, "name"), ": ", e.call(n, "value")]);
                                    case "Directive":
                                        return _A(["@", e.call(n, "name"), r.arguments.length > 0 ? RA(_A(["(", qA(_A([jA, LA(_A([VA("", ", "), jA]), e.call((e => HA(e, t, n)), "arguments"))])), jA, ")"])) : ""]);
                                    case "NamedType":
                                        return e.call(n, "name");
                                    case "VariableDefinition":
                                        return _A([e.call(n, "variable"), ": ", e.call(n, "type"), r.defaultValue ? _A([" = ", e.call(n, "defaultValue")]) : "", zA(e, n, r)]);
                                    case "ObjectTypeExtension":
                                    case "ObjectTypeDefinition":
                                        return _A([e.call(n, "description"), r.description ? IA : "", "ObjectTypeExtension" === r.kind ? "extend " : "", "type ", e.call(n, "name"), r.interfaces.length > 0 ? _A([" implements ", _A(GA(e, t, n))]) : "", zA(e, n, r), r.fields.length > 0 ? _A([" {", qA(_A([IA, LA(IA, e.call((e => HA(e, t, n)), "fields"))])), IA, "}"]) : ""]);
                                    case "FieldDefinition":
                                        return _A([e.call(n, "description"), r.description ? IA : "", e.call(n, "name"), r.arguments.length > 0 ? RA(_A(["(", qA(_A([jA, LA(_A([VA("", ", "), jA]), e.call((e => HA(e, t, n)), "arguments"))])), jA, ")"])) : "", ": ", e.call(n, "type"), zA(e, n, r)]);
                                    case "DirectiveDefinition":
                                        return _A([e.call(n, "description"), r.description ? IA : "", "directive ", "@", e.call(n, "name"), r.arguments.length > 0 ? RA(_A(["(", qA(_A([jA, LA(_A([VA("", ", "), jA]), e.call((e => HA(e, t, n)), "arguments"))])), jA, ")"])) : "", r.repeatable ? " repeatable" : "", _A([" on ", LA(" | ", e.map(n, "locations"))])]);
                                    case "EnumTypeExtension":
                                    case "EnumTypeDefinition":
                                        return _A([e.call(n, "description"), r.description ? IA : "", "EnumTypeExtension" === r.kind ? "extend " : "", "enum ", e.call(n, "name"), zA(e, n, r), r.values.length > 0 ? _A([" {", qA(_A([IA, LA(IA, e.call((e => HA(e, t, n)), "values"))])), IA, "}"]) : ""]);
                                    case "EnumValueDefinition":
                                        return _A([e.call(n, "description"), r.description ? IA : "", e.call(n, "name"), zA(e, n, r)]);
                                    case "InputValueDefinition":
                                        return _A([e.call(n, "description"), r.description ? r.description.block ? IA : MA : "", e.call(n, "name"), ": ", e.call(n, "type"), r.defaultValue ? _A([" = ", e.call(n, "defaultValue")]) : "", zA(e, n, r)]);
                                    case "InputObjectTypeExtension":
                                    case "InputObjectTypeDefinition":
                                        return _A([e.call(n, "description"), r.description ? IA : "", "InputObjectTypeExtension" === r.kind ? "extend " : "", "input ", e.call(n, "name"), zA(e, n, r), r.fields.length > 0 ? _A([" {", qA(_A([IA, LA(IA, e.call((e => HA(e, t, n)), "fields"))])), IA, "}"]) : ""]);
                                    case "SchemaDefinition":
                                        return _A(["schema", zA(e, n, r), " {", r.operationTypes.length > 0 ? qA(_A([IA, LA(IA, e.call((e => HA(e, t, n)), "operationTypes"))])) : "", IA, "}"]);
                                    case "OperationTypeDefinition":
                                        return _A([e.call(n, "operation"), ": ", e.call(n, "type")]);
                                    case "InterfaceTypeExtension":
                                    case "InterfaceTypeDefinition":
                                        return _A([e.call(n, "description"), r.description ? IA : "", "InterfaceTypeExtension" === r.kind ? "extend " : "", "interface ", e.call(n, "name"), r.interfaces.length > 0 ? _A([" implements ", _A(GA(e, t, n))]) : "", zA(e, n, r), r.fields.length > 0 ? _A([" {", qA(_A([IA, LA(IA, e.call((e => HA(e, t, n)), "fields"))])), IA, "}"]) : ""]);
                                    case "FragmentSpread":
                                        return _A(["...", e.call(n, "name"), zA(e, n, r)]);
                                    case "InlineFragment":
                                        return _A(["...", r.typeCondition ? _A([" on ", e.call(n, "typeCondition")]) : "", zA(e, n, r), " ", e.call(n, "selectionSet")]);
                                    case "UnionTypeExtension":
                                    case "UnionTypeDefinition":
                                        return RA(_A([e.call(n, "description"), r.description ? IA : "", RA(_A(["UnionTypeExtension" === r.kind ? "extend " : "", "union ", e.call(n, "name"), zA(e, n, r), r.types.length > 0 ? _A([" =", VA("", " "), qA(_A([VA(_A([MA, "  "])), LA(_A([MA, "| "]), e.map(n, "types"))]))]) : ""]))]));
                                    case "ScalarTypeExtension":
                                    case "ScalarTypeDefinition":
                                        return _A([e.call(n, "description"), r.description ? IA : "", "ScalarTypeExtension" === r.kind ? "extend " : "", "scalar ", e.call(n, "name"), zA(e, n, r)]);
                                    case "NonNullType":
                                        return _A([e.call(n, "type"), "!"]);
                                    case "ListType":
                                        return _A(["[", e.call(n, "type"), "]"]);
                                    default:
                                        throw new Error("unknown graphql type: " + JSON.stringify(r.kind))
                                }
                            },
                            massageAstNode: XA,
                            hasPrettierIgnore: function(e) { const t = e.getValue(); return t && Array.isArray(t.comments) && t.comments.some((e => "prettier-ignore" === e.value.trim())) },
                            insertPragma: WA,
                            printComment: function(e) { const t = e.getValue(); if ("Comment" === t.kind) return "#" + t.value.trimEnd(); throw new Error("Not a comment: " + JSON.stringify(t)) },
                            canAttachComment: function(e) { return e.kind && "Comment" !== e.kind }
                        },
                        KA = { bracketSpacing: AC.bracketSpacing },
                        QA = { languages: [vs({ name: "GraphQL", type: "data", color: "#e10098", extensions: [".graphql", ".gql", ".graphqls"], tmScope: "source.graphql", aceMode: "text", languageId: 139 }, (() => ({ since: "1.5.0", parsers: ["graphql"], vscodeLanguageIds: ["graphql"] })))], options: KA, printers: { graphql: YA }, parsers: {get graphql() { return {}.parsers.graphql } } },
                        ZA = { locStart: function(e) { return e.position.start.offset }, locEnd: function(e) { return e.position.end.offset } };
                    const { getLast: eF } = Lt, { locStart: tF, locEnd: nF } = ZA, { cjkPattern: rF, kPattern: oF, punctuationPattern: uF } = { cjkPattern: "(?:[\\u02ea-\\u02eb\\u1100-\\u11ff\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u3000-\\u303f\\u3041-\\u3096\\u3099-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312f\\u3131-\\u318e\\u3190-\\u3191\\u3196-\\u31ba\\u31c0-\\u31e3\\u31f0-\\u321e\\u322a-\\u3247\\u3260-\\u327e\\u328a-\\u32b0\\u32c0-\\u32cb\\u32d0-\\u3370\\u337b-\\u337f\\u33e0-\\u33fe\\u3400-\\u4db5\\u4e00-\\u9fef\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufe10-\\ufe1f\\ufe30-\\ufe6f\\uff00-\\uffef]|[\\ud840-\\ud868\\ud86a-\\ud86c\\ud86f-\\ud872\\ud874-\\ud879][\\udc00-\\udfff]|\\ud82c[\\udc00-\\udd1e\\udd50-\\udd52\\udd64-\\udd67]|\\ud83c[\\ude00\\ude50-\\ude51]|\\ud869[\\udc00-\\uded6\\udf00-\\udfff]|\\ud86d[\\udc00-\\udf34\\udf40-\\udfff]|\\ud86e[\\udc00-\\udc1d\\udc20-\\udfff]|\\ud873[\\udc00-\\udea1\\udeb0-\\udfff]|\\ud87a[\\udc00-\\udfe0]|\\ud87e[\\udc00-\\ude1d])(?:[\\ufe00-\\ufe0f]|\\udb40[\\udd00-\\uddef])?", kPattern: "[\\u1100-\\u11ff\\u3001-\\u3003\\u3008-\\u3011\\u3013-\\u301f\\u302e-\\u3030\\u3037\\u30fb\\u3131-\\u318e\\u3200-\\u321e\\u3260-\\u327e\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\ufe45-\\ufe46\\uff61-\\uff65\\uffa0-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]", punctuationPattern: "[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e\\u00a1\\u00a7\\u00ab\\u00b6-\\u00b7\\u00bb\\u00bf\\u037e\\u0387\\u055a-\\u055f\\u0589-\\u058a\\u05be\\u05c0\\u05c3\\u05c6\\u05f3-\\u05f4\\u0609-\\u060a\\u060c-\\u060d\\u061b\\u061e-\\u061f\\u066a-\\u066d\\u06d4\\u0700-\\u070d\\u07f7-\\u07f9\\u0830-\\u083e\\u085e\\u0964-\\u0965\\u0970\\u09fd\\u0a76\\u0af0\\u0c77\\u0c84\\u0df4\\u0e4f\\u0e5a-\\u0e5b\\u0f04-\\u0f12\\u0f14\\u0f3a-\\u0f3d\\u0f85\\u0fd0-\\u0fd4\\u0fd9-\\u0fda\\u104a-\\u104f\\u10fb\\u1360-\\u1368\\u1400\\u166e\\u169b-\\u169c\\u16eb-\\u16ed\\u1735-\\u1736\\u17d4-\\u17d6\\u17d8-\\u17da\\u1800-\\u180a\\u1944-\\u1945\\u1a1e-\\u1a1f\\u1aa0-\\u1aa6\\u1aa8-\\u1aad\\u1b5a-\\u1b60\\u1bfc-\\u1bff\\u1c3b-\\u1c3f\\u1c7e-\\u1c7f\\u1cc0-\\u1cc7\\u1cd3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205e\\u207d-\\u207e\\u208d-\\u208e\\u2308-\\u230b\\u2329-\\u232a\\u2768-\\u2775\\u27c5-\\u27c6\\u27e6-\\u27ef\\u2983-\\u2998\\u29d8-\\u29db\\u29fc-\\u29fd\\u2cf9-\\u2cfc\\u2cfe-\\u2cff\\u2d70\\u2e00-\\u2e2e\\u2e30-\\u2e4f\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301f\\u3030\\u303d\\u30a0\\u30fb\\ua4fe-\\ua4ff\\ua60d-\\ua60f\\ua673\\ua67e\\ua6f2-\\ua6f7\\ua874-\\ua877\\ua8ce-\\ua8cf\\ua8f8-\\ua8fa\\ua8fc\\ua92e-\\ua92f\\ua95f\\ua9c1-\\ua9cd\\ua9de-\\ua9df\\uaa5c-\\uaa5f\\uaade-\\uaadf\\uaaf0-\\uaaf1\\uabeb\\ufd3e-\\ufd3f\\ufe10-\\ufe19\\ufe30-\\ufe52\\ufe54-\\ufe61\\ufe63\\ufe68\\ufe6a-\\ufe6b\\uff01-\\uff03\\uff05-\\uff0a\\uff0c-\\uff0f\\uff1a-\\uff1b\\uff1f-\\uff20\\uff3b-\\uff3d\\uff3f\\uff5b\\uff5d\\uff5f-\\uff65]|\\ud800[\\udd00-\\udd02\\udf9f\\udfd0]|\\ud801[\\udd6f]|\\ud802[\\udc57\\udd1f\\udd3f\\ude50-\\ude58\\ude7f\\udef0-\\udef6\\udf39-\\udf3f\\udf99-\\udf9c]|\\ud803[\\udf55-\\udf59]|\\ud804[\\udc47-\\udc4d\\udcbb-\\udcbc\\udcbe-\\udcc1\\udd40-\\udd43\\udd74-\\udd75\\uddc5-\\uddc8\\uddcd\\udddb\\udddd-\\udddf\\ude38-\\ude3d\\udea9]|\\ud805[\\udc4b-\\udc4f\\udc5b\\udc5d\\udcc6\\uddc1-\\uddd7\\ude41-\\ude43\\ude60-\\ude6c\\udf3c-\\udf3e]|\\ud806[\\udc3b\\udde2\\ude3f-\\ude46\\ude9a-\\ude9c\\ude9e-\\udea2]|\\ud807[\\udc41-\\udc45\\udc70-\\udc71\\udef7-\\udef8\\udfff]|\\ud809[\\udc70-\\udc74]|\\ud81a[\\ude6e-\\ude6f\\udef5\\udf37-\\udf3b\\udf44]|\\ud81b[\\ude97-\\ude9a\\udfe2]|\\ud82f[\\udc9f]|\\ud836[\\ude87-\\ude8b]|\\ud83a[\\udd5e-\\udd5f]" }, iF = ["liquidNode", "inlineCode", "emphasis", "strong", "delete", "wikiLink", "link", "linkReference", "image", "imageReference", "footnote", "footnoteReference", "sentence", "whitespace", "word", "break", "inlineMath"], aF = iF.concat(["tableCell", "paragraph", "heading"]), sF = new RegExp(oF), cF = new RegExp(uF);

                    function lF(e, t) { const [, n, r, o] = t.slice(e.position.start.offset, e.position.end.offset).match(/^\s*(\d+)(\.|\))(\s*)/); return { numberText: n, marker: r, leadingSpaces: o } }
                    var pF = {
                        mapAst: function(e, t) { return function e(n, r, o) { o = o || []; const u = Object.assign({}, t(n, r, o)); return u.children && (u.children = u.children.map(((t, n) => e(t, n, [u].concat(o))))), u }(e, null, null) },
                        splitText: function(e, t) {
                            const n = "non-cjk",
                                r = "cj-letter",
                                o = "cjk-punctuation",
                                u = [];
                            return ("preserve" === t.proseWrap ? e : e.replace(new RegExp("(".concat(rF, ")\n(").concat(rF, ")"), "g"), "$1$2")).split(/([\t\n ]+)/).forEach(((e, t, a) => {
                                t % 2 != 1 ? (0 !== t && t !== a.length - 1 || "" !== e) && e.split(new RegExp("(".concat(rF, ")"))).forEach(((e, t, u) => {
                                    (0 !== t && t !== u.length - 1 || "" !== e) && (t % 2 != 0 ? i(cF.test(e) ? { type: "word", value: e, kind: o, hasLeadingPunctuation: !0, hasTrailingPunctuation: !0 } : { type: "word", value: e, kind: sF.test(e) ? "k-letter" : r, hasLeadingPunctuation: !1, hasTrailingPunctuation: !1 }) : "" !== e && i({ type: "word", value: e, kind: n, hasLeadingPunctuation: cF.test(e[0]), hasTrailingPunctuation: cF.test(eF(e)) }))
                                })) : u.push({ type: "whitespace", value: /\n/.test(e) ? "\n" : " " })
                            })), u;

                            function i(e) {
                                const t = eF(u);
                                var i, a;
                                t && "word" === t.type && (t.kind === n && e.kind === r && !t.hasTrailingPunctuation || t.kind === r && e.kind === n && !e.hasLeadingPunctuation ? u.push({ type: "whitespace", value: " " }) : (i = n, a = o, t.kind === i && e.kind === a || t.kind === a && e.kind === i || [t.value, e.value].some((e => /\u3000/.test(e))) || u.push({ type: "whitespace", value: "" }))), u.push(e)
                            }
                        },
                        punctuationPattern: uF,
                        getFencedCodeBlockValue: function(e, t) { const { value: n } = e; return e.position.end.offset === t.length && n.endsWith("\n") && t.endsWith("\n") ? n.slice(0, -1) : n },
                        getOrderedListItemInfo: lF,
                        hasGitDiffFriendlyOrderedList: function(e, t) {
                            if (!e.ordered) return !1;
                            if (e.children.length < 2) return !1;
                            const n = Number(lF(e.children[0], t.originalText).numberText),
                                r = Number(lF(e.children[1], t.originalText).numberText);
                            if (0 === n && e.children.length > 2) { const n = Number(lF(e.children[2], t.originalText).numberText); return 1 === r && 1 === n }
                            return 1 === r
                        },
                        INLINE_NODE_TYPES: iF,
                        INLINE_NODE_WRAPPER_TYPES: aF,
                        isAutolink: function(e) { if (!e || "link" !== e.type || 1 !== e.children.length) return !1; const t = e.children[0]; return t && tF(e) === tF(t) && nF(e) === nF(t) }
                    };
                    const { inferParserByLanguage: dF, getMaxContinuousCount: fF } = Lt, { builders: { hardline: hF, concat: mF, markAsRoot: gF }, utils: { replaceNewlinesWithLiterallines: DF } } = cn, { print: yF } = MC, { getFencedCodeBlockValue: EF } = pF;
                    const { parse: CF } = MC, bF = ["format", "prettier"];

                    function vF(e) {
                        const t = "@(".concat(bF.join("|"), ")"),
                            n = new RegExp(["\x3c!--\\s*".concat(t, "\\s*--\x3e"), "\x3c!--.*\r?\n[\\s\\S]*(^|\n)[^\\S\n]*".concat(t, "[^\\S\n]*($|\n)[\\s\\S]*\n.*--\x3e")].join("|"), "m"),
                            r = e.match(n);
                        return r && 0 === r.index
                    }
                    var AF = {
                        startWithPragma: vF,
                        hasPragma: e => vF(CF(e).content.trimStart()),
                        insertPragma: e => {
                            const t = CF(e),
                                n = "\x3c!-- @".concat(bF[0], " --\x3e");
                            return t.frontMatter ? "".concat(t.frontMatter.raw, "\n\n").concat(n, "\n\n").concat(t.content) : "".concat(n, "\n\n").concat(t.content)
                        }
                    };
                    const { getOrderedListItemInfo: FF, mapAst: xF, splitText: SF } = pF, wF = /^([\u0000-\uffff]|[\ud800-\udbff][\udc00-\udfff])$/;

                    function TF(e, t, n) { return xF(e, (e => { if (!e.children) return e; const r = e.children.reduce(((e, r) => { const o = e[e.length - 1]; return o && t(o, r) ? e.splice(-1, 1, n(o, r)) : e.push(r), e }), []); return Object.assign({}, e, { children: r }) })) }
                    const { isFrontMatterNode: BF } = Lt, { startWithPragma: kF } = AF, NF = new Set(["position", "raw"]);

                    function PF(e, t, n) { return "front-matter" !== e.type && "code" !== e.type && "yaml" !== e.type && "import" !== e.type && "export" !== e.type && "jsx" !== e.type || delete t.value, "list" === e.type && delete t.isAligned, "list" !== e.type && "listItem" !== e.type || (delete t.spread, delete t.loose), "text" === e.type ? null : ("inlineCode" === e.type && (t.value = e.value.replace(/[\t\n ]+/g, " ")), "wikiLink" === e.type && (t.value = e.value.trim().replace(/[\t\n]+/g, " ")), "definition" !== e.type && "linkReference" !== e.type || (t.label = e.label.trim().replace(/[\t\n ]+/g, " ").toLowerCase()), "definition" !== e.type && "link" !== e.type && "image" !== e.type || !e.title || (t.title = e.title.replace(/\\(["')])/g, "$1")), n && "root" === n.type && n.children.length > 0 && (n.children[0] === e || BF(n.children[0]) && n.children[1] === e) && "html" === e.type && kF(e.value) ? null : void 0) }
                    PF.ignoredProperties = NF;
                    var OF = PF;
                    const { getLast: _F, getMinNotPresentContinuousCount: LF, getMaxContinuousCount: IF, getStringWidth: MF } = Lt, { builders: { breakParent: jF, concat: RF, join: qF, line: VF, literalline: $F, markAsRoot: WF, hardline: UF, softline: JF, ifBreak: zF, fill: HF, align: GF, indent: XF, group: YF }, utils: { normalizeDoc: KF }, printer: { printDocToString: QF } } = cn, { replaceEndOfLineWith: ZF } = Lt, { insertPragma: ex } = AF, { locStart: tx, locEnd: nx } = ZA, { getFencedCodeBlockValue: rx, hasGitDiffFriendlyOrderedList: ox, splitText: ux, punctuationPattern: ix, INLINE_NODE_TYPES: ax, INLINE_NODE_WRAPPER_TYPES: sx, isAutolink: cx } = pF, lx = new Set(["importExport"]), px = ["heading", "tableCell", "link", "wikiLink"], dx = new Set(["listItem", "definition", "footnoteDefinition"]);

                    function fx(e, t, n, r) {
                        const o = e.getValue(),
                            u = null === o.checked ? "" : o.checked ? "[x] " : "[ ] ";
                        return RF([u, Ex(e, t, n, { processor: (e, o) => { if (0 === o && "list" !== e.getValue().type) return GF(" ".repeat(u.length), e.call(n)); const i = " ".repeat((3, (a = t.tabWidth - r.length) < 0 ? 0 : a > 3 ? 3 : a)); var a; return RF([i, GF(i, e.call(n))]) } })])
                    }

                    function hx(e, t) {
                        return function(e, t, n) {
                            n = n || (() => !0);
                            let r = -1;
                            for (const o of t.children)
                                if (o.type === e.type && n(o) ? r++ : r = -1, o === e) return r
                        }(e, t, (t => t.ordered === e.ordered))
                    }

                    function mx(e, t) {
                        const n = [].concat(t);
                        let r, o = -1;
                        for (; r = e.getParentNode(++o);)
                            if (n.includes(r.type)) return o;
                        return -1
                    }

                    function gx(e, t) { const n = mx(e, t); return -1 === n ? null : e.getParentNode(n) }

                    function Dx(e, t, n) { if ("preserve" === n.proseWrap && "\n" === t) return UF; const r = "always" === n.proseWrap && !gx(e, px); return "" !== t ? r ? VF : " " : r ? JF : "" }

                    function yx(e, t, n) {
                        const r = [];
                        let o = null;
                        const { children: u } = e.getValue();
                        return u.forEach(((e, t) => {
                            switch (bx(e)) {
                                case "start":
                                    null === o && (o = { index: t, offset: e.position.end.offset });
                                    break;
                                case "end":
                                    null !== o && (r.push({ start: o, end: { index: t, offset: e.position.start.offset } }), o = null)
                            }
                        })), Ex(e, t, n, { processor: (e, o) => { if (0 !== r.length) { const e = r[0]; if (o === e.start.index) return RF([u[e.start.index].value, t.originalText.slice(e.start.offset, e.end.offset), u[e.end.index].value]); if (e.start.index < o && o < e.end.index) return !1; if (o === e.end.index) return r.shift(), !1 } return e.call(n) } })
                    }

                    function Ex(e, t, n, r) {
                        const o = (r = r || {}).postprocessor || RF,
                            u = r.processor || (e => e.call(n)),
                            i = e.getValue(),
                            a = [];
                        let s;
                        return e.each(((e, n) => {
                            const r = e.getValue(),
                                o = u(e, n);
                            if (!1 !== o) {
                                const e = { parts: a, prevNode: s, parentNode: i, options: t };
                                (function(e, t) {
                                    const n = 0 === t.parts.length,
                                        r = ax.includes(e.type),
                                        o = "html" === e.type && sx.includes(t.parentNode.type);
                                    return n || r || o
                                })(r, e) || (a.push(UF), s && lx.has(s.type) || (function(e, t) {
                                    const n = (t.prevNode && t.prevNode.type) === e.type && dx.has(e.type),
                                        r = "listItem" === t.parentNode.type && !t.parentNode.loose,
                                        o = t.prevNode && "listItem" === t.prevNode.type && t.prevNode.loose,
                                        u = "next" === bx(t.prevNode),
                                        i = "html" === e.type && t.prevNode && "html" === t.prevNode.type && t.prevNode.position.end.line + 1 === e.position.start.line,
                                        a = "html" === e.type && "listItem" === t.parentNode.type && t.prevNode && "paragraph" === t.prevNode.type && t.prevNode.position.end.line + 1 === e.position.start.line;
                                    return o || !(n || r || u || i || a)
                                }(r, e) || vx(r, e)) && a.push(UF), vx(r, e) && a.push(UF)), a.push(o), s = r
                            }
                        }), "children"), o(a)
                    }

                    function Cx(e) { let t = e; for (; t.children && 0 !== t.children.length;) t = t.children[t.children.length - 1]; return t }

                    function bx(e) { if ("html" !== e.type) return !1; const t = e.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/); return null !== t && (t[1] ? t[1] : "next") }

                    function vx(e, t) {
                        const n = t.prevNode && "list" === t.prevNode.type,
                            r = "code" === e.type && e.isIndented;
                        return n && r
                    }

                    function Ax(e, t) { const n = [" "].concat(t || []); return new RegExp(n.map((e => "\\".concat(e))).join("|")).test(e) ? "<".concat(e, ">") : e }

                    function Fx(e, t, n) {
                        if (null == n && (n = !0), !e) return "";
                        if (n) return " " + Fx(e, t, !1);
                        if ((e = e.replace(/\\(["')])/g, "$1")).includes('"') && e.includes("'") && !e.includes(")")) return "(".concat(e, ")");
                        const r = e.split("'").length - 1,
                            o = e.split('"').length - 1,
                            u = r > o ? '"' : o > r || t.singleQuote ? "'" : '"';
                        return e = (e = e.replace(/\\/, "\\\\")).replace(new RegExp("(".concat(u, ")"), "g"), "\\$1"), "".concat(u).concat(e).concat(u)
                    }
                    var xx = {
                            preprocess: function(e, t) {
                                return function(e) { return TF(e, ((e, t) => "importExport" === e.type && "importExport" === t.type), ((e, t) => ({ type: "importExport", value: e.value + "\n\n" + t.value, position: { start: e.position.start, end: t.position.end } }))) }(e = function(e) { return xF(e, (e => "import" !== e.type && "export" !== e.type ? e : Object.assign({}, e, { type: "importExport" }))) }(e = function(e, t) { return xF(e, ((e, n, [r]) => { if ("text" !== e.type) return e; let { value: o } = e; return "paragraph" === r.type && (0 === n && (o = o.trimStart()), n === r.children.length - 1 && (o = o.trimEnd())), { type: "sentence", position: e.position, children: SF(o, t) } })) }(e = function(e, t) {
                                    return xF(e, ((e, t, n) => {
                                        if ("list" === e.type && 0 !== e.children.length) {
                                            for (let t = 0; t < n.length; t++) { const r = n[t]; if ("list" === r.type && !r.isAligned) return e.isAligned = !1, e }
                                            e.isAligned = r(e)
                                        }
                                        return e
                                    }));

                                    function n(e) { return 0 === e.children.length ? -1 : e.children[0].position.start.column - 1 }

                                    function r(e) { if (!e.ordered) return !0; const [r, o] = e.children; if (FF(r, t.originalText).leadingSpaces.length > 1) return !0; const u = n(r); return -1 !== u && (1 === e.children.length ? u % t.tabWidth == 0 : u === n(o) && (u % t.tabWidth == 0 || FF(o, t.originalText).leadingSpaces.length > 1)) }
                                }(e = function(e, t) {
                                    return xF(e, ((e, n, r) => {
                                        if ("code" === e.type) {
                                            const n = /^\n?( {4,}|\t)/.test(t.originalText.slice(e.position.start.offset, e.position.end.offset));
                                            if (e.isIndented = n, n)
                                                for (let e = 0; e < r.length; e++) { const t = r[e]; if (t.hasIndentedCodeblock) break; "list" === t.type && (t.hasIndentedCodeblock = !0) }
                                        }
                                        return e
                                    }))
                                }(e = function(e) { return xF(e, (e => "inlineCode" !== e.type ? e : Object.assign({}, e, { value: e.value.replace(/\s+/g, " ") }))) }(e = function(e) { return TF(e, ((e, t) => "text" === e.type && "text" === t.type), ((e, t) => ({ type: "text", value: e.value + t.value, position: { start: e.position.start, end: t.position.end } }))) }(e = function(e, t) { return xF(e, (e => "text" === e.type && "*" !== e.value && "_" !== e.value && wF.test(e.value) && e.position.end.offset - e.position.start.offset !== e.value.length ? Object.assign({}, e, { value: t.originalText.slice(e.position.start.offset, e.position.end.offset) }) : e)) }(e, t))), t), t), t)))
                            },
                            print: function(e, t, n) {
                                const r = e.getValue();
                                if (function(e) { const t = gx(e, ["linkReference", "imageReference"]); return t && ("linkReference" !== t.type || "full" !== t.referenceType) }(e)) return RF(ux(t.originalText.slice(r.position.start.offset, r.position.end.offset), t).map((n => "word" === n.type ? n.value : "" === n.value ? "" : Dx(e, n.value, t))));
                                switch (r.type) {
                                    case "front-matter":
                                        return t.originalText.slice(r.position.start.offset, r.position.end.offset);
                                    case "root":
                                        return 0 === r.children.length ? "" : RF([KF(yx(e, t, n)), lx.has(Cx(r).type) ? "" : UF]);
                                    case "paragraph":
                                        return Ex(e, t, n, { postprocessor: HF });
                                    case "sentence":
                                        return Ex(e, t, n);
                                    case "word":
                                        {
                                            let t = r.value.replace(/\*/g, "\\$&").replace(new RegExp(["(^|".concat(ix, ")(_+)"), "(_+)(".concat(ix, "|$)")].join("|"), "g"), ((e, t, n, r, o) => (n ? "".concat(t).concat(n) : "".concat(r).concat(o)).replace(/_/g, "\\_")));
                                            const n = (e, t, n) => "sentence" === e.type && 0 === n,
                                                o = (e, t, n) => cx(e.children[n - 1]);
                                            return t !== r.value && (e.match(void 0, n, o) || e.match(void 0, n, ((e, t, n) => "emphasis" === e.type && 0 === n), o)) && (t = t.replace(/^(\\?[*_])+/, (e => e.replace(/\\/g, "")))),
                                            t
                                        }
                                    case "whitespace":
                                        {
                                            const n = e.getParentNode(),
                                                o = n.children.indexOf(r),
                                                u = n.children[o + 1],
                                                i = u && /^>|^([*+-]|#{1,6}|\d+[).])$/.test(u.value) ? "never" : t.proseWrap;
                                            return Dx(e, r.value, { proseWrap: i })
                                        }
                                    case "emphasis":
                                        {
                                            let o;
                                            if (cx(r.children[0])) o = t.originalText[r.position.start.offset];
                                            else {
                                                const t = e.getParentNode(),
                                                    n = t.children.indexOf(r),
                                                    u = t.children[n - 1],
                                                    i = t.children[n + 1];
                                                o = u && "sentence" === u.type && u.children.length > 0 && "word" === _F(u.children).type && !_F(u.children).hasTrailingPunctuation || i && "sentence" === i.type && i.children.length > 0 && "word" === i.children[0].type && !i.children[0].hasLeadingPunctuation || gx(e, "emphasis") ? "*" : "_"
                                            }
                                            return RF([o, Ex(e, t, n), o])
                                        }
                                    case "strong":
                                        return RF(["**", Ex(e, t, n), "**"]);
                                    case "delete":
                                        return RF(["~~", Ex(e, t, n), "~~"]);
                                    case "inlineCode":
                                        {
                                            const e = LF(r.value, "`"),
                                                t = "`".repeat(e || 1),
                                                n = e && !/^\s/.test(r.value) ? " " : "";
                                            return RF([t, n, r.value, n, t])
                                        }
                                    case "wikiLink":
                                        { let e = ""; return e = "preserve" === t.proseWrap ? r.value : r.value.replace(/[\t\n]+/g, " "), RF(["[[", e, "]]"]) }
                                    case "link":
                                        switch (t.originalText[r.position.start.offset]) {
                                            case "<":
                                                {
                                                    const e = "mailto:",
                                                        n = r.url.startsWith(e) && t.originalText.slice(r.position.start.offset + 1, r.position.start.offset + 1 + e.length) !== e ? r.url.slice(e.length) : r.url;
                                                    return RF(["<", n, ">"])
                                                }
                                            case "[":
                                                return RF(["[", Ex(e, t, n), "](", Ax(r.url, ")"), Fx(r.title, t), ")"]);
                                            default:
                                                return t.originalText.slice(r.position.start.offset, r.position.end.offset)
                                        }
                                    case "image":
                                        return RF(["![", r.alt || "", "](", Ax(r.url, ")"), Fx(r.title, t), ")"]);
                                    case "blockquote":
                                        return RF(["> ", GF("> ", Ex(e, t, n))]);
                                    case "heading":
                                        return RF(["#".repeat(r.depth) + " ", Ex(e, t, n)]);
                                    case "code":
                                        {
                                            if (r.isIndented) { const e = " ".repeat(4); return GF(e, RF([e, RF(ZF(r.value, UF))])) }
                                            const e = t.__inJsTemplate ? "~" : "`",
                                                n = e.repeat(Math.max(3, IF(r.value, e) + 1));
                                            return RF([n, r.lang || "", r.meta ? " " + r.meta : "", UF, RF(ZF(rx(r, t.originalText), UF)), UF, n])
                                        }
                                    case "html":
                                        {
                                            const t = e.getParentNode(),
                                                n = "root" === t.type && _F(t.children) === r ? r.value.trimEnd() : r.value,
                                                o = /^<!--[\S\s]*-->$/.test(n);
                                            return RF(ZF(n, o ? UF : WF($F)))
                                        }
                                    case "list":
                                        {
                                            const o = hx(r, e.getParentNode()),
                                                u = ox(r, t);
                                            return Ex(e, t, n, {
                                                processor: (e, i) => {
                                                    const a = function() { const e = r.ordered ? (0 === i ? r.start : u ? 1 : r.start + i) + (o % 2 == 0 ? ". " : ") ") : o % 2 == 0 ? "- " : "* "; return r.isAligned || r.hasIndentedCodeblock ? function(e, t) { const n = function() { const n = e.length % t.tabWidth; return 0 === n ? 0 : t.tabWidth - n }(); return e + " ".repeat(n >= 4 ? 0 : n) }(e, t) : e }(),
                                                        s = e.getValue();
                                                    return 2 === s.children.length && "html" === s.children[1].type && s.children[0].position.start.column !== s.children[1].position.start.column ? RF([a, fx(e, t, n, a)]) : RF([a, GF(" ".repeat(a.length), fx(e, t, n, a))])
                                                }
                                            })
                                        }
                                    case "thematicBreak":
                                        { const t = mx(e, "list"); return -1 === t ? "---" : hx(e.getParentNode(t), e.getParentNode(t + 1)) % 2 == 0 ? "***" : "---" }
                                    case "linkReference":
                                        return RF(["[", Ex(e, t, n), "]", "full" === r.referenceType ? RF(["[", r.identifier, "]"]) : "collapsed" === r.referenceType ? "[]" : ""]);
                                    case "imageReference":
                                        switch (r.referenceType) {
                                            case "full":
                                                return RF(["![", r.alt || "", "][", r.identifier, "]"]);
                                            default:
                                                return RF(["![", r.alt, "]", "collapsed" === r.referenceType ? "[]" : ""])
                                        }
                                    case "definition":
                                        { const e = "always" === t.proseWrap ? VF : " "; return YF(RF([RF(["[", r.identifier, "]:"]), XF(RF([e, Ax(r.url), null === r.title ? "" : RF([e, Fx(r.title, t, !1)])]))])) }
                                    case "footnote":
                                        return RF(["[^", Ex(e, t, n), "]"]);
                                    case "footnoteReference":
                                        return RF(["[^", r.identifier, "]"]);
                                    case "footnoteDefinition":
                                        {
                                            const o = e.getParentNode().children[e.getName() + 1],
                                                u = 1 === r.children.length && "paragraph" === r.children[0].type && ("never" === t.proseWrap || "preserve" === t.proseWrap && r.children[0].position.start.line === r.children[0].position.end.line);
                                            return RF(["[^", r.identifier, "]: ", u ? Ex(e, t, n) : YF(RF([GF(" ".repeat(4), Ex(e, t, n, { processor: (e, t) => 0 === t ? YF(RF([JF, e.call(n)])) : e.call(n) })), o && "footnoteDefinition" === o.type ? JF : ""]))])
                                        }
                                    case "table":
                                        return function(e, t, n) {
                                            const r = UF.parts[0],
                                                o = e.getValue(),
                                                u = [],
                                                i = e.map((e => e.map(((e, r) => {
                                                    const o = QF(e.call(n), t).formatted,
                                                        i = MF(o);
                                                    return u[r] = Math.max(u[r] || 3, i), { text: o, width: i }
                                                }), "children")), "children"),
                                                a = c(!1);
                                            if ("never" !== t.proseWrap) return RF([jF, a]);
                                            const s = c(!0);
                                            return RF([jF, YF(zF(s, a))]);

                                            function c(e) { const t = [p(i[0], e), l(e)]; return i.length > 1 && t.push(qF(r, i.slice(1).map((t => p(t, e))))), qF(r, t) }

                                            function l(e) {
                                                const t = u.map(((t, n) => {
                                                    const r = o.align[n],
                                                        u = "center" === r || "left" === r ? ":" : "-",
                                                        i = "center" === r || "right" === r ? ":" : "-",
                                                        a = e ? "-" : "-".repeat(t - 2);
                                                    return "".concat(u).concat(a).concat(i)
                                                }));
                                                return "| ".concat(t.join(" | "), " |")
                                            }

                                            function p(e, t) {
                                                const n = e.map((({ text: e, width: n }, r) => {
                                                    if (t) return e;
                                                    const i = u[r] - n,
                                                        a = o.align[r];
                                                    let s = 0;
                                                    "right" === a ? s = i : "center" === a && (s = Math.floor(i / 2));
                                                    const c = i - s;
                                                    return "".concat(" ".repeat(s)).concat(e).concat(" ".repeat(c))
                                                }));
                                                return "| ".concat(n.join(" | "), " |")
                                            }
                                        }(e, t, n);
                                    case "tableCell":
                                        return Ex(e, t, n);
                                    case "break":
                                        return /\s/.test(t.originalText[r.position.start.offset]) ? RF(["  ", WF($F)]) : RF(["\\", UF]);
                                    case "liquidNode":
                                        return RF(ZF(r.value, UF));
                                    case "importExport":
                                        return RF([r.value, UF]);
                                    case "jsx":
                                        return r.value;
                                    case "math":
                                        return RF(["$$", UF, r.value ? RF([RF(ZF(r.value, UF)), UF]) : "", "$$"]);
                                    case "inlineMath":
                                        return t.originalText.slice(tx(r), nx(r));
                                    case "tableRow":
                                    case "listItem":
                                    default:
                                        throw new Error("Unknown markdown type ".concat(JSON.stringify(r.type)))
                                }
                            },
                            embed: function(e, t, n, r) {
                                const o = e.getValue();
                                if ("code" === o.type && null !== o.lang) {
                                    const e = dF(o.lang, r);
                                    if (e) {
                                        const t = r.__inJsTemplate ? "~" : "`",
                                            u = t.repeat(Math.max(3, fF(o.value, t) + 1)),
                                            i = n(EF(o, r.originalText), { parser: e }, { stripTrailingHardline: !0 });
                                        return gF(mF([u, o.lang, o.meta ? " " + o.meta : "", hF, DF(i), hF, u]))
                                    }
                                }
                                switch (o.type) {
                                    case "front-matter":
                                        return yF(o, n);
                                    case "importExport":
                                        return mF([n(o.value, { parser: "babel" }, { stripTrailingHardline: !0 }), hF]);
                                    case "jsx":
                                        return n("<$>".concat(o.value, "</$>"), { parser: "__js_expression", rootMarker: "mdx" }, { stripTrailingHardline: !0 })
                                }
                                return null
                            },
                            massageAstNode: OF,
                            hasPrettierIgnore: function(e) { const t = +e.getName(); return 0 !== t && "next" === bx(e.getParentNode().children[t - 1]) },
                            insertPragma: ex
                        },
                        Sx = { proseWrap: AC.proseWrap, singleQuote: AC.singleQuote },
                        wx = { name: "Markdown", type: "prose", color: "#083fa1", aliases: ["pandoc"], aceMode: "markdown", codemirrorMode: "gfm", codemirrorMimeType: "text/x-gfm", wrap: !0, extensions: [".md", ".markdown", ".mdown", ".mdwn", ".mdx", ".mkd", ".mkdn", ".mkdown", ".ronn", ".workbook"], filenames: ["contents.lr"], tmScope: "source.gfm", languageId: 222 },
                        Tx = { languages: [vs(wx, (e => ({ since: "1.8.0", parsers: ["markdown"], vscodeLanguageIds: ["markdown"], filenames: e.filenames.concat(["README"]), extensions: e.extensions.filter((e => ".mdx" !== e)) }))), vs(wx, (() => ({ name: "MDX", since: "1.15.0", parsers: ["mdx"], vscodeLanguageIds: ["mdx"], filenames: [], extensions: [".mdx"] })))], options: Sx, printers: { mdast: xx }, parsers: {get remark() { return {}.parsers.remark }, get markdown() { return {}.parsers.remark }, get mdx() { return {}.parsers.mdx } } };
                    const { isFrontMatterNode: Bx } = Lt, kx = new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan"]);

                    function Nx(e, t) { return "text" === e.type || "comment" === e.type || Bx(e) || "yaml" === e.type || "toml" === e.type ? null : ("attribute" === e.type && delete t.value, void("docType" === e.type && delete t.value)) }
                    Nx.ignoredProperties = kx;
                    var Px = Nx;
                    const { inferParserByLanguage: Ox, isFrontMatterNode: _x } = Lt, { CSS_DISPLAY_TAGS: Lx, CSS_DISPLAY_DEFAULT: Ix, CSS_WHITE_SPACE_TAGS: Mx, CSS_WHITE_SPACE_DEFAULT: jx } = { CSS_DISPLAY_TAGS: { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", source: "block", style: "none", template: "inline", track: "block", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", fieldset: "block", button: "inline-block", details: "block", summary: "block", dialog: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", select: "inline-block", option: "block", optgroup: "block" }, CSS_DISPLAY_DEFAULT: "inline", CSS_WHITE_SPACE_TAGS: { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" }, CSS_WHITE_SPACE_DEFAULT: "normal" }, Rx = Ux(["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"]), qx = function(e, t) { const n = Object.create(null); for (const r of Object.keys(e)) n[r] = t(e[r], r); return n }({ "*": ["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "slot", "spellcheck", "style", "tabindex", "title", "translate"], a: ["accesskey", "charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "tabindex", "target", "type"], abbr: ["title"], applet: ["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"], area: ["accesskey", "alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "tabindex", "target", "type"], audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"], base: ["href", "target"], basefont: ["color", "face", "size"], bdo: ["dir"], blockquote: ["cite"], body: ["alink", "background", "bgcolor", "link", "text", "vlink"], br: ["clear"], button: ["accesskey", "autofocus", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "tabindex", "type", "value"], canvas: ["height", "width"], caption: ["align"], col: ["align", "char", "charoff", "span", "valign", "width"], colgroup: ["align", "char", "charoff", "span", "valign", "width"], data: ["value"], del: ["cite", "datetime"], details: ["open"], dfn: ["title"], dialog: ["open"], dir: ["compact"], div: ["align"], dl: ["compact"], embed: ["height", "src", "type", "width"], fieldset: ["disabled", "form", "name"], font: ["color", "face", "size"], form: ["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"], frame: ["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"], frameset: ["cols", "rows"], h1: ["align"], h2: ["align"], h3: ["align"], h4: ["align"], h5: ["align"], h6: ["align"], head: ["profile"], hr: ["align", "noshade", "size", "width"], html: ["manifest", "version"], iframe: ["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"], img: ["align", "alt", "border", "crossorigin", "decoding", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"], input: ["accept", "accesskey", "align", "alt", "autocomplete", "autofocus", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "src", "step", "tabindex", "title", "type", "usemap", "value", "width"], ins: ["cite", "datetime"], isindex: ["prompt"], label: ["accesskey", "for", "form"], legend: ["accesskey", "align"], li: ["type", "value"], link: ["as", "charset", "color", "crossorigin", "disabled", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "nonce", "referrerpolicy", "rel", "rev", "sizes", "target", "title", "type"], map: ["name"], menu: ["compact"], meta: ["charset", "content", "http-equiv", "name", "scheme"], meter: ["high", "low", "max", "min", "optimum", "value"], object: ["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "tabindex", "type", "typemustmatch", "usemap", "vspace", "width"], ol: ["compact", "reversed", "start", "type"], optgroup: ["disabled", "label"], option: ["disabled", "label", "selected", "value"], output: ["for", "form", "name"], p: ["align"], param: ["name", "type", "value", "valuetype"], pre: ["width"], progress: ["max", "value"], q: ["cite"], script: ["async", "charset", "crossorigin", "defer", "integrity", "language", "nomodule", "nonce", "referrerpolicy", "src", "type"], select: ["autocomplete", "autofocus", "disabled", "form", "multiple", "name", "required", "size", "tabindex"], slot: ["name"], source: ["media", "sizes", "src", "srcset", "type"], style: ["media", "nonce", "title", "type"], table: ["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"], tbody: ["align", "char", "charoff", "valign"], td: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], textarea: ["accesskey", "autocomplete", "autofocus", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "tabindex", "wrap"], tfoot: ["align", "char", "charoff", "valign"], th: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], thead: ["align", "char", "charoff", "valign"], time: ["datetime"], tr: ["align", "bgcolor", "char", "charoff", "valign"], track: ["default", "kind", "label", "src", "srclang"], ul: ["compact", "type"], video: ["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"] }, Ux), Vx = new Set(["\t", "\n", "\f", "\r", " "]), $x = e => e.replace(/[\t\n\f\r ]+$/, ""), Wx = e => e.match(/^[\t\n\f\r ]*/)[0];

                    function Ux(e) { const t = Object.create(null); for (const n of e) t[n] = !0; return t }

                    function Jx(e, t) { return !("ieConditionalComment" !== e.type || !e.lastChild || e.lastChild.isSelfClosing || e.lastChild.endSourceSpan) || "ieConditionalComment" === e.type && !e.complete || !(!rS(e) || !e.children.some((e => "text" !== e.type && "interpolation" !== e.type))) || !(!cS(e, t) || Hx(e) || "interpolation" === e.type) }

                    function zx(e) { return "attribute" !== e.type && !!e.parent && "number" == typeof e.index && 0 !== e.index && function(e) { return "comment" === e.type && "prettier-ignore" === e.value.trim() }(e.parent.children[e.index - 1]) }

                    function Hx(e) { return "element" === e.type && ("script" === e.fullName || "style" === e.fullName || "svg:style" === e.fullName || oS(e) && ("script" === e.name || "style" === e.name)) }

                    function Gx(e) { return uS(e).startsWith("pre") }

                    function Xx(e) { return "element" === e.type && 0 !== e.children.length && (["html", "head", "ul", "ol", "select"].includes(e.name) || e.cssDisplay.startsWith("table") && "table-cell" !== e.cssDisplay) }

                    function Yx(e) { return eS(e) || "element" === e.type && "br" === e.fullName || Kx(e) }

                    function Kx(e) { return Qx(e) && Zx(e) }

                    function Qx(e) { return e.hasLeadingSpaces && (e.prev ? e.prev.sourceSpan.end.line < e.sourceSpan.start.line : "root" === e.parent.type || e.parent.startSourceSpan.end.line < e.sourceSpan.start.line) }

                    function Zx(e) { return e.hasTrailingSpaces && (e.next ? e.next.sourceSpan.start.line > e.sourceSpan.end.line : "root" === e.parent.type || e.parent.endSourceSpan && e.parent.endSourceSpan.start.line > e.sourceSpan.end.line) }

                    function eS(e) {
                        switch (e.type) {
                            case "ieConditionalComment":
                            case "comment":
                            case "directive":
                                return !0;
                            case "element":
                                return ["script", "select"].includes(e.name)
                        }
                        return !1
                    }

                    function tS(e) { const { type: t, lang: n } = e.attrMap; return "module" === t || "text/javascript" === t || "text/babel" === t || "application/javascript" === t || "jsx" === n ? "babel" : "application/x-typescript" === t || "ts" === n || "tsx" === n ? "typescript" : "text/markdown" === t ? "markdown" : "text/html" === t ? "html" : t && (t.endsWith("json") || t.endsWith("importmap")) ? "json" : "text/x-handlebars-template" === t ? "glimmer" : void 0 }

                    function nS(e) { return "block" === e || "list-item" === e || e.startsWith("table") }

                    function rS(e) { return uS(e).startsWith("pre") }

                    function oS(e) { return "element" === e.type && !e.hasExplicitNamespace && !["html", "svg"].includes(e.namespace) }

                    function uS(e) { return "element" === e.type && (!e.namespace || oS(e)) && Mx[e.name] || jx }
                    const iS = new Set(["template", "style", "script"]);

                    function aS(e, t) { return sS(e, t) && !iS.has(e.fullName) }

                    function sS(e, t) { return "vue" === t.parser && "element" === e.type && "root" === e.parent.type && "html" !== e.fullName.toLowerCase() }

                    function cS(e, t) { return sS(e, t) && (aS(e, t) || e.attrMap.lang && "html" !== e.attrMap.lang) }
                    var lS = {
                            HTML_ELEMENT_ATTRIBUTES: qx,
                            HTML_TAGS: Rx,
                            htmlTrim: e => (e => e.replace(/^[\t\n\f\r ]+/, ""))($x(e)),
                            htmlTrimPreserveIndentation: e => (e => e.replace(/^[\t\f\r ]*?\n/g, ""))($x(e)),
                            splitByHtmlWhitespace: e => e.split(/[\t\n\f\r ]+/),
                            hasHtmlWhitespace: e => /[\t\n\f\r ]/.test(e),
                            getLeadingAndTrailingHtmlWhitespace: e => { const [, t, n, r] = e.match(/^([\t\n\f\r ]*)([\S\s]*?)([\t\n\f\r ]*)$/); return { leadingWhitespace: t, trailingWhitespace: r, text: n } },
                            canHaveInterpolation: function(e) { return e.children && !Hx(e) },
                            countChars: function(e, t) { let n = 0; for (let r = 0; r < e.length; r++) e[r] === t && n++; return n },
                            countParents: function(e, t) {
                                let n = 0;
                                for (let r = e.stack.length - 1; r >= 0; r--) {
                                    const o = e.stack[r];
                                    o && "object" == typeof o && !Array.isArray(o) && t(o) && n++
                                }
                                return n
                            },
                            dedentString: function(e, t = function(e) {
                                let t = 1 / 0;
                                for (const n of e.split("\n")) {
                                    if (0 === n.length) continue;
                                    if (!Vx.has(n[0])) return 0;
                                    const e = Wx(n).length;
                                    n.length !== e && e < t && (t = e)
                                }
                                return t === 1 / 0 ? 0 : t
                            }(e)) { return 0 === t ? e : e.split("\n").map((e => e.slice(t))).join("\n") },
                            forceBreakChildren: Xx,
                            forceBreakContent: function(e) { return Xx(e) || "element" === e.type && 0 !== e.children.length && (["body", "script", "style"].includes(e.name) || e.children.some((e => function(e) { return e.children && e.children.some((e => "text" !== e.type)) }(e)))) || e.firstChild && e.firstChild === e.lastChild && "text" !== e.firstChild.type && Qx(e.firstChild) && (!e.lastChild.isTrailingSpaceSensitive || Zx(e.lastChild)) },
                            forceNextEmptyLine: function(e) { return _x(e) || e.next && e.sourceSpan.end && e.sourceSpan.end.line + 1 < e.next.sourceSpan.start.line },
                            getLastDescendant: function e(t) { return t.lastChild ? e(t.lastChild) : t },
                            getNodeCssStyleDisplay: function(e, t) {
                                if (e.prev && "comment" === e.prev.type) { const t = e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/); if (t) return t[1] }
                                let n = !1;
                                if ("element" === e.type && "svg" === e.namespace) {
                                    if (! function(e, t) {
                                            let n = e;
                                            for (; n;) {
                                                if (t(n)) return !0;
                                                n = n.parent
                                            }
                                            return !1
                                        }(e, (e => "svg:foreignObject" === e.fullName))) return "svg" === e.name ? "inline-block" : "block";
                                    n = !0
                                }
                                switch (t.htmlWhitespaceSensitivity) {
                                    case "strict":
                                        return "inline";
                                    case "ignore":
                                        return "block";
                                    default:
                                        return "vue" === t.parser && e.parent && "root" === e.parent.type ? "block" : "element" === e.type && (!e.namespace || n || oS(e)) && Lx[e.name] || Ix
                                }
                            },
                            getNodeCssStyleWhiteSpace: uS,
                            getPrettierIgnoreAttributeCommentData: function(e) { const t = e.trim().match(/^prettier-ignore-attribute(?:\s+([^]+))?$/); return !!t && (!t[1] || t[1].split(/\s+/)) },
                            hasPrettierIgnore: zx,
                            inferScriptParser: function(e, t) { return "script" !== e.name || e.attrMap.src ? "style" === e.name ? function(e) { const { lang: t } = e.attrMap; return t && "postcss" !== t && "css" !== t ? "scss" === t ? "scss" : "less" === t ? "less" : void 0 : "css" }(e) : t && cS(e, t) ? tS(e) || !("src" in e.attrMap) && Ox(e.attrMap.lang, t) : void 0 : e.attrMap.lang || e.attrMap.type ? tS(e) : "babel" },
                            isVueCustomBlock: aS,
                            isVueNonHtmlBlock: cS,
                            isVueSlotAttribute: function(e) { const t = e.fullName; return "#" === t.charAt(0) || "slot-scope" === t || "v-slot" === t || t.startsWith("v-slot:") },
                            isVueSfcBindingsAttribute: function(e, t) {
                                const n = e.parent;
                                if (!sS(n, t)) return !1;
                                const r = n.fullName,
                                    o = e.fullName;
                                return "script" === r && "setup" === o || "style" === r && "vars" === o
                            },
                            isDanglingSpaceSensitiveNode: function(e) { return !(nS(t = e.cssDisplay) || "inline-block" === t || Hx(e)); var t },
                            isIndentationSensitiveNode: Gx,
                            isLeadingSpaceSensitiveNode: function(e, t) { const n = function() { return !(_x(e) || ("text" !== e.type && "interpolation" !== e.type || !e.prev || "text" !== e.prev.type && "interpolation" !== e.prev.type) && (!e.parent || "none" === e.parent.cssDisplay || !rS(e.parent) && (!e.prev && ("root" === e.parent.type || rS(e) && e.parent || Hx(e.parent) || aS(e.parent, t) || (n = e.parent.cssDisplay, nS(n) || "inline-block" === n)) || e.prev && ! function(e) { return !nS(e) }(e.prev.cssDisplay)))); var n }(); return n && !e.prev && e.parent && e.parent.tagDefinition && e.parent.tagDefinition.ignoreFirstLf ? "interpolation" === e.type : n },
                            isPreLikeNode: rS,
                            isScriptLikeTag: Hx,
                            isTextLikeNode: function(e) { return "text" === e.type || "comment" === e.type },
                            isTrailingSpaceSensitiveNode: function(e, t) { return !(_x(e) || ("text" !== e.type && "interpolation" !== e.type || !e.next || "text" !== e.next.type && "interpolation" !== e.next.type) && (!e.parent || "none" === e.parent.cssDisplay || !rS(e.parent) && (!e.next && ("root" === e.parent.type || rS(e) && e.parent || Hx(e.parent) || aS(e.parent, t) || (n = e.parent.cssDisplay, nS(n) || "inline-block" === n)) || e.next && ! function(e) { return !nS(e) }(e.next.cssDisplay)))); var n },
                            isWhitespaceSensitiveNode: function(e) { return Hx(e) || "interpolation" === e.type || Gx(e) },
                            isUnknownNamespace: oS,
                            preferHardlineAsLeadingSpaces: function(e) { return eS(e) || e.prev && Yx(e.prev) || Kx(e) },
                            preferHardlineAsTrailingSpaces: Yx,
                            shouldNotPrintClosingTag: function(e, t) { return !e.isSelfClosing && !e.endSourceSpan && (zx(e) || Jx(e.parent, t)) },
                            shouldPreserveContent: Jx,
                            unescapeQuoteEntities: function(e) { return e.replace(/&apos;/g, "'").replace(/&quot;/g, '"') }
                        },
                        pS = Me((function(e, t) {
                            function n(e) { return t.$0 <= e && e <= t.$9 }
                            Object.defineProperty(t, "__esModule", { value: !0 }), t.$EOF = 0, t.$BSPACE = 8, t.$TAB = 9, t.$LF = 10, t.$VTAB = 11, t.$FF = 12, t.$CR = 13, t.$SPACE = 32, t.$BANG = 33, t.$DQ = 34, t.$HASH = 35, t.$$ = 36, t.$PERCENT = 37, t.$AMPERSAND = 38, t.$SQ = 39, t.$LPAREN = 40, t.$RPAREN = 41, t.$STAR = 42, t.$PLUS = 43, t.$COMMA = 44, t.$MINUS = 45, t.$PERIOD = 46, t.$SLASH = 47, t.$COLON = 58, t.$SEMICOLON = 59, t.$LT = 60, t.$EQ = 61, t.$GT = 62, t.$QUESTION = 63, t.$0 = 48, t.$7 = 55, t.$9 = 57, t.$A = 65, t.$E = 69, t.$F = 70, t.$X = 88, t.$Z = 90, t.$LBRACKET = 91, t.$BACKSLASH = 92, t.$RBRACKET = 93, t.$CARET = 94, t.$_ = 95, t.$a = 97, t.$b = 98, t.$e = 101, t.$f = 102, t.$n = 110, t.$r = 114, t.$t = 116, t.$u = 117, t.$v = 118, t.$x = 120, t.$z = 122, t.$LBRACE = 123, t.$BAR = 124, t.$RBRACE = 125, t.$NBSP = 160, t.$PIPE = 124, t.$TILDA = 126, t.$AT = 64, t.$BT = 96, t.isWhitespace = function(e) { return e >= t.$TAB && e <= t.$SPACE || e == t.$NBSP }, t.isDigit = n, t.isAsciiLetter = function(e) { return e >= t.$a && e <= t.$z || e >= t.$A && e <= t.$Z }, t.isAsciiHexDigit = function(e) { return e >= t.$a && e <= t.$f || e >= t.$A && e <= t.$F || n(e) }, t.isNewLine = function(e) { return e === t.$LF || e === t.$CR }, t.isOctalDigit = function(e) { return t.$0 <= e && e <= t.$7 }
                        })),
                        dS = Me((function(e, t) {
                            Object.defineProperty(t, "__esModule", { value: !0 });
                            class n {
                                constructor(e, t, n) { this.filePath = e, this.name = t, this.members = n }
                                assertNoMembers() { if (this.members.length) throw new Error("Illegal state: symbol without members expected, but got ".concat(JSON.stringify(this), ".")) }
                            }
                            t.StaticSymbol = n, t.StaticSymbolCache = class {
                                constructor() { this.cache = new Map }
                                get(e, t, r) {
                                    const o = (r = r || []).length ? ".".concat(r.join(".")) : "",
                                        u = '"'.concat(e, '".').concat(t).concat(o);
                                    let i = this.cache.get(u);
                                    return i || (i = new n(e, t, r), this.cache.set(u, i)), i
                                }
                            }
                        })),
                        fS = Me((function(e, t) {
                            Object.defineProperty(t, "__esModule", { value: !0 });
                            const n = /-+([a-z0-9])/g;

                            function r(e, t, n) { const r = e.indexOf(t); return -1 == r ? n : [e.slice(0, r).trim(), e.slice(r + 1).trim()] }

                            function o(e, t, n) { return Array.isArray(e) ? t.visitArray(e, n) : "object" == typeof(r = e) && null !== r && Object.getPrototypeOf(r) === a ? t.visitStringMap(e, n) : null == e || "string" == typeof e || "number" == typeof e || "boolean" == typeof e ? t.visitPrimitive(e, n) : t.visitOther(e, n); var r }
                            t.dashCaseToCamelCase = function(e) { return e.replace(n, ((...e) => e[1].toUpperCase())) }, t.splitAtColon = function(e, t) { return r(e, ":", t) }, t.splitAtPeriod = function(e, t) { return r(e, ".", t) }, t.visitValue = o, t.isDefined = function(e) { return null != e }, t.noUndefined = function(e) { return void 0 === e ? null : e }, t.ValueTransformer = class {
                                visitArray(e, t) { return e.map((e => o(e, this, t))) }
                                visitStringMap(e, t) { const n = {}; return Object.keys(e).forEach((r => { n[r] = o(e[r], this, t) })), n }
                                visitPrimitive(e, t) { return e }
                                visitOther(e, t) { return e }
                            }, t.SyncAsync = { assertSync: e => { if (s(e)) throw new Error("Illegal state: value cannot be a promise"); return e }, then: (e, t) => s(e) ? e.then(t) : t(e), all: e => e.some(s) ? Promise.all(e) : e }, t.error = function(e) { throw new Error("Internal Error: ".concat(e)) }, t.syntaxError = function(e, t) { const n = Error(e); return n[u] = !0, t && (n[i] = t), n };
                            const u = "ngSyntaxError",
                                i = "ngParseErrors";
                            t.isSyntaxError = function(e) { return e[u] }, t.getParseErrors = function(e) { return e[i] || [] }, t.escapeRegExp = function(e) { return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1") };
                            const a = Object.getPrototypeOf({});

                            function s(e) { return !!e && "function" == typeof e.then }
                            t.utf8Encode = function(e) {
                                let t = "";
                                for (let n = 0; n < e.length; n++) {
                                    let r = e.charCodeAt(n);
                                    if (r >= 55296 && r <= 56319 && e.length > n + 1) {
                                        const t = e.charCodeAt(n + 1);
                                        t >= 56320 && t <= 57343 && (n++, r = (r - 55296 << 10) + t - 56320 + 65536)
                                    }
                                    r <= 127 ? t += String.fromCharCode(r) : r <= 2047 ? t += String.fromCharCode(r >> 6 & 31 | 192, 63 & r | 128) : r <= 65535 ? t += String.fromCharCode(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128) : r <= 2097151 && (t += String.fromCharCode(r >> 18 & 7 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128))
                                }
                                return t
                            }, t.stringify = function e(t) { if ("string" == typeof t) return t; if (t instanceof Array) return "[" + t.map(e).join(", ") + "]"; if (null == t) return "" + t; if (t.overriddenName) return "".concat(t.overriddenName); if (t.name) return "".concat(t.name); if (!t.toString) return "object"; const n = t.toString(); if (null == n) return "" + n; const r = n.indexOf("\n"); return -1 === r ? n : n.substring(0, r) }, t.resolveForwardRef = function(e) { return "function" == typeof e && e.hasOwnProperty("__forward_ref__") ? e() : e }, t.isPromise = s, t.Version = class {
                                constructor(e) {
                                    this.full = e;
                                    const t = e.split(".");
                                    this.major = t[0], this.minor = t[1], this.patch = t.slice(2).join(".")
                                }
                            };
                            const c = "undefined" != typeof window && window,
                                l = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                                p = void 0 !== Ie && Ie || c || l;
                            t.global = p
                        })),
                        hS = Me((function(e, t) {
                            Object.defineProperty(t, "__esModule", { value: !0 });
                            const n = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;

                            function r(e) { return e.replace(/\W/g, "_") }
                            t.sanitizeIdentifier = r;
                            let o = 0;

                            function u(e) { if (!e || !e.reference) return null; const t = e.reference; if (t instanceof dS.StaticSymbol) return t.name; if (t.__anonymousType) return t.__anonymousType; let n = fS.stringify(t); return n.indexOf("(") >= 0 ? (n = "anonymous_".concat(o++), t.__anonymousType = n) : n = r(n), n }
                            var i;
                            t.identifierName = u, t.identifierModuleUrl = function(e) { const t = e.reference; return t instanceof dS.StaticSymbol ? t.filePath : "./".concat(fS.stringify(t)) }, t.viewClassName = function(e, t) { return "View_".concat(u({ reference: e }), "_").concat(t) }, t.rendererTypeName = function(e) { return "RenderType_".concat(u({ reference: e })) }, t.hostViewClassName = function(e) { return "HostView_".concat(u({ reference: e })) }, t.componentFactoryName = function(e) { return "".concat(u({ reference: e }), "NgFactory") },
                                function(e) { e[e.Pipe = 0] = "Pipe", e[e.Directive = 1] = "Directive", e[e.NgModule = 2] = "NgModule", e[e.Injectable = 3] = "Injectable" }(i = t.CompileSummaryKind || (t.CompileSummaryKind = {})), t.tokenName = function(e) { return null != e.value ? r(e.value) : u(e.identifier) }, t.tokenReference = function(e) { return null != e.identifier ? e.identifier.reference : e.value }, t.CompileStylesheetMetadata = class { constructor({ moduleUrl: e, styles: t, styleUrls: n } = {}) { this.moduleUrl = e || null, this.styles = s(t), this.styleUrls = s(n) } }, t.CompileTemplateMetadata = class {
                                    constructor({ encapsulation: e, template: t, templateUrl: n, htmlAst: r, styles: o, styleUrls: u, externalStylesheets: i, animations: a, ngContentSelectors: l, interpolation: p, isInline: d, preserveWhitespaces: f }) {
                                        if (this.encapsulation = e, this.template = t, this.templateUrl = n, this.htmlAst = r, this.styles = s(o), this.styleUrls = s(u), this.externalStylesheets = s(i), this.animations = a ? c(a) : [], this.ngContentSelectors = l || [], p && 2 != p.length) throw new Error("'interpolation' should have a start and an end symbol.");
                                        this.interpolation = p, this.isInline = d, this.preserveWhitespaces = f
                                    }
                                    toSummary() { return { ngContentSelectors: this.ngContentSelectors, encapsulation: this.encapsulation, styles: this.styles, animations: this.animations } }
                                };
                            class a {
                                static create({ isHost: e, type: t, isComponent: r, selector: o, exportAs: u, changeDetection: i, inputs: s, outputs: c, host: l, providers: p, viewProviders: d, queries: f, guards: h, viewQueries: m, entryComponents: g, template: D, componentViewType: y, rendererType: E, componentFactory: C }) {
                                    const b = {},
                                        v = {},
                                        A = {};
                                    null != l && Object.keys(l).forEach((e => {
                                        const t = l[e],
                                            r = e.match(n);
                                        null === r ? A[e] = t : null != r[1] ? v[r[1]] = t : null != r[2] && (b[r[2]] = t)
                                    }));
                                    const F = {};
                                    null != s && s.forEach((e => {
                                        const t = fS.splitAtColon(e, [e, e]);
                                        F[t[0]] = t[1]
                                    }));
                                    const x = {};
                                    return null != c && c.forEach((e => {
                                        const t = fS.splitAtColon(e, [e, e]);
                                        x[t[0]] = t[1]
                                    })), new a({ isHost: e, type: t, isComponent: !!r, selector: o, exportAs: u, changeDetection: i, inputs: F, outputs: x, hostListeners: b, hostProperties: v, hostAttributes: A, providers: p, viewProviders: d, queries: f, guards: h, viewQueries: m, entryComponents: g, template: D, componentViewType: y, rendererType: E, componentFactory: C })
                                }
                                constructor({ isHost: e, type: t, isComponent: n, selector: r, exportAs: o, changeDetection: u, inputs: i, outputs: a, hostListeners: c, hostProperties: l, hostAttributes: p, providers: d, viewProviders: f, queries: h, guards: m, viewQueries: g, entryComponents: D, template: y, componentViewType: E, rendererType: C, componentFactory: b }) { this.isHost = !!e, this.type = t, this.isComponent = n, this.selector = r, this.exportAs = o, this.changeDetection = u, this.inputs = i, this.outputs = a, this.hostListeners = c, this.hostProperties = l, this.hostAttributes = p, this.providers = s(d), this.viewProviders = s(f), this.queries = s(h), this.guards = m, this.viewQueries = s(g), this.entryComponents = s(D), this.template = y, this.componentViewType = E, this.rendererType = C, this.componentFactory = b }
                                toSummary() { return { summaryKind: i.Directive, type: this.type, isComponent: this.isComponent, selector: this.selector, exportAs: this.exportAs, inputs: this.inputs, outputs: this.outputs, hostListeners: this.hostListeners, hostProperties: this.hostProperties, hostAttributes: this.hostAttributes, providers: this.providers, viewProviders: this.viewProviders, queries: this.queries, guards: this.guards, viewQueries: this.viewQueries, entryComponents: this.entryComponents, changeDetection: this.changeDetection, template: this.template && this.template.toSummary(), componentViewType: this.componentViewType, rendererType: this.rendererType, componentFactory: this.componentFactory } }
                            }

                            function s(e) { return e || [] }

                            function c(e) { return e.reduce(((e, t) => { const n = Array.isArray(t) ? c(t) : t; return e.concat(n) }), []) }

                            function l(e) { return e.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///") }
                            t.CompileDirectiveMetadata = a, t.CompilePipeMetadata = class {
                                constructor({ type: e, name: t, pure: n }) { this.type = e, this.name = t, this.pure = !!n }
                                toSummary() { return { summaryKind: i.Pipe, type: this.type, name: this.name, pure: this.pure } }
                            }, t.CompileShallowModuleMetadata = class {}, t.CompileNgModuleMetadata = class {
                                constructor({ type: e, providers: t, declaredDirectives: n, exportedDirectives: r, declaredPipes: o, exportedPipes: u, entryComponents: i, bootstrapComponents: a, importedModules: c, exportedModules: l, schemas: p, transitiveModule: d, id: f }) { this.type = e || null, this.declaredDirectives = s(n), this.exportedDirectives = s(r), this.declaredPipes = s(o), this.exportedPipes = s(u), this.providers = s(t), this.entryComponents = s(i), this.bootstrapComponents = s(a), this.importedModules = s(c), this.exportedModules = s(l), this.schemas = s(p), this.id = f || null, this.transitiveModule = d || null }
                                toSummary() { const e = this.transitiveModule; return { summaryKind: i.NgModule, type: this.type, entryComponents: e.entryComponents, providers: e.providers, modules: e.modules, exportedDirectives: e.exportedDirectives, exportedPipes: e.exportedPipes } }
                            }, t.TransitiveCompileNgModuleMetadata = class {
                                constructor() { this.directivesSet = new Set, this.directives = [], this.exportedDirectivesSet = new Set, this.exportedDirectives = [], this.pipesSet = new Set, this.pipes = [], this.exportedPipesSet = new Set, this.exportedPipes = [], this.modulesSet = new Set, this.modules = [], this.entryComponentsSet = new Set, this.entryComponents = [], this.providers = [] }
                                addProvider(e, t) { this.providers.push({ provider: e, module: t }) }
                                addDirective(e) { this.directivesSet.has(e.reference) || (this.directivesSet.add(e.reference), this.directives.push(e)) }
                                addExportedDirective(e) { this.exportedDirectivesSet.has(e.reference) || (this.exportedDirectivesSet.add(e.reference), this.exportedDirectives.push(e)) }
                                addPipe(e) { this.pipesSet.has(e.reference) || (this.pipesSet.add(e.reference), this.pipes.push(e)) }
                                addExportedPipe(e) { this.exportedPipesSet.has(e.reference) || (this.exportedPipesSet.add(e.reference), this.exportedPipes.push(e)) }
                                addModule(e) { this.modulesSet.has(e.reference) || (this.modulesSet.add(e.reference), this.modules.push(e)) }
                                addEntryComponent(e) { this.entryComponentsSet.has(e.componentType) || (this.entryComponentsSet.add(e.componentType), this.entryComponents.push(e)) }
                            }, t.ProviderMeta = class { constructor(e, { useClass: t, useValue: n, useExisting: r, useFactory: o, deps: u, multi: i }) { this.token = e, this.useClass = t || null, this.useValue = n, this.useExisting = r, this.useFactory = o || null, this.dependencies = u || null, this.multi = !!i } }, t.flatten = c, t.templateSourceUrl = function(e, t, n) { let r; return r = n.isInline ? t.type.reference instanceof dS.StaticSymbol ? "".concat(t.type.reference.filePath, ".").concat(t.type.reference.name, ".html") : "".concat(u(e), "/").concat(u(t.type), ".html") : n.templateUrl, t.type.reference instanceof dS.StaticSymbol ? r : l(r) }, t.sharedStylesheetJitUrl = function(e, t) {
                                const n = e.moduleUrl.split(/\/\\/g),
                                    r = n[n.length - 1];
                                return l("css/".concat(t).concat(r, ".ngstyle.js"))
                            }, t.ngModuleJitUrl = function(e) { return l("".concat(u(e.type), "/module.ngfactory.js")) }, t.templateJitUrl = function(e, t) { return l("".concat(u(e), "/").concat(u(t.type), ".ngfactory.js")) }
                        })),
                        mS = Me((function(e, t) {
                            Object.defineProperty(t, "__esModule", { value: !0 });
                            class n {
                                constructor(e, t, n, r) { this.file = e, this.offset = t, this.line = n, this.col = r }
                                toString() { return null != this.offset ? "".concat(this.file.url, "@").concat(this.line, ":").concat(this.col) : this.file.url }
                                moveBy(e) {
                                    const t = this.file.content,
                                        r = t.length;
                                    let o = this.offset,
                                        u = this.line,
                                        i = this.col;
                                    for (; o > 0 && e < 0;)
                                        if (o--, e++, t.charCodeAt(o) == pS.$LF) {
                                            u--;
                                            const e = t.substr(0, o - 1).lastIndexOf(String.fromCharCode(pS.$LF));
                                            i = e > 0 ? o - e : o
                                        } else i--;
                                    for (; o < r && e > 0;) {
                                        const n = t.charCodeAt(o);
                                        o++, e--, n == pS.$LF ? (u++, i = 0) : i++
                                    }
                                    return new n(this.file, o, u, i)
                                }
                                getContext(e, t) {
                                    const n = this.file.content;
                                    let r = this.offset;
                                    if (null != r) {
                                        r > n.length - 1 && (r = n.length - 1);
                                        let o = r,
                                            u = 0,
                                            i = 0;
                                        for (; u < e && r > 0 && (r--, u++, "\n" != n[r] || ++i != t););
                                        for (u = 0, i = 0; u < e && o < n.length - 1 && (o++, u++, "\n" != n[o] || ++i != t););
                                        return { before: n.substring(r, this.offset), after: n.substring(this.offset, o + 1) }
                                    }
                                    return null
                                }
                            }
                            t.ParseLocation = n;
                            class r { constructor(e, t) { this.content = e, this.url = t } }
                            t.ParseSourceFile = r;
                            class o {
                                constructor(e, t, n = null) { this.start = e, this.end = t, this.details = n }
                                toString() { return this.start.file.content.substring(this.start.offset, this.end.offset) }
                            }
                            var u;
                            t.ParseSourceSpan = o, t.EMPTY_PARSE_LOCATION = new n(new r("", ""), 0, 0, 0), t.EMPTY_SOURCE_SPAN = new o(t.EMPTY_PARSE_LOCATION, t.EMPTY_PARSE_LOCATION),
                                function(e) { e[e.WARNING = 0] = "WARNING", e[e.ERROR = 1] = "ERROR" }(u = t.ParseErrorLevel || (t.ParseErrorLevel = {})), t.ParseError = class {
                                    constructor(e, t, n = u.ERROR) { this.span = e, this.msg = t, this.level = n }
                                    contextualMessage() { const e = this.span.start.getContext(100, 3); return e ? "".concat(this.msg, ' ("').concat(e.before, "[").concat(u[this.level], " ->]").concat(e.after, '")') : this.msg }
                                    toString() { const e = this.span.details ? ", ".concat(this.span.details) : ""; return "".concat(this.contextualMessage(), ": ").concat(this.span.start).concat(e) }
                                }, t.typeSourceSpan = function(e, t) {
                                    const u = hS.identifierModuleUrl(t),
                                        i = null != u ? "in ".concat(e, " ").concat(hS.identifierName(t), " in ").concat(u) : "in ".concat(e, " ").concat(hS.identifierName(t)),
                                        a = new r("", i);
                                    return new o(new n(a, -1, -1, -1), new n(a, -1, -1, -1))
                                }, t.r3JitTypeSourceSpan = function(e, t, u) {
                                    const i = "in ".concat(e, " ").concat(t, " in ").concat(u),
                                        a = new r("", i);
                                    return new o(new n(a, -1, -1, -1), new n(a, -1, -1, -1))
                                }
                        }));
                    const { ParseSourceSpan: gS } = mS, { htmlTrim: DS, getLeadingAndTrailingHtmlWhitespace: yS, hasHtmlWhitespace: ES, canHaveInterpolation: CS, getNodeCssStyleDisplay: bS, isDanglingSpaceSensitiveNode: vS, isIndentationSensitiveNode: AS, isLeadingSpaceSensitiveNode: FS, isTrailingSpaceSensitiveNode: xS, isWhitespaceSensitiveNode: SS } = lS, wS = [function(e) { return e.map((e => { if ("element" === e.type && e.tagDefinition.ignoreFirstLf && 0 !== e.children.length && "text" === e.children[0].type && "\n" === e.children[0].value[0]) { const [t, ...n] = e.children; return e.clone({ children: 1 === t.value.length ? n : [t.clone({ value: t.value.slice(1) }), ...n] }) } return e })) }, function(e) {
                        const t = e => "element" === e.type && e.prev && "ieConditionalStartComment" === e.prev.type && e.prev.sourceSpan.end.offset === e.startSourceSpan.start.offset && e.firstChild && "ieConditionalEndComment" === e.firstChild.type && e.firstChild.sourceSpan.start.offset === e.startSourceSpan.end.offset;
                        return e.map((e => {
                            if (e.children) {
                                const n = e.children.map(t);
                                if (n.some(Boolean)) {
                                    const t = [];
                                    for (let r = 0; r < e.children.length; r++) {
                                        const o = e.children[r];
                                        if (!n[r + 1])
                                            if (n[r]) {
                                                const e = o.prev,
                                                    n = o.firstChild,
                                                    r = new gS(e.sourceSpan.start, n.sourceSpan.end),
                                                    u = new gS(r.start, o.sourceSpan.end);
                                                t.push(o.clone({ condition: e.condition, sourceSpan: u, startSourceSpan: r, children: o.children.slice(1) }))
                                            } else t.push(o)
                                    }
                                    return e.clone({ children: t })
                                }
                            }
                            return e
                        }))
                    }, function(e) {
                        return function(e, t, n) {
                            return e.map((e => {
                                if (e.children) {
                                    const r = e.children.map(t);
                                    if (r.some(Boolean)) {
                                        const t = [];
                                        for (let o = 0; o < e.children.length; o++) {
                                            const u = e.children[o];
                                            if ("text" !== u.type && !r[o]) { t.push(u); continue }
                                            const i = "text" === u.type ? u : u.clone({ type: "text", value: n(u) });
                                            if (0 === t.length || "text" !== t[t.length - 1].type) { t.push(i); continue }
                                            const a = t.pop();
                                            t.push(a.clone({ value: a.value + i.value, sourceSpan: new gS(a.sourceSpan.start, i.sourceSpan.end) }))
                                        }
                                        return e.clone({ children: t })
                                    }
                                }
                                return e
                            }))
                        }(e, (e => "cdata" === e.type), (e => "<![CDATA[".concat(e.value, "]]>")))
                    }, function(e, t) {
                        if ("html" === t.parser) return e;
                        const n = /{{([\S\s]+?)}}/g;
                        return e.map((e => {
                            if (!CS(e)) return e;
                            const t = [];
                            for (const r of e.children) {
                                if ("text" !== r.type) { t.push(r); continue }
                                let e = r.sourceSpan.start,
                                    o = null;
                                const u = r.value.split(n);
                                for (let n = 0; n < u.length; n++, e = o) {
                                    const r = u[n];
                                    n % 2 != 0 ? (o = e.moveBy(r.length + 4), t.push({ type: "interpolation", sourceSpan: new gS(e, o), children: 0 === r.length ? [] : [{ type: "text", value: r, sourceSpan: new gS(e.moveBy(2), o.moveBy(-2)) }] })) : (o = e.moveBy(r.length), 0 !== r.length && t.push({ type: "text", value: r, sourceSpan: new gS(e, o) }))
                                }
                            }
                            return e.clone({ children: t })
                        }))
                    }, function(e) {
                        const t = "whitespace";
                        return e.map((e => {
                            if (!e.children) return e;
                            if (0 === e.children.length || 1 === e.children.length && "text" === e.children[0].type && 0 === DS(e.children[0].value).length) return e.clone({ children: [], hasDanglingSpaces: 0 !== e.children.length });
                            const n = SS(e),
                                r = AS(e);
                            return e.clone({
                                isWhitespaceSensitive: n,
                                isIndentationSensitive: r,
                                children: e.children.reduce(((e, r) => {
                                    if ("text" !== r.type || n) return e.concat(r);
                                    const o = [],
                                        { leadingWhitespace: u, text: i, trailingWhitespace: a } = yS(r.value);
                                    return u && o.push({ type: t }), i && o.push({ type: "text", value: i, sourceSpan: new gS(r.sourceSpan.start.moveBy(u.length), r.sourceSpan.end.moveBy(-a.length)) }), a && o.push({ type: t }), e.concat(o)
                                }), []).reduce(((e, n, r, o) => {
                                    if (n.type === t) return e;
                                    const u = 0 !== r && o[r - 1].type === t,
                                        i = r !== o.length - 1 && o[r + 1].type === t;
                                    return e.concat(Object.assign({}, n, { hasLeadingSpaces: u, hasTrailingSpaces: i }))
                                }), [])
                            })
                        }))
                    }, function(e, t) { return e.map((e => Object.assign(e, { cssDisplay: bS(e, t) }))) }, function(e) { return e.map((e => Object.assign(e, { isSelfClosing: !e.children || "element" === e.type && (e.tagDefinition.isVoid || e.startSourceSpan === e.endSourceSpan) }))) }, function(e, t) { return e.map((e => "element" !== e.type ? e : Object.assign(e, { hasHtmComponentClosingTag: e.endSourceSpan && /^<\s*\/\s*\/\s*>$/.test(t.originalText.slice(e.endSourceSpan.start.offset, e.endSourceSpan.end.offset)) }))) }, function(e, t) { return e.map((e => e.children ? 0 === e.children.length ? e.clone({ isDanglingSpaceSensitive: vS(e) }) : e.clone({ children: e.children.map((e => Object.assign({}, e, { isLeadingSpaceSensitive: FS(e, t), isTrailingSpaceSensitive: xS(e, t) }))).map(((e, t, n) => Object.assign({}, e, { isLeadingSpaceSensitive: (0 === t || n[t - 1].isTrailingSpaceSensitive) && e.isLeadingSpaceSensitive, isTrailingSpaceSensitive: (t === n.length - 1 || n[t + 1].isLeadingSpaceSensitive) && e.isTrailingSpaceSensitive }))) }) : e)) }, function(e) {
                        const t = e => "element" === e.type && 0 === e.attrs.length && 1 === e.children.length && "text" === e.firstChild.type && !ES(e.children[0].value) && !e.firstChild.hasLeadingSpaces && !e.firstChild.hasTrailingSpaces && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces && e.prev && "text" === e.prev.type && e.next && "text" === e.next.type;
                        return e.map((e => {
                            if (e.children) {
                                const n = e.children.map(t);
                                if (n.some(Boolean)) {
                                    const t = [];
                                    for (let r = 0; r < e.children.length; r++) {
                                        const o = e.children[r];
                                        if (n[r]) {
                                            const n = t.pop(),
                                                u = e.children[++r],
                                                { isTrailingSpaceSensitive: i, hasTrailingSpaces: a } = u;
                                            t.push(n.clone({ value: n.value + "<".concat(o.rawName, ">") + o.firstChild.value + "</".concat(o.rawName, ">") + u.value, sourceSpan: new gS(n.sourceSpan.start, u.sourceSpan.end), isTrailingSpaceSensitive: i, hasTrailingSpaces: a }))
                                        } else t.push(o)
                                    }
                                    return e.clone({ children: t })
                                }
                            }
                            return e
                        }))
                    }];
                    const { builders: { concat: TS, group: BS } } = cn;
                    var kS = {
                            isVueEventBindingExpression: function(e) { const t = e.trim(); return /^([\w$]+|\([^)]*?\))\s*=>|^function\s*\(/.test(t) || /^[$A-Z_a-z][\w$]*(?:\.[$A-Z_a-z][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[$A-Z_a-z][\w$]*])*$/.test(t) },
                            printVueFor: function(e, t) {
                                const { left: n, operator: r, right: o } = function(e) {
                                    const t = /,([^,\]}]*)(?:,([^,\]}]*))?$/,
                                        n = e.match(/([^]*?)\s+(in|of)\s+([^]*)/);
                                    if (!n) return;
                                    const r = {};
                                    r.for = n[3].trim();
                                    const o = n[1].trim().replace(/^\(|\)$/g, ""),
                                        u = o.match(t);
                                    return u ? (r.alias = o.replace(t, ""), r.iterator1 = u[1].trim(), u[2] && (r.iterator2 = u[2].trim())) : r.alias = o, { left: "".concat([r.alias, r.iterator1, r.iterator2].filter(Boolean).join(",")), operator: n[2], right: r.for }
                                }(e);
                                return TS([BS(t("function _(".concat(n, ") {}"), { parser: "babel", __isVueForBindingLeft: !0 })), " ", r, " ", t(o, { parser: "__js_expression" }, { stripTrailingHardline: !0 })])
                            },
                            printVueBindings: function(e, t) { return t("function _(".concat(e, ") {}"), { parser: "babel", __isVueBindings: !0 }, { stripTrailingHardline: !0 }) }
                        },
                        NS = Me((function(e) {
                            ! function(t, n) { e.exports ? e.exports = n() : t.parseSrcset = n() }(Ie, (function() {
                                return function(e, t) {
                                    var n = t && t.logger || console;

                                    function r(e) { return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e }

                                    function o(t) { var n, r = t.exec(e.substring(D)); if (r) return n = r[0], D += n.length, n }
                                    for (var u, i, a, s, c, l = e.length, p = /^[ \t\n\r\u000c]+/, d = /^[, \t\n\r\u000c]+/, f = /^[^ \t\n\r\u000c]+/, h = /[,]+$/, m = /^\d+$/, g = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, D = 0, y = [];;) {
                                        if (o(d), D >= l) return y;
                                        u = o(f), i = [], "," === u.slice(-1) ? (u = u.replace(h, ""), C()) : E()
                                    }

                                    function E() {
                                        for (o(p), a = "", s = "in descriptor";;) {
                                            if (c = e.charAt(D), "in descriptor" === s)
                                                if (r(c)) a && (i.push(a), a = "", s = "after descriptor");
                                                else {
                                                    if ("," === c) return D += 1, a && i.push(a), void C();
                                                    if ("(" === c) a += c, s = "in parens";
                                                    else {
                                                        if ("" === c) return a && i.push(a), void C();
                                                        a += c
                                                    }
                                                }
                                            else if ("in parens" === s)
                                                if (")" === c) a += c, s = "in descriptor";
                                                else {
                                                    if ("" === c) return i.push(a), void C();
                                                    a += c
                                                }
                                            else if ("after descriptor" === s)
                                                if (r(c));
                                                else {
                                                    if ("" === c) return void C();
                                                    s = "in descriptor", D -= 1
                                                }
                                            D += 1
                                        }
                                    }

                                    function C() {
                                        var t, r, o, a, s, c, l, p, d, f = !1,
                                            h = {};
                                        for (a = 0; a < i.length; a++) c = (s = i[a])[s.length - 1], l = s.substring(0, s.length - 1), p = parseInt(l, 10), d = parseFloat(l), m.test(l) && "w" === c ? ((t || r) && (f = !0), 0 === p ? f = !0 : t = p) : g.test(l) && "x" === c ? ((t || r || o) && (f = !0), d < 0 ? f = !0 : r = d) : m.test(l) && "h" === c ? ((o || r) && (f = !0), 0 === p ? f = !0 : o = p) : f = !0;
                                        f ? n && n.error && n.error("Invalid srcset descriptor found in '" + e + "' at '" + s + "'.") : (h.url = u, t && (h.w = t), r && (h.d = r), o && (h.h = o), y.push(h))
                                    }
                                }
                            }))
                        }));
                    const { builders: { concat: PS, ifBreak: OS, join: _S, line: LS } } = cn;
                    var IS = {
                        printImgSrcset: function(e) {
                            const t = NS(e, { logger: { error(e) { throw new Error(e) } } }),
                                n = t.some((({ w: e }) => e)),
                                r = t.some((({ h: e }) => e));
                            if (n + r + t.some((({ d: e }) => e)) > 1) throw new Error("Mixed descriptor in srcset is not supported");
                            const o = n ? "w" : r ? "h" : "d",
                                u = n ? "w" : r ? "h" : "x",
                                i = e => Math.max(...e),
                                a = t.map((e => e.url)),
                                s = i(a.map((e => e.length))),
                                c = t.map((e => e[o])).map((e => e ? e.toString() : "")),
                                l = c.map((e => { const t = e.indexOf("."); return -1 === t ? e.length : t })),
                                p = i(l);
                            return _S(PS([",", LS]), a.map(((e, t) => {
                                const n = [e],
                                    r = c[t];
                                if (r) {
                                    const o = s - e.length + 1,
                                        i = p - l[t],
                                        a = " ".repeat(o + i);
                                    n.push(OS(a, " "), r + u)
                                }
                                return PS(n)
                            })))
                        },
                        printClassNames: function(e) { return e.trim().split(/\s+/).join(" ") }
                    };
                    const { builders: MS, utils: { mapDoc: jS, normalizeParts: RS } } = cn, { replaceEndOfLineWith: qS } = Lt, { print: VS } = MC, { breakParent: $S, dedentToRoot: WS, fill: US, group: JS, hardline: zS, ifBreak: HS, indent: GS, join: XS, line: YS, literalline: KS, softline: QS } = MS, { htmlTrimPreserveIndentation: ZS, splitByHtmlWhitespace: ew, countChars: tw, countParents: nw, dedentString: rw, forceBreakChildren: ow, forceBreakContent: uw, forceNextEmptyLine: iw, getLastDescendant: aw, getPrettierIgnoreAttributeCommentData: sw, hasPrettierIgnore: cw, inferScriptParser: lw, isVueCustomBlock: pw, isVueNonHtmlBlock: dw, isVueSlotAttribute: fw, isVueSfcBindingsAttribute: hw, isScriptLikeTag: mw, isTextLikeNode: gw, preferHardlineAsLeadingSpaces: Dw, shouldNotPrintClosingTag: yw, shouldPreserveContent: Ew, unescapeQuoteEntities: Cw, isPreLikeNode: bw } = lS, { insertPragma: vw } = { hasPragma: function(e) { return /^\s*<!--\s*@(format|prettier)\s*-->/.test(e) }, insertPragma: function(e) { return "\x3c!-- @format --\x3e\n\n" + e.replace(/^\s*\n/, "") } }, { locStart: Aw, locEnd: Fw } = { locStart: function(e) { return e.sourceSpan.start.offset }, locEnd: function(e) { return e.sourceSpan.end.offset } }, { printVueFor: xw, printVueBindings: Sw, isVueEventBindingExpression: ww } = kS, { printImgSrcset: Tw, printClassNames: Bw } = IS;

                    function kw(e) { const t = RS(e); return 0 === t.length ? "" : 1 === t.length ? t[0] : MS.concat(t) }

                    function Nw(e, t, n) {
                        const r = e.getValue();
                        if (ow(r)) return kw([$S, kw(e.map((e => {
                            const t = e.getValue(),
                                n = t.prev ? i(t.prev, t) : "";
                            return kw([n ? kw([n, iw(t.prev) ? zS : ""]) : "", u(e)])
                        }), "children"))]);
                        const o = r.children.map((() => Symbol("")));
                        return kw(e.map(((e, t) => {
                            const n = e.getValue();
                            if (gw(n)) { if (n.prev && gw(n.prev)) { const t = i(n.prev, n); if (t) return iw(n.prev) ? kw([zS, zS, u(e)]) : kw([t, u(e)]) } return u(e) }
                            const r = [],
                                a = [],
                                s = [],
                                c = [],
                                l = n.prev ? i(n.prev, n) : "",
                                p = n.next ? i(n, n.next) : "";
                            return l && (iw(n.prev) ? r.push(zS, zS) : l === zS ? r.push(zS) : gw(n.prev) ? a.push(l) : a.push(HS("", QS, { groupId: o[t - 1] }))), p && (iw(n) ? gw(n.next) && c.push(zS, zS) : p === zS ? gw(n.next) && c.push(zS) : s.push(p)), kw([].concat(r, JS(kw([kw(a), JS(kw([u(e), kw(s)]), { id: o[t] })])), c))
                        }), "children"));

                        function u(e) { const r = e.getValue(); return cw(r) ? kw([].concat(Jw(r, t), qS(t.originalText.slice(Aw(r) + (r.prev && qw(r.prev) ? Gw(r).length : 0), Fw(r) - (r.next && $w(r.next) ? Kw(r, t).length : 0)), KS), Hw(r, t))) : n(e) }

                        function i(e, t) { return gw(e) && gw(t) ? e.isTrailingSpaceSensitive ? e.hasTrailingSpaces ? Dw(t) ? zS : YS : "" : Dw(t) ? zS : QS : qw(e) && (cw(t) || t.firstChild || t.isSelfClosing || "element" === t.type && 0 !== t.attrs.length) || "element" === e.type && e.isSelfClosing && $w(t) ? "" : !t.isLeadingSpaceSensitive || Dw(t) || $w(t) && e.lastChild && Uw(e.lastChild) && e.lastChild.lastChild && Uw(e.lastChild.lastChild) ? zS : t.hasLeadingSpaces ? YS : QS }
                    }

                    function Pw(e, t) {
                        let n = e.startSourceSpan.end.offset;
                        e.firstChild && Vw(e.firstChild) && (n -= Xw(e).length);
                        let r = e.endSourceSpan.start.offset;
                        return e.lastChild && Uw(e.lastChild) ? r += Yw(e, t).length : Ww(e) && (r -= Kw(e.lastChild, t).length), t.originalText.slice(n, r)
                    }

                    function Ow(e, t, n) {
                        const r = e.getValue();
                        if (!r.attrs || 0 === r.attrs.length) return r.isSelfClosing ? " " : "";
                        const o = r.prev && "comment" === r.prev.type && sw(r.prev.value),
                            u = "boolean" == typeof o ? () => o : Array.isArray(o) ? e => o.includes(e.rawName) : () => !1,
                            i = e.map((e => { const r = e.getValue(); return u(r) ? kw(qS(t.originalText.slice(Aw(r), Fw(r)), KS)) : n(e) }), "attrs"),
                            a = "element" === r.type && "script" === r.fullName && 1 === r.attrs.length && "src" === r.attrs[0].fullName && 0 === r.children.length,
                            s = [GS(kw([a ? " " : YS, XS(YS, i)]))];
                        return r.firstChild && Vw(r.firstChild) || r.isSelfClosing && Ww(r.parent) || a ? s.push(r.isSelfClosing ? " " : "") : s.push(r.isSelfClosing ? YS : QS), kw(s)
                    }

                    function _w(e, t, n) { const r = e.getValue(); return kw([Lw(r, t), Ow(e, t, n), r.isSelfClosing ? "" : Iw(r)]) }

                    function Lw(e, t) { return e.prev && qw(e.prev) ? "" : kw([Jw(e, t), Gw(e)]) }

                    function Iw(e) { return e.firstChild && Vw(e.firstChild) ? "" : Xw(e) }

                    function Mw(e, t) { return kw([e.isSelfClosing ? "" : jw(e, t), Rw(e, t)]) }

                    function jw(e, t) { return e.lastChild && Uw(e.lastChild) ? "" : kw([zw(e, t), Yw(e, t)]) }

                    function Rw(e, t) { return (e.next ? $w(e.next) : Ww(e.parent)) ? "" : kw([Kw(e, t), Hw(e, t)]) }

                    function qw(e) { return e.next && !gw(e.next) && gw(e) && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces }

                    function Vw(e) { return !e.prev && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces }

                    function $w(e) { return e.prev && "docType" !== e.prev.type && !gw(e.prev) && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces }

                    function Ww(e) { return e.lastChild && e.lastChild.isTrailingSpaceSensitive && !e.lastChild.hasTrailingSpaces && !gw(aw(e.lastChild)) && !bw(e) }

                    function Uw(e) { return !e.next && !e.hasTrailingSpaces && e.isTrailingSpaceSensitive && gw(aw(e)) }

                    function Jw(e, t) { return Vw(e) ? Xw(e.parent) : $w(e) ? Kw(e.prev, t) : "" }

                    function zw(e, t) { return Ww(e) ? Kw(e.lastChild, t) : "" }

                    function Hw(e, t) { return Uw(e) ? Yw(e.parent, t) : qw(e) ? Gw(e.next) : "" }

                    function Gw(e) {
                        switch (e.type) {
                            case "ieConditionalComment":
                            case "ieConditionalStartComment":
                                return "\x3c!--[if ".concat(e.condition);
                            case "ieConditionalEndComment":
                                return "\x3c!--<!";
                            case "interpolation":
                                return "{{";
                            case "docType":
                                return "<!DOCTYPE";
                            case "element":
                                if (e.condition) return "\x3c!--[if ".concat(e.condition, "]>\x3c!--\x3e<").concat(e.rawName);
                            default:
                                return "<".concat(e.rawName)
                        }
                    }

                    function Xw(e) {
                        switch (zi(!e.isSelfClosing), e.type) {
                            case "ieConditionalComment":
                                return "]>";
                            case "element":
                                if (e.condition) return ">\x3c!--<![endif]--\x3e";
                            default:
                                return ">"
                        }
                    }

                    function Yw(e, t) {
                        if (zi(!e.isSelfClosing), yw(e, t)) return "";
                        switch (e.type) {
                            case "ieConditionalComment":
                                return "<!";
                            case "element":
                                if (e.hasHtmComponentClosingTag) return "<//";
                            default:
                                return "</".concat(e.rawName)
                        }
                    }

                    function Kw(e, t) {
                        if (yw(e, t)) return "";
                        switch (e.type) {
                            case "ieConditionalComment":
                            case "ieConditionalEndComment":
                                return "[endif]--\x3e";
                            case "ieConditionalStartComment":
                                return "]>\x3c!--\x3e";
                            case "interpolation":
                                return "}}";
                            case "element":
                                if (e.isSelfClosing) return "/>";
                            default:
                                return ">"
                        }
                    }

                    function Qw(e, t = e.value) { return e.parent.isWhitespaceSensitive ? e.parent.isIndentationSensitive ? qS(t, KS) : qS(rw(ZS(t)), zS) : XS(YS, ew(t)).parts }
                    var Zw = {
                        preprocess: function(e, t) { for (const n of wS) e = n(e, t); return e },
                        print: function(e, t, n) {
                            const r = e.getValue();
                            switch (r.type) {
                                case "front-matter":
                                    return kw(qS(r.raw, KS));
                                case "root":
                                    return t.__onHtmlRoot && t.__onHtmlRoot(r), MS.concat([JS(Nw(e, t, n)), zS]);
                                case "element":
                                case "ieConditionalComment":
                                    {
                                        if (Ew(r, t)) return kw([].concat(Jw(r, t), JS(_w(e, t, n)), qS(Pw(r, t), KS), Mw(r, t), Hw(r, t)));
                                        const u = 1 === r.children.length && "interpolation" === r.firstChild.type && r.firstChild.isLeadingSpaceSensitive && !r.firstChild.hasLeadingSpaces && r.lastChild.isTrailingSpaceSensitive && !r.lastChild.hasTrailingSpaces,
                                            i = Symbol("element-attr-group-id");
                                        return kw([JS(kw([JS(_w(e, t, n), { id: i }), 0 === r.children.length ? r.hasDanglingSpaces && r.isDanglingSpaceSensitive ? YS : "" : kw([uw(r) ? $S : "", (o = kw([u ? HS(QS, "", { groupId: i }) : r.firstChild.hasLeadingSpaces && r.firstChild.isLeadingSpaceSensitive ? YS : "text" === r.firstChild.type && r.isWhitespaceSensitive && r.isIndentationSensitive ? WS(QS) : QS, Nw(e, t, n)]), u ? HS(GS(o), o, { groupId: i }) : !mw(r) && !pw(r, t) || "root" !== r.parent.type || "vue" !== t.parser || t.vueIndentScriptAndStyle ? GS(o) : o), (r.next ? $w(r.next) : Ww(r.parent)) ? r.lastChild.hasTrailingSpaces && r.lastChild.isTrailingSpaceSensitive ? " " : "" : u ? HS(QS, "", { groupId: i }) : r.lastChild.hasTrailingSpaces && r.lastChild.isTrailingSpaceSensitive ? YS : ("comment" === r.lastChild.type || "text" === r.lastChild.type && r.isWhitespaceSensitive && r.isIndentationSensitive) && new RegExp("\\n[\\t ]{".concat(t.tabWidth * nw(e, (e => e.parent && "root" !== e.parent.type)), "}$")).test(r.lastChild.value) ? "" : QS])])), Mw(r, t)])
                                    }
                                case "ieConditionalStartComment":
                                case "ieConditionalEndComment":
                                    return kw([Lw(r), Rw(r)]);
                                case "interpolation":
                                    return kw([Lw(r, t), kw(e.map(n, "children")), Rw(r, t)]);
                                case "text":
                                    if ("interpolation" === r.parent.type) {
                                        const e = /\n[^\S\n]*?$/,
                                            t = e.test(r.value),
                                            n = t ? r.value.replace(e, "") : r.value;
                                        return kw([kw(qS(n, KS)), t ? zS : ""])
                                    }
                                    return US(RS([].concat(Jw(r, t), Qw(r), Hw(r, t))));
                                case "docType":
                                    return kw([JS(kw([Lw(r, t), " ", r.value.replace(/^html\b/i, "html").replace(/\s+/g, " ")])), Rw(r, t)]);
                                case "comment":
                                    return kw([Jw(r, t), kw(qS(t.originalText.slice(Aw(r), Fw(r)), KS)), Hw(r, t)]);
                                case "attribute":
                                    {
                                        if (null === r.value) return r.rawName;
                                        const e = Cw(r.value),
                                            t = tw(e, "'") < tw(e, '"') ? "'" : '"';
                                        return kw([r.rawName, kw(["=", t, kw(qS('"' === t ? e.replace(/"/g, "&quot;") : e.replace(/'/g, "&apos;"), KS)), t])])
                                    }
                                default:
                                    throw new Error("Unexpected node type ".concat(r.type))
                            }
                            var o
                        },
                        insertPragma: vw,
                        massageAstNode: Px,
                        embed: function(e, t, n, r) {
                            const o = e.getValue();
                            switch (o.type) {
                                case "element":
                                    if (mw(o) || "interpolation" === o.type) return;
                                    if (!o.isSelfClosing && dw(o, r)) {
                                        const u = lw(o, r);
                                        if (!u) return;
                                        const i = Pw(o, r);
                                        let a = /^\s*$/.test(i),
                                            s = "";
                                        return a || (s = n(ZS(i), { parser: u }, { stripTrailingHardline: !0 }), a = "" === s), kw([Jw(o, r), JS(_w(e, r, t)), a ? "" : zS, s, a ? "" : zS, Mw(o, r), Hw(o, r)])
                                    }
                                    break;
                                case "text":
                                    if (mw(o.parent)) {
                                        const e = lw(o.parent);
                                        if (e) {
                                            const t = "markdown" === e ? rw(o.value.replace(/^[^\S\n]*?\n/, "")) : o.value,
                                                u = { parser: e };
                                            if ("html" === r.parser && "babel" === e) {
                                                let e = "script";
                                                const { attrMap: t } = o.parent;
                                                t && ("module" === t.type || "text/babel" === t.type && "module" === t["data-type"]) && (e = "module"), u.__babelSourceType = e
                                            }
                                            return MS.concat([kw([$S, Jw(o, r), n(t, u, { stripTrailingHardline: !0 }), Hw(o, r)])])
                                        }
                                    } else if ("interpolation" === o.parent.type) return kw([GS(kw([YS, n(o.value, Object.assign({ __isInHtmlInterpolation: !0 }, "angular" === r.parser ? { parser: "__ng_interpolation", trailingComma: "none" } : "vue" === r.parser ? { parser: "__vue_expression" } : { parser: "__js_expression" }), { stripTrailingHardline: !0 })])), o.parent.next && $w(o.parent.next) ? " " : YS]);
                                    break;
                                case "attribute":
                                    {
                                        if (!o.value) break;
                                        if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(r.originalText.slice(o.valueSpan.start.offset, o.valueSpan.end.offset))) return kw([o.rawName, "=", o.value]);
                                        if ("lwc" === r.parser && /^{[\S\s]*}$/.test(r.originalText.slice(o.valueSpan.start.offset, o.valueSpan.end.offset))) return kw([o.rawName, "=", o.value]);
                                        const e = function(e, t, n) {
                                            const r = t => new RegExp(t.join("|")).test(e.fullName),
                                                o = () => Cw(e.value);
                                            let u = !1;
                                            const i = (e, t) => { const n = "NGRoot" === e.type ? "NGMicrosyntax" === e.node.type && 1 === e.node.body.length && "NGMicrosyntaxExpression" === e.node.body[0].type ? e.node.body[0].expression : e.node : "JsExpressionRoot" === e.type ? e.node : e;!n || "ObjectExpression" !== n.type && "ArrayExpression" !== n.type && ("__vue_expression" !== t.parser || "TemplateLiteral" !== n.type && "StringLiteral" !== n.type) || (u = !0) },
                                                a = (e, t = !0) => JS(kw([GS(kw([QS, e])), t ? QS : ""])),
                                                s = e => u ? (e => JS(e))(e) : a(e),
                                                c = (e, n) => t(e, Object.assign({ __onHtmlBindingRoot: i }, n));
                                            if ("srcset" === e.fullName && ("img" === e.parent.fullName || "source" === e.parent.fullName)) return a(Tw(o()));
                                            if ("class" === e.fullName && !n.parentParser) { const e = o(); if (!e.includes("{{")) return Bw(e) }
                                            if ("style" === e.fullName && !n.parentParser) { const e = o(); if (!e.includes("{{")) return a(c(e, { parser: "css", __isHTMLStyleAttribute: !0 })) }
                                            if ("vue" === n.parser) {
                                                if ("v-for" === e.fullName) return xw(o(), c);
                                                if (fw(e) || hw(e, n)) return Sw(o(), c);
                                                const t = ["^:", "^v-bind:"],
                                                    u = ["^v-"];
                                                if (r(["^@", "^v-on:"])) { const e = o(); return s(c(e, { parser: ww(e) ? "__js_expression" : "__vue_event_binding" })) }
                                                if (r(t)) return s(c(o(), { parser: "__vue_expression" }));
                                                if (r(u)) return s(c(o(), { parser: "__js_expression" }))
                                            }
                                            if ("angular" === n.parser) {
                                                const t = (e, t) => c(e, Object.assign({}, t, { trailingComma: "none" })),
                                                    n = ["^\\*"],
                                                    u = ["^\\[.+\\]$", "^bind(on)?-", "^ng-(if|show|hide|class|style)$"],
                                                    i = ["^i18n(-.+)?$"];
                                                if (r(["^\\(.+\\)$", "^on-"])) return s(t(o(), { parser: "__ng_action" }));
                                                if (r(u)) return s(t(o(), { parser: "__ng_binding" }));
                                                if (r(i)) { const t = o().trim(); return a(US(Qw(e, t)), !t.includes("@@")) }
                                                if (r(n)) return s(t(o(), { parser: "__ng_directive" }));
                                                const l = /{{([\S\s]+?)}}/g,
                                                    p = o();
                                                if (l.test(p)) {
                                                    const e = [];
                                                    return p.split(l).forEach(((n, r) => {
                                                        if (r % 2 == 0) e.push(kw(qS(n, KS)));
                                                        else try { e.push(JS(kw(["{{", GS(kw([YS, t(n, { parser: "__ng_interpolation", __isInHtmlInterpolation: !0 })])), YS, "}}"]))) } catch (t) { e.push("{{", kw(qS(n, KS)), "}}") }
                                                    })), JS(kw(e))
                                                }
                                            }
                                            return null
                                        }(o, ((e, t) => n(e, Object.assign({ __isInHtmlAttribute: !0 }, t), { stripTrailingHardline: !0 })), r);
                                        if (e) return kw([o.rawName, '="', JS(jS(e, (e => "string" == typeof e ? e.replace(/"/g, "&quot;") : e))), '"']);
                                        break
                                    }
                                case "front-matter":
                                    return VS(o, n)
                            }
                        }
                    };
                    const eT = "HTML";
                    var tT = { htmlWhitespaceSensitivity: { since: "1.15.0", category: eT, type: "choice", default: "css", description: "How to handle whitespaces in HTML.", choices: [{ value: "css", description: "Respect the default value of CSS display property." }, { value: "strict", description: "Whitespaces are considered sensitive." }, { value: "ignore", description: "Whitespaces are considered insensitive." }] }, vueIndentScriptAndStyle: { since: "1.19.0", category: eT, type: "boolean", default: !1, description: "Indent script and style tags in Vue files." } },
                        nT = { name: "HTML", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".html", ".htm", ".html.hl", ".inc", ".st", ".xht", ".xhtml"], languageId: 146 },
                        rT = { languages: [vs(nT, (() => ({ name: "Angular", since: "1.15.0", parsers: ["angular"], vscodeLanguageIds: ["html"], extensions: [".component.html"], filenames: [] }))), vs(nT, (e => ({ since: "1.15.0", parsers: ["html"], vscodeLanguageIds: ["html"], extensions: e.extensions.concat([".mjml"]) }))), vs(nT, (() => ({ name: "Lightning Web Components", since: "1.17.0", parsers: ["lwc"], vscodeLanguageIds: ["html"], extensions: [], filenames: [] }))), vs({ name: "Vue", type: "markup", color: "#2c3e50", extensions: [".vue"], tmScope: "text.html.vue", aceMode: "html", languageId: 391 }, (() => ({ since: "1.10.0", parsers: ["vue"], vscodeLanguageIds: ["vue"] })))], printers: { html: Zw }, options: tT, parsers: {get html() { return {}.parsers.html }, get vue() { return {}.parsers.vue }, get angular() { return {}.parsers.angular }, get lwc() { return {}.parsers.lwc } } };
                    const { getLast: oT } = Lt;

                    function uT(e, t) { return e && "string" == typeof e.type && (!t || t.includes(e.type)) }

                    function iT(e) { return "prettier-ignore" === e.value.trim() }

                    function aT(e) { return e && e.leadingComments && 0 !== e.leadingComments.length }

                    function sT(e) { return e && e.middleComments && 0 !== e.middleComments.length }

                    function cT(e) { return e && e.indicatorComment }

                    function lT(e) { return e && e.trailingComment }

                    function pT(e) { return e && e.endComments && 0 !== e.endComments.length }

                    function dT(e) { const t = []; let n; for (const r of e.split(/( +)/g)) " " !== r ? " " === n ? t.push(r) : t.push((t.pop() || "") + r) : void 0 === n && t.unshift(""), n = r; return " " === n && t.push((t.pop() || "") + " "), "" === t[0] && (t.shift(), t.unshift(" " + (t.shift() || ""))), t }
                    var fT = {
                        getLast: oT,
                        getAncestorCount: function(e, t) {
                            let n = 0;
                            const r = e.stack.length - 1;
                            for (let o = 0; o < r; o++) {
                                const r = e.stack[o];
                                uT(r) && t(r) && n++
                            }
                            return n
                        },
                        isNode: uT,
                        isEmptyNode: function(e) { return !(e.children && 0 !== e.children.length || function(e) { return aT(e) || sT(e) || cT(e) || lT(e) || pT(e) }(e)) },
                        mapNode: function e(t, n, r) { return n("children" in t ? Object.assign({}, t, { children: t.children.map((r => e(r, n, t))) }) : t, r) },
                        defineShortcut: function(e, t, n) { Object.defineProperty(e, t, { get: n, enumerable: !1 }) },
                        isNextLineEmpty: function(e, t) { let n = 0; const r = t.length; for (let o = e.position.end.offset - 1; o < r; o++) { const e = t[o]; if ("\n" === e && n++, 1 === n && /\S/.test(e)) return !1; if (2 === n) return !0 } return !1 },
                        isLastDescendantNode: function(e) {
                            switch (e.getValue().type) {
                                case "tag":
                                case "anchor":
                                case "comment":
                                    return !1
                            }
                            const t = e.stack.length;
                            for (let n = 1; n < t; n++) {
                                const t = e.stack[n],
                                    r = e.stack[n - 1];
                                if (Array.isArray(r) && "number" == typeof t && t !== r.length - 1) return !1
                            }
                            return !0
                        },
                        getBlockValueLineContents: function(e, { parentIndent: t, isLastDescendant: n, options: r }) {
                            const o = e.position.start.line === e.position.end.line ? "" : r.originalText.slice(e.position.start.offset, e.position.end.offset).match(/^[^\n]*?\n([\S\s]*)$/)[1],
                                u = null === e.indent ? (i = o.match(/^( *)\S/m)) ? i[1].length : 1 / 0 : e.indent - 1 + t;
                            var i;
                            const a = o.split("\n").map((e => e.slice(u)));
                            return "preserve" === r.proseWrap || "blockLiteral" === e.type ? s(a.map((e => 0 === e.length ? [] : [e]))) : s(a.map((e => 0 === e.length ? [] : dT(e))).reduce(((e, t, n) => 0 === n || 0 === a[n - 1].length || 0 === t.length || /^\s/.test(t[0]) || /^\s|\s$/.test(oT(e)) ? e.concat([t]) : e.concat([e.pop().concat(t)])), []).map((e => e.reduce(((e, t) => 0 !== e.length && /\s$/.test(oT(e)) ? e.concat(e.pop() + " " + t) : e.concat(t)), []))).map((e => "never" === r.proseWrap ? [e.join(" ")] : e)));

                            function s(t) { if ("keep" === e.chomping) return 0 === oT(t).length ? t.slice(0, -1) : t; let r = 0; for (let e = t.length - 1; e >= 0 && 0 === t[e].length; e--) r++; return 0 === r ? t : r >= 2 && !n ? t.slice(0, -(r - 1)) : t.slice(0, -r) }
                        },
                        getFlowScalarLineContents: function(e, t, n) { const r = t.split("\n").map(((e, t, n) => 0 === t && t === n.length - 1 ? e : 0 !== t && t !== n.length - 1 ? e.trim() : 0 === t ? e.trimEnd() : e.trimStart())); return "preserve" === n.proseWrap ? r.map((e => 0 === e.length ? [] : [e])) : r.map((e => 0 === e.length ? [] : dT(e))).reduce(((t, n, o) => 0 === o || 0 === r[o - 1].length || 0 === n.length || "quoteDouble" === e && oT(oT(t)).endsWith("\\") ? t.concat([n]) : t.concat([t.pop().concat(n)])), []).map((e => "never" === n.proseWrap ? [e.join(" ")] : e)) },
                        getLastDescendantNode: function e(t) { return "children" in t && 0 !== t.children.length ? e(oT(t.children)) : t },
                        hasPrettierIgnore: function(e) { const t = e.getValue(); if ("documentBody" === t.type) { const t = e.getParentNode(); return pT(t.head) && iT(oT(t.head.endComments)) } return aT(t) && iT(oT(t.leadingComments)) },
                        hasLeadingComments: aT,
                        hasMiddleComments: sT,
                        hasIndicatorComment: cT,
                        hasTrailingComment: lT,
                        hasEndComments: pT
                    };
                    const hT = cn.builders,
                        { conditionalGroup: mT, breakParent: gT, concat: DT, dedent: yT, dedentToRoot: ET, fill: CT, group: bT, hardline: vT, ifBreak: AT, join: FT, line: xT, lineSuffix: ST, literalline: wT, markAsRoot: TT, softline: BT } = hT,
                        { replaceEndOfLineWith: kT, isPreviousLineEmpty: NT } = Lt,
                        { insertPragma: PT, isPragma: OT } = { isPragma: function(e) { return /^\s*@(prettier|format)\s*$/.test(e) }, hasPragma: function(e) { return /^\s*#[^\S\n]*@(prettier|format)\s*?(\n|$)/.test(e) }, insertPragma: function(e) { return "# @format\n\n".concat(e) } },
                        { locStart: _T } = { locStart: function(e) { return e.position.start.offset }, locEnd: function(e) { return e.position.end.offset } },
                        { getAncestorCount: LT, getBlockValueLineContents: IT, getFlowScalarLineContents: MT, getLast: jT, getLastDescendantNode: RT, hasLeadingComments: qT, hasMiddleComments: VT, hasIndicatorComment: $T, hasTrailingComment: WT, hasEndComments: UT, hasPrettierIgnore: JT, isLastDescendantNode: zT, isNextLineEmpty: HT, isNode: GT, isEmptyNode: XT, defineShortcut: YT, mapNode: KT } = fT;

                    function QT(e) {
                        switch (e.type) {
                            case "document":
                                YT(e, "head", (() => e.children[0])), YT(e, "body", (() => e.children[1]));
                                break;
                            case "documentBody":
                            case "sequenceItem":
                            case "flowSequenceItem":
                            case "mappingKey":
                            case "mappingValue":
                                YT(e, "content", (() => e.children[0]));
                                break;
                            case "mappingItem":
                            case "flowMappingItem":
                                YT(e, "key", (() => e.children[0])), YT(e, "value", (() => e.children[1]))
                        }
                        return e
                    }

                    function ZT(e, t, n, r, o) {
                        switch (e.type) {
                            case "root":
                                return DT([FT(vT, n.map(((t, r) => {
                                    const u = e.children[r],
                                        i = e.children[r + 1];
                                    return DT([o(t), rB(u, i) ? DT([vT, "...", WT(u) ? DT([" ", n.call(o, "trailingComment")]) : ""]) : !i || WT(i.head) ? "" : DT([vT, "---"])])
                                }), "children")), 0 === e.children.length || (i = RT(e), GT(i, ["blockLiteral", "blockFolded"]) && "keep" === i.chomping) ? "" : vT]);
                            case "document":
                                { const u = t.children[n.getName() + 1]; return FT(vT, ["head" === oB(e, u, t, r) ? FT(vT, [0 === e.head.children.length && 0 === e.head.endComments.length ? "" : n.call(o, "head"), DT(["---", WT(e.head) ? DT([" ", n.call(o, "head", "trailingComment")]) : ""])].filter(Boolean)) : "", nB(e) ? n.call(o, "body") : ""].filter(Boolean)) }
                            case "documentHead":
                                return FT(vT, [].concat(n.map(o, "children"), n.map(o, "endComments")));
                            case "documentBody":
                                {
                                    const t = FT(vT, n.map(o, "children")).parts,
                                        r = FT(vT, n.map(o, "endComments")).parts,
                                        u = 0 === t.length || 0 === r.length ? "" : (e => GT(e, ["blockFolded", "blockLiteral"]) ? "keep" === e.chomping ? "" : DT([vT, vT]) : vT)(RT(e));
                                    return DT([].concat(t, u, r))
                                }
                            case "directive":
                                return DT(["%", FT(" ", [e.name].concat(e.parameters))]);
                            case "comment":
                                return DT(["#", e.value]);
                            case "alias":
                                return DT(["*", e.value]);
                            case "tag":
                                return r.originalText.slice(e.position.start.offset, e.position.end.offset);
                            case "anchor":
                                return DT(["&", e.value]);
                            case "plain":
                                return lB(e.type, r.originalText.slice(e.position.start.offset, e.position.end.offset), r);
                            case "quoteDouble":
                            case "quoteSingle":
                                {
                                    const t = "'",
                                        n = '"',
                                        o = r.originalText.slice(e.position.start.offset + 1, e.position.end.offset - 1);
                                    if ("quoteSingle" === e.type && o.includes("\\") || "quoteDouble" === e.type && /\\[^"]/.test(o)) { const u = "quoteDouble" === e.type ? n : t; return DT([u, lB(e.type, o, r), u]) }
                                    if (o.includes(n)) return DT([t, lB(e.type, "quoteDouble" === e.type ? o.replace(/\\"/g, n).replace(/'/g, t.repeat(2)) : o, r), t]);
                                    if (o.includes(t)) return DT([n, lB(e.type, "quoteSingle" === e.type ? o.replace(/''/g, t) : o, r), n]);
                                    const u = r.singleQuote ? t : n;
                                    return DT([u, lB(e.type, o, r), u])
                                }
                            case "blockFolded":
                            case "blockLiteral":
                                {
                                    const t = LT(n, (e => GT(e, ["sequence", "mapping"]))),
                                        u = zT(n);
                                    return DT(["blockFolded" === e.type ? ">" : "|", null === e.indent ? "" : e.indent.toString(), "clip" === e.chomping ? "" : "keep" === e.chomping ? "+" : "-", $T(e) ? DT([" ", n.call(o, "indicatorComment")]) : "", (null === e.indent ? yT : ET)(eB(null === e.indent ? r.tabWidth : e.indent - 1 + t, DT(IT(e, { parentIndent: t, isLastDescendant: u, options: r }).reduce(((t, n, r, o) => t.concat(0 === r ? vT : "", CT(FT(xT, n).parts), r !== o.length - 1 ? 0 === n.length ? vT : TT(wT) : "keep" === e.chomping && u ? 0 === n.length ? ET(vT) : ET(wT) : "")), []))))])
                                }
                            case "sequence":
                                return FT(vT, n.map(o, "children"));
                            case "sequenceItem":
                                return DT(["- ", eB(2, e.content ? n.call(o, "content") : "")]);
                            case "mappingKey":
                            case "mappingValue":
                                return e.content ? n.call(o, "content") : "";
                            case "mapping":
                                return FT(vT, n.map(o, "children"));
                            case "mappingItem":
                            case "flowMappingItem":
                                {
                                    const u = XT(e.key),
                                        i = XT(e.value);
                                    if (u && i) return DT([": "]);
                                    const s = n.call(o, "key"),
                                        c = n.call(o, "value");
                                    if (i) return "flowMappingItem" === e.type && "flowMapping" === t.type ? s : "mappingItem" !== e.type || !uB(e.key.content, r) || WT(e.key.content) || t.tag && "tag:yaml.org,2002:set" === t.tag.value ? DT(["? ", eB(2, s)]) : DT([s, iB(e) ? " " : "", ":"]);
                                    if (u) return DT([": ", eB(2, c)]);
                                    const l = Symbol("mappingKey");
                                    return qT(e.value) || !tB(e.key.content) ? DT(["? ", eB(2, s), vT, FT("", n.map(o, "value", "leadingComments").map((e => DT([e, vT])))), ": ", eB(2, c)]) : ! function(e) {
                                        if (!e) return !0;
                                        switch (e.type) {
                                            case "plain":
                                            case "quoteDouble":
                                            case "quoteSingle":
                                                return e.position.start.line === e.position.end.line;
                                            case "alias":
                                                return !0;
                                            default:
                                                return !1
                                        }
                                    }(e.key.content) || qT(e.key.content) || VT(e.key.content) || WT(e.key.content) || UT(e.key) || qT(e.value.content) || VT(e.value.content) || UT(e.value) || !uB(e.value.content, r) ? mT([DT([bT(DT([AT("? "), bT(eB(2, s), { id: l })])), AT(DT([vT, ": ", eB(2, c)]), a(DT([iB(e) ? " " : "", ":", qT(e.value.content) || UT(e.value) && e.value.content && !GT(e.value.content, ["mapping", "sequence"]) || "mapping" === t.type && WT(e.key.content) && tB(e.value.content) || GT(e.value.content, ["mapping", "sequence"]) && null === e.value.content.tag && null === e.value.content.anchor ? vT : e.value.content ? xT : "", c])), { groupId: l })])]) : DT([s, iB(e) ? " " : "", ": ", c])
                                }
                            case "flowMapping":
                            case "flowSequence":
                                {
                                    const t = "flowMapping" === e.type ? "{" : "[",
                                        i = "flowMapping" === e.type ? "}" : "]",
                                        s = "flowMapping" === e.type && 0 !== e.children.length && r.bracketSpacing ? xT : BT,
                                        c = 0 !== e.children.length && "flowMappingItem" === (u = jT(e.children)).type && XT(u.key) && XT(u.value),
                                        l = "none" === r.trailingComma ? "" : AT(",", "");
                                    return DT([t, a(DT([s, DT(n.map(((t, n) => DT([o(t), n === e.children.length - 1 ? "" : DT([",", xT, e.children[n].position.start.line !== e.children[n + 1].position.start.line ? cB(t, r.originalText) : ""])])), "children")), l, UT(e) ? DT([vT, FT(vT, n.map(o, "endComments"))]) : ""])), c ? "" : s, i])
                                }
                            case "flowSequenceItem":
                                return n.call(o, "content");
                            default:
                                throw new Error("Unexpected node type ".concat(e.type))
                        }
                        var u, i;

                        function a(e) { return hT.align(" ".repeat(r.tabWidth), e) }
                    }

                    function eB(e, t) { return "number" == typeof e && e > 0 ? hT.align(" ".repeat(e), t) : hT.align(e, t) }

                    function tB(e) {
                        if (!e) return !0;
                        switch (e.type) {
                            case "plain":
                            case "quoteDouble":
                            case "quoteSingle":
                            case "alias":
                            case "flowMapping":
                            case "flowSequence":
                                return !0;
                            default:
                                return !1
                        }
                    }

                    function nB(e) { return 0 !== e.body.children.length || UT(e.body) }

                    function rB(e, t) { return WT(e) || t && (0 !== t.head.children.length || UT(t.head)) }

                    function oB(e, t, n, r) { return n.children[0] === e && /---(\s|$)/.test(r.originalText.slice(_T(e), _T(e) + 4)) || 0 !== e.head.children.length || UT(e.head) || WT(e.head) ? "head" : !rB(e, t) && !!t && "root" }

                    function uB(e, t) {
                        if (!e) return !0;
                        switch (e.type) {
                            case "plain":
                            case "quoteSingle":
                            case "quoteDouble":
                                break;
                            case "alias":
                                return !0;
                            default:
                                return !1
                        }
                        if ("preserve" === t.proseWrap) return e.position.start.line === e.position.end.line;
                        if (/\\$/m.test(t.originalText.slice(e.position.start.offset, e.position.end.offset))) return !1;
                        switch (t.proseWrap) {
                            case "never":
                                return !e.value.includes("\n");
                            case "always":
                                return !/[\n ]/.test(e.value);
                            default:
                                return !1
                        }
                    }

                    function iB(e) { return e.key.content && "alias" === e.key.content.type }

                    function aB(e) { return UT(e) && !GT(e, ["documentHead", "documentBody", "flowMapping", "flowSequence"]) }
                    const sB = new WeakMap;

                    function cB(e, t) {
                        const n = e.getValue(),
                            r = e.stack[0];
                        let o;
                        return sB.has(r) ? o = sB.get(r) : (o = new Set, sB.set(r, o)), o.has(n.position.end.line) || (o.add(n.position.end.line), !HT(n, t) || aB(e.getParentNode())) ? "" : BT
                    }

                    function lB(e, t, n) { const r = MT(e, t, n); return FT(vT, r.map((e => CT(FT(xT, e).parts)))) }
                    var pB = {
                            preprocess: function(e) { return KT(e, QT) },
                            print: function(e, t, n) {
                                const r = e.getValue(),
                                    o = e.getParentNode(),
                                    u = r.tag ? e.call(n, "tag") : "",
                                    i = r.anchor ? e.call(n, "anchor") : "",
                                    a = GT(r, ["mapping", "sequence", "comment", "directive", "mappingItem", "sequenceItem"]) && !zT(e) ? cB(e, t.originalText) : "";
                                return DT(["mappingValue" !== r.type && qT(r) ? DT([FT(vT, e.map(n, "leadingComments")), vT]) : "", u, u && i ? " " : "", i, u || i ? GT(r, ["sequence", "mapping"]) && !VT(r) ? vT : " " : "", VT(r) ? DT([1 === r.middleComments.length ? "" : vT, FT(vT, e.map(n, "middleComments")), vT]) : "", JT(e) ? DT(kT(t.originalText.slice(r.position.start.offset, r.position.end.offset).trimEnd(), wT)) : bT(ZT(r, o, e, t, n)), WT(r) && !GT(r, ["document", "documentHead"]) ? ST(DT(["mappingValue" !== r.type || r.content ? " " : "", "mappingKey" === o.type && "mapping" === e.getParentNode(2).type && tB(r) ? "" : gT, e.call(n, "trailingComment")])) : "", aB(r) ? eB("sequenceItem" === r.type ? 2 : 0, DT([vT, FT(vT, e.map((e => DT([NT(t.originalText, e.getValue(), _T) ? vT : "", n(e)])), "endComments"))])) : "", a])
                            },
                            massageAstNode: function(e, t) {
                                if (GT(t)) switch (delete t.position, t.type) {
                                    case "comment":
                                        if (OT(t.value)) return null;
                                        break;
                                    case "quoteDouble":
                                    case "quoteSingle":
                                        t.type = "quote"
                                }
                            },
                            insertPragma: PT
                        },
                        dB = { bracketSpacing: AC.bracketSpacing, singleQuote: AC.singleQuote, proseWrap: AC.proseWrap },
                        fB = [TC, Tv, OA, QA, Tx, rT, { languages: [vs({ name: "YAML", type: "data", color: "#cb171e", tmScope: "source.yaml", aliases: ["yml"], extensions: [".yml", ".mir", ".reek", ".rviz", ".sublime-syntax", ".syntax", ".yaml", ".yaml-tmlanguage", ".yaml.sed", ".yml.mysql"], filenames: [".clang-format", ".clang-tidy", ".gemrc", "glide.lock", "yarn.lock"], aceMode: "yaml", codemirrorMode: "yaml", codemirrorMimeType: "text/x-yaml", languageId: 407 }, (e => ({ since: "1.14.0", parsers: ["yaml"], vscodeLanguageIds: ["yaml", "ansible", "home-assistant"], filenames: e.filenames.filter((e => "yarn.lock" !== e)) })))], printers: { yaml: pB }, options: dB, parsers: {get yaml() { return {}.parsers.yaml } } }];
                    const { version: hB } = r, { getSupportInfo: mB } = gt, gB = fB.map((t => e(t, ["parsers"])));

                    function DB(e, t = 1) {
                        return (...n) => {
                            const r = n[t] || {},
                                o = r.plugins || [];
                            return n[t] = Object.assign({}, r, { plugins: [...gB, ...Array.isArray(o) ? o : Object.values(o)] }), e(...n)
                        }
                    }
                    const yB = DB(Ka.formatWithCursor);
                    return { formatWithCursor: yB, format: (e, t) => yB(e, t).formatted, check(e, t) { const { formatted: n } = yB(e, t); return n === e }, doc: cn, getSupportInfo: DB(mB, 0), version: hB, util: bs, __debug: { parse: DB(Ka.parse), formatAST: DB(Ka.formatAST), formatDoc: DB(Ka.formatDoc), printToDoc: DB(Ka.printToDoc), printDocToString: DB(Ka.printDocToString) } }
                }()
            }
        },
        t = {};

    function n(r) { if (t[r]) return t[r].exports; var o = t[r] = { exports: {} }; return e[r].call(o.exports, o, o.exports, n), o.exports }
    n.g = function() { if ("object" == typeof globalThis) return globalThis; try { return this || new Function("return this")() } catch (e) { if ("object" == typeof window) return window } }(), (() => {
        "use strict";
        const e = function() {
                const t = document.querySelector("canvas"),
                    n = t.getContext("2d"),
                    r = ["rgb(81, 162, 233)", "rgb(81, 162, 233)", "rgb(81, 162, 233)", "rgb(81, 162, 233)", "rgb(255, 77, 90)"];
                t.width = document.body.scrollWidth, t.height = window.innerHeight, t.style.display = "block", n.lineWidth = .3, n.strokeStyle = "rgb(81, 162, 233)";
                let o = { x: 30 * t.width / 100, y: 30 * t.height / 100 };
                const u = window.innerWidth;
                let i;

                function a() { this.x = Math.random() * t.width, this.y = Math.random() * t.height, this.vx = -.5 + Math.random(), this.vy = -.5 + Math.random(), this.radius = 1.5 * Math.random(), this.colour = r[Math.floor(Math.random() * r.length)] }
                i = u > 1600 ? { nb: 600, distance: 70, d_radius: 300, array: [] } : u > 1300 ? { nb: 575, distance: 60, d_radius: 280, array: [] } : u > 1100 ? { nb: 500, distance: 55, d_radius: 250, array: [] } : u > 800 ? { nb: 300, distance: 0, d_radius: 0, array: [] } : u > 600 ? { nb: 200, distance: 0, d_radius: 0, array: [] } : { nb: 100, distance: 0, d_radius: 0, array: [] }, a.prototype = {
                    create: function() {
                        n.beginPath(), n.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1);
                        const e = ((this.x - o.x) ** 2 + (this.y - o.y) ** 2) ** .5 / (u / 1.7);
                        n.fillStyle = this.colour.slice(0, -1) + `,${1-e})`, n.fill()
                    },
                    animate: function() {
                        for (let e = 1; e < i.nb; e++) {
                            const n = i.array[e];
                            n.y < 0 || n.y > t.height ? (n.vx = n.vx, n.vy = -n.vy) : (n.x < 0 || n.x > t.width) && (n.vx = -n.vx, n.vy = n.vy), n.x += n.vx, n.y += n.vy
                        }
                    },
                    line: function() {
                        for (let e = 0; e < i.nb; e++)
                            for (let t = 0; t < i.nb; t++) {
                                const r = i.array[e],
                                    u = i.array[t];
                                if (r.x - u.x < i.distance && r.y - u.y < i.distance && r.x - u.x > -i.distance && r.y - u.y > -i.distance && r.x - o.x < i.d_radius && r.y - o.y < i.d_radius && r.x - o.x > -i.d_radius && r.y - o.y > -i.d_radius) {
                                    n.beginPath(), n.moveTo(r.x, r.y), n.lineTo(u.x, u.y);
                                    let e = ((r.x - o.x) ** 2 + (r.y - o.y) ** 2) ** .5 / i.d_radius;
                                    e -= .3, e < 0 && (e = 0), n.strokeStyle = `rgb(81, 162, 233, ${1-e})`, n.stroke(), n.closePath()
                                }
                            }
                    }
                }, window.onmousemove = function(e) { o.x = e.pageX, o.y = e.pageY; try { i.array[0].x = e.pageX, i.array[0].y = e.pageY } catch {} }, o.x = window.innerWidth / 2, o.y = window.innerHeight / 2;
                const s = setInterval((function() {
                    n.clearRect(0, 0, t.width, t.height);
                    for (let t = 0; t < i.nb; t++) {
                        i.array.push(new a);
                        var e = i.array[t];
                        e.create()
                    }
                    i.array[0].radius = 1.5, i.array[0].colour = "#51a2e9", e.line(), e.animate()
                }), 1e3 / 30);
                window.onresize = function() { clearInterval(s), e() }
            },
            t = e,
            r = function() {
                const e = document.querySelector(".canvas-2"),
                    t = e.getContext("2d"),
                    n = ["rgb(81, 162, 233)", "rgb(81, 162, 233)", "rgb(81, 162, 233)", "rgb(255, 77, 90)"];
                e.width = document.body.scrollWidth, e.height = window.innerHeight, e.style.display = "block", t.lineWidth = .3, t.strokeStyle = "rgb(81, 162, 233)";
                let o = { x: 30 * e.width / 100, y: 30 * e.height / 100 };
                const u = window.innerWidth;
                let i;

                function a() { this.x = Math.random() * e.width, this.y = Math.random() * e.height, this.vx = -.5 + Math.random(), this.vy = -.5 + Math.random(), this.radius = 1.5 * Math.random(), this.colour = n[Math.floor(Math.random() * n.length)] }
                u > 1600 ? i = { nb: 100, distance: 0, d_radius: 0, array: [] } : u > 1300 ? i = { nb: 75, distance: 0, d_radius: 0, array: [] } : u > 1100 ? i = { nb: 50, distance: 0, d_radius: 0, array: [] } : (i = { nb: 1, distance: 0, d_radius: 0, array: [] }, t.globalAlpha = 0), a.prototype = {
                    create: function() {
                        t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1);
                        const e = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0),
                            n = ((this.x - o.x) ** 2 + (this.y - o.y + e) ** 2) ** .5 / (u / 2);
                        t.fillStyle = this.colour.slice(0, -1) + `,${1-n})`, t.fill()
                    },
                    animate: function() {
                        for (let t = 1; t < i.nb; t++) {
                            const n = i.array[t];
                            n.y < 0 || n.y > e.height ? (n.vx = n.vx, n.vy = -n.vy) : (n.x < 0 || n.x > e.width) && (n.vx = -n.vx, n.vy = n.vy), n.x += n.vx, n.y += n.vy
                        }
                    },
                    line: function() {
                        for (let e = 0; e < i.nb; e++)
                            for (let n = 0; n < i.nb; n++) {
                                const r = i.array[e],
                                    u = i.array[n];
                                if (r.x - u.x < i.distance && r.y - u.y < i.distance && r.x - u.x > -i.distance && r.y - u.y > -i.distance && r.x - o.x < i.d_radius && r.y - o.y < i.d_radius && r.x - o.x > -i.d_radius && r.y - o.y > -i.d_radius) {
                                    t.beginPath(), t.moveTo(r.x, r.y), t.lineTo(u.x, u.y);
                                    let e = ((r.x - o.x) ** 2 + (r.y - o.y) ** 2) ** .5 / i.d_radius;
                                    e -= .3, e < 0 && (e = 0), t.strokeStyle = `rgb(81, 162, 233, ${1-e})`, t.stroke(), t.closePath()
                                }
                            }
                    }
                }, window.onscroll = function(e) {
                    o.x = window.innerWidth / 2, o.y = window.innerHeight / 2;
                    const t = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);
                    o.y += t
                };
                const s = setInterval((function() {
                    t.clearRect(0, 0, e.width, e.height);
                    for (let e = 0; e < i.nb; e++) {
                        i.array.push(new a);
                        var n = i.array[e];
                        n.create()
                    }
                    i.array[0].radius = 1.5, i.array[0].colour = "#51a2e9", n.animate()
                }), 1e3 / 30);
                window.onresize = function() { clearInterval(s), r() }
            },
            o = r;
        n(945), firer.push(o(), t());
        let u = { root: null, rootMargin: "0px", threshold: .5 };
        new IntersectionObserver((function(e, t) {
            e.forEach((e => {
                if (e.isIntersecting && document.body.scrollWidth > 1300) {
                    document.querySelector(".profile").classList.add("profile__fade-in");
                    const e = e => new Promise((t => setTimeout(t, e)));
                    e(1000).then((() => { document.querySelector(".skills__item--nginx").classList.add("skills__item-fade-in") })),
                        e(1100).then((() => { document.querySelector(".skills__item--html").classList.add("skills__item-fade-in") })),
                        e(1200).then((() => { document.querySelector(".skills__item--js").classList.add("skills__item-fade-in") })),
                        e(1300).then((() => { document.querySelector(".skills__item--css").classList.add("skills__item-fade-in") })),
                        e(1400).then((() => { document.querySelector(".skills__item--php").classList.add("skills__item-fade-in") })),
                        e(1500).then((() => { document.querySelector(".skills__item--react").classList.add("skills__item-fade-in") })),
                        e(1600).then((() => { document.querySelector(".skills__item--express").classList.add("skills__item-fade-in") })),
                        e(1700).then((() => { document.querySelector(".skills__item--python").classList.add("skills__item-fade-in") })),
                        e(1800).then((() => { document.querySelector(".skills__item--node").classList.add("skills__item-fade-in") }))
                }
            }))
        }), u).observe(document.querySelector(".about__content"));
        let b = function(id) {
            var a, b, c;
            b = document.querySelector("#" + id);
            c = { root: null, rootMargin: "0px", threshold: 1 };
            if (b.offsetHeight > window.innerHeight) {
                c.threshold = window.innerHeight / b.offsetHeight;
            }
            a = new IntersectionObserver((function(e, t) { e.forEach((e => { e.isIntersecting && (document.querySelectorAll(".navigation__item").forEach((e => { e.classList.remove("navigation__item--active") })), document.querySelector(`#nav-${e.target.id}`).classList.add("navigation__item--active")) })) }), c)
            a.observe(b);
        };
        b('hero'), b('about'), b('projects'), b('contact');
        const s = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    })()
})()