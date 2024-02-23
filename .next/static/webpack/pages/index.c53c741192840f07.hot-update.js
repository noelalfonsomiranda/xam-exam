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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_authSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/authSlice */ \"./src/store/authSlice.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Input */ \"./src/components/Input.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _components_ErrorAlert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ErrorAlert */ \"./src/components/ErrorAlert.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst LoginPage = (param)=>{\n    let { onSubmit } = param;\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        branchId: \"\",\n        username: \"\",\n        password: \"\"\n    });\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const usersState = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.auth.usersState);\n    console.log(\"asd ~ usersState:\", usersState);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        handleFetch();\n    }, []);\n    const handleFetch = async ()=>{\n        const response = await fetch(\"/api/users_data\", {\n            method: \"GET\"\n        });\n        const data = await response.json();\n        console.log(\"asd ~ handleFetch ~ data:\", data.users);\n        (0,_store_authSlice__WEBPACK_IMPORTED_MODULE_3__.setUsersState)(data.users || []);\n    };\n    const onLogin = ()=>{\n        dispatch((0,_store_authSlice__WEBPACK_IMPORTED_MODULE_3__.setAuthState)(true));\n        router.push(\"/dashboard\");\n    };\n    function handleInputChange(event) {\n        const { name, value } = event.target;\n        setFormData({\n            ...formData,\n            [name]: value\n        });\n    }\n    // const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {\n    //   e.preventDefault();\n    //   try {\n    //     const response = await axios.post('http://localhost:8080/apiv1/signup', formData);\n    //     console.log(response);\n    //   }catch (error) {\n    //     console.error(error);\n    //   }\n    // }\n    function handleSubmit(event) {\n        event.preventDefault();\n        // onSubmit(formData);\n        onLogin();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"h-screen flex justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-1/4 border-solid border-2 border-black p-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-5 text-xl\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            placeholder: \"Branch id\",\n                            type: \"text\",\n                            name: \"branchId\",\n                            value: formData.branchId,\n                            onChange: handleInputChange,\n                            className: \"mb-3\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            placeholder: \"User name\",\n                            type: \"text\",\n                            name: \"username\",\n                            value: formData.username,\n                            onChange: handleInputChange,\n                            className: \"mb-3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            placeholder: \"Password\",\n                            type: \"password\",\n                            name: \"password\",\n                            value: formData.password,\n                            onChange: handleInputChange,\n                            className: \"mb-3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            type: \"submit\",\n                            label: \"LOGIN\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorAlert__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"mt-3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginPage, \"7J6iwUu65Zqi5mW57QYklHPyYK0=\", false, function() {\n    return [\n        _store__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _store__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch\n    ];\n});\n_c = LoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1g7QUFDd0I7QUFDUDtBQUVsQjtBQUNFO0FBQ1E7QUFnQmpELE1BQU1XLFlBQXNDO1FBQUMsRUFBQ0MsUUFBUSxFQUFDOztJQUNyRCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBLENBQVc7UUFBRWMsVUFBVTtRQUFJQyxVQUFVO1FBQUlDLFVBQVU7SUFBRztJQUM5RixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2xCLCtDQUFRQSxDQUFRLENBQUM7SUFFM0MsTUFBTW1CLGFBQWFiLHNEQUFjQSxDQUFDLENBQUNjLFFBQVVBLE1BQU1DLElBQUksQ0FBQ0YsVUFBVTtJQUNsRUcsUUFBUUMsR0FBRyxDQUFDLHFCQUFxQko7SUFFakMsTUFBTUssU0FBU3RCLHNEQUFTQTtJQUN4QixNQUFNdUIsV0FBV3BCLHNEQUFjQTtJQUUvQkosZ0RBQVNBLENBQUM7UUFDVnlCO0lBQ0QsR0FBRyxFQUFFO0lBRUwsTUFBTUEsY0FBYztRQUNuQixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sbUJBQW1CO1lBQUNDLFFBQVE7UUFBSztRQUU1RCxNQUFNQyxPQUFPLE1BQU1ILFNBQVNJLElBQUk7UUFDaENULFFBQVFDLEdBQUcsQ0FBQyw2QkFBNkJPLEtBQUtiLEtBQUs7UUFDckRiLCtEQUFhQSxDQUFDMEIsS0FBS2IsS0FBSyxJQUFJLEVBQUU7SUFDL0I7SUFFQyxNQUFNZSxVQUFVO1FBQ2RQLFNBQVN0Qiw4REFBWUEsQ0FBQztRQUN4QnFCLE9BQU9TLElBQUksQ0FBQztJQUNiO0lBRUMsU0FBU0Msa0JBQWtCQyxLQUEwQztRQUNuRSxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdGLE1BQU1HLE1BQU07UUFDcEN6QixZQUFZO1lBQUUsR0FBR0QsUUFBUTtZQUFFLENBQUN3QixLQUFLLEVBQUVDO1FBQU07SUFDM0M7SUFFQSwwRUFBMEU7SUFDMUUsd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVix5RkFBeUY7SUFDekYsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsTUFBTTtJQUNOLElBQUk7SUFFSixTQUFTRSxhQUFhSixLQUF1QztRQUMzREEsTUFBTUssY0FBYztRQUNwQixzQkFBc0I7UUFDdEJSO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1M7UUFBS0MsV0FBVTtrQkFDZCw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNDOzhCQUNDLDRFQUFDQzt3QkFBRUYsV0FBVTtrQ0FBZTs7Ozs7Ozs7Ozs7OEJBRzlCLDhEQUFDRztvQkFBS2xDLFVBQVU0Qjs7c0NBQ2QsOERBQUNoQyx5REFBS0E7NEJBQ0p1QyxhQUFZOzRCQUNaQyxNQUFLOzRCQUNMWCxNQUFLOzRCQUNMQyxPQUFPekIsU0FBU0UsUUFBUTs0QkFDeEJrQyxVQUFVZDs0QkFDVlEsV0FBVTs0QkFDVk8sUUFBUTs7Ozs7O3NDQUVWLDhEQUFDMUMseURBQUtBOzRCQUNKdUMsYUFBWTs0QkFDWkMsTUFBSzs0QkFDTFgsTUFBSzs0QkFDTEMsT0FBT3pCLFNBQVNHLFFBQVE7NEJBQ3hCaUMsVUFBVWQ7NEJBQ1ZRLFdBQVU7Ozs7OztzQ0FFWiw4REFBQ25DLHlEQUFLQTs0QkFDSnVDLGFBQVk7NEJBQ1pDLE1BQUs7NEJBQ0xYLE1BQUs7NEJBQ0xDLE9BQU96QixTQUFTSSxRQUFROzRCQUN4QmdDLFVBQVVkOzRCQUNWUSxXQUFVOzs7Ozs7c0NBRVosOERBQUNsQywwREFBTUE7NEJBQUN1QyxNQUFLOzRCQUFTRyxPQUFNOzs7Ozs7c0NBQzVCLDhEQUFDekMsOERBQVVBOzRCQUFDaUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEM7R0F2Rk1oQzs7UUFJZUosa0RBQWNBO1FBR2xCSixrREFBU0E7UUFDUEcsa0RBQWNBOzs7S0FSM0JLO0FBd0ZOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHNldEF1dGhTdGF0ZSwgc2V0VXNlcnNTdGF0ZSB9IGZyb20gXCJAL3N0b3JlL2F1dGhTbGljZVwiO1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiQC9zdG9yZVwiO1xyXG5cclxuaW1wb3J0IElucHV0IGZyb20gXCJAL2NvbXBvbmVudHMvSW5wdXRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQC9jb21wb25lbnRzL0J1dHRvblwiO1xyXG5pbXBvcnQgRXJyb3JBbGVydCBmcm9tIFwiQC9jb21wb25lbnRzL0Vycm9yQWxlcnRcIjtcclxuXHJcbmV4cG9ydCB0eXBlIExvZ2luUGFnZVByb3BzID0ge1xyXG4gIG9uU3VibWl0OiAoZGF0YTogRm9ybURhdGEpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgRm9ybURhdGEge1xyXG4gIGJyYW5jaElkOiBzdHJpbmc7XHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVXNlcnMge1xyXG4gIGRhdGE6IGFueVxyXG59XHJcblxyXG5jb25zdCBMb2dpblBhZ2U6IFJlYWN0LkZDPExvZ2luUGFnZVByb3BzPiA9ICh7b25TdWJtaXR9KSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZTxGb3JtRGF0YT4oeyBicmFuY2hJZDogJycsIHVzZXJuYW1lOiAnJywgcGFzc3dvcmQ6ICcnIH0pO1xyXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGU8VXNlcnM+KHt9IGFzIFVzZXJzKTtcclxuXHJcbiAgY29uc3QgdXNlcnNTdGF0ZSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aC51c2Vyc1N0YXRlKTtcclxuICBjb25zb2xlLmxvZyhcImFzZCB+IHVzZXJzU3RhdGU6XCIsIHVzZXJzU3RhdGUpXHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGhhbmRsZUZldGNoKClcclxuXHR9LCBbXSlcclxuXHJcblx0Y29uc3QgaGFuZGxlRmV0Y2ggPSBhc3luYyAoKSA9PiB7XHJcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3VzZXJzX2RhdGEnLCB7bWV0aG9kOiAnR0VUJ30pXHJcbiBcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgIGNvbnNvbGUubG9nKFwiYXNkIH4gaGFuZGxlRmV0Y2ggfiBkYXRhOlwiLCBkYXRhLnVzZXJzKVxyXG5cdFx0c2V0VXNlcnNTdGF0ZShkYXRhLnVzZXJzIHx8IFtdKVxyXG5cdH1cclxuXHJcbiAgY29uc3Qgb25Mb2dpbiA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldEF1dGhTdGF0ZSh0cnVlKSlcclxuXHRcdHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJylcclxuXHR9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW25hbWVdOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgLy8gICB0cnkge1xyXG4gIC8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGl2MS9zaWdudXAnLCBmb3JtRGF0YSk7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAvLyAgIH1jYXRjaCAoZXJyb3IpIHtcclxuICAvLyAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gb25TdWJtaXQoZm9ybURhdGEpO1xyXG4gICAgb25Mb2dpbigpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNCBib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHAtNVwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi01IHRleHQteGxcIj5Mb2dpbjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCcmFuY2ggaWRcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJicmFuY2hJZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5icmFuY2hJZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VyIG5hbWVcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS51c2VybmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBsYWJlbD1cIkxPR0lOXCIgLz5cclxuICAgICAgICAgIDxFcnJvckFsZXJ0IGNsYXNzTmFtZT1cIm10LTNcIiAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTG9naW5QYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwic2V0QXV0aFN0YXRlIiwic2V0VXNlcnNTdGF0ZSIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJJbnB1dCIsIkJ1dHRvbiIsIkVycm9yQWxlcnQiLCJMb2dpblBhZ2UiLCJvblN1Ym1pdCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJicmFuY2hJZCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ1c2VycyIsInNldFVzZXJzIiwidXNlcnNTdGF0ZSIsInN0YXRlIiwiYXV0aCIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJkaXNwYXRjaCIsImhhbmRsZUZldGNoIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImRhdGEiLCJqc29uIiwib25Mb2dpbiIsInB1c2giLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwicCIsImZvcm0iLCJwbGFjZWhvbGRlciIsInR5cGUiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwibGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});