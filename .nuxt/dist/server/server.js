module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/_tag","2":"pages/inspiration","3":"pages/post","4":"pages/post/_id","5":"pages/post/index","6":"pages/profile","7":"pages/profile/_username","8":"pages/topic"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("72daabed", content, true, context)
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("3191d5ad", content, true, context)
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("bc62b418", content, true, context)
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("3096d518", content, true, context)
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("67f146fc", content, true, context)
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("627663ea", content, true, context)
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("cookie-universal");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("buefy");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("lodash/debounce");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(45);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("797461a0", content, true)

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*! Buefy v0.8.20 | MIT License | github.com/buefy/buefy */@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@-webkit-keyframes fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}\n/*! bulma.io v0.7.5 | MIT License | github.com/jgthms/bulma */@-webkit-keyframes spinAround{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spinAround{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.b-checkbox.checkbox,.b-radio.radio,.breadcrumb,.button,.carousel,.carousel-list,.delete,.file,.is-unselectable,.modal-close,.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous,.switch,.tabs{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.navbar-link:not(.is-arrowless):after,.select:not(.is-multiple):not(.is-loading):after{border:3px solid transparent;border-radius:2px;border-right:0;border-top:0;content:\" \";display:block;height:.625em;margin-top:-.4375em;pointer-events:none;position:absolute;top:50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:center;transform-origin:center;width:.625em}.block:not(:last-child),.box:not(:last-child),.breadcrumb:not(:last-child),.content:not(:last-child),.highlight:not(:last-child),.level:not(:last-child),.list:not(:last-child),.message:not(:last-child),.notification:not(:last-child),.progress:not(:last-child),.subtitle:not(:last-child),.table-container:not(:last-child),.table:not(:last-child),.tabs:not(:last-child),.title:not(:last-child){margin-bottom:1.5rem}.delete,.modal-close{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(10,10,10,.2);border:none;border-radius:290486px;cursor:pointer;pointer-events:auto;display:inline-block;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;font-size:0;height:20px;max-height:20px;max-width:20px;min-height:20px;min-width:20px;outline:none;position:relative;vertical-align:top;width:20px}.delete:after,.delete:before,.modal-close:after,.modal-close:before{background-color:#fff;content:\"\";display:block;left:50%;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transform-origin:center center;transform-origin:center center}.delete:before,.modal-close:before{height:2px;width:50%}.delete:after,.modal-close:after{height:50%;width:2px}.delete:focus,.delete:hover,.modal-close:focus,.modal-close:hover{background-color:rgba(10,10,10,.3)}.delete:active,.modal-close:active{background-color:rgba(10,10,10,.4)}.is-small.delete,.is-small.modal-close{height:16px;max-height:16px;max-width:16px;min-height:16px;min-width:16px;width:16px}.is-medium.delete,.is-medium.modal-close{height:24px;max-height:24px;max-width:24px;min-height:24px;min-width:24px;width:24px}.is-large.delete,.is-large.modal-close{height:32px;max-height:32px;max-width:32px;min-height:32px;min-width:32px;width:32px}.button.is-loading:after,.control.is-loading:after,.loader,.select.is-loading:after{-webkit-animation:spinAround .5s linear infinite;animation:spinAround .5s linear infinite;border-radius:290486px;border-color:transparent transparent #dbdbdb #dbdbdb;border-style:solid;border-width:2px;content:\"\";display:block;height:1em;position:relative;width:1em}.hero-video,.image.is-1by1 .has-ratio,.image.is-1by1 img,.image.is-1by2 .has-ratio,.image.is-1by2 img,.image.is-1by3 .has-ratio,.image.is-1by3 img,.image.is-2by1 .has-ratio,.image.is-2by1 img,.image.is-2by3 .has-ratio,.image.is-2by3 img,.image.is-3by1 .has-ratio,.image.is-3by1 img,.image.is-3by2 .has-ratio,.image.is-3by2 img,.image.is-3by4 .has-ratio,.image.is-3by4 img,.image.is-3by5 .has-ratio,.image.is-3by5 img,.image.is-4by3 .has-ratio,.image.is-4by3 img,.image.is-4by5 .has-ratio,.image.is-4by5 img,.image.is-5by3 .has-ratio,.image.is-5by3 img,.image.is-5by4 .has-ratio,.image.is-5by4 img,.image.is-9by16 .has-ratio,.image.is-9by16 img,.image.is-16by9 .has-ratio,.image.is-16by9 img,.image.is-square .has-ratio,.image.is-square img,.is-overlay,.modal,.modal-background{bottom:0;left:0;position:absolute;right:0;top:0}.button,.file-cta,.file-name,.input,.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous,.select select,.taginput .taginput-container.is-focusable,.textarea{-moz-appearance:none;-webkit-appearance:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:none;box-shadow:none;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:1rem;height:2.25em;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;line-height:1.5;padding:calc(.375em - 1px) calc(.625em - 1px);position:relative;vertical-align:top}.button:active,.button:focus,.file-cta:active,.file-cta:focus,.file-name:active,.file-name:focus,.input:active,.input:focus,.is-active.button,.is-active.file-cta,.is-active.file-name,.is-active.input,.is-active.pagination-ellipsis,.is-active.pagination-link,.is-active.pagination-next,.is-active.pagination-previous,.is-active.textarea,.is-focused.button,.is-focused.file-cta,.is-focused.file-name,.is-focused.input,.is-focused.pagination-ellipsis,.is-focused.pagination-link,.is-focused.pagination-next,.is-focused.pagination-previous,.is-focused.textarea,.pagination-ellipsis:active,.pagination-ellipsis:focus,.pagination-link:active,.pagination-link:focus,.pagination-next:active,.pagination-next:focus,.pagination-previous:active,.pagination-previous:focus,.select select.is-active,.select select.is-focused,.select select:active,.select select:focus,.taginput .is-active.taginput-container.is-focusable,.taginput .is-focused.taginput-container.is-focusable,.taginput .taginput-container.is-focusable:active,.taginput .taginput-container.is-focusable:focus,.textarea:active,.textarea:focus{outline:none}.button[disabled],.file-cta[disabled],.file-name[disabled],.input[disabled],.pagination-ellipsis[disabled],.pagination-link[disabled],.pagination-next[disabled],.pagination-previous[disabled],.select fieldset[disabled] select,.select select[disabled],.taginput .taginput-container.is-focusable[disabled],.taginput fieldset[disabled] .taginput-container.is-focusable,.textarea[disabled],fieldset[disabled] .button,fieldset[disabled] .file-cta,fieldset[disabled] .file-name,fieldset[disabled] .input,fieldset[disabled] .pagination-ellipsis,fieldset[disabled] .pagination-link,fieldset[disabled] .pagination-next,fieldset[disabled] .pagination-previous,fieldset[disabled] .select select,fieldset[disabled] .taginput .taginput-container.is-focusable,fieldset[disabled] .textarea{cursor:not-allowed}\n/*! minireset.css v0.0.4 | MIT License | github.com/jgthms/minireset.css */blockquote,body,dd,dl,dt,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,html,iframe,legend,li,ol,p,pre,textarea,ul{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}ul{list-style:none}button,input,select,textarea{margin:0}html{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}embed,iframe,img,object,video{height:auto;max-width:100%}audio{max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}td:not([align]),th:not([align]){text-align:left}html{background-color:#fff;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;min-width:300px;overflow-x:hidden;overflow-y:scroll;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}article,aside,figure,footer,header,hgroup,section{display:block}body,button,input,select,textarea{font-family:BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif}code,pre{-moz-osx-font-smoothing:auto;-webkit-font-smoothing:auto;font-family:monospace}body{color:#4a4a4a;font-size:1em;font-weight:400;line-height:1.5}a{color:#7957d5;cursor:pointer;text-decoration:none}a strong{color:currentColor}a:hover{color:#363636}code{color:#ff3860;font-size:.875em;font-weight:400;padding:.25em .5em}code,hr{background-color:#f5f5f5}hr{border:none;display:block;height:2px;margin:1.5rem 0}img{height:auto;max-width:100%}input[type=checkbox],input[type=radio]{vertical-align:baseline}small{font-size:.875em}span{font-style:inherit;font-weight:inherit}strong{color:#363636;font-weight:700}fieldset{border:none}pre{-webkit-overflow-scrolling:touch;background-color:#f5f5f5;color:#4a4a4a;font-size:.875em;overflow-x:auto;padding:1.25rem 1.5rem;white-space:pre;word-wrap:normal}pre code{background-color:transparent;color:currentColor;font-size:1em;padding:0}table td,table th{vertical-align:top}table td:not([align]),table th:not([align]){text-align:left}table th{color:#363636}.is-clearfix:after{clear:both;content:\" \";display:table}.is-pulled-left{float:left!important}.is-pulled-right{float:right!important}.is-clipped{overflow:hidden!important}.is-size-1{font-size:3rem!important}.is-size-2{font-size:2.5rem!important}.is-size-3{font-size:2rem!important}.is-size-4{font-size:1.5rem!important}.is-size-5{font-size:1.25rem!important}.is-size-6{font-size:1rem!important}.is-size-7{font-size:.75rem!important}@media screen and (max-width:768px){.is-size-1-mobile{font-size:3rem!important}.is-size-2-mobile{font-size:2.5rem!important}.is-size-3-mobile{font-size:2rem!important}.is-size-4-mobile{font-size:1.5rem!important}.is-size-5-mobile{font-size:1.25rem!important}.is-size-6-mobile{font-size:1rem!important}.is-size-7-mobile{font-size:.75rem!important}}@media print,screen and (min-width:769px){.is-size-1-tablet{font-size:3rem!important}.is-size-2-tablet{font-size:2.5rem!important}.is-size-3-tablet{font-size:2rem!important}.is-size-4-tablet{font-size:1.5rem!important}.is-size-5-tablet{font-size:1.25rem!important}.is-size-6-tablet{font-size:1rem!important}.is-size-7-tablet{font-size:.75rem!important}}@media screen and (max-width:1023px){.is-size-1-touch{font-size:3rem!important}.is-size-2-touch{font-size:2.5rem!important}.is-size-3-touch{font-size:2rem!important}.is-size-4-touch{font-size:1.5rem!important}.is-size-5-touch{font-size:1.25rem!important}.is-size-6-touch{font-size:1rem!important}.is-size-7-touch{font-size:.75rem!important}}@media screen and (min-width:1024px){.is-size-1-desktop{font-size:3rem!important}.is-size-2-desktop{font-size:2.5rem!important}.is-size-3-desktop{font-size:2rem!important}.is-size-4-desktop{font-size:1.5rem!important}.is-size-5-desktop{font-size:1.25rem!important}.is-size-6-desktop{font-size:1rem!important}.is-size-7-desktop{font-size:.75rem!important}}@media screen and (min-width:1216px){.is-size-1-widescreen{font-size:3rem!important}.is-size-2-widescreen{font-size:2.5rem!important}.is-size-3-widescreen{font-size:2rem!important}.is-size-4-widescreen{font-size:1.5rem!important}.is-size-5-widescreen{font-size:1.25rem!important}.is-size-6-widescreen{font-size:1rem!important}.is-size-7-widescreen{font-size:.75rem!important}}@media screen and (min-width:1408px){.is-size-1-fullhd{font-size:3rem!important}.is-size-2-fullhd{font-size:2.5rem!important}.is-size-3-fullhd{font-size:2rem!important}.is-size-4-fullhd{font-size:1.5rem!important}.is-size-5-fullhd{font-size:1.25rem!important}.is-size-6-fullhd{font-size:1rem!important}.is-size-7-fullhd{font-size:.75rem!important}}.has-text-centered{text-align:center!important}.has-text-justified{text-align:justify!important}.has-text-left{text-align:left!important}.has-text-right{text-align:right!important}@media screen and (max-width:768px){.has-text-centered-mobile{text-align:center!important}}@media print,screen and (min-width:769px){.has-text-centered-tablet{text-align:center!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-centered-tablet-only{text-align:center!important}}@media screen and (max-width:1023px){.has-text-centered-touch{text-align:center!important}}@media screen and (min-width:1024px){.has-text-centered-desktop{text-align:center!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-centered-desktop-only{text-align:center!important}}@media screen and (min-width:1216px){.has-text-centered-widescreen{text-align:center!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-centered-widescreen-only{text-align:center!important}}@media screen and (min-width:1408px){.has-text-centered-fullhd{text-align:center!important}}@media screen and (max-width:768px){.has-text-justified-mobile{text-align:justify!important}}@media print,screen and (min-width:769px){.has-text-justified-tablet{text-align:justify!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-justified-tablet-only{text-align:justify!important}}@media screen and (max-width:1023px){.has-text-justified-touch{text-align:justify!important}}@media screen and (min-width:1024px){.has-text-justified-desktop{text-align:justify!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-justified-desktop-only{text-align:justify!important}}@media screen and (min-width:1216px){.has-text-justified-widescreen{text-align:justify!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-justified-widescreen-only{text-align:justify!important}}@media screen and (min-width:1408px){.has-text-justified-fullhd{text-align:justify!important}}@media screen and (max-width:768px){.has-text-left-mobile{text-align:left!important}}@media print,screen and (min-width:769px){.has-text-left-tablet{text-align:left!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-left-tablet-only{text-align:left!important}}@media screen and (max-width:1023px){.has-text-left-touch{text-align:left!important}}@media screen and (min-width:1024px){.has-text-left-desktop{text-align:left!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-left-desktop-only{text-align:left!important}}@media screen and (min-width:1216px){.has-text-left-widescreen{text-align:left!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-left-widescreen-only{text-align:left!important}}@media screen and (min-width:1408px){.has-text-left-fullhd{text-align:left!important}}@media screen and (max-width:768px){.has-text-right-mobile{text-align:right!important}}@media print,screen and (min-width:769px){.has-text-right-tablet{text-align:right!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-right-tablet-only{text-align:right!important}}@media screen and (max-width:1023px){.has-text-right-touch{text-align:right!important}}@media screen and (min-width:1024px){.has-text-right-desktop{text-align:right!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-right-desktop-only{text-align:right!important}}@media screen and (min-width:1216px){.has-text-right-widescreen{text-align:right!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-right-widescreen-only{text-align:right!important}}@media screen and (min-width:1408px){.has-text-right-fullhd{text-align:right!important}}.is-capitalized{text-transform:capitalize!important}.is-lowercase{text-transform:lowercase!important}.is-uppercase{text-transform:uppercase!important}.is-italic{font-style:italic!important}.has-text-white{color:#fff!important}a.has-text-white:focus,a.has-text-white:hover{color:#e6e6e6!important}.has-background-white{background-color:#fff!important}.has-text-black{color:#0a0a0a!important}a.has-text-black:focus,a.has-text-black:hover{color:#000!important}.has-background-black{background-color:#0a0a0a!important}.has-text-light{color:#f5f5f5!important}a.has-text-light:focus,a.has-text-light:hover{color:#dbdbdb!important}.has-background-light{background-color:#f5f5f5!important}.has-text-dark{color:#363636!important}a.has-text-dark:focus,a.has-text-dark:hover{color:#1c1c1c!important}.has-background-dark{background-color:#363636!important}.has-text-primary{color:#7957d5!important}a.has-text-primary:focus,a.has-text-primary:hover{color:#5a32c7!important}.has-background-primary{background-color:#7957d5!important}.has-text-link{color:#7957d5!important}a.has-text-link:focus,a.has-text-link:hover{color:#5a32c7!important}.has-background-link{background-color:#7957d5!important}.has-text-info{color:#167df0!important}a.has-text-info:focus,a.has-text-info:hover{color:#0d64c6!important}.has-background-info{background-color:#167df0!important}.has-text-success{color:#23d160!important}a.has-text-success:focus,a.has-text-success:hover{color:#1ca64c!important}.has-background-success{background-color:#23d160!important}.has-text-warning{color:#ffdd57!important}a.has-text-warning:focus,a.has-text-warning:hover{color:#ffd324!important}.has-background-warning{background-color:#ffdd57!important}.has-text-danger{color:#ff3860!important}a.has-text-danger:focus,a.has-text-danger:hover{color:#ff0537!important}.has-background-danger{background-color:#ff3860!important}.has-text-black-bis{color:#121212!important}.has-background-black-bis{background-color:#121212!important}.has-text-black-ter{color:#242424!important}.has-background-black-ter{background-color:#242424!important}.has-text-grey-darker{color:#363636!important}.has-background-grey-darker{background-color:#363636!important}.has-text-grey-dark{color:#4a4a4a!important}.has-background-grey-dark{background-color:#4a4a4a!important}.has-text-grey{color:#7a7a7a!important}.has-background-grey{background-color:#7a7a7a!important}.has-text-grey-light{color:#b5b5b5!important}.has-background-grey-light{background-color:#b5b5b5!important}.has-text-grey-lighter{color:#dbdbdb!important}.has-background-grey-lighter{background-color:#dbdbdb!important}.has-text-white-ter{color:#f5f5f5!important}.has-background-white-ter{background-color:#f5f5f5!important}.has-text-white-bis{color:#fafafa!important}.has-background-white-bis{background-color:#fafafa!important}.has-text-weight-light{font-weight:300!important}.has-text-weight-normal{font-weight:400!important}.has-text-weight-medium{font-weight:500!important}.has-text-weight-semibold{font-weight:600!important}.has-text-weight-bold{font-weight:700!important}.is-family-primary,.is-family-sans-serif,.is-family-secondary{font-family:BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif!important}.is-family-code,.is-family-monospace{font-family:monospace!important}.is-block{display:block!important}@media screen and (max-width:768px){.is-block-mobile{display:block!important}}@media print,screen and (min-width:769px){.is-block-tablet{display:block!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-block-tablet-only{display:block!important}}@media screen and (max-width:1023px){.is-block-touch{display:block!important}}@media screen and (min-width:1024px){.is-block-desktop{display:block!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-block-desktop-only{display:block!important}}@media screen and (min-width:1216px){.is-block-widescreen{display:block!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-block-widescreen-only{display:block!important}}@media screen and (min-width:1408px){.is-block-fullhd{display:block!important}}.is-flex{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}@media screen and (max-width:768px){.is-flex-mobile{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media print,screen and (min-width:769px){.is-flex-tablet{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-flex-tablet-only{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (max-width:1023px){.is-flex-touch{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:1024px){.is-flex-desktop{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-flex-desktop-only{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:1216px){.is-flex-widescreen{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-flex-widescreen-only{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:1408px){.is-flex-fullhd{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}.is-inline{display:inline!important}@media screen and (max-width:768px){.is-inline-mobile{display:inline!important}}@media print,screen and (min-width:769px){.is-inline-tablet{display:inline!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-inline-tablet-only{display:inline!important}}@media screen and (max-width:1023px){.is-inline-touch{display:inline!important}}@media screen and (min-width:1024px){.is-inline-desktop{display:inline!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-inline-desktop-only{display:inline!important}}@media screen and (min-width:1216px){.is-inline-widescreen{display:inline!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-inline-widescreen-only{display:inline!important}}@media screen and (min-width:1408px){.is-inline-fullhd{display:inline!important}}.is-inline-block{display:inline-block!important}@media screen and (max-width:768px){.is-inline-block-mobile{display:inline-block!important}}@media print,screen and (min-width:769px){.is-inline-block-tablet{display:inline-block!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-inline-block-tablet-only{display:inline-block!important}}@media screen and (max-width:1023px){.is-inline-block-touch{display:inline-block!important}}@media screen and (min-width:1024px){.is-inline-block-desktop{display:inline-block!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-inline-block-desktop-only{display:inline-block!important}}@media screen and (min-width:1216px){.is-inline-block-widescreen{display:inline-block!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-inline-block-widescreen-only{display:inline-block!important}}@media screen and (min-width:1408px){.is-inline-block-fullhd{display:inline-block!important}}.is-inline-flex{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}@media screen and (max-width:768px){.is-inline-flex-mobile{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media print,screen and (min-width:769px){.is-inline-flex-tablet{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-inline-flex-tablet-only{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (max-width:1023px){.is-inline-flex-touch{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:1024px){.is-inline-flex-desktop{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-inline-flex-desktop-only{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:1216px){.is-inline-flex-widescreen{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-inline-flex-widescreen-only{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:1408px){.is-inline-flex-fullhd{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}.is-hidden{display:none!important}.is-sr-only{border:none!important;clip:rect(0,0,0,0)!important;height:.01em!important;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:.01em!important}@media screen and (max-width:768px){.is-hidden-mobile{display:none!important}}@media print,screen and (min-width:769px){.is-hidden-tablet{display:none!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-hidden-tablet-only{display:none!important}}@media screen and (max-width:1023px){.is-hidden-touch{display:none!important}}@media screen and (min-width:1024px){.is-hidden-desktop{display:none!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-hidden-desktop-only{display:none!important}}@media screen and (min-width:1216px){.is-hidden-widescreen{display:none!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-hidden-widescreen-only{display:none!important}}@media screen and (min-width:1408px){.is-hidden-fullhd{display:none!important}}.is-invisible{visibility:hidden!important}@media screen and (max-width:768px){.is-invisible-mobile{visibility:hidden!important}}@media print,screen and (min-width:769px){.is-invisible-tablet{visibility:hidden!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-invisible-tablet-only{visibility:hidden!important}}@media screen and (max-width:1023px){.is-invisible-touch{visibility:hidden!important}}@media screen and (min-width:1024px){.is-invisible-desktop{visibility:hidden!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-invisible-desktop-only{visibility:hidden!important}}@media screen and (min-width:1216px){.is-invisible-widescreen{visibility:hidden!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-invisible-widescreen-only{visibility:hidden!important}}@media screen and (min-width:1408px){.is-invisible-fullhd{visibility:hidden!important}}.is-marginless{margin:0!important}.is-paddingless{padding:0!important}.is-radiusless{border-radius:0!important}.is-shadowless{-webkit-box-shadow:none!important;box-shadow:none!important}.is-relative{position:relative!important}.box{background-color:#fff;border-radius:6px;-webkit-box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);color:#4a4a4a;display:block;padding:1.25rem}a.box:focus,a.box:hover{-webkit-box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px #7957d5;box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px #7957d5}a.box:active{-webkit-box-shadow:inset 0 1px 2px rgba(10,10,10,.2),0 0 0 1px #7957d5;box-shadow:inset 0 1px 2px rgba(10,10,10,.2),0 0 0 1px #7957d5}.button{background-color:#fff;border-color:#dbdbdb;border-width:1px;color:#363636;cursor:pointer;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:calc(.375em - 1px) .75em;text-align:center;white-space:nowrap}.button strong{color:inherit}.button .icon,.button .icon.is-large,.button .icon.is-medium,.button .icon.is-small{height:1.5em;width:1.5em}.button .icon:first-child:not(:last-child){margin-left:calc(-.375em - 1px);margin-right:.1875em}.button .icon:last-child:not(:first-child){margin-left:.1875em;margin-right:calc(-.375em - 1px)}.button .icon:first-child:last-child{margin-left:calc(-.375em - 1px);margin-right:calc(-.375em - 1px)}.button.is-hovered,.button:hover{border-color:#b5b5b5;color:#363636}.button.is-focused,.button:focus{border-color:#7957d5;color:#363636}.button.is-focused:not(:active),.button:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.button.is-active,.button:active{border-color:#4a4a4a;color:#363636}.button.is-text{background-color:transparent;border-color:transparent;color:#4a4a4a;text-decoration:underline}.button.is-text.is-focused,.button.is-text.is-hovered,.button.is-text:focus,.button.is-text:hover{background-color:#f5f5f5;color:#363636}.button.is-text.is-active,.button.is-text:active{background-color:#e8e8e8;color:#363636}.button.is-text[disabled],fieldset[disabled] .button.is-text{background-color:transparent;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-white{background-color:#fff;border-color:transparent;color:#0a0a0a}.button.is-white.is-hovered,.button.is-white:hover{background-color:#f9f9f9;border-color:transparent;color:#0a0a0a}.button.is-white.is-focused,.button.is-white:focus{border-color:transparent;color:#0a0a0a}.button.is-white.is-focused:not(:active),.button.is-white:focus:not(:active){-webkit-box-shadow:0 0 0 .125em hsla(0,0%,100%,.25);box-shadow:0 0 0 .125em hsla(0,0%,100%,.25)}.button.is-white.is-active,.button.is-white:active{background-color:#f2f2f2;border-color:transparent;color:#0a0a0a}.button.is-white[disabled],fieldset[disabled] .button.is-white{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-white.is-inverted{background-color:#0a0a0a;color:#fff}.button.is-white.is-inverted.is-hovered,.button.is-white.is-inverted:hover{background-color:#000}.button.is-white.is-inverted[disabled],fieldset[disabled] .button.is-white.is-inverted{background-color:#0a0a0a;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-white.is-loading:after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-white.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-white.is-outlined.is-focused,.button.is-white.is-outlined.is-hovered,.button.is-white.is-outlined:focus,.button.is-white.is-outlined:hover{background-color:#fff;border-color:#fff;color:#0a0a0a}.button.is-white.is-outlined.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-white.is-outlined.is-loading.is-focused:after,.button.is-white.is-outlined.is-loading.is-hovered:after,.button.is-white.is-outlined.is-loading:focus:after,.button.is-white.is-outlined.is-loading:hover:after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-white.is-outlined[disabled],fieldset[disabled] .button.is-white.is-outlined{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-white.is-inverted.is-outlined{background-color:transparent;border-color:#0a0a0a;color:#0a0a0a}.button.is-white.is-inverted.is-outlined.is-focused,.button.is-white.is-inverted.is-outlined.is-hovered,.button.is-white.is-inverted.is-outlined:focus,.button.is-white.is-inverted.is-outlined:hover{background-color:#0a0a0a;color:#fff}.button.is-white.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-white.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-white.is-inverted.is-outlined.is-loading:focus:after,.button.is-white.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-white.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-white.is-inverted.is-outlined{background-color:transparent;border-color:#0a0a0a;-webkit-box-shadow:none;box-shadow:none;color:#0a0a0a}.button.is-black{background-color:#0a0a0a;border-color:transparent;color:#fff}.button.is-black.is-hovered,.button.is-black:hover{background-color:#040404;border-color:transparent;color:#fff}.button.is-black.is-focused,.button.is-black:focus{border-color:transparent;color:#fff}.button.is-black.is-focused:not(:active),.button.is-black:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(10,10,10,.25);box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.button.is-black.is-active,.button.is-black:active{background-color:#000;border-color:transparent;color:#fff}.button.is-black[disabled],fieldset[disabled] .button.is-black{background-color:#0a0a0a;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-black.is-inverted{background-color:#fff;color:#0a0a0a}.button.is-black.is-inverted.is-hovered,.button.is-black.is-inverted:hover{background-color:#f2f2f2}.button.is-black.is-inverted[disabled],fieldset[disabled] .button.is-black.is-inverted{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#0a0a0a}.button.is-black.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-black.is-outlined{background-color:transparent;border-color:#0a0a0a;color:#0a0a0a}.button.is-black.is-outlined.is-focused,.button.is-black.is-outlined.is-hovered,.button.is-black.is-outlined:focus,.button.is-black.is-outlined:hover{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.button.is-black.is-outlined.is-loading:after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-black.is-outlined.is-loading.is-focused:after,.button.is-black.is-outlined.is-loading.is-hovered:after,.button.is-black.is-outlined.is-loading:focus:after,.button.is-black.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-black.is-outlined[disabled],fieldset[disabled] .button.is-black.is-outlined{background-color:transparent;border-color:#0a0a0a;-webkit-box-shadow:none;box-shadow:none;color:#0a0a0a}.button.is-black.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-black.is-inverted.is-outlined.is-focused,.button.is-black.is-inverted.is-outlined.is-hovered,.button.is-black.is-inverted.is-outlined:focus,.button.is-black.is-inverted.is-outlined:hover{background-color:#fff;color:#0a0a0a}.button.is-black.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-black.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-black.is-inverted.is-outlined.is-loading:focus:after,.button.is-black.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-black.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-black.is-inverted.is-outlined{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-light{background-color:#f5f5f5;border-color:transparent;color:#363636}.button.is-light.is-hovered,.button.is-light:hover{background-color:#eee;border-color:transparent;color:#363636}.button.is-light.is-focused,.button.is-light:focus{border-color:transparent;color:#363636}.button.is-light.is-focused:not(:active),.button.is-light:focus:not(:active){-webkit-box-shadow:0 0 0 .125em hsla(0,0%,96.1%,.25);box-shadow:0 0 0 .125em hsla(0,0%,96.1%,.25)}.button.is-light.is-active,.button.is-light:active{background-color:#e8e8e8;border-color:transparent;color:#363636}.button.is-light[disabled],fieldset[disabled] .button.is-light{background-color:#f5f5f5;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-light.is-inverted{background-color:#363636;color:#f5f5f5}.button.is-light.is-inverted.is-hovered,.button.is-light.is-inverted:hover{background-color:#292929}.button.is-light.is-inverted[disabled],fieldset[disabled] .button.is-light.is-inverted{background-color:#363636;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#f5f5f5}.button.is-light.is-loading:after{border-color:transparent transparent #363636 #363636!important}.button.is-light.is-outlined{background-color:transparent;border-color:#f5f5f5;color:#f5f5f5}.button.is-light.is-outlined.is-focused,.button.is-light.is-outlined.is-hovered,.button.is-light.is-outlined:focus,.button.is-light.is-outlined:hover{background-color:#f5f5f5;border-color:#f5f5f5;color:#363636}.button.is-light.is-outlined.is-loading:after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}.button.is-light.is-outlined.is-loading.is-focused:after,.button.is-light.is-outlined.is-loading.is-hovered:after,.button.is-light.is-outlined.is-loading:focus:after,.button.is-light.is-outlined.is-loading:hover:after{border-color:transparent transparent #363636 #363636!important}.button.is-light.is-outlined[disabled],fieldset[disabled] .button.is-light.is-outlined{background-color:transparent;border-color:#f5f5f5;-webkit-box-shadow:none;box-shadow:none;color:#f5f5f5}.button.is-light.is-inverted.is-outlined{background-color:transparent;border-color:#363636;color:#363636}.button.is-light.is-inverted.is-outlined.is-focused,.button.is-light.is-inverted.is-outlined.is-hovered,.button.is-light.is-inverted.is-outlined:focus,.button.is-light.is-inverted.is-outlined:hover{background-color:#363636;color:#f5f5f5}.button.is-light.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-light.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-light.is-inverted.is-outlined.is-loading:focus:after,.button.is-light.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}.button.is-light.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-light.is-inverted.is-outlined{background-color:transparent;border-color:#363636;-webkit-box-shadow:none;box-shadow:none;color:#363636}.button.is-dark{background-color:#363636;border-color:transparent;color:#f5f5f5}.button.is-dark.is-hovered,.button.is-dark:hover{background-color:#2f2f2f;border-color:transparent;color:#f5f5f5}.button.is-dark.is-focused,.button.is-dark:focus{border-color:transparent;color:#f5f5f5}.button.is-dark.is-focused:not(:active),.button.is-dark:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(54,54,54,.25);box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.button.is-dark.is-active,.button.is-dark:active{background-color:#292929;border-color:transparent;color:#f5f5f5}.button.is-dark[disabled],fieldset[disabled] .button.is-dark{background-color:#363636;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-dark.is-inverted{background-color:#f5f5f5;color:#363636}.button.is-dark.is-inverted.is-hovered,.button.is-dark.is-inverted:hover{background-color:#e8e8e8}.button.is-dark.is-inverted[disabled],fieldset[disabled] .button.is-dark.is-inverted{background-color:#f5f5f5;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#363636}.button.is-dark.is-loading:after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}.button.is-dark.is-outlined{background-color:transparent;border-color:#363636;color:#363636}.button.is-dark.is-outlined.is-focused,.button.is-dark.is-outlined.is-hovered,.button.is-dark.is-outlined:focus,.button.is-dark.is-outlined:hover{background-color:#363636;border-color:#363636;color:#f5f5f5}.button.is-dark.is-outlined.is-loading:after{border-color:transparent transparent #363636 #363636!important}.button.is-dark.is-outlined.is-loading.is-focused:after,.button.is-dark.is-outlined.is-loading.is-hovered:after,.button.is-dark.is-outlined.is-loading:focus:after,.button.is-dark.is-outlined.is-loading:hover:after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}.button.is-dark.is-outlined[disabled],fieldset[disabled] .button.is-dark.is-outlined{background-color:transparent;border-color:#363636;-webkit-box-shadow:none;box-shadow:none;color:#363636}.button.is-dark.is-inverted.is-outlined{background-color:transparent;border-color:#f5f5f5;color:#f5f5f5}.button.is-dark.is-inverted.is-outlined.is-focused,.button.is-dark.is-inverted.is-outlined.is-hovered,.button.is-dark.is-inverted.is-outlined:focus,.button.is-dark.is-inverted.is-outlined:hover{background-color:#f5f5f5;color:#363636}.button.is-dark.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-dark.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-dark.is-inverted.is-outlined.is-loading:focus:after,.button.is-dark.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #363636 #363636!important}.button.is-dark.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-dark.is-inverted.is-outlined{background-color:transparent;border-color:#f5f5f5;-webkit-box-shadow:none;box-shadow:none;color:#f5f5f5}.button.is-primary{background-color:#7957d5;border-color:transparent;color:#fff}.button.is-primary.is-hovered,.button.is-primary:hover{background-color:#714dd2;border-color:transparent;color:#fff}.button.is-primary.is-focused,.button.is-primary:focus{border-color:transparent;color:#fff}.button.is-primary.is-focused:not(:active),.button.is-primary:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.button.is-primary.is-active,.button.is-primary:active{background-color:#6943d0;border-color:transparent;color:#fff}.button.is-primary[disabled],fieldset[disabled] .button.is-primary{background-color:#7957d5;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-primary.is-inverted{background-color:#fff;color:#7957d5}.button.is-primary.is-inverted.is-hovered,.button.is-primary.is-inverted:hover{background-color:#f2f2f2}.button.is-primary.is-inverted[disabled],fieldset[disabled] .button.is-primary.is-inverted{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#7957d5}.button.is-primary.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-primary.is-outlined{background-color:transparent;border-color:#7957d5;color:#7957d5}.button.is-primary.is-outlined.is-focused,.button.is-primary.is-outlined.is-hovered,.button.is-primary.is-outlined:focus,.button.is-primary.is-outlined:hover{background-color:#7957d5;border-color:#7957d5;color:#fff}.button.is-primary.is-outlined.is-loading:after{border-color:transparent transparent #7957d5 #7957d5!important}.button.is-primary.is-outlined.is-loading.is-focused:after,.button.is-primary.is-outlined.is-loading.is-hovered:after,.button.is-primary.is-outlined.is-loading:focus:after,.button.is-primary.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-primary.is-outlined[disabled],fieldset[disabled] .button.is-primary.is-outlined{background-color:transparent;border-color:#7957d5;-webkit-box-shadow:none;box-shadow:none;color:#7957d5}.button.is-primary.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-primary.is-inverted.is-outlined.is-focused,.button.is-primary.is-inverted.is-outlined.is-hovered,.button.is-primary.is-inverted.is-outlined:focus,.button.is-primary.is-inverted.is-outlined:hover{background-color:#fff;color:#7957d5}.button.is-primary.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-primary.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-primary.is-inverted.is-outlined.is-loading:focus:after,.button.is-primary.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #7957d5 #7957d5!important}.button.is-primary.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-primary.is-inverted.is-outlined{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-link{background-color:#7957d5;border-color:transparent;color:#fff}.button.is-link.is-hovered,.button.is-link:hover{background-color:#714dd2;border-color:transparent;color:#fff}.button.is-link.is-focused,.button.is-link:focus{border-color:transparent;color:#fff}.button.is-link.is-focused:not(:active),.button.is-link:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.button.is-link.is-active,.button.is-link:active{background-color:#6943d0;border-color:transparent;color:#fff}.button.is-link[disabled],fieldset[disabled] .button.is-link{background-color:#7957d5;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-link.is-inverted{background-color:#fff;color:#7957d5}.button.is-link.is-inverted.is-hovered,.button.is-link.is-inverted:hover{background-color:#f2f2f2}.button.is-link.is-inverted[disabled],fieldset[disabled] .button.is-link.is-inverted{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#7957d5}.button.is-link.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-link.is-outlined{background-color:transparent;border-color:#7957d5;color:#7957d5}.button.is-link.is-outlined.is-focused,.button.is-link.is-outlined.is-hovered,.button.is-link.is-outlined:focus,.button.is-link.is-outlined:hover{background-color:#7957d5;border-color:#7957d5;color:#fff}.button.is-link.is-outlined.is-loading:after{border-color:transparent transparent #7957d5 #7957d5!important}.button.is-link.is-outlined.is-loading.is-focused:after,.button.is-link.is-outlined.is-loading.is-hovered:after,.button.is-link.is-outlined.is-loading:focus:after,.button.is-link.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-link.is-outlined[disabled],fieldset[disabled] .button.is-link.is-outlined{background-color:transparent;border-color:#7957d5;-webkit-box-shadow:none;box-shadow:none;color:#7957d5}.button.is-link.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-link.is-inverted.is-outlined.is-focused,.button.is-link.is-inverted.is-outlined.is-hovered,.button.is-link.is-inverted.is-outlined:focus,.button.is-link.is-inverted.is-outlined:hover{background-color:#fff;color:#7957d5}.button.is-link.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-link.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-link.is-inverted.is-outlined.is-loading:focus:after,.button.is-link.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #7957d5 #7957d5!important}.button.is-link.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-link.is-inverted.is-outlined{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-info{background-color:#167df0;border-color:transparent;color:#fff}.button.is-info.is-hovered,.button.is-info:hover{background-color:#0f77ea;border-color:transparent;color:#fff}.button.is-info.is-focused,.button.is-info:focus{border-color:transparent;color:#fff}.button.is-info.is-focused:not(:active),.button.is-info:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(22,125,240,.25);box-shadow:0 0 0 .125em rgba(22,125,240,.25)}.button.is-info.is-active,.button.is-info:active{background-color:#0e71de;border-color:transparent;color:#fff}.button.is-info[disabled],fieldset[disabled] .button.is-info{background-color:#167df0;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-info.is-inverted{background-color:#fff;color:#167df0}.button.is-info.is-inverted.is-hovered,.button.is-info.is-inverted:hover{background-color:#f2f2f2}.button.is-info.is-inverted[disabled],fieldset[disabled] .button.is-info.is-inverted{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#167df0}.button.is-info.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-info.is-outlined{background-color:transparent;border-color:#167df0;color:#167df0}.button.is-info.is-outlined.is-focused,.button.is-info.is-outlined.is-hovered,.button.is-info.is-outlined:focus,.button.is-info.is-outlined:hover{background-color:#167df0;border-color:#167df0;color:#fff}.button.is-info.is-outlined.is-loading:after{border-color:transparent transparent #167df0 #167df0!important}.button.is-info.is-outlined.is-loading.is-focused:after,.button.is-info.is-outlined.is-loading.is-hovered:after,.button.is-info.is-outlined.is-loading:focus:after,.button.is-info.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-info.is-outlined[disabled],fieldset[disabled] .button.is-info.is-outlined{background-color:transparent;border-color:#167df0;-webkit-box-shadow:none;box-shadow:none;color:#167df0}.button.is-info.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-info.is-inverted.is-outlined.is-focused,.button.is-info.is-inverted.is-outlined.is-hovered,.button.is-info.is-inverted.is-outlined:focus,.button.is-info.is-inverted.is-outlined:hover{background-color:#fff;color:#167df0}.button.is-info.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-info.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-info.is-inverted.is-outlined.is-loading:focus:after,.button.is-info.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #167df0 #167df0!important}.button.is-info.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-info.is-inverted.is-outlined{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-success{background-color:#23d160;border-color:transparent;color:#fff}.button.is-success.is-hovered,.button.is-success:hover{background-color:#22c65b;border-color:transparent;color:#fff}.button.is-success.is-focused,.button.is-success:focus{border-color:transparent;color:#fff}.button.is-success.is-focused:not(:active),.button.is-success:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(35,209,96,.25);box-shadow:0 0 0 .125em rgba(35,209,96,.25)}.button.is-success.is-active,.button.is-success:active{background-color:#20bc56;border-color:transparent;color:#fff}.button.is-success[disabled],fieldset[disabled] .button.is-success{background-color:#23d160;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-success.is-inverted{background-color:#fff;color:#23d160}.button.is-success.is-inverted.is-hovered,.button.is-success.is-inverted:hover{background-color:#f2f2f2}.button.is-success.is-inverted[disabled],fieldset[disabled] .button.is-success.is-inverted{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#23d160}.button.is-success.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-success.is-outlined{background-color:transparent;border-color:#23d160;color:#23d160}.button.is-success.is-outlined.is-focused,.button.is-success.is-outlined.is-hovered,.button.is-success.is-outlined:focus,.button.is-success.is-outlined:hover{background-color:#23d160;border-color:#23d160;color:#fff}.button.is-success.is-outlined.is-loading:after{border-color:transparent transparent #23d160 #23d160!important}.button.is-success.is-outlined.is-loading.is-focused:after,.button.is-success.is-outlined.is-loading.is-hovered:after,.button.is-success.is-outlined.is-loading:focus:after,.button.is-success.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-success.is-outlined[disabled],fieldset[disabled] .button.is-success.is-outlined{background-color:transparent;border-color:#23d160;-webkit-box-shadow:none;box-shadow:none;color:#23d160}.button.is-success.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-success.is-inverted.is-outlined.is-focused,.button.is-success.is-inverted.is-outlined.is-hovered,.button.is-success.is-inverted.is-outlined:focus,.button.is-success.is-inverted.is-outlined:hover{background-color:#fff;color:#23d160}.button.is-success.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-success.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-success.is-inverted.is-outlined.is-loading:focus:after,.button.is-success.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #23d160 #23d160!important}.button.is-success.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-success.is-inverted.is-outlined{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-warning{background-color:#ffdd57;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-hovered,.button.is-warning:hover{background-color:#ffdb4a;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-focused,.button.is-warning:focus{border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-focused:not(:active),.button.is-warning:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(255,221,87,.25);box-shadow:0 0 0 .125em rgba(255,221,87,.25)}.button.is-warning.is-active,.button.is-warning:active{background-color:#ffd83d;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning[disabled],fieldset[disabled] .button.is-warning{background-color:#ffdd57;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-warning.is-inverted{color:#ffdd57}.button.is-warning.is-inverted,.button.is-warning.is-inverted.is-hovered,.button.is-warning.is-inverted:hover{background-color:rgba(0,0,0,.7)}.button.is-warning.is-inverted[disabled],fieldset[disabled] .button.is-warning.is-inverted{background-color:rgba(0,0,0,.7);border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#ffdd57}.button.is-warning.is-loading:after{border-color:transparent transparent rgba(0,0,0,.7) rgba(0,0,0,.7)!important}.button.is-warning.is-outlined{background-color:transparent;border-color:#ffdd57;color:#ffdd57}.button.is-warning.is-outlined.is-focused,.button.is-warning.is-outlined.is-hovered,.button.is-warning.is-outlined:focus,.button.is-warning.is-outlined:hover{background-color:#ffdd57;border-color:#ffdd57;color:rgba(0,0,0,.7)}.button.is-warning.is-outlined.is-loading:after{border-color:transparent transparent #ffdd57 #ffdd57!important}.button.is-warning.is-outlined.is-loading.is-focused:after,.button.is-warning.is-outlined.is-loading.is-hovered:after,.button.is-warning.is-outlined.is-loading:focus:after,.button.is-warning.is-outlined.is-loading:hover:after{border-color:transparent transparent rgba(0,0,0,.7) rgba(0,0,0,.7)!important}.button.is-warning.is-outlined[disabled],fieldset[disabled] .button.is-warning.is-outlined{background-color:transparent;border-color:#ffdd57;-webkit-box-shadow:none;box-shadow:none;color:#ffdd57}.button.is-warning.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,.7);color:rgba(0,0,0,.7)}.button.is-warning.is-inverted.is-outlined.is-focused,.button.is-warning.is-inverted.is-outlined.is-hovered,.button.is-warning.is-inverted.is-outlined:focus,.button.is-warning.is-inverted.is-outlined:hover{background-color:rgba(0,0,0,.7);color:#ffdd57}.button.is-warning.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-warning.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-warning.is-inverted.is-outlined.is-loading:focus:after,.button.is-warning.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #ffdd57 #ffdd57!important}.button.is-warning.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-warning.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,.7);-webkit-box-shadow:none;box-shadow:none;color:rgba(0,0,0,.7)}.button.is-danger{background-color:#ff3860;border-color:transparent;color:#fff}.button.is-danger.is-hovered,.button.is-danger:hover{background-color:#ff2b56;border-color:transparent;color:#fff}.button.is-danger.is-focused,.button.is-danger:focus{border-color:transparent;color:#fff}.button.is-danger.is-focused:not(:active),.button.is-danger:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(255,56,96,.25);box-shadow:0 0 0 .125em rgba(255,56,96,.25)}.button.is-danger.is-active,.button.is-danger:active{background-color:#ff1f4b;border-color:transparent;color:#fff}.button.is-danger[disabled],fieldset[disabled] .button.is-danger{background-color:#ff3860;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-danger.is-inverted{background-color:#fff;color:#ff3860}.button.is-danger.is-inverted.is-hovered,.button.is-danger.is-inverted:hover{background-color:#f2f2f2}.button.is-danger.is-inverted[disabled],fieldset[disabled] .button.is-danger.is-inverted{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#ff3860}.button.is-danger.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-danger.is-outlined{background-color:transparent;border-color:#ff3860;color:#ff3860}.button.is-danger.is-outlined.is-focused,.button.is-danger.is-outlined.is-hovered,.button.is-danger.is-outlined:focus,.button.is-danger.is-outlined:hover{background-color:#ff3860;border-color:#ff3860;color:#fff}.button.is-danger.is-outlined.is-loading:after{border-color:transparent transparent #ff3860 #ff3860!important}.button.is-danger.is-outlined.is-loading.is-focused:after,.button.is-danger.is-outlined.is-loading.is-hovered:after,.button.is-danger.is-outlined.is-loading:focus:after,.button.is-danger.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-danger.is-outlined[disabled],fieldset[disabled] .button.is-danger.is-outlined{background-color:transparent;border-color:#ff3860;-webkit-box-shadow:none;box-shadow:none;color:#ff3860}.button.is-danger.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-danger.is-inverted.is-outlined.is-focused,.button.is-danger.is-inverted.is-outlined.is-hovered,.button.is-danger.is-inverted.is-outlined:focus,.button.is-danger.is-inverted.is-outlined:hover{background-color:#fff;color:#ff3860}.button.is-danger.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-danger.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-danger.is-inverted.is-outlined.is-loading:focus:after,.button.is-danger.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #ff3860 #ff3860!important}.button.is-danger.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-danger.is-inverted.is-outlined{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-small{border-radius:2px;font-size:.75rem}.button.is-normal{font-size:1rem}.button.is-medium{font-size:1.25rem}.button.is-large{font-size:1.5rem}.button[disabled],fieldset[disabled] .button{background-color:#fff;border-color:#dbdbdb;-webkit-box-shadow:none;box-shadow:none;opacity:.5}.button.is-fullwidth{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}.button.is-loading{color:transparent!important;pointer-events:none}.button.is-loading:after{position:absolute;left:calc(50% - .5em);top:calc(50% - .5em);position:absolute!important}.button.is-static{background-color:#f5f5f5;border-color:#dbdbdb;color:#7a7a7a;-webkit-box-shadow:none;box-shadow:none;pointer-events:none}.button.is-rounded{border-radius:290486px;padding-left:1em;padding-right:1em}.buttons{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.buttons .button{margin-bottom:.5rem}.buttons .button:not(:last-child):not(.is-fullwidth){margin-right:.5rem}.buttons:last-child{margin-bottom:-.5rem}.buttons:not(:last-child){margin-bottom:1rem}.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large){border-radius:2px;font-size:.75rem}.buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large){font-size:1.25rem}.buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium){font-size:1.5rem}.buttons.has-addons .button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.buttons.has-addons .button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.buttons.has-addons .button:last-child{margin-right:0}.buttons.has-addons .button.is-hovered,.buttons.has-addons .button:hover{z-index:2}.buttons.has-addons .button.is-active,.buttons.has-addons .button.is-focused,.buttons.has-addons .button.is-selected,.buttons.has-addons .button:active,.buttons.has-addons .button:focus{z-index:3}.buttons.has-addons .button.is-active:hover,.buttons.has-addons .button.is-focused:hover,.buttons.has-addons .button.is-selected:hover,.buttons.has-addons .button:active:hover,.buttons.has-addons .button:focus:hover{z-index:4}.buttons.has-addons .button.is-expanded{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.buttons.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth){margin-left:.25rem;margin-right:.25rem}.buttons.is-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.buttons.is-right:not(.has-addons) .button:not(.is-fullwidth){margin-left:.25rem;margin-right:.25rem}.container{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;margin:0 auto;position:relative;width:auto}@media screen and (min-width:1024px){.container{max-width:960px}.container.is-fluid{margin-left:32px;margin-right:32px;max-width:none}}@media screen and (max-width:1215px){.container.is-widescreen{max-width:1152px}}@media screen and (max-width:1407px){.container.is-fullhd{max-width:1344px}}@media screen and (min-width:1216px){.container{max-width:1152px}}@media screen and (min-width:1408px){.container{max-width:1344px}}.content li+li{margin-top:.25em}.content blockquote:not(:last-child),.content dl:not(:last-child),.content ol:not(:last-child),.content p:not(:last-child),.content pre:not(:last-child),.content table:not(:last-child),.content ul:not(:last-child){margin-bottom:1em}.content h1,.content h2,.content h3,.content h4,.content h5,.content h6{color:#363636;font-weight:600;line-height:1.125}.content h1{font-size:2em;margin-bottom:.5em}.content h1:not(:first-child){margin-top:1em}.content h2{font-size:1.75em;margin-bottom:.5714em}.content h2:not(:first-child){margin-top:1.1428em}.content h3{font-size:1.5em;margin-bottom:.6666em}.content h3:not(:first-child){margin-top:1.3333em}.content h4{font-size:1.25em;margin-bottom:.8em}.content h5{font-size:1.125em;margin-bottom:.8888em}.content h6{font-size:1em;margin-bottom:1em}.content blockquote{background-color:#f5f5f5;border-left:5px solid #dbdbdb;padding:1.25em 1.5em}.content ol{list-style-position:outside;margin-left:2em;margin-top:1em}.content ol:not([type]){list-style-type:decimal}.content ol:not([type]).is-lower-alpha{list-style-type:lower-alpha}.content ol:not([type]).is-lower-roman{list-style-type:lower-roman}.content ol:not([type]).is-upper-alpha{list-style-type:upper-alpha}.content ol:not([type]).is-upper-roman{list-style-type:upper-roman}.content ul{list-style:disc outside;margin-left:2em;margin-top:1em}.content ul ul{list-style-type:circle;margin-top:.5em}.content ul ul ul{list-style-type:square}.content dd{margin-left:2em}.content figure{margin-left:2em;margin-right:2em;text-align:center}.content figure:not(:first-child){margin-top:2em}.content figure:not(:last-child){margin-bottom:2em}.content figure img{display:inline-block}.content figure figcaption{font-style:italic}.content pre{-webkit-overflow-scrolling:touch;overflow-x:auto;padding:1.25em 1.5em;white-space:pre;word-wrap:normal}.content sub,.content sup{font-size:75%}.content table{width:100%}.content table td,.content table th{border:solid #dbdbdb;border-width:0 0 1px;padding:.5em .75em;vertical-align:top}.content table th{color:#363636}.content table th:not([align]){text-align:left}.content table thead td,.content table thead th{border-width:0 0 2px;color:#363636}.content table tfoot td,.content table tfoot th{border-width:2px 0 0;color:#363636}.content table tbody tr:last-child td,.content table tbody tr:last-child th{border-bottom-width:0}.content .tabs li+li{margin-top:0}.content.is-small{font-size:.75rem}.content.is-medium{font-size:1.25rem}.content.is-large{font-size:1.5rem}.icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:1.5rem;width:1.5rem}.icon.is-small{height:1rem;width:1rem}.icon.is-medium{height:2rem;width:2rem}.icon.is-large{height:3rem;width:3rem}.image{display:block;position:relative}.image img{display:block;height:auto;width:100%}.image img.is-rounded{border-radius:290486px}.image.is-1by1 .has-ratio,.image.is-1by1 img,.image.is-1by2 .has-ratio,.image.is-1by2 img,.image.is-1by3 .has-ratio,.image.is-1by3 img,.image.is-2by1 .has-ratio,.image.is-2by1 img,.image.is-2by3 .has-ratio,.image.is-2by3 img,.image.is-3by1 .has-ratio,.image.is-3by1 img,.image.is-3by2 .has-ratio,.image.is-3by2 img,.image.is-3by4 .has-ratio,.image.is-3by4 img,.image.is-3by5 .has-ratio,.image.is-3by5 img,.image.is-4by3 .has-ratio,.image.is-4by3 img,.image.is-4by5 .has-ratio,.image.is-4by5 img,.image.is-5by3 .has-ratio,.image.is-5by3 img,.image.is-5by4 .has-ratio,.image.is-5by4 img,.image.is-9by16 .has-ratio,.image.is-9by16 img,.image.is-16by9 .has-ratio,.image.is-16by9 img,.image.is-square .has-ratio,.image.is-square img{height:100%;width:100%}.image.is-1by1,.image.is-square{padding-top:100%}.image.is-5by4{padding-top:80%}.image.is-4by3{padding-top:75%}.image.is-3by2{padding-top:66.6666%}.image.is-5by3{padding-top:60%}.image.is-16by9{padding-top:56.25%}.image.is-2by1{padding-top:50%}.image.is-3by1{padding-top:33.3333%}.image.is-4by5{padding-top:125%}.image.is-3by4{padding-top:133.3333%}.image.is-2by3{padding-top:150%}.image.is-3by5{padding-top:166.6666%}.image.is-9by16{padding-top:177.7777%}.image.is-1by2{padding-top:200%}.image.is-1by3{padding-top:300%}.image.is-16x16{height:16px;width:16px}.image.is-24x24{height:24px;width:24px}.image.is-32x32{height:32px;width:32px}.image.is-48x48{height:48px;width:48px}.image.is-64x64{height:64px;width:64px}.image.is-96x96{height:96px;width:96px}.image.is-128x128{height:128px;width:128px}.notification{background-color:#f5f5f5;border-radius:4px;padding:1.25rem 2.5rem 1.25rem 1.5rem;position:relative}.notification a:not(.button):not(.dropdown-item){color:currentColor;text-decoration:underline}.notification strong{color:currentColor}.notification code,.notification pre{background:#fff}.notification pre code{background:transparent}.notification>.delete{position:absolute;right:.5rem;top:.5rem}.notification .content,.notification .subtitle,.notification .title{color:currentColor}.notification.is-white{background-color:#fff;color:#0a0a0a}.notification.is-black{background-color:#0a0a0a;color:#fff}.notification.is-light{background-color:#f5f5f5;color:#363636}.notification.is-dark{background-color:#363636;color:#f5f5f5}.notification.is-link,.notification.is-primary{background-color:#7957d5;color:#fff}.notification.is-info{background-color:#167df0;color:#fff}.notification.is-success{background-color:#23d160;color:#fff}.notification.is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.notification.is-danger{background-color:#ff3860;color:#fff}.progress{-moz-appearance:none;-webkit-appearance:none;border:none;border-radius:290486px;display:block;height:1rem;overflow:hidden;padding:0;width:100%}.progress::-webkit-progress-bar{background-color:#dbdbdb}.progress::-webkit-progress-value{background-color:#4a4a4a}.progress::-moz-progress-bar{background-color:#4a4a4a}.progress::-ms-fill{background-color:#4a4a4a;border:none}.progress.is-white::-webkit-progress-value{background-color:#fff}.progress.is-white::-moz-progress-bar{background-color:#fff}.progress.is-white::-ms-fill{background-color:#fff}.progress.is-white:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#fff),color-stop(30%,#dbdbdb));background-image:linear-gradient(90deg,#fff 30%,#dbdbdb 0)}.progress.is-black::-webkit-progress-value{background-color:#0a0a0a}.progress.is-black::-moz-progress-bar{background-color:#0a0a0a}.progress.is-black::-ms-fill{background-color:#0a0a0a}.progress.is-black:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#0a0a0a),color-stop(30%,#dbdbdb));background-image:linear-gradient(90deg,#0a0a0a 30%,#dbdbdb 0)}.progress.is-light::-webkit-progress-value{background-color:#f5f5f5}.progress.is-light::-moz-progress-bar{background-color:#f5f5f5}.progress.is-light::-ms-fill{background-color:#f5f5f5}.progress.is-light:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#f5f5f5),color-stop(30%,#dbdbdb));background-image:linear-gradient(90deg,#f5f5f5 30%,#dbdbdb 0)}.progress.is-dark::-webkit-progress-value{background-color:#363636}.progress.is-dark::-moz-progress-bar{background-color:#363636}.progress.is-dark::-ms-fill{background-color:#363636}.progress.is-dark:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#363636),color-stop(30%,#dbdbdb));background-image:linear-gradient(90deg,#363636 30%,#dbdbdb 0)}.progress.is-primary::-webkit-progress-value{background-color:#7957d5}.progress.is-primary::-moz-progress-bar{background-color:#7957d5}.progress.is-primary::-ms-fill{background-color:#7957d5}.progress.is-primary:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#7957d5),color-stop(30%,#dbdbdb));background-image:linear-gradient(90deg,#7957d5 30%,#dbdbdb 0)}.progress.is-link::-webkit-progress-value{background-color:#7957d5}.progress.is-link::-moz-progress-bar{background-color:#7957d5}.progress.is-link::-ms-fill{background-color:#7957d5}.progress.is-link:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#7957d5),color-stop(30%,#dbdbdb));background-image:linear-gradient(90deg,#7957d5 30%,#dbdbdb 0)}.progress.is-info::-webkit-progress-value{background-color:#167df0}.progress.is-info::-moz-progress-bar{background-color:#167df0}.progress.is-info::-ms-fill{background-color:#167df0}.progress.is-info:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#167df0),color-stop(30%,#dbdbdb));background-image:linear-gradient(90deg,#167df0 30%,#dbdbdb 0)}.progress.is-success::-webkit-progress-value{background-color:#23d160}.progress.is-success::-moz-progress-bar{background-color:#23d160}.progress.is-success::-ms-fill{background-color:#23d160}.progress.is-success:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#23d160),color-stop(30%,#dbdbdb));background-image:linear-gradient(90deg,#23d160 30%,#dbdbdb 0)}.progress.is-warning::-webkit-progress-value{background-color:#ffdd57}.progress.is-warning::-moz-progress-bar{background-color:#ffdd57}.progress.is-warning::-ms-fill{background-color:#ffdd57}.progress.is-warning:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#ffdd57),color-stop(30%,#dbdbdb));background-image:linear-gradient(90deg,#ffdd57 30%,#dbdbdb 0)}.progress.is-danger::-webkit-progress-value{background-color:#ff3860}.progress.is-danger::-moz-progress-bar{background-color:#ff3860}.progress.is-danger::-ms-fill{background-color:#ff3860}.progress.is-danger:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#ff3860),color-stop(30%,#dbdbdb));background-image:linear-gradient(90deg,#ff3860 30%,#dbdbdb 0)}.progress:indeterminate{-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:moveIndeterminate;animation-name:moveIndeterminate;-webkit-animation-timing-function:linear;animation-timing-function:linear;background-color:#dbdbdb;background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#4a4a4a),color-stop(30%,#dbdbdb));background-image:linear-gradient(90deg,#4a4a4a 30%,#dbdbdb 0);background-position:0 0;background-repeat:no-repeat;background-size:150% 150%}.progress:indeterminate::-webkit-progress-bar{background-color:transparent}.progress:indeterminate::-moz-progress-bar{background-color:transparent}.progress.is-small{height:.75rem}.progress.is-medium{height:1.25rem}.progress.is-large{height:1.5rem}@-webkit-keyframes moveIndeterminate{0%{background-position:200% 0}to{background-position:-200% 0}}@keyframes moveIndeterminate{0%{background-position:200% 0}to{background-position:-200% 0}}.table{background-color:#fff;color:#363636}.table td,.table th{border:solid #dbdbdb;border-width:0 0 1px;padding:.5em .75em;vertical-align:top}.table td.is-white,.table th.is-white{background-color:#fff;border-color:#fff;color:#0a0a0a}.table td.is-black,.table th.is-black{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.table td.is-light,.table th.is-light{background-color:#f5f5f5;border-color:#f5f5f5;color:#363636}.table td.is-dark,.table th.is-dark{background-color:#363636;border-color:#363636;color:#f5f5f5}.table td.is-link,.table td.is-primary,.table th.is-link,.table th.is-primary{background-color:#7957d5;border-color:#7957d5;color:#fff}.table td.is-info,.table th.is-info{background-color:#167df0;border-color:#167df0;color:#fff}.table td.is-success,.table th.is-success{background-color:#23d160;border-color:#23d160;color:#fff}.table td.is-warning,.table th.is-warning{background-color:#ffdd57;border-color:#ffdd57;color:rgba(0,0,0,.7)}.table td.is-danger,.table th.is-danger{background-color:#ff3860;border-color:#ff3860;color:#fff}.table td.is-narrow,.table th.is-narrow{white-space:nowrap;width:1%}.table td.is-selected,.table th.is-selected{background-color:#7957d5;color:#fff}.table td.is-selected a,.table td.is-selected strong,.table th.is-selected a,.table th.is-selected strong{color:currentColor}.table th{color:#363636}.table th:not([align]){text-align:left}.table tr.is-selected{background-color:#7957d5;color:#fff}.table tr.is-selected a,.table tr.is-selected strong{color:currentColor}.table tr.is-selected td,.table tr.is-selected th{border-color:#fff;color:currentColor}.table thead{background-color:transparent}.table thead td,.table thead th{border-width:0 0 2px;color:#363636}.table tfoot{background-color:transparent}.table tfoot td,.table tfoot th{border-width:2px 0 0;color:#363636}.table tbody{background-color:transparent}.table tbody tr:last-child td,.table tbody tr:last-child th{border-bottom-width:0}.table.is-bordered td,.table.is-bordered th{border-width:1px}.table.is-bordered tr:last-child td,.table.is-bordered tr:last-child th{border-bottom-width:1px}.table.is-fullwidth{width:100%}.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover,.table.is-hoverable tbody tr:not(.is-selected):hover{background-color:#fafafa}.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover:nth-child(2n){background-color:#f5f5f5}.table.is-narrow td,.table.is-narrow th{padding:.25em .5em}.table.is-striped tbody tr:not(.is-selected):nth-child(2n){background-color:#fafafa}.table-container{-webkit-overflow-scrolling:touch;overflow:auto;overflow-y:hidden;max-width:100%}.tags{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.tags .tag{margin-bottom:.5rem}.tags .tag:not(:last-child){margin-right:.5rem}.tags:last-child{margin-bottom:-.5rem}.tags:not(:last-child){margin-bottom:1rem}.tags.are-medium .tag:not(.is-normal):not(.is-large){font-size:1rem}.tags.are-large .tag:not(.is-normal):not(.is-medium){font-size:1.25rem}.tags.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.tags.is-centered .tag{margin-right:.25rem;margin-left:.25rem}.tags.is-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.tags.is-right .tag:not(:first-child){margin-left:.5rem}.tags.has-addons .tag,.tags.is-right .tag:not(:last-child){margin-right:0}.tags.has-addons .tag:not(:first-child){margin-left:0;border-bottom-left-radius:0;border-top-left-radius:0}.tags.has-addons .tag:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.tag:not(body){-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#f5f5f5;border-radius:4px;color:#4a4a4a;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:.75rem;height:2em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;line-height:1.5;padding-left:.75em;padding-right:.75em;white-space:nowrap}.tag:not(body) .delete{margin-left:.25rem;margin-right:-.375rem}.tag:not(body).is-white{background-color:#fff;color:#0a0a0a}.tag:not(body).is-black{background-color:#0a0a0a;color:#fff}.tag:not(body).is-light{background-color:#f5f5f5;color:#363636}.tag:not(body).is-dark{background-color:#363636;color:#f5f5f5}.tag:not(body).is-link,.tag:not(body).is-primary{background-color:#7957d5;color:#fff}.tag:not(body).is-info{background-color:#167df0;color:#fff}.tag:not(body).is-success{background-color:#23d160;color:#fff}.tag:not(body).is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.tag:not(body).is-danger{background-color:#ff3860;color:#fff}.tag:not(body).is-normal{font-size:.75rem}.tag:not(body).is-medium{font-size:1rem}.tag:not(body).is-large{font-size:1.25rem}.tag:not(body) .icon:first-child:not(:last-child){margin-left:-.375em;margin-right:.1875em}.tag:not(body) .icon:last-child:not(:first-child){margin-left:.1875em;margin-right:-.375em}.tag:not(body) .icon:first-child:last-child{margin-left:-.375em;margin-right:-.375em}.tag:not(body).is-delete{margin-left:1px;padding:0;position:relative;width:2em}.tag:not(body).is-delete:after,.tag:not(body).is-delete:before{background-color:currentColor;content:\"\";display:block;left:50%;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transform-origin:center center;transform-origin:center center}.tag:not(body).is-delete:before{height:1px;width:50%}.tag:not(body).is-delete:after{height:50%;width:1px}.tag:not(body).is-delete:focus,.tag:not(body).is-delete:hover{background-color:#e8e8e8}.tag:not(body).is-delete:active{background-color:#dbdbdb}.tag:not(body).is-rounded{border-radius:290486px}a.tag:hover{text-decoration:underline}.subtitle,.title{word-break:break-word}.subtitle em,.subtitle span,.title em,.title span{font-weight:inherit}.subtitle sub,.subtitle sup,.title sub,.title sup{font-size:.75em}.subtitle .tag,.title .tag{vertical-align:middle}.title{color:#363636;font-size:2rem;font-weight:600;line-height:1.125}.title strong{color:inherit;font-weight:inherit}.title+.highlight{margin-top:-.75rem}.title:not(.is-spaced)+.subtitle{margin-top:-1.25rem}.title.is-1{font-size:3rem}.title.is-2{font-size:2.5rem}.title.is-3{font-size:2rem}.title.is-4{font-size:1.5rem}.title.is-5{font-size:1.25rem}.title.is-6{font-size:1rem}.title.is-7{font-size:.75rem}.subtitle{color:#4a4a4a;font-size:1.25rem;font-weight:400;line-height:1.25}.subtitle strong{color:#363636;font-weight:600}.subtitle:not(.is-spaced)+.title{margin-top:-1.25rem}.subtitle.is-1{font-size:3rem}.subtitle.is-2{font-size:2.5rem}.subtitle.is-3{font-size:2rem}.subtitle.is-4{font-size:1.5rem}.subtitle.is-5{font-size:1.25rem}.subtitle.is-6{font-size:1rem}.subtitle.is-7{font-size:.75rem}.heading{display:block;font-size:11px;letter-spacing:1px;margin-bottom:5px;text-transform:uppercase}.highlight{font-weight:400;max-width:100%;overflow:hidden;padding:0}.highlight pre{overflow:auto;max-width:100%}.number{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#f5f5f5;border-radius:290486px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:1.25rem;height:2em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:1.5rem;min-width:2.5em;padding:.25rem .5rem;text-align:center;vertical-align:top}.input,.select select,.taginput .taginput-container.is-focusable,.textarea{background-color:#fff;border-color:#dbdbdb;border-radius:4px;color:#363636}.input::-moz-placeholder,.select select::-moz-placeholder,.taginput .taginput-container.is-focusable::-moz-placeholder,.textarea::-moz-placeholder{color:rgba(54,54,54,.3)}.input::-webkit-input-placeholder,.select select::-webkit-input-placeholder,.taginput .taginput-container.is-focusable::-webkit-input-placeholder,.textarea::-webkit-input-placeholder{color:rgba(54,54,54,.3)}.input:-moz-placeholder,.select select:-moz-placeholder,.taginput .taginput-container.is-focusable:-moz-placeholder,.textarea:-moz-placeholder{color:rgba(54,54,54,.3)}.input:-ms-input-placeholder,.select select:-ms-input-placeholder,.taginput .taginput-container.is-focusable:-ms-input-placeholder,.textarea:-ms-input-placeholder{color:rgba(54,54,54,.3)}.input:hover,.is-hovered.input,.is-hovered.textarea,.select select.is-hovered,.select select:hover,.taginput .is-hovered.taginput-container.is-focusable,.taginput .taginput-container.is-focusable:hover,.textarea:hover{border-color:#b5b5b5}.input:active,.input:focus,.is-active.input,.is-active.textarea,.is-focused.input,.is-focused.textarea,.select select.is-active,.select select.is-focused,.select select:active,.select select:focus,.taginput .is-active.taginput-container.is-focusable,.taginput .is-focused.taginput-container.is-focusable,.taginput .taginput-container.is-focusable:active,.taginput .taginput-container.is-focusable:focus,.textarea:active,.textarea:focus{border-color:#7957d5;-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.input[disabled],.select fieldset[disabled] select,.select select[disabled],.taginput .taginput-container.is-focusable[disabled],.taginput fieldset[disabled] .taginput-container.is-focusable,.textarea[disabled],fieldset[disabled] .input,fieldset[disabled] .select select,fieldset[disabled] .taginput .taginput-container.is-focusable,fieldset[disabled] .textarea{background-color:#f5f5f5;border-color:#f5f5f5;-webkit-box-shadow:none;box-shadow:none;color:#7a7a7a}.input[disabled]::-moz-placeholder,.select fieldset[disabled] select::-moz-placeholder,.select select[disabled]::-moz-placeholder,.taginput .taginput-container.is-focusable[disabled]::-moz-placeholder,.taginput fieldset[disabled] .taginput-container.is-focusable::-moz-placeholder,.textarea[disabled]::-moz-placeholder,fieldset[disabled] .input::-moz-placeholder,fieldset[disabled] .select select::-moz-placeholder,fieldset[disabled] .taginput .taginput-container.is-focusable::-moz-placeholder,fieldset[disabled] .textarea::-moz-placeholder{color:hsla(0,0%,47.8%,.3)}.input[disabled]::-webkit-input-placeholder,.select fieldset[disabled] select::-webkit-input-placeholder,.select select[disabled]::-webkit-input-placeholder,.taginput .taginput-container.is-focusable[disabled]::-webkit-input-placeholder,.taginput fieldset[disabled] .taginput-container.is-focusable::-webkit-input-placeholder,.textarea[disabled]::-webkit-input-placeholder,fieldset[disabled] .input::-webkit-input-placeholder,fieldset[disabled] .select select::-webkit-input-placeholder,fieldset[disabled] .taginput .taginput-container.is-focusable::-webkit-input-placeholder,fieldset[disabled] .textarea::-webkit-input-placeholder{color:hsla(0,0%,47.8%,.3)}.input[disabled]:-moz-placeholder,.select fieldset[disabled] select:-moz-placeholder,.select select[disabled]:-moz-placeholder,.taginput .taginput-container.is-focusable[disabled]:-moz-placeholder,.taginput fieldset[disabled] .taginput-container.is-focusable:-moz-placeholder,.textarea[disabled]:-moz-placeholder,fieldset[disabled] .input:-moz-placeholder,fieldset[disabled] .select select:-moz-placeholder,fieldset[disabled] .taginput .taginput-container.is-focusable:-moz-placeholder,fieldset[disabled] .textarea:-moz-placeholder{color:hsla(0,0%,47.8%,.3)}.input[disabled]:-ms-input-placeholder,.select fieldset[disabled] select:-ms-input-placeholder,.select select[disabled]:-ms-input-placeholder,.taginput .taginput-container.is-focusable[disabled]:-ms-input-placeholder,.taginput fieldset[disabled] .taginput-container.is-focusable:-ms-input-placeholder,.textarea[disabled]:-ms-input-placeholder,fieldset[disabled] .input:-ms-input-placeholder,fieldset[disabled] .select select:-ms-input-placeholder,fieldset[disabled] .taginput .taginput-container.is-focusable:-ms-input-placeholder,fieldset[disabled] .textarea:-ms-input-placeholder{color:hsla(0,0%,47.8%,.3)}.input,.taginput .taginput-container.is-focusable,.textarea{-webkit-box-shadow:inset 0 1px 2px rgba(10,10,10,.1);box-shadow:inset 0 1px 2px rgba(10,10,10,.1);max-width:100%;width:100%}.input[readonly],.taginput .taginput-container.is-focusable[readonly],.textarea[readonly]{-webkit-box-shadow:none;box-shadow:none}.is-white.input,.is-white.textarea,.taginput .is-white.taginput-container.is-focusable{border-color:#fff}.is-white.input:active,.is-white.input:focus,.is-white.is-active.input,.is-white.is-active.textarea,.is-white.is-focused.input,.is-white.is-focused.textarea,.is-white.textarea:active,.is-white.textarea:focus,.taginput .is-white.is-active.taginput-container.is-focusable,.taginput .is-white.is-focused.taginput-container.is-focusable,.taginput .is-white.taginput-container.is-focusable:active,.taginput .is-white.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em hsla(0,0%,100%,.25);box-shadow:0 0 0 .125em hsla(0,0%,100%,.25)}.is-black.input,.is-black.textarea,.taginput .is-black.taginput-container.is-focusable{border-color:#0a0a0a}.is-black.input:active,.is-black.input:focus,.is-black.is-active.input,.is-black.is-active.textarea,.is-black.is-focused.input,.is-black.is-focused.textarea,.is-black.textarea:active,.is-black.textarea:focus,.taginput .is-black.is-active.taginput-container.is-focusable,.taginput .is-black.is-focused.taginput-container.is-focusable,.taginput .is-black.taginput-container.is-focusable:active,.taginput .is-black.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em rgba(10,10,10,.25);box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.is-light.input,.is-light.textarea,.taginput .is-light.taginput-container.is-focusable{border-color:#f5f5f5}.is-light.input:active,.is-light.input:focus,.is-light.is-active.input,.is-light.is-active.textarea,.is-light.is-focused.input,.is-light.is-focused.textarea,.is-light.textarea:active,.is-light.textarea:focus,.taginput .is-light.is-active.taginput-container.is-focusable,.taginput .is-light.is-focused.taginput-container.is-focusable,.taginput .is-light.taginput-container.is-focusable:active,.taginput .is-light.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em hsla(0,0%,96.1%,.25);box-shadow:0 0 0 .125em hsla(0,0%,96.1%,.25)}.is-dark.input,.is-dark.textarea,.taginput .is-dark.taginput-container.is-focusable{border-color:#363636}.is-dark.input:active,.is-dark.input:focus,.is-dark.is-active.input,.is-dark.is-active.textarea,.is-dark.is-focused.input,.is-dark.is-focused.textarea,.is-dark.textarea:active,.is-dark.textarea:focus,.taginput .is-dark.is-active.taginput-container.is-focusable,.taginput .is-dark.is-focused.taginput-container.is-focusable,.taginput .is-dark.taginput-container.is-focusable:active,.taginput .is-dark.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em rgba(54,54,54,.25);box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.is-primary.input,.is-primary.textarea,.taginput .is-primary.taginput-container.is-focusable{border-color:#7957d5}.is-primary.input:active,.is-primary.input:focus,.is-primary.is-active.input,.is-primary.is-active.textarea,.is-primary.is-focused.input,.is-primary.is-focused.textarea,.is-primary.textarea:active,.is-primary.textarea:focus,.taginput .is-primary.is-active.taginput-container.is-focusable,.taginput .is-primary.is-focused.taginput-container.is-focusable,.taginput .is-primary.taginput-container.is-focusable:active,.taginput .is-primary.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.is-link.input,.is-link.textarea,.taginput .is-link.taginput-container.is-focusable{border-color:#7957d5}.is-link.input:active,.is-link.input:focus,.is-link.is-active.input,.is-link.is-active.textarea,.is-link.is-focused.input,.is-link.is-focused.textarea,.is-link.textarea:active,.is-link.textarea:focus,.taginput .is-link.is-active.taginput-container.is-focusable,.taginput .is-link.is-focused.taginput-container.is-focusable,.taginput .is-link.taginput-container.is-focusable:active,.taginput .is-link.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.is-info.input,.is-info.textarea,.taginput .is-info.taginput-container.is-focusable{border-color:#167df0}.is-info.input:active,.is-info.input:focus,.is-info.is-active.input,.is-info.is-active.textarea,.is-info.is-focused.input,.is-info.is-focused.textarea,.is-info.textarea:active,.is-info.textarea:focus,.taginput .is-info.is-active.taginput-container.is-focusable,.taginput .is-info.is-focused.taginput-container.is-focusable,.taginput .is-info.taginput-container.is-focusable:active,.taginput .is-info.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em rgba(22,125,240,.25);box-shadow:0 0 0 .125em rgba(22,125,240,.25)}.is-success.input,.is-success.textarea,.taginput .is-success.taginput-container.is-focusable{border-color:#23d160}.is-success.input:active,.is-success.input:focus,.is-success.is-active.input,.is-success.is-active.textarea,.is-success.is-focused.input,.is-success.is-focused.textarea,.is-success.textarea:active,.is-success.textarea:focus,.taginput .is-success.is-active.taginput-container.is-focusable,.taginput .is-success.is-focused.taginput-container.is-focusable,.taginput .is-success.taginput-container.is-focusable:active,.taginput .is-success.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em rgba(35,209,96,.25);box-shadow:0 0 0 .125em rgba(35,209,96,.25)}.is-warning.input,.is-warning.textarea,.taginput .is-warning.taginput-container.is-focusable{border-color:#ffdd57}.is-warning.input:active,.is-warning.input:focus,.is-warning.is-active.input,.is-warning.is-active.textarea,.is-warning.is-focused.input,.is-warning.is-focused.textarea,.is-warning.textarea:active,.is-warning.textarea:focus,.taginput .is-warning.is-active.taginput-container.is-focusable,.taginput .is-warning.is-focused.taginput-container.is-focusable,.taginput .is-warning.taginput-container.is-focusable:active,.taginput .is-warning.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em rgba(255,221,87,.25);box-shadow:0 0 0 .125em rgba(255,221,87,.25)}.is-danger.input,.is-danger.textarea,.taginput .is-danger.taginput-container.is-focusable{border-color:#ff3860}.is-danger.input:active,.is-danger.input:focus,.is-danger.is-active.input,.is-danger.is-active.textarea,.is-danger.is-focused.input,.is-danger.is-focused.textarea,.is-danger.textarea:active,.is-danger.textarea:focus,.taginput .is-danger.is-active.taginput-container.is-focusable,.taginput .is-danger.is-focused.taginput-container.is-focusable,.taginput .is-danger.taginput-container.is-focusable:active,.taginput .is-danger.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em rgba(255,56,96,.25);box-shadow:0 0 0 .125em rgba(255,56,96,.25)}.is-small.input,.is-small.textarea,.taginput .is-small.taginput-container.is-focusable{border-radius:2px;font-size:.75rem}.is-medium.input,.is-medium.textarea,.taginput .is-medium.taginput-container.is-focusable{font-size:1.25rem}.is-large.input,.is-large.textarea,.taginput .is-large.taginput-container.is-focusable{font-size:1.5rem}.is-fullwidth.input,.is-fullwidth.textarea,.taginput .is-fullwidth.taginput-container.is-focusable{display:block;width:100%}.is-inline.input,.is-inline.textarea,.taginput .is-inline.taginput-container.is-focusable{display:inline;width:auto}.input.is-rounded,.taginput .is-rounded.taginput-container.is-focusable{border-radius:290486px;padding-left:1em;padding-right:1em}.input.is-static,.taginput .is-static.taginput-container.is-focusable{background-color:transparent;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;padding-left:0;padding-right:0}.textarea{display:block;max-width:100%;min-width:100%;padding:.625em;resize:vertical}.textarea:not([rows]){max-height:600px;min-height:120px}.textarea[rows]{height:auto}.textarea.has-fixed-size{resize:none}.checkbox,.radio{cursor:pointer;display:inline-block;line-height:1.25;position:relative}.checkbox input,.radio input{cursor:pointer}.checkbox:hover,.radio:hover{color:#363636}.checkbox[disabled],.radio[disabled],fieldset[disabled] .checkbox,fieldset[disabled] .radio{color:#7a7a7a;cursor:not-allowed}.radio+.radio{margin-left:.5em}.select{display:inline-block;max-width:100%;position:relative;vertical-align:top}.select:not(.is-multiple){height:2.25em}.select:not(.is-multiple):not(.is-loading):after{border-color:#7957d5;right:1.125em;z-index:4}.select.is-rounded select{border-radius:290486px;padding-left:1em}.select select{cursor:pointer;display:block;font-size:1em;max-width:100%;outline:none}.select select::-ms-expand{display:none}.select select[disabled]:hover,fieldset[disabled] .select select:hover{border-color:#f5f5f5}.select select:not([multiple]){padding-right:2.5em}.select select[multiple]{height:auto;padding:0}.select select[multiple] option{padding:.5em 1em}.select:not(.is-multiple):not(.is-loading):hover:after{border-color:#363636}.select.is-white:not(:hover):after,.select.is-white select{border-color:#fff}.select.is-white select.is-hovered,.select.is-white select:hover{border-color:#f2f2f2}.select.is-white select.is-active,.select.is-white select.is-focused,.select.is-white select:active,.select.is-white select:focus{-webkit-box-shadow:0 0 0 .125em hsla(0,0%,100%,.25);box-shadow:0 0 0 .125em hsla(0,0%,100%,.25)}.select.is-black:not(:hover):after,.select.is-black select{border-color:#0a0a0a}.select.is-black select.is-hovered,.select.is-black select:hover{border-color:#000}.select.is-black select.is-active,.select.is-black select.is-focused,.select.is-black select:active,.select.is-black select:focus{-webkit-box-shadow:0 0 0 .125em rgba(10,10,10,.25);box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.select.is-light:not(:hover):after,.select.is-light select{border-color:#f5f5f5}.select.is-light select.is-hovered,.select.is-light select:hover{border-color:#e8e8e8}.select.is-light select.is-active,.select.is-light select.is-focused,.select.is-light select:active,.select.is-light select:focus{-webkit-box-shadow:0 0 0 .125em hsla(0,0%,96.1%,.25);box-shadow:0 0 0 .125em hsla(0,0%,96.1%,.25)}.select.is-dark:not(:hover):after,.select.is-dark select{border-color:#363636}.select.is-dark select.is-hovered,.select.is-dark select:hover{border-color:#292929}.select.is-dark select.is-active,.select.is-dark select.is-focused,.select.is-dark select:active,.select.is-dark select:focus{-webkit-box-shadow:0 0 0 .125em rgba(54,54,54,.25);box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.select.is-primary:not(:hover):after,.select.is-primary select{border-color:#7957d5}.select.is-primary select.is-hovered,.select.is-primary select:hover{border-color:#6943d0}.select.is-primary select.is-active,.select.is-primary select.is-focused,.select.is-primary select:active,.select.is-primary select:focus{-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.select.is-link:not(:hover):after,.select.is-link select{border-color:#7957d5}.select.is-link select.is-hovered,.select.is-link select:hover{border-color:#6943d0}.select.is-link select.is-active,.select.is-link select.is-focused,.select.is-link select:active,.select.is-link select:focus{-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.select.is-info:not(:hover):after,.select.is-info select{border-color:#167df0}.select.is-info select.is-hovered,.select.is-info select:hover{border-color:#0e71de}.select.is-info select.is-active,.select.is-info select.is-focused,.select.is-info select:active,.select.is-info select:focus{-webkit-box-shadow:0 0 0 .125em rgba(22,125,240,.25);box-shadow:0 0 0 .125em rgba(22,125,240,.25)}.select.is-success:not(:hover):after,.select.is-success select{border-color:#23d160}.select.is-success select.is-hovered,.select.is-success select:hover{border-color:#20bc56}.select.is-success select.is-active,.select.is-success select.is-focused,.select.is-success select:active,.select.is-success select:focus{-webkit-box-shadow:0 0 0 .125em rgba(35,209,96,.25);box-shadow:0 0 0 .125em rgba(35,209,96,.25)}.select.is-warning:not(:hover):after,.select.is-warning select{border-color:#ffdd57}.select.is-warning select.is-hovered,.select.is-warning select:hover{border-color:#ffd83d}.select.is-warning select.is-active,.select.is-warning select.is-focused,.select.is-warning select:active,.select.is-warning select:focus{-webkit-box-shadow:0 0 0 .125em rgba(255,221,87,.25);box-shadow:0 0 0 .125em rgba(255,221,87,.25)}.select.is-danger:not(:hover):after,.select.is-danger select{border-color:#ff3860}.select.is-danger select.is-hovered,.select.is-danger select:hover{border-color:#ff1f4b}.select.is-danger select.is-active,.select.is-danger select.is-focused,.select.is-danger select:active,.select.is-danger select:focus{-webkit-box-shadow:0 0 0 .125em rgba(255,56,96,.25);box-shadow:0 0 0 .125em rgba(255,56,96,.25)}.select.is-small{border-radius:2px;font-size:.75rem}.select.is-medium{font-size:1.25rem}.select.is-large{font-size:1.5rem}.select.is-disabled:after{border-color:#7a7a7a}.select.is-fullwidth,.select.is-fullwidth select{width:100%}.select.is-loading:after{margin-top:0;position:absolute;right:.625em;top:.625em;-webkit-transform:none;transform:none}.select.is-loading.is-small:after{font-size:.75rem}.select.is-loading.is-medium:after{font-size:1.25rem}.select.is-loading.is-large:after{font-size:1.5rem}.file{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;position:relative}.file.is-white .file-cta{background-color:#fff;border-color:transparent;color:#0a0a0a}.file.is-white.is-hovered .file-cta,.file.is-white:hover .file-cta{background-color:#f9f9f9;border-color:transparent;color:#0a0a0a}.file.is-white.is-focused .file-cta,.file.is-white:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em hsla(0,0%,100%,.25);box-shadow:0 0 .5em hsla(0,0%,100%,.25);color:#0a0a0a}.file.is-white.is-active .file-cta,.file.is-white:active .file-cta{background-color:#f2f2f2;border-color:transparent;color:#0a0a0a}.file.is-black .file-cta{background-color:#0a0a0a;border-color:transparent;color:#fff}.file.is-black.is-hovered .file-cta,.file.is-black:hover .file-cta{background-color:#040404;border-color:transparent;color:#fff}.file.is-black.is-focused .file-cta,.file.is-black:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(10,10,10,.25);box-shadow:0 0 .5em rgba(10,10,10,.25);color:#fff}.file.is-black.is-active .file-cta,.file.is-black:active .file-cta{background-color:#000;border-color:transparent;color:#fff}.file.is-light .file-cta{background-color:#f5f5f5;border-color:transparent;color:#363636}.file.is-light.is-hovered .file-cta,.file.is-light:hover .file-cta{background-color:#eee;border-color:transparent;color:#363636}.file.is-light.is-focused .file-cta,.file.is-light:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em hsla(0,0%,96.1%,.25);box-shadow:0 0 .5em hsla(0,0%,96.1%,.25);color:#363636}.file.is-light.is-active .file-cta,.file.is-light:active .file-cta{background-color:#e8e8e8;border-color:transparent;color:#363636}.file.is-dark .file-cta{background-color:#363636;border-color:transparent;color:#f5f5f5}.file.is-dark.is-hovered .file-cta,.file.is-dark:hover .file-cta{background-color:#2f2f2f;border-color:transparent;color:#f5f5f5}.file.is-dark.is-focused .file-cta,.file.is-dark:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(54,54,54,.25);box-shadow:0 0 .5em rgba(54,54,54,.25);color:#f5f5f5}.file.is-dark.is-active .file-cta,.file.is-dark:active .file-cta{background-color:#292929;border-color:transparent;color:#f5f5f5}.file.is-primary .file-cta{background-color:#7957d5;border-color:transparent;color:#fff}.file.is-primary.is-hovered .file-cta,.file.is-primary:hover .file-cta{background-color:#714dd2;border-color:transparent;color:#fff}.file.is-primary.is-focused .file-cta,.file.is-primary:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(121,87,213,.25);box-shadow:0 0 .5em rgba(121,87,213,.25);color:#fff}.file.is-primary.is-active .file-cta,.file.is-primary:active .file-cta{background-color:#6943d0;border-color:transparent;color:#fff}.file.is-link .file-cta{background-color:#7957d5;border-color:transparent;color:#fff}.file.is-link.is-hovered .file-cta,.file.is-link:hover .file-cta{background-color:#714dd2;border-color:transparent;color:#fff}.file.is-link.is-focused .file-cta,.file.is-link:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(121,87,213,.25);box-shadow:0 0 .5em rgba(121,87,213,.25);color:#fff}.file.is-link.is-active .file-cta,.file.is-link:active .file-cta{background-color:#6943d0;border-color:transparent;color:#fff}.file.is-info .file-cta{background-color:#167df0;border-color:transparent;color:#fff}.file.is-info.is-hovered .file-cta,.file.is-info:hover .file-cta{background-color:#0f77ea;border-color:transparent;color:#fff}.file.is-info.is-focused .file-cta,.file.is-info:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(22,125,240,.25);box-shadow:0 0 .5em rgba(22,125,240,.25);color:#fff}.file.is-info.is-active .file-cta,.file.is-info:active .file-cta{background-color:#0e71de;border-color:transparent;color:#fff}.file.is-success .file-cta{background-color:#23d160;border-color:transparent;color:#fff}.file.is-success.is-hovered .file-cta,.file.is-success:hover .file-cta{background-color:#22c65b;border-color:transparent;color:#fff}.file.is-success.is-focused .file-cta,.file.is-success:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(35,209,96,.25);box-shadow:0 0 .5em rgba(35,209,96,.25);color:#fff}.file.is-success.is-active .file-cta,.file.is-success:active .file-cta{background-color:#20bc56;border-color:transparent;color:#fff}.file.is-warning .file-cta{background-color:#ffdd57;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-warning.is-hovered .file-cta,.file.is-warning:hover .file-cta{background-color:#ffdb4a;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-warning.is-focused .file-cta,.file.is-warning:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(255,221,87,.25);box-shadow:0 0 .5em rgba(255,221,87,.25);color:rgba(0,0,0,.7)}.file.is-warning.is-active .file-cta,.file.is-warning:active .file-cta{background-color:#ffd83d;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-danger .file-cta{background-color:#ff3860;border-color:transparent;color:#fff}.file.is-danger.is-hovered .file-cta,.file.is-danger:hover .file-cta{background-color:#ff2b56;border-color:transparent;color:#fff}.file.is-danger.is-focused .file-cta,.file.is-danger:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(255,56,96,.25);box-shadow:0 0 .5em rgba(255,56,96,.25);color:#fff}.file.is-danger.is-active .file-cta,.file.is-danger:active .file-cta{background-color:#ff1f4b;border-color:transparent;color:#fff}.file.is-small{font-size:.75rem}.file.is-medium{font-size:1.25rem}.file.is-medium .file-icon .fa{font-size:21px}.file.is-large{font-size:1.5rem}.file.is-large .file-icon .fa{font-size:28px}.file.has-name .file-cta{border-bottom-right-radius:0;border-top-right-radius:0}.file.has-name .file-name{border-bottom-left-radius:0;border-top-left-radius:0}.file.has-name.is-empty .file-cta{border-radius:4px}.file.has-name.is-empty .file-name{display:none}.file.is-boxed .file-cta,.file.is-boxed .file-label{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.file.is-boxed .file-cta{height:auto;padding:1em 3em}.file.is-boxed .file-name{border-width:0 1px 1px}.file.is-boxed .file-icon{height:1.5em;width:1.5em}.file.is-boxed .file-icon .fa{font-size:21px}.file.is-boxed.is-small .file-icon .fa{font-size:14px}.file.is-boxed.is-medium .file-icon .fa{font-size:28px}.file.is-boxed.is-large .file-icon .fa{font-size:35px}.file.is-boxed.has-name .file-cta{border-radius:4px 4px 0 0}.file.is-boxed.has-name .file-name{border-radius:0 0 4px 4px;border-width:0 1px 1px}.file.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.file.is-fullwidth .file-label{width:100%}.file.is-fullwidth .file-name{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:none}.file.is-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.file.is-right .file-cta{border-radius:0 4px 4px 0}.file.is-right .file-name{border-radius:4px 0 0 4px;border-width:1px 0 1px 1px;-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.file-label{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;cursor:pointer;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;overflow:hidden;position:relative}.file-label:hover .file-cta{background-color:#eee;color:#363636}.file-label:hover .file-name{border-color:#d5d5d5}.file-label:active .file-cta{background-color:#e8e8e8;color:#363636}.file-label:active .file-name{border-color:#cfcfcf}.file-input{height:100%;left:0;opacity:0;outline:none;position:absolute;top:0;width:100%}.file-cta,.file-name{border-color:#dbdbdb;border-radius:4px;font-size:1em;padding-left:1em;padding-right:1em;white-space:nowrap}.file-cta{background-color:#f5f5f5;color:#4a4a4a}.file-name{border:1px solid #dbdbdb;border-left-width:0;display:block;max-width:16em;overflow:hidden;text-align:left;text-overflow:ellipsis}.file-icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;height:1em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:.5em;width:1em}.file-icon .fa{font-size:14px}.label{color:#363636;display:block;font-size:1rem;font-weight:600}.label:not(:last-child){margin-bottom:.5em}.label.is-small{font-size:.75rem}.label.is-medium{font-size:1.25rem}.label.is-large{font-size:1.5rem}.help{display:block;font-size:.75rem;margin-top:.25rem}.help.is-white{color:#fff}.help.is-black{color:#0a0a0a}.help.is-light{color:#f5f5f5}.help.is-dark{color:#363636}.help.is-link,.help.is-primary{color:#7957d5}.help.is-info{color:#167df0}.help.is-success{color:#23d160}.help.is-warning{color:#ffdd57}.help.is-danger{color:#ff3860}.field:not(:last-child){margin-bottom:.75rem}.field.has-addons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.field.has-addons .control:not(:last-child){margin-right:-1px}.field.has-addons .control:not(:first-child):not(:last-child) .button,.field.has-addons .control:not(:first-child):not(:last-child) .input,.field.has-addons .control:not(:first-child):not(:last-child) .select select,.field.has-addons .control:not(:first-child):not(:last-child) .taginput .taginput-container.is-focusable,.taginput .field.has-addons .control:not(:first-child):not(:last-child) .taginput-container.is-focusable{border-radius:0}.field.has-addons .control:first-child:not(:only-child) .button,.field.has-addons .control:first-child:not(:only-child) .input,.field.has-addons .control:first-child:not(:only-child) .select select,.field.has-addons .control:first-child:not(:only-child) .taginput .taginput-container.is-focusable,.taginput .field.has-addons .control:first-child:not(:only-child) .taginput-container.is-focusable{border-bottom-right-radius:0;border-top-right-radius:0}.field.has-addons .control:last-child:not(:only-child) .button,.field.has-addons .control:last-child:not(:only-child) .input,.field.has-addons .control:last-child:not(:only-child) .select select,.field.has-addons .control:last-child:not(:only-child) .taginput .taginput-container.is-focusable,.taginput .field.has-addons .control:last-child:not(:only-child) .taginput-container.is-focusable{border-bottom-left-radius:0;border-top-left-radius:0}.field.has-addons .control .button:not([disabled]).is-hovered,.field.has-addons .control .button:not([disabled]):hover,.field.has-addons .control .input:not([disabled]).is-hovered,.field.has-addons .control .input:not([disabled]):hover,.field.has-addons .control .select select:not([disabled]).is-hovered,.field.has-addons .control .select select:not([disabled]):hover,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]).is-hovered,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]):hover,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]).is-hovered,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]):hover{z-index:2}.field.has-addons .control .button:not([disabled]).is-active,.field.has-addons .control .button:not([disabled]).is-focused,.field.has-addons .control .button:not([disabled]):active,.field.has-addons .control .button:not([disabled]):focus,.field.has-addons .control .input:not([disabled]).is-active,.field.has-addons .control .input:not([disabled]).is-focused,.field.has-addons .control .input:not([disabled]):active,.field.has-addons .control .input:not([disabled]):focus,.field.has-addons .control .select select:not([disabled]).is-active,.field.has-addons .control .select select:not([disabled]).is-focused,.field.has-addons .control .select select:not([disabled]):active,.field.has-addons .control .select select:not([disabled]):focus,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]).is-active,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]).is-focused,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]):active,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]):focus,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]).is-active,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]).is-focused,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]):active,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]):focus{z-index:3}.field.has-addons .control .button:not([disabled]).is-active:hover,.field.has-addons .control .button:not([disabled]).is-focused:hover,.field.has-addons .control .button:not([disabled]):active:hover,.field.has-addons .control .button:not([disabled]):focus:hover,.field.has-addons .control .input:not([disabled]).is-active:hover,.field.has-addons .control .input:not([disabled]).is-focused:hover,.field.has-addons .control .input:not([disabled]):active:hover,.field.has-addons .control .input:not([disabled]):focus:hover,.field.has-addons .control .select select:not([disabled]).is-active:hover,.field.has-addons .control .select select:not([disabled]).is-focused:hover,.field.has-addons .control .select select:not([disabled]):active:hover,.field.has-addons .control .select select:not([disabled]):focus:hover,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]).is-active:hover,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]).is-focused:hover,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]):active:hover,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]):focus:hover,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]).is-active:hover,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]).is-focused:hover,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]):active:hover,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]):focus:hover{z-index:4}.field.has-addons .control.is-expanded{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.field.has-addons.has-addons-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.field.has-addons.has-addons-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.field.has-addons.has-addons-fullwidth .control{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0}.field.is-grouped{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.field.is-grouped>.control{-ms-flex-negative:0;flex-shrink:0}.field.is-grouped>.control:not(:last-child){margin-bottom:0;margin-right:.75rem}.field.is-grouped>.control.is-expanded{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.field.is-grouped.is-grouped-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.field.is-grouped.is-grouped-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.field.is-grouped.is-grouped-multiline{-ms-flex-wrap:wrap;flex-wrap:wrap}.field.is-grouped.is-grouped-multiline>.control:last-child,.field.is-grouped.is-grouped-multiline>.control:not(:last-child){margin-bottom:.75rem}.field.is-grouped.is-grouped-multiline:last-child{margin-bottom:-.75rem}.field.is-grouped.is-grouped-multiline:not(:last-child){margin-bottom:0}@media print,screen and (min-width:769px){.field.is-horizontal{display:-webkit-box;display:-ms-flexbox;display:flex}}.field-label .label{font-size:inherit}@media screen and (max-width:768px){.field-label{margin-bottom:.5rem}}@media print,screen and (min-width:769px){.field-label{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;margin-right:1.5rem;text-align:right}.field-label.is-small{font-size:.75rem;padding-top:.375em}.field-label.is-normal{padding-top:.375em}.field-label.is-medium{font-size:1.25rem;padding-top:.375em}.field-label.is-large{font-size:1.5rem;padding-top:.375em}}.field-body .field .field{margin-bottom:0}@media print,screen and (min-width:769px){.field-body{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:5;-ms-flex-positive:5;flex-grow:5;-ms-flex-negative:1;flex-shrink:1}.field-body .field{margin-bottom:0}.field-body>.field{-ms-flex-negative:1;flex-shrink:1}.field-body>.field:not(.is-narrow){-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.field-body>.field:not(:last-child){margin-right:.75rem}}.control{-webkit-box-sizing:border-box;box-sizing:border-box;clear:both;font-size:1rem;position:relative;text-align:left}.control.has-icons-left .input:focus~.icon,.control.has-icons-left .select:focus~.icon,.control.has-icons-left .taginput .taginput-container.is-focusable:focus~.icon,.control.has-icons-right .input:focus~.icon,.control.has-icons-right .select:focus~.icon,.control.has-icons-right .taginput .taginput-container.is-focusable:focus~.icon,.taginput .control.has-icons-left .taginput-container.is-focusable:focus~.icon,.taginput .control.has-icons-right .taginput-container.is-focusable:focus~.icon{color:#7a7a7a}.control.has-icons-left .input.is-small~.icon,.control.has-icons-left .select.is-small~.icon,.control.has-icons-left .taginput .is-small.taginput-container.is-focusable~.icon,.control.has-icons-right .input.is-small~.icon,.control.has-icons-right .select.is-small~.icon,.control.has-icons-right .taginput .is-small.taginput-container.is-focusable~.icon,.taginput .control.has-icons-left .is-small.taginput-container.is-focusable~.icon,.taginput .control.has-icons-right .is-small.taginput-container.is-focusable~.icon{font-size:.75rem}.control.has-icons-left .input.is-medium~.icon,.control.has-icons-left .select.is-medium~.icon,.control.has-icons-left .taginput .is-medium.taginput-container.is-focusable~.icon,.control.has-icons-right .input.is-medium~.icon,.control.has-icons-right .select.is-medium~.icon,.control.has-icons-right .taginput .is-medium.taginput-container.is-focusable~.icon,.taginput .control.has-icons-left .is-medium.taginput-container.is-focusable~.icon,.taginput .control.has-icons-right .is-medium.taginput-container.is-focusable~.icon{font-size:1.25rem}.control.has-icons-left .input.is-large~.icon,.control.has-icons-left .select.is-large~.icon,.control.has-icons-left .taginput .is-large.taginput-container.is-focusable~.icon,.control.has-icons-right .input.is-large~.icon,.control.has-icons-right .select.is-large~.icon,.control.has-icons-right .taginput .is-large.taginput-container.is-focusable~.icon,.taginput .control.has-icons-left .is-large.taginput-container.is-focusable~.icon,.taginput .control.has-icons-right .is-large.taginput-container.is-focusable~.icon{font-size:1.5rem}.control.has-icons-left .icon,.control.has-icons-right .icon{color:#dbdbdb;height:2.25em;pointer-events:none;position:absolute;top:0;width:2.25em;z-index:4}.control.has-icons-left .input,.control.has-icons-left .select select,.control.has-icons-left .taginput .taginput-container.is-focusable,.taginput .control.has-icons-left .taginput-container.is-focusable{padding-left:2.25em}.control.has-icons-left .icon.is-left{left:0}.control.has-icons-right .input,.control.has-icons-right .select select,.control.has-icons-right .taginput .taginput-container.is-focusable,.taginput .control.has-icons-right .taginput-container.is-focusable{padding-right:2.25em}.control.has-icons-right .icon.is-right{right:0}.control.is-loading:after{position:absolute!important;right:.625em;top:.625em;z-index:4}.control.is-loading.is-small:after{font-size:.75rem}.control.is-loading.is-medium:after{font-size:1.25rem}.control.is-loading.is-large:after{font-size:1.5rem}.breadcrumb{font-size:1rem;white-space:nowrap}.breadcrumb a{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#7957d5;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 .75em}.breadcrumb a:hover{color:#363636}.breadcrumb li{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.breadcrumb li:first-child a{padding-left:0}.breadcrumb li.is-active a{color:#363636;cursor:default;pointer-events:none}.breadcrumb li+li:before{color:#b5b5b5;content:\"\\0002f\"}.breadcrumb ol,.breadcrumb ul{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.breadcrumb .icon:first-child{margin-right:.5em}.breadcrumb .icon:last-child{margin-left:.5em}.breadcrumb.is-centered ol,.breadcrumb.is-centered ul{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.breadcrumb.is-right ol,.breadcrumb.is-right ul{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.breadcrumb.is-small{font-size:.75rem}.breadcrumb.is-medium{font-size:1.25rem}.breadcrumb.is-large{font-size:1.5rem}.breadcrumb.has-arrow-separator li+li:before{content:\"\\02192\"}.breadcrumb.has-bullet-separator li+li:before{content:\"\\02022\"}.breadcrumb.has-dot-separator li+li:before{content:\"\\000b7\"}.breadcrumb.has-succeeds-separator li+li:before{content:\"\\0227B\"}.card{background-color:#fff;-webkit-box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);color:#4a4a4a;max-width:100%;position:relative}.card-header{background-color:transparent;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-shadow:0 1px 2px rgba(10,10,10,.1);box-shadow:0 1px 2px rgba(10,10,10,.1)}.card-header,.card-header-title{display:-webkit-box;display:-ms-flexbox;display:flex}.card-header-title{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#363636;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;font-weight:700;padding:.75rem}.card-header-icon,.card-header-title.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.card-header-icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;padding:.75rem}.card-image{display:block;position:relative}.card-content{background-color:transparent;padding:1.5rem}.card-footer{background-color:transparent;border-top:1px solid #dbdbdb;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.card-footer,.card-footer-item{display:-webkit-box;display:-ms-flexbox;display:flex}.card-footer-item{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:.75rem}.card-footer-item:not(:last-child){border-right:1px solid #dbdbdb}.card .media:not(:last-child){margin-bottom:1.5rem}.dropdown{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;position:relative;vertical-align:top}.dropdown.is-active .dropdown-menu,.dropdown.is-hoverable:hover .dropdown-menu{display:block}.dropdown.is-right .dropdown-menu{left:auto;right:0}.dropdown.is-up .dropdown-menu{bottom:100%;padding-bottom:4px;padding-top:0;top:auto}.dropdown-menu{display:none;left:0;min-width:12rem;padding-top:4px;position:absolute;top:100%;z-index:20}.dropdown-content{background-color:#fff;border-radius:4px;-webkit-box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);padding-bottom:.5rem;padding-top:.5rem}.dropdown-item,.dropdown .dropdown-menu .has-link a{color:#4a4a4a;display:block;font-size:.875rem;line-height:1.5;padding:.375rem 1rem;position:relative}.dropdown .dropdown-menu .has-link a,a.dropdown-item,button.dropdown-item{padding-right:3rem;text-align:left;white-space:nowrap;width:100%}.dropdown .dropdown-menu .has-link a:hover,a.dropdown-item:hover,button.dropdown-item:hover{background-color:#f5f5f5;color:#0a0a0a}.dropdown .dropdown-menu .has-link a.is-active,a.dropdown-item.is-active,button.dropdown-item.is-active{background-color:#7957d5;color:#fff}.dropdown-divider{background-color:#dbdbdb;border:none;display:block;height:1px;margin:.5rem 0}.level{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.level code{border-radius:4px}.level img{display:inline-block;vertical-align:top}.level.is-mobile,.level.is-mobile .level-left,.level.is-mobile .level-right{display:-webkit-box;display:-ms-flexbox;display:flex}.level.is-mobile .level-left+.level-right{margin-top:0}.level.is-mobile .level-item:not(:last-child){margin-bottom:0;margin-right:.75rem}.level.is-mobile .level-item:not(.is-narrow){-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}@media print,screen and (min-width:769px){.level{display:-webkit-box;display:-ms-flexbox;display:flex}.level>.level-item:not(.is-narrow){-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}}.level-item{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.level-item .subtitle,.level-item .title{margin-bottom:0}@media screen and (max-width:768px){.level-item:not(:last-child){margin-bottom:.75rem}}.level-left,.level-right{-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0}.level-left .level-item.is-flexible,.level-right .level-item.is-flexible{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}@media print,screen and (min-width:769px){.level-left .level-item:not(:last-child),.level-right .level-item:not(:last-child){margin-right:.75rem}}.level-left{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}@media screen and (max-width:768px){.level-left+.level-right{margin-top:1.5rem}}@media print,screen and (min-width:769px){.level-left{display:-webkit-box;display:-ms-flexbox;display:flex}}.level-right{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}@media print,screen and (min-width:769px){.level-right{display:-webkit-box;display:-ms-flexbox;display:flex}}.list{background-color:#fff;border-radius:4px;-webkit-box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1)}.list-item{display:block;padding:.5em 1em}.list-item:not(a){color:#4a4a4a}.list-item:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.list-item:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.list-item:not(:last-child){border-bottom:1px solid #dbdbdb}.list-item.is-active{background-color:#7957d5;color:#fff}a.list-item{background-color:#f5f5f5;cursor:pointer}.media{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;display:-webkit-box;display:-ms-flexbox;display:flex;text-align:left}.media .content:not(:last-child){margin-bottom:.75rem}.media .media{border-top:1px solid hsla(0,0%,85.9%,.5);display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:.75rem}.media .media .content:not(:last-child),.media .media .control:not(:last-child){margin-bottom:.5rem}.media .media .media{padding-top:.5rem}.media .media .media+.media{margin-top:.5rem}.media+.media{border-top:1px solid hsla(0,0%,85.9%,.5);margin-top:1rem;padding-top:1rem}.media.is-large+.media{margin-top:1.5rem;padding-top:1.5rem}.media-left,.media-right{-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0}.media-left{margin-right:1rem}.media-right{margin-left:1rem}.media-content{-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;text-align:left}@media screen and (max-width:768px){.media-content{overflow-x:auto}}.menu{font-size:1rem}.menu.is-small{font-size:.75rem}.menu.is-medium{font-size:1.25rem}.menu.is-large{font-size:1.5rem}.menu-list{line-height:1.25}.menu-list a{border-radius:2px;color:#4a4a4a;display:block;padding:.5em .75em}.menu-list a:hover{background-color:#f5f5f5;color:#363636}.menu-list a.is-active{background-color:#7957d5;color:#fff}.menu-list li ul{border-left:1px solid #dbdbdb;margin:.75em;padding-left:.75em}.menu-label{color:#7a7a7a;font-size:.75em;letter-spacing:.1em;text-transform:uppercase}.menu-label:not(:first-child){margin-top:1em}.menu-label:not(:last-child){margin-bottom:1em}.message{background-color:#f5f5f5;border-radius:4px;font-size:1rem}.message strong{color:currentColor}.message a:not(.button):not(.tag):not(.dropdown-item){color:currentColor;text-decoration:underline}.message.is-small{font-size:.75rem}.message.is-medium{font-size:1.25rem}.message.is-large{font-size:1.5rem}.message.is-white{background-color:#fff}.message.is-white .message-header{background-color:#fff;color:#0a0a0a}.message.is-white .message-body{border-color:#fff;color:#4d4d4d}.message.is-black{background-color:#fafafa}.message.is-black .message-header{background-color:#0a0a0a;color:#fff}.message.is-black .message-body{border-color:#0a0a0a;color:#090909}.message.is-light{background-color:#fafafa}.message.is-light .message-header{background-color:#f5f5f5;color:#363636}.message.is-light .message-body{border-color:#f5f5f5;color:#505050}.message.is-dark{background-color:#fafafa}.message.is-dark .message-header{background-color:#363636;color:#f5f5f5}.message.is-dark .message-body{border-color:#363636;color:#2a2a2a}.message.is-primary{background-color:#f8f7fd}.message.is-primary .message-header{background-color:#7957d5;color:#fff}.message.is-primary .message-body{border-color:#7957d5;color:#5534ae}.message.is-link{background-color:#f8f7fd}.message.is-link .message-header{background-color:#7957d5;color:#fff}.message.is-link .message-body{border-color:#7957d5;color:#5534ae}.message.is-info{background-color:#f5fafe}.message.is-info .message-header{background-color:#167df0;color:#fff}.message.is-info .message-body{border-color:#167df0;color:#115199}.message.is-success{background-color:#f6fef9}.message.is-success .message-header{background-color:#23d160;color:#fff}.message.is-success .message-body{border-color:#23d160;color:#0e301a}.message.is-warning{background-color:#fffdf5}.message.is-warning .message-header{background-color:#ffdd57;color:rgba(0,0,0,.7)}.message.is-warning .message-body{border-color:#ffdd57;color:#3b3108}.message.is-danger{background-color:#fff5f7}.message.is-danger .message-header{background-color:#ff3860;color:#fff}.message.is-danger .message-body{border-color:#ff3860;color:#cd0930}.message-header{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#4a4a4a;border-radius:4px 4px 0 0;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;font-weight:700;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;line-height:1.25;padding:.75em 1em;position:relative}.message-header .delete{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;margin-left:.75em}.message-header+.message-body{border-width:0;border-top-left-radius:0;border-top-right-radius:0}.message-body{border-radius:4px;border:solid #dbdbdb;border-width:0 0 0 4px;color:#4a4a4a;padding:1.25em 1.5em}.message-body code,.message-body pre{background-color:#fff}.message-body pre code{background-color:transparent}.modal{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:none;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;position:fixed;z-index:40}.modal.is-active{display:-webkit-box;display:-ms-flexbox;display:flex}.modal-background{background-color:rgba(10,10,10,.86)}.modal-card,.modal-content{margin:0 20px;max-height:calc(100vh - 160px);overflow:auto;position:relative;width:100%}@media print,screen and (min-width:769px){.modal-card,.modal-content{margin:0 auto;max-height:calc(100vh - 40px);width:640px}}.modal-close{background:none;height:40px;position:fixed;right:20px;top:20px;width:40px}.modal-card{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:calc(100vh - 40px);overflow:hidden;-ms-overflow-y:visible}.modal-card,.modal-card-foot,.modal-card-head{display:-webkit-box;display:-ms-flexbox;display:flex}.modal-card-foot,.modal-card-head{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#f5f5f5;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:20px;position:relative}.modal-card-head{border-bottom:1px solid #dbdbdb;border-top-left-radius:6px;border-top-right-radius:6px}.modal-card-title{color:#363636;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;font-size:1.5rem;line-height:1}.modal-card-foot{border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top:1px solid #dbdbdb}.modal-card-foot .button:not(:last-child){margin-right:.5em}.modal-card-body{-webkit-overflow-scrolling:touch;background-color:#fff;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;overflow:auto;padding:20px}.navbar{background-color:#fff;min-height:3.25rem;position:relative;z-index:30}.navbar.is-white{background-color:#fff;color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link,.navbar.is-white .navbar-brand>.navbar-item{color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link.is-active,.navbar.is-white .navbar-brand .navbar-link:focus,.navbar.is-white .navbar-brand .navbar-link:hover,.navbar.is-white .navbar-brand>a.navbar-item.is-active,.navbar.is-white .navbar-brand>a.navbar-item:focus,.navbar.is-white .navbar-brand>a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link:after{border-color:#0a0a0a}.navbar.is-white .navbar-burger{color:#0a0a0a}@media screen and (min-width:1024px){.navbar.is-white .navbar-end .navbar-link,.navbar.is-white .navbar-end>.navbar-item,.navbar.is-white .navbar-start .navbar-link,.navbar.is-white .navbar-start>.navbar-item{color:#0a0a0a}.navbar.is-white .navbar-end .navbar-link.is-active,.navbar.is-white .navbar-end .navbar-link:focus,.navbar.is-white .navbar-end .navbar-link:hover,.navbar.is-white .navbar-end>a.navbar-item.is-active,.navbar.is-white .navbar-end>a.navbar-item:focus,.navbar.is-white .navbar-end>a.navbar-item:hover,.navbar.is-white .navbar-start .navbar-link.is-active,.navbar.is-white .navbar-start .navbar-link:focus,.navbar.is-white .navbar-start .navbar-link:hover,.navbar.is-white .navbar-start>a.navbar-item.is-active,.navbar.is-white .navbar-start>a.navbar-item:focus,.navbar.is-white .navbar-start>a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-end .navbar-link:after,.navbar.is-white .navbar-start .navbar-link:after{border-color:#0a0a0a}.navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-white .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-white .navbar-item.has-dropdown:hover .navbar-link{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-dropdown a.navbar-item.is-active{background-color:#fff;color:#0a0a0a}}.navbar.is-black{background-color:#0a0a0a;color:#fff}.navbar.is-black .navbar-brand .navbar-link,.navbar.is-black .navbar-brand>.navbar-item{color:#fff}.navbar.is-black .navbar-brand .navbar-link.is-active,.navbar.is-black .navbar-brand .navbar-link:focus,.navbar.is-black .navbar-brand .navbar-link:hover,.navbar.is-black .navbar-brand>a.navbar-item.is-active,.navbar.is-black .navbar-brand>a.navbar-item:focus,.navbar.is-black .navbar-brand>a.navbar-item:hover{background-color:#000;color:#fff}.navbar.is-black .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-black .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-black .navbar-end .navbar-link,.navbar.is-black .navbar-end>.navbar-item,.navbar.is-black .navbar-start .navbar-link,.navbar.is-black .navbar-start>.navbar-item{color:#fff}.navbar.is-black .navbar-end .navbar-link.is-active,.navbar.is-black .navbar-end .navbar-link:focus,.navbar.is-black .navbar-end .navbar-link:hover,.navbar.is-black .navbar-end>a.navbar-item.is-active,.navbar.is-black .navbar-end>a.navbar-item:focus,.navbar.is-black .navbar-end>a.navbar-item:hover,.navbar.is-black .navbar-start .navbar-link.is-active,.navbar.is-black .navbar-start .navbar-link:focus,.navbar.is-black .navbar-start .navbar-link:hover,.navbar.is-black .navbar-start>a.navbar-item.is-active,.navbar.is-black .navbar-start>a.navbar-item:focus,.navbar.is-black .navbar-start>a.navbar-item:hover{background-color:#000;color:#fff}.navbar.is-black .navbar-end .navbar-link:after,.navbar.is-black .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-black .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-black .navbar-item.has-dropdown:hover .navbar-link{background-color:#000;color:#fff}.navbar.is-black .navbar-dropdown a.navbar-item.is-active{background-color:#0a0a0a;color:#fff}}.navbar.is-light{background-color:#f5f5f5;color:#363636}.navbar.is-light .navbar-brand .navbar-link,.navbar.is-light .navbar-brand>.navbar-item{color:#363636}.navbar.is-light .navbar-brand .navbar-link.is-active,.navbar.is-light .navbar-brand .navbar-link:focus,.navbar.is-light .navbar-brand .navbar-link:hover,.navbar.is-light .navbar-brand>a.navbar-item.is-active,.navbar.is-light .navbar-brand>a.navbar-item:focus,.navbar.is-light .navbar-brand>a.navbar-item:hover{background-color:#e8e8e8;color:#363636}.navbar.is-light .navbar-brand .navbar-link:after{border-color:#363636}.navbar.is-light .navbar-burger{color:#363636}@media screen and (min-width:1024px){.navbar.is-light .navbar-end .navbar-link,.navbar.is-light .navbar-end>.navbar-item,.navbar.is-light .navbar-start .navbar-link,.navbar.is-light .navbar-start>.navbar-item{color:#363636}.navbar.is-light .navbar-end .navbar-link.is-active,.navbar.is-light .navbar-end .navbar-link:focus,.navbar.is-light .navbar-end .navbar-link:hover,.navbar.is-light .navbar-end>a.navbar-item.is-active,.navbar.is-light .navbar-end>a.navbar-item:focus,.navbar.is-light .navbar-end>a.navbar-item:hover,.navbar.is-light .navbar-start .navbar-link.is-active,.navbar.is-light .navbar-start .navbar-link:focus,.navbar.is-light .navbar-start .navbar-link:hover,.navbar.is-light .navbar-start>a.navbar-item.is-active,.navbar.is-light .navbar-start>a.navbar-item:focus,.navbar.is-light .navbar-start>a.navbar-item:hover{background-color:#e8e8e8;color:#363636}.navbar.is-light .navbar-end .navbar-link:after,.navbar.is-light .navbar-start .navbar-link:after{border-color:#363636}.navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-light .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-light .navbar-item.has-dropdown:hover .navbar-link{background-color:#e8e8e8;color:#363636}.navbar.is-light .navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#363636}}.navbar.is-dark{background-color:#363636;color:#f5f5f5}.navbar.is-dark .navbar-brand .navbar-link,.navbar.is-dark .navbar-brand>.navbar-item{color:#f5f5f5}.navbar.is-dark .navbar-brand .navbar-link.is-active,.navbar.is-dark .navbar-brand .navbar-link:focus,.navbar.is-dark .navbar-brand .navbar-link:hover,.navbar.is-dark .navbar-brand>a.navbar-item.is-active,.navbar.is-dark .navbar-brand>a.navbar-item:focus,.navbar.is-dark .navbar-brand>a.navbar-item:hover{background-color:#292929;color:#f5f5f5}.navbar.is-dark .navbar-brand .navbar-link:after{border-color:#f5f5f5}.navbar.is-dark .navbar-burger{color:#f5f5f5}@media screen and (min-width:1024px){.navbar.is-dark .navbar-end .navbar-link,.navbar.is-dark .navbar-end>.navbar-item,.navbar.is-dark .navbar-start .navbar-link,.navbar.is-dark .navbar-start>.navbar-item{color:#f5f5f5}.navbar.is-dark .navbar-end .navbar-link.is-active,.navbar.is-dark .navbar-end .navbar-link:focus,.navbar.is-dark .navbar-end .navbar-link:hover,.navbar.is-dark .navbar-end>a.navbar-item.is-active,.navbar.is-dark .navbar-end>a.navbar-item:focus,.navbar.is-dark .navbar-end>a.navbar-item:hover,.navbar.is-dark .navbar-start .navbar-link.is-active,.navbar.is-dark .navbar-start .navbar-link:focus,.navbar.is-dark .navbar-start .navbar-link:hover,.navbar.is-dark .navbar-start>a.navbar-item.is-active,.navbar.is-dark .navbar-start>a.navbar-item:focus,.navbar.is-dark .navbar-start>a.navbar-item:hover{background-color:#292929;color:#f5f5f5}.navbar.is-dark .navbar-end .navbar-link:after,.navbar.is-dark .navbar-start .navbar-link:after{border-color:#f5f5f5}.navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-dark .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link{background-color:#292929;color:#f5f5f5}.navbar.is-dark .navbar-dropdown a.navbar-item.is-active{background-color:#363636;color:#f5f5f5}}.navbar.is-primary{background-color:#7957d5;color:#fff}.navbar.is-primary .navbar-brand .navbar-link,.navbar.is-primary .navbar-brand>.navbar-item{color:#fff}.navbar.is-primary .navbar-brand .navbar-link.is-active,.navbar.is-primary .navbar-brand .navbar-link:focus,.navbar.is-primary .navbar-brand .navbar-link:hover,.navbar.is-primary .navbar-brand>a.navbar-item.is-active,.navbar.is-primary .navbar-brand>a.navbar-item:focus,.navbar.is-primary .navbar-brand>a.navbar-item:hover{background-color:#6943d0;color:#fff}.navbar.is-primary .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-primary .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-primary .navbar-end .navbar-link,.navbar.is-primary .navbar-end>.navbar-item,.navbar.is-primary .navbar-start .navbar-link,.navbar.is-primary .navbar-start>.navbar-item{color:#fff}.navbar.is-primary .navbar-end .navbar-link.is-active,.navbar.is-primary .navbar-end .navbar-link:focus,.navbar.is-primary .navbar-end .navbar-link:hover,.navbar.is-primary .navbar-end>a.navbar-item.is-active,.navbar.is-primary .navbar-end>a.navbar-item:focus,.navbar.is-primary .navbar-end>a.navbar-item:hover,.navbar.is-primary .navbar-start .navbar-link.is-active,.navbar.is-primary .navbar-start .navbar-link:focus,.navbar.is-primary .navbar-start .navbar-link:hover,.navbar.is-primary .navbar-start>a.navbar-item.is-active,.navbar.is-primary .navbar-start>a.navbar-item:focus,.navbar.is-primary .navbar-start>a.navbar-item:hover{background-color:#6943d0;color:#fff}.navbar.is-primary .navbar-end .navbar-link:after,.navbar.is-primary .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-primary .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link{background-color:#6943d0;color:#fff}.navbar.is-primary .navbar-dropdown a.navbar-item.is-active{background-color:#7957d5;color:#fff}}.navbar.is-link{background-color:#7957d5;color:#fff}.navbar.is-link .navbar-brand .navbar-link,.navbar.is-link .navbar-brand>.navbar-item{color:#fff}.navbar.is-link .navbar-brand .navbar-link.is-active,.navbar.is-link .navbar-brand .navbar-link:focus,.navbar.is-link .navbar-brand .navbar-link:hover,.navbar.is-link .navbar-brand>a.navbar-item.is-active,.navbar.is-link .navbar-brand>a.navbar-item:focus,.navbar.is-link .navbar-brand>a.navbar-item:hover{background-color:#6943d0;color:#fff}.navbar.is-link .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-link .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-link .navbar-end .navbar-link,.navbar.is-link .navbar-end>.navbar-item,.navbar.is-link .navbar-start .navbar-link,.navbar.is-link .navbar-start>.navbar-item{color:#fff}.navbar.is-link .navbar-end .navbar-link.is-active,.navbar.is-link .navbar-end .navbar-link:focus,.navbar.is-link .navbar-end .navbar-link:hover,.navbar.is-link .navbar-end>a.navbar-item.is-active,.navbar.is-link .navbar-end>a.navbar-item:focus,.navbar.is-link .navbar-end>a.navbar-item:hover,.navbar.is-link .navbar-start .navbar-link.is-active,.navbar.is-link .navbar-start .navbar-link:focus,.navbar.is-link .navbar-start .navbar-link:hover,.navbar.is-link .navbar-start>a.navbar-item.is-active,.navbar.is-link .navbar-start>a.navbar-item:focus,.navbar.is-link .navbar-start>a.navbar-item:hover{background-color:#6943d0;color:#fff}.navbar.is-link .navbar-end .navbar-link:after,.navbar.is-link .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-link .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-link .navbar-item.has-dropdown:hover .navbar-link{background-color:#6943d0;color:#fff}.navbar.is-link .navbar-dropdown a.navbar-item.is-active{background-color:#7957d5;color:#fff}}.navbar.is-info{background-color:#167df0;color:#fff}.navbar.is-info .navbar-brand .navbar-link,.navbar.is-info .navbar-brand>.navbar-item{color:#fff}.navbar.is-info .navbar-brand .navbar-link.is-active,.navbar.is-info .navbar-brand .navbar-link:focus,.navbar.is-info .navbar-brand .navbar-link:hover,.navbar.is-info .navbar-brand>a.navbar-item.is-active,.navbar.is-info .navbar-brand>a.navbar-item:focus,.navbar.is-info .navbar-brand>a.navbar-item:hover{background-color:#0e71de;color:#fff}.navbar.is-info .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-info .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-info .navbar-end .navbar-link,.navbar.is-info .navbar-end>.navbar-item,.navbar.is-info .navbar-start .navbar-link,.navbar.is-info .navbar-start>.navbar-item{color:#fff}.navbar.is-info .navbar-end .navbar-link.is-active,.navbar.is-info .navbar-end .navbar-link:focus,.navbar.is-info .navbar-end .navbar-link:hover,.navbar.is-info .navbar-end>a.navbar-item.is-active,.navbar.is-info .navbar-end>a.navbar-item:focus,.navbar.is-info .navbar-end>a.navbar-item:hover,.navbar.is-info .navbar-start .navbar-link.is-active,.navbar.is-info .navbar-start .navbar-link:focus,.navbar.is-info .navbar-start .navbar-link:hover,.navbar.is-info .navbar-start>a.navbar-item.is-active,.navbar.is-info .navbar-start>a.navbar-item:focus,.navbar.is-info .navbar-start>a.navbar-item:hover{background-color:#0e71de;color:#fff}.navbar.is-info .navbar-end .navbar-link:after,.navbar.is-info .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-info .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-info .navbar-item.has-dropdown:hover .navbar-link{background-color:#0e71de;color:#fff}.navbar.is-info .navbar-dropdown a.navbar-item.is-active{background-color:#167df0;color:#fff}}.navbar.is-success{background-color:#23d160;color:#fff}.navbar.is-success .navbar-brand .navbar-link,.navbar.is-success .navbar-brand>.navbar-item{color:#fff}.navbar.is-success .navbar-brand .navbar-link.is-active,.navbar.is-success .navbar-brand .navbar-link:focus,.navbar.is-success .navbar-brand .navbar-link:hover,.navbar.is-success .navbar-brand>a.navbar-item.is-active,.navbar.is-success .navbar-brand>a.navbar-item:focus,.navbar.is-success .navbar-brand>a.navbar-item:hover{background-color:#20bc56;color:#fff}.navbar.is-success .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-success .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-success .navbar-end .navbar-link,.navbar.is-success .navbar-end>.navbar-item,.navbar.is-success .navbar-start .navbar-link,.navbar.is-success .navbar-start>.navbar-item{color:#fff}.navbar.is-success .navbar-end .navbar-link.is-active,.navbar.is-success .navbar-end .navbar-link:focus,.navbar.is-success .navbar-end .navbar-link:hover,.navbar.is-success .navbar-end>a.navbar-item.is-active,.navbar.is-success .navbar-end>a.navbar-item:focus,.navbar.is-success .navbar-end>a.navbar-item:hover,.navbar.is-success .navbar-start .navbar-link.is-active,.navbar.is-success .navbar-start .navbar-link:focus,.navbar.is-success .navbar-start .navbar-link:hover,.navbar.is-success .navbar-start>a.navbar-item.is-active,.navbar.is-success .navbar-start>a.navbar-item:focus,.navbar.is-success .navbar-start>a.navbar-item:hover{background-color:#20bc56;color:#fff}.navbar.is-success .navbar-end .navbar-link:after,.navbar.is-success .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-success .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-success .navbar-item.has-dropdown:hover .navbar-link{background-color:#20bc56;color:#fff}.navbar.is-success .navbar-dropdown a.navbar-item.is-active{background-color:#23d160;color:#fff}}.navbar.is-warning{background-color:#ffdd57}.navbar.is-warning,.navbar.is-warning .navbar-brand .navbar-link,.navbar.is-warning .navbar-brand>.navbar-item{color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand .navbar-link.is-active,.navbar.is-warning .navbar-brand .navbar-link:focus,.navbar.is-warning .navbar-brand .navbar-link:hover,.navbar.is-warning .navbar-brand>a.navbar-item.is-active,.navbar.is-warning .navbar-brand>a.navbar-item:focus,.navbar.is-warning .navbar-brand>a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand .navbar-link:after{border-color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-burger{color:rgba(0,0,0,.7)}@media screen and (min-width:1024px){.navbar.is-warning .navbar-end .navbar-link,.navbar.is-warning .navbar-end>.navbar-item,.navbar.is-warning .navbar-start .navbar-link,.navbar.is-warning .navbar-start>.navbar-item{color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-end .navbar-link.is-active,.navbar.is-warning .navbar-end .navbar-link:focus,.navbar.is-warning .navbar-end .navbar-link:hover,.navbar.is-warning .navbar-end>a.navbar-item.is-active,.navbar.is-warning .navbar-end>a.navbar-item:focus,.navbar.is-warning .navbar-end>a.navbar-item:hover,.navbar.is-warning .navbar-start .navbar-link.is-active,.navbar.is-warning .navbar-start .navbar-link:focus,.navbar.is-warning .navbar-start .navbar-link:hover,.navbar.is-warning .navbar-start>a.navbar-item.is-active,.navbar.is-warning .navbar-start>a.navbar-item:focus,.navbar.is-warning .navbar-start>a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-end .navbar-link:after,.navbar.is-warning .navbar-start .navbar-link:after{border-color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-warning .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-dropdown a.navbar-item.is-active{background-color:#ffdd57;color:rgba(0,0,0,.7)}}.navbar.is-danger{background-color:#ff3860;color:#fff}.navbar.is-danger .navbar-brand .navbar-link,.navbar.is-danger .navbar-brand>.navbar-item{color:#fff}.navbar.is-danger .navbar-brand .navbar-link.is-active,.navbar.is-danger .navbar-brand .navbar-link:focus,.navbar.is-danger .navbar-brand .navbar-link:hover,.navbar.is-danger .navbar-brand>a.navbar-item.is-active,.navbar.is-danger .navbar-brand>a.navbar-item:focus,.navbar.is-danger .navbar-brand>a.navbar-item:hover{background-color:#ff1f4b;color:#fff}.navbar.is-danger .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-danger .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-danger .navbar-end .navbar-link,.navbar.is-danger .navbar-end>.navbar-item,.navbar.is-danger .navbar-start .navbar-link,.navbar.is-danger .navbar-start>.navbar-item{color:#fff}.navbar.is-danger .navbar-end .navbar-link.is-active,.navbar.is-danger .navbar-end .navbar-link:focus,.navbar.is-danger .navbar-end .navbar-link:hover,.navbar.is-danger .navbar-end>a.navbar-item.is-active,.navbar.is-danger .navbar-end>a.navbar-item:focus,.navbar.is-danger .navbar-end>a.navbar-item:hover,.navbar.is-danger .navbar-start .navbar-link.is-active,.navbar.is-danger .navbar-start .navbar-link:focus,.navbar.is-danger .navbar-start .navbar-link:hover,.navbar.is-danger .navbar-start>a.navbar-item.is-active,.navbar.is-danger .navbar-start>a.navbar-item:focus,.navbar.is-danger .navbar-start>a.navbar-item:hover{background-color:#ff1f4b;color:#fff}.navbar.is-danger .navbar-end .navbar-link:after,.navbar.is-danger .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-danger .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link{background-color:#ff1f4b;color:#fff}.navbar.is-danger .navbar-dropdown a.navbar-item.is-active{background-color:#ff3860;color:#fff}}.navbar>.container{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;min-height:3.25rem;width:100%}.navbar.has-shadow{-webkit-box-shadow:0 2px 0 0 #f5f5f5;box-shadow:0 2px 0 0 #f5f5f5}.navbar.is-fixed-bottom,.navbar.is-fixed-top{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom{bottom:0}.navbar.is-fixed-bottom.has-shadow{-webkit-box-shadow:0 -2px 0 0 #f5f5f5;box-shadow:0 -2px 0 0 #f5f5f5}.navbar.is-fixed-top{top:0}body.has-navbar-fixed-top,html.has-navbar-fixed-top{padding-top:3.25rem}body.has-navbar-fixed-bottom,html.has-navbar-fixed-bottom{padding-bottom:3.25rem}.navbar-brand,.navbar-tabs{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;min-height:3.25rem}.navbar-brand a.navbar-item:focus,.navbar-brand a.navbar-item:hover{background-color:transparent}.navbar-tabs{-webkit-overflow-scrolling:touch;max-width:100vw;overflow-x:auto;overflow-y:hidden}.navbar-burger{color:#4a4a4a;cursor:pointer;display:block;height:3.25rem;position:relative;width:3.25rem;margin-left:auto}.navbar-burger span{background-color:currentColor;display:block;height:1px;left:calc(50% - 8px);position:absolute;-webkit-transform-origin:center;transform-origin:center;-webkit-transition-duration:86ms;transition-duration:86ms;-webkit-transition-property:background-color,opacity,-webkit-transform;transition-property:background-color,opacity,-webkit-transform;transition-property:background-color,opacity,transform;transition-property:background-color,opacity,transform,-webkit-transform;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;width:16px}.navbar-burger span:first-child{top:calc(50% - 6px)}.navbar-burger span:nth-child(2){top:calc(50% - 1px)}.navbar-burger span:nth-child(3){top:calc(50% + 4px)}.navbar-burger:hover{background-color:rgba(0,0,0,.05)}.navbar-burger.is-active span:first-child{-webkit-transform:translateY(5px) rotate(45deg);transform:translateY(5px) rotate(45deg)}.navbar-burger.is-active span:nth-child(2){opacity:0}.navbar-burger.is-active span:nth-child(3){-webkit-transform:translateY(-5px) rotate(-45deg);transform:translateY(-5px) rotate(-45deg)}.navbar-menu{display:none}.navbar-item,.navbar-link{color:#4a4a4a;display:block;line-height:1.5;padding:.5rem .75rem;position:relative}.navbar-item .icon:only-child,.navbar-link .icon:only-child{margin-left:-.25rem;margin-right:-.25rem}.navbar-link,a.navbar-item{cursor:pointer}.navbar-link.is-active,.navbar-link:focus,.navbar-link:hover,.navbar-link[focus-within],a.navbar-item.is-active,a.navbar-item:focus,a.navbar-item:hover,a.navbar-item[focus-within]{background-color:#fafafa;color:#7957d5}.navbar-link.is-active,.navbar-link:focus,.navbar-link:focus-within,.navbar-link:hover,a.navbar-item.is-active,a.navbar-item:focus,a.navbar-item:focus-within,a.navbar-item:hover{background-color:#fafafa;color:#7957d5}.navbar-item{display:block;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0}.navbar-item img{max-height:1.75rem}.navbar-item.has-dropdown{padding:0}.navbar-item.is-expanded{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.navbar-item.is-tab{border-bottom:1px solid transparent;min-height:3.25rem;padding-bottom:calc(.5rem - 1px)}.navbar-item.is-tab:focus,.navbar-item.is-tab:hover{background-color:transparent;border-bottom-color:#7957d5}.navbar-item.is-tab.is-active{background-color:transparent;border-bottom:3px solid #7957d5;color:#7957d5;padding-bottom:calc(.5rem - 3px)}.navbar-content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.navbar-link:not(.is-arrowless){padding-right:2.5em}.navbar-link:not(.is-arrowless):after{border-color:#7957d5;margin-top:-.375em;right:1.125em}.navbar-dropdown{font-size:.875rem;padding-bottom:.5rem;padding-top:.5rem}.navbar-dropdown .navbar-item{padding-left:1.5rem;padding-right:1.5rem}.navbar-divider{background-color:#f5f5f5;border:none;display:none;height:2px;margin:.5rem 0}@media screen and (max-width:1023px){.navbar>.container{display:block}.navbar-brand .navbar-item,.navbar-tabs .navbar-item{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.navbar-link:after{display:none}.navbar-menu{background-color:#fff;-webkit-box-shadow:0 8px 16px rgba(10,10,10,.1);box-shadow:0 8px 16px rgba(10,10,10,.1);padding:.5rem 0}.navbar-menu.is-active{display:block}.navbar.is-fixed-bottom-touch,.navbar.is-fixed-top-touch{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-touch{bottom:0}.navbar.is-fixed-bottom-touch.has-shadow{-webkit-box-shadow:0 -2px 3px rgba(10,10,10,.1);box-shadow:0 -2px 3px rgba(10,10,10,.1)}.navbar.is-fixed-top-touch{top:0}.navbar.is-fixed-top-touch .navbar-menu,.navbar.is-fixed-top .navbar-menu{-webkit-overflow-scrolling:touch;max-height:calc(100vh - 3.25rem);overflow:auto}body.has-navbar-fixed-top-touch,html.has-navbar-fixed-top-touch{padding-top:3.25rem}body.has-navbar-fixed-bottom-touch,html.has-navbar-fixed-bottom-touch{padding-bottom:3.25rem}}@media screen and (min-width:1024px){.navbar,.navbar-end,.navbar-menu,.navbar-start{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex}.navbar{min-height:3.25rem}.navbar.is-spaced{padding:1rem 2rem}.navbar.is-spaced .navbar-end,.navbar.is-spaced .navbar-start{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.navbar.is-spaced .navbar-link,.navbar.is-spaced a.navbar-item{border-radius:4px}.navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable[focus-within] .navbar-link,.navbar.is-transparent .navbar-link.is-active,.navbar.is-transparent .navbar-link:focus,.navbar.is-transparent .navbar-link:hover,.navbar.is-transparent a.navbar-item.is-active,.navbar.is-transparent a.navbar-item:focus,.navbar.is-transparent a.navbar-item:hover{background-color:transparent!important}.navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus-within .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link{background-color:transparent!important}.navbar.is-transparent .navbar-dropdown a.navbar-item:focus,.navbar.is-transparent .navbar-dropdown a.navbar-item:hover{background-color:#f5f5f5;color:#0a0a0a}.navbar.is-transparent .navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#7957d5}.navbar-burger{display:none}.navbar-item,.navbar-link{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.navbar-item,.navbar-link{display:-webkit-box;display:-ms-flexbox;display:flex}.navbar-item.has-dropdown{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.navbar-item.has-dropdown-up .navbar-link:after{-webkit-transform:rotate(135deg) translate(.25em,-.25em);transform:rotate(135deg) translate(.25em,-.25em)}.navbar-item.has-dropdown-up .navbar-dropdown{border-bottom:2px solid #dbdbdb;border-radius:6px 6px 0 0;border-top:none;bottom:100%;-webkit-box-shadow:0 -8px 8px rgba(10,10,10,.1);box-shadow:0 -8px 8px rgba(10,10,10,.1);top:auto}.navbar-item.is-active .navbar-dropdown,.navbar-item.is-hoverable:focus .navbar-dropdown,.navbar-item.is-hoverable:hover .navbar-dropdown,.navbar-item.is-hoverable[focus-within] .navbar-dropdown{display:block}.navbar-item.is-active .navbar-dropdown,.navbar-item.is-hoverable:focus-within .navbar-dropdown,.navbar-item.is-hoverable:focus .navbar-dropdown,.navbar-item.is-hoverable:hover .navbar-dropdown{display:block}.navbar-item.is-active .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed,.navbar-item.is-hoverable[focus-within] .navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-item.is-active .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable[focus-within] .navbar-dropdown{opacity:1;pointer-events:auto;-webkit-transform:translateY(0);transform:translateY(0)}.navbar-item.is-active .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:focus-within .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-item.is-active .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:focus-within .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown{opacity:1;pointer-events:auto;-webkit-transform:translateY(0);transform:translateY(0)}.navbar-menu{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0}.navbar-start{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;margin-right:auto}.navbar-end{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-left:auto}.navbar-dropdown{background-color:#fff;border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top:2px solid #dbdbdb;-webkit-box-shadow:0 8px 8px rgba(10,10,10,.1);box-shadow:0 8px 8px rgba(10,10,10,.1);display:none;font-size:.875rem;left:0;min-width:100%;position:absolute;top:100%;z-index:20}.navbar-dropdown .navbar-item{padding:.375rem 1rem;white-space:nowrap}.navbar-dropdown a.navbar-item{padding-right:3rem}.navbar-dropdown a.navbar-item:focus,.navbar-dropdown a.navbar-item:hover{background-color:#f5f5f5;color:#0a0a0a}.navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#7957d5}.navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-dropdown{border-radius:6px;border-top:none;-webkit-box-shadow:0 8px 8px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);box-shadow:0 8px 8px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);display:block;opacity:0;pointer-events:none;top:calc(100% + -4px);-webkit-transform:translateY(-5px);transform:translateY(-5px);-webkit-transition-duration:86ms;transition-duration:86ms;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}.navbar-dropdown.is-right{left:auto;right:0}.navbar-divider{display:block}.container>.navbar .navbar-brand,.navbar>.container .navbar-brand{margin-left:-.75rem}.container>.navbar .navbar-menu,.navbar>.container .navbar-menu{margin-right:-.75rem}.navbar.is-fixed-bottom-desktop,.navbar.is-fixed-top-desktop{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-desktop{bottom:0}.navbar.is-fixed-bottom-desktop.has-shadow{-webkit-box-shadow:0 -2px 3px rgba(10,10,10,.1);box-shadow:0 -2px 3px rgba(10,10,10,.1)}.navbar.is-fixed-top-desktop{top:0}body.has-navbar-fixed-top-desktop,html.has-navbar-fixed-top-desktop{padding-top:3.25rem}body.has-navbar-fixed-bottom-desktop,html.has-navbar-fixed-bottom-desktop{padding-bottom:3.25rem}body.has-spaced-navbar-fixed-top,html.has-spaced-navbar-fixed-top{padding-top:5.25rem}body.has-spaced-navbar-fixed-bottom,html.has-spaced-navbar-fixed-bottom{padding-bottom:5.25rem}.navbar-link.is-active,a.navbar-item.is-active{color:#0a0a0a}.navbar-link.is-active:not(:focus):not(:hover),a.navbar-item.is-active:not(:focus):not(:hover){background-color:transparent}.navbar-item.has-dropdown.is-active .navbar-link,.navbar-item.has-dropdown:focus .navbar-link,.navbar-item.has-dropdown:hover .navbar-link{background-color:#fafafa}}.hero.is-fullheight-with-navbar{min-height:calc(100vh - 3.25rem)}.pagination{font-size:1rem;margin:-.25rem}.pagination.is-small{font-size:.75rem}.pagination.is-medium{font-size:1.25rem}.pagination.is-large{font-size:1.5rem}.pagination.is-rounded .pagination-next,.pagination.is-rounded .pagination-previous{padding-left:1em;padding-right:1em;border-radius:290486px}.pagination.is-rounded .pagination-link{border-radius:290486px}.pagination,.pagination-list{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous{font-size:1em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:.25rem;padding-left:.5em;padding-right:.5em;text-align:center}.pagination-link,.pagination-next,.pagination-previous{border-color:#dbdbdb;color:#363636;min-width:2.25em}.pagination-link:hover,.pagination-next:hover,.pagination-previous:hover{border-color:#b5b5b5;color:#363636}.pagination-link:focus,.pagination-next:focus,.pagination-previous:focus{border-color:#7957d5}.pagination-link:active,.pagination-next:active,.pagination-previous:active{-webkit-box-shadow:inset 0 1px 2px rgba(10,10,10,.2);box-shadow:inset 0 1px 2px rgba(10,10,10,.2)}.pagination-link[disabled],.pagination-next[disabled],.pagination-previous[disabled]{background-color:#dbdbdb;border-color:#dbdbdb;-webkit-box-shadow:none;box-shadow:none;color:#7a7a7a;opacity:.5}.pagination-next,.pagination-previous{padding-left:.75em;padding-right:.75em;white-space:nowrap}.pagination-link.is-current{background-color:#7957d5;border-color:#7957d5;color:#fff}.pagination-ellipsis{color:#b5b5b5;pointer-events:none}.pagination-list{-ms-flex-wrap:wrap;flex-wrap:wrap}@media screen and (max-width:768px){.pagination{-ms-flex-wrap:wrap;flex-wrap:wrap}.pagination-list li,.pagination-next,.pagination-previous{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}}@media print,screen and (min-width:769px){.pagination-list{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.pagination-previous{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.pagination-next{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.pagination{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.pagination.is-centered .pagination-previous{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.pagination.is-centered .pagination-list{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.pagination.is-centered .pagination-next{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.pagination.is-right .pagination-previous{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.pagination.is-right .pagination-next{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.pagination.is-right .pagination-list{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}}.panel{font-size:1rem}.panel:not(:last-child){margin-bottom:1.5rem}.panel-block,.panel-heading,.panel-tabs{border-bottom:1px solid #dbdbdb;border-left:1px solid #dbdbdb;border-right:1px solid #dbdbdb}.panel-block:first-child,.panel-heading:first-child,.panel-tabs:first-child{border-top:1px solid #dbdbdb}.panel-heading{background-color:#f5f5f5;border-radius:4px 4px 0 0;color:#363636;font-size:1.25em;font-weight:300;line-height:1.25;padding:.5em .75em}.panel-tabs{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:.875em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.panel-tabs a{border-bottom:1px solid #dbdbdb;margin-bottom:-1px;padding:.5em}.panel-tabs a.is-active{border-bottom-color:#4a4a4a;color:#363636}.panel-list a{color:#4a4a4a}.panel-list a:hover{color:#7957d5}.panel-block{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#363636;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:.5em .75em}.panel-block input[type=checkbox]{margin-right:.75em}.panel-block>.control{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;width:100%}.panel-block.is-wrapped{-ms-flex-wrap:wrap;flex-wrap:wrap}.panel-block.is-active{border-left-color:#7957d5;color:#363636}.panel-block.is-active .panel-icon{color:#7957d5}a.panel-block,label.panel-block{cursor:pointer}a.panel-block:hover,label.panel-block:hover{background-color:#f5f5f5}.panel-icon{display:inline-block;font-size:14px;height:1em;line-height:1em;text-align:center;vertical-align:top;width:1em;color:#7a7a7a;margin-right:.75em}.panel-icon .fa{font-size:inherit;line-height:inherit}.tabs{-webkit-overflow-scrolling:touch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;font-size:1rem;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;overflow:hidden;overflow-x:auto;white-space:nowrap}.tabs,.tabs a{display:-webkit-box;display:-ms-flexbox;display:flex}.tabs a{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #dbdbdb;color:#4a4a4a;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:-1px;padding:.5em 1em;vertical-align:top}.tabs a:hover{border-bottom-color:#363636;color:#363636}.tabs li{display:block}.tabs li.is-active a{border-bottom-color:#7957d5;color:#7957d5}.tabs ul{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #dbdbdb;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.tabs ul.is-center,.tabs ul.is-left{padding-right:.75em}.tabs ul.is-center{-webkit-box-flex:0;-ms-flex:none;flex:none;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:.75em}.tabs ul.is-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding-left:.75em}.tabs .icon:first-child{margin-right:.5em}.tabs .icon:last-child{margin-left:.5em}.tabs.is-centered ul{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.tabs.is-right ul{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.tabs.is-boxed a{border:1px solid transparent;border-radius:4px 4px 0 0}.tabs.is-boxed a:hover{background-color:#f5f5f5;border-bottom-color:#dbdbdb}.tabs.is-boxed li.is-active a{background-color:#fff;border-color:#dbdbdb;border-bottom-color:transparent!important}.tabs.is-fullwidth li{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0}.tabs.is-toggle a{border:1px solid #dbdbdb;margin-bottom:0;position:relative}.tabs.is-toggle a:hover{background-color:#f5f5f5;border-color:#b5b5b5;z-index:2}.tabs.is-toggle li+li{margin-left:-1px}.tabs.is-toggle li:first-child a{border-radius:4px 0 0 4px}.tabs.is-toggle li:last-child a{border-radius:0 4px 4px 0}.tabs.is-toggle li.is-active a{background-color:#7957d5;border-color:#7957d5;color:#fff;z-index:1}.tabs.is-toggle ul{border-bottom:none}.tabs.is-toggle.is-toggle-rounded li:first-child a{border-bottom-left-radius:290486px;border-top-left-radius:290486px;padding-left:1.25em}.tabs.is-toggle.is-toggle-rounded li:last-child a{border-bottom-right-radius:290486px;border-top-right-radius:290486px;padding-right:1.25em}.tabs.is-small{font-size:.75rem}.tabs.is-medium{font-size:1.25rem}.tabs.is-large{font-size:1.5rem}.column{display:block;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;padding:.75rem}.columns.is-mobile>.column.is-full,.columns.is-mobile>.column.is-narrow{-webkit-box-flex:0;-ms-flex:none;flex:none}.columns.is-mobile>.column.is-full{width:100%}.columns.is-mobile>.column.is-three-quarters{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.columns.is-mobile>.column.is-two-thirds{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.columns.is-mobile>.column.is-half{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.columns.is-mobile>.column.is-one-third{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.columns.is-mobile>.column.is-one-quarter{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.columns.is-mobile>.column.is-one-fifth{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.columns.is-mobile>.column.is-two-fifths{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.columns.is-mobile>.column.is-three-fifths{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.columns.is-mobile>.column.is-four-fifths{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.columns.is-mobile>.column.is-offset-three-quarters{margin-left:75%}.columns.is-mobile>.column.is-offset-two-thirds{margin-left:66.6666%}.columns.is-mobile>.column.is-offset-half{margin-left:50%}.columns.is-mobile>.column.is-offset-one-third{margin-left:33.3333%}.columns.is-mobile>.column.is-offset-one-quarter{margin-left:25%}.columns.is-mobile>.column.is-offset-one-fifth{margin-left:20%}.columns.is-mobile>.column.is-offset-two-fifths{margin-left:40%}.columns.is-mobile>.column.is-offset-three-fifths{margin-left:60%}.columns.is-mobile>.column.is-offset-four-fifths{margin-left:80%}.columns.is-mobile>.column.is-0{-webkit-box-flex:0;-ms-flex:none;flex:none;width:0}.columns.is-mobile>.column.is-offset-0{margin-left:0}.columns.is-mobile>.column.is-1{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.columns.is-mobile>.column.is-offset-1{margin-left:8.33333%}.columns.is-mobile>.column.is-2{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.columns.is-mobile>.column.is-offset-2{margin-left:16.66667%}.columns.is-mobile>.column.is-3{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.columns.is-mobile>.column.is-offset-3{margin-left:25%}.columns.is-mobile>.column.is-4{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.columns.is-mobile>.column.is-offset-4{margin-left:33.33333%}.columns.is-mobile>.column.is-5{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.columns.is-mobile>.column.is-offset-5{margin-left:41.66667%}.columns.is-mobile>.column.is-6{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.columns.is-mobile>.column.is-offset-6{margin-left:50%}.columns.is-mobile>.column.is-7{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.columns.is-mobile>.column.is-offset-7{margin-left:58.33333%}.columns.is-mobile>.column.is-8{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.columns.is-mobile>.column.is-offset-8{margin-left:66.66667%}.columns.is-mobile>.column.is-9{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.columns.is-mobile>.column.is-offset-9{margin-left:75%}.columns.is-mobile>.column.is-10{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.columns.is-mobile>.column.is-offset-10{margin-left:83.33333%}.columns.is-mobile>.column.is-11{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.columns.is-mobile>.column.is-offset-11{margin-left:91.66667%}.columns.is-mobile>.column.is-12{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.columns.is-mobile>.column.is-offset-12{margin-left:100%}@media screen and (max-width:768px){.column.is-full-mobile,.column.is-narrow-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none}.column.is-full-mobile{width:100%}.column.is-three-quarters-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters-mobile{margin-left:75%}.column.is-offset-two-thirds-mobile{margin-left:66.6666%}.column.is-offset-half-mobile{margin-left:50%}.column.is-offset-one-third-mobile{margin-left:33.3333%}.column.is-offset-one-quarter-mobile{margin-left:25%}.column.is-offset-one-fifth-mobile{margin-left:20%}.column.is-offset-two-fifths-mobile{margin-left:40%}.column.is-offset-three-fifths-mobile{margin-left:60%}.column.is-offset-four-fifths-mobile{margin-left:80%}.column.is-0-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:0}.column.is-offset-0-mobile{margin-left:0}.column.is-1-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.column.is-offset-1-mobile{margin-left:8.33333%}.column.is-2-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.column.is-offset-2-mobile{margin-left:16.66667%}.column.is-3-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3-mobile{margin-left:25%}.column.is-4-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.column.is-offset-4-mobile{margin-left:33.33333%}.column.is-5-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.column.is-offset-5-mobile{margin-left:41.66667%}.column.is-6-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6-mobile{margin-left:50%}.column.is-7-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.column.is-offset-7-mobile{margin-left:58.33333%}.column.is-8-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.column.is-offset-8-mobile{margin-left:66.66667%}.column.is-9-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9-mobile{margin-left:75%}.column.is-10-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.column.is-offset-10-mobile{margin-left:83.33333%}.column.is-11-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.column.is-offset-11-mobile{margin-left:91.66667%}.column.is-12-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12-mobile{margin-left:100%}}@media print,screen and (min-width:769px){.column.is-full,.column.is-full-tablet,.column.is-narrow,.column.is-narrow-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none}.column.is-full,.column.is-full-tablet{width:100%}.column.is-three-quarters,.column.is-three-quarters-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds,.column.is-two-thirds-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half,.column.is-half-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third,.column.is-one-third-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter,.column.is-one-quarter-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth,.column.is-one-fifth-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths,.column.is-two-fifths-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths,.column.is-three-fifths-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths,.column.is-four-fifths-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters,.column.is-offset-three-quarters-tablet{margin-left:75%}.column.is-offset-two-thirds,.column.is-offset-two-thirds-tablet{margin-left:66.6666%}.column.is-offset-half,.column.is-offset-half-tablet{margin-left:50%}.column.is-offset-one-third,.column.is-offset-one-third-tablet{margin-left:33.3333%}.column.is-offset-one-quarter,.column.is-offset-one-quarter-tablet{margin-left:25%}.column.is-offset-one-fifth,.column.is-offset-one-fifth-tablet{margin-left:20%}.column.is-offset-two-fifths,.column.is-offset-two-fifths-tablet{margin-left:40%}.column.is-offset-three-fifths,.column.is-offset-three-fifths-tablet{margin-left:60%}.column.is-offset-four-fifths,.column.is-offset-four-fifths-tablet{margin-left:80%}.column.is-0,.column.is-0-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:0}.column.is-offset-0,.column.is-offset-0-tablet{margin-left:0}.column.is-1,.column.is-1-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.column.is-offset-1,.column.is-offset-1-tablet{margin-left:8.33333%}.column.is-2,.column.is-2-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.column.is-offset-2,.column.is-offset-2-tablet{margin-left:16.66667%}.column.is-3,.column.is-3-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3,.column.is-offset-3-tablet{margin-left:25%}.column.is-4,.column.is-4-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.column.is-offset-4,.column.is-offset-4-tablet{margin-left:33.33333%}.column.is-5,.column.is-5-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.column.is-offset-5,.column.is-offset-5-tablet{margin-left:41.66667%}.column.is-6,.column.is-6-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6,.column.is-offset-6-tablet{margin-left:50%}.column.is-7,.column.is-7-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.column.is-offset-7,.column.is-offset-7-tablet{margin-left:58.33333%}.column.is-8,.column.is-8-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.column.is-offset-8,.column.is-offset-8-tablet{margin-left:66.66667%}.column.is-9,.column.is-9-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9,.column.is-offset-9-tablet{margin-left:75%}.column.is-10,.column.is-10-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.column.is-offset-10,.column.is-offset-10-tablet{margin-left:83.33333%}.column.is-11,.column.is-11-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.column.is-offset-11,.column.is-offset-11-tablet{margin-left:91.66667%}.column.is-12,.column.is-12-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12,.column.is-offset-12-tablet{margin-left:100%}}@media screen and (max-width:1023px){.column.is-full-touch,.column.is-narrow-touch{-webkit-box-flex:0;-ms-flex:none;flex:none}.column.is-full-touch{width:100%}.column.is-three-quarters-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters-touch{margin-left:75%}.column.is-offset-two-thirds-touch{margin-left:66.6666%}.column.is-offset-half-touch{margin-left:50%}.column.is-offset-one-third-touch{margin-left:33.3333%}.column.is-offset-one-quarter-touch{margin-left:25%}.column.is-offset-one-fifth-touch{margin-left:20%}.column.is-offset-two-fifths-touch{margin-left:40%}.column.is-offset-three-fifths-touch{margin-left:60%}.column.is-offset-four-fifths-touch{margin-left:80%}.column.is-0-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:0}.column.is-offset-0-touch{margin-left:0}.column.is-1-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.column.is-offset-1-touch{margin-left:8.33333%}.column.is-2-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.column.is-offset-2-touch{margin-left:16.66667%}.column.is-3-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3-touch{margin-left:25%}.column.is-4-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.column.is-offset-4-touch{margin-left:33.33333%}.column.is-5-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.column.is-offset-5-touch{margin-left:41.66667%}.column.is-6-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6-touch{margin-left:50%}.column.is-7-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.column.is-offset-7-touch{margin-left:58.33333%}.column.is-8-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.column.is-offset-8-touch{margin-left:66.66667%}.column.is-9-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9-touch{margin-left:75%}.column.is-10-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.column.is-offset-10-touch{margin-left:83.33333%}.column.is-11-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.column.is-offset-11-touch{margin-left:91.66667%}.column.is-12-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12-touch{margin-left:100%}}@media screen and (min-width:1024px){.column.is-full-desktop,.column.is-narrow-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none}.column.is-full-desktop{width:100%}.column.is-three-quarters-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters-desktop{margin-left:75%}.column.is-offset-two-thirds-desktop{margin-left:66.6666%}.column.is-offset-half-desktop{margin-left:50%}.column.is-offset-one-third-desktop{margin-left:33.3333%}.column.is-offset-one-quarter-desktop{margin-left:25%}.column.is-offset-one-fifth-desktop{margin-left:20%}.column.is-offset-two-fifths-desktop{margin-left:40%}.column.is-offset-three-fifths-desktop{margin-left:60%}.column.is-offset-four-fifths-desktop{margin-left:80%}.column.is-0-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:0}.column.is-offset-0-desktop{margin-left:0}.column.is-1-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.column.is-offset-1-desktop{margin-left:8.33333%}.column.is-2-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.column.is-offset-2-desktop{margin-left:16.66667%}.column.is-3-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3-desktop{margin-left:25%}.column.is-4-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.column.is-offset-4-desktop{margin-left:33.33333%}.column.is-5-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.column.is-offset-5-desktop{margin-left:41.66667%}.column.is-6-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6-desktop{margin-left:50%}.column.is-7-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.column.is-offset-7-desktop{margin-left:58.33333%}.column.is-8-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.column.is-offset-8-desktop{margin-left:66.66667%}.column.is-9-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9-desktop{margin-left:75%}.column.is-10-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.column.is-offset-10-desktop{margin-left:83.33333%}.column.is-11-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.column.is-offset-11-desktop{margin-left:91.66667%}.column.is-12-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12-desktop{margin-left:100%}}@media screen and (min-width:1216px){.column.is-full-widescreen,.column.is-narrow-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none}.column.is-full-widescreen{width:100%}.column.is-three-quarters-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters-widescreen{margin-left:75%}.column.is-offset-two-thirds-widescreen{margin-left:66.6666%}.column.is-offset-half-widescreen{margin-left:50%}.column.is-offset-one-third-widescreen{margin-left:33.3333%}.column.is-offset-one-quarter-widescreen{margin-left:25%}.column.is-offset-one-fifth-widescreen{margin-left:20%}.column.is-offset-two-fifths-widescreen{margin-left:40%}.column.is-offset-three-fifths-widescreen{margin-left:60%}.column.is-offset-four-fifths-widescreen{margin-left:80%}.column.is-0-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:0}.column.is-offset-0-widescreen{margin-left:0}.column.is-1-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.column.is-offset-1-widescreen{margin-left:8.33333%}.column.is-2-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.column.is-offset-2-widescreen{margin-left:16.66667%}.column.is-3-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3-widescreen{margin-left:25%}.column.is-4-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.column.is-offset-4-widescreen{margin-left:33.33333%}.column.is-5-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.column.is-offset-5-widescreen{margin-left:41.66667%}.column.is-6-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6-widescreen{margin-left:50%}.column.is-7-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.column.is-offset-7-widescreen{margin-left:58.33333%}.column.is-8-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.column.is-offset-8-widescreen{margin-left:66.66667%}.column.is-9-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9-widescreen{margin-left:75%}.column.is-10-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.column.is-offset-10-widescreen{margin-left:83.33333%}.column.is-11-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.column.is-offset-11-widescreen{margin-left:91.66667%}.column.is-12-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12-widescreen{margin-left:100%}}@media screen and (min-width:1408px){.column.is-full-fullhd,.column.is-narrow-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none}.column.is-full-fullhd{width:100%}.column.is-three-quarters-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters-fullhd{margin-left:75%}.column.is-offset-two-thirds-fullhd{margin-left:66.6666%}.column.is-offset-half-fullhd{margin-left:50%}.column.is-offset-one-third-fullhd{margin-left:33.3333%}.column.is-offset-one-quarter-fullhd{margin-left:25%}.column.is-offset-one-fifth-fullhd{margin-left:20%}.column.is-offset-two-fifths-fullhd{margin-left:40%}.column.is-offset-three-fifths-fullhd{margin-left:60%}.column.is-offset-four-fifths-fullhd{margin-left:80%}.column.is-0-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:0}.column.is-offset-0-fullhd{margin-left:0}.column.is-1-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.column.is-offset-1-fullhd{margin-left:8.33333%}.column.is-2-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.column.is-offset-2-fullhd{margin-left:16.66667%}.column.is-3-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3-fullhd{margin-left:25%}.column.is-4-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.column.is-offset-4-fullhd{margin-left:33.33333%}.column.is-5-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.column.is-offset-5-fullhd{margin-left:41.66667%}.column.is-6-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6-fullhd{margin-left:50%}.column.is-7-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.column.is-offset-7-fullhd{margin-left:58.33333%}.column.is-8-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.column.is-offset-8-fullhd{margin-left:66.66667%}.column.is-9-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9-fullhd{margin-left:75%}.column.is-10-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.column.is-offset-10-fullhd{margin-left:83.33333%}.column.is-11-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.column.is-offset-11-fullhd{margin-left:91.66667%}.column.is-12-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12-fullhd{margin-left:100%}}.columns{margin-left:-.75rem;margin-right:-.75rem;margin-top:-.75rem}.columns:last-child{margin-bottom:-.75rem}.columns:not(:last-child){margin-bottom:.75rem}.columns.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.columns.is-gapless{margin-left:0;margin-right:0;margin-top:0}.columns.is-gapless>.column{margin:0;padding:0!important}.columns.is-gapless:not(:last-child){margin-bottom:1.5rem}.columns.is-gapless:last-child{margin-bottom:0}.columns.is-mobile{display:-webkit-box;display:-ms-flexbox;display:flex}.columns.is-multiline{-ms-flex-wrap:wrap;flex-wrap:wrap}.columns.is-vcentered{-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media print,screen and (min-width:769px){.columns:not(.is-desktop){display:-webkit-box;display:-ms-flexbox;display:flex}}@media screen and (min-width:1024px){.columns.is-desktop{display:-webkit-box;display:-ms-flexbox;display:flex}}.columns.is-variable{--columnGap:0.75rem;margin-left:calc(-1*var(--columnGap));margin-right:calc(-1*var(--columnGap))}.columns.is-variable .column{padding-left:var(--columnGap);padding-right:var(--columnGap)}.columns.is-variable.is-0{--columnGap:0rem}@media screen and (max-width:768px){.columns.is-variable.is-0-mobile{--columnGap:0rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-0-tablet{--columnGap:0rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-0-tablet-only{--columnGap:0rem}}@media screen and (max-width:1023px){.columns.is-variable.is-0-touch{--columnGap:0rem}}@media screen and (min-width:1024px){.columns.is-variable.is-0-desktop{--columnGap:0rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-0-desktop-only{--columnGap:0rem}}@media screen and (min-width:1216px){.columns.is-variable.is-0-widescreen{--columnGap:0rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-0-widescreen-only{--columnGap:0rem}}@media screen and (min-width:1408px){.columns.is-variable.is-0-fullhd{--columnGap:0rem}}.columns.is-variable.is-1{--columnGap:0.25rem}@media screen and (max-width:768px){.columns.is-variable.is-1-mobile{--columnGap:0.25rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-1-tablet{--columnGap:0.25rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-1-tablet-only{--columnGap:0.25rem}}@media screen and (max-width:1023px){.columns.is-variable.is-1-touch{--columnGap:0.25rem}}@media screen and (min-width:1024px){.columns.is-variable.is-1-desktop{--columnGap:0.25rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-1-desktop-only{--columnGap:0.25rem}}@media screen and (min-width:1216px){.columns.is-variable.is-1-widescreen{--columnGap:0.25rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-1-widescreen-only{--columnGap:0.25rem}}@media screen and (min-width:1408px){.columns.is-variable.is-1-fullhd{--columnGap:0.25rem}}.columns.is-variable.is-2{--columnGap:0.5rem}@media screen and (max-width:768px){.columns.is-variable.is-2-mobile{--columnGap:0.5rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-2-tablet{--columnGap:0.5rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-2-tablet-only{--columnGap:0.5rem}}@media screen and (max-width:1023px){.columns.is-variable.is-2-touch{--columnGap:0.5rem}}@media screen and (min-width:1024px){.columns.is-variable.is-2-desktop{--columnGap:0.5rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-2-desktop-only{--columnGap:0.5rem}}@media screen and (min-width:1216px){.columns.is-variable.is-2-widescreen{--columnGap:0.5rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-2-widescreen-only{--columnGap:0.5rem}}@media screen and (min-width:1408px){.columns.is-variable.is-2-fullhd{--columnGap:0.5rem}}.columns.is-variable.is-3{--columnGap:0.75rem}@media screen and (max-width:768px){.columns.is-variable.is-3-mobile{--columnGap:0.75rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-3-tablet{--columnGap:0.75rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-3-tablet-only{--columnGap:0.75rem}}@media screen and (max-width:1023px){.columns.is-variable.is-3-touch{--columnGap:0.75rem}}@media screen and (min-width:1024px){.columns.is-variable.is-3-desktop{--columnGap:0.75rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-3-desktop-only{--columnGap:0.75rem}}@media screen and (min-width:1216px){.columns.is-variable.is-3-widescreen{--columnGap:0.75rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-3-widescreen-only{--columnGap:0.75rem}}@media screen and (min-width:1408px){.columns.is-variable.is-3-fullhd{--columnGap:0.75rem}}.columns.is-variable.is-4{--columnGap:1rem}@media screen and (max-width:768px){.columns.is-variable.is-4-mobile{--columnGap:1rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-4-tablet{--columnGap:1rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-4-tablet-only{--columnGap:1rem}}@media screen and (max-width:1023px){.columns.is-variable.is-4-touch{--columnGap:1rem}}@media screen and (min-width:1024px){.columns.is-variable.is-4-desktop{--columnGap:1rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-4-desktop-only{--columnGap:1rem}}@media screen and (min-width:1216px){.columns.is-variable.is-4-widescreen{--columnGap:1rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-4-widescreen-only{--columnGap:1rem}}@media screen and (min-width:1408px){.columns.is-variable.is-4-fullhd{--columnGap:1rem}}.columns.is-variable.is-5{--columnGap:1.25rem}@media screen and (max-width:768px){.columns.is-variable.is-5-mobile{--columnGap:1.25rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-5-tablet{--columnGap:1.25rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-5-tablet-only{--columnGap:1.25rem}}@media screen and (max-width:1023px){.columns.is-variable.is-5-touch{--columnGap:1.25rem}}@media screen and (min-width:1024px){.columns.is-variable.is-5-desktop{--columnGap:1.25rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-5-desktop-only{--columnGap:1.25rem}}@media screen and (min-width:1216px){.columns.is-variable.is-5-widescreen{--columnGap:1.25rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-5-widescreen-only{--columnGap:1.25rem}}@media screen and (min-width:1408px){.columns.is-variable.is-5-fullhd{--columnGap:1.25rem}}.columns.is-variable.is-6{--columnGap:1.5rem}@media screen and (max-width:768px){.columns.is-variable.is-6-mobile{--columnGap:1.5rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-6-tablet{--columnGap:1.5rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-6-tablet-only{--columnGap:1.5rem}}@media screen and (max-width:1023px){.columns.is-variable.is-6-touch{--columnGap:1.5rem}}@media screen and (min-width:1024px){.columns.is-variable.is-6-desktop{--columnGap:1.5rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-6-desktop-only{--columnGap:1.5rem}}@media screen and (min-width:1216px){.columns.is-variable.is-6-widescreen{--columnGap:1.5rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-6-widescreen-only{--columnGap:1.5rem}}@media screen and (min-width:1408px){.columns.is-variable.is-6-fullhd{--columnGap:1.5rem}}.columns.is-variable.is-7{--columnGap:1.75rem}@media screen and (max-width:768px){.columns.is-variable.is-7-mobile{--columnGap:1.75rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-7-tablet{--columnGap:1.75rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-7-tablet-only{--columnGap:1.75rem}}@media screen and (max-width:1023px){.columns.is-variable.is-7-touch{--columnGap:1.75rem}}@media screen and (min-width:1024px){.columns.is-variable.is-7-desktop{--columnGap:1.75rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-7-desktop-only{--columnGap:1.75rem}}@media screen and (min-width:1216px){.columns.is-variable.is-7-widescreen{--columnGap:1.75rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-7-widescreen-only{--columnGap:1.75rem}}@media screen and (min-width:1408px){.columns.is-variable.is-7-fullhd{--columnGap:1.75rem}}.columns.is-variable.is-8{--columnGap:2rem}@media screen and (max-width:768px){.columns.is-variable.is-8-mobile{--columnGap:2rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-8-tablet{--columnGap:2rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-8-tablet-only{--columnGap:2rem}}@media screen and (max-width:1023px){.columns.is-variable.is-8-touch{--columnGap:2rem}}@media screen and (min-width:1024px){.columns.is-variable.is-8-desktop{--columnGap:2rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-8-desktop-only{--columnGap:2rem}}@media screen and (min-width:1216px){.columns.is-variable.is-8-widescreen{--columnGap:2rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-8-widescreen-only{--columnGap:2rem}}@media screen and (min-width:1408px){.columns.is-variable.is-8-fullhd{--columnGap:2rem}}.tile{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:block;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;min-height:-webkit-min-content;min-height:-moz-min-content;min-height:min-content}.tile.is-ancestor{margin-left:-.75rem;margin-right:-.75rem;margin-top:-.75rem}.tile.is-ancestor:last-child{margin-bottom:-.75rem}.tile.is-ancestor:not(:last-child){margin-bottom:.75rem}.tile.is-child{margin:0!important}.tile.is-parent{padding:.75rem}.tile.is-vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.tile.is-vertical>.tile.is-child:not(:last-child){margin-bottom:1.5rem!important}@media print,screen and (min-width:769px){.tile:not(.is-child){display:-webkit-box;display:-ms-flexbox;display:flex}.tile.is-1{width:8.33333%}.tile.is-1,.tile.is-2{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-2{width:16.66667%}.tile.is-3{width:25%}.tile.is-3,.tile.is-4{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-4{width:33.33333%}.tile.is-5{width:41.66667%}.tile.is-5,.tile.is-6{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-6{width:50%}.tile.is-7{width:58.33333%}.tile.is-7,.tile.is-8{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-8{width:66.66667%}.tile.is-9{width:75%}.tile.is-9,.tile.is-10{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-10{width:83.33333%}.tile.is-11{width:91.66667%}.tile.is-11,.tile.is-12{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-12{width:100%}}.hero{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.hero .navbar{background:none}.hero .tabs ul{border-bottom:none}.hero.is-white{background-color:#fff;color:#0a0a0a}.hero.is-white a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-white strong{color:inherit}.hero.is-white .title{color:#0a0a0a}.hero.is-white .subtitle{color:rgba(10,10,10,.9)}.hero.is-white .subtitle a:not(.button),.hero.is-white .subtitle strong{color:#0a0a0a}@media screen and (max-width:1023px){.hero.is-white .navbar-menu{background-color:#fff}}.hero.is-white .navbar-item,.hero.is-white .navbar-link{color:rgba(10,10,10,.7)}.hero.is-white .navbar-link.is-active,.hero.is-white .navbar-link:hover,.hero.is-white a.navbar-item.is-active,.hero.is-white a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.hero.is-white .tabs a{color:#0a0a0a;opacity:.9}.hero.is-white .tabs a:hover,.hero.is-white .tabs li.is-active a{opacity:1}.hero.is-white .tabs.is-boxed a,.hero.is-white .tabs.is-toggle a{color:#0a0a0a}.hero.is-white .tabs.is-boxed a:hover,.hero.is-white .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-white .tabs.is-boxed li.is-active a,.hero.is-white .tabs.is-boxed li.is-active a:hover,.hero.is-white .tabs.is-toggle li.is-active a,.hero.is-white .tabs.is-toggle li.is-active a:hover{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.hero.is-white.is-bold{background-image:linear-gradient(141deg,#e6e6e6,#fff 71%,#fff)}@media screen and (max-width:768px){.hero.is-white.is-bold .navbar-menu{background-image:linear-gradient(141deg,#e6e6e6,#fff 71%,#fff)}}.hero.is-black{background-color:#0a0a0a;color:#fff}.hero.is-black a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-black strong{color:inherit}.hero.is-black .title{color:#fff}.hero.is-black .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-black .subtitle a:not(.button),.hero.is-black .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-black .navbar-menu{background-color:#0a0a0a}}.hero.is-black .navbar-item,.hero.is-black .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-black .navbar-link.is-active,.hero.is-black .navbar-link:hover,.hero.is-black a.navbar-item.is-active,.hero.is-black a.navbar-item:hover{background-color:#000;color:#fff}.hero.is-black .tabs a{color:#fff;opacity:.9}.hero.is-black .tabs a:hover,.hero.is-black .tabs li.is-active a{opacity:1}.hero.is-black .tabs.is-boxed a,.hero.is-black .tabs.is-toggle a{color:#fff}.hero.is-black .tabs.is-boxed a:hover,.hero.is-black .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-black .tabs.is-boxed li.is-active a,.hero.is-black .tabs.is-boxed li.is-active a:hover,.hero.is-black .tabs.is-toggle li.is-active a,.hero.is-black .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#0a0a0a}.hero.is-black.is-bold{background-image:linear-gradient(141deg,#000,#0a0a0a 71%,#181616)}@media screen and (max-width:768px){.hero.is-black.is-bold .navbar-menu{background-image:linear-gradient(141deg,#000,#0a0a0a 71%,#181616)}}.hero.is-light{background-color:#f5f5f5;color:#363636}.hero.is-light a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-light strong{color:inherit}.hero.is-light .title{color:#363636}.hero.is-light .subtitle{color:rgba(54,54,54,.9)}.hero.is-light .subtitle a:not(.button),.hero.is-light .subtitle strong{color:#363636}@media screen and (max-width:1023px){.hero.is-light .navbar-menu{background-color:#f5f5f5}}.hero.is-light .navbar-item,.hero.is-light .navbar-link{color:rgba(54,54,54,.7)}.hero.is-light .navbar-link.is-active,.hero.is-light .navbar-link:hover,.hero.is-light a.navbar-item.is-active,.hero.is-light a.navbar-item:hover{background-color:#e8e8e8;color:#363636}.hero.is-light .tabs a{color:#363636;opacity:.9}.hero.is-light .tabs a:hover,.hero.is-light .tabs li.is-active a{opacity:1}.hero.is-light .tabs.is-boxed a,.hero.is-light .tabs.is-toggle a{color:#363636}.hero.is-light .tabs.is-boxed a:hover,.hero.is-light .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-light .tabs.is-boxed li.is-active a,.hero.is-light .tabs.is-boxed li.is-active a:hover,.hero.is-light .tabs.is-toggle li.is-active a,.hero.is-light .tabs.is-toggle li.is-active a:hover{background-color:#363636;border-color:#363636;color:#f5f5f5}.hero.is-light.is-bold{background-image:linear-gradient(141deg,#dfd8d9,#f5f5f5 71%,#fff)}@media screen and (max-width:768px){.hero.is-light.is-bold .navbar-menu{background-image:linear-gradient(141deg,#dfd8d9,#f5f5f5 71%,#fff)}}.hero.is-dark{background-color:#363636;color:#f5f5f5}.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-dark strong{color:inherit}.hero.is-dark .title{color:#f5f5f5}.hero.is-dark .subtitle{color:hsla(0,0%,96.1%,.9)}.hero.is-dark .subtitle a:not(.button),.hero.is-dark .subtitle strong{color:#f5f5f5}@media screen and (max-width:1023px){.hero.is-dark .navbar-menu{background-color:#363636}}.hero.is-dark .navbar-item,.hero.is-dark .navbar-link{color:hsla(0,0%,96.1%,.7)}.hero.is-dark .navbar-link.is-active,.hero.is-dark .navbar-link:hover,.hero.is-dark a.navbar-item.is-active,.hero.is-dark a.navbar-item:hover{background-color:#292929;color:#f5f5f5}.hero.is-dark .tabs a{color:#f5f5f5;opacity:.9}.hero.is-dark .tabs a:hover,.hero.is-dark .tabs li.is-active a{opacity:1}.hero.is-dark .tabs.is-boxed a,.hero.is-dark .tabs.is-toggle a{color:#f5f5f5}.hero.is-dark .tabs.is-boxed a:hover,.hero.is-dark .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-dark .tabs.is-boxed li.is-active a,.hero.is-dark .tabs.is-boxed li.is-active a:hover,.hero.is-dark .tabs.is-toggle li.is-active a,.hero.is-dark .tabs.is-toggle li.is-active a:hover{background-color:#f5f5f5;border-color:#f5f5f5;color:#363636}.hero.is-dark.is-bold{background-image:linear-gradient(141deg,#1f191a,#363636 71%,#46403f)}@media screen and (max-width:768px){.hero.is-dark.is-bold .navbar-menu{background-image:linear-gradient(141deg,#1f191a,#363636 71%,#46403f)}}.hero.is-primary{background-color:#7957d5;color:#fff}.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-primary strong{color:inherit}.hero.is-primary .title{color:#fff}.hero.is-primary .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-primary .subtitle a:not(.button),.hero.is-primary .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-primary .navbar-menu{background-color:#7957d5}}.hero.is-primary .navbar-item,.hero.is-primary .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-primary .navbar-link.is-active,.hero.is-primary .navbar-link:hover,.hero.is-primary a.navbar-item.is-active,.hero.is-primary a.navbar-item:hover{background-color:#6943d0;color:#fff}.hero.is-primary .tabs a{color:#fff;opacity:.9}.hero.is-primary .tabs a:hover,.hero.is-primary .tabs li.is-active a{opacity:1}.hero.is-primary .tabs.is-boxed a,.hero.is-primary .tabs.is-toggle a{color:#fff}.hero.is-primary .tabs.is-boxed a:hover,.hero.is-primary .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-primary .tabs.is-boxed li.is-active a,.hero.is-primary .tabs.is-boxed li.is-active a:hover,.hero.is-primary .tabs.is-toggle li.is-active a,.hero.is-primary .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#7957d5}.hero.is-primary.is-bold{background-image:linear-gradient(141deg,#3725d4,#7957d5 71%,#9b67df)}@media screen and (max-width:768px){.hero.is-primary.is-bold .navbar-menu{background-image:linear-gradient(141deg,#3725d4,#7957d5 71%,#9b67df)}}.hero.is-link{background-color:#7957d5;color:#fff}.hero.is-link a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-link strong{color:inherit}.hero.is-link .title{color:#fff}.hero.is-link .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-link .subtitle a:not(.button),.hero.is-link .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-link .navbar-menu{background-color:#7957d5}}.hero.is-link .navbar-item,.hero.is-link .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-link .navbar-link.is-active,.hero.is-link .navbar-link:hover,.hero.is-link a.navbar-item.is-active,.hero.is-link a.navbar-item:hover{background-color:#6943d0;color:#fff}.hero.is-link .tabs a{color:#fff;opacity:.9}.hero.is-link .tabs a:hover,.hero.is-link .tabs li.is-active a{opacity:1}.hero.is-link .tabs.is-boxed a,.hero.is-link .tabs.is-toggle a{color:#fff}.hero.is-link .tabs.is-boxed a:hover,.hero.is-link .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-link .tabs.is-boxed li.is-active a,.hero.is-link .tabs.is-boxed li.is-active a:hover,.hero.is-link .tabs.is-toggle li.is-active a,.hero.is-link .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#7957d5}.hero.is-link.is-bold{background-image:linear-gradient(141deg,#3725d4,#7957d5 71%,#9b67df)}@media screen and (max-width:768px){.hero.is-link.is-bold .navbar-menu{background-image:linear-gradient(141deg,#3725d4,#7957d5 71%,#9b67df)}}.hero.is-info{background-color:#167df0;color:#fff}.hero.is-info a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-info strong{color:inherit}.hero.is-info .title{color:#fff}.hero.is-info .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-info .subtitle a:not(.button),.hero.is-info .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-info .navbar-menu{background-color:#167df0}}.hero.is-info .navbar-item,.hero.is-info .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-info .navbar-link.is-active,.hero.is-info .navbar-link:hover,.hero.is-info a.navbar-item.is-active,.hero.is-info a.navbar-item:hover{background-color:#0e71de;color:#fff}.hero.is-info .tabs a{color:#fff;opacity:.9}.hero.is-info .tabs a:hover,.hero.is-info .tabs li.is-active a{opacity:1}.hero.is-info .tabs.is-boxed a,.hero.is-info .tabs.is-toggle a{color:#fff}.hero.is-info .tabs.is-boxed a:hover,.hero.is-info .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-info .tabs.is-boxed li.is-active a,.hero.is-info .tabs.is-boxed li.is-active a:hover,.hero.is-info .tabs.is-toggle li.is-active a,.hero.is-info .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#167df0}.hero.is-info.is-bold{background-image:linear-gradient(141deg,#0286d1,#167df0 71%,#2868f7)}@media screen and (max-width:768px){.hero.is-info.is-bold .navbar-menu{background-image:linear-gradient(141deg,#0286d1,#167df0 71%,#2868f7)}}.hero.is-success{background-color:#23d160;color:#fff}.hero.is-success a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-success strong{color:inherit}.hero.is-success .title{color:#fff}.hero.is-success .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-success .subtitle a:not(.button),.hero.is-success .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-success .navbar-menu{background-color:#23d160}}.hero.is-success .navbar-item,.hero.is-success .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-success .navbar-link.is-active,.hero.is-success .navbar-link:hover,.hero.is-success a.navbar-item.is-active,.hero.is-success a.navbar-item:hover{background-color:#20bc56;color:#fff}.hero.is-success .tabs a{color:#fff;opacity:.9}.hero.is-success .tabs a:hover,.hero.is-success .tabs li.is-active a{opacity:1}.hero.is-success .tabs.is-boxed a,.hero.is-success .tabs.is-toggle a{color:#fff}.hero.is-success .tabs.is-boxed a:hover,.hero.is-success .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-success .tabs.is-boxed li.is-active a,.hero.is-success .tabs.is-boxed li.is-active a:hover,.hero.is-success .tabs.is-toggle li.is-active a,.hero.is-success .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#23d160}.hero.is-success.is-bold{background-image:linear-gradient(141deg,#12af2f,#23d160 71%,#2ce28a)}@media screen and (max-width:768px){.hero.is-success.is-bold .navbar-menu{background-image:linear-gradient(141deg,#12af2f,#23d160 71%,#2ce28a)}}.hero.is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-warning strong{color:inherit}.hero.is-warning .title{color:rgba(0,0,0,.7)}.hero.is-warning .subtitle{color:rgba(0,0,0,.9)}.hero.is-warning .subtitle a:not(.button),.hero.is-warning .subtitle strong{color:rgba(0,0,0,.7)}@media screen and (max-width:1023px){.hero.is-warning .navbar-menu{background-color:#ffdd57}}.hero.is-warning .navbar-item,.hero.is-warning .navbar-link{color:rgba(0,0,0,.7)}.hero.is-warning .navbar-link.is-active,.hero.is-warning .navbar-link:hover,.hero.is-warning a.navbar-item.is-active,.hero.is-warning a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}.hero.is-warning .tabs a{color:rgba(0,0,0,.7);opacity:.9}.hero.is-warning .tabs a:hover,.hero.is-warning .tabs li.is-active a{opacity:1}.hero.is-warning .tabs.is-boxed a,.hero.is-warning .tabs.is-toggle a{color:rgba(0,0,0,.7)}.hero.is-warning .tabs.is-boxed a:hover,.hero.is-warning .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-warning .tabs.is-boxed li.is-active a,.hero.is-warning .tabs.is-boxed li.is-active a:hover,.hero.is-warning .tabs.is-toggle li.is-active a,.hero.is-warning .tabs.is-toggle li.is-active a:hover{background-color:rgba(0,0,0,.7);border-color:rgba(0,0,0,.7);color:#ffdd57}.hero.is-warning.is-bold{background-image:linear-gradient(141deg,#ffaf24,#ffdd57 71%,#fffa70)}@media screen and (max-width:768px){.hero.is-warning.is-bold .navbar-menu{background-image:linear-gradient(141deg,#ffaf24,#ffdd57 71%,#fffa70)}}.hero.is-danger{background-color:#ff3860;color:#fff}.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-danger strong{color:inherit}.hero.is-danger .title{color:#fff}.hero.is-danger .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-danger .subtitle a:not(.button),.hero.is-danger .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-danger .navbar-menu{background-color:#ff3860}}.hero.is-danger .navbar-item,.hero.is-danger .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-danger .navbar-link.is-active,.hero.is-danger .navbar-link:hover,.hero.is-danger a.navbar-item.is-active,.hero.is-danger a.navbar-item:hover{background-color:#ff1f4b;color:#fff}.hero.is-danger .tabs a{color:#fff;opacity:.9}.hero.is-danger .tabs a:hover,.hero.is-danger .tabs li.is-active a{opacity:1}.hero.is-danger .tabs.is-boxed a,.hero.is-danger .tabs.is-toggle a{color:#fff}.hero.is-danger .tabs.is-boxed a:hover,.hero.is-danger .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-danger .tabs.is-boxed li.is-active a,.hero.is-danger .tabs.is-boxed li.is-active a:hover,.hero.is-danger .tabs.is-toggle li.is-active a,.hero.is-danger .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#ff3860}.hero.is-danger.is-bold{background-image:linear-gradient(141deg,#ff0561,#ff3860 71%,#ff5257)}@media screen and (max-width:768px){.hero.is-danger.is-bold .navbar-menu{background-image:linear-gradient(141deg,#ff0561,#ff3860 71%,#ff5257)}}.hero.is-small .hero-body{padding-bottom:1.5rem;padding-top:1.5rem}@media print,screen and (min-width:769px){.hero.is-medium .hero-body{padding-bottom:9rem;padding-top:9rem}}@media print,screen and (min-width:769px){.hero.is-large .hero-body{padding-bottom:18rem;padding-top:18rem}}.hero.is-fullheight-with-navbar .hero-body,.hero.is-fullheight .hero-body,.hero.is-halfheight .hero-body{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.hero.is-fullheight-with-navbar .hero-body>.container,.hero.is-fullheight .hero-body>.container,.hero.is-halfheight .hero-body>.container{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.hero.is-halfheight{min-height:50vh}.hero.is-fullheight{min-height:100vh}.hero-video{overflow:hidden}.hero-video video{left:50%;min-height:100%;min-width:100%;position:absolute;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.hero-video.is-transparent{opacity:.3}@media screen and (max-width:768px){.hero-video{display:none}}.hero-buttons{margin-top:1.5rem}@media screen and (max-width:768px){.hero-buttons .button{display:-webkit-box;display:-ms-flexbox;display:flex}.hero-buttons .button:not(:last-child){margin-bottom:.75rem}}@media print,screen and (min-width:769px){.hero-buttons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.hero-buttons .button:not(:last-child){margin-right:1.5rem}}.hero-foot,.hero-head{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0}.hero-body,.hero-foot,.hero-head{-ms-flex-negative:0;flex-shrink:0}.hero-body{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.hero-body,.section{padding:3rem 1.5rem}@media screen and (min-width:1024px){.section.is-medium{padding:9rem 1.5rem}.section.is-large{padding:18rem 1.5rem}}.footer{background-color:#fafafa;padding:3rem 1.5rem 6rem}.is-noscroll{position:fixed;overflow-y:hidden;width:100%;bottom:0}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}@keyframes fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}.fadeOutDown{-webkit-animation-name:fadeOutDown;animation-name:fadeOutDown}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}.fadeOutUp{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}@keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp}.fade-enter-active,.fade-leave-active{-webkit-transition:opacity .15s ease-out;transition:opacity .15s ease-out}.fade-enter,.fade-leave-to{opacity:0}.zoom-in-enter-active,.zoom-in-leave-active{-webkit-transition:opacity .15s ease-out;transition:opacity .15s ease-out}.zoom-in-enter-active .animation-content,.zoom-in-leave-active .animation-content{-webkit-transition:-webkit-transform .15s ease-out;transition:-webkit-transform .15s ease-out;transition:transform .15s ease-out;transition:transform .15s ease-out,-webkit-transform .15s ease-out}.zoom-in-enter,.zoom-in-leave-active{opacity:0}.zoom-in-enter .animation-content,.zoom-in-leave-active .animation-content{-webkit-transform:scale(.95);transform:scale(.95)}.zoom-out-enter-active,.zoom-out-leave-active{-webkit-transition:opacity .15s ease-out;transition:opacity .15s ease-out}.zoom-out-enter-active .animation-content,.zoom-out-leave-active .animation-content{-webkit-transition:-webkit-transform .15s ease-out;transition:-webkit-transform .15s ease-out;transition:transform .15s ease-out;transition:transform .15s ease-out,-webkit-transform .15s ease-out}.zoom-out-enter,.zoom-out-leave-active{opacity:0}.zoom-out-enter .animation-content,.zoom-out-leave-active .animation-content{-webkit-transform:scale(1.05);transform:scale(1.05)}.slide-next-enter-active,.slide-next-leave-active,.slide-prev-enter-active,.slide-prev-leave-active{-webkit-transition:-webkit-transform .25s cubic-bezier(.785,.135,.15,.86);transition:-webkit-transform .25s cubic-bezier(.785,.135,.15,.86);transition:transform .25s cubic-bezier(.785,.135,.15,.86);transition:transform .25s cubic-bezier(.785,.135,.15,.86),-webkit-transform .25s cubic-bezier(.785,.135,.15,.86)}.slide-next-enter,.slide-prev-leave-to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);position:absolute;width:100%}.slide-next-leave-to,.slide-prev-enter{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);position:absolute;width:100%}.slide-down-enter-active,.slide-down-leave-active,.slide-up-enter-active,.slide-up-leave-active{-webkit-transition:-webkit-transform .25s cubic-bezier(.785,.135,.15,.86);transition:-webkit-transform .25s cubic-bezier(.785,.135,.15,.86);transition:transform .25s cubic-bezier(.785,.135,.15,.86);transition:transform .25s cubic-bezier(.785,.135,.15,.86),-webkit-transform .25s cubic-bezier(.785,.135,.15,.86)}.slide-down-enter,.slide-up-leave-to{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);position:absolute;height:100%}.slide-down-leave-to,.slide-up-enter{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);position:absolute;height:100%}.slide-enter-active,.slide-leave-active{-webkit-transition:.15s ease-out;transition:.15s ease-out}.slide-leave-active{-webkit-transition-timing-function:cubic-bezier(0,1,.5,1);transition-timing-function:cubic-bezier(0,1,.5,1)}.slide-enter-to,.slide-leave{max-height:100px;overflow:hidden}.slide-enter,.slide-leave-to{overflow:hidden;max-height:0}.autocomplete{position:relative}.autocomplete .dropdown-menu{display:block;min-width:100%;max-width:100%}.autocomplete .dropdown-menu.is-opened-top{top:auto;bottom:100%}.autocomplete .dropdown-content{overflow:auto;max-height:200px}.autocomplete .dropdown-item,.autocomplete .dropdown .dropdown-menu .has-link a,.dropdown .dropdown-menu .has-link .autocomplete a{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.autocomplete .dropdown-item.is-hovered,.autocomplete .dropdown .dropdown-menu .has-link a.is-hovered,.dropdown .dropdown-menu .has-link .autocomplete a.is-hovered{background:#f5f5f5;color:#0a0a0a}.autocomplete .dropdown-item.is-disabled,.autocomplete .dropdown .dropdown-menu .has-link a.is-disabled,.dropdown .dropdown-menu .has-link .autocomplete a.is-disabled{opacity:.5;cursor:not-allowed}.autocomplete.is-small{border-radius:2px;font-size:.75rem}.autocomplete.is-medium{font-size:1.25rem}.autocomplete.is-large{font-size:1.5rem}.carousel{min-height:120px;position:relative}.carousel.is-overlay{background-color:rgba(10,10,10,.86);-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-ms-flexbox;display:flex;max-height:100vh;position:fixed;z-index:40}.carousel.is-overlay .carousel-item img{cursor:default}.carousel.is-overlay .carousel-indicator.has-background{background:transparent}.carousel .progress{border-radius:2px;height:.25rem;margin-bottom:0}.carousel .carousel-items{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;overflow:hidden;width:100%}@media print,screen and (min-width:769px){.carousel .carousel-items:hover .carousel-arrow.is-hovered{opacity:1}}.carousel .carousel-items .carousel-item{-ms-flex-negative:0;flex-shrink:0;width:100%}.carousel .carousel-pause{pointer-events:none;position:absolute;top:0;right:.15rem;z-index:1}.carousel .carousel-indicator{width:100%;padding:.5rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.carousel .carousel-indicator.has-background{background:rgba(10,10,10,.5)}.carousel .carousel-indicator.has-custom{-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-overflow-scrolling:touch;overflow:hidden;overflow-x:auto}.carousel .carousel-indicator.has-custom.is-small .indicator-item{-webkit-box-flex:1;-ms-flex:1 0 10%;flex:1 0 10%}.carousel .carousel-indicator.has-custom.is-medium .indicator-item{-webkit-box-flex:1;-ms-flex:1 0 16.66667%;flex:1 0 16.66667%}.carousel .carousel-indicator.is-inside{position:absolute}.carousel .carousel-indicator.is-inside.is-bottom{bottom:0}.carousel .carousel-indicator.is-inside.is-top{top:0}.carousel .carousel-indicator .indicator-item:not(:last-child){margin-right:.5rem}.carousel .carousel-indicator .indicator-item .indicator-style:hover,.carousel .carousel-indicator .indicator-item.is-active .indicator-style{background:#7957d5;border:1px solid #fff}.carousel .carousel-indicator .indicator-item .indicator-style{display:block;border:1px solid #7957d5;background:#fff;outline:none;-webkit-transition:.15s ease-out;transition:.15s ease-out}.carousel .carousel-indicator .indicator-item .indicator-style.is-boxes{height:10px;width:10px}.carousel .carousel-indicator .indicator-item .indicator-style.is-dots{border-radius:10px;height:10px;width:10px}.carousel .carousel-indicator .indicator-item .indicator-style.is-lines{height:5px;width:25px}.carousel-list{position:relative;overflow:hidden;width:100%}.carousel-list.has-shadow{-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25)}@media print,screen and (min-width:769px){.carousel-list:hover .carousel-arrow.is-hovered{opacity:1}}.carousel-list .carousel-slides{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}.carousel-list .carousel-slides:not(.is-dragging){-webkit-transition:all .25s ease-out 0s;transition:all .25s ease-out 0s}.carousel-list .carousel-slides.has-grayscale .carousel-slide img{-webkit-filter:grayscale(100%);filter:grayscale(100%)}.carousel-list .carousel-slides.has-grayscale .carousel-slide.is-active img{-webkit-filter:grayscale(0);filter:grayscale(0)}.carousel-list .carousel-slides.has-opacity .carousel-slide img{opacity:.25}.carousel-list .carousel-slides.has-opacity .carousel-slide.is-active img{opacity:1}.carousel-list .carousel-slides .carousel-slide{border:2px solid transparent;-ms-flex-negative:0;flex-shrink:0}.carousel-arrow{-webkit-transition:.15s ease-out;transition:.15s ease-out}.carousel-arrow.is-hovered{opacity:0}.carousel-arrow .icon{background:#fff;color:#7957d5;cursor:pointer;border:1px solid #fff;border-radius:290486px;outline:0}.carousel-arrow .icon:hover{border:1px solid #7957d5;opacity:1}.carousel-arrow .icon.has-icons-left,.carousel-arrow .icon.has-icons-right{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:1}.carousel-arrow .icon.has-icons-left{left:1.5rem}.carousel-arrow .icon.has-icons-right{right:1.5rem}.b-checkbox.checkbox{outline:none;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.b-checkbox.checkbox:not(.button){margin-right:.5em}.b-checkbox.checkbox:not(.button)+.checkbox:last-child{margin-right:0}.b-checkbox.checkbox input[type=checkbox]{position:absolute;left:0;opacity:0;outline:none;z-index:-1}.b-checkbox.checkbox input[type=checkbox]+.check{width:1.25em;height:1.25em;-ms-flex-negative:0;flex-shrink:0;border-radius:4px;border:2px solid #7a7a7a;-webkit-transition:background .15s ease-out;transition:background .15s ease-out;background:transparent}.b-checkbox.checkbox input[type=checkbox]:checked+.check{background:#7957d5 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#7957d5}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-white{background:#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%230a0a0a'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#fff}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-black{background:#0a0a0a url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#0a0a0a}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-light{background:#f5f5f5 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23363636'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#f5f5f5}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-dark{background:#363636 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23f5f5f5'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#363636}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-link,.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-primary{background:#7957d5 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#7957d5}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-info{background:#167df0 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#167df0}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-success{background:#23d160 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#23d160}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-warning{background:#ffdd57 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='rgba(0,0,0,.7)'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#ffdd57}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-danger{background:#ff3860 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#ff3860}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check{background:#7957d5 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#7957d5}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-white{background:#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%230a0a0a' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#fff}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-black{background:#0a0a0a url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#0a0a0a}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-light{background:#f5f5f5 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23363636' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#f5f5f5}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-dark{background:#363636 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23f5f5f5' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#363636}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-primary{background:#7957d5 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#7957d5}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-link{background:#7957d5 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#7957d5}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-info{background:#167df0 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#167df0}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-success{background:#23d160 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#23d160}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-warning{background:#ffdd57 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='rgba(0,0,0,.7)' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#ffdd57}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-danger{background:#ff3860 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#ff3860}.b-checkbox.checkbox input[type=checkbox]:focus+.check{-webkit-box-shadow:0 0 .5em hsla(0,0%,47.8%,.8);box-shadow:0 0 .5em hsla(0,0%,47.8%,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check{-webkit-box-shadow:0 0 .5em rgba(121,87,213,.8);box-shadow:0 0 .5em rgba(121,87,213,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-white{-webkit-box-shadow:0 0 .5em hsla(0,0%,100%,.8);box-shadow:0 0 .5em hsla(0,0%,100%,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-black{-webkit-box-shadow:0 0 .5em rgba(10,10,10,.8);box-shadow:0 0 .5em rgba(10,10,10,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-light{-webkit-box-shadow:0 0 .5em hsla(0,0%,96.1%,.8);box-shadow:0 0 .5em hsla(0,0%,96.1%,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-dark{-webkit-box-shadow:0 0 .5em rgba(54,54,54,.8);box-shadow:0 0 .5em rgba(54,54,54,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-link,.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-primary{-webkit-box-shadow:0 0 .5em rgba(121,87,213,.8);box-shadow:0 0 .5em rgba(121,87,213,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-info{-webkit-box-shadow:0 0 .5em rgba(22,125,240,.8);box-shadow:0 0 .5em rgba(22,125,240,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-success{-webkit-box-shadow:0 0 .5em rgba(35,209,96,.8);box-shadow:0 0 .5em rgba(35,209,96,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-warning{-webkit-box-shadow:0 0 .5em rgba(255,221,87,.8);box-shadow:0 0 .5em rgba(255,221,87,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-danger{-webkit-box-shadow:0 0 .5em rgba(255,56,96,.8);box-shadow:0 0 .5em rgba(255,56,96,.8)}.b-checkbox.checkbox .control-label{padding-left:.5em}.b-checkbox.checkbox.button{display:-webkit-box;display:-ms-flexbox;display:flex}.b-checkbox.checkbox[disabled]{opacity:.5}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check{border-color:#7957d5}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-white{border-color:#fff}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-black{border-color:#0a0a0a}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-light{border-color:#f5f5f5}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-dark{border-color:#363636}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-link,.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-primary{border-color:#7957d5}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-info{border-color:#167df0}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-success{border-color:#23d160}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-warning{border-color:#ffdd57}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-danger{border-color:#ff3860}.b-checkbox.checkbox.is-small{border-radius:2px;font-size:.75rem}.b-checkbox.checkbox.is-medium{font-size:1.25rem}.b-checkbox.checkbox.is-large{font-size:1.5rem}.b-clockpicker .card-header{background-color:#7957d5;color:#fff}.b-clockpicker .b-clockpicker-face:after{background-color:#7957d5}.b-clockpicker .b-clockpicker-face-hand{background-color:#7957d5;border-color:#7957d5}.b-clockpicker .b-clockpicker-face-number.active{background-color:#7957d5;color:#fff}.b-clockpicker.is-white .card-header{background-color:#fff;color:#0a0a0a}.b-clockpicker.is-white .b-clockpicker-face:after{background-color:#fff}.b-clockpicker.is-white .b-clockpicker-face-hand{background-color:#fff;border-color:#fff}.b-clockpicker.is-white .b-clockpicker-face-number.active{background-color:#fff;color:#0a0a0a}.b-clockpicker.is-black .card-header{background-color:#0a0a0a;color:#fff}.b-clockpicker.is-black .b-clockpicker-face:after{background-color:#0a0a0a}.b-clockpicker.is-black .b-clockpicker-face-hand{background-color:#0a0a0a;border-color:#0a0a0a}.b-clockpicker.is-black .b-clockpicker-face-number.active{background-color:#0a0a0a;color:#fff}.b-clockpicker.is-light .card-header{background-color:#f5f5f5;color:#363636}.b-clockpicker.is-light .b-clockpicker-face:after{background-color:#f5f5f5}.b-clockpicker.is-light .b-clockpicker-face-hand{background-color:#f5f5f5;border-color:#f5f5f5}.b-clockpicker.is-light .b-clockpicker-face-number.active{background-color:#f5f5f5;color:#363636}.b-clockpicker.is-dark .card-header{background-color:#363636;color:#f5f5f5}.b-clockpicker.is-dark .b-clockpicker-face:after{background-color:#363636}.b-clockpicker.is-dark .b-clockpicker-face-hand{background-color:#363636;border-color:#363636}.b-clockpicker.is-dark .b-clockpicker-face-number.active{background-color:#363636;color:#f5f5f5}.b-clockpicker.is-primary .card-header{background-color:#7957d5;color:#fff}.b-clockpicker.is-primary .b-clockpicker-face:after{background-color:#7957d5}.b-clockpicker.is-primary .b-clockpicker-face-hand{background-color:#7957d5;border-color:#7957d5}.b-clockpicker.is-link .card-header,.b-clockpicker.is-primary .b-clockpicker-face-number.active{background-color:#7957d5;color:#fff}.b-clockpicker.is-link .b-clockpicker-face:after{background-color:#7957d5}.b-clockpicker.is-link .b-clockpicker-face-hand{background-color:#7957d5;border-color:#7957d5}.b-clockpicker.is-link .b-clockpicker-face-number.active{background-color:#7957d5;color:#fff}.b-clockpicker.is-info .card-header{background-color:#167df0;color:#fff}.b-clockpicker.is-info .b-clockpicker-face:after{background-color:#167df0}.b-clockpicker.is-info .b-clockpicker-face-hand{background-color:#167df0;border-color:#167df0}.b-clockpicker.is-info .b-clockpicker-face-number.active{background-color:#167df0;color:#fff}.b-clockpicker.is-success .card-header{background-color:#23d160;color:#fff}.b-clockpicker.is-success .b-clockpicker-face:after{background-color:#23d160}.b-clockpicker.is-success .b-clockpicker-face-hand{background-color:#23d160;border-color:#23d160}.b-clockpicker.is-success .b-clockpicker-face-number.active{background-color:#23d160;color:#fff}.b-clockpicker.is-warning .card-header{background-color:#ffdd57;color:rgba(0,0,0,.7)}.b-clockpicker.is-warning .b-clockpicker-face:after{background-color:#ffdd57}.b-clockpicker.is-warning .b-clockpicker-face-hand{background-color:#ffdd57;border-color:#ffdd57}.b-clockpicker.is-warning .b-clockpicker-face-number.active{background-color:#ffdd57;color:rgba(0,0,0,.7)}.b-clockpicker.is-danger .card-header{background-color:#ff3860;color:#fff}.b-clockpicker.is-danger .b-clockpicker-face:after{background-color:#ff3860}.b-clockpicker.is-danger .b-clockpicker-face-hand{background-color:#ff3860;border-color:#ff3860}.b-clockpicker.is-danger .b-clockpicker-face-number.active{background-color:#ff3860;color:#fff}.b-clockpicker .dropdown-menu{min-width:0}.b-clockpicker .dropdown,.b-clockpicker .dropdown-trigger{width:100%}.b-clockpicker .dropdown-trigger .input[readonly],.b-clockpicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly],.b-clockpicker .dropdown .input[readonly],.b-clockpicker .dropdown .taginput .taginput-container.is-focusable[readonly],.taginput .b-clockpicker .dropdown-trigger .taginput-container.is-focusable[readonly],.taginput .b-clockpicker .dropdown .taginput-container.is-focusable[readonly]{cursor:pointer;-webkit-box-shadow:inset 0 1px 2px rgba(10,10,10,.1);box-shadow:inset 0 1px 2px rgba(10,10,10,.1)}.b-clockpicker .dropdown-trigger .input[readonly].is-active,.b-clockpicker .dropdown-trigger .input[readonly].is-focused,.b-clockpicker .dropdown-trigger .input[readonly]:active,.b-clockpicker .dropdown-trigger .input[readonly]:focus,.b-clockpicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly].is-active,.b-clockpicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly].is-focused,.b-clockpicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly]:active,.b-clockpicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly]:focus,.b-clockpicker .dropdown .input[readonly].is-active,.b-clockpicker .dropdown .input[readonly].is-focused,.b-clockpicker .dropdown .input[readonly]:active,.b-clockpicker .dropdown .input[readonly]:focus,.b-clockpicker .dropdown .taginput .taginput-container.is-focusable[readonly].is-active,.b-clockpicker .dropdown .taginput .taginput-container.is-focusable[readonly].is-focused,.b-clockpicker .dropdown .taginput .taginput-container.is-focusable[readonly]:active,.b-clockpicker .dropdown .taginput .taginput-container.is-focusable[readonly]:focus,.taginput .b-clockpicker .dropdown-trigger .taginput-container.is-focusable[readonly].is-active,.taginput .b-clockpicker .dropdown-trigger .taginput-container.is-focusable[readonly].is-focused,.taginput .b-clockpicker .dropdown-trigger .taginput-container.is-focusable[readonly]:active,.taginput .b-clockpicker .dropdown-trigger .taginput-container.is-focusable[readonly]:focus,.taginput .b-clockpicker .dropdown .taginput-container.is-focusable[readonly].is-active,.taginput .b-clockpicker .dropdown .taginput-container.is-focusable[readonly].is-focused,.taginput .b-clockpicker .dropdown .taginput-container.is-focusable[readonly]:active,.taginput .b-clockpicker .dropdown .taginput-container.is-focusable[readonly]:focus{-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.b-clockpicker .dropdown-item,.b-clockpicker .dropdown .dropdown-menu .has-link a,.dropdown .dropdown-menu .has-link .b-clockpicker a{font-size:inherit;padding:0}.b-clockpicker .dropdown-content{padding-top:0;padding-bottom:0}.b-clockpicker .card{border-radius:4px}.b-clockpicker .card-header{border-top-left-radius:4px;border-top-right-radius:4px}.b-clockpicker .card-content{padding:12px}.b-clockpicker-btn{cursor:pointer;opacity:.6}.b-clockpicker-btn.active,.b-clockpicker-btn:hover{opacity:1}.b-clockpicker-period .b-clockpicker-btn{font-size:16px;text-transform:uppercase}.b-clockpicker-time span{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.b-clockpicker-header{display:-webkit-box;display:-ms-flexbox;display:flex;line-height:1;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;color:inherit}.b-clockpicker-header .b-clockpicker-time{white-space:nowrap}.b-clockpicker-header .b-clockpicker-time span{height:60px;font-size:60px}.b-clockpicker-header .b-clockpicker-period{-ms-flex-item-align:end;align-self:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:8px 0 6px 8px}.b-clockpicker-body{-webkit-transition:.9s cubic-bezier(.25,.8,.5,1);transition:.9s cubic-bezier(.25,.8,.5,1)}.b-clockpicker-body .b-clockpicker-btn{padding:0 8px;border-radius:290486px;margin-bottom:2px}.b-clockpicker-body .b-clockpicker-btn.active,.b-clockpicker-body .b-clockpicker-btn:hover{background-color:#7957d5;color:#fff}.b-clockpicker-body .b-clockpicker-period{position:absolute;top:5px;right:5px}.b-clockpicker-body .b-clockpicker-time{position:absolute;top:5px;left:5px;font-size:16px}.b-clockpicker-body .b-clockpicker-face{border-radius:50%;position:relative;background-color:#dbdbdb;width:100%;height:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.b-clockpicker-body .b-clockpicker-face:after{border-radius:50%;content:\"\";position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:12px;height:12px;z-index:10}.b-clockpicker-body .b-clockpicker-face-outer-ring{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:calc(100% - 50px);width:calc(100% - 50px);position:relative;border-radius:50%}.b-clockpicker-body .b-clockpicker-face-number{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:100%;cursor:default;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:18px;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:absolute;width:40px;height:40px;left:calc(50% - 20px);top:calc(50% - 20px);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.b-clockpicker-body .b-clockpicker-face-number>span{z-index:1}.b-clockpicker-body .b-clockpicker-face-number:after,.b-clockpicker-body .b-clockpicker-face-number:before{content:\"\";height:40px;width:40px;border-radius:100%;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.b-clockpicker-body .b-clockpicker-face-number.active{cursor:default;z-index:2}.b-clockpicker-body .b-clockpicker-face-number.disabled{pointer-events:none;opacity:.25}.b-clockpicker-body .b-clockpicker-face-hand{height:calc(50% - 6px);width:2px;bottom:50%;left:calc(50% - 1px);-webkit-transform-origin:center bottom;transform-origin:center bottom;position:absolute;will-change:transform;z-index:1}.b-clockpicker-body .b-clockpicker-face-hand:before{background:transparent;border:2px solid;border-color:inherit;border-radius:100%;width:12px;height:12px;content:\"\";position:absolute;top:-6px;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.b-clockpicker-footer{display:block;padding:12px}.b-clockpicker.is-small{border-radius:2px;font-size:.75rem}.b-clockpicker.is-medium{font-size:1.25rem}.b-clockpicker.is-large{font-size:1.5rem}.collapse .collapse-trigger{display:inline;cursor:pointer}.collapse .collapse-content{display:inherit}.datepicker{font-size:.875rem}.datepicker .dropdown,.datepicker .dropdown-trigger{width:100%}.datepicker .dropdown-trigger .input[readonly],.datepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly],.datepicker .dropdown .input[readonly],.datepicker .dropdown .taginput .taginput-container.is-focusable[readonly],.taginput .datepicker .dropdown-trigger .taginput-container.is-focusable[readonly],.taginput .datepicker .dropdown .taginput-container.is-focusable[readonly]{cursor:pointer;-webkit-box-shadow:inset 0 1px 2px rgba(10,10,10,.1);box-shadow:inset 0 1px 2px rgba(10,10,10,.1)}.datepicker .dropdown-trigger .input[readonly].is-active,.datepicker .dropdown-trigger .input[readonly].is-focused,.datepicker .dropdown-trigger .input[readonly]:active,.datepicker .dropdown-trigger .input[readonly]:focus,.datepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly].is-active,.datepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly].is-focused,.datepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly]:active,.datepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly]:focus,.datepicker .dropdown .input[readonly].is-active,.datepicker .dropdown .input[readonly].is-focused,.datepicker .dropdown .input[readonly]:active,.datepicker .dropdown .input[readonly]:focus,.datepicker .dropdown .taginput .taginput-container.is-focusable[readonly].is-active,.datepicker .dropdown .taginput .taginput-container.is-focusable[readonly].is-focused,.datepicker .dropdown .taginput .taginput-container.is-focusable[readonly]:active,.datepicker .dropdown .taginput .taginput-container.is-focusable[readonly]:focus,.taginput .datepicker .dropdown-trigger .taginput-container.is-focusable[readonly].is-active,.taginput .datepicker .dropdown-trigger .taginput-container.is-focusable[readonly].is-focused,.taginput .datepicker .dropdown-trigger .taginput-container.is-focusable[readonly]:active,.taginput .datepicker .dropdown-trigger .taginput-container.is-focusable[readonly]:focus,.taginput .datepicker .dropdown .taginput-container.is-focusable[readonly].is-active,.taginput .datepicker .dropdown .taginput-container.is-focusable[readonly].is-focused,.taginput .datepicker .dropdown .taginput-container.is-focusable[readonly]:active,.taginput .datepicker .dropdown .taginput-container.is-focusable[readonly]:focus{-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.datepicker .dropdown.is-disabled{opacity:1}.datepicker .dropdown-content{background-color:#fff;border-radius:4px;-webkit-box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1)}.datepicker .dropdown-item,.datepicker .dropdown .dropdown-menu .has-link a,.dropdown .dropdown-menu .has-link .datepicker a{font-size:inherit}.datepicker .datepicker-header{padding-bottom:.875rem;margin-bottom:.875rem;border-bottom:1px solid #dbdbdb}.datepicker .datepicker-footer{margin-top:.875rem;padding-top:.875rem;border-top:1px solid #dbdbdb}.datepicker .datepicker-table{display:table;margin:0 auto}.datepicker .datepicker-table .datepicker-cell{text-align:center;vertical-align:middle;display:table-cell;border-radius:4px;padding:.5rem .75rem}.datepicker .datepicker-table .datepicker-header{display:table-header-group}.datepicker .datepicker-table .datepicker-header .datepicker-cell{color:#7a7a7a;font-weight:600}.datepicker .datepicker-table .datepicker-body{display:table-row-group}.datepicker .datepicker-table .datepicker-body .datepicker-row{display:table-row}.datepicker .datepicker-table .datepicker-body .datepicker-months{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:17rem}.datepicker .datepicker-table .datepicker-body .datepicker-months .datepicker-cell{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:33.33%;height:2.5rem}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-unselectable{color:#b5b5b5}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-today{border:1px solid rgba(121,87,213,.5)}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable{color:#4a4a4a}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable:focus:not(.is-selected),.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable:hover:not(.is-selected){background-color:#f5f5f5;color:#0a0a0a;cursor:pointer}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable.is-within-hovered-range.is-first-hovered{background-color:#7a7a7a;color:#dbdbdb;border-bottom-right-radius:0;border-top-right-radius:0}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable.is-within-hovered-range.is-within-hovered{background-color:#f5f5f5;color:#0a0a0a;border-radius:0}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable.is-within-hovered-range.is-last-hovered{background-color:#7a7a7a;color:#dbdbdb;border-bottom-left-radius:0;border-top-left-radius:0}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected{background-color:#7957d5;color:#fff}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected.is-first-selected{background-color:#7957d5;color:#fff;border-bottom-right-radius:0;border-top-right-radius:0}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected.is-within-selected{background-color:rgba(121,87,213,.5);border-radius:0}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected.is-last-selected{background-color:#7957d5;color:#fff;border-bottom-left-radius:0;border-top-left-radius:0}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-nearby:not(.is-selected){color:#b5b5b5}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-week-number{cursor:default}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell{padding:.3rem .75rem .75rem}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event{position:relative}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events{bottom:.425rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;left:0;padding:0 .35rem;position:absolute;width:100%}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-white{background-color:#fff}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-black{background-color:#0a0a0a}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-light{background-color:#f5f5f5}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-dark{background-color:#363636}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-link,.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-primary{background-color:#7957d5}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-info{background-color:#167df0}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-success{background-color:#23d160}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-warning{background-color:#ffdd57}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-danger{background-color:#ff3860}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event.dots .event{border-radius:50%;height:.35em;margin:0 .1em;width:.35em}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event.bars .event{height:.25em;width:100%}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.is-selected{overflow:hidden}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.is-selected .events .event.is-primary{background-color:#aa94e4}.datepicker.is-small{border-radius:2px;font-size:.75rem}.datepicker.is-medium{font-size:1.25rem}.datepicker.is-large{font-size:1.5rem}@media screen and (min-width:1024px){.datepicker .footer-horizontal-timepicker{border:none;padding-left:10px;margin-left:5px}.datepicker .dropdown-horizonal-timepicker,.datepicker .footer-horizontal-timepicker{display:-webkit-box;display:-ms-flexbox;display:flex}.datepicker .content-horizonal-timepicker{border-right:1px solid #dbdbdb}}.dialog .modal-card{max-width:460px;width:auto}.dialog .modal-card .modal-card-head{font-size:1.25rem;font-weight:600}.dialog .modal-card .modal-card-body .field{margin-top:16px}.dialog .modal-card .modal-card-body.is-titleless{border-top-left-radius:6px;border-top-right-radius:6px}.dialog .modal-card .modal-card-foot{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.dialog .modal-card .modal-card-foot .button{display:inline;min-width:5em;font-weight:600}@media print,screen and (min-width:769px){.dialog .modal-card{min-width:320px}}.dialog.is-small .button,.dialog.is-small .input,.dialog.is-small .modal-card,.dialog.is-small .taginput .taginput-container.is-focusable,.taginput .dialog.is-small .taginput-container.is-focusable{border-radius:2px;font-size:.75rem}.dialog.is-medium .button,.dialog.is-medium .input,.dialog.is-medium .modal-card,.dialog.is-medium .taginput .taginput-container.is-focusable,.taginput .dialog.is-medium .taginput-container.is-focusable{font-size:1.25rem}.dialog.is-large .button,.dialog.is-large .input,.dialog.is-large .modal-card,.dialog.is-large .taginput .taginput-container.is-focusable,.taginput .dialog.is-large .taginput-container.is-focusable{font-size:1.5rem}.dialog.has-custom-container{position:absolute}.dropdown+.dropdown{margin-left:.5em}.dropdown .background{bottom:0;left:0;position:absolute;right:0;top:0;position:fixed;background-color:rgba(10,10,10,.86);z-index:40;cursor:pointer}@media screen and (min-width:1024px){.dropdown .background{display:none}}.dropdown.dropdown-menu-animation .dropdown-menu{display:block}.dropdown .dropdown-menu .dropdown-item.is-disabled,.dropdown .dropdown-menu .has-link a.is-disabled{cursor:not-allowed}.dropdown .dropdown-menu .dropdown-item.is-disabled:hover,.dropdown .dropdown-menu .has-link a.is-disabled:hover{background:inherit;color:inherit}.dropdown .dropdown-menu .has-link a{padding-right:3rem;white-space:nowrap}.dropdown.is-hoverable:not(.is-active) .dropdown-menu{display:none}.dropdown.is-hoverable:hover .dropdown-menu{display:inherit}.dropdown.is-expanded,.dropdown.is-expanded .dropdown-menu,.dropdown.is-expanded .dropdown-trigger{width:100%}.dropdown.is-expanded.is-mobile-modal .dropdown-menu{max-width:100%}.dropdown:not(.is-disabled) .dropdown-menu .dropdown-item.is-disabled,.dropdown:not(.is-disabled) .dropdown-menu .has-link a.is-disabled{opacity:.5}.dropdown .navbar-item{height:100%}.dropdown.is-disabled{opacity:.5;cursor:not-allowed}.dropdown.is-disabled .dropdown-trigger{pointer-events:none}.dropdown.is-inline .dropdown-menu{position:static;display:inline-block;padding:0}.dropdown.is-top-right .dropdown-menu{top:auto;bottom:100%}.dropdown.is-top-left .dropdown-menu{top:auto;bottom:100%;right:0;left:auto}.dropdown.is-bottom-left .dropdown-menu{right:0;left:auto}@media screen and (max-width:1023px){.dropdown.is-mobile-modal>.dropdown-menu{position:fixed!important;width:calc(100vw - 40px);max-width:460px;max-height:calc(100vh - 120px);top:25%!important;left:50%!important;bottom:auto!important;right:auto!important;-webkit-transform:translate3d(-50%,-25%,0);transform:translate3d(-50%,-25%,0);white-space:normal;overflow-y:auto;z-index:50!important}.dropdown .dropdown-menu .has-link .dropdown.is-mobile-modal>.dropdown-menu>.dropdown-content>a,.dropdown.is-mobile-modal>.dropdown-menu>.dropdown-content>.dropdown-item,.dropdown.is-mobile-modal>.dropdown-menu>.dropdown-content>.has-link a{padding:1rem 1.5rem}}.field.is-grouped .field{-ms-flex-negative:0;flex-shrink:0}.field.is-grouped .field:not(:last-child){margin-right:.75rem}.field.is-grouped .field.is-expanded{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.field.has-addons .control:first-child .control .button,.field.has-addons .control:first-child .control .input,.field.has-addons .control:first-child .control .select select,.field.has-addons .control:first-child .control .taginput .taginput-container.is-focusable,.taginput .field.has-addons .control:first-child .control .taginput-container.is-focusable{border-bottom-left-radius:4px;border-top-left-radius:4px}.field.has-addons .control:last-child .control .button,.field.has-addons .control:last-child .control .input,.field.has-addons .control:last-child .control .select select,.field.has-addons .control:last-child .control .taginput .taginput-container.is-focusable,.taginput .field.has-addons .control:last-child .control .taginput-container.is-focusable{border-bottom-right-radius:4px;border-top-right-radius:4px}.field.has-addons .control .control .button,.field.has-addons .control .control .input,.field.has-addons .control .control .select select,.field.has-addons .control .control .taginput .taginput-container.is-focusable,.taginput .field.has-addons .control .control .taginput-container.is-focusable{border-radius:0}.field.has-addons .b-numberinput:not(:first-child) .control:first-child .button,.field.has-addons .b-numberinput:not(:first-child) .control:first-child .input,.field.has-addons .b-numberinput:not(:first-child) .control:first-child .select select,.field.has-addons .b-numberinput:not(:first-child) .control:first-child .taginput .taginput-container.is-focusable,.taginput .field.has-addons .b-numberinput:not(:first-child) .control:first-child .taginput-container.is-focusable{border-bottom-left-radius:0;border-top-left-radius:0}.field.has-addons .b-numberinput:not(:last-child) .control:last-child .button,.field.has-addons .b-numberinput:not(:last-child) .control:last-child .input,.field.has-addons .b-numberinput:not(:last-child) .control:last-child .select select,.field.has-addons .b-numberinput:not(:last-child) .control:last-child .taginput .taginput-container.is-focusable,.taginput .field.has-addons .b-numberinput:not(:last-child) .control:last-child .taginput-container.is-focusable{border-bottom-right-radius:0;border-top-right-radius:0}.field.is-floating-in-label,.field.is-floating-label{position:relative}.field.is-floating-in-label .label,.field.is-floating-label .label{position:absolute;left:1em;font-size:.75rem;background-color:transparent;z-index:5}.field.is-floating-in-label .label.is-small,.field.is-floating-label .label.is-small{font-size:.5625rem}.field.is-floating-in-label .label.is-medium,.field.is-floating-label .label.is-medium{font-size:.9375rem}.field.is-floating-in-label .label.is-large,.field.is-floating-label .label.is-large{font-size:1.125rem}.field.is-floating-in-label .taginput .counter,.field.is-floating-label .taginput .counter{float:none;text-align:right}.field.is-floating-in-label.has-addons>.label+.control .button,.field.is-floating-in-label.has-addons>.label+.control .input,.field.is-floating-in-label.has-addons>.label+.control .select select,.field.is-floating-in-label.has-addons>.label+.control .taginput .taginput-container.is-focusable,.field.is-floating-label.has-addons>.label+.control .button,.field.is-floating-label.has-addons>.label+.control .input,.field.is-floating-label.has-addons>.label+.control .select select,.field.is-floating-label.has-addons>.label+.control .taginput .taginput-container.is-focusable,.taginput .field.is-floating-in-label.has-addons>.label+.control .taginput-container.is-focusable,.taginput .field.is-floating-label.has-addons>.label+.control .taginput-container.is-focusable{border-bottom-left-radius:4px;border-top-left-radius:4px}.field.is-floating-label .label{top:-.775em;padding-left:.125em;padding-right:.125em}.field.is-floating-label .label:before{content:\"\";display:block;position:absolute;top:.775em;left:0;right:0;height:.375em;background-color:#fff;z-index:-1}.field.is-floating-label .input:focus,.field.is-floating-label .select select:focus,.field.is-floating-label .taginput .taginput-container.is-focusable:focus,.field.is-floating-label .textarea:focus,.taginput .field.is-floating-label .taginput-container.is-focusable:focus{-webkit-box-shadow:none;box-shadow:none}.field.is-floating-label .taginput .taginput-container{padding-top:.475em}.field.is-floating-label .taginput .taginput-container.is-focused{-webkit-box-shadow:none;box-shadow:none}.field.is-floating-in-label .label{top:.25em}.field.is-floating-in-label>.datepicker .input,.field.is-floating-in-label>.datepicker .taginput .taginput-container.is-focusable,.field.is-floating-in-label>.timepicker .input,.field.is-floating-in-label>.timepicker .taginput .taginput-container.is-focusable,.field.is-floating-in-label>:not(.datepicker):not(.timepicker):not(.taginput) .input,.field.is-floating-in-label>:not(.datepicker):not(.timepicker):not(.taginput) .taginput .taginput-container.is-focusable,.field.is-floating-in-label>:not(.datepicker):not(.timepicker):not(.taginput) .textarea,.field.is-floating-in-label>:not(.datepicker):not(.timepicker):not(.taginput) select,.taginput .field.is-floating-in-label>.datepicker .taginput-container.is-focusable,.taginput .field.is-floating-in-label>.timepicker .taginput-container.is-focusable,.taginput .field.is-floating-in-label>:not(.datepicker):not(.timepicker):not(.taginput) .taginput-container.is-focusable{padding-top:calc(1.625em - .5625rem);padding-bottom:1px;height:3.25em}.field.is-floating-in-label>:not(.datepicker):not(.timepicker):not(.taginput) .select:not(multiple){height:3.25em}.field.is-floating-in-label>:not(.datepicker):not(.timepicker):not(.taginput) .select:not(multiple).is-loading:after{margin-top:calc(1.625em - .5625rem)}.field.is-floating-in-label>:not(.datepicker):not(.timepicker):not(.taginput) .select:not(multiple):after{margin-top:1px}.field.is-floating-in-label>:not(.taginput) .is-left.icon,.field.is-floating-in-label>:not(.taginput) .is-right.icon{height:3.25em}.field.is-floating-in-label>:not(.taginput) .is-left.icon{padding-top:calc(1.625em - .5625rem)}.field.is-floating-in-label .control.is-loading:after{margin-top:calc(1.625em - .5625rem)}.field.is-floating-in-label .taginput .taginput-container{padding-top:calc(1.625em - .5625rem + .275em - 1px)}.field.is-floating-in-label.has-addons .control .button,.field.is-floating-in-label.has-addons .control .input,.field.is-floating-in-label.has-addons .control .select select,.field.is-floating-in-label.has-addons .control .taginput .taginput-container.is-focusable,.field.is-floating-in-label.has-numberinput .b-numberinput .control .button,.field.is-floating-in-label.is-grouped .control .button,.field.is-floating-in-label.is-grouped .control .input,.field.is-floating-in-label.is-grouped .control .select select,.field.is-floating-in-label.is-grouped .control .taginput .taginput-container.is-focusable,.taginput .field.is-floating-in-label.has-addons .control .taginput-container.is-focusable,.taginput .field.is-floating-in-label.is-grouped .control .taginput-container.is-focusable{height:3.25em}.field.is-floating-in-label.has-numberinput .label,.field.is-floating-label.has-numberinput .label{margin-left:3rem}.field.is-floating-in-label.has-numberinput.has-numberinput-is-small .label,.field.is-floating-label.has-numberinput.has-numberinput-is-small .label{margin-left:2.25rem}.field.is-floating-in-label.has-numberinput.has-numberinput-is-medium .label,.field.is-floating-label.has-numberinput.has-numberinput-is-medium .label{margin-left:3.75rem}.field.is-floating-in-label.has-numberinput.has-numberinput-is-large .label,.field.is-floating-label.has-numberinput.has-numberinput-is-large .label{margin-left:4.5rem}.field.is-floating-in-label.has-numberinput-compact .label,.field.is-floating-label.has-numberinput-compact .label{margin-left:2.25rem}.field.is-floating-in-label.has-numberinput-compact.has-numberinput-is-small .label,.field.is-floating-label.has-numberinput-compact.has-numberinput-is-small .label{margin-left:1.6875rem}.field.is-floating-in-label.has-numberinput-compact.has-numberinput-is-medium .label,.field.is-floating-label.has-numberinput-compact.has-numberinput-is-medium .label{margin-left:2.8125rem}.field.is-floating-in-label.has-numberinput-compact.has-numberinput-is-large .label,.field.is-floating-label.has-numberinput-compact.has-numberinput-is-large .label{margin-left:3.375rem}.field.has-addons-right.is-floating-in-label .label,.field.has-addons-right.is-floating-label .label,.field.is-grouped-right.is-floating-in-label .label,.field.is-grouped-right.is-floating-label .label{position:relative;left:5.25em}.control .help.counter{float:right;margin-left:.5em}.control .icon.is-clickable{pointer-events:auto;cursor:pointer}.icon{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit}.icon svg{background-color:transparent;fill:currentColor;stroke-width:0;stroke:currentColor;pointer-events:none;width:1.5rem;height:1.5rem}.loading-overlay{bottom:0;left:0;position:absolute;right:0;top:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:none;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;z-index:999}.loading-overlay.is-active{display:-webkit-box;display:-ms-flexbox;display:flex}.loading-overlay.is-full-page{position:fixed}.loading-overlay.is-full-page .loading-icon:after{top:calc(50% - 2.5em);left:calc(50% - 2.5em);width:5em;height:5em}.loading-overlay .loading-background{bottom:0;left:0;position:absolute;right:0;top:0;background:#7f7f7f;background:hsla(0,0%,100%,.5)}.loading-overlay .loading-icon{position:relative}.loading-overlay .loading-icon:after{-webkit-animation:spinAround .5s linear infinite;animation:spinAround .5s linear infinite;border-radius:290486px;content:\"\";display:block;height:1em;position:relative;width:1em;position:absolute;top:calc(50% - 1.5em);left:calc(50% - 1.5em);width:3em;height:3em;border-color:transparent transparent #dbdbdb #dbdbdb;border-style:solid;border-width:.25em}.menu .menu-list li>a.is-disabled{pointer-events:none;cursor:not-allowed;opacity:.5}.message .media,.notification .media{padding-top:0;border:0}.modal.is-full-screen>.animation-content,.modal.is-full-screen>.animation-content>.modal-card{width:100%;height:100%;max-height:100vh;margin:0;background-color:#f5f5f5}.modal .animation-content{margin:0 20px}.modal .animation-content .modal-card{margin:0}@media screen and (max-width:768px){.modal .animation-content{width:100%}}.modal .modal-content{width:100%}.notices{position:fixed;display:-webkit-box;display:-ms-flexbox;display:flex;top:0;bottom:0;left:0;right:0;padding:2em;overflow:hidden;z-index:1000;pointer-events:none}.notices .toast{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-animation-duration:.15s;animation-duration:.15s;margin:.5em 0;text-align:center;-webkit-box-shadow:0 1px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 1px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);border-radius:2em;padding:.75em 1.5em;pointer-events:auto;opacity:.92}.notices .toast.is-white{color:#0a0a0a;background:#fff}.notices .toast.is-black{color:#fff;background:#0a0a0a}.notices .toast.is-light{color:#363636;background:#f5f5f5}.notices .toast.is-dark{color:#f5f5f5;background:#363636}.notices .toast.is-link,.notices .toast.is-primary{color:#fff;background:#7957d5}.notices .toast.is-info{color:#fff;background:#167df0}.notices .toast.is-success{color:#fff;background:#23d160}.notices .toast.is-warning{color:rgba(0,0,0,.7);background:#ffdd57}.notices .toast.is-danger{color:#fff;background:#ff3860}.notices .snackbar{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;-webkit-animation-duration:.15s;animation-duration:.15s;margin:.5em 0;-webkit-box-shadow:0 1px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 1px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);border-radius:4px;pointer-events:auto;background:#363636;color:#f5f5f5;min-height:3em}.notices .snackbar .text{padding:.5em 1em}.notices .snackbar .action{margin-left:auto;padding:.5em .5em .5em 0}.notices .snackbar .action .button{font-weight:600;text-transform:uppercase;background:#363636;border:transparent}.notices .snackbar .action .button:active,.notices .snackbar .action .button:hover{background:#292929}.notices .snackbar .action.is-white .button{color:#fff}.notices .snackbar .action.is-black .button{color:#0a0a0a}.notices .snackbar .action.is-light .button{color:#f5f5f5}.notices .snackbar .action.is-dark .button{color:#363636}.notices .snackbar .action.is-link .button,.notices .snackbar .action.is-primary .button{color:#7957d5}.notices .snackbar .action.is-info .button{color:#167df0}.notices .snackbar .action.is-success .button{color:#23d160}.notices .snackbar .action.is-warning .button{color:#ffdd57}.notices .snackbar .action.is-danger .button{color:#ff3860}@media screen and (max-width:768px){.notices .snackbar{width:100%;margin:0;border-radius:0}}@media print,screen and (min-width:769px){.notices .snackbar{min-width:350px;max-width:600px;overflow:hidden}}.notices .notification{max-width:600px}.notices .notification.is-bottom,.notices .notification.is-top,.notices .snackbar.is-bottom,.notices .snackbar.is-top,.notices .toast.is-bottom,.notices .toast.is-top{-ms-flex-item-align:center;align-self:center}.notices .notification.is-bottom-right,.notices .notification.is-top-right,.notices .snackbar.is-bottom-right,.notices .snackbar.is-top-right,.notices .toast.is-bottom-right,.notices .toast.is-top-right{-ms-flex-item-align:end;align-self:flex-end}.notices .notification.is-bottom-left,.notices .notification.is-top-left,.notices .snackbar.is-bottom-left,.notices .snackbar.is-top-left,.notices .toast.is-bottom-left,.notices .toast.is-top-left{-ms-flex-item-align:start;align-self:flex-start}.notices .notification.is-toast,.notices .snackbar.is-toast,.notices .toast.is-toast{opacity:.92}.notices.is-top{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.notices.is-bottom{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.notices.is-bottom .notification{margin-bottom:0}.notices.is-bottom .notification:not(:first-child){margin-bottom:1.5rem}.notices.has-custom-container{position:absolute}@media screen and (max-width:768px){.notices{padding:0;position:fixed!important}}.b-numberinput.field{margin-bottom:0}.b-numberinput.field.has-addons.is-expanded,.b-numberinput.field.is-grouped div.control{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.b-numberinput input[type=number]::-webkit-inner-spin-button,.b-numberinput input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none}.b-numberinput input[type=number]{-moz-appearance:textfield;text-align:center}.b-numberinput .button.is-rounded{padding-left:.75em;padding-right:.75em}.pagination .pagination-next,.pagination .pagination-previous{padding-left:.25em;padding-right:.25em}.pagination .pagination-next.is-disabled,.pagination .pagination-previous.is-disabled{pointer-events:none;cursor:not-allowed;opacity:.5}.pagination.is-simple{-webkit-box-pack:normal;-ms-flex-pack:normal;justify-content:normal}.pagination.is-simple.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.pagination.is-simple.is-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.pagination .is-current{pointer-events:none;cursor:not-allowed}.progress-wrapper{position:relative;overflow:hidden}.progress-wrapper:not(:last-child){margin-bottom:1.5rem}.progress-wrapper .progress-value{position:absolute;top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);font-size:.66667rem;line-height:1rem;font-weight:700;color:#fff;white-space:nowrap}.progress-wrapper .progress{margin-bottom:0}.progress-wrapper .progress.is-small+.progress-value{font-size:.5rem;line-height:.75rem}.progress-wrapper .progress.is-medium+.progress-value{font-size:.83333rem;line-height:1.25rem}.progress-wrapper .progress.is-large+.progress-value{font-size:1rem;line-height:1.5rem}.progress-wrapper .progress:indeterminate::-ms-fill{animation-name:none}.progress-wrapper .progress::-webkit-progress-value{-webkit-transition:width .5s ease;transition:width .5s ease}.b-radio.radio{outline:none;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.b-radio.radio:not(.button){margin-right:.5em}.b-radio.radio:not(.button)+.radio:last-child{margin-right:0}.b-radio.radio+.radio{margin-left:0}.b-radio.radio input[type=radio]{position:absolute;left:0;opacity:0;outline:none;z-index:-1}.b-radio.radio input[type=radio]+.check{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;position:relative;cursor:pointer;width:1.25em;height:1.25em;-webkit-transition:background .15s ease-out;transition:background .15s ease-out;border-radius:50%;border:2px solid #7a7a7a}.b-radio.radio input[type=radio]+.check:before{content:\"\";display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;left:50%;margin-left:-.625em;bottom:50%;margin-bottom:-.625em;width:1.25em;height:1.25em;-webkit-transition:-webkit-transform .15s ease-out;transition:-webkit-transform .15s ease-out;transition:transform .15s ease-out;transition:transform .15s ease-out,-webkit-transform .15s ease-out;border-radius:50%;-webkit-transform:scale(0);transform:scale(0);background-color:#7957d5}.b-radio.radio input[type=radio]+.check.is-white:before{background:#fff}.b-radio.radio input[type=radio]+.check.is-black:before{background:#0a0a0a}.b-radio.radio input[type=radio]+.check.is-light:before{background:#f5f5f5}.b-radio.radio input[type=radio]+.check.is-dark:before{background:#363636}.b-radio.radio input[type=radio]+.check.is-link:before,.b-radio.radio input[type=radio]+.check.is-primary:before{background:#7957d5}.b-radio.radio input[type=radio]+.check.is-info:before{background:#167df0}.b-radio.radio input[type=radio]+.check.is-success:before{background:#23d160}.b-radio.radio input[type=radio]+.check.is-warning:before{background:#ffdd57}.b-radio.radio input[type=radio]+.check.is-danger:before{background:#ff3860}.b-radio.radio input[type=radio]:checked+.check{border-color:#7957d5}.b-radio.radio input[type=radio]:checked+.check.is-white{border-color:#fff}.b-radio.radio input[type=radio]:checked+.check.is-black{border-color:#0a0a0a}.b-radio.radio input[type=radio]:checked+.check.is-light{border-color:#f5f5f5}.b-radio.radio input[type=radio]:checked+.check.is-dark{border-color:#363636}.b-radio.radio input[type=radio]:checked+.check.is-link,.b-radio.radio input[type=radio]:checked+.check.is-primary{border-color:#7957d5}.b-radio.radio input[type=radio]:checked+.check.is-info{border-color:#167df0}.b-radio.radio input[type=radio]:checked+.check.is-success{border-color:#23d160}.b-radio.radio input[type=radio]:checked+.check.is-warning{border-color:#ffdd57}.b-radio.radio input[type=radio]:checked+.check.is-danger{border-color:#ff3860}.b-radio.radio input[type=radio]:checked+.check:before{-webkit-transform:scale(.5);transform:scale(.5)}.b-radio.radio input[type=radio]:focus+.check{-webkit-box-shadow:0 0 .5em hsla(0,0%,47.8%,.8);box-shadow:0 0 .5em hsla(0,0%,47.8%,.8)}.b-radio.radio input[type=radio]:focus:checked+.check{-webkit-box-shadow:0 0 .5em rgba(121,87,213,.8);box-shadow:0 0 .5em rgba(121,87,213,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-white{-webkit-box-shadow:0 0 .5em hsla(0,0%,100%,.8);box-shadow:0 0 .5em hsla(0,0%,100%,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-black{-webkit-box-shadow:0 0 .5em rgba(10,10,10,.8);box-shadow:0 0 .5em rgba(10,10,10,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-light{-webkit-box-shadow:0 0 .5em hsla(0,0%,96.1%,.8);box-shadow:0 0 .5em hsla(0,0%,96.1%,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-dark{-webkit-box-shadow:0 0 .5em rgba(54,54,54,.8);box-shadow:0 0 .5em rgba(54,54,54,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-link,.b-radio.radio input[type=radio]:focus:checked+.check.is-primary{-webkit-box-shadow:0 0 .5em rgba(121,87,213,.8);box-shadow:0 0 .5em rgba(121,87,213,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-info{-webkit-box-shadow:0 0 .5em rgba(22,125,240,.8);box-shadow:0 0 .5em rgba(22,125,240,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-success{-webkit-box-shadow:0 0 .5em rgba(35,209,96,.8);box-shadow:0 0 .5em rgba(35,209,96,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-warning{-webkit-box-shadow:0 0 .5em rgba(255,221,87,.8);box-shadow:0 0 .5em rgba(255,221,87,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-danger{-webkit-box-shadow:0 0 .5em rgba(255,56,96,.8);box-shadow:0 0 .5em rgba(255,56,96,.8)}.b-radio.radio .control-label{padding-left:.5em}.b-radio.radio.button{display:-webkit-box;display:-ms-flexbox;display:flex}.b-radio.radio[disabled]{opacity:.5}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check{border-color:#7957d5}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-white{border-color:#fff}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-black{border-color:#0a0a0a}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-light{border-color:#f5f5f5}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-dark{border-color:#363636}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-link,.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-primary{border-color:#7957d5}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-info{border-color:#167df0}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-success{border-color:#23d160}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-warning{border-color:#ffdd57}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-danger{border-color:#ff3860}.b-radio.radio.is-small{border-radius:2px;font-size:.75rem}.b-radio.radio.is-medium{font-size:1.25rem}.b-radio.radio.is-large{font-size:1.5rem}.rate{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.rate:not(:last-child){margin-bottom:.75rem}.rate.is-spaced .rate-item:not(:last-child){margin-right:.25rem}.rate.is-disabled .rate-item{cursor:auto}.rate.is-disabled .rate-item:hover{-webkit-transform:none;transform:none}.rate.is-rtl .rate-item{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.rate.is-rtl .rate-text{margin-left:0;margin-right:.35rem}.rate .rate-item{cursor:pointer;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;position:relative;-webkit-transition:all .3s;transition:all .3s}.rate .rate-item:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}.rate .rate-item.set-half .is-half,.rate .rate-item.set-on .icon{color:#ffd83d}.rate .rate-item.set-half .is-half{position:absolute;left:0;top:0;overflow:hidden}.rate .icon{color:#dbdbdb;line-height:1;pointer-events:none;width:inherit}.rate .is-half>i{position:absolute;left:0}.rate .rate-text{font-size:.8rem;margin-left:.35rem}.rate .rate-text.is-small{font-size:.6rem}.rate .rate-text.is-medium{font-size:1rem}.rate .rate-text.is-large{font-size:1.2rem}.select select{text-rendering:auto!important;padding-right:2.5em}.select select option{color:#4a4a4a;padding:.25em .5em}.select select option:disabled{cursor:not-allowed;opacity:.5}.select select optgroup{color:#b5b5b5;font-weight:400;font-style:normal;padding:.25em 0}.select.is-empty select{color:hsla(0,0%,47.8%,.7)}.b-skeleton{width:100%}.b-skeleton>.b-skeleton-item{background:-webkit-gradient(linear,left top,right top,color-stop(25%,#dbdbdb),color-stop(50%,hsla(0,0%,85.9%,.5)),color-stop(75%,#dbdbdb));background:linear-gradient(90deg,#dbdbdb 25%,hsla(0,0%,85.9%,.5) 50%,#dbdbdb 75%);background-size:400% 100%;width:100%}.b-skeleton>.b-skeleton-item.is-rounded{border-radius:4px}.b-skeleton>.b-skeleton-item:after{content:\"\\00a0\"}.b-skeleton>.b-skeleton-item+.b-skeleton-item{margin-top:.5rem}.b-skeleton.is-animated>.b-skeleton-item{-webkit-animation:skeleton-loading 1.5s infinite;animation:skeleton-loading 1.5s infinite}.b-skeleton+.b-skeleton{margin-top:.5rem}.b-skeleton>.b-skeleton-item{line-height:1rem}.b-skeleton.is-small>.b-skeleton-item{line-height:.75rem}.b-skeleton.is-medium>.b-skeleton-item{line-height:1.25rem}.b-skeleton.is-large>.b-skeleton-item{line-height:1.5rem}@-webkit-keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}.b-sidebar .sidebar-content{background-color:#f5f5f5;-webkit-box-shadow:5px 0 13px 3px rgba(10,10,10,.1);box-shadow:5px 0 13px 3px rgba(10,10,10,.1);width:260px;z-index:41}.b-sidebar .sidebar-content.is-white{background-color:#fff}.b-sidebar .sidebar-content.is-black{background-color:#0a0a0a}.b-sidebar .sidebar-content.is-light{background-color:#f5f5f5}.b-sidebar .sidebar-content.is-dark{background-color:#363636}.b-sidebar .sidebar-content.is-link,.b-sidebar .sidebar-content.is-primary{background-color:#7957d5}.b-sidebar .sidebar-content.is-info{background-color:#167df0}.b-sidebar .sidebar-content.is-success{background-color:#23d160}.b-sidebar .sidebar-content.is-warning{background-color:#ffdd57}.b-sidebar .sidebar-content.is-danger{background-color:#ff3860}.b-sidebar .sidebar-content.is-fixed{position:fixed;left:0;top:0}.b-sidebar .sidebar-content.is-fixed.is-right{left:auto;right:0}.b-sidebar .sidebar-content.is-absolute{position:absolute;left:0;top:0}.b-sidebar .sidebar-content.is-absolute.is-right{left:auto;right:0}.b-sidebar .sidebar-content.is-mini{width:80px}.b-sidebar .sidebar-content.is-mini.is-mini-expand:hover{-webkit-transition:width .15s ease-out;transition:width .15s ease-out}.b-sidebar .sidebar-content.is-mini.is-mini-expand:hover:not(.is-fullwidth){width:260px}.b-sidebar .sidebar-content.is-mini.is-mini-expand:hover:not(.is-fullwidth).is-mini-expand-fixed{position:fixed}.b-sidebar .sidebar-content.is-static{position:static}.b-sidebar .sidebar-content.is-absolute,.b-sidebar .sidebar-content.is-static{-webkit-transition:width .15s ease-out;transition:width .15s ease-out}.b-sidebar .sidebar-content.is-fullwidth{width:100%;max-width:100%}.b-sidebar .sidebar-content.is-fullheight{height:100%;max-height:100%;overflow:hidden;overflow-y:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-line-pack:stretch;align-content:stretch}@media screen and (max-width:1023px){.b-sidebar .sidebar-content.is-mini-mobile{width:80px}.b-sidebar .sidebar-content.is-mini-mobile.is-mini-expand:hover:not(.is-fullwidth-mobile){width:260px}.b-sidebar .sidebar-content.is-mini-mobile.is-mini-expand:hover:not(.is-fullwidth-mobile).is-mini-expand-fixed{position:fixed}.b-sidebar .sidebar-content.is-hidden-mobile{width:0;height:0;overflow:hidden}.b-sidebar .sidebar-content.is-fullwidth-mobile{width:100%;max-width:100%}}.b-sidebar .sidebar-background{bottom:0;left:0;position:absolute;right:0;top:0;background:rgba(10,10,10,.86);position:fixed;z-index:40}.b-slider{margin:1em 0;background:transparent;width:100%}.b-slider .b-slider-track{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;cursor:pointer;background:#dbdbdb;border-radius:4px}.b-slider .b-slider-fill{position:absolute;height:100%;-webkit-box-shadow:0 0 0 #7a7a7a;box-shadow:0 0 0 #7a7a7a;background:#dbdbdb;border-radius:4px;border:0 solid #7a7a7a;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.b-slider .b-slider-thumb-wrapper{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;cursor:-webkit-grab;cursor:grab;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);top:50%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.b-slider .b-slider-thumb-wrapper .b-slider-thumb{-webkit-box-shadow:none;box-shadow:none;border:1px solid #b5b5b5;border-radius:4px;background:#fff}.b-slider .b-slider-thumb-wrapper .b-slider-thumb:focus{-webkit-transform:scale(1.25);transform:scale(1.25)}.b-slider .b-slider-thumb-wrapper.is-dragging{cursor:-webkit-grabbing;cursor:grabbing}.b-slider .b-slider-thumb-wrapper.is-dragging .b-slider-thumb{-webkit-transform:scale(1.25);transform:scale(1.25)}.b-slider.slider-focus{padding-top:20px;padding-bottom:20px;margin-top:-20px;margin-bottom:-20px;cursor:pointer}.b-slider.is-rounded .b-slider-thumb{border-radius:290486px}.b-slider.is-disabled .b-slider-track{cursor:not-allowed;opacity:.5}.b-slider.is-disabled .b-slider-thumb-wrapper{cursor:not-allowed}.b-slider.is-disabled .b-slider-thumb-wrapper .b-slider-thumb{-webkit-transform:scale(1);transform:scale(1)}.b-slider .b-slider-track{height:.5rem}.b-slider .b-slider-thumb{height:1rem;width:1rem}.b-slider .b-slider-tick{height:.25rem}.b-slider .b-slider-tick-label{font-size:.75rem;position:absolute;top:calc(.25rem + 2px);left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.b-slider.is-small .b-slider-track{height:.375rem}.b-slider.is-small .b-slider-thumb{height:.75rem;width:.75rem}.b-slider.is-small .b-slider-tick{height:.1875rem}.b-slider.is-small .b-slider-tick-label{font-size:.75rem;position:absolute;top:calc(.1875rem + 2px);left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.b-slider.is-medium .b-slider-track{height:.625rem}.b-slider.is-medium .b-slider-thumb{height:1.25rem;width:1.25rem}.b-slider.is-medium .b-slider-tick{height:.3125rem}.b-slider.is-medium .b-slider-tick-label{font-size:.75rem;position:absolute;top:calc(.3125rem + 2px);left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.b-slider.is-large .b-slider-track{height:.75rem}.b-slider.is-large .b-slider-thumb{height:1.5rem;width:1.5rem}.b-slider.is-large .b-slider-tick{height:.375rem}.b-slider.is-large .b-slider-tick-label{font-size:.75rem;position:absolute;top:calc(.375rem + 2px);left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.b-slider.is-white .b-slider-fill{background:#fff!important}.b-slider.is-black .b-slider-fill{background:#0a0a0a!important}.b-slider.is-light .b-slider-fill{background:#f5f5f5!important}.b-slider.is-dark .b-slider-fill{background:#363636!important}.b-slider.is-link .b-slider-fill,.b-slider.is-primary .b-slider-fill{background:#7957d5!important}.b-slider.is-info .b-slider-fill{background:#167df0!important}.b-slider.is-success .b-slider-fill{background:#23d160!important}.b-slider.is-warning .b-slider-fill{background:#ffdd57!important}.b-slider.is-danger .b-slider-fill{background:#ff3860!important}.b-slider .b-slider-tick{position:absolute;width:3px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);top:50%;background:#b5b5b5;border-radius:4px}.b-slider .b-slider-tick.is-tick-hidden{background:transparent}.b-steps .steps .step-items{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.b-steps .steps .step-items .step-item{margin-top:0;position:relative;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:1em;flex-basis:1em}.b-steps .steps .step-items .step-item .step-link{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;color:#4a4a4a}.b-steps .steps .step-items .step-item .step-link:not(.is-clickable){cursor:not-allowed}.b-steps .steps .step-items .step-item .step-marker{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;border-radius:4px;font-weight:700;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#b5b5b5;border:.2em solid #fff;z-index:1;overflow:hidden}.b-steps .steps .step-items .step-item.is-white:after,.b-steps .steps .step-items .step-item.is-white:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#fff));background:linear-gradient(270deg,#dbdbdb 50%,#fff 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-white.is-active .step-marker{background-color:#fff;border-color:#fff;color:#fff}.b-steps .steps .step-items .step-item.is-white.is-active:after,.b-steps .steps .step-items .step-item.is-white.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-white.is-previous .step-marker{color:#0a0a0a;background-color:#fff}.b-steps .steps .step-items .step-item.is-white.is-previous:after,.b-steps .steps .step-items .step-item.is-white.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-black:after,.b-steps .steps .step-items .step-item.is-black:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#0a0a0a));background:linear-gradient(270deg,#dbdbdb 50%,#0a0a0a 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-black.is-active .step-marker{background-color:#fff;border-color:#0a0a0a;color:#0a0a0a}.b-steps .steps .step-items .step-item.is-black.is-active:after,.b-steps .steps .step-items .step-item.is-black.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-black.is-previous .step-marker{color:#fff;background-color:#0a0a0a}.b-steps .steps .step-items .step-item.is-black.is-previous:after,.b-steps .steps .step-items .step-item.is-black.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-light:after,.b-steps .steps .step-items .step-item.is-light:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#f5f5f5));background:linear-gradient(270deg,#dbdbdb 50%,#f5f5f5 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-light.is-active .step-marker{background-color:#fff;border-color:#f5f5f5;color:#f5f5f5}.b-steps .steps .step-items .step-item.is-light.is-active:after,.b-steps .steps .step-items .step-item.is-light.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-light.is-previous .step-marker{color:#363636;background-color:#f5f5f5}.b-steps .steps .step-items .step-item.is-light.is-previous:after,.b-steps .steps .step-items .step-item.is-light.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-dark:after,.b-steps .steps .step-items .step-item.is-dark:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#363636));background:linear-gradient(270deg,#dbdbdb 50%,#363636 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-dark.is-active .step-marker{background-color:#fff;border-color:#363636;color:#363636}.b-steps .steps .step-items .step-item.is-dark.is-active:after,.b-steps .steps .step-items .step-item.is-dark.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-dark.is-previous .step-marker{color:#f5f5f5;background-color:#363636}.b-steps .steps .step-items .step-item.is-dark.is-previous:after,.b-steps .steps .step-items .step-item.is-dark.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-primary:after,.b-steps .steps .step-items .step-item.is-primary:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#7957d5));background:linear-gradient(270deg,#dbdbdb 50%,#7957d5 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-primary.is-active .step-marker{background-color:#fff;border-color:#7957d5;color:#7957d5}.b-steps .steps .step-items .step-item.is-primary.is-active:after,.b-steps .steps .step-items .step-item.is-primary.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-primary.is-previous .step-marker{color:#fff;background-color:#7957d5}.b-steps .steps .step-items .step-item.is-primary.is-previous:after,.b-steps .steps .step-items .step-item.is-primary.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-link:after,.b-steps .steps .step-items .step-item.is-link:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#7957d5));background:linear-gradient(270deg,#dbdbdb 50%,#7957d5 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-link.is-active .step-marker{background-color:#fff;border-color:#7957d5;color:#7957d5}.b-steps .steps .step-items .step-item.is-link.is-active:after,.b-steps .steps .step-items .step-item.is-link.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-link.is-previous .step-marker{color:#fff;background-color:#7957d5}.b-steps .steps .step-items .step-item.is-link.is-previous:after,.b-steps .steps .step-items .step-item.is-link.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-info:after,.b-steps .steps .step-items .step-item.is-info:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#167df0));background:linear-gradient(270deg,#dbdbdb 50%,#167df0 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-info.is-active .step-marker{background-color:#fff;border-color:#167df0;color:#167df0}.b-steps .steps .step-items .step-item.is-info.is-active:after,.b-steps .steps .step-items .step-item.is-info.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-info.is-previous .step-marker{color:#fff;background-color:#167df0}.b-steps .steps .step-items .step-item.is-info.is-previous:after,.b-steps .steps .step-items .step-item.is-info.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-success:after,.b-steps .steps .step-items .step-item.is-success:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#23d160));background:linear-gradient(270deg,#dbdbdb 50%,#23d160 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-success.is-active .step-marker{background-color:#fff;border-color:#23d160;color:#23d160}.b-steps .steps .step-items .step-item.is-success.is-active:after,.b-steps .steps .step-items .step-item.is-success.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-success.is-previous .step-marker{color:#fff;background-color:#23d160}.b-steps .steps .step-items .step-item.is-success.is-previous:after,.b-steps .steps .step-items .step-item.is-success.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-warning:after,.b-steps .steps .step-items .step-item.is-warning:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#ffdd57));background:linear-gradient(270deg,#dbdbdb 50%,#ffdd57 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-warning.is-active .step-marker{background-color:#fff;border-color:#ffdd57;color:#ffdd57}.b-steps .steps .step-items .step-item.is-warning.is-active:after,.b-steps .steps .step-items .step-item.is-warning.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-warning.is-previous .step-marker{color:rgba(0,0,0,.7);background-color:#ffdd57}.b-steps .steps .step-items .step-item.is-warning.is-previous:after,.b-steps .steps .step-items .step-item.is-warning.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-danger:after,.b-steps .steps .step-items .step-item.is-danger:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#ff3860));background:linear-gradient(270deg,#dbdbdb 50%,#ff3860 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-danger.is-active .step-marker{background-color:#fff;border-color:#ff3860;color:#ff3860}.b-steps .steps .step-items .step-item.is-danger.is-active:after,.b-steps .steps .step-items .step-item.is-danger.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-danger.is-previous .step-marker{color:#fff;background-color:#ff3860}.b-steps .steps .step-items .step-item.is-danger.is-previous:after,.b-steps .steps .step-items .step-item.is-danger.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item .step-marker{color:#fff}.b-steps .steps .step-items .step-item .step-details{text-align:center;z-index:1}.b-steps .steps .step-items .step-item:not(:first-child),.b-steps .steps .step-items .step-item:only-child{-ms-flex-negative:1;flex-shrink:1}.b-steps .steps .step-items .step-item:not(:first-child):before,.b-steps .steps .step-items .step-item:only-child:before{content:\" \";display:block;position:absolute;width:100%;bottom:0;left:-50%}.b-steps .steps .step-items .step-item:only-child:after{content:\" \";display:block;position:absolute;height:.2em;bottom:0}.b-steps .steps .step-items .step-item:only-child:after,.b-steps .steps .step-items .step-item:only-child:before{width:25%;left:50%}.b-steps .steps .step-items .step-item:only-child:before{right:50%;left:auto}.b-steps .steps .step-items .step-item:after,.b-steps .steps .step-items .step-item:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#7957d5));background:linear-gradient(270deg,#dbdbdb 50%,#7957d5 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-active .step-link{cursor:default}.b-steps .steps .step-items .step-item.is-active .step-marker{background-color:#fff;border-color:#7957d5;color:#7957d5}.b-steps .steps .step-items .step-item.is-active:after,.b-steps .steps .step-items .step-item.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-previous .step-marker{color:#fff;background-color:#7957d5}.b-steps .steps .step-items .step-item.is-previous:after,.b-steps .steps .step-items .step-item.is-previous:before{background-position:0 100%}.b-steps .steps+.step-content{position:relative;overflow:visible;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:1rem}.b-steps .steps+.step-content .step-item{-ms-flex-negative:0;flex-shrink:0;-ms-flex-preferred-size:auto;flex-basis:auto}.b-steps .steps+.step-content.is-transitioning{overflow:hidden}.b-steps .steps.is-rounded .step-item .step-marker{border-radius:290486px}.b-steps .steps.is-animated .step-item:not(:first-child):before,.b-steps .steps.is-animated .step-item:only-child:before{-webkit-transition:background .15s ease-out;transition:background .15s ease-out}.b-steps .steps.has-label-left .step-items .step-item .step-link,.b-steps .steps.has-label-right .step-items .step-item .step-link{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.b-steps .steps.has-label-left .step-items .step-item .step-link>.step-details,.b-steps .steps.has-label-right .step-items .step-item .step-link>.step-details{background-color:#fff;padding:.2em}.b-steps .steps.has-label-left .step-items .step-item .step-link{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.b-steps .steps{font-size:1rem;min-height:2rem}.b-steps .steps .step-items .step-item .step-marker{height:2rem;width:2rem}.b-steps .steps .step-items .step-item .step-marker .icon *,.b-steps .steps .step-items .step-item .step-marker .icon :before{font-size:1rem}.b-steps .steps .step-items .step-item .step-details .step-title{font-size:1.2rem;font-weight:600;line-height:1rem}.b-steps .steps .step-items .step-item:not(:first-child):before,.b-steps .steps .step-items .step-item:only-child:before{height:.2em;top:1rem}.b-steps .steps .step-items .step-item:only-child:after{top:1rem}@media screen and (max-width:768px){.b-steps .steps .step-items .step-item:after,.b-steps .steps .step-items .step-item:before,.b-steps .steps .step-items .step-item:not(:first-child):before{top:1rem}}.b-steps.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-vertical>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-vertical>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(1rem - .1em)}.b-steps.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-vertical>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-vertical>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(1rem - .1em)}.b-steps.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(1rem - .1em)}.b-steps.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(1rem - .1em)}.b-steps.is-small .steps{font-size:.75rem;min-height:1.5rem}.b-steps.is-small .steps .step-items .step-item .step-marker{height:1.5rem;width:1.5rem}.b-steps.is-small .steps .step-items .step-item .step-marker .icon *,.b-steps.is-small .steps .step-items .step-item .step-marker .icon :before{font-size:.75rem}.b-steps.is-small .steps .step-items .step-item .step-details .step-title{font-size:.9rem;font-weight:600;line-height:.75rem}.b-steps.is-small .steps .step-items .step-item:not(:first-child):before,.b-steps.is-small .steps .step-items .step-item:only-child:before{height:.2em;top:.75rem}.b-steps.is-small .steps .step-items .step-item:only-child:after{top:.75rem}@media screen and (max-width:768px){.b-steps.is-small .steps .step-items .step-item:after,.b-steps.is-small .steps .step-items .step-item:before,.b-steps.is-small .steps .step-items .step-item:not(:first-child):before{top:.75rem}}.b-steps.is-small.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-small.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-small.is-vertical>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-small.is-vertical>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(.75rem - .1em)}.b-steps.is-small.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-small.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-small.is-vertical>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-small.is-vertical>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(.75rem - .1em)}.b-steps.is-small.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-small.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-small.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-small.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(.75rem - .1em)}.b-steps.is-small.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-small.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-small.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-small.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(.75rem - .1em)}.b-steps.is-medium .steps{font-size:1.25rem;min-height:2.5rem}.b-steps.is-medium .steps .step-items .step-item .step-marker{height:2.5rem;width:2.5rem}.b-steps.is-medium .steps .step-items .step-item .step-marker .icon *,.b-steps.is-medium .steps .step-items .step-item .step-marker .icon :before{font-size:1.25rem}.b-steps.is-medium .steps .step-items .step-item .step-details .step-title{font-size:1.5rem;font-weight:600;line-height:1.25rem}.b-steps.is-medium .steps .step-items .step-item:not(:first-child):before,.b-steps.is-medium .steps .step-items .step-item:only-child:before{height:.2em;top:1.25rem}.b-steps.is-medium .steps .step-items .step-item:only-child:after{top:1.25rem}@media screen and (max-width:768px){.b-steps.is-medium .steps .step-items .step-item:after,.b-steps.is-medium .steps .step-items .step-item:before,.b-steps.is-medium .steps .step-items .step-item:not(:first-child):before{top:1.25rem}}.b-steps.is-medium.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-medium.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-medium.is-vertical>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-medium.is-vertical>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(1.25rem - .1em)}.b-steps.is-medium.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-medium.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-medium.is-vertical>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-medium.is-vertical>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(1.25rem - .1em)}.b-steps.is-medium.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-medium.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-medium.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-medium.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(1.25rem - .1em)}.b-steps.is-medium.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-medium.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-medium.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-medium.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(1.25rem - .1em)}.b-steps.is-large .steps{font-size:1.5rem;min-height:3rem}.b-steps.is-large .steps .step-items .step-item .step-marker{height:3rem;width:3rem}.b-steps.is-large .steps .step-items .step-item .step-marker .icon *,.b-steps.is-large .steps .step-items .step-item .step-marker .icon :before{font-size:1.5rem}.b-steps.is-large .steps .step-items .step-item .step-details .step-title{font-size:1.8rem;font-weight:600;line-height:1.5rem}.b-steps.is-large .steps .step-items .step-item:not(:first-child):before,.b-steps.is-large .steps .step-items .step-item:only-child:before{height:.2em;top:1.5rem}.b-steps.is-large .steps .step-items .step-item:only-child:after{top:1.5rem}@media screen and (max-width:768px){.b-steps.is-large .steps .step-items .step-item:after,.b-steps.is-large .steps .step-items .step-item:before,.b-steps.is-large .steps .step-items .step-item:not(:first-child):before{top:1.5rem}}.b-steps.is-large.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-large.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-large.is-vertical>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-large.is-vertical>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(1.5rem - .1em)}.b-steps.is-large.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-large.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-large.is-vertical>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-large.is-vertical>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(1.5rem - .1em)}.b-steps.is-large.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-large.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-large.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-large.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(1.5rem - .1em)}.b-steps.is-large.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-large.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-large.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-large.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(1.5rem - .1em)}.b-steps.is-vertical{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.b-steps.is-vertical>.steps .step-items{height:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-bottom-color:transparent}.b-steps.is-vertical>.steps .step-items .step-item{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:1em 0}.b-steps.is-vertical>.steps .step-items .step-item:after,.b-steps.is-vertical>.steps .step-items .step-item:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#7957d5));background:linear-gradient(0deg,#dbdbdb 50%,#7957d5 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-white:after,.b-steps.is-vertical>.steps .step-items .step-item.is-white:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#fff));background:linear-gradient(0deg,#dbdbdb 50%,#fff 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-black:after,.b-steps.is-vertical>.steps .step-items .step-item.is-black:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#0a0a0a));background:linear-gradient(0deg,#dbdbdb 50%,#0a0a0a 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-light:after,.b-steps.is-vertical>.steps .step-items .step-item.is-light:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#f5f5f5));background:linear-gradient(0deg,#dbdbdb 50%,#f5f5f5 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-dark:after,.b-steps.is-vertical>.steps .step-items .step-item.is-dark:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#363636));background:linear-gradient(0deg,#dbdbdb 50%,#363636 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-link:after,.b-steps.is-vertical>.steps .step-items .step-item.is-link:before,.b-steps.is-vertical>.steps .step-items .step-item.is-primary:after,.b-steps.is-vertical>.steps .step-items .step-item.is-primary:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#7957d5));background:linear-gradient(0deg,#dbdbdb 50%,#7957d5 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-info:after,.b-steps.is-vertical>.steps .step-items .step-item.is-info:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#167df0));background:linear-gradient(0deg,#dbdbdb 50%,#167df0 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-success:after,.b-steps.is-vertical>.steps .step-items .step-item.is-success:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#23d160));background:linear-gradient(0deg,#dbdbdb 50%,#23d160 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-warning:after,.b-steps.is-vertical>.steps .step-items .step-item.is-warning:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#ffdd57));background:linear-gradient(0deg,#dbdbdb 50%,#ffdd57 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-danger:after,.b-steps.is-vertical>.steps .step-items .step-item.is-danger:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#ff3860));background:linear-gradient(0deg,#dbdbdb 50%,#ff3860 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item:not(:first-child):before,.b-steps.is-vertical>.steps .step-items .step-item:only-child:before{height:100%;width:.2em;top:-50%;left:calc(50% - .1em)}.b-steps.is-vertical>.steps .step-items .step-item.is-active:after,.b-steps.is-vertical>.steps .step-items .step-item.is-active:before,.b-steps.is-vertical>.steps .step-items .step-item.is-previous:after,.b-steps.is-vertical>.steps .step-items .step-item.is-previous:before{background-position:100% 0}.b-steps.is-vertical>.steps .step-items .step-item:only-child:before{top:50%}.b-steps.is-vertical>.steps .step-items .step-item:only-child:after{width:.2em;top:auto;bottom:50%}.b-steps.is-vertical>.steps .step-items .step-item:only-child:after,.b-steps.is-vertical>.steps .step-items .step-item:only-child:before{height:25%}.b-steps.is-vertical>.steps.has-label-right .step-items .step-item{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.b-steps.is-vertical>.steps.has-label-left .step-items .step-item{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.b-steps.is-vertical>.steps:not(.has-label-right):not(.has-label-left) .step-items .step-item .step-link>.step-details{background-color:#fff}.b-steps.is-vertical>.step-content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.b-steps.is-vertical>.step-navigation{-ms-flex-preferred-size:100%;flex-basis:100%}.b-steps.is-vertical.is-right{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}@media screen and (max-width:768px){.b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:not(.is-active){display:none}.b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:after,.b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:before,.b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:not(:first-child):before{content:\" \";display:block;position:absolute;height:.2em;width:25%;bottom:0;left:50%}.b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:before,.b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:not(:first-child):before{right:50%;left:auto}.b-steps:not(.is-vertical) .steps.mobile-compact .step-items .step-item:not(.is-active) .step-details{display:none}}.switch{cursor:pointer;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;margin-right:.5em}.switch+.switch:last-child{margin-right:0}.switch input[type=checkbox]{position:absolute;left:0;opacity:0;outline:none;z-index:-1}.switch input[type=checkbox]+.check{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-negative:0;flex-shrink:0;width:2.75em;height:1.575em;padding:.2em;background:#b5b5b5;border-radius:4px;-webkit-transition:background .15s ease-out,-webkit-box-shadow .15s ease-out;transition:background .15s ease-out,-webkit-box-shadow .15s ease-out;transition:background .15s ease-out,box-shadow .15s ease-out;transition:background .15s ease-out,box-shadow .15s ease-out,-webkit-box-shadow .15s ease-out}.switch input[type=checkbox]+.check.is-white-passive,.switch input[type=checkbox]+.check:hover{background:#fff}.switch input[type=checkbox]+.check.is-black-passive,.switch input[type=checkbox]+.check:hover{background:#0a0a0a}.switch input[type=checkbox]+.check.is-light-passive,.switch input[type=checkbox]+.check:hover{background:#f5f5f5}.switch input[type=checkbox]+.check.is-dark-passive,.switch input[type=checkbox]+.check:hover{background:#363636}.switch input[type=checkbox]+.check.is-link-passive,.switch input[type=checkbox]+.check.is-primary-passive,.switch input[type=checkbox]+.check:hover{background:#7957d5}.switch input[type=checkbox]+.check.is-info-passive,.switch input[type=checkbox]+.check:hover{background:#167df0}.switch input[type=checkbox]+.check.is-success-passive,.switch input[type=checkbox]+.check:hover{background:#23d160}.switch input[type=checkbox]+.check.is-warning-passive,.switch input[type=checkbox]+.check:hover{background:#ffdd57}.switch input[type=checkbox]+.check.is-danger-passive,.switch input[type=checkbox]+.check:hover{background:#ff3860}.switch .taginput input[type=checkbox]+.check.taginput-container.is-focusable[type=checkbox]+.switch input[type=checkbox]+.check.check,.switch input[type=checkbox]+.check.input[type=checkbox]+.switch input[type=checkbox]+.check.check,.taginput .switch input[type=checkbox]+.check.taginput-container.is-focusable[type=checkbox]+.switch input[type=checkbox]+.check.check{background:\"pink\"}.switch input[type=checkbox]+.check:before{content:\"\";display:block;border-radius:4px;width:1.175em;height:1.175em;background:#f5f5f5;-webkit-box-shadow:0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05);box-shadow:0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05);-webkit-transition:-webkit-transform .15s ease-out;transition:-webkit-transform .15s ease-out;transition:transform .15s ease-out;transition:transform .15s ease-out,-webkit-transform .15s ease-out;will-change:transform;-webkit-transform-origin:left;transform-origin:left}.switch input[type=checkbox]+.check.is-elastic:before{-webkit-transform:scaleX(1.5);transform:scaleX(1.5);border-radius:4px}.switch input[type=checkbox]:checked+.check{background:#7957d5}.switch input[type=checkbox]:checked+.check.is-white{background:#fff}.switch input[type=checkbox]:checked+.check.is-black{background:#0a0a0a}.switch input[type=checkbox]:checked+.check.is-light{background:#f5f5f5}.switch input[type=checkbox]:checked+.check.is-dark{background:#363636}.switch input[type=checkbox]:checked+.check.is-link,.switch input[type=checkbox]:checked+.check.is-primary{background:#7957d5}.switch input[type=checkbox]:checked+.check.is-info{background:#167df0}.switch input[type=checkbox]:checked+.check.is-success{background:#23d160}.switch input[type=checkbox]:checked+.check.is-warning{background:#ffdd57}.switch input[type=checkbox]:checked+.check.is-danger{background:#ff3860}.switch input[type=checkbox]:checked+.check:before{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.switch input[type=checkbox]:checked+.check.is-elastic:before{-webkit-transform:translate3d(50%,0,0) scaleX(1.5);transform:translate3d(50%,0,0) scaleX(1.5)}.switch input[type=checkbox]:active,.switch input[type=checkbox]:focus{outline:none}.switch input[type=checkbox]:active+.check,.switch input[type=checkbox]:focus+.check{-webkit-box-shadow:0 0 .5em hsla(0,0%,47.8%,.6);box-shadow:0 0 .5em hsla(0,0%,47.8%,.6)}.switch input[type=checkbox]:active+.check.is-white-passive,.switch input[type=checkbox]:focus+.check.is-white-passive{-webkit-box-shadow:0 0 .5em hsla(0,0%,100%,.8);box-shadow:0 0 .5em hsla(0,0%,100%,.8)}.switch input[type=checkbox]:active+.check.is-black-passive,.switch input[type=checkbox]:focus+.check.is-black-passive{-webkit-box-shadow:0 0 .5em rgba(10,10,10,.8);box-shadow:0 0 .5em rgba(10,10,10,.8)}.switch input[type=checkbox]:active+.check.is-light-passive,.switch input[type=checkbox]:focus+.check.is-light-passive{-webkit-box-shadow:0 0 .5em hsla(0,0%,96.1%,.8);box-shadow:0 0 .5em hsla(0,0%,96.1%,.8)}.switch input[type=checkbox]:active+.check.is-dark-passive,.switch input[type=checkbox]:focus+.check.is-dark-passive{-webkit-box-shadow:0 0 .5em rgba(54,54,54,.8);box-shadow:0 0 .5em rgba(54,54,54,.8)}.switch input[type=checkbox]:active+.check.is-link-passive,.switch input[type=checkbox]:active+.check.is-primary-passive,.switch input[type=checkbox]:focus+.check.is-link-passive,.switch input[type=checkbox]:focus+.check.is-primary-passive{-webkit-box-shadow:0 0 .5em rgba(121,87,213,.8);box-shadow:0 0 .5em rgba(121,87,213,.8)}.switch input[type=checkbox]:active+.check.is-info-passive,.switch input[type=checkbox]:focus+.check.is-info-passive{-webkit-box-shadow:0 0 .5em rgba(22,125,240,.8);box-shadow:0 0 .5em rgba(22,125,240,.8)}.switch input[type=checkbox]:active+.check.is-success-passive,.switch input[type=checkbox]:focus+.check.is-success-passive{-webkit-box-shadow:0 0 .5em rgba(35,209,96,.8);box-shadow:0 0 .5em rgba(35,209,96,.8)}.switch input[type=checkbox]:active+.check.is-warning-passive,.switch input[type=checkbox]:focus+.check.is-warning-passive{-webkit-box-shadow:0 0 .5em rgba(255,221,87,.8);box-shadow:0 0 .5em rgba(255,221,87,.8)}.switch input[type=checkbox]:active+.check.is-danger-passive,.switch input[type=checkbox]:focus+.check.is-danger-passive{-webkit-box-shadow:0 0 .5em rgba(255,56,96,.8);box-shadow:0 0 .5em rgba(255,56,96,.8)}.switch input[type=checkbox]:active:checked+.check,.switch input[type=checkbox]:focus:checked+.check{-webkit-box-shadow:0 0 .5em rgba(121,87,213,.8);box-shadow:0 0 .5em rgba(121,87,213,.8)}.switch input[type=checkbox]:active:checked+.check.is-white,.switch input[type=checkbox]:focus:checked+.check.is-white{-webkit-box-shadow:0 0 .5em hsla(0,0%,100%,.8);box-shadow:0 0 .5em hsla(0,0%,100%,.8)}.switch input[type=checkbox]:active:checked+.check.is-black,.switch input[type=checkbox]:focus:checked+.check.is-black{-webkit-box-shadow:0 0 .5em rgba(10,10,10,.8);box-shadow:0 0 .5em rgba(10,10,10,.8)}.switch input[type=checkbox]:active:checked+.check.is-light,.switch input[type=checkbox]:focus:checked+.check.is-light{-webkit-box-shadow:0 0 .5em hsla(0,0%,96.1%,.8);box-shadow:0 0 .5em hsla(0,0%,96.1%,.8)}.switch input[type=checkbox]:active:checked+.check.is-dark,.switch input[type=checkbox]:focus:checked+.check.is-dark{-webkit-box-shadow:0 0 .5em rgba(54,54,54,.8);box-shadow:0 0 .5em rgba(54,54,54,.8)}.switch input[type=checkbox]:active:checked+.check.is-link,.switch input[type=checkbox]:active:checked+.check.is-primary,.switch input[type=checkbox]:focus:checked+.check.is-link,.switch input[type=checkbox]:focus:checked+.check.is-primary{-webkit-box-shadow:0 0 .5em rgba(121,87,213,.8);box-shadow:0 0 .5em rgba(121,87,213,.8)}.switch input[type=checkbox]:active:checked+.check.is-info,.switch input[type=checkbox]:focus:checked+.check.is-info{-webkit-box-shadow:0 0 .5em rgba(22,125,240,.8);box-shadow:0 0 .5em rgba(22,125,240,.8)}.switch input[type=checkbox]:active:checked+.check.is-success,.switch input[type=checkbox]:focus:checked+.check.is-success{-webkit-box-shadow:0 0 .5em rgba(35,209,96,.8);box-shadow:0 0 .5em rgba(35,209,96,.8)}.switch input[type=checkbox]:active:checked+.check.is-warning,.switch input[type=checkbox]:focus:checked+.check.is-warning{-webkit-box-shadow:0 0 .5em rgba(255,221,87,.8);box-shadow:0 0 .5em rgba(255,221,87,.8)}.switch input[type=checkbox]:active:checked+.check.is-danger,.switch input[type=checkbox]:focus:checked+.check.is-danger{-webkit-box-shadow:0 0 .5em rgba(255,56,96,.8);box-shadow:0 0 .5em rgba(255,56,96,.8)}.switch .control-label{padding-left:.5em}.switch:hover input[type=checkbox]+.check{background:hsla(0,0%,71%,.9)}.switch:hover input[type=checkbox]+.check.is-white-passive{background:hsla(0,0%,100%,.9)}.switch:hover input[type=checkbox]+.check.is-black-passive{background:rgba(10,10,10,.9)}.switch:hover input[type=checkbox]+.check.is-light-passive{background:hsla(0,0%,96.1%,.9)}.switch:hover input[type=checkbox]+.check.is-dark-passive{background:rgba(54,54,54,.9)}.switch:hover input[type=checkbox]+.check.is-link-passive,.switch:hover input[type=checkbox]+.check.is-primary-passive{background:rgba(121,87,213,.9)}.switch:hover input[type=checkbox]+.check.is-info-passive{background:rgba(22,125,240,.9)}.switch:hover input[type=checkbox]+.check.is-success-passive{background:rgba(35,209,96,.9)}.switch:hover input[type=checkbox]+.check.is-warning-passive{background:rgba(255,221,87,.9)}.switch:hover input[type=checkbox]+.check.is-danger-passive{background:rgba(255,56,96,.9)}.switch:hover input[type=checkbox]:checked+.check{background:rgba(121,87,213,.9)}.switch:hover input[type=checkbox]:checked+.check.is-white{background:hsla(0,0%,100%,.9)}.switch:hover input[type=checkbox]:checked+.check.is-black{background:rgba(10,10,10,.9)}.switch:hover input[type=checkbox]:checked+.check.is-light{background:hsla(0,0%,96.1%,.9)}.switch:hover input[type=checkbox]:checked+.check.is-dark{background:rgba(54,54,54,.9)}.switch:hover input[type=checkbox]:checked+.check.is-link,.switch:hover input[type=checkbox]:checked+.check.is-primary{background:rgba(121,87,213,.9)}.switch:hover input[type=checkbox]:checked+.check.is-info{background:rgba(22,125,240,.9)}.switch:hover input[type=checkbox]:checked+.check.is-success{background:rgba(35,209,96,.9)}.switch:hover input[type=checkbox]:checked+.check.is-warning{background:rgba(255,221,87,.9)}.switch:hover input[type=checkbox]:checked+.check.is-danger{background:rgba(255,56,96,.9)}.switch.is-rounded input[type=checkbox]+.check,.switch.is-rounded input[type=checkbox]+.check:before{border-radius:290486px}.switch.is-rounded input[type=checkbox].is-elastic:before{-webkit-transform:scaleX(1.5);transform:scaleX(1.5);border-radius:290486px}.switch.is-outlined input[type=checkbox]+.check{background:transparent;border:.1rem solid #b5b5b5}.switch.is-outlined input[type=checkbox]+.check.is-white-passive{border:.1rem solid hsla(0,0%,100%,.9)}.switch.is-outlined input[type=checkbox]+.check.is-white-passive:before{background:#fff}.switch.is-outlined input[type=checkbox]+.check.is-white-passive:hover{border-color:hsla(0,0%,100%,.9)}.switch.is-outlined input[type=checkbox]+.check.is-black-passive{border:.1rem solid rgba(10,10,10,.9)}.switch.is-outlined input[type=checkbox]+.check.is-black-passive:before{background:#0a0a0a}.switch.is-outlined input[type=checkbox]+.check.is-black-passive:hover{border-color:rgba(10,10,10,.9)}.switch.is-outlined input[type=checkbox]+.check.is-light-passive{border:.1rem solid hsla(0,0%,96.1%,.9)}.switch.is-outlined input[type=checkbox]+.check.is-light-passive:before{background:#f5f5f5}.switch.is-outlined input[type=checkbox]+.check.is-light-passive:hover{border-color:hsla(0,0%,96.1%,.9)}.switch.is-outlined input[type=checkbox]+.check.is-dark-passive{border:.1rem solid rgba(54,54,54,.9)}.switch.is-outlined input[type=checkbox]+.check.is-dark-passive:before{background:#363636}.switch.is-outlined input[type=checkbox]+.check.is-dark-passive:hover{border-color:rgba(54,54,54,.9)}.switch.is-outlined input[type=checkbox]+.check.is-primary-passive{border:.1rem solid rgba(121,87,213,.9)}.switch.is-outlined input[type=checkbox]+.check.is-primary-passive:before{background:#7957d5}.switch.is-outlined input[type=checkbox]+.check.is-primary-passive:hover{border-color:rgba(121,87,213,.9)}.switch.is-outlined input[type=checkbox]+.check.is-link-passive{border:.1rem solid rgba(121,87,213,.9)}.switch.is-outlined input[type=checkbox]+.check.is-link-passive:before{background:#7957d5}.switch.is-outlined input[type=checkbox]+.check.is-link-passive:hover{border-color:rgba(121,87,213,.9)}.switch.is-outlined input[type=checkbox]+.check.is-info-passive{border:.1rem solid rgba(22,125,240,.9)}.switch.is-outlined input[type=checkbox]+.check.is-info-passive:before{background:#167df0}.switch.is-outlined input[type=checkbox]+.check.is-info-passive:hover{border-color:rgba(22,125,240,.9)}.switch.is-outlined input[type=checkbox]+.check.is-success-passive{border:.1rem solid rgba(35,209,96,.9)}.switch.is-outlined input[type=checkbox]+.check.is-success-passive:before{background:#23d160}.switch.is-outlined input[type=checkbox]+.check.is-success-passive:hover{border-color:rgba(35,209,96,.9)}.switch.is-outlined input[type=checkbox]+.check.is-warning-passive{border:.1rem solid rgba(255,221,87,.9)}.switch.is-outlined input[type=checkbox]+.check.is-warning-passive:before{background:#ffdd57}.switch.is-outlined input[type=checkbox]+.check.is-warning-passive:hover{border-color:rgba(255,221,87,.9)}.switch.is-outlined input[type=checkbox]+.check.is-danger-passive{border:.1rem solid rgba(255,56,96,.9)}.switch.is-outlined input[type=checkbox]+.check.is-danger-passive:before{background:#ff3860}.switch.is-outlined input[type=checkbox]+.check.is-danger-passive:hover{border-color:rgba(255,56,96,.9)}.switch.is-outlined input[type=checkbox]+.check:before{background:#b5b5b5}.switch.is-outlined input[type=checkbox]:checked+.check{border-color:#7957d5}.switch.is-outlined input[type=checkbox]:checked+.check.is-white{background:transparent;border-color:#fff}.switch.is-outlined input[type=checkbox]:checked+.check.is-white:before{background:#fff}.switch.is-outlined input[type=checkbox]:checked+.check.is-black{background:transparent;border-color:#0a0a0a}.switch.is-outlined input[type=checkbox]:checked+.check.is-black:before{background:#0a0a0a}.switch.is-outlined input[type=checkbox]:checked+.check.is-light{background:transparent;border-color:#f5f5f5}.switch.is-outlined input[type=checkbox]:checked+.check.is-light:before{background:#f5f5f5}.switch.is-outlined input[type=checkbox]:checked+.check.is-dark{background:transparent;border-color:#363636}.switch.is-outlined input[type=checkbox]:checked+.check.is-dark:before{background:#363636}.switch.is-outlined input[type=checkbox]:checked+.check.is-primary{background:transparent;border-color:#7957d5}.switch.is-outlined input[type=checkbox]:checked+.check.is-primary:before{background:#7957d5}.switch.is-outlined input[type=checkbox]:checked+.check.is-link{background:transparent;border-color:#7957d5}.switch.is-outlined input[type=checkbox]:checked+.check.is-link:before{background:#7957d5}.switch.is-outlined input[type=checkbox]:checked+.check.is-info{background:transparent;border-color:#167df0}.switch.is-outlined input[type=checkbox]:checked+.check.is-info:before{background:#167df0}.switch.is-outlined input[type=checkbox]:checked+.check.is-success{background:transparent;border-color:#23d160}.switch.is-outlined input[type=checkbox]:checked+.check.is-success:before{background:#23d160}.switch.is-outlined input[type=checkbox]:checked+.check.is-warning{background:transparent;border-color:#ffdd57}.switch.is-outlined input[type=checkbox]:checked+.check.is-warning:before{background:#ffdd57}.switch.is-outlined input[type=checkbox]:checked+.check.is-danger{background:transparent;border-color:#ff3860}.switch.is-outlined input[type=checkbox]:checked+.check.is-danger:before{background:#ff3860}.switch.is-outlined input[type=checkbox]:checked+.check:before{background:#7957d5}.switch.is-outlined:hover input[type=checkbox]+.check{background:transparent;border-color:hsla(0,0%,71%,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check{background:transparent;border-color:rgba(121,87,213,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-white{border-color:hsla(0,0%,100%,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-black{border-color:rgba(10,10,10,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-light{border-color:hsla(0,0%,96.1%,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-dark{border-color:rgba(54,54,54,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-link,.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-primary{border-color:rgba(121,87,213,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-info{border-color:rgba(22,125,240,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-success{border-color:rgba(35,209,96,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-warning{border-color:rgba(255,221,87,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-danger{border-color:rgba(255,56,96,.9)}.switch.is-small{border-radius:2px;font-size:.75rem}.switch.is-medium{font-size:1.25rem}.switch.is-large{font-size:1.5rem}.switch[disabled]{opacity:.5;cursor:not-allowed;color:#7a7a7a}.table-wrapper .table{margin-bottom:0}.table-wrapper:not(:last-child){margin-bottom:1.5rem}@media screen and (max-width:1023px){.table-wrapper{overflow-x:auto}}.b-table{-webkit-transition:opacity 86ms ease-out;transition:opacity 86ms ease-out}@media print,screen and (min-width:769px){.b-table .table-mobile-sort{display:none}}.b-table .icon{-webkit-transition:opacity 86ms ease-out,-webkit-transform .15s ease-out;transition:opacity 86ms ease-out,-webkit-transform .15s ease-out;transition:transform .15s ease-out,opacity 86ms ease-out;transition:transform .15s ease-out,opacity 86ms ease-out,-webkit-transform .15s ease-out}.b-table .icon.is-desc{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.b-table .icon.is-expanded{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.b-table .table{width:100%;border:1px solid transparent;border-radius:4px;border-collapse:separate}.b-table .table th{font-weight:600}.b-table .table th .th-wrap{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.b-table .table th .th-wrap .icon{margin-left:.5rem;margin-right:0;font-size:1rem}.b-table .table th .th-wrap.is-numeric{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;text-align:right}.b-table .table th .th-wrap.is-numeric .icon{margin-left:0;margin-right:.5rem}.b-table .table th .th-wrap.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}.b-table .table th.is-current-sort{border-color:#7a7a7a;font-weight:700}.b-table .table th.is-sortable:hover{border-color:#7a7a7a}.b-table .table th.is-sortable,.b-table .table th.is-sortable .th-wrap{cursor:pointer}.b-table .table th .multi-sort-cancel-icon{margin-left:10px}.b-table .table th.is-sticky{position:-webkit-sticky;position:sticky;left:0;z-index:3!important;background:#fff}.b-table .table tr.is-selected .checkbox input:checked+.check{background:#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%237957d5'/%3E%3C/svg%3E\") no-repeat 50%}.b-table .table tr.is-selected .checkbox input+.check{border-color:#fff}.b-table .table tr.is-empty:hover{background-color:transparent}.b-table .table .chevron-cell{vertical-align:middle}.b-table .table .checkbox-cell{width:40px}.b-table .table .checkbox-cell .checkbox{vertical-align:middle}.b-table .table .checkbox-cell .checkbox .check{-webkit-transition:none;transition:none}.b-table .table tr.detail{-webkit-box-shadow:inset 0 1px 3px #dbdbdb;box-shadow:inset 0 1px 3px #dbdbdb;background:#fafafa}.b-table .table tr.detail .detail-container{padding:1rem}.b-table .table:focus{border-color:#7957d5;-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.b-table .table.is-bordered th.is-current-sort,.b-table .table.is-bordered th.is-sortable:hover{border-color:#dbdbdb;background:#f5f5f5}.b-table .table td.is-sticky{position:-webkit-sticky;position:sticky;left:0;z-index:1;background:#fff}.b-table .level:not(.top){padding-bottom:1.5rem}.b-table .table-wrapper.has-sticky-header{height:300px;overflow-y:auto}@media screen and (max-width:768px){.b-table .table-wrapper.has-sticky-header.has-mobile-cards{height:auto!important;overflow-y:visible!important;overflow-y:initial!important}}.b-table .table-wrapper.has-sticky-header tr:first-child th{position:-webkit-sticky;position:sticky;top:0;z-index:2;background:#fff}@media screen and (max-width:768px){.b-table .table-wrapper.has-mobile-cards thead{display:none}.b-table .table-wrapper.has-mobile-cards tfoot th{border:0;display:inherit}.b-table .table-wrapper.has-mobile-cards tr{-webkit-box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);max-width:100%;position:relative;display:block}.b-table .table-wrapper.has-mobile-cards tr td{border:0;display:inherit}.b-table .table-wrapper.has-mobile-cards tr td:last-child{border-bottom:0}.b-table .table-wrapper.has-mobile-cards tr:not(:last-child){margin-bottom:1rem}.b-table .table-wrapper.has-mobile-cards tr:not([class*=is-]){background:inherit}.b-table .table-wrapper.has-mobile-cards tr:not([class*=is-]):hover{background-color:inherit}.b-table .table-wrapper.has-mobile-cards tr.detail{margin-top:-1rem}.b-table .table-wrapper.has-mobile-cards tr:not(.detail):not(.is-empty):not(.table-footer) td{display:-webkit-box;display:-ms-flexbox;display:flex;width:auto;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;text-align:right;border-bottom:1px solid #f5f5f5}.b-table .table-wrapper.has-mobile-cards tr:not(.detail):not(.is-empty):not(.table-footer) td:before{content:attr(data-label);font-weight:600;padding-right:.5em;text-align:left}}.b-table .table-wrapper.is-card-list thead{display:none}.b-table .table-wrapper.is-card-list tfoot th{border:0;display:inherit}.b-table .table-wrapper.is-card-list tr{-webkit-box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);max-width:100%;position:relative;display:block}.b-table .table-wrapper.is-card-list tr td{border:0;display:inherit}.b-table .table-wrapper.is-card-list tr td:last-child{border-bottom:0}.b-table .table-wrapper.is-card-list tr:not(:last-child){margin-bottom:1rem}.b-table .table-wrapper.is-card-list tr:not([class*=is-]){background:inherit}.b-table .table-wrapper.is-card-list tr:not([class*=is-]):hover{background-color:inherit}.b-table .table-wrapper.is-card-list tr.detail{margin-top:-1rem}.b-table .table-wrapper.is-card-list tr:not(.detail):not(.is-empty):not(.table-footer) td{display:-webkit-box;display:-ms-flexbox;display:flex;width:auto;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;text-align:right;border-bottom:1px solid #f5f5f5}.b-table .table-wrapper.is-card-list tr:not(.detail):not(.is-empty):not(.table-footer) td:before{content:attr(data-label);font-weight:600;padding-right:.5em;text-align:left}.b-table.is-loading{position:relative;pointer-events:none;opacity:.5}.b-table.is-loading:after{-webkit-animation:spinAround .5s linear infinite;animation:spinAround .5s linear infinite;border-radius:290486px;content:\"\";display:block;height:1em;position:relative;width:1em;position:absolute;top:4em;left:calc(50% - 2.5em);width:5em;height:5em;border-color:transparent transparent #dbdbdb #dbdbdb;border-style:solid;border-width:.25em}.b-tabs .tabs{margin-bottom:0;-ms-flex-negative:0;flex-shrink:0}.b-tabs .tabs li.is-disabled{pointer-events:none;cursor:not-allowed;opacity:.5}.b-tabs .tab-content{position:relative;overflow:visible;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:1rem}.b-tabs .tab-content .tab-item{-ms-flex-negative:0;flex-shrink:0;-ms-flex-preferred-size:auto;flex-basis:auto}.b-tabs .tab-content.is-transitioning{overflow:hidden}.b-tabs:not(:last-child){margin-bottom:1.5rem}.b-tabs.is-fullwidth{width:100%}.b-tabs.is-vertical{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.b-tabs.is-vertical>.tabs ul{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-bottom-color:transparent}.b-tabs.is-vertical>.tabs ul li{width:100%}.b-tabs.is-vertical>.tabs ul li a{-webkit-box-pack:left;-ms-flex-pack:left;justify-content:left}.b-tabs.is-vertical>.tabs.is-boxed li a{border-bottom-color:transparent!important;border-right-color:#dbdbdb!important;border-radius:4px 0 0 4px}.b-tabs.is-vertical>.tabs.is-boxed li.is-active a{border-bottom-color:#dbdbdb!important;border-right-color:transparent!important}.b-tabs.is-vertical>.tabs.is-toggle li+li{margin-left:0}.b-tabs.is-vertical>.tabs.is-toggle li:first-child a{border-radius:4px 4px 0 0}.b-tabs.is-vertical>.tabs.is-toggle li:last-child a{border-radius:0 0 4px 4px}.b-tabs.is-vertical>.tabs.is-fullwidth li a{height:100%}.b-tabs.is-vertical>.tab-content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.b-tabs.is-vertical.is-right,.b-tabs.is-vertical.is-right>.tabs ul a{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.b-tabs.is-vertical.is-right>.tabs ul a .icon:first-child{margin-right:0;margin-left:.5em}.b-tabs.is-vertical.is-right>.tabs.is-boxed li a{border-bottom-color:transparent!important;border-right-color:transparent!important;border-left-color:#dbdbdb!important;border-radius:0 4px 4px 0}.b-tabs.is-vertical.is-right>.tabs.is-boxed li.is-active a{border-bottom-color:#dbdbdb!important;border-right-color:#dbdbdb!important;border-left-color:transparent!important}.b-tabs.is-multiline>.tabs ul{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-negative:1;flex-shrink:1}.tag .has-ellipsis{max-width:10em;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tag .delete.is-white,.tag.is-delete.is-white{background:#fff}.tag .delete.is-white:hover,.tag.is-delete.is-white:hover{background-color:#e6e6e6}.tag .delete.is-black,.tag.is-delete.is-black{background:#0a0a0a}.tag .delete.is-black:hover,.tag.is-delete.is-black:hover{background-color:#000}.tag .delete.is-light,.tag.is-delete.is-light{background:#f5f5f5}.tag .delete.is-light:hover,.tag.is-delete.is-light:hover{background-color:#dbdbdb}.tag .delete.is-dark,.tag.is-delete.is-dark{background:#363636}.tag .delete.is-dark:hover,.tag.is-delete.is-dark:hover{background-color:#1c1c1c}.tag .delete.is-primary,.tag.is-delete.is-primary{background:#7957d5}.tag .delete.is-primary:hover,.tag.is-delete.is-primary:hover{background-color:#5a32c7}.tag .delete.is-link,.tag.is-delete.is-link{background:#7957d5}.tag .delete.is-link:hover,.tag.is-delete.is-link:hover{background-color:#5a32c7}.tag .delete.is-info,.tag.is-delete.is-info{background:#167df0}.tag .delete.is-info:hover,.tag.is-delete.is-info:hover{background-color:#0d64c6}.tag .delete.is-success,.tag.is-delete.is-success{background:#23d160}.tag .delete.is-success:hover,.tag.is-delete.is-success:hover{background-color:#1ca64c}.tag .delete.is-warning,.tag.is-delete.is-warning{background:#ffdd57}.tag .delete.is-warning:hover,.tag.is-delete.is-warning:hover{background-color:#ffd324}.tag .delete.is-danger,.tag.is-delete.is-danger{background:#ff3860}.tag .delete.is-danger:hover,.tag.is-delete.is-danger:hover{background-color:#ff0537}.taginput .taginput-container{display:-webkit-box;display:-ms-flexbox;display:flex}.taginput .taginput-container.is-focusable{padding-bottom:0;padding-top:calc(.275em - 1px);padding-left:0;cursor:text}.taginput .taginput-container.is-focusable,.taginput .taginput-container:not(.is-focusable){-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;height:auto}.taginput .taginput-container:not(.is-focusable).is-small{border-radius:2px;font-size:.75rem}.taginput .taginput-container:not(.is-focusable).is-medium{font-size:1.25rem}.taginput .taginput-container:not(.is-focusable).is-large{font-size:1.5rem}.taginput .taginput-container>.tag,.taginput .taginput-container>.tags{margin-left:.275rem;margin-bottom:calc(.275em - 1px);font-size:.9em;height:1.7em}.taginput .taginput-container>.tag .tag,.taginput .taginput-container>.tags .tag{margin-bottom:0;font-size:.9em;height:1.7em}.taginput .taginput-container>.tag .tag.is-delete,.taginput .taginput-container>.tags .tag.is-delete{width:1.7em}.taginput .taginput-container .autocomplete{position:static;-webkit-box-flex:1;-ms-flex:1;flex:1}.taginput .taginput-container .autocomplete input{height:1.7em;margin-bottom:calc(.275em - 1px);padding-top:0;padding-bottom:0;border:none;-webkit-box-shadow:none;box-shadow:none;min-width:8em}.taginput .taginput-container .autocomplete input:focus{-webkit-box-shadow:none!important;box-shadow:none!important}.taginput .taginput-container .autocomplete .icon{height:1.7em}.taginput .taginput-container .autocomplete>.control.is-loading:after{top:.375em}.timepicker .dropdown-menu{min-width:0}.timepicker .dropdown,.timepicker .dropdown-trigger{width:100%}.taginput .timepicker .dropdown-trigger .taginput-container.is-focusable[readonly],.taginput .timepicker .dropdown .taginput-container.is-focusable[readonly],.timepicker .dropdown-trigger .input[readonly],.timepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly],.timepicker .dropdown .input[readonly],.timepicker .dropdown .taginput .taginput-container.is-focusable[readonly]{cursor:pointer;-webkit-box-shadow:inset 0 1px 2px rgba(10,10,10,.1);box-shadow:inset 0 1px 2px rgba(10,10,10,.1)}.taginput .timepicker .dropdown-trigger .taginput-container.is-focusable[readonly].is-active,.taginput .timepicker .dropdown-trigger .taginput-container.is-focusable[readonly].is-focused,.taginput .timepicker .dropdown-trigger .taginput-container.is-focusable[readonly]:active,.taginput .timepicker .dropdown-trigger .taginput-container.is-focusable[readonly]:focus,.taginput .timepicker .dropdown .taginput-container.is-focusable[readonly].is-active,.taginput .timepicker .dropdown .taginput-container.is-focusable[readonly].is-focused,.taginput .timepicker .dropdown .taginput-container.is-focusable[readonly]:active,.taginput .timepicker .dropdown .taginput-container.is-focusable[readonly]:focus,.timepicker .dropdown-trigger .input[readonly].is-active,.timepicker .dropdown-trigger .input[readonly].is-focused,.timepicker .dropdown-trigger .input[readonly]:active,.timepicker .dropdown-trigger .input[readonly]:focus,.timepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly].is-active,.timepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly].is-focused,.timepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly]:active,.timepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly]:focus,.timepicker .dropdown .input[readonly].is-active,.timepicker .dropdown .input[readonly].is-focused,.timepicker .dropdown .input[readonly]:active,.timepicker .dropdown .input[readonly]:focus,.timepicker .dropdown .taginput .taginput-container.is-focusable[readonly].is-active,.timepicker .dropdown .taginput .taginput-container.is-focusable[readonly].is-focused,.timepicker .dropdown .taginput .taginput-container.is-focusable[readonly]:active,.timepicker .dropdown .taginput .taginput-container.is-focusable[readonly]:focus{-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.timepicker .dropdown.is-disabled{opacity:1}.dropdown .dropdown-menu .has-link .timepicker a,.timepicker .dropdown-item,.timepicker .dropdown .dropdown-menu .has-link a{font-size:inherit;padding:0}.timepicker .timepicker-footer{padding:0 .5rem}.timepicker .dropdown-content .control{font-size:1.25em;margin-right:0!important}.timepicker .dropdown-content .control .select select{font-weight:600;padding-right:calc(.625em - 1px);border:0}.timepicker .dropdown-content .control .select select option:disabled{color:hsla(0,0%,47.8%,.7)}.timepicker .dropdown-content .control .select:after{display:none}.timepicker .dropdown-content .control.is-colon{font-size:1.7em}.timepicker.is-small{border-radius:2px;font-size:.75rem}.timepicker.is-medium{font-size:1.25rem}.timepicker.is-large{font-size:1.5rem}.b-tooltip{position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.b-tooltip.is-top:after,.b-tooltip.is-top:before{top:auto;right:auto;bottom:calc(100% + 7px);left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.b-tooltip.is-top.is-white:before{border-top:5px solid #fff}.b-tooltip.is-top.is-black:before,.b-tooltip.is-top.is-white:before{border-right:5px solid transparent;border-left:5px solid transparent;bottom:calc(100% + 2px)}.b-tooltip.is-top.is-black:before{border-top:5px solid #0a0a0a}.b-tooltip.is-top.is-light:before{border-top:5px solid #f5f5f5}.b-tooltip.is-top.is-dark:before,.b-tooltip.is-top.is-light:before{border-right:5px solid transparent;border-left:5px solid transparent;bottom:calc(100% + 2px)}.b-tooltip.is-top.is-dark:before{border-top:5px solid #363636}.b-tooltip.is-top.is-link:before,.b-tooltip.is-top.is-primary:before{border-top:5px solid #7957d5;border-right:5px solid transparent;border-left:5px solid transparent;bottom:calc(100% + 2px)}.b-tooltip.is-top.is-info:before{border-top:5px solid #167df0}.b-tooltip.is-top.is-info:before,.b-tooltip.is-top.is-success:before{border-right:5px solid transparent;border-left:5px solid transparent;bottom:calc(100% + 2px)}.b-tooltip.is-top.is-success:before{border-top:5px solid #23d160}.b-tooltip.is-top.is-warning:before{border-top:5px solid #ffdd57}.b-tooltip.is-top.is-danger:before,.b-tooltip.is-top.is-warning:before{border-right:5px solid transparent;border-left:5px solid transparent;bottom:calc(100% + 2px)}.b-tooltip.is-top.is-danger:before{border-top:5px solid #ff3860}.b-tooltip.is-top.is-multiline.is-small:after{width:180px}.b-tooltip.is-top.is-multiline.is-medium:after{width:240px}.b-tooltip.is-top.is-multiline.is-large:after{width:300px}.b-tooltip.is-right:after,.b-tooltip.is-right:before{top:50%;right:auto;bottom:auto;left:calc(100% + 7px);-webkit-transform:translateY(-50%);transform:translateY(-50%)}.b-tooltip.is-right.is-white:before{border-right:5px solid #fff}.b-tooltip.is-right.is-black:before,.b-tooltip.is-right.is-white:before{border-top:5px solid transparent;border-bottom:5px solid transparent;left:calc(100% + 2px)}.b-tooltip.is-right.is-black:before{border-right:5px solid #0a0a0a}.b-tooltip.is-right.is-light:before{border-right:5px solid #f5f5f5}.b-tooltip.is-right.is-dark:before,.b-tooltip.is-right.is-light:before{border-top:5px solid transparent;border-bottom:5px solid transparent;left:calc(100% + 2px)}.b-tooltip.is-right.is-dark:before{border-right:5px solid #363636}.b-tooltip.is-right.is-link:before,.b-tooltip.is-right.is-primary:before{border-top:5px solid transparent;border-right:5px solid #7957d5;border-bottom:5px solid transparent;left:calc(100% + 2px)}.b-tooltip.is-right.is-info:before{border-right:5px solid #167df0}.b-tooltip.is-right.is-info:before,.b-tooltip.is-right.is-success:before{border-top:5px solid transparent;border-bottom:5px solid transparent;left:calc(100% + 2px)}.b-tooltip.is-right.is-success:before{border-right:5px solid #23d160}.b-tooltip.is-right.is-warning:before{border-right:5px solid #ffdd57}.b-tooltip.is-right.is-danger:before,.b-tooltip.is-right.is-warning:before{border-top:5px solid transparent;border-bottom:5px solid transparent;left:calc(100% + 2px)}.b-tooltip.is-right.is-danger:before{border-right:5px solid #ff3860}.b-tooltip.is-right.is-multiline.is-small:after{width:180px}.b-tooltip.is-right.is-multiline.is-medium:after{width:240px}.b-tooltip.is-right.is-multiline.is-large:after{width:300px}.b-tooltip.is-bottom:after,.b-tooltip.is-bottom:before{top:calc(100% + 7px);right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.b-tooltip.is-bottom.is-white:before{border-bottom:5px solid #fff}.b-tooltip.is-bottom.is-black:before,.b-tooltip.is-bottom.is-white:before{border-right:5px solid transparent;border-left:5px solid transparent;top:calc(100% + 2px)}.b-tooltip.is-bottom.is-black:before{border-bottom:5px solid #0a0a0a}.b-tooltip.is-bottom.is-light:before{border-bottom:5px solid #f5f5f5}.b-tooltip.is-bottom.is-dark:before,.b-tooltip.is-bottom.is-light:before{border-right:5px solid transparent;border-left:5px solid transparent;top:calc(100% + 2px)}.b-tooltip.is-bottom.is-dark:before{border-bottom:5px solid #363636}.b-tooltip.is-bottom.is-link:before,.b-tooltip.is-bottom.is-primary:before{border-right:5px solid transparent;border-bottom:5px solid #7957d5;border-left:5px solid transparent;top:calc(100% + 2px)}.b-tooltip.is-bottom.is-info:before{border-bottom:5px solid #167df0}.b-tooltip.is-bottom.is-info:before,.b-tooltip.is-bottom.is-success:before{border-right:5px solid transparent;border-left:5px solid transparent;top:calc(100% + 2px)}.b-tooltip.is-bottom.is-success:before{border-bottom:5px solid #23d160}.b-tooltip.is-bottom.is-warning:before{border-bottom:5px solid #ffdd57}.b-tooltip.is-bottom.is-danger:before,.b-tooltip.is-bottom.is-warning:before{border-right:5px solid transparent;border-left:5px solid transparent;top:calc(100% + 2px)}.b-tooltip.is-bottom.is-danger:before{border-bottom:5px solid #ff3860}.b-tooltip.is-bottom.is-multiline.is-small:after{width:180px}.b-tooltip.is-bottom.is-multiline.is-medium:after{width:240px}.b-tooltip.is-bottom.is-multiline.is-large:after{width:300px}.b-tooltip.is-left:after,.b-tooltip.is-left:before{top:50%;right:calc(100% + 7px);bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.b-tooltip.is-left.is-white:before{border-left:5px solid #fff}.b-tooltip.is-left.is-black:before,.b-tooltip.is-left.is-white:before{border-top:5px solid transparent;border-bottom:5px solid transparent;right:calc(100% + 2px)}.b-tooltip.is-left.is-black:before{border-left:5px solid #0a0a0a}.b-tooltip.is-left.is-light:before{border-left:5px solid #f5f5f5}.b-tooltip.is-left.is-dark:before,.b-tooltip.is-left.is-light:before{border-top:5px solid transparent;border-bottom:5px solid transparent;right:calc(100% + 2px)}.b-tooltip.is-left.is-dark:before{border-left:5px solid #363636}.b-tooltip.is-left.is-link:before,.b-tooltip.is-left.is-primary:before{border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #7957d5;right:calc(100% + 2px)}.b-tooltip.is-left.is-info:before{border-left:5px solid #167df0}.b-tooltip.is-left.is-info:before,.b-tooltip.is-left.is-success:before{border-top:5px solid transparent;border-bottom:5px solid transparent;right:calc(100% + 2px)}.b-tooltip.is-left.is-success:before{border-left:5px solid #23d160}.b-tooltip.is-left.is-warning:before{border-left:5px solid #ffdd57}.b-tooltip.is-left.is-danger:before,.b-tooltip.is-left.is-warning:before{border-top:5px solid transparent;border-bottom:5px solid transparent;right:calc(100% + 2px)}.b-tooltip.is-left.is-danger:before{border-left:5px solid #ff3860}.b-tooltip.is-left.is-multiline.is-small:after{width:180px}.b-tooltip.is-left.is-multiline.is-medium:after{width:240px}.b-tooltip.is-left.is-multiline.is-large:after{width:300px}.b-tooltip:after,.b-tooltip:before{position:absolute;content:\"\";opacity:0;visibility:hidden;pointer-events:none}.b-tooltip:before{z-index:39}.b-tooltip:after{content:attr(data-label);width:auto;padding:.35rem .75rem;border-radius:6px;font-size:.85rem;font-weight:400;-webkit-box-shadow:0 1px 2px 1px rgba(0,1,0,.2);box-shadow:0 1px 2px 1px rgba(0,1,0,.2);z-index:38;white-space:nowrap}.b-tooltip:not([data-label=\"\"]):hover:after,.b-tooltip:not([data-label=\"\"]):hover:before{-webkit-transition-delay:inherit;transition-delay:inherit;opacity:1;visibility:visible}.b-tooltip.is-white:after{background:#fff;color:#0a0a0a}.b-tooltip.is-black:after{background:#0a0a0a;color:#fff}.b-tooltip.is-light:after{background:#f5f5f5;color:#363636}.b-tooltip.is-dark:after{background:#363636;color:#f5f5f5}.b-tooltip.is-link:after,.b-tooltip.is-primary:after{background:#7957d5;color:#fff}.b-tooltip.is-info:after{background:#167df0;color:#fff}.b-tooltip.is-success:after{background:#23d160;color:#fff}.b-tooltip.is-warning:after{background:#ffdd57;color:rgba(0,0,0,.7)}.b-tooltip.is-danger:after{background:#ff3860;color:#fff}.b-tooltip:not([data-label=\"\"]).is-always:after,.b-tooltip:not([data-label=\"\"]).is-always:before{opacity:1;visibility:visible}.b-tooltip.is-multiline:after{display:flex-block;text-align:center;white-space:normal}.b-tooltip.is-dashed{border-bottom:1px dashed #b5b5b5;cursor:default}.b-tooltip.is-square:after{border-radius:0}.b-tooltip.is-animated:after,.b-tooltip.is-animated:before{-webkit-transition:opacity 86ms ease-out,visibility 86ms ease-out;transition:opacity 86ms ease-out,visibility 86ms ease-out}.upload{position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.upload input[type=file]{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;outline:none;cursor:pointer;z-index:-1}.upload .upload-draggable{cursor:pointer;padding:.25em;border:1px dashed #b5b5b5;border-radius:6px}.upload .upload-draggable.is-disabled{opacity:.5;cursor:not-allowed}.upload .upload-draggable.is-loading{position:relative;pointer-events:none;opacity:.5}.upload .upload-draggable.is-loading:after{-webkit-animation:spinAround .5s linear infinite;animation:spinAround .5s linear infinite;border-radius:290486px;content:\"\";display:block;height:1em;position:relative;width:1em;top:0;left:calc(50% - 1.5em);width:3em;height:3em;border-color:transparent transparent #dbdbdb #dbdbdb;border-style:solid;border-width:.25em}.upload .upload-draggable.is-hovered.is-white,.upload .upload-draggable:hover.is-white{border-color:#fff;background:hsla(0,0%,100%,.05)}.upload .upload-draggable.is-hovered.is-black,.upload .upload-draggable:hover.is-black{border-color:#0a0a0a;background:rgba(10,10,10,.05)}.upload .upload-draggable.is-hovered.is-light,.upload .upload-draggable:hover.is-light{border-color:#f5f5f5;background:hsla(0,0%,96.1%,.05)}.upload .upload-draggable.is-hovered.is-dark,.upload .upload-draggable:hover.is-dark{border-color:#363636;background:rgba(54,54,54,.05)}.upload .upload-draggable.is-hovered.is-link,.upload .upload-draggable.is-hovered.is-primary,.upload .upload-draggable:hover.is-link,.upload .upload-draggable:hover.is-primary{border-color:#7957d5;background:rgba(121,87,213,.05)}.upload .upload-draggable.is-hovered.is-info,.upload .upload-draggable:hover.is-info{border-color:#167df0;background:rgba(22,125,240,.05)}.upload .upload-draggable.is-hovered.is-success,.upload .upload-draggable:hover.is-success{border-color:#23d160;background:rgba(35,209,96,.05)}.upload .upload-draggable.is-hovered.is-warning,.upload .upload-draggable:hover.is-warning{border-color:#ffdd57;background:rgba(255,221,87,.05)}.upload .upload-draggable.is-hovered.is-danger,.upload .upload-draggable:hover.is-danger{border-color:#ff3860;background:rgba(255,56,96,.05)}.upload.is-expanded,.upload .upload-draggable.is-expanded{width:100%}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){.upload input[type=file]{z-index:auto}.upload .upload-draggable+input[type=file]{z-index:-1}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("49d91b13", content, true)

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html{scroll-behavior:smooth}body{font-smooth:auto;-webkit-font-smoothing:auto;font-family:-apple-system,BlinkMacSystemFont,Arial,sans-serif}.button,.file-cta,.file-name,.input,.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous,.select select,.taginput .taginput-container.is-focusable,.textarea,body{font-size:14px}:focus{outline:unset}.container{max-width:1060px}.container.small{max-width:500px}.container:not(:last-child){margin-bottom:1.5rem}.navbar-item,.widget_title{font-weight:700}.widget_title:not(:last-child){margin-bottom:1rem}.box{border-radius:0;box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1)}.image.is-1by1 img{-o-object-fit:cover;object-fit:cover}.media-show .image img{width:auto;margin:0 auto}.clickable{cursor:pointer}@media screen and (max-width:1023px){.navbar-end .navbar-item .navbar-item{border:1px solid #eee}.modal-content{padding:0 1rem}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: () => ({
    user: null,
    token: null,
    loggedIn: false
  }),
  mutations: {
    ['SET_USER'](state, user) {
      state.user = user;
      state.loggedIn = !!user;
    },

    ['SET_TOKEN'](state, token) {
      state.token = token;
    }

  },
  actions: {},
  getters: {
    getUser: state => {
      return state.user;
    }
  }
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: () => ({
    contentTypes: null,
    app: null
  }),
  mutations: {
    ['SET_CONTENT_TYPE'](state, ct) {
      state.contentTypes = ct;
    },

    ['SET_APP'](state, ct) {
      state.app = ct;
    }

  },
  actions: {},
  getters: {}
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".avatar{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center}.avatar.initials.is-bordered{border:1px solid #eee}.avatar img{border-radius:5px;min-height:unset;margin-bottom:0}.avatar .delete,.avatar .medal{z-index:1;position:absolute;right:-.5rem}.avatar .medal{top:.25rem;right:.5rem;cursor:pointer}.avatar .delete{bottom:-.5rem;background-color:#ec3726}.avatar .image-blank{min-height:150px}.avatar:before{position:absolute;bottom:-.25rem;right:-.25rem;width:.65rem;height:.65rem;border-radius:2px;content:\"\"}.avatar.online:before{background:#d8ab34}.avatar.offline:before{background:#ddd}.upload,.upload input[type=file]{width:100%;height:100%}.upload .upload-draggable{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".user{align-items:center}.user .media-content{line-height:1.2}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".media.comment .media{padding-top:0;border-top:0}.comment .user .media-left{margin-right:0}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UI_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UI_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UI_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UI_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UI_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UI_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ui{overflow:hidden}.ui .card-content{position:absolute;bottom:-100%;left:0;right:0;padding:.75rem;background:#eee}.ui .card-content h3{margin-bottom:.5rem;font-weight:700}.ui .card-content a{color:#333}.ui:hover .card-content{bottom:0;transition:.3s}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("cookieparser");

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(17);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(18);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js
 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {
        "PUBLICATION": "5",
        "BASE_URL": "https://uihunt.com",
        "API_DOMAIN": "https://cms.fournalist.com/v1"
      }
    }; // Only set once

    if ( true && context.req) {
      app.context.req = context.req;
    }

    if ( true && context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  let path = decodeURI(window.location.pathname);

  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  } // To get matched with sanitized router.base add trailing slash


  if (base && (path.endsWith('/') ? path : path + '/').startsWith(base)) {
    path = path.slice(base.length);
  }

  return (path || '/') + window.location.search + window.location.hash;
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
};
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(19);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(13);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(12);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(4);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false; // if no children detected and scrollToTop is not explicitly disabled

  const Pages = getMatchedComponents(to);

  if (Pages.length < 2 && Pages.every(Page => Page.options.scrollToTop !== false)) {
    // scroll to the top of the page
    position = {
      x: 0,
      y: 0
    };
  } else if (Pages.some(Page => Page.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = {
      x: 0,
      y: 0
    };
  } // savedPosition is only available for popstate navigations (back button)


  if (savedPosition) {
    position = savedPosition;
  }

  const nuxt = window.$nuxt; // triggerScroll is only fired when a new component is loaded

  if (to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _40f6c3b1 = () => interopDefault(__webpack_require__.e(/* import() | pages/inspiration */ 2).then(__webpack_require__.bind(null, 49)));

const _f7e9122e = () => interopDefault(__webpack_require__.e(/* import() | pages/post */ 3).then(__webpack_require__.bind(null, 50)));

const _68736aac = () => interopDefault(__webpack_require__.e(/* import() | pages/post/index */ 5).then(__webpack_require__.bind(null, 51)));

const _b617afd8 = () => interopDefault(__webpack_require__.e(/* import() | pages/post/_id */ 4).then(__webpack_require__.bind(null, 52)));

const _2ea35a70 = () => interopDefault(__webpack_require__.e(/* import() | pages/profile */ 6).then(__webpack_require__.bind(null, 53)));

const _777a0856 = () => interopDefault(__webpack_require__.e(/* import() | pages/profile/_username */ 7).then(__webpack_require__.bind(null, 54)));

const _c0716a94 = () => interopDefault(__webpack_require__.e(/* import() | pages/topic */ 8).then(__webpack_require__.bind(null, 55)));

const _f1af90b8 = () => interopDefault(__webpack_require__.e(/* import() | pages/_tag */ 1).then(__webpack_require__.bind(null, 56))); // TODO: remove in Nuxt 3


const emptyFn = () => {};

const originalPush = external_vue_router_default.a.prototype.push;

external_vue_router_default.a.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort);
};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/inspiration",
    component: _40f6c3b1,
    name: "inspiration"
  }, {
    path: "/post",
    component: _f7e9122e,
    children: [{
      path: "",
      component: _68736aac,
      name: "post"
    }, {
      path: ":id",
      component: _b617afd8,
      name: "post-id"
    }]
  }, {
    path: "/profile",
    component: _2ea35a70,
    name: "profile",
    children: [{
      path: ":username?",
      component: _777a0856,
      name: "profile-username"
    }]
  }, {
    path: "/topic",
    component: _c0716a94,
    name: "topic"
  }, {
    path: "/:tag?",
    component: _f1af90b8,
    name: "tag"
  }],
  fallback: false
};
function createRouter() {
  return new external_vue_router_default.a(routerOptions);
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=39174add&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt.js</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=39174add&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(26)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "c88499b4"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(28)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "19747eda"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/buefy/dist/buefy.css
var buefy = __webpack_require__(30);

// EXTERNAL MODULE: ./scss/app.scss
var scss_app = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=70b8d512&
var defaultvue_type_template_id_70b8d512_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<header>","</header>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<nav role=\"navigation\" aria-label=\"main navigation\" class=\"navbar header\">","</nav>",[_vm._ssrNode("<div class=\"navbar-brand\">","</div>",[_c('n-link',{staticClass:"navbar-item",attrs:{"to":"/"}},[_vm._v("UIHUNT")]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"navbar-item\">","</div>",[_c('tag-select')],1),_vm._ssrNode(" <div"+(_vm._ssrClass("navbar-burger clickable",{'is-active': _vm.activeMenu}))+"><span></span> <span></span> <span></span></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("navbar-menu",{'is-active': _vm.activeMenu}))+">","</div>",[_vm._ssrNode("<div class=\"navbar-start\"><a class=\"navbar-item\">Inspiration</a></div> "),_vm._ssrNode("<div class=\"navbar-end\">","</div>",[_vm._ssrNode("<div class=\"navbar-item\">","</div>",[_c('login-bar')],1)])],2)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<main class=\"main-content\">","</main>",[_c('nuxt')],1)],2)}
var defaultvue_type_template_id_70b8d512_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=70b8d512&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/TagSelect.vue?vue&type=template&id=3b725ffc&
var TagSelectvue_type_template_id_3b725ffc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-dropdown',{attrs:{"aria-role":"list"}},[_c('button',{staticClass:"button is-text",attrs:{"slot":"trigger","type":"button"},slot:"trigger"},[[_c('b-icon',{attrs:{"icon":"chevron-right"}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.app ? _vm.app.term.title : 'Select Topic'))])]],2),_vm._v(" "),_c('b-dropdown-item',{attrs:{"custom":"","aria-role":"menuitem"}},[_c('b-field',[_c('b-input',{attrs:{"expanded":"","placeholder":"Search"},on:{"input":_vm.delay_search}})],1)],1),_vm._v(" "),_c('hr',{staticClass:"dropdown-divider"}),_vm._v(" "),_vm._l((_vm.response.results),function(app){return _c('b-dropdown-item',{key:app.id,attrs:{"has-link":"","aria-role":"menuitem"}},[_c('n-link',{attrs:{"to":("/" + (app['term']['slug']))}},[_c('div',{staticClass:"media"},[_c('div',{staticClass:"media-content"},[_c('h3',[_vm._v(_vm._s(app['term'].title))])])])])],1)})],2)],1)}
var TagSelectvue_type_template_id_3b725ffc_staticRenderFns = []


// CONCATENATED MODULE: ./components/TagSelect.vue?vue&type=template&id=3b725ffc&

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TagSelect.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TagSelectvue_type_script_lang_js_ = ({
  name: "TagSelect",

  data() {
    return {
      response: {
        results: [],
        count: 0
      }
    };
  },

  methods: {
    async fetch(text) {
      this.response = await this.$api['taxonomy'].list({
        page_size: 5,
        search: text
      });
    },

    delay_search: Object(external_lodash_["debounce"])(function (text) {
      this.fetch(text);
    }, 800)
  },
  computed: {
    app() {
      return this.$store.state.config.app;
    }

  },

  created() {
    this.fetch();
  }

});
// CONCATENATED MODULE: ./components/TagSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TagSelectvue_type_script_lang_js_ = (TagSelectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/TagSelect.vue



function TagSelect_injectStyles (context) {
  
  
}

/* normalize component */

var TagSelect_component = Object(componentNormalizer["a" /* default */])(
  components_TagSelectvue_type_script_lang_js_,
  TagSelectvue_type_template_id_3b725ffc_render,
  TagSelectvue_type_template_id_3b725ffc_staticRenderFns,
  false,
  TagSelect_injectStyles,
  null,
  "408acc00"
  
)

/* harmony default export */ var TagSelect = (TagSelect_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  components: {
    TagSelect: TagSelect
  },

  data() {
    return {
      activeMenu: false
    };
  }

});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_70b8d512_render,
  defaultvue_type_template_id_70b8d512_staticRenderFns,
  false,
  null,
  null,
  "57d14268"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js






const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    external_vue_default.a.prototype.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) {
          this.$loading.fail(this.nuxt.err);
        }

        if (this.$loading.finish) {
          this.$loading.finish();
        }
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};

(function updateModules() {
  // If store is an exported method = classic mode (deprecated)
  // Enforce store modules
  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(34), 'auth.js');
  resolveStoreModules(__webpack_require__(35), 'config.js'); // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const storeModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(storeModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  const isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  const storeModule = getStoreModule(store_store, namespaces);

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(16);

// CONCATENATED MODULE: ./.nuxt/nuxt-icons.js
/* harmony default export */ var nuxt_icons = (async function (ctx, inject) {
  const icons = {
    "64x64": "/_nuxt/icons/icon_64.5f6a36.png",
    "120x120": "/_nuxt/icons/icon_120.5f6a36.png",
    "144x144": "/_nuxt/icons/icon_144.5f6a36.png",
    "152x152": "/_nuxt/icons/icon_152.5f6a36.png",
    "192x192": "/_nuxt/icons/icon_192.5f6a36.png",
    "384x384": "/_nuxt/icons/icon_384.5f6a36.png",
    "512x512": "/_nuxt/icons/icon_512.5f6a36.png"
  };

  const getIcon = size => icons[size + 'x' + size] || '';

  inject('icon', getIcon);
});
// EXTERNAL MODULE: external "cookie-universal"
var external_cookie_universal_ = __webpack_require__(21);
var external_cookie_universal_default = /*#__PURE__*/__webpack_require__.n(external_cookie_universal_);

// CONCATENATED MODULE: ./.nuxt/cookie-universal-nuxt.js

/* harmony default export */ var cookie_universal_nuxt = (({
  req,
  res
}, inject) => {
  const options = {
    "alias": "ck",
    "parseJSON": true
  };
  inject(options.alias, external_cookie_universal_default()(req, res, options.parseJSON));
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(22);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (let scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        return;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (let method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (let key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // baseURL
  const baseURL =  false ? undefined : process.env._AXIOS_BASE_URL_ || 'https://cms.fournalist.com/v1'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (let h of ["accept", "host", "cf-ray", "cf-connecting-ip", "content-length", "content-md5", "content-type"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: external "buefy"
var external_buefy_ = __webpack_require__(23);
var external_buefy_default = /*#__PURE__*/__webpack_require__.n(external_buefy_);

// CONCATENATED MODULE: ./.nuxt/buefy.js


external_vue_default.a.use(external_buefy_default.a, {
  "css": true,
  "materialDesignIcons": true,
  "materialDesignIconsHRef": "//cdn.materialdesignicons.com/5.0.45/css/materialdesignicons.min.css"
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Upload.vue?vue&type=template&id=2565c964&
var Uploadvue_type_template_id_2565c964_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-upload',{attrs:{"multiple":_vm.multiple,"drag-drop":""},on:{"input":_vm.handleInput},model:{value:(_vm.dropFiles),callback:function ($$v) {_vm.dropFiles=$$v},expression:"dropFiles"}},[_c('div',{staticClass:"content has-text-centered"},[_c('p',[_c('b-icon',{attrs:{"icon":"cloud-upload","size":"is-large"}})],1),_vm._v(" "),(_vm.text)?_c('p',[_vm._v(_vm._s(_vm.text))]):_vm._e()]),_vm._v(" "),_c('b-loading',{attrs:{"is-full-page":false,"active":_vm.isLoading,"can-cancel":true},on:{"update:active":function($event){_vm.isLoading=$event}}})],1)}
var Uploadvue_type_template_id_2565c964_staticRenderFns = []


// CONCATENATED MODULE: ./components/Upload.vue?vue&type=template&id=2565c964&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Upload.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Uploadvue_type_script_lang_js_ = ({
  props: {
    text: {},
    multiple: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      dropFiles: [],
      isLoading: false
    };
  },

  name: 'upload',
  methods: {
    async handleInput(data) {
      let results = [];
      this.isLoading = true;

      if (this.multiple) {
        for (let i = 0; i < data.length; i++) {
          let res = await this.beforeUpload(data[i]);
          results.push(res);
        }
      } else {
        let res = await this.beforeUpload(data);
        results.push(res);
      }

      this.$emit('done', results);
      this.dropFiles = [];
      this.isLoading = false;
    },

    async beforeUpload(file) {
      let formData = new FormData();
      formData.append('path', file);
      formData.append('title', file.name);
      return await this.$api.media.post(formData);
    }

  }
});
// CONCATENATED MODULE: ./components/Upload.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Uploadvue_type_script_lang_js_ = (Uploadvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Upload.vue





/* normalize component */

var Upload_component = Object(componentNormalizer["a" /* default */])(
  components_Uploadvue_type_script_lang_js_,
  Uploadvue_type_template_id_2565c964_render,
  Uploadvue_type_template_id_2565c964_staticRenderFns,
  false,
  null,
  null,
  "67a1efb2"
  
)

/* harmony default export */ var Upload = (Upload_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Avatar.vue?vue&type=template&id=669c9ba2&
var Avatarvue_type_template_id_669c9ba2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"image avatar relative",class:{'initials': !_vm.isUpdating && !(_vm.data && _vm.data.sizes)}},[(_vm.isUpdating)?_c('Upload',{staticClass:"upload",on:{"done":_vm.handleUpload}}):(_vm.data && _vm.data.sizes)?_c('img',{staticClass:"is-round",attrs:{"src":_vm.cleanURI(_vm.data.sizes[_vm.size] ? _vm.data.sizes[_vm.size] : _vm.data.path),"alt":""}}):(_vm.name)?_c('span',[_vm._v(_vm._s(_vm.avatarName(_vm.name, 2)))]):_c('b-icon',{attrs:{"icon":_vm.icon}}),_vm._ssrNode(" "),(_vm.canUpdate)?_vm._ssrNode("<div class=\"medal\">","</div>",[_c('b-icon',{attrs:{"size":"is-small","icon":_vm.isUpdating ? 'close' : 'upload'}})],1):_vm._e(),_vm._ssrNode(" "+((_vm.canUpdate && _vm.data)?("<div class=\"delete\"></div>"):"<!---->"))],2)}
var Avatarvue_type_template_id_669c9ba2_staticRenderFns = []


// CONCATENATED MODULE: ./components/Avatar.vue?vue&type=template&id=669c9ba2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Avatar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Avatarvue_type_script_lang_js_ = ({
  name: "Avatar",
  components: {
    Upload: Upload
  },
  props: {
    canUpdate: {
      type: Boolean,
      default: false
    },
    value: {
      default: null,
      type: Object
    },
    name: {
      default: null
    },
    icon: {
      default: 'image-frame',
      type: String
    },
    size: {
      default: 'thumb_24_24'
    }
  },

  data() {
    return {
      data: this.value,
      isUpdating: false
    };
  },

  methods: {
    handleUpload(files) {
      if (files.length) {
        this.data = files[0];
        this.isUpdating = false;
      }
    },

    cleanURI(url) {
      if (url) {
        return url.split("?")[0].split("#")[0];
      }

      return null;
    },

    avatarName(name, length) {
      let matches = name.match(/\b(\w)/g);

      if (length) {
        return matches.join('').substr(0, length);
      }

      return matches.join('');
    }

  },
  watch: {
    data() {
      this.$emit('input', this.data);
    },

    value() {
      this.data = this.value;
    }

  }
});
// CONCATENATED MODULE: ./components/Avatar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Avatarvue_type_script_lang_js_ = (Avatarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Avatar.vue



function Avatar_injectStyles (context) {
  
  var style0 = __webpack_require__(36)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Avatar_component = Object(componentNormalizer["a" /* default */])(
  components_Avatarvue_type_script_lang_js_,
  Avatarvue_type_template_id_669c9ba2_render,
  Avatarvue_type_template_id_669c9ba2_staticRenderFns,
  false,
  Avatar_injectStyles,
  null,
  "7ab76102"
  
)

/* harmony default export */ var Avatar = (Avatar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/User.vue?vue&type=template&id=37b99444&
var Uservue_type_template_id_37b99444_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.value)?_c('div',{staticClass:"media user",on:{"click":_vm.click}},[_vm._ssrNode("<div class=\"media-left\">","</div>",[_c('Avatar',{class:("avatar " + _vm.avatarSize),attrs:{"icon":"shield-account-outline","value":_vm.value.profile ? _vm.value.profile.media : null}})],1),_vm._ssrNode(" "),(!_vm.onlyAvatar)?_vm._ssrNode("<div class=\"media-content v-center\">","</div>",[(_vm.clickable)?_c('n-link',{staticClass:"value",attrs:{"to":_vm.value.id ? ("/profile/" + (_vm.value.username)) : '#'}},[_vm._v("\n            "+_vm._s(_vm.convertName(_vm.value))+"\n        ")]):_c('span',[_vm._v(_vm._s(_vm.convertName(_vm.value)))]),_vm._ssrNode(" "+((_vm.username)?("<div class=\"field\"><small>"+_vm._ssrEscape("@"+_vm._s(_vm.value.username))+"</small></div>"):"<!---->")+" "),_vm._t("default")],2):_vm._e(),_vm._ssrNode(" "),(_vm.canFollow && !_vm.onlyAvatar)?_vm._ssrNode("<div class=\"media-right\">","</div>",[_c('follow',{staticClass:"is-small",attrs:{"model":"user","pk":_vm.value.id,"value":_vm.value['is_following'] || _vm.following}})],1):_vm._e()],2):_vm._e()}
var Uservue_type_template_id_37b99444_staticRenderFns = []


// CONCATENATED MODULE: ./components/User.vue?vue&type=template&id=37b99444&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/User.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const SAMPLE = {
  first_name: "",
  last_name: "",
  username: "anonymous",
  profile: {
    media: null,
    description: null,
    nick: "Anonymous"
  },
  is_staff: false
};
/* harmony default export */ var Uservue_type_script_lang_js_ = ({
  name: "User",
  props: {
    canFollow: {
      default: false,
      type: Boolean
    },
    value: {
      default: () => SAMPLE
    },
    username: {
      default: false,
      type: Boolean
    },
    avatarSize: {
      default: 'is-32x32',
      type: String
    },
    onlyAvatar: {
      default: false,
      type: Boolean
    },
    clickable: {
      default: true,
      type: Boolean
    },
    following: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    click() {
      if (!this.canFollow && this.value.id && this.clickable) {
        this.$router.replace({
          path: `/profile/${this.value.username}`
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./components/User.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Uservue_type_script_lang_js_ = (Uservue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/User.vue



function User_injectStyles (context) {
  
  var style0 = __webpack_require__(38)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var User_component = Object(componentNormalizer["a" /* default */])(
  components_Uservue_type_script_lang_js_,
  Uservue_type_template_id_37b99444_render,
  Uservue_type_template_id_37b99444_staticRenderFns,
  false,
  User_injectStyles,
  null,
  "365ac71e"
  
)

/* harmony default export */ var User = (User_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/LoginBar.vue?vue&type=template&id=08b529f0&scoped=true&
var LoginBarvue_type_template_id_08b529f0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navbar-item"},[_c('b-modal',{attrs:{"active":_vm.showLogin,"has-modal-card":"","trap-focus":"","destroy-on-hide":"","scroll":"keep"},on:{"update:active":function($event){_vm.showLogin=$event}}},[_c('div',{staticClass:"container small"},[_c('login',{on:{"success":function($event){_vm.showLogin = !_vm.showLogin}}})],1)]),_vm._ssrNode(" "),(!Boolean(_vm.currentUser))?_vm._ssrNode("<div class=\"buttons\" data-v-08b529f0>","</div>",[_vm._ssrNode("<button class=\"button is-primary\" data-v-08b529f0><strong data-v-08b529f0>Sign up</strong></button> <button class=\"button is-light\" data-v-08b529f0>\n            Log in\n        </button>")],2):_vm._ssrNode("<div class=\"grouped\" data-v-08b529f0>","</div>",[_vm._ssrNode("<div class=\"button\" data-v-08b529f0>","</div>",[_c('user-card',{attrs:{"avatar-size":"is-24x24","value":_vm.currentUser,"clickable":""}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"button is-text\" data-v-08b529f0>","</div>",[_c('b-icon',{attrs:{"size":"is-small","icon":"account-arrow-right-outline"}})],1)],2)],2)}
var LoginBarvue_type_template_id_08b529f0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/LoginBar.vue?vue&type=template&id=08b529f0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LoginBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LoginBarvue_type_script_lang_js_ = ({
  name: "LoginBar",
  props: {
    layout: {
      default: 'private'
    }
  },

  data() {
    return {
      showLogin: false
    };
  },

  methods: {
    handleClick(flag) {
      this.showLogin = true;
    }

  }
});
// CONCATENATED MODULE: ./components/LoginBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LoginBarvue_type_script_lang_js_ = (LoginBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/LoginBar.vue



function LoginBar_injectStyles (context) {
  
  
}

/* normalize component */

var LoginBar_component = Object(componentNormalizer["a" /* default */])(
  components_LoginBarvue_type_script_lang_js_,
  LoginBarvue_type_template_id_08b529f0_scoped_true_render,
  LoginBarvue_type_template_id_08b529f0_scoped_true_staticRenderFns,
  false,
  LoginBar_injectStyles,
  "08b529f0",
  "0c2afbe0"
  
)

/* harmony default export */ var LoginBar = (LoginBar_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Login.vue?vue&type=template&id=13c95a4d&scoped=true&
var Loginvue_type_template_id_13c95a4d_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card",staticStyle:{"width":"400px"}},[_vm._ssrNode("<section class=\"card-content\" data-v-13c95a4d>","</section>",[_c('b-field',{directives:[{name:"show",rawName:"v-show",value:(!_vm.loginTemp),expression:"!loginTemp"}],attrs:{"grouped":""}},[_c('b-field',{attrs:{"label":"First name","expanded":""}},[_c('b-input',{attrs:{"placeholder":"Larry","required":""},model:{value:(_vm.form.first_name),callback:function ($$v) {_vm.$set(_vm.form, "first_name", $$v)},expression:"form.first_name"}})],1),_vm._v(" "),_c('b-field',{attrs:{"label":"Last name","expanded":""}},[_c('b-input',{attrs:{"placeholder":"Page","required":""},model:{value:(_vm.form.last_name),callback:function ($$v) {_vm.$set(_vm.form, "last_name", $$v)},expression:"form.last_name"}})],1)],1),_vm._ssrNode(" "),_c('b-field',{directives:[{name:"show",rawName:"v-show",value:(!_vm.loginTemp),expression:"!loginTemp"}],attrs:{"label":"Username"}},[_c('b-input',{attrs:{"type":"text","placeholder":"Your username","required":"","icon":"account"},model:{value:(_vm.form.username),callback:function ($$v) {_vm.$set(_vm.form, "username", $$v)},expression:"form.username"}})],1),_vm._ssrNode(" "),_c('b-field',{attrs:{"label":"Email"}},[_c('b-input',{attrs:{"type":"email","icon":"at","placeholder":"Your email","required":""},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v)},expression:"form.email"}})],1),_vm._ssrNode(" "),_c('b-field',{directives:[{name:"show",rawName:"v-show",value:(_vm.loginTemp),expression:"loginTemp"}],attrs:{"label":"Password"}},[_c('b-input',{attrs:{"icon":"key","type":"password","password-reveal":"","placeholder":"Your password","required":""},model:{value:(_vm.form.password),callback:function ($$v) {_vm.$set(_vm.form, "password", $$v)},expression:"form.password"}})],1),_vm._ssrNode(" "),_c('b-field',{directives:[{name:"show",rawName:"v-show",value:(!_vm.loginTemp),expression:"!loginTemp"}],attrs:{"label":"Password"}},[_c('b-input',{attrs:{"icon":"key","type":"password","password-reveal":"","placeholder":"Your password","required":""},model:{value:(_vm.form.password1),callback:function ($$v) {_vm.$set(_vm.form, "password1", $$v)},expression:"form.password1"}})],1),_vm._ssrNode(" "),_c('b-field',{directives:[{name:"show",rawName:"v-show",value:(!_vm.loginTemp),expression:"!loginTemp"}],attrs:{"label":"Repeat password"}},[_c('b-input',{attrs:{"icon":"key","type":"password","password-reveal":"","placeholder":"Your password","required":""},model:{value:(_vm.form.password2),callback:function ($$v) {_vm.$set(_vm.form, "password2", $$v)},expression:"form.password2"}})],1),_vm._ssrNode(" "),_c('b-field',[_c('b-checkbox',[_vm._v("Remember me")])],1),_vm._ssrNode(" <div class=\"level\" data-v-13c95a4d><div class=\"level-left\" data-v-13c95a4d><button class=\"button is-text\" data-v-13c95a4d>"+_vm._ssrEscape(_vm._s(_vm.loginTemp ? 'Register' :
                    'Login')+"\n                ")+"</button></div> <div class=\"level-right\" data-v-13c95a4d><div class=\"buttons\" data-v-13c95a4d><button type=\"button\" class=\"button\" data-v-13c95a4d>Close</button> <button class=\"button is-primary\" data-v-13c95a4d>"+_vm._ssrEscape(_vm._s(_vm.loginTemp ? 'Login' : 'Register')+"\n                    ")+"</button></div></div></div>")],2)])}
var Loginvue_type_template_id_13c95a4d_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Login.vue?vue&type=template&id=13c95a4d&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Loginvue_type_script_lang_js_ = ({
  name: "Login",
  props: {
    login: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      isActive: false,
      form: {
        first_name: null,
        last_name: null,
        username: null,
        email: null,
        name: null,
        password: null,
        password1: null,
        password2: null
      },
      validForm: {},
      loginTemp: this.login
    };
  },

  methods: {
    async handleSubmit() {
      if (this.loginTemp) {
        let res = await this.$auth.login({
          email: this.form.email,
          password: this.form.password
        }).then(res => {
          this.$emit('success');
        }).catch(err => {
          console.log(err);
        });
      } else {
        await this.$axios.$post('/auth/rest-auth/registration/', this.form).then(res => {
          this.loginTemp = true;
        }).catch(err => {
          console.log(err);
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Login.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Loginvue_type_script_lang_js_ = (Loginvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Login.vue



function Login_injectStyles (context) {
  
  
}

/* normalize component */

var Login_component = Object(componentNormalizer["a" /* default */])(
  components_Loginvue_type_script_lang_js_,
  Loginvue_type_template_id_13c95a4d_scoped_true_render,
  Loginvue_type_template_id_13c95a4d_scoped_true_staticRenderFns,
  false,
  Login_injectStyles,
  "13c95a4d",
  "3d6a5bb3"
  
)

/* harmony default export */ var Login = (Login_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Comment.vue?vue&type=template&id=328b050f&scoped=true&
var Commentvue_type_template_id_328b050f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"media comment"},[_vm._ssrNode("<figure class=\"media-left\" data-v-328b050f>","</figure>",[_c('avatar',{class:(_vm.avatarSize + " is-bordered"),attrs:{"icon":"shield-account-outline","value":_vm.value.user.profile.media}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"media-content\" data-v-328b050f>","</div>",[_vm._ssrNode("<div class=\"content\" data-v-328b050f>","</div>",[_vm._ssrNode("<div class=\"level\" style=\"margin-bottom: 0;\" data-v-328b050f>","</div>",[_c('n-link',{staticClass:"is-bold",attrs:{"to":("/profile/" + (_vm.value.user.username))}},[_vm._v(_vm._s(_vm.convertName(_vm.value.user)))]),_vm._ssrNode(" <div class=\"level-right\" data-v-328b050f><div class=\"buttons\" data-v-328b050f><small class=\"button is-text is-small\" data-v-328b050f>"+_vm._ssrEscape(_vm._s(_vm.timeSince(_vm.value.created))+" ago")+"</small></div></div>")],2),_vm._ssrNode(" <p data-v-328b050f>"+_vm._ssrEscape(_vm._s(_vm.value.content))+"</p> "),_vm._ssrNode("<small class=\"button is-text is-small\" data-v-328b050f>","</small>",[_c('b-icon',{attrs:{"icon":"reply","size":"is-small"}}),_vm._ssrNode(" <span data-v-328b050f>Reply</span>")],2)],2),_vm._ssrNode(" "),_vm._l((_vm.response.results),function(comment){return _c('comment',{key:comment.id,attrs:{"ui":_vm.ui,"value":comment,"avatar-size":"is-24x24"},on:{"reply":_vm.reply}})})],2)],2)}
var Commentvue_type_template_id_328b050f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Comment.vue?vue&type=template&id=328b050f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Comment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Commentvue_type_script_lang_js_ = ({
  name: "Comment",
  props: {
    value: {
      default: null
    },
    ui: {
      default: null
    },
    avatarSize: {
      default: 'is-32x32'
    }
  },

  data() {
    return {
      response: {
        results: [],
        count: 0
      }
    };
  },

  methods: {
    reply(comment) {
      this.$emit('reply', comment);
    },

    async fetchChild() {
      if (this.value['has_child']) {
        this.response = await this.$api['comment'].list({
          ui: this.ui.id,
          parent: this.value.id
        });
      }
    }

  },

  created() {
    this.fetchChild();
  }

});
// CONCATENATED MODULE: ./components/Comment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Commentvue_type_script_lang_js_ = (Commentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Comment.vue



function Comment_injectStyles (context) {
  
  
}

/* normalize component */

var Comment_component = Object(componentNormalizer["a" /* default */])(
  components_Commentvue_type_script_lang_js_,
  Commentvue_type_template_id_328b050f_scoped_true_render,
  Commentvue_type_template_id_328b050f_scoped_true_staticRenderFns,
  false,
  Comment_injectStyles,
  "328b050f",
  "0b8da9ae"
  
)

/* harmony default export */ var Comment = (Comment_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/CommentForm.vue?vue&type=template&id=55037883&
var CommentFormvue_type_template_id_55037883_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ui)?_c('article',{staticClass:"media comment"},[_vm._ssrNode("<figure class=\"media-left\">","</figure>",[_c('user-card',{attrs:{"only-avatar":"","avatar-size":"is-32x32","value":_vm.currentUser ? _vm.currentUser : undefined}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"media-content\">","</div>",[_vm._ssrNode("<div class=\"field\"><p class=\"control\"><label><textarea placeholder=\"Add a comment...\" class=\"textarea\">"+_vm._ssrEscape(_vm._s(_vm.comment))+"</textarea></label></p></div> "),_vm._ssrNode("<div class=\"field has-addons\">","</div>",[_vm._t("default"),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"control\">","</div>",[_vm._ssrNode("<button"+(_vm._ssrAttr("disabled",_vm.comment === null || _vm.comment === ''))+" class=\"button\">","</button>",[_c('b-icon',{attrs:{"icon":"send-outline"}}),_vm._ssrNode(" <span>Send</span>")],2)])],2)],2)],2):_vm._e()}
var CommentFormvue_type_template_id_55037883_staticRenderFns = []


// CONCATENATED MODULE: ./components/CommentForm.vue?vue&type=template&id=55037883&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CommentForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CommentFormvue_type_script_lang_js_ = ({
  name: "CommentForm",
  props: {
    ui: {
      default: null
    },
    parent: {
      default: null
    }
  },

  data() {
    return {
      comment: null
    };
  },

  methods: {
    submit() {
      this.$api['comment'].post({
        ui: this.ui.id,
        content: this.comment,
        parent: this.parent ? this.parent.id : undefined
      }).then(res => {
        this.$emit('posted');
        this.comment = null;
      });
    }

  }
});
// CONCATENATED MODULE: ./components/CommentForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentFormvue_type_script_lang_js_ = (CommentFormvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/CommentForm.vue



function CommentForm_injectStyles (context) {
  
  var style0 = __webpack_require__(40)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var CommentForm_component = Object(componentNormalizer["a" /* default */])(
  components_CommentFormvue_type_script_lang_js_,
  CommentFormvue_type_template_id_55037883_render,
  CommentFormvue_type_template_id_55037883_staticRenderFns,
  false,
  CommentForm_injectStyles,
  null,
  "47b22ce6"
  
)

/* harmony default export */ var CommentForm = (CommentForm_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/FieldData.vue?vue&type=template&id=c24d1ef0&
var FieldDatavue_type_template_id_c24d1ef0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.multiple)?_c('b-taginput',{staticClass:"editable",attrs:{"loading":_vm.fetching,"size":_vm.size,"data":_vm.querySet,"autocomplete":"","allow-new":_vm.allowNew,"open-on-focus":_vm.openOnFocus,"field":_vm.field,"icon":_vm.icon,"placeholder":_vm.placeholder,"before-adding":_vm.beforeAdding},on:{"add":_vm.onAdd,"typing":_vm.getQuerySet},scopedSlots:_vm._u([{key:"default",fn:function(props){return [_vm._v("\n        "+_vm._s(props.option[_vm.field])+"\n    ")]}}],null,false,2608211262),model:{value:(_vm.data),callback:function ($$v) {_vm.data=$$v},expression:"data"}},[_vm._v(" "),_c('template',{slot:"empty"},[_vm._v("Enter to add")])],2):_c('div',{staticClass:"taginput"},[_c('div',{staticClass:"taginput-container is-focusable"},[_c('b-autocomplete',{attrs:{"loading":_vm.fetching,"size":_vm.size,"placeholder":_vm.placeholder,"keep-first":_vm.keepFirst,"open-on-focus":_vm.openOnFocus,"data":_vm.querySet,"field":_vm.field,"icon":_vm.icon},on:{"focus":function($event){return _vm.$emit('focus')},"typing":_vm.getQuerySet,"select":_vm.onSelect},nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.onAdd(_vm.name)}},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}},[(_vm.allowNew)?_c('template',{slot:"footer"},[_c('a',{on:{"click":function($event){return _vm.onAdd(_vm.name)}}},[_c('span',[_vm._v(" Add new... ")])])]):_vm._e(),_vm._v(" "),_c('template',{slot:"empty"},[_vm._v("No results for "+_vm._s(_vm.name))])],2)],1)])}
var FieldDatavue_type_template_id_c24d1ef0_staticRenderFns = []


// CONCATENATED MODULE: ./components/FieldData.vue?vue&type=template&id=c24d1ef0&

// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__(24);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FieldData.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var FieldDatavue_type_script_lang_js_ = ({
  name: 'Data',
  props: {
    multiple: {
      default: false,
      type: Boolean
    },
    icon: {
      default: 'tag',
      type: String
    },
    field: {
      default: 'title',
      type: String
    },
    createField: {
      default: 'title',
      type: String
    },
    value: {},
    module: {},
    allowNew: {
      type: Boolean,
      default: true
    },
    size: {},
    placeholder: {
      type: String,
      default: 'Anything'
    }
  },

  data() {
    let data = this.value;

    if (!Boolean(data)) {
      if (this.multiple) {
        data = [];
      } else {
        data = null;
      }
    }

    let name = null;

    if (!this.multiple && this.value) {
      name = this.value[this.field];
    }

    return {
      name,
      querySet: [],
      isSelectOnly: false,
      data: data,
      openOnFocus: false,
      keepFirst: false,
      fetching: false
    };
  },

  methods: {
    onSelect(option) {
      this.data = option;
      this.$emit('add', option);
      this.$emit('input', option);
    },

    async onAdd(e) {
      if (typeof e === 'string') {
        if (this.multiple) {
          this.data[this.data.indexOf(e)] = await this.$api[this.module].post({
            [this.createField]: e
          });
        } else {
          this.data = await this.$api[this.module].post({
            [this.createField]: e
          });
          this.name = this.data[this.field];
        }
      }
    },

    beforeAdding(tag) {
      let check = this.data.map(x => x.id).indexOf(tag.id);
      return check === -1;
    },

    getQuerySet: debounce_default()(function (text) {
      this.$api[this.module].list({
        search: text
      }).then(res => {
        this.querySet = res['results'];
      });
    }, 500)
  },
  watch: {
    value() {
      this.data = this.value;

      if (!this.multiple && this.value) {
        this.name = this.value[this.field];
      } else {
        this.name = null;
      }
    },

    data() {
      this.$emit('input', this.data);
    }

  }
});
// CONCATENATED MODULE: ./components/FieldData.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FieldDatavue_type_script_lang_js_ = (FieldDatavue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/FieldData.vue





/* normalize component */

var FieldData_component = Object(componentNormalizer["a" /* default */])(
  components_FieldDatavue_type_script_lang_js_,
  FieldDatavue_type_template_id_c24d1ef0_render,
  FieldDatavue_type_template_id_c24d1ef0_staticRenderFns,
  false,
  null,
  null,
  "3c6a558e"
  
)

/* harmony default export */ var FieldData = (FieldData_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/UI.vue?vue&type=template&id=30e5feb0&
var UIvue_type_template_id_30e5feb0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.value)?_c('div',{staticClass:"ui card"},[(_vm.value.medias && _vm.value.medias.length)?_vm._ssrNode("<div class=\"card-image\">","</div>",[_c('n-link',{staticClass:"image is-1by1",attrs:{"to":("/post/" + (_vm.value.pid))}},[_c('img',{attrs:{"src":_vm.value.medias[0].sizes['thumb_247_247'],"alt":_vm.value.title}})])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"card-content\">","</div>",[_vm._ssrNode("<h3 class=\"is-bold\">"+_vm._ssrEscape(_vm._s(_vm.value.title))+"</h3> "),_c('user-card',{attrs:{"avatar-size":"thumb_24_24","value":_vm.value.user}})],2)],2):_vm._e()}
var UIvue_type_template_id_30e5feb0_staticRenderFns = []


// CONCATENATED MODULE: ./components/UI.vue?vue&type=template&id=30e5feb0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/UI.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var UIvue_type_script_lang_js_ = ({
  name: "UI",
  props: {
    value: {
      default: null
    }
  }
});
// CONCATENATED MODULE: ./components/UI.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_UIvue_type_script_lang_js_ = (UIvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/UI.vue



function UI_injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var UI_component = Object(componentNormalizer["a" /* default */])(
  components_UIvue_type_script_lang_js_,
  UIvue_type_template_id_30e5feb0_render,
  UIvue_type_template_id_30e5feb0_staticRenderFns,
  false,
  UI_injectStyles,
  null,
  "987463cc"
  
)

/* harmony default export */ var UI = (UI_component.exports);
// CONCATENATED MODULE: ./components/index.js










external_vue_default.a.component('Avatar', Avatar);
external_vue_default.a.component('Upload', Upload);
external_vue_default.a.component('login', Login);
external_vue_default.a.component('user-card', User);
external_vue_default.a.component('login-bar', LoginBar);
external_vue_default.a.component('comment', Comment);
external_vue_default.a.component('comment-form', CommentForm);
external_vue_default.a.component('field-data', FieldData);
external_vue_default.a.component('ui', UI);
// CONCATENATED MODULE: ./plugins/auth.js
const cookieparser =  true ? __webpack_require__(44) : undefined;
/* harmony default export */ var auth = (async function (context, inject) {
  const $auth = {};

  const logout = async () => {
    await setToken(null);
    await setUser(null);
  };

  const login = async credential => {
    let res = await context.$axios.$post('/auth/rest-auth/login/', credential).catch(e => {
      console.log(e);
    });

    if (res) {
      await setToken(res['token']);
      let user = await getUser();
      await setUser(user);
    }
  };

  const getUser = async () => {
    try {
      return await context.$axios.$get('/auth/users/me/');
    } catch (e) {
      if (e.response && e.response.status === 401) {
        await logout();
      }

      return null;
    }
  };

  const getToken = async () => {
    let token = null;

    if ( true && context.req.headers.cookie) {
      const parsed = cookieparser.parse(context.req.headers.cookie);
      token = parsed['auth.token'];
    } else {
      token = context.store.$ck.get('auth.token');
    }

    return token;
  };

  const setToken = async token => {
    if (token) {
      context.$axios.setHeader('Authorization', 'JWT ' + token);
      context.store.$ck.set('auth.token', token, {
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
      });
    } else {
      context.$axios.setHeader('Authorization', undefined);
      context.store.$ck.remove('auth.token');
    }

    await context.store.commit('auth/SET_TOKEN', token);
  };

  const setUser = async user => {
    await context.store.commit('auth/SET_USER', user);
  };

  const init = async () => {
    let token = await getToken();
    await setToken(token);

    if (token) {
      let user = await getUser();
      await setUser(user);
    }
  };

  await init();
  $auth.login = login;
  $auth.logout = logout;
  context.$auth = $auth;
  inject('auth', $auth);
});
// CONCATENATED MODULE: ./plugins/axios.js
/* harmony default export */ var plugins_axios = (function (context) {
  context.$axios.onError(async e => {
    console.log(e);

    if (e.response.status === 401) {
      await context.$auth.logout();
    }
  });
  context.$axios.onRequest(config => {});
});
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(15);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./plugins/mixins.js


external_vue_default.a.mixin({
  methods: {
    convertName(user) {
      if (user === null) {
        return 'Anonymouse';
      }

      if (user.profile && user.profile.nick) {
        return user.profile.nick;
      }

      if (user.first_name || user.last_name) {
        return user.first_name + ' ' + user.last_name;
      }

      return user.username;
    },

    cleanData(data, fields) {
      let out = {};

      if (typeof fields === 'undefined') {
        fields = Object.keys(data);
      }

      fields.forEach(i => {
        if (typeof data[i] !== 'undefined') {
          if (data[i] && ['created', 'updated', 'start_date', 'due_date'].includes(i)) {
            out[i] = this.momentTime(data[i]).format('YYYY-MM-DD HH:mm');
          } else if (data[i] && i === "options") {
            out[i] = {};

            for (let j in data[i]) {
              out[i][j] = data[i][j];
            }
          } else if (Array.isArray(data[i])) {
            out[i] = data[i].map(x => {
              return x.id ? x.id : x;
            });
          } else if (typeof data[i] === 'object' && data[i] && data[i].id) {
            out[i] = data[i].id;
          } else {
            out[i] = data[i];
          }
        }
      });
      return out;
    },

    toTop() {
      const myDiv = document.getElementById('__layout');
      myDiv.scrollTop = 0;
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },

    convertTime(seconds) {
      let interval = Math.floor(seconds / 31536000);

      if (interval > 1) {
        return interval + " years";
      }

      interval = Math.floor(seconds / 2592000);

      if (interval > 1) {
        return interval + " month";
      }

      interval = Math.floor(seconds / 86400);

      if (interval > 1) {
        return interval + " day";
      }

      interval = Math.floor(seconds / 3600);

      if (interval > 1) {
        return interval + " hours";
      }

      interval = Math.floor(seconds / 60);

      if (interval > 1) {
        return interval + " minutes";
      }

      return Math.floor(seconds) + " seconds";
    },

    timeSince(date) {
      let seconds = external_moment_default()().diff(this.momentTime(date), 'seconds', false);
      return this.convertTime(seconds);
    },

    momentTime(date) {
      return external_moment_default()(date, 'YYYY-MM-DDTHH:mm').utc();
    }

  },
  computed: {
    currentUser: {
      get() {
        return this.$store.getters['auth/getUser'];
      },

      set() {}

    }
  }
});
// CONCATENATED MODULE: ./plugins/repository/index.js
const RestfulRepo = (app, item) => {
  let out = {
    list: async query => {
      let q = {};
      Object.keys(query).forEach(field => {
        if (Array.isArray(query[field])) {
          q[field] = query[field].toString();
        } else {
          q[field] = query[field];
        }
      });
      return await app.$axios.$get(`/${item.space}/${item.endpoint}/`, {
        params: q
      }).then(res => {
        if (res.results === null) {
          res.results = [];
        }

        return res;
      });
    },
    post: async body => {
      return await app.$axios.$post(`/${item.space}/${item.endpoint}/`, body);
    },
    get: async (id, query) => {
      return await app.$axios.$get(`/${item.space}/${item.endpoint}/${id}/`, query);
    },
    update: async (id, body) => {
      return await app.$axios.$put(`/${item.space}/${item.endpoint}/${id}/`, body);
    },
    delete: async id => {
      return await app.$axios.$delete(`/${item.space}/${item.endpoint}/${id}/`);
    }
  };

  if (item.methods) {
    item.methods.forEach(callback => {
      if (callback.hasId) {
        out[callback.name] = async (id, body) => {
          return await app.$axios[callback.method](`/${item.space}/${item.endpoint}/${id}/${callback.endpoint}`, body);
        };
      } else {
        out[callback.name] = async body => {
          return await app.$axios[callback.method](`/${item.endpoint}/${callback.endpoint}`, body);
        };
      }
    });
  }

  return out;
};

const apis_module = [{
  space: 'activity',
  endpoint: 'config',
  name: 'config',
  methods: []
}, {
  space: 'general',
  endpoint: 'hash-tags',
  name: 'hash_tag',
  methods: []
}, {
  space: 'auth',
  endpoint: 'users',
  name: 'user',
  methods: []
}, {
  space: 'media',
  endpoint: 'medias',
  name: 'media',
  methods: []
}, // New
{
  space: `pub-${"5"}`,
  endpoint: 'posts',
  name: 'post',
  methods: [{
    hasId: true,
    endpoint: 'comments',
    name: 'comment',
    method: '$get'
  }]
}, {
  space: `pub-${"5"}`,
  endpoint: 'taxonomies',
  name: 'taxonomy',
  methods: []
}];
/* harmony default export */ var repository = (function (app, inject) {
  const API = {};
  apis_module.forEach(item => {
    API[item.name] = RestfulRepo(app, item);
  });
  app.$api = API;
  inject('api', API);
});
// CONCATENATED MODULE: ./.nuxt/index.js











/* Plugins */

 // Source: ./workbox.js (mode: 'client')

 // Source: ./nuxt-icons.js (mode: 'all')

 // Source: ./cookie-universal-nuxt.js (mode: 'all')

 // Source: ./axios.js (mode: 'all')

 // Source: ./buefy.js (mode: 'all')

 // Source: ./google-analytics.js (mode: 'client')

 // Source: ../components (mode: 'all')

 // Source: ../plugins/auth (mode: 'all')

 // Source: ../plugins/axios (mode: 'all')

 // Source: ../plugins/mixins (mode: 'all')

 // Source: ../plugins/repository (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  const registerModule = store.registerModule;

  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({
    preserveState: false
  }, options)); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.


  const app = {
    head: {
      "titleTemplate": "%s - UIHunt.com",
      "title": "uihunt",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": "My tiptop Nuxt.js project"
      }, {
        "hid": "mobile-web-app-capable",
        "name": "mobile-web-app-capable",
        "content": "yes"
      }, {
        "hid": "apple-mobile-web-app-title",
        "name": "apple-mobile-web-app-title",
        "content": "uihunt"
      }, {
        "hid": "author",
        "name": "author",
        "content": "lamha"
      }, {
        "hid": "theme-color",
        "name": "theme-color",
        "content": "#fff"
      }, {
        "hid": "og:type",
        "name": "og:type",
        "property": "og:type",
        "content": "website"
      }, {
        "hid": "og:title",
        "name": "og:title",
        "property": "og:title",
        "content": "uihunt"
      }, {
        "hid": "og:site_name",
        "name": "og:site_name",
        "property": "og:site_name",
        "content": "uihunt"
      }, {
        "hid": "og:description",
        "name": "og:description",
        "property": "og:description",
        "content": "My tiptop Nuxt.js project"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }, {
        "rel": "stylesheet",
        "type": "text\u002Fcss",
        "href": "\u002F\u002Fcdn.materialdesignicons.com\u002F5.0.45\u002Fcss\u002Fmaterialdesignicons.min.css"
      }, {
        "rel": "manifest",
        "href": "\u002F_nuxt\u002Fmanifest.ad7d7a9e.json"
      }, {
        "rel": "shortcut icon",
        "href": "\u002F_nuxt\u002Ficons\u002Ficon_64.5f6a36.png"
      }, {
        "rel": "apple-touch-icon",
        "href": "\u002F_nuxt\u002Ficons\u002Ficon_512.5f6a36.png",
        "sizes": "512x512"
      }],
      "style": [],
      "script": [],
      "htmlAttrs": {
        "lang": "en"
      }
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (false) {}

  if (typeof nuxt_icons === 'function') {
    await nuxt_icons(app.context, inject);
  }

  if (typeof cookie_universal_nuxt === 'function') {
    await cookie_universal_nuxt(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/buefy.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/buefy.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {}

  if (typeof /* Cannot get final name for export "default" in "./components/index.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./components/index.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof auth === 'function') {
    await auth(app.context, inject);
  }

  if (typeof plugins_axios === 'function') {
    await plugins_axios(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/mixins.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/mixins.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof repository === 'function') {
    await repository(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (opts.path === ssrContext.url) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: opts.path
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if (false) {} // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router,
    store
  } = await createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map