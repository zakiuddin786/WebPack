/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/ansi-html-community/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ansi-html-community/index.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nmodule.exports = ansiHTML; // Reference to https://github.com/sindresorhus/ansi-regex\n\nvar _regANSI = /(?:(?:\\u001b\\[)|\\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\\u001b[A-M]/;\nvar _defColors = {\n  reset: ['fff', '000'],\n  // [FOREGROUD_COLOR, BACKGROUND_COLOR]\n  black: '000',\n  red: 'ff0000',\n  green: '209805',\n  yellow: 'e8bf03',\n  blue: '0000ff',\n  magenta: 'ff00ff',\n  cyan: '00ffee',\n  lightgrey: 'f0f0f0',\n  darkgrey: '888'\n};\nvar _styles = {\n  30: 'black',\n  31: 'red',\n  32: 'green',\n  33: 'yellow',\n  34: 'blue',\n  35: 'magenta',\n  36: 'cyan',\n  37: 'lightgrey'\n};\nvar _openTags = {\n  '1': 'font-weight:bold',\n  // bold\n  '2': 'opacity:0.5',\n  // dim\n  '3': '<i>',\n  // italic\n  '4': '<u>',\n  // underscore\n  '8': 'display:none',\n  // hidden\n  '9': '<del>' // delete\n\n};\nvar _closeTags = {\n  '23': '</i>',\n  // reset italic\n  '24': '</u>',\n  // reset underscore\n  '29': '</del>' // reset delete\n\n};\n[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {\n  _closeTags[n] = '</span>';\n});\n/**\n * Converts text with ANSI color codes to HTML markup.\n * @param {String} text\n * @returns {*}\n */\n\nfunction ansiHTML(text) {\n  // Returns the text if the string has no ANSI escape code.\n  if (!_regANSI.test(text)) {\n    return text;\n  } // Cache opened sequence.\n\n\n  var ansiCodes = []; // Replace with markup.\n\n  var ret = text.replace(/\\033\\[(\\d+)m/g, function (match, seq) {\n    var ot = _openTags[seq];\n\n    if (ot) {\n      // If current sequence has been opened, close it.\n      if (!!~ansiCodes.indexOf(seq)) {\n        // eslint-disable-line no-extra-boolean-cast\n        ansiCodes.pop();\n        return '</span>';\n      } // Open tag.\n\n\n      ansiCodes.push(seq);\n      return ot[0] === '<' ? ot : '<span style=\"' + ot + ';\">';\n    }\n\n    var ct = _closeTags[seq];\n\n    if (ct) {\n      // Pop sequence\n      ansiCodes.pop();\n      return ct;\n    }\n\n    return '';\n  }); // Make sure tags are closed.\n\n  var l = ansiCodes.length;\n  l > 0 && (ret += Array(l + 1).join('</span>'));\n  return ret;\n}\n/**\n * Customize colors.\n * @param {Object} colors reference to _defColors\n */\n\n\nansiHTML.setColors = function (colors) {\n  if (_typeof(colors) !== 'object') {\n    throw new Error('`colors` parameter must be an Object.');\n  }\n\n  var _finalColors = {};\n\n  for (var key in _defColors) {\n    var hex = colors.hasOwnProperty(key) ? colors[key] : null;\n\n    if (!hex) {\n      _finalColors[key] = _defColors[key];\n      continue;\n    }\n\n    if ('reset' === key) {\n      if (typeof hex === 'string') {\n        hex = [hex];\n      }\n\n      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {\n        return typeof h !== 'string';\n      })) {\n        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000');\n      }\n\n      var defHexColor = _defColors[key];\n\n      if (!hex[0]) {\n        hex[0] = defHexColor[0];\n      }\n\n      if (hex.length === 1 || !hex[1]) {\n        hex = [hex[0]];\n        hex.push(defHexColor[1]);\n      }\n\n      hex = hex.slice(0, 2);\n    } else if (typeof hex !== 'string') {\n      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000');\n    }\n\n    _finalColors[key] = hex;\n  }\n\n  _setTags(_finalColors);\n};\n/**\n * Reset colors.\n */\n\n\nansiHTML.reset = function () {\n  _setTags(_defColors);\n};\n/**\n * Expose tags, including open and close.\n * @type {Object}\n */\n\n\nansiHTML.tags = {};\n\nif (Object.defineProperty) {\n  Object.defineProperty(ansiHTML.tags, 'open', {\n    get: function get() {\n      return _openTags;\n    }\n  });\n  Object.defineProperty(ansiHTML.tags, 'close', {\n    get: function get() {\n      return _closeTags;\n    }\n  });\n} else {\n  ansiHTML.tags.open = _openTags;\n  ansiHTML.tags.close = _closeTags;\n}\n\nfunction _setTags(colors) {\n  // reset all\n  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]; // inverse\n\n  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]; // dark grey\n\n  _openTags['90'] = 'color:#' + colors.darkgrey;\n\n  for (var code in _styles) {\n    var color = _styles[code];\n    var oriColor = colors[color] || '000';\n    _openTags[code] = 'color:#' + oriColor;\n    code = parseInt(code);\n    _openTags[(code + 10).toString()] = 'background:#' + oriColor;\n  }\n}\n\nansiHTML.reset();\n\n//# sourceURL=webpack://dashboard/./node_modules/ansi-html-community/index.js?");

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";
eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nvar R = (typeof Reflect === \"undefined\" ? \"undefined\" : _typeof(Reflect)) === 'object' ? Reflect : null;\nvar ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {\n  return Function.prototype.apply.call(target, receiver, args);\n};\nvar ReflectOwnKeys;\n\nif (R && typeof R.ownKeys === 'function') {\n  ReflectOwnKeys = R.ownKeys;\n} else if (Object.getOwnPropertySymbols) {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));\n  };\n} else {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target);\n  };\n}\n\nfunction ProcessEmitWarning(warning) {\n  if (console && console.warn) console.warn(warning);\n}\n\nvar NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {\n  return value !== value;\n};\n\nfunction EventEmitter() {\n  EventEmitter.init.call(this);\n}\n\nmodule.exports = EventEmitter;\nmodule.exports.once = once; // Backwards-compat with node 0.10.x\n\nEventEmitter.EventEmitter = EventEmitter;\nEventEmitter.prototype._events = undefined;\nEventEmitter.prototype._eventsCount = 0;\nEventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are\n// added to it. This is a useful default which helps finding memory leaks.\n\nvar defaultMaxListeners = 10;\n\nfunction checkListener(listener) {\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + _typeof(listener));\n  }\n}\n\nObject.defineProperty(EventEmitter, 'defaultMaxListeners', {\n  enumerable: true,\n  get: function get() {\n    return defaultMaxListeners;\n  },\n  set: function set(arg) {\n    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {\n      throw new RangeError('The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received ' + arg + '.');\n    }\n\n    defaultMaxListeners = arg;\n  }\n});\n\nEventEmitter.init = function () {\n  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {\n    this._events = Object.create(null);\n    this._eventsCount = 0;\n  }\n\n  this._maxListeners = this._maxListeners || undefined;\n}; // Obviously not all Emitters should be limited to 10. This function allows\n// that to be increased. Set to zero for unlimited.\n\n\nEventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {\n  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {\n    throw new RangeError('The value of \"n\" is out of range. It must be a non-negative number. Received ' + n + '.');\n  }\n\n  this._maxListeners = n;\n  return this;\n};\n\nfunction _getMaxListeners(that) {\n  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;\n  return that._maxListeners;\n}\n\nEventEmitter.prototype.getMaxListeners = function getMaxListeners() {\n  return _getMaxListeners(this);\n};\n\nEventEmitter.prototype.emit = function emit(type) {\n  var args = [];\n\n  for (var i = 1; i < arguments.length; i++) {\n    args.push(arguments[i]);\n  }\n\n  var doError = type === 'error';\n  var events = this._events;\n  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false; // If there is no 'error' event listener then throw.\n\n  if (doError) {\n    var er;\n    if (args.length > 0) er = args[0];\n\n    if (er instanceof Error) {\n      // Note: The comments on the `throw` lines are intentional, they show\n      // up in Node's output if this results in an unhandled exception.\n      throw er; // Unhandled 'error' event\n    } // At least give some kind of context to the user\n\n\n    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));\n    err.context = er;\n    throw err; // Unhandled 'error' event\n  }\n\n  var handler = events[type];\n  if (handler === undefined) return false;\n\n  if (typeof handler === 'function') {\n    ReflectApply(handler, this, args);\n  } else {\n    var len = handler.length;\n    var listeners = arrayClone(handler, len);\n\n    for (var i = 0; i < len; ++i) {\n      ReflectApply(listeners[i], this, args);\n    }\n  }\n\n  return true;\n};\n\nfunction _addListener(target, type, listener, prepend) {\n  var m;\n  var events;\n  var existing;\n  checkListener(listener);\n  events = target._events;\n\n  if (events === undefined) {\n    events = target._events = Object.create(null);\n    target._eventsCount = 0;\n  } else {\n    // To avoid recursion in the case that type === \"newListener\"! Before\n    // adding it to the listeners, first emit \"newListener\".\n    if (events.newListener !== undefined) {\n      target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the\n      // this._events to be assigned to a new object\n\n      events = target._events;\n    }\n\n    existing = events[type];\n  }\n\n  if (existing === undefined) {\n    // Optimize the case of one listener. Don't need the extra array object.\n    existing = events[type] = listener;\n    ++target._eventsCount;\n  } else {\n    if (typeof existing === 'function') {\n      // Adding the second element, need to change to array.\n      existing = events[type] = prepend ? [listener, existing] : [existing, listener]; // If we've already got an array, just append.\n    } else if (prepend) {\n      existing.unshift(listener);\n    } else {\n      existing.push(listener);\n    } // Check for listener leak\n\n\n    m = _getMaxListeners(target);\n\n    if (m > 0 && existing.length > m && !existing.warned) {\n      existing.warned = true; // No error code for this since it is a Warning\n      // eslint-disable-next-line no-restricted-syntax\n\n      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');\n      w.name = 'MaxListenersExceededWarning';\n      w.emitter = target;\n      w.type = type;\n      w.count = existing.length;\n      ProcessEmitWarning(w);\n    }\n  }\n\n  return target;\n}\n\nEventEmitter.prototype.addListener = function addListener(type, listener) {\n  return _addListener(this, type, listener, false);\n};\n\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\n\nEventEmitter.prototype.prependListener = function prependListener(type, listener) {\n  return _addListener(this, type, listener, true);\n};\n\nfunction onceWrapper() {\n  if (!this.fired) {\n    this.target.removeListener(this.type, this.wrapFn);\n    this.fired = true;\n    if (arguments.length === 0) return this.listener.call(this.target);\n    return this.listener.apply(this.target, arguments);\n  }\n}\n\nfunction _onceWrap(target, type, listener) {\n  var state = {\n    fired: false,\n    wrapFn: undefined,\n    target: target,\n    type: type,\n    listener: listener\n  };\n  var wrapped = onceWrapper.bind(state);\n  wrapped.listener = listener;\n  state.wrapFn = wrapped;\n  return wrapped;\n}\n\nEventEmitter.prototype.once = function once(type, listener) {\n  checkListener(listener);\n  this.on(type, _onceWrap(this, type, listener));\n  return this;\n};\n\nEventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {\n  checkListener(listener);\n  this.prependListener(type, _onceWrap(this, type, listener));\n  return this;\n}; // Emits a 'removeListener' event if and only if the listener was removed.\n\n\nEventEmitter.prototype.removeListener = function removeListener(type, listener) {\n  var list, events, position, i, originalListener;\n  checkListener(listener);\n  events = this._events;\n  if (events === undefined) return this;\n  list = events[type];\n  if (list === undefined) return this;\n\n  if (list === listener || list.listener === listener) {\n    if (--this._eventsCount === 0) this._events = Object.create(null);else {\n      delete events[type];\n      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);\n    }\n  } else if (typeof list !== 'function') {\n    position = -1;\n\n    for (i = list.length - 1; i >= 0; i--) {\n      if (list[i] === listener || list[i].listener === listener) {\n        originalListener = list[i].listener;\n        position = i;\n        break;\n      }\n    }\n\n    if (position < 0) return this;\n    if (position === 0) list.shift();else {\n      spliceOne(list, position);\n    }\n    if (list.length === 1) events[type] = list[0];\n    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);\n  }\n\n  return this;\n};\n\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\n\nEventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {\n  var listeners, events, i;\n  events = this._events;\n  if (events === undefined) return this; // not listening for removeListener, no need to emit\n\n  if (events.removeListener === undefined) {\n    if (arguments.length === 0) {\n      this._events = Object.create(null);\n      this._eventsCount = 0;\n    } else if (events[type] !== undefined) {\n      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];\n    }\n\n    return this;\n  } // emit removeListener for all listeners on all events\n\n\n  if (arguments.length === 0) {\n    var keys = Object.keys(events);\n    var key;\n\n    for (i = 0; i < keys.length; ++i) {\n      key = keys[i];\n      if (key === 'removeListener') continue;\n      this.removeAllListeners(key);\n    }\n\n    this.removeAllListeners('removeListener');\n    this._events = Object.create(null);\n    this._eventsCount = 0;\n    return this;\n  }\n\n  listeners = events[type];\n\n  if (typeof listeners === 'function') {\n    this.removeListener(type, listeners);\n  } else if (listeners !== undefined) {\n    // LIFO order\n    for (i = listeners.length - 1; i >= 0; i--) {\n      this.removeListener(type, listeners[i]);\n    }\n  }\n\n  return this;\n};\n\nfunction _listeners(target, type, unwrap) {\n  var events = target._events;\n  if (events === undefined) return [];\n  var evlistener = events[type];\n  if (evlistener === undefined) return [];\n  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];\n  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);\n}\n\nEventEmitter.prototype.listeners = function listeners(type) {\n  return _listeners(this, type, true);\n};\n\nEventEmitter.prototype.rawListeners = function rawListeners(type) {\n  return _listeners(this, type, false);\n};\n\nEventEmitter.listenerCount = function (emitter, type) {\n  if (typeof emitter.listenerCount === 'function') {\n    return emitter.listenerCount(type);\n  } else {\n    return listenerCount.call(emitter, type);\n  }\n};\n\nEventEmitter.prototype.listenerCount = listenerCount;\n\nfunction listenerCount(type) {\n  var events = this._events;\n\n  if (events !== undefined) {\n    var evlistener = events[type];\n\n    if (typeof evlistener === 'function') {\n      return 1;\n    } else if (evlistener !== undefined) {\n      return evlistener.length;\n    }\n  }\n\n  return 0;\n}\n\nEventEmitter.prototype.eventNames = function eventNames() {\n  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];\n};\n\nfunction arrayClone(arr, n) {\n  var copy = new Array(n);\n\n  for (var i = 0; i < n; ++i) {\n    copy[i] = arr[i];\n  }\n\n  return copy;\n}\n\nfunction spliceOne(list, index) {\n  for (; index + 1 < list.length; index++) {\n    list[index] = list[index + 1];\n  }\n\n  list.pop();\n}\n\nfunction unwrapListeners(arr) {\n  var ret = new Array(arr.length);\n\n  for (var i = 0; i < ret.length; ++i) {\n    ret[i] = arr[i].listener || arr[i];\n  }\n\n  return ret;\n}\n\nfunction once(emitter, name) {\n  return new Promise(function (resolve, reject) {\n    function errorListener(err) {\n      emitter.removeListener(name, resolver);\n      reject(err);\n    }\n\n    function resolver() {\n      if (typeof emitter.removeListener === 'function') {\n        emitter.removeListener('error', errorListener);\n      }\n\n      resolve([].slice.call(arguments));\n    }\n\n    ;\n    eventTargetAgnosticAddListener(emitter, name, resolver, {\n      once: true\n    });\n\n    if (name !== 'error') {\n      addErrorHandlerIfEventEmitter(emitter, errorListener, {\n        once: true\n      });\n    }\n  });\n}\n\nfunction addErrorHandlerIfEventEmitter(emitter, handler, flags) {\n  if (typeof emitter.on === 'function') {\n    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);\n  }\n}\n\nfunction eventTargetAgnosticAddListener(emitter, name, listener, flags) {\n  if (typeof emitter.on === 'function') {\n    if (flags.once) {\n      emitter.once(name, listener);\n    } else {\n      emitter.on(name, listener);\n    }\n  } else if (typeof emitter.addEventListener === 'function') {\n    // EventTarget does not have `error` event semantics like Node\n    // EventEmitters, we do not listen for `error` events here.\n    emitter.addEventListener(name, function wrapListener(arg) {\n      // IE does not have builtin `{ once: true }` support so we\n      // have to do it manually.\n      if (flags.once) {\n        emitter.removeEventListener(name, wrapListener);\n      }\n\n      listener(arg);\n    });\n  } else {\n    throw new TypeError('The \"emitter\" argument must be of type EventEmitter. Received type ' + _typeof(emitter));\n  }\n}\n\n//# sourceURL=webpack://dashboard/./node_modules/events/events.js?");

/***/ }),

/***/ "./node_modules/html-entities/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/html-entities/lib/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __assign = this && this.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n\n      for (var p in s) {\n        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n      }\n    }\n\n    return t;\n  };\n\n  return __assign.apply(this, arguments);\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar named_references_1 = __webpack_require__(/*! ./named-references */ \"./node_modules/html-entities/lib/named-references.js\");\n\nvar numeric_unicode_map_1 = __webpack_require__(/*! ./numeric-unicode-map */ \"./node_modules/html-entities/lib/numeric-unicode-map.js\");\n\nvar surrogate_pairs_1 = __webpack_require__(/*! ./surrogate-pairs */ \"./node_modules/html-entities/lib/surrogate-pairs.js\");\n\nvar allNamedReferences = __assign(__assign({}, named_references_1.namedReferences), {\n  all: named_references_1.namedReferences.html5\n});\n\nvar encodeRegExps = {\n  specialChars: /[<>'\"&]/g,\n  nonAscii: /(?:[<>'\"&\\u0080-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])/g,\n  nonAsciiPrintable: /(?:[<>'\"&\\x01-\\x08\\x11-\\x15\\x17-\\x1F\\x7f-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])/g,\n  extensive: /(?:[\\x01-\\x0c\\x0e-\\x1f\\x21-\\x2c\\x2e-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\x7d\\x7f-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])/g\n};\nvar defaultEncodeOptions = {\n  mode: 'specialChars',\n  level: 'all',\n  numeric: 'decimal'\n};\n/** Encodes all the necessary (specified by `level`) characters in the text */\n\nfunction encode(text, _a) {\n  var _b = _a === void 0 ? defaultEncodeOptions : _a,\n      _c = _b.mode,\n      mode = _c === void 0 ? 'specialChars' : _c,\n      _d = _b.numeric,\n      numeric = _d === void 0 ? 'decimal' : _d,\n      _e = _b.level,\n      level = _e === void 0 ? 'all' : _e;\n\n  if (!text) {\n    return '';\n  }\n\n  var encodeRegExp = encodeRegExps[mode];\n  var references = allNamedReferences[level].characters;\n  var isHex = numeric === 'hexadecimal';\n  encodeRegExp.lastIndex = 0;\n\n  var _b = encodeRegExp.exec(text);\n\n  var _c;\n\n  if (_b) {\n    _c = '';\n    var _d = 0;\n\n    do {\n      if (_d !== _b.index) {\n        _c += text.substring(_d, _b.index);\n      }\n\n      var _e = _b[0];\n      var result_1 = references[_e];\n\n      if (!result_1) {\n        var code_1 = _e.length > 1 ? surrogate_pairs_1.getCodePoint(_e, 0) : _e.charCodeAt(0);\n        result_1 = (isHex ? '&#x' + code_1.toString(16) : '&#' + code_1) + ';';\n      }\n\n      _c += result_1;\n      _d = _b.index + _e.length;\n    } while (_b = encodeRegExp.exec(text));\n\n    if (_d !== text.length) {\n      _c += text.substring(_d);\n    }\n  } else {\n    _c = text;\n  }\n\n  return _c;\n}\n\nexports.encode = encode;\nvar defaultDecodeOptions = {\n  scope: 'body',\n  level: 'all'\n};\nvar strict = /&(?:#\\d+|#[xX][\\da-fA-F]+|[0-9a-zA-Z]+);/g;\nvar attribute = /&(?:#\\d+|#[xX][\\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;\nvar baseDecodeRegExps = {\n  xml: {\n    strict: strict,\n    attribute: attribute,\n    body: named_references_1.bodyRegExps.xml\n  },\n  html4: {\n    strict: strict,\n    attribute: attribute,\n    body: named_references_1.bodyRegExps.html4\n  },\n  html5: {\n    strict: strict,\n    attribute: attribute,\n    body: named_references_1.bodyRegExps.html5\n  }\n};\n\nvar decodeRegExps = __assign(__assign({}, baseDecodeRegExps), {\n  all: baseDecodeRegExps.html5\n});\n\nvar fromCharCode = String.fromCharCode;\nvar outOfBoundsChar = fromCharCode(65533);\nvar defaultDecodeEntityOptions = {\n  level: 'all'\n};\n/** Decodes a single entity */\n\nfunction decodeEntity(entity, _a) {\n  var _b = (_a === void 0 ? defaultDecodeEntityOptions : _a).level,\n      level = _b === void 0 ? 'all' : _b;\n\n  if (!entity) {\n    return '';\n  }\n\n  var _b = entity;\n  var decodeEntityLastChar_1 = entity[entity.length - 1];\n\n  if (false) {} else if (false) {} else {\n    var decodeResultByReference_1 = allNamedReferences[level].entities[entity];\n\n    if (decodeResultByReference_1) {\n      _b = decodeResultByReference_1;\n    } else if (entity[0] === '&' && entity[1] === '#') {\n      var decodeSecondChar_1 = entity[2];\n      var decodeCode_1 = decodeSecondChar_1 == 'x' || decodeSecondChar_1 == 'X' ? parseInt(entity.substr(3), 16) : parseInt(entity.substr(2));\n      _b = decodeCode_1 >= 0x10ffff ? outOfBoundsChar : decodeCode_1 > 65535 ? surrogate_pairs_1.fromCodePoint(decodeCode_1) : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_1] || decodeCode_1);\n    }\n  }\n\n  return _b;\n}\n\nexports.decodeEntity = decodeEntity;\n/** Decodes all entities in the text */\n\nfunction decode(text, _a) {\n  var decodeSecondChar_1 = _a === void 0 ? defaultDecodeOptions : _a,\n      decodeCode_1 = decodeSecondChar_1.level,\n      level = decodeCode_1 === void 0 ? 'all' : decodeCode_1,\n      _b = decodeSecondChar_1.scope,\n      scope = _b === void 0 ? level === 'xml' ? 'strict' : 'body' : _b;\n\n  if (!text) {\n    return '';\n  }\n\n  var decodeRegExp = decodeRegExps[level][scope];\n  var references = allNamedReferences[level].entities;\n  var isAttribute = scope === 'attribute';\n  var isStrict = scope === 'strict';\n  decodeRegExp.lastIndex = 0;\n  var replaceMatch_1 = decodeRegExp.exec(text);\n  var replaceResult_1;\n\n  if (replaceMatch_1) {\n    replaceResult_1 = '';\n    var replaceLastIndex_1 = 0;\n\n    do {\n      if (replaceLastIndex_1 !== replaceMatch_1.index) {\n        replaceResult_1 += text.substring(replaceLastIndex_1, replaceMatch_1.index);\n      }\n\n      var replaceInput_1 = replaceMatch_1[0];\n      var decodeResult_1 = replaceInput_1;\n      var decodeEntityLastChar_2 = replaceInput_1[replaceInput_1.length - 1];\n\n      if (isAttribute && decodeEntityLastChar_2 === '=') {\n        decodeResult_1 = replaceInput_1;\n      } else if (isStrict && decodeEntityLastChar_2 !== ';') {\n        decodeResult_1 = replaceInput_1;\n      } else {\n        var decodeResultByReference_2 = references[replaceInput_1];\n\n        if (decodeResultByReference_2) {\n          decodeResult_1 = decodeResultByReference_2;\n        } else if (replaceInput_1[0] === '&' && replaceInput_1[1] === '#') {\n          var decodeSecondChar_2 = replaceInput_1[2];\n          var decodeCode_2 = decodeSecondChar_2 == 'x' || decodeSecondChar_2 == 'X' ? parseInt(replaceInput_1.substr(3), 16) : parseInt(replaceInput_1.substr(2));\n          decodeResult_1 = decodeCode_2 >= 0x10ffff ? outOfBoundsChar : decodeCode_2 > 65535 ? surrogate_pairs_1.fromCodePoint(decodeCode_2) : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_2] || decodeCode_2);\n        }\n      }\n\n      replaceResult_1 += decodeResult_1;\n      replaceLastIndex_1 = replaceMatch_1.index + replaceInput_1.length;\n    } while (replaceMatch_1 = decodeRegExp.exec(text));\n\n    if (replaceLastIndex_1 !== text.length) {\n      replaceResult_1 += text.substring(replaceLastIndex_1);\n    }\n  } else {\n    replaceResult_1 = text;\n  }\n\n  return replaceResult_1;\n}\n\nexports.decode = decode;\n\n//# sourceURL=webpack://dashboard/./node_modules/html-entities/lib/index.js?");

/***/ }),

