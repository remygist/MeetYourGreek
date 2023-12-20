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

/***/ "./src/Inspirations.js":
/*!*****************************!*\
  !*** ./src/Inspirations.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Inspirations)\n/* harmony export */ });\nclass Inspirations {\r\n    constructor(id, title, description, imageThen, imageToday) {\r\n        this.id = id;\r\n        this.title = title;\r\n        this.description = description;\r\n        this.imageThen = imageThen;\r\n        this.imageToday = imageToday;\r\n    }\r\n\r\n    get htmlContainerData() {\r\n        return `     \r\n        <div class=\"inspirationContainer\">\r\n        <h1>${this.title}</h1>\r\n                <p>\r\n                    ${this.description}\r\n                </p></div><div class=\"imgContainer\">\r\n                <h1>Then<h1>\r\n                <img src=\"${this.imageThen}\" />\r\n                <h1>Today<h1>\r\n                <img src=\"${this.imageToday}\" />\r\n            </div>\r\n        `;\r\n    }\r\n\r\n    get htmlSidebarData() {\r\n        return `\r\n        <div class=\"inspirationItem\" id=\"${this.id}\"><h1>${this.title}</h1></div>\r\n        `;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://web2-course-project-front-end-remygist/./src/Inspirations.js?");

/***/ }),

/***/ "./src/inspirationsScript.js":
/*!***********************************!*\
  !*** ./src/inspirationsScript.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Inspirations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Inspirations.js */ \"./src/Inspirations.js\");\n\r\n\r\n\r\nconst inspirationsArray = [];\r\nconst pageContainer = document.querySelector(\".inspirationContainer\");\r\nconst sidebarContainer = document.querySelector(\".sidebar\");\r\n\r\nasync function getData() {\r\n    try {\r\n        const response = await fetch(\r\n            \"https://web-2-course-project-jayu.onrender.com/getInspirations\"\r\n        );\r\n        const data = await response.json();\r\n\r\n        console.log(data);\r\n        //storing data into classes\r\n        data.forEach((inspiration) => {\r\n            const inspirationData = new _Inspirations_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n                inspiration._id,\r\n                inspiration.title,\r\n                inspiration.description,\r\n                inspiration.imgThen,\r\n                inspiration.imgToday\r\n            );\r\n            //pushing data to global array\r\n            inspirationsArray.push(inspirationData);\r\n        });\r\n        showInspirations();\r\n    } catch (error) {\r\n        console.log(error);\r\n    }\r\n}\r\n\r\nfunction showInspirations() {\r\n    //clear previous content\r\n    sidebarContainer.innerHTML = \"\";\r\n    pageContainer.innerHTML = \"\";\r\n    inspirationsArray.forEach(function (inspiration) {\r\n        sidebarContainer.insertAdjacentHTML(\r\n            \"beforeend\",\r\n            inspiration.htmlSidebarData\r\n        );\r\n    });\r\n    pageContainer.insertAdjacentHTML(\r\n        \"beforeend\",\r\n        inspirationsArray[0].htmlContainerData\r\n    );\r\n    const selectedInspiration = document.querySelectorAll(\".inspirationItem\");\r\n    showInspirationsData(selectedInspiration);\r\n}\r\n\r\nfunction showInspirationsData(selectedInspiration) {\r\n    console.log(inspirationsArray[0].htmlContainerData);\r\n\r\n    selectedInspiration.forEach((data) => {\r\n        data.addEventListener(\"click\", () => {\r\n            console.log(\"Clicked inspiration:\", data);\r\n            const clickedInspirationId = data.id;\r\n            const clickedInspiration = inspirationsArray.find(\r\n                (inspiration) => inspiration.id == clickedInspirationId\r\n            );\r\n            console.log(clickedInspiration);\r\n            pageContainer.innerHTML = \"\";\r\n            pageContainer.insertAdjacentHTML(\r\n                \"beforeend\",\r\n                clickedInspiration.htmlContainerData\r\n            );\r\n        });\r\n    });\r\n}\r\n\r\ngetData();\r\nconsole.log(inspirationsArray);\r\n\n\n//# sourceURL=webpack://web2-course-project-front-end-remygist/./src/inspirationsScript.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/inspirationsScript.js");
/******/ 	
/******/ })()
;