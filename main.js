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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\r\n  const content = document.getElementById(\"content\");\r\n\r\n  const headline = document.createElement(\"h1\");\r\n  headline.textContent = \"Contact Us\";\r\n\r\n  const contactInfo = document.createElement(\"p\");\r\n  contactInfo.textContent = \"Phone: 123-456-7890\";\r\n\r\n  const email = document.createElement(\"p\");\r\n  email.textContent = \"queries@gmail.com\";\r\n\r\n  const address = document.createElement(\"p\");\r\n  address.textContent = \"Address: 123 Main St, Food City\";\r\n\r\n  content.appendChild(headline);\r\n  content.appendChild(contactInfo);\r\n  content.appendChild(email);\r\n  content.appendChild(address);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\r\n\r\nfunction loadHome() {\r\n  const content = document.getElementById(\"content\");\r\n\r\n  const headline = document.createElement(\"h1\");\r\n  headline.textContent = \"Welcome to our Restaurant!\";\r\n\r\n  const description = document.createElement(\"p\");\r\n  description.textContent =\r\n    \"Enjoy the finest cuisine made with fresh ingredients.\";\r\n\r\n  const bannerContainer = document.createElement(\"div\");\r\n  bannerContainer.classList.add(\"banner-section-bg-container\");\r\n\r\n  const bannerContent = document.createElement(\"div\");\r\n  bannerContent.classList.add(\"content\");\r\n\r\n  const heading = document.createElement(\"h1\");\r\n  heading.classList.add(\"banner-heading\");\r\n  heading.textContent = \"Get Delicious Food Anytime\";\r\n\r\n  const caption = document.createElement(\"p\");\r\n  caption.classList.add(\"banner-caption\");\r\n  caption.textContent = \"Eat Smart & Healthy\";\r\n\r\n  const menuButton = document.createElement(\"button\");\r\n  menuButton.textContent = \"View Menu\";\r\n  menuButton.classList.add(\"custom-button\");\r\n  menuButton.addEventListener(\"click\", () => {\r\n    content.innerHTML = \"\";\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_0__.loadMenu)();\r\n  });\r\n\r\n  bannerContent.appendChild(heading);\r\n  bannerContent.appendChild(caption);\r\n  bannerContent.appendChild(menuButton);\r\n  bannerContainer.appendChild(bannerContent);\r\n  content.appendChild(bannerContainer);\r\n  content.appendChild(headline);\r\n  content.appendChild(description);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\nfunction clearContent() {\r\n  const content = document.getElementById(\"content\");\r\n  content.innerHTML = \"\";\r\n}\r\n\r\nfunction loadPage() {\r\n  document.getElementById(\"home-tab\").addEventListener(\"click\", () => {\r\n    clearContent();\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\r\n  });\r\n\r\n  document.getElementById(\"menu-tab\").addEventListener(\"click\", () => {\r\n    clearContent();\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.loadMenu)();\r\n  });\r\n\r\n  document.getElementById(\"contact-tab\").addEventListener(\"click\", () => {\r\n    clearContent();\r\n    (0,_contact__WEBPACK_IMPORTED_MODULE_3__.loadContact)();\r\n  });\r\n\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\r\n}\r\n\r\nloadPage();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/pizza.jpg */ \"./src/assets/pizza.jpg\");\n/* harmony import */ var _assets_pasta_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/pasta.jpg */ \"./src/assets/pasta.jpg\");\n/* harmony import */ var _assets_salad_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/salad.jpg */ \"./src/assets/salad.jpg\");\n/* harmony import */ var _assets_dessert_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/dessert.jpg */ \"./src/assets/dessert.jpg\");\n\r\n\r\n\r\n\r\n\r\nfunction loadMenu() {\r\n  const content = document.getElementById(\"content\");\r\n  const headline = document.createElement(\"h1\");\r\n  headline.textContent = \"Our Menu\";\r\n\r\n  const items = [\r\n    {\r\n      name: \"Salad\",\r\n      description: \"Fresh mixed greens with a tangy vinaigrette\",\r\n      imageUrl: _assets_salad_jpg__WEBPACK_IMPORTED_MODULE_2__,\r\n    },\r\n    {\r\n      name: \"Pizza\",\r\n      description: \"Delicious cheese pizza with fresh toppings\",\r\n      imageUrl: _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__,\r\n    },\r\n    {\r\n      name: \"Pasta\",\r\n      description: \"Creamy pasta with a rich tomato sauce\",\r\n      imageUrl: _assets_pasta_jpg__WEBPACK_IMPORTED_MODULE_1__,\r\n    },\r\n    {\r\n      name: \"Dessert\",\r\n      description: \"Indulgent chocolate cake with vanilla ice cream\",\r\n      imageUrl: _assets_dessert_jpg__WEBPACK_IMPORTED_MODULE_3__,\r\n    },\r\n  ];\r\n\r\n  const cardContainer = document.createElement(\"div\");\r\n  cardContainer.classList.add(\"card-container\");\r\n\r\n  items.forEach((item) => {\r\n    const card = document.createElement(\"div\");\r\n    card.classList.add(\"card\");\r\n\r\n    const img = document.createElement(\"img\");\r\n    img.src = item.imageUrl;\r\n    img.alt = item.name;\r\n    img.classList.add(\"image\");\r\n    card.appendChild(img);\r\n\r\n    const cardBody = document.createElement(\"div\");\r\n    cardBody.classList.add(\"card-body\");\r\n\r\n    const itemName = document.createElement(\"h3\");\r\n    itemName.textContent = item.name;\r\n    cardBody.appendChild(itemName);\r\n\r\n    const itemDescription = document.createElement(\"p\");\r\n    itemDescription.textContent = item.description;\r\n    cardBody.appendChild(itemDescription);\r\n\r\n    card.appendChild(cardBody);\r\n    cardContainer.appendChild(card);\r\n  });\r\n\r\n  content.appendChild(headline);\r\n  content.appendChild(cardContainer);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/assets/dessert.jpg":
/*!********************************!*\
  !*** ./src/assets/dessert.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/002322a96aa3751fe1ea.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/dessert.jpg?");

/***/ }),

/***/ "./src/assets/pasta.jpg":
/*!******************************!*\
  !*** ./src/assets/pasta.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/17a28d323afc5f346c10.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/pasta.jpg?");

/***/ }),

/***/ "./src/assets/pizza.jpg":
/*!******************************!*\
  !*** ./src/assets/pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/822581ad57951d8ee1fb.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/pizza.jpg?");

/***/ }),

/***/ "./src/assets/salad.jpg":
/*!******************************!*\
  !*** ./src/assets/salad.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/c7c8a7163ce9ec02d16e.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/salad.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;