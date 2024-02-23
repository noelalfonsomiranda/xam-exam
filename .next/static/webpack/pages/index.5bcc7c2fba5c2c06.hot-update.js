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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_authSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/authSlice */ \"./src/store/authSlice.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Input */ \"./src/components/Input.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _components_ErrorAlert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ErrorAlert */ \"./src/components/ErrorAlert.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst LoginPage = ()=>{\n    _s();\n    const [loginData, setLoginData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        branchId: \"\",\n        userName: \"\",\n        password: \"\"\n    });\n    console.log(\"asd ~ loginData:\", loginData);\n    const [isError, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const usersState = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.auth.usersState);\n    console.log(\"asd ~ usersState:\", usersState);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        handleFetch();\n    }, []);\n    const handleFetch = async ()=>{\n        const response = await fetch(\"/api/users_data\", {\n            method: \"GET\"\n        });\n        const data = await response.json();\n        dispatch((0,_store_authSlice__WEBPACK_IMPORTED_MODULE_3__.setUsersState)(data.users || []));\n    };\n    function handleInputChange(event) {\n        const { name, value } = event.target;\n        setLoginData({\n            ...loginData,\n            [name]: value\n        });\n        if (isError) setError(false);\n    }\n    function handleSubmit(event) {\n        event.preventDefault();\n        usersState.forEach((user)=>{\n            console.log(1, loginData.userName === user.userName);\n            console.log(2, loginData.password === user.password);\n            console.log(3, loginData.branchId === user.branchId);\n            if (loginData.userName === user.userName && loginData.password === user.password && loginData.branchId === user.branchId) {\n                dispatch((0,_store_authSlice__WEBPACK_IMPORTED_MODULE_3__.setAuthState)(true));\n                router.push(\"/dashboard\");\n            } else {\n                setError(true);\n            }\n        });\n    // onSubmit(formData);\n    // onLogin()\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"h-screen flex justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-1/4 border-solid border-2 border-black p-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-5 text-xl\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            placeholder: \"Branch id\",\n                            type: \"text\",\n                            name: \"branchId\",\n                            value: loginData.branchId,\n                            onChange: handleInputChange,\n                            className: \"mb-3\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            placeholder: \"User name\",\n                            type: \"text\",\n                            name: \"userName\",\n                            value: loginData.userName,\n                            onChange: handleInputChange,\n                            className: \"mb-3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            placeholder: \"Password\",\n                            type: \"password\",\n                            name: \"password\",\n                            value: loginData.password,\n                            onChange: handleInputChange,\n                            className: \"mb-3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            type: \"submit\",\n                            label: \"LOGIN\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, undefined),\n                        isError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorAlert__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"mt-3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 22\n                        }, undefined) : null\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginPage, \"RJ5CX9L89MD9PKYTt52Q1fciHqM=\", false, function() {\n    return [\n        _store__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _store__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch\n    ];\n});\n_c = LoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBTUE7NEJBQUN5QyxNQUFLOzRCQUFTRyxPQUFNOzs7Ozs7d0JBQzNCbEMsd0JBQVUsOERBQUNULDhEQUFVQTs0QkFBQ2tDLFdBQVU7Ozs7O3dDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkQ7R0ExRk1qQzs7UUFLZUosa0RBQWNBO1FBR2xCSixrREFBU0E7UUFDUEcsa0RBQWNBOzs7S0FUM0JLO0FBMkZOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHNldEF1dGhTdGF0ZSwgc2V0VXNlcnNTdGF0ZSB9IGZyb20gXCJAL3N0b3JlL2F1dGhTbGljZVwiO1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiQC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IElucHV0IGZyb20gXCJAL2NvbXBvbmVudHMvSW5wdXRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQC9jb21wb25lbnRzL0J1dHRvblwiO1xyXG5pbXBvcnQgRXJyb3JBbGVydCBmcm9tIFwiQC9jb21wb25lbnRzL0Vycm9yQWxlcnRcIjtcclxuXHJcbmV4cG9ydCB0eXBlIExvZ2luUGFnZVByb3BzID0ge307XHJcblxyXG5pbnRlcmZhY2UgTG9naW5EYXRhIHtcclxuICBicmFuY2hJZDogc3RyaW5nO1xyXG4gIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgTG9naW5QYWdlOiBSZWFjdC5GQzxMb2dpblBhZ2VQcm9wcz4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2xvZ2luRGF0YSwgc2V0TG9naW5EYXRhXSA9IHVzZVN0YXRlPExvZ2luRGF0YT4oeyBicmFuY2hJZDogJycsIHVzZXJOYW1lOiAnJywgcGFzc3dvcmQ6ICcnIH0pO1xyXG4gIGNvbnNvbGUubG9nKFwiYXNkIH4gbG9naW5EYXRhOlwiLCBsb2dpbkRhdGEpXHJcbiAgY29uc3QgW2lzRXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCB1c2Vyc1N0YXRlID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoLnVzZXJzU3RhdGUpO1xyXG4gIGNvbnNvbGUubG9nKFwiYXNkIH4gdXNlcnNTdGF0ZTpcIiwgdXNlcnNTdGF0ZSlcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aGFuZGxlRmV0Y2goKVxyXG5cdH0sIFtdKVxyXG5cclxuXHRjb25zdCBoYW5kbGVGZXRjaCA9IGFzeW5jICgpID0+IHtcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvdXNlcnNfZGF0YScsIHttZXRob2Q6ICdHRVQnfSlcclxuIFxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG5cdFx0ZGlzcGF0Y2goc2V0VXNlcnNTdGF0ZShkYXRhLnVzZXJzIHx8IFtdKSlcclxuXHR9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgc2V0TG9naW5EYXRhKHsgLi4ubG9naW5EYXRhLCBbbmFtZV06IHZhbHVlIH0pO1xyXG4gICAgaWYgKGlzRXJyb3IpXHJcbiAgICAgIHNldEVycm9yKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pikge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB1c2Vyc1N0YXRlLmZvckVhY2godXNlciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKDEsIGxvZ2luRGF0YS51c2VyTmFtZSA9PT0gdXNlci51c2VyTmFtZSlcclxuICAgICAgY29uc29sZS5sb2coMiwgbG9naW5EYXRhLnBhc3N3b3JkID09PSB1c2VyLnBhc3N3b3JkKVxyXG4gICAgICBjb25zb2xlLmxvZygzLCBsb2dpbkRhdGEuYnJhbmNoSWQgPT09IHVzZXIuYnJhbmNoSWQpXHJcbiAgICAgIGlmIChsb2dpbkRhdGEudXNlck5hbWUgPT09IHVzZXIudXNlck5hbWUgJiZcclxuICAgICAgICBsb2dpbkRhdGEucGFzc3dvcmQgPT09IHVzZXIucGFzc3dvcmQgJiZcclxuICAgICAgICBsb2dpbkRhdGEuYnJhbmNoSWQgPT09IHVzZXIuYnJhbmNoSWRcclxuICAgICAgICApIHtcclxuICAgICAgICBkaXNwYXRjaChzZXRBdXRoU3RhdGUodHJ1ZSkpXHJcblx0ICAgICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEVycm9yKHRydWUpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICAgIC8vIG9uU3VibWl0KGZvcm1EYXRhKTtcclxuICAgIC8vIG9uTG9naW4oKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzQgYm9yZGVyLXNvbGlkIGJvcmRlci0yIGJvcmRlci1ibGFjayBwLTVcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNSB0ZXh0LXhsXCI+TG9naW48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnJhbmNoIGlkXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiYnJhbmNoSWRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bG9naW5EYXRhLmJyYW5jaElkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTNcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXIgbmFtZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cInVzZXJOYW1lXCJcclxuICAgICAgICAgICAgdmFsdWU9e2xvZ2luRGF0YS51c2VyTmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtsb2dpbkRhdGEucGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbGFiZWw9XCJMT0dJTlwiIC8+XHJcbiAgICAgICAgICB7aXNFcnJvciA/IDxFcnJvckFsZXJ0IGNsYXNzTmFtZT1cIm10LTNcIiAvPiA6IG51bGx9XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJzZXRBdXRoU3RhdGUiLCJzZXRVc2Vyc1N0YXRlIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsIklucHV0IiwiQnV0dG9uIiwiRXJyb3JBbGVydCIsIkxvZ2luUGFnZSIsImxvZ2luRGF0YSIsInNldExvZ2luRGF0YSIsImJyYW5jaElkIiwidXNlck5hbWUiLCJwYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJpc0Vycm9yIiwic2V0RXJyb3IiLCJ1c2Vyc1N0YXRlIiwic3RhdGUiLCJhdXRoIiwicm91dGVyIiwiZGlzcGF0Y2giLCJoYW5kbGVGZXRjaCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJkYXRhIiwianNvbiIsInVzZXJzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZm9yRWFjaCIsInVzZXIiLCJwdXNoIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsInAiLCJmb3JtIiwib25TdWJtaXQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwibGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});