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

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/***/ (() => {

eval("\r\n\r\ndocument\r\n    .querySelector(\"#inputForm\")\r\n    .addEventListener(\"submit\", function (event) {\r\n        event.preventDefault();\r\n\r\n        let user = {};\r\n        user.username = document.querySelector(\"#username\").value;\r\n        user.password = document.querySelector(\"#password\").value;\r\n\r\n        console.log(user);\r\n\r\n        // Check for login\r\n        getData(\r\n            \"https://web-2-course-project-jayu.onrender.com/login\",\r\n            \"POST\",\r\n            user\r\n        ).then((data) => {\r\n            console.log(data);\r\n\r\n            // If login is successful, store the username in local storage and navigate to profile.html\r\n            if (data.status === \"Authentication succesfull\") {\r\n                alert(data.message);\r\n                localStorage.setItem(\"username\", user.username);\r\n                window.location.href = \"profile.html\";\r\n            } else {\r\n                alert(data.message);\r\n            }\r\n        });\r\n    });\r\n\r\nasync function getData(url, method, data) {\r\n    let resp = await fetch(url, {\r\n        method: method,\r\n        headers: { \"Content-Type\": \"application/json\" },\r\n        mode: \"cors\",\r\n        body: JSON.stringify(data),\r\n    });\r\n    return await resp.json();\r\n}\r\n\n\n//# sourceURL=webpack://web2-course-project-front-end-remygist/./src/login.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/login.js"]();
/******/ 	
/******/ })()
;