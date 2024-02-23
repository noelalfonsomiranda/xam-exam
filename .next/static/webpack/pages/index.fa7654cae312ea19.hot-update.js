"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_authSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/authSlice */ \"./src/store/authSlice.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Input */ \"./src/components/Input.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _components_ErrorAlert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ErrorAlert */ \"./src/components/ErrorAlert.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst LoginPage = ()=>{\n    _s();\n    const [loginData, setLoginData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        branchId: \"\",\n        username: \"\",\n        password: \"\"\n    });\n    console.log(\"asd ~ loginData:\", loginData);\n    const [isError, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const usersState = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.auth.usersState);\n    console.log(\"asd ~ usersState:\", usersState);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        handleFetch();\n    }, []);\n    const handleFetch = async ()=>{\n        const response = await fetch(\"/api/users_data\", {\n            method: \"GET\"\n        });\n        const data = await response.json();\n        dispatch((0,_store_authSlice__WEBPACK_IMPORTED_MODULE_3__.setUsersState)(data.users || []));\n    };\n    function handleInputChange(event) {\n        const { name, value } = event.target;\n        setLoginData({\n            ...loginData,\n            [name]: value\n        });\n        setError(false);\n    }\n    function handleSubmit(event) {\n        event.preventDefault();\n        usersState.forEach((user)=>{\n            if (loginData.username === user.userName && loginData.password === user.password && loginData.branchId === user.branchId) {\n                dispatch((0,_store_authSlice__WEBPACK_IMPORTED_MODULE_3__.setAuthState)(true));\n                router.push(\"/dashboard\");\n            } else {\n                setError(true);\n            }\n        });\n    // onSubmit(formData);\n    // onLogin()\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"h-screen flex justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-1/4 border-solid border-2 border-black p-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-5 text-xl\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            placeholder: \"Branch id\",\n                            type: \"text\",\n                            name: \"branchId\",\n                            value: loginData.branchId,\n                            onChange: handleInputChange,\n                            className: \"mb-3\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            placeholder: \"User name\",\n                            type: \"text\",\n                            name: \"username\",\n                            value: loginData.username,\n                            onChange: handleInputChange,\n                            className: \"mb-3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            placeholder: \"Password\",\n                            type: \"password\",\n                            name: \"password\",\n                            value: loginData.password,\n                            onChange: handleInputChange,\n                            className: \"mb-3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            type: \"submit\",\n                            label: \"LOGIN\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, undefined),\n                        isError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorAlert__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"mt-3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 22\n                        }, undefined) : null\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginPage, \"/8+Kx4WLCIWDBPpjkA4wAMVYc/Y=\", false, function() {\n    return [\n        _store__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _store__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch\n    ];\n});\n_c = LoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBzZXRBdXRoU3RhdGUsIHNldFVzZXJzU3RhdGUgfSBmcm9tIFwiQC9zdG9yZS9hdXRoU2xpY2VcIjtcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIkAvc3RvcmVcIjtcclxuXHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiQC9jb21wb25lbnRzL0lucHV0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9CdXR0b25cIjtcclxuaW1wb3J0IEVycm9yQWxlcnQgZnJvbSBcIkAvY29tcG9uZW50cy9FcnJvckFsZXJ0XCI7XHJcblxyXG5leHBvcnQgdHlwZSBMb2dpblBhZ2VQcm9wcyA9IHt9O1xyXG5cclxuaW50ZXJmYWNlIExvZ2luRGF0YSB7XHJcbiAgYnJhbmNoSWQ6IHN0cmluZztcclxuICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IExvZ2luUGFnZTogUmVhY3QuRkM8TG9naW5QYWdlUHJvcHM+ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtsb2dpbkRhdGEsIHNldExvZ2luRGF0YV0gPSB1c2VTdGF0ZTxMb2dpbkRhdGE+KHsgYnJhbmNoSWQ6ICcnLCB1c2VybmFtZTogJycsIHBhc3N3b3JkOiAnJyB9KTtcclxuICBjb25zb2xlLmxvZyhcImFzZCB+IGxvZ2luRGF0YTpcIiwgbG9naW5EYXRhKVxyXG4gIGNvbnN0IFtpc0Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgdXNlcnNTdGF0ZSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aC51c2Vyc1N0YXRlKTtcclxuICBjb25zb2xlLmxvZyhcImFzZCB+IHVzZXJzU3RhdGU6XCIsIHVzZXJzU3RhdGUpXHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGhhbmRsZUZldGNoKClcclxuXHR9LCBbXSlcclxuXHJcblx0Y29uc3QgaGFuZGxlRmV0Y2ggPSBhc3luYyAoKSA9PiB7XHJcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3VzZXJzX2RhdGEnLCB7bWV0aG9kOiAnR0VUJ30pXHJcbiBcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHRcdGRpc3BhdGNoKHNldFVzZXJzU3RhdGUoZGF0YS51c2VycyB8fCBbXSkpXHJcblx0fVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcclxuICAgIHNldExvZ2luRGF0YSh7IC4uLmxvZ2luRGF0YSwgW25hbWVdOiB2YWx1ZSB9KTtcclxuICAgIHNldEVycm9yKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pikge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB1c2Vyc1N0YXRlLmZvckVhY2godXNlciA9PiB7XHJcbiAgICAgIGlmIChsb2dpbkRhdGEudXNlcm5hbWUgPT09IHVzZXIudXNlck5hbWUgJiZcclxuICAgICAgICBsb2dpbkRhdGEucGFzc3dvcmQgPT09IHVzZXIucGFzc3dvcmQgJiZcclxuICAgICAgICBsb2dpbkRhdGEuYnJhbmNoSWQgPT09IHVzZXIuYnJhbmNoSWRcclxuICAgICAgICApIHtcclxuICAgICAgICBkaXNwYXRjaChzZXRBdXRoU3RhdGUodHJ1ZSkpXHJcblx0ICAgICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEVycm9yKHRydWUpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICAgIC8vIG9uU3VibWl0KGZvcm1EYXRhKTtcclxuICAgIC8vIG9uTG9naW4oKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzQgYm9yZGVyLXNvbGlkIGJvcmRlci0yIGJvcmRlci1ibGFjayBwLTVcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNSB0ZXh0LXhsXCI+TG9naW48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnJhbmNoIGlkXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiYnJhbmNoSWRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bG9naW5EYXRhLmJyYW5jaElkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTNcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXIgbmFtZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgdmFsdWU9e2xvZ2luRGF0YS51c2VybmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtsb2dpbkRhdGEucGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbGFiZWw9XCJMT0dJTlwiIC8+XHJcbiAgICAgICAgICB7aXNFcnJvciA/IDxFcnJvckFsZXJ0IGNsYXNzTmFtZT1cIm10LTNcIiAvPiA6IG51bGx9XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJzZXRBdXRoU3RhdGUiLCJzZXRVc2Vyc1N0YXRlIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsIklucHV0IiwiQnV0dG9uIiwiRXJyb3JBbGVydCIsIkxvZ2luUGFnZSIsImxvZ2luRGF0YSIsInNldExvZ2luRGF0YSIsImJyYW5jaElkIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJpc0Vycm9yIiwic2V0RXJyb3IiLCJ1c2Vyc1N0YXRlIiwic3RhdGUiLCJhdXRoIiwicm91dGVyIiwiZGlzcGF0Y2giLCJoYW5kbGVGZXRjaCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJkYXRhIiwianNvbiIsInVzZXJzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZm9yRWFjaCIsInVzZXIiLCJ1c2VyTmFtZSIsInB1c2giLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwicCIsImZvcm0iLCJvblN1Ym1pdCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJsYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});