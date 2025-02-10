import { j as v } from "./index-a790bb40.js";
import { useState as C, useRef as M, useEffect as A, useCallback as z, forwardRef as E, useImperativeHandle as j } from "react";
const V = (r, a, g, d) => {
  let c = a / (g + d), l = Math.floor(r.length / c);
  c > r.length && (c = r.length, l = 1);
  const m = [];
  for (let e = 0; e < c; e++) {
    let o = 0;
    for (let s = 0; s < l && e * l + s < r.length; s++)
      o += r[e * l + s];
    m.push(o / l);
  }
  return m;
}, k = (r, a, g, d, c, l) => {
  const m = a.height / 2, e = a.getContext("2d");
  e && (e.clearRect(0, 0, a.width, a.height), c !== "transparent" && (e.fillStyle = c, e.fillRect(0, 0, a.width, a.height)), r.forEach((o, s) => {
    e.fillStyle = l;
    const n = s * (g + d), t = m - o / 2, f = g, p = o || 1;
    e.beginPath(), e.roundRect ? (e.roundRect(n, t, f, p, 50), e.fill()) : e.fillRect(n, t, f, p);
  }));
}, F = ({
  mediaRecorder: r,
  width: a = "100%",
  height: g = "100%",
  barWidth: d = 2,
  gap: c = 1,
  backgroundColor: l = "transparent",
  barColor: m = "rgb(160, 198, 255)",
  fftSize: e = 1024,
  maxDecibels: o = -10,
  minDecibels: s = -90,
  smoothingTimeConstant: n = 0.4
}) => {
  const [t, f] = C(), [p, y] = C(), [u, R] = C(), i = M(null);
  A(() => {
    if (!r.stream)
      return;
    const w = new AudioContext(), x = w.createAnalyser();
    R(x), x.fftSize = e, x.minDecibels = s, x.maxDecibels = o, x.smoothingTimeConstant = n;
    const D = w.createMediaStreamSource(r.stream);
    return D.connect(x), f(w), y(D), () => {
      D.disconnect(), x.disconnect(), w.state !== "closed" && w.close();
    };
  }, [r.stream]), A(() => {
    u && r.state === "recording" && h();
  }, [u, r.state]);
  const h = z(() => {
    if (!u || !t)
      return;
    const w = new Uint8Array(u == null ? void 0 : u.frequencyBinCount);
    r.state === "recording" ? (u == null || u.getByteFrequencyData(w), b(w), requestAnimationFrame(h)) : r.state === "paused" ? b(w) : r.state === "inactive" && t.state !== "closed" && t.close();
  }, [u, t == null ? void 0 : t.state]);
  A(() => () => {
    t && t.state !== "closed" && t.close(), p == null || p.disconnect(), u == null || u.disconnect();
  }, []);
  const b = (w) => {
    if (!i.current)
      return;
    const x = V(
      w,
      i.current.width,
      d,
      c
    );
    k(
      x,
      i.current,
      d,
      c,
      l,
      m
    );
  };
  return /* @__PURE__ */ v.jsx(
    "canvas",
    {
      ref: i,
      width: a,
      height: g,
      style: {
        aspectRatio: "unset"
      }
    }
  );
}, q = (r, a, g, d, c) => {
  const l = r.getChannelData(0), m = g / (d + c), e = Math.floor(l.length / m), o = a / 2;
  let s = [], n = 0;
  for (let t = 0; t < m; t++) {
    const f = [];
    let p = 0;
    const y = [];
    let u = 0;
    for (let h = 0; h < e && t * e + h < r.length; h++) {
      const b = l[t * e + h];
      b <= 0 && (f.push(b), p++), b > 0 && (y.push(b), u++);
    }
    const R = f.reduce((h, b) => h + b, 0) / p, i = { max: y.reduce((h, b) => h + b, 0) / u, min: R };
    i.max > n && (n = i.max), Math.abs(i.min) > n && (n = Math.abs(i.min)), s.push(i);
  }
  if (o * 0.8 > n * o) {
    const t = o * 0.8 / n;
    s = s.map((f) => ({
      max: f.max * t,
      min: f.min * t
    }));
  }
  return s;
}, S = (r, a, g, d, c, l, m, e = 0, o = 1) => {
  const s = a.height / 2, n = a.getContext("2d");
  if (!n)
    return;
  n.clearRect(0, 0, a.width, a.height), c !== "transparent" && (n.fillStyle = c, n.fillRect(0, 0, a.width, a.height));
  const t = (e || 0) / o;
  r.forEach((f, p) => {
    const y = p / r.length, u = t > y;
    n.fillStyle = u && m ? m : l;
    const R = p * (g + d), i = s + f.min, h = g, b = s + f.max - i;
    n.beginPath(), n.roundRect ? (n.roundRect(R, i, h, b, 50), n.fill()) : n.fillRect(R, i, h, b);
  });
}, B = E(
  ({
    blob: r,
    width: a,
    height: g,
    barWidth: d = 2,
    gap: c = 1,
    currentTime: l,
    style: m,
    backgroundColor: e = "transparent",
    barColor: o = "rgb(184, 184, 184)",
    barPlayedColor: s = "rgb(160, 198, 255)"
  }, n) => {
    const t = M(null), [f, p] = C([]), [y, u] = C(0);
    return j(
      n,
      () => t.current,
      []
    ), A(() => {
      (async () => {
        if (!t.current)
          return;
        if (!r) {
          const i = Array.from({ length: 100 }, () => ({
            max: 0,
            min: 0
          }));
          S(
            i,
            t.current,
            d,
            c,
            e,
            o,
            s
          );
          return;
        }
        const R = await r.arrayBuffer();
        await new AudioContext().decodeAudioData(R, (i) => {
          if (!t.current)
            return;
          u(i.duration);
          const h = q(
            i,
            g,
            a,
            d,
            c
          );
          p(h), S(
            h,
            t.current,
            d,
            c,
            e,
            o,
            s
          );
        });
      })();
    }, [r, t.current]), A(() => {
      t.current && S(
        f,
        t.current,
        d,
        c,
        e,
        o,
        s,
        l,
        y
      );
    }, [l, y]), /* @__PURE__ */ v.jsx(
      "canvas",
      {
        ref: t,
        width: a,
        height: g,
        style: {
          ...m
        }
      }
    );
  }
);
B.displayName = "AudioVisualizer";
export {
  B as AudioVisualizer,
  F as LiveAudioVisualizer
};
