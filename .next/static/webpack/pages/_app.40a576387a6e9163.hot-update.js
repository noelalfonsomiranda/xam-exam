"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/store/authSlice.ts":
/*!********************************!*\
  !*** ./src/store/authSlice.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authReducer: function() { return /* binding */ authReducer; },\n/* harmony export */   authSlice: function() { return /* binding */ authSlice; },\n/* harmony export */   setAuthState: function() { return /* binding */ setAuthState; },\n/* harmony export */   setUsersState: function() { return /* binding */ setUsersState; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    authState: false,\n    users: {}\n};\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"auth\",\n    initialState,\n    reducers: {\n        setAuthState: (state, action)=>{\n            state.authState = action.payload;\n        },\n        setUsersState: (state, action)=>{\n            state.users = action.payload;\n        }\n    }\n});\nconst { setAuthState, setUsersState } = authSlice.actions;\nconst authReducer = authSlice.reducer;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvYXV0aFNsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStDO0FBTy9DLE1BQU1DLGVBQTJCO0lBQy9CQyxXQUFXO0lBQ1hDLE9BQU8sQ0FBQztBQUNWO0FBRU8sTUFBTUMsWUFBWUosNkRBQVdBLENBQUM7SUFDbkNLLE1BQU07SUFDTko7SUFDQUssVUFBVTtRQUNSQyxjQUFjLENBQUNDLE9BQU9DO1lBQ3BCRCxNQUFNTixTQUFTLEdBQUdPLE9BQU9DLE9BQU87UUFDbEM7UUFDQUMsZUFBZSxDQUFDSCxPQUFPQztZQUNyQkQsTUFBTUwsS0FBSyxHQUFHTSxPQUFPQyxPQUFPO1FBQzlCO0lBQ0Y7QUFDRixHQUFHO0FBRUksTUFBTSxFQUFFSCxZQUFZLEVBQUVJLGFBQWEsRUFBRSxHQUFHUCxVQUFVUSxPQUFPLENBQUM7QUFDMUQsTUFBTUMsY0FBY1QsVUFBVVUsT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9hdXRoU2xpY2UudHM/MTdlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB0eXBlIHsgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUF1dGhTdGF0ZSB7XHJcbiAgYXV0aFN0YXRlOiBib29sZWFuO1xyXG4gIHVzZXJzOiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogSUF1dGhTdGF0ZSA9IHtcclxuICBhdXRoU3RhdGU6IGZhbHNlLFxyXG4gIHVzZXJzOiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJhdXRoXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRBdXRoU3RhdGU6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPGJvb2xlYW4+KSA9PiB7XHJcbiAgICAgIHN0YXRlLmF1dGhTdGF0ZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIHNldFVzZXJzU3RhdGU6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPGFueT4pID0+IHtcclxuICAgICAgc3RhdGUudXNlcnMgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRBdXRoU3RhdGUsIHNldFVzZXJzU3RhdGUgfSA9IGF1dGhTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgY29uc3QgYXV0aFJlZHVjZXIgPSBhdXRoU2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJhdXRoU3RhdGUiLCJ1c2VycyIsImF1dGhTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldEF1dGhTdGF0ZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldFVzZXJzU3RhdGUiLCJhY3Rpb25zIiwiYXV0aFJlZHVjZXIiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/authSlice.ts\n"));

/***/ })

});