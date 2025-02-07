var N = Object.defineProperty;
var m = (E, t, e) => t in E ? N(E, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : E[t] = e;
var n = (E, t, e) => (m(E, typeof t != "symbol" ? t + "" : t, e), e), u = (E, t, e) => {
  if (!t.has(E))
    throw TypeError("Cannot " + e);
};
var s = (E, t, e) => (u(E, t, "read from private field"), e ? e.call(E) : t.get(E)), d = (E, t, e) => {
  if (t.has(E))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(E) : t.set(E, e);
}, c = (E, t, e, r) => (u(E, t, "write to private field"), r ? r.call(E, e) : t.set(E, e), e);
var i;
(function(E) {
  E.LOAD = "LOAD", E.EXEC = "EXEC", E.FFPROBE = "FFPROBE", E.WRITE_FILE = "WRITE_FILE", E.READ_FILE = "READ_FILE", E.DELETE_FILE = "DELETE_FILE", E.RENAME = "RENAME", E.CREATE_DIR = "CREATE_DIR", E.LIST_DIR = "LIST_DIR", E.DELETE_DIR = "DELETE_DIR", E.ERROR = "ERROR", E.DOWNLOAD = "DOWNLOAD", E.PROGRESS = "PROGRESS", E.LOG = "LOG", E.MOUNT = "MOUNT", E.UNMOUNT = "UNMOUNT";
})(i || (i = {}));
const S = (() => {
  let E = 0;
  return () => E++;
})(), w = new Error("ffmpeg is not loaded, call `await ffmpeg.load()` first"), U = new Error("called FFmpeg.terminate()");
var a, D, h, O, f, I, R;
class b {
  constructor() {
    d(this, a, null);
    /**
     * #resolves and #rejects tracks Promise resolves and rejects to
     * be called when we receive message from web worker.
     */
    d(this, D, {});
    d(this, h, {});
    d(this, O, []);
    d(this, f, []);
    n(this, "loaded", !1);
    /**
     * register worker message event handlers.
     */
    d(this, I, () => {
      s(this, a) && (s(this, a).onmessage = ({ data: { id: t, type: e, data: r } }) => {
        switch (e) {
          case i.LOAD:
            this.loaded = !0, s(this, D)[t](r);
            break;
          case i.MOUNT:
          case i.UNMOUNT:
          case i.EXEC:
          case i.FFPROBE:
          case i.WRITE_FILE:
          case i.READ_FILE:
          case i.DELETE_FILE:
          case i.RENAME:
          case i.CREATE_DIR:
          case i.LIST_DIR:
          case i.DELETE_DIR:
            s(this, D)[t](r);
            break;
          case i.LOG:
            s(this, O).forEach((o) => o(r));
            break;
          case i.PROGRESS:
            s(this, f).forEach((o) => o(r));
            break;
          case i.ERROR:
            s(this, h)[t](r);
            break;
        }
        delete s(this, D)[t], delete s(this, h)[t];
      });
    });
    /**
     * Generic function to send messages to web worker.
     */
    d(this, R, ({ type: t, data: e }, r = [], o) => s(this, a) ? new Promise((A, L) => {
      const l = S();
      s(this, a) && s(this, a).postMessage({ id: l, type: t, data: e }, r), s(this, D)[l] = A, s(this, h)[l] = L, o == null || o.addEventListener("abort", () => {
        L(new DOMException(`Message # ${l} was aborted`, "AbortError"));
      }, { once: !0 });
    }) : Promise.reject(w));
    /**
     * Loads ffmpeg-core inside web worker. It is required to call this method first
     * as it initializes WebAssembly and other essential variables.
     *
     * @category FFmpeg
     * @returns `true` if ffmpeg core is loaded for the first time.
     */
    n(this, "load", ({ classWorkerURL: t, ...e } = {}, { signal: r } = {}) => (s(this, a) || (c(this, a, t ? new Worker(new URL(t, import.meta.url), {
      type: "module"
    }) : (
      // We need to duplicated the code here to enable webpack
      // to bundle worekr.js here.
      new Worker(new URL("/assets/worker-224792ee.js", self.location), {
        type: "module"
      })
    )), s(this, I).call(this)), s(this, R).call(this, {
      type: i.LOAD,
      data: e
    }, void 0, r)));
    /**
     * Execute ffmpeg command.
     *
     * @remarks
     * To avoid common I/O issues, ["-nostdin", "-y"] are prepended to the args
     * by default.
     *
     * @example
     * ```ts
     * const ffmpeg = new FFmpeg();
     * await ffmpeg.load();
     * await ffmpeg.writeFile("video.avi", ...);
     * // ffmpeg -i video.avi video.mp4
     * await ffmpeg.exec(["-i", "video.avi", "video.mp4"]);
     * const data = ffmpeg.readFile("video.mp4");
     * ```
     *
     * @returns `0` if no error, `!= 0` if timeout (1) or error.
     * @category FFmpeg
     */
    n(this, "exec", (t, e = -1, { signal: r } = {}) => s(this, R).call(this, {
      type: i.EXEC,
      data: { args: t, timeout: e }
    }, void 0, r));
    /**
     * Execute ffprobe command.
     *
     * @example
     * ```ts
     * const ffmpeg = new FFmpeg();
     * await ffmpeg.load();
     * await ffmpeg.writeFile("video.avi", ...);
     * // Getting duration of a video in seconds: ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 video.avi -o output.txt
     * await ffmpeg.ffprobe(["-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", "video.avi", "-o", "output.txt"]);
     * const data = ffmpeg.readFile("output.txt");
     * ```
     *
     * @returns `0` if no error, `!= 0` if timeout (1) or error.
     * @category FFmpeg
     */
    n(this, "ffprobe", (t, e = -1, { signal: r } = {}) => s(this, R).call(this, {
      type: i.FFPROBE,
      data: { args: t, timeout: e }
    }, void 0, r));
    /**
     * Terminate all ongoing API calls and terminate web worker.
     * `FFmpeg.load()` must be called again before calling any other APIs.
     *
     * @category FFmpeg
     */
    n(this, "terminate", () => {
      const t = Object.keys(s(this, h));
      for (const e of t)
        s(this, h)[e](U), delete s(this, h)[e], delete s(this, D)[e];
      s(this, a) && (s(this, a).terminate(), c(this, a, null), this.loaded = !1);
    });
    /**
     * Write data to ffmpeg.wasm.
     *
     * @example
     * ```ts
     * const ffmpeg = new FFmpeg();
     * await ffmpeg.load();
     * await ffmpeg.writeFile("video.avi", await fetchFile("../video.avi"));
     * await ffmpeg.writeFile("text.txt", "hello world");
     * ```
     *
     * @category File System
     */
    n(this, "writeFile", (t, e, { signal: r } = {}) => {
      const o = [];
      return e instanceof Uint8Array && o.push(e.buffer), s(this, R).call(this, {
        type: i.WRITE_FILE,
        data: { path: t, data: e }
      }, o, r);
    });
    n(this, "mount", (t, e, r) => {
      const o = [];
      return s(this, R).call(this, {
        type: i.MOUNT,
        data: { fsType: t, options: e, mountPoint: r }
      }, o);
    });
    n(this, "unmount", (t) => {
      const e = [];
      return s(this, R).call(this, {
        type: i.UNMOUNT,
        data: { mountPoint: t }
      }, e);
    });
    /**
     * Read data from ffmpeg.wasm.
     *
     * @example
     * ```ts
     * const ffmpeg = new FFmpeg();
     * await ffmpeg.load();
     * const data = await ffmpeg.readFile("video.mp4");
     * ```
     *
     * @category File System
     */
    n(this, "readFile", (t, e = "binary", { signal: r } = {}) => s(this, R).call(this, {
      type: i.READ_FILE,
      data: { path: t, encoding: e }
    }, void 0, r));
    /**
     * Delete a file.
     *
     * @category File System
     */
    n(this, "deleteFile", (t, { signal: e } = {}) => s(this, R).call(this, {
      type: i.DELETE_FILE,
      data: { path: t }
    }, void 0, e));
    /**
     * Rename a file or directory.
     *
     * @category File System
     */
    n(this, "rename", (t, e, { signal: r } = {}) => s(this, R).call(this, {
      type: i.RENAME,
      data: { oldPath: t, newPath: e }
    }, void 0, r));
    /**
     * Create a directory.
     *
     * @category File System
     */
    n(this, "createDir", (t, { signal: e } = {}) => s(this, R).call(this, {
      type: i.CREATE_DIR,
      data: { path: t }
    }, void 0, e));
    /**
     * List directory contents.
     *
     * @category File System
     */
    n(this, "listDir", (t, { signal: e } = {}) => s(this, R).call(this, {
      type: i.LIST_DIR,
      data: { path: t }
    }, void 0, e));
    /**
     * Delete an empty directory.
     *
     * @category File System
     */
    n(this, "deleteDir", (t, { signal: e } = {}) => s(this, R).call(this, {
      type: i.DELETE_DIR,
      data: { path: t }
    }, void 0, e));
  }
  on(t, e) {
    t === "log" ? s(this, O).push(e) : t === "progress" && s(this, f).push(e);
  }
  off(t, e) {
    t === "log" ? c(this, O, s(this, O).filter((r) => r !== e)) : t === "progress" && c(this, f, s(this, f).filter((r) => r !== e));
  }
}
a = new WeakMap(), D = new WeakMap(), h = new WeakMap(), O = new WeakMap(), f = new WeakMap(), I = new WeakMap(), R = new WeakMap();
var _;
(function(E) {
  E.MEMFS = "MEMFS", E.NODEFS = "NODEFS", E.NODERAWFS = "NODERAWFS", E.IDBFS = "IDBFS", E.WORKERFS = "WORKERFS", E.PROXYFS = "PROXYFS";
})(_ || (_ = {}));
export {
  _ as FFFSType,
  b as FFmpeg
};
