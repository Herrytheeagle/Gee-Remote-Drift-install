(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.GeeDrift = {}));
})(this, (function (exports) { 'use strict';

  const DEFAULT_APP_ID = "bbevn3v6ghc3";
  const SNIPPET_VERSION = "0.3.1";

  function ensureBrowserEnvironment() {
    if (typeof window === "undefined" || typeof document === "undefined") {
      throw new Error("GeeDrift can only be used in a browser environment.");
    }
  }

  function createDriftQueue() {
    ensureBrowserEnvironment();

    const drift = window.driftt = window.drift = window.driftt || [];

    if (!drift.init) {
      if (drift.invoked) {
        if (window.console && console.error) {
          console.error("Drift snippet included twice.");
        }
        return drift;
      }

      drift.invoked = true;
      drift.methods = [
        "identify",
        "config",
        "track",
        "reset",
        "debug",
        "show",
        "ping",
        "page",
        "hide",
        "off",
        "on"
      ];

      drift.factory = function(methodName) {
        return function() {
          const args = Array.prototype.slice.call(arguments);
          args.unshift(methodName);
          drift.push(args);
          return drift;
        };
      };

      drift.methods.forEach(function(methodName) {
        drift[methodName] = drift.factory(methodName);
      });

      drift.load = function(appId) {
        const cacheBuster = 3e5;
        const timestamp = Math.ceil(new Date() / cacheBuster) * cacheBuster;
        const script = document.createElement("script");

        script.type = "text/javascript";
        script.async = true;
        script.crossOrigin = "anonymous";
        script.src = "https://js.driftt.com/include/" + timestamp + "/" + appId + ".js";

        const firstScript = document.getElementsByTagName("script")[0];
        firstScript.parentNode.insertBefore(script, firstScript);
      };
    }

    return drift;
  }

  function load(appId = DEFAULT_APP_ID) {
    ensureBrowserEnvironment();
    const drift = createDriftQueue();
    drift.SNIPPET_VERSION = SNIPPET_VERSION;
    drift.load(appId);
    return drift;
  }

  function init(appId = DEFAULT_APP_ID) {
    return load(appId);
  }

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    init(DEFAULT_APP_ID);
  }
  var index = { init, load };

  exports.default = index;
  exports.init = init;
  exports.load = load;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
