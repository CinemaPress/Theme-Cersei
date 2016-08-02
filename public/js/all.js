!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = e.length, n = Z.type(e);
        return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (Z.isFunction(t))return Z.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType)return Z.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ae.test(t))return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function (e) {
            return _.call(t, e) >= 0 !== n
        })
    }

    function o(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function r(e) {
        var t = he[e] = {};
        return Z.each(e.match(fe) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        J.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), Z.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = Z.expando + a.uid++
    }

    function l(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)if (i = "data-" + t.replace(be, "-$1").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
            try {
                n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : we.test(n) ? Z.parseJSON(n) : n
            } catch (o) {
            }
            ye.set(e, t, n)
        } else n = void 0;
        return n
    }

    function u() {
        return !0
    }

    function c() {
        return !1
    }

    function p() {
        try {
            return J.activeElement
        } catch (e) {
        }
    }

    function d(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function f(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function h(e) {
        var t = Me.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function m(e, t) {
        for (var n = 0, i = e.length; i > n; n++)ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
    }

    function g(e, t) {
        var n, i, o, r, s, a, l, u;
        if (1 === t.nodeType) {
            if (ve.hasData(e) && (r = ve.access(e), s = ve.set(t, r), u = r.events)) {
                delete s.handle, s.events = {};
                for (o in u)for (n = 0, i = u[o].length; i > n; n++)Z.event.add(t, o, u[o][n])
            }
            ye.hasData(e) && (a = ye.access(e), l = Z.extend({}, a), ye.set(t, l))
        }
    }

    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }

    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && je.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function w(t, n) {
        var i, o = Z(n.createElement(t)).appendTo(n.body), r = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0])) ? i.display : Z.css(o[0], "display");
        return o.detach(), r
    }

    function b(e) {
        var t = J, n = Fe[e];
        return n || (n = w(e, t), "none" !== n && n || (Oe = (Oe || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Oe[0].contentDocument, t.write(), t.close(), n = w(e, t), Oe.detach()), Fe[e] = n), n
    }

    function x(e, t, n) {
        var i, o, r, s, a = e.style;
        return n = n || ze(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || Z.contains(e.ownerDocument, e) || (s = Z.style(e, t)), Be.test(s) && Re.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function C(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function T(e, t) {
        if (t in e)return t;
        for (var n = t[0].toUpperCase() + t.slice(1), i = t, o = Ge.length; o--;)if (t = Ge[o] + n, t in e)return t;
        return i
    }

    function j(e, t, n) {
        var i = Ye.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function k(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2)"margin" === n && (s += Z.css(e, n + Ce[r], !0, o)), i ? ("content" === n && (s -= Z.css(e, "padding" + Ce[r], !0, o)), "margin" !== n && (s -= Z.css(e, "border" + Ce[r] + "Width", !0, o))) : (s += Z.css(e, "padding" + Ce[r], !0, o), "padding" !== n && (s += Z.css(e, "border" + Ce[r] + "Width", !0, o)));
        return s
    }

    function S(e, t, n) {
        var i = !0, o = "width" === t ? e.offsetWidth : e.offsetHeight, r = ze(e), s = "border-box" === Z.css(e, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = x(e, t, r), (0 > o || null == o) && (o = e.style[t]), Be.test(o))return o;
            i = s && (Q.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + k(e, t, n || (s ? "border" : "content"), i, r) + "px"
    }

    function I(e, t) {
        for (var n, i, o, r = [], s = 0, a = e.length; a > s; s++)i = e[s], i.style && (r[s] = ve.get(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Te(i) && (r[s] = ve.access(i, "olddisplay", b(i.nodeName)))) : (o = Te(i), "none" === n && o || ve.set(i, "olddisplay", o ? n : Z.css(i, "display"))));
        for (s = 0; a > s; s++)i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
        return e
    }

    function D(e, t, n, i, o) {
        return new D.prototype.init(e, t, n, i, o)
    }

    function $() {
        return setTimeout(function () {
            Qe = void 0
        }), Qe = Z.now()
    }

    function A(e, t) {
        var n, i = 0, o = {height: e};
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)n = Ce[i], o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function E(e, t, n) {
        for (var i, o = (nt[t] || []).concat(nt["*"]), r = 0, s = o.length; s > r; r++)if (i = o[r].call(n, t, e))return i
    }

    function N(e, t, n) {
        var i, o, r, s, a, l, u, c, p = this, d = {}, f = e.style, h = e.nodeType && Te(e), m = ve.get(e, "fxshow");
        n.queue || (a = Z._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, p.always(function () {
            p.always(function () {
                a.unqueued--, Z.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = Z.css(e, "display"), c = "none" === u ? ve.get(e, "olddisplay") || b(e.nodeName) : u, "inline" === c && "none" === Z.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always(function () {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in t)if (o = t[i], Ke.exec(o)) {
            if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                if ("show" !== o || !m || void 0 === m[i])continue;
                h = !0
            }
            d[i] = m && m[i] || Z.style(e, i)
        } else u = void 0;
        if (Z.isEmptyObject(d))"inline" === ("none" === u ? b(e.nodeName) : u) && (f.display = u); else {
            m ? "hidden" in m && (h = m.hidden) : m = ve.access(e, "fxshow", {}), r && (m.hidden = !h), h ? Z(e).show() : p.done(function () {
                Z(e).hide()
            }), p.done(function () {
                var t;
                ve.remove(e, "fxshow");
                for (t in d)Z.style(e, t, d[t])
            });
            for (i in d)s = E(h ? m[i] : 0, i, p), i in m || (m[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function P(e, t) {
        var n, i, o, r, s;
        for (n in e)if (i = Z.camelCase(n), o = t[i], r = e[n], Z.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), s = Z.cssHooks[i], s && "expand" in s) {
            r = s.expand(r), delete e[i];
            for (n in r)n in e || (e[n] = r[n], t[n] = o)
        } else t[i] = o
    }

    function H(e, t, n) {
        var i, o, r = 0, s = tt.length, a = Z.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (o)return !1;
            for (var t = Qe || $(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, r = 1 - i, s = 0, l = u.tweens.length; l > s; s++)u.tweens[s].run(r);
            return a.notifyWith(e, [u, r, n]), 1 > r && l ? n : (a.resolveWith(e, [u]), !1)
        }, u = a.promise({
            elem: e,
            props: Z.extend({}, t),
            opts: Z.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Qe || $(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var i = Z.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(i), i
            },
            stop: function (t) {
                var n = 0, i = t ? u.tweens.length : 0;
                if (o)return this;
                for (o = !0; i > n; n++)u.tweens[n].run(1);
                return t ? a.resolveWith(e, [u, t]) : a.rejectWith(e, [u, t]), this
            }
        }), c = u.props;
        for (P(c, u.opts.specialEasing); s > r; r++)if (i = tt[r].call(u, e, c, u.opts))return i;
        return Z.map(c, E, u), Z.isFunction(u.opts.start) && u.opts.start.call(e, u), Z.fx.timer(Z.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function L(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0, r = t.toLowerCase().match(fe) || [];
            if (Z.isFunction(n))for (; i = r[o++];)"+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function M(e, t, n, i) {
        function o(a) {
            var l;
            return r[a] = !0, Z.each(e[a] || [], function (e, a) {
                var u = a(t, n, i);
                return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
            }), l
        }

        var r = {}, s = e === wt;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function W(e, t) {
        var n, i, o = Z.ajaxSettings.flatOptions || {};
        for (n in t)void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && Z.extend(!0, e, i), e
    }

    function q(e, t, n) {
        for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0];)l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)for (o in a)if (a[o] && a[o].test(i)) {
            l.unshift(o);
            break
        }
        if (l[0] in n)r = l[0]; else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }

    function O(e, t, n, i) {
        var o, r, s, a, l, u = {}, c = e.dataTypes.slice();
        if (c[1])for (s in e.converters)u[s.toLowerCase()] = e.converters[s];
        for (r = c.shift(); r;)if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift())if ("*" === r)r = l; else if ("*" !== l && l !== r) {
            if (s = u[l + " " + r] || u["* " + r], !s)for (o in u)if (a = o.split(" "), a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                s === !0 ? s = u[o] : u[o] !== !0 && (r = a[0], c.unshift(a[1]));
                break
            }
            if (s !== !0)if (s && e["throws"])t = s(t); else try {
                t = s(t)
            } catch (p) {
                return {state: "parsererror", error: s ? p : "No conversion from " + l + " to " + r}
            }
        }
        return {state: "success", data: t}
    }

    function F(e, t, n, i) {
        var o;
        if (Z.isArray(t))Z.each(t, function (t, o) {
            n || jt.test(e) ? i(e, o) : F(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
        }); else if (n || "object" !== Z.type(t))i(e, t); else for (o in t)F(e + "[" + o + "]", t[o], n, i)
    }

    function R(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }

    var B = [], z = B.slice, X = B.concat, Y = B.push, _ = B.indexOf, V = {}, U = V.toString, G = V.hasOwnProperty, Q = {}, J = e.document, K = "2.1.3", Z = function (e, t) {
        return new Z.fn.init(e, t)
    }, ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, te = /^-ms-/, ne = /-([\da-z])/gi, ie = function (e, t) {
        return t.toUpperCase()
    };
    Z.fn = Z.prototype = {
        jquery: K, constructor: Z, selector: "", length: 0, toArray: function () {
            return z.call(this)
        }, get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : z.call(this)
        }, pushStack: function (e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return Z.each(this, e, t)
        }, map: function (e) {
            return this.pushStack(Z.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(z.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: Y, sort: B.sort, splice: B.splice
    }, Z.extend = Z.fn.extend = function () {
        var e, t, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || Z.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)if (null != (e = arguments[a]))for (t in e)n = s[t], i = e[t], s !== i && (u && i && (Z.isPlainObject(i) || (o = Z.isArray(i))) ? (o ? (o = !1, r = n && Z.isArray(n) ? n : []) : r = n && Z.isPlainObject(n) ? n : {}, s[t] = Z.extend(u, r, i)) : void 0 !== i && (s[t] = i));
        return s
    }, Z.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === Z.type(e)
        }, isArray: Array.isArray, isWindow: function (e) {
            return null != e && e === e.window
        }, isNumeric: function (e) {
            return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
        }, isPlainObject: function (e) {
            return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[U.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            var t, n = eval;
            e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        }, camelCase: function (e) {
            return e.replace(te, "ms-").replace(ne, ie)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, i) {
            var o, r = 0, s = e.length, a = n(e);
            if (i) {
                if (a)for (; s > r && (o = t.apply(e[r], i), o !== !1); r++); else for (r in e)if (o = t.apply(e[r], i), o === !1)break
            } else if (a)for (; s > r && (o = t.call(e[r], r, e[r]), o !== !1); r++); else for (r in e)if (o = t.call(e[r], r, e[r]), o === !1)break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(ee, "")
        }, makeArray: function (e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? Z.merge(i, "string" == typeof e ? [e] : e) : Y.call(i, e)), i
        }, inArray: function (e, t, n) {
            return null == t ? -1 : _.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; n > i; i++)e[o++] = t[i];
            return e.length = o, e
        }, grep: function (e, t, n) {
            for (var i, o = [], r = 0, s = e.length, a = !n; s > r; r++)i = !t(e[r], r), i !== a && o.push(e[r]);
            return o
        }, map: function (e, t, i) {
            var o, r = 0, s = e.length, a = n(e), l = [];
            if (a)for (; s > r; r++)o = t(e[r], r, i), null != o && l.push(o); else for (r in e)o = t(e[r], r, i), null != o && l.push(o);
            return X.apply([], l)
        }, guid: 1, proxy: function (e, t) {
            var n, i, o;
            return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (i = z.call(arguments, 2), o = function () {
                return e.apply(t || this, i.concat(z.call(arguments)))
            }, o.guid = e.guid = e.guid || Z.guid++, o) : void 0
        }, now: Date.now, support: Q
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        V["[object " + t + "]"] = t.toLowerCase()
    });
    var oe = function (e) {
        function t(e, t, n, i) {
            var o, r, s, a, l, u, p, f, h, m;
            if ((t ? t.ownerDocument || t : F) !== N && E(t), t = t || N, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a)return n;
            if (!i && H) {
                if (11 !== a && (o = ye.exec(e)))if (s = o[1]) {
                    if (9 === a) {
                        if (r = t.getElementById(s), !r || !r.parentNode)return n;
                        if (r.id === s)return n.push(r), n
                    } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(s)) && q(t, r) && r.id === s)return n.push(r), n
                } else {
                    if (o[2])return K.apply(n, t.getElementsByTagName(e)), n;
                    if ((s = o[3]) && x.getElementsByClassName)return K.apply(n, t.getElementsByClassName(s)), n
                }
                if (x.qsa && (!L || !L.test(e))) {
                    if (f = p = O, h = t, m = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (u = k(e), (p = t.getAttribute("id")) ? f = p.replace(be, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;)u[l] = f + d(u[l]);
                        h = we.test(e) && c(t.parentNode) || t, m = u.join(",")
                    }
                    if (m)try {
                        return K.apply(n, h.querySelectorAll(m)), n
                    } catch (g) {
                    } finally {
                        p || t.removeAttribute("id")
                    }
                }
            }
            return I(e.replace(le, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
            }

            var t = [];
            return e
        }

        function i(e) {
            return e[O] = !0, e
        }

        function o(e) {
            var t = N.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {
            for (var n = e.split("|"), i = e.length; i--;)C.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (i)return i;
            if (n)for (; n = n.nextSibling;)if (n === t)return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return i(function (t) {
                return t = +t, i(function (n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--;)n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function p() {
        }

        function d(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++)i += e[t].value;
            return i
        }

        function f(e, t, n) {
            var i = t.dir, o = n && "parentNode" === i, r = B++;
            return t.first ? function (t, n, r) {
                for (; t = t[i];)if (1 === t.nodeType || o)return e(t, n, r)
            } : function (t, n, s) {
                var a, l, u = [R, r];
                if (s) {
                    for (; t = t[i];)if ((1 === t.nodeType || o) && e(t, n, s))return !0
                } else for (; t = t[i];)if (1 === t.nodeType || o) {
                    if (l = t[O] || (t[O] = {}), (a = l[i]) && a[0] === R && a[1] === r)return u[2] = a[2];
                    if (l[i] = u, u[2] = e(t, n, s))return !0
                }
            }
        }

        function h(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var o = e.length; o--;)if (!e[o](t, n, i))return !1;
                return !0
            } : e[0]
        }

        function m(e, n, i) {
            for (var o = 0, r = n.length; r > o; o++)t(e, n[o], i);
            return i
        }

        function g(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, u = null != t; l > a; a++)(r = e[a]) && (!n || n(r, i, o)) && (s.push(r), u && t.push(a));
            return s
        }

        function v(e, t, n, o, r, s) {
            return o && !o[O] && (o = v(o)), r && !r[O] && (r = v(r, s)), i(function (i, s, a, l) {
                var u, c, p, d = [], f = [], h = s.length, v = i || m(t || "*", a.nodeType ? [a] : a, []), y = !e || !i && t ? v : g(v, d, e, a, l), w = n ? r || (i ? e : h || o) ? [] : s : y;
                if (n && n(y, w, a, l), o)for (u = g(w, f), o(u, [], a, l), c = u.length; c--;)(p = u[c]) && (w[f[c]] = !(y[f[c]] = p));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (u = [], c = w.length; c--;)(p = w[c]) && u.push(y[c] = p);
                            r(null, w = [], u, l)
                        }
                        for (c = w.length; c--;)(p = w[c]) && (u = r ? ee(i, p) : d[c]) > -1 && (i[u] = !(s[u] = p))
                    }
                } else w = g(w === s ? w.splice(h, w.length) : w), r ? r(null, s, w, l) : K.apply(s, w)
            })
        }

        function y(e) {
            for (var t, n, i, o = e.length, r = C.relative[e[0].type], s = r || C.relative[" "], a = r ? 1 : 0, l = f(function (e) {
                return e === t
            }, s, !0), u = f(function (e) {
                return ee(t, e) > -1
            }, s, !0), c = [function (e, n, i) {
                var o = !r && (i || n !== D) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                return t = null, o
            }]; o > a; a++)if (n = C.relative[e[a].type])c = [f(h(c), n)]; else {
                if (n = C.filter[e[a].type].apply(null, e[a].matches), n[O]) {
                    for (i = ++a; o > i && !C.relative[e[i].type]; i++);
                    return v(a > 1 && h(c), a > 1 && d(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(le, "$1"), n, i > a && y(e.slice(a, i)), o > i && y(e = e.slice(i)), o > i && d(e))
                }
                c.push(n)
            }
            return h(c)
        }

        function w(e, n) {
            var o = n.length > 0, r = e.length > 0, s = function (i, s, a, l, u) {
                var c, p, d, f = 0, h = "0", m = i && [], v = [], y = D, w = i || r && C.find.TAG("*", u), b = R += null == y ? 1 : Math.random() || .1, x = w.length;
                for (u && (D = s !== N && s); h !== x && null != (c = w[h]); h++) {
                    if (r && c) {
                        for (p = 0; d = e[p++];)if (d(c, s, a)) {
                            l.push(c);
                            break
                        }
                        u && (R = b)
                    }
                    o && ((c = !d && c) && f--, i && m.push(c))
                }
                if (f += h, o && h !== f) {
                    for (p = 0; d = n[p++];)d(m, v, s, a);
                    if (i) {
                        if (f > 0)for (; h--;)m[h] || v[h] || (v[h] = Q.call(l));
                        v = g(v)
                    }
                    K.apply(l, v), u && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                }
                return u && (R = b, D = y), m
            };
            return o ? i(s) : s
        }

        var b, x, C, T, j, k, S, I, D, $, A, E, N, P, H, L, M, W, q, O = "sizzle" + 1 * new Date, F = e.document, R = 0, B = 0, z = n(), X = n(), Y = n(), _ = function (e, t) {
            return e === t && (A = !0), 0
        }, V = 1 << 31, U = {}.hasOwnProperty, G = [], Q = G.pop, J = G.push, K = G.push, Z = G.slice, ee = function (e, t) {
            for (var n = 0, i = e.length; i > n; n++)if (e[n] === t)return n;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = ie.replace("w", "w#"), re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]", se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)", ae = new RegExp(ne + "+", "g"), le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ue = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), pe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), de = new RegExp(se), fe = new RegExp("^" + oe + "$"), he = {
            ID: new RegExp("^#(" + ie + ")"),
            CLASS: new RegExp("^\\.(" + ie + ")"),
            TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + re),
            PSEUDO: new RegExp("^" + se),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + te + ")$", "i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
        }, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, we = /[+~]/, be = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), Ce = function (e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, Te = function () {
            E()
        };
        try {
            K.apply(G = Z.call(F.childNodes), F.childNodes), G[F.childNodes.length].nodeType
        } catch (je) {
            K = {
                apply: G.length ? function (e, t) {
                    J.apply(e, Z.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        x = t.support = {}, j = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, E = t.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : F;
            return i !== N && 9 === i.nodeType && i.documentElement ? (N = i, P = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), H = !j(i), x.attributes = o(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = o(function (e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = ve.test(i.getElementsByClassName), x.getById = o(function (e) {
                return P.appendChild(e).id = O, !i.getElementsByName || !i.getElementsByName(O).length
            }), x.getById ? (C.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && H) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, C.filter.ID = function (e) {
                var t = e.replace(xe, Ce);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete C.find.ID, C.filter.ID = function (e) {
                var t = e.replace(xe, Ce);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), C.find.TAG = x.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [], o = 0, r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++];)1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, C.find.CLASS = x.getElementsByClassName && function (e, t) {
                    return H ? t.getElementsByClassName(e) : void 0
                }, M = [], L = [], (x.qsa = ve.test(i.querySelectorAll)) && (o(function (e) {
                P.appendChild(e).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || L.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + O + "-]").length || L.push("~="), e.querySelectorAll(":checked").length || L.push(":checked"), e.querySelectorAll("a#" + O + "+*").length || L.push(".#.+[+~]")
            }), o(function (e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
            })), (x.matchesSelector = ve.test(W = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function (e) {
                x.disconnectedMatch = W.call(e, "div"), W.call(e, "[s!='']:x"), M.push("!=", se)
            }), L = L.length && new RegExp(L.join("|")), M = M.length && new RegExp(M.join("|")), t = ve.test(P.compareDocumentPosition), q = t || ve.test(P.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t)for (; t = t.parentNode;)if (t === e)return !0;
                return !1
            }, _ = t ? function (e, t) {
                if (e === t)return A = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === F && q(F, e) ? -1 : t === i || t.ownerDocument === F && q(F, t) ? 1 : $ ? ee($, e) - ee($, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t)return A = !0, 0;
                var n, o = 0, r = e.parentNode, a = t.parentNode, l = [e], u = [t];
                if (!r || !a)return e === i ? -1 : t === i ? 1 : r ? -1 : a ? 1 : $ ? ee($, e) - ee($, t) : 0;
                if (r === a)return s(e, t);
                for (n = e; n = n.parentNode;)l.unshift(n);
                for (n = t; n = n.parentNode;)u.unshift(n);
                for (; l[o] === u[o];)o++;
                return o ? s(l[o], u[o]) : l[o] === F ? -1 : u[o] === F ? 1 : 0
            }, i) : N
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== N && E(e), n = n.replace(pe, "='$1']"), !(!x.matchesSelector || !H || M && M.test(n) || L && L.test(n)))try {
                var i = W.call(e, n);
                if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType)return i
            } catch (o) {
            }
            return t(n, N, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== N && E(e), q(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== N && E(e);
            var n = C.attrHandle[t.toLowerCase()], i = n && U.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
            return void 0 !== i ? i : x.attributes || !H ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [], i = 0, o = 0;
            if (A = !x.detectDuplicates, $ = !x.sortStable && e.slice(0), e.sort(_), A) {
                for (; t = e[o++];)t === e[o] && (i = n.push(o));
                for (; i--;)e.splice(n[i], 1)
            }
            return $ = null, e
        }, T = t.getText = function (e) {
            var t, n = "", i = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += T(e)
                } else if (3 === o || 4 === o)return e.nodeValue
            } else for (; t = e[i++];)n += T(t);
            return n
        }, C = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(xe, Ce), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, Ce), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(xe, Ce).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, n, i) {
                    return function (o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === i && 0 === o ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var u, c, p, d, f, h, m = r !== s ? "nextSibling" : "previousSibling", g = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a;
                        if (g) {
                            if (r) {
                                for (; m;) {
                                    for (p = t; p = p[m];)if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? g.firstChild : g.lastChild], s && y) {
                                for (c = g[O] || (g[O] = {}), u = c[e] || [], f = u[0] === R && u[1], d = u[0] === R && u[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (d = f = 0) || h.pop();)if (1 === p.nodeType && ++d && p === t) {
                                    c[e] = [R, f, d];
                                    break
                                }
                            } else if (y && (u = (t[O] || (t[O] = {}))[e]) && u[0] === R)d = u[1]; else for (; (p = ++f && p && p[m] || (d = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++d || (y && ((p[O] || (p[O] = {}))[e] = [R, d]), p !== t)););
                            return d -= o, d === i || d % i === 0 && d / i >= 0
                        }
                    }
                }, PSEUDO: function (e, n) {
                    var o, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[O] ? r(n) : r.length > 1 ? (o = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                        for (var i, o = r(e, n), s = o.length; s--;)i = ee(e, o[s]), e[i] = !(t[i] = o[s])
                    }) : function (e) {
                        return r(e, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [], n = [], o = S(e.replace(le, "$1"));
                    return o[O] ? i(function (e, t, n, i) {
                        for (var r, s = o(e, null, i, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                    }) : function (e, i, r) {
                        return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                    }
                }), has: i(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }), contains: i(function (e) {
                    return e = e.replace(xe, Ce), function (t) {
                        return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                    }
                }), lang: i(function (e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, Ce).toLowerCase(), function (t) {
                        var n;
                        do if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === P
                }, focus: function (e) {
                    return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                    return !0
                }, parent: function (e) {
                    return !C.pseudos.empty(e)
                }, header: function (e) {
                    return ge.test(e.nodeName)
                }, input: function (e) {
                    return me.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: u(function () {
                    return [0]
                }), last: u(function (e, t) {
                    return [t - 1]
                }), eq: u(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: u(function (e, t) {
                    for (var n = 0; t > n; n += 2)e.push(n);
                    return e
                }), odd: u(function (e, t) {
                    for (var n = 1; t > n; n += 2)e.push(n);
                    return e
                }), lt: u(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;)e.push(i);
                    return e
                }), gt: u(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;)e.push(i);
                    return e
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})C.pseudos[b] = a(b);
        for (b in{submit: !0, reset: !0})C.pseudos[b] = l(b);
        return p.prototype = C.filters = C.pseudos, C.setFilters = new p, k = t.tokenize = function (e, n) {
            var i, o, r, s, a, l, u, c = X[e + " "];
            if (c)return n ? 0 : c.slice(0);
            for (a = e, l = [], u = C.preFilter; a;) {
                (!i || (o = ue.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ce.exec(a)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(le, " ")
                }), a = a.slice(i.length));
                for (s in C.filter)!(o = he[s].exec(a)) || u[s] && !(o = u[s](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: s,
                    matches: o
                }), a = a.slice(i.length));
                if (!i)break
            }
            return n ? a.length : a ? t.error(e) : X(e, l).slice(0)
        }, S = t.compile = function (e, t) {
            var n, i = [], o = [], r = Y[e + " "];
            if (!r) {
                for (t || (t = k(e)), n = t.length; n--;)r = y(t[n]), r[O] ? i.push(r) : o.push(r);
                r = Y(e, w(o, i)), r.selector = e
            }
            return r
        }, I = t.select = function (e, t, n, i) {
            var o, r, s, a, l, u = "function" == typeof e && e, p = !i && k(e = u.selector || e);
            if (n = n || [], 1 === p.length) {
                if (r = p[0] = p[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === t.nodeType && H && C.relative[r[1].type]) {
                    if (t = (C.find.ID(s.matches[0].replace(xe, Ce), t) || [])[0], !t)return n;
                    u && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = he.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !C.relative[a = s.type]);)if ((l = C.find[a]) && (i = l(s.matches[0].replace(xe, Ce), we.test(r[0].type) && c(t.parentNode) || t))) {
                    if (r.splice(o, 1), e = i.length && d(r), !e)return K.apply(n, i), n;
                    break
                }
            }
            return (u || S(e, p))(i, t, !H, n, we.test(e) && c(t.parentNode) || t), n
        }, x.sortStable = O.split("").sort(_).join("") === O, x.detectDuplicates = !!A, E(), x.sortDetached = o(function (e) {
            return 1 & e.compareDocumentPosition(N.createElement("div"))
        }), o(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && o(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function (e) {
            return null == e.getAttribute("disabled")
        }) || r(te, function (e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    Z.find = oe, Z.expr = oe.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = oe.uniqueSort, Z.text = oe.getText, Z.isXMLDoc = oe.isXML, Z.contains = oe.contains;
    var re = Z.expr.match.needsContext, se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ae = /^.[^:#\[\.,]*$/;
    Z.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? Z.find.matchesSelector(i, e) ? [i] : [] : Z.find.matches(e, Z.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, Z.fn.extend({
        find: function (e) {
            var t, n = this.length, i = [], o = this;
            if ("string" != typeof e)return this.pushStack(Z(e).filter(function () {
                for (t = 0; n > t; t++)if (Z.contains(o[t], this))return !0
            }));
            for (t = 0; n > t; t++)Z.find(e, o[t], i);
            return i = this.pushStack(n > 1 ? Z.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        }, filter: function (e) {
            return this.pushStack(i(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(i(this, e || [], !0))
        }, is: function (e) {
            return !!i(this, "string" == typeof e && re.test(e) ? Z(e) : e || [], !1).length
        }
    });
    var le, ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ce = Z.fn.init = function (e, t) {
        var n, i;
        if (!e)return this;
        if ("string" == typeof e) {
            if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ue.exec(e), !n || !n[1] && t)return !t || t.jquery ? (t || le).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), se.test(n[1]) && Z.isPlainObject(t))for (n in t)Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return i = J.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = J, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof le.ready ? le.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
    };
    ce.prototype = Z.fn, le = Z(J);
    var pe = /^(?:parents|prev(?:Until|All))/, de = {children: !0, contents: !0, next: !0, prev: !0};
    Z.extend({
        dir: function (e, t, n) {
            for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
                if (o && Z(e).is(n))break;
                i.push(e)
            }
            return i
        }, sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), Z.fn.extend({
        has: function (e) {
            var t = Z(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; n > e; e++)if (Z.contains(this, t[e]))return !0
            })
        }, closest: function (e, t) {
            for (var n, i = 0, o = this.length, r = [], s = re.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; o > i; i++)for (n = this[i]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                r.push(n);
                break
            }
            return this.pushStack(r.length > 1 ? Z.unique(r) : r)
        }, index: function (e) {
            return e ? "string" == typeof e ? _.call(Z(e), this[0]) : _.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Z.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return Z.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return Z.dir(e, "parentNode", n)
        }, next: function (e) {
            return o(e, "nextSibling")
        }, prev: function (e) {
            return o(e, "previousSibling")
        }, nextAll: function (e) {
            return Z.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return Z.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return Z.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return Z.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return Z.sibling(e.firstChild)
        }, contents: function (e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    }, function (e, t) {
        Z.fn[e] = function (n, i) {
            var o = Z.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = Z.filter(i, o)), this.length > 1 && (de[e] || Z.unique(o), pe.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var fe = /\S+/g, he = {};
    Z.Callbacks = function (e) {
        e = "string" == typeof e ? he[e] || r(e) : Z.extend({}, e);
        var t, n, i, o, s, a, l = [], u = !e.once && [], c = function (r) {
            for (t = e.memory && r, n = !0, a = o || 0, o = 0, s = l.length, i = !0; l && s > a; a++)if (l[a].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
                t = !1;
                break
            }
            i = !1, l && (u ? u.length && c(u.shift()) : t ? l = [] : p.disable())
        }, p = {
            add: function () {
                if (l) {
                    var n = l.length;
                    !function r(t) {
                        Z.each(t, function (t, n) {
                            var i = Z.type(n);
                            "function" === i ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                        })
                    }(arguments), i ? s = l.length : t && (o = n, c(t))
                }
                return this
            }, remove: function () {
                return l && Z.each(arguments, function (e, t) {
                    for (var n; (n = Z.inArray(t, l, n)) > -1;)l.splice(n, 1), i && (s >= n && s--, a >= n && a--)
                }), this
            }, has: function (e) {
                return e ? Z.inArray(e, l) > -1 : !(!l || !l.length)
            }, empty: function () {
                return l = [], s = 0, this
            }, disable: function () {
                return l = u = t = void 0, this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return u = void 0, t || p.disable(), this
            }, locked: function () {
                return !u
            }, fireWith: function (e, t) {
                return !l || n && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? u.push(t) : c(t)), this
            }, fire: function () {
                return p.fireWith(this, arguments), this
            }, fired: function () {
                return !!n
            }
        };
        return p
    }, Z.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", Z.Callbacks("once memory"), "resolved"], ["reject", "fail", Z.Callbacks("once memory"), "rejected"], ["notify", "progress", Z.Callbacks("memory")]], n = "pending", i = {
                state: function () {
                    return n
                }, always: function () {
                    return o.done(arguments).fail(arguments), this
                }, then: function () {
                    var e = arguments;
                    return Z.Deferred(function (n) {
                        Z.each(t, function (t, r) {
                            var s = Z.isFunction(e[t]) && e[t];
                            o[r[1]](function () {
                                var e = s && s.apply(this, arguments);
                                e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, promise: function (e) {
                    return null != e ? Z.extend(e, i) : i
                }
            }, o = {};
            return i.pipe = i.then, Z.each(t, function (e, r) {
                var s = r[2], a = r[3];
                i[r[1]] = s.add, a && s.add(function () {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function () {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this
                }, o[r[0] + "With"] = s.fireWith
            }), i.promise(o), e && e.call(o, o), o
        }, when: function (e) {
            var t, n, i, o = 0, r = z.call(arguments), s = r.length, a = 1 !== s || e && Z.isFunction(e.promise) ? s : 0, l = 1 === a ? e : Z.Deferred(), u = function (e, n, i) {
                return function (o) {
                    n[e] = this, i[e] = arguments.length > 1 ? z.call(arguments) : o, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                }
            };
            if (s > 1)for (t = new Array(s), n = new Array(s), i = new Array(s); s > o; o++)r[o] && Z.isFunction(r[o].promise) ? r[o].promise().done(u(o, i, r)).fail(l.reject).progress(u(o, n, t)) : --a;
            return a || l.resolveWith(i, r), l.promise()
        }
    });
    var me;
    Z.fn.ready = function (e) {
        return Z.ready.promise().done(e), this
    }, Z.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? Z.readyWait++ : Z.ready(!0)
        }, ready: function (e) {
            (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (me.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
        }
    }), Z.ready.promise = function (t) {
        return me || (me = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), me.promise(t)
    }, Z.ready.promise();
    var ge = Z.access = function (e, t, n, i, o, r, s) {
        var a = 0, l = e.length, u = null == n;
        if ("object" === Z.type(n)) {
            o = !0;
            for (a in n)Z.access(e, t, a, n[a], !0, r, s)
        } else if (void 0 !== i && (o = !0, Z.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
                return u.call(Z(e), n)
            })), t))for (; l > a; a++)t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : u ? t.call(e) : l ? t(e[0], n) : r
    };
    Z.acceptData = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
        key: function (e) {
            if (!a.accepts(e))return 0;
            var t = {}, n = e[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    t[this.expando] = {value: n}, Object.defineProperties(e, t)
                } catch (i) {
                    t[this.expando] = n, Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        }, set: function (e, t, n) {
            var i, o = this.key(e), r = this.cache[o];
            if ("string" == typeof t)r[t] = n; else if (Z.isEmptyObject(r))Z.extend(this.cache[o], t); else for (i in t)r[i] = t[i];
            return r
        }, get: function (e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        }, access: function (e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, i, o, r = this.key(e), s = this.cache[r];
            if (void 0 === t)this.cache[r] = {}; else {
                Z.isArray(t) ? i = t.concat(t.map(Z.camelCase)) : (o = Z.camelCase(t), t in s ? i = [t, o] : (i = o, i = i in s ? [i] : i.match(fe) || [])), n = i.length;
                for (; n--;)delete s[i[n]]
            }
        }, hasData: function (e) {
            return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
        }, discard: function (e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ve = new a, ye = new a, we = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, be = /([A-Z])/g;
    Z.extend({
        hasData: function (e) {
            return ye.hasData(e) || ve.hasData(e)
        }, data: function (e, t, n) {
            return ye.access(e, t, n)
        }, removeData: function (e, t) {
            ye.remove(e, t)
        }, _data: function (e, t, n) {
            return ve.access(e, t, n)
        }, _removeData: function (e, t) {
            ve.remove(e, t)
        }
    }), Z.fn.extend({
        data: function (e, t) {
            var n, i, o, r = this[0], s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = ye.get(r), 1 === r.nodeType && !ve.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--;)s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = Z.camelCase(i.slice(5)), l(r, i, o[i])));
                    ve.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                ye.set(this, e)
            }) : ge(this, function (t) {
                var n, i = Z.camelCase(e);
                if (r && void 0 === t) {
                    if (n = ye.get(r, e), void 0 !== n)return n;
                    if (n = ye.get(r, i), void 0 !== n)return n;
                    if (n = l(r, i, void 0), void 0 !== n)return n
                } else this.each(function () {
                    var n = ye.get(this, i);
                    ye.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                ye.remove(this, e)
            })
        }
    }), Z.extend({
        queue: function (e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = ve.get(e, t), n && (!i || Z.isArray(n) ? i = ve.access(e, t, Z.makeArray(n)) : i.push(n)), i || []) : void 0
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = Z.queue(e, t), i = n.length, o = n.shift(), r = Z._queueHooks(e, t), s = function () {
                Z.dequeue(e, t)
            };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ve.get(e, n) || ve.access(e, n, {
                    empty: Z.Callbacks("once memory").add(function () {
                        ve.remove(e, [t + "queue", n])
                    })
                })
        }
    }), Z.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                Z.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, i = 1, o = Z.Deferred(), r = this, s = this.length, a = function () {
                --i || o.resolveWith(r, [r])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)n = ve.get(r[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ce = ["Top", "Right", "Bottom", "Left"], Te = function (e, t) {
        return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
    }, je = /^(?:checkbox|radio)$/i;
    !function () {
        var e = J.createDocumentFragment(), t = e.appendChild(J.createElement("div")), n = J.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var ke = "undefined";
    Q.focusinBubbles = "onfocusin" in e;
    var Se = /^key/, Ie = /^(?:mouse|pointer|contextmenu)|click/, De = /^(?:focusinfocus|focusoutblur)$/, $e = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function (e, t, n, i, o) {
            var r, s, a, l, u, c, p, d, f, h, m, g = ve.get(e);
            if (g)for (n.handler && (r = n, n = r.handler, o = r.selector), n.guid || (n.guid = Z.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (t) {
                return typeof Z !== ke && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(fe) || [""], u = t.length; u--;)a = $e.exec(t[u]) || [], f = m = a[1], h = (a[2] || "").split(".").sort(), f && (p = Z.event.special[f] || {}, f = (o ? p.delegateType : p.bindType) || f, p = Z.event.special[f] || {}, c = Z.extend({
                type: f,
                origType: m,
                data: i,
                handler: n,
                guid: n.guid,
                selector: o,
                needsContext: o && Z.expr.match.needsContext.test(o),
                namespace: h.join(".")
            }, r), (d = l[f]) || (d = l[f] = [], d.delegateCount = 0, p.setup && p.setup.call(e, i, h, s) !== !1 || e.addEventListener && e.addEventListener(f, s, !1)), p.add && (p.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, c) : d.push(c), Z.event.global[f] = !0)
        },
        remove: function (e, t, n, i, o) {
            var r, s, a, l, u, c, p, d, f, h, m, g = ve.hasData(e) && ve.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(fe) || [""], u = t.length; u--;)if (a = $e.exec(t[u]) || [], f = m = a[1], h = (a[2] || "").split(".").sort(), f) {
                    for (p = Z.event.special[f] || {}, f = (i ? p.delegateType : p.bindType) || f, d = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = d.length; r--;)c = d[r], !o && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(r, 1), c.selector && d.delegateCount--, p.remove && p.remove.call(e, c));
                    s && !d.length && (p.teardown && p.teardown.call(e, h, g.handle) !== !1 || Z.removeEvent(e, f, g.handle), delete l[f])
                } else for (f in l)Z.event.remove(e, f + t[u], n, i, !0);
                Z.isEmptyObject(l) && (delete g.handle, ve.remove(e, "events"))
            }
        },
        trigger: function (t, n, i, o) {
            var r, s, a, l, u, c, p, d = [i || J], f = G.call(t, "type") ? t.type : t, h = G.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || J, 3 !== i.nodeType && 8 !== i.nodeType && !De.test(f + Z.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), u = f.indexOf(":") < 0 && "on" + f, t = t[Z.expando] ? t : new Z.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : Z.makeArray(n, [t]), p = Z.event.special[f] || {}, o || !p.trigger || p.trigger.apply(i, n) !== !1)) {
                if (!o && !p.noBubble && !Z.isWindow(i)) {
                    for (l = p.delegateType || f, De.test(l + f) || (s = s.parentNode); s; s = s.parentNode)d.push(s), a = s;
                    a === (i.ownerDocument || J) && d.push(a.defaultView || a.parentWindow || e)
                }
                for (r = 0; (s = d[r++]) && !t.isPropagationStopped();)t.type = r > 1 ? l : p.bindType || f, c = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"), c && c.apply(s, n), c = u && s[u], c && c.apply && Z.acceptData(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = f, o || t.isDefaultPrevented() || p._default && p._default.apply(d.pop(), n) !== !1 || !Z.acceptData(i) || u && Z.isFunction(i[f]) && !Z.isWindow(i) && (a = i[u], a && (i[u] = null), Z.event.triggered = f, i[f](), Z.event.triggered = void 0, a && (i[u] = a)), t.result
            }
        },
        dispatch: function (e) {
            e = Z.event.fix(e);
            var t, n, i, o, r, s = [], a = z.call(arguments), l = (ve.get(this, "events") || {})[e.type] || [], u = Z.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (s = Z.event.handlers.call(this, e, l), t = 0; (o = s[t++]) && !e.isPropagationStopped();)for (e.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, i = ((Z.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, i, o, r, s = [], a = t.delegateCount, l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))for (; l !== this; l = l.parentNode || this)if (l.disabled !== !0 || "click" !== e.type) {
                for (i = [], n = 0; a > n; n++)r = t[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? Z(o, this).index(l) >= 0 : Z.find(o, this, null, [l]).length), i[o] && i.push(r);
                i.length && s.push({elem: l, handlers: i})
            }
            return a < t.length && s.push({elem: this, handlers: t.slice(a)}), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, o, r = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, i = n.documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[Z.expando])return e;
            var t, n, i, o = e.type, r = e, s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = Ie.test(o) ? this.mouseHooks : Se.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new Z.Event(r), t = i.length; t--;)n = i[t], e[n] = r[n];
            return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, r) : e
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== p() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (e) {
                    return Z.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, i) {
            var o = Z.extend(new Z.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            i ? Z.event.trigger(o, null, t) : Z.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, Z.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, Z.Event = function (e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? u : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
    }, Z.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = u, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = u, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = u, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        Z.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, i = this, o = e.relatedTarget, r = e.handleObj;
                return (!o || o !== i && !Z.contains(i, o)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Q.focusinBubbles || Z.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this, o = ve.access(i, t);
                o || i.addEventListener(e, n, !0), ve.access(i, t, (o || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, o = ve.access(i, t) - 1;
                o ? ve.access(i, t, o) : (i.removeEventListener(e, n, !0), ve.remove(i, t))
            }
        }
    }), Z.fn.extend({
        on: function (e, t, n, i, o) {
            var r, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e)this.on(s, t, n, e[s], o);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1)i = c; else if (!i)return this;
            return 1 === o && (r = i, i = function (e) {
                return Z().off(e), r.apply(this, arguments)
            }, i.guid = r.guid || (r.guid = Z.guid++)), this.each(function () {
                Z.event.add(this, e, i, n, t)
            })
        }, one: function (e, t, n, i) {
            return this.on(e, t, n, i, 1)
        }, off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)return i = e.handleObj, Z(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e)this.off(o, t, e[o]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function () {
                Z.event.remove(this, e, n, t)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                Z.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            return n ? Z.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ee = /<([\w:]+)/, Ne = /<|&#?\w+;/, Pe = /<(?:script|style|link)/i, He = /checked\s*(?:[^=]|=\s*.checked.)/i, Le = /^$|\/(?:java|ecma)script/i, Me = /^true\/(.*)/, We = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, qe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    qe.optgroup = qe.option, qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead, qe.th = qe.td, Z.extend({
        clone: function (e, t, n) {
            var i, o, r, s, a = e.cloneNode(!0), l = Z.contains(e.ownerDocument, e);
            if (!(Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))for (s = v(a), r = v(e), i = 0, o = r.length; o > i; i++)y(r[i], s[i]);
            if (t)if (n)for (r = r || v(e), s = s || v(a), i = 0, o = r.length; o > i; i++)g(r[i], s[i]); else g(e, a);
            return s = v(a, "script"), s.length > 0 && m(s, !l && v(e, "script")), a
        }, buildFragment: function (e, t, n, i) {
            for (var o, r, s, a, l, u, c = t.createDocumentFragment(), p = [], d = 0, f = e.length; f > d; d++)if (o = e[d], o || 0 === o)if ("object" === Z.type(o))Z.merge(p, o.nodeType ? [o] : o); else if (Ne.test(o)) {
                for (r = r || c.appendChild(t.createElement("div")), s = (Ee.exec(o) || ["", ""])[1].toLowerCase(), a = qe[s] || qe._default, r.innerHTML = a[1] + o.replace(Ae, "<$1></$2>") + a[2], u = a[0]; u--;)r = r.lastChild;
                Z.merge(p, r.childNodes), r = c.firstChild, r.textContent = ""
            } else p.push(t.createTextNode(o));
            for (c.textContent = "", d = 0; o = p[d++];)if ((!i || -1 === Z.inArray(o, i)) && (l = Z.contains(o.ownerDocument, o), r = v(c.appendChild(o), "script"), l && m(r), n))for (u = 0; o = r[u++];)Le.test(o.type || "") && n.push(o);
            return c
        }, cleanData: function (e) {
            for (var t, n, i, o, r = Z.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                if (Z.acceptData(n) && (o = n[ve.expando], o && (t = ve.cache[o]))) {
                    if (t.events)for (i in t.events)r[i] ? Z.event.remove(n, i) : Z.removeEvent(n, i, t.handle);
                    ve.cache[o] && delete ve.cache[o]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }), Z.fn.extend({
        text: function (e) {
            return ge(this, function (e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            for (var n, i = e ? Z.filter(e, this) : this, o = 0; null != (n = i[o]); o++)t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && m(v(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return Z.clone(this, e, t)
            })
        }, html: function (e) {
            return ge(this, function (e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType)return t.innerHTML;
                if ("string" == typeof e && !Pe.test(e) && !qe[(Ee.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ae, "<$1></$2>");
                    try {
                        for (; i > n; n++)t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t) {
            e = X.apply([], e);
            var n, i, o, r, s, a, l = 0, u = this.length, c = this, p = u - 1, d = e[0], m = Z.isFunction(d);
            if (m || u > 1 && "string" == typeof d && !Q.checkClone && He.test(d))return this.each(function (n) {
                var i = c.eq(n);
                m && (e[0] = d.call(this, n, i.html())), i.domManip(e, t)
            });
            if (u && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                for (o = Z.map(v(n, "script"), f), r = o.length; u > l; l++)s = n, l !== p && (s = Z.clone(s, !0, !0), r && Z.merge(o, v(s, "script"))), t.call(this[l], s, l);
                if (r)for (a = o[o.length - 1].ownerDocument, Z.map(o, h), l = 0; r > l; l++)s = o[l], Le.test(s.type || "") && !ve.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(We, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        Z.fn[e] = function (e) {
            for (var n, i = [], o = Z(e), r = o.length - 1, s = 0; r >= s; s++)n = s === r ? this : this.clone(!0), Z(o[s])[t](n), Y.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Oe, Fe = {}, Re = /^margin/, Be = new RegExp("^(" + xe + ")(?!px)[a-z%]+$", "i"), ze = function (t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    };
    !function () {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", o.appendChild(r);
            var t = e.getComputedStyle(s, null);
            n = "1%" !== t.top, i = "4px" === t.width, o.removeChild(r)
        }

        var n, i, o = J.documentElement, r = J.createElement("div"), s = J.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === s.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(s), e.getComputedStyle && Z.extend(Q, {
            pixelPosition: function () {
                return t(), n
            }, boxSizingReliable: function () {
                return null == i && t(), i
            }, reliableMarginRight: function () {
                var t, n = s.appendChild(J.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", o.appendChild(r), t = !parseFloat(e.getComputedStyle(n, null).marginRight), o.removeChild(r), s.removeChild(n), t
            }
        }))
    }(), Z.swap = function (e, t, n, i) {
        var o, r, s = {};
        for (r in t)s[r] = e.style[r], e.style[r] = t[r];
        o = n.apply(e, i || []);
        for (r in t)e.style[r] = s[r];
        return o
    };
    var Xe = /^(none|table(?!-c[ea]).+)/, Ye = new RegExp("^(" + xe + ")(.*)$", "i"), _e = new RegExp("^([+-])=(" + xe + ")", "i"), Ve = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ue = {letterSpacing: "0", fontWeight: "400"}, Ge = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = x(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = Z.camelCase(t), l = e.style;
                return t = Z.cssProps[a] || (Z.cssProps[a] = T(l, a)), s = Z.cssHooks[t] || Z.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t] : (r = typeof n, "string" === r && (o = _e.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(Z.css(e, t)), r = "number"), void(null != n && n === n && ("number" !== r || Z.cssNumber[a] || (n += "px"), Q.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))))
            }
        },
        css: function (e, t, n, i) {
            var o, r, s, a = Z.camelCase(t);
            return t = Z.cssProps[a] || (Z.cssProps[a] = T(e.style, a)), s = Z.cssHooks[t] || Z.cssHooks[a], s && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = x(e, t, i)), "normal" === o && t in Ue && (o = Ue[t]), "" === n || n ? (r = parseFloat(o), n === !0 || Z.isNumeric(r) ? r || 0 : o) : o
        }
    }), Z.each(["height", "width"], function (e, t) {
        Z.cssHooks[t] = {
            get: function (e, n, i) {
                return n ? Xe.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ve, function () {
                    return S(e, t, i)
                }) : S(e, t, i) : void 0
            }, set: function (e, n, i) {
                var o = i && ze(e);
                return j(e, n, i ? k(e, t, i, "border-box" === Z.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), Z.cssHooks.marginRight = C(Q.reliableMarginRight, function (e, t) {
        return t ? Z.swap(e, {display: "inline-block"}, x, [e, "marginRight"]) : void 0
    }), Z.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        Z.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)o[e + Ce[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, Re.test(e) || (Z.cssHooks[e + t].set = j)
    }), Z.fn.extend({
        css: function (e, t) {
            return ge(this, function (e, t, n) {
                var i, o, r = {}, s = 0;
                if (Z.isArray(t)) {
                    for (i = ze(e), o = t.length; o > s; s++)r[t[s]] = Z.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return I(this, !0)
        }, hide: function () {
            return I(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Te(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = D, D.prototype = {
        constructor: D, init: function (e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (Z.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = D.propHooks[this.prop];
            return e && e.get ? e.get(this) : D.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = D.propHooks[this.prop];
            return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
        }
    }, D.prototype.init.prototype = D.prototype, D.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Z.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, Z.fx = D.prototype.init, Z.fx.step = {};
    var Qe, Je, Ke = /^(?:toggle|show|hide)$/, Ze = new RegExp("^(?:([+-])=|)(" + xe + ")([a-z%]*)$", "i"), et = /queueHooks$/, tt = [N], nt = {
        "*": [function (e, t) {
            var n = this.createTween(e, t), i = n.cur(), o = Ze.exec(t), r = o && o[3] || (Z.cssNumber[e] ? "" : "px"), s = (Z.cssNumber[e] || "px" !== r && +i) && Ze.exec(Z.css(n.elem, e)), a = 1, l = 20;
            if (s && s[3] !== r) {
                r = r || s[3], o = o || [], s = +i || 1;
                do a = a || ".5", s /= a, Z.style(n.elem, e, s + r); while (a !== (a = n.cur() / i) && 1 !== a && --l)
            }
            return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
        }]
    };
    Z.Animation = Z.extend(H, {
        tweener: function (e, t) {
            Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, o = e.length; o > i; i++)n = e[i], nt[n] = nt[n] || [], nt[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? tt.unshift(e) : tt.push(e)
        }
    }), Z.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? Z.extend({}, e) : {
            complete: n || !n && t || Z.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !Z.isFunction(t) && t
        };
        return i.duration = Z.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in Z.fx.speeds ? Z.fx.speeds[i.duration] : Z.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            Z.isFunction(i.old) && i.old.call(this), i.queue && Z.dequeue(this, i.queue)
        }, i
    }, Z.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(Te).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
        }, animate: function (e, t, n, i) {
            var o = Z.isEmptyObject(e), r = Z.speed(t, n, i), s = function () {
                var t = H(this, Z.extend({}, e), r);
                (o || ve.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
        }, stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, o = null != e && e + "queueHooks", r = Z.timers, s = ve.get(this);
                if (o)s[o] && s[o].stop && i(s[o]); else for (o in s)s[o] && s[o].stop && et.test(o) && i(s[o]);
                for (o = r.length; o--;)r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                (t || !n) && Z.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = ve.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = Z.timers, s = i ? i.length : 0;
                for (n.finish = !0, Z.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;)r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; s > t; t++)i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), Z.each(["toggle", "show", "hide"], function (e, t) {
        var n = Z.fn[t];
        Z.fn[t] = function (e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(A(t, !0), e, i, o)
        }
    }), Z.each({
        slideDown: A("show"),
        slideUp: A("hide"),
        slideToggle: A("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        Z.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), Z.timers = [], Z.fx.tick = function () {
        var e, t = 0, n = Z.timers;
        for (Qe = Z.now(); t < n.length; t++)e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || Z.fx.stop(), Qe = void 0
    }, Z.fx.timer = function (e) {
        Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
    }, Z.fx.interval = 13, Z.fx.start = function () {
        Je || (Je = setInterval(Z.fx.tick, Z.fx.interval))
    }, Z.fx.stop = function () {
        clearInterval(Je), Je = null
    }, Z.fx.speeds = {slow: 600, fast: 200, _default: 400}, Z.fn.delay = function (e, t) {
        return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
            var i = setTimeout(t, e);
            n.stop = function () {
                clearTimeout(i)
            }
        })
    }, function () {
        var e = J.createElement("input"), t = J.createElement("select"), n = t.appendChild(J.createElement("option"));
        e.type = "checkbox", Q.checkOn = "" !== e.value, Q.optSelected = n.selected, t.disabled = !0, Q.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", Q.radioValue = "t" === e.value
    }();
    var it, ot, rt = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function (e, t) {
            return ge(this, Z.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                Z.removeAttr(this, e)
            })
        }
    }), Z.extend({
        attr: function (e, t, n) {
            var i, o, r = e.nodeType;
            return e && 3 !== r && 8 !== r && 2 !== r ? typeof e.getAttribute === ke ? Z.prop(e, t, n) : (1 === r && Z.isXMLDoc(e) || (t = t.toLowerCase(), i = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? ot : it)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = Z.find.attr(e, t), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t)) : void 0
        }, removeAttr: function (e, t) {
            var n, i, o = 0, r = t && t.match(fe);
            if (r && 1 === e.nodeType)for (; n = r[o++];)i = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!Q.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), ot = {
        set: function (e, t, n) {
            return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = rt[t] || Z.find.attr;
        rt[t] = function (e, t, i) {
            var o, r;
            return i || (r = rt[t], rt[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, rt[t] = r), o
        }
    });
    var st = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function (e, t) {
            return ge(this, Z.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[Z.propFix[e] || e]
            })
        }
    }), Z.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, t, n) {
            var i, o, r, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (r = 1 !== s || !Z.isXMLDoc(e), r && (t = Z.propFix[t] || t, o = Z.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]) : void 0
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), Q.optSelected || (Z.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        Z.propFix[this.toLowerCase()] = this
    });
    var at = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function (e) {
            var t, n, i, o, r, s, a = "string" == typeof e && e, l = 0, u = this.length;
            if (Z.isFunction(e))return this.each(function (t) {
                Z(this).addClass(e.call(this, t, this.className))
            });
            if (a)for (t = (e || "").match(fe) || []; u > l; l++)if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : " ")) {
                for (r = 0; o = t[r++];)i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                s = Z.trim(i), n.className !== s && (n.className = s)
            }
            return this
        }, removeClass: function (e) {
            var t, n, i, o, r, s, a = 0 === arguments.length || "string" == typeof e && e, l = 0, u = this.length;
            if (Z.isFunction(e))return this.each(function (t) {
                Z(this).removeClass(e.call(this, t, this.className))
            });
            if (a)for (t = (e || "").match(fe) || []; u > l; l++)if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : "")) {
                for (r = 0; o = t[r++];)for (; i.indexOf(" " + o + " ") >= 0;)i = i.replace(" " + o + " ", " ");
                s = e ? Z.trim(i) : "", n.className !== s && (n.className = s)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function (n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function () {
                if ("string" === n)for (var t, i = 0, o = Z(this), r = e.match(fe) || []; t = r[i++];)o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else(n === ke || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0)return !0;
            return !1
        }
    });
    var lt = /\r/g;
    Z.fn.extend({
        val: function (e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = Z.isFunction(e), this.each(function (n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, Z(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : Z.isArray(o) && (o = Z.map(o, function (e) {
                    return null == e ? "" : e + ""
                })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = Z.valHooks[o.type] || Z.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(lt, "") : null == n ? "" : n)) : void 0
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t : Z.trim(Z.text(e))
                }
            }, select: {
                get: function (e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)if (n = i[l], !(!n.selected && l !== o || (Q.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                        if (t = Z(n).val(), r)return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    for (var n, i, o = e.options, r = Z.makeArray(t), s = o.length; s--;)i = o[s], (i.selected = Z.inArray(i.value, r) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function () {
        Z.valHooks[this] = {
            set: function (e, t) {
                return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
            }
        }, Q.checkOn || (Z.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        Z.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Z.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var ut = Z.now(), ct = /\?/;
    Z.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, Z.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e)return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (i) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
    };
    var pt = /#.*$/, dt = /([?&])_=[^&]*/, ft = /^(.*?):[ \t]*([^\r\n]*)$/gm, ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, mt = /^(?:GET|HEAD)$/, gt = /^\/\//, vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, yt = {}, wt = {}, bt = "*/".concat("*"), xt = e.location.href, Ct = vt.exec(xt.toLowerCase()) || [];
    Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xt,
            type: "GET",
            isLocal: ht.test(Ct[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": bt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": Z.parseJSON, "text xml": Z.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? W(W(e, Z.ajaxSettings), t) : W(Z.ajaxSettings, e)
        },
        ajaxPrefilter: L(yt),
        ajaxTransport: L(wt),
        ajax: function (e, t) {
            function n(e, t, n, s) {
                var l, c, v, y, b, C = t;
                2 !== w && (w = 2, a && clearTimeout(a), i = void 0, r = s || "", x.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (y = q(p, x, n)), y = O(p, y, x, l), l ? (p.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (Z.lastModified[o] = b), b = x.getResponseHeader("etag"), b && (Z.etag[o] = b)), 204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = y.state, c = y.data, v = y.error, l = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || C) + "", l ? h.resolveWith(d, [c, C, x]) : h.rejectWith(d, [x, C, v]), x.statusCode(g), g = void 0, u && f.trigger(l ? "ajaxSuccess" : "ajaxError", [x, p, l ? c : v]), m.fireWith(d, [x, C]), u && (f.trigger("ajaxComplete", [x, p]), --Z.active || Z.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, o, r, s, a, l, u, c, p = Z.ajaxSetup({}, t), d = p.context || p, f = p.context && (d.nodeType || d.jquery) ? Z(d) : Z.event, h = Z.Deferred(), m = Z.Callbacks("once memory"), g = p.statusCode || {}, v = {}, y = {}, w = 0, b = "canceled", x = {
                readyState: 0,
                getResponseHeader: function (e) {
                    var t;
                    if (2 === w) {
                        if (!s)for (s = {}; t = ft.exec(r);)s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function () {
                    return 2 === w ? r : null
                },
                setRequestHeader: function (e, t) {
                    var n = e.toLowerCase();
                    return w || (e = y[n] = y[n] || e, v[e] = t), this
                },
                overrideMimeType: function (e) {
                    return w || (p.mimeType = e), this
                },
                statusCode: function (e) {
                    var t;
                    if (e)if (2 > w)for (t in e)g[t] = [g[t], e[t]]; else x.always(e[x.status]);
                    return this
                },
                abort: function (e) {
                    var t = e || b;
                    return i && i.abort(t), n(0, t), this
                }
            };
            if (h.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, p.url = ((e || p.url || xt) + "").replace(pt, "").replace(gt, Ct[1] + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = Z.trim(p.dataType || "*").toLowerCase().match(fe) || [""], null == p.crossDomain && (l = vt.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] === Ct[1] && l[2] === Ct[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Ct[3] || ("http:" === Ct[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = Z.param(p.data, p.traditional)), M(yt, p, t, x), 2 === w)return x;
            u = Z.event && p.global, u && 0 === Z.active++ && Z.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !mt.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (ct.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = dt.test(o) ? o.replace(dt, "$1_=" + ut++) : o + (ct.test(o) ? "&" : "?") + "_=" + ut++)), p.ifModified && (Z.lastModified[o] && x.setRequestHeader("If-Modified-Since", Z.lastModified[o]), Z.etag[o] && x.setRequestHeader("If-None-Match", Z.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + bt + "; q=0.01" : "") : p.accepts["*"]);
            for (c in p.headers)x.setRequestHeader(c, p.headers[c]);
            if (p.beforeSend && (p.beforeSend.call(d, x, p) === !1 || 2 === w))return x.abort();
            b = "abort";
            for (c in{success: 1, error: 1, complete: 1})x[c](p[c]);
            if (i = M(wt, p, t, x)) {
                x.readyState = 1, u && f.trigger("ajaxSend", [x, p]), p.async && p.timeout > 0 && (a = setTimeout(function () {
                    x.abort("timeout")
                }, p.timeout));
                try {
                    w = 1, i.send(v, n)
                } catch (C) {
                    if (!(2 > w))throw C;
                    n(-1, C)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function (e, t, n) {
            return Z.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }), Z.each(["get", "post"], function (e, t) {
        Z[t] = function (e, n, i, o) {
            return Z.isFunction(n) && (o = o || i, i = n, n = void 0), Z.ajax({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            })
        }
    }), Z._evalUrl = function (e) {
        return Z.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, Z.fn.extend({
        wrapAll: function (e) {
            var t;
            return Z.isFunction(e) ? this.each(function (t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;)e = e.firstElementChild;
                return e
            }).append(this)), this)
        }, wrapInner: function (e) {
            return this.each(Z.isFunction(e) ? function (t) {
                Z(this).wrapInner(e.call(this, t))
            } : function () {
                var t = Z(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = Z.isFunction(e);
            return this.each(function (n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Z.expr.filters.visible = function (e) {
        return !Z.expr.filters.hidden(e)
    };
    var Tt = /%20/g, jt = /\[\]$/, kt = /\r?\n/g, St = /^(?:submit|button|image|reset|file)$/i, It = /^(?:input|select|textarea|keygen)/i;
    Z.param = function (e, t) {
        var n, i = [], o = function (e, t) {
            t = Z.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e))Z.each(e, function () {
            o(this.name, this.value)
        }); else for (n in e)F(n, e[n], t, o);
        return i.join("&").replace(Tt, "+")
    }, Z.fn.extend({
        serialize: function () {
            return Z.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && It.test(this.nodeName) && !St.test(e) && (this.checked || !je.test(e))
            }).map(function (e, t) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function (e) {
                    return {name: t.name, value: e.replace(kt, "\r\n")}
                }) : {name: t.name, value: n.replace(kt, "\r\n")}
            }).get()
        }
    }), Z.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (e) {
        }
    };
    var Dt = 0, $t = {}, At = {0: 200, 1223: 204}, Et = Z.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function () {
        for (var e in $t)$t[e]()
    }), Q.cors = !!Et && "withCredentials" in Et, Q.ajax = Et = !!Et, Z.ajaxTransport(function (e) {
        var t;
        return Q.cors || Et && !e.crossDomain ? {
            send: function (n, i) {
                var o, r = e.xhr(), s = ++Dt;
                if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (o in e.xhrFields)r[o] = e.xhrFields[o];
                e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (o in n)r.setRequestHeader(o, n[o]);
                t = function (e) {
                    return function () {
                        t && (delete $t[s], t = r.onload = r.onerror = null, "abort" === e ? r.abort() : "error" === e ? i(r.status, r.statusText) : i(At[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {text: r.responseText} : void 0, r.getAllResponseHeaders()))
                    }
                }, r.onload = t(), r.onerror = t("error"), t = $t[s] = t("abort");
                try {
                    r.send(e.hasContent && e.data || null)
                } catch (a) {
                    if (t)throw a
                }
            }, abort: function () {
                t && t()
            }
        } : void 0
    }), Z.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return Z.globalEval(e), e
            }
        }
    }), Z.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Z.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, o) {
                    t = Z("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), J.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var Nt = [], Pt = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Nt.pop() || Z.expando + "_" + ut++;
            return this[e] = !0, e
        }
    }), Z.ajaxPrefilter("json jsonp", function (t, n, i) {
        var o, r, s, a = t.jsonp !== !1 && (Pt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Pt.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Pt, "$1" + o) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
            return s || Z.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Nt.push(o)), s && Z.isFunction(r) && r(s[0]), s = r = void 0
        }), "script") : void 0
    }), Z.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e)return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || J;
        var i = se.exec(e), o = !n && [];
        return i ? [t.createElement(i[1])] : (i = Z.buildFragment([e], t, o), o && o.length && Z(o).remove(), Z.merge([], i.childNodes))
    };
    var Ht = Z.fn.load;
    Z.fn.load = function (e, t, n) {
        if ("string" != typeof e && Ht)return Ht.apply(this, arguments);
        var i, o, r, s = this, a = e.indexOf(" ");
        return a >= 0 && (i = Z.trim(e.slice(a)), e = e.slice(0, a)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && Z.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function (e) {
            r = arguments, s.html(i ? Z("<div>").append(Z.parseHTML(e)).find(i) : e)
        }).complete(n && function (e, t) {
                s.each(n, r || [e.responseText, t, e])
            }), this
    }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        Z.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), Z.expr.filters.animated = function (e) {
        return Z.grep(Z.timers, function (t) {
            return e === t.elem
        }).length
    };
    var Lt = e.document.documentElement;
    Z.offset = {
        setOffset: function (e, t, n) {
            var i, o, r, s, a, l, u, c = Z.css(e, "position"), p = Z(e), d = {};
            "static" === c && (e.style.position = "relative"), a = p.offset(), r = Z.css(e, "top"), l = Z.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1, u ? (i = p.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), Z.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : p.css(d)
        }
    }, Z.fn.extend({
        offset: function (e) {
            if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                Z.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0], o = {top: 0, left: 0}, r = i && i.ownerDocument;
            return r ? (t = r.documentElement, Z.contains(t, i) ? (typeof i.getBoundingClientRect !== ke && (o = i.getBoundingClientRect()), n = R(r), {
                top: o.top + n.pageYOffset - t.clientTop,
                left: o.left + n.pageXOffset - t.clientLeft
            }) : o) : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n = this[0], i = {top: 0, left: 0};
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (i = e.offset()), i.top += Z.css(e[0], "borderTopWidth", !0), i.left += Z.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - Z.css(n, "marginTop", !0),
                    left: t.left - i.left - Z.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || Lt; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");)e = e.offsetParent;
                return e || Lt
            })
        }
    }), Z.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, n) {
        var i = "pageYOffset" === n;
        Z.fn[t] = function (o) {
            return ge(this, function (t, o, r) {
                var s = R(t);
                return void 0 === r ? s ? s[n] : t[o] : void(s ? s.scrollTo(i ? e.pageXOffset : r, i ? r : e.pageYOffset) : t[o] = r)
            }, t, o, arguments.length, null)
        }
    }), Z.each(["top", "left"], function (e, t) {
        Z.cssHooks[t] = C(Q.pixelPosition, function (e, n) {
            return n ? (n = x(e, t), Be.test(n) ? Z(e).position()[t] + "px" : n) : void 0
        })
    }), Z.each({Height: "height", Width: "width"}, function (e, t) {
        Z.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
            Z.fn[i] = function (i, o) {
                var r = arguments.length && (n || "boolean" != typeof i), s = n || (i === !0 || o === !0 ? "margin" : "border");
                return ge(this, function (t, n, i) {
                    var o;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? Z.css(t, n, s) : Z.style(t, n, i, s)
                }, t, r ? i : void 0, r, null)
            }
        })
    }), Z.fn.size = function () {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return Z
    });
    var Mt = e.jQuery, Wt = e.$;
    return Z.noConflict = function (t) {
        return e.$ === Z && (e.$ = Wt), t && e.jQuery === Z && (e.jQuery = Mt), Z
    }, typeof t === ke && (e.jQuery = e.$ = Z), Z
}), "function" != typeof Object.create && (Object.create = function (e) {
    function t() {
    }

    return t.prototype = e, new t
}), function (e, t, n) {
    var i = {
        init: function (t, n) {
            this.$elem = e(n), this.options = e.extend({}, e.fn.owlCarousel.options, this.$elem.data(), t), this.userOptions = t, this.loadContent()
        }, loadContent: function () {
            function t(e) {
                var t, n = "";
                if ("function" == typeof i.options.jsonSuccess)i.options.jsonSuccess.apply(this, [e]); else {
                    for (t in e.owl)e.owl.hasOwnProperty(t) && (n += e.owl[t].item);
                    i.$elem.html(n)
                }
                i.logIn()
            }

            var n, i = this;
            "function" == typeof i.options.beforeInit && i.options.beforeInit.apply(this, [i.$elem]), "string" == typeof i.options.jsonPath ? (n = i.options.jsonPath, e.getJSON(n, t)) : i.logIn()
        }, logIn: function () {
            this.$elem.data("owl-originalStyles", this.$elem.attr("style")), this.$elem.data("owl-originalClasses", this.$elem.attr("class")), this.$elem.css({opacity: 0}), this.orignalItems = this.options.items, this.checkBrowser(), this.wrapperWidth = 0, this.checkVisible = null, this.setVars()
        }, setVars: function () {
            return 0 === this.$elem.children().length ? !1 : (this.baseClass(), this.eventTypes(), this.$userItems = this.$elem.children(), this.itemsAmount = this.$userItems.length, this.wrapItems(), this.$owlItems = this.$elem.find(".owl-item"), this.$owlWrapper = this.$elem.find(".owl-wrapper"), this.playDirection = "next", this.prevItem = 0, this.prevArr = [0], this.currentItem = 0, this.customEvents(), void this.onStartup())
        }, onStartup: function () {
            this.updateItems(), this.calculateAll(), this.buildControls(), this.updateControls(), this.response(), this.moveEvents(), this.stopOnHover(), this.owlStatus(), !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle), !0 === this.options.autoPlay && (this.options.autoPlay = 5e3), this.play(), this.$elem.find(".owl-wrapper").css("display", "block"), this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility(), this.onstartup = !1, this.eachMoveUpdate(), "function" == typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
        }, eachMoveUpdate: function () {
            !0 === this.options.lazyLoad && this.lazyLoad(), !0 === this.options.autoHeight && this.autoHeight(), this.onVisibleItems(), "function" == typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
        }, updateVars: function () {
            "function" == typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]), this.watchVisibility(), this.updateItems(), this.calculateAll(), this.updatePosition(), this.updateControls(), this.eachMoveUpdate(), "function" == typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
        }, reload: function () {
            var e = this;
            t.setTimeout(function () {
                e.updateVars()
            }, 0)
        }, watchVisibility: function () {
            var e = this;
            return !1 !== e.$elem.is(":visible") ? !1 : (e.$elem.css({opacity: 0}), t.clearInterval(e.autoPlayInterval), t.clearInterval(e.checkVisible), void(e.checkVisible = t.setInterval(function () {
                e.$elem.is(":visible") && (e.reload(), e.$elem.animate({opacity: 1}, 200), t.clearInterval(e.checkVisible))
            }, 500)))
        }, wrapItems: function () {
            this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), this.wrapperOuter = this.$elem.find(".owl-wrapper-outer"), this.$elem.css("display", "block")
        }, baseClass: function () {
            var e = this.$elem.hasClass(this.options.baseClass), t = this.$elem.hasClass(this.options.theme);
            e || this.$elem.addClass(this.options.baseClass), t || this.$elem.addClass(this.options.theme)
        }, updateItems: function () {
            var t, n;
            if (!1 === this.options.responsive)return !1;
            if (!0 === this.options.singleItem)return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
            if (t = e(this.options.responsiveBaseWidth).width(), t > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems), !1 !== this.options.itemsCustom)for (this.options.itemsCustom.sort(function (e, t) {
                return e[0] - t[0]
            }), n = 0; n < this.options.itemsCustom.length; n += 1)this.options.itemsCustom[n][0] <= t && (this.options.items = this.options.itemsCustom[n][1]); else t <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), t <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), t <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), t <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), t <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
            this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
        }, response: function () {
            var n, i, o = this;
            return !0 !== o.options.responsive ? !1 : (i = e(t).width(), o.resizer = function () {
                e(t).width() !== i && (!1 !== o.options.autoPlay && t.clearInterval(o.autoPlayInterval), t.clearTimeout(n), n = t.setTimeout(function () {
                    i = e(t).width(), o.updateVars()
                }, o.options.responsiveRefreshRate))
            }, void e(t).resize(o.resizer))
        }, updatePosition: function () {
            this.jumpTo(this.currentItem), !1 !== this.options.autoPlay && this.checkAp()
        }, appendItemsSizes: function () {
            var t = this, n = 0, i = t.itemsAmount - t.options.items;
            t.$owlItems.each(function (o) {
                var r = e(this);
                r.css({width: t.itemWidth}).data("owl-item", Number(o)), (0 === o % t.options.items || o === i) && (o > i || (n += 1)), r.data("owl-roundPages", n)
            })
        }, appendWrapperSizes: function () {
            this.$owlWrapper.css({width: this.$owlItems.length * this.itemWidth * 2, left: 0}), this.appendItemsSizes()
        }, calculateAll: function () {
            this.calculateWidth(), this.appendWrapperSizes(), this.loops(), this.max()
        }, calculateWidth: function () {
            this.itemWidth = Math.round(this.$elem.width() / this.options.items)
        }, max: function () {
            var e = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
            return this.options.items > this.itemsAmount ? this.maximumPixels = e = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = e), e
        }, min: function () {
            return 0
        }, loops: function () {
            var t, n, i = 0, o = 0;
            for (this.positionsInArray = [0], this.pagesInArray = [], t = 0; t < this.itemsAmount; t += 1)o += this.itemWidth, this.positionsInArray.push(-o), !0 === this.options.scrollPerPage && (n = e(this.$owlItems[t]), n = n.data("owl-roundPages"), n !== i && (this.pagesInArray[i] = this.positionsInArray[t], i = n))
        }, buildControls: function () {
            (!0 === this.options.navigation || !0 === this.options.pagination) && (this.owlControls = e('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem)), !0 === this.options.pagination && this.buildPagination(), !0 === this.options.navigation && this.buildButtons()
        }, buildButtons: function () {
            var t = this, n = e('<div class="owl-buttons"/>');
            t.owlControls.append(n), t.buttonPrev = e("<div/>", {
                "class": "owl-prev",
                html: t.options.navigationText[0] || ""
            }), t.buttonNext = e("<div/>", {
                "class": "owl-next",
                html: t.options.navigationText[1] || ""
            }), n.append(t.buttonPrev).append(t.buttonNext), n.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function (e) {
                e.preventDefault()
            }), n.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function (n) {
                n.preventDefault(), e(this).hasClass("owl-next") ? t.next() : t.prev()
            })
        }, buildPagination: function () {
            var t = this;
            t.paginationWrapper = e('<div class="owl-pagination"/>'), t.owlControls.append(t.paginationWrapper), t.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (n) {
                n.preventDefault(), Number(e(this).data("owl-page")) !== t.currentItem && t.goTo(Number(e(this).data("owl-page")), !0)
            })
        }, updatePagination: function () {
            var t, n, i, o, r, s;
            if (!1 === this.options.pagination)return !1;
            for (this.paginationWrapper.html(""), t = 0, n = this.itemsAmount - this.itemsAmount % this.options.items, o = 0; o < this.itemsAmount; o += 1)0 === o % this.options.items && (t += 1, n === o && (i = this.itemsAmount - this.options.items), r = e("<div/>", {"class": "owl-page"}), s = e("<span></span>", {
                text: !0 === this.options.paginationNumbers ? t : "",
                "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
            }), r.append(s), r.data("owl-page", n === o ? i : o), r.data("owl-roundPages", t), this.paginationWrapper.append(r));
            this.checkPagination()
        }, checkPagination: function () {
            var t = this;
            return !1 === t.options.pagination ? !1 : void t.paginationWrapper.find(".owl-page").each(function () {
                e(this).data("owl-roundPages") === e(t.$owlItems[t.currentItem]).data("owl-roundPages") && (t.paginationWrapper.find(".owl-page").removeClass("active"), e(this).addClass("active"))
            })
        }, checkNavigation: function () {
            return !1 === this.options.navigation ? !1 : void(!1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled"))))
        }, updateControls: function () {
            this.updatePagination(), this.checkNavigation(), this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
        }, destroyControls: function () {
            this.owlControls && this.owlControls.remove()
        }, next: function (e) {
            if (this.isTransition)return !1;
            if (this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1, this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0)) {
                if (!0 !== this.options.rewindNav)return this.currentItem = this.maximumItem, !1;
                this.currentItem = 0, e = "rewind"
            }
            this.goTo(this.currentItem, e)
        }, prev: function (e) {
            if (this.isTransition)return !1;
            if (this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1), 0 > this.currentItem) {
                if (!0 !== this.options.rewindNav)return this.currentItem = 0, !1;
                this.currentItem = this.maximumItem, e = "rewind"
            }
            this.goTo(this.currentItem, e)
        }, goTo: function (e, n, i) {
            var o = this;
            return o.isTransition ? !1 : ("function" == typeof o.options.beforeMove && o.options.beforeMove.apply(this, [o.$elem]), e >= o.maximumItem ? e = o.maximumItem : 0 >= e && (e = 0), o.currentItem = o.owl.currentItem = e, !1 !== o.options.transitionStyle && "drag" !== i && 1 === o.options.items && !0 === o.browser.support3d ? (o.swapSpeed(0), !0 === o.browser.support3d ? o.transition3d(o.positionsInArray[e]) : o.css2slide(o.positionsInArray[e], 1), o.afterGo(), o.singleItemTransition(), !1) : (e = o.positionsInArray[e], !0 === o.browser.support3d ? (o.isCss3Finish = !1, !0 === n ? (o.swapSpeed("paginationSpeed"), t.setTimeout(function () {
                o.isCss3Finish = !0
            }, o.options.paginationSpeed)) : "rewind" === n ? (o.swapSpeed(o.options.rewindSpeed), t.setTimeout(function () {
                o.isCss3Finish = !0
            }, o.options.rewindSpeed)) : (o.swapSpeed("slideSpeed"), t.setTimeout(function () {
                o.isCss3Finish = !0
            }, o.options.slideSpeed)), o.transition3d(e)) : !0 === n ? o.css2slide(e, o.options.paginationSpeed) : "rewind" === n ? o.css2slide(e, o.options.rewindSpeed) : o.css2slide(e, o.options.slideSpeed), void o.afterGo()))
        }, jumpTo: function (e) {
            "function" == typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]), e >= this.maximumItem || -1 === e ? e = this.maximumItem : 0 >= e && (e = 0), this.swapSpeed(0), !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[e]) : this.css2slide(this.positionsInArray[e], 1), this.currentItem = this.owl.currentItem = e, this.afterGo()
        }, afterGo: function () {
            this.prevArr.push(this.currentItem), this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2], this.prevArr.shift(0), this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp()), "function" == typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem]);
        }, stop: function () {
            this.apStatus = "stop", t.clearInterval(this.autoPlayInterval)
        }, checkAp: function () {
            "stop" !== this.apStatus && this.play()
        }, play: function () {
            var e = this;
            return e.apStatus = "play", !1 === e.options.autoPlay ? !1 : (t.clearInterval(e.autoPlayInterval), void(e.autoPlayInterval = t.setInterval(function () {
                e.next(!0)
            }, e.options.autoPlay)))
        }, swapSpeed: function (e) {
            "slideSpeed" === e ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === e ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" != typeof e && this.$owlWrapper.css(this.addCssSpeed(e))
        }, addCssSpeed: function (e) {
            return {
                "-webkit-transition": "all " + e + "ms ease",
                "-moz-transition": "all " + e + "ms ease",
                "-o-transition": "all " + e + "ms ease",
                transition: "all " + e + "ms ease"
            }
        }, removeTransition: function () {
            return {"-webkit-transition": "", "-moz-transition": "", "-o-transition": "", transition: ""}
        }, doTranslate: function (e) {
            return {
                "-webkit-transform": "translate3d(" + e + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + e + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + e + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + e + "px, 0px, 0px)",
                transform: "translate3d(" + e + "px, 0px,0px)"
            }
        }, transition3d: function (e) {
            this.$owlWrapper.css(this.doTranslate(e))
        }, css2move: function (e) {
            this.$owlWrapper.css({left: e})
        }, css2slide: function (e, t) {
            var n = this;
            n.isCssFinish = !1, n.$owlWrapper.stop(!0, !0).animate({left: e}, {
                duration: t || n.options.slideSpeed,
                complete: function () {
                    n.isCssFinish = !0
                }
            })
        }, checkBrowser: function () {
            var e = n.createElement("div");
            e.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)", e = e.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g), this.browser = {
                support3d: null !== e && 1 === e.length,
                isTouch: "ontouchstart" in t || t.navigator.msMaxTouchPoints
            }
        }, moveEvents: function () {
            (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) && (this.gestures(), this.disabledEvents())
        }, eventTypes: function () {
            var e = ["s", "e", "x"];
            this.ev_types = {}, !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? e = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? e = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (e = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), this.ev_types.start = e[0], this.ev_types.move = e[1], this.ev_types.end = e[2]
        }, disabledEvents: function () {
            this.$elem.on("dragstart.owl", function (e) {
                e.preventDefault()
            }), this.$elem.on("mousedown.disableTextSelect", function (t) {
                return e(t.target).is("input, textarea, select, option")
            })
        }, gestures: function () {
            function i(e) {
                if (void 0 !== e.touches)return {x: e.touches[0].pageX, y: e.touches[0].pageY};
                if (void 0 === e.touches) {
                    if (void 0 !== e.pageX)return {x: e.pageX, y: e.pageY};
                    if (void 0 === e.pageX)return {x: e.clientX, y: e.clientY}
                }
            }

            function o(t) {
                "on" === t ? (e(n).on(a.ev_types.move, r), e(n).on(a.ev_types.end, s)) : "off" === t && (e(n).off(a.ev_types.move), e(n).off(a.ev_types.end))
            }

            function r(o) {
                o = o.originalEvent || o || t.event, a.newPosX = i(o).x - l.offsetX, a.newPosY = i(o).y - l.offsetY, a.newRelativeX = a.newPosX - l.relativePos, "function" == typeof a.options.startDragging && !0 !== l.dragging && 0 !== a.newRelativeX && (l.dragging = !0, a.options.startDragging.apply(a, [a.$elem])), (8 < a.newRelativeX || -8 > a.newRelativeX) && !0 === a.browser.isTouch && (void 0 !== o.preventDefault ? o.preventDefault() : o.returnValue = !1, l.sliding = !0), (10 < a.newPosY || -10 > a.newPosY) && !1 === l.sliding && e(n).off("touchmove.owl"), a.newPosX = Math.max(Math.min(a.newPosX, a.newRelativeX / 5), a.maximumPixels + a.newRelativeX / 5), !0 === a.browser.support3d ? a.transition3d(a.newPosX) : a.css2move(a.newPosX)
            }

            function s(n) {
                n = n.originalEvent || n || t.event;
                var i;
                n.target = n.target || n.srcElement, l.dragging = !1, !0 !== a.browser.isTouch && a.$owlWrapper.removeClass("grabbing"), a.dragDirection = 0 > a.newRelativeX ? a.owl.dragDirection = "left" : a.owl.dragDirection = "right", 0 !== a.newRelativeX && (i = a.getNewPosition(), a.goTo(i, !1, "drag"), l.targetElement === n.target && !0 !== a.browser.isTouch && (e(n.target).on("click.disable", function (t) {
                    t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault(), e(t.target).off("click.disable")
                }), n = e._data(n.target, "events").click, i = n.pop(), n.splice(0, 0, i))), o("off")
            }

            var a = this, l = {
                offsetX: 0,
                offsetY: 0,
                baseElWidth: 0,
                relativePos: 0,
                position: null,
                minSwipe: null,
                maxSwipe: null,
                sliding: null,
                dargging: null,
                targetElement: null
            };
            a.isCssFinish = !0, a.$elem.on(a.ev_types.start, ".owl-wrapper", function (n) {
                n = n.originalEvent || n || t.event;
                var r;
                if (3 === n.which)return !1;
                if (!(a.itemsAmount <= a.options.items)) {
                    if (!1 === a.isCssFinish && !a.options.dragBeforeAnimFinish || !1 === a.isCss3Finish && !a.options.dragBeforeAnimFinish)return !1;
                    !1 !== a.options.autoPlay && t.clearInterval(a.autoPlayInterval), !0 === a.browser.isTouch || a.$owlWrapper.hasClass("grabbing") || a.$owlWrapper.addClass("grabbing"), a.newPosX = 0, a.newRelativeX = 0, e(this).css(a.removeTransition()), r = e(this).position(), l.relativePos = r.left, l.offsetX = i(n).x - r.left, l.offsetY = i(n).y - r.top, o("on"), l.sliding = !1, l.targetElement = n.target || n.srcElement
                }
            })
        }, getNewPosition: function () {
            var e = this.closestItem();
            return e > this.maximumItem ? e = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = e = 0), e
        }, closestItem: function () {
            var t = this, n = !0 === t.options.scrollPerPage ? t.pagesInArray : t.positionsInArray, i = t.newPosX, o = null;
            return e.each(n, function (r, s) {
                i - t.itemWidth / 20 > n[r + 1] && i - t.itemWidth / 20 < s && "left" === t.moveDirection() ? (o = s, t.currentItem = !0 === t.options.scrollPerPage ? e.inArray(o, t.positionsInArray) : r) : i + t.itemWidth / 20 < s && i + t.itemWidth / 20 > (n[r + 1] || n[r] - t.itemWidth) && "right" === t.moveDirection() && (!0 === t.options.scrollPerPage ? (o = n[r + 1] || n[n.length - 1], t.currentItem = e.inArray(o, t.positionsInArray)) : (o = n[r + 1], t.currentItem = r + 1))
            }), t.currentItem
        }, moveDirection: function () {
            var e;
            return 0 > this.newRelativeX ? (e = "right", this.playDirection = "next") : (e = "left", this.playDirection = "prev"), e
        }, customEvents: function () {
            var e = this;
            e.$elem.on("owl.next", function () {
                e.next()
            }), e.$elem.on("owl.prev", function () {
                e.prev()
            }), e.$elem.on("owl.play", function (t, n) {
                e.options.autoPlay = n, e.play(), e.hoverStatus = "play"
            }), e.$elem.on("owl.stop", function () {
                e.stop(), e.hoverStatus = "stop"
            }), e.$elem.on("owl.goTo", function (t, n) {
                e.goTo(n)
            }), e.$elem.on("owl.jumpTo", function (t, n) {
                e.jumpTo(n)
            })
        }, stopOnHover: function () {
            var e = this;
            !0 === e.options.stopOnHover && !0 !== e.browser.isTouch && !1 !== e.options.autoPlay && (e.$elem.on("mouseover", function () {
                e.stop()
            }), e.$elem.on("mouseout", function () {
                "stop" !== e.hoverStatus && e.play()
            }))
        }, lazyLoad: function () {
            var t, n, i, o, r;
            if (!1 === this.options.lazyLoad)return !1;
            for (t = 0; t < this.itemsAmount; t += 1)n = e(this.$owlItems[t]), "loaded" !== n.data("owl-loaded") && (i = n.data("owl-item"), o = n.find(".lazyOwl"), "string" != typeof o.data("src") ? n.data("owl-loaded", "loaded") : (void 0 === n.data("owl-loaded") && (o.hide(), n.addClass("loading").data("owl-loaded", "checked")), (r = !0 === this.options.lazyFollow ? i >= this.currentItem : !0) && i < this.currentItem + this.options.items && o.length && this.lazyPreload(n, o)))
        }, lazyPreload: function (e, n) {
            function i() {
                e.data("owl-loaded", "loaded").removeClass("loading"), n.removeAttr("data-src"), "fade" === s.options.lazyEffect ? n.fadeIn(400) : n.show(), "function" == typeof s.options.afterLazyLoad && s.options.afterLazyLoad.apply(this, [s.$elem])
            }

            function o() {
                a += 1, s.completeImg(n.get(0)) || !0 === r ? i() : 100 >= a ? t.setTimeout(o, 100) : i()
            }

            var r, s = this, a = 0;
            "DIV" === n.prop("tagName") ? (n.css("background-image", "url(" + n.data("src") + ")"), r = !0) : n[0].src = n.data("src"), o()
        }, autoHeight: function () {
            function n() {
                var n = e(r.$owlItems[r.currentItem]).height();
                r.wrapperOuter.css("height", n + "px"), r.wrapperOuter.hasClass("autoHeight") || t.setTimeout(function () {
                    r.wrapperOuter.addClass("autoHeight")
                }, 0)
            }

            function i() {
                o += 1, r.completeImg(s.get(0)) ? n() : 100 >= o ? t.setTimeout(i, 100) : r.wrapperOuter.css("height", "")
            }

            var o, r = this, s = e(r.$owlItems[r.currentItem]).find("img");
            void 0 !== s.get(0) ? (o = 0, i()) : n()
        }, completeImg: function (e) {
            return !e.complete || "undefined" != typeof e.naturalWidth && 0 === e.naturalWidth ? !1 : !0
        }, onVisibleItems: function () {
            var t;
            for (!0 === this.options.addClassActive && this.$owlItems.removeClass("active"), this.visibleItems = [], t = this.currentItem; t < this.currentItem + this.options.items; t += 1)this.visibleItems.push(t), !0 === this.options.addClassActive && e(this.$owlItems[t]).addClass("active");
            this.owl.visibleItems = this.visibleItems
        }, transitionTypes: function (e) {
            this.outClass = "owl-" + e + "-out", this.inClass = "owl-" + e + "-in"
        }, singleItemTransition: function () {
            var e = this, t = e.outClass, n = e.inClass, i = e.$owlItems.eq(e.currentItem), o = e.$owlItems.eq(e.prevItem), r = Math.abs(e.positionsInArray[e.currentItem]) + e.positionsInArray[e.prevItem], s = Math.abs(e.positionsInArray[e.currentItem]) + e.itemWidth / 2;
            e.isTransition = !0, e.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": s + "px",
                "-moz-perspective-origin": s + "px",
                "perspective-origin": s + "px"
            }), o.css({
                position: "relative",
                left: r + "px"
            }).addClass(t).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
                e.endPrev = !0, o.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), e.clearTransStyle(o, t)
            }), i.addClass(n).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
                e.endCurrent = !0, i.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), e.clearTransStyle(i, n)
            })
        }, clearTransStyle: function (e, t) {
            e.css({
                position: "",
                left: ""
            }).removeClass(t), this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
        }, owlStatus: function () {
            this.owl = {
                userOptions: this.userOptions,
                baseElement: this.$elem,
                userItems: this.$userItems,
                owlItems: this.$owlItems,
                currentItem: this.currentItem,
                prevItem: this.prevItem,
                visibleItems: this.visibleItems,
                isTouch: this.browser.isTouch,
                browser: this.browser,
                dragDirection: this.dragDirection
            }
        }, clearEvents: function () {
            this.$elem.off(".owl owl mousedown.disableTextSelect"), e(n).off(".owl owl"), e(t).off("resize", this.resizer)
        }, unWrap: function () {
            0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove()), this.clearEvents(), this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
        }, destroy: function () {
            this.stop(), t.clearInterval(this.checkVisible), this.unWrap(), this.$elem.removeData()
        }, reinit: function (t) {
            t = e.extend({}, this.userOptions, t), this.unWrap(), this.init(t, this.$elem)
        }, addItem: function (e, t) {
            var n;
            return e ? 0 === this.$elem.children().length ? (this.$elem.append(e), this.setVars(), !1) : (this.unWrap(), n = void 0 === t || -1 === t ? -1 : t, n >= this.$userItems.length || -1 === n ? this.$userItems.eq(-1).after(e) : this.$userItems.eq(n).before(e), void this.setVars()) : !1
        }, removeItem: function (e) {
            return 0 === this.$elem.children().length ? !1 : (e = void 0 === e || -1 === e ? -1 : e, this.unWrap(), this.$userItems.eq(e).remove(), void this.setVars())
        }
    };
    e.fn.owlCarousel = function (t) {
        return this.each(function () {
            if (!0 === e(this).data("owl-init"))return !1;
            e(this).data("owl-init", !0);
            var n = Object.create(i);
            n.init(t, this), e.data(this, "owlCarousel", n)
        })
    }, e.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: t,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
    }
}(jQuery, window, document), jQuery.fn.noSelect = function () {
    var e = "none";
    return this.bind("selectstart dragstart mousedown", function () {
        return !1
    }).css({MozUserSelect: e, msUserSelect: e, webkitUserSelect: e, userSelect: e})
}, $(document).ready(function () {
    var e = $(".slider1");
    e.owlCarousel({
        items: 8,
        pagination: !1,
        itemsDesktop: [800, 5],
        itemsDesktopSmall: [500, 4],
        itemsTablet: [400, 3],
        itemsMobile: !0
    }), $(".next").click(function () {
        e.trigger("owl.next")
    }), $(".prev").click(function () {
        e.trigger("owl.prev")
    }), $(".play").click(function () {
        e.trigger("owl.play", 1800)
    }), $(".stop").click(function () {
        e.trigger("owl.stop")
    })
}), $(document).ready(function () {
    var e = $(".slider2");
    e.owlCarousel({
        items: 5,
        pagination: !1,
        itemsDesktop: [800, 5],
        itemsDesktopSmall: [500, 4],
        itemsTablet: [400, 3],
        itemsMobile: !0
    }), $(".next2").click(function () {
        e.trigger("owl.next")
    }), $(".prev2").click(function () {
        e.trigger("owl.prev")
    }), $(".play2").click(function () {
        e.trigger("owl.play", 1800)
    }), $(".stop2").click(function () {
        e.trigger("owl.stop")
    })
}), $(document).ready(function () {
    $("#slider_home").owlCarousel({navigation: !1, slideSpeed: 300, paginationSpeed: 400, singleItem: !0})
}), $(document).ready(function () {
    $(window).scroll(function () {
        $(window).scrollTop() > 720 && $("#fixer").addClass("topers"), $(window).scrollTop() < 719 && $("#fixer").removeClass("topers")
    })
}), $(document).ready(function () {
    $(window).scroll(function () {
        $(window).scrollTop() > 720 && $("#revel").addClass("toprev"), $(window).scrollTop() < 719 && $("#revel").removeClass("toprev")
    })
}), $(document).ready(function () {
    $(window).scroll(function () {
        $(window).scrollTop() > 200 && $("#revel2").addClass("toprev"), $(window).scrollTop() < 199 && $("#revel2").removeClass("toprev")
    })
}), $(document).ready(function () {
    $(window).scroll(function () {
        $(window).scrollTop() > 200 && $("#fixer2").addClass("topers"), $(window).scrollTop() < 199 && $("#fixer2").removeClass("topers")
    })
}), $(document).ready(function () {
    $(".rclic").click(function () {
        var e = $(this).attr("id");
        1 == e ? ($(".rmenus").hide(), $(this).attr("id", "0")) : ($(".rmenus").show(), $(this).attr("id", "1"))
    }), $(".rmenus").mouseup(function () {
        return !1
    }), $(".rclic").mouseup(function () {
        return !1
    }), $(document).mouseup(function () {
        $(".rmenus").hide(), $(".rclic").attr("id", "")
    })
}), $(document).ready(function () {
    $(".report").click(function () {
        var e = $(this).attr("id");
        1 == e ? ($(".reportform").hide(), $(this).attr("id", "0")) : ($(".reportform").show(), $(this).attr("id", "1"))
    }), $(".reportform").mouseup(function () {
        return !1
    }), $(".report").mouseup(function () {
        return !1
    }), $(document).mouseup(function () {
        $(".reportform").hide(), $(".report").attr("id", "")
    })
}), $(document).ready(function () {
    $(".rclic2").click(function () {
        var e = $(this).attr("id");
        1 == e ? ($(".rbuscar").hide(), $(this).attr("id", "0")) : ($(".rbuscar").show(), $(this).attr("id", "1"))
    }), $(".rbuscar").mouseup(function () {
        return !1
    }), $(".rclic2").mouseup(function () {
        return !1
    }), $(document).mouseup(function () {
        $(".rbuscar").hide(), $(".rclic2").attr("id", "")
    })
}), $(document).ready(function () {
    $("#backdrops").owlCarousel({items: 3, lazyLoad: !0, autoPlay: !0, pagination: !1, navigation: !1})
}), !function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function (e) {
    function t(t) {
        var s = t || window.event, a = l.call(arguments, 1), u = 0, c = 0, p = 0, d = 0;
        if (t = e.event.fix(s), t.type = "mousewheel", "detail" in s && (p = -1 * s.detail), "wheelDelta" in s && (p = s.wheelDelta), "wheelDeltaY" in s && (p = s.wheelDeltaY), "wheelDeltaX" in s && (c = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (c = -1 * p, p = 0), u = 0 === p ? c : p, "deltaY" in s && (p = -1 * s.deltaY, u = p), "deltaX" in s && (c = s.deltaX, 0 === p && (u = -1 * c)), 0 !== p || 0 !== c) {
            if (1 === s.deltaMode) {
                var f = e.data(this, "mousewheel-line-height");
                u *= f, p *= f, c *= f
            } else if (2 === s.deltaMode) {
                var h = e.data(this, "mousewheel-page-height");
                u *= h, p *= h, c *= h
            }
            return d = Math.max(Math.abs(p), Math.abs(c)), (!r || r > d) && (r = d, i(s, d) && (r /= 40)), i(s, d) && (u /= 40, c /= 40, p /= 40), u = Math[u >= 1 ? "floor" : "ceil"](u / r), c = Math[c >= 1 ? "floor" : "ceil"](c / r), p = Math[p >= 1 ? "floor" : "ceil"](p / r), t.deltaX = c, t.deltaY = p, t.deltaFactor = r, t.deltaMode = 0, a.unshift(t, u, c, p), o && clearTimeout(o), o = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, a)
        }
    }

    function n() {
        r = null
    }

    function i(e, t) {
        return c.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
    }

    var o, r, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], l = Array.prototype.slice;
    if (e.event.fixHooks)for (var u = s.length; u;)e.event.fixHooks[s[--u]] = e.event.mouseHooks;
    var c = e.event.special.mousewheel = {
        version: "3.1.9", setup: function () {
            if (this.addEventListener)for (var n = a.length; n;)this.addEventListener(a[--n], t, !1); else this.onmousewheel = t;
            e.data(this, "mousewheel-line-height", c.getLineHeight(this)), e.data(this, "mousewheel-page-height", c.getPageHeight(this))
        }, teardown: function () {
            if (this.removeEventListener)for (var e = a.length; e;)this.removeEventListener(a[--e], t, !1); else this.onmousewheel = null
        }, getLineHeight: function (t) {
            return parseInt(e(t)["offsetParent" in e.fn ? "offsetParent" : "parent"]().css("fontSize"), 10)
        }, getPageHeight: function (t) {
            return e(t).height()
        }, settings: {adjustOldDeltas: !0}
    };
    e.fn.extend({
        mousewheel: function (e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        }, unmousewheel: function (e) {
            return this.unbind("mousewheel", e)
        }
    })
}), !function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    e.fn.jScrollPane = function (t) {
        function n(t, n) {
            function i(n) {
                var r, a, u, c, p, h, m = !1, g = !1;
                if (O = n, void 0 === F)p = t.scrollTop(), h = t.scrollLeft(), t.css({
                    overflow: "hidden",
                    padding: 0
                }), R = t.innerWidth() + ve, B = t.innerHeight(), t.width(R), F = e('<div class="jspPane" />').css("padding", ge).append(t.children()), z = e('<div class="jspContainer" />').css({
                    width: R + "px",
                    height: B + "px"
                }).append(F).appendTo(t); else {
                    if (t.css("width", ""), m = O.stickToBottom && S(), g = O.stickToRight && I(), c = t.innerWidth() + ve != R || t.outerHeight() != B, c && (R = t.innerWidth() + ve, B = t.innerHeight(), z.css({
                            width: R + "px",
                            height: B + "px"
                        })), !c && ye == X && F.outerHeight() == Y)return void t.width(R);
                    ye = X, F.css("width", ""), t.width(R), z.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                F.css("overflow", "auto"), X = n.contentWidth ? n.contentWidth : F[0].scrollWidth, Y = F[0].scrollHeight, F.css("overflow", ""), _ = X / R, V = Y / B, U = V > 1, G = _ > 1, G || U ? (t.addClass("jspScrollable"), r = O.maintainPosition && (K || te), r && (a = j(), u = k()), o(), s(), l(), r && (C(g ? X - R : a, !1), x(m ? Y - B : u, !1)), E(), D(), W(), O.enableKeyboardNavigation && P(), O.clickOnTrack && d(), L(), O.hijackInternalLinks && M()) : (t.removeClass("jspScrollable"), F.css({
                    top: 0,
                    left: 0,
                    width: z.width() - ve
                }), $(), N(), H(), f()), O.autoReinitialise && !me ? me = setInterval(function () {
                    i(O)
                }, O.autoReinitialiseDelay) : !O.autoReinitialise && me && clearInterval(me), p && t.scrollTop(0) && x(p, !1), h && t.scrollLeft(0) && C(h, !1), t.trigger("jsp-initialised", [G || U])
            }

            function o() {
                U && (z.append(e('<div class="jspVerticalBar" />').append(e('<div class="jspCap jspCapTop" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragTop" />'), e('<div class="jspDragBottom" />'))), e('<div class="jspCap jspCapBottom" />'))), ne = z.find(">.jspVerticalBar"), ie = ne.find(">.jspTrack"), Q = ie.find(">.jspDrag"), O.showArrows && (ae = e('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", c(0, -1)).bind("click.jsp", A), le = e('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", c(0, 1)).bind("click.jsp", A), O.arrowScrollOnHover && (ae.bind("mouseover.jsp", c(0, -1, ae)), le.bind("mouseover.jsp", c(0, 1, le))), u(ie, O.verticalArrowPositions, ae, le)), re = B, z.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function () {
                    re -= e(this).outerHeight()
                }), Q.hover(function () {
                    Q.addClass("jspHover")
                }, function () {
                    Q.removeClass("jspHover")
                }).bind("mousedown.jsp", function (t) {
                    e("html").bind("dragstart.jsp selectstart.jsp", A), Q.addClass("jspActive");
                    var n = t.pageY - Q.position().top;
                    return e("html").bind("mousemove.jsp", function (e) {
                        m(e.pageY - n, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", h), !1
                }), r())
            }

            function r() {
                ie.height(re + "px"), K = 0, oe = O.verticalGutter + ie.outerWidth(), F.width(R - oe - ve);
                try {
                    0 === ne.position().left && F.css("margin-left", oe + "px")
                } catch (e) {
                }
            }

            function s() {
                G && (z.append(e('<div class="jspHorizontalBar" />').append(e('<div class="jspCap jspCapLeft" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragLeft" />'), e('<div class="jspDragRight" />'))), e('<div class="jspCap jspCapRight" />'))), ue = z.find(">.jspHorizontalBar"), ce = ue.find(">.jspTrack"), Z = ce.find(">.jspDrag"), O.showArrows && (fe = e('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", c(-1, 0)).bind("click.jsp", A), he = e('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", c(1, 0)).bind("click.jsp", A), O.arrowScrollOnHover && (fe.bind("mouseover.jsp", c(-1, 0, fe)), he.bind("mouseover.jsp", c(1, 0, he))), u(ce, O.horizontalArrowPositions, fe, he)), Z.hover(function () {
                    Z.addClass("jspHover")
                }, function () {
                    Z.removeClass("jspHover")
                }).bind("mousedown.jsp", function (t) {
                    e("html").bind("dragstart.jsp selectstart.jsp", A), Z.addClass("jspActive");
                    var n = t.pageX - Z.position().left;
                    return e("html").bind("mousemove.jsp", function (e) {
                        v(e.pageX - n, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", h), !1
                }), pe = z.innerWidth(), a())
            }

            function a() {
                z.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function () {
                    pe -= e(this).outerWidth()
                }), ce.width(pe + "px"), te = 0
            }

            function l() {
                if (G && U) {
                    var t = ce.outerHeight(), n = ie.outerWidth();
                    re -= t, e(ue).find(">.jspCap:visible,>.jspArrow").each(function () {
                        pe += e(this).outerWidth()
                    }), pe -= n, B -= n, R -= t, ce.parent().append(e('<div class="jspCorner" />').css("width", t + "px")), r(), a()
                }
                G && F.width(z.outerWidth() - ve + "px"), Y = F.outerHeight(), V = Y / B, G && (de = Math.ceil(1 / _ * pe), de > O.horizontalDragMaxWidth ? de = O.horizontalDragMaxWidth : de < O.horizontalDragMinWidth && (de = O.horizontalDragMinWidth), Z.width(de + "px"), ee = pe - de, y(te)), U && (se = Math.ceil(1 / V * re), se > O.verticalDragMaxHeight ? se = O.verticalDragMaxHeight : se < O.verticalDragMinHeight && (se = O.verticalDragMinHeight), Q.height(se + "px"), J = re - se, g(K))
            }

            function u(e, t, n, i) {
                var o, r = "before", s = "after";
                "os" == t && (t = /Mac/.test(navigator.platform) ? "after" : "split"), t == r ? s = t : t == s && (r = t, o = n, n = i, i = o), e[r](n)[s](i)
            }

            function c(e, t, n) {
                return function () {
                    return p(e, t, this, n), this.blur(), !1
                }
            }

            function p(t, n, i, o) {
                i = e(i).addClass("jspActive");
                var r, s, a = !0, l = function () {
                    0 !== t && we.scrollByX(t * O.arrowButtonSpeed), 0 !== n && we.scrollByY(n * O.arrowButtonSpeed), s = setTimeout(l, a ? O.initialDelay : O.arrowRepeatFreq), a = !1
                };
                l(), r = o ? "mouseout.jsp" : "mouseup.jsp", o = o || e("html"), o.bind(r, function () {
                    i.removeClass("jspActive"), s && clearTimeout(s), s = null, o.unbind(r)
                })
            }

            function d() {
                f(), U && ie.bind("mousedown.jsp", function (t) {
                    if (void 0 === t.originalTarget || t.originalTarget == t.currentTarget) {
                        var n, i = e(this), o = i.offset(), r = t.pageY - o.top - K, s = !0, a = function () {
                            var e = i.offset(), o = t.pageY - e.top - se / 2, u = B * O.scrollPagePercent, c = J * u / (Y - B);
                            if (0 > r)K - c > o ? we.scrollByY(-u) : m(o); else {
                                if (!(r > 0))return void l();
                                o > K + c ? we.scrollByY(u) : m(o)
                            }
                            n = setTimeout(a, s ? O.initialDelay : O.trackClickRepeatFreq), s = !1
                        }, l = function () {
                            n && clearTimeout(n), n = null, e(document).unbind("mouseup.jsp", l)
                        };
                        return a(), e(document).bind("mouseup.jsp", l), !1
                    }
                }), G && ce.bind("mousedown.jsp", function (t) {
                    if (void 0 === t.originalTarget || t.originalTarget == t.currentTarget) {
                        var n, i = e(this), o = i.offset(), r = t.pageX - o.left - te, s = !0, a = function () {
                            var e = i.offset(), o = t.pageX - e.left - de / 2, u = R * O.scrollPagePercent, c = ee * u / (X - R);
                            if (0 > r)te - c > o ? we.scrollByX(-u) : v(o); else {
                                if (!(r > 0))return void l();
                                o > te + c ? we.scrollByX(u) : v(o)
                            }
                            n = setTimeout(a, s ? O.initialDelay : O.trackClickRepeatFreq), s = !1
                        }, l = function () {
                            n && clearTimeout(n), n = null, e(document).unbind("mouseup.jsp", l)
                        };
                        return a(), e(document).bind("mouseup.jsp", l), !1
                    }
                })
            }

            function f() {
                ce && ce.unbind("mousedown.jsp"), ie && ie.unbind("mousedown.jsp")
            }

            function h() {
                e("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), Q && Q.removeClass("jspActive"), Z && Z.removeClass("jspActive")
            }

            function m(e, t) {
                U && (0 > e ? e = 0 : e > J && (e = J), void 0 === t && (t = O.animateScroll), t ? we.animate(Q, "top", e, g) : (Q.css("top", e), g(e)))
            }

            function g(e) {
                void 0 === e && (e = Q.position().top), z.scrollTop(0), K = e || 0;
                var n = 0 === K, i = K == J, o = e / J, r = -o * (Y - B);
                (be != n || Ce != i) && (be = n, Ce = i, t.trigger("jsp-arrow-change", [be, Ce, xe, Te])), w(n, i), F.css("top", r), t.trigger("jsp-scroll-y", [-r, n, i]).trigger("scroll")
            }

            function v(e, t) {
                G && (0 > e ? e = 0 : e > ee && (e = ee), void 0 === t && (t = O.animateScroll), t ? we.animate(Z, "left", e, y) : (Z.css("left", e), y(e)))
            }

            function y(e) {
                void 0 === e && (e = Z.position().left), z.scrollTop(0), te = e || 0;
                var n = 0 === te, i = te == ee, o = e / ee, r = -o * (X - R);
                (xe != n || Te != i) && (xe = n, Te = i, t.trigger("jsp-arrow-change", [be, Ce, xe, Te])), b(n, i), F.css("left", r), t.trigger("jsp-scroll-x", [-r, n, i]).trigger("scroll")
            }

            function w(e, t) {
                O.showArrows && (ae[e ? "addClass" : "removeClass"]("jspDisabled"), le[t ? "addClass" : "removeClass"]("jspDisabled"))
            }

            function b(e, t) {
                O.showArrows && (fe[e ? "addClass" : "removeClass"]("jspDisabled"), he[t ? "addClass" : "removeClass"]("jspDisabled"))
            }

            function x(e, t) {
                var n = e / (Y - B);
                m(n * J, t)
            }

            function C(e, t) {
                var n = e / (X - R);
                v(n * ee, t)
            }

            function T(t, n, i) {
                var o, r, s, a, l, u, c, p, d, f = 0, h = 0;
                try {
                    o = e(t)
                } catch (m) {
                    return
                }
                for (r = o.outerHeight(), s = o.outerWidth(), z.scrollTop(0), z.scrollLeft(0); !o.is(".jspPane");)if (f += o.position().top, h += o.position().left, o = o.offsetParent(), /^body|html$/i.test(o[0].nodeName))return;
                a = k(), u = a + B, a > f || n ? p = f - O.horizontalGutter : f + r > u && (p = f - B + r + O.horizontalGutter), isNaN(p) || x(p, i), l = j(), c = l + R, l > h || n ? d = h - O.horizontalGutter : h + s > c && (d = h - R + s + O.horizontalGutter), isNaN(d) || C(d, i)
            }

            function j() {
                return -F.position().left
            }

            function k() {
                return -F.position().top
            }

            function S() {
                var e = Y - B;
                return e > 20 && e - k() < 10
            }

            function I() {
                var e = X - R;
                return e > 20 && e - j() < 10
            }

            function D() {
                z.unbind(ke).bind(ke, function (e, t, n, i) {
                    te || (te = 0), K || (K = 0);
                    var o = te, r = K, s = e.deltaFactor || O.mouseWheelSpeed;
                    return we.scrollBy(n * s, -i * s, !1), o == te && r == K
                })
            }

            function $() {
                z.unbind(ke)
            }

            function A() {
                return !1
            }

            function E() {
                F.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function (e) {
                    T(e.target, !1)
                })
            }

            function N() {
                F.find(":input,a").unbind("focus.jsp")
            }

            function P() {
                function n() {
                    var e = te, t = K;
                    switch (i) {
                        case 40:
                            we.scrollByY(O.keyboardSpeed, !1);
                            break;
                        case 38:
                            we.scrollByY(-O.keyboardSpeed, !1);
                            break;
                        case 34:
                        case 32:
                            we.scrollByY(B * O.scrollPagePercent, !1);
                            break;
                        case 33:
                            we.scrollByY(-B * O.scrollPagePercent, !1);
                            break;
                        case 39:
                            we.scrollByX(O.keyboardSpeed, !1);
                            break;
                        case 37:
                            we.scrollByX(-O.keyboardSpeed, !1)
                    }
                    return o = e != te || t != K
                }

                var i, o, r = [];
                G && r.push(ue[0]), U && r.push(ne[0]), F.focus(function () {
                    t.focus()
                }), t.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function (t) {
                    if (t.target === this || r.length && e(t.target).closest(r).length) {
                        var s = te, a = K;
                        switch (t.keyCode) {
                            case 40:
                            case 38:
                            case 34:
                            case 32:
                            case 33:
                            case 39:
                            case 37:
                                i = t.keyCode, n();
                                break;
                            case 35:
                                x(Y - B), i = null;
                                break;
                            case 36:
                                x(0), i = null
                        }
                        return o = t.keyCode == i && s != te || a != K, !o
                    }
                }).bind("keypress.jsp", function (e) {
                    return e.keyCode == i && n(), !o
                }), O.hideFocus ? (t.css("outline", "none"), "hideFocus" in z[0] && t.attr("hideFocus", !0)) : (t.css("outline", ""), "hideFocus" in z[0] && t.attr("hideFocus", !1))
            }

            function H() {
                t.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")
            }

            function L() {
                if (location.hash && location.hash.length > 1) {
                    var t, n, i = escape(location.hash.substr(1));
                    try {
                        t = e("#" + i + ', a[name="' + i + '"]')
                    } catch (o) {
                        return
                    }
                    t.length && F.find(i) && (0 === z.scrollTop() ? n = setInterval(function () {
                        z.scrollTop() > 0 && (T(t, !0), e(document).scrollTop(z.position().top), clearInterval(n))
                    }, 50) : (T(t, !0), e(document).scrollTop(z.position().top)))
                }
            }

            function M() {
                e(document.body).data("jspHijack") || (e(document.body).data("jspHijack", !0), e(document.body).delegate("a[href*=#]", "click", function (t) {
                    var n, i, o, r, s, a, l = this.href.substr(0, this.href.indexOf("#")), u = location.href;
                    if (-1 !== location.href.indexOf("#") && (u = location.href.substr(0, location.href.indexOf("#"))), l === u) {
                        n = escape(this.href.substr(this.href.indexOf("#") + 1));
                        try {
                            i = e("#" + n + ', a[name="' + n + '"]')
                        } catch (c) {
                            return
                        }
                        i.length && (o = i.closest(".jspScrollable"), r = o.data("jsp"), r.scrollToElement(i, !0), o[0].scrollIntoView && (s = e(window).scrollTop(), a = i.offset().top, (s > a || a > s + e(window).height()) && o[0].scrollIntoView()), t.preventDefault())
                    }
                }))
            }

            function W() {
                var e, t, n, i, o, r = !1;
                z.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function (s) {
                    var a = s.originalEvent.touches[0];
                    e = j(), t = k(), n = a.pageX, i = a.pageY, o = !1, r = !0
                }).bind("touchmove.jsp", function (s) {
                    if (r) {
                        var a = s.originalEvent.touches[0], l = te, u = K;
                        return we.scrollTo(e + n - a.pageX, t + i - a.pageY), o = o || Math.abs(n - a.pageX) > 5 || Math.abs(i - a.pageY) > 5, l == te && u == K
                    }
                }).bind("touchend.jsp", function () {
                    r = !1
                }).bind("click.jsp-touchclick", function () {
                    return o ? (o = !1, !1) : void 0
                })
            }

            function q() {
                var e = k(), n = j();
                t.removeClass("jspScrollable").unbind(".jsp"), t.replaceWith(je.append(F.children())), je.scrollTop(e), je.scrollLeft(n), me && clearInterval(me)
            }

            var O, F, R, B, z, X, Y, _, V, U, G, Q, J, K, Z, ee, te, ne, ie, oe, re, se, ae, le, ue, ce, pe, de, fe, he, me, ge, ve, ye, we = this, be = !0, xe = !0, Ce = !1, Te = !1, je = t.clone(!1, !1).empty(), ke = e.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            "border-box" === t.css("box-sizing") ? (ge = 0, ve = 0) : (ge = t.css("paddingTop") + " " + t.css("paddingRight") + " " + t.css("paddingBottom") + " " + t.css("paddingLeft"), ve = (parseInt(t.css("paddingLeft"), 10) || 0) + (parseInt(t.css("paddingRight"), 10) || 0)), e.extend(we, {
                reinitialise: function (t) {
                    t = e.extend({}, O, t), i(t)
                }, scrollToElement: function (e, t, n) {
                    T(e, t, n)
                }, scrollTo: function (e, t, n) {
                    C(e, n), x(t, n)
                }, scrollToX: function (e, t) {
                    C(e, t)
                }, scrollToY: function (e, t) {
                    x(e, t)
                }, scrollToPercentX: function (e, t) {
                    C(e * (X - R), t)
                }, scrollToPercentY: function (e, t) {
                    x(e * (Y - B), t)
                }, scrollBy: function (e, t, n) {
                    we.scrollByX(e, n), we.scrollByY(t, n)
                }, scrollByX: function (e, t) {
                    var n = j() + Math[0 > e ? "floor" : "ceil"](e), i = n / (X - R);
                    v(i * ee, t)
                }, scrollByY: function (e, t) {
                    var n = k() + Math[0 > e ? "floor" : "ceil"](e), i = n / (Y - B);
                    m(i * J, t)
                }, positionDragX: function (e, t) {
                    v(e, t)
                }, positionDragY: function (e, t) {
                    m(e, t)
                }, animate: function (e, t, n, i) {
                    var o = {};
                    o[t] = n, e.animate(o, {duration: O.animateDuration, easing: O.animateEase, queue: !1, step: i})
                }, getContentPositionX: function () {
                    return j()
                }, getContentPositionY: function () {
                    return k()
                }, getContentWidth: function () {
                    return X
                }, getContentHeight: function () {
                    return Y
                }, getPercentScrolledX: function () {
                    return j() / (X - R)
                }, getPercentScrolledY: function () {
                    return k() / (Y - B)
                }, getIsScrollableH: function () {
                    return G
                }, getIsScrollableV: function () {
                    return U
                }, getContentPane: function () {
                    return F
                }, scrollToBottom: function (e) {
                    m(J, e)
                }, hijackInternalLinks: e.noop, destroy: function () {
                    q()
                }
            }), i(n)
        }

        return t = e.extend({}, e.fn.jScrollPane.defaults, t), e.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function () {
            t[this] = t[this] || t.speed
        }), this.each(function () {
            var i = e(this), o = i.data("jsp");
            o ? o.reinitialise(t) : (e("script", i).filter('[type="text/javascript"],:not([type])').remove(), o = new n(i, t), i.data("jsp", o))
        })
    }, e.fn.jScrollPane.defaults = {
        showArrows: !1,
        maintainPosition: !0,
        stickToBottom: !1,
        stickToRight: !1,
        clickOnTrack: !0,
        autoReinitialise: !1,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: void 0,
        animateScroll: !1,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: !1,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 3,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: !1,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: !0,
        hideFocus: !1,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: .8
    }
}), $(function () {
    $(".scrolling").jScrollPane()
});