/***/ "./node_modules/html-entities/lib/named-references.js":
/*!************************************************************!*\
  !*** ./node_modules/html-entities/lib/named-references.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.bodyRegExps = {\n  xml: /&(?:#\\d+|#[xX][\\da-fA-F]+|[0-9a-zA-Z]+);?/g,\n  html4: /&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\\d+|#[xX][\\da-fA-F]+|[0-9a-zA-Z]+);?/g,\n  html5: /&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\\d+|#[xX][\\da-fA-F]+|[0-9a-zA-Z]+);?/g\n};\nexports.namedReferences = {\n  xml: {\n    entities: {\n      \"&lt;\": \"<\",\n      \"&gt;\": \">\",\n      \"&quot;\": '\"',\n      \"&apos;\": \"'\",\n      \"&amp;\": \"&\"\n    },\n    characters: {\n      \"<\": \"&lt;\",\n      \">\": \"&gt;\",\n      '\"': \"&quot;\",\n      \"'\": \"&apos;\",\n      \"&\": \"&amp;\"\n    }\n  },\n  html4: {\n    entities: {\n      \"&apos;\": \"'\",\n      \"&nbsp\": \"??\",\n      \"&nbsp;\": \"??\",\n      \"&iexcl\": \"??\",\n      \"&iexcl;\": \"??\",\n      \"&cent\": \"??\",\n      \"&cent;\": \"??\",\n      \"&pound\": \"??\",\n      \"&pound;\": \"??\",\n      \"&curren\": \"??\",\n      \"&curren;\": \"??\",\n      \"&yen\": \"??\",\n      \"&yen;\": \"??\",\n      \"&brvbar\": \"??\",\n      \"&brvbar;\": \"??\",\n      \"&sect\": \"??\",\n      \"&sect;\": \"??\",\n      \"&uml\": \"??\",\n      \"&uml;\": \"??\",\n      \"&copy\": \"??\",\n      \"&copy;\": \"??\",\n      \"&ordf\": \"??\",\n      \"&ordf;\": \"??\",\n      \"&laquo\": \"??\",\n      \"&laquo;\": \"??\",\n      \"&not\": \"??\",\n      \"&not;\": \"??\",\n      \"&shy\": \"??\",\n      \"&shy;\": \"??\",\n      \"&reg\": \"??\",\n      \"&reg;\": \"??\",\n      \"&macr\": \"??\",\n      \"&macr;\": \"??\",\n      \"&deg\": \"??\",\n      \"&deg;\": \"??\",\n      \"&plusmn\": \"??\",\n      \"&plusmn;\": \"??\",\n      \"&sup2\": \"??\",\n      \"&sup2;\": \"??\",\n      \"&sup3\": \"??\",\n      \"&sup3;\": \"??\",\n      \"&acute\": \"??\",\n      \"&acute;\": \"??\",\n      \"&micro\": \"??\",\n      \"&micro;\": \"??\",\n      \"&para\": \"??\",\n      \"&para;\": \"??\",\n      \"&middot\": \"??\",\n      \"&middot;\": \"??\",\n      \"&cedil\": \"??\",\n      \"&cedil;\": \"??\",\n      \"&sup1\": \"??\",\n      \"&sup1;\": \"??\",\n      \"&ordm\": \"??\",\n      \"&ordm;\": \"??\",\n      \"&raquo\": \"??\",\n      \"&raquo;\": \"??\",\n      \"&frac14\": \"??\",\n      \"&frac14;\": \"??\",\n      \"&frac12\": \"??\",\n      \"&frac12;\": \"??\",\n      \"&frac34\": \"??\",\n      \"&frac34;\": \"??\",\n      \"&iquest\": \"??\",\n      \"&iquest;\": \"??\",\n      \"&Agrave\": \"??\",\n      \"&Agrave;\": \"??\",\n      \"&Aacute\": \"??\",\n      \"&Aacute;\": \"??\",\n      \"&Acirc\": \"??\",\n      \"&Acirc;\": \"??\",\n      \"&Atilde\": \"??\",\n      \"&Atilde;\": \"??\",\n      \"&Auml\": \"??\",\n      \"&Auml;\": \"??\",\n      \"&Aring\": \"??\",\n      \"&Aring;\": \"??\",\n      \"&AElig\": \"??\",\n      \"&AElig;\": \"??\",\n      \"&Ccedil\": \"??\",\n      \"&Ccedil;\": \"??\",\n      \"&Egrave\": \"??\",\n      \"&Egrave;\": \"??\",\n      \"&Eacute\": \"??\",\n      \"&Eacute;\": \"??\",\n      \"&Ecirc\": \"??\",\n      \"&Ecirc;\": \"??\",\n      \"&Euml\": \"??\",\n      \"&Euml;\": \"??\",\n      \"&Igrave\": \"??\",\n      \"&Igrave;\": \"??\",\n      \"&Iacute\": \"??\",\n      \"&Iacute;\": \"??\",\n      \"&Icirc\": \"??\",\n      \"&Icirc;\": \"??\",\n      \"&Iuml\": \"??\",\n      \"&Iuml;\": \"??\",\n      \"&ETH\": \"??\",\n      \"&ETH;\": \"??\",\n      \"&Ntilde\": \"??\",\n      \"&Ntilde;\": \"??\",\n      \"&Ograve\": \"??\",\n      \"&Ograve;\": \"??\",\n      \"&Oacute\": \"??\",\n      \"&Oacute;\": \"??\",\n      \"&Ocirc\": \"??\",\n      \"&Ocirc;\": \"??\",\n      \"&Otilde\": \"??\",\n      \"&Otilde;\": \"??\",\n      \"&Ouml\": \"??\",\n      \"&Ouml;\": \"??\",\n      \"&times\": \"??\",\n      \"&times;\": \"??\",\n      \"&Oslash\": \"??\",\n      \"&Oslash;\": \"??\",\n      \"&Ugrave\": \"??\",\n      \"&Ugrave;\": \"??\",\n      \"&Uacute\": \"??\",\n      \"&Uacute;\": \"??\",\n      \"&Ucirc\": \"??\",\n      \"&Ucirc;\": \"??\",\n      \"&Uuml\": \"??\",\n      \"&Uuml;\": \"??\",\n      \"&Yacute\": \"??\",\n      \"&Yacute;\": \"??\",\n      \"&THORN\": \"??\",\n      \"&THORN;\": \"??\",\n      \"&szlig\": \"??\",\n      \"&szlig;\": \"??\",\n      \"&agrave\": \"??\",\n      \"&agrave;\": \"??\",\n      \"&aacute\": \"??\",\n      \"&aacute;\": \"??\",\n      \"&acirc\": \"??\",\n      \"&acirc;\": \"??\",\n      \"&atilde\": \"??\",\n      \"&atilde;\": \"??\",\n      \"&auml\": \"??\",\n      \"&auml;\": \"??\",\n      \"&aring\": \"??\",\n      \"&aring;\": \"??\",\n      \"&aelig\": \"??\",\n      \"&aelig;\": \"??\",\n      \"&ccedil\": \"??\",\n      \"&ccedil;\": \"??\",\n      \"&egrave\": \"??\",\n      \"&egrave;\": \"??\",\n      \"&eacute\": \"??\",\n      \"&eacute;\": \"??\",\n      \"&ecirc\": \"??\",\n      \"&ecirc;\": \"??\",\n      \"&euml\": \"??\",\n      \"&euml;\": \"??\",\n      \"&igrave\": \"??\",\n      \"&igrave;\": \"??\",\n      \"&iacute\": \"??\",\n      \"&iacute;\": \"??\",\n      \"&icirc\": \"??\",\n      \"&icirc;\": \"??\",\n      \"&iuml\": \"??\",\n      \"&iuml;\": \"??\",\n      \"&eth\": \"??\",\n      \"&eth;\": \"??\",\n      \"&ntilde\": \"??\",\n      \"&ntilde;\": \"??\",\n      \"&ograve\": \"??\",\n      \"&ograve;\": \"??\",\n      \"&oacute\": \"??\",\n      \"&oacute;\": \"??\",\n      \"&ocirc\": \"??\",\n      \"&ocirc;\": \"??\",\n      \"&otilde\": \"??\",\n      \"&otilde;\": \"??\",\n      \"&ouml\": \"??\",\n      \"&ouml;\": \"??\",\n      \"&divide\": \"??\",\n      \"&divide;\": \"??\",\n      \"&oslash\": \"??\",\n      \"&oslash;\": \"??\",\n      \"&ugrave\": \"??\",\n      \"&ugrave;\": \"??\",\n      \"&uacute\": \"??\",\n      \"&uacute;\": \"??\",\n      \"&ucirc\": \"??\",\n      \"&ucirc;\": \"??\",\n      \"&uuml\": \"??\",\n      \"&uuml;\": \"??\",\n      \"&yacute\": \"??\",\n      \"&yacute;\": \"??\",\n      \"&thorn\": \"??\",\n      \"&thorn;\": \"??\",\n      \"&yuml\": \"??\",\n      \"&yuml;\": \"??\",\n      \"&quot\": '\"',\n      \"&quot;\": '\"',\n      \"&amp\": \"&\",\n      \"&amp;\": \"&\",\n      \"&lt\": \"<\",\n      \"&lt;\": \"<\",\n      \"&gt\": \">\",\n      \"&gt;\": \">\",\n      \"&OElig;\": \"??\",\n      \"&oelig;\": \"??\",\n      \"&Scaron;\": \"??\",\n      \"&scaron;\": \"??\",\n      \"&Yuml;\": \"??\",\n      \"&circ;\": \"??\",\n      \"&tilde;\": \"??\",\n      \"&ensp;\": \"???\",\n      \"&emsp;\": \"???\",\n      \"&thinsp;\": \"???\",\n      \"&zwnj;\": \"???\",\n      \"&zwj;\": \"???\",\n      \"&lrm;\": \"???\",\n      \"&rlm;\": \"???\",\n      \"&ndash;\": \"???\",\n      \"&mdash;\": \"???\",\n      \"&lsquo;\": \"???\",\n      \"&rsquo;\": \"???\",\n      \"&sbquo;\": \"???\",\n      \"&ldquo;\": \"???\",\n      \"&rdquo;\": \"???\",\n      \"&bdquo;\": \"???\",\n      \"&dagger;\": \"???\",\n      \"&Dagger;\": \"???\",\n      \"&permil;\": \"???\",\n      \"&lsaquo;\": \"???\",\n      \"&rsaquo;\": \"???\",\n      \"&euro;\": \"???\",\n      \"&fnof;\": \"??\",\n      \"&Alpha;\": \"??\",\n      \"&Beta;\": \"??\",\n      \"&Gamma;\": \"??\",\n      \"&Delta;\": \"??\",\n      \"&Epsilon;\": \"??\",\n      \"&Zeta;\": \"??\",\n      \"&Eta;\": \"??\",\n      \"&Theta;\": \"??\",\n      \"&Iota;\": \"??\",\n      \"&Kappa;\": \"??\",\n      \"&Lambda;\": \"??\",\n      \"&Mu;\": \"??\",\n      \"&Nu;\": \"??\",\n      \"&Xi;\": \"??\",\n      \"&Omicron;\": \"??\",\n      \"&Pi;\": \"??\",\n      \"&Rho;\": \"??\",\n      \"&Sigma;\": \"??\",\n      \"&Tau;\": \"??\",\n      \"&Upsilon;\": \"??\",\n      \"&Phi;\": \"??\",\n      \"&Chi;\": \"??\",\n      \"&Psi;\": \"??\",\n      \"&Omega;\": \"??\",\n      \"&alpha;\": \"??\",\n      \"&beta;\": \"??\",\n      \"&gamma;\": \"??\",\n      \"&delta;\": \"??\",\n      \"&epsilon;\": \"??\",\n      \"&zeta;\": \"??\",\n      \"&eta;\": \"??\",\n      \"&theta;\": \"??\",\n      \"&iota;\": \"??\",\n      \"&kappa;\": \"??\",\n      \"&lambda;\": \"??\",\n      \"&mu;\": \"??\",\n      \"&nu;\": \"??\",\n      \"&xi;\": \"??\",\n      \"&omicron;\": \"??\",\n      \"&pi;\": \"??\",\n      \"&rho;\": \"??\",\n      \"&sigmaf;\": \"??\",\n      \"&sigma;\": \"??\",\n      \"&tau;\": \"??\",\n      \"&upsilon;\": \"??\",\n      \"&phi;\": \"??\",\n      \"&chi;\": \"??\",\n      \"&psi;\": \"??\",\n      \"&omega;\": \"??\",\n      \"&thetasym;\": \"??\",\n      \"&upsih;\": \"??\",\n      \"&piv;\": \"??\",\n      \"&bull;\": \"???\",\n      \"&hellip;\": \"???\",\n      \"&prime;\": \"???\",\n      \"&Prime;\": \"???\",\n      \"&oline;\": \"???\",\n      \"&frasl;\": \"???\",\n      \"&weierp;\": \"???\",\n      \"&image;\": \"???\",\n      \"&real;\": \"???\",\n      \"&trade;\": \"???\",\n      \"&alefsym;\": \"???\",\n      \"&larr;\": \"???\",\n      \"&uarr;\": \"???\",\n      \"&rarr;\": \"???\",\n      \"&darr;\": \"???\",\n      \"&harr;\": \"???\",\n      \"&crarr;\": \"???\",\n      \"&lArr;\": \"???\",\n      \"&uArr;\": \"???\",\n      \"&rArr;\": \"???\",\n      \"&dArr;\": \"???\",\n      \"&hArr;\": \"???\",\n      \"&forall;\": \"???\",\n      \"&part;\": \"???\",\n      \"&exist;\": \"???\",\n      \"&empty;\": \"???\",\n      \"&nabla;\": \"???\",\n      \"&isin;\": \"???\",\n      \"&notin;\": \"???\",\n      \"&ni;\": \"???\",\n      \"&prod;\": \"???\",\n      \"&sum;\": \"???\",\n      \"&minus;\": \"???\",\n      \"&lowast;\": \"???\",\n      \"&radic;\": \"???\",\n      \"&prop;\": \"???\",\n      \"&infin;\": \"???\",\n      \"&ang;\": \"???\",\n      \"&and;\": \"???\",\n      \"&or;\": \"???\",\n      \"&cap;\": \"???\",\n      \"&cup;\": \"???\",\n      \"&int;\": \"???\",\n      \"&there4;\": \"???\",\n      \"&sim;\": \"???\",\n      \"&cong;\": \"???\",\n      \"&asymp;\": \"???\",\n      \"&ne;\": \"???\",\n      \"&equiv;\": \"???\",\n      \"&le;\": \"???\",\n      \"&ge;\": \"???\",\n      \"&sub;\": \"???\",\n      \"&sup;\": \"???\",\n      \"&nsub;\": \"???\",\n      \"&sube;\": \"???\",\n      \"&supe;\": \"???\",\n      \"&oplus;\": \"???\",\n      \"&otimes;\": \"???\",\n      \"&perp;\": \"???\",\n      \"&sdot;\": \"???\",\n      \"&lceil;\": \"???\",\n      \"&rceil;\": \"???\",\n      \"&lfloor;\": \"???\",\n      \"&rfloor;\": \"???\",\n      \"&lang;\": \"???\",\n      \"&rang;\": \"???\",\n      \"&loz;\": \"???\",\n      \"&spades;\": \"???\",\n      \"&clubs;\": \"???\",\n      \"&hearts;\": \"???\",\n      \"&diams;\": \"???\"\n    },\n    characters: {\n      \"'\": \"&apos;\",\n      \"??\": \"&nbsp;\",\n      \"??\": \"&iexcl;\",\n      \"??\": \"&cent;\",\n      \"??\": \"&pound;\",\n      \"??\": \"&curren;\",\n      \"??\": \"&yen;\",\n      \"??\": \"&brvbar;\",\n      \"??\": \"&sect;\",\n      \"??\": \"&uml;\",\n      \"??\": \"&copy;\",\n      \"??\": \"&ordf;\",\n      \"??\": \"&laquo;\",\n      \"??\": \"&not;\",\n      \"??\": \"&shy;\",\n      \"??\": \"&reg;\",\n      \"??\": \"&macr;\",\n      \"??\": \"&deg;\",\n      \"??\": \"&plusmn;\",\n      \"??\": \"&sup2;\",\n      \"??\": \"&sup3;\",\n      \"??\": \"&acute;\",\n      \"??\": \"&micro;\",\n      \"??\": \"&para;\",\n      \"??\": \"&middot;\",\n      \"??\": \"&cedil;\",\n      \"??\": \"&sup1;\",\n      \"??\": \"&ordm;\",\n      \"??\": \"&raquo;\",\n      \"??\": \"&frac14;\",\n      \"??\": \"&frac12;\",\n      \"??\": \"&frac34;\",\n      \"??\": \"&iquest;\",\n      \"??\": \"&Agrave;\",\n      \"??\": \"&Aacute;\",\n      \"??\": \"&Acirc;\",\n      \"??\": \"&Atilde;\",\n      \"??\": \"&Auml;\",\n      \"??\": \"&Aring;\",\n      \"??\": \"&AElig;\",\n      \"??\": \"&Ccedil;\",\n      \"??\": \"&Egrave;\",\n      \"??\": \"&Eacute;\",\n      \"??\": \"&Ecirc;\",\n      \"??\": \"&Euml;\",\n      \"??\": \"&Igrave;\",\n      \"??\": \"&Iacute;\",\n      \"??\": \"&Icirc;\",\n      \"??\": \"&Iuml;\",\n      \"??\": \"&ETH;\",\n      \"??\": \"&Ntilde;\",\n      \"??\": \"&Ograve;\",\n      \"??\": \"&Oacute;\",\n      \"??\": \"&Ocirc;\",\n      \"??\": \"&Otilde;\",\n      \"??\": \"&Ouml;\",\n      \"??\": \"&times;\",\n      \"??\": \"&Oslash;\",\n      \"??\": \"&Ugrave;\",\n      \"??\": \"&Uacute;\",\n      \"??\": \"&Ucirc;\",\n      \"??\": \"&Uuml;\",\n      \"??\": \"&Yacute;\",\n      \"??\": \"&THORN;\",\n      \"??\": \"&szlig;\",\n      \"??\": \"&agrave;\",\n      \"??\": \"&aacute;\",\n      \"??\": \"&acirc;\",\n      \"??\": \"&atilde;\",\n      \"??\": \"&auml;\",\n      \"??\": \"&aring;\",\n      \"??\": \"&aelig;\",\n      \"??\": \"&ccedil;\",\n      \"??\": \"&egrave;\",\n      \"??\": \"&eacute;\",\n      \"??\": \"&ecirc;\",\n      \"??\": \"&euml;\",\n      \"??\": \"&igrave;\",\n      \"??\": \"&iacute;\",\n      \"??\": \"&icirc;\",\n      \"??\": \"&iuml;\",\n      \"??\": \"&eth;\",\n      \"??\": \"&ntilde;\",\n      \"??\": \"&ograve;\",\n      \"??\": \"&oacute;\",\n      \"??\": \"&ocirc;\",\n      \"??\": \"&otilde;\",\n      \"??\": \"&ouml;\",\n      \"??\": \"&divide;\",\n      \"??\": \"&oslash;\",\n      \"??\": \"&ugrave;\",\n      \"??\": \"&uacute;\",\n      \"??\": \"&ucirc;\",\n      \"??\": \"&uuml;\",\n      \"??\": \"&yacute;\",\n      \"??\": \"&thorn;\",\n      \"??\": \"&yuml;\",\n      '\"': \"&quot;\",\n      \"&\": \"&amp;\",\n      \"<\": \"&lt;\",\n      \">\": \"&gt;\",\n      \"??\": \"&OElig;\",\n      \"??\": \"&oelig;\",\n      \"??\": \"&Scaron;\",\n      \"??\": \"&scaron;\",\n      \"??\": \"&Yuml;\",\n      \"??\": \"&circ;\",\n      \"??\": \"&tilde;\",\n      \"???\": \"&ensp;\",\n      \"???\": \"&emsp;\",\n      \"???\": \"&thinsp;\",\n      \"???\": \"&zwnj;\",\n      \"???\": \"&zwj;\",\n      \"???\": \"&lrm;\",\n      \"???\": \"&rlm;\",\n      \"???\": \"&ndash;\",\n      \"???\": \"&mdash;\",\n      \"???\": \"&lsquo;\",\n      \"???\": \"&rsquo;\",\n      \"???\": \"&sbquo;\",\n      \"???\": \"&ldquo;\",\n      \"???\": \"&rdquo;\",\n      \"???\": \"&bdquo;\",\n      \"???\": \"&dagger;\",\n      \"???\": \"&Dagger;\",\n      \"???\": \"&permil;\",\n      \"???\": \"&lsaquo;\",\n      \"???\": \"&rsaquo;\",\n      \"???\": \"&euro;\",\n      \"??\": \"&fnof;\",\n      \"??\": \"&Alpha;\",\n      \"??\": \"&Beta;\",\n      \"??\": \"&Gamma;\",\n      \"??\": \"&Delta;\",\n      \"??\": \"&Epsilon;\",\n      \"??\": \"&Zeta;\",\n      \"??\": \"&Eta;\",\n      \"??\": \"&Theta;\",\n      \"??\": \"&Iota;\",\n      \"??\": \"&Kappa;\",\n      \"??\": \"&Lambda;\",\n      \"??\": \"&Mu;\",\n      \"??\": \"&Nu;\",\n      \"??\": \"&Xi;\",\n      \"??\": \"&Omicron;\",\n      \"??\": \"&Pi;\",\n      \"??\": \"&Rho;\",\n      \"??\": \"&Sigma;\",\n      \"??\": \"&Tau;\",\n      \"??\": \"&Upsilon;\",\n      \"??\": \"&Phi;\",\n      \"??\": \"&Chi;\",\n      \"??\": \"&Psi;\",\n      \"??\": \"&Omega;\",\n      \"??\": \"&alpha;\",\n      \"??\": \"&beta;\",\n      \"??\": \"&gamma;\",\n      \"??\": \"&delta;\",\n      \"??\": \"&epsilon;\",\n      \"??\": \"&zeta;\",\n      \"??\": \"&eta;\",\n      \"??\": \"&theta;\",\n      \"??\": \"&iota;\",\n      \"??\": \"&kappa;\",\n      \"??\": \"&lambda;\",\n      \"??\": \"&mu;\",\n      \"??\": \"&nu;\",\n      \"??\": \"&xi;\",\n      \"??\": \"&omicron;\",\n      \"??\": \"&pi;\",\n      \"??\": \"&rho;\",\n      \"??\": \"&sigmaf;\",\n      \"??\": \"&sigma;\",\n      \"??\": \"&tau;\",\n      \"??\": \"&upsilon;\",\n      \"??\": \"&phi;\",\n      \"??\": \"&chi;\",\n      \"??\": \"&psi;\",\n      \"??\": \"&omega;\",\n      \"??\": \"&thetasym;\",\n      \"??\": \"&upsih;\",\n      \"??\": \"&piv;\",\n      \"???\": \"&bull;\",\n      \"???\": \"&hellip;\",\n      \"???\": \"&prime;\",\n      \"???\": \"&Prime;\",\n      \"???\": \"&oline;\",\n      \"???\": \"&frasl;\",\n      \"???\": \"&weierp;\",\n      \"???\": \"&image;\",\n      \"???\": \"&real;\",\n      \"???\": \"&trade;\",\n      \"???\": \"&alefsym;\",\n      \"???\": \"&larr;\",\n      \"???\": \"&uarr;\",\n      \"???\": \"&rarr;\",\n      \"???\": \"&darr;\",\n      \"???\": \"&harr;\",\n      \"???\": \"&crarr;\",\n      \"???\": \"&lArr;\",\n      \"???\": \"&uArr;\",\n      \"???\": \"&rArr;\",\n      \"???\": \"&dArr;\",\n      \"???\": \"&hArr;\",\n      \"???\": \"&forall;\",\n      \"???\": \"&part;\",\n      \"???\": \"&exist;\",\n      \"???\": \"&empty;\",\n      \"???\": \"&nabla;\",\n      \"???\": \"&isin;\",\n      \"???\": \"&notin;\",\n      \"???\": \"&ni;\",\n      \"???\": \"&prod;\",\n      \"???\": \"&sum;\",\n      \"???\": \"&minus;\",\n      \"???\": \"&lowast;\",\n      \"???\": \"&radic;\",\n      \"???\": \"&prop;\",\n      \"???\": \"&infin;\",\n      \"???\": \"&ang;\",\n      \"???\": \"&and;\",\n      \"???\": \"&or;\",\n      \"???\": \"&cap;\",\n      \"???\": \"&cup;\",\n      \"???\": \"&int;\",\n      \"???\": \"&there4;\",\n      \"???\": \"&sim;\",\n      \"???\": \"&cong;\",\n      \"???\": \"&asymp;\",\n      \"???\": \"&ne;\",\n      \"???\": \"&equiv;\",\n      \"???\": \"&le;\",\n      \"???\": \"&ge;\",\n      \"???\": \"&sub;\",\n      \"???\": \"&sup;\",\n      \"???\": \"&nsub;\",\n      \"???\": \"&sube;\",\n      \"???\": \"&supe;\",\n      \"???\": \"&oplus;\",\n      \"???\": \"&otimes;\",\n      \"???\": \"&perp;\",\n      \"???\": \"&sdot;\",\n      \"???\": \"&lceil;\",\n      \"???\": \"&rceil;\",\n      \"???\": \"&lfloor;\",\n      \"???\": \"&rfloor;\",\n      \"???\": \"&lang;\",\n      \"???\": \"&rang;\",\n      \"???\": \"&loz;\",\n      \"???\": \"&spades;\",\n      \"???\": \"&clubs;\",\n      \"???\": \"&hearts;\",\n      \"???\": \"&diams;\"\n    }\n  },\n  html5: {\n    entities: {\n      \"&AElig\": \"??\",\n      \"&AElig;\": \"??\",\n      \"&AMP\": \"&\",\n      \"&AMP;\": \"&\",\n      \"&Aacute\": \"??\",\n      \"&Aacute;\": \"??\",\n      \"&Abreve;\": \"??\",\n      \"&Acirc\": \"??\",\n      \"&Acirc;\": \"??\",\n      \"&Acy;\": \"??\",\n      \"&Afr;\": \"????\",\n      \"&Agrave\": \"??\",\n      \"&Agrave;\": \"??\",\n      \"&Alpha;\": \"??\",\n      \"&Amacr;\": \"??\",\n      \"&And;\": \"???\",\n      \"&Aogon;\": \"??\",\n      \"&Aopf;\": \"????\",\n      \"&ApplyFunction;\": \"???\",\n      \"&Aring\": \"??\",\n      \"&Aring;\": \"??\",\n      \"&Ascr;\": \"????\",\n      \"&Assign;\": \"???\",\n      \"&Atilde\": \"??\",\n      \"&Atilde;\": \"??\",\n      \"&Auml\": \"??\",\n      \"&Auml;\": \"??\",\n      \"&Backslash;\": \"???\",\n      \"&Barv;\": \"???\",\n      \"&Barwed;\": \"???\",\n      \"&Bcy;\": \"??\",\n      \"&Because;\": \"???\",\n      \"&Bernoullis;\": \"???\",\n      \"&Beta;\": \"??\",\n      \"&Bfr;\": \"????\",\n      \"&Bopf;\": \"????\",\n      \"&Breve;\": \"??\",\n      \"&Bscr;\": \"???\",\n      \"&Bumpeq;\": \"???\",\n      \"&CHcy;\": \"??\",\n      \"&COPY\": \"??\",\n      \"&COPY;\": \"??\",\n      \"&Cacute;\": \"??\",\n      \"&Cap;\": \"???\",\n      \"&CapitalDifferentialD;\": \"???\",\n      \"&Cayleys;\": \"???\",\n      \"&Ccaron;\": \"??\",\n      \"&Ccedil\": \"??\",\n      \"&Ccedil;\": \"??\",\n      \"&Ccirc;\": \"??\",\n      \"&Cconint;\": \"???\",\n      \"&Cdot;\": \"??\",\n      \"&Cedilla;\": \"??\",\n      \"&CenterDot;\": \"??\",\n      \"&Cfr;\": \"???\",\n      \"&Chi;\": \"??\",\n      \"&CircleDot;\": \"???\",\n      \"&CircleMinus;\": \"???\",\n      \"&CirclePlus;\": \"???\",\n      \"&CircleTimes;\": \"???\",\n      \"&ClockwiseContourIntegral;\": \"???\",\n      \"&CloseCurlyDoubleQuote;\": \"???\",\n      \"&CloseCurlyQuote;\": \"???\",\n      \"&Colon;\": \"???\",\n      \"&Colone;\": \"???\",\n      \"&Congruent;\": \"???\",\n      \"&Conint;\": \"???\",\n      \"&ContourIntegral;\": \"???\",\n      \"&Copf;\": \"???\",\n      \"&Coproduct;\": \"???\",\n      \"&CounterClockwiseContourIntegral;\": \"???\",\n      \"&Cross;\": \"???\",\n      \"&Cscr;\": \"????\",\n      \"&Cup;\": \"???\",\n      \"&CupCap;\": \"???\",\n      \"&DD;\": \"???\",\n      \"&DDotrahd;\": \"???\",\n      \"&DJcy;\": \"??\",\n      \"&DScy;\": \"??\",\n      \"&DZcy;\": \"??\",\n      \"&Dagger;\": \"???\",\n      \"&Darr;\": \"???\",\n      \"&Dashv;\": \"???\",\n      \"&Dcaron;\": \"??\",\n      \"&Dcy;\": \"??\",\n      \"&Del;\": \"???\",\n      \"&Delta;\": \"??\",\n      \"&Dfr;\": \"????\",\n      \"&DiacriticalAcute;\": \"??\",\n      \"&DiacriticalDot;\": \"??\",\n      \"&DiacriticalDoubleAcute;\": \"??\",\n      \"&DiacriticalGrave;\": \"`\",\n      \"&DiacriticalTilde;\": \"??\",\n      \"&Diamond;\": \"???\",\n      \"&DifferentialD;\": \"???\",\n      \"&Dopf;\": \"????\",\n      \"&Dot;\": \"??\",\n      \"&DotDot;\": \"???\",\n      \"&DotEqual;\": \"???\",\n      \"&DoubleContourIntegral;\": \"???\",\n      \"&DoubleDot;\": \"??\",\n      \"&DoubleDownArrow;\": \"???\",\n      \"&DoubleLeftArrow;\": \"???\",\n      \"&DoubleLeftRightArrow;\": \"???\",\n      \"&DoubleLeftTee;\": \"???\",\n      \"&DoubleLongLeftArrow;\": \"???\",\n      \"&DoubleLongLeftRightArrow;\": \"???\",\n      \"&DoubleLongRightArrow;\": \"???\",\n      \"&DoubleRightArrow;\": \"???\",\n      \"&DoubleRightTee;\": \"???\",\n      \"&DoubleUpArrow;\": \"???\",\n      \"&DoubleUpDownArrow;\": \"???\",\n      \"&DoubleVerticalBar;\": \"???\",\n      \"&DownArrow;\": \"???\",\n      \"&DownArrowBar;\": \"???\",\n      \"&DownArrowUpArrow;\": \"???\",\n      \"&DownBreve;\": \"??\",\n      \"&DownLeftRightVector;\": \"???\",\n      \"&DownLeftTeeVector;\": \"???\",\n      \"&DownLeftVector;\": \"???\",\n      \"&DownLeftVectorBar;\": \"???\",\n      \"&DownRightTeeVector;\": \"???\",\n      \"&DownRightVector;\": \"???\",\n      \"&DownRightVectorBar;\": \"???\",\n      \"&DownTee;\": \"???\",\n      \"&DownTeeArrow;\": \"???\",\n      \"&Downarrow;\": \"???\",\n      \"&Dscr;\": \"????\",\n      \"&Dstrok;\": \"??\",\n      \"&ENG;\": \"??\",\n      \"&ETH\": \"??\",\n      \"&ETH;\": \"??\",\n      \"&Eacute\": \"??\",\n      \"&Eacute;\": \"??\",\n      \"&Ecaron;\": \"??\",\n      \"&Ecirc\": \"??\",\n      \"&Ecirc;\": \"??\",\n      \"&Ecy;\": \"??\",\n      \"&Edot;\": \"??\",\n      \"&Efr;\": \"????\",\n      \"&Egrave\": \"??\",\n      \"&Egrave;\": \"??\",\n      \"&Element;\": \"???\",\n      \"&Emacr;\": \"??\",\n      \"&EmptySmallSquare;\": \"???\",\n      \"&EmptyVerySmallSquare;\": \"???\",\n      \"&Eogon;\": \"??\",\n      \"&Eopf;\": \"????\",\n      \"&Epsilon;\": \"??\",\n      \"&Equal;\": \"???\",\n      \"&EqualTilde;\": \"???\",\n      \"&Equilibrium;\": \"???\",\n      \"&Escr;\": \"???\",\n      \"&Esim;\": \"???\",\n      \"&Eta;\": \"??\",\n      \"&Euml\": \"??\",\n      \"&Euml;\": \"??\",\n      \"&Exists;\": \"???\",\n      \"&ExponentialE;\": \"???\",\n      \"&Fcy;\": \"??\",\n      \"&Ffr;\": \"????\",\n      \"&FilledSmallSquare;\": \"???\",\n      \"&FilledVerySmallSquare;\": \"???\",\n      \"&Fopf;\": \"????\",\n      \"&ForAll;\": \"???\",\n      \"&Fouriertrf;\": \"???\",\n      \"&Fscr;\": \"???\",\n      \"&GJcy;\": \"??\",\n      \"&GT\": \">\",\n      \"&GT;\": \">\",\n      \"&Gamma;\": \"??\",\n      \"&Gammad;\": \"??\",\n      \"&Gbreve;\": \"??\",\n      \"&Gcedil;\": \"??\",\n      \"&Gcirc;\": \"??\",\n      \"&Gcy;\": \"??\",\n      \"&Gdot;\": \"??\",\n      \"&Gfr;\": \"????\",\n      \"&Gg;\": \"???\",\n      \"&Gopf;\": \"????\",\n      \"&GreaterEqual;\": \"???\",\n      \"&GreaterEqualLess;\": \"???\",\n      \"&GreaterFullEqual;\": \"???\",\n      \"&GreaterGreater;\": \"???\",\n      \"&GreaterLess;\": \"???\",\n      \"&GreaterSlantEqual;\": \"???\",\n      \"&GreaterTilde;\": \"???\",\n      \"&Gscr;\": \"????\",\n      \"&Gt;\": \"???\",\n      \"&HARDcy;\": \"??\",\n      \"&Hacek;\": \"??\",\n      \"&Hat;\": \"^\",\n      \"&Hcirc;\": \"??\",\n      \"&Hfr;\": \"???\",\n      \"&HilbertSpace;\": \"???\",\n      \"&Hopf;\": \"???\",\n      \"&HorizontalLine;\": \"???\",\n      \"&Hscr;\": \"???\",\n      \"&Hstrok;\": \"??\",\n      \"&HumpDownHump;\": \"???\",\n      \"&HumpEqual;\": \"???\",\n      \"&IEcy;\": \"??\",\n      \"&IJlig;\": \"??\",\n      \"&IOcy;\": \"??\",\n      \"&Iacute\": \"??\",\n      \"&Iacute;\": \"??\",\n      \"&Icirc\": \"??\",\n      \"&Icirc;\": \"??\",\n      \"&Icy;\": \"??\",\n      \"&Idot;\": \"??\",\n      \"&Ifr;\": \"???\",\n      \"&Igrave\": \"??\",\n      \"&Igrave;\": \"??\",\n      \"&Im;\": \"???\",\n      \"&Imacr;\": \"??\",\n      \"&ImaginaryI;\": \"???\",\n      \"&Implies;\": \"???\",\n      \"&Int;\": \"???\",\n      \"&Integral;\": \"???\",\n      \"&Intersection;\": \"???\",\n      \"&InvisibleComma;\": \"???\",\n      \"&InvisibleTimes;\": \"???\",\n      \"&Iogon;\": \"??\",\n      \"&Iopf;\": \"????\",\n      \"&Iota;\": \"??\",\n      \"&Iscr;\": \"???\",\n      \"&Itilde;\": \"??\",\n      \"&Iukcy;\": \"??\",\n      \"&Iuml\": \"??\",\n      \"&Iuml;\": \"??\",\n      \"&Jcirc;\": \"??\",\n      \"&Jcy;\": \"??\",\n      \"&Jfr;\": \"????\",\n      \"&Jopf;\": \"????\",\n      \"&Jscr;\": \"????\",\n      \"&Jsercy;\": \"??\",\n      \"&Jukcy;\": \"??\",\n      \"&KHcy;\": \"??\",\n      \"&KJcy;\": \"??\",\n      \"&Kappa;\": \"??\",\n      \"&Kcedil;\": \"??\",\n      \"&Kcy;\": \"??\",\n      \"&Kfr;\": \"????\",\n      \"&Kopf;\": \"????\",\n      \"&Kscr;\": \"????\",\n      \"&LJcy;\": \"??\",\n      \"&LT\": \"<\",\n      \"&LT;\": \"<\",\n      \"&Lacute;\": \"??\",\n      \"&Lambda;\": \"??\",\n      \"&Lang;\": \"???\",\n      \"&Laplacetrf;\": \"???\",\n      \"&Larr;\": \"???\",\n      \"&Lcaron;\": \"??\",\n      \"&Lcedil;\": \"??\",\n      \"&Lcy;\": \"??\",\n      \"&LeftAngleBracket;\": \"???\",\n      \"&LeftArrow;\": \"???\",\n      \"&LeftArrowBar;\": \"???\",\n      \"&LeftArrowRightArrow;\": \"???\",\n      \"&LeftCeiling;\": \"???\",\n      \"&LeftDoubleBracket;\": \"???\",\n      \"&LeftDownTeeVector;\": \"???\",\n      \"&LeftDownVector;\": \"???\",\n      \"&LeftDownVectorBar;\": \"???\",\n      \"&LeftFloor;\": \"???\",\n      \"&LeftRightArrow;\": \"???\",\n      \"&LeftRightVector;\": \"???\",\n      \"&LeftTee;\": \"???\",\n      \"&LeftTeeArrow;\": \"???\",\n      \"&LeftTeeVector;\": \"???\",\n      \"&LeftTriangle;\": \"???\",\n      \"&LeftTriangleBar;\": \"???\",\n      \"&LeftTriangleEqual;\": \"???\",\n      \"&LeftUpDownVector;\": \"???\",\n      \"&LeftUpTeeVector;\": \"???\",\n      \"&LeftUpVector;\": \"???\",\n      \"&LeftUpVectorBar;\": \"???\",\n      \"&LeftVector;\": \"???\",\n      \"&LeftVectorBar;\": \"???\",\n      \"&Leftarrow;\": \"???\",\n      \"&Leftrightarrow;\": \"???\",\n      \"&LessEqualGreater;\": \"???\",\n      \"&LessFullEqual;\": \"???\",\n      \"&LessGreater;\": \"???\",\n      \"&LessLess;\": \"???\",\n      \"&LessSlantEqual;\": \"???\",\n      \"&LessTilde;\": \"???\",\n      \"&Lfr;\": \"????\",\n      \"&Ll;\": \"???\",\n      \"&Lleftarrow;\": \"???\",\n      \"&Lmidot;\": \"??\",\n      \"&LongLeftArrow;\": \"???\",\n      \"&LongLeftRightArrow;\": \"???\",\n      \"&LongRightArrow;\": \"???\",\n      \"&Longleftarrow;\": \"???\",\n      \"&Longleftrightarrow;\": \"???\",\n      \"&Longrightarrow;\": \"???\",\n      \"&Lopf;\": \"????\",\n      \"&LowerLeftArrow;\": \"???\",\n      \"&LowerRightArrow;\": \"???\",\n      \"&Lscr;\": \"???\",\n      \"&Lsh;\": \"???\",\n      \"&Lstrok;\": \"??\",\n      \"&Lt;\": \"???\",\n      \"&Map;\": \"???\",\n      \"&Mcy;\": \"??\",\n      \"&MediumSpace;\": \"???\",\n      \"&Mellintrf;\": \"???\",\n      \"&Mfr;\": \"????\",\n      \"&MinusPlus;\": \"???\",\n      \"&Mopf;\": \"????\",\n      \"&Mscr;\": \"???\",\n      \"&Mu;\": \"??\",\n      \"&NJcy;\": \"??\",\n      \"&Nacute;\": \"??\",\n      \"&Ncaron;\": \"??\",\n      \"&Ncedil;\": \"??\",\n      \"&Ncy;\": \"??\",\n      \"&NegativeMediumSpace;\": \"???\",\n      \"&NegativeThickSpace;\": \"???\",\n      \"&NegativeThinSpace;\": \"???\",\n      \"&NegativeVeryThinSpace;\": \"???\",\n      \"&NestedGreaterGreater;\": \"???\",\n      \"&NestedLessLess;\": \"???\",\n      \"&NewLine;\": \"\\n\",\n      \"&Nfr;\": \"????\",\n      \"&NoBreak;\": \"???\",\n      \"&NonBreakingSpace;\": \"??\",\n      \"&Nopf;\": \"???\",\n      \"&Not;\": \"???\",\n      \"&NotCongruent;\": \"???\",\n      \"&NotCupCap;\": \"???\",\n      \"&NotDoubleVerticalBar;\": \"???\",\n      \"&NotElement;\": \"???\",\n      \"&NotEqual;\": \"???\",\n      \"&NotEqualTilde;\": \"?????\",\n      \"&NotExists;\": \"???\",\n      \"&NotGreater;\": \"???\",\n      \"&NotGreaterEqual;\": \"???\",\n      \"&NotGreaterFullEqual;\": \"?????\",\n      \"&NotGreaterGreater;\": \"?????\",\n      \"&NotGreaterLess;\": \"???\",\n      \"&NotGreaterSlantEqual;\": \"?????\",\n      \"&NotGreaterTilde;\": \"???\",\n      \"&NotHumpDownHump;\": \"?????\",\n      \"&NotHumpEqual;\": \"?????\",\n      \"&NotLeftTriangle;\": \"???\",\n      \"&NotLeftTriangleBar;\": \"?????\",\n      \"&NotLeftTriangleEqual;\": \"???\",\n      \"&NotLess;\": \"???\",\n      \"&NotLessEqual;\": \"???\",\n      \"&NotLessGreater;\": \"???\",\n      \"&NotLessLess;\": \"?????\",\n      \"&NotLessSlantEqual;\": \"?????\",\n      \"&NotLessTilde;\": \"???\",\n      \"&NotNestedGreaterGreater;\": \"?????\",\n      \"&NotNestedLessLess;\": \"?????\",\n      \"&NotPrecedes;\": \"???\",\n      \"&NotPrecedesEqual;\": \"?????\",\n      \"&NotPrecedesSlantEqual;\": \"???\",\n      \"&NotReverseElement;\": \"???\",\n      \"&NotRightTriangle;\": \"???\",\n      \"&NotRightTriangleBar;\": \"?????\",\n      \"&NotRightTriangleEqual;\": \"???\",\n      \"&NotSquareSubset;\": \"?????\",\n      \"&NotSquareSubsetEqual;\": \"???\",\n      \"&NotSquareSuperset;\": \"?????\",\n      \"&NotSquareSupersetEqual;\": \"???\",\n      \"&NotSubset;\": \"??????\",\n      \"&NotSubsetEqual;\": \"???\",\n      \"&NotSucceeds;\": \"???\",\n      \"&NotSucceedsEqual;\": \"?????\",\n      \"&NotSucceedsSlantEqual;\": \"???\",\n      \"&NotSucceedsTilde;\": \"?????\",\n      \"&NotSuperset;\": \"??????\",\n      \"&NotSupersetEqual;\": \"???\",\n      \"&NotTilde;\": \"???\",\n      \"&NotTildeEqual;\": \"???\",\n      \"&NotTildeFullEqual;\": \"???\",\n      \"&NotTildeTilde;\": \"???\",\n      \"&NotVerticalBar;\": \"???\",\n      \"&Nscr;\": \"????\",\n      \"&Ntilde\": \"??\",\n      \"&Ntilde;\": \"??\",\n      \"&Nu;\": \"??\",\n      \"&OElig;\": \"??\",\n      \"&Oacute\": \"??\",\n      \"&Oacute;\": \"??\",\n      \"&Ocirc\": \"??\",\n      \"&Ocirc;\": \"??\",\n      \"&Ocy;\": \"??\",\n      \"&Odblac;\": \"??\",\n      \"&Ofr;\": \"????\",\n      \"&Ograve\": \"??\",\n      \"&Ograve;\": \"??\",\n      \"&Omacr;\": \"??\",\n      \"&Omega;\": \"??\",\n      \"&Omicron;\": \"??\",\n      \"&Oopf;\": \"????\",\n      \"&OpenCurlyDoubleQuote;\": \"???\",\n      \"&OpenCurlyQuote;\": \"???\",\n      \"&Or;\": \"???\",\n      \"&Oscr;\": \"????\",\n      \"&Oslash\": \"??\",\n      \"&Oslash;\": \"??\",\n      \"&Otilde\": \"??\",\n      \"&Otilde;\": \"??\",\n      \"&Otimes;\": \"???\",\n      \"&Ouml\": \"??\",\n      \"&Ouml;\": \"??\",\n      \"&OverBar;\": \"???\",\n      \"&OverBrace;\": \"???\",\n      \"&OverBracket;\": \"???\",\n      \"&OverParenthesis;\": \"???\",\n      \"&PartialD;\": \"???\",\n      \"&Pcy;\": \"??\",\n      \"&Pfr;\": \"????\",\n      \"&Phi;\": \"??\",\n      \"&Pi;\": \"??\",\n      \"&PlusMinus;\": \"??\",\n      \"&Poincareplane;\": \"???\",\n      \"&Popf;\": \"???\",\n      \"&Pr;\": \"???\",\n      \"&Precedes;\": \"???\",\n      \"&PrecedesEqual;\": \"???\",\n      \"&PrecedesSlantEqual;\": \"???\",\n      \"&PrecedesTilde;\": \"???\",\n      \"&Prime;\": \"???\",\n      \"&Product;\": \"???\",\n      \"&Proportion;\": \"???\",\n      \"&Proportional;\": \"???\",\n      \"&Pscr;\": \"????\",\n      \"&Psi;\": \"??\",\n      \"&QUOT\": '\"',\n      \"&QUOT;\": '\"',\n      \"&Qfr;\": \"????\",\n      \"&Qopf;\": \"???\",\n      \"&Qscr;\": \"????\",\n      \"&RBarr;\": \"???\",\n      \"&REG\": \"??\",\n      \"&REG;\": \"??\",\n      \"&Racute;\": \"??\",\n      \"&Rang;\": \"???\",\n      \"&Rarr;\": \"???\",\n      \"&Rarrtl;\": \"???\",\n      \"&Rcaron;\": \"??\",\n      \"&Rcedil;\": \"??\",\n      \"&Rcy;\": \"??\",\n      \"&Re;\": \"???\",\n      \"&ReverseElement;\": \"???\",\n      \"&ReverseEquilibrium;\": \"???\",\n      \"&ReverseUpEquilibrium;\": \"???\",\n      \"&Rfr;\": \"???\",\n      \"&Rho;\": \"??\",\n      \"&RightAngleBracket;\": \"???\",\n      \"&RightArrow;\": \"???\",\n      \"&RightArrowBar;\": \"???\",\n      \"&RightArrowLeftArrow;\": \"???\",\n      \"&RightCeiling;\": \"???\",\n      \"&RightDoubleBracket;\": \"???\",\n      \"&RightDownTeeVector;\": \"???\",\n      \"&RightDownVector;\": \"???\",\n      \"&RightDownVectorBar;\": \"???\",\n      \"&RightFloor;\": \"???\",\n      \"&RightTee;\": \"???\",\n      \"&RightTeeArrow;\": \"???\",\n      \"&RightTeeVector;\": \"???\",\n      \"&RightTriangle;\": \"???\",\n      \"&RightTriangleBar;\": \"???\",\n      \"&RightTriangleEqual;\": \"???\",\n      \"&RightUpDownVector;\": \"???\",\n      \"&RightUpTeeVector;\": \"???\",\n      \"&RightUpVector;\": \"???\",\n      \"&RightUpVectorBar;\": \"???\",\n      \"&RightVector;\": \"???\",\n      \"&RightVectorBar;\": \"???\",\n      \"&Rightarrow;\": \"???\",\n      \"&Ropf;\": \"???\",\n      \"&RoundImplies;\": \"???\",\n      \"&Rrightarrow;\": \"???\",\n      \"&Rscr;\": \"???\",\n      \"&Rsh;\": \"???\",\n      \"&RuleDelayed;\": \"???\",\n      \"&SHCHcy;\": \"??\",\n      \"&SHcy;\": \"??\",\n      \"&SOFTcy;\": \"??\",\n      \"&Sacute;\": \"??\",\n      \"&Sc;\": \"???\",\n      \"&Scaron;\": \"??\",\n      \"&Scedil;\": \"??\",\n      \"&Scirc;\": \"??\",\n      \"&Scy;\": \"??\",\n      \"&Sfr;\": \"????\",\n      \"&ShortDownArrow;\": \"???\",\n      \"&ShortLeftArrow;\": \"???\",\n      \"&ShortRightArrow;\": \"???\",\n      \"&ShortUpArrow;\": \"???\",\n      \"&Sigma;\": \"??\",\n      \"&SmallCircle;\": \"???\",\n      \"&Sopf;\": \"????\",\n      \"&Sqrt;\": \"???\",\n      \"&Square;\": \"???\",\n      \"&SquareIntersection;\": \"???\",\n      \"&SquareSubset;\": \"???\",\n      \"&SquareSubsetEqual;\": \"???\",\n      \"&SquareSuperset;\": \"???\",\n      \"&SquareSupersetEqual;\": \"???\",\n      \"&SquareUnion;\": \"???\",\n      \"&Sscr;\": \"????\",\n      \"&Star;\": \"???\",\n      \"&Sub;\": \"???\",\n      \"&Subset;\": \"???\",\n      \"&SubsetEqual;\": \"???\",\n      \"&Succeeds;\": \"???\",\n      \"&SucceedsEqual;\": \"???\",\n      \"&SucceedsSlantEqual;\": \"???\",\n      \"&SucceedsTilde;\": \"???\",\n      \"&SuchThat;\": \"???\",\n      \"&Sum;\": \"???\",\n      \"&Sup;\": \"???\",\n      \"&Superset;\": \"???\",\n      \"&SupersetEqual;\": \"???\",\n      \"&Supset;\": \"???\",\n      \"&THORN\": \"??\",\n      \"&THORN;\": \"??\",\n      \"&TRADE;\": \"???\",\n      \"&TSHcy;\": \"??\",\n      \"&TScy;\": \"??\",\n      \"&Tab;\": \"\\t\",\n      \"&Tau;\": \"??\",\n      \"&Tcaron;\": \"??\",\n      \"&Tcedil;\": \"??\",\n      \"&Tcy;\": \"??\",\n      \"&Tfr;\": \"????\",\n      \"&Therefore;\": \"???\",\n      \"&Theta;\": \"??\",\n      \"&ThickSpace;\": \"??????\",\n      \"&ThinSpace;\": \"???\",\n      \"&Tilde;\": \"???\",\n      \"&TildeEqual;\": \"???\",\n      \"&TildeFullEqual;\": \"???\",\n      \"&TildeTilde;\": \"???\",\n      \"&Topf;\": \"????\",\n      \"&TripleDot;\": \"???\",\n      \"&Tscr;\": \"????\",\n      \"&Tstrok;\": \"??\",\n      \"&Uacute\": \"??\",\n      \"&Uacute;\": \"??\",\n      \"&Uarr;\": \"???\",\n      \"&Uarrocir;\": \"???\",\n      \"&Ubrcy;\": \"??\",\n      \"&Ubreve;\": \"??\",\n      \"&Ucirc\": \"??\",\n      \"&Ucirc;\": \"??\",\n      \"&Ucy;\": \"??\",\n      \"&Udblac;\": \"??\",\n      \"&Ufr;\": \"????\",\n      \"&Ugrave\": \"??\",\n      \"&Ugrave;\": \"??\",\n      \"&Umacr;\": \"??\",\n      \"&UnderBar;\": \"_\",\n      \"&UnderBrace;\": \"???\",\n      \"&UnderBracket;\": \"???\",\n      \"&UnderParenthesis;\": \"???\",\n      \"&Union;\": \"???\",\n      \"&UnionPlus;\": \"???\",\n      \"&Uogon;\": \"??\",\n      \"&Uopf;\": \"????\",\n      \"&UpArrow;\": \"???\",\n      \"&UpArrowBar;\": \"???\",\n      \"&UpArrowDownArrow;\": \"???\",\n      \"&UpDownArrow;\": \"???\",\n      \"&UpEquilibrium;\": \"???\",\n      \"&UpTee;\": \"???\",\n      \"&UpTeeArrow;\": \"???\",\n      \"&Uparrow;\": \"???\",\n      \"&Updownarrow;\": \"???\",\n      \"&UpperLeftArrow;\": \"???\",\n      \"&UpperRightArrow;\": \"???\",\n      \"&Upsi;\": \"??\",\n      \"&Upsilon;\": \"??\",\n      \"&Uring;\": \"??\",\n      \"&Uscr;\": \"????\",\n      \"&Utilde;\": \"??\",\n      \"&Uuml\": \"??\",\n      \"&Uuml;\": \"??\",\n      \"&VDash;\": \"???\",\n      \"&Vbar;\": \"???\",\n      \"&Vcy;\": \"??\",\n      \"&Vdash;\": \"???\",\n      \"&Vdashl;\": \"???\",\n      \"&Vee;\": \"???\",\n      \"&Verbar;\": \"???\",\n      \"&Vert;\": \"???\",\n      \"&VerticalBar;\": \"???\",\n      \"&VerticalLine;\": \"|\",\n      \"&VerticalSeparator;\": \"???\",\n      \"&VerticalTilde;\": \"???\",\n      \"&VeryThinSpace;\": \"???\",\n      \"&Vfr;\": \"????\",\n      \"&Vopf;\": \"????\",\n      \"&Vscr;\": \"????\",\n      \"&Vvdash;\": \"???\",\n      \"&Wcirc;\": \"??\",\n      \"&Wedge;\": \"???\",\n      \"&Wfr;\": \"????\",\n      \"&Wopf;\": \"????\",\n      \"&Wscr;\": \"????\",\n      \"&Xfr;\": \"????\",\n      \"&Xi;\": \"??\",\n      \"&Xopf;\": \"????\",\n      \"&Xscr;\": \"????\",\n      \"&YAcy;\": \"??\",\n      \"&YIcy;\": \"??\",\n      \"&YUcy;\": \"??\",\n      \"&Yacute\": \"??\",\n      \"&Yacute;\": \"??\",\n      \"&Ycirc;\": \"??\",\n      \"&Ycy;\": \"??\",\n      \"&Yfr;\": \"????\",\n      \"&Yopf;\": \"????\",\n      \"&Yscr;\": \"????\",\n      \"&Yuml;\": \"??\",\n      \"&ZHcy;\": \"??\",\n      \"&Zacute;\": \"??\",\n      \"&Zcaron;\": \"??\",\n      \"&Zcy;\": \"??\",\n      \"&Zdot;\": \"??\",\n      \"&ZeroWidthSpace;\": \"???\",\n      \"&Zeta;\": \"??\",\n      \"&Zfr;\": \"???\",\n      \"&Zopf;\": \"???\",\n      \"&Zscr;\": \"????\",\n      \"&aacute\": \"??\",\n      \"&aacute;\": \"??\",\n      \"&abreve;\": \"??\",\n      \"&ac;\": \"???\",\n      \"&acE;\": \"?????\",\n      \"&acd;\": \"???\",\n      \"&acirc\": \"??\",\n      \"&acirc;\": \"??\",\n      \"&acute\": \"??\",\n      \"&acute;\": \"??\",\n      \"&acy;\": \"??\",\n      \"&aelig\": \"??\",\n      \"&aelig;\": \"??\",\n      \"&af;\": \"???\",\n      \"&afr;\": \"????\",\n      \"&agrave\": \"??\",\n      \"&agrave;\": \"??\",\n      \"&alefsym;\": \"???\",\n      \"&aleph;\": \"???\",\n      \"&alpha;\": \"??\",\n      \"&amacr;\": \"??\",\n      \"&amalg;\": \"???\",\n      \"&amp\": \"&\",\n      \"&amp;\": \"&\",\n      \"&and;\": \"???\",\n      \"&andand;\": \"???\",\n      \"&andd;\": \"???\",\n      \"&andslope;\": \"???\",\n      \"&andv;\": \"???\",\n      \"&ang;\": \"???\",\n      \"&ange;\": \"???\",\n      \"&angle;\": \"???\",\n      \"&angmsd;\": \"???\",\n      \"&angmsdaa;\": \"???\",\n      \"&angmsdab;\": \"???\",\n      \"&angmsdac;\": \"???\",\n      \"&angmsdad;\": \"???\",\n      \"&angmsdae;\": \"???\",\n      \"&angmsdaf;\": \"???\",\n      \"&angmsdag;\": \"???\",\n      \"&angmsdah;\": \"???\",\n      \"&angrt;\": \"???\",\n      \"&angrtvb;\": \"???\",\n      \"&angrtvbd;\": \"???\",\n      \"&angsph;\": \"???\",\n      \"&angst;\": \"??\",\n      \"&angzarr;\": \"???\",\n      \"&aogon;\": \"??\",\n      \"&aopf;\": \"????\",\n      \"&ap;\": \"???\",\n      \"&apE;\": \"???\",\n      \"&apacir;\": \"???\",\n      \"&ape;\": \"???\",\n      \"&apid;\": \"???\",\n      \"&apos;\": \"'\",\n      \"&approx;\": \"???\",\n      \"&approxeq;\": \"???\",\n      \"&aring\": \"??\",\n      \"&aring;\": \"??\",\n      \"&ascr;\": \"????\",\n      \"&ast;\": \"*\",\n      \"&asymp;\": \"???\",\n      \"&asympeq;\": \"???\",\n      \"&atilde\": \"??\",\n      \"&atilde;\": \"??\",\n      \"&auml\": \"??\",\n      \"&auml;\": \"??\",\n      \"&awconint;\": \"???\",\n      \"&awint;\": \"???\",\n      \"&bNot;\": \"???\",\n      \"&backcong;\": \"???\",\n      \"&backepsilon;\": \"??\",\n      \"&backprime;\": \"???\",\n      \"&backsim;\": \"???\",\n      \"&backsimeq;\": \"???\",\n      \"&barvee;\": \"???\",\n      \"&barwed;\": \"???\",\n      \"&barwedge;\": \"???\",\n      \"&bbrk;\": \"???\",\n      \"&bbrktbrk;\": \"???\",\n      \"&bcong;\": \"???\",\n      \"&bcy;\": \"??\",\n      \"&bdquo;\": \"???\",\n      \"&becaus;\": \"???\",\n      \"&because;\": \"???\",\n      \"&bemptyv;\": \"???\",\n      \"&bepsi;\": \"??\",\n      \"&bernou;\": \"???\",\n      \"&beta;\": \"??\",\n      \"&beth;\": \"???\",\n      \"&between;\": \"???\",\n      \"&bfr;\": \"????\",\n      \"&bigcap;\": \"???\",\n      \"&bigcirc;\": \"???\",\n      \"&bigcup;\": \"???\",\n      \"&bigodot;\": \"???\",\n      \"&bigoplus;\": \"???\",\n      \"&bigotimes;\": \"???\",\n      \"&bigsqcup;\": \"???\",\n      \"&bigstar;\": \"???\",\n      \"&bigtriangledown;\": \"???\",\n      \"&bigtriangleup;\": \"???\",\n      \"&biguplus;\": \"???\",\n      \"&bigvee;\": \"???\",\n      \"&bigwedge;\": \"???\",\n      \"&bkarow;\": \"???\",\n      \"&blacklozenge;\": \"???\",\n      \"&blacksquare;\": \"???\",\n      \"&blacktriangle;\": \"???\",\n      \"&blacktriangledown;\": \"???\",\n      \"&blacktriangleleft;\": \"???\",\n      \"&blacktriangleright;\": \"???\",\n      \"&blank;\": \"???\",\n      \"&blk12;\": \"???\",\n      \"&blk14;\": \"???\",\n      \"&blk34;\": \"???\",\n      \"&block;\": \"???\",\n      \"&bne;\": \"=???\",\n      \"&bnequiv;\": \"??????\",\n      \"&bnot;\": \"???\",\n      \"&bopf;\": \"????\",\n      \"&bot;\": \"???\",\n      \"&bottom;\": \"???\",\n      \"&bowtie;\": \"???\",\n      \"&boxDL;\": \"???\",\n      \"&boxDR;\": \"???\",\n      \"&boxDl;\": \"???\",\n      \"&boxDr;\": \"???\",\n      \"&boxH;\": \"???\",\n      \"&boxHD;\": \"???\",\n      \"&boxHU;\": \"???\",\n      \"&boxHd;\": \"???\",\n      \"&boxHu;\": \"???\",\n      \"&boxUL;\": \"???\",\n      \"&boxUR;\": \"???\",\n      \"&boxUl;\": \"???\",\n      \"&boxUr;\": \"???\",\n      \"&boxV;\": \"???\",\n      \"&boxVH;\": \"???\",\n      \"&boxVL;\": \"???\",\n      \"&boxVR;\": \"???\",\n      \"&boxVh;\": \"???\",\n      \"&boxVl;\": \"???\",\n      \"&boxVr;\": \"???\",\n      \"&boxbox;\": \"???\",\n      \"&boxdL;\": \"???\",\n      \"&boxdR;\": \"???\",\n      \"&boxdl;\": \"???\",\n      \"&boxdr;\": \"???\",\n      \"&boxh;\": \"???\",\n      \"&boxhD;\": \"???\",\n      \"&boxhU;\": \"???\",\n      \"&boxhd;\": \"???\",\n      \"&boxhu;\": \"???\",\n      \"&boxminus;\": \"???\",\n      \"&boxplus;\": \"???\",\n      \"&boxtimes;\": \"???\",\n      \"&boxuL;\": \"???\",\n      \"&boxuR;\": \"???\",\n      \"&boxul;\": \"???\",\n      \"&boxur;\": \"???\",\n      \"&boxv;\": \"???\",\n      \"&boxvH;\": \"???\",\n      \"&boxvL;\": \"???\",\n      \"&boxvR;\": \"???\",\n      \"&boxvh;\": \"???\",\n      \"&boxvl;\": \"???\",\n      \"&boxvr;\": \"???\",\n      \"&bprime;\": \"???\",\n      \"&breve;\": \"??\",\n      \"&brvbar\": \"??\",\n      \"&brvbar;\": \"??\",\n      \"&bscr;\": \"????\",\n      \"&bsemi;\": \"???\",\n      \"&bsim;\": \"???\",\n      \"&bsime;\": \"???\",\n      \"&bsol;\": \"\\\\\",\n      \"&bsolb;\": \"???\",\n      \"&bsolhsub;\": \"???\",\n      \"&bull;\": \"???\",\n      \"&bullet;\": \"???\",\n      \"&bump;\": \"???\",\n      \"&bumpE;\": \"???\",\n      \"&bumpe;\": \"???\",\n      \"&bumpeq;\": \"???\",\n      \"&cacute;\": \"??\",\n      \"&cap;\": \"???\",\n      \"&capand;\": \"???\",\n      \"&capbrcup;\": \"???\",\n      \"&capcap;\": \"???\",\n      \"&capcup;\": \"???\",\n      \"&capdot;\": \"???\",\n      \"&caps;\": \"??????\",\n      \"&caret;\": \"???\",\n      \"&caron;\": \"??\",\n      \"&ccaps;\": \"???\",\n      \"&ccaron;\": \"??\",\n      \"&ccedil\": \"??\",\n      \"&ccedil;\": \"??\",\n      \"&ccirc;\": \"??\",\n      \"&ccups;\": \"???\",\n      \"&ccupssm;\": \"???\",\n      \"&cdot;\": \"??\",\n      \"&cedil\": \"??\",\n      \"&cedil;\": \"??\",\n      \"&cemptyv;\": \"???\",\n      \"&cent\": \"??\",\n      \"&cent;\": \"??\",\n      \"&centerdot;\": \"??\",\n      \"&cfr;\": \"????\",\n      \"&chcy;\": \"??\",\n      \"&check;\": \"???\",\n      \"&checkmark;\": \"???\",\n      \"&chi;\": \"??\",\n      \"&cir;\": \"???\",\n      \"&cirE;\": \"???\",\n      \"&circ;\": \"??\",\n      \"&circeq;\": \"???\",\n      \"&circlearrowleft;\": \"???\",\n      \"&circlearrowright;\": \"???\",\n      \"&circledR;\": \"??\",\n      \"&circledS;\": \"???\",\n      \"&circledast;\": \"???\",\n      \"&circledcirc;\": \"???\",\n      \"&circleddash;\": \"???\",\n      \"&cire;\": \"???\",\n      \"&cirfnint;\": \"???\",\n      \"&cirmid;\": \"???\",\n      \"&cirscir;\": \"???\",\n      \"&clubs;\": \"???\",\n      \"&clubsuit;\": \"???\",\n      \"&colon;\": \":\",\n      \"&colone;\": \"???\",\n      \"&coloneq;\": \"???\",\n      \"&comma;\": \",\",\n      \"&commat;\": \"@\",\n      \"&comp;\": \"???\",\n      \"&compfn;\": \"???\",\n      \"&complement;\": \"???\",\n      \"&complexes;\": \"???\",\n      \"&cong;\": \"???\",\n      \"&congdot;\": \"???\",\n      \"&conint;\": \"???\",\n      \"&copf;\": \"????\",\n      \"&coprod;\": \"???\",\n      \"&copy\": \"??\",\n      \"&copy;\": \"??\",\n      \"&copysr;\": \"???\",\n      \"&crarr;\": \"???\",\n      \"&cross;\": \"???\",\n      \"&cscr;\": \"????\",\n      \"&csub;\": \"???\",\n      \"&csube;\": \"???\",\n      \"&csup;\": \"???\",\n      \"&csupe;\": \"???\",\n      \"&ctdot;\": \"???\",\n      \"&cudarrl;\": \"???\",\n      \"&cudarrr;\": \"???\",\n      \"&cuepr;\": \"???\",\n      \"&cuesc;\": \"???\",\n      \"&cularr;\": \"???\",\n      \"&cularrp;\": \"???\",\n      \"&cup;\": \"???\",\n      \"&cupbrcap;\": \"???\",\n      \"&cupcap;\": \"???\",\n      \"&cupcup;\": \"???\",\n      \"&cupdot;\": \"???\",\n      \"&cupor;\": \"???\",\n      \"&cups;\": \"??????\",\n      \"&curarr;\": \"???\",\n      \"&curarrm;\": \"???\",\n      \"&curlyeqprec;\": \"???\",\n      \"&curlyeqsucc;\": \"???\",\n      \"&curlyvee;\": \"???\",\n      \"&curlywedge;\": \"???\",\n      \"&curren\": \"??\",\n      \"&curren;\": \"??\",\n      \"&curvearrowleft;\": \"???\",\n      \"&curvearrowright;\": \"???\",\n      \"&cuvee;\": \"???\",\n      \"&cuwed;\": \"???\",\n      \"&cwconint;\": \"???\",\n      \"&cwint;\": \"???\",\n      \"&cylcty;\": \"???\",\n      \"&dArr;\": \"???\",\n      \"&dHar;\": \"???\",\n      \"&dagger;\": \"???\",\n      \"&daleth;\": \"???\",\n      \"&darr;\": \"???\",\n      \"&dash;\": \"???\",\n      \"&dashv;\": \"???\",\n      \"&dbkarow;\": \"???\",\n      \"&dblac;\": \"??\",\n      \"&dcaron;\": \"??\",\n      \"&dcy;\": \"??\",\n      \"&dd;\": \"???\",\n      \"&ddagger;\": \"???\",\n      \"&ddarr;\": \"???\",\n      \"&ddotseq;\": \"???\",\n      \"&deg\": \"??\",\n      \"&deg;\": \"??\",\n      \"&delta;\": \"??\",\n      \"&demptyv;\": \"???\",\n      \"&dfisht;\": \"???\",\n      \"&dfr;\": \"????\",\n      \"&dharl;\": \"???\",\n      \"&dharr;\": \"???\",\n      \"&diam;\": \"???\",\n      \"&diamond;\": \"???\",\n      \"&diamondsuit;\": \"???\",\n      \"&diams;\": \"???\",\n      \"&die;\": \"??\",\n      \"&digamma;\": \"??\",\n      \"&disin;\": \"???\",\n      \"&div;\": \"??\",\n      \"&divide\": \"??\",\n      \"&divide;\": \"??\",\n      \"&divideontimes;\": \"???\",\n      \"&divonx;\": \"???\",\n      \"&djcy;\": \"??\",\n      \"&dlcorn;\": \"???\",\n      \"&dlcrop;\": \"???\",\n      \"&dollar;\": \"$\",\n      \"&dopf;\": \"????\",\n      \"&dot;\": \"??\",\n      \"&doteq;\": \"???\",\n      \"&doteqdot;\": \"???\",\n      \"&dotminus;\": \"???\",\n      \"&dotplus;\": \"???\",\n      \"&dotsquare;\": \"???\",\n      \"&doublebarwedge;\": \"???\",\n      \"&downarrow;\": \"???\",\n      \"&downdownarrows;\": \"???\",\n      \"&downharpoonleft;\": \"???\",\n      \"&downharpoonright;\": \"???\",\n      \"&drbkarow;\": \"???\",\n      \"&drcorn;\": \"???\",\n      \"&drcrop;\": \"???\",\n      \"&dscr;\": \"????\",\n      \"&dscy;\": \"??\",\n      \"&dsol;\": \"???\",\n      \"&dstrok;\": \"??\",\n      \"&dtdot;\": \"???\",\n      \"&dtri;\": \"???\",\n      \"&dtrif;\": \"???\",\n      \"&duarr;\": \"???\",\n      \"&duhar;\": \"???\",\n      \"&dwangle;\": \"???\",\n      \"&dzcy;\": \"??\",\n      \"&dzigrarr;\": \"???\",\n      \"&eDDot;\": \"???\",\n      \"&eDot;\": \"???\",\n      \"&eacute\": \"??\",\n      \"&eacute;\": \"??\",\n      \"&easter;\": \"???\",\n      \"&ecaron;\": \"??\",\n      \"&ecir;\": \"???\",\n      \"&ecirc\": \"??\",\n      \"&ecirc;\": \"??\",\n      \"&ecolon;\": \"???\",\n      \"&ecy;\": \"??\",\n      \"&edot;\": \"??\",\n      \"&ee;\": \"???\",\n      \"&efDot;\": \"???\",\n      \"&efr;\": \"????\",\n      \"&eg;\": \"???\",\n      \"&egrave\": \"??\",\n      \"&egrave;\": \"??\",\n      \"&egs;\": \"???\",\n      \"&egsdot;\": \"???\",\n      \"&el;\": \"???\",\n      \"&elinters;\": \"???\",\n      \"&ell;\": \"???\",\n      \"&els;\": \"???\",\n      \"&elsdot;\": \"???\",\n      \"&emacr;\": \"??\",\n      \"&empty;\": \"???\",\n      \"&emptyset;\": \"???\",\n      \"&emptyv;\": \"???\",\n      \"&emsp13;\": \"???\",\n      \"&emsp14;\": \"???\",\n      \"&emsp;\": \"???\",\n      \"&eng;\": \"??\",\n      \"&ensp;\": \"???\",\n      \"&eogon;\": \"??\",\n      \"&eopf;\": \"????\",\n      \"&epar;\": \"???\",\n      \"&eparsl;\": \"???\",\n      \"&eplus;\": \"???\",\n      \"&epsi;\": \"??\",\n      \"&epsilon;\": \"??\",\n      \"&epsiv;\": \"??\",\n      \"&eqcirc;\": \"???\",\n      \"&eqcolon;\": \"???\",\n      \"&eqsim;\": \"???\",\n      \"&eqslantgtr;\": \"???\",\n      \"&eqslantless;\": \"???\",\n      \"&equals;\": \"=\",\n      \"&equest;\": \"???\",\n      \"&equiv;\": \"???\",\n      \"&equivDD;\": \"???\",\n      \"&eqvparsl;\": \"???\",\n      \"&erDot;\": \"???\",\n      \"&erarr;\": \"???\",\n      \"&escr;\": \"???\",\n      \"&esdot;\": \"???\",\n      \"&esim;\": \"???\",\n      \"&eta;\": \"??\",\n      \"&eth\": \"??\",\n      \"&eth;\": \"??\",\n      \"&euml\": \"??\",\n      \"&euml;\": \"??\",\n      \"&euro;\": \"???\",\n      \"&excl;\": \"!\",\n      \"&exist;\": \"???\",\n      \"&expectation;\": \"???\",\n      \"&exponentiale;\": \"???\",\n      \"&fallingdotseq;\": \"???\",\n      \"&fcy;\": \"??\",\n      \"&female;\": \"???\",\n      \"&ffilig;\": \"???\",\n      \"&fflig;\": \"???\",\n      \"&ffllig;\": \"???\",\n      \"&ffr;\": \"????\",\n      \"&filig;\": \"???\",\n      \"&fjlig;\": \"fj\",\n      \"&flat;\": \"???\",\n      \"&fllig;\": \"???\",\n      \"&fltns;\": \"???\",\n      \"&fnof;\": \"??\",\n      \"&fopf;\": \"????\",\n      \"&forall;\": \"???\",\n      \"&fork;\": \"???\",\n      \"&forkv;\": \"???\",\n      \"&fpartint;\": \"???\",\n      \"&frac12\": \"??\",\n      \"&frac12;\": \"??\",\n      \"&frac13;\": \"???\",\n      \"&frac14\": \"??\",\n      \"&frac14;\": \"??\",\n      \"&frac15;\": \"???\",\n      \"&frac16;\": \"???\",\n      \"&frac18;\": \"???\",\n      \"&frac23;\": \"???\",\n      \"&frac25;\": \"???\",\n      \"&frac34\": \"??\",\n      \"&frac34;\": \"??\",\n      \"&frac35;\": \"???\",\n      \"&frac38;\": \"???\",\n      \"&frac45;\": \"???\",\n      \"&frac56;\": \"???\",\n      \"&frac58;\": \"???\",\n      \"&frac78;\": \"???\",\n      \"&frasl;\": \"???\",\n      \"&frown;\": \"???\",\n      \"&fscr;\": \"????\",\n      \"&gE;\": \"???\",\n      \"&gEl;\": \"???\",\n      \"&gacute;\": \"??\",\n      \"&gamma;\": \"??\",\n      \"&gammad;\": \"??\",\n      \"&gap;\": \"???\",\n      \"&gbreve;\": \"??\",\n      \"&gcirc;\": \"??\",\n      \"&gcy;\": \"??\",\n      \"&gdot;\": \"??\",\n      \"&ge;\": \"???\",\n      \"&gel;\": \"???\",\n      \"&geq;\": \"???\",\n      \"&geqq;\": \"???\",\n      \"&geqslant;\": \"???\",\n      \"&ges;\": \"???\",\n      \"&gescc;\": \"???\",\n      \"&gesdot;\": \"???\",\n      \"&gesdoto;\": \"???\",\n      \"&gesdotol;\": \"???\",\n      \"&gesl;\": \"??????\",\n      \"&gesles;\": \"???\",\n      \"&gfr;\": \"????\",\n      \"&gg;\": \"???\",\n      \"&ggg;\": \"???\",\n      \"&gimel;\": \"???\",\n      \"&gjcy;\": \"??\",\n      \"&gl;\": \"???\",\n      \"&glE;\": \"???\",\n      \"&gla;\": \"???\",\n      \"&glj;\": \"???\",\n      \"&gnE;\": \"???\",\n      \"&gnap;\": \"???\",\n      \"&gnapprox;\": \"???\",\n      \"&gne;\": \"???\",\n      \"&gneq;\": \"???\",\n      \"&gneqq;\": \"???\",\n      \"&gnsim;\": \"???\",\n      \"&gopf;\": \"????\",\n      \"&grave;\": \"`\",\n      \"&gscr;\": \"???\",\n      \"&gsim;\": \"???\",\n      \"&gsime;\": \"???\",\n      \"&gsiml;\": \"???\",\n      \"&gt\": \">\",\n      \"&gt;\": \">\",\n      \"&gtcc;\": \"???\",\n      \"&gtcir;\": \"???\",\n      \"&gtdot;\": \"???\",\n      \"&gtlPar;\": \"???\",\n      \"&gtquest;\": \"???\",\n      \"&gtrapprox;\": \"???\",\n      \"&gtrarr;\": \"???\",\n      \"&gtrdot;\": \"???\",\n      \"&gtreqless;\": \"???\",\n      \"&gtreqqless;\": \"???\",\n      \"&gtrless;\": \"???\",\n      \"&gtrsim;\": \"???\",\n      \"&gvertneqq;\": \"??????\",\n      \"&gvnE;\": \"??????\",\n      \"&hArr;\": \"???\",\n      \"&hairsp;\": \"???\",\n      \"&half;\": \"??\",\n      \"&hamilt;\": \"???\",\n      \"&hardcy;\": \"??\",\n      \"&harr;\": \"???\",\n      \"&harrcir;\": \"???\",\n      \"&harrw;\": \"???\",\n      \"&hbar;\": \"???\",\n      \"&hcirc;\": \"??\",\n      \"&hearts;\": \"???\",\n      \"&heartsuit;\": \"???\",\n      \"&hellip;\": \"???\",\n      \"&hercon;\": \"???\",\n      \"&hfr;\": \"????\",\n      \"&hksearow;\": \"???\",\n      \"&hkswarow;\": \"???\",\n      \"&hoarr;\": \"???\",\n      \"&homtht;\": \"???\",\n      \"&hookleftarrow;\": \"???\",\n      \"&hookrightarrow;\": \"???\",\n      \"&hopf;\": \"????\",\n      \"&horbar;\": \"???\",\n      \"&hscr;\": \"????\",\n      \"&hslash;\": \"???\",\n      \"&hstrok;\": \"??\",\n      \"&hybull;\": \"???\",\n      \"&hyphen;\": \"???\",\n      \"&iacute\": \"??\",\n      \"&iacute;\": \"??\",\n      \"&ic;\": \"???\",\n      \"&icirc\": \"??\",\n      \"&icirc;\": \"??\",\n      \"&icy;\": \"??\",\n      \"&iecy;\": \"??\",\n      \"&iexcl\": \"??\",\n      \"&iexcl;\": \"??\",\n      \"&iff;\": \"???\",\n      \"&ifr;\": \"????\",\n      \"&igrave\": \"??\",\n      \"&igrave;\": \"??\",\n      \"&ii;\": \"???\",\n      \"&iiiint;\": \"???\",\n      \"&iiint;\": \"???\",\n      \"&iinfin;\": \"???\",\n      \"&iiota;\": \"???\",\n      \"&ijlig;\": \"??\",\n      \"&imacr;\": \"??\",\n      \"&image;\": \"???\",\n      \"&imagline;\": \"???\",\n      \"&imagpart;\": \"???\",\n      \"&imath;\": \"??\",\n      \"&imof;\": \"???\",\n      \"&imped;\": \"??\",\n      \"&in;\": \"???\",\n      \"&incare;\": \"???\",\n      \"&infin;\": \"???\",\n      \"&infintie;\": \"???\",\n      \"&inodot;\": \"??\",\n      \"&int;\": \"???\",\n      \"&intcal;\": \"???\",\n      \"&integers;\": \"???\",\n      \"&intercal;\": \"???\",\n      \"&intlarhk;\": \"???\",\n      \"&intprod;\": \"???\",\n      \"&iocy;\": \"??\",\n      \"&iogon;\": \"??\",\n      \"&iopf;\": \"????\",\n      \"&iota;\": \"??\",\n      \"&iprod;\": \"???\",\n      \"&iquest\": \"??\",\n      \"&iquest;\": \"??\",\n      \"&iscr;\": \"????\",\n      \"&isin;\": \"???\",\n      \"&isinE;\": \"???\",\n      \"&isindot;\": \"???\",\n      \"&isins;\": \"???\",\n      \"&isinsv;\": \"???\",\n      \"&isinv;\": \"???\",\n      \"&it;\": \"???\",\n      \"&itilde;\": \"??\",\n      \"&iukcy;\": \"??\",\n      \"&iuml\": \"??\",\n      \"&iuml;\": \"??\",\n      \"&jcirc;\": \"??\",\n      \"&jcy;\": \"??\",\n      \"&jfr;\": \"????\",\n      \"&jmath;\": \"??\",\n      \"&jopf;\": \"????\",\n      \"&jscr;\": \"????\",\n      \"&jsercy;\": \"??\",\n      \"&jukcy;\": \"??\",\n      \"&kappa;\": \"??\",\n      \"&kappav;\": \"??\",\n      \"&kcedil;\": \"??\",\n      \"&kcy;\": \"??\",\n      \"&kfr;\": \"????\",\n      \"&kgreen;\": \"??\",\n      \"&khcy;\": \"??\",\n      \"&kjcy;\": \"??\",\n      \"&kopf;\": \"????\",\n      \"&kscr;\": \"????\",\n      \"&lAarr;\": \"???\",\n      \"&lArr;\": \"???\",\n      \"&lAtail;\": \"???\",\n      \"&lBarr;\": \"???\",\n      \"&lE;\": \"???\",\n      \"&lEg;\": \"???\",\n      \"&lHar;\": \"???\",\n      \"&lacute;\": \"??\",\n      \"&laemptyv;\": \"???\",\n      \"&lagran;\": \"???\",\n      \"&lambda;\": \"??\",\n      \"&lang;\": \"???\",\n      \"&langd;\": \"???\",\n      \"&langle;\": \"???\",\n      \"&lap;\": \"???\",\n      \"&laquo\": \"??\",\n      \"&laquo;\": \"??\",\n      \"&larr;\": \"???\",\n      \"&larrb;\": \"???\",\n      \"&larrbfs;\": \"???\",\n      \"&larrfs;\": \"???\",\n      \"&larrhk;\": \"???\",\n      \"&larrlp;\": \"???\",\n      \"&larrpl;\": \"???\",\n      \"&larrsim;\": \"???\",\n      \"&larrtl;\": \"???\",\n      \"&lat;\": \"???\",\n      \"&latail;\": \"???\",\n      \"&late;\": \"???\",\n      \"&lates;\": \"??????\",\n      \"&lbarr;\": \"???\",\n      \"&lbbrk;\": \"???\",\n      \"&lbrace;\": \"{\",\n      \"&lbrack;\": \"[\",\n      \"&lbrke;\": \"???\",\n      \"&lbrksld;\": \"???\",\n      \"&lbrkslu;\": \"???\",\n      \"&lcaron;\": \"??\",\n      \"&lcedil;\": \"??\",\n      \"&lceil;\": \"???\",\n      \"&lcub;\": \"{\",\n      \"&lcy;\": \"??\",\n      \"&ldca;\": \"???\",\n      \"&ldquo;\": \"???\",\n      \"&ldquor;\": \"???\",\n      \"&ldrdhar;\": \"???\",\n      \"&ldrushar;\": \"???\",\n      \"&ldsh;\": \"???\",\n      \"&le;\": \"???\",\n      \"&leftarrow;\": \"???\",\n      \"&leftarrowtail;\": \"???\",\n      \"&leftharpoondown;\": \"???\",\n      \"&leftharpoonup;\": \"???\",\n      \"&leftleftarrows;\": \"???\",\n      \"&leftrightarrow;\": \"???\",\n      \"&leftrightarrows;\": \"???\",\n      \"&leftrightharpoons;\": \"???\",\n      \"&leftrightsquigarrow;\": \"???\",\n      \"&leftthreetimes;\": \"???\",\n      \"&leg;\": \"???\",\n      \"&leq;\": \"???\",\n      \"&leqq;\": \"???\",\n      \"&leqslant;\": \"???\",\n      \"&les;\": \"???\",\n      \"&lescc;\": \"???\",\n      \"&lesdot;\": \"???\",\n      \"&lesdoto;\": \"???\",\n      \"&lesdotor;\": \"???\",\n      \"&lesg;\": \"??????\",\n      \"&lesges;\": \"???\",\n      \"&lessapprox;\": \"???\",\n      \"&lessdot;\": \"???\",\n      \"&lesseqgtr;\": \"???\",\n      \"&lesseqqgtr;\": \"???\",\n      \"&lessgtr;\": \"???\",\n      \"&lesssim;\": \"???\",\n      \"&lfisht;\": \"???\",\n      \"&lfloor;\": \"???\",\n      \"&lfr;\": \"????\",\n      \"&lg;\": \"???\",\n      \"&lgE;\": \"???\",\n      \"&lhard;\": \"???\",\n      \"&lharu;\": \"???\",\n      \"&lharul;\": \"???\",\n      \"&lhblk;\": \"???\",\n      \"&ljcy;\": \"??\",\n      \"&ll;\": \"???\",\n      \"&llarr;\": \"???\",\n      \"&llcorner;\": \"???\",\n      \"&llhard;\": \"???\",\n      \"&lltri;\": \"???\",\n      \"&lmidot;\": \"??\",\n      \"&lmoust;\": \"???\",\n      \"&lmoustache;\": \"???\",\n      \"&lnE;\": \"???\",\n      \"&lnap;\": \"???\",\n      \"&lnapprox;\": \"???\",\n      \"&lne;\": \"???\",\n      \"&lneq;\": \"???\",\n      \"&lneqq;\": \"???\",\n      \"&lnsim;\": \"???\",\n      \"&loang;\": \"???\",\n      \"&loarr;\": \"???\",\n      \"&lobrk;\": \"???\",\n      \"&longleftarrow;\": \"???\",\n      \"&longleftrightarrow;\": \"???\",\n      \"&longmapsto;\": \"???\",\n      \"&longrightarrow;\": \"???\",\n      \"&looparrowleft;\": \"???\",\n      \"&looparrowright;\": \"???\",\n      \"&lopar;\": \"???\",\n      \"&lopf;\": \"????\",\n      \"&loplus;\": \"???\",\n      \"&lotimes;\": \"???\",\n      \"&lowast;\": \"???\",\n      \"&lowbar;\": \"_\",\n      \"&loz;\": \"???\",\n      \"&lozenge;\": \"???\",\n      \"&lozf;\": \"???\",\n      \"&lpar;\": \"(\",\n      \"&lparlt;\": \"???\",\n      \"&lrarr;\": \"???\",\n      \"&lrcorner;\": \"???\",\n      \"&lrhar;\": \"???\",\n      \"&lrhard;\": \"???\",\n      \"&lrm;\": \"???\",\n      \"&lrtri;\": \"???\",\n      \"&lsaquo;\": \"???\",\n      \"&lscr;\": \"????\",\n      \"&lsh;\": \"???\",\n      \"&lsim;\": \"???\",\n      \"&lsime;\": \"???\",\n      \"&lsimg;\": \"???\",\n      \"&lsqb;\": \"[\",\n      \"&lsquo;\": \"???\",\n      \"&lsquor;\": \"???\",\n      \"&lstrok;\": \"??\",\n      \"&lt\": \"<\",\n      \"&lt;\": \"<\",\n      \"&ltcc;\": \"???\",\n      \"&ltcir;\": \"???\",\n      \"&ltdot;\": \"???\",\n      \"&lthree;\": \"???\",\n      \"&ltimes;\": \"???\",\n      \"&ltlarr;\": \"???\",\n      \"&ltquest;\": \"???\",\n      \"&ltrPar;\": \"???\",\n      \"&ltri;\": \"???\",\n      \"&ltrie;\": \"???\",\n      \"&ltrif;\": \"???\",\n      \"&lurdshar;\": \"???\",\n      \"&luruhar;\": \"???\",\n      \"&lvertneqq;\": \"??????\",\n      \"&lvnE;\": \"??????\",\n      \"&mDDot;\": \"???\",\n      \"&macr\": \"??\",\n      \"&macr;\": \"??\",\n      \"&male;\": \"???\",\n      \"&malt;\": \"???\",\n      \"&maltese;\": \"???\",\n      \"&map;\": \"???\",\n      \"&mapsto;\": \"???\",\n      \"&mapstodown;\": \"???\",\n      \"&mapstoleft;\": \"???\",\n      \"&mapstoup;\": \"???\",\n      \"&marker;\": \"???\",\n      \"&mcomma;\": \"???\",\n      \"&mcy;\": \"??\",\n      \"&mdash;\": \"???\",\n      \"&measuredangle;\": \"???\",\n      \"&mfr;\": \"????\",\n      \"&mho;\": \"???\",\n      \"&micro\": \"??\",\n      \"&micro;\": \"??\",\n      \"&mid;\": \"???\",\n      \"&midast;\": \"*\",\n      \"&midcir;\": \"???\",\n      \"&middot\": \"??\",\n      \"&middot;\": \"??\",\n      \"&minus;\": \"???\",\n      \"&minusb;\": \"???\",\n      \"&minusd;\": \"???\",\n      \"&minusdu;\": \"???\",\n      \"&mlcp;\": \"???\",\n      \"&mldr;\": \"???\",\n      \"&mnplus;\": \"???\",\n      \"&models;\": \"???\",\n      \"&mopf;\": \"????\",\n      \"&mp;\": \"???\",\n      \"&mscr;\": \"????\",\n      \"&mstpos;\": \"???\",\n      \"&mu;\": \"??\",\n      \"&multimap;\": \"???\",\n      \"&mumap;\": \"???\",\n      \"&nGg;\": \"?????\",\n      \"&nGt;\": \"??????\",\n      \"&nGtv;\": \"?????\",\n      \"&nLeftarrow;\": \"???\",\n      \"&nLeftrightarrow;\": \"???\",\n      \"&nLl;\": \"?????\",\n      \"&nLt;\": \"??????\",\n      \"&nLtv;\": \"?????\",\n      \"&nRightarrow;\": \"???\",\n      \"&nVDash;\": \"???\",\n      \"&nVdash;\": \"???\",\n      \"&nabla;\": \"???\",\n      \"&nacute;\": \"??\",\n      \"&nang;\": \"??????\",\n      \"&nap;\": \"???\",\n      \"&napE;\": \"?????\",\n      \"&napid;\": \"?????\",\n      \"&napos;\": \"??\",\n      \"&napprox;\": \"???\",\n      \"&natur;\": \"???\",\n      \"&natural;\": \"???\",\n      \"&naturals;\": \"???\",\n      \"&nbsp\": \"??\",\n      \"&nbsp;\": \"??\",\n      \"&nbump;\": \"?????\",\n      \"&nbumpe;\": \"?????\",\n      \"&ncap;\": \"???\",\n      \"&ncaron;\": \"??\",\n      \"&ncedil;\": \"??\",\n      \"&ncong;\": \"???\",\n      \"&ncongdot;\": \"?????\",\n      \"&ncup;\": \"???\",\n      \"&ncy;\": \"??\",\n      \"&ndash;\": \"???\",\n      \"&ne;\": \"???\",\n      \"&neArr;\": \"???\",\n      \"&nearhk;\": \"???\",\n      \"&nearr;\": \"???\",\n      \"&nearrow;\": \"???\",\n      \"&nedot;\": \"?????\",\n      \"&nequiv;\": \"???\",\n      \"&nesear;\": \"???\",\n      \"&nesim;\": \"?????\",\n      \"&nexist;\": \"???\",\n      \"&nexists;\": \"???\",\n      \"&nfr;\": \"????\",\n      \"&ngE;\": \"?????\",\n      \"&nge;\": \"???\",\n      \"&ngeq;\": \"???\",\n      \"&ngeqq;\": \"?????\",\n      \"&ngeqslant;\": \"?????\",\n      \"&nges;\": \"?????\",\n      \"&ngsim;\": \"???\",\n      \"&ngt;\": \"???\",\n      \"&ngtr;\": \"???\",\n      \"&nhArr;\": \"???\",\n      \"&nharr;\": \"???\",\n      \"&nhpar;\": \"???\",\n      \"&ni;\": \"???\",\n      \"&nis;\": \"???\",\n      \"&nisd;\": \"???\",\n      \"&niv;\": \"???\",\n      \"&njcy;\": \"??\",\n      \"&nlArr;\": \"???\",\n      \"&nlE;\": \"?????\",\n      \"&nlarr;\": \"???\",\n      \"&nldr;\": \"???\",\n      \"&nle;\": \"???\",\n      \"&nleftarrow;\": \"???\",\n      \"&nleftrightarrow;\": \"???\",\n      \"&nleq;\": \"???\",\n      \"&nleqq;\": \"?????\",\n      \"&nleqslant;\": \"?????\",\n      \"&nles;\": \"?????\",\n      \"&nless;\": \"???\",\n      \"&nlsim;\": \"???\",\n      \"&nlt;\": \"???\",\n      \"&nltri;\": \"???\",\n      \"&nltrie;\": \"???\",\n      \"&nmid;\": \"???\",\n      \"&nopf;\": \"????\",\n      \"&not\": \"??\",\n      \"&not;\": \"??\",\n      \"&notin;\": \"???\",\n      \"&notinE;\": \"?????\",\n      \"&notindot;\": \"?????\",\n      \"&notinva;\": \"???\",\n      \"&notinvb;\": \"???\",\n      \"&notinvc;\": \"???\",\n      \"&notni;\": \"???\",\n      \"&notniva;\": \"???\",\n      \"&notnivb;\": \"???\",\n      \"&notnivc;\": \"???\",\n      \"&npar;\": \"???\",\n      \"&nparallel;\": \"???\",\n      \"&nparsl;\": \"??????\",\n      \"&npart;\": \"?????\",\n      \"&npolint;\": \"???\",\n      \"&npr;\": \"???\",\n      \"&nprcue;\": \"???\",\n      \"&npre;\": \"?????\",\n      \"&nprec;\": \"???\",\n      \"&npreceq;\": \"?????\",\n      \"&nrArr;\": \"???\",\n      \"&nrarr;\": \"???\",\n      \"&nrarrc;\": \"?????\",\n      \"&nrarrw;\": \"?????\",\n      \"&nrightarrow;\": \"???\",\n      \"&nrtri;\": \"???\",\n      \"&nrtrie;\": \"???\",\n      \"&nsc;\": \"???\",\n      \"&nsccue;\": \"???\",\n      \"&nsce;\": \"?????\",\n      \"&nscr;\": \"????\",\n      \"&nshortmid;\": \"???\",\n      \"&nshortparallel;\": \"???\",\n      \"&nsim;\": \"???\",\n      \"&nsime;\": \"???\",\n      \"&nsimeq;\": \"???\",\n      \"&nsmid;\": \"???\",\n      \"&nspar;\": \"???\",\n      \"&nsqsube;\": \"???\",\n      \"&nsqsupe;\": \"???\",\n      \"&nsub;\": \"???\",\n      \"&nsubE;\": \"?????\",\n      \"&nsube;\": \"???\",\n      \"&nsubset;\": \"??????\",\n      \"&nsubseteq;\": \"???\",\n      \"&nsubseteqq;\": \"?????\",\n      \"&nsucc;\": \"???\",\n      \"&nsucceq;\": \"?????\",\n      \"&nsup;\": \"???\",\n      \"&nsupE;\": \"?????\",\n      \"&nsupe;\": \"???\",\n      \"&nsupset;\": \"??????\",\n      \"&nsupseteq;\": \"???\",\n      \"&nsupseteqq;\": \"?????\",\n      \"&ntgl;\": \"???\",\n      \"&ntilde\": \"??\",\n      \"&ntilde;\": \"??\",\n      \"&ntlg;\": \"???\",\n      \"&ntriangleleft;\": \"???\",\n      \"&ntrianglelefteq;\": \"???\",\n      \"&ntriangleright;\": \"???\",\n      \"&ntrianglerighteq;\": \"???\",\n      \"&nu;\": \"??\",\n      \"&num;\": \"#\",\n      \"&numero;\": \"???\",\n      \"&numsp;\": \"???\",\n      \"&nvDash;\": \"???\",\n      \"&nvHarr;\": \"???\",\n      \"&nvap;\": \"??????\",\n      \"&nvdash;\": \"???\",\n      \"&nvge;\": \"??????\",\n      \"&nvgt;\": \">???\",\n      \"&nvinfin;\": \"???\",\n      \"&nvlArr;\": \"???\",\n      \"&nvle;\": \"??????\",\n      \"&nvlt;\": \"<???\",\n      \"&nvltrie;\": \"??????\",\n      \"&nvrArr;\": \"???\",\n      \"&nvrtrie;\": \"??????\",\n      \"&nvsim;\": \"??????\",\n      \"&nwArr;\": \"???\",\n      \"&nwarhk;\": \"???\",\n      \"&nwarr;\": \"???\",\n      \"&nwarrow;\": \"???\",\n      \"&nwnear;\": \"???\",\n      \"&oS;\": \"???\",\n      \"&oacute\": \"??\",\n      \"&oacute;\": \"??\",\n      \"&oast;\": \"???\",\n      \"&ocir;\": \"???\",\n      \"&ocirc\": \"??\",\n      \"&ocirc;\": \"??\",\n      \"&ocy;\": \"??\",\n      \"&odash;\": \"???\",\n      \"&odblac;\": \"??\",\n      \"&odiv;\": \"???\",\n      \"&odot;\": \"???\",\n      \"&odsold;\": \"???\",\n      \"&oelig;\": \"??\",\n      \"&ofcir;\": \"???\",\n      \"&ofr;\": \"????\",\n      \"&ogon;\": \"??\",\n      \"&ograve\": \"??\",\n      \"&ograve;\": \"??\",\n      \"&ogt;\": \"???\",\n      \"&ohbar;\": \"???\",\n      \"&ohm;\": \"??\",\n      \"&oint;\": \"???\",\n      \"&olarr;\": \"???\",\n      \"&olcir;\": \"???\",\n      \"&olcross;\": \"???\",\n      \"&oline;\": \"???\",\n      \"&olt;\": \"???\",\n      \"&omacr;\": \"??\",\n      \"&omega;\": \"??\",\n      \"&omicron;\": \"??\",\n      \"&omid;\": \"???\",\n      \"&ominus;\": \"???\",\n      \"&oopf;\": \"????\",\n      \"&opar;\": \"???\",\n      \"&operp;\": \"???\",\n      \"&oplus;\": \"???\",\n      \"&or;\": \"???\",\n      \"&orarr;\": \"???\",\n      \"&ord;\": \"???\",\n      \"&order;\": \"???\",\n      \"&orderof;\": \"???\",\n      \"&ordf\": \"??\",\n      \"&ordf;\": \"??\",\n      \"&ordm\": \"??\",\n      \"&ordm;\": \"??\",\n      \"&origof;\": \"???\",\n      \"&oror;\": \"???\",\n      \"&orslope;\": \"???\",\n      \"&orv;\": \"???\",\n      \"&oscr;\": \"???\",\n      \"&oslash\": \"??\",\n      \"&oslash;\": \"??\",\n      \"&osol;\": \"???\",\n      \"&otilde\": \"??\",\n      \"&otilde;\": \"??\",\n      \"&otimes;\": \"???\",\n      \"&otimesas;\": \"???\",\n      \"&ouml\": \"??\",\n      \"&ouml;\": \"??\",\n      \"&ovbar;\": \"???\",\n      \"&par;\": \"???\",\n      \"&para\": \"??\",\n      \"&para;\": \"??\",\n      \"&parallel;\": \"???\",\n      \"&parsim;\": \"???\",\n      \"&parsl;\": \"???\",\n      \"&part;\": \"???\",\n      \"&pcy;\": \"??\",\n      \"&percnt;\": \"%\",\n      \"&period;\": \".\",\n      \"&permil;\": \"???\",\n      \"&perp;\": \"???\",\n      \"&pertenk;\": \"???\",\n      \"&pfr;\": \"????\",\n      \"&phi;\": \"??\",\n      \"&phiv;\": \"??\",\n      \"&phmmat;\": \"???\",\n      \"&phone;\": \"???\",\n      \"&pi;\": \"??\",\n      \"&pitchfork;\": \"???\",\n      \"&piv;\": \"??\",\n      \"&planck;\": \"???\",\n      \"&planckh;\": \"???\",\n      \"&plankv;\": \"???\",\n      \"&plus;\": \"+\",\n      \"&plusacir;\": \"???\",\n      \"&plusb;\": \"???\",\n      \"&pluscir;\": \"???\",\n      \"&plusdo;\": \"???\",\n      \"&plusdu;\": \"???\",\n      \"&pluse;\": \"???\",\n      \"&plusmn\": \"??\",\n      \"&plusmn;\": \"??\",\n      \"&plussim;\": \"???\",\n      \"&plustwo;\": \"???\",\n      \"&pm;\": \"??\",\n      \"&pointint;\": \"???\",\n      \"&popf;\": \"????\",\n      \"&pound\": \"??\",\n      \"&pound;\": \"??\",\n      \"&pr;\": \"???\",\n      \"&prE;\": \"???\",\n      \"&prap;\": \"???\",\n      \"&prcue;\": \"???\",\n      \"&pre;\": \"???\",\n      \"&prec;\": \"???\",\n      \"&precapprox;\": \"???\",\n      \"&preccurlyeq;\": \"???\",\n      \"&preceq;\": \"???\",\n      \"&precnapprox;\": \"???\",\n      \"&precneqq;\": \"???\",\n      \"&precnsim;\": \"???\",\n      \"&precsim;\": \"???\",\n      \"&prime;\": \"???\",\n      \"&primes;\": \"???\",\n      \"&prnE;\": \"???\",\n      \"&prnap;\": \"???\",\n      \"&prnsim;\": \"???\",\n      \"&prod;\": \"???\",\n      \"&profalar;\": \"???\",\n      \"&profline;\": \"???\",\n      \"&profsurf;\": \"???\",\n      \"&prop;\": \"???\",\n      \"&propto;\": \"???\",\n      \"&prsim;\": \"???\",\n      \"&prurel;\": \"???\",\n      \"&pscr;\": \"????\",\n      \"&psi;\": \"??\",\n      \"&puncsp;\": \"???\",\n      \"&qfr;\": \"????\",\n      \"&qint;\": \"???\",\n      \"&qopf;\": \"????\",\n      \"&qprime;\": \"???\",\n      \"&qscr;\": \"????\",\n      \"&quaternions;\": \"???\",\n      \"&quatint;\": \"???\",\n      \"&quest;\": \"?\",\n      \"&questeq;\": \"???\",\n      \"&quot\": '\"',\n      \"&quot;\": '\"',\n      \"&rAarr;\": \"???\",\n      \"&rArr;\": \"???\",\n      \"&rAtail;\": \"???\",\n      \"&rBarr;\": \"???\",\n      \"&rHar;\": \"???\",\n      \"&race;\": \"?????\",\n      \"&racute;\": \"??\",\n      \"&radic;\": \"???\",\n      \"&raemptyv;\": \"???\",\n      \"&rang;\": \"???\",\n      \"&rangd;\": \"???\",\n      \"&range;\": \"???\",\n      \"&rangle;\": \"???\",\n      \"&raquo\": \"??\",\n      \"&raquo;\": \"??\",\n      \"&rarr;\": \"???\",\n      \"&rarrap;\": \"???\",\n      \"&rarrb;\": \"???\",\n      \"&rarrbfs;\": \"???\",\n      \"&rarrc;\": \"???\",\n      \"&rarrfs;\": \"???\",\n      \"&rarrhk;\": \"???\",\n      \"&rarrlp;\": \"???\",\n      \"&rarrpl;\": \"???\",\n      \"&rarrsim;\": \"???\",\n      \"&rarrtl;\": \"???\",\n      \"&rarrw;\": \"???\",\n      \"&ratail;\": \"???\",\n      \"&ratio;\": \"???\",\n      \"&rationals;\": \"???\",\n      \"&rbarr;\": \"???\",\n      \"&rbbrk;\": \"???\",\n      \"&rbrace;\": \"}\",\n      \"&rbrack;\": \"]\",\n      \"&rbrke;\": \"???\",\n      \"&rbrksld;\": \"???\",\n      \"&rbrkslu;\": \"???\",\n      \"&rcaron;\": \"??\",\n      \"&rcedil;\": \"??\",\n      \"&rceil;\": \"???\",\n      \"&rcub;\": \"}\",\n      \"&rcy;\": \"??\",\n      \"&rdca;\": \"???\",\n      \"&rdldhar;\": \"???\",\n      \"&rdquo;\": \"???\",\n      \"&rdquor;\": \"???\",\n      \"&rdsh;\": \"???\",\n      \"&real;\": \"???\",\n      \"&realine;\": \"???\",\n      \"&realpart;\": \"???\",\n      \"&reals;\": \"???\",\n      \"&rect;\": \"???\",\n      \"&reg\": \"??\",\n      \"&reg;\": \"??\",\n      \"&rfisht;\": \"???\",\n      \"&rfloor;\": \"???\",\n      \"&rfr;\": \"????\",\n      \"&rhard;\": \"???\",\n      \"&rharu;\": \"???\",\n      \"&rharul;\": \"???\",\n      \"&rho;\": \"??\",\n      \"&rhov;\": \"??\",\n      \"&rightarrow;\": \"???\",\n      \"&rightarrowtail;\": \"???\",\n      \"&rightharpoondown;\": \"???\",\n      \"&rightharpoonup;\": \"???\",\n      \"&rightleftarrows;\": \"???\",\n      \"&rightleftharpoons;\": \"???\",\n      \"&rightrightarrows;\": \"???\",\n      \"&rightsquigarrow;\": \"???\",\n      \"&rightthreetimes;\": \"???\",\n      \"&ring;\": \"??\",\n      \"&risingdotseq;\": \"???\",\n      \"&rlarr;\": \"???\",\n      \"&rlhar;\": \"???\",\n      \"&rlm;\": \"???\",\n      \"&rmoust;\": \"???\",\n      \"&rmoustache;\": \"???\",\n      \"&rnmid;\": \"???\",\n      \"&roang;\": \"???\",\n      \"&roarr;\": \"???\",\n      \"&robrk;\": \"???\",\n      \"&ropar;\": \"???\",\n      \"&ropf;\": \"????\",\n      \"&roplus;\": \"???\",\n      \"&rotimes;\": \"???\",\n      \"&rpar;\": \")\",\n      \"&rpargt;\": \"???\",\n      \"&rppolint;\": \"???\",\n      \"&rrarr;\": \"???\",\n      \"&rsaquo;\": \"???\",\n      \"&rscr;\": \"????\",\n      \"&rsh;\": \"???\",\n      \"&rsqb;\": \"]\",\n      \"&rsquo;\": \"???\",\n      \"&rsquor;\": \"???\",\n      \"&rthree;\": \"???\",\n      \"&rtimes;\": \"???\",\n      \"&rtri;\": \"???\",\n      \"&rtrie;\": \"???\",\n      \"&rtrif;\": \"???\",\n      \"&rtriltri;\": \"???\",\n      \"&ruluhar;\": \"???\",\n      \"&rx;\": \"???\",\n      \"&sacute;\": \"??\",\n      \"&sbquo;\": \"???\",\n      \"&sc;\": \"???\",\n      \"&scE;\": \"???\",\n      \"&scap;\": \"???\",\n      \"&scaron;\": \"??\",\n      \"&sccue;\": \"???\",\n      \"&sce;\": \"???\",\n      \"&scedil;\": \"??\",\n      \"&scirc;\": \"??\",\n      \"&scnE;\": \"???\",\n      \"&scnap;\": \"???\",\n      \"&scnsim;\": \"???\",\n      \"&scpolint;\": \"???\",\n      \"&scsim;\": \"???\",\n      \"&scy;\": \"??\",\n      \"&sdot;\": \"???\",\n      \"&sdotb;\": \"???\",\n      \"&sdote;\": \"???\",\n      \"&seArr;\": \"???\",\n      \"&searhk;\": \"???\",\n      \"&searr;\": \"???\",\n      \"&searrow;\": \"???\",\n      \"&sect\": \"??\",\n      \"&sect;\": \"??\",\n      \"&semi;\": \";\",\n      \"&seswar;\": \"???\",\n      \"&setminus;\": \"???\",\n      \"&setmn;\": \"???\",\n      \"&sext;\": \"???\",\n      \"&sfr;\": \"????\",\n      \"&sfrown;\": \"???\",\n      \"&sharp;\": \"???\",\n      \"&shchcy;\": \"??\",\n      \"&shcy;\": \"??\",\n      \"&shortmid;\": \"???\",\n      \"&shortparallel;\": \"???\",\n      \"&shy\": \"??\",\n      \"&shy;\": \"??\",\n      \"&sigma;\": \"??\",\n      \"&sigmaf;\": \"??\",\n      \"&sigmav;\": \"??\",\n      \"&sim;\": \"???\",\n      \"&simdot;\": \"???\",\n      \"&sime;\": \"???\",\n      \"&simeq;\": \"???\",\n      \"&simg;\": \"???\",\n      \"&simgE;\": \"???\",\n      \"&siml;\": \"???\",\n      \"&simlE;\": \"???\",\n      \"&simne;\": \"???\",\n      \"&simplus;\": \"???\",\n      \"&simrarr;\": \"???\",\n      \"&slarr;\": \"???\",\n      \"&smallsetminus;\": \"???\",\n      \"&smashp;\": \"???\",\n      \"&smeparsl;\": \"???\",\n      \"&smid;\": \"???\",\n      \"&smile;\": \"???\",\n      \"&smt;\": \"???\",\n      \"&smte;\": \"???\",\n      \"&smtes;\": \"??????\",\n      \"&softcy;\": \"??\",\n      \"&sol;\": \"/\",\n      \"&solb;\": \"???\",\n      \"&solbar;\": \"???\",\n      \"&sopf;\": \"????\",\n      \"&spades;\": \"???\",\n      \"&spadesuit;\": \"???\",\n      \"&spar;\": \"???\",\n      \"&sqcap;\": \"???\",\n      \"&sqcaps;\": \"??????\",\n      \"&sqcup;\": \"???\",\n      \"&sqcups;\": \"??????\",\n      \"&sqsub;\": \"???\",\n      \"&sqsube;\": \"???\",\n      \"&sqsubset;\": \"???\",\n      \"&sqsubseteq;\": \"???\",\n      \"&sqsup;\": \"???\",\n      \"&sqsupe;\": \"???\",\n      \"&sqsupset;\": \"???\",\n      \"&sqsupseteq;\": \"???\",\n      \"&squ;\": \"???\",\n      \"&square;\": \"???\",\n      \"&squarf;\": \"???\",\n      \"&squf;\": \"???\",\n      \"&srarr;\": \"???\",\n      \"&sscr;\": \"????\",\n      \"&ssetmn;\": \"???\",\n      \"&ssmile;\": \"???\",\n      \"&sstarf;\": \"???\",\n      \"&star;\": \"???\",\n      \"&starf;\": \"???\",\n      \"&straightepsilon;\": \"??\",\n      \"&straightphi;\": \"??\",\n      \"&strns;\": \"??\",\n      \"&sub;\": \"???\",\n      \"&subE;\": \"???\",\n      \"&subdot;\": \"???\",\n      \"&sube;\": \"???\",\n      \"&subedot;\": \"???\",\n      \"&submult;\": \"???\",\n      \"&subnE;\": \"???\",\n      \"&subne;\": \"???\",\n      \"&subplus;\": \"???\",\n      \"&subrarr;\": \"???\",\n      \"&subset;\": \"???\",\n      \"&subseteq;\": \"???\",\n      \"&subseteqq;\": \"???\",\n      \"&subsetneq;\": \"???\",\n      \"&subsetneqq;\": \"???\",\n      \"&subsim;\": \"???\",\n      \"&subsub;\": \"???\",\n      \"&subsup;\": \"???\",\n      \"&succ;\": \"???\",\n      \"&succapprox;\": \"???\",\n      \"&succcurlyeq;\": \"???\",\n      \"&succeq;\": \"???\",\n      \"&succnapprox;\": \"???\",\n      \"&succneqq;\": \"???\",\n      \"&succnsim;\": \"???\",\n      \"&succsim;\": \"???\",\n      \"&sum;\": \"???\",\n      \"&sung;\": \"???\",\n      \"&sup1\": \"??\",\n      \"&sup1;\": \"??\",\n      \"&sup2\": \"??\",\n      \"&sup2;\": \"??\",\n      \"&sup3\": \"??\",\n      \"&sup3;\": \"??\",\n      \"&sup;\": \"???\",\n      \"&supE;\": \"???\",\n      \"&supdot;\": \"???\",\n      \"&supdsub;\": \"???\",\n      \"&supe;\": \"???\",\n      \"&supedot;\": \"???\",\n      \"&suphsol;\": \"???\",\n      \"&suphsub;\": \"???\",\n      \"&suplarr;\": \"???\",\n      \"&supmult;\": \"???\",\n      \"&supnE;\": \"???\",\n      \"&supne;\": \"???\",\n      \"&supplus;\": \"???\",\n      \"&supset;\": \"???\",\n      \"&supseteq;\": \"???\",\n      \"&supseteqq;\": \"???\",\n      \"&supsetneq;\": \"???\",\n      \"&supsetneqq;\": \"???\",\n      \"&supsim;\": \"???\",\n      \"&supsub;\": \"???\",\n      \"&supsup;\": \"???\",\n      \"&swArr;\": \"???\",\n      \"&swarhk;\": \"???\",\n      \"&swarr;\": \"???\",\n      \"&swarrow;\": \"???\",\n      \"&swnwar;\": \"???\",\n      \"&szlig\": \"??\",\n      \"&szlig;\": \"??\",\n      \"&target;\": \"???\",\n      \"&tau;\": \"??\",\n      \"&tbrk;\": \"???\",\n      \"&tcaron;\": \"??\",\n      \"&tcedil;\": \"??\",\n      \"&tcy;\": \"??\",\n      \"&tdot;\": \"???\",\n      \"&telrec;\": \"???\",\n      \"&tfr;\": \"????\",\n      \"&there4;\": \"???\",\n      \"&therefore;\": \"???\",\n      \"&theta;\": \"??\",\n      \"&thetasym;\": \"??\",\n      \"&thetav;\": \"??\",\n      \"&thickapprox;\": \"???\",\n      \"&thicksim;\": \"???\",\n      \"&thinsp;\": \"???\",\n      \"&thkap;\": \"???\",\n      \"&thksim;\": \"???\",\n      \"&thorn\": \"??\",\n      \"&thorn;\": \"??\",\n      \"&tilde;\": \"??\",\n      \"&times\": \"??\",\n      \"&times;\": \"??\",\n      \"&timesb;\": \"???\",\n      \"&timesbar;\": \"???\",\n      \"&timesd;\": \"???\",\n      \"&tint;\": \"???\",\n      \"&toea;\": \"???\",\n      \"&top;\": \"???\",\n      \"&topbot;\": \"???\",\n      \"&topcir;\": \"???\",\n      \"&topf;\": \"????\",\n      \"&topfork;\": \"???\",\n      \"&tosa;\": \"???\",\n      \"&tprime;\": \"???\",\n      \"&trade;\": \"???\",\n      \"&triangle;\": \"???\",\n      \"&triangledown;\": \"???\",\n      \"&triangleleft;\": \"???\",\n      \"&trianglelefteq;\": \"???\",\n      \"&triangleq;\": \"???\",\n      \"&triangleright;\": \"???\",\n      \"&trianglerighteq;\": \"???\",\n      \"&tridot;\": \"???\",\n      \"&trie;\": \"???\",\n      \"&triminus;\": \"???\",\n      \"&triplus;\": \"???\",\n      \"&trisb;\": \"???\",\n      \"&tritime;\": \"???\",\n      \"&trpezium;\": \"???\",\n      \"&tscr;\": \"????\",\n      \"&tscy;\": \"??\",\n      \"&tshcy;\": \"??\",\n      \"&tstrok;\": \"??\",\n      \"&twixt;\": \"???\",\n      \"&twoheadleftarrow;\": \"???\",\n      \"&twoheadrightarrow;\": \"???\",\n      \"&uArr;\": \"???\",\n      \"&uHar;\": \"???\",\n      \"&uacute\": \"??\",\n      \"&uacute;\": \"??\",\n      \"&uarr;\": \"???\",\n      \"&ubrcy;\": \"??\",\n      \"&ubreve;\": \"??\",\n      \"&ucirc\": \"??\",\n      \"&ucirc;\": \"??\",\n      \"&ucy;\": \"??\",\n      \"&udarr;\": \"???\",\n      \"&udblac;\": \"??\",\n      \"&udhar;\": \"???\",\n      \"&ufisht;\": \"???\",\n      \"&ufr;\": \"????\",\n      \"&ugrave\": \"??\",\n      \"&ugrave;\": \"??\",\n      \"&uharl;\": \"???\",\n      \"&uharr;\": \"???\",\n      \"&uhblk;\": \"???\",\n      \"&ulcorn;\": \"???\",\n      \"&ulcorner;\": \"???\",\n      \"&ulcrop;\": \"???\",\n      \"&ultri;\": \"???\",\n      \"&umacr;\": \"??\",\n      \"&uml\": \"??\",\n      \"&uml;\": \"??\",\n      \"&uogon;\": \"??\",\n      \"&uopf;\": \"????\",\n      \"&uparrow;\": \"???\",\n      \"&updownarrow;\": \"???\",\n      \"&upharpoonleft;\": \"???\",\n      \"&upharpoonright;\": \"???\",\n      \"&uplus;\": \"???\",\n      \"&upsi;\": \"??\",\n      \"&upsih;\": \"??\",\n      \"&upsilon;\": \"??\",\n      \"&upuparrows;\": \"???\",\n      \"&urcorn;\": \"???\",\n      \"&urcorner;\": \"???\",\n      \"&urcrop;\": \"???\",\n      \"&uring;\": \"??\",\n      \"&urtri;\": \"???\",\n      \"&uscr;\": \"????\",\n      \"&utdot;\": \"???\",\n      \"&utilde;\": \"??\",\n      \"&utri;\": \"???\",\n      \"&utrif;\": \"???\",\n      \"&uuarr;\": \"???\",\n      \"&uuml\": \"??\",\n      \"&uuml;\": \"??\",\n      \"&uwangle;\": \"???\",\n      \"&vArr;\": \"???\",\n      \"&vBar;\": \"???\",\n      \"&vBarv;\": \"???\",\n      \"&vDash;\": \"???\",\n      \"&vangrt;\": \"???\",\n      \"&varepsilon;\": \"??\",\n      \"&varkappa;\": \"??\",\n      \"&varnothing;\": \"???\",\n      \"&varphi;\": \"??\",\n      \"&varpi;\": \"??\",\n      \"&varpropto;\": \"???\",\n      \"&varr;\": \"???\",\n      \"&varrho;\": \"??\",\n      \"&varsigma;\": \"??\",\n      \"&varsubsetneq;\": \"??????\",\n      \"&varsubsetneqq;\": \"??????\",\n      \"&varsupsetneq;\": \"??????\",\n      \"&varsupsetneqq;\": \"??????\",\n      \"&vartheta;\": \"??\",\n      \"&vartriangleleft;\": \"???\",\n      \"&vartriangleright;\": \"???\",\n      \"&vcy;\": \"??\",\n      \"&vdash;\": \"???\",\n      \"&vee;\": \"???\",\n      \"&veebar;\": \"???\",\n      \"&veeeq;\": \"???\",\n      \"&vellip;\": \"???\",\n      \"&verbar;\": \"|\",\n      \"&vert;\": \"|\",\n      \"&vfr;\": \"????\",\n      \"&vltri;\": \"???\",\n      \"&vnsub;\": \"??????\",\n      \"&vnsup;\": \"??????\",\n      \"&vopf;\": \"????\",\n      \"&vprop;\": \"???\",\n      \"&vrtri;\": \"???\",\n      \"&vscr;\": \"????\",\n      \"&vsubnE;\": \"??????\",\n      \"&vsubne;\": \"??????\",\n      \"&vsupnE;\": \"??????\",\n      \"&vsupne;\": \"??????\",\n      \"&vzigzag;\": \"???\",\n      \"&wcirc;\": \"??\",\n      \"&wedbar;\": \"???\",\n      \"&wedge;\": \"???\",\n      \"&wedgeq;\": \"???\",\n      \"&weierp;\": \"???\",\n      \"&wfr;\": \"????\",\n      \"&wopf;\": \"????\",\n      \"&wp;\": \"???\",\n      \"&wr;\": \"???\",\n      \"&wreath;\": \"???\",\n      \"&wscr;\": \"????\",\n      \"&xcap;\": \"???\",\n      \"&xcirc;\": \"???\",\n      \"&xcup;\": \"???\",\n      \"&xdtri;\": \"???\",\n      \"&xfr;\": \"????\",\n      \"&xhArr;\": \"???\",\n      \"&xharr;\": \"???\",\n      \"&xi;\": \"??\",\n      \"&xlArr;\": \"???\",\n      \"&xlarr;\": \"???\",\n      \"&xmap;\": \"???\",\n      \"&xnis;\": \"???\",\n      \"&xodot;\": \"???\",\n      \"&xopf;\": \"????\",\n      \"&xoplus;\": \"???\",\n      \"&xotime;\": \"???\",\n      \"&xrArr;\": \"???\",\n      \"&xrarr;\": \"???\",\n      \"&xscr;\": \"????\",\n      \"&xsqcup;\": \"???\",\n      \"&xuplus;\": \"???\",\n      \"&xutri;\": \"???\",\n      \"&xvee;\": \"???\",\n      \"&xwedge;\": \"???\",\n      \"&yacute\": \"??\",\n      \"&yacute;\": \"??\",\n      \"&yacy;\": \"??\",\n      \"&ycirc;\": \"??\",\n      \"&ycy;\": \"??\",\n      \"&yen\": \"??\",\n      \"&yen;\": \"??\",\n      \"&yfr;\": \"????\",\n      \"&yicy;\": \"??\",\n      \"&yopf;\": \"????\",\n      \"&yscr;\": \"????\",\n      \"&yucy;\": \"??\",\n      \"&yuml\": \"??\",\n      \"&yuml;\": \"??\",\n      \"&zacute;\": \"??\",\n      \"&zcaron;\": \"??\",\n      \"&zcy;\": \"??\",\n      \"&zdot;\": \"??\",\n      \"&zeetrf;\": \"???\",\n      \"&zeta;\": \"??\",\n      \"&zfr;\": \"????\",\n      \"&zhcy;\": \"??\",\n      \"&zigrarr;\": \"???\",\n      \"&zopf;\": \"????\",\n      \"&zscr;\": \"????\",\n      \"&zwj;\": \"???\",\n      \"&zwnj;\": \"???\"\n    },\n    characters: {\n      \"??\": \"&AElig;\",\n      \"&\": \"&amp;\",\n      \"??\": \"&Aacute;\",\n      \"??\": \"&Abreve;\",\n      \"??\": \"&Acirc;\",\n      \"??\": \"&Acy;\",\n      \"????\": \"&Afr;\",\n      \"??\": \"&Agrave;\",\n      \"??\": \"&Alpha;\",\n      \"??\": \"&Amacr;\",\n      \"???\": \"&And;\",\n      \"??\": \"&Aogon;\",\n      \"????\": \"&Aopf;\",\n      \"???\": \"&af;\",\n      \"??\": \"&angst;\",\n      \"????\": \"&Ascr;\",\n      \"???\": \"&coloneq;\",\n      \"??\": \"&Atilde;\",\n      \"??\": \"&Auml;\",\n      \"???\": \"&ssetmn;\",\n      \"???\": \"&Barv;\",\n      \"???\": \"&doublebarwedge;\",\n      \"??\": \"&Bcy;\",\n      \"???\": \"&because;\",\n      \"???\": \"&bernou;\",\n      \"??\": \"&Beta;\",\n      \"????\": \"&Bfr;\",\n      \"????\": \"&Bopf;\",\n      \"??\": \"&breve;\",\n      \"???\": \"&bump;\",\n      \"??\": \"&CHcy;\",\n      \"??\": \"&copy;\",\n      \"??\": \"&Cacute;\",\n      \"???\": \"&Cap;\",\n      \"???\": \"&DD;\",\n      \"???\": \"&Cfr;\",\n      \"??\": \"&Ccaron;\",\n      \"??\": \"&Ccedil;\",\n      \"??\": \"&Ccirc;\",\n      \"???\": \"&Cconint;\",\n      \"??\": \"&Cdot;\",\n      \"??\": \"&cedil;\",\n      \"??\": \"&middot;\",\n      \"??\": \"&Chi;\",\n      \"???\": \"&odot;\",\n      \"???\": \"&ominus;\",\n      \"???\": \"&oplus;\",\n      \"???\": \"&otimes;\",\n      \"???\": \"&cwconint;\",\n      \"???\": \"&rdquor;\",\n      \"???\": \"&rsquor;\",\n      \"???\": \"&Proportion;\",\n      \"???\": \"&Colone;\",\n      \"???\": \"&equiv;\",\n      \"???\": \"&DoubleContourIntegral;\",\n      \"???\": \"&oint;\",\n      \"???\": \"&complexes;\",\n      \"???\": \"&coprod;\",\n      \"???\": \"&awconint;\",\n      \"???\": \"&Cross;\",\n      \"????\": \"&Cscr;\",\n      \"???\": \"&Cup;\",\n      \"???\": \"&asympeq;\",\n      \"???\": \"&DDotrahd;\",\n      \"??\": \"&DJcy;\",\n      \"??\": \"&DScy;\",\n      \"??\": \"&DZcy;\",\n      \"???\": \"&ddagger;\",\n      \"???\": \"&Darr;\",\n      \"???\": \"&DoubleLeftTee;\",\n      \"??\": \"&Dcaron;\",\n      \"??\": \"&Dcy;\",\n      \"???\": \"&nabla;\",\n      \"??\": \"&Delta;\",\n      \"????\": \"&Dfr;\",\n      \"??\": \"&acute;\",\n      \"??\": \"&dot;\",\n      \"??\": \"&dblac;\",\n      \"`\": \"&grave;\",\n      \"??\": \"&tilde;\",\n      \"???\": \"&diamond;\",\n      \"???\": \"&dd;\",\n      \"????\": \"&Dopf;\",\n      \"??\": \"&uml;\",\n      \"???\": \"&DotDot;\",\n      \"???\": \"&esdot;\",\n      \"???\": \"&dArr;\",\n      \"???\": \"&lArr;\",\n      \"???\": \"&iff;\",\n      \"???\": \"&xlArr;\",\n      \"???\": \"&xhArr;\",\n      \"???\": \"&xrArr;\",\n      \"???\": \"&rArr;\",\n      \"???\": \"&vDash;\",\n      \"???\": \"&uArr;\",\n      \"???\": \"&vArr;\",\n      \"???\": \"&spar;\",\n      \"???\": \"&downarrow;\",\n      \"???\": \"&DownArrowBar;\",\n      \"???\": \"&duarr;\",\n      \"??\": \"&DownBreve;\",\n      \"???\": \"&DownLeftRightVector;\",\n      \"???\": \"&DownLeftTeeVector;\",\n      \"???\": \"&lhard;\",\n      \"???\": \"&DownLeftVectorBar;\",\n      \"???\": \"&DownRightTeeVector;\",\n      \"???\": \"&rightharpoondown;\",\n      \"???\": \"&DownRightVectorBar;\",\n      \"???\": \"&top;\",\n      \"???\": \"&mapstodown;\",\n      \"????\": \"&Dscr;\",\n      \"??\": \"&Dstrok;\",\n      \"??\": \"&ENG;\",\n      \"??\": \"&ETH;\",\n      \"??\": \"&Eacute;\",\n      \"??\": \"&Ecaron;\",\n      \"??\": \"&Ecirc;\",\n      \"??\": \"&Ecy;\",\n      \"??\": \"&Edot;\",\n      \"????\": \"&Efr;\",\n      \"??\": \"&Egrave;\",\n      \"???\": \"&isinv;\",\n      \"??\": \"&Emacr;\",\n      \"???\": \"&EmptySmallSquare;\",\n      \"???\": \"&EmptyVerySmallSquare;\",\n      \"??\": \"&Eogon;\",\n      \"????\": \"&Eopf;\",\n      \"??\": \"&Epsilon;\",\n      \"???\": \"&Equal;\",\n      \"???\": \"&esim;\",\n      \"???\": \"&rlhar;\",\n      \"???\": \"&expectation;\",\n      \"???\": \"&Esim;\",\n      \"??\": \"&Eta;\",\n      \"??\": \"&Euml;\",\n      \"???\": \"&exist;\",\n      \"???\": \"&exponentiale;\",\n      \"??\": \"&Fcy;\",\n      \"????\": \"&Ffr;\",\n      \"???\": \"&FilledSmallSquare;\",\n      \"???\": \"&squf;\",\n      \"????\": \"&Fopf;\",\n      \"???\": \"&forall;\",\n      \"???\": \"&Fscr;\",\n      \"??\": \"&GJcy;\",\n      \">\": \"&gt;\",\n      \"??\": \"&Gamma;\",\n      \"??\": \"&Gammad;\",\n      \"??\": \"&Gbreve;\",\n      \"??\": \"&Gcedil;\",\n      \"??\": \"&Gcirc;\",\n      \"??\": \"&Gcy;\",\n      \"??\": \"&Gdot;\",\n      \"????\": \"&Gfr;\",\n      \"???\": \"&ggg;\",\n      \"????\": \"&Gopf;\",\n      \"???\": \"&geq;\",\n      \"???\": \"&gtreqless;\",\n      \"???\": \"&geqq;\",\n      \"???\": \"&GreaterGreater;\",\n      \"???\": \"&gtrless;\",\n      \"???\": \"&ges;\",\n      \"???\": \"&gtrsim;\",\n      \"????\": \"&Gscr;\",\n      \"???\": \"&gg;\",\n      \"??\": \"&HARDcy;\",\n      \"??\": \"&caron;\",\n      \"^\": \"&Hat;\",\n      \"??\": \"&Hcirc;\",\n      \"???\": \"&Poincareplane;\",\n      \"???\": \"&hamilt;\",\n      \"???\": \"&quaternions;\",\n      \"???\": \"&boxh;\",\n      \"??\": \"&Hstrok;\",\n      \"???\": \"&bumpeq;\",\n      \"??\": \"&IEcy;\",\n      \"??\": \"&IJlig;\",\n      \"??\": \"&IOcy;\",\n      \"??\": \"&Iacute;\",\n      \"??\": \"&Icirc;\",\n      \"??\": \"&Icy;\",\n      \"??\": \"&Idot;\",\n      \"???\": \"&imagpart;\",\n      \"??\": \"&Igrave;\",\n      \"??\": \"&Imacr;\",\n      \"???\": \"&ii;\",\n      \"???\": \"&Int;\",\n      \"???\": \"&int;\",\n      \"???\": \"&xcap;\",\n      \"???\": \"&ic;\",\n      \"???\": \"&it;\",\n      \"??\": \"&Iogon;\",\n      \"????\": \"&Iopf;\",\n      \"??\": \"&Iota;\",\n      \"???\": \"&imagline;\",\n      \"??\": \"&Itilde;\",\n      \"??\": \"&Iukcy;\",\n      \"??\": \"&Iuml;\",\n      \"??\": \"&Jcirc;\",\n      \"??\": \"&Jcy;\",\n      \"????\": \"&Jfr;\",\n      \"????\": \"&Jopf;\",\n      \"????\": \"&Jscr;\",\n      \"??\": \"&Jsercy;\",\n      \"??\": \"&Jukcy;\",\n      \"??\": \"&KHcy;\",\n      \"??\": \"&KJcy;\",\n      \"??\": \"&Kappa;\",\n      \"??\": \"&Kcedil;\",\n      \"??\": \"&Kcy;\",\n      \"????\": \"&Kfr;\",\n      \"????\": \"&Kopf;\",\n      \"????\": \"&Kscr;\",\n      \"??\": \"&LJcy;\",\n      \"<\": \"&lt;\",\n      \"??\": \"&Lacute;\",\n      \"??\": \"&Lambda;\",\n      \"???\": \"&Lang;\",\n      \"???\": \"&lagran;\",\n      \"???\": \"&twoheadleftarrow;\",\n      \"??\": \"&Lcaron;\",\n      \"??\": \"&Lcedil;\",\n      \"??\": \"&Lcy;\",\n      \"???\": \"&langle;\",\n      \"???\": \"&slarr;\",\n      \"???\": \"&larrb;\",\n      \"???\": \"&lrarr;\",\n      \"???\": \"&lceil;\",\n      \"???\": \"&lobrk;\",\n      \"???\": \"&LeftDownTeeVector;\",\n      \"???\": \"&downharpoonleft;\",\n      \"???\": \"&LeftDownVectorBar;\",\n      \"???\": \"&lfloor;\",\n      \"???\": \"&leftrightarrow;\",\n      \"???\": \"&LeftRightVector;\",\n      \"???\": \"&dashv;\",\n      \"???\": \"&mapstoleft;\",\n      \"???\": \"&LeftTeeVector;\",\n      \"???\": \"&vltri;\",\n      \"???\": \"&LeftTriangleBar;\",\n      \"???\": \"&trianglelefteq;\",\n      \"???\": \"&LeftUpDownVector;\",\n      \"???\": \"&LeftUpTeeVector;\",\n      \"???\": \"&upharpoonleft;\",\n      \"???\": \"&LeftUpVectorBar;\",\n      \"???\": \"&lharu;\",\n      \"???\": \"&LeftVectorBar;\",\n      \"???\": \"&lesseqgtr;\",\n      \"???\": \"&leqq;\",\n      \"???\": \"&lg;\",\n      \"???\": \"&LessLess;\",\n      \"???\": \"&les;\",\n      \"???\": \"&lsim;\",\n      \"????\": \"&Lfr;\",\n      \"???\": \"&Ll;\",\n      \"???\": \"&lAarr;\",\n      \"??\": \"&Lmidot;\",\n      \"???\": \"&xlarr;\",\n      \"???\": \"&xharr;\",\n      \"???\": \"&xrarr;\",\n      \"????\": \"&Lopf;\",\n      \"???\": \"&swarrow;\",\n      \"???\": \"&searrow;\",\n      \"???\": \"&lsh;\",\n      \"??\": \"&Lstrok;\",\n      \"???\": \"&ll;\",\n      \"???\": \"&Map;\",\n      \"??\": \"&Mcy;\",\n      \"???\": \"&MediumSpace;\",\n      \"???\": \"&phmmat;\",\n      \"????\": \"&Mfr;\",\n      \"???\": \"&mp;\",\n      \"????\": \"&Mopf;\",\n      \"??\": \"&Mu;\",\n      \"??\": \"&NJcy;\",\n      \"??\": \"&Nacute;\",\n      \"??\": \"&Ncaron;\",\n      \"??\": \"&Ncedil;\",\n      \"??\": \"&Ncy;\",\n      \"???\": \"&ZeroWidthSpace;\",\n      \"\\n\": \"&NewLine;\",\n      \"????\": \"&Nfr;\",\n      \"???\": \"&NoBreak;\",\n      \"??\": \"&nbsp;\",\n      \"???\": \"&naturals;\",\n      \"???\": \"&Not;\",\n      \"???\": \"&nequiv;\",\n      \"???\": \"&NotCupCap;\",\n      \"???\": \"&nspar;\",\n      \"???\": \"&notinva;\",\n      \"???\": \"&ne;\",\n      \"?????\": \"&nesim;\",\n      \"???\": \"&nexists;\",\n      \"???\": \"&ngtr;\",\n      \"???\": \"&ngeq;\",\n      \"?????\": \"&ngeqq;\",\n      \"?????\": \"&nGtv;\",\n      \"???\": \"&ntgl;\",\n      \"?????\": \"&nges;\",\n      \"???\": \"&ngsim;\",\n      \"?????\": \"&nbump;\",\n      \"?????\": \"&nbumpe;\",\n      \"???\": \"&ntriangleleft;\",\n      \"?????\": \"&NotLeftTriangleBar;\",\n      \"???\": \"&ntrianglelefteq;\",\n      \"???\": \"&nlt;\",\n      \"???\": \"&nleq;\",\n      \"???\": \"&ntlg;\",\n      \"?????\": \"&nLtv;\",\n      \"?????\": \"&nles;\",\n      \"???\": \"&nlsim;\",\n      \"?????\": \"&NotNestedGreaterGreater;\",\n      \"?????\": \"&NotNestedLessLess;\",\n      \"???\": \"&nprec;\",\n      \"?????\": \"&npreceq;\",\n      \"???\": \"&nprcue;\",\n      \"???\": \"&notniva;\",\n      \"???\": \"&ntriangleright;\",\n      \"?????\": \"&NotRightTriangleBar;\",\n      \"???\": \"&ntrianglerighteq;\",\n      \"?????\": \"&NotSquareSubset;\",\n      \"???\": \"&nsqsube;\",\n      \"?????\": \"&NotSquareSuperset;\",\n      \"???\": \"&nsqsupe;\",\n      \"??????\": \"&vnsub;\",\n      \"???\": \"&nsubseteq;\",\n      \"???\": \"&nsucc;\",\n      \"?????\": \"&nsucceq;\",\n      \"???\": \"&nsccue;\",\n      \"?????\": \"&NotSucceedsTilde;\",\n      \"??????\": \"&vnsup;\",\n      \"???\": \"&nsupseteq;\",\n      \"???\": \"&nsim;\",\n      \"???\": \"&nsimeq;\",\n      \"???\": \"&ncong;\",\n      \"???\": \"&napprox;\",\n      \"???\": \"&nsmid;\",\n      \"????\": \"&Nscr;\",\n      \"??\": \"&Ntilde;\",\n      \"??\": \"&Nu;\",\n      \"??\": \"&OElig;\",\n      \"??\": \"&Oacute;\",\n      \"??\": \"&Ocirc;\",\n      \"??\": \"&Ocy;\",\n      \"??\": \"&Odblac;\",\n      \"????\": \"&Ofr;\",\n      \"??\": \"&Ograve;\",\n      \"??\": \"&Omacr;\",\n      \"??\": \"&ohm;\",\n      \"??\": \"&Omicron;\",\n      \"????\": \"&Oopf;\",\n      \"???\": \"&ldquo;\",\n      \"???\": \"&lsquo;\",\n      \"???\": \"&Or;\",\n      \"????\": \"&Oscr;\",\n      \"??\": \"&Oslash;\",\n      \"??\": \"&Otilde;\",\n      \"???\": \"&Otimes;\",\n      \"??\": \"&Ouml;\",\n      \"???\": \"&oline;\",\n      \"???\": \"&OverBrace;\",\n      \"???\": \"&tbrk;\",\n      \"???\": \"&OverParenthesis;\",\n      \"???\": \"&part;\",\n      \"??\": \"&Pcy;\",\n      \"????\": \"&Pfr;\",\n      \"??\": \"&Phi;\",\n      \"??\": \"&Pi;\",\n      \"??\": \"&pm;\",\n      \"???\": \"&primes;\",\n      \"???\": \"&Pr;\",\n      \"???\": \"&prec;\",\n      \"???\": \"&preceq;\",\n      \"???\": \"&preccurlyeq;\",\n      \"???\": \"&prsim;\",\n      \"???\": \"&Prime;\",\n      \"???\": \"&prod;\",\n      \"???\": \"&vprop;\",\n      \"????\": \"&Pscr;\",\n      \"??\": \"&Psi;\",\n      '\"': \"&quot;\",\n      \"????\": \"&Qfr;\",\n      \"???\": \"&rationals;\",\n      \"????\": \"&Qscr;\",\n      \"???\": \"&drbkarow;\",\n      \"??\": \"&reg;\",\n      \"??\": \"&Racute;\",\n      \"???\": \"&Rang;\",\n      \"???\": \"&twoheadrightarrow;\",\n      \"???\": \"&Rarrtl;\",\n      \"??\": \"&Rcaron;\",\n      \"??\": \"&Rcedil;\",\n      \"??\": \"&Rcy;\",\n      \"???\": \"&realpart;\",\n      \"???\": \"&niv;\",\n      \"???\": \"&lrhar;\",\n      \"???\": \"&duhar;\",\n      \"??\": \"&Rho;\",\n      \"???\": \"&rangle;\",\n      \"???\": \"&srarr;\",\n      \"???\": \"&rarrb;\",\n      \"???\": \"&rlarr;\",\n      \"???\": \"&rceil;\",\n      \"???\": \"&robrk;\",\n      \"???\": \"&RightDownTeeVector;\",\n      \"???\": \"&downharpoonright;\",\n      \"???\": \"&RightDownVectorBar;\",\n      \"???\": \"&rfloor;\",\n      \"???\": \"&vdash;\",\n      \"???\": \"&mapsto;\",\n      \"???\": \"&RightTeeVector;\",\n      \"???\": \"&vrtri;\",\n      \"???\": \"&RightTriangleBar;\",\n      \"???\": \"&trianglerighteq;\",\n      \"???\": \"&RightUpDownVector;\",\n      \"???\": \"&RightUpTeeVector;\",\n      \"???\": \"&upharpoonright;\",\n      \"???\": \"&RightUpVectorBar;\",\n      \"???\": \"&rightharpoonup;\",\n      \"???\": \"&RightVectorBar;\",\n      \"???\": \"&reals;\",\n      \"???\": \"&RoundImplies;\",\n      \"???\": \"&rAarr;\",\n      \"???\": \"&realine;\",\n      \"???\": \"&rsh;\",\n      \"???\": \"&RuleDelayed;\",\n      \"??\": \"&SHCHcy;\",\n      \"??\": \"&SHcy;\",\n      \"??\": \"&SOFTcy;\",\n      \"??\": \"&Sacute;\",\n      \"???\": \"&Sc;\",\n      \"??\": \"&Scaron;\",\n      \"??\": \"&Scedil;\",\n      \"??\": \"&Scirc;\",\n      \"??\": \"&Scy;\",\n      \"????\": \"&Sfr;\",\n      \"???\": \"&uparrow;\",\n      \"??\": \"&Sigma;\",\n      \"???\": \"&compfn;\",\n      \"????\": \"&Sopf;\",\n      \"???\": \"&radic;\",\n      \"???\": \"&square;\",\n      \"???\": \"&sqcap;\",\n      \"???\": \"&sqsubset;\",\n      \"???\": \"&sqsubseteq;\",\n      \"???\": \"&sqsupset;\",\n      \"???\": \"&sqsupseteq;\",\n      \"???\": \"&sqcup;\",\n      \"????\": \"&Sscr;\",\n      \"???\": \"&sstarf;\",\n      \"???\": \"&Subset;\",\n      \"???\": \"&subseteq;\",\n      \"???\": \"&succ;\",\n      \"???\": \"&succeq;\",\n      \"???\": \"&succcurlyeq;\",\n      \"???\": \"&succsim;\",\n      \"???\": \"&sum;\",\n      \"???\": \"&Supset;\",\n      \"???\": \"&supset;\",\n      \"???\": \"&supseteq;\",\n      \"??\": \"&THORN;\",\n      \"???\": \"&trade;\",\n      \"??\": \"&TSHcy;\",\n      \"??\": \"&TScy;\",\n      \"\\t\": \"&Tab;\",\n      \"??\": \"&Tau;\",\n      \"??\": \"&Tcaron;\",\n      \"??\": \"&Tcedil;\",\n      \"??\": \"&Tcy;\",\n      \"????\": \"&Tfr;\",\n      \"???\": \"&therefore;\",\n      \"??\": \"&Theta;\",\n      \"??????\": \"&ThickSpace;\",\n      \"???\": \"&thinsp;\",\n      \"???\": \"&thksim;\",\n      \"???\": \"&simeq;\",\n      \"???\": \"&cong;\",\n      \"???\": \"&thkap;\",\n      \"????\": \"&Topf;\",\n      \"???\": \"&tdot;\",\n      \"????\": \"&Tscr;\",\n      \"??\": \"&Tstrok;\",\n      \"??\": \"&Uacute;\",\n      \"???\": \"&Uarr;\",\n      \"???\": \"&Uarrocir;\",\n      \"??\": \"&Ubrcy;\",\n      \"??\": \"&Ubreve;\",\n      \"??\": \"&Ucirc;\",\n      \"??\": \"&Ucy;\",\n      \"??\": \"&Udblac;\",\n      \"????\": \"&Ufr;\",\n      \"??\": \"&Ugrave;\",\n      \"??\": \"&Umacr;\",\n      _: \"&lowbar;\",\n      \"???\": \"&UnderBrace;\",\n      \"???\": \"&bbrk;\",\n      \"???\": \"&UnderParenthesis;\",\n      \"???\": \"&xcup;\",\n      \"???\": \"&uplus;\",\n      \"??\": \"&Uogon;\",\n      \"????\": \"&Uopf;\",\n      \"???\": \"&UpArrowBar;\",\n      \"???\": \"&udarr;\",\n      \"???\": \"&varr;\",\n      \"???\": \"&udhar;\",\n      \"???\": \"&perp;\",\n      \"???\": \"&mapstoup;\",\n      \"???\": \"&nwarrow;\",\n      \"???\": \"&nearrow;\",\n      \"??\": \"&upsih;\",\n      \"??\": \"&Upsilon;\",\n      \"??\": \"&Uring;\",\n      \"????\": \"&Uscr;\",\n      \"??\": \"&Utilde;\",\n      \"??\": \"&Uuml;\",\n      \"???\": \"&VDash;\",\n      \"???\": \"&Vbar;\",\n      \"??\": \"&Vcy;\",\n      \"???\": \"&Vdash;\",\n      \"???\": \"&Vdashl;\",\n      \"???\": \"&xvee;\",\n      \"???\": \"&Vert;\",\n      \"???\": \"&smid;\",\n      \"|\": \"&vert;\",\n      \"???\": \"&VerticalSeparator;\",\n      \"???\": \"&wreath;\",\n      \"???\": \"&hairsp;\",\n      \"????\": \"&Vfr;\",\n      \"????\": \"&Vopf;\",\n      \"????\": \"&Vscr;\",\n      \"???\": \"&Vvdash;\",\n      \"??\": \"&Wcirc;\",\n      \"???\": \"&xwedge;\",\n      \"????\": \"&Wfr;\",\n      \"????\": \"&Wopf;\",\n      \"????\": \"&Wscr;\",\n      \"????\": \"&Xfr;\",\n      \"??\": \"&Xi;\",\n      \"????\": \"&Xopf;\",\n      \"????\": \"&Xscr;\",\n      \"??\": \"&YAcy;\",\n      \"??\": \"&YIcy;\",\n      \"??\": \"&YUcy;\",\n      \"??\": \"&Yacute;\",\n      \"??\": \"&Ycirc;\",\n      \"??\": \"&Ycy;\",\n      \"????\": \"&Yfr;\",\n      \"????\": \"&Yopf;\",\n      \"????\": \"&Yscr;\",\n      \"??\": \"&Yuml;\",\n      \"??\": \"&ZHcy;\",\n      \"??\": \"&Zacute;\",\n      \"??\": \"&Zcaron;\",\n      \"??\": \"&Zcy;\",\n      \"??\": \"&Zdot;\",\n      \"??\": \"&Zeta;\",\n      \"???\": \"&zeetrf;\",\n      \"???\": \"&integers;\",\n      \"????\": \"&Zscr;\",\n      \"??\": \"&aacute;\",\n      \"??\": \"&abreve;\",\n      \"???\": \"&mstpos;\",\n      \"?????\": \"&acE;\",\n      \"???\": \"&acd;\",\n      \"??\": \"&acirc;\",\n      \"??\": \"&acy;\",\n      \"??\": \"&aelig;\",\n      \"????\": \"&afr;\",\n      \"??\": \"&agrave;\",\n      \"???\": \"&aleph;\",\n      \"??\": \"&alpha;\",\n      \"??\": \"&amacr;\",\n      \"???\": \"&amalg;\",\n      \"???\": \"&wedge;\",\n      \"???\": \"&andand;\",\n      \"???\": \"&andd;\",\n      \"???\": \"&andslope;\",\n      \"???\": \"&andv;\",\n      \"???\": \"&angle;\",\n      \"???\": \"&ange;\",\n      \"???\": \"&measuredangle;\",\n      \"???\": \"&angmsdaa;\",\n      \"???\": \"&angmsdab;\",\n      \"???\": \"&angmsdac;\",\n      \"???\": \"&angmsdad;\",\n      \"???\": \"&angmsdae;\",\n      \"???\": \"&angmsdaf;\",\n      \"???\": \"&angmsdag;\",\n      \"???\": \"&angmsdah;\",\n      \"???\": \"&angrt;\",\n      \"???\": \"&angrtvb;\",\n      \"???\": \"&angrtvbd;\",\n      \"???\": \"&angsph;\",\n      \"???\": \"&angzarr;\",\n      \"??\": \"&aogon;\",\n      \"????\": \"&aopf;\",\n      \"???\": \"&apE;\",\n      \"???\": \"&apacir;\",\n      \"???\": \"&approxeq;\",\n      \"???\": \"&apid;\",\n      \"'\": \"&apos;\",\n      \"??\": \"&aring;\",\n      \"????\": \"&ascr;\",\n      \"*\": \"&midast;\",\n      \"??\": \"&atilde;\",\n      \"??\": \"&auml;\",\n      \"???\": \"&awint;\",\n      \"???\": \"&bNot;\",\n      \"???\": \"&bcong;\",\n      \"??\": \"&bepsi;\",\n      \"???\": \"&bprime;\",\n      \"???\": \"&bsim;\",\n      \"???\": \"&bsime;\",\n      \"???\": \"&barvee;\",\n      \"???\": \"&barwedge;\",\n      \"???\": \"&bbrktbrk;\",\n      \"??\": \"&bcy;\",\n      \"???\": \"&ldquor;\",\n      \"???\": \"&bemptyv;\",\n      \"??\": \"&beta;\",\n      \"???\": \"&beth;\",\n      \"???\": \"&twixt;\",\n      \"????\": \"&bfr;\",\n      \"???\": \"&xcirc;\",\n      \"???\": \"&xodot;\",\n      \"???\": \"&xoplus;\",\n      \"???\": \"&xotime;\",\n      \"???\": \"&xsqcup;\",\n      \"???\": \"&starf;\",\n      \"???\": \"&xdtri;\",\n      \"???\": \"&xutri;\",\n      \"???\": \"&xuplus;\",\n      \"???\": \"&rbarr;\",\n      \"???\": \"&lozf;\",\n      \"???\": \"&utrif;\",\n      \"???\": \"&dtrif;\",\n      \"???\": \"&ltrif;\",\n      \"???\": \"&rtrif;\",\n      \"???\": \"&blank;\",\n      \"???\": \"&blk12;\",\n      \"???\": \"&blk14;\",\n      \"???\": \"&blk34;\",\n      \"???\": \"&block;\",\n      \"=???\": \"&bne;\",\n      \"??????\": \"&bnequiv;\",\n      \"???\": \"&bnot;\",\n      \"????\": \"&bopf;\",\n      \"???\": \"&bowtie;\",\n      \"???\": \"&boxDL;\",\n      \"???\": \"&boxDR;\",\n      \"???\": \"&boxDl;\",\n      \"???\": \"&boxDr;\",\n      \"???\": \"&boxH;\",\n      \"???\": \"&boxHD;\",\n      \"???\": \"&boxHU;\",\n      \"???\": \"&boxHd;\",\n      \"???\": \"&boxHu;\",\n      \"???\": \"&boxUL;\",\n      \"???\": \"&boxUR;\",\n      \"???\": \"&boxUl;\",\n      \"???\": \"&boxUr;\",\n      \"???\": \"&boxV;\",\n      \"???\": \"&boxVH;\",\n      \"???\": \"&boxVL;\",\n      \"???\": \"&boxVR;\",\n      \"???\": \"&boxVh;\",\n      \"???\": \"&boxVl;\",\n      \"???\": \"&boxVr;\",\n      \"???\": \"&boxbox;\",\n      \"???\": \"&boxdL;\",\n      \"???\": \"&boxdR;\",\n      \"???\": \"&boxdl;\",\n      \"???\": \"&boxdr;\",\n      \"???\": \"&boxhD;\",\n      \"???\": \"&boxhU;\",\n      \"???\": \"&boxhd;\",\n      \"???\": \"&boxhu;\",\n      \"???\": \"&minusb;\",\n      \"???\": \"&plusb;\",\n      \"???\": \"&timesb;\",\n      \"???\": \"&boxuL;\",\n      \"???\": \"&boxuR;\",\n      \"???\": \"&boxul;\",\n      \"???\": \"&boxur;\",\n      \"???\": \"&boxv;\",\n      \"???\": \"&boxvH;\",\n      \"???\": \"&boxvL;\",\n      \"???\": \"&boxvR;\",\n      \"???\": \"&boxvh;\",\n      \"???\": \"&boxvl;\",\n      \"???\": \"&boxvr;\",\n      \"??\": \"&brvbar;\",\n      \"????\": \"&bscr;\",\n      \"???\": \"&bsemi;\",\n      \"\\\\\": \"&bsol;\",\n      \"???\": \"&bsolb;\",\n      \"???\": \"&bsolhsub;\",\n      \"???\": \"&bullet;\",\n      \"???\": \"&bumpE;\",\n      \"??\": \"&cacute;\",\n      \"???\": \"&cap;\",\n      \"???\": \"&capand;\",\n      \"???\": \"&capbrcup;\",\n      \"???\": \"&capcap;\",\n      \"???\": \"&capcup;\",\n      \"???\": \"&capdot;\",\n      \"??????\": \"&caps;\",\n      \"???\": \"&caret;\",\n      \"???\": \"&ccaps;\",\n      \"??\": \"&ccaron;\",\n      \"??\": \"&ccedil;\",\n      \"??\": \"&ccirc;\",\n      \"???\": \"&ccups;\",\n      \"???\": \"&ccupssm;\",\n      \"??\": \"&cdot;\",\n      \"???\": \"&cemptyv;\",\n      \"??\": \"&cent;\",\n      \"????\": \"&cfr;\",\n      \"??\": \"&chcy;\",\n      \"???\": \"&checkmark;\",\n      \"??\": \"&chi;\",\n      \"???\": \"&cir;\",\n      \"???\": \"&cirE;\",\n      \"??\": \"&circ;\",\n      \"???\": \"&cire;\",\n      \"???\": \"&olarr;\",\n      \"???\": \"&orarr;\",\n      \"???\": \"&oS;\",\n      \"???\": \"&oast;\",\n      \"???\": \"&ocir;\",\n      \"???\": \"&odash;\",\n      \"???\": \"&cirfnint;\",\n      \"???\": \"&cirmid;\",\n      \"???\": \"&cirscir;\",\n      \"???\": \"&clubsuit;\",\n      \":\": \"&colon;\",\n      \",\": \"&comma;\",\n      \"@\": \"&commat;\",\n      \"???\": \"&complement;\",\n      \"???\": \"&congdot;\",\n      \"????\": \"&copf;\",\n      \"???\": \"&copysr;\",\n      \"???\": \"&crarr;\",\n      \"???\": \"&cross;\",\n      \"????\": \"&cscr;\",\n      \"???\": \"&csub;\",\n      \"???\": \"&csube;\",\n      \"???\": \"&csup;\",\n      \"???\": \"&csupe;\",\n      \"???\": \"&ctdot;\",\n      \"???\": \"&cudarrl;\",\n      \"???\": \"&cudarrr;\",\n      \"???\": \"&curlyeqprec;\",\n      \"???\": \"&curlyeqsucc;\",\n      \"???\": \"&curvearrowleft;\",\n      \"???\": \"&cularrp;\",\n      \"???\": \"&cup;\",\n      \"???\": \"&cupbrcap;\",\n      \"???\": \"&cupcap;\",\n      \"???\": \"&cupcup;\",\n      \"???\": \"&cupdot;\",\n      \"???\": \"&cupor;\",\n      \"??????\": \"&cups;\",\n      \"???\": \"&curvearrowright;\",\n      \"???\": \"&curarrm;\",\n      \"???\": \"&cuvee;\",\n      \"???\": \"&cuwed;\",\n      \"??\": \"&curren;\",\n      \"???\": \"&cwint;\",\n      \"???\": \"&cylcty;\",\n      \"???\": \"&dHar;\",\n      \"???\": \"&dagger;\",\n      \"???\": \"&daleth;\",\n      \"???\": \"&hyphen;\",\n      \"???\": \"&rBarr;\",\n      \"??\": \"&dcaron;\",\n      \"??\": \"&dcy;\",\n      \"???\": \"&downdownarrows;\",\n      \"???\": \"&eDDot;\",\n      \"??\": \"&deg;\",\n      \"??\": \"&delta;\",\n      \"???\": \"&demptyv;\",\n      \"???\": \"&dfisht;\",\n      \"????\": \"&dfr;\",\n      \"???\": \"&diams;\",\n      \"??\": \"&gammad;\",\n      \"???\": \"&disin;\",\n      \"??\": \"&divide;\",\n      \"???\": \"&divonx;\",\n      \"??\": \"&djcy;\",\n      \"???\": \"&llcorner;\",\n      \"???\": \"&dlcrop;\",\n      $: \"&dollar;\",\n      \"????\": \"&dopf;\",\n      \"???\": \"&eDot;\",\n      \"???\": \"&minusd;\",\n      \"???\": \"&plusdo;\",\n      \"???\": \"&sdotb;\",\n      \"???\": \"&lrcorner;\",\n      \"???\": \"&drcrop;\",\n      \"????\": \"&dscr;\",\n      \"??\": \"&dscy;\",\n      \"???\": \"&dsol;\",\n      \"??\": \"&dstrok;\",\n      \"???\": \"&dtdot;\",\n      \"???\": \"&triangledown;\",\n      \"???\": \"&dwangle;\",\n      \"??\": \"&dzcy;\",\n      \"???\": \"&dzigrarr;\",\n      \"??\": \"&eacute;\",\n      \"???\": \"&easter;\",\n      \"??\": \"&ecaron;\",\n      \"???\": \"&eqcirc;\",\n      \"??\": \"&ecirc;\",\n      \"???\": \"&eqcolon;\",\n      \"??\": \"&ecy;\",\n      \"??\": \"&edot;\",\n      \"???\": \"&fallingdotseq;\",\n      \"????\": \"&efr;\",\n      \"???\": \"&eg;\",\n      \"??\": \"&egrave;\",\n      \"???\": \"&eqslantgtr;\",\n      \"???\": \"&egsdot;\",\n      \"???\": \"&el;\",\n      \"???\": \"&elinters;\",\n      \"???\": \"&ell;\",\n      \"???\": \"&eqslantless;\",\n      \"???\": \"&elsdot;\",\n      \"??\": \"&emacr;\",\n      \"???\": \"&varnothing;\",\n      \"???\": \"&emsp13;\",\n      \"???\": \"&emsp14;\",\n      \"???\": \"&emsp;\",\n      \"??\": \"&eng;\",\n      \"???\": \"&ensp;\",\n      \"??\": \"&eogon;\",\n      \"????\": \"&eopf;\",\n      \"???\": \"&epar;\",\n      \"???\": \"&eparsl;\",\n      \"???\": \"&eplus;\",\n      \"??\": \"&epsilon;\",\n      \"??\": \"&varepsilon;\",\n      \"=\": \"&equals;\",\n      \"???\": \"&questeq;\",\n      \"???\": \"&equivDD;\",\n      \"???\": \"&eqvparsl;\",\n      \"???\": \"&risingdotseq;\",\n      \"???\": \"&erarr;\",\n      \"???\": \"&escr;\",\n      \"??\": \"&eta;\",\n      \"??\": \"&eth;\",\n      \"??\": \"&euml;\",\n      \"???\": \"&euro;\",\n      \"!\": \"&excl;\",\n      \"??\": \"&fcy;\",\n      \"???\": \"&female;\",\n      \"???\": \"&ffilig;\",\n      \"???\": \"&fflig;\",\n      \"???\": \"&ffllig;\",\n      \"????\": \"&ffr;\",\n      \"???\": \"&filig;\",\n      fj: \"&fjlig;\",\n      \"???\": \"&flat;\",\n      \"???\": \"&fllig;\",\n      \"???\": \"&fltns;\",\n      \"??\": \"&fnof;\",\n      \"????\": \"&fopf;\",\n      \"???\": \"&pitchfork;\",\n      \"???\": \"&forkv;\",\n      \"???\": \"&fpartint;\",\n      \"??\": \"&half;\",\n      \"???\": \"&frac13;\",\n      \"??\": \"&frac14;\",\n      \"???\": \"&frac15;\",\n      \"???\": \"&frac16;\",\n      \"???\": \"&frac18;\",\n      \"???\": \"&frac23;\",\n      \"???\": \"&frac25;\",\n      \"??\": \"&frac34;\",\n      \"???\": \"&frac35;\",\n      \"???\": \"&frac38;\",\n      \"???\": \"&frac45;\",\n      \"???\": \"&frac56;\",\n      \"???\": \"&frac58;\",\n      \"???\": \"&frac78;\",\n      \"???\": \"&frasl;\",\n      \"???\": \"&sfrown;\",\n      \"????\": \"&fscr;\",\n      \"???\": \"&gtreqqless;\",\n      \"??\": \"&gacute;\",\n      \"??\": \"&gamma;\",\n      \"???\": \"&gtrapprox;\",\n      \"??\": \"&gbreve;\",\n      \"??\": \"&gcirc;\",\n      \"??\": \"&gcy;\",\n      \"??\": \"&gdot;\",\n      \"???\": \"&gescc;\",\n      \"???\": \"&gesdot;\",\n      \"???\": \"&gesdoto;\",\n      \"???\": \"&gesdotol;\",\n      \"??????\": \"&gesl;\",\n      \"???\": \"&gesles;\",\n      \"????\": \"&gfr;\",\n      \"???\": \"&gimel;\",\n      \"??\": \"&gjcy;\",\n      \"???\": \"&glE;\",\n      \"???\": \"&gla;\",\n      \"???\": \"&glj;\",\n      \"???\": \"&gneqq;\",\n      \"???\": \"&gnapprox;\",\n      \"???\": \"&gneq;\",\n      \"???\": \"&gnsim;\",\n      \"????\": \"&gopf;\",\n      \"???\": \"&gscr;\",\n      \"???\": \"&gsime;\",\n      \"???\": \"&gsiml;\",\n      \"???\": \"&gtcc;\",\n      \"???\": \"&gtcir;\",\n      \"???\": \"&gtrdot;\",\n      \"???\": \"&gtlPar;\",\n      \"???\": \"&gtquest;\",\n      \"???\": \"&gtrarr;\",\n      \"??????\": \"&gvnE;\",\n      \"??\": \"&hardcy;\",\n      \"???\": \"&harrcir;\",\n      \"???\": \"&leftrightsquigarrow;\",\n      \"???\": \"&plankv;\",\n      \"??\": \"&hcirc;\",\n      \"???\": \"&heartsuit;\",\n      \"???\": \"&mldr;\",\n      \"???\": \"&hercon;\",\n      \"????\": \"&hfr;\",\n      \"???\": \"&searhk;\",\n      \"???\": \"&swarhk;\",\n      \"???\": \"&hoarr;\",\n      \"???\": \"&homtht;\",\n      \"???\": \"&larrhk;\",\n      \"???\": \"&rarrhk;\",\n      \"????\": \"&hopf;\",\n      \"???\": \"&horbar;\",\n      \"????\": \"&hscr;\",\n      \"??\": \"&hstrok;\",\n      \"???\": \"&hybull;\",\n      \"??\": \"&iacute;\",\n      \"??\": \"&icirc;\",\n      \"??\": \"&icy;\",\n      \"??\": \"&iecy;\",\n      \"??\": \"&iexcl;\",\n      \"????\": \"&ifr;\",\n      \"??\": \"&igrave;\",\n      \"???\": \"&qint;\",\n      \"???\": \"&tint;\",\n      \"???\": \"&iinfin;\",\n      \"???\": \"&iiota;\",\n      \"??\": \"&ijlig;\",\n      \"??\": \"&imacr;\",\n      \"??\": \"&inodot;\",\n      \"???\": \"&imof;\",\n      \"??\": \"&imped;\",\n      \"???\": \"&incare;\",\n      \"???\": \"&infin;\",\n      \"???\": \"&infintie;\",\n      \"???\": \"&intercal;\",\n      \"???\": \"&intlarhk;\",\n      \"???\": \"&iprod;\",\n      \"??\": \"&iocy;\",\n      \"??\": \"&iogon;\",\n      \"????\": \"&iopf;\",\n      \"??\": \"&iota;\",\n      \"??\": \"&iquest;\",\n      \"????\": \"&iscr;\",\n      \"???\": \"&isinE;\",\n      \"???\": \"&isindot;\",\n      \"???\": \"&isins;\",\n      \"???\": \"&isinsv;\",\n      \"??\": \"&itilde;\",\n      \"??\": \"&iukcy;\",\n      \"??\": \"&iuml;\",\n      \"??\": \"&jcirc;\",\n      \"??\": \"&jcy;\",\n      \"????\": \"&jfr;\",\n      \"??\": \"&jmath;\",\n      \"????\": \"&jopf;\",\n      \"????\": \"&jscr;\",\n      \"??\": \"&jsercy;\",\n      \"??\": \"&jukcy;\",\n      \"??\": \"&kappa;\",\n      \"??\": \"&varkappa;\",\n      \"??\": \"&kcedil;\",\n      \"??\": \"&kcy;\",\n      \"????\": \"&kfr;\",\n      \"??\": \"&kgreen;\",\n      \"??\": \"&khcy;\",\n      \"??\": \"&kjcy;\",\n      \"????\": \"&kopf;\",\n      \"????\": \"&kscr;\",\n      \"???\": \"&lAtail;\",\n      \"???\": \"&lBarr;\",\n      \"???\": \"&lesseqqgtr;\",\n      \"???\": \"&lHar;\",\n      \"??\": \"&lacute;\",\n      \"???\": \"&laemptyv;\",\n      \"??\": \"&lambda;\",\n      \"???\": \"&langd;\",\n      \"???\": \"&lessapprox;\",\n      \"??\": \"&laquo;\",\n      \"???\": \"&larrbfs;\",\n      \"???\": \"&larrfs;\",\n      \"???\": \"&looparrowleft;\",\n      \"???\": \"&larrpl;\",\n      \"???\": \"&larrsim;\",\n      \"???\": \"&leftarrowtail;\",\n      \"???\": \"&lat;\",\n      \"???\": \"&latail;\",\n      \"???\": \"&late;\",\n      \"??????\": \"&lates;\",\n      \"???\": \"&lbarr;\",\n      \"???\": \"&lbbrk;\",\n      \"{\": \"&lcub;\",\n      \"[\": \"&lsqb;\",\n      \"???\": \"&lbrke;\",\n      \"???\": \"&lbrksld;\",\n      \"???\": \"&lbrkslu;\",\n      \"??\": \"&lcaron;\",\n      \"??\": \"&lcedil;\",\n      \"??\": \"&lcy;\",\n      \"???\": \"&ldca;\",\n      \"???\": \"&ldrdhar;\",\n      \"???\": \"&ldrushar;\",\n      \"???\": \"&ldsh;\",\n      \"???\": \"&leq;\",\n      \"???\": \"&llarr;\",\n      \"???\": \"&lthree;\",\n      \"???\": \"&lescc;\",\n      \"???\": \"&lesdot;\",\n      \"???\": \"&lesdoto;\",\n      \"???\": \"&lesdotor;\",\n      \"??????\": \"&lesg;\",\n      \"???\": \"&lesges;\",\n      \"???\": \"&ltdot;\",\n      \"???\": \"&lfisht;\",\n      \"????\": \"&lfr;\",\n      \"???\": \"&lgE;\",\n      \"???\": \"&lharul;\",\n      \"???\": \"&lhblk;\",\n      \"??\": \"&ljcy;\",\n      \"???\": \"&llhard;\",\n      \"???\": \"&lltri;\",\n      \"??\": \"&lmidot;\",\n      \"???\": \"&lmoustache;\",\n      \"???\": \"&lneqq;\",\n      \"???\": \"&lnapprox;\",\n      \"???\": \"&lneq;\",\n      \"???\": \"&lnsim;\",\n      \"???\": \"&loang;\",\n      \"???\": \"&loarr;\",\n      \"???\": \"&xmap;\",\n      \"???\": \"&rarrlp;\",\n      \"???\": \"&lopar;\",\n      \"????\": \"&lopf;\",\n      \"???\": \"&loplus;\",\n      \"???\": \"&lotimes;\",\n      \"???\": \"&lowast;\",\n      \"???\": \"&lozenge;\",\n      \"(\": \"&lpar;\",\n      \"???\": \"&lparlt;\",\n      \"???\": \"&lrhard;\",\n      \"???\": \"&lrm;\",\n      \"???\": \"&lrtri;\",\n      \"???\": \"&lsaquo;\",\n      \"????\": \"&lscr;\",\n      \"???\": \"&lsime;\",\n      \"???\": \"&lsimg;\",\n      \"???\": \"&sbquo;\",\n      \"??\": \"&lstrok;\",\n      \"???\": \"&ltcc;\",\n      \"???\": \"&ltcir;\",\n      \"???\": \"&ltimes;\",\n      \"???\": \"&ltlarr;\",\n      \"???\": \"&ltquest;\",\n      \"???\": \"&ltrPar;\",\n      \"???\": \"&triangleleft;\",\n      \"???\": \"&lurdshar;\",\n      \"???\": \"&luruhar;\",\n      \"??????\": \"&lvnE;\",\n      \"???\": \"&mDDot;\",\n      \"??\": \"&strns;\",\n      \"???\": \"&male;\",\n      \"???\": \"&maltese;\",\n      \"???\": \"&marker;\",\n      \"???\": \"&mcomma;\",\n      \"??\": \"&mcy;\",\n      \"???\": \"&mdash;\",\n      \"????\": \"&mfr;\",\n      \"???\": \"&mho;\",\n      \"??\": \"&micro;\",\n      \"???\": \"&midcir;\",\n      \"???\": \"&minus;\",\n      \"???\": \"&minusdu;\",\n      \"???\": \"&mlcp;\",\n      \"???\": \"&models;\",\n      \"????\": \"&mopf;\",\n      \"????\": \"&mscr;\",\n      \"??\": \"&mu;\",\n      \"???\": \"&mumap;\",\n      \"?????\": \"&nGg;\",\n      \"??????\": \"&nGt;\",\n      \"???\": \"&nlArr;\",\n      \"???\": \"&nhArr;\",\n      \"?????\": \"&nLl;\",\n      \"??????\": \"&nLt;\",\n      \"???\": \"&nrArr;\",\n      \"???\": \"&nVDash;\",\n      \"???\": \"&nVdash;\",\n      \"??\": \"&nacute;\",\n      \"??????\": \"&nang;\",\n      \"?????\": \"&napE;\",\n      \"?????\": \"&napid;\",\n      \"??\": \"&napos;\",\n      \"???\": \"&natural;\",\n      \"???\": \"&ncap;\",\n      \"??\": \"&ncaron;\",\n      \"??\": \"&ncedil;\",\n      \"?????\": \"&ncongdot;\",\n      \"???\": \"&ncup;\",\n      \"??\": \"&ncy;\",\n      \"???\": \"&ndash;\",\n      \"???\": \"&neArr;\",\n      \"???\": \"&nearhk;\",\n      \"?????\": \"&nedot;\",\n      \"???\": \"&toea;\",\n      \"????\": \"&nfr;\",\n      \"???\": \"&nleftrightarrow;\",\n      \"???\": \"&nhpar;\",\n      \"???\": \"&nis;\",\n      \"???\": \"&nisd;\",\n      \"??\": \"&njcy;\",\n      \"?????\": \"&nleqq;\",\n      \"???\": \"&nleftarrow;\",\n      \"???\": \"&nldr;\",\n      \"????\": \"&nopf;\",\n      \"??\": \"&not;\",\n      \"?????\": \"&notinE;\",\n      \"?????\": \"&notindot;\",\n      \"???\": \"&notinvb;\",\n      \"???\": \"&notinvc;\",\n      \"???\": \"&notnivb;\",\n      \"???\": \"&notnivc;\",\n      \"??????\": \"&nparsl;\",\n      \"?????\": \"&npart;\",\n      \"???\": \"&npolint;\",\n      \"???\": \"&nrightarrow;\",\n      \"?????\": \"&nrarrc;\",\n      \"?????\": \"&nrarrw;\",\n      \"????\": \"&nscr;\",\n      \"???\": \"&nsub;\",\n      \"?????\": \"&nsubseteqq;\",\n      \"???\": \"&nsup;\",\n      \"?????\": \"&nsupseteqq;\",\n      \"??\": \"&ntilde;\",\n      \"??\": \"&nu;\",\n      \"#\": \"&num;\",\n      \"???\": \"&numero;\",\n      \"???\": \"&numsp;\",\n      \"???\": \"&nvDash;\",\n      \"???\": \"&nvHarr;\",\n      \"??????\": \"&nvap;\",\n      \"???\": \"&nvdash;\",\n      \"??????\": \"&nvge;\",\n      \">???\": \"&nvgt;\",\n      \"???\": \"&nvinfin;\",\n      \"???\": \"&nvlArr;\",\n      \"??????\": \"&nvle;\",\n      \"<???\": \"&nvlt;\",\n      \"??????\": \"&nvltrie;\",\n      \"???\": \"&nvrArr;\",\n      \"??????\": \"&nvrtrie;\",\n      \"??????\": \"&nvsim;\",\n      \"???\": \"&nwArr;\",\n      \"???\": \"&nwarhk;\",\n      \"???\": \"&nwnear;\",\n      \"??\": \"&oacute;\",\n      \"??\": \"&ocirc;\",\n      \"??\": \"&ocy;\",\n      \"??\": \"&odblac;\",\n      \"???\": \"&odiv;\",\n      \"???\": \"&odsold;\",\n      \"??\": \"&oelig;\",\n      \"???\": \"&ofcir;\",\n      \"????\": \"&ofr;\",\n      \"??\": \"&ogon;\",\n      \"??\": \"&ograve;\",\n      \"???\": \"&ogt;\",\n      \"???\": \"&ohbar;\",\n      \"???\": \"&olcir;\",\n      \"???\": \"&olcross;\",\n      \"???\": \"&olt;\",\n      \"??\": \"&omacr;\",\n      \"??\": \"&omega;\",\n      \"??\": \"&omicron;\",\n      \"???\": \"&omid;\",\n      \"????\": \"&oopf;\",\n      \"???\": \"&opar;\",\n      \"???\": \"&operp;\",\n      \"???\": \"&vee;\",\n      \"???\": \"&ord;\",\n      \"???\": \"&oscr;\",\n      \"??\": \"&ordf;\",\n      \"??\": \"&ordm;\",\n      \"???\": \"&origof;\",\n      \"???\": \"&oror;\",\n      \"???\": \"&orslope;\",\n      \"???\": \"&orv;\",\n      \"??\": \"&oslash;\",\n      \"???\": \"&osol;\",\n      \"??\": \"&otilde;\",\n      \"???\": \"&otimesas;\",\n      \"??\": \"&ouml;\",\n      \"???\": \"&ovbar;\",\n      \"??\": \"&para;\",\n      \"???\": \"&parsim;\",\n      \"???\": \"&parsl;\",\n      \"??\": \"&pcy;\",\n      \"%\": \"&percnt;\",\n      \".\": \"&period;\",\n      \"???\": \"&permil;\",\n      \"???\": \"&pertenk;\",\n      \"????\": \"&pfr;\",\n      \"??\": \"&phi;\",\n      \"??\": \"&varphi;\",\n      \"???\": \"&phone;\",\n      \"??\": \"&pi;\",\n      \"??\": \"&varpi;\",\n      \"???\": \"&planckh;\",\n      \"+\": \"&plus;\",\n      \"???\": \"&plusacir;\",\n      \"???\": \"&pluscir;\",\n      \"???\": \"&plusdu;\",\n      \"???\": \"&pluse;\",\n      \"???\": \"&plussim;\",\n      \"???\": \"&plustwo;\",\n      \"???\": \"&pointint;\",\n      \"????\": \"&popf;\",\n      \"??\": \"&pound;\",\n      \"???\": \"&prE;\",\n      \"???\": \"&precapprox;\",\n      \"???\": \"&prnap;\",\n      \"???\": \"&prnE;\",\n      \"???\": \"&prnsim;\",\n      \"???\": \"&prime;\",\n      \"???\": \"&profalar;\",\n      \"???\": \"&profline;\",\n      \"???\": \"&profsurf;\",\n      \"???\": \"&prurel;\",\n      \"????\": \"&pscr;\",\n      \"??\": \"&psi;\",\n      \"???\": \"&puncsp;\",\n      \"????\": \"&qfr;\",\n      \"????\": \"&qopf;\",\n      \"???\": \"&qprime;\",\n      \"????\": \"&qscr;\",\n      \"???\": \"&quatint;\",\n      \"?\": \"&quest;\",\n      \"???\": \"&rAtail;\",\n      \"???\": \"&rHar;\",\n      \"?????\": \"&race;\",\n      \"??\": \"&racute;\",\n      \"???\": \"&raemptyv;\",\n      \"???\": \"&rangd;\",\n      \"???\": \"&range;\",\n      \"??\": \"&raquo;\",\n      \"???\": \"&rarrap;\",\n      \"???\": \"&rarrbfs;\",\n      \"???\": \"&rarrc;\",\n      \"???\": \"&rarrfs;\",\n      \"???\": \"&rarrpl;\",\n      \"???\": \"&rarrsim;\",\n      \"???\": \"&rightarrowtail;\",\n      \"???\": \"&rightsquigarrow;\",\n      \"???\": \"&ratail;\",\n      \"???\": \"&ratio;\",\n      \"???\": \"&rbbrk;\",\n      \"}\": \"&rcub;\",\n      \"]\": \"&rsqb;\",\n      \"???\": \"&rbrke;\",\n      \"???\": \"&rbrksld;\",\n      \"???\": \"&rbrkslu;\",\n      \"??\": \"&rcaron;\",\n      \"??\": \"&rcedil;\",\n      \"??\": \"&rcy;\",\n      \"???\": \"&rdca;\",\n      \"???\": \"&rdldhar;\",\n      \"???\": \"&rdsh;\",\n      \"???\": \"&rect;\",\n      \"???\": \"&rfisht;\",\n      \"????\": \"&rfr;\",\n      \"???\": \"&rharul;\",\n      \"??\": \"&rho;\",\n      \"??\": \"&varrho;\",\n      \"???\": \"&rrarr;\",\n      \"???\": \"&rthree;\",\n      \"??\": \"&ring;\",\n      \"???\": \"&rlm;\",\n      \"???\": \"&rmoustache;\",\n      \"???\": \"&rnmid;\",\n      \"???\": \"&roang;\",\n      \"???\": \"&roarr;\",\n      \"???\": \"&ropar;\",\n      \"????\": \"&ropf;\",\n      \"???\": \"&roplus;\",\n      \"???\": \"&rotimes;\",\n      \")\": \"&rpar;\",\n      \"???\": \"&rpargt;\",\n      \"???\": \"&rppolint;\",\n      \"???\": \"&rsaquo;\",\n      \"????\": \"&rscr;\",\n      \"???\": \"&rtimes;\",\n      \"???\": \"&triangleright;\",\n      \"???\": \"&rtriltri;\",\n      \"???\": \"&ruluhar;\",\n      \"???\": \"&rx;\",\n      \"??\": \"&sacute;\",\n      \"???\": \"&scE;\",\n      \"???\": \"&succapprox;\",\n      \"??\": \"&scaron;\",\n      \"??\": \"&scedil;\",\n      \"??\": \"&scirc;\",\n      \"???\": \"&succneqq;\",\n      \"???\": \"&succnapprox;\",\n      \"???\": \"&succnsim;\",\n      \"???\": \"&scpolint;\",\n      \"??\": \"&scy;\",\n      \"???\": \"&sdot;\",\n      \"???\": \"&sdote;\",\n      \"???\": \"&seArr;\",\n      \"??\": \"&sect;\",\n      \";\": \"&semi;\",\n      \"???\": \"&tosa;\",\n      \"???\": \"&sext;\",\n      \"????\": \"&sfr;\",\n      \"???\": \"&sharp;\",\n      \"??\": \"&shchcy;\",\n      \"??\": \"&shcy;\",\n      \"??\": \"&shy;\",\n      \"??\": \"&sigma;\",\n      \"??\": \"&varsigma;\",\n      \"???\": \"&simdot;\",\n      \"???\": \"&simg;\",\n      \"???\": \"&simgE;\",\n      \"???\": \"&siml;\",\n      \"???\": \"&simlE;\",\n      \"???\": \"&simne;\",\n      \"???\": \"&simplus;\",\n      \"???\": \"&simrarr;\",\n      \"???\": \"&smashp;\",\n      \"???\": \"&smeparsl;\",\n      \"???\": \"&ssmile;\",\n      \"???\": \"&smt;\",\n      \"???\": \"&smte;\",\n      \"??????\": \"&smtes;\",\n      \"??\": \"&softcy;\",\n      \"/\": \"&sol;\",\n      \"???\": \"&solb;\",\n      \"???\": \"&solbar;\",\n      \"????\": \"&sopf;\",\n      \"???\": \"&spadesuit;\",\n      \"??????\": \"&sqcaps;\",\n      \"??????\": \"&sqcups;\",\n      \"????\": \"&sscr;\",\n      \"???\": \"&star;\",\n      \"???\": \"&subset;\",\n      \"???\": \"&subseteqq;\",\n      \"???\": \"&subdot;\",\n      \"???\": \"&subedot;\",\n      \"???\": \"&submult;\",\n      \"???\": \"&subsetneqq;\",\n      \"???\": \"&subsetneq;\",\n      \"???\": \"&subplus;\",\n      \"???\": \"&subrarr;\",\n      \"???\": \"&subsim;\",\n      \"???\": \"&subsub;\",\n      \"???\": \"&subsup;\",\n      \"???\": \"&sung;\",\n      \"??\": \"&sup1;\",\n      \"??\": \"&sup2;\",\n      \"??\": \"&sup3;\",\n      \"???\": \"&supseteqq;\",\n      \"???\": \"&supdot;\",\n      \"???\": \"&supdsub;\",\n      \"???\": \"&supedot;\",\n      \"???\": \"&suphsol;\",\n      \"???\": \"&suphsub;\",\n      \"???\": \"&suplarr;\",\n      \"???\": \"&supmult;\",\n      \"???\": \"&supsetneqq;\",\n      \"???\": \"&supsetneq;\",\n      \"???\": \"&supplus;\",\n      \"???\": \"&supsim;\",\n      \"???\": \"&supsub;\",\n      \"???\": \"&supsup;\",\n      \"???\": \"&swArr;\",\n      \"???\": \"&swnwar;\",\n      \"??\": \"&szlig;\",\n      \"???\": \"&target;\",\n      \"??\": \"&tau;\",\n      \"??\": \"&tcaron;\",\n      \"??\": \"&tcedil;\",\n      \"??\": \"&tcy;\",\n      \"???\": \"&telrec;\",\n      \"????\": \"&tfr;\",\n      \"??\": \"&theta;\",\n      \"??\": \"&vartheta;\",\n      \"??\": \"&thorn;\",\n      \"??\": \"&times;\",\n      \"???\": \"&timesbar;\",\n      \"???\": \"&timesd;\",\n      \"???\": \"&topbot;\",\n      \"???\": \"&topcir;\",\n      \"????\": \"&topf;\",\n      \"???\": \"&topfork;\",\n      \"???\": \"&tprime;\",\n      \"???\": \"&utri;\",\n      \"???\": \"&trie;\",\n      \"???\": \"&tridot;\",\n      \"???\": \"&triminus;\",\n      \"???\": \"&triplus;\",\n      \"???\": \"&trisb;\",\n      \"???\": \"&tritime;\",\n      \"???\": \"&trpezium;\",\n      \"????\": \"&tscr;\",\n      \"??\": \"&tscy;\",\n      \"??\": \"&tshcy;\",\n      \"??\": \"&tstrok;\",\n      \"???\": \"&uHar;\",\n      \"??\": \"&uacute;\",\n      \"??\": \"&ubrcy;\",\n      \"??\": \"&ubreve;\",\n      \"??\": \"&ucirc;\",\n      \"??\": \"&ucy;\",\n      \"??\": \"&udblac;\",\n      \"???\": \"&ufisht;\",\n      \"????\": \"&ufr;\",\n      \"??\": \"&ugrave;\",\n      \"???\": \"&uhblk;\",\n      \"???\": \"&ulcorner;\",\n      \"???\": \"&ulcrop;\",\n      \"???\": \"&ultri;\",\n      \"??\": \"&umacr;\",\n      \"??\": \"&uogon;\",\n      \"????\": \"&uopf;\",\n      \"??\": \"&upsilon;\",\n      \"???\": \"&uuarr;\",\n      \"???\": \"&urcorner;\",\n      \"???\": \"&urcrop;\",\n      \"??\": \"&uring;\",\n      \"???\": \"&urtri;\",\n      \"????\": \"&uscr;\",\n      \"???\": \"&utdot;\",\n      \"??\": \"&utilde;\",\n      \"??\": \"&uuml;\",\n      \"???\": \"&uwangle;\",\n      \"???\": \"&vBar;\",\n      \"???\": \"&vBarv;\",\n      \"???\": \"&vangrt;\",\n      \"??????\": \"&vsubne;\",\n      \"??????\": \"&vsubnE;\",\n      \"??????\": \"&vsupne;\",\n      \"??????\": \"&vsupnE;\",\n      \"??\": \"&vcy;\",\n      \"???\": \"&veebar;\",\n      \"???\": \"&veeeq;\",\n      \"???\": \"&vellip;\",\n      \"????\": \"&vfr;\",\n      \"????\": \"&vopf;\",\n      \"????\": \"&vscr;\",\n      \"???\": \"&vzigzag;\",\n      \"??\": \"&wcirc;\",\n      \"???\": \"&wedbar;\",\n      \"???\": \"&wedgeq;\",\n      \"???\": \"&wp;\",\n      \"????\": \"&wfr;\",\n      \"????\": \"&wopf;\",\n      \"????\": \"&wscr;\",\n      \"????\": \"&xfr;\",\n      \"??\": \"&xi;\",\n      \"???\": \"&xnis;\",\n      \"????\": \"&xopf;\",\n      \"????\": \"&xscr;\",\n      \"??\": \"&yacute;\",\n      \"??\": \"&yacy;\",\n      \"??\": \"&ycirc;\",\n      \"??\": \"&ycy;\",\n      \"??\": \"&yen;\",\n      \"????\": \"&yfr;\",\n      \"??\": \"&yicy;\",\n      \"????\": \"&yopf;\",\n      \"????\": \"&yscr;\",\n      \"??\": \"&yucy;\",\n      \"??\": \"&yuml;\",\n      \"??\": \"&zacute;\",\n      \"??\": \"&zcaron;\",\n      \"??\": \"&zcy;\",\n      \"??\": \"&zdot;\",\n      \"??\": \"&zeta;\",\n      \"????\": \"&zfr;\",\n      \"??\": \"&zhcy;\",\n      \"???\": \"&zigrarr;\",\n      \"????\": \"&zopf;\",\n      \"????\": \"&zscr;\",\n      \"???\": \"&zwj;\",\n      \"???\": \"&zwnj;\"\n    }\n  }\n};\n\n//# sourceURL=webpack://dashboard/./node_modules/html-entities/lib/named-references.js?");

/***/ }),

