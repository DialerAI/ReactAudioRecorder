import Ie, { useState as W, useCallback as J, useEffect as Ee, Suspense as Ae } from "react";
var ae = { exports: {} }, H = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ve;
function ze() {
  if (ve)
    return H;
  ve = 1;
  var u = Symbol.for("react.transitional.element"), C = Symbol.for("react.fragment");
  function I(D, c, l) {
    var M = null;
    if (l !== void 0 && (M = "" + l), c.key !== void 0 && (M = "" + c.key), "key" in c) {
      l = {};
      for (var L in c)
        L !== "key" && (l[L] = c[L]);
    } else
      l = c;
    return c = l.ref, {
      $$typeof: u,
      type: D,
      key: M,
      ref: c !== void 0 ? c : null,
      props: l
    };
  }
  return H.Fragment = C, H.jsx = I, H.jsxs = I, H;
}
var X = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ye;
function De() {
  return ye || (ye = 1, process.env.NODE_ENV !== "production" && function() {
    function u(e) {
      if (e == null)
        return null;
      if (typeof e == "function")
        return e.$$typeof === Te ? null : e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case w:
          return "Fragment";
        case b:
          return "Portal";
        case E:
          return "Profiler";
        case k:
          return "StrictMode";
        case $:
          return "Suspense";
        case K:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case m:
            return (e.displayName || "Context") + ".Provider";
          case Y:
            return (e._context.displayName || "Context") + ".Consumer";
          case _:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case q:
            return r = e.displayName || null, r !== null ? r : u(e.type) || "Memo";
          case ee:
            r = e._payload, e = e._init;
            try {
              return u(e(r));
            } catch {
            }
        }
      return null;
    }
    function C(e) {
      return "" + e;
    }
    function I(e) {
      try {
        C(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          i
        ), C(e);
      }
    }
    function D() {
    }
    function c() {
      if (U === 0) {
        se = console.log, ue = console.info, le = console.warn, Me = console.error, ge = console.group, de = console.groupCollapsed, fe = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: D,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      U++;
    }
    function l() {
      if (U--, U === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: B({}, e, { value: se }),
          info: B({}, e, { value: ue }),
          warn: B({}, e, { value: le }),
          error: B({}, e, { value: Me }),
          group: B({}, e, { value: ge }),
          groupCollapsed: B({}, e, { value: de }),
          groupEnd: B({}, e, { value: fe })
        });
      }
      0 > U && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function M(e) {
      if (te === void 0)
        try {
          throw Error();
        } catch (t) {
          var r = t.stack.trim().match(/\n( *(at )?)/);
          te = r && r[1] || "", je = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + te + e + je;
    }
    function L(e, r) {
      if (!e || oe)
        return "";
      var t = ie.get(e);
      if (t !== void 0)
        return t;
      oe = !0, t = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = h.H, h.H = null, c();
      try {
        var g = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var O = function() {
                  throw Error();
                };
                if (Object.defineProperty(O.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(O, []);
                  } catch (z) {
                    var F = z;
                  }
                  Reflect.construct(e, [], O);
                } else {
                  try {
                    O.call();
                  } catch (z) {
                    F = z;
                  }
                  e.call(O.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (z) {
                  F = z;
                }
                (O = e()) && typeof O.catch == "function" && O.catch(function() {
                });
              }
            } catch (z) {
              if (z && F && typeof z.stack == "string")
                return [z.stack, F.stack];
            }
            return [null, null];
          }
        };
        g.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var n = Object.getOwnPropertyDescriptor(
          g.DetermineComponentFrameRoot,
          "name"
        );
        n && n.configurable && Object.defineProperty(
          g.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var o = g.DetermineComponentFrameRoot(), A = o[0], Z = o[1];
        if (A && Z) {
          var f = A.split(`
`), P = Z.split(`
`);
          for (o = n = 0; n < f.length && !f[n].includes(
            "DetermineComponentFrameRoot"
          ); )
            n++;
          for (; o < P.length && !P[o].includes(
            "DetermineComponentFrameRoot"
          ); )
            o++;
          if (n === f.length || o === P.length)
            for (n = f.length - 1, o = P.length - 1; 1 <= n && 0 <= o && f[n] !== P[o]; )
              o--;
          for (; 1 <= n && 0 <= o; n--, o--)
            if (f[n] !== P[o]) {
              if (n !== 1 || o !== 1)
                do
                  if (n--, o--, 0 > o || f[n] !== P[o]) {
                    var G = `
` + f[n].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", e.displayName)), typeof e == "function" && ie.set(e, G), G;
                  }
                while (1 <= n && 0 <= o);
              break;
            }
        }
      } finally {
        oe = !1, h.H = i, l(), Error.prepareStackTrace = t;
      }
      return f = (f = e ? e.displayName || e.name : "") ? M(f) : "", typeof e == "function" && ie.set(e, f), f;
    }
    function a(e) {
      if (e == null)
        return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return L(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case $:
          return M("Suspense");
        case K:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            return e = L(e.render, !1), e;
          case q:
            return a(e.type);
          case ee:
            r = e._payload, e = e._init;
            try {
              return a(e(r));
            } catch {
            }
        }
      return "";
    }
    function s() {
      var e = h.A;
      return e === null ? null : e.getOwner();
    }
    function R(e) {
      if (ce.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function S(e, r) {
      function t() {
        Ne || (Ne = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function v() {
      var e = u(this.type);
      return we[e] || (we[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function d(e, r, t, i, g, n) {
      return t = n.ref, e = {
        $$typeof: j,
        type: e,
        key: r,
        props: n,
        _owner: g
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: v
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function x(e, r, t, i, g, n) {
      if (typeof e == "string" || typeof e == "function" || e === w || e === E || e === k || e === $ || e === K || e === Le || typeof e == "object" && e !== null && (e.$$typeof === ee || e.$$typeof === q || e.$$typeof === m || e.$$typeof === Y || e.$$typeof === _ || e.$$typeof === be || e.getModuleId !== void 0)) {
        var o = r.children;
        if (o !== void 0)
          if (i)
            if (re(o)) {
              for (i = 0; i < o.length; i++)
                T(o[i], e);
              Object.freeze && Object.freeze(o);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else
            T(o, e);
      } else
        o = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? i = "null" : re(e) ? i = "array" : e !== void 0 && e.$$typeof === j ? (i = "<" + (u(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : i = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          i,
          o
        );
      if (ce.call(r, "key")) {
        o = u(e);
        var A = Object.keys(r).filter(function(f) {
          return f !== "key";
        });
        i = 0 < A.length ? "{key: someKey, " + A.join(": ..., ") + ": ...}" : "{key: someKey}", me[o + i] || (A = 0 < A.length ? "{" + A.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i,
          o,
          A,
          o
        ), me[o + i] = !0);
      }
      if (o = null, t !== void 0 && (I(t), o = "" + t), R(r) && (I(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var Z in r)
          Z !== "key" && (t[Z] = r[Z]);
      } else
        t = r;
      return o && S(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), d(e, o, n, g, s(), t);
    }
    function T(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== Se) {
        if (re(e))
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            y(i) && Q(i, r);
          }
        else if (y(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? t = null : (t = ne && e[ne] || e["@@iterator"], t = typeof t == "function" ? t : null), typeof t == "function" && t !== e.entries && (t = t.call(e), t !== e))
          for (; !(e = t.next()).done; )
            y(e.value) && Q(e.value, r);
      }
    }
    function y(e) {
      return typeof e == "object" && e !== null && e.$$typeof === j;
    }
    function Q(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = V(r), !Ce[r])) {
        Ce[r] = !0;
        var t = "";
        e && e._owner != null && e._owner !== s() && (t = null, typeof e._owner.tag == "number" ? t = u(e._owner.type) : typeof e._owner.name == "string" && (t = e._owner.name), t = " It was passed a child from " + t + ".");
        var i = h.getCurrentStack;
        h.getCurrentStack = function() {
          var g = a(e.type);
          return i && (g += i() || ""), g;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          t
        ), h.getCurrentStack = i;
      }
    }
    function V(e) {
      var r = "", t = s();
      return t && (t = u(t.type)) && (r = `

Check the render method of \`` + t + "`."), r || (e = u(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var p = Ie, j = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), Y = Symbol.for("react.consumer"), m = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), Le = Symbol.for("react.offscreen"), ne = Symbol.iterator, Te = Symbol.for("react.client.reference"), h = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ce = Object.prototype.hasOwnProperty, B = Object.assign, be = Symbol.for("react.client.reference"), re = Array.isArray, U = 0, se, ue, le, Me, ge, de, fe;
    D.__reactDisabledLog = !0;
    var te, je, oe = !1, ie = new (typeof WeakMap == "function" ? WeakMap : Map)(), Se = Symbol.for("react.client.reference"), Ne, we = {}, me = {}, Ce = {};
    X.Fragment = w, X.jsx = function(e, r, t, i, g) {
      return x(e, r, t, !1, i, g);
    }, X.jsxs = function(e, r, t, i, g) {
      return x(e, r, t, !0, i, g);
    };
  }()), X;
}
process.env.NODE_ENV === "production" ? ae.exports = ze() : ae.exports = De();
var N = ae.exports;
const xe = (u, C, I) => {
  const [D, c] = W(!1), [l, M] = W(!1), [L, a] = W(0), [s, R] = W(), [S, v] = W(), [d, x] = W(), T = J(() => {
    const j = setInterval(() => {
      a((b) => b + 1);
    }, 1e3);
    v(j);
  }, [a, v]), y = J(() => {
    S != null && clearInterval(S), v(void 0);
  }, [S, v]), Q = J(() => {
    S == null && navigator.mediaDevices.getUserMedia({ audio: u ?? !0 }).then((j) => {
      c(!0);
      const b = new MediaRecorder(
        j,
        I
      );
      R(b), b.start(), T(), b.addEventListener("dataavailable", (w) => {
        x(w.data), b.stream.getTracks().forEach((k) => k.stop()), R(void 0);
      });
    }).catch((j) => {
      console.log(j.name, j.message, j.cause), C == null || C(j);
    });
  }, [
    S,
    c,
    R,
    T,
    x,
    C,
    I
  ]), V = J(() => {
    s == null || s.stop(), y(), a(0), c(!1), M(!1);
  }, [
    s,
    a,
    c,
    M,
    y
  ]), p = J(() => {
    l ? (M(!1), s == null || s.resume(), T()) : (M(!0), y(), s == null || s.pause());
  }, [s, M, T, y]);
  return {
    startRecording: Q,
    stopRecording: V,
    togglePauseResume: p,
    recordingBlob: d,
    isRecording: D,
    isPaused: l,
    recordingTime: L,
    mediaRecorder: s
  };
}, ke = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQ3MCA0NzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3MCA0NzA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yMzUsMzAyLjI5NmM0Ny4xNzcsMCw4NS40MjMtMzguMjQ1LDg1LjQyMy04NS40MjNWODUuNDIzQzMyMC40MjMsMzguMjQ1LDI4Mi4xNzcsMCwyMzUsMHMtODUuNDIzLDM4LjI0NS04NS40MjMsODUuNDIzCgkJCXYxMzEuNDUxQzE0OS41NzcsMjY0LjA1MSwxODcuODIzLDMwMi4yOTYsMjM1LDMwMi4yOTZ6Ii8+CgkJPHBhdGggZD0iTTM1MC40MjMsMTM2LjE0OHYzMGgxNXY1MC43MjZjMCw3MS45MTUtNTguNTA4LDEzMC40MjMtMTMwLjQyMywxMzAuNDIzcy0xMzAuNDIzLTU4LjUwNy0xMzAuNDIzLTEzMC40MjN2LTUwLjcyNmgxNXYtMzAKCQkJaC00NXY4MC43MjZDNzQuNTc3LDMwMC4yNzMsMTM4LjU1MSwzNjksMjIwLDM3Ni41ODlWNDQwaC05MC40NDR2MzBoMjEwLjg4OXYtMzBIMjUwdi02My40MTEKCQkJYzgxLjQ0OS03LjU4OSwxNDUuNDIzLTc2LjMxNywxNDUuNDIzLTE1OS43MTZ2LTgwLjcyNkgzNTAuNDIzeiIvPgoJPC9nPgo8L3N2Zz4K", Oe = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDcuNjA3IDQ3LjYwNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcuNjA3IDQ3LjYwNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoJPGc+CgkJPHBhdGggZD0iTTE3Ljk5MSw0MC45NzZjMCwzLjY2Mi0yLjk2OSw2LjYzMS02LjYzMSw2LjYzMWwwLDBjLTMuNjYyLDAtNi42MzEtMi45NjktNi42MzEtNi42MzFWNi42MzFDNC43MjksMi45NjksNy42OTgsMCwxMS4zNiwwCgkJCWwwLDBjMy42NjIsMCw2LjYzMSwyLjk2OSw2LjYzMSw2LjYzMVY0MC45NzZ6Ii8+CgkJPHBhdGggZD0iTTQyLjg3Nyw0MC45NzZjMCwzLjY2Mi0yLjk2OSw2LjYzMS02LjYzMSw2LjYzMWwwLDBjLTMuNjYyLDAtNi42MzEtMi45NjktNi42MzEtNi42MzFWNi42MzEKCQkJQzI5LjYxNiwyLjk2OSwzMi41ODUsMCwzNi4yNDYsMGwwLDBjMy42NjIsMCw2LjYzMSwyLjk2OSw2LjYzMSw2LjYzMVY0MC45NzZ6Ii8+Cgk8L2c+Cjwvc3ZnPgo=", Re = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQ5NC4xNDggNDk0LjE0OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk0LjE0OCA0OTQuMTQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTQwNS4yODQsMjAxLjE4OEwxMzAuODA0LDEzLjI4QzExOC4xMjgsNC41OTYsMTA1LjM1NiwwLDk0Ljc0LDBDNzQuMjE2LDAsNjEuNTIsMTYuNDcyLDYxLjUyLDQ0LjA0NHY0MDYuMTI0CgkJCQljMCwyNy41NCwxMi42OCw0My45OCwzMy4xNTYsNDMuOThjMTAuNjMyLDAsMjMuMi00LjYsMzUuOTA0LTEzLjMwOGwyNzQuNjA4LTE4Ny45MDRjMTcuNjYtMTIuMTA0LDI3LjQ0LTI4LjM5MiwyNy40NC00NS44ODQKCQkJCUM0MzIuNjMyLDIyOS41NzIsNDIyLjk2NCwyMTMuMjg4LDQwNS4yODQsMjAxLjE4OHoiLz4KCQk8L2c+Cgk8L2c+Cjwvc3ZnPgo=", pe = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTE3Ljg1IDMuMTVsLTIuOTktM0EuNTA4LjUwOCAwIDAgMCAxNC41IDBIMS40QTEuNDE3IDEuNDE3IDAgMCAwIDAgMS40M3YxNS4xNEExLjQxNyAxLjQxNyAwIDAgMCAxLjQgMThoMTUuMmExLjQxNyAxLjQxNyAwIDAgMCAxLjQtMS40M1YzLjVhLjQ3LjQ3IDAgMCAwLS4xNS0uMzV6TTIgNVYzYTEgMSAwIDAgMSAxLTFoOGExIDEgMCAwIDEgMSAxdjJhMSAxIDAgMCAxLTEgMUgzYTEgMSAwIDAgMS0xLTF6bTcgMTFhNCA0IDAgMSAxIDQtNCA0IDQgMCAwIDEtNCA0eiIvPgo8L3N2Zz4K", Ye = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDYuNzM0IDQ2LjczNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDYuNzM0IDQ2LjczNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik00MS4zNDYsMEg1LjM4OEMyLjQxNywwLDAsMi40MTcsMCw1LjM4OHYzNS45NThjMCwyLjk3MSwyLjQxNyw1LjM4OCw1LjM4OCw1LjM4OGgzNS45NThjMi45NzEsMCw1LjM4OC0yLjQxNyw1LjM4OC01LjM4OAoJCVY1LjM4OEM0Ni43MzMsMi40MTcsNDQuMzE2LDAsNDEuMzQ2LDB6Ii8+CjwvZz4KPC9zdmc+Cg==", he = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj4KICAgIDxwYXRoCiAgICAgICAgZD0iTTEzNS4yIDE3LjdMMTI4IDMySDMyQzE0LjMgMzIgMCA0Ni4zIDAgNjRTMTQuMyA5NiAzMiA5Nkg0MTZjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJIMzIwbC03LjItMTQuM0MzMDcuNCA2LjggMjk2LjMgMCAyODQuMiAwSDE2My44Yy0xMi4xIDAtMjMuMiA2LjgtMjguNiAxNy43ek00MTYgMTI4SDMyTDUzLjIgNDY3YzEuNiAyNS4zIDIyLjYgNDUgNDcuOSA0NUgzNDYuOWMyNS4zIDAgNDYuMy0xOS43IDQ3LjktNDVMNDE2IDEyOHoiIC8+Cjwvc3ZnPg==";
const Be = Ie.lazy(async () => {
  const { LiveAudioVisualizer: u } = await import("./react-audio-visualize.es-831d2fb3.js");
  return { default: u };
}), We = ({
  onRecordingComplete: u,
  onNotAllowedOrFound: C,
  recorderControls: I,
  audioTrackConstraints: D,
  downloadOnSavePress: c = !1,
  downloadFileExtension: l = "webm",
  showVisualizer: M = !1,
  mediaRecorderOptions: L,
  classes: a
}) => {
  const {
    startRecording: s,
    stopRecording: R,
    togglePauseResume: S,
    recordingBlob: v,
    isRecording: d,
    isPaused: x,
    recordingTime: T,
    mediaRecorder: y
  } = I ?? // eslint-disable-next-line react-hooks/rules-of-hooks
  xe(
    D,
    C,
    L
  ), [Q, V] = W(!1), p = (w = !0) => {
    V(w), R();
  }, j = async (w) => {
    const { FFmpeg: k } = await import("./index-cadbd041.js"), E = new k();
    await E.load();
    const Y = "input.webm", m = `output.${l}`;
    await E.writeFile(
      Y,
      new Uint8Array(await w.arrayBuffer())
    ), await E.exec(["-i", Y, m]);
    const _ = await E.readFile(m);
    return new Blob([_.buffer], {
      type: `audio/${l}`
    });
  }, b = async (w) => {
    !crossOriginIsolated && l !== "webm" && console.warn(
      'This website is not "cross-origin isolated". Audio will be downloaded in webm format, since mp3/wav encoding requires cross origin isolation. Please visit https://web.dev/cross-origin-isolation-guide/ and https://web.dev/coop-coep/ for information on how to make your website "cross-origin isolated"'
    );
    const k = crossOriginIsolated ? await j(w) : w, E = crossOriginIsolated ? l : "webm", Y = URL.createObjectURL(k), m = document.createElement("a");
    m.style.display = "none", m.href = Y, m.download = `audio.${E}`, document.body.appendChild(m), m.click(), m.remove();
  };
  return Ee(() => {
    Q && v != null && u != null && (u(v), c && b(v));
  }, [v]), /* @__PURE__ */ N.jsxs(
    "div",
    {
      className: `audio-recorder ${d ? "recording" : ""} ${(a == null ? void 0 : a.AudioRecorderClass) ?? ""}`,
      "data-testid": "audio_recorder",
      children: [
        /* @__PURE__ */ N.jsx(
          "img",
          {
            src: d ? pe : ke,
            className: `audio-recorder-mic ${(a == null ? void 0 : a.AudioRecorderStartSaveClass) ?? ""}`,
            onClick: d ? () => p() : s,
            "data-testid": "ar_mic",
            title: d ? "Save recording" : "Start recording"
          }
        ),
        d && /* @__PURE__ */ N.jsx(
          "img",
          {
            src: he,
            className: `audio-recorder-options ${d ? "" : "display-none"} ${(a == null ? void 0 : a.AudioRecorderDiscardClass) ?? ""}`,
            onClick: () => p(!1),
            title: "Discard Recording",
            "data-testid": "ar_cancel"
          }
        ),
        /* @__PURE__ */ N.jsxs(
          "span",
          {
            className: `audio-recorder-timer ${d ? "" : "display-none"} ${(a == null ? void 0 : a.AudioRecorderTimerClass) ?? ""}`,
            "data-testid": "ar_timer",
            children: [
              Math.floor(T / 60),
              ":",
              String(T % 60).padStart(2, "0")
            ]
          }
        ),
        M ? /* @__PURE__ */ N.jsx(
          "span",
          {
            className: `audio-recorder-visualizer ${d ? "" : "display-none"}`,
            children: y && /* @__PURE__ */ N.jsx(Ae, { fallback: /* @__PURE__ */ N.jsx(N.Fragment, {}), children: /* @__PURE__ */ N.jsx(
              Be,
              {
                mediaRecorder: y,
                barWidth: 2,
                gap: 2,
                width: 140,
                height: 30,
                fftSize: 512,
                maxDecibels: -10,
                minDecibels: -80,
                smoothingTimeConstant: 0.4
              }
            ) })
          }
        ) : /* @__PURE__ */ N.jsxs(
          "span",
          {
            className: `audio-recorder-status ${d ? "" : "display-none"} ${(a == null ? void 0 : a.AudioRecorderStatusClass) ?? ""}`,
            children: [
              /* @__PURE__ */ N.jsx("span", { className: "audio-recorder-status-dot" }),
              "Recording"
            ]
          }
        ),
        /* @__PURE__ */ N.jsx(
          "img",
          {
            src: x ? Re : Oe,
            className: `audio-recorder-options ${d ? "" : "display-none"} ${(a == null ? void 0 : a.AudioRecorderPauseResumeClass) ?? ""}`,
            onClick: S,
            title: x ? "Resume recording" : "Pause recording",
            "data-testid": "ar_pause"
          }
        ),
        /* @__PURE__ */ N.jsx(
          "img",
          {
            src: Ye,
            className: `audio-recorder-options ${d ? "" : "display-none"} ${(a == null ? void 0 : a.AudioRecorderDiscardClass) ?? ""}`,
            onClick: () => p(!0),
            title: "Stop Recording",
            "data-testid": "ar_cancel"
          }
        )
      ]
    }
  );
};
export {
  We as A,
  N as j,
  xe as u
};
