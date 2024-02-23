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

/***/ "./src/components/AddUserForm.tsx":
/*!****************************************!*\
  !*** ./src/components/AddUserForm.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_authSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/authSlice */ \"./src/store/authSlice.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Input */ \"./src/components/Input.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _components_ErrorAlert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ErrorAlert */ \"./src/components/ErrorAlert.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst FORM_DATA_PROPS = {\n    branchId: \"\",\n    userName: \"\",\n    password: \"\",\n    firstName: \"\",\n    middleName: \"\",\n    lastName: \"\",\n    position: \"\"\n};\nconst AddUserForm = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(FORM_DATA_PROPS);\n    const [isError, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { usersState } = (0,_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.auth);\n    const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    function handleInputChange(event) {\n        const { name, value } = event.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n        if (isError) setError(false);\n    }\n    function handleSubmit(event) {\n        event.preventDefault();\n        const isUserExisted = usersState.find((user)=>user.userName === formData.userName);\n        if (isNaN(+(formData === null || formData === void 0 ? void 0 : formData.branchId))) {\n            setError(true);\n            setErrorMessage(\"Branch ID should be numbers.\");\n        }\n        if (isUserExisted) {\n            setError(true);\n            setErrorMessage(\"User is already registered.\");\n        }\n        dispatch((0,_store_authSlice__WEBPACK_IMPORTED_MODULE_2__.setUsersState)([\n            ...usersState,\n            {\n                ...formData,\n                branchId: +(formData === null || formData === void 0 ? void 0 : formData.branchId)\n            }\n        ]));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full border-solid border-2 bg-gray-200 p-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    placeholder: \"Branch id\",\n                    type: \"text\",\n                    name: \"branchId\",\n                    value: formData.branchId,\n                    onChange: handleInputChange,\n                    className: \"mb-3\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    placeholder: \"Username\",\n                    type: \"text\",\n                    name: \"userName\",\n                    value: formData.userName,\n                    onChange: handleInputChange,\n                    className: \"mb-3\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    placeholder: \"First Name\",\n                    type: \"text\",\n                    name: \"firstName\",\n                    value: formData.firstName,\n                    onChange: handleInputChange,\n                    className: \"mb-3\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    placeholder: \"Middle Name\",\n                    type: \"text\",\n                    name: \"middleName\",\n                    value: formData.middleName,\n                    onChange: handleInputChange,\n                    className: \"mb-3\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    placeholder: \"Last Name\",\n                    type: \"text\",\n                    name: \"lastName\",\n                    value: formData.lastName,\n                    onChange: handleInputChange,\n                    className: \"mb-3\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    placeholder: \"Position\",\n                    type: \"text\",\n                    name: \"position\",\n                    value: formData.position,\n                    onChange: handleInputChange,\n                    className: \"mb-3\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    placeholder: \"Password\",\n                    type: \"password\",\n                    name: \"password\",\n                    value: formData.password,\n                    onChange: handleInputChange,\n                    className: \"mb-3\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-end align-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            onClick: ()=>setFormData(FORM_DATA_PROPS),\n                            label: \"RESET\",\n                            className: \"w-32 bg-slate-100 rounded-2xl\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            type: \"submit\",\n                            label: \"ADD\",\n                            className: \"w-32 rounded-2xl ml-3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n                            lineNumber: 129,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, undefined),\n                isError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorAlert__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    text: errorMessage,\n                    className: \"mt-3\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n                    lineNumber: 131,\n                    columnNumber: 20\n                }, undefined) : null\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddUserForm, \"aE9FocACprt+rK9D4Sr3uvs/HYQ=\", false, function() {\n    return [\n        _store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _store__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch\n    ];\n});\n_c = AddUserForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddUserForm);\nvar _c;\n$RefreshReg$(_c, \"AddUserForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUMsYUFBWTtvQkFDWkMsTUFBSztvQkFDTGQsTUFBSztvQkFDTEMsT0FBT2IsU0FBU04sUUFBUTtvQkFDeEJpQyxVQUFVakI7b0JBQ1ZZLFdBQVU7b0JBQ1ZNLFFBQVE7Ozs7Ozs4QkFFViw4REFBQ1A7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDakMsMERBQU1BOzRCQUFDd0MsU0FBUyxJQUFNNUIsWUFBWVY7NEJBQWtCdUMsT0FBTTs0QkFBUVIsV0FBVTs7Ozs7O3NDQUM3RSw4REFBQ2pDLDBEQUFNQTs0QkFBQ3FDLE1BQUs7NEJBQVNJLE9BQU07NEJBQU1SLFdBQVU7Ozs7Ozs7Ozs7OztnQkFFN0NwQix3QkFBVSw4REFBQ1osOERBQVVBO29CQUFDeUMsTUFBTTNCO29CQUFja0IsV0FBVTs7Ozs7Z0NBQVk7Ozs7Ozs7Ozs7OztBQUl6RTtHQXhHTXZCOztRQUtpQlosa0RBQWNBO1FBRWxCRCxrREFBY0E7OztLQVAzQmE7QUF5R04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWRkVXNlckZvcm0udHN4P2QzZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc2V0VXNlcnNTdGF0ZSwgc2V0U2Vzc2lvblN0YXRlIH0gZnJvbSBcIkAvc3RvcmUvYXV0aFNsaWNlXCI7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIkAvY29tcG9uZW50cy9JbnB1dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvQnV0dG9uXCI7XHJcbmltcG9ydCBFcnJvckFsZXJ0IGZyb20gXCJAL2NvbXBvbmVudHMvRXJyb3JBbGVydFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgQWRkVXNlckZvcm1Qcm9wcyA9IHt9O1xyXG5cclxuaW50ZXJmYWNlIEZvcm1EYXRhIHtcclxuICBicmFuY2hJZDogc3RyaW5nO1xyXG4gIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBtaWRkbGVOYW1lOiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBwb3NpdGlvbjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBGT1JNX0RBVEFfUFJPUFMgPSB7XHJcbiAgYnJhbmNoSWQ6ICcnLFxyXG4gIHVzZXJOYW1lOiAnJyxcclxuICBwYXNzd29yZDogJycsXHJcbiAgZmlyc3ROYW1lOiAnJyxcclxuICBtaWRkbGVOYW1lOiAnJyxcclxuICBsYXN0TmFtZTogJycsXHJcbiAgcG9zaXRpb246ICcnXHJcbn1cclxuXHJcbmNvbnN0IEFkZFVzZXJGb3JtOiBSZWFjdC5GQzxBZGRVc2VyRm9ybVByb3BzPiA9ICgpID0+IHtcclxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlPEZvcm1EYXRhPihGT1JNX0RBVEFfUFJPUFMpO1xyXG4gIGNvbnN0IFtpc0Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IHt1c2Vyc1N0YXRlfSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aClcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcclxuICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIFtuYW1lXTogdmFsdWUgfSlcclxuICAgIGlmIChpc0Vycm9yKVxyXG4gICAgICBzZXRFcnJvcihmYWxzZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgaXNVc2VyRXhpc3RlZCA9IHVzZXJzU3RhdGUuZmluZCh1c2VyID0+IHVzZXIudXNlck5hbWUgPT09IGZvcm1EYXRhLnVzZXJOYW1lKVxyXG5cclxuICAgIGlmIChpc05hTigrZm9ybURhdGE/LmJyYW5jaElkKSkge1xyXG4gICAgICBzZXRFcnJvcih0cnVlKVxyXG4gICAgICBzZXRFcnJvck1lc3NhZ2UoJ0JyYW5jaCBJRCBzaG91bGQgYmUgbnVtYmVycy4nKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1VzZXJFeGlzdGVkKSB7XHJcbiAgICAgIHNldEVycm9yKHRydWUpXHJcbiAgICAgIHNldEVycm9yTWVzc2FnZSgnVXNlciBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQuJylcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaChzZXRVc2Vyc1N0YXRlKFsuLi51c2Vyc1N0YXRlLCB7Li4uZm9ybURhdGEsIGJyYW5jaElkOiArZm9ybURhdGE/LmJyYW5jaElkfV0pKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlci1zb2xpZCBib3JkZXItMiBiZy1ncmF5LTIwMCBwLTVcIj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJyYW5jaCBpZFwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwiYnJhbmNoSWRcIlxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmJyYW5jaElkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJ1c2VyTmFtZVwiXHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEudXNlck5hbWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5maXJzdE5hbWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJNaWRkbGUgTmFtZVwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwibWlkZGxlTmFtZVwiXHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubWlkZGxlTmFtZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmxhc3ROYW1lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUG9zaXRpb25cIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cInBvc2l0aW9uXCJcclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wb3NpdGlvbn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGFsaWduLWNlbnRlclwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRGb3JtRGF0YShGT1JNX0RBVEFfUFJPUFMpfSBsYWJlbD1cIlJFU0VUXCIgY2xhc3NOYW1lPVwidy0zMiBiZy1zbGF0ZS0xMDAgcm91bmRlZC0yeGxcIiAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbGFiZWw9XCJBRERcIiBjbGFzc05hbWU9XCJ3LTMyIHJvdW5kZWQtMnhsIG1sLTNcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpc0Vycm9yID8gPEVycm9yQWxlcnQgdGV4dD17ZXJyb3JNZXNzYWdlfSBjbGFzc05hbWU9XCJtdC0zXCIgLz4gOiBudWxsfVxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBZGRVc2VyRm9ybTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInNldFVzZXJzU3RhdGUiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiSW5wdXQiLCJCdXR0b24iLCJFcnJvckFsZXJ0IiwiRk9STV9EQVRBX1BST1BTIiwiYnJhbmNoSWQiLCJ1c2VyTmFtZSIsInBhc3N3b3JkIiwiZmlyc3ROYW1lIiwibWlkZGxlTmFtZSIsImxhc3ROYW1lIiwicG9zaXRpb24iLCJBZGRVc2VyRm9ybSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJpc0Vycm9yIiwic2V0RXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJ1c2Vyc1N0YXRlIiwic3RhdGUiLCJhdXRoIiwiZGlzcGF0Y2giLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJpc1VzZXJFeGlzdGVkIiwiZmluZCIsInVzZXIiLCJpc05hTiIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJvbkNsaWNrIiwibGFiZWwiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AddUserForm.tsx\n"));

/***/ })

});