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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authReducer: function() { return /* binding */ authReducer; },\n/* harmony export */   authSlice: function() { return /* binding */ authSlice; },\n/* harmony export */   setAuthState: function() { return /* binding */ setAuthState; },\n/* harmony export */   setSessionState: function() { return /* binding */ setSessionState; },\n/* harmony export */   setUsersState: function() { return /* binding */ setUsersState; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    authState: false,\n    usersState: [],\n    sessionState: {}\n};\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"auth\",\n    initialState,\n    reducers: {\n        setAuthState: (state, action)=>{\n            state.authState = action.payload;\n        },\n        setUsersState: (state, action)=>{\n            state.usersState = action.payload;\n        },\n        setSessionState: (state, action)=>{\n            const data = action.payload;\n            if (action.payload) {\n                delete ({\n                    ...data\n                })[\"password\"];\n            }\n            console.log(\"asdadaction.payload\", action.payload);\n            state.sessionState = action.payload;\n        }\n    }\n});\nconst { setAuthState, setUsersState, setSessionState } = authSlice.actions;\nconst authReducer = authSlice.reducer;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvYXV0aFNsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErQztBQVEvQyxNQUFNQyxlQUEyQjtJQUMvQkMsV0FBVztJQUNYQyxZQUFZLEVBQUU7SUFDZEMsY0FBYyxDQUFDO0FBQ2pCO0FBRU8sTUFBTUMsWUFBWUwsNkRBQVdBLENBQUM7SUFDbkNNLE1BQU07SUFDTkw7SUFDQU0sVUFBVTtRQUNSQyxjQUFjLENBQUNDLE9BQU9DO1lBQ3BCRCxNQUFNUCxTQUFTLEdBQUdRLE9BQU9DLE9BQU87UUFDbEM7UUFDQUMsZUFBZSxDQUFDSCxPQUFPQztZQUNyQkQsTUFBTU4sVUFBVSxHQUFHTyxPQUFPQyxPQUFPO1FBQ25DO1FBQ0FFLGlCQUFpQixDQUFDSixPQUFPQztZQUN2QixNQUFNSSxPQUFPSixPQUFPQyxPQUFPO1lBQzNCLElBQUlELE9BQU9DLE9BQU8sRUFBRTtnQkFDbEIsT0FBTztvQkFBQyxHQUFHRyxJQUFJO2dCQUFBLEVBQUMsQ0FBQyxXQUFXO1lBQzlCO1lBQ0FDLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJOLE9BQU9DLE9BQU87WUFDakRGLE1BQU1MLFlBQVksR0FBR00sT0FBT0MsT0FBTztRQUNyQztJQUNGO0FBQ0YsR0FBRztBQUVJLE1BQU0sRUFBRUgsWUFBWSxFQUFFSSxhQUFhLEVBQUVDLGVBQWUsRUFBRSxHQUFHUixVQUFVWSxPQUFPLENBQUM7QUFDM0UsTUFBTUMsY0FBY2IsVUFBVWMsT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9hdXRoU2xpY2UudHM/MTdlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB0eXBlIHsgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUF1dGhTdGF0ZSB7XHJcbiAgYXV0aFN0YXRlOiBib29sZWFuO1xyXG4gIHVzZXJzU3RhdGU6IGFueTtcclxuICBzZXNzaW9uU3RhdGU6IGFueTtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBJQXV0aFN0YXRlID0ge1xyXG4gIGF1dGhTdGF0ZTogZmFsc2UsXHJcbiAgdXNlcnNTdGF0ZTogW10sXHJcbiAgc2Vzc2lvblN0YXRlOiB7fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcImF1dGhcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldEF1dGhTdGF0ZTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Ym9vbGVhbj4pID0+IHtcclxuICAgICAgc3RhdGUuYXV0aFN0YXRlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgc2V0VXNlcnNTdGF0ZTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248YW55PikgPT4ge1xyXG4gICAgICBzdGF0ZS51c2Vyc1N0YXRlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgc2V0U2Vzc2lvblN0YXRlOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxhbnk+KSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICBpZiAoYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICBkZWxldGUgey4uLmRhdGF9WydwYXNzd29yZCddXHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coJ2FzZGFkYWN0aW9uLnBheWxvYWQnLCBhY3Rpb24ucGF5bG9hZClcclxuICAgICAgc3RhdGUuc2Vzc2lvblN0YXRlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgc2V0QXV0aFN0YXRlLCBzZXRVc2Vyc1N0YXRlLCBzZXRTZXNzaW9uU3RhdGUgfSA9IGF1dGhTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgY29uc3QgYXV0aFJlZHVjZXIgPSBhdXRoU2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJhdXRoU3RhdGUiLCJ1c2Vyc1N0YXRlIiwic2Vzc2lvblN0YXRlIiwiYXV0aFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0QXV0aFN0YXRlIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0VXNlcnNTdGF0ZSIsInNldFNlc3Npb25TdGF0ZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiYWN0aW9ucyIsImF1dGhSZWR1Y2VyIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/authSlice.ts\n"));

/***/ })

});