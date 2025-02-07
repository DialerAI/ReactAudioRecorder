(function(){"use strict";(r=>{try{if(typeof window>"u")return;const e=document.createElement("style");e.appendChild(document.createTextNode(r)),document.head.appendChild(e)}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})(".audio-recorder{background-color:#ebebeb;box-shadow:0 2px 5px #bebebe;border-radius:20px;box-sizing:border-box;color:#000;width:40px;display:flex;align-items:center;transition:all .2s ease-in;-webkit-tap-highlight-color:transparent}.audio-recorder-mic{box-sizing:content-box;cursor:pointer;height:16px;color:#000;padding:12px}.audio-recorder .audio-recorder-mic{border-radius:20px}.audio-recorder.recording .audio-recorder-mic{border-radius:0}.audio-recorder-timer,.audio-recorder-status{color:#000;margin-left:10px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:14px;font-weight:400;line-height:1}.audio-recorder-status{margin-left:15px;display:flex;align-items:baseline;flex-grow:1;animation-name:fading-ar-status;animation-duration:2s;animation-iteration-count:infinite}.audio-recorder-status-dot{background-color:#d00;border-radius:50%;height:10px;width:9px;margin-right:5px}.audio-recorder-options{box-sizing:content-box;height:16px;cursor:pointer;padding:12px 6px 12px 12px}.audio-recorder-options~.audio-recorder-options{padding:12px 12px 12px 6px;border-radius:0 5px 5px 0}.recording{border-radius:12px;width:300px;transition:all .2s ease-out}.display-none{display:none}.audio-recorder-visualizer{margin-left:15px;flex-grow:1;align-self:center;display:flex;align-items:center}@keyframes fading-ar-status{0%{opacity:1}50%{opacity:0}to{opacity:1}}")})();
import Ee, { useState as p, useCallback as V, useEffect as Se } from "react";
var ae = { exports: {} }, U = {};
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
function Ae() {
  if (ve)
    return U;
  ve = 1;
  var f = Symbol.for("react.transitional.element"), v = Symbol.for("react.fragment");
  function I(A, u, M) {
    var l = null;
    if (M !== void 0 && (l = "" + M), u.key !== void 0 && (l = "" + u.key), "key" in u) {
      M = {};
      for (var a in u)
        a !== "key" && (M[a] = u[a]);
    } else
      M = u;
    return u = M.ref, {
      $$typeof: f,
      type: A,
      key: l,
      ref: u !== void 0 ? u : null,
      props: M
    };
  }
  return U.Fragment = v, U.jsx = I, U.jsxs = I, U;
}
var G = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function ze() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    function f(e) {
      if (e == null)
        return null;
      if (typeof e == "function")
        return e.$$typeof === Te ? null : e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case w:
          return "Portal";
        case C:
          return "Profiler";
        case b:
          return "StrictMode";
        case F:
          return "Suspense";
        case K:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case X:
            return (e.displayName || "Context") + ".Provider";
          case J:
            return (e._context.displayName || "Context") + ".Consumer";
          case $:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case q:
            return r = e.displayName || null, r !== null ? r : f(e.type) || "Memo";
          case ee:
            r = e._payload, e = e._init;
            try {
              return f(e(r));
            } catch {
            }
        }
      return null;
    }
    function v(e) {
      return "" + e;
    }
    function I(e) {
      try {
        v(e);
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
        ), v(e);
      }
    }
    function A() {
    }
    function u() {
      if (Z === 0) {
        ue = console.log, se = console.info, Me = console.warn, le = console.error, ge = console.group, de = console.groupCollapsed, fe = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: A,
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
      Z++;
    }
    function M() {
      if (Z--, Z === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Y({}, e, { value: ue }),
          info: Y({}, e, { value: se }),
          warn: Y({}, e, { value: Me }),
          error: Y({}, e, { value: le }),
          group: Y({}, e, { value: ge }),
          groupCollapsed: Y({}, e, { value: de }),
          groupEnd: Y({}, e, { value: fe })
        });
      }
      0 > Z && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function l(e) {
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
    function a(e, r) {
      if (!e || oe)
        return "";
      var t = ie.get(e);
      if (t !== void 0)
        return t;
      oe = !0, t = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = O.H, O.H = null, u();
      try {
        var d = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var x = function() {
                  throw Error();
                };
                if (Object.defineProperty(x.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(x, []);
                  } catch (S) {
                    var H = S;
                  }
                  Reflect.construct(e, [], x);
                } else {
                  try {
                    x.call();
                  } catch (S) {
                    H = S;
                  }
                  e.call(x.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (S) {
                  H = S;
                }
                (x = e()) && typeof x.catch == "function" && x.catch(function() {
                });
              }
            } catch (S) {
              if (S && H && typeof S.stack == "string")
                return [S.stack, H.stack];
            }
            return [null, null];
          }
        };
        d.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var n = Object.getOwnPropertyDescriptor(
          d.DetermineComponentFrameRoot,
          "name"
        );
        n && n.configurable && Object.defineProperty(
          d.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var o = d.DetermineComponentFrameRoot(), E = o[0], B = o[1];
        if (E && B) {
          var j = E.split(`
`), R = B.split(`
`);
          for (o = n = 0; n < j.length && !j[n].includes(
            "DetermineComponentFrameRoot"
          ); )
            n++;
          for (; o < R.length && !R[o].includes(
            "DetermineComponentFrameRoot"
          ); )
            o++;
          if (n === j.length || o === R.length)
            for (n = j.length - 1, o = R.length - 1; 1 <= n && 0 <= o && j[n] !== R[o]; )
              o--;
          for (; 1 <= n && 0 <= o; n--, o--)
            if (j[n] !== R[o]) {
              if (n !== 1 || o !== 1)
                do
                  if (n--, o--, 0 > o || j[n] !== R[o]) {
                    var _ = `
` + j[n].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && ie.set(e, _), _;
                  }
                while (1 <= n && 0 <= o);
              break;
            }
        }
      } finally {
        oe = !1, O.H = i, M(), Error.prepareStackTrace = t;
      }
      return j = (j = e ? e.displayName || e.name : "") ? l(j) : "", typeof e == "function" && ie.set(e, j), j;
    }
    function y(e) {
      if (e == null)
        return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return a(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string")
        return l(e);
      switch (e) {
        case F:
          return l("Suspense");
        case K:
          return l("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case $:
            return e = a(e.render, !1), e;
          case q:
            return y(e.type);
          case ee:
            r = e._payload, e = e._init;
            try {
              return y(e(r));
            } catch {
            }
        }
      return "";
    }
    function s() {
      var e = O.A;
      return e === null ? null : e.getOwner();
    }
    function k(e) {
      if (ce.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function N(e, r) {
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
    function g() {
      var e = f(this.type);
      return we[e] || (we[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function h(e, r, t, i, d, n) {
      return t = n.ref, e = {
        $$typeof: c,
        type: e,
        key: r,
        props: n,
        _owner: d
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: g
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
    function z(e, r, t, i, d, n) {
      if (typeof e == "string" || typeof e == "function" || e === m || e === C || e === b || e === F || e === K || e === ye || typeof e == "object" && e !== null && (e.$$typeof === ee || e.$$typeof === q || e.$$typeof === X || e.$$typeof === J || e.$$typeof === $ || e.$$typeof === Le || e.getModuleId !== void 0)) {
        var o = r.children;
        if (o !== void 0)
          if (i)
            if (re(o)) {
              for (i = 0; i < o.length; i++)
                L(o[i], e);
              Object.freeze && Object.freeze(o);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else
            L(o, e);
      } else
        o = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? i = "null" : re(e) ? i = "array" : e !== void 0 && e.$$typeof === c ? (i = "<" + (f(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : i = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          i,
          o
        );
      if (ce.call(r, "key")) {
        o = f(e);
        var E = Object.keys(r).filter(function(j) {
          return j !== "key";
        });
        i = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", me[o + i] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i,
          o,
          E,
          o
        ), me[o + i] = !0);
      }
      if (o = null, t !== void 0 && (I(t), o = "" + t), k(r) && (I(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var B in r)
          B !== "key" && (t[B] = r[B]);
      } else
        t = r;
      return o && N(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), h(e, o, n, d, s(), t);
    }
    function L(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== be) {
        if (re(e))
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            T(i) && D(i, r);
          }
        else if (T(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? t = null : (t = ne && e[ne] || e["@@iterator"], t = typeof t == "function" ? t : null), typeof t == "function" && t !== e.entries && (t = t.call(e), t !== e))
          for (; !(e = t.next()).done; )
            T(e.value) && D(e.value, r);
      }
    }
    function T(e) {
      return typeof e == "object" && e !== null && e.$$typeof === c;
    }
    function D(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = W(r), !Ce[r])) {
        Ce[r] = !0;
        var t = "";
        e && e._owner != null && e._owner !== s() && (t = null, typeof e._owner.tag == "number" ? t = f(e._owner.type) : typeof e._owner.name == "string" && (t = e._owner.name), t = " It was passed a child from " + t + ".");
        var i = O.getCurrentStack;
        O.getCurrentStack = function() {
          var d = y(e.type);
          return i && (d += i() || ""), d;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          t
        ), O.getCurrentStack = i;
      }
    }
    function W(e) {
      var r = "", t = s();
      return t && (t = f(t.type)) && (r = `

Check the render method of \`` + t + "`."), r || (e = f(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var Q = Ee, c = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), J = Symbol.for("react.consumer"), X = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), ye = Symbol.for("react.offscreen"), ne = Symbol.iterator, Te = Symbol.for("react.client.reference"), O = Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ce = Object.prototype.hasOwnProperty, Y = Object.assign, Le = Symbol.for("react.client.reference"), re = Array.isArray, Z = 0, ue, se, Me, le, ge, de, fe;
    A.__reactDisabledLog = !0;
    var te, je, oe = !1, ie = new (typeof WeakMap == "function" ? WeakMap : Map)(), be = Symbol.for("react.client.reference"), Ne, we = {}, me = {}, Ce = {};
    G.Fragment = m, G.jsx = function(e, r, t, i, d) {
      return z(e, r, t, !1, i, d);
    }, G.jsxs = function(e, r, t, i, d) {
      return z(e, r, t, !0, i, d);
    };
  }()), G;
}
process.env.NODE_ENV === "production" ? ae.exports = Ae() : ae.exports = ze();
var P = ae.exports;
const De = (f, v, I) => {
  const [A, u] = p(!1), [M, l] = p(!1), [a, y] = p(0), [s, k] = p(), [N, g] = p(), [h, z] = p(), L = V(() => {
    const c = setInterval(() => {
      y((w) => w + 1);
    }, 1e3);
    g(c);
  }, [y, g]), T = V(() => {
    N != null && clearInterval(N), g(void 0);
  }, [N, g]), D = V(() => {
    N == null && navigator.mediaDevices.getUserMedia({ audio: f ?? !0 }).then((c) => {
      u(!0);
      const w = new MediaRecorder(
        c,
        I
      );
      k(w), w.start(), L(), w.addEventListener("dataavailable", (m) => {
        z(m.data), w.stream.getTracks().forEach((b) => b.stop()), k(void 0);
      });
    }).catch((c) => {
      console.log(c.name, c.message, c.cause), v == null || v(c);
    });
  }, [
    N,
    u,
    k,
    L,
    z,
    v,
    I
  ]), W = V(() => {
    s == null || s.stop(), T(), y(0), u(!1), l(!1);
  }, [
    s,
    y,
    u,
    l,
    T
  ]), Q = V(() => {
    M ? (l(!1), s == null || s.resume(), L()) : (l(!0), T(), s == null || s.pause());
  }, [s, l, L, T]);
  return {
    startRecording: D,
    stopRecording: W,
    togglePauseResume: Q,
    recordingBlob: h,
    isRecording: A,
    isPaused: M,
    recordingTime: a,
    mediaRecorder: s
  };
}, xe = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQ3MCA0NzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3MCA0NzA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yMzUsMzAyLjI5NmM0Ny4xNzcsMCw4NS40MjMtMzguMjQ1LDg1LjQyMy04NS40MjNWODUuNDIzQzMyMC40MjMsMzguMjQ1LDI4Mi4xNzcsMCwyMzUsMHMtODUuNDIzLDM4LjI0NS04NS40MjMsODUuNDIzCgkJCXYxMzEuNDUxQzE0OS41NzcsMjY0LjA1MSwxODcuODIzLDMwMi4yOTYsMjM1LDMwMi4yOTZ6Ii8+CgkJPHBhdGggZD0iTTM1MC40MjMsMTM2LjE0OHYzMGgxNXY1MC43MjZjMCw3MS45MTUtNTguNTA4LDEzMC40MjMtMTMwLjQyMywxMzAuNDIzcy0xMzAuNDIzLTU4LjUwNy0xMzAuNDIzLTEzMC40MjN2LTUwLjcyNmgxNXYtMzAKCQkJaC00NXY4MC43MjZDNzQuNTc3LDMwMC4yNzMsMTM4LjU1MSwzNjksMjIwLDM3Ni41ODlWNDQwaC05MC40NDR2MzBoMjEwLjg4OXYtMzBIMjUwdi02My40MTEKCQkJYzgxLjQ0OS03LjU4OSwxNDUuNDIzLTc2LjMxNywxNDUuNDIzLTE1OS43MTZ2LTgwLjcyNkgzNTAuNDIzeiIvPgoJPC9nPgo8L3N2Zz4K", ke = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDcuNjA3IDQ3LjYwNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcuNjA3IDQ3LjYwNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoJPGc+CgkJPHBhdGggZD0iTTE3Ljk5MSw0MC45NzZjMCwzLjY2Mi0yLjk2OSw2LjYzMS02LjYzMSw2LjYzMWwwLDBjLTMuNjYyLDAtNi42MzEtMi45NjktNi42MzEtNi42MzFWNi42MzFDNC43MjksMi45NjksNy42OTgsMCwxMS4zNiwwCgkJCWwwLDBjMy42NjIsMCw2LjYzMSwyLjk2OSw2LjYzMSw2LjYzMVY0MC45NzZ6Ii8+CgkJPHBhdGggZD0iTTQyLjg3Nyw0MC45NzZjMCwzLjY2Mi0yLjk2OSw2LjYzMS02LjYzMSw2LjYzMWwwLDBjLTMuNjYyLDAtNi42MzEtMi45NjktNi42MzEtNi42MzFWNi42MzEKCQkJQzI5LjYxNiwyLjk2OSwzMi41ODUsMCwzNi4yNDYsMGwwLDBjMy42NjIsMCw2LjYzMSwyLjk2OSw2LjYzMSw2LjYzMVY0MC45NzZ6Ii8+Cgk8L2c+Cjwvc3ZnPgo=", Oe = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQ5NC4xNDggNDk0LjE0OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk0LjE0OCA0OTQuMTQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTQwNS4yODQsMjAxLjE4OEwxMzAuODA0LDEzLjI4QzExOC4xMjgsNC41OTYsMTA1LjM1NiwwLDk0Ljc0LDBDNzQuMjE2LDAsNjEuNTIsMTYuNDcyLDYxLjUyLDQ0LjA0NHY0MDYuMTI0CgkJCQljMCwyNy41NCwxMi42OCw0My45OCwzMy4xNTYsNDMuOThjMTAuNjMyLDAsMjMuMi00LjYsMzUuOTA0LTEzLjMwOGwyNzQuNjA4LTE4Ny45MDRjMTcuNjYtMTIuMTA0LDI3LjQ0LTI4LjM5MiwyNy40NC00NS44ODQKCQkJCUM0MzIuNjMyLDIyOS41NzIsNDIyLjk2NCwyMTMuMjg4LDQwNS4yODQsMjAxLjE4OHoiLz4KCQk8L2c+Cgk8L2c+Cjwvc3ZnPgo=", Ye = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTE3Ljg1IDMuMTVsLTIuOTktM0EuNTA4LjUwOCAwIDAgMCAxNC41IDBIMS40QTEuNDE3IDEuNDE3IDAgMCAwIDAgMS40M3YxNS4xNEExLjQxNyAxLjQxNyAwIDAgMCAxLjQgMThoMTUuMmExLjQxNyAxLjQxNyAwIDAgMCAxLjQtMS40M1YzLjVhLjQ3LjQ3IDAgMCAwLS4xNS0uMzV6TTIgNVYzYTEgMSAwIDAgMSAxLTFoOGExIDEgMCAwIDEgMSAxdjJhMSAxIDAgMCAxLTEgMUgzYTEgMSAwIDAgMS0xLTF6bTcgMTFhNCA0IDAgMSAxIDQtNCA0IDQgMCAwIDEtNCA0eiIvPgo8L3N2Zz4K", Re = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDYuNzM0IDQ2LjczNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDYuNzM0IDQ2LjczNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik00MS4zNDYsMEg1LjM4OEMyLjQxNywwLDAsMi40MTcsMCw1LjM4OHYzNS45NThjMCwyLjk3MSwyLjQxNyw1LjM4OCw1LjM4OCw1LjM4OGgzNS45NThjMi45NzEsMCw1LjM4OC0yLjQxNyw1LjM4OC01LjM4OAoJCVY1LjM4OEM0Ni43MzMsMi40MTcsNDQuMzE2LDAsNDEuMzQ2LDB6Ii8+CjwvZz4KPC9zdmc+Cg==", pe = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj4KICAgIDxwYXRoCiAgICAgICAgZD0iTTEzNS4yIDE3LjdMMTI4IDMySDMyQzE0LjMgMzIgMCA0Ni4zIDAgNjRTMTQuMyA5NiAzMiA5Nkg0MTZjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJIMzIwbC03LjItMTQuM0MzMDcuNCA2LjggMjk2LjMgMCAyODQuMiAwSDE2My44Yy0xMi4xIDAtMjMuMiA2LjgtMjguNiAxNy43ek00MTYgMTI4SDMyTDUzLjIgNDY3YzEuNiAyNS4zIDIyLjYgNDUgNDcuOSA0NUgzNDYuOWMyNS4zIDAgNDYuMy0xOS43IDQ3LjktNDVMNDE2IDEyOHoiIC8+Cjwvc3ZnPg==";
const Be = ({
  onRecordingComplete: f,
  onNotAllowedOrFound: v,
  recorderControls: I,
  audioTrackConstraints: A,
  downloadOnSavePress: u = !1,
  downloadFileExtension: M = "webm",
  mediaRecorderOptions: l,
  classes: a
}) => {
  const {
    startRecording: y,
    stopRecording: s,
    togglePauseResume: k,
    recordingBlob: N,
    isRecording: g,
    isPaused: h,
    recordingTime: z
  } = I ?? // eslint-disable-next-line react-hooks/rules-of-hooks
  De(
    A,
    v,
    l
  ), [L, T] = p(!1), D = (c = !0) => {
    T(c), s();
  }, W = async (c) => {
    const { FFmpeg: w } = await import("./index-cadbd041.js"), m = new w();
    await m.load();
    const b = "input.webm", C = `output.${M}`;
    await m.writeFile(
      b,
      new Uint8Array(await c.arrayBuffer())
    ), await m.exec(["-i", b, C]);
    const J = await m.readFile(C);
    return new Blob([J.buffer], {
      type: `audio/${M}`
    });
  }, Q = async (c) => {
    !crossOriginIsolated && M !== "webm" && console.warn(
      'This website is not "cross-origin isolated". Audio will be downloaded in webm format, since mp3/wav encoding requires cross origin isolation. Please visit https://web.dev/cross-origin-isolation-guide/ and https://web.dev/coop-coep/ for information on how to make your website "cross-origin isolated"'
    );
    const w = crossOriginIsolated ? await W(c) : c, m = crossOriginIsolated ? M : "webm", b = URL.createObjectURL(w), C = document.createElement("a");
    C.style.display = "none", C.href = b, C.download = `audio.${m}`, document.body.appendChild(C), C.click(), C.remove();
  };
  return Se(() => {
    L && N != null && f != null && (f(N), u && Q(N));
  }, [N]), /* @__PURE__ */ P.jsxs(
    "div",
    {
      className: `audio-recorder ${g ? "recording" : ""} ${(a == null ? void 0 : a.AudioRecorderClass) ?? ""}`,
      "data-testid": "audio_recorder",
      children: [
        /* @__PURE__ */ P.jsx(
          "img",
          {
            src: g ? Ye : xe,
            className: `audio-recorder-mic ${(a == null ? void 0 : a.AudioRecorderStartSaveClass) ?? ""}`,
            onClick: g ? () => D() : y,
            "data-testid": "ar_mic",
            title: g ? "Save recording" : "Start recording"
          }
        ),
        g && /* @__PURE__ */ P.jsx(
          "img",
          {
            src: pe,
            className: `audio-recorder-options ${g ? "" : "display-none"} ${(a == null ? void 0 : a.AudioRecorderDiscardClass) ?? ""}`,
            onClick: () => D(!1),
            title: "Discard Recording",
            "data-testid": "ar_cancel"
          }
        ),
        /* @__PURE__ */ P.jsxs(
          "span",
          {
            className: `audio-recorder-timer ${g ? "" : "display-none"} ${(a == null ? void 0 : a.AudioRecorderTimerClass) ?? ""}`,
            "data-testid": "ar_timer",
            children: [
              Math.floor(z / 60),
              ":",
              String(z % 60).padStart(2, "0")
            ]
          }
        ),
        /* @__PURE__ */ P.jsx(
          "img",
          {
            src: h ? Oe : ke,
            className: `audio-recorder-options ml-auto ${g ? "" : "display-none"} ${(a == null ? void 0 : a.AudioRecorderPauseResumeClass) ?? ""}`,
            onClick: k,
            title: h ? "Resume recording" : "Pause recording",
            "data-testid": "ar_pause"
          }
        ),
        /* @__PURE__ */ P.jsx(
          "img",
          {
            src: Re,
            className: `audio-recorder-options ${g ? "" : "display-none"} ${(a == null ? void 0 : a.AudioRecorderDiscardClass) ?? ""}`,
            onClick: () => D(!0),
            title: "Stop Recording",
            "data-testid": "ar_cancel"
          }
        )
      ]
    }
  );
};
export {
  Be as AudioRecorder,
  De as useAudioRecorder
};