/***/ "./node_modules/html-entities/lib/numeric-unicode-map.js":
/*!***************************************************************!*\
  !*** ./node_modules/html-entities/lib/numeric-unicode-map.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.numericUnicodeMap = {\n  0: 65533,\n  128: 8364,\n  130: 8218,\n  131: 402,\n  132: 8222,\n  133: 8230,\n  134: 8224,\n  135: 8225,\n  136: 710,\n  137: 8240,\n  138: 352,\n  139: 8249,\n  140: 338,\n  142: 381,\n  145: 8216,\n  146: 8217,\n  147: 8220,\n  148: 8221,\n  149: 8226,\n  150: 8211,\n  151: 8212,\n  152: 732,\n  153: 8482,\n  154: 353,\n  155: 8250,\n  156: 339,\n  158: 382,\n  159: 376\n};\n\n//# sourceURL=webpack://dashboard/./node_modules/html-entities/lib/numeric-unicode-map.js?");

/***/ }),

/***/ "./node_modules/html-entities/lib/surrogate-pairs.js":
/*!***********************************************************!*\
  !*** ./node_modules/html-entities/lib/surrogate-pairs.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nexports.fromCodePoint = String.fromCodePoint || function (astralCodePoint) {\n  return String.fromCharCode(Math.floor((astralCodePoint - 65536) / 1024) + 55296, (astralCodePoint - 65536) % 1024 + 56320);\n};\n\nexports.getCodePoint = String.prototype.codePointAt ? function (input, position) {\n  return input.codePointAt(position);\n} : function (input, position) {\n  return (input.charCodeAt(position) - 55296) * 1024 + input.charCodeAt(position + 1) - 56320 + 65536;\n};\nexports.highSurrogateFrom = 55296;\nexports.highSurrogateTo = 56319;\n\n//# sourceURL=webpack://dashboard/./node_modules/html-entities/lib/surrogate-pairs.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js":
/*!***************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WebSocketClient)\n/* harmony export */ });\n/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log.js */ \"./node_modules/webpack-dev-server/client/utils/log.js\");\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n\n\nvar WebSocketClient = /*#__PURE__*/function () {\n  /**\n   * @param {string} url\n   */\n  function WebSocketClient(url) {\n    _classCallCheck(this, WebSocketClient);\n\n    this.client = new WebSocket(url);\n\n    this.client.onerror = function (error) {\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_0__.log.error(error);\n    };\n  }\n  /**\n   * @param {(...args: any[]) => void} f\n   */\n\n\n  _createClass(WebSocketClient, [{\n    key: \"onOpen\",\n    value: function onOpen(f) {\n      this.client.onopen = f;\n    }\n    /**\n     * @param {(...args: any[]) => void} f\n     */\n\n  }, {\n    key: \"onClose\",\n    value: function onClose(f) {\n      this.client.onclose = f;\n    } // call f with the message string as the first argument\n\n    /**\n     * @param {(...args: any[]) => void} f\n     */\n\n  }, {\n    key: \"onMessage\",\n    value: function onMessage(f) {\n      this.client.onmessage = function (e) {\n        f(e.data);\n      };\n    }\n  }]);\n\n  return WebSocketClient;\n}();\n\n\n\n//# sourceURL=webpack://dashboard/./node_modules/webpack-dev-server/client/clients/WebSocketClient.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=9000&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=9000&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("var __resourceQuery = \"?protocol=ws%3A&hostname=0.0.0.0&port=9000&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/log.js */ \"./node_modules/webpack/hot/log.js\");\n/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/stripAnsi.js */ \"./node_modules/webpack-dev-server/client/utils/stripAnsi.js\");\n/* harmony import */ var _utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/parseURL.js */ \"./node_modules/webpack-dev-server/client/utils/parseURL.js\");\n/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket.js */ \"./node_modules/webpack-dev-server/client/socket.js\");\n/* harmony import */ var _overlay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay.js */ \"./node_modules/webpack-dev-server/client/overlay.js\");\n/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/log.js */ \"./node_modules/webpack-dev-server/client/utils/log.js\");\n/* harmony import */ var _utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/sendMessage.js */ \"./node_modules/webpack-dev-server/client/utils/sendMessage.js\");\n/* harmony import */ var _utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/reloadApp.js */ \"./node_modules/webpack-dev-server/client/utils/reloadApp.js\");\n/* harmony import */ var _utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/createSocketURL.js */ \"./node_modules/webpack-dev-server/client/utils/createSocketURL.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n\n  if (Object.getOwnPropertySymbols) {\n    var symbols = Object.getOwnPropertySymbols(object);\n    enumerableOnly && (symbols = symbols.filter(function (sym) {\n      return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n    })), keys.push.apply(keys, symbols);\n  }\n\n  return keys;\n}\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = null != arguments[i] ? arguments[i] : {};\n    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {\n      _defineProperty(target, key, source[key]);\n    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {\n      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n    });\n  }\n\n  return target;\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n/* global __resourceQuery, __webpack_hash__ */\n/// <reference types=\"webpack/module\" />\n\n\n\n\n\n\n\n\n\n\n\n/**\n * @typedef {Object} Options\n * @property {boolean} hot\n * @property {boolean} liveReload\n * @property {boolean} progress\n * @property {boolean | { warnings?: boolean, errors?: boolean, trustedTypesPolicyName?: string }} overlay\n * @property {string} [logging]\n * @property {number} [reconnect]\n */\n\n/**\n * @typedef {Object} Status\n * @property {boolean} isUnloading\n * @property {string} currentHash\n * @property {string} [previousHash]\n */\n\n/**\n * @type {Status}\n */\n\nvar status = {\n  isUnloading: false,\n  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement\n  // eslint-disable-next-line camelcase\n  currentHash:  true ? __webpack_require__.h() : 0\n};\n/** @type {Options} */\n\nvar options = {\n  hot: false,\n  liveReload: false,\n  progress: false,\n  overlay: false\n};\nvar parsedResourceQuery = (0,_utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(__resourceQuery);\nvar enabledFeatures = {\n  \"Hot Module Replacement\": false,\n  \"Live Reloading\": false,\n  Progress: false,\n  Overlay: false\n};\n\nif (parsedResourceQuery.hot === \"true\") {\n  options.hot = true;\n  enabledFeatures[\"Hot Module Replacement\"] = true;\n}\n\nif (parsedResourceQuery[\"live-reload\"] === \"true\") {\n  options.liveReload = true;\n  enabledFeatures[\"Live Reloading\"] = true;\n}\n\nif (parsedResourceQuery.progress === \"true\") {\n  options.progress = true;\n  enabledFeatures.Progress = true;\n}\n\nif (parsedResourceQuery.overlay) {\n  try {\n    options.overlay = JSON.parse(parsedResourceQuery.overlay);\n  } catch (e) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(\"Error parsing overlay options from resource query:\", e);\n  } // Fill in default \"true\" params for partially-specified objects.\n\n\n  if (_typeof(options.overlay) === \"object\") {\n    options.overlay = _objectSpread({\n      errors: true,\n      warnings: true\n    }, options.overlay);\n  }\n\n  enabledFeatures.Overlay = true;\n}\n\nif (parsedResourceQuery.logging) {\n  options.logging = parsedResourceQuery.logging;\n}\n\nif (typeof parsedResourceQuery.reconnect !== \"undefined\") {\n  options.reconnect = Number(parsedResourceQuery.reconnect);\n}\n\n(0,_utils_log_js__WEBPACK_IMPORTED_MODULE_5__.logEnabledFeatures)(enabledFeatures);\n/**\n * @param {string} level\n */\n\nfunction setAllLogLevel(level) {\n  // This is needed because the HMR logger operate separately from dev server logger\n  webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default().setLogLevel(level === \"verbose\" || level === \"log\" ? \"info\" : level);\n  (0,_utils_log_js__WEBPACK_IMPORTED_MODULE_5__.setLogLevel)(level);\n}\n\nif (options.logging) {\n  setAllLogLevel(options.logging);\n}\n\nself.addEventListener(\"beforeunload\", function () {\n  status.isUnloading = true;\n});\nvar onSocketMessage = {\n  hot: function hot() {\n    if (parsedResourceQuery.hot === \"false\") {\n      return;\n    }\n\n    options.hot = true;\n  },\n  liveReload: function liveReload() {\n    if (parsedResourceQuery[\"live-reload\"] === \"false\") {\n      return;\n    }\n\n    options.liveReload = true;\n  },\n  invalid: function invalid() {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(\"App updated. Recompiling...\"); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\n\n    if (options.overlay) {\n      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();\n    }\n\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"Invalid\");\n  },\n\n  /**\n   * @param {string} hash\n   */\n  hash: function hash(_hash) {\n    status.previousHash = status.currentHash;\n    status.currentHash = _hash;\n  },\n  logging: setAllLogLevel,\n\n  /**\n   * @param {boolean} value\n   */\n  overlay: function overlay(value) {\n    if (typeof document === \"undefined\") {\n      return;\n    }\n\n    options.overlay = value;\n  },\n\n  /**\n   * @param {number} value\n   */\n  reconnect: function reconnect(value) {\n    if (parsedResourceQuery.reconnect === \"false\") {\n      return;\n    }\n\n    options.reconnect = value;\n  },\n\n  /**\n   * @param {boolean} value\n   */\n  progress: function progress(value) {\n    options.progress = value;\n  },\n\n  /**\n   * @param {{ pluginName?: string, percent: number, msg: string }} data\n   */\n  \"progress-update\": function progressUpdate(data) {\n    if (options.progress) {\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(\"\".concat(data.pluginName ? \"[\".concat(data.pluginName, \"] \") : \"\").concat(data.percent, \"% - \").concat(data.msg, \".\"));\n    }\n\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"Progress\", data);\n  },\n  \"still-ok\": function stillOk() {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(\"Nothing changed.\");\n\n    if (options.overlay) {\n      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();\n    }\n\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"StillOk\");\n  },\n  ok: function ok() {\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"Ok\");\n\n    if (options.overlay) {\n      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();\n    }\n\n    (0,_utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(options, status);\n  },\n  // TODO: remove in v5 in favor of 'static-changed'\n\n  /**\n   * @param {string} file\n   */\n  \"content-changed\": function contentChanged(file) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(\"\".concat(file ? \"\\\"\".concat(file, \"\\\"\") : \"Content\", \" from static directory was changed. Reloading...\"));\n    self.location.reload();\n  },\n\n  /**\n   * @param {string} file\n   */\n  \"static-changed\": function staticChanged(file) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(\"\".concat(file ? \"\\\"\".concat(file, \"\\\"\") : \"Content\", \" from static directory was changed. Reloading...\"));\n    self.location.reload();\n  },\n\n  /**\n   * @param {Error[]} warnings\n   * @param {any} params\n   */\n  warnings: function warnings(_warnings, params) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn(\"Warnings while compiling.\");\n\n    var printableWarnings = _warnings.map(function (error) {\n      var _formatProblem = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)(\"warning\", error),\n          header = _formatProblem.header,\n          body = _formatProblem.body;\n\n      return \"\".concat(header, \"\\n\").concat((0,_utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(body));\n    });\n\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"Warnings\", printableWarnings);\n\n    for (var i = 0; i < printableWarnings.length; i++) {\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn(printableWarnings[i]);\n    }\n\n    var needShowOverlayForWarnings = typeof options.overlay === \"boolean\" ? options.overlay : options.overlay && options.overlay.warnings;\n\n    if (needShowOverlayForWarnings) {\n      var trustedTypesPolicyName = _typeof(options.overlay) === \"object\" && options.overlay.trustedTypesPolicyName;\n      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.show)(\"warning\", _warnings, trustedTypesPolicyName || null);\n    }\n\n    if (params && params.preventReloading) {\n      return;\n    }\n\n    (0,_utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(options, status);\n  },\n\n  /**\n   * @param {Error[]} errors\n   */\n  errors: function errors(_errors) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(\"Errors while compiling. Reload prevented.\");\n\n    var printableErrors = _errors.map(function (error) {\n      var _formatProblem2 = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)(\"error\", error),\n          header = _formatProblem2.header,\n          body = _formatProblem2.body;\n\n      return \"\".concat(header, \"\\n\").concat((0,_utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(body));\n    });\n\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"Errors\", printableErrors);\n\n    for (var i = 0; i < printableErrors.length; i++) {\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(printableErrors[i]);\n    }\n\n    var needShowOverlayForErrors = typeof options.overlay === \"boolean\" ? options.overlay : options.overlay && options.overlay.errors;\n\n    if (needShowOverlayForErrors) {\n      var trustedTypesPolicyName = _typeof(options.overlay) === \"object\" && options.overlay.trustedTypesPolicyName;\n      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.show)(\"error\", _errors, trustedTypesPolicyName || null);\n    }\n  },\n\n  /**\n   * @param {Error} error\n   */\n  error: function error(_error) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(_error);\n  },\n  close: function close() {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info(\"Disconnected!\");\n\n    if (options.overlay) {\n      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();\n    }\n\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"Close\");\n  }\n};\nvar socketURL = (0,_utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(parsedResourceQuery);\n(0,_socket_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(socketURL, onSocketMessage, options.reconnect);\n\n//# sourceURL=webpack://dashboard/./node_modules/webpack-dev-server/client/index.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/modules/logger/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/modules/logger/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n/******/\n(function () {\n  // webpackBootstrap\n\n  /******/\n  \"use strict\";\n  /******/\n\n  var __webpack_modules__ = {\n    /***/\n    \"./client-src/modules/logger/SyncBailHookFake.js\":\n    /*!*******************************************************!*\\\n      !*** ./client-src/modules/logger/SyncBailHookFake.js ***!\n      \\*******************************************************/\n\n    /***/\n    function clientSrcModulesLoggerSyncBailHookFakeJs(module) {\n      /**\n       * Client stub for tapable SyncBailHook\n       */\n      module.exports = function clientTapableSyncBailHook() {\n        return {\n          call: function call() {}\n        };\n      };\n      /***/\n\n    },\n\n    /***/\n    \"./node_modules/webpack/lib/logging/Logger.js\":\n    /*!****************************************************!*\\\n      !*** ./node_modules/webpack/lib/logging/Logger.js ***!\n      \\****************************************************/\n\n    /***/\n    function node_modulesWebpackLibLoggingLoggerJs(__unused_webpack_module, exports) {\n      /*\n      \tMIT License http://www.opensource.org/licenses/mit-license.php\n      \tAuthor Tobias Koppers @sokra\n      */\n      function _toConsumableArray(arr) {\n        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n      }\n\n      function _nonIterableSpread() {\n        throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n      }\n\n      function _unsupportedIterableToArray(o, minLen) {\n        if (!o) return;\n        if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n        var n = Object.prototype.toString.call(o).slice(8, -1);\n        if (n === \"Object\" && o.constructor) n = o.constructor.name;\n        if (n === \"Map\" || n === \"Set\") return Array.from(o);\n        if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n      }\n\n      function _iterableToArray(iter) {\n        if (typeof (typeof Symbol !== \"undefined\" ? Symbol : function (i) {\n          return i;\n        }) !== \"undefined\" && iter[(typeof Symbol !== \"undefined\" ? Symbol : function (i) {\n          return i;\n        }).iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n      }\n\n      function _arrayWithoutHoles(arr) {\n        if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n      }\n\n      function _arrayLikeToArray(arr, len) {\n        if (len == null || len > arr.length) len = arr.length;\n\n        for (var i = 0, arr2 = new Array(len); i < len; i++) {\n          arr2[i] = arr[i];\n        }\n\n        return arr2;\n      }\n\n      function _classCallCheck(instance, Constructor) {\n        if (!(instance instanceof Constructor)) {\n          throw new TypeError(\"Cannot call a class as a function\");\n        }\n      }\n\n      function _defineProperties(target, props) {\n        for (var i = 0; i < props.length; i++) {\n          var descriptor = props[i];\n          descriptor.enumerable = descriptor.enumerable || false;\n          descriptor.configurable = true;\n          if (\"value\" in descriptor) descriptor.writable = true;\n          Object.defineProperty(target, descriptor.key, descriptor);\n        }\n      }\n\n      function _createClass(Constructor, protoProps, staticProps) {\n        if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n        if (staticProps) _defineProperties(Constructor, staticProps);\n        Object.defineProperty(Constructor, \"prototype\", {\n          writable: false\n        });\n        return Constructor;\n      }\n\n      var LogType = Object.freeze({\n        error:\n        /** @type {\"error\"} */\n        \"error\",\n        // message, c style arguments\n        warn:\n        /** @type {\"warn\"} */\n        \"warn\",\n        // message, c style arguments\n        info:\n        /** @type {\"info\"} */\n        \"info\",\n        // message, c style arguments\n        log:\n        /** @type {\"log\"} */\n        \"log\",\n        // message, c style arguments\n        debug:\n        /** @type {\"debug\"} */\n        \"debug\",\n        // message, c style arguments\n        trace:\n        /** @type {\"trace\"} */\n        \"trace\",\n        // no arguments\n        group:\n        /** @type {\"group\"} */\n        \"group\",\n        // [label]\n        groupCollapsed:\n        /** @type {\"groupCollapsed\"} */\n        \"groupCollapsed\",\n        // [label]\n        groupEnd:\n        /** @type {\"groupEnd\"} */\n        \"groupEnd\",\n        // [label]\n        profile:\n        /** @type {\"profile\"} */\n        \"profile\",\n        // [profileName]\n        profileEnd:\n        /** @type {\"profileEnd\"} */\n        \"profileEnd\",\n        // [profileName]\n        time:\n        /** @type {\"time\"} */\n        \"time\",\n        // name, time as [seconds, nanoseconds]\n        clear:\n        /** @type {\"clear\"} */\n        \"clear\",\n        // no arguments\n        status:\n        /** @type {\"status\"} */\n        \"status\" // message, arguments\n\n      });\n      exports.LogType = LogType;\n      /** @typedef {typeof LogType[keyof typeof LogType]} LogTypeEnum */\n\n      var LOG_SYMBOL = (typeof Symbol !== \"undefined\" ? Symbol : function (i) {\n        return i;\n      })(\"webpack logger raw log method\");\n      var TIMERS_SYMBOL = (typeof Symbol !== \"undefined\" ? Symbol : function (i) {\n        return i;\n      })(\"webpack logger times\");\n      var TIMERS_AGGREGATES_SYMBOL = (typeof Symbol !== \"undefined\" ? Symbol : function (i) {\n        return i;\n      })(\"webpack logger aggregated times\");\n\n      var WebpackLogger = /*#__PURE__*/function () {\n        /**\n         * @param {function(LogTypeEnum, any[]=): void} log log function\n         * @param {function(string | function(): string): WebpackLogger} getChildLogger function to create child logger\n         */\n        function WebpackLogger(log, getChildLogger) {\n          _classCallCheck(this, WebpackLogger);\n\n          this[LOG_SYMBOL] = log;\n          this.getChildLogger = getChildLogger;\n        }\n\n        _createClass(WebpackLogger, [{\n          key: \"error\",\n          value: function error() {\n            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n              args[_key] = arguments[_key];\n            }\n\n            this[LOG_SYMBOL](LogType.error, args);\n          }\n        }, {\n          key: \"warn\",\n          value: function warn() {\n            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n              args[_key2] = arguments[_key2];\n            }\n\n            this[LOG_SYMBOL](LogType.warn, args);\n          }\n        }, {\n          key: \"info\",\n          value: function info() {\n            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n              args[_key3] = arguments[_key3];\n            }\n\n            this[LOG_SYMBOL](LogType.info, args);\n          }\n        }, {\n          key: \"log\",\n          value: function log() {\n            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {\n              args[_key4] = arguments[_key4];\n            }\n\n            this[LOG_SYMBOL](LogType.log, args);\n          }\n        }, {\n          key: \"debug\",\n          value: function debug() {\n            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {\n              args[_key5] = arguments[_key5];\n            }\n\n            this[LOG_SYMBOL](LogType.debug, args);\n          }\n        }, {\n          key: \"assert\",\n          value: function assert(assertion) {\n            if (!assertion) {\n              for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {\n                args[_key6 - 1] = arguments[_key6];\n              }\n\n              this[LOG_SYMBOL](LogType.error, args);\n            }\n          }\n        }, {\n          key: \"trace\",\n          value: function trace() {\n            this[LOG_SYMBOL](LogType.trace, [\"Trace\"]);\n          }\n        }, {\n          key: \"clear\",\n          value: function clear() {\n            this[LOG_SYMBOL](LogType.clear);\n          }\n        }, {\n          key: \"status\",\n          value: function status() {\n            for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {\n              args[_key7] = arguments[_key7];\n            }\n\n            this[LOG_SYMBOL](LogType.status, args);\n          }\n        }, {\n          key: \"group\",\n          value: function group() {\n            for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {\n              args[_key8] = arguments[_key8];\n            }\n\n            this[LOG_SYMBOL](LogType.group, args);\n          }\n        }, {\n          key: \"groupCollapsed\",\n          value: function groupCollapsed() {\n            for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {\n              args[_key9] = arguments[_key9];\n            }\n\n            this[LOG_SYMBOL](LogType.groupCollapsed, args);\n          }\n        }, {\n          key: \"groupEnd\",\n          value: function groupEnd() {\n            for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {\n              args[_key10] = arguments[_key10];\n            }\n\n            this[LOG_SYMBOL](LogType.groupEnd, args);\n          }\n        }, {\n          key: \"profile\",\n          value: function profile(label) {\n            this[LOG_SYMBOL](LogType.profile, [label]);\n          }\n        }, {\n          key: \"profileEnd\",\n          value: function profileEnd(label) {\n            this[LOG_SYMBOL](LogType.profileEnd, [label]);\n          }\n        }, {\n          key: \"time\",\n          value: function time(label) {\n            this[TIMERS_SYMBOL] = this[TIMERS_SYMBOL] || new Map();\n            this[TIMERS_SYMBOL].set(label, process.hrtime());\n          }\n        }, {\n          key: \"timeLog\",\n          value: function timeLog(label) {\n            var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);\n\n            if (!prev) {\n              throw new Error(\"No such label '\".concat(label, \"' for WebpackLogger.timeLog()\"));\n            }\n\n            var time = process.hrtime(prev);\n            this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));\n          }\n        }, {\n          key: \"timeEnd\",\n          value: function timeEnd(label) {\n            var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);\n\n            if (!prev) {\n              throw new Error(\"No such label '\".concat(label, \"' for WebpackLogger.timeEnd()\"));\n            }\n\n            var time = process.hrtime(prev);\n            this[TIMERS_SYMBOL][\"delete\"](label);\n            this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));\n          }\n        }, {\n          key: \"timeAggregate\",\n          value: function timeAggregate(label) {\n            var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);\n\n            if (!prev) {\n              throw new Error(\"No such label '\".concat(label, \"' for WebpackLogger.timeAggregate()\"));\n            }\n\n            var time = process.hrtime(prev);\n            this[TIMERS_SYMBOL][\"delete\"](label);\n            this[TIMERS_AGGREGATES_SYMBOL] = this[TIMERS_AGGREGATES_SYMBOL] || new Map();\n            var current = this[TIMERS_AGGREGATES_SYMBOL].get(label);\n\n            if (current !== undefined) {\n              if (time[1] + current[1] > 1e9) {\n                time[0] += current[0] + 1;\n                time[1] = time[1] - 1e9 + current[1];\n              } else {\n                time[0] += current[0];\n                time[1] += current[1];\n              }\n            }\n\n            this[TIMERS_AGGREGATES_SYMBOL].set(label, time);\n          }\n        }, {\n          key: \"timeAggregateEnd\",\n          value: function timeAggregateEnd(label) {\n            if (this[TIMERS_AGGREGATES_SYMBOL] === undefined) return;\n            var time = this[TIMERS_AGGREGATES_SYMBOL].get(label);\n            if (time === undefined) return;\n            this[TIMERS_AGGREGATES_SYMBOL][\"delete\"](label);\n            this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));\n          }\n        }]);\n\n        return WebpackLogger;\n      }();\n\n      exports.Logger = WebpackLogger;\n      /***/\n    },\n\n    /***/\n    \"./node_modules/webpack/lib/logging/createConsoleLogger.js\":\n    /*!*****************************************************************!*\\\n      !*** ./node_modules/webpack/lib/logging/createConsoleLogger.js ***!\n      \\*****************************************************************/\n\n    /***/\n    function node_modulesWebpackLibLoggingCreateConsoleLoggerJs(module, __unused_webpack_exports, __nested_webpack_require_13226__) {\n      /*\n      \tMIT License http://www.opensource.org/licenses/mit-license.php\n      \tAuthor Tobias Koppers @sokra\n      */\n      function _toConsumableArray(arr) {\n        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n      }\n\n      function _nonIterableSpread() {\n        throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n      }\n\n      function _unsupportedIterableToArray(o, minLen) {\n        if (!o) return;\n        if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n        var n = Object.prototype.toString.call(o).slice(8, -1);\n        if (n === \"Object\" && o.constructor) n = o.constructor.name;\n        if (n === \"Map\" || n === \"Set\") return Array.from(o);\n        if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n      }\n\n      function _iterableToArray(iter) {\n        if (typeof (typeof Symbol !== \"undefined\" ? Symbol : function (i) {\n          return i;\n        }) !== \"undefined\" && iter[(typeof Symbol !== \"undefined\" ? Symbol : function (i) {\n          return i;\n        }).iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n      }\n\n      function _arrayWithoutHoles(arr) {\n        if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n      }\n\n      function _arrayLikeToArray(arr, len) {\n        if (len == null || len > arr.length) len = arr.length;\n\n        for (var i = 0, arr2 = new Array(len); i < len; i++) {\n          arr2[i] = arr[i];\n        }\n\n        return arr2;\n      }\n\n      var _require = __nested_webpack_require_13226__(\n      /*! ./Logger */\n      \"./node_modules/webpack/lib/logging/Logger.js\"),\n          LogType = _require.LogType;\n      /** @typedef {import(\"../../declarations/WebpackOptions\").FilterItemTypes} FilterItemTypes */\n\n      /** @typedef {import(\"../../declarations/WebpackOptions\").FilterTypes} FilterTypes */\n\n      /** @typedef {import(\"./Logger\").LogTypeEnum} LogTypeEnum */\n\n      /** @typedef {function(string): boolean} FilterFunction */\n\n      /**\n       * @typedef {Object} LoggerConsole\n       * @property {function(): void} clear\n       * @property {function(): void} trace\n       * @property {(...args: any[]) => void} info\n       * @property {(...args: any[]) => void} log\n       * @property {(...args: any[]) => void} warn\n       * @property {(...args: any[]) => void} error\n       * @property {(...args: any[]) => void=} debug\n       * @property {(...args: any[]) => void=} group\n       * @property {(...args: any[]) => void=} groupCollapsed\n       * @property {(...args: any[]) => void=} groupEnd\n       * @property {(...args: any[]) => void=} status\n       * @property {(...args: any[]) => void=} profile\n       * @property {(...args: any[]) => void=} profileEnd\n       * @property {(...args: any[]) => void=} logTime\n       */\n\n      /**\n       * @typedef {Object} LoggerOptions\n       * @property {false|true|\"none\"|\"error\"|\"warn\"|\"info\"|\"log\"|\"verbose\"} level loglevel\n       * @property {FilterTypes|boolean} debug filter for debug logging\n       * @property {LoggerConsole} console the console to log to\n       */\n\n      /**\n       * @param {FilterItemTypes} item an input item\n       * @returns {FilterFunction} filter function\n       */\n\n\n      var filterToFunction = function filterToFunction(item) {\n        if (typeof item === \"string\") {\n          var regExp = new RegExp(\"[\\\\\\\\/]\".concat(item.replace( // eslint-disable-next-line no-useless-escape\n          /[-[\\]{}()*+?.\\\\^$|]/g, \"\\\\$&\"), \"([\\\\\\\\/]|$|!|\\\\?)\"));\n          return function (ident) {\n            return regExp.test(ident);\n          };\n        }\n\n        if (item && _typeof(item) === \"object\" && typeof item.test === \"function\") {\n          return function (ident) {\n            return item.test(ident);\n          };\n        }\n\n        if (typeof item === \"function\") {\n          return item;\n        }\n\n        if (typeof item === \"boolean\") {\n          return function () {\n            return item;\n          };\n        }\n      };\n      /**\n       * @enum {number}\n       */\n\n\n      var LogLevel = {\n        none: 6,\n        \"false\": 6,\n        error: 5,\n        warn: 4,\n        info: 3,\n        log: 2,\n        \"true\": 2,\n        verbose: 1\n      };\n      /**\n       * @param {LoggerOptions} options options object\n       * @returns {function(string, LogTypeEnum, any[]): void} logging function\n       */\n\n      module.exports = function (_ref) {\n        var _ref$level = _ref.level,\n            level = _ref$level === void 0 ? \"info\" : _ref$level,\n            _ref$debug = _ref.debug,\n            debug = _ref$debug === void 0 ? false : _ref$debug,\n            console = _ref.console;\n        var debugFilters = typeof debug === \"boolean\" ? [function () {\n          return debug;\n        }] :\n        /** @type {FilterItemTypes[]} */\n        [].concat(debug).map(filterToFunction);\n        /** @type {number} */\n\n        var loglevel = LogLevel[\"\".concat(level)] || 0;\n        /**\n         * @param {string} name name of the logger\n         * @param {LogTypeEnum} type type of the log entry\n         * @param {any[]} args arguments of the log entry\n         * @returns {void}\n         */\n\n        var logger = function logger(name, type, args) {\n          var labeledArgs = function labeledArgs() {\n            if (Array.isArray(args)) {\n              if (args.length > 0 && typeof args[0] === \"string\") {\n                return [\"[\".concat(name, \"] \").concat(args[0])].concat(_toConsumableArray(args.slice(1)));\n              } else {\n                return [\"[\".concat(name, \"]\")].concat(_toConsumableArray(args));\n              }\n            } else {\n              return [];\n            }\n          };\n\n          var debug = debugFilters.some(function (f) {\n            return f(name);\n          });\n\n          switch (type) {\n            case LogType.debug:\n              if (!debug) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins\n\n              if (typeof console.debug === \"function\") {\n                // eslint-disable-next-line node/no-unsupported-features/node-builtins\n                console.debug.apply(console, _toConsumableArray(labeledArgs()));\n              } else {\n                console.log.apply(console, _toConsumableArray(labeledArgs()));\n              }\n\n              break;\n\n            case LogType.log:\n              if (!debug && loglevel > LogLevel.log) return;\n              console.log.apply(console, _toConsumableArray(labeledArgs()));\n              break;\n\n            case LogType.info:\n              if (!debug && loglevel > LogLevel.info) return;\n              console.info.apply(console, _toConsumableArray(labeledArgs()));\n              break;\n\n            case LogType.warn:\n              if (!debug && loglevel > LogLevel.warn) return;\n              console.warn.apply(console, _toConsumableArray(labeledArgs()));\n              break;\n\n            case LogType.error:\n              if (!debug && loglevel > LogLevel.error) return;\n              console.error.apply(console, _toConsumableArray(labeledArgs()));\n              break;\n\n            case LogType.trace:\n              if (!debug) return;\n              console.trace();\n              break;\n\n            case LogType.groupCollapsed:\n              if (!debug && loglevel > LogLevel.log) return;\n\n              if (!debug && loglevel > LogLevel.verbose) {\n                // eslint-disable-next-line node/no-unsupported-features/node-builtins\n                if (typeof console.groupCollapsed === \"function\") {\n                  // eslint-disable-next-line node/no-unsupported-features/node-builtins\n                  console.groupCollapsed.apply(console, _toConsumableArray(labeledArgs()));\n                } else {\n                  console.log.apply(console, _toConsumableArray(labeledArgs()));\n                }\n\n                break;\n              }\n\n            // falls through\n\n            case LogType.group:\n              if (!debug && loglevel > LogLevel.log) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins\n\n              if (typeof console.group === \"function\") {\n                // eslint-disable-next-line node/no-unsupported-features/node-builtins\n                console.group.apply(console, _toConsumableArray(labeledArgs()));\n              } else {\n                console.log.apply(console, _toConsumableArray(labeledArgs()));\n              }\n\n              break;\n\n            case LogType.groupEnd:\n              if (!debug && loglevel > LogLevel.log) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins\n\n              if (typeof console.groupEnd === \"function\") {\n                // eslint-disable-next-line node/no-unsupported-features/node-builtins\n                console.groupEnd();\n              }\n\n              break;\n\n            case LogType.time:\n              {\n                if (!debug && loglevel > LogLevel.log) return;\n                var ms = args[1] * 1000 + args[2] / 1000000;\n                var msg = \"[\".concat(name, \"] \").concat(args[0], \": \").concat(ms, \" ms\");\n\n                if (typeof console.logTime === \"function\") {\n                  console.logTime(msg);\n                } else {\n                  console.log(msg);\n                }\n\n                break;\n              }\n\n            case LogType.profile:\n              // eslint-disable-next-line node/no-unsupported-features/node-builtins\n              if (typeof console.profile === \"function\") {\n                // eslint-disable-next-line node/no-unsupported-features/node-builtins\n                console.profile.apply(console, _toConsumableArray(labeledArgs()));\n              }\n\n              break;\n\n            case LogType.profileEnd:\n              // eslint-disable-next-line node/no-unsupported-features/node-builtins\n              if (typeof console.profileEnd === \"function\") {\n                // eslint-disable-next-line node/no-unsupported-features/node-builtins\n                console.profileEnd.apply(console, _toConsumableArray(labeledArgs()));\n              }\n\n              break;\n\n            case LogType.clear:\n              if (!debug && loglevel > LogLevel.log) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins\n\n              if (typeof console.clear === \"function\") {\n                // eslint-disable-next-line node/no-unsupported-features/node-builtins\n                console.clear();\n              }\n\n              break;\n\n            case LogType.status:\n              if (!debug && loglevel > LogLevel.info) return;\n\n              if (typeof console.status === \"function\") {\n                if (args.length === 0) {\n                  console.status();\n                } else {\n                  console.status.apply(console, _toConsumableArray(labeledArgs()));\n                }\n              } else {\n                if (args.length !== 0) {\n                  console.info.apply(console, _toConsumableArray(labeledArgs()));\n                }\n              }\n\n              break;\n\n            default:\n              throw new Error(\"Unexpected LogType \".concat(type));\n          }\n        };\n\n        return logger;\n      };\n      /***/\n\n    },\n\n    /***/\n    \"./node_modules/webpack/lib/logging/runtime.js\":\n    /*!*****************************************************!*\\\n      !*** ./node_modules/webpack/lib/logging/runtime.js ***!\n      \\*****************************************************/\n\n    /***/\n    function node_modulesWebpackLibLoggingRuntimeJs(__unused_webpack_module, exports, __nested_webpack_require_24935__) {\n      /*\n      \tMIT License http://www.opensource.org/licenses/mit-license.php\n      \tAuthor Tobias Koppers @sokra\n      */\n      function _extends() {\n        _extends = Object.assign ? Object.assign.bind() : function (target) {\n          for (var i = 1; i < arguments.length; i++) {\n            var source = arguments[i];\n\n            for (var key in source) {\n              if (Object.prototype.hasOwnProperty.call(source, key)) {\n                target[key] = source[key];\n              }\n            }\n          }\n\n          return target;\n        };\n        return _extends.apply(this, arguments);\n      }\n\n      var SyncBailHook = __nested_webpack_require_24935__(\n      /*! tapable/lib/SyncBailHook */\n      \"./client-src/modules/logger/SyncBailHookFake.js\");\n\n      var _require = __nested_webpack_require_24935__(\n      /*! ./Logger */\n      \"./node_modules/webpack/lib/logging/Logger.js\"),\n          Logger = _require.Logger;\n\n      var createConsoleLogger = __nested_webpack_require_24935__(\n      /*! ./createConsoleLogger */\n      \"./node_modules/webpack/lib/logging/createConsoleLogger.js\");\n      /** @type {createConsoleLogger.LoggerOptions} */\n\n\n      var currentDefaultLoggerOptions = {\n        level: \"info\",\n        debug: false,\n        console: console\n      };\n      var currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);\n      /**\n       * @param {string} name name of the logger\n       * @returns {Logger} a logger\n       */\n\n      exports.getLogger = function (name) {\n        return new Logger(function (type, args) {\n          if (exports.hooks.log.call(name, type, args) === undefined) {\n            currentDefaultLogger(name, type, args);\n          }\n        }, function (childName) {\n          return exports.getLogger(\"\".concat(name, \"/\").concat(childName));\n        });\n      };\n      /**\n       * @param {createConsoleLogger.LoggerOptions} options new options, merge with old options\n       * @returns {void}\n       */\n\n\n      exports.configureDefaultLogger = function (options) {\n        _extends(currentDefaultLoggerOptions, options);\n\n        currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);\n      };\n\n      exports.hooks = {\n        log: new SyncBailHook([\"origin\", \"type\", \"args\"])\n      };\n      /***/\n    }\n    /******/\n\n  };\n  /************************************************************************/\n\n  /******/\n  // The module cache\n\n  /******/\n\n  var __webpack_module_cache__ = {};\n  /******/\n\n  /******/\n  // The require function\n\n  /******/\n\n  function __nested_webpack_require_27458__(moduleId) {\n    /******/\n    // Check if module is in cache\n\n    /******/\n    var cachedModule = __webpack_module_cache__[moduleId];\n    /******/\n\n    if (cachedModule !== undefined) {\n      /******/\n      return cachedModule.exports;\n      /******/\n    }\n    /******/\n    // Create a new module (and put it into the cache)\n\n    /******/\n\n\n    var module = __webpack_module_cache__[moduleId] = {\n      /******/\n      // no module.id needed\n\n      /******/\n      // no module.loaded needed\n\n      /******/\n      exports: {}\n      /******/\n\n    };\n    /******/\n\n    /******/\n    // Execute the module function\n\n    /******/\n\n    __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_27458__);\n    /******/\n\n    /******/\n    // Return the exports of the module\n\n    /******/\n\n\n    return module.exports;\n    /******/\n  }\n  /******/\n\n  /************************************************************************/\n\n  /******/\n\n  /* webpack/runtime/define property getters */\n\n  /******/\n\n\n  !function () {\n    /******/\n    // define getter functions for harmony exports\n\n    /******/\n    __nested_webpack_require_27458__.d = function (exports, definition) {\n      /******/\n      for (var key in definition) {\n        /******/\n        if (__nested_webpack_require_27458__.o(definition, key) && !__nested_webpack_require_27458__.o(exports, key)) {\n          /******/\n          Object.defineProperty(exports, key, {\n            enumerable: true,\n            get: definition[key]\n          });\n          /******/\n        }\n        /******/\n\n      }\n      /******/\n\n    };\n    /******/\n\n  }();\n  /******/\n\n  /******/\n\n  /* webpack/runtime/hasOwnProperty shorthand */\n\n  /******/\n\n  !function () {\n    /******/\n    __nested_webpack_require_27458__.o = function (obj, prop) {\n      return Object.prototype.hasOwnProperty.call(obj, prop);\n    };\n    /******/\n\n  }();\n  /******/\n\n  /******/\n\n  /* webpack/runtime/make namespace object */\n\n  /******/\n\n  !function () {\n    /******/\n    // define __esModule on exports\n\n    /******/\n    __nested_webpack_require_27458__.r = function (exports) {\n      /******/\n      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n        /******/\n        Object.defineProperty(exports, Symbol.toStringTag, {\n          value: 'Module'\n        });\n        /******/\n      }\n      /******/\n\n\n      Object.defineProperty(exports, '__esModule', {\n        value: true\n      });\n      /******/\n    };\n    /******/\n\n  }();\n  /******/\n\n  /************************************************************************/\n\n  var __webpack_exports__ = {}; // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.\n\n  !function () {\n    /*!********************************************!*\\\n      !*** ./client-src/modules/logger/index.js ***!\n      \\********************************************/\n    __nested_webpack_require_27458__.r(__webpack_exports__);\n    /* harmony export */\n\n\n    __nested_webpack_require_27458__.d(__webpack_exports__, {\n      /* harmony export */\n      \"default\": function _default() {\n        return (\n          /* reexport default export from named module */\n          webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__\n        );\n      }\n      /* harmony export */\n\n    });\n    /* harmony import */\n\n\n    var webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_27458__(\n    /*! webpack/lib/logging/runtime.js */\n    \"./node_modules/webpack/lib/logging/runtime.js\");\n  }();\n  var __webpack_export_target__ = exports;\n\n  for (var i in __webpack_exports__) {\n    __webpack_export_target__[i] = __webpack_exports__[i];\n  }\n\n  if (__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, \"__esModule\", {\n    value: true\n  });\n  /******/\n})();\n\n//# sourceURL=webpack://dashboard/./node_modules/webpack-dev-server/client/modules/logger/index.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay.js":
/*!***********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatProblem\": () => (/* binding */ formatProblem),\n/* harmony export */   \"hide\": () => (/* binding */ hide),\n/* harmony export */   \"show\": () => (/* binding */ show)\n/* harmony export */ });\n/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ansi-html-community */ \"./node_modules/ansi-html-community/index.js\");\n/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ansi_html_community__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-entities */ \"./node_modules/html-entities/lib/index.js\");\n/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_entities__WEBPACK_IMPORTED_MODULE_1__);\n// The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)\n// They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).\n\n\nvar colors = {\n  reset: [\"transparent\", \"transparent\"],\n  black: \"181818\",\n  red: \"E36049\",\n  green: \"B3CB74\",\n  yellow: \"FFD080\",\n  blue: \"7CAFC2\",\n  magenta: \"7FACCA\",\n  cyan: \"C3C2EF\",\n  lightgrey: \"EBE7E3\",\n  darkgrey: \"6D7891\"\n};\n/** @type {HTMLIFrameElement | null | undefined} */\n\nvar iframeContainerElement;\n/** @type {HTMLDivElement | null | undefined} */\n\nvar containerElement;\n/** @type {Array<(element: HTMLDivElement) => void>} */\n\nvar onLoadQueue = [];\n/** @type {TrustedTypePolicy | undefined} */\n\nvar overlayTrustedTypesPolicy;\nansi_html_community__WEBPACK_IMPORTED_MODULE_0___default().setColors(colors);\n/**\n * @param {string | null} trustedTypesPolicyName\n */\n\nfunction createContainer(trustedTypesPolicyName) {\n  // Enable Trusted Types if they are available in the current browser.\n  if (window.trustedTypes) {\n    overlayTrustedTypesPolicy = window.trustedTypes.createPolicy(trustedTypesPolicyName || \"webpack-dev-server#overlay\", {\n      createHTML: function createHTML(value) {\n        return value;\n      }\n    });\n  }\n\n  iframeContainerElement = document.createElement(\"iframe\");\n  iframeContainerElement.id = \"webpack-dev-server-client-overlay\";\n  iframeContainerElement.src = \"about:blank\";\n  iframeContainerElement.style.position = \"fixed\";\n  iframeContainerElement.style.left = 0;\n  iframeContainerElement.style.top = 0;\n  iframeContainerElement.style.right = 0;\n  iframeContainerElement.style.bottom = 0;\n  iframeContainerElement.style.width = \"100vw\";\n  iframeContainerElement.style.height = \"100vh\";\n  iframeContainerElement.style.border = \"none\";\n  iframeContainerElement.style.zIndex = 9999999999;\n\n  iframeContainerElement.onload = function () {\n    containerElement =\n    /** @type {Document} */\n\n    /** @type {HTMLIFrameElement} */\n    iframeContainerElement.contentDocument.createElement(\"div\");\n    containerElement.id = \"webpack-dev-server-client-overlay-div\";\n    containerElement.style.position = \"fixed\";\n    containerElement.style.boxSizing = \"border-box\";\n    containerElement.style.left = 0;\n    containerElement.style.top = 0;\n    containerElement.style.right = 0;\n    containerElement.style.bottom = 0;\n    containerElement.style.width = \"100vw\";\n    containerElement.style.height = \"100vh\";\n    containerElement.style.backgroundColor = \"rgba(0, 0, 0, 0.85)\";\n    containerElement.style.color = \"#E8E8E8\";\n    containerElement.style.fontFamily = \"Menlo, Consolas, monospace\";\n    containerElement.style.fontSize = \"large\";\n    containerElement.style.padding = \"2rem\";\n    containerElement.style.lineHeight = \"1.2\";\n    containerElement.style.whiteSpace = \"pre-wrap\";\n    containerElement.style.overflow = \"auto\";\n    var headerElement = document.createElement(\"span\");\n    headerElement.innerText = \"Compiled with problems:\";\n    var closeButtonElement = document.createElement(\"button\");\n    closeButtonElement.innerText = \"X\";\n    closeButtonElement.style.background = \"transparent\";\n    closeButtonElement.style.border = \"none\";\n    closeButtonElement.style.fontSize = \"20px\";\n    closeButtonElement.style.fontWeight = \"bold\";\n    closeButtonElement.style.color = \"white\";\n    closeButtonElement.style.cursor = \"pointer\";\n    closeButtonElement.style.cssFloat = \"right\"; // @ts-ignore\n\n    closeButtonElement.style.styleFloat = \"right\";\n    closeButtonElement.addEventListener(\"click\", function () {\n      hide();\n    });\n    containerElement.appendChild(headerElement);\n    containerElement.appendChild(closeButtonElement);\n    containerElement.appendChild(document.createElement(\"br\"));\n    containerElement.appendChild(document.createElement(\"br\"));\n    /** @type {Document} */\n\n    /** @type {HTMLIFrameElement} */\n\n    iframeContainerElement.contentDocument.body.appendChild(containerElement);\n    onLoadQueue.forEach(function (onLoad) {\n      onLoad(\n      /** @type {HTMLDivElement} */\n      containerElement);\n    });\n    onLoadQueue = [];\n    /** @type {HTMLIFrameElement} */\n\n    iframeContainerElement.onload = null;\n  };\n\n  document.body.appendChild(iframeContainerElement);\n}\n/**\n * @param {(element: HTMLDivElement) => void} callback\n * @param {string | null} trustedTypesPolicyName\n */\n\n\nfunction ensureOverlayExists(callback, trustedTypesPolicyName) {\n  if (containerElement) {\n    // Everything is ready, call the callback right away.\n    callback(containerElement);\n    return;\n  }\n\n  onLoadQueue.push(callback);\n\n  if (iframeContainerElement) {\n    return;\n  }\n\n  createContainer(trustedTypesPolicyName);\n} // Successful compilation.\n\n\nfunction hide() {\n  if (!iframeContainerElement) {\n    return;\n  } // Clean up and reset internal state.\n\n\n  document.body.removeChild(iframeContainerElement);\n  iframeContainerElement = null;\n  containerElement = null;\n}\n/**\n * @param {string} type\n * @param {string  | { file?: string, moduleName?: string, loc?: string, message?: string }} item\n * @returns {{ header: string, body: string }}\n */\n\n\nfunction formatProblem(type, item) {\n  var header = type === \"warning\" ? \"WARNING\" : \"ERROR\";\n  var body = \"\";\n\n  if (typeof item === \"string\") {\n    body += item;\n  } else {\n    var file = item.file || \"\"; // eslint-disable-next-line no-nested-ternary\n\n    var moduleName = item.moduleName ? item.moduleName.indexOf(\"!\") !== -1 ? \"\".concat(item.moduleName.replace(/^(\\s|\\S)*!/, \"\"), \" (\").concat(item.moduleName, \")\") : \"\".concat(item.moduleName) : \"\";\n    var loc = item.loc;\n    header += \"\".concat(moduleName || file ? \" in \".concat(moduleName ? \"\".concat(moduleName).concat(file ? \" (\".concat(file, \")\") : \"\") : file).concat(loc ? \" \".concat(loc) : \"\") : \"\");\n    body += item.message || \"\";\n  }\n\n  return {\n    header: header,\n    body: body\n  };\n} // Compilation with errors (e.g. syntax error or missing modules).\n\n/**\n * @param {string} type\n * @param {Array<string  | { file?: string, moduleName?: string, loc?: string, message?: string }>} messages\n * @param {string | null} trustedTypesPolicyName\n */\n\n\nfunction show(type, messages, trustedTypesPolicyName) {\n  ensureOverlayExists(function () {\n    messages.forEach(function (message) {\n      var entryElement = document.createElement(\"div\");\n      var typeElement = document.createElement(\"span\");\n\n      var _formatProblem = formatProblem(type, message),\n          header = _formatProblem.header,\n          body = _formatProblem.body;\n\n      typeElement.innerText = header;\n      typeElement.style.color = \"#\".concat(colors.red); // Make it look similar to our terminal.\n\n      var text = ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default()((0,html_entities__WEBPACK_IMPORTED_MODULE_1__.encode)(body));\n      var messageTextNode = document.createElement(\"div\");\n      messageTextNode.innerHTML = overlayTrustedTypesPolicy ? overlayTrustedTypesPolicy.createHTML(text) : text;\n      entryElement.appendChild(typeElement);\n      entryElement.appendChild(document.createElement(\"br\"));\n      entryElement.appendChild(document.createElement(\"br\"));\n      entryElement.appendChild(messageTextNode);\n      entryElement.appendChild(document.createElement(\"br\"));\n      entryElement.appendChild(document.createElement(\"br\"));\n      /** @type {HTMLDivElement} */\n\n      containerElement.appendChild(entryElement);\n    });\n  }, trustedTypesPolicyName);\n}\n\n\n\n//# sourceURL=webpack://dashboard/./node_modules/webpack-dev-server/client/overlay.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/socket.js":
/*!**********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/socket.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients/WebSocketClient.js */ \"./node_modules/webpack-dev-server/client/clients/WebSocketClient.js\");\n/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/log.js */ \"./node_modules/webpack-dev-server/client/utils/log.js\");\n/* provided dependency */ var __webpack_dev_server_client__ = __webpack_require__(/*! ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js */ \"./node_modules/webpack-dev-server/client/clients/WebSocketClient.js\");\n/* global __webpack_dev_server_client__ */\n\n // this WebsocketClient is here as a default fallback, in case the client is not injected\n\n/* eslint-disable camelcase */\n\nvar Client = // eslint-disable-next-line no-nested-ternary\ntypeof __webpack_dev_server_client__ !== \"undefined\" ? typeof __webpack_dev_server_client__[\"default\"] !== \"undefined\" ? __webpack_dev_server_client__[\"default\"] : __webpack_dev_server_client__ : _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n/* eslint-enable camelcase */\n\nvar retries = 0;\nvar maxRetries = 10; // Initialized client is exported so external consumers can utilize the same instance\n// It is mutable to enforce singleton\n// eslint-disable-next-line import/no-mutable-exports\n\nvar client = null;\n/**\n * @param {string} url\n * @param {{ [handler: string]: (data?: any, params?: any) => any }} handlers\n * @param {number} [reconnect]\n */\n\nvar socket = function initSocket(url, handlers, reconnect) {\n  client = new Client(url);\n  client.onOpen(function () {\n    retries = 0;\n\n    if (typeof reconnect !== \"undefined\") {\n      maxRetries = reconnect;\n    }\n  });\n  client.onClose(function () {\n    if (retries === 0) {\n      handlers.close();\n    } // Try to reconnect.\n\n\n    client = null; // After 10 retries stop trying, to prevent logspam.\n\n    if (retries < maxRetries) {\n      // Exponentially increase timeout to reconnect.\n      // Respectfully copied from the package `got`.\n      // eslint-disable-next-line no-restricted-properties\n      var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;\n      retries += 1;\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_1__.log.info(\"Trying to reconnect...\");\n      setTimeout(function () {\n        socket(url, handlers, reconnect);\n      }, retryInMs);\n    }\n  });\n  client.onMessage(\n  /**\n   * @param {any} data\n   */\n  function (data) {\n    var message = JSON.parse(data);\n\n    if (handlers[message.type]) {\n      handlers[message.type](message.data, message.params);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socket);\n\n//# sourceURL=webpack://dashboard/./node_modules/webpack-dev-server/client/socket.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/createSocketURL.js":
/*!*************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/createSocketURL.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * @param {{ protocol?: string, auth?: string, hostname?: string, port?: string, pathname?: string, search?: string, hash?: string, slashes?: boolean }} objURL\n * @returns {string}\n */\nfunction format(objURL) {\n  var protocol = objURL.protocol || \"\";\n\n  if (protocol && protocol.substr(-1) !== \":\") {\n    protocol += \":\";\n  }\n\n  var auth = objURL.auth || \"\";\n\n  if (auth) {\n    auth = encodeURIComponent(auth);\n    auth = auth.replace(/%3A/i, \":\");\n    auth += \"@\";\n  }\n\n  var host = \"\";\n\n  if (objURL.hostname) {\n    host = auth + (objURL.hostname.indexOf(\":\") === -1 ? objURL.hostname : \"[\".concat(objURL.hostname, \"]\"));\n\n    if (objURL.port) {\n      host += \":\".concat(objURL.port);\n    }\n  }\n\n  var pathname = objURL.pathname || \"\";\n\n  if (objURL.slashes) {\n    host = \"//\".concat(host || \"\");\n\n    if (pathname && pathname.charAt(0) !== \"/\") {\n      pathname = \"/\".concat(pathname);\n    }\n  } else if (!host) {\n    host = \"\";\n  }\n\n  var search = objURL.search || \"\";\n\n  if (search && search.charAt(0) !== \"?\") {\n    search = \"?\".concat(search);\n  }\n\n  var hash = objURL.hash || \"\";\n\n  if (hash && hash.charAt(0) !== \"#\") {\n    hash = \"#\".concat(hash);\n  }\n\n  pathname = pathname.replace(/[?#]/g,\n  /**\n   * @param {string} match\n   * @returns {string}\n   */\n  function (match) {\n    return encodeURIComponent(match);\n  });\n  search = search.replace(\"#\", \"%23\");\n  return \"\".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);\n}\n/**\n * @param {URL & { fromCurrentScript?: boolean }} parsedURL\n * @returns {string}\n */\n\n\nfunction createSocketURL(parsedURL) {\n  var hostname = parsedURL.hostname; // Node.js module parses it as `::`\n  // `new URL(urlString, [baseURLString])` parses it as '[::]'\n\n  var isInAddrAny = hostname === \"0.0.0.0\" || hostname === \"::\" || hostname === \"[::]\"; // why do we need this check?\n  // hostname n/a for file protocol (example, when using electron, ionic)\n  // see: https://github.com/webpack/webpack-dev-server/pull/384\n\n  if (isInAddrAny && self.location.hostname && self.location.protocol.indexOf(\"http\") === 0) {\n    hostname = self.location.hostname;\n  }\n\n  var socketURLProtocol = parsedURL.protocol || self.location.protocol; // When https is used in the app, secure web sockets are always necessary because the browser doesn't accept non-secure web sockets.\n\n  if (socketURLProtocol === \"auto:\" || hostname && isInAddrAny && self.location.protocol === \"https:\") {\n    socketURLProtocol = self.location.protocol;\n  }\n\n  socketURLProtocol = socketURLProtocol.replace(/^(?:http|.+-extension|file)/i, \"ws\");\n  var socketURLAuth = \"\"; // `new URL(urlString, [baseURLstring])` doesn't have `auth` property\n  // Parse authentication credentials in case we need them\n\n  if (parsedURL.username) {\n    socketURLAuth = parsedURL.username; // Since HTTP basic authentication does not allow empty username,\n    // we only include password if the username is not empty.\n\n    if (parsedURL.password) {\n      // Result: <username>:<password>\n      socketURLAuth = socketURLAuth.concat(\":\", parsedURL.password);\n    }\n  } // In case the host is a raw IPv6 address, it can be enclosed in\n  // the brackets as the brackets are needed in the final URL string.\n  // Need to remove those as url.format blindly adds its own set of brackets\n  // if the host string contains colons. That would lead to non-working\n  // double brackets (e.g. [[::]]) host\n  //\n  // All of these web socket url params are optionally passed in through resourceQuery,\n  // so we need to fall back to the default if they are not provided\n\n\n  var socketURLHostname = (hostname || self.location.hostname || \"localhost\").replace(/^\\[(.*)\\]$/, \"$1\");\n  var socketURLPort = parsedURL.port;\n\n  if (!socketURLPort || socketURLPort === \"0\") {\n    socketURLPort = self.location.port;\n  } // If path is provided it'll be passed in via the resourceQuery as a\n  // query param so it has to be parsed out of the querystring in order for the\n  // client to open the socket to the correct location.\n\n\n  var socketURLPathname = \"/ws\";\n\n  if (parsedURL.pathname && !parsedURL.fromCurrentScript) {\n    socketURLPathname = parsedURL.pathname;\n  }\n\n  return format({\n    protocol: socketURLProtocol,\n    auth: socketURLAuth,\n    hostname: socketURLHostname,\n    port: socketURLPort,\n    pathname: socketURLPathname,\n    slashes: true\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSocketURL);\n\n//# sourceURL=webpack://dashboard/./node_modules/webpack-dev-server/client/utils/createSocketURL.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js":
/*!********************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * @returns {string}\n */\nfunction getCurrentScriptSource() {\n  // `document.currentScript` is the most accurate way to find the current script,\n  // but is not supported in all browsers.\n  if (document.currentScript) {\n    return document.currentScript.getAttribute(\"src\");\n  } // Fallback to getting all scripts running in the document.\n\n\n  var scriptElements = document.scripts || [];\n  var scriptElementsWithSrc = Array.prototype.filter.call(scriptElements, function (element) {\n    return element.getAttribute(\"src\");\n  });\n\n  if (scriptElementsWithSrc.length > 0) {\n    var currentScript = scriptElementsWithSrc[scriptElementsWithSrc.length - 1];\n    return currentScript.getAttribute(\"src\");\n  } // Fail as there was no script to use.\n\n\n  throw new Error(\"[webpack-dev-server] Failed to get current script source.\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCurrentScriptSource);\n\n//# sourceURL=webpack://dashboard/./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/log.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"log\": () => (/* binding */ log),\n/* harmony export */   \"logEnabledFeatures\": () => (/* binding */ logEnabledFeatures),\n/* harmony export */   \"setLogLevel\": () => (/* binding */ setLogLevel)\n/* harmony export */ });\n/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/logger/index.js */ \"./node_modules/webpack-dev-server/client/modules/logger/index.js\");\n/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__);\n\nvar name = \"webpack-dev-server\"; // default level is set on the client side, so it does not need\n// to be set by the CLI or API\n\nvar defaultLevel = \"info\"; // options new options, merge with old options\n\n/**\n * @param {false | true | \"none\" | \"error\" | \"warn\" | \"info\" | \"log\" | \"verbose\"} level\n * @returns {void}\n */\n\nfunction setLogLevel(level) {\n  _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().configureDefaultLogger({\n    level: level\n  });\n}\n\nsetLogLevel(defaultLevel);\nvar log = _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().getLogger(name);\n\nvar logEnabledFeatures = function logEnabledFeatures(features) {\n  var enabledFeatures = Object.keys(features);\n\n  if (!features || enabledFeatures.length === 0) {\n    return;\n  }\n\n  var logString = \"Server started:\"; // Server started: Hot Module Replacement enabled, Live Reloading enabled, Overlay disabled.\n\n  for (var i = 0; i < enabledFeatures.length; i++) {\n    var key = enabledFeatures[i];\n    logString += \" \".concat(key, \" \").concat(features[key] ? \"enabled\" : \"disabled\", \",\");\n  } // replace last comma with a period\n\n\n  logString = logString.slice(0, -1).concat(\".\");\n  log.info(logString);\n};\n\n\n\n//# sourceURL=webpack://dashboard/./node_modules/webpack-dev-server/client/utils/log.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/parseURL.js":
/*!******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/parseURL.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getCurrentScriptSource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCurrentScriptSource.js */ \"./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js\");\n\n/**\n * @param {string} resourceQuery\n * @returns {{ [key: string]: string | boolean }}\n */\n\nfunction parseURL(resourceQuery) {\n  /** @type {{ [key: string]: string }} */\n  var options = {};\n\n  if (typeof resourceQuery === \"string\" && resourceQuery !== \"\") {\n    var searchParams = resourceQuery.slice(1).split(\"&\");\n\n    for (var i = 0; i < searchParams.length; i++) {\n      var pair = searchParams[i].split(\"=\");\n      options[pair[0]] = decodeURIComponent(pair[1]);\n    }\n  } else {\n    // Else, get the url from the <script> this file was called with.\n    var scriptSource = (0,_getCurrentScriptSource_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    var scriptSourceURL;\n\n    try {\n      // The placeholder `baseURL` with `window.location.href`,\n      // is to allow parsing of path-relative or protocol-relative URLs,\n      // and will have no effect if `scriptSource` is a fully valid URL.\n      scriptSourceURL = new URL(scriptSource, self.location.href);\n    } catch (error) {// URL parsing failed, do nothing.\n      // We will still proceed to see if we can recover using `resourceQuery`\n    }\n\n    if (scriptSourceURL) {\n      options = scriptSourceURL;\n      options.fromCurrentScript = true;\n    }\n  }\n\n  return options;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseURL);\n\n//# sourceURL=webpack://dashboard/./node_modules/webpack-dev-server/client/utils/parseURL.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/reloadApp.js":
/*!*******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/reloadApp.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/emitter.js */ \"./node_modules/webpack/hot/emitter.js\");\n/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log.js */ \"./node_modules/webpack-dev-server/client/utils/log.js\");\n\n\n/** @typedef {import(\"../index\").Options} Options\n/** @typedef {import(\"../index\").Status} Status\n\n/**\n * @param {Options} options\n * @param {Status} status\n */\n\nfunction reloadApp(_ref, status) {\n  var hot = _ref.hot,\n      liveReload = _ref.liveReload;\n\n  if (status.isUnloading) {\n    return;\n  }\n\n  var currentHash = status.currentHash,\n      previousHash = status.previousHash;\n  var isInitial = currentHash.indexOf(\n  /** @type {string} */\n  previousHash) >= 0;\n\n  if (isInitial) {\n    return;\n  }\n  /**\n   * @param {Window} rootWindow\n   * @param {number} intervalId\n   */\n\n\n  function applyReload(rootWindow, intervalId) {\n    clearInterval(intervalId);\n    _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info(\"App updated. Reloading...\");\n    rootWindow.location.reload();\n  }\n\n  var search = self.location.search.toLowerCase();\n  var allowToHot = search.indexOf(\"webpack-dev-server-hot=false\") === -1;\n  var allowToLiveReload = search.indexOf(\"webpack-dev-server-live-reload=false\") === -1;\n\n  if (hot && allowToHot) {\n    _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info(\"App hot update...\");\n    webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default().emit(\"webpackHotUpdate\", status.currentHash);\n\n    if (typeof self !== \"undefined\" && self.window) {\n      // broadcast update to window\n      self.postMessage(\"webpackHotUpdate\".concat(status.currentHash), \"*\");\n    }\n  } // allow refreshing the page only if liveReload isn't disabled\n  else if (liveReload && allowToLiveReload) {\n    var rootWindow = self; // use parent window for reload (in case we're in an iframe with no valid src)\n\n    var intervalId = self.setInterval(function () {\n      if (rootWindow.location.protocol !== \"about:\") {\n        // reload immediately if protocol is valid\n        applyReload(rootWindow, intervalId);\n      } else {\n        rootWindow = rootWindow.parent;\n\n        if (rootWindow.parent === rootWindow) {\n          // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways\n          applyReload(rootWindow, intervalId);\n        }\n      }\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reloadApp);\n\n//# sourceURL=webpack://dashboard/./node_modules/webpack-dev-server/client/utils/reloadApp.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/sendMessage.js":
/*!*********************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/sendMessage.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* global __resourceQuery WorkerGlobalScope */\n// Send messages to the outside, so plugins can consume it.\n\n/**\n * @param {string} type\n * @param {any} [data]\n */\nfunction sendMsg(type, data) {\n  if (typeof self !== \"undefined\" && (typeof WorkerGlobalScope === \"undefined\" || !(self instanceof WorkerGlobalScope))) {\n    self.postMessage({\n      type: \"webpack\".concat(type),\n      data: data\n    }, \"*\");\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendMsg);\n\n//# sourceURL=webpack://dashboard/./node_modules/webpack-dev-server/client/utils/sendMessage.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/stripAnsi.js":
/*!*******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/stripAnsi.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nvar ansiRegex = new RegExp([\"[\\\\u001B\\\\u009B][[\\\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\\\d\\\\/#&.:=?%@~_]+)*|[a-zA-Z\\\\d]+(?:;[-a-zA-Z\\\\d\\\\/#&.:=?%@~_]*)*)?\\\\u0007)\", \"(?:(?:\\\\d{1,4}(?:;\\\\d{0,4})*)?[\\\\dA-PR-TZcf-nq-uy=><~]))\"].join(\"|\"), \"g\");\n/**\n *\n * Strip [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code) from a string.\n * Adapted from code originally released by Sindre Sorhus\n * Licensed the MIT License\n *\n * @param {string} string\n * @return {string}\n */\n\nfunction stripAnsi(string) {\n  if (typeof string !== \"string\") {\n    throw new TypeError(\"Expected a `string`, got `\".concat(_typeof(string), \"`\"));\n  }\n\n  return string.replace(ansiRegex, \"\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stripAnsi);\n\n//# sourceURL=webpack://dashboard/./node_modules/webpack-dev-server/client/utils/stripAnsi.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/dev-server.js":
/*!************************************************!*\
  !*** ./node_modules/webpack/hot/dev-server.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\n/* globals __webpack_hash__ */\nif (true) {\n  var lastHash;\n\n  var upToDate = function upToDate() {\n    return lastHash.indexOf(__webpack_require__.h()) >= 0;\n  };\n\n  var log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n\n  var check = function check() {\n    module.hot.check(true).then(function (updatedModules) {\n      if (!updatedModules) {\n        log(\"warning\", \"[HMR] Cannot find update. Need to do a full reload!\");\n        log(\"warning\", \"[HMR] (Probably because of restarting the webpack-dev-server)\");\n        window.location.reload();\n        return;\n      }\n\n      if (!upToDate()) {\n        check();\n      }\n\n      __webpack_require__(/*! ./log-apply-result */ \"./node_modules/webpack/hot/log-apply-result.js\")(updatedModules, updatedModules);\n\n      if (upToDate()) {\n        log(\"info\", \"[HMR] App is up to date.\");\n      }\n    })[\"catch\"](function (err) {\n      var status = module.hot.status();\n\n      if ([\"abort\", \"fail\"].indexOf(status) >= 0) {\n        log(\"warning\", \"[HMR] Cannot apply update. Need to do a full reload!\");\n        log(\"warning\", \"[HMR] \" + log.formatError(err));\n        window.location.reload();\n      } else {\n        log(\"warning\", \"[HMR] Update failed: \" + log.formatError(err));\n      }\n    });\n  };\n\n  var hotEmitter = __webpack_require__(/*! ./emitter */ \"./node_modules/webpack/hot/emitter.js\");\n\n  hotEmitter.on(\"webpackHotUpdate\", function (currentHash) {\n    lastHash = currentHash;\n\n    if (!upToDate() && module.hot.status() === \"idle\") {\n      log(\"info\", \"[HMR] Checking for updates on the server...\");\n      check();\n    }\n  });\n  log(\"info\", \"[HMR] Waiting for update signal from WDS...\");\n} else {}\n\n//# sourceURL=webpack://dashboard/./node_modules/webpack/hot/dev-server.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/emitter.js":
/*!*********************************************!*\
  !*** ./node_modules/webpack/hot/emitter.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var EventEmitter = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\n\nmodule.exports = new EventEmitter();\n\n//# sourceURL=webpack://dashboard/./node_modules/webpack/hot/emitter.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!******************************************************!*\
  !*** ./node_modules/webpack/hot/log-apply-result.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\nmodule.exports = function (updatedModules, renewedModules) {\n  var unacceptedModules = updatedModules.filter(function (moduleId) {\n    return renewedModules && renewedModules.indexOf(moduleId) < 0;\n  });\n\n  var log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n\n  if (unacceptedModules.length > 0) {\n    log(\"warning\", \"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)\");\n    unacceptedModules.forEach(function (moduleId) {\n      log(\"warning\", \"[HMR]  - \" + moduleId);\n    });\n  }\n\n  if (!renewedModules || renewedModules.length === 0) {\n    log(\"info\", \"[HMR] Nothing hot updated.\");\n  } else {\n    log(\"info\", \"[HMR] Updated modules:\");\n    renewedModules.forEach(function (moduleId) {\n      if (typeof moduleId === \"string\" && moduleId.indexOf(\"!\") !== -1) {\n        var parts = moduleId.split(\"!\");\n        log.groupCollapsed(\"info\", \"[HMR]  - \" + parts.pop());\n        log(\"info\", \"[HMR]  - \" + moduleId);\n        log.groupEnd(\"info\");\n      } else {\n        log(\"info\", \"[HMR]  - \" + moduleId);\n      }\n    });\n    var numberIds = renewedModules.every(function (moduleId) {\n      return typeof moduleId === \"number\";\n    });\n    if (numberIds) log(\"info\", '[HMR] Consider using the optimization.moduleIds: \"named\" for module names.');\n  }\n};\n\n//# sourceURL=webpack://dashboard/./node_modules/webpack/hot/log-apply-result.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
/***/ ((module) => {

eval("var logLevel = \"info\";\n\nfunction dummy() {}\n\nfunction shouldLog(level) {\n  var shouldLog = logLevel === \"info\" && level === \"info\" || [\"info\", \"warning\"].indexOf(logLevel) >= 0 && level === \"warning\" || [\"info\", \"warning\", \"error\"].indexOf(logLevel) >= 0 && level === \"error\";\n  return shouldLog;\n}\n\nfunction logGroup(logFn) {\n  return function (level, msg) {\n    if (shouldLog(level)) {\n      logFn(msg);\n    }\n  };\n}\n\nmodule.exports = function (level, msg) {\n  if (shouldLog(level)) {\n    if (level === \"info\") {\n      console.log(msg);\n    } else if (level === \"warning\") {\n      console.warn(msg);\n    } else if (level === \"error\") {\n      console.error(msg);\n    }\n  }\n};\n/* eslint-disable node/no-unsupported-features/node-builtins */\n\n\nvar group = console.group || dummy;\nvar groupCollapsed = console.groupCollapsed || dummy;\nvar groupEnd = console.groupEnd || dummy;\n/* eslint-enable node/no-unsupported-features/node-builtins */\n\nmodule.exports.group = logGroup(group);\nmodule.exports.groupCollapsed = logGroup(groupCollapsed);\nmodule.exports.groupEnd = logGroup(groupEnd);\n\nmodule.exports.setLogLevel = function (level) {\n  logLevel = level;\n};\n\nmodule.exports.formatError = function (err) {\n  var message = err.message;\n  var stack = err.stack;\n\n  if (!stack) {\n    return message;\n  } else if (stack.indexOf(message) < 0) {\n    return message + \"\\n\" + stack;\n  } else {\n    return stack;\n  }\n};\n\n//# sourceURL=webpack://dashboard/./node_modules/webpack/hot/log.js?");

/***/ }),

/***/ "./src/dashboard.js":
/*!**************************!*\
  !*** ./src/dashboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var url = window.location.pathname;\n\nif (url === \"/hello-world-page\") {\n  console.log(\"importing hello world application\");\n  __webpack_require__.e(/*! import() */ \"webpack_container_remote_HelloWorldApp_HelloWorldPage\").then(__webpack_require__.t.bind(__webpack_require__, /*! HelloWorldApp/HelloWorldPage */ \"webpack/container/remote/HelloWorldApp/HelloWorldPage\", 23)).then(function (HelloWorldPageModule) {\n    var HelloWorldPage = HelloWorldPageModule[\"default\"];\n    var helloWorldPage = new HelloWorldPage();\n    helloWorldPage.render();\n  });\n} else if (url === \"/spiderman-page\") {\n  console.log(\"importing spider application\");\n  __webpack_require__.e(/*! import() */ \"webpack_container_remote_SpiderManApp_SpidermanPage\").then(__webpack_require__.t.bind(__webpack_require__, /*! SpiderManApp/SpidermanPage */ \"webpack/container/remote/SpiderManApp/SpidermanPage\", 23)).then(function (SpidermanPageModule) {\n    var SpidermanPage = SpidermanPageModule[\"default\"];\n    var spidermanPage = new SpidermanPage();\n    spidermanPage.render();\n  });\n}\n\nconsole.log(\"dashboard\");\n\n//# sourceURL=webpack://dashboard/./src/dashboard.js?");

/***/ }),

/***/ "webpack/container/reference/HelloWorldApp":
/*!*********************************************************************!*\
  !*** external "HelloWorldApp@http://localhost:9001/remoteEntry.js" ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
var __webpack_error__ = new Error();
module.exports = new Promise((resolve, reject) => {
	if(typeof HelloWorldApp !== "undefined") return resolve();
	__webpack_require__.l("http://localhost:9001/remoteEntry.js", (event) => {
		if(typeof HelloWorldApp !== "undefined") return resolve();
		var errorType = event && (event.type === 'load' ? 'missing' : event.type);
		var realSrc = event && event.target && event.target.src;
		__webpack_error__.message = 'Loading script failed.\n(' + errorType + ': ' + realSrc + ')';
		__webpack_error__.name = 'ScriptExternalLoadError';
		__webpack_error__.type = errorType;
		__webpack_error__.request = realSrc;
		reject(__webpack_error__);
	}, "HelloWorldApp");
}).then(() => (HelloWorldApp));

/***/ }),

/***/ "webpack/container/reference/SpiderManApp":
/*!********************************************************************!*\
  !*** external "SpiderManApp@http://localhost:9002/remoteEntry.js" ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
var __webpack_error__ = new Error();
module.exports = new Promise((resolve, reject) => {
	if(typeof SpiderManApp !== "undefined") return resolve();
	__webpack_require__.l("http://localhost:9002/remoteEntry.js", (event) => {
		if(typeof SpiderManApp !== "undefined") return resolve();
		var errorType = event && (event.type === 'load' ? 'missing' : event.type);
		var realSrc = event && event.target && event.target.src;
		__webpack_error__.message = 'Loading script failed.\n(' + errorType + ': ' + realSrc + ')';
		__webpack_error__.name = 'ScriptExternalLoadError';
		__webpack_error__.type = errorType;
		__webpack_error__.request = realSrc;
		reject(__webpack_error__);
	}, "SpiderManApp");
}).then(() => (SpiderManApp));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("dashboard." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("7eef28fa654eae3ed4ed")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "dashboard:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/remotes loading */
/******/ 	(() => {
/******/ 		var chunkMapping = {
/******/ 			"webpack_container_remote_HelloWorldApp_HelloWorldPage": [
/******/ 				"webpack/container/remote/HelloWorldApp/HelloWorldPage"
/******/ 			],
/******/ 			"webpack_container_remote_SpiderManApp_SpidermanPage": [
/******/ 				"webpack/container/remote/SpiderManApp/SpidermanPage"
/******/ 			]
/******/ 		};
/******/ 		var idToExternalAndNameMapping = {
/******/ 			"webpack/container/remote/HelloWorldApp/HelloWorldPage": [
/******/ 				"default",
/******/ 				"./HelloWorldPage",
/******/ 				"webpack/container/reference/HelloWorldApp"
/******/ 			],
/******/ 			"webpack/container/remote/SpiderManApp/SpidermanPage": [
/******/ 				"default",
/******/ 				"./SpidermanPage",
/******/ 				"webpack/container/reference/SpiderManApp"
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.f.remotes = (chunkId, promises) => {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach((id) => {
/******/ 					var getScope = __webpack_require__.R;
/******/ 					if(!getScope) getScope = [];
/******/ 					var data = idToExternalAndNameMapping[id];
/******/ 					if(getScope.indexOf(data) >= 0) return;
/******/ 					getScope.push(data);
/******/ 					if(data.p) return promises.push(data.p);
/******/ 					var onError = (error) => {
/******/ 						if(!error) error = new Error("Container missing");
/******/ 						if(typeof error.message === "string")
/******/ 							error.message += '\nwhile loading "' + data[1] + '" from ' + data[2];
/******/ 						__webpack_require__.m[id] = () => {
/******/ 							throw error;
/******/ 						}
/******/ 						data.p = 0;
/******/ 					};
/******/ 					var handleFunction = (fn, arg1, arg2, d, next, first) => {
/******/ 						try {
/******/ 							var promise = fn(arg1, arg2);
/******/ 							if(promise && promise.then) {
/******/ 								var p = promise.then((result) => (next(result, d)), onError);
/******/ 								if(first) promises.push(data.p = p); else return p;
/******/ 							} else {
/******/ 								return next(promise, d, first);
/******/ 							}
/******/ 						} catch(error) {
/******/ 							onError(error);
/******/ 						}
/******/ 					}
/******/ 					var onExternal = (external, _, first) => (external ? handleFunction(__webpack_require__.I, data[0], 0, external, onInitialized, first) : onError());
/******/ 					var onInitialized = (_, external, first) => (handleFunction(external.get, data[1], getScope, 0, onFactory, first));
/******/ 					var onFactory = (factory) => {
/******/ 						data.p = 1;
/******/ 						__webpack_require__.m[id] = (module) => {
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					};
/******/ 					handleFunction(__webpack_require__, data[2], 0, 0, onExternal, 1);
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => (typeof console !== "undefined" && console.warn && console.warn(msg));
/******/ 			var uniqueName = "dashboard";
/******/ 			var register = (name, version, factory, eager) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					initExternal("webpack/container/reference/HelloWorldApp");
/******/ 					initExternal("webpack/container/reference/SpiderManApp");
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "http://localhost:9000/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"dashboard": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if("dashboard" == chunkId) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatedashboard"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=9000&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true");
/******/ 	__webpack_require__("./node_modules/webpack/hot/dev-server.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/dashboard.js");
/******/ 	
/******/ })()
;