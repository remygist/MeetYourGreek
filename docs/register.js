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

/***/ "./src/register.js":
/*!*************************!*\
  !*** ./src/register.js ***!
  \*************************/
/***/ (() => {

eval("\r\n\r\ndocument\r\n    .querySelector(\"#inputForm\")\r\n    .addEventListener(\"submit\", function (event) {\r\n        event.preventDefault();\r\n        let user = {};\r\n\r\n        user.username = document.querySelector(\"#username\").value;\r\n        user.password = document.querySelector(\"#password\").value;\r\n        user.passwordConfirm = document.querySelector(\"#passwordConfirm\").value;\r\n\r\n        console.log(user);\r\n\r\n        //check for password\r\n        if (user.password == user.passwordConfirm) {\r\n            getData(\r\n                \"https://web-2-course-project-jayu.onrender.com/register\",\r\n                \"POST\",\r\n                user\r\n            ).then((data) => {\r\n                alert(\"Succesfully registered\");\r\n                window.location.href = \"login.html\";\r\n            });\r\n        } else {\r\n            alert(\"Passwords do not match\");\r\n        }\r\n    });\r\n\r\nasync function getData(url, method, data) {\r\n    let resp = await fetch(url, {\r\n        method: method,\r\n        headers: { \"Content-Type\": \"application/json\" },\r\n        mode: \"cors\",\r\n        body: JSON.stringify(data),\r\n    });\r\n    return await resp.json();\r\n}\r\n\n\n//# sourceURL=webpack://web2-course-project-front-end-remygist/./src/register.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/register.js"]();
/******/ 	
/******/ })()
;