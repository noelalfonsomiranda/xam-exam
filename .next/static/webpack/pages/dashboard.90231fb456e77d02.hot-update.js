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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n/* harmony import */ var _store_authSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/authSlice */ \"./src/store/authSlice.ts\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _components_AddUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/AddUser */ \"./src/components/AddUser.tsx\");\n\nvar _s = $RefreshSig$();\n\n// import { redirect } from 'next/navigation'\n\n\n\n\n\n\nconst DashBoard = ()=>{\n    _s();\n    const { usersState, sessionState } = (0,_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.auth);\n    console.log(\"asd ~ usersState, sessionState:\", usersState, sessionState);\n    const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // useEffect(() => {\n    //   if (!sessionState?.userName)\n    //     // redirect('/')\n    //     router.push('/')\n    // }, [sessionState])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"container mx-auto p-14\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center mb-14\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xl font-medium\",\n                            children: [\n                                \"dsfsdsfd\",\n                                sessionState === null || sessionState === void 0 ? void 0 : sessionState.userName\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\dashboard.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 14\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\dashboard.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            type: \"submit\",\n                            label: \"LOGOUT\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\dashboard.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 14\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\dashboard.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\dashboard.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>dispatch((0,_store_authSlice__WEBPACK_IMPORTED_MODULE_4__.setSessionState)({})),\n                children: \"LOGOUT\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\dashboard.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"gap-4 grid grid-cols-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddUser__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\dashboard.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-2\",\n                        children: \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, sint error impedit deleniti soluta unde amet optio laboriosam voluptatem non minima maxime nihil et libero tempore necessitatibus cum accusamus reprehenderit?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\dashboard.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\dashboard.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\dashboard.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DashBoard, \"o8L9h+V2CBBTnUzcMx38hKa+nog=\", false, function() {\n    return [\n        _store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _store__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = DashBoard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashBoard);\nvar _c;\n$RefreshReg$(_c, \"DashBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ3pDLDZDQUE2QztBQUNMO0FBRUM7QUFDVztBQUNYO0FBRUE7QUFDRTtBQUkzQyxNQUFNTyxZQUFzQzs7SUFDMUMsTUFBTSxFQUFDQyxVQUFVLEVBQUVDLFlBQVksRUFBQyxHQUFHUCxzREFBY0EsQ0FBQyxDQUFDUSxRQUFVQSxNQUFNQyxJQUFJO0lBQ3ZFQyxRQUFRQyxHQUFHLENBQUMsbUNBQW1DTCxZQUFZQztJQUMzRCxNQUFNSyxXQUFXVixzREFBY0E7SUFDL0IsTUFBTVcsU0FBU2Qsc0RBQVNBO0lBRXhCLG9CQUFvQjtJQUNwQixpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFFckIscUJBQ0UsOERBQUNlO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNDO2tDQUFJLDRFQUFDQzs0QkFBRUYsV0FBVTs7Z0NBQXNCO2dDQUFTUix5QkFBQUEsbUNBQUFBLGFBQWNXLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FDdkUsOERBQUNGO2tDQUFJLDRFQUFDYiwwREFBTUE7NEJBQUNnQixNQUFLOzRCQUFTQyxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFFbkMsOERBQUNDO2dCQUFPQyxTQUFTLElBQU1WLFNBQVNYLGlFQUFlQSxDQUFDLENBQUM7MEJBQUs7Ozs7OzswQkFDdEQsOERBQUNlO2dCQUFJTyxPQUFNOztrQ0FDVCw4REFBQ25CLDJEQUFPQTs7Ozs7a0NBQ1IsOERBQUNZO3dCQUFJRCxXQUFVO2tDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJcEM7R0F6Qk1WOztRQUMrQkwsa0RBQWNBO1FBRWhDRSxrREFBY0E7UUFDaEJILGtEQUFTQTs7O0tBSnBCTTtBQTBCTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZGFzaGJvYXJkLnRzeD9jZWUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIkAvc3RvcmVcIjtcclxuaW1wb3J0IHsgc2V0U2Vzc2lvblN0YXRlIH0gZnJvbSBcIkAvc3RvcmUvYXV0aFNsaWNlXCI7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSBcIkAvc3RvcmVcIjtcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9CdXR0b25cIjtcclxuaW1wb3J0IEFkZFVzZXIgZnJvbSBcIkAvY29tcG9uZW50cy9BZGRVc2VyXCI7XHJcblxyXG5leHBvcnQgdHlwZSBEYXNoQm9hcmRQcm9wcyA9IHt9O1xyXG5cclxuY29uc3QgRGFzaEJvYXJkOiBSZWFjdC5GQzxEYXNoQm9hcmRQcm9wcz4gPSAoKSA9PiB7XHJcbiAgY29uc3Qge3VzZXJzU3RhdGUsIHNlc3Npb25TdGF0ZX0gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGgpO1xyXG4gIGNvbnNvbGUubG9nKFwiYXNkIH4gdXNlcnNTdGF0ZSwgc2Vzc2lvblN0YXRlOlwiLCB1c2Vyc1N0YXRlLCBzZXNzaW9uU3RhdGUpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIFxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBpZiAoIXNlc3Npb25TdGF0ZT8udXNlck5hbWUpXHJcbiAgLy8gICAgIC8vIHJlZGlyZWN0KCcvJylcclxuICAvLyAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gIC8vIH0sIFtzZXNzaW9uU3RhdGVdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC0xNFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi0xNFwiPlxyXG4gICAgICAgIDxkaXY+PHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bVwiPmRzZnNkc2Zke3Nlc3Npb25TdGF0ZT8udXNlck5hbWV9PC9wPjwvZGl2PlxyXG4gICAgICAgIDxkaXY+PEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbGFiZWw9XCJMT0dPVVRcIiAvPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChzZXRTZXNzaW9uU3RhdGUoe30pKX0+TE9HT1VUPC9idXR0b24+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJnYXAtNCBncmlkIGdyaWQtY29scy0zXCI+XHJcbiAgICAgICAgPEFkZFVzZXIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIj5Mb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVGVtcG9yaWJ1cywgc2ludCBlcnJvciBpbXBlZGl0IGRlbGVuaXRpIHNvbHV0YSB1bmRlIGFtZXQgb3B0aW8gbGFib3Jpb3NhbSB2b2x1cHRhdGVtIG5vbiBtaW5pbWEgbWF4aW1lIG5paGlsIGV0IGxpYmVybyB0ZW1wb3JlIG5lY2Vzc2l0YXRpYnVzIGN1bSBhY2N1c2FtdXMgcmVwcmVoZW5kZXJpdD88L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRGFzaEJvYXJkOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsInVzZUFwcFNlbGVjdG9yIiwic2V0U2Vzc2lvblN0YXRlIiwidXNlQXBwRGlzcGF0Y2giLCJCdXR0b24iLCJBZGRVc2VyIiwiRGFzaEJvYXJkIiwidXNlcnNTdGF0ZSIsInNlc3Npb25TdGF0ZSIsInN0YXRlIiwiYXV0aCIsImNvbnNvbGUiLCJsb2ciLCJkaXNwYXRjaCIsInJvdXRlciIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwidXNlck5hbWUiLCJ0eXBlIiwibGFiZWwiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/dashboard.tsx\n"));

/***/ })

});