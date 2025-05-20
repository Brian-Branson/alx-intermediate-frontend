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

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("\nconst student1 = {\n    firstName: \"John\",\n    lastName: \"blackthorn\",\n    age: 17,\n    location: \"Nairobi\",\n};\nconst student2 = {\n    firstName: \"Jane\",\n    lastName: \"Doe\",\n    age: 18,\n    location: \"Nairobi\",\n};\nconst studentList = [student1, student2];\nconst table = document.createElement(\"table\");\nconst header = table.insertRow();\nheader.innerHTML = \"<th>First Name</th><th>Location</th>\";\nstudentList.forEach((student) => {\n    const row = table.insertRow();\n    row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;\n});\ndocument.body.appendChild(table);\n\n\n//# sourceURL=webpack://student-interface-task/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;