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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_authSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/authSlice */ \"./src/store/authSlice.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Input */ \"./src/components/Input.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _components_ErrorAlert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ErrorAlert */ \"./src/components/ErrorAlert.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst LoginPage = ()=>{\n    _s();\n    const [loginData, setLoginData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        branchId: \"\",\n        username: \"\",\n        password: \"\"\n    });\n    console.log(\"asd ~ loginData:\", loginData);\n    const [isError, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const usersState = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.auth.usersState);\n    console.log(\"asd ~ usersState:\", usersState);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        handleFetch();\n    }, []);\n    const handleFetch = async ()=>{\n        const response = await fetch(\"/api/users_data\", {\n            method: \"GET\"\n        });\n        const data = await response.json();\n        dispatch((0,_store_authSlice__WEBPACK_IMPORTED_MODULE_3__.setUsersState)(data.users || []));\n    };\n    function handleInputChange(event) {\n        const { name, value } = event.target;\n        setLoginData({\n            ...loginData,\n            [name]: value\n        });\n        setError(true);\n    }\n    function handleSubmit(event) {\n        event.preventDefault();\n        usersState.forEach((user)=>{\n            if (loginData.username === user.userName && loginData.password === user.password) {\n                dispatch((0,_store_authSlice__WEBPACK_IMPORTED_MODULE_3__.setAuthState)(true));\n                router.push(\"/dashboard\");\n            } else {\n                setError(true);\n            }\n        });\n    // onSubmit(formData);\n    // onLogin()\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"h-screen flex justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-1/4 border-solid border-2 border-black p-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-5 text-xl\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            placeholder: \"Branch id\",\n                            type: \"text\",\n                            name: \"branchId\",\n                            value: loginData.branchId,\n                            onChange: handleInputChange,\n                            className: \"mb-3\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            placeholder: \"User name\",\n                            type: \"text\",\n                            name: \"username\",\n                            value: loginData.username,\n                            onChange: handleInputChange,\n                            className: \"mb-3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            placeholder: \"Password\",\n                            type: \"password\",\n                            name: \"password\",\n                            value: loginData.password,\n                            onChange: handleInputChange,\n                            className: \"mb-3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            type: \"submit\",\n                            label: \"LOGIN\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined),\n                        isError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorAlert__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"mt-3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 22\n                        }, undefined) : null\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginPage, \"/8+Kx4WLCIWDBPpjkA4wAMVYc/Y=\", false, function() {\n    return [\n        _store__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _store__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch\n    ];\n});\n_c = LoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgc2V0QXV0aFN0YXRlLCBzZXRVc2Vyc1N0YXRlIH0gZnJvbSBcIkAvc3RvcmUvYXV0aFNsaWNlXCI7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIkAvY29tcG9uZW50cy9JbnB1dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvQnV0dG9uXCI7XHJcbmltcG9ydCBFcnJvckFsZXJ0IGZyb20gXCJAL2NvbXBvbmVudHMvRXJyb3JBbGVydFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgTG9naW5QYWdlUHJvcHMgPSB7fTtcclxuXHJcbmludGVyZmFjZSBMb2dpbkRhdGEge1xyXG4gIGJyYW5jaElkOiBzdHJpbmc7XHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBMb2dpblBhZ2U6IFJlYWN0LkZDPExvZ2luUGFnZVByb3BzPiA9ICgpID0+IHtcclxuICBjb25zdCBbbG9naW5EYXRhLCBzZXRMb2dpbkRhdGFdID0gdXNlU3RhdGU8TG9naW5EYXRhPih7IGJyYW5jaElkOiAnJywgdXNlcm5hbWU6ICcnLCBwYXNzd29yZDogJycgfSk7XHJcbiAgY29uc29sZS5sb2coXCJhc2QgfiBsb2dpbkRhdGE6XCIsIGxvZ2luRGF0YSlcclxuICBjb25zdCBbaXNFcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IHVzZXJzU3RhdGUgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGgudXNlcnNTdGF0ZSk7XHJcbiAgY29uc29sZS5sb2coXCJhc2QgfiB1c2Vyc1N0YXRlOlwiLCB1c2Vyc1N0YXRlKVxyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRoYW5kbGVGZXRjaCgpXHJcblx0fSwgW10pXHJcblxyXG5cdGNvbnN0IGhhbmRsZUZldGNoID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS91c2Vyc19kYXRhJywge21ldGhvZDogJ0dFVCd9KVxyXG4gXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblx0XHRkaXNwYXRjaChzZXRVc2Vyc1N0YXRlKGRhdGEudXNlcnMgfHwgW10pKVxyXG5cdH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcbiAgICBzZXRMb2dpbkRhdGEoeyAuLi5sb2dpbkRhdGEsIFtuYW1lXTogdmFsdWUgfSk7XHJcbiAgICBzZXRFcnJvcih0cnVlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pikge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB1c2Vyc1N0YXRlLmZvckVhY2godXNlciA9PiB7XHJcbiAgICAgIGlmIChsb2dpbkRhdGEudXNlcm5hbWUgPT09IHVzZXIudXNlck5hbWUgICYmIGxvZ2luRGF0YS5wYXNzd29yZCA9PT0gdXNlci5wYXNzd29yZCkge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldEF1dGhTdGF0ZSh0cnVlKSlcclxuXHQgICAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0RXJyb3IodHJ1ZSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgLy8gb25TdWJtaXQoZm9ybURhdGEpO1xyXG4gICAgLy8gb25Mb2dpbigpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNCBib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHAtNVwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi01IHRleHQteGxcIj5Mb2dpbjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCcmFuY2ggaWRcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJicmFuY2hJZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtsb2dpbkRhdGEuYnJhbmNoSWR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlciBuYW1lXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bG9naW5EYXRhLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e2xvZ2luRGF0YS5wYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBsYWJlbD1cIkxPR0lOXCIgLz5cclxuICAgICAgICAgIHtpc0Vycm9yID8gPEVycm9yQWxlcnQgY2xhc3NOYW1lPVwibXQtM1wiIC8+IDogbnVsbH1cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luUGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInNldEF1dGhTdGF0ZSIsInNldFVzZXJzU3RhdGUiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiSW5wdXQiLCJCdXR0b24iLCJFcnJvckFsZXJ0IiwiTG9naW5QYWdlIiwibG9naW5EYXRhIiwic2V0TG9naW5EYXRhIiwiYnJhbmNoSWQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsImlzRXJyb3IiLCJzZXRFcnJvciIsInVzZXJzU3RhdGUiLCJzdGF0ZSIsImF1dGgiLCJyb3V0ZXIiLCJkaXNwYXRjaCIsImhhbmRsZUZldGNoIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImRhdGEiLCJqc29uIiwidXNlcnMiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmb3JFYWNoIiwidXNlciIsInVzZXJOYW1lIiwicHVzaCIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});