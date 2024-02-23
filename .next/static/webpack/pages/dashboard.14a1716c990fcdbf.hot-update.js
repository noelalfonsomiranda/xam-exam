"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/pages/dashboard.tsx":
/*!*********************************!*\
  !*** ./src/pages/dashboard.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n/* harmony import */ var _store_authSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/authSlice */ \"./src/store/authSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst DashBoard = ()=>{\n    _s();\n    const authState = (0,_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.auth.authState);\n    const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!authState) (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.redirect)(\"/home\");\n    }, [\n        authState\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap border border-1 border-black p-20\",\n                children: [\n                    \"You are now \",\n                    authState ? \"Logged  In\" : \"Logged Out\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\dashboard.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>dispatch((0,_store_authSlice__WEBPACK_IMPORTED_MODULE_4__.setAuthState)(false)),\n                children: \"LOGOUT\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\dashboard.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(DashBoard, \"LPD3HdFH1lbufFynF4IRHT2iZpw=\", false, function() {\n    return [\n        _store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _store__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch\n    ];\n});\n_c = DashBoard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashBoard);\nvar _c;\n$RefreshReg$(_c, \"DashBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QztBQUNDO0FBQ0Q7QUFDUTtBQUNSO0FBSXpDLE1BQU1NLFlBQXNDOztJQUMxQyxNQUFNQyxZQUFZSixzREFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxJQUFJLENBQUNGLFNBQVM7SUFDaEUsTUFBTUcsV0FBV0wsc0RBQWNBO0lBRS9CSixnREFBU0EsQ0FBQztRQUNSLElBQUksQ0FBQ00sV0FDTEwseURBQVFBLENBQUM7SUFDWCxHQUFHO1FBQUNLO0tBQVU7SUFFZCxxQkFDRTs7MEJBQ0UsOERBQUNJO2dCQUFJQyxXQUFVOztvQkFBNkM7b0JBQzdDTCxZQUFZLGVBQWU7Ozs7Ozs7MEJBRTFDLDhEQUFDTTtnQkFBT0MsU0FBUyxJQUFNSixTQUFTTiw4REFBWUEsQ0FBQzswQkFBUzs7Ozs7Ozs7QUFHNUQ7R0FqQk1FOztRQUNjSCxrREFBY0E7UUFDZkUsa0RBQWNBOzs7S0FGM0JDO0FBa0JOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9kYXNoYm9hcmQudHN4P2NlZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcclxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiQC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBzZXRBdXRoU3RhdGUgfSBmcm9tIFwiQC9zdG9yZS9hdXRoU2xpY2VcIjtcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tIFwiQC9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IHR5cGUgRGFzaEJvYXJkUHJvcHMgPSB7fTtcclxuXHJcbmNvbnN0IERhc2hCb2FyZDogUmVhY3QuRkM8RGFzaEJvYXJkUHJvcHM+ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGF1dGhTdGF0ZSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aC5hdXRoU3RhdGUpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFhdXRoU3RhdGUpXHJcbiAgICByZWRpcmVjdCgnL2hvbWUnKVxyXG4gIH0sIFthdXRoU3RhdGVdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcCBib3JkZXIgYm9yZGVyLTEgYm9yZGVyLWJsYWNrIHAtMjBcIj5cclxuICAgICAgICBZb3UgYXJlIG5vdyB7YXV0aFN0YXRlID8gXCJMb2dnZWQgIEluXCIgOiBcIkxvZ2dlZCBPdXRcIn1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0QXV0aFN0YXRlKGZhbHNlKSl9PkxPR09VVDwvYnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRGFzaEJvYXJkOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInJlZGlyZWN0IiwidXNlQXBwU2VsZWN0b3IiLCJzZXRBdXRoU3RhdGUiLCJ1c2VBcHBEaXNwYXRjaCIsIkRhc2hCb2FyZCIsImF1dGhTdGF0ZSIsInN0YXRlIiwiYXV0aCIsImRpc3BhdGNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/dashboard.tsx\n"));

/***/ })

});