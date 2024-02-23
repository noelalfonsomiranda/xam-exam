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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_authSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/authSlice */ \"./src/store/authSlice.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Input */ \"./src/components/Input.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _components_ErrorAlert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ErrorAlert */ \"./src/components/ErrorAlert.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst FORM_DATA_PROPS = {\n    branchId: \"\",\n    userName: \"\",\n    password: \"\",\n    firstName: \"\",\n    middleName: \"\",\n    lastName: \"\",\n    position: \"\"\n};\nconst AddUserForm = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(FORM_DATA_PROPS);\n    const [isError, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { usersState } = (0,_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.auth);\n    const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    function handleInputChange(event) {\n        const { name, value } = event.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n        if (isError) setError(false);\n    }\n    function handleSubmit(event) {\n        event.preventDefault();\n        const isUserExisted = usersState.find((user)=>user.userName === formData.userName);\n        if (isNaN(+(formData === null || formData === void 0 ? void 0 : formData.branchId))) {\n            setError(true);\n            setErrorMessage(\"Branch ID should be numbers.\");\n            return false;\n        }\n        if (isUserExisted) {\n            setError(true);\n            setErrorMessage(\"User is already registered.\");\n            return false;\n        }\n        dispatch((0,_store_authSlice__WEBPACK_IMPORTED_MODULE_2__.setUsersState)([\n            ...usersState,\n            {\n                ...formData,\n                branchId: +(formData === null || formData === void 0 ? void 0 : formData.branchId)\n            }\n        ]));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full border-solid border-2 bg-gray-200 p-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    placeholder: \"Branch id\",\n                    type: \"text\",\n                    name: \"branchId\",\n                    value: formData.branchId,\n                    onChange: handleInputChange,\n                    className: \"mb-3\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    placeholder: \"Username\",\n                    type: \"text\",\n                    name: \"userName\",\n                    value: formData.userName,\n                    onChange: handleInputChange,\n                    className: \"mb-3\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    placeholder: \"First Name\",\n                    type: \"text\",\n                    name: \"firstName\",\n                    value: formData.firstName,\n                    onChange: handleInputChange,\n                    className: \"mb-3\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    placeholder: \"Middle Name\",\n                    type: \"text\",\n                    name: \"middleName\",\n                    value: formData.middleName,\n                    onChange: handleInputChange,\n                    className: \"mb-3\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    placeholder: \"Last Name\",\n                    type: \"text\",\n                    name: \"lastName\",\n                    value: formData.lastName,\n                    onChange: handleInputChange,\n                    className: \"mb-3\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    placeholder: \"Position\",\n                    type: \"text\",\n                    name: \"position\",\n                    value: formData.position,\n                    onChange: handleInputChange,\n                    className: \"mb-3\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    placeholder: \"Password\",\n                    type: \"password\",\n                    name: \"password\",\n                    value: formData.password,\n                    onChange: handleInputChange,\n                    className: \"mb-3\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-end align-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            onClick: ()=>setFormData(FORM_DATA_PROPS),\n                            label: \"RESET\",\n                            className: \"w-32 bg-slate-100 rounded-2xl\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n                            lineNumber: 130,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            type: \"submit\",\n                            label: \"ADD\",\n                            className: \"w-32 rounded-2xl ml-3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n                    lineNumber: 129,\n                    columnNumber: 9\n                }, undefined),\n                isError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorAlert__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    text: errorMessage,\n                    className: \"mt-3\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n                    lineNumber: 133,\n                    columnNumber: 20\n                }, undefined) : null\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\AddUserForm.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddUserForm, \"aE9FocACprt+rK9D4Sr3uvs/HYQ=\", false, function() {\n    return [\n        _store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _store__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch\n    ];\n});\n_c = AddUserForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddUserForm);\nvar _c;\n$RefreshReg$(_c, \"AddUserForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNsQyx5REFBS0E7b0JBQ0pxQyxhQUFZO29CQUNaQyxNQUFLO29CQUNMZCxNQUFLO29CQUNMQyxPQUFPYixTQUFTTixRQUFRO29CQUN4QmlDLFVBQVVqQjtvQkFDVlksV0FBVTtvQkFDVk0sUUFBUTs7Ozs7OzhCQUVWLDhEQUFDUDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNqQywwREFBTUE7NEJBQUN3QyxTQUFTLElBQU01QixZQUFZVjs0QkFBa0J1QyxPQUFNOzRCQUFRUixXQUFVOzs7Ozs7c0NBQzdFLDhEQUFDakMsMERBQU1BOzRCQUFDcUMsTUFBSzs0QkFBU0ksT0FBTTs0QkFBTVIsV0FBVTs7Ozs7Ozs7Ozs7O2dCQUU3Q3BCLHdCQUFVLDhEQUFDWiw4REFBVUE7b0JBQUN5QyxNQUFNM0I7b0JBQWNrQixXQUFVOzs7OztnQ0FBWTs7Ozs7Ozs7Ozs7O0FBSXpFO0dBMUdNdkI7O1FBS2lCWixrREFBY0E7UUFFbEJELGtEQUFjQTs7O0tBUDNCYTtBQTJHTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BZGRVc2VyRm9ybS50c3g/ZDNkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBzZXRVc2Vyc1N0YXRlLCBzZXRTZXNzaW9uU3RhdGUgfSBmcm9tIFwiQC9zdG9yZS9hdXRoU2xpY2VcIjtcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIkAvc3RvcmVcIjtcclxuXHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiQC9jb21wb25lbnRzL0lucHV0XCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9CdXR0b25cIjtcclxuaW1wb3J0IEVycm9yQWxlcnQgZnJvbSBcIkAvY29tcG9uZW50cy9FcnJvckFsZXJ0XCI7XHJcblxyXG5leHBvcnQgdHlwZSBBZGRVc2VyRm9ybVByb3BzID0ge307XHJcblxyXG5pbnRlcmZhY2UgRm9ybURhdGEge1xyXG4gIGJyYW5jaElkOiBzdHJpbmc7XHJcbiAgdXNlck5hbWU6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIG1pZGRsZU5hbWU6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIHBvc2l0aW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEZPUk1fREFUQV9QUk9QUyA9IHtcclxuICBicmFuY2hJZDogJycsXHJcbiAgdXNlck5hbWU6ICcnLFxyXG4gIHBhc3N3b3JkOiAnJyxcclxuICBmaXJzdE5hbWU6ICcnLFxyXG4gIG1pZGRsZU5hbWU6ICcnLFxyXG4gIGxhc3ROYW1lOiAnJyxcclxuICBwb3NpdGlvbjogJydcclxufVxyXG5cclxuY29uc3QgQWRkVXNlckZvcm06IFJlYWN0LkZDPEFkZFVzZXJGb3JtUHJvcHM+ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGU8Rm9ybURhdGE+KEZPUk1fREFUQV9QUk9QUyk7XHJcbiAgY29uc3QgW2lzRXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgY29uc3Qge3VzZXJzU3RhdGV9ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoKVxyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW25hbWVdOiB2YWx1ZSB9KVxyXG4gICAgaWYgKGlzRXJyb3IpXHJcbiAgICAgIHNldEVycm9yKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pikge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBpc1VzZXJFeGlzdGVkID0gdXNlcnNTdGF0ZS5maW5kKHVzZXIgPT4gdXNlci51c2VyTmFtZSA9PT0gZm9ybURhdGEudXNlck5hbWUpXHJcblxyXG4gICAgaWYgKGlzTmFOKCtmb3JtRGF0YT8uYnJhbmNoSWQpKSB7XHJcbiAgICAgIHNldEVycm9yKHRydWUpXHJcbiAgICAgIHNldEVycm9yTWVzc2FnZSgnQnJhbmNoIElEIHNob3VsZCBiZSBudW1iZXJzLicpXHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1VzZXJFeGlzdGVkKSB7XHJcbiAgICAgIHNldEVycm9yKHRydWUpXHJcbiAgICAgIHNldEVycm9yTWVzc2FnZSgnVXNlciBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQuJylcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGF0Y2goc2V0VXNlcnNTdGF0ZShbLi4udXNlcnNTdGF0ZSwgey4uLmZvcm1EYXRhLCBicmFuY2hJZDogK2Zvcm1EYXRhPy5icmFuY2hJZH1dKSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItc29saWQgYm9yZGVyLTIgYmctZ3JheS0yMDAgcC01XCI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJCcmFuY2ggaWRcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cImJyYW5jaElkXCJcclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5icmFuY2hJZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTNcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwidXNlck5hbWVcIlxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnVzZXJOYW1lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZmlyc3ROYW1lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWlkZGxlIE5hbWVcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cIm1pZGRsZU5hbWVcIlxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLm1pZGRsZU5hbWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5sYXN0TmFtZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBvc2l0aW9uXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJwb3NpdGlvblwiXHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucG9zaXRpb259XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTNcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBhbGlnbi1jZW50ZXJcIj5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0Rm9ybURhdGEoRk9STV9EQVRBX1BST1BTKX0gbGFiZWw9XCJSRVNFVFwiIGNsYXNzTmFtZT1cInctMzIgYmctc2xhdGUtMTAwIHJvdW5kZWQtMnhsXCIgLz5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGxhYmVsPVwiQUREXCIgY2xhc3NOYW1lPVwidy0zMiByb3VuZGVkLTJ4bCBtbC0zXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7aXNFcnJvciA/IDxFcnJvckFsZXJ0IHRleHQ9e2Vycm9yTWVzc2FnZX0gY2xhc3NOYW1lPVwibXQtM1wiIC8+IDogbnVsbH1cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQWRkVXNlckZvcm07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzZXRVc2Vyc1N0YXRlIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsIklucHV0IiwiQnV0dG9uIiwiRXJyb3JBbGVydCIsIkZPUk1fREFUQV9QUk9QUyIsImJyYW5jaElkIiwidXNlck5hbWUiLCJwYXNzd29yZCIsImZpcnN0TmFtZSIsIm1pZGRsZU5hbWUiLCJsYXN0TmFtZSIsInBvc2l0aW9uIiwiQWRkVXNlckZvcm0iLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiaXNFcnJvciIsInNldEVycm9yIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwidXNlcnNTdGF0ZSIsInN0YXRlIiwiYXV0aCIsImRpc3BhdGNoIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiaXNVc2VyRXhpc3RlZCIsImZpbmQiLCJ1c2VyIiwiaXNOYU4iLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwib25DbGljayIsImxhYmVsIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AddUserForm.tsx\n"));

/***/ })

});