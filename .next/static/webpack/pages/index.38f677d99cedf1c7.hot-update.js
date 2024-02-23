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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_authSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/authSlice */ \"./src/store/authSlice.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Input */ \"./src/components/Input.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _components_ErrorAlert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ErrorAlert */ \"./src/components/ErrorAlert.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst LoginPage = (param)=>{\n    let { onSubmit } = param;\n    _s();\n    const [loginData, setLoginData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        branchId: \"\",\n        username: \"\",\n        password: \"\"\n    });\n    console.log(\"asd ~ loginData:\", loginData);\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const usersState = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.auth.usersState);\n    console.log(\"asd ~ usersState:\", usersState);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        handleFetch();\n    }, []);\n    const handleFetch = async ()=>{\n        const response = await fetch(\"/api/users_data\", {\n            method: \"GET\"\n        });\n        const data = await response.json();\n        dispatch((0,_store_authSlice__WEBPACK_IMPORTED_MODULE_3__.setUsersState)(data.users || []));\n    };\n    const onLogin = ()=>{\n        dispatch((0,_store_authSlice__WEBPACK_IMPORTED_MODULE_3__.setAuthState)(true));\n        router.push(\"/dashboard\");\n    };\n    function handleInputChange(event) {\n        const { name, value } = event.target;\n        setLoginData({\n            ...loginData,\n            [name]: value\n        });\n    }\n    // const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {\n    //   e.preventDefault();\n    //   try {\n    //     const response = await axios.post('http://localhost:8080/apiv1/signup', formData);\n    //     console.log(response);\n    //   }catch (error) {\n    //     console.error(error);\n    //   }\n    // }\n    function handleSubmit(event) {\n        event.preventDefault();\n        // onSubmit(formData);\n        onLogin();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"h-screen flex justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-1/4 border-solid border-2 border-black p-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-5 text-xl\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            placeholder: \"Branch id\",\n                            type: \"text\",\n                            name: \"branchId\",\n                            value: loginData.branchId,\n                            onChange: handleInputChange,\n                            className: \"mb-3\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            placeholder: \"User name\",\n                            type: \"text\",\n                            name: \"username\",\n                            value: loginData.username,\n                            onChange: handleInputChange,\n                            className: \"mb-3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            placeholder: \"Password\",\n                            type: \"password\",\n                            name: \"password\",\n                            value: loginData.password,\n                            onChange: handleInputChange,\n                            className: \"mb-3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            type: \"submit\",\n                            label: \"LOGIN\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorAlert__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"mt-3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginPage, \"SKi0g+6rrjJ0Y16WxR77Pnslf/Q=\", false, function() {\n    return [\n        _store__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _store__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch\n    ];\n});\n_c = LoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHNldEF1dGhTdGF0ZSwgc2V0VXNlcnNTdGF0ZSB9IGZyb20gXCJAL3N0b3JlL2F1dGhTbGljZVwiO1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiQC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IElucHV0IGZyb20gXCJAL2NvbXBvbmVudHMvSW5wdXRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQC9jb21wb25lbnRzL0J1dHRvblwiO1xyXG5pbXBvcnQgRXJyb3JBbGVydCBmcm9tIFwiQC9jb21wb25lbnRzL0Vycm9yQWxlcnRcIjtcclxuXHJcbmV4cG9ydCB0eXBlIExvZ2luUGFnZVByb3BzID0ge1xyXG4gIG9uU3VibWl0OiAoZGF0YTogTG9naW5EYXRhKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIExvZ2luRGF0YSB7XHJcbiAgYnJhbmNoSWQ6IHN0cmluZztcclxuICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBVc2VycyB7XHJcbiAgZGF0YTogYW55XHJcbn1cclxuXHJcbmNvbnN0IExvZ2luUGFnZTogUmVhY3QuRkM8TG9naW5QYWdlUHJvcHM+ID0gKHtvblN1Ym1pdH0pID0+IHtcclxuICBjb25zdCBbbG9naW5EYXRhLCBzZXRMb2dpbkRhdGFdID0gdXNlU3RhdGU8TG9naW5EYXRhPih7IGJyYW5jaElkOiAnJywgdXNlcm5hbWU6ICcnLCBwYXNzd29yZDogJycgfSk7XHJcbiAgY29uc29sZS5sb2coXCJhc2QgfiBsb2dpbkRhdGE6XCIsIGxvZ2luRGF0YSlcclxuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlPFVzZXJzPih7fSBhcyBVc2Vycyk7XHJcblxyXG4gIGNvbnN0IHVzZXJzU3RhdGUgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGgudXNlcnNTdGF0ZSk7XHJcbiAgY29uc29sZS5sb2coXCJhc2QgfiB1c2Vyc1N0YXRlOlwiLCB1c2Vyc1N0YXRlKVxyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRoYW5kbGVGZXRjaCgpXHJcblx0fSwgW10pXHJcblxyXG5cdGNvbnN0IGhhbmRsZUZldGNoID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS91c2Vyc19kYXRhJywge21ldGhvZDogJ0dFVCd9KVxyXG4gXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblx0XHRkaXNwYXRjaChzZXRVc2Vyc1N0YXRlKGRhdGEudXNlcnMgfHwgW10pKVxyXG5cdH1cclxuXHJcbiAgY29uc3Qgb25Mb2dpbiA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldEF1dGhTdGF0ZSh0cnVlKSlcclxuXHRcdHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJylcclxuXHR9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgc2V0TG9naW5EYXRhKHsgLi4ubG9naW5EYXRhLCBbbmFtZV06IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAvLyAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAvLyAgIHRyeSB7XHJcbiAgLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaXYxL3NpZ251cCcsIGZvcm1EYXRhKTtcclxuICAvLyAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gIC8vICAgfWNhdGNoIChlcnJvcikge1xyXG4gIC8vICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBvblN1Ym1pdChmb3JtRGF0YSk7XHJcbiAgICBvbkxvZ2luKClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJoLXNjcmVlbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS80IGJvcmRlci1zb2xpZCBib3JkZXItMiBib3JkZXItYmxhY2sgcC01XCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTUgdGV4dC14bFwiPkxvZ2luPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJyYW5jaCBpZFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cImJyYW5jaElkXCJcclxuICAgICAgICAgICAgdmFsdWU9e2xvZ2luRGF0YS5icmFuY2hJZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VyIG5hbWVcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtsb2dpbkRhdGEudXNlcm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bG9naW5EYXRhLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGxhYmVsPVwiTE9HSU5cIiAvPlxyXG4gICAgICAgICAgPEVycm9yQWxlcnQgY2xhc3NOYW1lPVwibXQtM1wiIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJzZXRBdXRoU3RhdGUiLCJzZXRVc2Vyc1N0YXRlIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsIklucHV0IiwiQnV0dG9uIiwiRXJyb3JBbGVydCIsIkxvZ2luUGFnZSIsIm9uU3VibWl0IiwibG9naW5EYXRhIiwic2V0TG9naW5EYXRhIiwiYnJhbmNoSWQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsInVzZXJzIiwic2V0VXNlcnMiLCJ1c2Vyc1N0YXRlIiwic3RhdGUiLCJhdXRoIiwicm91dGVyIiwiZGlzcGF0Y2giLCJoYW5kbGVGZXRjaCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJkYXRhIiwianNvbiIsIm9uTG9naW4iLCJwdXNoIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsInAiLCJmb3JtIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});