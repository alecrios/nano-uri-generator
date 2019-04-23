(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("nano-uri-generator", [], factory);
	else if(typeof exports === 'object')
		exports["nano-uri-generator"] = factory();
	else
		root["nano-uri-generator"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/js-query-string/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/js-query-string/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = {

  _defaults: {
    "warn_on_invalid": false
  },

  convert: function convert(data, options) {
    if (options === undefined) {
      options = {};
    }
    options = this._merge_options(this._defaults, options);
    if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === 'object') {
      var result = "?";
      Object.keys(data).map(function (query_key) {
        var query_data = data[query_key];
        var query_data_processed = void 0;
        if (query_data === null) {
          if (options.warn_on_invalid) {
            console.warn("Attempted to convert null to query string!");
          }
        } else if (typeof query_data === 'number') {
          query_data_processed = query_data.toString();
        } else if (query_data instanceof RegExp) {
          query_data_processed = query_data.toString();
        } else if (typeof query_data === 'string') {
          query_data_processed = query_data;
        } else if (typeof query_data === 'boolean') {
          query_data_processed = query_data.toString();
        } else if ((typeof query_data === "undefined" ? "undefined" : _typeof(query_data)) === 'object') {
          query_data_processed = JSON.stringify(query_data);
        } else if (typeof query_data === 'undefined') {
          if (options.warn_on_invalid) {
            console.warn("Attempted to convert undefined to query string!");
          }
        } else {
          if (options.warn_on_invalid) {
            console.warn("Attempted to convert function or symbol to query string!");
          }
        }
        if (query_data_processed !== undefined) {
          var append = query_key + "=" + encodeURIComponent(query_data_processed) + "&";
          result += append;
        }
      });
      return result === "?" ? "" : result.substring(0, result.length - 1);
    } else {
      if (options.warn_on_invalid) {
        console.warn("Attempted to convert non-object to query string!");
      }
      return "";
    }
  },

  _merge_options: function _merge_options(obj1, obj2) {
    var obj3 = {};
    Object.keys(obj1).map(function (attrname) {
      obj3[attrname] = obj1[attrname];
    });
    Object.keys(obj2).map(function (attrname) {
      obj3[attrname] = obj2[attrname];
    });
    return obj3;
  }
};

/***/ }),

/***/ "./src/getChangeRepURI.js":
/*!********************************!*\
  !*** ./src/getChangeRepURI.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _jsQueryString = _interopRequireDefault(__webpack_require__(/*! js-query-string */ "./node_modules/js-query-string/lib/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generates a URI for changing the representative.
 * @param {String} address The address to change the representative to.
 * @param {String} [label] The label of the representative change.
 * @param {String} [message] The message of the representative change.
 * @throws {Error} Address must be defined.
 * @returns {String} The URI for changing the representative.
 */
function _default(address, label, message) {
  if (address === undefined) {
    throw Error('Address must be defined.');
  }

  var queryString = _jsQueryString.default.convert({
    label: label,
    message: message
  });

  return "nanorep:".concat(address).concat(queryString);
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/getImportPrivateKeyURI.js":
/*!***************************************!*\
  !*** ./src/getImportPrivateKeyURI.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _jsQueryString = _interopRequireDefault(__webpack_require__(/*! js-query-string */ "./node_modules/js-query-string/lib/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generates a URI for importing a private key.
 * @param {String} privateKey The private key to import.
 * @param {String} [label] The label of the import.
 * @param {String} [message] The message of the import.
 * @throws {Error} Private key must be defined.
 * @returns {String} The URI for importing a private key.
 */
function _default(privateKey, label, message) {
  if (privateKey === undefined) {
    throw Error('Private key must be defined.');
  }

  var queryString = _jsQueryString.default.convert({
    label: label,
    message: message
  });

  return "nanokey:".concat(privateKey).concat(queryString);
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/getImportSeedURI.js":
/*!*********************************!*\
  !*** ./src/getImportSeedURI.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _jsQueryString = _interopRequireDefault(__webpack_require__(/*! js-query-string */ "./node_modules/js-query-string/lib/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generates a URI for importing a seed.
 * @param {String} seed The seed to import.
 * @param {String} [label] The label of the import.
 * @param {String} [message] The message of the import.
 * @param {Number|String} [lastIndex] The last index to import.
 * @throws {Error} Seed must be defined.
 * @returns {String} The URI for importing a seed.
 */
function _default(seed, label, message, lastIndex) {
  if (seed === undefined) {
    throw Error('Seed must be defined.');
  }

  var queryString = _jsQueryString.default.convert({
    label: label,
    message: message,
    lastindex: lastIndex
  });

  return "nanoseed:".concat(seed).concat(queryString);
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/getProcessBlockURI.js":
/*!***********************************!*\
  !*** ./src/getProcessBlockURI.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

/**
 * Generates a URI for processing a block.
 * @param {String} block The block to process.
 * @throws {Error} Block must be defined.
 * @returns {String} The URI for processing a block.
 */
function _default(block) {
  if (block === undefined) {
    throw Error('Block must be defined.');
  }

  return "nanoblock:".concat(encodeURI(JSON.stringify(block)));
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/getSendURI.js":
/*!***************************!*\
  !*** ./src/getSendURI.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _jsQueryString = _interopRequireDefault(__webpack_require__(/*! js-query-string */ "./node_modules/js-query-string/lib/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generates a URI for sending.
 * @param {String} address The address to send to.
 * @param {Number|String} [amount] The amount to send (in raw).
 * @param {String} [label] The label of the transaction.
 * @param {String} [message] The message of the transaction.
 * @throws {Error} Address must be defined.
 * @returns {String} The URI for sending.
 */
function _default(address, amount, label, message) {
  if (address === undefined) {
    throw Error('Address must be defined.');
  }

  var queryString = _jsQueryString.default.convert({
    amount: amount,
    label: label,
    message: message
  });

  return "nano:".concat(address).concat(queryString);
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getChangeRepURI = _interopRequireDefault(__webpack_require__(/*! ./getChangeRepURI */ "./src/getChangeRepURI.js"));

var _getImportPrivateKeyURI = _interopRequireDefault(__webpack_require__(/*! ./getImportPrivateKeyURI */ "./src/getImportPrivateKeyURI.js"));

var _getImportSeedURI = _interopRequireDefault(__webpack_require__(/*! ./getImportSeedURI */ "./src/getImportSeedURI.js"));

var _getProcessBlockURI = _interopRequireDefault(__webpack_require__(/*! ./getProcessBlockURI */ "./src/getProcessBlockURI.js"));

var _getSendURI = _interopRequireDefault(__webpack_require__(/*! ./getSendURI */ "./src/getSendURI.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  getChangeRepURI: _getChangeRepURI.default,
  getImportPrivateKeyURI: _getImportPrivateKeyURI.default,
  getImportSeedURI: _getImportSeedURI.default,
  getProcessBlockURI: _getProcessBlockURI.default,
  getSendURI: _getSendURI.default
};
exports.default = _default;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=nano-uri-generator.js.map