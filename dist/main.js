/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_func_create_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/func-create-menu.js */ \"./src/modules/func-create-menu.js\");\n/* harmony import */ var _modules_func_change_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/func-change-header.js */ \"./src/modules/func-change-header.js\");\n/* harmony import */ var _modules_func_change_color_side_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/func-change-color-side.js */ \"./src/modules/func-change-color-side.js\");\n/* harmony import */ var _modules_func_animation_style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/func-animation-style.js */ \"./src/modules/func-animation-style.js\");\n\n\n\n\n\n(0,_modules_func_create_menu_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_func_change_header_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_func_change_color_side_js__WEBPACK_IMPORTED_MODULE_2__.default)()\n;(0,_modules_func_animation_style_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n\n//# sourceURL=webpack://website-webpack/./src/main.js?");

/***/ }),

/***/ "./src/modules/func-animation-style.js":
/*!*********************************************!*\
  !*** ./src/modules/func-animation-style.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animationStyle)\n/* harmony export */ });\nfunction animationStyle() {\n    AOS.init({\n        disable: false,\n        startEvent: 'DOMContentLoaded',\n        initClassName: 'aos-init',\n        animatedClassName: 'aos-animate',\n        useClassNames: false,\n        disableMutationObserver: false,\n        debounceDelay: 50,\n        throttleDelay: 99,\n        offset: 120,\n        delay: 0,\n        duration: 500,\n        easing: 'ease',\n        once: false,\n        mirror: false,\n        anchorPlacement: 'top-bottom',\n    });\n};\n\n//# sourceURL=webpack://website-webpack/./src/modules/func-animation-style.js?");

/***/ }),

/***/ "./src/modules/func-change-color-side.js":
/*!***********************************************!*\
  !*** ./src/modules/func-change-color-side.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ changeColorSide)\n/* harmony export */ });\nfunction changeColorSide() {\r\n    const imgMenu = document.querySelector('#img-menu');\r\n    const side = document.querySelector('#app');\r\n    const gritCity = document.querySelector('#city');\r\n\r\n    window.addEventListener('scroll', function () {        \r\n\r\n        if (window.pageYOffset > 1900) {\r\n            document.querySelector('section').id = 'mast-black';\r\n\r\n            document.querySelector('.text-city').style.color = '#fff';\r\n            side.id = 'app-black';\r\n            gritCity.id = 'city-black'\r\n            if (imgMenu.alt === 'close') {\r\n                document.querySelector('#btn-menu').style.background = '#8B00ff';\r\n            }\r\n        } else if (window.pageYOffset < 1900 && window.pageYOffset > 500) {\r\n\r\n            document.querySelector('.text-city').style.color = '#000';\r\n            document.querySelector('section').id = 'mast-down';\r\n            side.id = 'app';\r\n            gritCity.id = 'city';\r\n        }\r\n    });\r\n};\n\n//# sourceURL=webpack://website-webpack/./src/modules/func-change-color-side.js?");

/***/ }),

/***/ "./src/modules/func-change-header.js":
/*!*******************************************!*\
  !*** ./src/modules/func-change-header.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ changeHeader)\n/* harmony export */ });\nfunction changeHeader() {\n    const imgMenu = document.querySelector('#img-menu');\n    \n    window.addEventListener('scroll', function () {\n        if (window.pageYOffset > 500) {\n            document.querySelector('section').id = 'mast-down';\n            if (imgMenu.alt === 'close') {\n                document.querySelector('#btn-menu').style.background = '#E8B370';\n            };\n        } else if (window.pageYOffset < 500) {\n            document.querySelector('section').id = 'mast';\n            document.querySelector('#btn-menu').style.background = 'rgb(30, 30, 30)';\n        };\n    });\n};\n\n//# sourceURL=webpack://website-webpack/./src/modules/func-change-header.js?");

/***/ }),

