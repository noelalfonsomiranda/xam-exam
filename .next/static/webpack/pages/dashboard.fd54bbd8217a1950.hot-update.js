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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n/* harmony import */ var _store_authSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/authSlice */ \"./src/store/authSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n// import { redirect } from 'next/navigation'\n\n\n\n\nconst DashBoard = ()=>{\n    _s();\n    const { usersState, sessionState } = (0,_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.auth);\n    console.log(\"asd ~ usersState, sessionState:\", usersState, sessionState);\n    const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // useEffect(() => {\n    //   if (!sessionState?.userName)\n    //     // redirect('/')\n    //     router.push('/')\n    // }, [sessionState])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"md:container md:mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: sessionState === null || sessionState === void 0 ? void 0 : sessionState.userName\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\dashboard.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"You are now \",\n                    (sessionState === null || sessionState === void 0 ? void 0 : sessionState.userName) ? \"Logged  In\" : \"Logged Out\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\dashboard.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>dispatch((0,_store_authSlice__WEBPACK_IMPORTED_MODULE_4__.setSessionState)({})),\n                children: \"LOGOUT\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\dashboard.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"gap-8 columns-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, sint error impedit deleniti soluta unde amet optio laboriosam voluptatem non minima maxime nihil et libero tempore necessitatibus cum accusamus reprehenderit?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\dashboard.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, sint error impedit deleniti soluta unde amet optio laboriosam voluptatem non minima maxime nihil et libero tempore necessitatibus cum accusamus reprehenderit?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\dashboard.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\dashboard.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\dashboard.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DashBoard, \"o8L9h+V2CBBTnUzcMx38hKa+nog=\", false, function() {\n    return [\n        _store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _store__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = DashBoard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashBoard);\nvar _c;\n$RefreshReg$(_c, \"DashBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QztBQUN6Qyw2Q0FBNkM7QUFDTDtBQUVDO0FBQ1c7QUFDWDtBQUl6QyxNQUFNSyxZQUFzQzs7SUFDMUMsTUFBTSxFQUFDQyxVQUFVLEVBQUVDLFlBQVksRUFBQyxHQUFHTCxzREFBY0EsQ0FBQyxDQUFDTSxRQUFVQSxNQUFNQyxJQUFJO0lBQ3ZFQyxRQUFRQyxHQUFHLENBQUMsbUNBQW1DTCxZQUFZQztJQUMzRCxNQUFNSyxXQUFXUixzREFBY0E7SUFDL0IsTUFBTVMsU0FBU1osc0RBQVNBO0lBRXhCLG9CQUFvQjtJQUNwQixpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFFckIscUJBQ0UsOERBQUNhO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQzswQkFBR1QseUJBQUFBLG1DQUFBQSxhQUFjVSxRQUFROzs7Ozs7MEJBQzFCLDhEQUFDQzs7b0JBQUk7b0JBQ1VYLENBQUFBLHlCQUFBQSxtQ0FBQUEsYUFBY1UsUUFBUSxJQUFHLGVBQWU7Ozs7Ozs7MEJBRXZELDhEQUFDRTtnQkFBT0MsU0FBUyxJQUFNUixTQUFTVCxpRUFBZUEsQ0FBQyxDQUFDOzBCQUFLOzs7Ozs7MEJBQ3RELDhEQUFDZTtnQkFBSUcsT0FBTTs7a0NBQ1QsOERBQUNIO2tDQUFJOzs7Ozs7a0NBQ0wsOERBQUNBO2tDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJYjtHQXpCTWI7O1FBQytCSCxrREFBY0E7UUFFaENFLGtEQUFjQTtRQUNoQkgsa0RBQVNBOzs7S0FKcEJJO0FBMEJOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9kYXNoYm9hcmQudHN4P2NlZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiQC9zdG9yZVwiO1xyXG5pbXBvcnQgeyBzZXRTZXNzaW9uU3RhdGUgfSBmcm9tIFwiQC9zdG9yZS9hdXRoU2xpY2VcIjtcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tIFwiQC9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IHR5cGUgRGFzaEJvYXJkUHJvcHMgPSB7fTtcclxuXHJcbmNvbnN0IERhc2hCb2FyZDogUmVhY3QuRkM8RGFzaEJvYXJkUHJvcHM+ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHt1c2Vyc1N0YXRlLCBzZXNzaW9uU3RhdGV9ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoKTtcclxuICBjb25zb2xlLmxvZyhcImFzZCB+IHVzZXJzU3RhdGUsIHNlc3Npb25TdGF0ZTpcIiwgdXNlcnNTdGF0ZSwgc2Vzc2lvblN0YXRlKVxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgaWYgKCFzZXNzaW9uU3RhdGU/LnVzZXJOYW1lKVxyXG4gIC8vICAgICAvLyByZWRpcmVjdCgnLycpXHJcbiAgLy8gICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAvLyB9LCBbc2Vzc2lvblN0YXRlXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cIm1kOmNvbnRhaW5lciBtZDpteC1hdXRvXCI+XHJcbiAgICAgIDxwPntzZXNzaW9uU3RhdGU/LnVzZXJOYW1lfTwvcD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICBZb3UgYXJlIG5vdyB7c2Vzc2lvblN0YXRlPy51c2VyTmFtZSA/IFwiTG9nZ2VkICBJblwiIDogXCJMb2dnZWQgT3V0XCJ9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHNldFNlc3Npb25TdGF0ZSh7fSkpfT5MT0dPVVQ8L2J1dHRvbj5cclxuICAgICAgPGRpdiBjbGFzcz1cImdhcC04IGNvbHVtbnMtMlwiPlxyXG4gICAgICAgIDxkaXY+TG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFRlbXBvcmlidXMsIHNpbnQgZXJyb3IgaW1wZWRpdCBkZWxlbml0aSBzb2x1dGEgdW5kZSBhbWV0IG9wdGlvIGxhYm9yaW9zYW0gdm9sdXB0YXRlbSBub24gbWluaW1hIG1heGltZSBuaWhpbCBldCBsaWJlcm8gdGVtcG9yZSBuZWNlc3NpdGF0aWJ1cyBjdW0gYWNjdXNhbXVzIHJlcHJlaGVuZGVyaXQ/PC9kaXY+XHJcbiAgICAgICAgPGRpdj5Mb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVGVtcG9yaWJ1cywgc2ludCBlcnJvciBpbXBlZGl0IGRlbGVuaXRpIHNvbHV0YSB1bmRlIGFtZXQgb3B0aW8gbGFib3Jpb3NhbSB2b2x1cHRhdGVtIG5vbiBtaW5pbWEgbWF4aW1lIG5paGlsIGV0IGxpYmVybyB0ZW1wb3JlIG5lY2Vzc2l0YXRpYnVzIGN1bSBhY2N1c2FtdXMgcmVwcmVoZW5kZXJpdD88L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRGFzaEJvYXJkOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsInVzZUFwcFNlbGVjdG9yIiwic2V0U2Vzc2lvblN0YXRlIiwidXNlQXBwRGlzcGF0Y2giLCJEYXNoQm9hcmQiLCJ1c2Vyc1N0YXRlIiwic2Vzc2lvblN0YXRlIiwic3RhdGUiLCJhdXRoIiwiY29uc29sZSIsImxvZyIsImRpc3BhdGNoIiwicm91dGVyIiwibWFpbiIsImNsYXNzTmFtZSIsInAiLCJ1c2VyTmFtZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/dashboard.tsx\n"));

/***/ })

});