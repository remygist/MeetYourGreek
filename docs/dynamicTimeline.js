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

/***/ "./src/dynamicTimeline.js":
/*!********************************!*\
  !*** ./src/dynamicTimeline.js ***!
  \********************************/
/***/ (() => {

eval("function dynamicLine() {\r\n    const dots = document.querySelectorAll(\".dots\");\r\n    dots.forEach((item) => {\r\n        item.addEventListener(\"click\", (event) => {\r\n            const eventId = event.currentTarget.getAttribute(\"id\");\r\n            window.location.href = `timelineData.html?eventId=${eventId}`;\r\n        });\r\n    });\r\n}\r\n\r\ndynamicLine();\r\n\n\n//# sourceURL=webpack://web2-course-project-front-end-remygist/./src/dynamicTimeline.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/dynamicTimeline.js"]();
/******/ 	
/******/ })()
;