/***/ "./src/modules/func-create-menu.js":
/*!*****************************************!*\
  !*** ./src/modules/func-create-menu.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var _func_search_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./func-search-scroll.js */ \"./src/modules/func-search-scroll.js\");\n\n\nfunction createMenu() {\n    const imgMenu = document.querySelector('#img-menu');\n    const shape = document.querySelector('.shape');\n    const ul = document.createElement('ul');\n\n    document.querySelector('#btn-menu').onclick = () => {\n\n        function showMenu() {\n\n            const array = ['Home', 'Mountains', 'Oceans', 'Night cities', 'Contacts'];\n            array.forEach(element => {\n                const li = document.createElement('li');\n                const a = document.createElement('a');\n                a.className = 'list';\n                a.innerHTML = element;\n\n                if (a.textContent === 'Home') {\n                    (0,_func_search_scroll_js__WEBPACK_IMPORTED_MODULE_0__.searchScroll)(a, document.querySelector('.container'), ul, imgMenu, shape);\n                } else if (a.textContent === 'Mountains') {\n                    (0,_func_search_scroll_js__WEBPACK_IMPORTED_MODULE_0__.searchScroll)(a, document.querySelector('#heading-mountains'), ul, imgMenu, shape);\n                } else if (a.textContent === 'Oceans') {\n                    (0,_func_search_scroll_js__WEBPACK_IMPORTED_MODULE_0__.searchScroll)(a, document.querySelector('#heading-oceans'), ul, imgMenu, shape);\n                } else if (a.textContent === 'Night cities') {\n                    (0,_func_search_scroll_js__WEBPACK_IMPORTED_MODULE_0__.searchScroll)(a, document.querySelector('.city'), ul, imgMenu, shape);\n                } else if (a.textContent === 'Contacts') {\n                    (0,_func_search_scroll_js__WEBPACK_IMPORTED_MODULE_0__.searchScroll)(a, document.querySelector('footer'), ul, imgMenu, shape);\n                }\n                li.append(a);\n                ul.append(li);\n                ul.style.display = 'block';\n            });\n            shape.append(ul);\n        };\n\n        if (imgMenu.alt === 'close') {\n            (0,_func_search_scroll_js__WEBPACK_IMPORTED_MODULE_0__.open)(imgMenu, shape);\n            setTimeout(() => { showMenu() }, 500);\n\n        } else if (imgMenu.alt === 'open') {\n            (0,_func_search_scroll_js__WEBPACK_IMPORTED_MODULE_0__.close)(ul, imgMenu, shape);\n            setTimeout(() => {\n                shape.className = 'shape';\n                if (document.querySelector('section').id === 'mast') {\n                    document.querySelector('.menu-button button').style.background = 'rgb(30, 30, 30)';\n                } else if (document.querySelector('section').id === 'mast-down') {\n                    document.querySelector('.menu-button button').style.background = '#E8B370';\n                } else if (document.querySelector('section').id === 'mast-black') {\n                    document.querySelector('.menu-button button').style.background = '#8B00ff';\n                }\n            }, 500);\n        };\n    };\n};\n\n//# sourceURL=webpack://website-webpack/./src/modules/func-create-menu.js?");

/***/ }),

/***/ "./src/modules/func-search-scroll.js":
/*!*******************************************!*\
  !*** ./src/modules/func-search-scroll.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchScroll\": () => (/* binding */ searchScroll),\n/* harmony export */   \"open\": () => (/* binding */ open),\n/* harmony export */   \"close\": () => (/* binding */ close)\n/* harmony export */ });\nfunction searchScroll(item, final, ul, imgMenu, shape) {\r\n    item.onclick = () => {\r\n        final.scrollIntoView({ block: \"center\", behavior: \"smooth\" });\r\n        close(ul, imgMenu, shape);\r\n    };\r\n};\r\nfunction open(imgMenu, shape) {\r\n    document.querySelector('.menu-button button').style.background = '#000';\r\n    imgMenu.alt = 'open';\r\n    imgMenu.id = 'img-menu-open';\r\n    imgMenu.src = '../src/img/cross_wt.png';\r\n    shape.className = 'shape-open';    \r\n};\r\nfunction close(ul, imgMenu, shape) {\r\n    ul.innerHTML = '';\r\n    imgMenu.alt = 'close';\r\n    imgMenu.id = 'img-menu';\r\n    imgMenu.src = '../src/img/par_wt_b.png';\r\n    shape.className = 'shape-closed';\r\n};\r\n\r\n\n\n//# sourceURL=webpack://website-webpack/./src/modules/func-search-scroll.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;