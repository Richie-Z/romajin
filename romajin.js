(async function() {
        while (!Spicetify.React || !Spicetify.ReactDOM) {
          await new Promise(resolve => setTimeout(resolve, 10));
        }
        var romajin = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // external-global-plugin:react
  var require_react = __commonJS({
    "external-global-plugin:react"(exports, module) {
      module.exports = Spicetify.React;
    }
  });

  // node_modules/axios/lib/helpers/bind.js
  var require_bind = __commonJS({
    "node_modules/axios/lib/helpers/bind.js"(exports, module) {
      "use strict";
      module.exports = function bind(fn2, thisArg) {
        return function wrap() {
          var args = new Array(arguments.length);
          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
          }
          return fn2.apply(thisArg, args);
        };
      };
    }
  });

  // node_modules/axios/lib/utils.js
  var require_utils = __commonJS({
    "node_modules/axios/lib/utils.js"(exports, module) {
      "use strict";
      var bind = require_bind();
      var toString = Object.prototype.toString;
      function isArray(val) {
        return toString.call(val) === "[object Array]";
      }
      function isUndefined(val) {
        return typeof val === "undefined";
      }
      function isBuffer(val) {
        return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
      }
      function isArrayBuffer(val) {
        return toString.call(val) === "[object ArrayBuffer]";
      }
      function isFormData(val) {
        return typeof FormData !== "undefined" && val instanceof FormData;
      }
      function isArrayBufferView(val) {
        var result;
        if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
          result = ArrayBuffer.isView(val);
        } else {
          result = val && val.buffer && val.buffer instanceof ArrayBuffer;
        }
        return result;
      }
      function isString(val) {
        return typeof val === "string";
      }
      function isNumber(val) {
        return typeof val === "number";
      }
      function isObject(val) {
        return val !== null && typeof val === "object";
      }
      function isPlainObject(val) {
        if (toString.call(val) !== "[object Object]") {
          return false;
        }
        var prototype = Object.getPrototypeOf(val);
        return prototype === null || prototype === Object.prototype;
      }
      function isDate(val) {
        return toString.call(val) === "[object Date]";
      }
      function isFile(val) {
        return toString.call(val) === "[object File]";
      }
      function isBlob(val) {
        return toString.call(val) === "[object Blob]";
      }
      function isFunction(val) {
        return toString.call(val) === "[object Function]";
      }
      function isStream(val) {
        return isObject(val) && isFunction(val.pipe);
      }
      function isURLSearchParams(val) {
        return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
      }
      function trim(str) {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
      }
      function isStandardBrowserEnv() {
        if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
          return false;
        }
        return typeof window !== "undefined" && typeof document !== "undefined";
      }
      function forEach(obj, fn2) {
        if (obj === null || typeof obj === "undefined") {
          return;
        }
        if (typeof obj !== "object") {
          obj = [obj];
        }
        if (isArray(obj)) {
          for (var i = 0, l = obj.length; i < l; i++) {
            fn2.call(null, obj[i], i, obj);
          }
        } else {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              fn2.call(null, obj[key], key, obj);
            }
          }
        }
      }
      function merge() {
        var result = {};
        function assignValue(val, key) {
          if (isPlainObject(result[key]) && isPlainObject(val)) {
            result[key] = merge(result[key], val);
          } else if (isPlainObject(val)) {
            result[key] = merge({}, val);
          } else if (isArray(val)) {
            result[key] = val.slice();
          } else {
            result[key] = val;
          }
        }
        for (var i = 0, l = arguments.length; i < l; i++) {
          forEach(arguments[i], assignValue);
        }
        return result;
      }
      function extend(a, b, thisArg) {
        forEach(b, function assignValue(val, key) {
          if (thisArg && typeof val === "function") {
            a[key] = bind(val, thisArg);
          } else {
            a[key] = val;
          }
        });
        return a;
      }
      function stripBOM(content) {
        if (content.charCodeAt(0) === 65279) {
          content = content.slice(1);
        }
        return content;
      }
      module.exports = {
        isArray,
        isArrayBuffer,
        isBuffer,
        isFormData,
        isArrayBufferView,
        isString,
        isNumber,
        isObject,
        isPlainObject,
        isUndefined,
        isDate,
        isFile,
        isBlob,
        isFunction,
        isStream,
        isURLSearchParams,
        isStandardBrowserEnv,
        forEach,
        merge,
        extend,
        trim,
        stripBOM
      };
    }
  });

  // node_modules/axios/lib/helpers/buildURL.js
  var require_buildURL = __commonJS({
    "node_modules/axios/lib/helpers/buildURL.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      function encode(val) {
        return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      }
      module.exports = function buildURL(url, params, paramsSerializer) {
        if (!params) {
          return url;
        }
        var serializedParams;
        if (paramsSerializer) {
          serializedParams = paramsSerializer(params);
        } else if (utils.isURLSearchParams(params)) {
          serializedParams = params.toString();
        } else {
          var parts = [];
          utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === "undefined") {
              return;
            }
            if (utils.isArray(val)) {
              key = key + "[]";
            } else {
              val = [val];
            }
            utils.forEach(val, function parseValue(v) {
              if (utils.isDate(v)) {
                v = v.toISOString();
              } else if (utils.isObject(v)) {
                v = JSON.stringify(v);
              }
              parts.push(encode(key) + "=" + encode(v));
            });
          });
          serializedParams = parts.join("&");
        }
        if (serializedParams) {
          var hashmarkIndex = url.indexOf("#");
          if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
          }
          url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
        }
        return url;
      };
    }
  });

  // node_modules/axios/lib/core/InterceptorManager.js
  var require_InterceptorManager = __commonJS({
    "node_modules/axios/lib/core/InterceptorManager.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      function InterceptorManager() {
        this.handlers = [];
      }
      InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
        this.handlers.push({
          fulfilled,
          rejected,
          synchronous: options ? options.synchronous : false,
          runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
      };
      InterceptorManager.prototype.eject = function eject(id) {
        if (this.handlers[id]) {
          this.handlers[id] = null;
        }
      };
      InterceptorManager.prototype.forEach = function forEach(fn2) {
        utils.forEach(this.handlers, function forEachHandler(h) {
          if (h !== null) {
            fn2(h);
          }
        });
      };
      module.exports = InterceptorManager;
    }
  });

  // node_modules/axios/lib/helpers/normalizeHeaderName.js
  var require_normalizeHeaderName = __commonJS({
    "node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = function normalizeHeaderName(headers, normalizedName) {
        utils.forEach(headers, function processHeader(value, name2) {
          if (name2 !== normalizedName && name2.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name2];
          }
        });
      };
    }
  });

  // node_modules/axios/lib/core/enhanceError.js
  var require_enhanceError = __commonJS({
    "node_modules/axios/lib/core/enhanceError.js"(exports, module) {
      "use strict";
      module.exports = function enhanceError(error, config, code, request, response) {
        error.config = config;
        if (code) {
          error.code = code;
        }
        error.request = request;
        error.response = response;
        error.isAxiosError = true;
        error.toJSON = function toJSON() {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
          };
        };
        return error;
      };
    }
  });

  // node_modules/axios/lib/core/createError.js
  var require_createError = __commonJS({
    "node_modules/axios/lib/core/createError.js"(exports, module) {
      "use strict";
      var enhanceError = require_enhanceError();
      module.exports = function createError(message, config, code, request, response) {
        var error = new Error(message);
        return enhanceError(error, config, code, request, response);
      };
    }
  });

  // node_modules/axios/lib/core/settle.js
  var require_settle = __commonJS({
    "node_modules/axios/lib/core/settle.js"(exports, module) {
      "use strict";
      var createError = require_createError();
      module.exports = function settle(resolve, reject, response) {
        var validateStatus = response.config.validateStatus;
        if (!response.status || !validateStatus || validateStatus(response.status)) {
          resolve(response);
        } else {
          reject(createError(
            "Request failed with status code " + response.status,
            response.config,
            null,
            response.request,
            response
          ));
        }
      };
    }
  });

  // node_modules/axios/lib/helpers/cookies.js
  var require_cookies = __commonJS({
    "node_modules/axios/lib/helpers/cookies.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
        return {
          write: function write(name2, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name2 + "=" + encodeURIComponent(value));
            if (utils.isNumber(expires)) {
              cookie.push("expires=" + new Date(expires).toGMTString());
            }
            if (utils.isString(path)) {
              cookie.push("path=" + path);
            }
            if (utils.isString(domain)) {
              cookie.push("domain=" + domain);
            }
            if (secure === true) {
              cookie.push("secure");
            }
            document.cookie = cookie.join("; ");
          },
          read: function read(name2) {
            var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name2 + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
          },
          remove: function remove(name2) {
            this.write(name2, "", Date.now() - 864e5);
          }
        };
      }() : function nonStandardBrowserEnv() {
        return {
          write: function write() {
          },
          read: function read() {
            return null;
          },
          remove: function remove() {
          }
        };
      }();
    }
  });

  // node_modules/axios/lib/helpers/isAbsoluteURL.js
  var require_isAbsoluteURL = __commonJS({
    "node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module) {
      "use strict";
      module.exports = function isAbsoluteURL(url) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
      };
    }
  });

  // node_modules/axios/lib/helpers/combineURLs.js
  var require_combineURLs = __commonJS({
    "node_modules/axios/lib/helpers/combineURLs.js"(exports, module) {
      "use strict";
      module.exports = function combineURLs(baseURL, relativeURL) {
        return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
      };
    }
  });

  // node_modules/axios/lib/core/buildFullPath.js
  var require_buildFullPath = __commonJS({
    "node_modules/axios/lib/core/buildFullPath.js"(exports, module) {
      "use strict";
      var isAbsoluteURL = require_isAbsoluteURL();
      var combineURLs = require_combineURLs();
      module.exports = function buildFullPath(baseURL, requestedURL) {
        if (baseURL && !isAbsoluteURL(requestedURL)) {
          return combineURLs(baseURL, requestedURL);
        }
        return requestedURL;
      };
    }
  });

  // node_modules/axios/lib/helpers/parseHeaders.js
  var require_parseHeaders = __commonJS({
    "node_modules/axios/lib/helpers/parseHeaders.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var ignoreDuplicateOf = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
      ];
      module.exports = function parseHeaders(headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
          return parsed;
        }
        utils.forEach(headers.split("\n"), function parser(line) {
          i = line.indexOf(":");
          key = utils.trim(line.substr(0, i)).toLowerCase();
          val = utils.trim(line.substr(i + 1));
          if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
              return;
            }
            if (key === "set-cookie") {
              parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
            } else {
              parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
            }
          }
        });
        return parsed;
      };
    }
  });

  // node_modules/axios/lib/helpers/isURLSameOrigin.js
  var require_isURLSameOrigin = __commonJS({
    "node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement("a");
        var originURL;
        function resolveURL(url) {
          var href = url;
          if (msie) {
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
          }
          urlParsingNode.setAttribute("href", href);
          return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
          };
        }
        originURL = resolveURL(window.location.href);
        return function isURLSameOrigin(requestURL) {
          var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
          return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
        };
      }() : function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      }();
    }
  });

  // node_modules/axios/lib/cancel/Cancel.js
  var require_Cancel = __commonJS({
    "node_modules/axios/lib/cancel/Cancel.js"(exports, module) {
      "use strict";
      function Cancel(message) {
        this.message = message;
      }
      Cancel.prototype.toString = function toString() {
        return "Cancel" + (this.message ? ": " + this.message : "");
      };
      Cancel.prototype.__CANCEL__ = true;
      module.exports = Cancel;
    }
  });

  // node_modules/axios/lib/adapters/xhr.js
  var require_xhr = __commonJS({
    "node_modules/axios/lib/adapters/xhr.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var settle = require_settle();
      var cookies = require_cookies();
      var buildURL = require_buildURL();
      var buildFullPath = require_buildFullPath();
      var parseHeaders = require_parseHeaders();
      var isURLSameOrigin = require_isURLSameOrigin();
      var createError = require_createError();
      var defaults = require_defaults();
      var Cancel = require_Cancel();
      module.exports = function xhrAdapter(config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
          var requestData = config.data;
          var requestHeaders = config.headers;
          var responseType = config.responseType;
          var onCanceled;
          function done() {
            if (config.cancelToken) {
              config.cancelToken.unsubscribe(onCanceled);
            }
            if (config.signal) {
              config.signal.removeEventListener("abort", onCanceled);
            }
          }
          if (utils.isFormData(requestData)) {
            delete requestHeaders["Content-Type"];
          }
          var request = new XMLHttpRequest();
          if (config.auth) {
            var username = config.auth.username || "";
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
          }
          var fullPath = buildFullPath(config.baseURL, config.url);
          request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
          request.timeout = config.timeout;
          function onloadend() {
            if (!request) {
              return;
            }
            var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            var response = {
              data: responseData,
              status: request.status,
              statusText: request.statusText,
              headers: responseHeaders,
              config,
              request
            };
            settle(function _resolve(value) {
              resolve(value);
              done();
            }, function _reject(err) {
              reject(err);
              done();
            }, response);
            request = null;
          }
          if ("onloadend" in request) {
            request.onloadend = onloadend;
          } else {
            request.onreadystatechange = function handleLoad() {
              if (!request || request.readyState !== 4) {
                return;
              }
              if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
                return;
              }
              setTimeout(onloadend);
            };
          }
          request.onabort = function handleAbort() {
            if (!request) {
              return;
            }
            reject(createError("Request aborted", config, "ECONNABORTED", request));
            request = null;
          };
          request.onerror = function handleError() {
            reject(createError("Network Error", config, null, request));
            request = null;
          };
          request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            var transitional = config.transitional || defaults.transitional;
            if (config.timeoutErrorMessage) {
              timeoutErrorMessage = config.timeoutErrorMessage;
            }
            reject(createError(
              timeoutErrorMessage,
              config,
              transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
              request
            ));
            request = null;
          };
          if (utils.isStandardBrowserEnv()) {
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
            if (xsrfValue) {
              requestHeaders[config.xsrfHeaderName] = xsrfValue;
            }
          }
          if ("setRequestHeader" in request) {
            utils.forEach(requestHeaders, function setRequestHeader(val, key) {
              if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
                delete requestHeaders[key];
              } else {
                request.setRequestHeader(key, val);
              }
            });
          }
          if (!utils.isUndefined(config.withCredentials)) {
            request.withCredentials = !!config.withCredentials;
          }
          if (responseType && responseType !== "json") {
            request.responseType = config.responseType;
          }
          if (typeof config.onDownloadProgress === "function") {
            request.addEventListener("progress", config.onDownloadProgress);
          }
          if (typeof config.onUploadProgress === "function" && request.upload) {
            request.upload.addEventListener("progress", config.onUploadProgress);
          }
          if (config.cancelToken || config.signal) {
            onCanceled = function(cancel) {
              if (!request) {
                return;
              }
              reject(!cancel || cancel && cancel.type ? new Cancel("canceled") : cancel);
              request.abort();
              request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) {
              config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
            }
          }
          if (!requestData) {
            requestData = null;
          }
          request.send(requestData);
        });
      };
    }
  });

  // node_modules/axios/lib/defaults.js
  var require_defaults = __commonJS({
    "node_modules/axios/lib/defaults.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var normalizeHeaderName = require_normalizeHeaderName();
      var enhanceError = require_enhanceError();
      var DEFAULT_CONTENT_TYPE = {
        "Content-Type": "application/x-www-form-urlencoded"
      };
      function setContentTypeIfUnset(headers, value) {
        if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
          headers["Content-Type"] = value;
        }
      }
      function getDefaultAdapter() {
        var adapter;
        if (typeof XMLHttpRequest !== "undefined") {
          adapter = require_xhr();
        } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
          adapter = require_xhr();
        }
        return adapter;
      }
      function stringifySafely(rawValue, parser, encoder) {
        if (utils.isString(rawValue)) {
          try {
            (parser || JSON.parse)(rawValue);
            return utils.trim(rawValue);
          } catch (e) {
            if (e.name !== "SyntaxError") {
              throw e;
            }
          }
        }
        return (encoder || JSON.stringify)(rawValue);
      }
      var defaults = {
        transitional: {
          silentJSONParsing: true,
          forcedJSONParsing: true,
          clarifyTimeoutError: false
        },
        adapter: getDefaultAdapter(),
        transformRequest: [function transformRequest(data, headers) {
          normalizeHeaderName(headers, "Accept");
          normalizeHeaderName(headers, "Content-Type");
          if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
            return data;
          }
          if (utils.isArrayBufferView(data)) {
            return data.buffer;
          }
          if (utils.isURLSearchParams(data)) {
            setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
            return data.toString();
          }
          if (utils.isObject(data) || headers && headers["Content-Type"] === "application/json") {
            setContentTypeIfUnset(headers, "application/json");
            return stringifySafely(data);
          }
          return data;
        }],
        transformResponse: [function transformResponse(data) {
          var transitional = this.transitional || defaults.transitional;
          var silentJSONParsing = transitional && transitional.silentJSONParsing;
          var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
          var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
          if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
            try {
              return JSON.parse(data);
            } catch (e) {
              if (strictJSONParsing) {
                if (e.name === "SyntaxError") {
                  throw enhanceError(e, this, "E_JSON_PARSE");
                }
                throw e;
              }
            }
          }
          return data;
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        },
        headers: {
          common: {
            "Accept": "application/json, text/plain, */*"
          }
        }
      };
      utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
        defaults.headers[method] = {};
      });
      utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
      });
      module.exports = defaults;
    }
  });

  // node_modules/axios/lib/core/transformData.js
  var require_transformData = __commonJS({
    "node_modules/axios/lib/core/transformData.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var defaults = require_defaults();
      module.exports = function transformData(data, headers, fns) {
        var context = this || defaults;
        utils.forEach(fns, function transform(fn2) {
          data = fn2.call(context, data, headers);
        });
        return data;
      };
    }
  });

  // node_modules/axios/lib/cancel/isCancel.js
  var require_isCancel = __commonJS({
    "node_modules/axios/lib/cancel/isCancel.js"(exports, module) {
      "use strict";
      module.exports = function isCancel(value) {
        return !!(value && value.__CANCEL__);
      };
    }
  });

  // node_modules/axios/lib/core/dispatchRequest.js
  var require_dispatchRequest = __commonJS({
    "node_modules/axios/lib/core/dispatchRequest.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var transformData = require_transformData();
      var isCancel = require_isCancel();
      var defaults = require_defaults();
      var Cancel = require_Cancel();
      function throwIfCancellationRequested(config) {
        if (config.cancelToken) {
          config.cancelToken.throwIfRequested();
        }
        if (config.signal && config.signal.aborted) {
          throw new Cancel("canceled");
        }
      }
      module.exports = function dispatchRequest(config) {
        throwIfCancellationRequested(config);
        config.headers = config.headers || {};
        config.data = transformData.call(
          config,
          config.data,
          config.headers,
          config.transformRequest
        );
        config.headers = utils.merge(
          config.headers.common || {},
          config.headers[config.method] || {},
          config.headers
        );
        utils.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function cleanHeaderConfig(method) {
            delete config.headers[method];
          }
        );
        var adapter = config.adapter || defaults.adapter;
        return adapter(config).then(function onAdapterResolution(response) {
          throwIfCancellationRequested(config);
          response.data = transformData.call(
            config,
            response.data,
            response.headers,
            config.transformResponse
          );
          return response;
        }, function onAdapterRejection(reason) {
          if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            if (reason && reason.response) {
              reason.response.data = transformData.call(
                config,
                reason.response.data,
                reason.response.headers,
                config.transformResponse
              );
            }
          }
          return Promise.reject(reason);
        });
      };
    }
  });

  // node_modules/axios/lib/core/mergeConfig.js
  var require_mergeConfig = __commonJS({
    "node_modules/axios/lib/core/mergeConfig.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = function mergeConfig(config1, config2) {
        config2 = config2 || {};
        var config = {};
        function getMergedValue(target, source) {
          if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
            return utils.merge(target, source);
          } else if (utils.isPlainObject(source)) {
            return utils.merge({}, source);
          } else if (utils.isArray(source)) {
            return source.slice();
          }
          return source;
        }
        function mergeDeepProperties(prop) {
          if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(config1[prop], config2[prop]);
          } else if (!utils.isUndefined(config1[prop])) {
            return getMergedValue(void 0, config1[prop]);
          }
        }
        function valueFromConfig2(prop) {
          if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(void 0, config2[prop]);
          }
        }
        function defaultToConfig2(prop) {
          if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(void 0, config2[prop]);
          } else if (!utils.isUndefined(config1[prop])) {
            return getMergedValue(void 0, config1[prop]);
          }
        }
        function mergeDirectKeys(prop) {
          if (prop in config2) {
            return getMergedValue(config1[prop], config2[prop]);
          } else if (prop in config1) {
            return getMergedValue(void 0, config1[prop]);
          }
        }
        var mergeMap = {
          "url": valueFromConfig2,
          "method": valueFromConfig2,
          "data": valueFromConfig2,
          "baseURL": defaultToConfig2,
          "transformRequest": defaultToConfig2,
          "transformResponse": defaultToConfig2,
          "paramsSerializer": defaultToConfig2,
          "timeout": defaultToConfig2,
          "timeoutMessage": defaultToConfig2,
          "withCredentials": defaultToConfig2,
          "adapter": defaultToConfig2,
          "responseType": defaultToConfig2,
          "xsrfCookieName": defaultToConfig2,
          "xsrfHeaderName": defaultToConfig2,
          "onUploadProgress": defaultToConfig2,
          "onDownloadProgress": defaultToConfig2,
          "decompress": defaultToConfig2,
          "maxContentLength": defaultToConfig2,
          "maxBodyLength": defaultToConfig2,
          "transport": defaultToConfig2,
          "httpAgent": defaultToConfig2,
          "httpsAgent": defaultToConfig2,
          "cancelToken": defaultToConfig2,
          "socketPath": defaultToConfig2,
          "responseEncoding": defaultToConfig2,
          "validateStatus": mergeDirectKeys
        };
        utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
          var merge = mergeMap[prop] || mergeDeepProperties;
          var configValue = merge(prop);
          utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
        });
        return config;
      };
    }
  });

  // node_modules/axios/lib/env/data.js
  var require_data = __commonJS({
    "node_modules/axios/lib/env/data.js"(exports, module) {
      module.exports = {
        "version": "0.23.0"
      };
    }
  });

  // node_modules/axios/lib/helpers/validator.js
  var require_validator = __commonJS({
    "node_modules/axios/lib/helpers/validator.js"(exports, module) {
      "use strict";
      var VERSION = require_data().version;
      var validators = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
        validators[type] = function validator(thing) {
          return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
        };
      });
      var deprecatedWarnings = {};
      validators.transitional = function transitional(validator, version, message) {
        function formatMessage(opt, desc) {
          return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
        }
        return function(value, opt, opts) {
          if (validator === false) {
            throw new Error(formatMessage(opt, " has been removed" + (version ? " in " + version : "")));
          }
          if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            console.warn(
              formatMessage(
                opt,
                " has been deprecated since v" + version + " and will be removed in the near future"
              )
            );
          }
          return validator ? validator(value, opt, opts) : true;
        };
      };
      function assertOptions(options, schema, allowUnknown) {
        if (typeof options !== "object") {
          throw new TypeError("options must be an object");
        }
        var keys = Object.keys(options);
        var i = keys.length;
        while (i-- > 0) {
          var opt = keys[i];
          var validator = schema[opt];
          if (validator) {
            var value = options[opt];
            var result = value === void 0 || validator(value, opt, options);
            if (result !== true) {
              throw new TypeError("option " + opt + " must be " + result);
            }
            continue;
          }
          if (allowUnknown !== true) {
            throw Error("Unknown option " + opt);
          }
        }
      }
      module.exports = {
        assertOptions,
        validators
      };
    }
  });

  // node_modules/axios/lib/core/Axios.js
  var require_Axios = __commonJS({
    "node_modules/axios/lib/core/Axios.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var buildURL = require_buildURL();
      var InterceptorManager = require_InterceptorManager();
      var dispatchRequest = require_dispatchRequest();
      var mergeConfig = require_mergeConfig();
      var validator = require_validator();
      var validators = validator.validators;
      function Axios(instanceConfig) {
        this.defaults = instanceConfig;
        this.interceptors = {
          request: new InterceptorManager(),
          response: new InterceptorManager()
        };
      }
      Axios.prototype.request = function request(config) {
        if (typeof config === "string") {
          config = arguments[1] || {};
          config.url = arguments[0];
        } else {
          config = config || {};
        }
        config = mergeConfig(this.defaults, config);
        if (config.method) {
          config.method = config.method.toLowerCase();
        } else if (this.defaults.method) {
          config.method = this.defaults.method.toLowerCase();
        } else {
          config.method = "get";
        }
        var transitional = config.transitional;
        if (transitional !== void 0) {
          validator.assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean)
          }, false);
        }
        var requestInterceptorChain = [];
        var synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
          if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
            return;
          }
          synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
          requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        var responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
          responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        var promise;
        if (!synchronousRequestInterceptors) {
          var chain = [dispatchRequest, void 0];
          Array.prototype.unshift.apply(chain, requestInterceptorChain);
          chain = chain.concat(responseInterceptorChain);
          promise = Promise.resolve(config);
          while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
          }
          return promise;
        }
        var newConfig = config;
        while (requestInterceptorChain.length) {
          var onFulfilled = requestInterceptorChain.shift();
          var onRejected = requestInterceptorChain.shift();
          try {
            newConfig = onFulfilled(newConfig);
          } catch (error) {
            onRejected(error);
            break;
          }
        }
        try {
          promise = dispatchRequest(newConfig);
        } catch (error) {
          return Promise.reject(error);
        }
        while (responseInterceptorChain.length) {
          promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
        }
        return promise;
      };
      Axios.prototype.getUri = function getUri(config) {
        config = mergeConfig(this.defaults, config);
        return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
      };
      utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
        Axios.prototype[method] = function(url, config) {
          return this.request(mergeConfig(config || {}, {
            method,
            url,
            data: (config || {}).data
          }));
        };
      });
      utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        Axios.prototype[method] = function(url, data, config) {
          return this.request(mergeConfig(config || {}, {
            method,
            url,
            data
          }));
        };
      });
      module.exports = Axios;
    }
  });

  // node_modules/axios/lib/cancel/CancelToken.js
  var require_CancelToken = __commonJS({
    "node_modules/axios/lib/cancel/CancelToken.js"(exports, module) {
      "use strict";
      var Cancel = require_Cancel();
      function CancelToken(executor) {
        if (typeof executor !== "function") {
          throw new TypeError("executor must be a function.");
        }
        var resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
          resolvePromise = resolve;
        });
        var token = this;
        this.promise.then(function(cancel) {
          if (!token._listeners)
            return;
          var i;
          var l = token._listeners.length;
          for (i = 0; i < l; i++) {
            token._listeners[i](cancel);
          }
          token._listeners = null;
        });
        this.promise.then = function(onfulfilled) {
          var _resolve;
          var promise = new Promise(function(resolve) {
            token.subscribe(resolve);
            _resolve = resolve;
          }).then(onfulfilled);
          promise.cancel = function reject() {
            token.unsubscribe(_resolve);
          };
          return promise;
        };
        executor(function cancel(message) {
          if (token.reason) {
            return;
          }
          token.reason = new Cancel(message);
          resolvePromise(token.reason);
        });
      }
      CancelToken.prototype.throwIfRequested = function throwIfRequested() {
        if (this.reason) {
          throw this.reason;
        }
      };
      CancelToken.prototype.subscribe = function subscribe(listener) {
        if (this.reason) {
          listener(this.reason);
          return;
        }
        if (this._listeners) {
          this._listeners.push(listener);
        } else {
          this._listeners = [listener];
        }
      };
      CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
        if (!this._listeners) {
          return;
        }
        var index = this._listeners.indexOf(listener);
        if (index !== -1) {
          this._listeners.splice(index, 1);
        }
      };
      CancelToken.source = function source() {
        var cancel;
        var token = new CancelToken(function executor(c) {
          cancel = c;
        });
        return {
          token,
          cancel
        };
      };
      module.exports = CancelToken;
    }
  });

  // node_modules/axios/lib/helpers/spread.js
  var require_spread = __commonJS({
    "node_modules/axios/lib/helpers/spread.js"(exports, module) {
      "use strict";
      module.exports = function spread(callback) {
        return function wrap(arr) {
          return callback.apply(null, arr);
        };
      };
    }
  });

  // node_modules/axios/lib/helpers/isAxiosError.js
  var require_isAxiosError = __commonJS({
    "node_modules/axios/lib/helpers/isAxiosError.js"(exports, module) {
      "use strict";
      module.exports = function isAxiosError(payload) {
        return typeof payload === "object" && payload.isAxiosError === true;
      };
    }
  });

  // node_modules/axios/lib/axios.js
  var require_axios = __commonJS({
    "node_modules/axios/lib/axios.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var bind = require_bind();
      var Axios = require_Axios();
      var mergeConfig = require_mergeConfig();
      var defaults = require_defaults();
      function createInstance(defaultConfig) {
        var context = new Axios(defaultConfig);
        var instance = bind(Axios.prototype.request, context);
        utils.extend(instance, Axios.prototype, context);
        utils.extend(instance, context);
        instance.create = function create(instanceConfig) {
          return createInstance(mergeConfig(defaultConfig, instanceConfig));
        };
        return instance;
      }
      var axios = createInstance(defaults);
      axios.Axios = Axios;
      axios.Cancel = require_Cancel();
      axios.CancelToken = require_CancelToken();
      axios.isCancel = require_isCancel();
      axios.VERSION = require_data().version;
      axios.all = function all(promises) {
        return Promise.all(promises);
      };
      axios.spread = require_spread();
      axios.isAxiosError = require_isAxiosError();
      module.exports = axios;
      module.exports.default = axios;
    }
  });

  // node_modules/axios/index.js
  var require_axios2 = __commonJS({
    "node_modules/axios/index.js"(exports, module) {
      module.exports = require_axios();
    }
  });

  // node_modules/strict-uri-encode/index.js
  var require_strict_uri_encode = __commonJS({
    "node_modules/strict-uri-encode/index.js"(exports, module) {
      "use strict";
      module.exports = (str) => encodeURIComponent(str).replace(/[!'()*]/g, (x) => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);
    }
  });

  // node_modules/decode-uri-component/index.js
  var require_decode_uri_component = __commonJS({
    "node_modules/decode-uri-component/index.js"(exports, module) {
      "use strict";
      var token = "%[a-f0-9]{2}";
      var singleMatcher = new RegExp("(" + token + ")|([^%]+?)", "gi");
      var multiMatcher = new RegExp("(" + token + ")+", "gi");
      function decodeComponents(components, split) {
        try {
          return [decodeURIComponent(components.join(""))];
        } catch (err) {
        }
        if (components.length === 1) {
          return components;
        }
        split = split || 1;
        var left = components.slice(0, split);
        var right = components.slice(split);
        return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
      }
      function decode(input) {
        try {
          return decodeURIComponent(input);
        } catch (err) {
          var tokens = input.match(singleMatcher) || [];
          for (var i = 1; i < tokens.length; i++) {
            input = decodeComponents(tokens, i).join("");
            tokens = input.match(singleMatcher) || [];
          }
          return input;
        }
      }
      function customDecodeURIComponent(input) {
        var replaceMap = {
          "%FE%FF": "\uFFFD\uFFFD",
          "%FF%FE": "\uFFFD\uFFFD"
        };
        var match = multiMatcher.exec(input);
        while (match) {
          try {
            replaceMap[match[0]] = decodeURIComponent(match[0]);
          } catch (err) {
            var result = decode(match[0]);
            if (result !== match[0]) {
              replaceMap[match[0]] = result;
            }
          }
          match = multiMatcher.exec(input);
        }
        replaceMap["%C2"] = "\uFFFD";
        var entries = Object.keys(replaceMap);
        for (var i = 0; i < entries.length; i++) {
          var key = entries[i];
          input = input.replace(new RegExp(key, "g"), replaceMap[key]);
        }
        return input;
      }
      module.exports = function(encodedURI) {
        if (typeof encodedURI !== "string") {
          throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof encodedURI + "`");
        }
        try {
          encodedURI = encodedURI.replace(/\+/g, " ");
          return decodeURIComponent(encodedURI);
        } catch (err) {
          return customDecodeURIComponent(encodedURI);
        }
      };
    }
  });

  // node_modules/split-on-first/index.js
  var require_split_on_first = __commonJS({
    "node_modules/split-on-first/index.js"(exports, module) {
      "use strict";
      module.exports = (string, separator) => {
        if (!(typeof string === "string" && typeof separator === "string")) {
          throw new TypeError("Expected the arguments to be of type `string`");
        }
        if (separator === "") {
          return [string];
        }
        const separatorIndex = string.indexOf(separator);
        if (separatorIndex === -1) {
          return [string];
        }
        return [
          string.slice(0, separatorIndex),
          string.slice(separatorIndex + separator.length)
        ];
      };
    }
  });

  // node_modules/filter-obj/index.js
  var require_filter_obj = __commonJS({
    "node_modules/filter-obj/index.js"(exports, module) {
      "use strict";
      module.exports = function(obj, predicate) {
        var ret = {};
        var keys = Object.keys(obj);
        var isArr = Array.isArray(predicate);
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var val = obj[key];
          if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
            ret[key] = val;
          }
        }
        return ret;
      };
    }
  });

  // node_modules/query-string/index.js
  var require_query_string = __commonJS({
    "node_modules/query-string/index.js"(exports) {
      "use strict";
      var strictUriEncode = require_strict_uri_encode();
      var decodeComponent = require_decode_uri_component();
      var splitOnFirst = require_split_on_first();
      var filterObject = require_filter_obj();
      var isNullOrUndefined = (value) => value === null || value === void 0;
      function encoderForArrayFormat(options) {
        switch (options.arrayFormat) {
          case "index":
            return (key) => (result, value) => {
              const index = result.length;
              if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
                return result;
              }
              if (value === null) {
                return [...result, [encode(key, options), "[", index, "]"].join("")];
              }
              return [
                ...result,
                [encode(key, options), "[", encode(index, options), "]=", encode(value, options)].join("")
              ];
            };
          case "bracket":
            return (key) => (result, value) => {
              if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
                return result;
              }
              if (value === null) {
                return [...result, [encode(key, options), "[]"].join("")];
              }
              return [...result, [encode(key, options), "[]=", encode(value, options)].join("")];
            };
          case "comma":
          case "separator":
            return (key) => (result, value) => {
              if (value === null || value === void 0 || value.length === 0) {
                return result;
              }
              if (result.length === 0) {
                return [[encode(key, options), "=", encode(value, options)].join("")];
              }
              return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
            };
          default:
            return (key) => (result, value) => {
              if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
                return result;
              }
              if (value === null) {
                return [...result, encode(key, options)];
              }
              return [...result, [encode(key, options), "=", encode(value, options)].join("")];
            };
        }
      }
      function parserForArrayFormat(options) {
        let result;
        switch (options.arrayFormat) {
          case "index":
            return (key, value, accumulator) => {
              result = /\[(\d*)\]$/.exec(key);
              key = key.replace(/\[\d*\]$/, "");
              if (!result) {
                accumulator[key] = value;
                return;
              }
              if (accumulator[key] === void 0) {
                accumulator[key] = {};
              }
              accumulator[key][result[1]] = value;
            };
          case "bracket":
            return (key, value, accumulator) => {
              result = /(\[\])$/.exec(key);
              key = key.replace(/\[\]$/, "");
              if (!result) {
                accumulator[key] = value;
                return;
              }
              if (accumulator[key] === void 0) {
                accumulator[key] = [value];
                return;
              }
              accumulator[key] = [].concat(accumulator[key], value);
            };
          case "comma":
          case "separator":
            return (key, value, accumulator) => {
              const isArray = typeof value === "string" && value.includes(options.arrayFormatSeparator);
              const isEncodedArray = typeof value === "string" && !isArray && decode(value, options).includes(options.arrayFormatSeparator);
              value = isEncodedArray ? decode(value, options) : value;
              const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item) => decode(item, options)) : value === null ? value : decode(value, options);
              accumulator[key] = newValue;
            };
          default:
            return (key, value, accumulator) => {
              if (accumulator[key] === void 0) {
                accumulator[key] = value;
                return;
              }
              accumulator[key] = [].concat(accumulator[key], value);
            };
        }
      }
      function validateArrayFormatSeparator(value) {
        if (typeof value !== "string" || value.length !== 1) {
          throw new TypeError("arrayFormatSeparator must be single character string");
        }
      }
      function encode(value, options) {
        if (options.encode) {
          return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
        }
        return value;
      }
      function decode(value, options) {
        if (options.decode) {
          return decodeComponent(value);
        }
        return value;
      }
      function keysSorter(input) {
        if (Array.isArray(input)) {
          return input.sort();
        }
        if (typeof input === "object") {
          return keysSorter(Object.keys(input)).sort((a, b) => Number(a) - Number(b)).map((key) => input[key]);
        }
        return input;
      }
      function removeHash(input) {
        const hashStart = input.indexOf("#");
        if (hashStart !== -1) {
          input = input.slice(0, hashStart);
        }
        return input;
      }
      function getHash(url) {
        let hash = "";
        const hashStart = url.indexOf("#");
        if (hashStart !== -1) {
          hash = url.slice(hashStart);
        }
        return hash;
      }
      function extract(input) {
        input = removeHash(input);
        const queryStart = input.indexOf("?");
        if (queryStart === -1) {
          return "";
        }
        return input.slice(queryStart + 1);
      }
      function parseValue(value, options) {
        if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === "string" && value.trim() !== "")) {
          value = Number(value);
        } else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) {
          value = value.toLowerCase() === "true";
        }
        return value;
      }
      function parse(query, options) {
        options = Object.assign({
          decode: true,
          sort: true,
          arrayFormat: "none",
          arrayFormatSeparator: ",",
          parseNumbers: false,
          parseBooleans: false
        }, options);
        validateArrayFormatSeparator(options.arrayFormatSeparator);
        const formatter = parserForArrayFormat(options);
        const ret = /* @__PURE__ */ Object.create(null);
        if (typeof query !== "string") {
          return ret;
        }
        query = query.trim().replace(/^[?#&]/, "");
        if (!query) {
          return ret;
        }
        for (const param of query.split("&")) {
          if (param === "") {
            continue;
          }
          let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, " ") : param, "=");
          value = value === void 0 ? null : ["comma", "separator"].includes(options.arrayFormat) ? value : decode(value, options);
          formatter(decode(key, options), value, ret);
        }
        for (const key of Object.keys(ret)) {
          const value = ret[key];
          if (typeof value === "object" && value !== null) {
            for (const k of Object.keys(value)) {
              value[k] = parseValue(value[k], options);
            }
          } else {
            ret[key] = parseValue(value, options);
          }
        }
        if (options.sort === false) {
          return ret;
        }
        return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
          const value = ret[key];
          if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) {
            result[key] = keysSorter(value);
          } else {
            result[key] = value;
          }
          return result;
        }, /* @__PURE__ */ Object.create(null));
      }
      exports.extract = extract;
      exports.parse = parse;
      exports.stringify = (object, options) => {
        if (!object) {
          return "";
        }
        options = Object.assign({
          encode: true,
          strict: true,
          arrayFormat: "none",
          arrayFormatSeparator: ","
        }, options);
        validateArrayFormatSeparator(options.arrayFormatSeparator);
        const shouldFilter = (key) => options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
        const formatter = encoderForArrayFormat(options);
        const objectCopy = {};
        for (const key of Object.keys(object)) {
          if (!shouldFilter(key)) {
            objectCopy[key] = object[key];
          }
        }
        const keys = Object.keys(objectCopy);
        if (options.sort !== false) {
          keys.sort(options.sort);
        }
        return keys.map((key) => {
          const value = object[key];
          if (value === void 0) {
            return "";
          }
          if (value === null) {
            return encode(key, options);
          }
          if (Array.isArray(value)) {
            return value.reduce(formatter(key), []).join("&");
          }
          return encode(key, options) + "=" + encode(value, options);
        }).filter((x) => x.length > 0).join("&");
      };
      exports.parseUrl = (url, options) => {
        options = Object.assign({
          decode: true
        }, options);
        const [url_, hash] = splitOnFirst(url, "#");
        return Object.assign(
          {
            url: url_.split("?")[0] || "",
            query: parse(extract(url), options)
          },
          options && options.parseFragmentIdentifier && hash ? { fragmentIdentifier: decode(hash, options) } : {}
        );
      };
      exports.stringifyUrl = (object, options) => {
        options = Object.assign({
          encode: true,
          strict: true
        }, options);
        const url = removeHash(object.url).split("?")[0] || "";
        const queryFromUrl = exports.extract(object.url);
        const parsedQueryFromUrl = exports.parse(queryFromUrl, { sort: false });
        const query = Object.assign(parsedQueryFromUrl, object.query);
        let queryString = exports.stringify(query, options);
        if (queryString) {
          queryString = `?${queryString}`;
        }
        let hash = getHash(object.url);
        if (object.fragmentIdentifier) {
          hash = `#${encode(object.fragmentIdentifier, options)}`;
        }
        return `${url}${queryString}${hash}`;
      };
      exports.pick = (input, filter, options) => {
        options = Object.assign({
          parseFragmentIdentifier: true
        }, options);
        const { url, query, fragmentIdentifier } = exports.parseUrl(input, options);
        return exports.stringifyUrl({
          url,
          query: filterObject(query, filter),
          fragmentIdentifier
        }, options);
      };
      exports.exclude = (input, filter, options) => {
        const exclusionFilter = Array.isArray(filter) ? (key) => !filter.includes(key) : (key, value) => !filter(key, value);
        return exports.pick(input, exclusionFilter, options);
      };
    }
  });

  // node_modules/xpath/xpath.js
  var require_xpath = __commonJS({
    "node_modules/xpath/xpath.js"(exports) {
      var xpath = typeof exports === "undefined" ? {} : exports;
      (function(exports2) {
        "use strict";
        function curry(func) {
          var slice = Array.prototype.slice, totalargs = func.length, partial = function(args, fn3) {
            return function() {
              return fn3.apply(this, args.concat(slice.call(arguments)));
            };
          }, fn2 = function() {
            var args = slice.call(arguments);
            return args.length < totalargs ? partial(args, fn2) : func.apply(this, slice.apply(arguments, [0, totalargs]));
          };
          return fn2;
        }
        var forEach = function(f, xs) {
          for (var i = 0; i < xs.length; i += 1) {
            f(xs[i], i, xs);
          }
        };
        var reduce = function(f, seed, xs) {
          var acc = seed;
          forEach(function(x, i) {
            acc = f(acc, x, i);
          }, xs);
          return acc;
        };
        var map = function(f, xs) {
          var mapped = new Array(xs.length);
          forEach(function(x, i) {
            mapped[i] = f(x);
          }, xs);
          return mapped;
        };
        var filter = function(f, xs) {
          var filtered = [];
          forEach(function(x, i) {
            if (f(x, i)) {
              filtered.push(x);
            }
          }, xs);
          return filtered;
        };
        var includes = function(values, value) {
          for (var i = 0; i < values.length; i += 1) {
            if (values[i] === value) {
              return true;
            }
          }
          return false;
        };
        function always(value) {
          return function() {
            return value;
          };
        }
        function toString(x) {
          return x.toString();
        }
        var join = function(s, xs) {
          return xs.join(s);
        };
        var wrap = function(pref, suf, str) {
          return pref + str + suf;
        };
        var prototypeConcat = Array.prototype.concat;
        var MAX_ARGUMENT_LENGTH = 32767;
        function flatten(arr) {
          var result = [];
          for (var start = 0; start < arr.length; start += MAX_ARGUMENT_LENGTH) {
            var chunk = arr.slice(start, start + MAX_ARGUMENT_LENGTH);
            result = prototypeConcat.apply(result, chunk);
          }
          return result;
        }
        function assign(target, varArgs) {
          var to = Object(target);
          for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];
            if (nextSource != null) {
              for (var nextKey in nextSource) {
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                  to[nextKey] = nextSource[nextKey];
                }
              }
            }
          }
          return to;
        }
        XPathParser.prototype = new Object();
        XPathParser.prototype.constructor = XPathParser;
        XPathParser.superclass = Object.prototype;
        function XPathParser() {
          this.init();
        }
        XPathParser.prototype.init = function() {
          this.reduceActions = [];
          this.reduceActions[3] = function(rhs) {
            return new OrOperation(rhs[0], rhs[2]);
          };
          this.reduceActions[5] = function(rhs) {
            return new AndOperation(rhs[0], rhs[2]);
          };
          this.reduceActions[7] = function(rhs) {
            return new EqualsOperation(rhs[0], rhs[2]);
          };
          this.reduceActions[8] = function(rhs) {
            return new NotEqualOperation(rhs[0], rhs[2]);
          };
          this.reduceActions[10] = function(rhs) {
            return new LessThanOperation(rhs[0], rhs[2]);
          };
          this.reduceActions[11] = function(rhs) {
            return new GreaterThanOperation(rhs[0], rhs[2]);
          };
          this.reduceActions[12] = function(rhs) {
            return new LessThanOrEqualOperation(rhs[0], rhs[2]);
          };
          this.reduceActions[13] = function(rhs) {
            return new GreaterThanOrEqualOperation(rhs[0], rhs[2]);
          };
          this.reduceActions[15] = function(rhs) {
            return new PlusOperation(rhs[0], rhs[2]);
          };
          this.reduceActions[16] = function(rhs) {
            return new MinusOperation(rhs[0], rhs[2]);
          };
          this.reduceActions[18] = function(rhs) {
            return new MultiplyOperation(rhs[0], rhs[2]);
          };
          this.reduceActions[19] = function(rhs) {
            return new DivOperation(rhs[0], rhs[2]);
          };
          this.reduceActions[20] = function(rhs) {
            return new ModOperation(rhs[0], rhs[2]);
          };
          this.reduceActions[22] = function(rhs) {
            return new UnaryMinusOperation(rhs[1]);
          };
          this.reduceActions[24] = function(rhs) {
            return new BarOperation(rhs[0], rhs[2]);
          };
          this.reduceActions[25] = function(rhs) {
            return new PathExpr(void 0, void 0, rhs[0]);
          };
          this.reduceActions[27] = function(rhs) {
            rhs[0].locationPath = rhs[2];
            return rhs[0];
          };
          this.reduceActions[28] = function(rhs) {
            rhs[0].locationPath = rhs[2];
            rhs[0].locationPath.steps.unshift(new Step(Step.DESCENDANTORSELF, NodeTest.nodeTest, []));
            return rhs[0];
          };
          this.reduceActions[29] = function(rhs) {
            return new PathExpr(rhs[0], [], void 0);
          };
          this.reduceActions[30] = function(rhs) {
            if (Utilities.instance_of(rhs[0], PathExpr)) {
              if (rhs[0].filterPredicates == void 0) {
                rhs[0].filterPredicates = [];
              }
              rhs[0].filterPredicates.push(rhs[1]);
              return rhs[0];
            } else {
              return new PathExpr(rhs[0], [rhs[1]], void 0);
            }
          };
          this.reduceActions[32] = function(rhs) {
            return rhs[1];
          };
          this.reduceActions[33] = function(rhs) {
            return new XString(rhs[0]);
          };
          this.reduceActions[34] = function(rhs) {
            return new XNumber(rhs[0]);
          };
          this.reduceActions[36] = function(rhs) {
            return new FunctionCall(rhs[0], []);
          };
          this.reduceActions[37] = function(rhs) {
            return new FunctionCall(rhs[0], rhs[2]);
          };
          this.reduceActions[38] = function(rhs) {
            return [rhs[0]];
          };
          this.reduceActions[39] = function(rhs) {
            rhs[2].unshift(rhs[0]);
            return rhs[2];
          };
          this.reduceActions[43] = function(rhs) {
            return new LocationPath(true, []);
          };
          this.reduceActions[44] = function(rhs) {
            rhs[1].absolute = true;
            return rhs[1];
          };
          this.reduceActions[46] = function(rhs) {
            return new LocationPath(false, [rhs[0]]);
          };
          this.reduceActions[47] = function(rhs) {
            rhs[0].steps.push(rhs[2]);
            return rhs[0];
          };
          this.reduceActions[49] = function(rhs) {
            return new Step(rhs[0], rhs[1], []);
          };
          this.reduceActions[50] = function(rhs) {
            return new Step(Step.CHILD, rhs[0], []);
          };
          this.reduceActions[51] = function(rhs) {
            return new Step(rhs[0], rhs[1], rhs[2]);
          };
          this.reduceActions[52] = function(rhs) {
            return new Step(Step.CHILD, rhs[0], rhs[1]);
          };
          this.reduceActions[54] = function(rhs) {
            return [rhs[0]];
          };
          this.reduceActions[55] = function(rhs) {
            rhs[1].unshift(rhs[0]);
            return rhs[1];
          };
          this.reduceActions[56] = function(rhs) {
            if (rhs[0] == "ancestor") {
              return Step.ANCESTOR;
            } else if (rhs[0] == "ancestor-or-self") {
              return Step.ANCESTORORSELF;
            } else if (rhs[0] == "attribute") {
              return Step.ATTRIBUTE;
            } else if (rhs[0] == "child") {
              return Step.CHILD;
            } else if (rhs[0] == "descendant") {
              return Step.DESCENDANT;
            } else if (rhs[0] == "descendant-or-self") {
              return Step.DESCENDANTORSELF;
            } else if (rhs[0] == "following") {
              return Step.FOLLOWING;
            } else if (rhs[0] == "following-sibling") {
              return Step.FOLLOWINGSIBLING;
            } else if (rhs[0] == "namespace") {
              return Step.NAMESPACE;
            } else if (rhs[0] == "parent") {
              return Step.PARENT;
            } else if (rhs[0] == "preceding") {
              return Step.PRECEDING;
            } else if (rhs[0] == "preceding-sibling") {
              return Step.PRECEDINGSIBLING;
            } else if (rhs[0] == "self") {
              return Step.SELF;
            }
            return -1;
          };
          this.reduceActions[57] = function(rhs) {
            return Step.ATTRIBUTE;
          };
          this.reduceActions[59] = function(rhs) {
            if (rhs[0] == "comment") {
              return NodeTest.commentTest;
            } else if (rhs[0] == "text") {
              return NodeTest.textTest;
            } else if (rhs[0] == "processing-instruction") {
              return NodeTest.anyPiTest;
            } else if (rhs[0] == "node") {
              return NodeTest.nodeTest;
            }
            return new NodeTest(-1, void 0);
          };
          this.reduceActions[60] = function(rhs) {
            return new NodeTest.PITest(rhs[2]);
          };
          this.reduceActions[61] = function(rhs) {
            return rhs[1];
          };
          this.reduceActions[63] = function(rhs) {
            rhs[1].absolute = true;
            rhs[1].steps.unshift(new Step(Step.DESCENDANTORSELF, NodeTest.nodeTest, []));
            return rhs[1];
          };
          this.reduceActions[64] = function(rhs) {
            rhs[0].steps.push(new Step(Step.DESCENDANTORSELF, NodeTest.nodeTest, []));
            rhs[0].steps.push(rhs[2]);
            return rhs[0];
          };
          this.reduceActions[65] = function(rhs) {
            return new Step(Step.SELF, NodeTest.nodeTest, []);
          };
          this.reduceActions[66] = function(rhs) {
            return new Step(Step.PARENT, NodeTest.nodeTest, []);
          };
          this.reduceActions[67] = function(rhs) {
            return new VariableReference(rhs[1]);
          };
          this.reduceActions[68] = function(rhs) {
            return NodeTest.nameTestAny;
          };
          this.reduceActions[69] = function(rhs) {
            return new NodeTest.NameTestPrefixAny(rhs[0].split(":")[0]);
          };
          this.reduceActions[70] = function(rhs) {
            return new NodeTest.NameTestQName(rhs[0]);
          };
        };
        XPathParser.actionTable = [
          " s s        sssssssss    s ss  s  ss",
          "                 s                  ",
          "r  rrrrrrrrr         rrrrrrr rr  r  ",
          "                rrrrr               ",
          " s s        sssssssss    s ss  s  ss",
          "rs  rrrrrrrr s  sssssrrrrrr  rrs rs ",
          " s s        sssssssss    s ss  s  ss",
          "                            s       ",
          "                            s       ",
          "r  rrrrrrrrr         rrrrrrr rr rr  ",
          "r  rrrrrrrrr         rrrrrrr rr rr  ",
          "r  rrrrrrrrr         rrrrrrr rr rr  ",
          "r  rrrrrrrrr         rrrrrrr rr rr  ",
          "r  rrrrrrrrr         rrrrrrr rr rr  ",
          "  s                                 ",
          "                            s       ",
          " s           s  sssss          s  s ",
          "r  rrrrrrrrr         rrrrrrr rr  r  ",
          "a                                   ",
          "r       s                    rr  r  ",
          "r      sr                    rr  r  ",
          "r   s  rr            s       rr  r  ",
          "r   rssrr            rss     rr  r  ",
          "r   rrrrr            rrrss   rr  r  ",
          "r   rrrrrsss         rrrrr   rr  r  ",
          "r   rrrrrrrr         rrrrr   rr  r  ",
          "r   rrrrrrrr         rrrrrs  rr  r  ",
          "r   rrrrrrrr         rrrrrr  rr  r  ",
          "r   rrrrrrrr         rrrrrr  rr  r  ",
          "r  srrrrrrrr         rrrrrrs rr sr  ",
          "r  srrrrrrrr         rrrrrrs rr  r  ",
          "r  rrrrrrrrr         rrrrrrr rr rr  ",
          "r  rrrrrrrrr         rrrrrrr rr rr  ",
          "r  rrrrrrrrr         rrrrrrr rr rr  ",
          "r   rrrrrrrr         rrrrrr  rr  r  ",
          "r   rrrrrrrr         rrrrrr  rr  r  ",
          "r  rrrrrrrrr         rrrrrrr rr  r  ",
          "r  rrrrrrrrr         rrrrrrr rr  r  ",
          "                sssss               ",
          "r  rrrrrrrrr         rrrrrrr rr sr  ",
          "r  rrrrrrrrr         rrrrrrr rr  r  ",
          "r  rrrrrrrrr         rrrrrrr rr rr  ",
          "r  rrrrrrrrr         rrrrrrr rr rr  ",
          "                             s      ",
          "r  srrrrrrrr         rrrrrrs rr  r  ",
          "r   rrrrrrrr         rrrrr   rr  r  ",
          "              s                     ",
          "                             s      ",
          "                rrrrr               ",
          " s s        sssssssss    s sss s  ss",
          "r  srrrrrrrr         rrrrrrs rr  r  ",
          " s s        sssssssss    s ss  s  ss",
          " s s        sssssssss    s ss  s  ss",
          " s s        sssssssss    s ss  s  ss",
          " s s        sssssssss    s ss  s  ss",
          " s s        sssssssss    s ss  s  ss",
          " s s        sssssssss    s ss  s  ss",
          " s s        sssssssss    s ss  s  ss",
          " s s        sssssssss    s ss  s  ss",
          " s s        sssssssss    s ss  s  ss",
          " s s        sssssssss    s ss  s  ss",
          " s s        sssssssss    s ss  s  ss",
          " s s        sssssssss    s ss  s  ss",
          " s s        sssssssss    s ss  s  ss",
          " s s        sssssssss      ss  s  ss",
          " s s        sssssssss    s ss  s  ss",
          " s           s  sssss          s  s ",
          " s           s  sssss          s  s ",
          "r  rrrrrrrrr         rrrrrrr rr rr  ",
          " s           s  sssss          s  s ",
          " s           s  sssss          s  s ",
          "r  rrrrrrrrr         rrrrrrr rr sr  ",
          "r  rrrrrrrrr         rrrrrrr rr sr  ",
          "r  rrrrrrrrr         rrrrrrr rr  r  ",
          "r  rrrrrrrrr         rrrrrrr rr rr  ",
          "                             s      ",
          "r  rrrrrrrrr         rrrrrrr rr rr  ",
          "r  rrrrrrrrr         rrrrrrr rr rr  ",
          "                             rr     ",
          "                             s      ",
          "                             rs     ",
          "r      sr                    rr  r  ",
          "r   s  rr            s       rr  r  ",
          "r   rssrr            rss     rr  r  ",
          "r   rssrr            rss     rr  r  ",
          "r   rrrrr            rrrss   rr  r  ",
          "r   rrrrr            rrrss   rr  r  ",
          "r   rrrrr            rrrss   rr  r  ",
          "r   rrrrr            rrrss   rr  r  ",
          "r   rrrrrsss         rrrrr   rr  r  ",
          "r   rrrrrsss         rrrrr   rr  r  ",
          "r   rrrrrrrr         rrrrr   rr  r  ",
          "r   rrrrrrrr         rrrrr   rr  r  ",
          "r   rrrrrrrr         rrrrr   rr  r  ",
          "r   rrrrrrrr         rrrrrr  rr  r  ",
          "                                 r  ",
          "                                 s  ",
          "r  srrrrrrrr         rrrrrrs rr  r  ",
          "r  srrrrrrrr         rrrrrrs rr  r  ",
          "r  rrrrrrrrr         rrrrrrr rr  r  ",
          "r  rrrrrrrrr         rrrrrrr rr  r  ",
          "r  rrrrrrrrr         rrrrrrr rr  r  ",
          "r  rrrrrrrrr         rrrrrrr rr  r  ",
          "r  rrrrrrrrr         rrrrrrr rr rr  ",
          "r  rrrrrrrrr         rrrrrrr rr rr  ",
          " s s        sssssssss    s ss  s  ss",
          "r  rrrrrrrrr         rrrrrrr rr rr  ",
          "                             r      "
        ];
        XPathParser.actionTableNumber = [
          ` 1 0        /.-,+*)('    & %$  #  "!`,
          "                 J                  ",
          "a  aaaaaaaaa         aaaaaaa aa  a  ",
          "                YYYYY               ",
          ` 1 0        /.-,+*)('    & %$  #  "!`,
          `K1  KKKKKKKK .  +*)('KKKKKK  KK# K" `,
          ` 1 0        /.-,+*)('    & %$  #  "!`,
          "                            N       ",
          "                            O       ",
          "e  eeeeeeeee         eeeeeee ee ee  ",
          "f  fffffffff         fffffff ff ff  ",
          "d  ddddddddd         ddddddd dd dd  ",
          "B  BBBBBBBBB         BBBBBBB BB BB  ",
          "A  AAAAAAAAA         AAAAAAA AA AA  ",
          "  P                                 ",
          "                            Q       ",
          ` 1           .  +*)('          #  " `,
          "b  bbbbbbbbb         bbbbbbb bb  b  ",
          "                                    ",
          "!       S                    !!  !  ",
          '"      T"                    ""  "  ',
          "$   V  $$            U       $$  $  ",
          "&   &ZY&&            &XW     &&  &  ",
          ")   )))))            )))\\[   ))  )  ",
          ".   ....._^]         .....   ..  .  ",
          "1   11111111         11111   11  1  ",
          "5   55555555         55555`  55  5  ",
          "7   77777777         777777  77  7  ",
          "9   99999999         999999  99  9  ",
          ":  c::::::::         ::::::b :: a:  ",
          "I  fIIIIIIII         IIIIIIe II  I  ",
          "=  =========         ======= == ==  ",
          "?  ?????????         ??????? ?? ??  ",
          "C  CCCCCCCCC         CCCCCCC CC CC  ",
          "J   JJJJJJJJ         JJJJJJ  JJ  J  ",
          "M   MMMMMMMM         MMMMMM  MM  M  ",
          "N  NNNNNNNNN         NNNNNNN NN  N  ",
          "P  PPPPPPPPP         PPPPPPP PP  P  ",
          "                +*)('               ",
          "R  RRRRRRRRR         RRRRRRR RR aR  ",
          "U  UUUUUUUUU         UUUUUUU UU  U  ",
          "Z  ZZZZZZZZZ         ZZZZZZZ ZZ ZZ  ",
          "c  ccccccccc         ccccccc cc cc  ",
          "                             j      ",
          "L  fLLLLLLLL         LLLLLLe LL  L  ",
          "6   66666666         66666   66  6  ",
          "              k                     ",
          "                             l      ",
          "                XXXXX               ",
          ` 1 0        /.-,+*)('    & %$m #  "!`,
          "_  f________         ______e __  _  ",
          ` 1 0        /.-,+*)('    & %$  #  "!`,
          ` 1 0        /.-,+*)('    & %$  #  "!`,
          ` 1 0        /.-,+*)('    & %$  #  "!`,
          ` 1 0        /.-,+*)('    & %$  #  "!`,
          ` 1 0        /.-,+*)('    & %$  #  "!`,
          ` 1 0        /.-,+*)('    & %$  #  "!`,
          ` 1 0        /.-,+*)('    & %$  #  "!`,
          ` 1 0        /.-,+*)('    & %$  #  "!`,
          ` 1 0        /.-,+*)('    & %$  #  "!`,
          ` 1 0        /.-,+*)('    & %$  #  "!`,
          ` 1 0        /.-,+*)('    & %$  #  "!`,
          ` 1 0        /.-,+*)('    & %$  #  "!`,
          ` 1 0        /.-,+*)('    & %$  #  "!`,
          ` 1 0        /.-,+*)('      %$  #  "!`,
          ` 1 0        /.-,+*)('    & %$  #  "!`,
          ` 1           .  +*)('          #  " `,
          ` 1           .  +*)('          #  " `,
          ">  >>>>>>>>>         >>>>>>> >> >>  ",
          ` 1           .  +*)('          #  " `,
          ` 1           .  +*)('          #  " `,
          "Q  QQQQQQQQQ         QQQQQQQ QQ aQ  ",
          "V  VVVVVVVVV         VVVVVVV VV aV  ",
          "T  TTTTTTTTT         TTTTTTT TT  T  ",
          "@  @@@@@@@@@         @@@@@@@ @@ @@  ",
          "                             \x87      ",
          "[  [[[[[[[[[         [[[[[[[ [[ [[  ",
          "D  DDDDDDDDD         DDDDDDD DD DD  ",
          "                             HH     ",
          "                             \x88      ",
          "                             F\x89     ",
          "#      T#                    ##  #  ",
          "%   V  %%            U       %%  %  ",
          "'   'ZY''            'XW     ''  '  ",
          "(   (ZY((            (XW     ((  (  ",
          "+   +++++            +++\\[   ++  +  ",
          "*   *****            ***\\[   **  *  ",
          "-   -----            ---\\[   --  -  ",
          ",   ,,,,,            ,,,\\[   ,,  ,  ",
          "0   00000_^]         00000   00  0  ",
          "/   /////_^]         /////   //  /  ",
          "2   22222222         22222   22  2  ",
          "3   33333333         33333   33  3  ",
          "4   44444444         44444   44  4  ",
          "8   88888888         888888  88  8  ",
          "                                 ^  ",
          "                                 \x8A  ",
          ";  f;;;;;;;;         ;;;;;;e ;;  ;  ",
          "<  f<<<<<<<<         <<<<<<e <<  <  ",
          "O  OOOOOOOOO         OOOOOOO OO  O  ",
          "`  `````````         ``````` ``  `  ",
          "S  SSSSSSSSS         SSSSSSS SS  S  ",
          "W  WWWWWWWWW         WWWWWWW WW  W  ",
          "\\  \\\\\\\\\\\\\\\\\\         \\\\\\\\\\\\\\ \\\\ \\\\  ",
          "E  EEEEEEEEE         EEEEEEE EE EE  ",
          ` 1 0        /.-,+*)('    & %$  #  "!`,
          "]  ]]]]]]]]]         ]]]]]]] ]] ]]  ",
          "                             G      "
        ];
        XPathParser.gotoTable = [
          "3456789:;<=>?@ AB  CDEFGH IJ ",
          "                             ",
          "                             ",
          "                             ",
          "L456789:;<=>?@ AB  CDEFGH IJ ",
          "            M        EFGH IJ ",
          "       N;<=>?@ AB  CDEFGH IJ ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "            S        EFGH IJ ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "              e              ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                        h  J ",
          "              i          j   ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "o456789:;<=>?@ ABpqCDEFGH IJ ",
          "                             ",
          "  r6789:;<=>?@ AB  CDEFGH IJ ",
          "   s789:;<=>?@ AB  CDEFGH IJ ",
          "    t89:;<=>?@ AB  CDEFGH IJ ",
          "    u89:;<=>?@ AB  CDEFGH IJ ",
          "     v9:;<=>?@ AB  CDEFGH IJ ",
          "     w9:;<=>?@ AB  CDEFGH IJ ",
          "     x9:;<=>?@ AB  CDEFGH IJ ",
          "     y9:;<=>?@ AB  CDEFGH IJ ",
          "      z:;<=>?@ AB  CDEFGH IJ ",
          "      {:;<=>?@ AB  CDEFGH IJ ",
          "       |;<=>?@ AB  CDEFGH IJ ",
          "       };<=>?@ AB  CDEFGH IJ ",
          "       ~;<=>?@ AB  CDEFGH IJ ",
          "         \x7F=>?@ AB  CDEFGH IJ ",
          "\x80456789:;<=>?@ AB  CDEFGH IJ\x81",
          "            \x82        EFGH IJ ",
          "            \x83        EFGH IJ ",
          "                             ",
          "                     \x84 GH IJ ",
          "                     \x85 GH IJ ",
          "              i          \x86   ",
          "              i          \x87   ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "                             ",
          "o456789:;<=>?@ AB\x8CqCDEFGH IJ ",
          "                             ",
          "                             "
        ];
        XPathParser.productions = [
          [1, 1, 2],
          [2, 1, 3],
          [3, 1, 4],
          [3, 3, 3, -9, 4],
          [4, 1, 5],
          [4, 3, 4, -8, 5],
          [5, 1, 6],
          [5, 3, 5, -22, 6],
          [5, 3, 5, -5, 6],
          [6, 1, 7],
          [6, 3, 6, -23, 7],
          [6, 3, 6, -24, 7],
          [6, 3, 6, -6, 7],
          [6, 3, 6, -7, 7],
          [7, 1, 8],
          [7, 3, 7, -25, 8],
          [7, 3, 7, -26, 8],
          [8, 1, 9],
          [8, 3, 8, -12, 9],
          [8, 3, 8, -11, 9],
          [8, 3, 8, -10, 9],
          [9, 1, 10],
          [9, 2, -26, 9],
          [10, 1, 11],
          [10, 3, 10, -27, 11],
          [11, 1, 12],
          [11, 1, 13],
          [11, 3, 13, -28, 14],
          [11, 3, 13, -4, 14],
          [13, 1, 15],
          [13, 2, 13, 16],
          [15, 1, 17],
          [15, 3, -29, 2, -30],
          [15, 1, -15],
          [15, 1, -16],
          [15, 1, 18],
          [18, 3, -13, -29, -30],
          [18, 4, -13, -29, 19, -30],
          [19, 1, 20],
          [19, 3, 20, -31, 19],
          [20, 1, 2],
          [12, 1, 14],
          [12, 1, 21],
          [21, 1, -28],
          [21, 2, -28, 14],
          [21, 1, 22],
          [14, 1, 23],
          [14, 3, 14, -28, 23],
          [14, 1, 24],
          [23, 2, 25, 26],
          [23, 1, 26],
          [23, 3, 25, 26, 27],
          [23, 2, 26, 27],
          [23, 1, 28],
          [27, 1, 16],
          [27, 2, 16, 27],
          [25, 2, -14, -3],
          [25, 1, -32],
          [26, 1, 29],
          [26, 3, -20, -29, -30],
          [26, 4, -21, -29, -15, -30],
          [16, 3, -33, 30, -34],
          [30, 1, 2],
          [22, 2, -4, 14],
          [24, 3, 14, -4, 23],
          [28, 1, -35],
          [28, 1, -2],
          [17, 2, -36, -18],
          [29, 1, -17],
          [29, 1, -19],
          [29, 1, -18]
        ];
        XPathParser.DOUBLEDOT = 2;
        XPathParser.DOUBLECOLON = 3;
        XPathParser.DOUBLESLASH = 4;
        XPathParser.NOTEQUAL = 5;
        XPathParser.LESSTHANOREQUAL = 6;
        XPathParser.GREATERTHANOREQUAL = 7;
        XPathParser.AND = 8;
        XPathParser.OR = 9;
        XPathParser.MOD = 10;
        XPathParser.DIV = 11;
        XPathParser.MULTIPLYOPERATOR = 12;
        XPathParser.FUNCTIONNAME = 13;
        XPathParser.AXISNAME = 14;
        XPathParser.LITERAL = 15;
        XPathParser.NUMBER = 16;
        XPathParser.ASTERISKNAMETEST = 17;
        XPathParser.QNAME = 18;
        XPathParser.NCNAMECOLONASTERISK = 19;
        XPathParser.NODETYPE = 20;
        XPathParser.PROCESSINGINSTRUCTIONWITHLITERAL = 21;
        XPathParser.EQUALS = 22;
        XPathParser.LESSTHAN = 23;
        XPathParser.GREATERTHAN = 24;
        XPathParser.PLUS = 25;
        XPathParser.MINUS = 26;
        XPathParser.BAR = 27;
        XPathParser.SLASH = 28;
        XPathParser.LEFTPARENTHESIS = 29;
        XPathParser.RIGHTPARENTHESIS = 30;
        XPathParser.COMMA = 31;
        XPathParser.AT = 32;
        XPathParser.LEFTBRACKET = 33;
        XPathParser.RIGHTBRACKET = 34;
        XPathParser.DOT = 35;
        XPathParser.DOLLAR = 36;
        XPathParser.prototype.tokenize = function(s1) {
          var types = [];
          var values = [];
          var s = s1 + "\0";
          var pos = 0;
          var c = s.charAt(pos++);
          while (1) {
            while (c == " " || c == "	" || c == "\r" || c == "\n") {
              c = s.charAt(pos++);
            }
            if (c == "\0" || pos >= s.length) {
              break;
            }
            if (c == "(") {
              types.push(XPathParser.LEFTPARENTHESIS);
              values.push(c);
              c = s.charAt(pos++);
              continue;
            }
            if (c == ")") {
              types.push(XPathParser.RIGHTPARENTHESIS);
              values.push(c);
              c = s.charAt(pos++);
              continue;
            }
            if (c == "[") {
              types.push(XPathParser.LEFTBRACKET);
              values.push(c);
              c = s.charAt(pos++);
              continue;
            }
            if (c == "]") {
              types.push(XPathParser.RIGHTBRACKET);
              values.push(c);
              c = s.charAt(pos++);
              continue;
            }
            if (c == "@") {
              types.push(XPathParser.AT);
              values.push(c);
              c = s.charAt(pos++);
              continue;
            }
            if (c == ",") {
              types.push(XPathParser.COMMA);
              values.push(c);
              c = s.charAt(pos++);
              continue;
            }
            if (c == "|") {
              types.push(XPathParser.BAR);
              values.push(c);
              c = s.charAt(pos++);
              continue;
            }
            if (c == "+") {
              types.push(XPathParser.PLUS);
              values.push(c);
              c = s.charAt(pos++);
              continue;
            }
            if (c == "-") {
              types.push(XPathParser.MINUS);
              values.push(c);
              c = s.charAt(pos++);
              continue;
            }
            if (c == "=") {
              types.push(XPathParser.EQUALS);
              values.push(c);
              c = s.charAt(pos++);
              continue;
            }
            if (c == "$") {
              types.push(XPathParser.DOLLAR);
              values.push(c);
              c = s.charAt(pos++);
              continue;
            }
            if (c == ".") {
              c = s.charAt(pos++);
              if (c == ".") {
                types.push(XPathParser.DOUBLEDOT);
                values.push("..");
                c = s.charAt(pos++);
                continue;
              }
              if (c >= "0" && c <= "9") {
                var number = "." + c;
                c = s.charAt(pos++);
                while (c >= "0" && c <= "9") {
                  number += c;
                  c = s.charAt(pos++);
                }
                types.push(XPathParser.NUMBER);
                values.push(number);
                continue;
              }
              types.push(XPathParser.DOT);
              values.push(".");
              continue;
            }
            if (c == "'" || c == '"') {
              var delimiter = c;
              var literal = "";
              while (pos < s.length && (c = s.charAt(pos)) !== delimiter) {
                literal += c;
                pos += 1;
              }
              if (c !== delimiter) {
                throw XPathException.fromMessage("Unterminated string literal: " + delimiter + literal);
              }
              pos += 1;
              types.push(XPathParser.LITERAL);
              values.push(literal);
              c = s.charAt(pos++);
              continue;
            }
            if (c >= "0" && c <= "9") {
              var number = c;
              c = s.charAt(pos++);
              while (c >= "0" && c <= "9") {
                number += c;
                c = s.charAt(pos++);
              }
              if (c == ".") {
                if (s.charAt(pos) >= "0" && s.charAt(pos) <= "9") {
                  number += c;
                  number += s.charAt(pos++);
                  c = s.charAt(pos++);
                  while (c >= "0" && c <= "9") {
                    number += c;
                    c = s.charAt(pos++);
                  }
                }
              }
              types.push(XPathParser.NUMBER);
              values.push(number);
              continue;
            }
            if (c == "*") {
              if (types.length > 0) {
                var last = types[types.length - 1];
                if (last != XPathParser.AT && last != XPathParser.DOUBLECOLON && last != XPathParser.LEFTPARENTHESIS && last != XPathParser.LEFTBRACKET && last != XPathParser.AND && last != XPathParser.OR && last != XPathParser.MOD && last != XPathParser.DIV && last != XPathParser.MULTIPLYOPERATOR && last != XPathParser.SLASH && last != XPathParser.DOUBLESLASH && last != XPathParser.BAR && last != XPathParser.PLUS && last != XPathParser.MINUS && last != XPathParser.EQUALS && last != XPathParser.NOTEQUAL && last != XPathParser.LESSTHAN && last != XPathParser.LESSTHANOREQUAL && last != XPathParser.GREATERTHAN && last != XPathParser.GREATERTHANOREQUAL) {
                  types.push(XPathParser.MULTIPLYOPERATOR);
                  values.push(c);
                  c = s.charAt(pos++);
                  continue;
                }
              }
              types.push(XPathParser.ASTERISKNAMETEST);
              values.push(c);
              c = s.charAt(pos++);
              continue;
            }
            if (c == ":") {
              if (s.charAt(pos) == ":") {
                types.push(XPathParser.DOUBLECOLON);
                values.push("::");
                pos++;
                c = s.charAt(pos++);
                continue;
              }
            }
            if (c == "/") {
              c = s.charAt(pos++);
              if (c == "/") {
                types.push(XPathParser.DOUBLESLASH);
                values.push("//");
                c = s.charAt(pos++);
                continue;
              }
              types.push(XPathParser.SLASH);
              values.push("/");
              continue;
            }
            if (c == "!") {
              if (s.charAt(pos) == "=") {
                types.push(XPathParser.NOTEQUAL);
                values.push("!=");
                pos++;
                c = s.charAt(pos++);
                continue;
              }
            }
            if (c == "<") {
              if (s.charAt(pos) == "=") {
                types.push(XPathParser.LESSTHANOREQUAL);
                values.push("<=");
                pos++;
                c = s.charAt(pos++);
                continue;
              }
              types.push(XPathParser.LESSTHAN);
              values.push("<");
              c = s.charAt(pos++);
              continue;
            }
            if (c == ">") {
              if (s.charAt(pos) == "=") {
                types.push(XPathParser.GREATERTHANOREQUAL);
                values.push(">=");
                pos++;
                c = s.charAt(pos++);
                continue;
              }
              types.push(XPathParser.GREATERTHAN);
              values.push(">");
              c = s.charAt(pos++);
              continue;
            }
            if (c == "_" || Utilities.isLetter(c.charCodeAt(0))) {
              var name2 = c;
              c = s.charAt(pos++);
              while (Utilities.isNCNameChar(c.charCodeAt(0))) {
                name2 += c;
                c = s.charAt(pos++);
              }
              if (types.length > 0) {
                var last = types[types.length - 1];
                if (last != XPathParser.AT && last != XPathParser.DOUBLECOLON && last != XPathParser.LEFTPARENTHESIS && last != XPathParser.LEFTBRACKET && last != XPathParser.AND && last != XPathParser.OR && last != XPathParser.MOD && last != XPathParser.DIV && last != XPathParser.MULTIPLYOPERATOR && last != XPathParser.SLASH && last != XPathParser.DOUBLESLASH && last != XPathParser.BAR && last != XPathParser.PLUS && last != XPathParser.MINUS && last != XPathParser.EQUALS && last != XPathParser.NOTEQUAL && last != XPathParser.LESSTHAN && last != XPathParser.LESSTHANOREQUAL && last != XPathParser.GREATERTHAN && last != XPathParser.GREATERTHANOREQUAL) {
                  if (name2 == "and") {
                    types.push(XPathParser.AND);
                    values.push(name2);
                    continue;
                  }
                  if (name2 == "or") {
                    types.push(XPathParser.OR);
                    values.push(name2);
                    continue;
                  }
                  if (name2 == "mod") {
                    types.push(XPathParser.MOD);
                    values.push(name2);
                    continue;
                  }
                  if (name2 == "div") {
                    types.push(XPathParser.DIV);
                    values.push(name2);
                    continue;
                  }
                }
              }
              if (c == ":") {
                if (s.charAt(pos) == "*") {
                  types.push(XPathParser.NCNAMECOLONASTERISK);
                  values.push(name2 + ":*");
                  pos++;
                  c = s.charAt(pos++);
                  continue;
                }
                if (s.charAt(pos) == "_" || Utilities.isLetter(s.charCodeAt(pos))) {
                  name2 += ":";
                  c = s.charAt(pos++);
                  while (Utilities.isNCNameChar(c.charCodeAt(0))) {
                    name2 += c;
                    c = s.charAt(pos++);
                  }
                  if (c == "(") {
                    types.push(XPathParser.FUNCTIONNAME);
                    values.push(name2);
                    continue;
                  }
                  types.push(XPathParser.QNAME);
                  values.push(name2);
                  continue;
                }
                if (s.charAt(pos) == ":") {
                  types.push(XPathParser.AXISNAME);
                  values.push(name2);
                  continue;
                }
              }
              if (c == "(") {
                if (name2 == "comment" || name2 == "text" || name2 == "node") {
                  types.push(XPathParser.NODETYPE);
                  values.push(name2);
                  continue;
                }
                if (name2 == "processing-instruction") {
                  if (s.charAt(pos) == ")") {
                    types.push(XPathParser.NODETYPE);
                  } else {
                    types.push(XPathParser.PROCESSINGINSTRUCTIONWITHLITERAL);
                  }
                  values.push(name2);
                  continue;
                }
                types.push(XPathParser.FUNCTIONNAME);
                values.push(name2);
                continue;
              }
              types.push(XPathParser.QNAME);
              values.push(name2);
              continue;
            }
            throw new Error("Unexpected character " + c);
          }
          types.push(1);
          values.push("[EOF]");
          return [types, values];
        };
        XPathParser.SHIFT = "s";
        XPathParser.REDUCE = "r";
        XPathParser.ACCEPT = "a";
        XPathParser.prototype.parse = function(s) {
          var types;
          var values;
          var res = this.tokenize(s);
          if (res == void 0) {
            return void 0;
          }
          types = res[0];
          values = res[1];
          var tokenPos = 0;
          var state = [];
          var tokenType = [];
          var tokenValue = [];
          var s;
          var a;
          var t;
          state.push(0);
          tokenType.push(1);
          tokenValue.push("_S");
          a = types[tokenPos];
          t = values[tokenPos++];
          while (1) {
            s = state[state.length - 1];
            switch (XPathParser.actionTable[s].charAt(a - 1)) {
              case XPathParser.SHIFT:
                tokenType.push(-a);
                tokenValue.push(t);
                state.push(XPathParser.actionTableNumber[s].charCodeAt(a - 1) - 32);
                a = types[tokenPos];
                t = values[tokenPos++];
                break;
              case XPathParser.REDUCE:
                var num = XPathParser.productions[XPathParser.actionTableNumber[s].charCodeAt(a - 1) - 32][1];
                var rhs = [];
                for (var i = 0; i < num; i++) {
                  tokenType.pop();
                  rhs.unshift(tokenValue.pop());
                  state.pop();
                }
                var s_ = state[state.length - 1];
                tokenType.push(XPathParser.productions[XPathParser.actionTableNumber[s].charCodeAt(a - 1) - 32][0]);
                if (this.reduceActions[XPathParser.actionTableNumber[s].charCodeAt(a - 1) - 32] == void 0) {
                  tokenValue.push(rhs[0]);
                } else {
                  tokenValue.push(this.reduceActions[XPathParser.actionTableNumber[s].charCodeAt(a - 1) - 32](rhs));
                }
                state.push(XPathParser.gotoTable[s_].charCodeAt(XPathParser.productions[XPathParser.actionTableNumber[s].charCodeAt(a - 1) - 32][0] - 2) - 33);
                break;
              case XPathParser.ACCEPT:
                return new XPath(tokenValue.pop());
              default:
                throw new Error("XPath parse error");
            }
          }
        };
        XPath.prototype = new Object();
        XPath.prototype.constructor = XPath;
        XPath.superclass = Object.prototype;
        function XPath(e) {
          this.expression = e;
        }
        XPath.prototype.toString = function() {
          return this.expression.toString();
        };
        function setIfUnset(obj, prop, value) {
          if (!(prop in obj)) {
            obj[prop] = value;
          }
        }
        XPath.prototype.evaluate = function(c) {
          c.contextNode = c.expressionContextNode;
          c.contextSize = 1;
          c.contextPosition = 1;
          if (c.isHtml) {
            setIfUnset(c, "caseInsensitive", true);
            setIfUnset(c, "allowAnyNamespaceForNoPrefix", true);
          }
          setIfUnset(c, "caseInsensitive", false);
          return this.expression.evaluate(c);
        };
        XPath.XML_NAMESPACE_URI = "http://www.w3.org/XML/1998/namespace";
        XPath.XMLNS_NAMESPACE_URI = "http://www.w3.org/2000/xmlns/";
        Expression.prototype = new Object();
        Expression.prototype.constructor = Expression;
        Expression.superclass = Object.prototype;
        function Expression() {
        }
        Expression.prototype.init = function() {
        };
        Expression.prototype.toString = function() {
          return "<Expression>";
        };
        Expression.prototype.evaluate = function(c) {
          throw new Error("Could not evaluate expression.");
        };
        UnaryOperation.prototype = new Expression();
        UnaryOperation.prototype.constructor = UnaryOperation;
        UnaryOperation.superclass = Expression.prototype;
        function UnaryOperation(rhs) {
          if (arguments.length > 0) {
            this.init(rhs);
          }
        }
        UnaryOperation.prototype.init = function(rhs) {
          this.rhs = rhs;
        };
        UnaryMinusOperation.prototype = new UnaryOperation();
        UnaryMinusOperation.prototype.constructor = UnaryMinusOperation;
        UnaryMinusOperation.superclass = UnaryOperation.prototype;
        function UnaryMinusOperation(rhs) {
          if (arguments.length > 0) {
            this.init(rhs);
          }
        }
        UnaryMinusOperation.prototype.init = function(rhs) {
          UnaryMinusOperation.superclass.init.call(this, rhs);
        };
        UnaryMinusOperation.prototype.evaluate = function(c) {
          return this.rhs.evaluate(c).number().negate();
        };
        UnaryMinusOperation.prototype.toString = function() {
          return "-" + this.rhs.toString();
        };
        BinaryOperation.prototype = new Expression();
        BinaryOperation.prototype.constructor = BinaryOperation;
        BinaryOperation.superclass = Expression.prototype;
        function BinaryOperation(lhs, rhs) {
          if (arguments.length > 0) {
            this.init(lhs, rhs);
          }
        }
        BinaryOperation.prototype.init = function(lhs, rhs) {
          this.lhs = lhs;
          this.rhs = rhs;
        };
        OrOperation.prototype = new BinaryOperation();
        OrOperation.prototype.constructor = OrOperation;
        OrOperation.superclass = BinaryOperation.prototype;
        function OrOperation(lhs, rhs) {
          if (arguments.length > 0) {
            this.init(lhs, rhs);
          }
        }
        OrOperation.prototype.init = function(lhs, rhs) {
          OrOperation.superclass.init.call(this, lhs, rhs);
        };
        OrOperation.prototype.toString = function() {
          return "(" + this.lhs.toString() + " or " + this.rhs.toString() + ")";
        };
        OrOperation.prototype.evaluate = function(c) {
          var b = this.lhs.evaluate(c).bool();
          if (b.booleanValue()) {
            return b;
          }
          return this.rhs.evaluate(c).bool();
        };
        AndOperation.prototype = new BinaryOperation();
        AndOperation.prototype.constructor = AndOperation;
        AndOperation.superclass = BinaryOperation.prototype;
        function AndOperation(lhs, rhs) {
          if (arguments.length > 0) {
            this.init(lhs, rhs);
          }
        }
        AndOperation.prototype.init = function(lhs, rhs) {
          AndOperation.superclass.init.call(this, lhs, rhs);
        };
        AndOperation.prototype.toString = function() {
          return "(" + this.lhs.toString() + " and " + this.rhs.toString() + ")";
        };
        AndOperation.prototype.evaluate = function(c) {
          var b = this.lhs.evaluate(c).bool();
          if (!b.booleanValue()) {
            return b;
          }
          return this.rhs.evaluate(c).bool();
        };
        EqualsOperation.prototype = new BinaryOperation();
        EqualsOperation.prototype.constructor = EqualsOperation;
        EqualsOperation.superclass = BinaryOperation.prototype;
        function EqualsOperation(lhs, rhs) {
          if (arguments.length > 0) {
            this.init(lhs, rhs);
          }
        }
        EqualsOperation.prototype.init = function(lhs, rhs) {
          EqualsOperation.superclass.init.call(this, lhs, rhs);
        };
        EqualsOperation.prototype.toString = function() {
          return "(" + this.lhs.toString() + " = " + this.rhs.toString() + ")";
        };
        EqualsOperation.prototype.evaluate = function(c) {
          return this.lhs.evaluate(c).equals(this.rhs.evaluate(c));
        };
        NotEqualOperation.prototype = new BinaryOperation();
        NotEqualOperation.prototype.constructor = NotEqualOperation;
        NotEqualOperation.superclass = BinaryOperation.prototype;
        function NotEqualOperation(lhs, rhs) {
          if (arguments.length > 0) {
            this.init(lhs, rhs);
          }
        }
        NotEqualOperation.prototype.init = function(lhs, rhs) {
          NotEqualOperation.superclass.init.call(this, lhs, rhs);
        };
        NotEqualOperation.prototype.toString = function() {
          return "(" + this.lhs.toString() + " != " + this.rhs.toString() + ")";
        };
        NotEqualOperation.prototype.evaluate = function(c) {
          return this.lhs.evaluate(c).notequal(this.rhs.evaluate(c));
        };
        LessThanOperation.prototype = new BinaryOperation();
        LessThanOperation.prototype.constructor = LessThanOperation;
        LessThanOperation.superclass = BinaryOperation.prototype;
        function LessThanOperation(lhs, rhs) {
          if (arguments.length > 0) {
            this.init(lhs, rhs);
          }
        }
        LessThanOperation.prototype.init = function(lhs, rhs) {
          LessThanOperation.superclass.init.call(this, lhs, rhs);
        };
        LessThanOperation.prototype.evaluate = function(c) {
          return this.lhs.evaluate(c).lessthan(this.rhs.evaluate(c));
        };
        LessThanOperation.prototype.toString = function() {
          return "(" + this.lhs.toString() + " < " + this.rhs.toString() + ")";
        };
        GreaterThanOperation.prototype = new BinaryOperation();
        GreaterThanOperation.prototype.constructor = GreaterThanOperation;
        GreaterThanOperation.superclass = BinaryOperation.prototype;
        function GreaterThanOperation(lhs, rhs) {
          if (arguments.length > 0) {
            this.init(lhs, rhs);
          }
        }
        GreaterThanOperation.prototype.init = function(lhs, rhs) {
          GreaterThanOperation.superclass.init.call(this, lhs, rhs);
        };
        GreaterThanOperation.prototype.evaluate = function(c) {
          return this.lhs.evaluate(c).greaterthan(this.rhs.evaluate(c));
        };
        GreaterThanOperation.prototype.toString = function() {
          return "(" + this.lhs.toString() + " > " + this.rhs.toString() + ")";
        };
        LessThanOrEqualOperation.prototype = new BinaryOperation();
        LessThanOrEqualOperation.prototype.constructor = LessThanOrEqualOperation;
        LessThanOrEqualOperation.superclass = BinaryOperation.prototype;
        function LessThanOrEqualOperation(lhs, rhs) {
          if (arguments.length > 0) {
            this.init(lhs, rhs);
          }
        }
        LessThanOrEqualOperation.prototype.init = function(lhs, rhs) {
          LessThanOrEqualOperation.superclass.init.call(this, lhs, rhs);
        };
        LessThanOrEqualOperation.prototype.evaluate = function(c) {
          return this.lhs.evaluate(c).lessthanorequal(this.rhs.evaluate(c));
        };
        LessThanOrEqualOperation.prototype.toString = function() {
          return "(" + this.lhs.toString() + " <= " + this.rhs.toString() + ")";
        };
        GreaterThanOrEqualOperation.prototype = new BinaryOperation();
        GreaterThanOrEqualOperation.prototype.constructor = GreaterThanOrEqualOperation;
        GreaterThanOrEqualOperation.superclass = BinaryOperation.prototype;
        function GreaterThanOrEqualOperation(lhs, rhs) {
          if (arguments.length > 0) {
            this.init(lhs, rhs);
          }
        }
        GreaterThanOrEqualOperation.prototype.init = function(lhs, rhs) {
          GreaterThanOrEqualOperation.superclass.init.call(this, lhs, rhs);
        };
        GreaterThanOrEqualOperation.prototype.evaluate = function(c) {
          return this.lhs.evaluate(c).greaterthanorequal(this.rhs.evaluate(c));
        };
        GreaterThanOrEqualOperation.prototype.toString = function() {
          return "(" + this.lhs.toString() + " >= " + this.rhs.toString() + ")";
        };
        PlusOperation.prototype = new BinaryOperation();
        PlusOperation.prototype.constructor = PlusOperation;
        PlusOperation.superclass = BinaryOperation.prototype;
        function PlusOperation(lhs, rhs) {
          if (arguments.length > 0) {
            this.init(lhs, rhs);
          }
        }
        PlusOperation.prototype.init = function(lhs, rhs) {
          PlusOperation.superclass.init.call(this, lhs, rhs);
        };
        PlusOperation.prototype.evaluate = function(c) {
          return this.lhs.evaluate(c).number().plus(this.rhs.evaluate(c).number());
        };
        PlusOperation.prototype.toString = function() {
          return "(" + this.lhs.toString() + " + " + this.rhs.toString() + ")";
        };
        MinusOperation.prototype = new BinaryOperation();
        MinusOperation.prototype.constructor = MinusOperation;
        MinusOperation.superclass = BinaryOperation.prototype;
        function MinusOperation(lhs, rhs) {
          if (arguments.length > 0) {
            this.init(lhs, rhs);
          }
        }
        MinusOperation.prototype.init = function(lhs, rhs) {
          MinusOperation.superclass.init.call(this, lhs, rhs);
        };
        MinusOperation.prototype.evaluate = function(c) {
          return this.lhs.evaluate(c).number().minus(this.rhs.evaluate(c).number());
        };
        MinusOperation.prototype.toString = function() {
          return "(" + this.lhs.toString() + " - " + this.rhs.toString() + ")";
        };
        MultiplyOperation.prototype = new BinaryOperation();
        MultiplyOperation.prototype.constructor = MultiplyOperation;
        MultiplyOperation.superclass = BinaryOperation.prototype;
        function MultiplyOperation(lhs, rhs) {
          if (arguments.length > 0) {
            this.init(lhs, rhs);
          }
        }
        MultiplyOperation.prototype.init = function(lhs, rhs) {
          MultiplyOperation.superclass.init.call(this, lhs, rhs);
        };
        MultiplyOperation.prototype.evaluate = function(c) {
          return this.lhs.evaluate(c).number().multiply(this.rhs.evaluate(c).number());
        };
        MultiplyOperation.prototype.toString = function() {
          return "(" + this.lhs.toString() + " * " + this.rhs.toString() + ")";
        };
        DivOperation.prototype = new BinaryOperation();
        DivOperation.prototype.constructor = DivOperation;
        DivOperation.superclass = BinaryOperation.prototype;
        function DivOperation(lhs, rhs) {
          if (arguments.length > 0) {
            this.init(lhs, rhs);
          }
        }
        DivOperation.prototype.init = function(lhs, rhs) {
          DivOperation.superclass.init.call(this, lhs, rhs);
        };
        DivOperation.prototype.evaluate = function(c) {
          return this.lhs.evaluate(c).number().div(this.rhs.evaluate(c).number());
        };
        DivOperation.prototype.toString = function() {
          return "(" + this.lhs.toString() + " div " + this.rhs.toString() + ")";
        };
        ModOperation.prototype = new BinaryOperation();
        ModOperation.prototype.constructor = ModOperation;
        ModOperation.superclass = BinaryOperation.prototype;
        function ModOperation(lhs, rhs) {
          if (arguments.length > 0) {
            this.init(lhs, rhs);
          }
        }
        ModOperation.prototype.init = function(lhs, rhs) {
          ModOperation.superclass.init.call(this, lhs, rhs);
        };
        ModOperation.prototype.evaluate = function(c) {
          return this.lhs.evaluate(c).number().mod(this.rhs.evaluate(c).number());
        };
        ModOperation.prototype.toString = function() {
          return "(" + this.lhs.toString() + " mod " + this.rhs.toString() + ")";
        };
        BarOperation.prototype = new BinaryOperation();
        BarOperation.prototype.constructor = BarOperation;
        BarOperation.superclass = BinaryOperation.prototype;
        function BarOperation(lhs, rhs) {
          if (arguments.length > 0) {
            this.init(lhs, rhs);
          }
        }
        BarOperation.prototype.init = function(lhs, rhs) {
          BarOperation.superclass.init.call(this, lhs, rhs);
        };
        BarOperation.prototype.evaluate = function(c) {
          return this.lhs.evaluate(c).nodeset().union(this.rhs.evaluate(c).nodeset());
        };
        BarOperation.prototype.toString = function() {
          return map(toString, [this.lhs, this.rhs]).join(" | ");
        };
        PathExpr.prototype = new Expression();
        PathExpr.prototype.constructor = PathExpr;
        PathExpr.superclass = Expression.prototype;
        function PathExpr(filter2, filterPreds, locpath) {
          if (arguments.length > 0) {
            this.init(filter2, filterPreds, locpath);
          }
        }
        PathExpr.prototype.init = function(filter2, filterPreds, locpath) {
          PathExpr.superclass.init.call(this);
          this.filter = filter2;
          this.filterPredicates = filterPreds;
          this.locationPath = locpath;
        };
        function findRoot(node) {
          while (node && node.parentNode) {
            node = node.parentNode;
          }
          return node;
        }
        PathExpr.applyPredicates = function(predicates, c, nodes) {
          if (predicates.length === 0) {
            return nodes;
          }
          var ctx = c.extend({});
          return reduce(
            function(inNodes, pred) {
              ctx.contextSize = inNodes.length;
              return filter(
                function(node, i) {
                  ctx.contextNode = node;
                  ctx.contextPosition = i + 1;
                  return PathExpr.predicateMatches(pred, ctx);
                },
                inNodes
              );
            },
            nodes,
            predicates
          );
        };
        PathExpr.getRoot = function(xpc, nodes) {
          var firstNode = nodes[0];
          if (firstNode.nodeType === 9) {
            return firstNode;
          }
          if (xpc.virtualRoot) {
            return xpc.virtualRoot;
          }
          var ownerDoc = firstNode.ownerDocument;
          if (ownerDoc) {
            return ownerDoc;
          }
          var n = firstNode;
          while (n.parentNode != null) {
            n = n.parentNode;
          }
          return n;
        };
        PathExpr.applyStep = function(step, xpc, node) {
          var self = this;
          var newNodes = [];
          xpc.contextNode = node;
          switch (step.axis) {
            case Step.ANCESTOR:
              if (xpc.contextNode === xpc.virtualRoot) {
                break;
              }
              var m;
              if (xpc.contextNode.nodeType == 2) {
                m = PathExpr.getOwnerElement(xpc.contextNode);
              } else {
                m = xpc.contextNode.parentNode;
              }
              while (m != null) {
                if (step.nodeTest.matches(m, xpc)) {
                  newNodes.push(m);
                }
                if (m === xpc.virtualRoot) {
                  break;
                }
                m = m.parentNode;
              }
              break;
            case Step.ANCESTORORSELF:
              for (var m = xpc.contextNode; m != null; m = m.nodeType == 2 ? PathExpr.getOwnerElement(m) : m.parentNode) {
                if (step.nodeTest.matches(m, xpc)) {
                  newNodes.push(m);
                }
                if (m === xpc.virtualRoot) {
                  break;
                }
              }
              break;
            case Step.ATTRIBUTE:
              var nnm = xpc.contextNode.attributes;
              if (nnm != null) {
                for (var k = 0; k < nnm.length; k++) {
                  var m = nnm.item(k);
                  if (step.nodeTest.matches(m, xpc)) {
                    newNodes.push(m);
                  }
                }
              }
              break;
            case Step.CHILD:
              for (var m = xpc.contextNode.firstChild; m != null; m = m.nextSibling) {
                if (step.nodeTest.matches(m, xpc)) {
                  newNodes.push(m);
                }
              }
              break;
            case Step.DESCENDANT:
              var st = [xpc.contextNode.firstChild];
              while (st.length > 0) {
                for (var m = st.pop(); m != null; ) {
                  if (step.nodeTest.matches(m, xpc)) {
                    newNodes.push(m);
                  }
                  if (m.firstChild != null) {
                    st.push(m.nextSibling);
                    m = m.firstChild;
                  } else {
                    m = m.nextSibling;
                  }
                }
              }
              break;
            case Step.DESCENDANTORSELF:
              if (step.nodeTest.matches(xpc.contextNode, xpc)) {
                newNodes.push(xpc.contextNode);
              }
              var st = [xpc.contextNode.firstChild];
              while (st.length > 0) {
                for (var m = st.pop(); m != null; ) {
                  if (step.nodeTest.matches(m, xpc)) {
                    newNodes.push(m);
                  }
                  if (m.firstChild != null) {
                    st.push(m.nextSibling);
                    m = m.firstChild;
                  } else {
                    m = m.nextSibling;
                  }
                }
              }
              break;
            case Step.FOLLOWING:
              if (xpc.contextNode === xpc.virtualRoot) {
                break;
              }
              var st = [];
              if (xpc.contextNode.firstChild != null) {
                st.unshift(xpc.contextNode.firstChild);
              } else {
                st.unshift(xpc.contextNode.nextSibling);
              }
              for (var m = xpc.contextNode.parentNode; m != null && m.nodeType != 9 && m !== xpc.virtualRoot; m = m.parentNode) {
                st.unshift(m.nextSibling);
              }
              do {
                for (var m = st.pop(); m != null; ) {
                  if (step.nodeTest.matches(m, xpc)) {
                    newNodes.push(m);
                  }
                  if (m.firstChild != null) {
                    st.push(m.nextSibling);
                    m = m.firstChild;
                  } else {
                    m = m.nextSibling;
                  }
                }
              } while (st.length > 0);
              break;
            case Step.FOLLOWINGSIBLING:
              if (xpc.contextNode === xpc.virtualRoot) {
                break;
              }
              for (var m = xpc.contextNode.nextSibling; m != null; m = m.nextSibling) {
                if (step.nodeTest.matches(m, xpc)) {
                  newNodes.push(m);
                }
              }
              break;
            case Step.NAMESPACE:
              var n = {};
              if (xpc.contextNode.nodeType == 1) {
                n["xml"] = XPath.XML_NAMESPACE_URI;
                n["xmlns"] = XPath.XMLNS_NAMESPACE_URI;
                for (var m = xpc.contextNode; m != null && m.nodeType == 1; m = m.parentNode) {
                  for (var k = 0; k < m.attributes.length; k++) {
                    var attr = m.attributes.item(k);
                    var nm = String(attr.name);
                    if (nm == "xmlns") {
                      if (n[""] == void 0) {
                        n[""] = attr.value;
                      }
                    } else if (nm.length > 6 && nm.substring(0, 6) == "xmlns:") {
                      var pre = nm.substring(6, nm.length);
                      if (n[pre] == void 0) {
                        n[pre] = attr.value;
                      }
                    }
                  }
                }
                for (var pre in n) {
                  var nsn = new XPathNamespace(pre, n[pre], xpc.contextNode);
                  if (step.nodeTest.matches(nsn, xpc)) {
                    newNodes.push(nsn);
                  }
                }
              }
              break;
            case Step.PARENT:
              m = null;
              if (xpc.contextNode !== xpc.virtualRoot) {
                if (xpc.contextNode.nodeType == 2) {
                  m = PathExpr.getOwnerElement(xpc.contextNode);
                } else {
                  m = xpc.contextNode.parentNode;
                }
              }
              if (m != null && step.nodeTest.matches(m, xpc)) {
                newNodes.push(m);
              }
              break;
            case Step.PRECEDING:
              var st;
              if (xpc.virtualRoot != null) {
                st = [xpc.virtualRoot];
              } else {
                st = [findRoot(xpc.contextNode)];
              }
              outer:
                while (st.length > 0) {
                  for (var m = st.pop(); m != null; ) {
                    if (m == xpc.contextNode) {
                      break outer;
                    }
                    if (step.nodeTest.matches(m, xpc)) {
                      newNodes.unshift(m);
                    }
                    if (m.firstChild != null) {
                      st.push(m.nextSibling);
                      m = m.firstChild;
                    } else {
                      m = m.nextSibling;
                    }
                  }
                }
              break;
            case Step.PRECEDINGSIBLING:
              if (xpc.contextNode === xpc.virtualRoot) {
                break;
              }
              for (var m = xpc.contextNode.previousSibling; m != null; m = m.previousSibling) {
                if (step.nodeTest.matches(m, xpc)) {
                  newNodes.push(m);
                }
              }
              break;
            case Step.SELF:
              if (step.nodeTest.matches(xpc.contextNode, xpc)) {
                newNodes.push(xpc.contextNode);
              }
              break;
            default:
          }
          return newNodes;
        };
        function applyStepWithPredicates(step, xpc, node) {
          return PathExpr.applyPredicates(
            step.predicates,
            xpc,
            PathExpr.applyStep(step, xpc, node)
          );
        }
        function applyStepToNodes(context, nodes, step) {
          return flatten(
            map(
              applyStepWithPredicates.bind(null, step, context),
              nodes
            )
          );
        }
        PathExpr.applySteps = function(steps, xpc, nodes) {
          return reduce(
            applyStepToNodes.bind(null, xpc),
            nodes,
            steps
          );
        };
        PathExpr.prototype.applyFilter = function(c, xpc) {
          if (!this.filter) {
            return { nodes: [c.contextNode] };
          }
          var ns = this.filter.evaluate(c);
          if (!Utilities.instance_of(ns, XNodeSet)) {
            if (this.filterPredicates != null && this.filterPredicates.length > 0 || this.locationPath != null) {
              throw new Error("Path expression filter must evaluate to a nodeset if predicates or location path are used");
            }
            return { nonNodes: ns };
          }
          return {
            nodes: PathExpr.applyPredicates(this.filterPredicates || [], xpc, ns.toUnsortedArray())
          };
        };
        PathExpr.applyLocationPath = function(locationPath, xpc, nodes) {
          if (!locationPath) {
            return nodes;
          }
          var startNodes = locationPath.absolute ? [PathExpr.getRoot(xpc, nodes)] : nodes;
          return PathExpr.applySteps(locationPath.steps, xpc, startNodes);
        };
        PathExpr.prototype.evaluate = function(c) {
          var xpc = assign(new XPathContext(), c);
          var filterResult = this.applyFilter(c, xpc);
          if ("nonNodes" in filterResult) {
            return filterResult.nonNodes;
          }
          var ns = new XNodeSet();
          ns.addArray(PathExpr.applyLocationPath(this.locationPath, xpc, filterResult.nodes));
          return ns;
        };
        PathExpr.predicateMatches = function(pred, c) {
          var res = pred.evaluate(c);
          return Utilities.instance_of(res, XNumber) ? c.contextPosition === res.numberValue() : res.booleanValue();
        };
        PathExpr.predicateString = function(predicate) {
          return wrap("[", "]", predicate.toString());
        };
        PathExpr.predicatesString = function(predicates) {
          return join(
            "",
            map(PathExpr.predicateString, predicates)
          );
        };
        PathExpr.prototype.toString = function() {
          if (this.filter != void 0) {
            var filterStr = toString(this.filter);
            if (Utilities.instance_of(this.filter, XString)) {
              return wrap("'", "'", filterStr);
            }
            if (this.filterPredicates != void 0 && this.filterPredicates.length) {
              return wrap("(", ")", filterStr) + PathExpr.predicatesString(this.filterPredicates);
            }
            if (this.locationPath != void 0) {
              return filterStr + (this.locationPath.absolute ? "" : "/") + toString(this.locationPath);
            }
            return filterStr;
          }
          return toString(this.locationPath);
        };
        PathExpr.getOwnerElement = function(n) {
          if (n.ownerElement) {
            return n.ownerElement;
          }
          try {
            if (n.selectSingleNode) {
              return n.selectSingleNode("..");
            }
          } catch (e) {
          }
          var doc = n.nodeType == 9 ? n : n.ownerDocument;
          var elts = doc.getElementsByTagName("*");
          for (var i = 0; i < elts.length; i++) {
            var elt = elts.item(i);
            var nnm = elt.attributes;
            for (var j = 0; j < nnm.length; j++) {
              var an = nnm.item(j);
              if (an === n) {
                return elt;
              }
            }
          }
          return null;
        };
        LocationPath.prototype = new Object();
        LocationPath.prototype.constructor = LocationPath;
        LocationPath.superclass = Object.prototype;
        function LocationPath(abs, steps) {
          if (arguments.length > 0) {
            this.init(abs, steps);
          }
        }
        LocationPath.prototype.init = function(abs, steps) {
          this.absolute = abs;
          this.steps = steps;
        };
        LocationPath.prototype.toString = function() {
          return (this.absolute ? "/" : "") + map(toString, this.steps).join("/");
        };
        Step.prototype = new Object();
        Step.prototype.constructor = Step;
        Step.superclass = Object.prototype;
        function Step(axis, nodetest, preds) {
          if (arguments.length > 0) {
            this.init(axis, nodetest, preds);
          }
        }
        Step.prototype.init = function(axis, nodetest, preds) {
          this.axis = axis;
          this.nodeTest = nodetest;
          this.predicates = preds;
        };
        Step.prototype.toString = function() {
          return Step.STEPNAMES[this.axis] + "::" + this.nodeTest.toString() + PathExpr.predicatesString(this.predicates);
        };
        Step.ANCESTOR = 0;
        Step.ANCESTORORSELF = 1;
        Step.ATTRIBUTE = 2;
        Step.CHILD = 3;
        Step.DESCENDANT = 4;
        Step.DESCENDANTORSELF = 5;
        Step.FOLLOWING = 6;
        Step.FOLLOWINGSIBLING = 7;
        Step.NAMESPACE = 8;
        Step.PARENT = 9;
        Step.PRECEDING = 10;
        Step.PRECEDINGSIBLING = 11;
        Step.SELF = 12;
        Step.STEPNAMES = reduce(function(acc, x) {
          return acc[x[0]] = x[1], acc;
        }, {}, [
          [Step.ANCESTOR, "ancestor"],
          [Step.ANCESTORORSELF, "ancestor-or-self"],
          [Step.ATTRIBUTE, "attribute"],
          [Step.CHILD, "child"],
          [Step.DESCENDANT, "descendant"],
          [Step.DESCENDANTORSELF, "descendant-or-self"],
          [Step.FOLLOWING, "following"],
          [Step.FOLLOWINGSIBLING, "following-sibling"],
          [Step.NAMESPACE, "namespace"],
          [Step.PARENT, "parent"],
          [Step.PRECEDING, "preceding"],
          [Step.PRECEDINGSIBLING, "preceding-sibling"],
          [Step.SELF, "self"]
        ]);
        NodeTest.prototype = new Object();
        NodeTest.prototype.constructor = NodeTest;
        NodeTest.superclass = Object.prototype;
        function NodeTest(type, value) {
          if (arguments.length > 0) {
            this.init(type, value);
          }
        }
        NodeTest.prototype.init = function(type, value) {
          this.type = type;
          this.value = value;
        };
        NodeTest.prototype.toString = function() {
          return "<unknown nodetest type>";
        };
        NodeTest.prototype.matches = function(n, xpc) {
          console.warn("unknown node test type");
        };
        NodeTest.NAMETESTANY = 0;
        NodeTest.NAMETESTPREFIXANY = 1;
        NodeTest.NAMETESTQNAME = 2;
        NodeTest.COMMENT = 3;
        NodeTest.TEXT = 4;
        NodeTest.PI = 5;
        NodeTest.NODE = 6;
        NodeTest.isNodeType = function(types) {
          return function(node) {
            return includes(types, node.nodeType);
          };
        };
        NodeTest.makeNodeTestType = function(type, members, ctor) {
          var newType = ctor || function() {
          };
          newType.prototype = new NodeTest(type);
          newType.prototype.constructor = newType;
          assign(newType.prototype, members);
          return newType;
        };
        NodeTest.makeNodeTypeTest = function(type, nodeTypes, stringVal) {
          return new (NodeTest.makeNodeTestType(type, {
            matches: NodeTest.isNodeType(nodeTypes),
            toString: always(stringVal)
          }))();
        };
        NodeTest.hasPrefix = function(node) {
          return node.prefix || (node.nodeName || node.tagName).indexOf(":") !== -1;
        };
        NodeTest.isElementOrAttribute = NodeTest.isNodeType([1, 2]);
        NodeTest.nameSpaceMatches = function(prefix, xpc, n) {
          var nNamespace = n.namespaceURI || "";
          if (!prefix) {
            return !nNamespace || xpc.allowAnyNamespaceForNoPrefix && !NodeTest.hasPrefix(n);
          }
          var ns = xpc.namespaceResolver.getNamespace(prefix, xpc.expressionContextNode);
          if (ns == null) {
            throw new Error("Cannot resolve QName " + prefix);
          }
          return ns === nNamespace;
        };
        NodeTest.localNameMatches = function(localName, xpc, n) {
          var nLocalName = n.localName || n.nodeName;
          return xpc.caseInsensitive ? localName.toLowerCase() === nLocalName.toLowerCase() : localName === nLocalName;
        };
        NodeTest.NameTestPrefixAny = NodeTest.makeNodeTestType(
          NodeTest.NAMETESTPREFIXANY,
          {
            matches: function(n, xpc) {
              return NodeTest.isElementOrAttribute(n) && NodeTest.nameSpaceMatches(this.prefix, xpc, n);
            },
            toString: function() {
              return this.prefix + ":*";
            }
          },
          function NameTestPrefixAny(prefix) {
            this.prefix = prefix;
          }
        );
        NodeTest.NameTestQName = NodeTest.makeNodeTestType(
          NodeTest.NAMETESTQNAME,
          {
            matches: function(n, xpc) {
              return NodeTest.isNodeType([1, 2, XPathNamespace.XPATH_NAMESPACE_NODE])(n) && NodeTest.nameSpaceMatches(this.prefix, xpc, n) && NodeTest.localNameMatches(this.localName, xpc, n);
            },
            toString: function() {
              return this.name;
            }
          },
          function NameTestQName(name2) {
            var nameParts = name2.split(":");
            this.name = name2;
            this.prefix = nameParts.length > 1 ? nameParts[0] : null;
            this.localName = nameParts[nameParts.length > 1 ? 1 : 0];
          }
        );
        NodeTest.PITest = NodeTest.makeNodeTestType(NodeTest.PI, {
          matches: function(n, xpc) {
            return NodeTest.isNodeType([7])(n) && (n.target || n.nodeName) === this.name;
          },
          toString: function() {
            return wrap('processing-instruction("', '")', this.name);
          }
        }, function(name2) {
          this.name = name2;
        });
        NodeTest.nameTestAny = NodeTest.makeNodeTypeTest(NodeTest.NAMETESTANY, [1, 2, XPathNamespace.XPATH_NAMESPACE_NODE], "*");
        NodeTest.textTest = NodeTest.makeNodeTypeTest(NodeTest.TEXT, [3, 4], "text()");
        NodeTest.commentTest = NodeTest.makeNodeTypeTest(NodeTest.COMMENT, [8], "comment()");
        NodeTest.nodeTest = NodeTest.makeNodeTypeTest(NodeTest.NODE, [1, 2, 3, 4, 7, 8, 9], "node()");
        NodeTest.anyPiTest = NodeTest.makeNodeTypeTest(NodeTest.PI, [7], "processing-instruction()");
        VariableReference.prototype = new Expression();
        VariableReference.prototype.constructor = VariableReference;
        VariableReference.superclass = Expression.prototype;
        function VariableReference(v) {
          if (arguments.length > 0) {
            this.init(v);
          }
        }
        VariableReference.prototype.init = function(v) {
          this.variable = v;
        };
        VariableReference.prototype.toString = function() {
          return "$" + this.variable;
        };
        VariableReference.prototype.evaluate = function(c) {
          var parts = Utilities.resolveQName(this.variable, c.namespaceResolver, c.contextNode, false);
          if (parts[0] == null) {
            throw new Error("Cannot resolve QName " + fn);
          }
          var result = c.variableResolver.getVariable(parts[1], parts[0]);
          if (!result) {
            throw XPathException.fromMessage("Undeclared variable: " + this.toString());
          }
          return result;
        };
        FunctionCall.prototype = new Expression();
        FunctionCall.prototype.constructor = FunctionCall;
        FunctionCall.superclass = Expression.prototype;
        function FunctionCall(fn2, args) {
          if (arguments.length > 0) {
            this.init(fn2, args);
          }
        }
        FunctionCall.prototype.init = function(fn2, args) {
          this.functionName = fn2;
          this.arguments = args;
        };
        FunctionCall.prototype.toString = function() {
          var s = this.functionName + "(";
          for (var i = 0; i < this.arguments.length; i++) {
            if (i > 0) {
              s += ", ";
            }
            s += this.arguments[i].toString();
          }
          return s + ")";
        };
        FunctionCall.prototype.evaluate = function(c) {
          var f = FunctionResolver.getFunctionFromContext(this.functionName, c);
          if (!f) {
            throw new Error("Unknown function " + this.functionName);
          }
          var a = [c].concat(this.arguments);
          return f.apply(c.functionResolver.thisArg, a);
        };
        var Operators = new Object();
        Operators.equals = function(l, r) {
          return l.equals(r);
        };
        Operators.notequal = function(l, r) {
          return l.notequal(r);
        };
        Operators.lessthan = function(l, r) {
          return l.lessthan(r);
        };
        Operators.greaterthan = function(l, r) {
          return l.greaterthan(r);
        };
        Operators.lessthanorequal = function(l, r) {
          return l.lessthanorequal(r);
        };
        Operators.greaterthanorequal = function(l, r) {
          return l.greaterthanorequal(r);
        };
        XString.prototype = new Expression();
        XString.prototype.constructor = XString;
        XString.superclass = Expression.prototype;
        function XString(s) {
          if (arguments.length > 0) {
            this.init(s);
          }
        }
        XString.prototype.init = function(s) {
          this.str = String(s);
        };
        XString.prototype.toString = function() {
          return this.str;
        };
        XString.prototype.evaluate = function(c) {
          return this;
        };
        XString.prototype.string = function() {
          return this;
        };
        XString.prototype.number = function() {
          return new XNumber(this.str);
        };
        XString.prototype.bool = function() {
          return new XBoolean(this.str);
        };
        XString.prototype.nodeset = function() {
          throw new Error("Cannot convert string to nodeset");
        };
        XString.prototype.stringValue = function() {
          return this.str;
        };
        XString.prototype.numberValue = function() {
          return this.number().numberValue();
        };
        XString.prototype.booleanValue = function() {
          return this.bool().booleanValue();
        };
        XString.prototype.equals = function(r) {
          if (Utilities.instance_of(r, XBoolean)) {
            return this.bool().equals(r);
          }
          if (Utilities.instance_of(r, XNumber)) {
            return this.number().equals(r);
          }
          if (Utilities.instance_of(r, XNodeSet)) {
            return r.compareWithString(this, Operators.equals);
          }
          return new XBoolean(this.str == r.str);
        };
        XString.prototype.notequal = function(r) {
          if (Utilities.instance_of(r, XBoolean)) {
            return this.bool().notequal(r);
          }
          if (Utilities.instance_of(r, XNumber)) {
            return this.number().notequal(r);
          }
          if (Utilities.instance_of(r, XNodeSet)) {
            return r.compareWithString(this, Operators.notequal);
          }
          return new XBoolean(this.str != r.str);
        };
        XString.prototype.lessthan = function(r) {
          return this.number().lessthan(r);
        };
        XString.prototype.greaterthan = function(r) {
          return this.number().greaterthan(r);
        };
        XString.prototype.lessthanorequal = function(r) {
          return this.number().lessthanorequal(r);
        };
        XString.prototype.greaterthanorequal = function(r) {
          return this.number().greaterthanorequal(r);
        };
        XNumber.prototype = new Expression();
        XNumber.prototype.constructor = XNumber;
        XNumber.superclass = Expression.prototype;
        function XNumber(n) {
          if (arguments.length > 0) {
            this.init(n);
          }
        }
        XNumber.prototype.init = function(n) {
          this.num = typeof n === "string" ? this.parse(n) : Number(n);
        };
        XNumber.prototype.numberFormat = /^\s*-?[0-9]*\.?[0-9]+\s*$/;
        XNumber.prototype.parse = function(s) {
          return this.numberFormat.test(s) ? parseFloat(s) : Number.NaN;
        };
        function padSmallNumber(numberStr) {
          var parts = numberStr.split("e-");
          var base = parts[0].replace(".", "");
          var exponent = Number(parts[1]);
          for (var i = 0; i < exponent - 1; i += 1) {
            base = "0" + base;
          }
          return "0." + base;
        }
        function padLargeNumber(numberStr) {
          var parts = numberStr.split("e");
          var base = parts[0].replace(".", "");
          var exponent = Number(parts[1]);
          var zerosToAppend = exponent + 1 - base.length;
          for (var i = 0; i < zerosToAppend; i += 1) {
            base += "0";
          }
          return base;
        }
        XNumber.prototype.toString = function() {
          var strValue = this.num.toString();
          if (strValue.indexOf("e-") !== -1) {
            return padSmallNumber(strValue);
          }
          if (strValue.indexOf("e") !== -1) {
            return padLargeNumber(strValue);
          }
          return strValue;
        };
        XNumber.prototype.evaluate = function(c) {
          return this;
        };
        XNumber.prototype.string = function() {
          return new XString(this.toString());
        };
        XNumber.prototype.number = function() {
          return this;
        };
        XNumber.prototype.bool = function() {
          return new XBoolean(this.num);
        };
        XNumber.prototype.nodeset = function() {
          throw new Error("Cannot convert number to nodeset");
        };
        XNumber.prototype.stringValue = function() {
          return this.string().stringValue();
        };
        XNumber.prototype.numberValue = function() {
          return this.num;
        };
        XNumber.prototype.booleanValue = function() {
          return this.bool().booleanValue();
        };
        XNumber.prototype.negate = function() {
          return new XNumber(-this.num);
        };
        XNumber.prototype.equals = function(r) {
          if (Utilities.instance_of(r, XBoolean)) {
            return this.bool().equals(r);
          }
          if (Utilities.instance_of(r, XString)) {
            return this.equals(r.number());
          }
          if (Utilities.instance_of(r, XNodeSet)) {
            return r.compareWithNumber(this, Operators.equals);
          }
          return new XBoolean(this.num == r.num);
        };
        XNumber.prototype.notequal = function(r) {
          if (Utilities.instance_of(r, XBoolean)) {
            return this.bool().notequal(r);
          }
          if (Utilities.instance_of(r, XString)) {
            return this.notequal(r.number());
          }
          if (Utilities.instance_of(r, XNodeSet)) {
            return r.compareWithNumber(this, Operators.notequal);
          }
          return new XBoolean(this.num != r.num);
        };
        XNumber.prototype.lessthan = function(r) {
          if (Utilities.instance_of(r, XNodeSet)) {
            return r.compareWithNumber(this, Operators.greaterthan);
          }
          if (Utilities.instance_of(r, XBoolean) || Utilities.instance_of(r, XString)) {
            return this.lessthan(r.number());
          }
          return new XBoolean(this.num < r.num);
        };
        XNumber.prototype.greaterthan = function(r) {
          if (Utilities.instance_of(r, XNodeSet)) {
            return r.compareWithNumber(this, Operators.lessthan);
          }
          if (Utilities.instance_of(r, XBoolean) || Utilities.instance_of(r, XString)) {
            return this.greaterthan(r.number());
          }
          return new XBoolean(this.num > r.num);
        };
        XNumber.prototype.lessthanorequal = function(r) {
          if (Utilities.instance_of(r, XNodeSet)) {
            return r.compareWithNumber(this, Operators.greaterthanorequal);
          }
          if (Utilities.instance_of(r, XBoolean) || Utilities.instance_of(r, XString)) {
            return this.lessthanorequal(r.number());
          }
          return new XBoolean(this.num <= r.num);
        };
        XNumber.prototype.greaterthanorequal = function(r) {
          if (Utilities.instance_of(r, XNodeSet)) {
            return r.compareWithNumber(this, Operators.lessthanorequal);
          }
          if (Utilities.instance_of(r, XBoolean) || Utilities.instance_of(r, XString)) {
            return this.greaterthanorequal(r.number());
          }
          return new XBoolean(this.num >= r.num);
        };
        XNumber.prototype.plus = function(r) {
          return new XNumber(this.num + r.num);
        };
        XNumber.prototype.minus = function(r) {
          return new XNumber(this.num - r.num);
        };
        XNumber.prototype.multiply = function(r) {
          return new XNumber(this.num * r.num);
        };
        XNumber.prototype.div = function(r) {
          return new XNumber(this.num / r.num);
        };
        XNumber.prototype.mod = function(r) {
          return new XNumber(this.num % r.num);
        };
        XBoolean.prototype = new Expression();
        XBoolean.prototype.constructor = XBoolean;
        XBoolean.superclass = Expression.prototype;
        function XBoolean(b) {
          if (arguments.length > 0) {
            this.init(b);
          }
        }
        XBoolean.prototype.init = function(b) {
          this.b = Boolean(b);
        };
        XBoolean.prototype.toString = function() {
          return this.b.toString();
        };
        XBoolean.prototype.evaluate = function(c) {
          return this;
        };
        XBoolean.prototype.string = function() {
          return new XString(this.b);
        };
        XBoolean.prototype.number = function() {
          return new XNumber(this.b);
        };
        XBoolean.prototype.bool = function() {
          return this;
        };
        XBoolean.prototype.nodeset = function() {
          throw new Error("Cannot convert boolean to nodeset");
        };
        XBoolean.prototype.stringValue = function() {
          return this.string().stringValue();
        };
        XBoolean.prototype.numberValue = function() {
          return this.number().numberValue();
        };
        XBoolean.prototype.booleanValue = function() {
          return this.b;
        };
        XBoolean.prototype.not = function() {
          return new XBoolean(!this.b);
        };
        XBoolean.prototype.equals = function(r) {
          if (Utilities.instance_of(r, XString) || Utilities.instance_of(r, XNumber)) {
            return this.equals(r.bool());
          }
          if (Utilities.instance_of(r, XNodeSet)) {
            return r.compareWithBoolean(this, Operators.equals);
          }
          return new XBoolean(this.b == r.b);
        };
        XBoolean.prototype.notequal = function(r) {
          if (Utilities.instance_of(r, XString) || Utilities.instance_of(r, XNumber)) {
            return this.notequal(r.bool());
          }
          if (Utilities.instance_of(r, XNodeSet)) {
            return r.compareWithBoolean(this, Operators.notequal);
          }
          return new XBoolean(this.b != r.b);
        };
        XBoolean.prototype.lessthan = function(r) {
          return this.number().lessthan(r);
        };
        XBoolean.prototype.greaterthan = function(r) {
          return this.number().greaterthan(r);
        };
        XBoolean.prototype.lessthanorequal = function(r) {
          return this.number().lessthanorequal(r);
        };
        XBoolean.prototype.greaterthanorequal = function(r) {
          return this.number().greaterthanorequal(r);
        };
        XBoolean.true_ = new XBoolean(true);
        XBoolean.false_ = new XBoolean(false);
        AVLTree.prototype = new Object();
        AVLTree.prototype.constructor = AVLTree;
        AVLTree.superclass = Object.prototype;
        function AVLTree(n) {
          this.init(n);
        }
        AVLTree.prototype.init = function(n) {
          this.left = null;
          this.right = null;
          this.node = n;
          this.depth = 1;
        };
        AVLTree.prototype.balance = function() {
          var ldepth = this.left == null ? 0 : this.left.depth;
          var rdepth = this.right == null ? 0 : this.right.depth;
          if (ldepth > rdepth + 1) {
            var lldepth = this.left.left == null ? 0 : this.left.left.depth;
            var lrdepth = this.left.right == null ? 0 : this.left.right.depth;
            if (lldepth < lrdepth) {
              this.left.rotateRR();
            }
            this.rotateLL();
          } else if (ldepth + 1 < rdepth) {
            var rrdepth = this.right.right == null ? 0 : this.right.right.depth;
            var rldepth = this.right.left == null ? 0 : this.right.left.depth;
            if (rldepth > rrdepth) {
              this.right.rotateLL();
            }
            this.rotateRR();
          }
        };
        AVLTree.prototype.rotateLL = function() {
          var nodeBefore = this.node;
          var rightBefore = this.right;
          this.node = this.left.node;
          this.right = this.left;
          this.left = this.left.left;
          this.right.left = this.right.right;
          this.right.right = rightBefore;
          this.right.node = nodeBefore;
          this.right.updateInNewLocation();
          this.updateInNewLocation();
        };
        AVLTree.prototype.rotateRR = function() {
          var nodeBefore = this.node;
          var leftBefore = this.left;
          this.node = this.right.node;
          this.left = this.right;
          this.right = this.right.right;
          this.left.right = this.left.left;
          this.left.left = leftBefore;
          this.left.node = nodeBefore;
          this.left.updateInNewLocation();
          this.updateInNewLocation();
        };
        AVLTree.prototype.updateInNewLocation = function() {
          this.getDepthFromChildren();
        };
        AVLTree.prototype.getDepthFromChildren = function() {
          this.depth = this.node == null ? 0 : 1;
          if (this.left != null) {
            this.depth = this.left.depth + 1;
          }
          if (this.right != null && this.depth <= this.right.depth) {
            this.depth = this.right.depth + 1;
          }
        };
        function nodeOrder(n1, n2) {
          if (n1 === n2) {
            return 0;
          }
          if (n1.compareDocumentPosition) {
            var cpos = n1.compareDocumentPosition(n2);
            if (cpos & 1) {
              return 1;
            }
            if (cpos & 10) {
              return 1;
            }
            if (cpos & 20) {
              return -1;
            }
            return 0;
          }
          var d1 = 0, d2 = 0;
          for (var m1 = n1; m1 != null; m1 = m1.parentNode || m1.ownerElement) {
            d1++;
          }
          for (var m2 = n2; m2 != null; m2 = m2.parentNode || m2.ownerElement) {
            d2++;
          }
          if (d1 > d2) {
            while (d1 > d2) {
              n1 = n1.parentNode || n1.ownerElement;
              d1--;
            }
            if (n1 === n2) {
              return 1;
            }
          } else if (d2 > d1) {
            while (d2 > d1) {
              n2 = n2.parentNode || n2.ownerElement;
              d2--;
            }
            if (n1 === n2) {
              return -1;
            }
          }
          var n1Par = n1.parentNode || n1.ownerElement, n2Par = n2.parentNode || n2.ownerElement;
          while (n1Par !== n2Par) {
            n1 = n1Par;
            n2 = n2Par;
            n1Par = n1.parentNode || n1.ownerElement;
            n2Par = n2.parentNode || n2.ownerElement;
          }
          var n1isAttr = Utilities.isAttribute(n1);
          var n2isAttr = Utilities.isAttribute(n2);
          if (n1isAttr && !n2isAttr) {
            return -1;
          }
          if (!n1isAttr && n2isAttr) {
            return 1;
          }
          if (n1Par) {
            var cn = n1isAttr ? n1Par.attributes : n1Par.childNodes, len = cn.length;
            for (var i = 0; i < len; i += 1) {
              var n = cn[i];
              if (n === n1) {
                return -1;
              }
              if (n === n2) {
                return 1;
              }
            }
          }
          throw new Error("Unexpected: could not determine node order");
        }
        AVLTree.prototype.add = function(n) {
          if (n === this.node) {
            return false;
          }
          var o = nodeOrder(n, this.node);
          var ret = false;
          if (o == -1) {
            if (this.left == null) {
              this.left = new AVLTree(n);
              ret = true;
            } else {
              ret = this.left.add(n);
              if (ret) {
                this.balance();
              }
            }
          } else if (o == 1) {
            if (this.right == null) {
              this.right = new AVLTree(n);
              ret = true;
            } else {
              ret = this.right.add(n);
              if (ret) {
                this.balance();
              }
            }
          }
          if (ret) {
            this.getDepthFromChildren();
          }
          return ret;
        };
        XNodeSet.prototype = new Expression();
        XNodeSet.prototype.constructor = XNodeSet;
        XNodeSet.superclass = Expression.prototype;
        function XNodeSet() {
          this.init();
        }
        XNodeSet.prototype.init = function() {
          this.tree = null;
          this.nodes = [];
          this.size = 0;
        };
        XNodeSet.prototype.toString = function() {
          var p = this.first();
          if (p == null) {
            return "";
          }
          return this.stringForNode(p);
        };
        XNodeSet.prototype.evaluate = function(c) {
          return this;
        };
        XNodeSet.prototype.string = function() {
          return new XString(this.toString());
        };
        XNodeSet.prototype.stringValue = function() {
          return this.toString();
        };
        XNodeSet.prototype.number = function() {
          return new XNumber(this.string());
        };
        XNodeSet.prototype.numberValue = function() {
          return Number(this.string());
        };
        XNodeSet.prototype.bool = function() {
          return new XBoolean(this.booleanValue());
        };
        XNodeSet.prototype.booleanValue = function() {
          return !!this.size;
        };
        XNodeSet.prototype.nodeset = function() {
          return this;
        };
        XNodeSet.prototype.stringForNode = function(n) {
          if (n.nodeType == 9 || n.nodeType == 1 || n.nodeType === 11) {
            return this.stringForContainerNode(n);
          }
          if (n.nodeType === 2) {
            return n.value || n.nodeValue;
          }
          if (n.isNamespaceNode) {
            return n.namespace;
          }
          return n.nodeValue;
        };
        XNodeSet.prototype.stringForContainerNode = function(n) {
          var s = "";
          for (var n2 = n.firstChild; n2 != null; n2 = n2.nextSibling) {
            var nt = n2.nodeType;
            if (nt === 1 || nt === 3 || nt === 4 || nt === 9 || nt === 11) {
              s += this.stringForNode(n2);
            }
          }
          return s;
        };
        XNodeSet.prototype.buildTree = function() {
          if (!this.tree && this.nodes.length) {
            this.tree = new AVLTree(this.nodes[0]);
            for (var i = 1; i < this.nodes.length; i += 1) {
              this.tree.add(this.nodes[i]);
            }
          }
          return this.tree;
        };
        XNodeSet.prototype.first = function() {
          var p = this.buildTree();
          if (p == null) {
            return null;
          }
          while (p.left != null) {
            p = p.left;
          }
          return p.node;
        };
        XNodeSet.prototype.add = function(n) {
          for (var i = 0; i < this.nodes.length; i += 1) {
            if (n === this.nodes[i]) {
              return;
            }
          }
          this.tree = null;
          this.nodes.push(n);
          this.size += 1;
        };
        XNodeSet.prototype.addArray = function(ns) {
          var self = this;
          forEach(function(x) {
            self.add(x);
          }, ns);
        };
        XNodeSet.prototype.toArray = function() {
          var a = [];
          this.toArrayRec(this.buildTree(), a);
          return a;
        };
        XNodeSet.prototype.toArrayRec = function(t, a) {
          if (t != null) {
            this.toArrayRec(t.left, a);
            a.push(t.node);
            this.toArrayRec(t.right, a);
          }
        };
        XNodeSet.prototype.toUnsortedArray = function() {
          return this.nodes.slice();
        };
        XNodeSet.prototype.compareWithString = function(r, o) {
          var a = this.toUnsortedArray();
          for (var i = 0; i < a.length; i++) {
            var n = a[i];
            var l = new XString(this.stringForNode(n));
            var res = o(l, r);
            if (res.booleanValue()) {
              return res;
            }
          }
          return new XBoolean(false);
        };
        XNodeSet.prototype.compareWithNumber = function(r, o) {
          var a = this.toUnsortedArray();
          for (var i = 0; i < a.length; i++) {
            var n = a[i];
            var l = new XNumber(this.stringForNode(n));
            var res = o(l, r);
            if (res.booleanValue()) {
              return res;
            }
          }
          return new XBoolean(false);
        };
        XNodeSet.prototype.compareWithBoolean = function(r, o) {
          return o(this.bool(), r);
        };
        XNodeSet.prototype.compareWithNodeSet = function(r, o) {
          var arr = this.toUnsortedArray();
          var oInvert = function(lop, rop) {
            return o(rop, lop);
          };
          for (var i = 0; i < arr.length; i++) {
            var l = new XString(this.stringForNode(arr[i]));
            var res = r.compareWithString(l, oInvert);
            if (res.booleanValue()) {
              return res;
            }
          }
          return new XBoolean(false);
        };
        XNodeSet.compareWith = curry(function(o, r) {
          if (Utilities.instance_of(r, XString)) {
            return this.compareWithString(r, o);
          }
          if (Utilities.instance_of(r, XNumber)) {
            return this.compareWithNumber(r, o);
          }
          if (Utilities.instance_of(r, XBoolean)) {
            return this.compareWithBoolean(r, o);
          }
          return this.compareWithNodeSet(r, o);
        });
        XNodeSet.prototype.equals = XNodeSet.compareWith(Operators.equals);
        XNodeSet.prototype.notequal = XNodeSet.compareWith(Operators.notequal);
        XNodeSet.prototype.lessthan = XNodeSet.compareWith(Operators.lessthan);
        XNodeSet.prototype.greaterthan = XNodeSet.compareWith(Operators.greaterthan);
        XNodeSet.prototype.lessthanorequal = XNodeSet.compareWith(Operators.lessthanorequal);
        XNodeSet.prototype.greaterthanorequal = XNodeSet.compareWith(Operators.greaterthanorequal);
        XNodeSet.prototype.union = function(r) {
          var ns = new XNodeSet();
          ns.addArray(this.toUnsortedArray());
          ns.addArray(r.toUnsortedArray());
          return ns;
        };
        XPathNamespace.prototype = new Object();
        XPathNamespace.prototype.constructor = XPathNamespace;
        XPathNamespace.superclass = Object.prototype;
        function XPathNamespace(pre, ns, p) {
          this.isXPathNamespace = true;
          this.ownerDocument = p.ownerDocument;
          this.nodeName = "#namespace";
          this.prefix = pre;
          this.localName = pre;
          this.namespaceURI = ns;
          this.nodeValue = ns;
          this.ownerElement = p;
          this.nodeType = XPathNamespace.XPATH_NAMESPACE_NODE;
        }
        XPathNamespace.prototype.toString = function() {
          return '{ "' + this.prefix + '", "' + this.namespaceURI + '" }';
        };
        XPathContext.prototype = new Object();
        XPathContext.prototype.constructor = XPathContext;
        XPathContext.superclass = Object.prototype;
        function XPathContext(vr, nr, fr) {
          this.variableResolver = vr != null ? vr : new VariableResolver();
          this.namespaceResolver = nr != null ? nr : new NamespaceResolver();
          this.functionResolver = fr != null ? fr : new FunctionResolver();
        }
        XPathContext.prototype.extend = function(newProps) {
          return assign(new XPathContext(), this, newProps);
        };
        VariableResolver.prototype = new Object();
        VariableResolver.prototype.constructor = VariableResolver;
        VariableResolver.superclass = Object.prototype;
        function VariableResolver() {
        }
        VariableResolver.prototype.getVariable = function(ln, ns) {
          return null;
        };
        FunctionResolver.prototype = new Object();
        FunctionResolver.prototype.constructor = FunctionResolver;
        FunctionResolver.superclass = Object.prototype;
        function FunctionResolver(thisArg) {
          this.thisArg = thisArg != null ? thisArg : Functions;
          this.functions = new Object();
          this.addStandardFunctions();
        }
        FunctionResolver.prototype.addStandardFunctions = function() {
          this.functions["{}last"] = Functions.last;
          this.functions["{}position"] = Functions.position;
          this.functions["{}count"] = Functions.count;
          this.functions["{}id"] = Functions.id;
          this.functions["{}local-name"] = Functions.localName;
          this.functions["{}namespace-uri"] = Functions.namespaceURI;
          this.functions["{}name"] = Functions.name;
          this.functions["{}string"] = Functions.string;
          this.functions["{}concat"] = Functions.concat;
          this.functions["{}starts-with"] = Functions.startsWith;
          this.functions["{}contains"] = Functions.contains;
          this.functions["{}substring-before"] = Functions.substringBefore;
          this.functions["{}substring-after"] = Functions.substringAfter;
          this.functions["{}substring"] = Functions.substring;
          this.functions["{}string-length"] = Functions.stringLength;
          this.functions["{}normalize-space"] = Functions.normalizeSpace;
          this.functions["{}translate"] = Functions.translate;
          this.functions["{}boolean"] = Functions.boolean_;
          this.functions["{}not"] = Functions.not;
          this.functions["{}true"] = Functions.true_;
          this.functions["{}false"] = Functions.false_;
          this.functions["{}lang"] = Functions.lang;
          this.functions["{}number"] = Functions.number;
          this.functions["{}sum"] = Functions.sum;
          this.functions["{}floor"] = Functions.floor;
          this.functions["{}ceiling"] = Functions.ceiling;
          this.functions["{}round"] = Functions.round;
        };
        FunctionResolver.prototype.addFunction = function(ns, ln, f) {
          this.functions["{" + ns + "}" + ln] = f;
        };
        FunctionResolver.getFunctionFromContext = function(qName, context) {
          var parts = Utilities.resolveQName(qName, context.namespaceResolver, context.contextNode, false);
          if (parts[0] === null) {
            throw new Error("Cannot resolve QName " + name);
          }
          return context.functionResolver.getFunction(parts[1], parts[0]);
        };
        FunctionResolver.prototype.getFunction = function(localName, namespace) {
          return this.functions["{" + namespace + "}" + localName];
        };
        NamespaceResolver.prototype = new Object();
        NamespaceResolver.prototype.constructor = NamespaceResolver;
        NamespaceResolver.superclass = Object.prototype;
        function NamespaceResolver() {
        }
        NamespaceResolver.prototype.getNamespace = function(prefix, n) {
          if (prefix == "xml") {
            return XPath.XML_NAMESPACE_URI;
          } else if (prefix == "xmlns") {
            return XPath.XMLNS_NAMESPACE_URI;
          }
          if (n.nodeType == 9) {
            n = n.documentElement;
          } else if (n.nodeType == 2) {
            n = PathExpr.getOwnerElement(n);
          } else if (n.nodeType != 1) {
            n = n.parentNode;
          }
          while (n != null && n.nodeType == 1) {
            var nnm = n.attributes;
            for (var i = 0; i < nnm.length; i++) {
              var a = nnm.item(i);
              var aname = a.name || a.nodeName;
              if (aname === "xmlns" && prefix === "" || aname === "xmlns:" + prefix) {
                return String(a.value || a.nodeValue);
              }
            }
            n = n.parentNode;
          }
          return null;
        };
        var Functions = new Object();
        Functions.last = function(c) {
          if (arguments.length != 1) {
            throw new Error("Function last expects ()");
          }
          return new XNumber(c.contextSize);
        };
        Functions.position = function(c) {
          if (arguments.length != 1) {
            throw new Error("Function position expects ()");
          }
          return new XNumber(c.contextPosition);
        };
        Functions.count = function() {
          var c = arguments[0];
          var ns;
          if (arguments.length != 2 || !Utilities.instance_of(ns = arguments[1].evaluate(c), XNodeSet)) {
            throw new Error("Function count expects (node-set)");
          }
          return new XNumber(ns.size);
        };
        Functions.id = function() {
          var c = arguments[0];
          var id;
          if (arguments.length != 2) {
            throw new Error("Function id expects (object)");
          }
          id = arguments[1].evaluate(c);
          if (Utilities.instance_of(id, XNodeSet)) {
            id = id.toArray().join(" ");
          } else {
            id = id.stringValue();
          }
          var ids = id.split(/[\x0d\x0a\x09\x20]+/);
          var count = 0;
          var ns = new XNodeSet();
          var doc = c.contextNode.nodeType == 9 ? c.contextNode : c.contextNode.ownerDocument;
          for (var i = 0; i < ids.length; i++) {
            var n;
            if (doc.getElementById) {
              n = doc.getElementById(ids[i]);
            } else {
              n = Utilities.getElementById(doc, ids[i]);
            }
            if (n != null) {
              ns.add(n);
              count++;
            }
          }
          return ns;
        };
        Functions.localName = function(c, eNode) {
          var n;
          if (arguments.length == 1) {
            n = c.contextNode;
          } else if (arguments.length == 2) {
            n = eNode.evaluate(c).first();
          } else {
            throw new Error("Function local-name expects (node-set?)");
          }
          if (n == null) {
            return new XString("");
          }
          return new XString(
            n.localName || n.baseName || n.target || n.nodeName || ""
          );
        };
        Functions.namespaceURI = function() {
          var c = arguments[0];
          var n;
          if (arguments.length == 1) {
            n = c.contextNode;
          } else if (arguments.length == 2) {
            n = arguments[1].evaluate(c).first();
          } else {
            throw new Error("Function namespace-uri expects (node-set?)");
          }
          if (n == null) {
            return new XString("");
          }
          return new XString(n.namespaceURI);
        };
        Functions.name = function() {
          var c = arguments[0];
          var n;
          if (arguments.length == 1) {
            n = c.contextNode;
          } else if (arguments.length == 2) {
            n = arguments[1].evaluate(c).first();
          } else {
            throw new Error("Function name expects (node-set?)");
          }
          if (n == null) {
            return new XString("");
          }
          if (n.nodeType == 1) {
            return new XString(n.nodeName);
          } else if (n.nodeType == 2) {
            return new XString(n.name || n.nodeName);
          } else if (n.nodeType === 7) {
            return new XString(n.target || n.nodeName);
          } else if (n.localName == null) {
            return new XString("");
          } else {
            return new XString(n.localName);
          }
        };
        Functions.string = function() {
          var c = arguments[0];
          if (arguments.length == 1) {
            return new XString(XNodeSet.prototype.stringForNode(c.contextNode));
          } else if (arguments.length == 2) {
            return arguments[1].evaluate(c).string();
          }
          throw new Error("Function string expects (object?)");
        };
        Functions.concat = function(c) {
          if (arguments.length < 3) {
            throw new Error("Function concat expects (string, string[, string]*)");
          }
          var s = "";
          for (var i = 1; i < arguments.length; i++) {
            s += arguments[i].evaluate(c).stringValue();
          }
          return new XString(s);
        };
        Functions.startsWith = function() {
          var c = arguments[0];
          if (arguments.length != 3) {
            throw new Error("Function startsWith expects (string, string)");
          }
          var s1 = arguments[1].evaluate(c).stringValue();
          var s2 = arguments[2].evaluate(c).stringValue();
          return new XBoolean(s1.substring(0, s2.length) == s2);
        };
        Functions.contains = function() {
          var c = arguments[0];
          if (arguments.length != 3) {
            throw new Error("Function contains expects (string, string)");
          }
          var s1 = arguments[1].evaluate(c).stringValue();
          var s2 = arguments[2].evaluate(c).stringValue();
          return new XBoolean(s1.indexOf(s2) !== -1);
        };
        Functions.substringBefore = function() {
          var c = arguments[0];
          if (arguments.length != 3) {
            throw new Error("Function substring-before expects (string, string)");
          }
          var s1 = arguments[1].evaluate(c).stringValue();
          var s2 = arguments[2].evaluate(c).stringValue();
          return new XString(s1.substring(0, s1.indexOf(s2)));
        };
        Functions.substringAfter = function() {
          var c = arguments[0];
          if (arguments.length != 3) {
            throw new Error("Function substring-after expects (string, string)");
          }
          var s1 = arguments[1].evaluate(c).stringValue();
          var s2 = arguments[2].evaluate(c).stringValue();
          if (s2.length == 0) {
            return new XString(s1);
          }
          var i = s1.indexOf(s2);
          if (i == -1) {
            return new XString("");
          }
          return new XString(s1.substring(i + s2.length));
        };
        Functions.substring = function() {
          var c = arguments[0];
          if (!(arguments.length == 3 || arguments.length == 4)) {
            throw new Error("Function substring expects (string, number, number?)");
          }
          var s = arguments[1].evaluate(c).stringValue();
          var n1 = Math.round(arguments[2].evaluate(c).numberValue()) - 1;
          var n2 = arguments.length == 4 ? n1 + Math.round(arguments[3].evaluate(c).numberValue()) : void 0;
          return new XString(s.substring(n1, n2));
        };
        Functions.stringLength = function() {
          var c = arguments[0];
          var s;
          if (arguments.length == 1) {
            s = XNodeSet.prototype.stringForNode(c.contextNode);
          } else if (arguments.length == 2) {
            s = arguments[1].evaluate(c).stringValue();
          } else {
            throw new Error("Function string-length expects (string?)");
          }
          return new XNumber(s.length);
        };
        Functions.normalizeSpace = function() {
          var c = arguments[0];
          var s;
          if (arguments.length == 1) {
            s = XNodeSet.prototype.stringForNode(c.contextNode);
          } else if (arguments.length == 2) {
            s = arguments[1].evaluate(c).stringValue();
          } else {
            throw new Error("Function normalize-space expects (string?)");
          }
          var i = 0;
          var j = s.length - 1;
          while (Utilities.isSpace(s.charCodeAt(j))) {
            j--;
          }
          var t = "";
          while (i <= j && Utilities.isSpace(s.charCodeAt(i))) {
            i++;
          }
          while (i <= j) {
            if (Utilities.isSpace(s.charCodeAt(i))) {
              t += " ";
              while (i <= j && Utilities.isSpace(s.charCodeAt(i))) {
                i++;
              }
            } else {
              t += s.charAt(i);
              i++;
            }
          }
          return new XString(t);
        };
        Functions.translate = function(c, eValue, eFrom, eTo) {
          if (arguments.length != 4) {
            throw new Error("Function translate expects (string, string, string)");
          }
          var value = eValue.evaluate(c).stringValue();
          var from = eFrom.evaluate(c).stringValue();
          var to = eTo.evaluate(c).stringValue();
          var cMap = reduce(function(acc, ch, i) {
            if (!(ch in acc)) {
              acc[ch] = i > to.length ? "" : to[i];
            }
            return acc;
          }, {}, from);
          var t = join(
            "",
            map(function(ch) {
              return ch in cMap ? cMap[ch] : ch;
            }, value)
          );
          return new XString(t);
        };
        Functions.boolean_ = function() {
          var c = arguments[0];
          if (arguments.length != 2) {
            throw new Error("Function boolean expects (object)");
          }
          return arguments[1].evaluate(c).bool();
        };
        Functions.not = function(c, eValue) {
          if (arguments.length != 2) {
            throw new Error("Function not expects (object)");
          }
          return eValue.evaluate(c).bool().not();
        };
        Functions.true_ = function() {
          if (arguments.length != 1) {
            throw new Error("Function true expects ()");
          }
          return XBoolean.true_;
        };
        Functions.false_ = function() {
          if (arguments.length != 1) {
            throw new Error("Function false expects ()");
          }
          return XBoolean.false_;
        };
        Functions.lang = function() {
          var c = arguments[0];
          if (arguments.length != 2) {
            throw new Error("Function lang expects (string)");
          }
          var lang;
          for (var n = c.contextNode; n != null && n.nodeType != 9; n = n.parentNode) {
            var a = n.getAttributeNS(XPath.XML_NAMESPACE_URI, "lang");
            if (a != null) {
              lang = String(a);
              break;
            }
          }
          if (lang == null) {
            return XBoolean.false_;
          }
          var s = arguments[1].evaluate(c).stringValue();
          return new XBoolean(lang.substring(0, s.length) == s && (lang.length == s.length || lang.charAt(s.length) == "-"));
        };
        Functions.number = function() {
          var c = arguments[0];
          if (!(arguments.length == 1 || arguments.length == 2)) {
            throw new Error("Function number expects (object?)");
          }
          if (arguments.length == 1) {
            return new XNumber(XNodeSet.prototype.stringForNode(c.contextNode));
          }
          return arguments[1].evaluate(c).number();
        };
        Functions.sum = function() {
          var c = arguments[0];
          var ns;
          if (arguments.length != 2 || !Utilities.instance_of(ns = arguments[1].evaluate(c), XNodeSet)) {
            throw new Error("Function sum expects (node-set)");
          }
          ns = ns.toUnsortedArray();
          var n = 0;
          for (var i = 0; i < ns.length; i++) {
            n += new XNumber(XNodeSet.prototype.stringForNode(ns[i])).numberValue();
          }
          return new XNumber(n);
        };
        Functions.floor = function() {
          var c = arguments[0];
          if (arguments.length != 2) {
            throw new Error("Function floor expects (number)");
          }
          return new XNumber(Math.floor(arguments[1].evaluate(c).numberValue()));
        };
        Functions.ceiling = function() {
          var c = arguments[0];
          if (arguments.length != 2) {
            throw new Error("Function ceiling expects (number)");
          }
          return new XNumber(Math.ceil(arguments[1].evaluate(c).numberValue()));
        };
        Functions.round = function() {
          var c = arguments[0];
          if (arguments.length != 2) {
            throw new Error("Function round expects (number)");
          }
          return new XNumber(Math.round(arguments[1].evaluate(c).numberValue()));
        };
        var Utilities = new Object();
        Utilities.isAttribute = function(val) {
          return val && (val.nodeType === 2 || val.ownerElement);
        };
        Utilities.splitQName = function(qn) {
          var i = qn.indexOf(":");
          if (i == -1) {
            return [null, qn];
          }
          return [qn.substring(0, i), qn.substring(i + 1)];
        };
        Utilities.resolveQName = function(qn, nr, n, useDefault) {
          var parts = Utilities.splitQName(qn);
          if (parts[0] != null) {
            parts[0] = nr.getNamespace(parts[0], n);
          } else {
            if (useDefault) {
              parts[0] = nr.getNamespace("", n);
              if (parts[0] == null) {
                parts[0] = "";
              }
            } else {
              parts[0] = "";
            }
          }
          return parts;
        };
        Utilities.isSpace = function(c) {
          return c == 9 || c == 13 || c == 10 || c == 32;
        };
        Utilities.isLetter = function(c) {
          return c >= 65 && c <= 90 || c >= 97 && c <= 122 || c >= 192 && c <= 214 || c >= 216 && c <= 246 || c >= 248 && c <= 255 || c >= 256 && c <= 305 || c >= 308 && c <= 318 || c >= 321 && c <= 328 || c >= 330 && c <= 382 || c >= 384 && c <= 451 || c >= 461 && c <= 496 || c >= 500 && c <= 501 || c >= 506 && c <= 535 || c >= 592 && c <= 680 || c >= 699 && c <= 705 || c == 902 || c >= 904 && c <= 906 || c == 908 || c >= 910 && c <= 929 || c >= 931 && c <= 974 || c >= 976 && c <= 982 || c == 986 || c == 988 || c == 990 || c == 992 || c >= 994 && c <= 1011 || c >= 1025 && c <= 1036 || c >= 1038 && c <= 1103 || c >= 1105 && c <= 1116 || c >= 1118 && c <= 1153 || c >= 1168 && c <= 1220 || c >= 1223 && c <= 1224 || c >= 1227 && c <= 1228 || c >= 1232 && c <= 1259 || c >= 1262 && c <= 1269 || c >= 1272 && c <= 1273 || c >= 1329 && c <= 1366 || c == 1369 || c >= 1377 && c <= 1414 || c >= 1488 && c <= 1514 || c >= 1520 && c <= 1522 || c >= 1569 && c <= 1594 || c >= 1601 && c <= 1610 || c >= 1649 && c <= 1719 || c >= 1722 && c <= 1726 || c >= 1728 && c <= 1742 || c >= 1744 && c <= 1747 || c == 1749 || c >= 1765 && c <= 1766 || c >= 2309 && c <= 2361 || c == 2365 || c >= 2392 && c <= 2401 || c >= 2437 && c <= 2444 || c >= 2447 && c <= 2448 || c >= 2451 && c <= 2472 || c >= 2474 && c <= 2480 || c == 2482 || c >= 2486 && c <= 2489 || c >= 2524 && c <= 2525 || c >= 2527 && c <= 2529 || c >= 2544 && c <= 2545 || c >= 2565 && c <= 2570 || c >= 2575 && c <= 2576 || c >= 2579 && c <= 2600 || c >= 2602 && c <= 2608 || c >= 2610 && c <= 2611 || c >= 2613 && c <= 2614 || c >= 2616 && c <= 2617 || c >= 2649 && c <= 2652 || c == 2654 || c >= 2674 && c <= 2676 || c >= 2693 && c <= 2699 || c == 2701 || c >= 2703 && c <= 2705 || c >= 2707 && c <= 2728 || c >= 2730 && c <= 2736 || c >= 2738 && c <= 2739 || c >= 2741 && c <= 2745 || c == 2749 || c == 2784 || c >= 2821 && c <= 2828 || c >= 2831 && c <= 2832 || c >= 2835 && c <= 2856 || c >= 2858 && c <= 2864 || c >= 2866 && c <= 2867 || c >= 2870 && c <= 2873 || c == 2877 || c >= 2908 && c <= 2909 || c >= 2911 && c <= 2913 || c >= 2949 && c <= 2954 || c >= 2958 && c <= 2960 || c >= 2962 && c <= 2965 || c >= 2969 && c <= 2970 || c == 2972 || c >= 2974 && c <= 2975 || c >= 2979 && c <= 2980 || c >= 2984 && c <= 2986 || c >= 2990 && c <= 2997 || c >= 2999 && c <= 3001 || c >= 3077 && c <= 3084 || c >= 3086 && c <= 3088 || c >= 3090 && c <= 3112 || c >= 3114 && c <= 3123 || c >= 3125 && c <= 3129 || c >= 3168 && c <= 3169 || c >= 3205 && c <= 3212 || c >= 3214 && c <= 3216 || c >= 3218 && c <= 3240 || c >= 3242 && c <= 3251 || c >= 3253 && c <= 3257 || c == 3294 || c >= 3296 && c <= 3297 || c >= 3333 && c <= 3340 || c >= 3342 && c <= 3344 || c >= 3346 && c <= 3368 || c >= 3370 && c <= 3385 || c >= 3424 && c <= 3425 || c >= 3585 && c <= 3630 || c == 3632 || c >= 3634 && c <= 3635 || c >= 3648 && c <= 3653 || c >= 3713 && c <= 3714 || c == 3716 || c >= 3719 && c <= 3720 || c == 3722 || c == 3725 || c >= 3732 && c <= 3735 || c >= 3737 && c <= 3743 || c >= 3745 && c <= 3747 || c == 3749 || c == 3751 || c >= 3754 && c <= 3755 || c >= 3757 && c <= 3758 || c == 3760 || c >= 3762 && c <= 3763 || c == 3773 || c >= 3776 && c <= 3780 || c >= 3904 && c <= 3911 || c >= 3913 && c <= 3945 || c >= 4256 && c <= 4293 || c >= 4304 && c <= 4342 || c == 4352 || c >= 4354 && c <= 4355 || c >= 4357 && c <= 4359 || c == 4361 || c >= 4363 && c <= 4364 || c >= 4366 && c <= 4370 || c == 4412 || c == 4414 || c == 4416 || c == 4428 || c == 4430 || c == 4432 || c >= 4436 && c <= 4437 || c == 4441 || c >= 4447 && c <= 4449 || c == 4451 || c == 4453 || c == 4455 || c == 4457 || c >= 4461 && c <= 4462 || c >= 4466 && c <= 4467 || c == 4469 || c == 4510 || c == 4520 || c == 4523 || c >= 4526 && c <= 4527 || c >= 4535 && c <= 4536 || c == 4538 || c >= 4540 && c <= 4546 || c == 4587 || c == 4592 || c == 4601 || c >= 7680 && c <= 7835 || c >= 7840 && c <= 7929 || c >= 7936 && c <= 7957 || c >= 7960 && c <= 7965 || c >= 7968 && c <= 8005 || c >= 8008 && c <= 8013 || c >= 8016 && c <= 8023 || c == 8025 || c == 8027 || c == 8029 || c >= 8031 && c <= 8061 || c >= 8064 && c <= 8116 || c >= 8118 && c <= 8124 || c == 8126 || c >= 8130 && c <= 8132 || c >= 8134 && c <= 8140 || c >= 8144 && c <= 8147 || c >= 8150 && c <= 8155 || c >= 8160 && c <= 8172 || c >= 8178 && c <= 8180 || c >= 8182 && c <= 8188 || c == 8486 || c >= 8490 && c <= 8491 || c == 8494 || c >= 8576 && c <= 8578 || c >= 12353 && c <= 12436 || c >= 12449 && c <= 12538 || c >= 12549 && c <= 12588 || c >= 44032 && c <= 55203 || c >= 19968 && c <= 40869 || c == 12295 || c >= 12321 && c <= 12329;
        };
        Utilities.isNCNameChar = function(c) {
          return c >= 48 && c <= 57 || c >= 1632 && c <= 1641 || c >= 1776 && c <= 1785 || c >= 2406 && c <= 2415 || c >= 2534 && c <= 2543 || c >= 2662 && c <= 2671 || c >= 2790 && c <= 2799 || c >= 2918 && c <= 2927 || c >= 3047 && c <= 3055 || c >= 3174 && c <= 3183 || c >= 3302 && c <= 3311 || c >= 3430 && c <= 3439 || c >= 3664 && c <= 3673 || c >= 3792 && c <= 3801 || c >= 3872 && c <= 3881 || c == 46 || c == 45 || c == 95 || Utilities.isLetter(c) || c >= 768 && c <= 837 || c >= 864 && c <= 865 || c >= 1155 && c <= 1158 || c >= 1425 && c <= 1441 || c >= 1443 && c <= 1465 || c >= 1467 && c <= 1469 || c == 1471 || c >= 1473 && c <= 1474 || c == 1476 || c >= 1611 && c <= 1618 || c == 1648 || c >= 1750 && c <= 1756 || c >= 1757 && c <= 1759 || c >= 1760 && c <= 1764 || c >= 1767 && c <= 1768 || c >= 1770 && c <= 1773 || c >= 2305 && c <= 2307 || c == 2364 || c >= 2366 && c <= 2380 || c == 2381 || c >= 2385 && c <= 2388 || c >= 2402 && c <= 2403 || c >= 2433 && c <= 2435 || c == 2492 || c == 2494 || c == 2495 || c >= 2496 && c <= 2500 || c >= 2503 && c <= 2504 || c >= 2507 && c <= 2509 || c == 2519 || c >= 2530 && c <= 2531 || c == 2562 || c == 2620 || c == 2622 || c == 2623 || c >= 2624 && c <= 2626 || c >= 2631 && c <= 2632 || c >= 2635 && c <= 2637 || c >= 2672 && c <= 2673 || c >= 2689 && c <= 2691 || c == 2748 || c >= 2750 && c <= 2757 || c >= 2759 && c <= 2761 || c >= 2763 && c <= 2765 || c >= 2817 && c <= 2819 || c == 2876 || c >= 2878 && c <= 2883 || c >= 2887 && c <= 2888 || c >= 2891 && c <= 2893 || c >= 2902 && c <= 2903 || c >= 2946 && c <= 2947 || c >= 3006 && c <= 3010 || c >= 3014 && c <= 3016 || c >= 3018 && c <= 3021 || c == 3031 || c >= 3073 && c <= 3075 || c >= 3134 && c <= 3140 || c >= 3142 && c <= 3144 || c >= 3146 && c <= 3149 || c >= 3157 && c <= 3158 || c >= 3202 && c <= 3203 || c >= 3262 && c <= 3268 || c >= 3270 && c <= 3272 || c >= 3274 && c <= 3277 || c >= 3285 && c <= 3286 || c >= 3330 && c <= 3331 || c >= 3390 && c <= 3395 || c >= 3398 && c <= 3400 || c >= 3402 && c <= 3405 || c == 3415 || c == 3633 || c >= 3636 && c <= 3642 || c >= 3655 && c <= 3662 || c == 3761 || c >= 3764 && c <= 3769 || c >= 3771 && c <= 3772 || c >= 3784 && c <= 3789 || c >= 3864 && c <= 3865 || c == 3893 || c == 3895 || c == 3897 || c == 3902 || c == 3903 || c >= 3953 && c <= 3972 || c >= 3974 && c <= 3979 || c >= 3984 && c <= 3989 || c == 3991 || c >= 3993 && c <= 4013 || c >= 4017 && c <= 4023 || c == 4025 || c >= 8400 && c <= 8412 || c == 8417 || c >= 12330 && c <= 12335 || c == 12441 || c == 12442 || c == 183 || c == 720 || c == 721 || c == 903 || c == 1600 || c == 3654 || c == 3782 || c == 12293 || c >= 12337 && c <= 12341 || c >= 12445 && c <= 12446 || c >= 12540 && c <= 12542;
        };
        Utilities.coalesceText = function(n) {
          for (var m = n.firstChild; m != null; m = m.nextSibling) {
            if (m.nodeType == 3 || m.nodeType == 4) {
              var s = m.nodeValue;
              var first = m;
              m = m.nextSibling;
              while (m != null && (m.nodeType == 3 || m.nodeType == 4)) {
                s += m.nodeValue;
                var del = m;
                m = m.nextSibling;
                del.parentNode.removeChild(del);
              }
              if (first.nodeType == 4) {
                var p = first.parentNode;
                if (first.nextSibling == null) {
                  p.removeChild(first);
                  p.appendChild(p.ownerDocument.createTextNode(s));
                } else {
                  var next = first.nextSibling;
                  p.removeChild(first);
                  p.insertBefore(p.ownerDocument.createTextNode(s), next);
                }
              } else {
                first.nodeValue = s;
              }
              if (m == null) {
                break;
              }
            } else if (m.nodeType == 1) {
              Utilities.coalesceText(m);
            }
          }
        };
        Utilities.instance_of = function(o, c) {
          while (o != null) {
            if (o.constructor === c) {
              return true;
            }
            if (o === Object) {
              return false;
            }
            o = o.constructor.superclass;
          }
          return false;
        };
        Utilities.getElementById = function(n, id) {
          if (n.nodeType == 1) {
            if (n.getAttribute("id") == id || n.getAttributeNS(null, "id") == id) {
              return n;
            }
          }
          for (var m = n.firstChild; m != null; m = m.nextSibling) {
            var res = Utilities.getElementById(m, id);
            if (res != null) {
              return res;
            }
          }
          return null;
        };
        var XPathException = function() {
          function getMessage(code, exception) {
            var msg = exception ? ": " + exception.toString() : "";
            switch (code) {
              case XPathException2.INVALID_EXPRESSION_ERR:
                return "Invalid expression" + msg;
              case XPathException2.TYPE_ERR:
                return "Type error" + msg;
            }
            return null;
          }
          function XPathException2(code, error, message) {
            var err = Error.call(this, getMessage(code, error) || message);
            err.code = code;
            err.exception = error;
            return err;
          }
          XPathException2.prototype = Object.create(Error.prototype);
          XPathException2.prototype.constructor = XPathException2;
          XPathException2.superclass = Error;
          XPathException2.prototype.toString = function() {
            return this.message;
          };
          XPathException2.fromMessage = function(message, error) {
            return new XPathException2(null, error, message);
          };
          XPathException2.INVALID_EXPRESSION_ERR = 51;
          XPathException2.TYPE_ERR = 52;
          return XPathException2;
        }();
        XPathExpression.prototype = {};
        XPathExpression.prototype.constructor = XPathExpression;
        XPathExpression.superclass = Object.prototype;
        function XPathExpression(e, r, p) {
          this.xpath = p.parse(e);
          this.context = new XPathContext();
          this.context.namespaceResolver = new XPathNSResolverWrapper(r);
        }
        XPathExpression.getOwnerDocument = function(n) {
          return n.nodeType === 9 ? n : n.ownerDocument;
        };
        XPathExpression.detectHtmlDom = function(n) {
          if (!n) {
            return false;
          }
          var doc = XPathExpression.getOwnerDocument(n);
          try {
            return doc.implementation.hasFeature("HTML", "2.0");
          } catch (e) {
            return true;
          }
        };
        XPathExpression.prototype.evaluate = function(n, t, res) {
          this.context.expressionContextNode = n;
          this.context.caseInsensitive = XPathExpression.detectHtmlDom(n);
          var result = this.xpath.evaluate(this.context);
          return new XPathResult(result, t);
        };
        XPathNSResolverWrapper.prototype = {};
        XPathNSResolverWrapper.prototype.constructor = XPathNSResolverWrapper;
        XPathNSResolverWrapper.superclass = Object.prototype;
        function XPathNSResolverWrapper(r) {
          this.xpathNSResolver = r;
        }
        XPathNSResolverWrapper.prototype.getNamespace = function(prefix, n) {
          if (this.xpathNSResolver == null) {
            return null;
          }
          return this.xpathNSResolver.lookupNamespaceURI(prefix);
        };
        NodeXPathNSResolver.prototype = {};
        NodeXPathNSResolver.prototype.constructor = NodeXPathNSResolver;
        NodeXPathNSResolver.superclass = Object.prototype;
        function NodeXPathNSResolver(n) {
          this.node = n;
          this.namespaceResolver = new NamespaceResolver();
        }
        NodeXPathNSResolver.prototype.lookupNamespaceURI = function(prefix) {
          return this.namespaceResolver.getNamespace(prefix, this.node);
        };
        XPathResult.prototype = {};
        XPathResult.prototype.constructor = XPathResult;
        XPathResult.superclass = Object.prototype;
        function XPathResult(v, t) {
          if (t == XPathResult.ANY_TYPE) {
            if (v.constructor === XString) {
              t = XPathResult.STRING_TYPE;
            } else if (v.constructor === XNumber) {
              t = XPathResult.NUMBER_TYPE;
            } else if (v.constructor === XBoolean) {
              t = XPathResult.BOOLEAN_TYPE;
            } else if (v.constructor === XNodeSet) {
              t = XPathResult.UNORDERED_NODE_ITERATOR_TYPE;
            }
          }
          this.resultType = t;
          switch (t) {
            case XPathResult.NUMBER_TYPE:
              this.numberValue = v.numberValue();
              return;
            case XPathResult.STRING_TYPE:
              this.stringValue = v.stringValue();
              return;
            case XPathResult.BOOLEAN_TYPE:
              this.booleanValue = v.booleanValue();
              return;
            case XPathResult.ANY_UNORDERED_NODE_TYPE:
            case XPathResult.FIRST_ORDERED_NODE_TYPE:
              if (v.constructor === XNodeSet) {
                this.singleNodeValue = v.first();
                return;
              }
              break;
            case XPathResult.UNORDERED_NODE_ITERATOR_TYPE:
            case XPathResult.ORDERED_NODE_ITERATOR_TYPE:
              if (v.constructor === XNodeSet) {
                this.invalidIteratorState = false;
                this.nodes = v.toArray();
                this.iteratorIndex = 0;
                return;
              }
              break;
            case XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE:
            case XPathResult.ORDERED_NODE_SNAPSHOT_TYPE:
              if (v.constructor === XNodeSet) {
                this.nodes = v.toArray();
                this.snapshotLength = this.nodes.length;
                return;
              }
              break;
          }
          throw new XPathException(XPathException.TYPE_ERR);
        }
        ;
        XPathResult.prototype.iterateNext = function() {
          if (this.resultType != XPathResult.UNORDERED_NODE_ITERATOR_TYPE && this.resultType != XPathResult.ORDERED_NODE_ITERATOR_TYPE) {
            throw new XPathException(XPathException.TYPE_ERR);
          }
          return this.nodes[this.iteratorIndex++];
        };
        XPathResult.prototype.snapshotItem = function(i) {
          if (this.resultType != XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE && this.resultType != XPathResult.ORDERED_NODE_SNAPSHOT_TYPE) {
            throw new XPathException(XPathException.TYPE_ERR);
          }
          return this.nodes[i];
        };
        XPathResult.ANY_TYPE = 0;
        XPathResult.NUMBER_TYPE = 1;
        XPathResult.STRING_TYPE = 2;
        XPathResult.BOOLEAN_TYPE = 3;
        XPathResult.UNORDERED_NODE_ITERATOR_TYPE = 4;
        XPathResult.ORDERED_NODE_ITERATOR_TYPE = 5;
        XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE = 6;
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE = 7;
        XPathResult.ANY_UNORDERED_NODE_TYPE = 8;
        XPathResult.FIRST_ORDERED_NODE_TYPE = 9;
        function installDOM3XPathSupport(doc, p) {
          doc.createExpression = function(e, r) {
            try {
              return new XPathExpression(e, r, p);
            } catch (e2) {
              throw new XPathException(XPathException.INVALID_EXPRESSION_ERR, e2);
            }
          };
          doc.createNSResolver = function(n) {
            return new NodeXPathNSResolver(n);
          };
          doc.evaluate = function(e, cn, r, t, res) {
            if (t < 0 || t > 9) {
              throw { code: 0, toString: function() {
                return "Request type not supported";
              } };
            }
            return doc.createExpression(e, r, p).evaluate(cn, t, res);
          };
        }
        ;
        try {
          var shouldInstall = true;
          try {
            if (document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("XPath", null)) {
              shouldInstall = false;
            }
          } catch (e) {
          }
          if (shouldInstall) {
            installDOM3XPathSupport(document, new XPathParser());
          }
        } catch (e) {
        }
        installDOM3XPathSupport(exports2, new XPathParser());
        (function() {
          var parser = new XPathParser();
          var defaultNSResolver = new NamespaceResolver();
          var defaultFunctionResolver = new FunctionResolver();
          var defaultVariableResolver = new VariableResolver();
          function makeNSResolverFromFunction(func) {
            return {
              getNamespace: function(prefix, node) {
                var ns = func(prefix, node);
                return ns || defaultNSResolver.getNamespace(prefix, node);
              }
            };
          }
          function makeNSResolverFromObject(obj) {
            return makeNSResolverFromFunction(obj.getNamespace.bind(obj));
          }
          function makeNSResolverFromMap(map2) {
            return makeNSResolverFromFunction(function(prefix) {
              return map2[prefix];
            });
          }
          function makeNSResolver(resolver) {
            if (resolver && typeof resolver.getNamespace === "function") {
              return makeNSResolverFromObject(resolver);
            }
            if (typeof resolver === "function") {
              return makeNSResolverFromFunction(resolver);
            }
            if (typeof resolver === "object") {
              return makeNSResolverFromMap(resolver);
            }
            return defaultNSResolver;
          }
          function convertValue(value) {
            if (value === null || typeof value === "undefined" || value instanceof XString || value instanceof XBoolean || value instanceof XNumber || value instanceof XNodeSet) {
              return value;
            }
            switch (typeof value) {
              case "string":
                return new XString(value);
              case "boolean":
                return new XBoolean(value);
              case "number":
                return new XNumber(value);
            }
            var ns = new XNodeSet();
            ns.addArray([].concat(value));
            return ns;
          }
          function makeEvaluator(func) {
            return function(context) {
              var args = Array.prototype.slice.call(arguments, 1).map(function(arg) {
                return arg.evaluate(context);
              });
              var result = func.apply(this, [].concat(context, args));
              return convertValue(result);
            };
          }
          function makeFunctionResolverFromFunction(func) {
            return {
              getFunction: function(name2, namespace) {
                var found = func(name2, namespace);
                if (found) {
                  return makeEvaluator(found);
                }
                return defaultFunctionResolver.getFunction(name2, namespace);
              }
            };
          }
          function makeFunctionResolverFromObject(obj) {
            return makeFunctionResolverFromFunction(obj.getFunction.bind(obj));
          }
          function makeFunctionResolverFromMap(map2) {
            return makeFunctionResolverFromFunction(function(name2) {
              return map2[name2];
            });
          }
          function makeFunctionResolver(resolver) {
            if (resolver && typeof resolver.getFunction === "function") {
              return makeFunctionResolverFromObject(resolver);
            }
            if (typeof resolver === "function") {
              return makeFunctionResolverFromFunction(resolver);
            }
            if (typeof resolver === "object") {
              return makeFunctionResolverFromMap(resolver);
            }
            return defaultFunctionResolver;
          }
          function makeVariableResolverFromFunction(func) {
            return {
              getVariable: function(name2, namespace) {
                var value = func(name2, namespace);
                return convertValue(value);
              }
            };
          }
          function makeVariableResolver(resolver) {
            if (resolver) {
              if (typeof resolver.getVariable === "function") {
                return makeVariableResolverFromFunction(resolver.getVariable.bind(resolver));
              }
              if (typeof resolver === "function") {
                return makeVariableResolverFromFunction(resolver);
              }
              if (typeof resolver === "object") {
                return makeVariableResolverFromFunction(function(name2) {
                  return resolver[name2];
                });
              }
            }
            return defaultVariableResolver;
          }
          function copyIfPresent(prop, dest, source) {
            if (prop in source) {
              dest[prop] = source[prop];
            }
          }
          function makeContext(options) {
            var context = new XPathContext();
            if (options) {
              context.namespaceResolver = makeNSResolver(options.namespaces);
              context.functionResolver = makeFunctionResolver(options.functions);
              context.variableResolver = makeVariableResolver(options.variables);
              context.expressionContextNode = options.node;
              copyIfPresent("allowAnyNamespaceForNoPrefix", context, options);
              copyIfPresent("isHtml", context, options);
            } else {
              context.namespaceResolver = defaultNSResolver;
            }
            return context;
          }
          function evaluate(parsedExpression, options) {
            var context = makeContext(options);
            return parsedExpression.evaluate(context);
          }
          var evaluatorPrototype = {
            evaluate: function(options) {
              return evaluate(this.expression, options);
            },
            evaluateNumber: function(options) {
              return this.evaluate(options).numberValue();
            },
            evaluateString: function(options) {
              return this.evaluate(options).stringValue();
            },
            evaluateBoolean: function(options) {
              return this.evaluate(options).booleanValue();
            },
            evaluateNodeSet: function(options) {
              return this.evaluate(options).nodeset();
            },
            select: function(options) {
              return this.evaluateNodeSet(options).toArray();
            },
            select1: function(options) {
              return this.select(options)[0];
            }
          };
          function parse(xpath2) {
            var parsed = parser.parse(xpath2);
            return Object.create(evaluatorPrototype, {
              expression: {
                value: parsed
              }
            });
          }
          exports2.parse = parse;
        })();
        assign(
          exports2,
          {
            XPath,
            XPathParser,
            XPathResult,
            Step,
            PathExpr,
            NodeTest,
            LocationPath,
            OrOperation,
            AndOperation,
            BarOperation,
            EqualsOperation,
            NotEqualOperation,
            LessThanOperation,
            GreaterThanOperation,
            LessThanOrEqualOperation,
            GreaterThanOrEqualOperation,
            PlusOperation,
            MinusOperation,
            MultiplyOperation,
            DivOperation,
            ModOperation,
            UnaryMinusOperation,
            FunctionCall,
            VariableReference,
            XPathContext,
            XNodeSet,
            XBoolean,
            XString,
            XNumber,
            NamespaceResolver,
            FunctionResolver,
            VariableResolver,
            Utilities
          }
        );
        exports2.select = function(e, doc, single) {
          return exports2.selectWithResolver(e, doc, null, single);
        };
        exports2.useNamespaces = function(mappings) {
          var resolver = {
            mappings: mappings || {},
            lookupNamespaceURI: function(prefix) {
              return this.mappings[prefix];
            }
          };
          return function(e, doc, single) {
            return exports2.selectWithResolver(e, doc, resolver, single);
          };
        };
        exports2.selectWithResolver = function(e, doc, resolver, single) {
          var expression = new XPathExpression(e, resolver, new XPathParser());
          var type = XPathResult.ANY_TYPE;
          var result = expression.evaluate(doc, type, null);
          if (result.resultType == XPathResult.STRING_TYPE) {
            result = result.stringValue;
          } else if (result.resultType == XPathResult.NUMBER_TYPE) {
            result = result.numberValue;
          } else if (result.resultType == XPathResult.BOOLEAN_TYPE) {
            result = result.booleanValue;
          } else {
            result = result.nodes;
            if (single) {
              result = result[0];
            }
          }
          return result;
        };
        exports2.select1 = function(e, doc) {
          return exports2.select(e, doc, true);
        };
      })(xpath);
    }
  });

  // node_modules/@xmldom/xmldom/lib/conventions.js
  var require_conventions = __commonJS({
    "node_modules/@xmldom/xmldom/lib/conventions.js"(exports) {
      "use strict";
      function find(list, predicate, ac) {
        if (ac === void 0) {
          ac = Array.prototype;
        }
        if (list && typeof ac.find === "function") {
          return ac.find.call(list, predicate);
        }
        for (var i = 0; i < list.length; i++) {
          if (Object.prototype.hasOwnProperty.call(list, i)) {
            var item = list[i];
            if (predicate.call(void 0, item, i, list)) {
              return item;
            }
          }
        }
      }
      function freeze(object, oc) {
        if (oc === void 0) {
          oc = Object;
        }
        return oc && typeof oc.freeze === "function" ? oc.freeze(object) : object;
      }
      function assign(target, source) {
        if (target === null || typeof target !== "object") {
          throw new TypeError("target is not an object");
        }
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
        return target;
      }
      var MIME_TYPE = freeze({
        HTML: "text/html",
        isHTML: function(value) {
          return value === MIME_TYPE.HTML;
        },
        XML_APPLICATION: "application/xml",
        XML_TEXT: "text/xml",
        XML_XHTML_APPLICATION: "application/xhtml+xml",
        XML_SVG_IMAGE: "image/svg+xml"
      });
      var NAMESPACE = freeze({
        HTML: "http://www.w3.org/1999/xhtml",
        isHTML: function(uri) {
          return uri === NAMESPACE.HTML;
        },
        SVG: "http://www.w3.org/2000/svg",
        XML: "http://www.w3.org/XML/1998/namespace",
        XMLNS: "http://www.w3.org/2000/xmlns/"
      });
      exports.assign = assign;
      exports.find = find;
      exports.freeze = freeze;
      exports.MIME_TYPE = MIME_TYPE;
      exports.NAMESPACE = NAMESPACE;
    }
  });

  // node_modules/@xmldom/xmldom/lib/dom.js
  var require_dom = __commonJS({
    "node_modules/@xmldom/xmldom/lib/dom.js"(exports) {
      var conventions = require_conventions();
      var find = conventions.find;
      var NAMESPACE = conventions.NAMESPACE;
      function notEmptyString(input) {
        return input !== "";
      }
      function splitOnASCIIWhitespace(input) {
        return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : [];
      }
      function orderedSetReducer(current, element) {
        if (!current.hasOwnProperty(element)) {
          current[element] = true;
        }
        return current;
      }
      function toOrderedSet(input) {
        if (!input)
          return [];
        var list = splitOnASCIIWhitespace(input);
        return Object.keys(list.reduce(orderedSetReducer, {}));
      }
      function arrayIncludes(list) {
        return function(element) {
          return list && list.indexOf(element) !== -1;
        };
      }
      function copy(src, dest) {
        for (var p in src) {
          if (Object.prototype.hasOwnProperty.call(src, p)) {
            dest[p] = src[p];
          }
        }
      }
      function _extends(Class, Super) {
        var pt = Class.prototype;
        if (!(pt instanceof Super)) {
          let t2 = function() {
          };
          var t = t2;
          ;
          t2.prototype = Super.prototype;
          t2 = new t2();
          copy(pt, t2);
          Class.prototype = pt = t2;
        }
        if (pt.constructor != Class) {
          if (typeof Class != "function") {
            console.error("unknown Class:" + Class);
          }
          pt.constructor = Class;
        }
      }
      var NodeType = {};
      var ELEMENT_NODE = NodeType.ELEMENT_NODE = 1;
      var ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2;
      var TEXT_NODE = NodeType.TEXT_NODE = 3;
      var CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4;
      var ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5;
      var ENTITY_NODE = NodeType.ENTITY_NODE = 6;
      var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
      var COMMENT_NODE = NodeType.COMMENT_NODE = 8;
      var DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9;
      var DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10;
      var DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11;
      var NOTATION_NODE = NodeType.NOTATION_NODE = 12;
      var ExceptionCode = {};
      var ExceptionMessage = {};
      var INDEX_SIZE_ERR = ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error", 1);
      var DOMSTRING_SIZE_ERR = ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error", 2);
      var HIERARCHY_REQUEST_ERR = ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error", 3);
      var WRONG_DOCUMENT_ERR = ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document", 4);
      var INVALID_CHARACTER_ERR = ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character", 5);
      var NO_DATA_ALLOWED_ERR = ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed", 6);
      var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed", 7);
      var NOT_FOUND_ERR = ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found", 8);
      var NOT_SUPPORTED_ERR = ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported", 9);
      var INUSE_ATTRIBUTE_ERR = ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use", 10);
      var INVALID_STATE_ERR = ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state", 11);
      var SYNTAX_ERR = ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error", 12);
      var INVALID_MODIFICATION_ERR = ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification", 13);
      var NAMESPACE_ERR = ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace", 14);
      var INVALID_ACCESS_ERR = ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access", 15);
      function DOMException(code, message) {
        if (message instanceof Error) {
          var error = message;
        } else {
          error = this;
          Error.call(this, ExceptionMessage[code]);
          this.message = ExceptionMessage[code];
          if (Error.captureStackTrace)
            Error.captureStackTrace(this, DOMException);
        }
        error.code = code;
        if (message)
          this.message = this.message + ": " + message;
        return error;
      }
      DOMException.prototype = Error.prototype;
      copy(ExceptionCode, DOMException);
      function NodeList() {
      }
      NodeList.prototype = {
        length: 0,
        item: function(index) {
          return index >= 0 && index < this.length ? this[index] : null;
        },
        toString: function(isHTML, nodeFilter) {
          for (var buf = [], i = 0; i < this.length; i++) {
            serializeToString(this[i], buf, isHTML, nodeFilter);
          }
          return buf.join("");
        },
        filter: function(predicate) {
          return Array.prototype.filter.call(this, predicate);
        },
        indexOf: function(item) {
          return Array.prototype.indexOf.call(this, item);
        }
      };
      function LiveNodeList(node, refresh) {
        this._node = node;
        this._refresh = refresh;
        _updateLiveList(this);
      }
      function _updateLiveList(list) {
        var inc = list._node._inc || list._node.ownerDocument._inc;
        if (list._inc !== inc) {
          var ls = list._refresh(list._node);
          __set__(list, "length", ls.length);
          if (!list.$$length || ls.length < list.$$length) {
            for (var i = ls.length; i in list; i++) {
              if (Object.prototype.hasOwnProperty.call(list, i)) {
                delete list[i];
              }
            }
          }
          copy(ls, list);
          list._inc = inc;
        }
      }
      LiveNodeList.prototype.item = function(i) {
        _updateLiveList(this);
        return this[i] || null;
      };
      _extends(LiveNodeList, NodeList);
      function NamedNodeMap() {
      }
      function _findNodeIndex(list, node) {
        var i = list.length;
        while (i--) {
          if (list[i] === node) {
            return i;
          }
        }
      }
      function _addNamedNode(el, list, newAttr, oldAttr) {
        if (oldAttr) {
          list[_findNodeIndex(list, oldAttr)] = newAttr;
        } else {
          list[list.length++] = newAttr;
        }
        if (el) {
          newAttr.ownerElement = el;
          var doc = el.ownerDocument;
          if (doc) {
            oldAttr && _onRemoveAttribute(doc, el, oldAttr);
            _onAddAttribute(doc, el, newAttr);
          }
        }
      }
      function _removeNamedNode(el, list, attr) {
        var i = _findNodeIndex(list, attr);
        if (i >= 0) {
          var lastIndex = list.length - 1;
          while (i < lastIndex) {
            list[i] = list[++i];
          }
          list.length = lastIndex;
          if (el) {
            var doc = el.ownerDocument;
            if (doc) {
              _onRemoveAttribute(doc, el, attr);
              attr.ownerElement = null;
            }
          }
        } else {
          throw new DOMException(NOT_FOUND_ERR, new Error(el.tagName + "@" + attr));
        }
      }
      NamedNodeMap.prototype = {
        length: 0,
        item: NodeList.prototype.item,
        getNamedItem: function(key) {
          var i = this.length;
          while (i--) {
            var attr = this[i];
            if (attr.nodeName == key) {
              return attr;
            }
          }
        },
        setNamedItem: function(attr) {
          var el = attr.ownerElement;
          if (el && el != this._ownerElement) {
            throw new DOMException(INUSE_ATTRIBUTE_ERR);
          }
          var oldAttr = this.getNamedItem(attr.nodeName);
          _addNamedNode(this._ownerElement, this, attr, oldAttr);
          return oldAttr;
        },
        setNamedItemNS: function(attr) {
          var el = attr.ownerElement, oldAttr;
          if (el && el != this._ownerElement) {
            throw new DOMException(INUSE_ATTRIBUTE_ERR);
          }
          oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
          _addNamedNode(this._ownerElement, this, attr, oldAttr);
          return oldAttr;
        },
        removeNamedItem: function(key) {
          var attr = this.getNamedItem(key);
          _removeNamedNode(this._ownerElement, this, attr);
          return attr;
        },
        removeNamedItemNS: function(namespaceURI, localName) {
          var attr = this.getNamedItemNS(namespaceURI, localName);
          _removeNamedNode(this._ownerElement, this, attr);
          return attr;
        },
        getNamedItemNS: function(namespaceURI, localName) {
          var i = this.length;
          while (i--) {
            var node = this[i];
            if (node.localName == localName && node.namespaceURI == namespaceURI) {
              return node;
            }
          }
          return null;
        }
      };
      function DOMImplementation() {
      }
      DOMImplementation.prototype = {
        hasFeature: function(feature, version) {
          return true;
        },
        createDocument: function(namespaceURI, qualifiedName, doctype) {
          var doc = new Document();
          doc.implementation = this;
          doc.childNodes = new NodeList();
          doc.doctype = doctype || null;
          if (doctype) {
            doc.appendChild(doctype);
          }
          if (qualifiedName) {
            var root = doc.createElementNS(namespaceURI, qualifiedName);
            doc.appendChild(root);
          }
          return doc;
        },
        createDocumentType: function(qualifiedName, publicId, systemId) {
          var node = new DocumentType();
          node.name = qualifiedName;
          node.nodeName = qualifiedName;
          node.publicId = publicId || "";
          node.systemId = systemId || "";
          return node;
        }
      };
      function Node() {
      }
      Node.prototype = {
        firstChild: null,
        lastChild: null,
        previousSibling: null,
        nextSibling: null,
        attributes: null,
        parentNode: null,
        childNodes: null,
        ownerDocument: null,
        nodeValue: null,
        namespaceURI: null,
        prefix: null,
        localName: null,
        insertBefore: function(newChild, refChild) {
          return _insertBefore(this, newChild, refChild);
        },
        replaceChild: function(newChild, oldChild) {
          _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
          if (oldChild) {
            this.removeChild(oldChild);
          }
        },
        removeChild: function(oldChild) {
          return _removeChild(this, oldChild);
        },
        appendChild: function(newChild) {
          return this.insertBefore(newChild, null);
        },
        hasChildNodes: function() {
          return this.firstChild != null;
        },
        cloneNode: function(deep) {
          return cloneNode(this.ownerDocument || this, this, deep);
        },
        normalize: function() {
          var child = this.firstChild;
          while (child) {
            var next = child.nextSibling;
            if (next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE) {
              this.removeChild(next);
              child.appendData(next.data);
            } else {
              child.normalize();
              child = next;
            }
          }
        },
        isSupported: function(feature, version) {
          return this.ownerDocument.implementation.hasFeature(feature, version);
        },
        hasAttributes: function() {
          return this.attributes.length > 0;
        },
        lookupPrefix: function(namespaceURI) {
          var el = this;
          while (el) {
            var map = el._nsMap;
            if (map) {
              for (var n in map) {
                if (Object.prototype.hasOwnProperty.call(map, n) && map[n] === namespaceURI) {
                  return n;
                }
              }
            }
            el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
          }
          return null;
        },
        lookupNamespaceURI: function(prefix) {
          var el = this;
          while (el) {
            var map = el._nsMap;
            if (map) {
              if (Object.prototype.hasOwnProperty.call(map, prefix)) {
                return map[prefix];
              }
            }
            el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
          }
          return null;
        },
        isDefaultNamespace: function(namespaceURI) {
          var prefix = this.lookupPrefix(namespaceURI);
          return prefix == null;
        }
      };
      function _xmlEncoder(c) {
        return c == "<" && "&lt;" || c == ">" && "&gt;" || c == "&" && "&amp;" || c == '"' && "&quot;" || "&#" + c.charCodeAt() + ";";
      }
      copy(NodeType, Node);
      copy(NodeType, Node.prototype);
      function _visitNode(node, callback) {
        if (callback(node)) {
          return true;
        }
        if (node = node.firstChild) {
          do {
            if (_visitNode(node, callback)) {
              return true;
            }
          } while (node = node.nextSibling);
        }
      }
      function Document() {
        this.ownerDocument = this;
      }
      function _onAddAttribute(doc, el, newAttr) {
        doc && doc._inc++;
        var ns = newAttr.namespaceURI;
        if (ns === NAMESPACE.XMLNS) {
          el._nsMap[newAttr.prefix ? newAttr.localName : ""] = newAttr.value;
        }
      }
      function _onRemoveAttribute(doc, el, newAttr, remove) {
        doc && doc._inc++;
        var ns = newAttr.namespaceURI;
        if (ns === NAMESPACE.XMLNS) {
          delete el._nsMap[newAttr.prefix ? newAttr.localName : ""];
        }
      }
      function _onUpdateChild(doc, el, newChild) {
        if (doc && doc._inc) {
          doc._inc++;
          var cs = el.childNodes;
          if (newChild) {
            cs[cs.length++] = newChild;
          } else {
            var child = el.firstChild;
            var i = 0;
            while (child) {
              cs[i++] = child;
              child = child.nextSibling;
            }
            cs.length = i;
            delete cs[cs.length];
          }
        }
      }
      function _removeChild(parentNode, child) {
        var previous = child.previousSibling;
        var next = child.nextSibling;
        if (previous) {
          previous.nextSibling = next;
        } else {
          parentNode.firstChild = next;
        }
        if (next) {
          next.previousSibling = previous;
        } else {
          parentNode.lastChild = previous;
        }
        child.parentNode = null;
        child.previousSibling = null;
        child.nextSibling = null;
        _onUpdateChild(parentNode.ownerDocument, parentNode);
        return child;
      }
      function hasValidParentNodeType(node) {
        return node && (node.nodeType === Node.DOCUMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.ELEMENT_NODE);
      }
      function hasInsertableNodeType(node) {
        return node && (isElementNode(node) || isTextNode(node) || isDocTypeNode(node) || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.COMMENT_NODE || node.nodeType === Node.PROCESSING_INSTRUCTION_NODE);
      }
      function isDocTypeNode(node) {
        return node && node.nodeType === Node.DOCUMENT_TYPE_NODE;
      }
      function isElementNode(node) {
        return node && node.nodeType === Node.ELEMENT_NODE;
      }
      function isTextNode(node) {
        return node && node.nodeType === Node.TEXT_NODE;
      }
      function isElementInsertionPossible(doc, child) {
        var parentChildNodes = doc.childNodes || [];
        if (find(parentChildNodes, isElementNode) || isDocTypeNode(child)) {
          return false;
        }
        var docTypeNode = find(parentChildNodes, isDocTypeNode);
        return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
      }
      function isElementReplacementPossible(doc, child) {
        var parentChildNodes = doc.childNodes || [];
        function hasElementChildThatIsNotChild(node) {
          return isElementNode(node) && node !== child;
        }
        if (find(parentChildNodes, hasElementChildThatIsNotChild)) {
          return false;
        }
        var docTypeNode = find(parentChildNodes, isDocTypeNode);
        return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
      }
      function assertPreInsertionValidity1to5(parent, node, child) {
        if (!hasValidParentNodeType(parent)) {
          throw new DOMException(HIERARCHY_REQUEST_ERR, "Unexpected parent node type " + parent.nodeType);
        }
        if (child && child.parentNode !== parent) {
          throw new DOMException(NOT_FOUND_ERR, "child not in parent");
        }
        if (!hasInsertableNodeType(node) || isDocTypeNode(node) && parent.nodeType !== Node.DOCUMENT_NODE) {
          throw new DOMException(
            HIERARCHY_REQUEST_ERR,
            "Unexpected node type " + node.nodeType + " for parent node type " + parent.nodeType
          );
        }
      }
      function assertPreInsertionValidityInDocument(parent, node, child) {
        var parentChildNodes = parent.childNodes || [];
        var nodeChildNodes = node.childNodes || [];
        if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
          var nodeChildElements = nodeChildNodes.filter(isElementNode);
          if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
          }
          if (nodeChildElements.length === 1 && !isElementInsertionPossible(parent, child)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
          }
        }
        if (isElementNode(node)) {
          if (!isElementInsertionPossible(parent, child)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
          }
        }
        if (isDocTypeNode(node)) {
          if (find(parentChildNodes, isDocTypeNode)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
          }
          var parentElementChild = find(parentChildNodes, isElementNode);
          if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
          }
          if (!child && parentElementChild) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can not be appended since element is present");
          }
        }
      }
      function assertPreReplacementValidityInDocument(parent, node, child) {
        var parentChildNodes = parent.childNodes || [];
        var nodeChildNodes = node.childNodes || [];
        if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
          var nodeChildElements = nodeChildNodes.filter(isElementNode);
          if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
          }
          if (nodeChildElements.length === 1 && !isElementReplacementPossible(parent, child)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
          }
        }
        if (isElementNode(node)) {
          if (!isElementReplacementPossible(parent, child)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
          }
        }
        if (isDocTypeNode(node)) {
          let hasDoctypeChildThatIsNotChild2 = function(node2) {
            return isDocTypeNode(node2) && node2 !== child;
          };
          var hasDoctypeChildThatIsNotChild = hasDoctypeChildThatIsNotChild2;
          if (find(parentChildNodes, hasDoctypeChildThatIsNotChild2)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
          }
          var parentElementChild = find(parentChildNodes, isElementNode);
          if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
            throw new DOMException(HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
          }
        }
      }
      function _insertBefore(parent, node, child, _inDocumentAssertion) {
        assertPreInsertionValidity1to5(parent, node, child);
        if (parent.nodeType === Node.DOCUMENT_NODE) {
          (_inDocumentAssertion || assertPreInsertionValidityInDocument)(parent, node, child);
        }
        var cp = node.parentNode;
        if (cp) {
          cp.removeChild(node);
        }
        if (node.nodeType === DOCUMENT_FRAGMENT_NODE) {
          var newFirst = node.firstChild;
          if (newFirst == null) {
            return node;
          }
          var newLast = node.lastChild;
        } else {
          newFirst = newLast = node;
        }
        var pre = child ? child.previousSibling : parent.lastChild;
        newFirst.previousSibling = pre;
        newLast.nextSibling = child;
        if (pre) {
          pre.nextSibling = newFirst;
        } else {
          parent.firstChild = newFirst;
        }
        if (child == null) {
          parent.lastChild = newLast;
        } else {
          child.previousSibling = newLast;
        }
        do {
          newFirst.parentNode = parent;
        } while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
        _onUpdateChild(parent.ownerDocument || parent, parent);
        if (node.nodeType == DOCUMENT_FRAGMENT_NODE) {
          node.firstChild = node.lastChild = null;
        }
        return node;
      }
      function _appendSingleChild(parentNode, newChild) {
        if (newChild.parentNode) {
          newChild.parentNode.removeChild(newChild);
        }
        newChild.parentNode = parentNode;
        newChild.previousSibling = parentNode.lastChild;
        newChild.nextSibling = null;
        if (newChild.previousSibling) {
          newChild.previousSibling.nextSibling = newChild;
        } else {
          parentNode.firstChild = newChild;
        }
        parentNode.lastChild = newChild;
        _onUpdateChild(parentNode.ownerDocument, parentNode, newChild);
        return newChild;
      }
      Document.prototype = {
        nodeName: "#document",
        nodeType: DOCUMENT_NODE,
        doctype: null,
        documentElement: null,
        _inc: 1,
        insertBefore: function(newChild, refChild) {
          if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
            var child = newChild.firstChild;
            while (child) {
              var next = child.nextSibling;
              this.insertBefore(child, refChild);
              child = next;
            }
            return newChild;
          }
          _insertBefore(this, newChild, refChild);
          newChild.ownerDocument = this;
          if (this.documentElement === null && newChild.nodeType === ELEMENT_NODE) {
            this.documentElement = newChild;
          }
          return newChild;
        },
        removeChild: function(oldChild) {
          if (this.documentElement == oldChild) {
            this.documentElement = null;
          }
          return _removeChild(this, oldChild);
        },
        replaceChild: function(newChild, oldChild) {
          _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
          newChild.ownerDocument = this;
          if (oldChild) {
            this.removeChild(oldChild);
          }
          if (isElementNode(newChild)) {
            this.documentElement = newChild;
          }
        },
        importNode: function(importedNode, deep) {
          return importNode(this, importedNode, deep);
        },
        getElementById: function(id) {
          var rtv = null;
          _visitNode(this.documentElement, function(node) {
            if (node.nodeType == ELEMENT_NODE) {
              if (node.getAttribute("id") == id) {
                rtv = node;
                return true;
              }
            }
          });
          return rtv;
        },
        getElementsByClassName: function(classNames) {
          var classNamesSet = toOrderedSet(classNames);
          return new LiveNodeList(this, function(base) {
            var ls = [];
            if (classNamesSet.length > 0) {
              _visitNode(base.documentElement, function(node) {
                if (node !== base && node.nodeType === ELEMENT_NODE) {
                  var nodeClassNames = node.getAttribute("class");
                  if (nodeClassNames) {
                    var matches = classNames === nodeClassNames;
                    if (!matches) {
                      var nodeClassNamesSet = toOrderedSet(nodeClassNames);
                      matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet));
                    }
                    if (matches) {
                      ls.push(node);
                    }
                  }
                }
              });
            }
            return ls;
          });
        },
        createElement: function(tagName) {
          var node = new Element();
          node.ownerDocument = this;
          node.nodeName = tagName;
          node.tagName = tagName;
          node.localName = tagName;
          node.childNodes = new NodeList();
          var attrs = node.attributes = new NamedNodeMap();
          attrs._ownerElement = node;
          return node;
        },
        createDocumentFragment: function() {
          var node = new DocumentFragment();
          node.ownerDocument = this;
          node.childNodes = new NodeList();
          return node;
        },
        createTextNode: function(data) {
          var node = new Text();
          node.ownerDocument = this;
          node.appendData(data);
          return node;
        },
        createComment: function(data) {
          var node = new Comment();
          node.ownerDocument = this;
          node.appendData(data);
          return node;
        },
        createCDATASection: function(data) {
          var node = new CDATASection();
          node.ownerDocument = this;
          node.appendData(data);
          return node;
        },
        createProcessingInstruction: function(target, data) {
          var node = new ProcessingInstruction();
          node.ownerDocument = this;
          node.tagName = node.nodeName = node.target = target;
          node.nodeValue = node.data = data;
          return node;
        },
        createAttribute: function(name2) {
          var node = new Attr();
          node.ownerDocument = this;
          node.name = name2;
          node.nodeName = name2;
          node.localName = name2;
          node.specified = true;
          return node;
        },
        createEntityReference: function(name2) {
          var node = new EntityReference();
          node.ownerDocument = this;
          node.nodeName = name2;
          return node;
        },
        createElementNS: function(namespaceURI, qualifiedName) {
          var node = new Element();
          var pl = qualifiedName.split(":");
          var attrs = node.attributes = new NamedNodeMap();
          node.childNodes = new NodeList();
          node.ownerDocument = this;
          node.nodeName = qualifiedName;
          node.tagName = qualifiedName;
          node.namespaceURI = namespaceURI;
          if (pl.length == 2) {
            node.prefix = pl[0];
            node.localName = pl[1];
          } else {
            node.localName = qualifiedName;
          }
          attrs._ownerElement = node;
          return node;
        },
        createAttributeNS: function(namespaceURI, qualifiedName) {
          var node = new Attr();
          var pl = qualifiedName.split(":");
          node.ownerDocument = this;
          node.nodeName = qualifiedName;
          node.name = qualifiedName;
          node.namespaceURI = namespaceURI;
          node.specified = true;
          if (pl.length == 2) {
            node.prefix = pl[0];
            node.localName = pl[1];
          } else {
            node.localName = qualifiedName;
          }
          return node;
        }
      };
      _extends(Document, Node);
      function Element() {
        this._nsMap = {};
      }
      Element.prototype = {
        nodeType: ELEMENT_NODE,
        hasAttribute: function(name2) {
          return this.getAttributeNode(name2) != null;
        },
        getAttribute: function(name2) {
          var attr = this.getAttributeNode(name2);
          return attr && attr.value || "";
        },
        getAttributeNode: function(name2) {
          return this.attributes.getNamedItem(name2);
        },
        setAttribute: function(name2, value) {
          var attr = this.ownerDocument.createAttribute(name2);
          attr.value = attr.nodeValue = "" + value;
          this.setAttributeNode(attr);
        },
        removeAttribute: function(name2) {
          var attr = this.getAttributeNode(name2);
          attr && this.removeAttributeNode(attr);
        },
        appendChild: function(newChild) {
          if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
            return this.insertBefore(newChild, null);
          } else {
            return _appendSingleChild(this, newChild);
          }
        },
        setAttributeNode: function(newAttr) {
          return this.attributes.setNamedItem(newAttr);
        },
        setAttributeNodeNS: function(newAttr) {
          return this.attributes.setNamedItemNS(newAttr);
        },
        removeAttributeNode: function(oldAttr) {
          return this.attributes.removeNamedItem(oldAttr.nodeName);
        },
        removeAttributeNS: function(namespaceURI, localName) {
          var old = this.getAttributeNodeNS(namespaceURI, localName);
          old && this.removeAttributeNode(old);
        },
        hasAttributeNS: function(namespaceURI, localName) {
          return this.getAttributeNodeNS(namespaceURI, localName) != null;
        },
        getAttributeNS: function(namespaceURI, localName) {
          var attr = this.getAttributeNodeNS(namespaceURI, localName);
          return attr && attr.value || "";
        },
        setAttributeNS: function(namespaceURI, qualifiedName, value) {
          var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
          attr.value = attr.nodeValue = "" + value;
          this.setAttributeNode(attr);
        },
        getAttributeNodeNS: function(namespaceURI, localName) {
          return this.attributes.getNamedItemNS(namespaceURI, localName);
        },
        getElementsByTagName: function(tagName) {
          return new LiveNodeList(this, function(base) {
            var ls = [];
            _visitNode(base, function(node) {
              if (node !== base && node.nodeType == ELEMENT_NODE && (tagName === "*" || node.tagName == tagName)) {
                ls.push(node);
              }
            });
            return ls;
          });
        },
        getElementsByTagNameNS: function(namespaceURI, localName) {
          return new LiveNodeList(this, function(base) {
            var ls = [];
            _visitNode(base, function(node) {
              if (node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === "*" || node.namespaceURI === namespaceURI) && (localName === "*" || node.localName == localName)) {
                ls.push(node);
              }
            });
            return ls;
          });
        }
      };
      Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
      Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;
      _extends(Element, Node);
      function Attr() {
      }
      Attr.prototype.nodeType = ATTRIBUTE_NODE;
      _extends(Attr, Node);
      function CharacterData() {
      }
      CharacterData.prototype = {
        data: "",
        substringData: function(offset, count) {
          return this.data.substring(offset, offset + count);
        },
        appendData: function(text) {
          text = this.data + text;
          this.nodeValue = this.data = text;
          this.length = text.length;
        },
        insertData: function(offset, text) {
          this.replaceData(offset, 0, text);
        },
        appendChild: function(newChild) {
          throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
        },
        deleteData: function(offset, count) {
          this.replaceData(offset, count, "");
        },
        replaceData: function(offset, count, text) {
          var start = this.data.substring(0, offset);
          var end = this.data.substring(offset + count);
          text = start + text + end;
          this.nodeValue = this.data = text;
          this.length = text.length;
        }
      };
      _extends(CharacterData, Node);
      function Text() {
      }
      Text.prototype = {
        nodeName: "#text",
        nodeType: TEXT_NODE,
        splitText: function(offset) {
          var text = this.data;
          var newText = text.substring(offset);
          text = text.substring(0, offset);
          this.data = this.nodeValue = text;
          this.length = text.length;
          var newNode = this.ownerDocument.createTextNode(newText);
          if (this.parentNode) {
            this.parentNode.insertBefore(newNode, this.nextSibling);
          }
          return newNode;
        }
      };
      _extends(Text, CharacterData);
      function Comment() {
      }
      Comment.prototype = {
        nodeName: "#comment",
        nodeType: COMMENT_NODE
      };
      _extends(Comment, CharacterData);
      function CDATASection() {
      }
      CDATASection.prototype = {
        nodeName: "#cdata-section",
        nodeType: CDATA_SECTION_NODE
      };
      _extends(CDATASection, CharacterData);
      function DocumentType() {
      }
      DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
      _extends(DocumentType, Node);
      function Notation() {
      }
      Notation.prototype.nodeType = NOTATION_NODE;
      _extends(Notation, Node);
      function Entity() {
      }
      Entity.prototype.nodeType = ENTITY_NODE;
      _extends(Entity, Node);
      function EntityReference() {
      }
      EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
      _extends(EntityReference, Node);
      function DocumentFragment() {
      }
      DocumentFragment.prototype.nodeName = "#document-fragment";
      DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
      _extends(DocumentFragment, Node);
      function ProcessingInstruction() {
      }
      ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
      _extends(ProcessingInstruction, Node);
      function XMLSerializer() {
      }
      XMLSerializer.prototype.serializeToString = function(node, isHtml, nodeFilter) {
        return nodeSerializeToString.call(node, isHtml, nodeFilter);
      };
      Node.prototype.toString = nodeSerializeToString;
      function nodeSerializeToString(isHtml, nodeFilter) {
        var buf = [];
        var refNode = this.nodeType == 9 && this.documentElement || this;
        var prefix = refNode.prefix;
        var uri = refNode.namespaceURI;
        if (uri && prefix == null) {
          var prefix = refNode.lookupPrefix(uri);
          if (prefix == null) {
            var visibleNamespaces = [
              { namespace: uri, prefix: null }
            ];
          }
        }
        serializeToString(this, buf, isHtml, nodeFilter, visibleNamespaces);
        return buf.join("");
      }
      function needNamespaceDefine(node, isHTML, visibleNamespaces) {
        var prefix = node.prefix || "";
        var uri = node.namespaceURI;
        if (!uri) {
          return false;
        }
        if (prefix === "xml" && uri === NAMESPACE.XML || uri === NAMESPACE.XMLNS) {
          return false;
        }
        var i = visibleNamespaces.length;
        while (i--) {
          var ns = visibleNamespaces[i];
          if (ns.prefix === prefix) {
            return ns.namespace !== uri;
          }
        }
        return true;
      }
      function addSerializedAttribute(buf, qualifiedName, value) {
        buf.push(" ", qualifiedName, '="', value.replace(/[<>&"\t\n\r]/g, _xmlEncoder), '"');
      }
      function serializeToString(node, buf, isHTML, nodeFilter, visibleNamespaces) {
        if (!visibleNamespaces) {
          visibleNamespaces = [];
        }
        if (nodeFilter) {
          node = nodeFilter(node);
          if (node) {
            if (typeof node == "string") {
              buf.push(node);
              return;
            }
          } else {
            return;
          }
        }
        switch (node.nodeType) {
          case ELEMENT_NODE:
            var attrs = node.attributes;
            var len = attrs.length;
            var child = node.firstChild;
            var nodeName = node.tagName;
            isHTML = NAMESPACE.isHTML(node.namespaceURI) || isHTML;
            var prefixedNodeName = nodeName;
            if (!isHTML && !node.prefix && node.namespaceURI) {
              var defaultNS;
              for (var ai = 0; ai < attrs.length; ai++) {
                if (attrs.item(ai).name === "xmlns") {
                  defaultNS = attrs.item(ai).value;
                  break;
                }
              }
              if (!defaultNS) {
                for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
                  var namespace = visibleNamespaces[nsi];
                  if (namespace.prefix === "" && namespace.namespace === node.namespaceURI) {
                    defaultNS = namespace.namespace;
                    break;
                  }
                }
              }
              if (defaultNS !== node.namespaceURI) {
                for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
                  var namespace = visibleNamespaces[nsi];
                  if (namespace.namespace === node.namespaceURI) {
                    if (namespace.prefix) {
                      prefixedNodeName = namespace.prefix + ":" + nodeName;
                    }
                    break;
                  }
                }
              }
            }
            buf.push("<", prefixedNodeName);
            for (var i = 0; i < len; i++) {
              var attr = attrs.item(i);
              if (attr.prefix == "xmlns") {
                visibleNamespaces.push({ prefix: attr.localName, namespace: attr.value });
              } else if (attr.nodeName == "xmlns") {
                visibleNamespaces.push({ prefix: "", namespace: attr.value });
              }
            }
            for (var i = 0; i < len; i++) {
              var attr = attrs.item(i);
              if (needNamespaceDefine(attr, isHTML, visibleNamespaces)) {
                var prefix = attr.prefix || "";
                var uri = attr.namespaceURI;
                addSerializedAttribute(buf, prefix ? "xmlns:" + prefix : "xmlns", uri);
                visibleNamespaces.push({ prefix, namespace: uri });
              }
              serializeToString(attr, buf, isHTML, nodeFilter, visibleNamespaces);
            }
            if (nodeName === prefixedNodeName && needNamespaceDefine(node, isHTML, visibleNamespaces)) {
              var prefix = node.prefix || "";
              var uri = node.namespaceURI;
              addSerializedAttribute(buf, prefix ? "xmlns:" + prefix : "xmlns", uri);
              visibleNamespaces.push({ prefix, namespace: uri });
            }
            if (child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)) {
              buf.push(">");
              if (isHTML && /^script$/i.test(nodeName)) {
                while (child) {
                  if (child.data) {
                    buf.push(child.data);
                  } else {
                    serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
                  }
                  child = child.nextSibling;
                }
              } else {
                while (child) {
                  serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
                  child = child.nextSibling;
                }
              }
              buf.push("</", prefixedNodeName, ">");
            } else {
              buf.push("/>");
            }
            return;
          case DOCUMENT_NODE:
          case DOCUMENT_FRAGMENT_NODE:
            var child = node.firstChild;
            while (child) {
              serializeToString(child, buf, isHTML, nodeFilter, visibleNamespaces.slice());
              child = child.nextSibling;
            }
            return;
          case ATTRIBUTE_NODE:
            return addSerializedAttribute(buf, node.name, node.value);
          case TEXT_NODE:
            return buf.push(
              node.data.replace(/[<&>]/g, _xmlEncoder)
            );
          case CDATA_SECTION_NODE:
            return buf.push("<![CDATA[", node.data, "]]>");
          case COMMENT_NODE:
            return buf.push("<!--", node.data, "-->");
          case DOCUMENT_TYPE_NODE:
            var pubid = node.publicId;
            var sysid = node.systemId;
            buf.push("<!DOCTYPE ", node.name);
            if (pubid) {
              buf.push(" PUBLIC ", pubid);
              if (sysid && sysid != ".") {
                buf.push(" ", sysid);
              }
              buf.push(">");
            } else if (sysid && sysid != ".") {
              buf.push(" SYSTEM ", sysid, ">");
            } else {
              var sub = node.internalSubset;
              if (sub) {
                buf.push(" [", sub, "]");
              }
              buf.push(">");
            }
            return;
          case PROCESSING_INSTRUCTION_NODE:
            return buf.push("<?", node.target, " ", node.data, "?>");
          case ENTITY_REFERENCE_NODE:
            return buf.push("&", node.nodeName, ";");
          default:
            buf.push("??", node.nodeName);
        }
      }
      function importNode(doc, node, deep) {
        var node2;
        switch (node.nodeType) {
          case ELEMENT_NODE:
            node2 = node.cloneNode(false);
            node2.ownerDocument = doc;
          case DOCUMENT_FRAGMENT_NODE:
            break;
          case ATTRIBUTE_NODE:
            deep = true;
            break;
        }
        if (!node2) {
          node2 = node.cloneNode(false);
        }
        node2.ownerDocument = doc;
        node2.parentNode = null;
        if (deep) {
          var child = node.firstChild;
          while (child) {
            node2.appendChild(importNode(doc, child, deep));
            child = child.nextSibling;
          }
        }
        return node2;
      }
      function cloneNode(doc, node, deep) {
        var node2 = new node.constructor();
        for (var n in node) {
          if (Object.prototype.hasOwnProperty.call(node, n)) {
            var v = node[n];
            if (typeof v != "object") {
              if (v != node2[n]) {
                node2[n] = v;
              }
            }
          }
        }
        if (node.childNodes) {
          node2.childNodes = new NodeList();
        }
        node2.ownerDocument = doc;
        switch (node2.nodeType) {
          case ELEMENT_NODE:
            var attrs = node.attributes;
            var attrs2 = node2.attributes = new NamedNodeMap();
            var len = attrs.length;
            attrs2._ownerElement = node2;
            for (var i = 0; i < len; i++) {
              node2.setAttributeNode(cloneNode(doc, attrs.item(i), true));
            }
            break;
            ;
          case ATTRIBUTE_NODE:
            deep = true;
        }
        if (deep) {
          var child = node.firstChild;
          while (child) {
            node2.appendChild(cloneNode(doc, child, deep));
            child = child.nextSibling;
          }
        }
        return node2;
      }
      function __set__(object, key, value) {
        object[key] = value;
      }
      try {
        if (Object.defineProperty) {
          let getTextContent2 = function(node) {
            switch (node.nodeType) {
              case ELEMENT_NODE:
              case DOCUMENT_FRAGMENT_NODE:
                var buf = [];
                node = node.firstChild;
                while (node) {
                  if (node.nodeType !== 7 && node.nodeType !== 8) {
                    buf.push(getTextContent2(node));
                  }
                  node = node.nextSibling;
                }
                return buf.join("");
              default:
                return node.nodeValue;
            }
          };
          getTextContent = getTextContent2;
          Object.defineProperty(LiveNodeList.prototype, "length", {
            get: function() {
              _updateLiveList(this);
              return this.$$length;
            }
          });
          Object.defineProperty(Node.prototype, "textContent", {
            get: function() {
              return getTextContent2(this);
            },
            set: function(data) {
              switch (this.nodeType) {
                case ELEMENT_NODE:
                case DOCUMENT_FRAGMENT_NODE:
                  while (this.firstChild) {
                    this.removeChild(this.firstChild);
                  }
                  if (data || String(data)) {
                    this.appendChild(this.ownerDocument.createTextNode(data));
                  }
                  break;
                default:
                  this.data = data;
                  this.value = data;
                  this.nodeValue = data;
              }
            }
          });
          __set__ = function(object, key, value) {
            object["$$" + key] = value;
          };
        }
      } catch (e) {
      }
      var getTextContent;
      exports.DocumentType = DocumentType;
      exports.DOMException = DOMException;
      exports.DOMImplementation = DOMImplementation;
      exports.Element = Element;
      exports.Node = Node;
      exports.NodeList = NodeList;
      exports.XMLSerializer = XMLSerializer;
    }
  });

  // node_modules/@xmldom/xmldom/lib/entities.js
  var require_entities = __commonJS({
    "node_modules/@xmldom/xmldom/lib/entities.js"(exports) {
      "use strict";
      var freeze = require_conventions().freeze;
      exports.XML_ENTITIES = freeze({
        amp: "&",
        apos: "'",
        gt: ">",
        lt: "<",
        quot: '"'
      });
      exports.HTML_ENTITIES = freeze({
        Aacute: "\xC1",
        aacute: "\xE1",
        Abreve: "\u0102",
        abreve: "\u0103",
        ac: "\u223E",
        acd: "\u223F",
        acE: "\u223E\u0333",
        Acirc: "\xC2",
        acirc: "\xE2",
        acute: "\xB4",
        Acy: "\u0410",
        acy: "\u0430",
        AElig: "\xC6",
        aelig: "\xE6",
        af: "\u2061",
        Afr: "\u{1D504}",
        afr: "\u{1D51E}",
        Agrave: "\xC0",
        agrave: "\xE0",
        alefsym: "\u2135",
        aleph: "\u2135",
        Alpha: "\u0391",
        alpha: "\u03B1",
        Amacr: "\u0100",
        amacr: "\u0101",
        amalg: "\u2A3F",
        AMP: "&",
        amp: "&",
        And: "\u2A53",
        and: "\u2227",
        andand: "\u2A55",
        andd: "\u2A5C",
        andslope: "\u2A58",
        andv: "\u2A5A",
        ang: "\u2220",
        ange: "\u29A4",
        angle: "\u2220",
        angmsd: "\u2221",
        angmsdaa: "\u29A8",
        angmsdab: "\u29A9",
        angmsdac: "\u29AA",
        angmsdad: "\u29AB",
        angmsdae: "\u29AC",
        angmsdaf: "\u29AD",
        angmsdag: "\u29AE",
        angmsdah: "\u29AF",
        angrt: "\u221F",
        angrtvb: "\u22BE",
        angrtvbd: "\u299D",
        angsph: "\u2222",
        angst: "\xC5",
        angzarr: "\u237C",
        Aogon: "\u0104",
        aogon: "\u0105",
        Aopf: "\u{1D538}",
        aopf: "\u{1D552}",
        ap: "\u2248",
        apacir: "\u2A6F",
        apE: "\u2A70",
        ape: "\u224A",
        apid: "\u224B",
        apos: "'",
        ApplyFunction: "\u2061",
        approx: "\u2248",
        approxeq: "\u224A",
        Aring: "\xC5",
        aring: "\xE5",
        Ascr: "\u{1D49C}",
        ascr: "\u{1D4B6}",
        Assign: "\u2254",
        ast: "*",
        asymp: "\u2248",
        asympeq: "\u224D",
        Atilde: "\xC3",
        atilde: "\xE3",
        Auml: "\xC4",
        auml: "\xE4",
        awconint: "\u2233",
        awint: "\u2A11",
        backcong: "\u224C",
        backepsilon: "\u03F6",
        backprime: "\u2035",
        backsim: "\u223D",
        backsimeq: "\u22CD",
        Backslash: "\u2216",
        Barv: "\u2AE7",
        barvee: "\u22BD",
        Barwed: "\u2306",
        barwed: "\u2305",
        barwedge: "\u2305",
        bbrk: "\u23B5",
        bbrktbrk: "\u23B6",
        bcong: "\u224C",
        Bcy: "\u0411",
        bcy: "\u0431",
        bdquo: "\u201E",
        becaus: "\u2235",
        Because: "\u2235",
        because: "\u2235",
        bemptyv: "\u29B0",
        bepsi: "\u03F6",
        bernou: "\u212C",
        Bernoullis: "\u212C",
        Beta: "\u0392",
        beta: "\u03B2",
        beth: "\u2136",
        between: "\u226C",
        Bfr: "\u{1D505}",
        bfr: "\u{1D51F}",
        bigcap: "\u22C2",
        bigcirc: "\u25EF",
        bigcup: "\u22C3",
        bigodot: "\u2A00",
        bigoplus: "\u2A01",
        bigotimes: "\u2A02",
        bigsqcup: "\u2A06",
        bigstar: "\u2605",
        bigtriangledown: "\u25BD",
        bigtriangleup: "\u25B3",
        biguplus: "\u2A04",
        bigvee: "\u22C1",
        bigwedge: "\u22C0",
        bkarow: "\u290D",
        blacklozenge: "\u29EB",
        blacksquare: "\u25AA",
        blacktriangle: "\u25B4",
        blacktriangledown: "\u25BE",
        blacktriangleleft: "\u25C2",
        blacktriangleright: "\u25B8",
        blank: "\u2423",
        blk12: "\u2592",
        blk14: "\u2591",
        blk34: "\u2593",
        block: "\u2588",
        bne: "=\u20E5",
        bnequiv: "\u2261\u20E5",
        bNot: "\u2AED",
        bnot: "\u2310",
        Bopf: "\u{1D539}",
        bopf: "\u{1D553}",
        bot: "\u22A5",
        bottom: "\u22A5",
        bowtie: "\u22C8",
        boxbox: "\u29C9",
        boxDL: "\u2557",
        boxDl: "\u2556",
        boxdL: "\u2555",
        boxdl: "\u2510",
        boxDR: "\u2554",
        boxDr: "\u2553",
        boxdR: "\u2552",
        boxdr: "\u250C",
        boxH: "\u2550",
        boxh: "\u2500",
        boxHD: "\u2566",
        boxHd: "\u2564",
        boxhD: "\u2565",
        boxhd: "\u252C",
        boxHU: "\u2569",
        boxHu: "\u2567",
        boxhU: "\u2568",
        boxhu: "\u2534",
        boxminus: "\u229F",
        boxplus: "\u229E",
        boxtimes: "\u22A0",
        boxUL: "\u255D",
        boxUl: "\u255C",
        boxuL: "\u255B",
        boxul: "\u2518",
        boxUR: "\u255A",
        boxUr: "\u2559",
        boxuR: "\u2558",
        boxur: "\u2514",
        boxV: "\u2551",
        boxv: "\u2502",
        boxVH: "\u256C",
        boxVh: "\u256B",
        boxvH: "\u256A",
        boxvh: "\u253C",
        boxVL: "\u2563",
        boxVl: "\u2562",
        boxvL: "\u2561",
        boxvl: "\u2524",
        boxVR: "\u2560",
        boxVr: "\u255F",
        boxvR: "\u255E",
        boxvr: "\u251C",
        bprime: "\u2035",
        Breve: "\u02D8",
        breve: "\u02D8",
        brvbar: "\xA6",
        Bscr: "\u212C",
        bscr: "\u{1D4B7}",
        bsemi: "\u204F",
        bsim: "\u223D",
        bsime: "\u22CD",
        bsol: "\\",
        bsolb: "\u29C5",
        bsolhsub: "\u27C8",
        bull: "\u2022",
        bullet: "\u2022",
        bump: "\u224E",
        bumpE: "\u2AAE",
        bumpe: "\u224F",
        Bumpeq: "\u224E",
        bumpeq: "\u224F",
        Cacute: "\u0106",
        cacute: "\u0107",
        Cap: "\u22D2",
        cap: "\u2229",
        capand: "\u2A44",
        capbrcup: "\u2A49",
        capcap: "\u2A4B",
        capcup: "\u2A47",
        capdot: "\u2A40",
        CapitalDifferentialD: "\u2145",
        caps: "\u2229\uFE00",
        caret: "\u2041",
        caron: "\u02C7",
        Cayleys: "\u212D",
        ccaps: "\u2A4D",
        Ccaron: "\u010C",
        ccaron: "\u010D",
        Ccedil: "\xC7",
        ccedil: "\xE7",
        Ccirc: "\u0108",
        ccirc: "\u0109",
        Cconint: "\u2230",
        ccups: "\u2A4C",
        ccupssm: "\u2A50",
        Cdot: "\u010A",
        cdot: "\u010B",
        cedil: "\xB8",
        Cedilla: "\xB8",
        cemptyv: "\u29B2",
        cent: "\xA2",
        CenterDot: "\xB7",
        centerdot: "\xB7",
        Cfr: "\u212D",
        cfr: "\u{1D520}",
        CHcy: "\u0427",
        chcy: "\u0447",
        check: "\u2713",
        checkmark: "\u2713",
        Chi: "\u03A7",
        chi: "\u03C7",
        cir: "\u25CB",
        circ: "\u02C6",
        circeq: "\u2257",
        circlearrowleft: "\u21BA",
        circlearrowright: "\u21BB",
        circledast: "\u229B",
        circledcirc: "\u229A",
        circleddash: "\u229D",
        CircleDot: "\u2299",
        circledR: "\xAE",
        circledS: "\u24C8",
        CircleMinus: "\u2296",
        CirclePlus: "\u2295",
        CircleTimes: "\u2297",
        cirE: "\u29C3",
        cire: "\u2257",
        cirfnint: "\u2A10",
        cirmid: "\u2AEF",
        cirscir: "\u29C2",
        ClockwiseContourIntegral: "\u2232",
        CloseCurlyDoubleQuote: "\u201D",
        CloseCurlyQuote: "\u2019",
        clubs: "\u2663",
        clubsuit: "\u2663",
        Colon: "\u2237",
        colon: ":",
        Colone: "\u2A74",
        colone: "\u2254",
        coloneq: "\u2254",
        comma: ",",
        commat: "@",
        comp: "\u2201",
        compfn: "\u2218",
        complement: "\u2201",
        complexes: "\u2102",
        cong: "\u2245",
        congdot: "\u2A6D",
        Congruent: "\u2261",
        Conint: "\u222F",
        conint: "\u222E",
        ContourIntegral: "\u222E",
        Copf: "\u2102",
        copf: "\u{1D554}",
        coprod: "\u2210",
        Coproduct: "\u2210",
        COPY: "\xA9",
        copy: "\xA9",
        copysr: "\u2117",
        CounterClockwiseContourIntegral: "\u2233",
        crarr: "\u21B5",
        Cross: "\u2A2F",
        cross: "\u2717",
        Cscr: "\u{1D49E}",
        cscr: "\u{1D4B8}",
        csub: "\u2ACF",
        csube: "\u2AD1",
        csup: "\u2AD0",
        csupe: "\u2AD2",
        ctdot: "\u22EF",
        cudarrl: "\u2938",
        cudarrr: "\u2935",
        cuepr: "\u22DE",
        cuesc: "\u22DF",
        cularr: "\u21B6",
        cularrp: "\u293D",
        Cup: "\u22D3",
        cup: "\u222A",
        cupbrcap: "\u2A48",
        CupCap: "\u224D",
        cupcap: "\u2A46",
        cupcup: "\u2A4A",
        cupdot: "\u228D",
        cupor: "\u2A45",
        cups: "\u222A\uFE00",
        curarr: "\u21B7",
        curarrm: "\u293C",
        curlyeqprec: "\u22DE",
        curlyeqsucc: "\u22DF",
        curlyvee: "\u22CE",
        curlywedge: "\u22CF",
        curren: "\xA4",
        curvearrowleft: "\u21B6",
        curvearrowright: "\u21B7",
        cuvee: "\u22CE",
        cuwed: "\u22CF",
        cwconint: "\u2232",
        cwint: "\u2231",
        cylcty: "\u232D",
        Dagger: "\u2021",
        dagger: "\u2020",
        daleth: "\u2138",
        Darr: "\u21A1",
        dArr: "\u21D3",
        darr: "\u2193",
        dash: "\u2010",
        Dashv: "\u2AE4",
        dashv: "\u22A3",
        dbkarow: "\u290F",
        dblac: "\u02DD",
        Dcaron: "\u010E",
        dcaron: "\u010F",
        Dcy: "\u0414",
        dcy: "\u0434",
        DD: "\u2145",
        dd: "\u2146",
        ddagger: "\u2021",
        ddarr: "\u21CA",
        DDotrahd: "\u2911",
        ddotseq: "\u2A77",
        deg: "\xB0",
        Del: "\u2207",
        Delta: "\u0394",
        delta: "\u03B4",
        demptyv: "\u29B1",
        dfisht: "\u297F",
        Dfr: "\u{1D507}",
        dfr: "\u{1D521}",
        dHar: "\u2965",
        dharl: "\u21C3",
        dharr: "\u21C2",
        DiacriticalAcute: "\xB4",
        DiacriticalDot: "\u02D9",
        DiacriticalDoubleAcute: "\u02DD",
        DiacriticalGrave: "`",
        DiacriticalTilde: "\u02DC",
        diam: "\u22C4",
        Diamond: "\u22C4",
        diamond: "\u22C4",
        diamondsuit: "\u2666",
        diams: "\u2666",
        die: "\xA8",
        DifferentialD: "\u2146",
        digamma: "\u03DD",
        disin: "\u22F2",
        div: "\xF7",
        divide: "\xF7",
        divideontimes: "\u22C7",
        divonx: "\u22C7",
        DJcy: "\u0402",
        djcy: "\u0452",
        dlcorn: "\u231E",
        dlcrop: "\u230D",
        dollar: "$",
        Dopf: "\u{1D53B}",
        dopf: "\u{1D555}",
        Dot: "\xA8",
        dot: "\u02D9",
        DotDot: "\u20DC",
        doteq: "\u2250",
        doteqdot: "\u2251",
        DotEqual: "\u2250",
        dotminus: "\u2238",
        dotplus: "\u2214",
        dotsquare: "\u22A1",
        doublebarwedge: "\u2306",
        DoubleContourIntegral: "\u222F",
        DoubleDot: "\xA8",
        DoubleDownArrow: "\u21D3",
        DoubleLeftArrow: "\u21D0",
        DoubleLeftRightArrow: "\u21D4",
        DoubleLeftTee: "\u2AE4",
        DoubleLongLeftArrow: "\u27F8",
        DoubleLongLeftRightArrow: "\u27FA",
        DoubleLongRightArrow: "\u27F9",
        DoubleRightArrow: "\u21D2",
        DoubleRightTee: "\u22A8",
        DoubleUpArrow: "\u21D1",
        DoubleUpDownArrow: "\u21D5",
        DoubleVerticalBar: "\u2225",
        DownArrow: "\u2193",
        Downarrow: "\u21D3",
        downarrow: "\u2193",
        DownArrowBar: "\u2913",
        DownArrowUpArrow: "\u21F5",
        DownBreve: "\u0311",
        downdownarrows: "\u21CA",
        downharpoonleft: "\u21C3",
        downharpoonright: "\u21C2",
        DownLeftRightVector: "\u2950",
        DownLeftTeeVector: "\u295E",
        DownLeftVector: "\u21BD",
        DownLeftVectorBar: "\u2956",
        DownRightTeeVector: "\u295F",
        DownRightVector: "\u21C1",
        DownRightVectorBar: "\u2957",
        DownTee: "\u22A4",
        DownTeeArrow: "\u21A7",
        drbkarow: "\u2910",
        drcorn: "\u231F",
        drcrop: "\u230C",
        Dscr: "\u{1D49F}",
        dscr: "\u{1D4B9}",
        DScy: "\u0405",
        dscy: "\u0455",
        dsol: "\u29F6",
        Dstrok: "\u0110",
        dstrok: "\u0111",
        dtdot: "\u22F1",
        dtri: "\u25BF",
        dtrif: "\u25BE",
        duarr: "\u21F5",
        duhar: "\u296F",
        dwangle: "\u29A6",
        DZcy: "\u040F",
        dzcy: "\u045F",
        dzigrarr: "\u27FF",
        Eacute: "\xC9",
        eacute: "\xE9",
        easter: "\u2A6E",
        Ecaron: "\u011A",
        ecaron: "\u011B",
        ecir: "\u2256",
        Ecirc: "\xCA",
        ecirc: "\xEA",
        ecolon: "\u2255",
        Ecy: "\u042D",
        ecy: "\u044D",
        eDDot: "\u2A77",
        Edot: "\u0116",
        eDot: "\u2251",
        edot: "\u0117",
        ee: "\u2147",
        efDot: "\u2252",
        Efr: "\u{1D508}",
        efr: "\u{1D522}",
        eg: "\u2A9A",
        Egrave: "\xC8",
        egrave: "\xE8",
        egs: "\u2A96",
        egsdot: "\u2A98",
        el: "\u2A99",
        Element: "\u2208",
        elinters: "\u23E7",
        ell: "\u2113",
        els: "\u2A95",
        elsdot: "\u2A97",
        Emacr: "\u0112",
        emacr: "\u0113",
        empty: "\u2205",
        emptyset: "\u2205",
        EmptySmallSquare: "\u25FB",
        emptyv: "\u2205",
        EmptyVerySmallSquare: "\u25AB",
        emsp: "\u2003",
        emsp13: "\u2004",
        emsp14: "\u2005",
        ENG: "\u014A",
        eng: "\u014B",
        ensp: "\u2002",
        Eogon: "\u0118",
        eogon: "\u0119",
        Eopf: "\u{1D53C}",
        eopf: "\u{1D556}",
        epar: "\u22D5",
        eparsl: "\u29E3",
        eplus: "\u2A71",
        epsi: "\u03B5",
        Epsilon: "\u0395",
        epsilon: "\u03B5",
        epsiv: "\u03F5",
        eqcirc: "\u2256",
        eqcolon: "\u2255",
        eqsim: "\u2242",
        eqslantgtr: "\u2A96",
        eqslantless: "\u2A95",
        Equal: "\u2A75",
        equals: "=",
        EqualTilde: "\u2242",
        equest: "\u225F",
        Equilibrium: "\u21CC",
        equiv: "\u2261",
        equivDD: "\u2A78",
        eqvparsl: "\u29E5",
        erarr: "\u2971",
        erDot: "\u2253",
        Escr: "\u2130",
        escr: "\u212F",
        esdot: "\u2250",
        Esim: "\u2A73",
        esim: "\u2242",
        Eta: "\u0397",
        eta: "\u03B7",
        ETH: "\xD0",
        eth: "\xF0",
        Euml: "\xCB",
        euml: "\xEB",
        euro: "\u20AC",
        excl: "!",
        exist: "\u2203",
        Exists: "\u2203",
        expectation: "\u2130",
        ExponentialE: "\u2147",
        exponentiale: "\u2147",
        fallingdotseq: "\u2252",
        Fcy: "\u0424",
        fcy: "\u0444",
        female: "\u2640",
        ffilig: "\uFB03",
        fflig: "\uFB00",
        ffllig: "\uFB04",
        Ffr: "\u{1D509}",
        ffr: "\u{1D523}",
        filig: "\uFB01",
        FilledSmallSquare: "\u25FC",
        FilledVerySmallSquare: "\u25AA",
        fjlig: "fj",
        flat: "\u266D",
        fllig: "\uFB02",
        fltns: "\u25B1",
        fnof: "\u0192",
        Fopf: "\u{1D53D}",
        fopf: "\u{1D557}",
        ForAll: "\u2200",
        forall: "\u2200",
        fork: "\u22D4",
        forkv: "\u2AD9",
        Fouriertrf: "\u2131",
        fpartint: "\u2A0D",
        frac12: "\xBD",
        frac13: "\u2153",
        frac14: "\xBC",
        frac15: "\u2155",
        frac16: "\u2159",
        frac18: "\u215B",
        frac23: "\u2154",
        frac25: "\u2156",
        frac34: "\xBE",
        frac35: "\u2157",
        frac38: "\u215C",
        frac45: "\u2158",
        frac56: "\u215A",
        frac58: "\u215D",
        frac78: "\u215E",
        frasl: "\u2044",
        frown: "\u2322",
        Fscr: "\u2131",
        fscr: "\u{1D4BB}",
        gacute: "\u01F5",
        Gamma: "\u0393",
        gamma: "\u03B3",
        Gammad: "\u03DC",
        gammad: "\u03DD",
        gap: "\u2A86",
        Gbreve: "\u011E",
        gbreve: "\u011F",
        Gcedil: "\u0122",
        Gcirc: "\u011C",
        gcirc: "\u011D",
        Gcy: "\u0413",
        gcy: "\u0433",
        Gdot: "\u0120",
        gdot: "\u0121",
        gE: "\u2267",
        ge: "\u2265",
        gEl: "\u2A8C",
        gel: "\u22DB",
        geq: "\u2265",
        geqq: "\u2267",
        geqslant: "\u2A7E",
        ges: "\u2A7E",
        gescc: "\u2AA9",
        gesdot: "\u2A80",
        gesdoto: "\u2A82",
        gesdotol: "\u2A84",
        gesl: "\u22DB\uFE00",
        gesles: "\u2A94",
        Gfr: "\u{1D50A}",
        gfr: "\u{1D524}",
        Gg: "\u22D9",
        gg: "\u226B",
        ggg: "\u22D9",
        gimel: "\u2137",
        GJcy: "\u0403",
        gjcy: "\u0453",
        gl: "\u2277",
        gla: "\u2AA5",
        glE: "\u2A92",
        glj: "\u2AA4",
        gnap: "\u2A8A",
        gnapprox: "\u2A8A",
        gnE: "\u2269",
        gne: "\u2A88",
        gneq: "\u2A88",
        gneqq: "\u2269",
        gnsim: "\u22E7",
        Gopf: "\u{1D53E}",
        gopf: "\u{1D558}",
        grave: "`",
        GreaterEqual: "\u2265",
        GreaterEqualLess: "\u22DB",
        GreaterFullEqual: "\u2267",
        GreaterGreater: "\u2AA2",
        GreaterLess: "\u2277",
        GreaterSlantEqual: "\u2A7E",
        GreaterTilde: "\u2273",
        Gscr: "\u{1D4A2}",
        gscr: "\u210A",
        gsim: "\u2273",
        gsime: "\u2A8E",
        gsiml: "\u2A90",
        Gt: "\u226B",
        GT: ">",
        gt: ">",
        gtcc: "\u2AA7",
        gtcir: "\u2A7A",
        gtdot: "\u22D7",
        gtlPar: "\u2995",
        gtquest: "\u2A7C",
        gtrapprox: "\u2A86",
        gtrarr: "\u2978",
        gtrdot: "\u22D7",
        gtreqless: "\u22DB",
        gtreqqless: "\u2A8C",
        gtrless: "\u2277",
        gtrsim: "\u2273",
        gvertneqq: "\u2269\uFE00",
        gvnE: "\u2269\uFE00",
        Hacek: "\u02C7",
        hairsp: "\u200A",
        half: "\xBD",
        hamilt: "\u210B",
        HARDcy: "\u042A",
        hardcy: "\u044A",
        hArr: "\u21D4",
        harr: "\u2194",
        harrcir: "\u2948",
        harrw: "\u21AD",
        Hat: "^",
        hbar: "\u210F",
        Hcirc: "\u0124",
        hcirc: "\u0125",
        hearts: "\u2665",
        heartsuit: "\u2665",
        hellip: "\u2026",
        hercon: "\u22B9",
        Hfr: "\u210C",
        hfr: "\u{1D525}",
        HilbertSpace: "\u210B",
        hksearow: "\u2925",
        hkswarow: "\u2926",
        hoarr: "\u21FF",
        homtht: "\u223B",
        hookleftarrow: "\u21A9",
        hookrightarrow: "\u21AA",
        Hopf: "\u210D",
        hopf: "\u{1D559}",
        horbar: "\u2015",
        HorizontalLine: "\u2500",
        Hscr: "\u210B",
        hscr: "\u{1D4BD}",
        hslash: "\u210F",
        Hstrok: "\u0126",
        hstrok: "\u0127",
        HumpDownHump: "\u224E",
        HumpEqual: "\u224F",
        hybull: "\u2043",
        hyphen: "\u2010",
        Iacute: "\xCD",
        iacute: "\xED",
        ic: "\u2063",
        Icirc: "\xCE",
        icirc: "\xEE",
        Icy: "\u0418",
        icy: "\u0438",
        Idot: "\u0130",
        IEcy: "\u0415",
        iecy: "\u0435",
        iexcl: "\xA1",
        iff: "\u21D4",
        Ifr: "\u2111",
        ifr: "\u{1D526}",
        Igrave: "\xCC",
        igrave: "\xEC",
        ii: "\u2148",
        iiiint: "\u2A0C",
        iiint: "\u222D",
        iinfin: "\u29DC",
        iiota: "\u2129",
        IJlig: "\u0132",
        ijlig: "\u0133",
        Im: "\u2111",
        Imacr: "\u012A",
        imacr: "\u012B",
        image: "\u2111",
        ImaginaryI: "\u2148",
        imagline: "\u2110",
        imagpart: "\u2111",
        imath: "\u0131",
        imof: "\u22B7",
        imped: "\u01B5",
        Implies: "\u21D2",
        in: "\u2208",
        incare: "\u2105",
        infin: "\u221E",
        infintie: "\u29DD",
        inodot: "\u0131",
        Int: "\u222C",
        int: "\u222B",
        intcal: "\u22BA",
        integers: "\u2124",
        Integral: "\u222B",
        intercal: "\u22BA",
        Intersection: "\u22C2",
        intlarhk: "\u2A17",
        intprod: "\u2A3C",
        InvisibleComma: "\u2063",
        InvisibleTimes: "\u2062",
        IOcy: "\u0401",
        iocy: "\u0451",
        Iogon: "\u012E",
        iogon: "\u012F",
        Iopf: "\u{1D540}",
        iopf: "\u{1D55A}",
        Iota: "\u0399",
        iota: "\u03B9",
        iprod: "\u2A3C",
        iquest: "\xBF",
        Iscr: "\u2110",
        iscr: "\u{1D4BE}",
        isin: "\u2208",
        isindot: "\u22F5",
        isinE: "\u22F9",
        isins: "\u22F4",
        isinsv: "\u22F3",
        isinv: "\u2208",
        it: "\u2062",
        Itilde: "\u0128",
        itilde: "\u0129",
        Iukcy: "\u0406",
        iukcy: "\u0456",
        Iuml: "\xCF",
        iuml: "\xEF",
        Jcirc: "\u0134",
        jcirc: "\u0135",
        Jcy: "\u0419",
        jcy: "\u0439",
        Jfr: "\u{1D50D}",
        jfr: "\u{1D527}",
        jmath: "\u0237",
        Jopf: "\u{1D541}",
        jopf: "\u{1D55B}",
        Jscr: "\u{1D4A5}",
        jscr: "\u{1D4BF}",
        Jsercy: "\u0408",
        jsercy: "\u0458",
        Jukcy: "\u0404",
        jukcy: "\u0454",
        Kappa: "\u039A",
        kappa: "\u03BA",
        kappav: "\u03F0",
        Kcedil: "\u0136",
        kcedil: "\u0137",
        Kcy: "\u041A",
        kcy: "\u043A",
        Kfr: "\u{1D50E}",
        kfr: "\u{1D528}",
        kgreen: "\u0138",
        KHcy: "\u0425",
        khcy: "\u0445",
        KJcy: "\u040C",
        kjcy: "\u045C",
        Kopf: "\u{1D542}",
        kopf: "\u{1D55C}",
        Kscr: "\u{1D4A6}",
        kscr: "\u{1D4C0}",
        lAarr: "\u21DA",
        Lacute: "\u0139",
        lacute: "\u013A",
        laemptyv: "\u29B4",
        lagran: "\u2112",
        Lambda: "\u039B",
        lambda: "\u03BB",
        Lang: "\u27EA",
        lang: "\u27E8",
        langd: "\u2991",
        langle: "\u27E8",
        lap: "\u2A85",
        Laplacetrf: "\u2112",
        laquo: "\xAB",
        Larr: "\u219E",
        lArr: "\u21D0",
        larr: "\u2190",
        larrb: "\u21E4",
        larrbfs: "\u291F",
        larrfs: "\u291D",
        larrhk: "\u21A9",
        larrlp: "\u21AB",
        larrpl: "\u2939",
        larrsim: "\u2973",
        larrtl: "\u21A2",
        lat: "\u2AAB",
        lAtail: "\u291B",
        latail: "\u2919",
        late: "\u2AAD",
        lates: "\u2AAD\uFE00",
        lBarr: "\u290E",
        lbarr: "\u290C",
        lbbrk: "\u2772",
        lbrace: "{",
        lbrack: "[",
        lbrke: "\u298B",
        lbrksld: "\u298F",
        lbrkslu: "\u298D",
        Lcaron: "\u013D",
        lcaron: "\u013E",
        Lcedil: "\u013B",
        lcedil: "\u013C",
        lceil: "\u2308",
        lcub: "{",
        Lcy: "\u041B",
        lcy: "\u043B",
        ldca: "\u2936",
        ldquo: "\u201C",
        ldquor: "\u201E",
        ldrdhar: "\u2967",
        ldrushar: "\u294B",
        ldsh: "\u21B2",
        lE: "\u2266",
        le: "\u2264",
        LeftAngleBracket: "\u27E8",
        LeftArrow: "\u2190",
        Leftarrow: "\u21D0",
        leftarrow: "\u2190",
        LeftArrowBar: "\u21E4",
        LeftArrowRightArrow: "\u21C6",
        leftarrowtail: "\u21A2",
        LeftCeiling: "\u2308",
        LeftDoubleBracket: "\u27E6",
        LeftDownTeeVector: "\u2961",
        LeftDownVector: "\u21C3",
        LeftDownVectorBar: "\u2959",
        LeftFloor: "\u230A",
        leftharpoondown: "\u21BD",
        leftharpoonup: "\u21BC",
        leftleftarrows: "\u21C7",
        LeftRightArrow: "\u2194",
        Leftrightarrow: "\u21D4",
        leftrightarrow: "\u2194",
        leftrightarrows: "\u21C6",
        leftrightharpoons: "\u21CB",
        leftrightsquigarrow: "\u21AD",
        LeftRightVector: "\u294E",
        LeftTee: "\u22A3",
        LeftTeeArrow: "\u21A4",
        LeftTeeVector: "\u295A",
        leftthreetimes: "\u22CB",
        LeftTriangle: "\u22B2",
        LeftTriangleBar: "\u29CF",
        LeftTriangleEqual: "\u22B4",
        LeftUpDownVector: "\u2951",
        LeftUpTeeVector: "\u2960",
        LeftUpVector: "\u21BF",
        LeftUpVectorBar: "\u2958",
        LeftVector: "\u21BC",
        LeftVectorBar: "\u2952",
        lEg: "\u2A8B",
        leg: "\u22DA",
        leq: "\u2264",
        leqq: "\u2266",
        leqslant: "\u2A7D",
        les: "\u2A7D",
        lescc: "\u2AA8",
        lesdot: "\u2A7F",
        lesdoto: "\u2A81",
        lesdotor: "\u2A83",
        lesg: "\u22DA\uFE00",
        lesges: "\u2A93",
        lessapprox: "\u2A85",
        lessdot: "\u22D6",
        lesseqgtr: "\u22DA",
        lesseqqgtr: "\u2A8B",
        LessEqualGreater: "\u22DA",
        LessFullEqual: "\u2266",
        LessGreater: "\u2276",
        lessgtr: "\u2276",
        LessLess: "\u2AA1",
        lesssim: "\u2272",
        LessSlantEqual: "\u2A7D",
        LessTilde: "\u2272",
        lfisht: "\u297C",
        lfloor: "\u230A",
        Lfr: "\u{1D50F}",
        lfr: "\u{1D529}",
        lg: "\u2276",
        lgE: "\u2A91",
        lHar: "\u2962",
        lhard: "\u21BD",
        lharu: "\u21BC",
        lharul: "\u296A",
        lhblk: "\u2584",
        LJcy: "\u0409",
        ljcy: "\u0459",
        Ll: "\u22D8",
        ll: "\u226A",
        llarr: "\u21C7",
        llcorner: "\u231E",
        Lleftarrow: "\u21DA",
        llhard: "\u296B",
        lltri: "\u25FA",
        Lmidot: "\u013F",
        lmidot: "\u0140",
        lmoust: "\u23B0",
        lmoustache: "\u23B0",
        lnap: "\u2A89",
        lnapprox: "\u2A89",
        lnE: "\u2268",
        lne: "\u2A87",
        lneq: "\u2A87",
        lneqq: "\u2268",
        lnsim: "\u22E6",
        loang: "\u27EC",
        loarr: "\u21FD",
        lobrk: "\u27E6",
        LongLeftArrow: "\u27F5",
        Longleftarrow: "\u27F8",
        longleftarrow: "\u27F5",
        LongLeftRightArrow: "\u27F7",
        Longleftrightarrow: "\u27FA",
        longleftrightarrow: "\u27F7",
        longmapsto: "\u27FC",
        LongRightArrow: "\u27F6",
        Longrightarrow: "\u27F9",
        longrightarrow: "\u27F6",
        looparrowleft: "\u21AB",
        looparrowright: "\u21AC",
        lopar: "\u2985",
        Lopf: "\u{1D543}",
        lopf: "\u{1D55D}",
        loplus: "\u2A2D",
        lotimes: "\u2A34",
        lowast: "\u2217",
        lowbar: "_",
        LowerLeftArrow: "\u2199",
        LowerRightArrow: "\u2198",
        loz: "\u25CA",
        lozenge: "\u25CA",
        lozf: "\u29EB",
        lpar: "(",
        lparlt: "\u2993",
        lrarr: "\u21C6",
        lrcorner: "\u231F",
        lrhar: "\u21CB",
        lrhard: "\u296D",
        lrm: "\u200E",
        lrtri: "\u22BF",
        lsaquo: "\u2039",
        Lscr: "\u2112",
        lscr: "\u{1D4C1}",
        Lsh: "\u21B0",
        lsh: "\u21B0",
        lsim: "\u2272",
        lsime: "\u2A8D",
        lsimg: "\u2A8F",
        lsqb: "[",
        lsquo: "\u2018",
        lsquor: "\u201A",
        Lstrok: "\u0141",
        lstrok: "\u0142",
        Lt: "\u226A",
        LT: "<",
        lt: "<",
        ltcc: "\u2AA6",
        ltcir: "\u2A79",
        ltdot: "\u22D6",
        lthree: "\u22CB",
        ltimes: "\u22C9",
        ltlarr: "\u2976",
        ltquest: "\u2A7B",
        ltri: "\u25C3",
        ltrie: "\u22B4",
        ltrif: "\u25C2",
        ltrPar: "\u2996",
        lurdshar: "\u294A",
        luruhar: "\u2966",
        lvertneqq: "\u2268\uFE00",
        lvnE: "\u2268\uFE00",
        macr: "\xAF",
        male: "\u2642",
        malt: "\u2720",
        maltese: "\u2720",
        Map: "\u2905",
        map: "\u21A6",
        mapsto: "\u21A6",
        mapstodown: "\u21A7",
        mapstoleft: "\u21A4",
        mapstoup: "\u21A5",
        marker: "\u25AE",
        mcomma: "\u2A29",
        Mcy: "\u041C",
        mcy: "\u043C",
        mdash: "\u2014",
        mDDot: "\u223A",
        measuredangle: "\u2221",
        MediumSpace: "\u205F",
        Mellintrf: "\u2133",
        Mfr: "\u{1D510}",
        mfr: "\u{1D52A}",
        mho: "\u2127",
        micro: "\xB5",
        mid: "\u2223",
        midast: "*",
        midcir: "\u2AF0",
        middot: "\xB7",
        minus: "\u2212",
        minusb: "\u229F",
        minusd: "\u2238",
        minusdu: "\u2A2A",
        MinusPlus: "\u2213",
        mlcp: "\u2ADB",
        mldr: "\u2026",
        mnplus: "\u2213",
        models: "\u22A7",
        Mopf: "\u{1D544}",
        mopf: "\u{1D55E}",
        mp: "\u2213",
        Mscr: "\u2133",
        mscr: "\u{1D4C2}",
        mstpos: "\u223E",
        Mu: "\u039C",
        mu: "\u03BC",
        multimap: "\u22B8",
        mumap: "\u22B8",
        nabla: "\u2207",
        Nacute: "\u0143",
        nacute: "\u0144",
        nang: "\u2220\u20D2",
        nap: "\u2249",
        napE: "\u2A70\u0338",
        napid: "\u224B\u0338",
        napos: "\u0149",
        napprox: "\u2249",
        natur: "\u266E",
        natural: "\u266E",
        naturals: "\u2115",
        nbsp: "\xA0",
        nbump: "\u224E\u0338",
        nbumpe: "\u224F\u0338",
        ncap: "\u2A43",
        Ncaron: "\u0147",
        ncaron: "\u0148",
        Ncedil: "\u0145",
        ncedil: "\u0146",
        ncong: "\u2247",
        ncongdot: "\u2A6D\u0338",
        ncup: "\u2A42",
        Ncy: "\u041D",
        ncy: "\u043D",
        ndash: "\u2013",
        ne: "\u2260",
        nearhk: "\u2924",
        neArr: "\u21D7",
        nearr: "\u2197",
        nearrow: "\u2197",
        nedot: "\u2250\u0338",
        NegativeMediumSpace: "\u200B",
        NegativeThickSpace: "\u200B",
        NegativeThinSpace: "\u200B",
        NegativeVeryThinSpace: "\u200B",
        nequiv: "\u2262",
        nesear: "\u2928",
        nesim: "\u2242\u0338",
        NestedGreaterGreater: "\u226B",
        NestedLessLess: "\u226A",
        NewLine: "\n",
        nexist: "\u2204",
        nexists: "\u2204",
        Nfr: "\u{1D511}",
        nfr: "\u{1D52B}",
        ngE: "\u2267\u0338",
        nge: "\u2271",
        ngeq: "\u2271",
        ngeqq: "\u2267\u0338",
        ngeqslant: "\u2A7E\u0338",
        nges: "\u2A7E\u0338",
        nGg: "\u22D9\u0338",
        ngsim: "\u2275",
        nGt: "\u226B\u20D2",
        ngt: "\u226F",
        ngtr: "\u226F",
        nGtv: "\u226B\u0338",
        nhArr: "\u21CE",
        nharr: "\u21AE",
        nhpar: "\u2AF2",
        ni: "\u220B",
        nis: "\u22FC",
        nisd: "\u22FA",
        niv: "\u220B",
        NJcy: "\u040A",
        njcy: "\u045A",
        nlArr: "\u21CD",
        nlarr: "\u219A",
        nldr: "\u2025",
        nlE: "\u2266\u0338",
        nle: "\u2270",
        nLeftarrow: "\u21CD",
        nleftarrow: "\u219A",
        nLeftrightarrow: "\u21CE",
        nleftrightarrow: "\u21AE",
        nleq: "\u2270",
        nleqq: "\u2266\u0338",
        nleqslant: "\u2A7D\u0338",
        nles: "\u2A7D\u0338",
        nless: "\u226E",
        nLl: "\u22D8\u0338",
        nlsim: "\u2274",
        nLt: "\u226A\u20D2",
        nlt: "\u226E",
        nltri: "\u22EA",
        nltrie: "\u22EC",
        nLtv: "\u226A\u0338",
        nmid: "\u2224",
        NoBreak: "\u2060",
        NonBreakingSpace: "\xA0",
        Nopf: "\u2115",
        nopf: "\u{1D55F}",
        Not: "\u2AEC",
        not: "\xAC",
        NotCongruent: "\u2262",
        NotCupCap: "\u226D",
        NotDoubleVerticalBar: "\u2226",
        NotElement: "\u2209",
        NotEqual: "\u2260",
        NotEqualTilde: "\u2242\u0338",
        NotExists: "\u2204",
        NotGreater: "\u226F",
        NotGreaterEqual: "\u2271",
        NotGreaterFullEqual: "\u2267\u0338",
        NotGreaterGreater: "\u226B\u0338",
        NotGreaterLess: "\u2279",
        NotGreaterSlantEqual: "\u2A7E\u0338",
        NotGreaterTilde: "\u2275",
        NotHumpDownHump: "\u224E\u0338",
        NotHumpEqual: "\u224F\u0338",
        notin: "\u2209",
        notindot: "\u22F5\u0338",
        notinE: "\u22F9\u0338",
        notinva: "\u2209",
        notinvb: "\u22F7",
        notinvc: "\u22F6",
        NotLeftTriangle: "\u22EA",
        NotLeftTriangleBar: "\u29CF\u0338",
        NotLeftTriangleEqual: "\u22EC",
        NotLess: "\u226E",
        NotLessEqual: "\u2270",
        NotLessGreater: "\u2278",
        NotLessLess: "\u226A\u0338",
        NotLessSlantEqual: "\u2A7D\u0338",
        NotLessTilde: "\u2274",
        NotNestedGreaterGreater: "\u2AA2\u0338",
        NotNestedLessLess: "\u2AA1\u0338",
        notni: "\u220C",
        notniva: "\u220C",
        notnivb: "\u22FE",
        notnivc: "\u22FD",
        NotPrecedes: "\u2280",
        NotPrecedesEqual: "\u2AAF\u0338",
        NotPrecedesSlantEqual: "\u22E0",
        NotReverseElement: "\u220C",
        NotRightTriangle: "\u22EB",
        NotRightTriangleBar: "\u29D0\u0338",
        NotRightTriangleEqual: "\u22ED",
        NotSquareSubset: "\u228F\u0338",
        NotSquareSubsetEqual: "\u22E2",
        NotSquareSuperset: "\u2290\u0338",
        NotSquareSupersetEqual: "\u22E3",
        NotSubset: "\u2282\u20D2",
        NotSubsetEqual: "\u2288",
        NotSucceeds: "\u2281",
        NotSucceedsEqual: "\u2AB0\u0338",
        NotSucceedsSlantEqual: "\u22E1",
        NotSucceedsTilde: "\u227F\u0338",
        NotSuperset: "\u2283\u20D2",
        NotSupersetEqual: "\u2289",
        NotTilde: "\u2241",
        NotTildeEqual: "\u2244",
        NotTildeFullEqual: "\u2247",
        NotTildeTilde: "\u2249",
        NotVerticalBar: "\u2224",
        npar: "\u2226",
        nparallel: "\u2226",
        nparsl: "\u2AFD\u20E5",
        npart: "\u2202\u0338",
        npolint: "\u2A14",
        npr: "\u2280",
        nprcue: "\u22E0",
        npre: "\u2AAF\u0338",
        nprec: "\u2280",
        npreceq: "\u2AAF\u0338",
        nrArr: "\u21CF",
        nrarr: "\u219B",
        nrarrc: "\u2933\u0338",
        nrarrw: "\u219D\u0338",
        nRightarrow: "\u21CF",
        nrightarrow: "\u219B",
        nrtri: "\u22EB",
        nrtrie: "\u22ED",
        nsc: "\u2281",
        nsccue: "\u22E1",
        nsce: "\u2AB0\u0338",
        Nscr: "\u{1D4A9}",
        nscr: "\u{1D4C3}",
        nshortmid: "\u2224",
        nshortparallel: "\u2226",
        nsim: "\u2241",
        nsime: "\u2244",
        nsimeq: "\u2244",
        nsmid: "\u2224",
        nspar: "\u2226",
        nsqsube: "\u22E2",
        nsqsupe: "\u22E3",
        nsub: "\u2284",
        nsubE: "\u2AC5\u0338",
        nsube: "\u2288",
        nsubset: "\u2282\u20D2",
        nsubseteq: "\u2288",
        nsubseteqq: "\u2AC5\u0338",
        nsucc: "\u2281",
        nsucceq: "\u2AB0\u0338",
        nsup: "\u2285",
        nsupE: "\u2AC6\u0338",
        nsupe: "\u2289",
        nsupset: "\u2283\u20D2",
        nsupseteq: "\u2289",
        nsupseteqq: "\u2AC6\u0338",
        ntgl: "\u2279",
        Ntilde: "\xD1",
        ntilde: "\xF1",
        ntlg: "\u2278",
        ntriangleleft: "\u22EA",
        ntrianglelefteq: "\u22EC",
        ntriangleright: "\u22EB",
        ntrianglerighteq: "\u22ED",
        Nu: "\u039D",
        nu: "\u03BD",
        num: "#",
        numero: "\u2116",
        numsp: "\u2007",
        nvap: "\u224D\u20D2",
        nVDash: "\u22AF",
        nVdash: "\u22AE",
        nvDash: "\u22AD",
        nvdash: "\u22AC",
        nvge: "\u2265\u20D2",
        nvgt: ">\u20D2",
        nvHarr: "\u2904",
        nvinfin: "\u29DE",
        nvlArr: "\u2902",
        nvle: "\u2264\u20D2",
        nvlt: "<\u20D2",
        nvltrie: "\u22B4\u20D2",
        nvrArr: "\u2903",
        nvrtrie: "\u22B5\u20D2",
        nvsim: "\u223C\u20D2",
        nwarhk: "\u2923",
        nwArr: "\u21D6",
        nwarr: "\u2196",
        nwarrow: "\u2196",
        nwnear: "\u2927",
        Oacute: "\xD3",
        oacute: "\xF3",
        oast: "\u229B",
        ocir: "\u229A",
        Ocirc: "\xD4",
        ocirc: "\xF4",
        Ocy: "\u041E",
        ocy: "\u043E",
        odash: "\u229D",
        Odblac: "\u0150",
        odblac: "\u0151",
        odiv: "\u2A38",
        odot: "\u2299",
        odsold: "\u29BC",
        OElig: "\u0152",
        oelig: "\u0153",
        ofcir: "\u29BF",
        Ofr: "\u{1D512}",
        ofr: "\u{1D52C}",
        ogon: "\u02DB",
        Ograve: "\xD2",
        ograve: "\xF2",
        ogt: "\u29C1",
        ohbar: "\u29B5",
        ohm: "\u03A9",
        oint: "\u222E",
        olarr: "\u21BA",
        olcir: "\u29BE",
        olcross: "\u29BB",
        oline: "\u203E",
        olt: "\u29C0",
        Omacr: "\u014C",
        omacr: "\u014D",
        Omega: "\u03A9",
        omega: "\u03C9",
        Omicron: "\u039F",
        omicron: "\u03BF",
        omid: "\u29B6",
        ominus: "\u2296",
        Oopf: "\u{1D546}",
        oopf: "\u{1D560}",
        opar: "\u29B7",
        OpenCurlyDoubleQuote: "\u201C",
        OpenCurlyQuote: "\u2018",
        operp: "\u29B9",
        oplus: "\u2295",
        Or: "\u2A54",
        or: "\u2228",
        orarr: "\u21BB",
        ord: "\u2A5D",
        order: "\u2134",
        orderof: "\u2134",
        ordf: "\xAA",
        ordm: "\xBA",
        origof: "\u22B6",
        oror: "\u2A56",
        orslope: "\u2A57",
        orv: "\u2A5B",
        oS: "\u24C8",
        Oscr: "\u{1D4AA}",
        oscr: "\u2134",
        Oslash: "\xD8",
        oslash: "\xF8",
        osol: "\u2298",
        Otilde: "\xD5",
        otilde: "\xF5",
        Otimes: "\u2A37",
        otimes: "\u2297",
        otimesas: "\u2A36",
        Ouml: "\xD6",
        ouml: "\xF6",
        ovbar: "\u233D",
        OverBar: "\u203E",
        OverBrace: "\u23DE",
        OverBracket: "\u23B4",
        OverParenthesis: "\u23DC",
        par: "\u2225",
        para: "\xB6",
        parallel: "\u2225",
        parsim: "\u2AF3",
        parsl: "\u2AFD",
        part: "\u2202",
        PartialD: "\u2202",
        Pcy: "\u041F",
        pcy: "\u043F",
        percnt: "%",
        period: ".",
        permil: "\u2030",
        perp: "\u22A5",
        pertenk: "\u2031",
        Pfr: "\u{1D513}",
        pfr: "\u{1D52D}",
        Phi: "\u03A6",
        phi: "\u03C6",
        phiv: "\u03D5",
        phmmat: "\u2133",
        phone: "\u260E",
        Pi: "\u03A0",
        pi: "\u03C0",
        pitchfork: "\u22D4",
        piv: "\u03D6",
        planck: "\u210F",
        planckh: "\u210E",
        plankv: "\u210F",
        plus: "+",
        plusacir: "\u2A23",
        plusb: "\u229E",
        pluscir: "\u2A22",
        plusdo: "\u2214",
        plusdu: "\u2A25",
        pluse: "\u2A72",
        PlusMinus: "\xB1",
        plusmn: "\xB1",
        plussim: "\u2A26",
        plustwo: "\u2A27",
        pm: "\xB1",
        Poincareplane: "\u210C",
        pointint: "\u2A15",
        Popf: "\u2119",
        popf: "\u{1D561}",
        pound: "\xA3",
        Pr: "\u2ABB",
        pr: "\u227A",
        prap: "\u2AB7",
        prcue: "\u227C",
        prE: "\u2AB3",
        pre: "\u2AAF",
        prec: "\u227A",
        precapprox: "\u2AB7",
        preccurlyeq: "\u227C",
        Precedes: "\u227A",
        PrecedesEqual: "\u2AAF",
        PrecedesSlantEqual: "\u227C",
        PrecedesTilde: "\u227E",
        preceq: "\u2AAF",
        precnapprox: "\u2AB9",
        precneqq: "\u2AB5",
        precnsim: "\u22E8",
        precsim: "\u227E",
        Prime: "\u2033",
        prime: "\u2032",
        primes: "\u2119",
        prnap: "\u2AB9",
        prnE: "\u2AB5",
        prnsim: "\u22E8",
        prod: "\u220F",
        Product: "\u220F",
        profalar: "\u232E",
        profline: "\u2312",
        profsurf: "\u2313",
        prop: "\u221D",
        Proportion: "\u2237",
        Proportional: "\u221D",
        propto: "\u221D",
        prsim: "\u227E",
        prurel: "\u22B0",
        Pscr: "\u{1D4AB}",
        pscr: "\u{1D4C5}",
        Psi: "\u03A8",
        psi: "\u03C8",
        puncsp: "\u2008",
        Qfr: "\u{1D514}",
        qfr: "\u{1D52E}",
        qint: "\u2A0C",
        Qopf: "\u211A",
        qopf: "\u{1D562}",
        qprime: "\u2057",
        Qscr: "\u{1D4AC}",
        qscr: "\u{1D4C6}",
        quaternions: "\u210D",
        quatint: "\u2A16",
        quest: "?",
        questeq: "\u225F",
        QUOT: '"',
        quot: '"',
        rAarr: "\u21DB",
        race: "\u223D\u0331",
        Racute: "\u0154",
        racute: "\u0155",
        radic: "\u221A",
        raemptyv: "\u29B3",
        Rang: "\u27EB",
        rang: "\u27E9",
        rangd: "\u2992",
        range: "\u29A5",
        rangle: "\u27E9",
        raquo: "\xBB",
        Rarr: "\u21A0",
        rArr: "\u21D2",
        rarr: "\u2192",
        rarrap: "\u2975",
        rarrb: "\u21E5",
        rarrbfs: "\u2920",
        rarrc: "\u2933",
        rarrfs: "\u291E",
        rarrhk: "\u21AA",
        rarrlp: "\u21AC",
        rarrpl: "\u2945",
        rarrsim: "\u2974",
        Rarrtl: "\u2916",
        rarrtl: "\u21A3",
        rarrw: "\u219D",
        rAtail: "\u291C",
        ratail: "\u291A",
        ratio: "\u2236",
        rationals: "\u211A",
        RBarr: "\u2910",
        rBarr: "\u290F",
        rbarr: "\u290D",
        rbbrk: "\u2773",
        rbrace: "}",
        rbrack: "]",
        rbrke: "\u298C",
        rbrksld: "\u298E",
        rbrkslu: "\u2990",
        Rcaron: "\u0158",
        rcaron: "\u0159",
        Rcedil: "\u0156",
        rcedil: "\u0157",
        rceil: "\u2309",
        rcub: "}",
        Rcy: "\u0420",
        rcy: "\u0440",
        rdca: "\u2937",
        rdldhar: "\u2969",
        rdquo: "\u201D",
        rdquor: "\u201D",
        rdsh: "\u21B3",
        Re: "\u211C",
        real: "\u211C",
        realine: "\u211B",
        realpart: "\u211C",
        reals: "\u211D",
        rect: "\u25AD",
        REG: "\xAE",
        reg: "\xAE",
        ReverseElement: "\u220B",
        ReverseEquilibrium: "\u21CB",
        ReverseUpEquilibrium: "\u296F",
        rfisht: "\u297D",
        rfloor: "\u230B",
        Rfr: "\u211C",
        rfr: "\u{1D52F}",
        rHar: "\u2964",
        rhard: "\u21C1",
        rharu: "\u21C0",
        rharul: "\u296C",
        Rho: "\u03A1",
        rho: "\u03C1",
        rhov: "\u03F1",
        RightAngleBracket: "\u27E9",
        RightArrow: "\u2192",
        Rightarrow: "\u21D2",
        rightarrow: "\u2192",
        RightArrowBar: "\u21E5",
        RightArrowLeftArrow: "\u21C4",
        rightarrowtail: "\u21A3",
        RightCeiling: "\u2309",
        RightDoubleBracket: "\u27E7",
        RightDownTeeVector: "\u295D",
        RightDownVector: "\u21C2",
        RightDownVectorBar: "\u2955",
        RightFloor: "\u230B",
        rightharpoondown: "\u21C1",
        rightharpoonup: "\u21C0",
        rightleftarrows: "\u21C4",
        rightleftharpoons: "\u21CC",
        rightrightarrows: "\u21C9",
        rightsquigarrow: "\u219D",
        RightTee: "\u22A2",
        RightTeeArrow: "\u21A6",
        RightTeeVector: "\u295B",
        rightthreetimes: "\u22CC",
        RightTriangle: "\u22B3",
        RightTriangleBar: "\u29D0",
        RightTriangleEqual: "\u22B5",
        RightUpDownVector: "\u294F",
        RightUpTeeVector: "\u295C",
        RightUpVector: "\u21BE",
        RightUpVectorBar: "\u2954",
        RightVector: "\u21C0",
        RightVectorBar: "\u2953",
        ring: "\u02DA",
        risingdotseq: "\u2253",
        rlarr: "\u21C4",
        rlhar: "\u21CC",
        rlm: "\u200F",
        rmoust: "\u23B1",
        rmoustache: "\u23B1",
        rnmid: "\u2AEE",
        roang: "\u27ED",
        roarr: "\u21FE",
        robrk: "\u27E7",
        ropar: "\u2986",
        Ropf: "\u211D",
        ropf: "\u{1D563}",
        roplus: "\u2A2E",
        rotimes: "\u2A35",
        RoundImplies: "\u2970",
        rpar: ")",
        rpargt: "\u2994",
        rppolint: "\u2A12",
        rrarr: "\u21C9",
        Rrightarrow: "\u21DB",
        rsaquo: "\u203A",
        Rscr: "\u211B",
        rscr: "\u{1D4C7}",
        Rsh: "\u21B1",
        rsh: "\u21B1",
        rsqb: "]",
        rsquo: "\u2019",
        rsquor: "\u2019",
        rthree: "\u22CC",
        rtimes: "\u22CA",
        rtri: "\u25B9",
        rtrie: "\u22B5",
        rtrif: "\u25B8",
        rtriltri: "\u29CE",
        RuleDelayed: "\u29F4",
        ruluhar: "\u2968",
        rx: "\u211E",
        Sacute: "\u015A",
        sacute: "\u015B",
        sbquo: "\u201A",
        Sc: "\u2ABC",
        sc: "\u227B",
        scap: "\u2AB8",
        Scaron: "\u0160",
        scaron: "\u0161",
        sccue: "\u227D",
        scE: "\u2AB4",
        sce: "\u2AB0",
        Scedil: "\u015E",
        scedil: "\u015F",
        Scirc: "\u015C",
        scirc: "\u015D",
        scnap: "\u2ABA",
        scnE: "\u2AB6",
        scnsim: "\u22E9",
        scpolint: "\u2A13",
        scsim: "\u227F",
        Scy: "\u0421",
        scy: "\u0441",
        sdot: "\u22C5",
        sdotb: "\u22A1",
        sdote: "\u2A66",
        searhk: "\u2925",
        seArr: "\u21D8",
        searr: "\u2198",
        searrow: "\u2198",
        sect: "\xA7",
        semi: ";",
        seswar: "\u2929",
        setminus: "\u2216",
        setmn: "\u2216",
        sext: "\u2736",
        Sfr: "\u{1D516}",
        sfr: "\u{1D530}",
        sfrown: "\u2322",
        sharp: "\u266F",
        SHCHcy: "\u0429",
        shchcy: "\u0449",
        SHcy: "\u0428",
        shcy: "\u0448",
        ShortDownArrow: "\u2193",
        ShortLeftArrow: "\u2190",
        shortmid: "\u2223",
        shortparallel: "\u2225",
        ShortRightArrow: "\u2192",
        ShortUpArrow: "\u2191",
        shy: "\xAD",
        Sigma: "\u03A3",
        sigma: "\u03C3",
        sigmaf: "\u03C2",
        sigmav: "\u03C2",
        sim: "\u223C",
        simdot: "\u2A6A",
        sime: "\u2243",
        simeq: "\u2243",
        simg: "\u2A9E",
        simgE: "\u2AA0",
        siml: "\u2A9D",
        simlE: "\u2A9F",
        simne: "\u2246",
        simplus: "\u2A24",
        simrarr: "\u2972",
        slarr: "\u2190",
        SmallCircle: "\u2218",
        smallsetminus: "\u2216",
        smashp: "\u2A33",
        smeparsl: "\u29E4",
        smid: "\u2223",
        smile: "\u2323",
        smt: "\u2AAA",
        smte: "\u2AAC",
        smtes: "\u2AAC\uFE00",
        SOFTcy: "\u042C",
        softcy: "\u044C",
        sol: "/",
        solb: "\u29C4",
        solbar: "\u233F",
        Sopf: "\u{1D54A}",
        sopf: "\u{1D564}",
        spades: "\u2660",
        spadesuit: "\u2660",
        spar: "\u2225",
        sqcap: "\u2293",
        sqcaps: "\u2293\uFE00",
        sqcup: "\u2294",
        sqcups: "\u2294\uFE00",
        Sqrt: "\u221A",
        sqsub: "\u228F",
        sqsube: "\u2291",
        sqsubset: "\u228F",
        sqsubseteq: "\u2291",
        sqsup: "\u2290",
        sqsupe: "\u2292",
        sqsupset: "\u2290",
        sqsupseteq: "\u2292",
        squ: "\u25A1",
        Square: "\u25A1",
        square: "\u25A1",
        SquareIntersection: "\u2293",
        SquareSubset: "\u228F",
        SquareSubsetEqual: "\u2291",
        SquareSuperset: "\u2290",
        SquareSupersetEqual: "\u2292",
        SquareUnion: "\u2294",
        squarf: "\u25AA",
        squf: "\u25AA",
        srarr: "\u2192",
        Sscr: "\u{1D4AE}",
        sscr: "\u{1D4C8}",
        ssetmn: "\u2216",
        ssmile: "\u2323",
        sstarf: "\u22C6",
        Star: "\u22C6",
        star: "\u2606",
        starf: "\u2605",
        straightepsilon: "\u03F5",
        straightphi: "\u03D5",
        strns: "\xAF",
        Sub: "\u22D0",
        sub: "\u2282",
        subdot: "\u2ABD",
        subE: "\u2AC5",
        sube: "\u2286",
        subedot: "\u2AC3",
        submult: "\u2AC1",
        subnE: "\u2ACB",
        subne: "\u228A",
        subplus: "\u2ABF",
        subrarr: "\u2979",
        Subset: "\u22D0",
        subset: "\u2282",
        subseteq: "\u2286",
        subseteqq: "\u2AC5",
        SubsetEqual: "\u2286",
        subsetneq: "\u228A",
        subsetneqq: "\u2ACB",
        subsim: "\u2AC7",
        subsub: "\u2AD5",
        subsup: "\u2AD3",
        succ: "\u227B",
        succapprox: "\u2AB8",
        succcurlyeq: "\u227D",
        Succeeds: "\u227B",
        SucceedsEqual: "\u2AB0",
        SucceedsSlantEqual: "\u227D",
        SucceedsTilde: "\u227F",
        succeq: "\u2AB0",
        succnapprox: "\u2ABA",
        succneqq: "\u2AB6",
        succnsim: "\u22E9",
        succsim: "\u227F",
        SuchThat: "\u220B",
        Sum: "\u2211",
        sum: "\u2211",
        sung: "\u266A",
        Sup: "\u22D1",
        sup: "\u2283",
        sup1: "\xB9",
        sup2: "\xB2",
        sup3: "\xB3",
        supdot: "\u2ABE",
        supdsub: "\u2AD8",
        supE: "\u2AC6",
        supe: "\u2287",
        supedot: "\u2AC4",
        Superset: "\u2283",
        SupersetEqual: "\u2287",
        suphsol: "\u27C9",
        suphsub: "\u2AD7",
        suplarr: "\u297B",
        supmult: "\u2AC2",
        supnE: "\u2ACC",
        supne: "\u228B",
        supplus: "\u2AC0",
        Supset: "\u22D1",
        supset: "\u2283",
        supseteq: "\u2287",
        supseteqq: "\u2AC6",
        supsetneq: "\u228B",
        supsetneqq: "\u2ACC",
        supsim: "\u2AC8",
        supsub: "\u2AD4",
        supsup: "\u2AD6",
        swarhk: "\u2926",
        swArr: "\u21D9",
        swarr: "\u2199",
        swarrow: "\u2199",
        swnwar: "\u292A",
        szlig: "\xDF",
        Tab: "	",
        target: "\u2316",
        Tau: "\u03A4",
        tau: "\u03C4",
        tbrk: "\u23B4",
        Tcaron: "\u0164",
        tcaron: "\u0165",
        Tcedil: "\u0162",
        tcedil: "\u0163",
        Tcy: "\u0422",
        tcy: "\u0442",
        tdot: "\u20DB",
        telrec: "\u2315",
        Tfr: "\u{1D517}",
        tfr: "\u{1D531}",
        there4: "\u2234",
        Therefore: "\u2234",
        therefore: "\u2234",
        Theta: "\u0398",
        theta: "\u03B8",
        thetasym: "\u03D1",
        thetav: "\u03D1",
        thickapprox: "\u2248",
        thicksim: "\u223C",
        ThickSpace: "\u205F\u200A",
        thinsp: "\u2009",
        ThinSpace: "\u2009",
        thkap: "\u2248",
        thksim: "\u223C",
        THORN: "\xDE",
        thorn: "\xFE",
        Tilde: "\u223C",
        tilde: "\u02DC",
        TildeEqual: "\u2243",
        TildeFullEqual: "\u2245",
        TildeTilde: "\u2248",
        times: "\xD7",
        timesb: "\u22A0",
        timesbar: "\u2A31",
        timesd: "\u2A30",
        tint: "\u222D",
        toea: "\u2928",
        top: "\u22A4",
        topbot: "\u2336",
        topcir: "\u2AF1",
        Topf: "\u{1D54B}",
        topf: "\u{1D565}",
        topfork: "\u2ADA",
        tosa: "\u2929",
        tprime: "\u2034",
        TRADE: "\u2122",
        trade: "\u2122",
        triangle: "\u25B5",
        triangledown: "\u25BF",
        triangleleft: "\u25C3",
        trianglelefteq: "\u22B4",
        triangleq: "\u225C",
        triangleright: "\u25B9",
        trianglerighteq: "\u22B5",
        tridot: "\u25EC",
        trie: "\u225C",
        triminus: "\u2A3A",
        TripleDot: "\u20DB",
        triplus: "\u2A39",
        trisb: "\u29CD",
        tritime: "\u2A3B",
        trpezium: "\u23E2",
        Tscr: "\u{1D4AF}",
        tscr: "\u{1D4C9}",
        TScy: "\u0426",
        tscy: "\u0446",
        TSHcy: "\u040B",
        tshcy: "\u045B",
        Tstrok: "\u0166",
        tstrok: "\u0167",
        twixt: "\u226C",
        twoheadleftarrow: "\u219E",
        twoheadrightarrow: "\u21A0",
        Uacute: "\xDA",
        uacute: "\xFA",
        Uarr: "\u219F",
        uArr: "\u21D1",
        uarr: "\u2191",
        Uarrocir: "\u2949",
        Ubrcy: "\u040E",
        ubrcy: "\u045E",
        Ubreve: "\u016C",
        ubreve: "\u016D",
        Ucirc: "\xDB",
        ucirc: "\xFB",
        Ucy: "\u0423",
        ucy: "\u0443",
        udarr: "\u21C5",
        Udblac: "\u0170",
        udblac: "\u0171",
        udhar: "\u296E",
        ufisht: "\u297E",
        Ufr: "\u{1D518}",
        ufr: "\u{1D532}",
        Ugrave: "\xD9",
        ugrave: "\xF9",
        uHar: "\u2963",
        uharl: "\u21BF",
        uharr: "\u21BE",
        uhblk: "\u2580",
        ulcorn: "\u231C",
        ulcorner: "\u231C",
        ulcrop: "\u230F",
        ultri: "\u25F8",
        Umacr: "\u016A",
        umacr: "\u016B",
        uml: "\xA8",
        UnderBar: "_",
        UnderBrace: "\u23DF",
        UnderBracket: "\u23B5",
        UnderParenthesis: "\u23DD",
        Union: "\u22C3",
        UnionPlus: "\u228E",
        Uogon: "\u0172",
        uogon: "\u0173",
        Uopf: "\u{1D54C}",
        uopf: "\u{1D566}",
        UpArrow: "\u2191",
        Uparrow: "\u21D1",
        uparrow: "\u2191",
        UpArrowBar: "\u2912",
        UpArrowDownArrow: "\u21C5",
        UpDownArrow: "\u2195",
        Updownarrow: "\u21D5",
        updownarrow: "\u2195",
        UpEquilibrium: "\u296E",
        upharpoonleft: "\u21BF",
        upharpoonright: "\u21BE",
        uplus: "\u228E",
        UpperLeftArrow: "\u2196",
        UpperRightArrow: "\u2197",
        Upsi: "\u03D2",
        upsi: "\u03C5",
        upsih: "\u03D2",
        Upsilon: "\u03A5",
        upsilon: "\u03C5",
        UpTee: "\u22A5",
        UpTeeArrow: "\u21A5",
        upuparrows: "\u21C8",
        urcorn: "\u231D",
        urcorner: "\u231D",
        urcrop: "\u230E",
        Uring: "\u016E",
        uring: "\u016F",
        urtri: "\u25F9",
        Uscr: "\u{1D4B0}",
        uscr: "\u{1D4CA}",
        utdot: "\u22F0",
        Utilde: "\u0168",
        utilde: "\u0169",
        utri: "\u25B5",
        utrif: "\u25B4",
        uuarr: "\u21C8",
        Uuml: "\xDC",
        uuml: "\xFC",
        uwangle: "\u29A7",
        vangrt: "\u299C",
        varepsilon: "\u03F5",
        varkappa: "\u03F0",
        varnothing: "\u2205",
        varphi: "\u03D5",
        varpi: "\u03D6",
        varpropto: "\u221D",
        vArr: "\u21D5",
        varr: "\u2195",
        varrho: "\u03F1",
        varsigma: "\u03C2",
        varsubsetneq: "\u228A\uFE00",
        varsubsetneqq: "\u2ACB\uFE00",
        varsupsetneq: "\u228B\uFE00",
        varsupsetneqq: "\u2ACC\uFE00",
        vartheta: "\u03D1",
        vartriangleleft: "\u22B2",
        vartriangleright: "\u22B3",
        Vbar: "\u2AEB",
        vBar: "\u2AE8",
        vBarv: "\u2AE9",
        Vcy: "\u0412",
        vcy: "\u0432",
        VDash: "\u22AB",
        Vdash: "\u22A9",
        vDash: "\u22A8",
        vdash: "\u22A2",
        Vdashl: "\u2AE6",
        Vee: "\u22C1",
        vee: "\u2228",
        veebar: "\u22BB",
        veeeq: "\u225A",
        vellip: "\u22EE",
        Verbar: "\u2016",
        verbar: "|",
        Vert: "\u2016",
        vert: "|",
        VerticalBar: "\u2223",
        VerticalLine: "|",
        VerticalSeparator: "\u2758",
        VerticalTilde: "\u2240",
        VeryThinSpace: "\u200A",
        Vfr: "\u{1D519}",
        vfr: "\u{1D533}",
        vltri: "\u22B2",
        vnsub: "\u2282\u20D2",
        vnsup: "\u2283\u20D2",
        Vopf: "\u{1D54D}",
        vopf: "\u{1D567}",
        vprop: "\u221D",
        vrtri: "\u22B3",
        Vscr: "\u{1D4B1}",
        vscr: "\u{1D4CB}",
        vsubnE: "\u2ACB\uFE00",
        vsubne: "\u228A\uFE00",
        vsupnE: "\u2ACC\uFE00",
        vsupne: "\u228B\uFE00",
        Vvdash: "\u22AA",
        vzigzag: "\u299A",
        Wcirc: "\u0174",
        wcirc: "\u0175",
        wedbar: "\u2A5F",
        Wedge: "\u22C0",
        wedge: "\u2227",
        wedgeq: "\u2259",
        weierp: "\u2118",
        Wfr: "\u{1D51A}",
        wfr: "\u{1D534}",
        Wopf: "\u{1D54E}",
        wopf: "\u{1D568}",
        wp: "\u2118",
        wr: "\u2240",
        wreath: "\u2240",
        Wscr: "\u{1D4B2}",
        wscr: "\u{1D4CC}",
        xcap: "\u22C2",
        xcirc: "\u25EF",
        xcup: "\u22C3",
        xdtri: "\u25BD",
        Xfr: "\u{1D51B}",
        xfr: "\u{1D535}",
        xhArr: "\u27FA",
        xharr: "\u27F7",
        Xi: "\u039E",
        xi: "\u03BE",
        xlArr: "\u27F8",
        xlarr: "\u27F5",
        xmap: "\u27FC",
        xnis: "\u22FB",
        xodot: "\u2A00",
        Xopf: "\u{1D54F}",
        xopf: "\u{1D569}",
        xoplus: "\u2A01",
        xotime: "\u2A02",
        xrArr: "\u27F9",
        xrarr: "\u27F6",
        Xscr: "\u{1D4B3}",
        xscr: "\u{1D4CD}",
        xsqcup: "\u2A06",
        xuplus: "\u2A04",
        xutri: "\u25B3",
        xvee: "\u22C1",
        xwedge: "\u22C0",
        Yacute: "\xDD",
        yacute: "\xFD",
        YAcy: "\u042F",
        yacy: "\u044F",
        Ycirc: "\u0176",
        ycirc: "\u0177",
        Ycy: "\u042B",
        ycy: "\u044B",
        yen: "\xA5",
        Yfr: "\u{1D51C}",
        yfr: "\u{1D536}",
        YIcy: "\u0407",
        yicy: "\u0457",
        Yopf: "\u{1D550}",
        yopf: "\u{1D56A}",
        Yscr: "\u{1D4B4}",
        yscr: "\u{1D4CE}",
        YUcy: "\u042E",
        yucy: "\u044E",
        Yuml: "\u0178",
        yuml: "\xFF",
        Zacute: "\u0179",
        zacute: "\u017A",
        Zcaron: "\u017D",
        zcaron: "\u017E",
        Zcy: "\u0417",
        zcy: "\u0437",
        Zdot: "\u017B",
        zdot: "\u017C",
        zeetrf: "\u2128",
        ZeroWidthSpace: "\u200B",
        Zeta: "\u0396",
        zeta: "\u03B6",
        Zfr: "\u2128",
        zfr: "\u{1D537}",
        ZHcy: "\u0416",
        zhcy: "\u0436",
        zigrarr: "\u21DD",
        Zopf: "\u2124",
        zopf: "\u{1D56B}",
        Zscr: "\u{1D4B5}",
        zscr: "\u{1D4CF}",
        zwj: "\u200D",
        zwnj: "\u200C"
      });
      exports.entityMap = exports.HTML_ENTITIES;
    }
  });

  // node_modules/@xmldom/xmldom/lib/sax.js
  var require_sax = __commonJS({
    "node_modules/@xmldom/xmldom/lib/sax.js"(exports) {
      var NAMESPACE = require_conventions().NAMESPACE;
      var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var nameChar = new RegExp("[\\-\\.0-9" + nameStartChar.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
      var tagNamePattern = new RegExp("^" + nameStartChar.source + nameChar.source + "*(?::" + nameStartChar.source + nameChar.source + "*)?$");
      var S_TAG = 0;
      var S_ATTR = 1;
      var S_ATTR_SPACE = 2;
      var S_EQ = 3;
      var S_ATTR_NOQUOT_VALUE = 4;
      var S_ATTR_END = 5;
      var S_TAG_SPACE = 6;
      var S_TAG_CLOSE = 7;
      function ParseError(message, locator) {
        this.message = message;
        this.locator = locator;
        if (Error.captureStackTrace)
          Error.captureStackTrace(this, ParseError);
      }
      ParseError.prototype = new Error();
      ParseError.prototype.name = ParseError.name;
      function XMLReader() {
      }
      XMLReader.prototype = {
        parse: function(source, defaultNSMap, entityMap) {
          var domBuilder = this.domBuilder;
          domBuilder.startDocument();
          _copy(defaultNSMap, defaultNSMap = {});
          parse(
            source,
            defaultNSMap,
            entityMap,
            domBuilder,
            this.errorHandler
          );
          domBuilder.endDocument();
        }
      };
      function parse(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
        function fixedFromCharCode(code) {
          if (code > 65535) {
            code -= 65536;
            var surrogate1 = 55296 + (code >> 10), surrogate2 = 56320 + (code & 1023);
            return String.fromCharCode(surrogate1, surrogate2);
          } else {
            return String.fromCharCode(code);
          }
        }
        function entityReplacer(a2) {
          var k = a2.slice(1, -1);
          if (Object.hasOwnProperty.call(entityMap, k)) {
            return entityMap[k];
          } else if (k.charAt(0) === "#") {
            return fixedFromCharCode(parseInt(k.substr(1).replace("x", "0x")));
          } else {
            errorHandler.error("entity not found:" + a2);
            return a2;
          }
        }
        function appendText(end2) {
          if (end2 > start) {
            var xt = source.substring(start, end2).replace(/&#?\w+;/g, entityReplacer);
            locator && position(start);
            domBuilder.characters(xt, 0, end2 - start);
            start = end2;
          }
        }
        function position(p, m) {
          while (p >= lineEnd && (m = linePattern.exec(source))) {
            lineStart = m.index;
            lineEnd = lineStart + m[0].length;
            locator.lineNumber++;
          }
          locator.columnNumber = p - lineStart + 1;
        }
        var lineStart = 0;
        var lineEnd = 0;
        var linePattern = /.*(?:\r\n?|\n)|.*$/g;
        var locator = domBuilder.locator;
        var parseStack = [{ currentNSMap: defaultNSMapCopy }];
        var closeMap = {};
        var start = 0;
        while (true) {
          try {
            var tagStart = source.indexOf("<", start);
            if (tagStart < 0) {
              if (!source.substr(start).match(/^\s*$/)) {
                var doc = domBuilder.doc;
                var text = doc.createTextNode(source.substr(start));
                doc.appendChild(text);
                domBuilder.currentElement = text;
              }
              return;
            }
            if (tagStart > start) {
              appendText(tagStart);
            }
            switch (source.charAt(tagStart + 1)) {
              case "/":
                var end = source.indexOf(">", tagStart + 3);
                var tagName = source.substring(tagStart + 2, end).replace(/[ \t\n\r]+$/g, "");
                var config = parseStack.pop();
                if (end < 0) {
                  tagName = source.substring(tagStart + 2).replace(/[\s<].*/, "");
                  errorHandler.error("end tag name: " + tagName + " is not complete:" + config.tagName);
                  end = tagStart + 1 + tagName.length;
                } else if (tagName.match(/\s</)) {
                  tagName = tagName.replace(/[\s<].*/, "");
                  errorHandler.error("end tag name: " + tagName + " maybe not complete");
                  end = tagStart + 1 + tagName.length;
                }
                var localNSMap = config.localNSMap;
                var endMatch = config.tagName == tagName;
                var endIgnoreCaseMach = endMatch || config.tagName && config.tagName.toLowerCase() == tagName.toLowerCase();
                if (endIgnoreCaseMach) {
                  domBuilder.endElement(config.uri, config.localName, tagName);
                  if (localNSMap) {
                    for (var prefix in localNSMap) {
                      if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
                        domBuilder.endPrefixMapping(prefix);
                      }
                    }
                  }
                  if (!endMatch) {
                    errorHandler.fatalError("end tag name: " + tagName + " is not match the current start tagName:" + config.tagName);
                  }
                } else {
                  parseStack.push(config);
                }
                end++;
                break;
              case "?":
                locator && position(tagStart);
                end = parseInstruction(source, tagStart, domBuilder);
                break;
              case "!":
                locator && position(tagStart);
                end = parseDCC(source, tagStart, domBuilder, errorHandler);
                break;
              default:
                locator && position(tagStart);
                var el = new ElementAttributes();
                var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
                var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler);
                var len = el.length;
                if (!el.closed && fixSelfClosed(source, end, el.tagName, closeMap)) {
                  el.closed = true;
                  if (!entityMap.nbsp) {
                    errorHandler.warning("unclosed xml attribute");
                  }
                }
                if (locator && len) {
                  var locator2 = copyLocator(locator, {});
                  for (var i = 0; i < len; i++) {
                    var a = el[i];
                    position(a.offset);
                    a.locator = copyLocator(locator, {});
                  }
                  domBuilder.locator = locator2;
                  if (appendElement(el, domBuilder, currentNSMap)) {
                    parseStack.push(el);
                  }
                  domBuilder.locator = locator;
                } else {
                  if (appendElement(el, domBuilder, currentNSMap)) {
                    parseStack.push(el);
                  }
                }
                if (NAMESPACE.isHTML(el.uri) && !el.closed) {
                  end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
                } else {
                  end++;
                }
            }
          } catch (e) {
            if (e instanceof ParseError) {
              throw e;
            }
            errorHandler.error("element parse error: " + e);
            end = -1;
          }
          if (end > start) {
            start = end;
          } else {
            appendText(Math.max(tagStart, start) + 1);
          }
        }
      }
      function copyLocator(f, t) {
        t.lineNumber = f.lineNumber;
        t.columnNumber = f.columnNumber;
        return t;
      }
      function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler) {
        function addAttribute(qname, value2, startIndex) {
          if (el.attributeNames.hasOwnProperty(qname)) {
            errorHandler.fatalError("Attribute " + qname + " redefined");
          }
          el.addValue(
            qname,
            value2.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, entityReplacer),
            startIndex
          );
        }
        var attrName;
        var value;
        var p = ++start;
        var s = S_TAG;
        while (true) {
          var c = source.charAt(p);
          switch (c) {
            case "=":
              if (s === S_ATTR) {
                attrName = source.slice(start, p);
                s = S_EQ;
              } else if (s === S_ATTR_SPACE) {
                s = S_EQ;
              } else {
                throw new Error("attribute equal must after attrName");
              }
              break;
            case "'":
            case '"':
              if (s === S_EQ || s === S_ATTR) {
                if (s === S_ATTR) {
                  errorHandler.warning('attribute value must after "="');
                  attrName = source.slice(start, p);
                }
                start = p + 1;
                p = source.indexOf(c, start);
                if (p > 0) {
                  value = source.slice(start, p);
                  addAttribute(attrName, value, start - 1);
                  s = S_ATTR_END;
                } else {
                  throw new Error("attribute value no end '" + c + "' match");
                }
              } else if (s == S_ATTR_NOQUOT_VALUE) {
                value = source.slice(start, p);
                addAttribute(attrName, value, start);
                errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ")!!");
                start = p + 1;
                s = S_ATTR_END;
              } else {
                throw new Error('attribute value must after "="');
              }
              break;
            case "/":
              switch (s) {
                case S_TAG:
                  el.setTagName(source.slice(start, p));
                case S_ATTR_END:
                case S_TAG_SPACE:
                case S_TAG_CLOSE:
                  s = S_TAG_CLOSE;
                  el.closed = true;
                case S_ATTR_NOQUOT_VALUE:
                case S_ATTR:
                  break;
                case S_ATTR_SPACE:
                  el.closed = true;
                  break;
                default:
                  throw new Error("attribute invalid close char('/')");
              }
              break;
            case "":
              errorHandler.error("unexpected end of input");
              if (s == S_TAG) {
                el.setTagName(source.slice(start, p));
              }
              return p;
            case ">":
              switch (s) {
                case S_TAG:
                  el.setTagName(source.slice(start, p));
                case S_ATTR_END:
                case S_TAG_SPACE:
                case S_TAG_CLOSE:
                  break;
                case S_ATTR_NOQUOT_VALUE:
                case S_ATTR:
                  value = source.slice(start, p);
                  if (value.slice(-1) === "/") {
                    el.closed = true;
                    value = value.slice(0, -1);
                  }
                case S_ATTR_SPACE:
                  if (s === S_ATTR_SPACE) {
                    value = attrName;
                  }
                  if (s == S_ATTR_NOQUOT_VALUE) {
                    errorHandler.warning('attribute "' + value + '" missed quot(")!');
                    addAttribute(attrName, value, start);
                  } else {
                    if (!NAMESPACE.isHTML(currentNSMap[""]) || !value.match(/^(?:disabled|checked|selected)$/i)) {
                      errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
                    }
                    addAttribute(value, value, start);
                  }
                  break;
                case S_EQ:
                  throw new Error("attribute value missed!!");
              }
              return p;
            case "\x80":
              c = " ";
            default:
              if (c <= " ") {
                switch (s) {
                  case S_TAG:
                    el.setTagName(source.slice(start, p));
                    s = S_TAG_SPACE;
                    break;
                  case S_ATTR:
                    attrName = source.slice(start, p);
                    s = S_ATTR_SPACE;
                    break;
                  case S_ATTR_NOQUOT_VALUE:
                    var value = source.slice(start, p);
                    errorHandler.warning('attribute "' + value + '" missed quot(")!!');
                    addAttribute(attrName, value, start);
                  case S_ATTR_END:
                    s = S_TAG_SPACE;
                    break;
                }
              } else {
                switch (s) {
                  case S_ATTR_SPACE:
                    var tagName = el.tagName;
                    if (!NAMESPACE.isHTML(currentNSMap[""]) || !attrName.match(/^(?:disabled|checked|selected)$/i)) {
                      errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
                    }
                    addAttribute(attrName, attrName, start);
                    start = p;
                    s = S_ATTR;
                    break;
                  case S_ATTR_END:
                    errorHandler.warning('attribute space is required"' + attrName + '"!!');
                  case S_TAG_SPACE:
                    s = S_ATTR;
                    start = p;
                    break;
                  case S_EQ:
                    s = S_ATTR_NOQUOT_VALUE;
                    start = p;
                    break;
                  case S_TAG_CLOSE:
                    throw new Error("elements closed character '/' and '>' must be connected to");
                }
              }
          }
          p++;
        }
      }
      function appendElement(el, domBuilder, currentNSMap) {
        var tagName = el.tagName;
        var localNSMap = null;
        var i = el.length;
        while (i--) {
          var a = el[i];
          var qName = a.qName;
          var value = a.value;
          var nsp = qName.indexOf(":");
          if (nsp > 0) {
            var prefix = a.prefix = qName.slice(0, nsp);
            var localName = qName.slice(nsp + 1);
            var nsPrefix = prefix === "xmlns" && localName;
          } else {
            localName = qName;
            prefix = null;
            nsPrefix = qName === "xmlns" && "";
          }
          a.localName = localName;
          if (nsPrefix !== false) {
            if (localNSMap == null) {
              localNSMap = {};
              _copy(currentNSMap, currentNSMap = {});
            }
            currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
            a.uri = NAMESPACE.XMLNS;
            domBuilder.startPrefixMapping(nsPrefix, value);
          }
        }
        var i = el.length;
        while (i--) {
          a = el[i];
          var prefix = a.prefix;
          if (prefix) {
            if (prefix === "xml") {
              a.uri = NAMESPACE.XML;
            }
            if (prefix !== "xmlns") {
              a.uri = currentNSMap[prefix || ""];
            }
          }
        }
        var nsp = tagName.indexOf(":");
        if (nsp > 0) {
          prefix = el.prefix = tagName.slice(0, nsp);
          localName = el.localName = tagName.slice(nsp + 1);
        } else {
          prefix = null;
          localName = el.localName = tagName;
        }
        var ns = el.uri = currentNSMap[prefix || ""];
        domBuilder.startElement(ns, localName, tagName, el);
        if (el.closed) {
          domBuilder.endElement(ns, localName, tagName);
          if (localNSMap) {
            for (prefix in localNSMap) {
              if (Object.prototype.hasOwnProperty.call(localNSMap, prefix)) {
                domBuilder.endPrefixMapping(prefix);
              }
            }
          }
        } else {
          el.currentNSMap = currentNSMap;
          el.localNSMap = localNSMap;
          return true;
        }
      }
      function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
        if (/^(?:script|textarea)$/i.test(tagName)) {
          var elEndStart = source.indexOf("</" + tagName + ">", elStartEnd);
          var text = source.substring(elStartEnd + 1, elEndStart);
          if (/[&<]/.test(text)) {
            if (/^script$/i.test(tagName)) {
              domBuilder.characters(text, 0, text.length);
              return elEndStart;
            }
            text = text.replace(/&#?\w+;/g, entityReplacer);
            domBuilder.characters(text, 0, text.length);
            return elEndStart;
          }
        }
        return elStartEnd + 1;
      }
      function fixSelfClosed(source, elStartEnd, tagName, closeMap) {
        var pos = closeMap[tagName];
        if (pos == null) {
          pos = source.lastIndexOf("</" + tagName + ">");
          if (pos < elStartEnd) {
            pos = source.lastIndexOf("</" + tagName);
          }
          closeMap[tagName] = pos;
        }
        return pos < elStartEnd;
      }
      function _copy(source, target) {
        for (var n in source) {
          if (Object.prototype.hasOwnProperty.call(source, n)) {
            target[n] = source[n];
          }
        }
      }
      function parseDCC(source, start, domBuilder, errorHandler) {
        var next = source.charAt(start + 2);
        switch (next) {
          case "-":
            if (source.charAt(start + 3) === "-") {
              var end = source.indexOf("-->", start + 4);
              if (end > start) {
                domBuilder.comment(source, start + 4, end - start - 4);
                return end + 3;
              } else {
                errorHandler.error("Unclosed comment");
                return -1;
              }
            } else {
              return -1;
            }
          default:
            if (source.substr(start + 3, 6) == "CDATA[") {
              var end = source.indexOf("]]>", start + 9);
              domBuilder.startCDATA();
              domBuilder.characters(source, start + 9, end - start - 9);
              domBuilder.endCDATA();
              return end + 3;
            }
            var matchs = split(source, start);
            var len = matchs.length;
            if (len > 1 && /!doctype/i.test(matchs[0][0])) {
              var name2 = matchs[1][0];
              var pubid = false;
              var sysid = false;
              if (len > 3) {
                if (/^public$/i.test(matchs[2][0])) {
                  pubid = matchs[3][0];
                  sysid = len > 4 && matchs[4][0];
                } else if (/^system$/i.test(matchs[2][0])) {
                  sysid = matchs[3][0];
                }
              }
              var lastMatch = matchs[len - 1];
              domBuilder.startDTD(name2, pubid, sysid);
              domBuilder.endDTD();
              return lastMatch.index + lastMatch[0].length;
            }
        }
        return -1;
      }
      function parseInstruction(source, start, domBuilder) {
        var end = source.indexOf("?>", start);
        if (end) {
          var match = source.substring(start, end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
          if (match) {
            var len = match[0].length;
            domBuilder.processingInstruction(match[1], match[2]);
            return end + 2;
          } else {
            return -1;
          }
        }
        return -1;
      }
      function ElementAttributes() {
        this.attributeNames = {};
      }
      ElementAttributes.prototype = {
        setTagName: function(tagName) {
          if (!tagNamePattern.test(tagName)) {
            throw new Error("invalid tagName:" + tagName);
          }
          this.tagName = tagName;
        },
        addValue: function(qName, value, offset) {
          if (!tagNamePattern.test(qName)) {
            throw new Error("invalid attribute:" + qName);
          }
          this.attributeNames[qName] = this.length;
          this[this.length++] = { qName, value, offset };
        },
        length: 0,
        getLocalName: function(i) {
          return this[i].localName;
        },
        getLocator: function(i) {
          return this[i].locator;
        },
        getQName: function(i) {
          return this[i].qName;
        },
        getURI: function(i) {
          return this[i].uri;
        },
        getValue: function(i) {
          return this[i].value;
        }
      };
      function split(source, start) {
        var match;
        var buf = [];
        var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
        reg.lastIndex = start;
        reg.exec(source);
        while (match = reg.exec(source)) {
          buf.push(match);
          if (match[1])
            return buf;
        }
      }
      exports.XMLReader = XMLReader;
      exports.ParseError = ParseError;
    }
  });

  // node_modules/@xmldom/xmldom/lib/dom-parser.js
  var require_dom_parser = __commonJS({
    "node_modules/@xmldom/xmldom/lib/dom-parser.js"(exports) {
      var conventions = require_conventions();
      var dom = require_dom();
      var entities = require_entities();
      var sax = require_sax();
      var DOMImplementation = dom.DOMImplementation;
      var NAMESPACE = conventions.NAMESPACE;
      var ParseError = sax.ParseError;
      var XMLReader = sax.XMLReader;
      function normalizeLineEndings(input) {
        return input.replace(/\r[\n\u0085]/g, "\n").replace(/[\r\u0085\u2028]/g, "\n");
      }
      function DOMParser(options) {
        this.options = options || { locator: {} };
      }
      DOMParser.prototype.parseFromString = function(source, mimeType) {
        var options = this.options;
        var sax2 = new XMLReader();
        var domBuilder = options.domBuilder || new DOMHandler();
        var errorHandler = options.errorHandler;
        var locator = options.locator;
        var defaultNSMap = options.xmlns || {};
        var isHTML = /\/x?html?$/.test(mimeType);
        var entityMap = isHTML ? entities.HTML_ENTITIES : entities.XML_ENTITIES;
        if (locator) {
          domBuilder.setDocumentLocator(locator);
        }
        sax2.errorHandler = buildErrorHandler(errorHandler, domBuilder, locator);
        sax2.domBuilder = options.domBuilder || domBuilder;
        if (isHTML) {
          defaultNSMap[""] = NAMESPACE.HTML;
        }
        defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;
        var normalize = options.normalizeLineEndings || normalizeLineEndings;
        if (source && typeof source === "string") {
          sax2.parse(
            normalize(source),
            defaultNSMap,
            entityMap
          );
        } else {
          sax2.errorHandler.error("invalid doc source");
        }
        return domBuilder.doc;
      };
      function buildErrorHandler(errorImpl, domBuilder, locator) {
        if (!errorImpl) {
          if (domBuilder instanceof DOMHandler) {
            return domBuilder;
          }
          errorImpl = domBuilder;
        }
        var errorHandler = {};
        var isCallback = errorImpl instanceof Function;
        locator = locator || {};
        function build(key) {
          var fn2 = errorImpl[key];
          if (!fn2 && isCallback) {
            fn2 = errorImpl.length == 2 ? function(msg) {
              errorImpl(key, msg);
            } : errorImpl;
          }
          errorHandler[key] = fn2 && function(msg) {
            fn2("[xmldom " + key + "]	" + msg + _locator(locator));
          } || function() {
          };
        }
        build("warning");
        build("error");
        build("fatalError");
        return errorHandler;
      }
      function DOMHandler() {
        this.cdata = false;
      }
      function position(locator, node) {
        node.lineNumber = locator.lineNumber;
        node.columnNumber = locator.columnNumber;
      }
      DOMHandler.prototype = {
        startDocument: function() {
          this.doc = new DOMImplementation().createDocument(null, null, null);
          if (this.locator) {
            this.doc.documentURI = this.locator.systemId;
          }
        },
        startElement: function(namespaceURI, localName, qName, attrs) {
          var doc = this.doc;
          var el = doc.createElementNS(namespaceURI, qName || localName);
          var len = attrs.length;
          appendElement(this, el);
          this.currentElement = el;
          this.locator && position(this.locator, el);
          for (var i = 0; i < len; i++) {
            var namespaceURI = attrs.getURI(i);
            var value = attrs.getValue(i);
            var qName = attrs.getQName(i);
            var attr = doc.createAttributeNS(namespaceURI, qName);
            this.locator && position(attrs.getLocator(i), attr);
            attr.value = attr.nodeValue = value;
            el.setAttributeNode(attr);
          }
        },
        endElement: function(namespaceURI, localName, qName) {
          var current = this.currentElement;
          var tagName = current.tagName;
          this.currentElement = current.parentNode;
        },
        startPrefixMapping: function(prefix, uri) {
        },
        endPrefixMapping: function(prefix) {
        },
        processingInstruction: function(target, data) {
          var ins = this.doc.createProcessingInstruction(target, data);
          this.locator && position(this.locator, ins);
          appendElement(this, ins);
        },
        ignorableWhitespace: function(ch, start, length) {
        },
        characters: function(chars, start, length) {
          chars = _toString.apply(this, arguments);
          if (chars) {
            if (this.cdata) {
              var charNode = this.doc.createCDATASection(chars);
            } else {
              var charNode = this.doc.createTextNode(chars);
            }
            if (this.currentElement) {
              this.currentElement.appendChild(charNode);
            } else if (/^\s*$/.test(chars)) {
              this.doc.appendChild(charNode);
            }
            this.locator && position(this.locator, charNode);
          }
        },
        skippedEntity: function(name2) {
        },
        endDocument: function() {
          this.doc.normalize();
        },
        setDocumentLocator: function(locator) {
          if (this.locator = locator) {
            locator.lineNumber = 0;
          }
        },
        comment: function(chars, start, length) {
          chars = _toString.apply(this, arguments);
          var comm = this.doc.createComment(chars);
          this.locator && position(this.locator, comm);
          appendElement(this, comm);
        },
        startCDATA: function() {
          this.cdata = true;
        },
        endCDATA: function() {
          this.cdata = false;
        },
        startDTD: function(name2, publicId, systemId) {
          var impl = this.doc.implementation;
          if (impl && impl.createDocumentType) {
            var dt = impl.createDocumentType(name2, publicId, systemId);
            this.locator && position(this.locator, dt);
            appendElement(this, dt);
            this.doc.doctype = dt;
          }
        },
        warning: function(error) {
          console.warn("[xmldom warning]	" + error, _locator(this.locator));
        },
        error: function(error) {
          console.error("[xmldom error]	" + error, _locator(this.locator));
        },
        fatalError: function(error) {
          throw new ParseError(error, this.locator);
        }
      };
      function _locator(l) {
        if (l) {
          return "\n@" + (l.systemId || "") + "#[line:" + l.lineNumber + ",col:" + l.columnNumber + "]";
        }
      }
      function _toString(chars, start, length) {
        if (typeof chars == "string") {
          return chars.substr(start, length);
        } else {
          if (chars.length >= start + length || start) {
            return new java.lang.String(chars, start, length) + "";
          }
          return chars;
        }
      }
      "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(key) {
        DOMHandler.prototype[key] = function() {
          return null;
        };
      });
      function appendElement(hander, node) {
        if (!hander.currentElement) {
          hander.doc.appendChild(node);
        } else {
          hander.currentElement.appendChild(node);
        }
      }
      exports.__DOMHandler = DOMHandler;
      exports.normalizeLineEndings = normalizeLineEndings;
      exports.DOMParser = DOMParser;
    }
  });

  // node_modules/@xmldom/xmldom/lib/index.js
  var require_lib = __commonJS({
    "node_modules/@xmldom/xmldom/lib/index.js"(exports) {
      var dom = require_dom();
      exports.DOMImplementation = dom.DOMImplementation;
      exports.XMLSerializer = dom.XMLSerializer;
      exports.DOMParser = require_dom_parser().DOMParser;
    }
  });

  // node_modules/@translate-tools/core/translators/BaseTranslator.js
  var require_BaseTranslator = __commonJS({
    "node_modules/@translate-tools/core/translators/BaseTranslator.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BaseTranslator = void 0;
      var BaseTranslator = function() {
        function BaseTranslator2(options) {
          var _this = this;
          this.options = {};
          this.wrapUrlToCorsProxy = function(url) {
            if (typeof _this.options.corsProxy === "string") {
              return _this.options.corsProxy + url;
            }
            if (typeof _this.options.corsProxy === "function") {
              return _this.options.corsProxy(url);
            }
            return url;
          };
          if (options !== void 0) {
            this.options = options;
          }
        }
        BaseTranslator2.prototype.checkLimitExceeding = function(text) {
          var plainText = Array.isArray(text) ? text.join("") : text;
          var extra = plainText.length - this.getLengthLimit();
          return extra > 0 ? extra : 0;
        };
        BaseTranslator2.translatorName = "UnknownTranslator";
        BaseTranslator2.isRequiredKey = function() {
          return false;
        };
        BaseTranslator2.isSupportedAutoFrom = function() {
          return false;
        };
        BaseTranslator2.getSupportedLanguages = function() {
          return [];
        };
        return BaseTranslator2;
      }();
      exports.BaseTranslator = BaseTranslator;
    }
  });

  // node_modules/@translate-tools/core/translators/GoogleTranslator/token.js
  var require_token = __commonJS({
    "node_modules/@translate-tools/core/translators/GoogleTranslator/token.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getToken = getToken;
      var googleTranslateTKK = "448487.932609646";
      function shiftLeftOrRightThenSumOrXor(num, optString) {
        for (let i = 0; i < optString.length - 2; i += 3) {
          let acc = optString.charAt(i + 2);
          if ("a" <= acc) {
            acc = acc.charCodeAt(0) - 87;
          } else {
            acc = Number(acc);
          }
          if (optString.charAt(i + 1) == "+") {
            acc = num >>> acc;
          } else {
            acc = num << acc;
          }
          if (optString.charAt(i) == "+") {
            num += acc & 4294967295;
          } else {
            num ^= acc;
          }
        }
        return num;
      }
      function transformQuery(query) {
        const bytesArray = [];
        let idx = [];
        for (let i = 0; i < query.length; i++) {
          let charCode = query.charCodeAt(i);
          if (128 > charCode) {
            bytesArray[idx++] = charCode;
          } else {
            if (2048 > charCode) {
              bytesArray[idx++] = charCode >> 6 | 192;
            } else {
              if (55296 == (charCode & 64512) && i + 1 < query.length && 56320 == (query.charCodeAt(i + 1) & 64512)) {
                charCode = 65536 + ((charCode & 1023) << 10) + (query.charCodeAt(++i) & 1023);
                bytesArray[idx++] = charCode >> 18 | 240;
                bytesArray[idx++] = charCode >> 12 & 63 | 128;
              } else {
                bytesArray[idx++] = charCode >> 12 | 224;
              }
              bytesArray[idx++] = charCode >> 6 & 63 | 128;
            }
            bytesArray[idx++] = charCode & 63 | 128;
          }
        }
        return bytesArray;
      }
      function calcHash(query, windowTkk) {
        const tkkSplited = windowTkk.split(".");
        const tkkIndex = Number(tkkSplited[0]) || 0;
        const tkkKey = Number(tkkSplited[1]) || 0;
        const bytesArray = transformQuery(query);
        let encondingRound = tkkIndex;
        for (let i = 0; i < bytesArray.length; i++) {
          encondingRound += bytesArray[i];
          encondingRound = shiftLeftOrRightThenSumOrXor(encondingRound, "+-a^+6");
        }
        encondingRound = shiftLeftOrRightThenSumOrXor(encondingRound, "+-3^+b+-f");
        encondingRound ^= tkkKey;
        if (encondingRound <= 0) {
          encondingRound = (encondingRound & 2147483647) + 2147483648;
        }
        const normalizedResult = encondingRound % 1e6;
        return normalizedResult.toString() + "." + (normalizedResult ^ tkkIndex);
      }
      function getToken(query) {
        return new Promise((res) => res({
          value: calcHash(query, googleTranslateTKK)
        }));
      }
    }
  });

  // node_modules/@translate-tools/core/translators/GoogleTranslator/utils.js
  var require_utils2 = __commonJS({
    "node_modules/@translate-tools/core/translators/GoogleTranslator/utils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.deepExploreArray = deepExploreArray;
      exports.visitArrayItems = void 0;
      function deepExploreArray(obj, depth) {
        var currentDepth = 0;
        var currentObj = obj;
        while (depth > currentDepth) {
          if (!Array.isArray(currentObj)) {
            throw new TypeError("Error while explore array on depth #" + currentDepth);
          }
          currentObj = currentObj[0];
          currentDepth++;
        }
        return currentObj;
      }
      var visitArrayItems = function(arr, visitor) {
        arr.forEach(function(obj) {
          if (Array.isArray(obj)) {
            visitArrayItems(obj, visitor);
          } else {
            visitor(obj);
          }
        });
      };
      exports.visitArrayItems = visitArrayItems;
    }
  });

  // node_modules/@translate-tools/core/translators/GoogleTranslator/index.js
  var require_GoogleTranslator = __commonJS({
    "node_modules/@translate-tools/core/translators/GoogleTranslator/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.supportedLanguages = exports.GoogleTranslatorTokenFree = exports.GoogleTranslator = exports.AbstractGoogleTranslator = void 0;
      var _axios = _interopRequireDefault(require_axios2());
      var _queryString = require_query_string();
      var _xpath = _interopRequireDefault(require_xpath());
      var _xmldom = require_lib();
      var _BaseTranslator = require_BaseTranslator();
      var _token = require_token();
      var _utils = require_utils2();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var __extends = function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __assign = function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      var __awaiter = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = function(thisArg, body) {
        var _ = {
          label: 0,
          sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        }, f, y, t, g;
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (g && (g = 0, op[0] && (_ = 0)), _)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      };
      var __read = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = {
            error
          };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      var fixedLanguagesMap = {
        he: "iw",
        jv: "jw"
      };
      var supportedLanguages2 = ["af", "ak", "am", "ar", "as", "ay", "az", "be", "bg", "bho", "bm", "bn", "bs", "ca", "ceb", "ckb", "co", "cs", "cy", "da", "de", "doi", "dv", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "fi", "fr", "fy", "ga", "gd", "gl", "gn", "gom", "gu", "ha", "haw", "hi", "hmn", "hr", "ht", "hu", "hy", "id", "ig", "ilo", "is", "it", "iw", "ja", "jw", "ka", "kk", "km", "kn", "ko", "kri", "ku", "ky", "la", "lb", "lg", "ln", "lo", "lt", "lus", "lv", "mai", "mg", "mi", "mk", "ml", "mn", "mni-Mtei", "mr", "ms", "mt", "my", "ne", "nl", "no", "nso", "ny", "om", "or", "pa", "pl", "ps", "pt", "qu", "ro", "ru", "rw", "sa", "sd", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "st", "su", "sv", "sw", "ta", "te", "tg", "th", "ti", "tk", "tl", "tr", "ts", "tt", "ug", "uk", "ur", "uz", "vi", "xh", "yi", "yo", "zh-CN", "zh-TW", "zu"];
      exports.supportedLanguages = supportedLanguages2;
      var parseXMLResponse = function(text) {
        var doc;
        try {
          doc = new _xmldom.DOMParser().parseFromString(text);
        } catch (err) {
          console.error(err);
          return null;
        }
        var nodesWithTranslation = _xpath.default.select("//pre/*[not(self::i)]", doc);
        if (nodesWithTranslation.length === 0)
          return null;
        return nodesWithTranslation.map(function(node) {
          var textNodes = _xpath.default.select("descendant-or-self::*/text()", node);
          if (textNodes.length > 1) {
            console.debug("More than one text node found");
          }
          return textNodes.length === 0 ? "" : textNodes.join(" ");
        }).join(" ");
      };
      var AbstractGoogleTranslator = function(_super) {
        __extends(AbstractGoogleTranslator2, _super);
        function AbstractGoogleTranslator2() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        AbstractGoogleTranslator2.isSupportedAutoFrom = function() {
          return true;
        };
        AbstractGoogleTranslator2.getSupportedLanguages = function() {
          return supportedLanguages2;
        };
        AbstractGoogleTranslator2.prototype.getLengthLimit = function() {
          return 4e3;
        };
        AbstractGoogleTranslator2.prototype.getRequestsTimeout = function() {
          return 300;
        };
        AbstractGoogleTranslator2.prototype.getFixedLanguage = function(lang) {
          var _a;
          if (lang === "zh")
            return "zh-CN";
          return (_a = fixedLanguagesMap[lang]) !== null && _a !== void 0 ? _a : lang;
        };
        return AbstractGoogleTranslator2;
      }(_BaseTranslator.BaseTranslator);
      exports.AbstractGoogleTranslator = AbstractGoogleTranslator;
      var GoogleTranslator2 = function(_super) {
        __extends(GoogleTranslator3, _super);
        function GoogleTranslator3() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        GoogleTranslator3.prototype.checkLimitExceeding = function(text) {
          if (Array.isArray(text)) {
            var encodedText = this.encodeForBatch(text).join("");
            var extra = encodedText.length - this.getLengthLimit();
            return extra > 0 ? extra : 0;
          } else {
            var extra = text.length - this.getLengthLimit();
            return extra > 0 ? extra : 0;
          }
        };
        GoogleTranslator3.prototype.translate = function(text, from, to) {
          var _this = this;
          return (0, _token.getToken)(text).then(function(_a) {
            var tk = _a.value;
            var apiPath = "https://translate.google.com/translate_a/single";
            var data = {
              client: "t",
              sl: _this.getFixedLanguage(from),
              tl: _this.getFixedLanguage(to),
              hl: _this.getFixedLanguage(to),
              dt: ["at", "bd", "ex", "ld", "md", "qca", "rw", "rm", "ss", "t"],
              ie: "UTF-8",
              oe: "UTF-8",
              otf: 1,
              ssel: 0,
              tsel: 0,
              kc: 7,
              q: text,
              tk
            };
            var url = apiPath + "?" + (0, _queryString.stringify)(data);
            return _axios.default.get(_this.wrapUrlToCorsProxy(url), {
              withCredentials: false,
              headers: _this.options.headers
            }).then(function(rsp) {
              return rsp.data;
            }).then(function(rsp) {
              if (!(rsp instanceof Array) || !(rsp[0] instanceof Array)) {
                throw new Error("Unexpected response");
              }
              var translatedText = rsp[0].map(function(chunk) {
                return chunk instanceof Array && typeof chunk[0] === "string" ? chunk[0] : "";
              }).join("");
              return translatedText;
            });
          });
        };
        GoogleTranslator3.prototype.translateBatch = function(text, from, to) {
          var _this = this;
          var preparedText = this.encodeForBatch(text);
          return (0, _token.getToken)(preparedText.join("")).then(function(_a) {
            var tk = _a.value;
            var apiPath = "https://translate.googleapis.com/translate_a/t";
            var data = {
              anno: 3,
              client: "te",
              v: "1.0",
              format: "html",
              sl: _this.getFixedLanguage(from),
              tl: _this.getFixedLanguage(to),
              tk
            };
            var url = apiPath + "?" + (0, _queryString.stringify)(data);
            var body = preparedText.map(function(text2) {
              return "&q=".concat(encodeURIComponent(text2));
            }).join("");
            return (0, _axios.default)({
              url: _this.wrapUrlToCorsProxy(url),
              method: "POST",
              withCredentials: false,
              headers: __assign({
                "Content-Type": "application/x-www-form-urlencoded"
              }, _this.options.headers),
              data: body
            }).then(function(rsp) {
              return rsp.data;
            }).then(function(rawResp) {
              try {
                if (!Array.isArray(rawResp)) {
                  throw new Error("Unexpected response");
                }
                var isSingleResponseMode_1 = text.length === 1;
                var result_1 = [];
                (0, _utils.visitArrayItems)(rawResp, function(obj) {
                  if (isSingleResponseMode_1 && result_1.length === 1)
                    return;
                  if (typeof obj !== "string")
                    return;
                  if (isSingleResponseMode_1) {
                    var parsedText = parseXMLResponse(obj);
                    result_1.push(parsedText || obj);
                  } else {
                    var parsedText = parseXMLResponse(obj);
                    if (parsedText !== null) {
                      result_1.push(parsedText);
                    }
                  }
                });
                if (result_1.length !== text.length) {
                  throw new Error("Mismatching a lengths of original and translated arrays");
                }
                return result_1;
              } catch (err) {
                console.warn("Got response", rawResp);
                throw err;
              }
            });
          });
        };
        GoogleTranslator3.prototype.encodeForBatch = function(textList) {
          return textList.map(function(text, i) {
            return '<pre><a i="'.concat(i, '">').concat(text, "</a></pre>");
          });
        };
        GoogleTranslator3.translatorName = "GoogleTranslator";
        return GoogleTranslator3;
      }(AbstractGoogleTranslator);
      exports.GoogleTranslator = GoogleTranslator2;
      var GoogleTranslatorTokenFree = function(_super) {
        __extends(GoogleTranslatorTokenFree2, _super);
        function GoogleTranslatorTokenFree2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.translate = function(text, from, to) {
            return __awaiter(_this, void 0, void 0, function() {
              var _a, translation;
              return __generator(this, function(_b) {
                switch (_b.label) {
                  case 0:
                    return [4, this.translateBatch([text], from, to)];
                  case 1:
                    _a = __read.apply(void 0, [_b.sent(), 1]), translation = _a[0];
                    return [2, translation];
                }
              });
            });
          };
          return _this;
        }
        GoogleTranslatorTokenFree2.prototype.translateBatch = function(text, from, to) {
          var apiPath = "https://translate.googleapis.com/translate_a/t";
          var data = {
            client: "dict-chrome-ex",
            sl: this.getFixedLanguage(from),
            tl: this.getFixedLanguage(to),
            q: text
          };
          var url = apiPath + "?" + (0, _queryString.stringify)(data);
          return (0, _axios.default)({
            url: this.wrapUrlToCorsProxy(url),
            method: "GET",
            withCredentials: false,
            headers: __assign({
              "Content-Type": "application/x-www-form-urlencoded"
            }, this.options.headers)
          }).then(function(rsp) {
            return rsp.data;
          }).then(function(rawResp) {
            try {
              if (!Array.isArray(rawResp)) {
                throw new Error("Unexpected response");
              }
              var intermediateTextsArray_1 = [];
              (0, _utils.visitArrayItems)(rawResp, function(obj) {
                if (typeof obj === "string") {
                  intermediateTextsArray_1.push(obj);
                }
              });
              var result = [];
              var isSingleResponseMode = text.length === 1;
              var isOneToOneMappingMode = intermediateTextsArray_1.length === text.length;
              for (var idx in intermediateTextsArray_1) {
                var text_1 = intermediateTextsArray_1[idx];
                if (isSingleResponseMode) {
                  result.push(text_1);
                  break;
                }
                var isTranslation = isOneToOneMappingMode || Number(idx) % 2 === 0;
                if (isTranslation) {
                  result.push(text_1);
                }
              }
              if (result.length !== text.length) {
                console.warn("Translation result", result);
                throw new Error("Mismatching a lengths of original and translated arrays");
              }
              return result;
            } catch (err) {
              console.warn("Got response", rawResp);
              throw err;
            }
          });
        };
        GoogleTranslatorTokenFree2.translatorName = "GoogleTranslatorTokenFree";
        return GoogleTranslatorTokenFree2;
      }(AbstractGoogleTranslator);
      exports.GoogleTranslatorTokenFree = GoogleTranslatorTokenFree;
    }
  });

  // src/app.tsx
  var import_react3 = __toESM(require_react());

  // src/utils/isJapanese.ts
  function isJapanese(text) {
    return /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g.test(text);
  }

  // src/utils/spicetify.ts
  async function waitForSpicetify() {
    while (!(Spicetify == null ? void 0 : Spicetify.Platform)) {
      await new Promise((r) => setTimeout(r, 100));
    }
  }

  // src/utils/kuromojiBuilder.ts
  var kuroshiroPath = "https://cdn.jsdelivr.net/npm/kuroshiro@1.2.0/dist/kuroshiro.min.js";
  var kuromojiPath = "https://cdn.jsdelivr.net/npm/kuroshiro-analyzer-kuromoji@1.1.0/dist/kuroshiro-analyzer-kuromoji.min.js";
  var dictPath = "https:/cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict";
  var KuroshiroBuilder = class {
    constructor() {
      this.addScript(kuroshiroPath);
      this.addScript(kuromojiPath);
    }
    async createKuroshiro() {
      while (typeof Kuroshiro === "undefined" || typeof KuromojiAnalyzer === "undefined") {
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
      const kuroshiro = new Kuroshiro.default();
      this.applyKuromojiFix();
      await kuroshiro.init(new KuromojiAnalyzer({ dictPath }));
      return kuroshiro;
    }
    applyKuromojiFix() {
      const prototype = XMLHttpRequest.prototype;
      if (typeof prototype.realOpen !== "undefined") {
        return;
      }
      prototype.realOpen = prototype.open;
      prototype.open = function(method, url, async) {
        if (url.indexOf(dictPath.replace("https://", "https:/")) === 0) {
          this.realOpen(
            method,
            url.replace("https:/", "https://"),
            async
          );
        } else {
          this.realOpen(method, url, async);
        }
      };
    }
    addScript(url) {
      if (document.body.querySelector(`script[src='${url}']`) !== null) {
        return;
      }
      const script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", url);
      document.body.prepend(script);
    }
  };

  // src/utils/dom.ts
  function getElement({ selector, isAll }) {
    let element = document.querySelector(selector);
    if (isAll)
      element = document.querySelectorAll(selector);
    if (element === null) {
      element = document.createElement("div");
    }
    return element;
  }
  function createElement({ className, otherAttributes }) {
    const el = document.createElement("div");
    el.setAttribute("class", className);
    if (otherAttributes) {
      Object.keys(otherAttributes).forEach((key) => {
        el.setAttribute(key, otherAttributes[key]);
      });
    }
    return el;
  }
  function checkDomExists({ selector }) {
    const element = document.querySelector(selector);
    return element !== null;
  }

  // src/services/setting.service.ts
  var DEFAULT_GOOGLE_TRANSLATE_SETTING = {
    active: true,
    targetLanguage: "en",
    corsProxy: ""
  };
  var DEFAULT_KUROSHIRO_SETTING = {
    to: "romaji",
    mode: "spaced"
  };
  var SettingService = class {
    constructor() {
      this.googleTranslateSettingKey = "romajin:google_translate";
      this.kuroshiroSettingKey = "romajin:kuroshiro";
    }
    getGoogleTranslateSetting() {
      const localData = localStorage.getItem(this.googleTranslateSettingKey);
      return localData ? JSON.parse(localData) : DEFAULT_GOOGLE_TRANSLATE_SETTING;
    }
    setGoogleTranslateSetting(setting) {
      localStorage.setItem(this.googleTranslateSettingKey, JSON.stringify(setting));
    }
    getKuroshiroSetting() {
      const localData = localStorage.getItem(this.kuroshiroSettingKey);
      return localData ? JSON.parse(localData) : DEFAULT_KUROSHIRO_SETTING;
    }
    setKuroshiroSetting(setting) {
      localStorage.setItem(this.kuroshiroSettingKey, JSON.stringify(setting));
    }
  };
  var settingService = new SettingService();

  // src/services/kuroshiro.service.ts
  var KuroshiroService = class {
    constructor() {
      this.kuroshiro = null;
    }
    async init() {
      this.kuroshiro = await new KuroshiroBuilder().createKuroshiro();
    }
    async convert(value) {
      if (this.kuroshiro === null) {
        console.error(
          "Property 'kuroshiro' is null. Call 'init' before using the service."
        );
        return "";
      }
      return await this.kuroshiro.convert(value, {
        to: settingService.getKuroshiroSetting().to,
        mode: settingService.getKuroshiroSetting().mode
      });
    }
  };
  var kuroshiroService = new KuroshiroService();

  // src/services/googleTranslator.service.ts
  var import_GoogleTranslator = __toESM(require_GoogleTranslator());
  var GoogleTranslatorService = class {
    async translate(text) {
      const translator = new import_GoogleTranslator.GoogleTranslator({
        corsProxy: settingService.getGoogleTranslateSetting().corsProxy
      });
      const res = await translator.translate(text, "ja", settingService.getGoogleTranslateSetting().targetLanguage);
      return res;
    }
  };
  var googleTranslatorService = new GoogleTranslatorService();

  // src/services/translator.service.ts
  var TranslatorService = class {
    constructor() {
      this.originalLyric = "";
      this.romajiLyric = null;
    }
    async convertLyric(lyric) {
      let originalLyric = "";
      if (!lyric) {
        getElement({ selector: ".lyrics-lyricsContent-lyric", isAll: true }).forEach((val) => originalLyric += `${val.textContent}
`);
      }
      let romajiLyric = null;
      if (isJapanese(lyric != null ? lyric : originalLyric)) {
        romajiLyric = await kuroshiroService.convert(lyric != null ? lyric : originalLyric);
      }
      this.originalLyric = lyric != null ? lyric : originalLyric;
      this.romajiLyric = romajiLyric;
      return [originalLyric, romajiLyric];
    }
    renderLyric() {
      if (this.romajiLyric === null)
        return;
      const lyricsBox = getElement({ selector: ".lyrics-lyricsContent-lyric", isAll: true });
      lyricsBox.forEach((val, i) => {
        const oriLyric = this.originalLyric.split("\n")[i];
        const oriLyricBox = createElement({ className: "lyrics-lyricsContent-text" });
        oriLyricBox.textContent = oriLyric;
        if (settingService.getGoogleTranslateSetting().active) {
          (async () => {
            if (oriLyric === " \u266A " || oriLyric.length === 0 || !isJapanese(oriLyric))
              return;
            const translated = await googleTranslatorService.translate(oriLyric);
            let englishLyricBox = createElement({ className: "lyrics-lyricsContent-text sub english" });
            englishLyricBox.textContent = translated;
            val.insertBefore(englishLyricBox, oriLyricBox);
          })();
        }
        const subLyric = this.romajiLyric.split("\n")[i];
        if (subLyric === " \u266A ")
          return;
        const subLyricBox = createElement({ className: "lyrics-lyricsContent-text sub" });
        subLyricBox.innerHTML = subLyric;
        val.replaceChildren(oriLyricBox, subLyricBox);
      });
    }
    async init() {
      await kuroshiroService.init();
      let isAlreadyTranslated = false;
      let translateSetting = settingService.getGoogleTranslateSetting();
      let kuroshiroSetting = settingService.getKuroshiroSetting();
      let isSettingChanged = false;
      setInterval(() => {
        if (JSON.stringify(translateSetting) !== JSON.stringify(settingService.getGoogleTranslateSetting()) || JSON.stringify(kuroshiroSetting) !== JSON.stringify(settingService.getKuroshiroSetting())) {
          isSettingChanged = true;
        }
        if (checkDomExists({ selector: "div.lyrics-lyrics-container" })) {
          if (isAlreadyTranslated && !isSettingChanged)
            return;
          translatorService.convertLyric(isSettingChanged && isAlreadyTranslated ? this.originalLyric : void 0).then(() => {
            translatorService.renderLyric();
            isAlreadyTranslated = true;
          });
          if (isSettingChanged) {
            translateSetting = settingService.getGoogleTranslateSetting();
            kuroshiroSetting = settingService.getKuroshiroSetting();
            isSettingChanged = false;
          }
        } else {
          isAlreadyTranslated = false;
        }
      }, 1e3);
      Spicetify.Player.addEventListener("songchange", () => {
        isAlreadyTranslated = false;
      });
    }
  };
  var translatorService = new TranslatorService();

  // src/components/SettingsModal.tsx
  var import_react2 = __toESM(require_react());

  // src/components/SwitchButton.tsx
  var import_react = __toESM(require_react());
  function SwitchButton(_a) {
    var _b = _a, { onChange } = _b, props = __objRest(_b, ["onChange"]);
    return /* @__PURE__ */ import_react.default.createElement("label", {
      className: "switch"
    }, /* @__PURE__ */ import_react.default.createElement("input", __spreadValues({
      type: "checkbox",
      onChange: (e) => onChange(e.target.checked)
    }, props)), /* @__PURE__ */ import_react.default.createElement("span", {
      className: "slider round"
    }));
  }

  // src/components/SettingsModal.tsx
  var import_GoogleTranslator2 = __toESM(require_GoogleTranslator());

  // src/models/KuroshiroSettingModel.ts
  var KuroshiroTo = /* @__PURE__ */ ((KuroshiroTo2) => {
    KuroshiroTo2["hiragana"] = "hiragana";
    KuroshiroTo2["katakana"] = "katakana";
    KuroshiroTo2["romaji"] = "romaji";
    return KuroshiroTo2;
  })(KuroshiroTo || {});
  var KuroshiroMode = /* @__PURE__ */ ((KuroshiroMode2) => {
    KuroshiroMode2["normal"] = "normal";
    KuroshiroMode2["spaced"] = "spaced";
    KuroshiroMode2["okurigana"] = "okurigana";
    KuroshiroMode2["furigana"] = "furigana";
    return KuroshiroMode2;
  })(KuroshiroMode || {});

  // src/components/SettingsModal.tsx
  function SettingModal() {
    var _a;
    const [translate, setTranslate] = (0, import_react2.useState)(settingService.getGoogleTranslateSetting());
    const [kuroshiro, setKuroshiro] = (0, import_react2.useState)(settingService.getKuroshiroSetting());
    (0, import_react2.useEffect)(() => {
      settingService.setGoogleTranslateSetting(translate);
    }, [translate]);
    (0, import_react2.useEffect)(() => {
      settingService.setKuroshiroSetting(kuroshiro);
    }, [kuroshiro]);
    return /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "romajin-settings"
    }, /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "setting-box"
    }, /* @__PURE__ */ import_react2.default.createElement("p", {
      className: "title"
    }, "Translate"), /* @__PURE__ */ import_react2.default.createElement("div", {
      className: `card ${translate ? "active" : null}`
    }, /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "input"
    }, /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "title"
    }, "Enabled"), /* @__PURE__ */ import_react2.default.createElement(SwitchButton, {
      onChange: (e) => setTranslate((data) => __spreadProps(__spreadValues({}, data), { active: e })),
      defaultChecked: translate.active
    })), /* @__PURE__ */ import_react2.default.createElement("p", {
      className: "description"
    }, "Enable the google translator")), translate.active && /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "translate-child"
    }, /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "card child"
    }, /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "input"
    }, /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "title"
    }, "Target Language"), /* @__PURE__ */ import_react2.default.createElement("select", {
      className: "input-field",
      onChange: (e) => setTranslate((data) => __spreadProps(__spreadValues({}, data), { targetLanguage: e.target.value }))
    }, import_GoogleTranslator2.supportedLanguages.map(
      (lang) => /* @__PURE__ */ import_react2.default.createElement("option", {
        value: lang,
        key: lang,
        selected: lang === translate.targetLanguage
      }, lang)
    )))), /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "card child"
    }, /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "input"
    }, /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "title"
    }, "CORS Proxy"), /* @__PURE__ */ import_react2.default.createElement("input", {
      type: "text",
      className: "input-field",
      onChange: (e) => setTranslate((data) => __spreadProps(__spreadValues({}, data), { corsProxy: e.target.value })),
      defaultValue: (_a = translate.corsProxy) != null ? _a : ""
    })), /* @__PURE__ */ import_react2.default.createElement("p", {
      className: "description"
    }, "Must be filled, Google Translate API blocked by CORS if not have proxy.", /* @__PURE__ */ import_react2.default.createElement("a", {
      href: "https://github.com/Richie-Z/romajin/issues/1#issuecomment-2017152225"
    }, " Read this issue ")))), /* @__PURE__ */ import_react2.default.createElement("p", {
      className: "title"
    }, "Romaji Setting"), /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "card"
    }, /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "input"
    }, /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "title"
    }, "Convert To"), /* @__PURE__ */ import_react2.default.createElement("select", {
      className: "input-field",
      onChange: (e) => setKuroshiro((data) => __spreadProps(__spreadValues({}, data), { to: e.target.value }))
    }, Object.values(KuroshiroTo).map(
      (to) => /* @__PURE__ */ import_react2.default.createElement("option", {
        value: to,
        key: to,
        selected: to === kuroshiro.to
      }, to)
    ))), /* @__PURE__ */ import_react2.default.createElement("p", {
      className: "description"
    }, "Target syllabary [hiragana, katakana, romaji]")), /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "card"
    }, /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "input"
    }, /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "title"
    }, "Convert Mode"), /* @__PURE__ */ import_react2.default.createElement("select", {
      className: "input-field",
      onChange: (e) => setKuroshiro((data) => __spreadProps(__spreadValues({}, data), { mode: e.target.value }))
    }, Object.values(KuroshiroMode).map(
      (mode) => /* @__PURE__ */ import_react2.default.createElement("option", {
        value: mode,
        key: mode,
        selected: mode === kuroshiro.mode
      }, mode)
    ))), /* @__PURE__ */ import_react2.default.createElement("p", {
      className: "description"
    }, "Convert mode [normal, spaced, okurigana, furigana]"))));
  }

  // src/constants/TRANSLATE_ICON.ts
  var TRANSLATE_ICON = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="16" height="16" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#FFFFFF" stroke="none">
<path d="M1610 4948 c-190 -17 -393 -60 -592 -124 -124 -40 -138 -53 -138
-131 l0 -53 -56 0 c-87 0 -133 -18 -189 -75 -57 -56 -75 -102 -75 -189 l0 -56
-175 0 c-173 0 -176 0 -200 -25 l-25 -24 0 -1552 c0 -1189 3 -1561 12 -1593
16 -55 99 -138 154 -154 31 -9 247 -12 863 -12 l821 0 -107 -160 -106 -160
-354 0 -354 0 -24 -25 c-25 -24 -25 -26 -25 -215 0 -189 0 -191 25 -215 l24
-25 1471 0 1471 0 24 25 c25 24 25 26 25 215 0 189 0 191 -25 215 l-24 25
-354 0 -354 0 -106 160 -107 160 823 0 c936 0 884 -4 960 80 24 26 49 66 55
88 9 30 12 421 12 1591 l0 1552 -25 24 c-24 25 -27 25 -200 25 l-175 0 0 56
c0 87 -18 133 -75 189 -56 57 -102 75 -189 75 l-56 0 0 53 c0 78 -14 91 -138
131 -278 89 -562 136 -835 136 -292 0 -513 -57 -656 -170 l-51 -40 -51 40
c-178 140 -493 196 -899 158z m435 -158 c171 -20 284 -61 383 -139 l52 -41 0
-1056 c0 -1003 -1 -1055 -18 -1050 -41 13 -240 46 -364 60 -318 36 -587 30
-873 -19 -77 -14 -150 -27 -162 -31 l-23 -6 0 1079 0 1080 116 32 c297 84 639
119 889 91z m1430 0 c154 -14 318 -44 473 -87 l132 -36 0 -1080 0 -1079 -26 6
c-80 20 -329 56 -464 67 -175 13 -418 7 -599 -16 -109 -14 -309 -51 -338 -62
-11 -4 -13 177 -13 1051 l0 1056 53 41 c94 75 213 120 368 138 106 12 287 13
414 1z m-2595 -1365 l0 -1056 26 -25 c29 -30 39 -30 184 9 370 98 891 94 1358
-9 l112 -25 113 25 c464 103 988 107 1357 9 145 -39 155 -39 184 -9 l26 25 0
1056 0 1055 55 0 c46 0 60 -4 80 -25 l25 -24 0 -1111 0 -1111 -25 -24 -24 -25
-831 0 -831 0 -24 -25 c-16 -15 -25 -36 -25 -55 0 -41 -39 -80 -80 -80 -41 0
-80 39 -80 80 0 19 -9 40 -25 55 l-24 25 -831 0 -831 0 -24 25 -25 24 0 1111
0 1111 25 24 c20 21 34 25 80 25 l55 0 0 -1055z m-320 -241 c0 -738 3 -987 12
-1018 16 -55 99 -138 154 -154 31 -9 240 -12 828 -12 707 0 786 -2 786 -16 0
-8 24 -39 53 -67 73 -73 146 -93 241 -65 45 13 146 105 146 132 0 14 79 16
786 16 588 0 797 3 828 12 55 16 138 99 154 154 9 31 12 280 12 1018 l0 976
120 0 120 0 0 -1320 0 -1320 -2240 0 -2240 0 0 1320 0 1320 120 0 120 0 0
-976z m4240 -1919 c0 -88 -2 -98 -25 -120 l-24 -25 -2191 0 -2191 0 -24 25
c-23 22 -25 32 -25 120 l0 95 2240 0 2240 0 0 -95z m-1777 -465 l107 -160
-570 0 -570 0 107 160 106 160 357 0 357 0 106 -160z m897 -400 l0 -80 -1360
0 -1360 0 0 80 0 80 1360 0 1360 0 0 -80z"/>
<path d="M1680 4480 l0 -80 -200 0 -200 0 0 -80 0 -80 320 0 320 0 -6 -27
c-14 -57 -45 -131 -74 -174 -38 -58 -96 -113 -109 -105 -6 4 -41 47 -77 97
-63 83 -69 88 -88 76 -12 -8 -42 -26 -68 -41 l-48 -28 31 -45 c18 -25 51 -70
75 -99 24 -30 44 -59 44 -64 0 -14 -181 -101 -270 -130 -36 -12 -66 -23 -68
-25 -9 -8 40 -145 52 -145 43 0 267 94 359 151 l50 31 26 -21 c86 -69 184
-125 269 -155 l42 -15 10 42 c6 23 13 50 16 60 2 9 6 26 9 36 5 16 -3 22 -44
36 -40 13 -119 59 -185 107 -6 3 9 27 32 52 88 95 145 204 172 329 l13 57 79
0 78 0 0 80 0 80 -200 0 -200 0 0 80 0 80 -80 0 -80 0 0 -80z"/>
<path d="M1200 3200 l0 -80 280 0 280 0 0 80 0 80 -280 0 -280 0 0 -80z"/>
<path d="M1920 3200 l0 -80 200 0 200 0 0 80 0 80 -200 0 -200 0 0 -80z"/>
<path d="M1200 2880 l0 -80 160 0 160 0 0 80 0 80 -160 0 -160 0 0 -80z"/>
<path d="M1680 2880 l0 -80 320 0 320 0 0 80 0 80 -320 0 -320 0 0 -80z"/>
<path d="M3231 4463 c-17 -14 -47 -112 -145 -468 l-123 -450 51 -16 c113 -36
99 -44 136 89 17 64 38 141 46 170 l15 52 149 0 c133 0 149 -2 154 -17 3 -10
24 -85 46 -168 23 -82 43 -151 44 -153 4 -3 147 35 151 40 1 2 -53 206 -121
453 -98 356 -128 454 -145 468 -17 14 -41 17 -129 17 -88 0 -112 -3 -129 -17z
m153 -160 c26 -90 76 -282 76 -291 0 -8 -31 -12 -100 -12 -69 0 -100 4 -100
12 0 9 50 201 76 291 3 9 14 17 24 17 10 0 21 -8 24 -17z"/>
<path d="M2800 3200 l0 -80 200 0 200 0 0 80 0 80 -200 0 -200 0 0 -80z"/>
<path d="M3360 3200 l0 -80 280 0 280 0 0 80 0 80 -280 0 -280 0 0 -80z"/>
<path d="M2800 2880 l0 -80 120 0 120 0 0 80 0 80 -120 0 -120 0 0 -80z"/>
<path d="M3200 2880 l0 -80 160 0 160 0 0 80 0 80 -160 0 -160 0 0 -80z"/>
<path d="M3680 2880 l0 -80 120 0 120 0 0 80 0 80 -120 0 -120 0 0 -80z"/>
<path d="M480 1760 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z"/>
<path d="M4160 1760 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z"/>
<path d="M4480 1760 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z"/>
</g>
</svg>`;

  // src/app.tsx
  async function main() {
    await waitForSpicetify();
    await translatorService.init();
    new Spicetify.Menu.Item(
      "Romajin Settings",
      false,
      () => {
        Spicetify.PopupModal.display({
          title: "Romajin Settings",
          content: import_react3.default.createElement(SettingModal),
          isLarge: true
        });
      },
      TRANSLATE_ICON
    ).register();
  }
  var app_default = main;

  // ../../../../../../private/var/folders/pd/qsy0fv9j0ts43m9j8cbg5r5r0000gn/T/spicetify-creator/index.jsx
  (async () => {
    await app_default();
  })();
})();
(async () => {
    if (!document.getElementById(`romajin`)) {
      var el = document.createElement('style');
      el.id = `romajin`;
      el.textContent = (String.raw`
  /* ../../../../../../var/folders/pd/qsy0fv9j0ts43m9j8cbg5r5r0000gn/T/tmp-36072-gr1ZtsAx6Bdg/18e74e6b2970/lyric-text.css */
.lyrics-lyricsContent-lyric:first-child {
  margin-top: 2rem;
}
.lyrics-lyricsContent-lyric .lyrics-lyricsContent-text.sub {
  font-weight: 100;
  font-size: 16px;
  margin-top: -1rem;
}
.lyrics-lyricsContent-lyric .lyrics-lyricsContent-text.sub.english {
  margin-top: 0rem;
  margin-bottom: -1rem;
}

/* ../../../../../../var/folders/pd/qsy0fv9j0ts43m9j8cbg5r5r0000gn/T/tmp-36072-gr1ZtsAx6Bdg/18e74e6b3131/romajin-settings.css */
.romajin-settings .setting-box {
  margin: 1rem 0rem;
}
.romajin-settings .setting-box .title {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
}
.romajin-settings .setting-box .title:not(:first-child) {
  padding-top: 2rem;
}
.romajin-settings .setting-box .card {
  background-color: var(--spice-highlight-elevated);
  border-radius: 10px;
  padding: 1rem 2rem;
  margin: 0.5rem 1rem;
  transition: 0.4s;
}
.romajin-settings .setting-box .card.active {
  background-color: var(--spice-main);
  margin-bottom: 0rem !important;
  border-radius: 10px 10px 0px 0px;
}
.romajin-settings .setting-box .card.active:hover {
  background-color: var(--spice-button-disabled);
}
.romajin-settings .setting-box .card.child {
  margin: 0rem 1rem 0rem 1rem !important;
  border-radius: 0;
}
.romajin-settings .setting-box .card.child:last-child {
  border-radius: 0 0 10px 10px;
}
.romajin-settings .setting-box .card .input {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.romajin-settings .setting-box .card .input .title {
  font-size: 1.1rem;
  font-weight: 700;
  text-align: left;
}
.romajin-settings .setting-box .card .input-field {
  padding-inline: 10px;
  text-align: center;
  background-color: var(--spice-sidebar);
  border: none;
  height: 32px;
  width: 200px;
  color: var(--spice-subtext);
}
.romajin-settings .setting-box .card .input-field:is(select) {
  width: 120px;
}
.romajin-settings .setting-box .card .description {
  margin-top: 5px;
  color: var(--spice-subtext);
  font-size: 0.8rem;
}

/* ../../../../../../var/folders/pd/qsy0fv9j0ts43m9j8cbg5r5r0000gn/T/tmp-36072-gr1ZtsAx6Bdg/18e74e6b3212/switch-button.css */
.switch {
  position: relative;
  display: inline-block;
  width: 45px;
  height: 26px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.switch input:checked + .slider {
  background-color: var(--spice-button);
}
.switch input:checked + .slider:before {
  transform: translateX(14px);
}
.switch input:focus + .slider {
  box-shadow: 0 0 1px var(--spice-button);
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 5px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
}
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}

      `).trim();
      document.head.appendChild(el);
    }
  })()
      })();