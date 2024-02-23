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

/***/ "./src/components/LoginForm.tsx":
/*!**************************************!*\
  !*** ./src/components/LoginForm.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _store_authSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/authSlice */ \"./src/store/authSlice.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Input */ \"./src/components/Input.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _components_ErrorAlert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ErrorAlert */ \"./src/components/ErrorAlert.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst LoginForm = ()=>{\n    _s();\n    const [loginData, setLoginData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        branchId: \"\",\n        userName: \"\",\n        password: \"\"\n    });\n    const [isError, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { usersState, sessionState } = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.auth);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!usersState.length) handleFetch();\n    }, [\n        usersState\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (sessionState === null || sessionState === void 0 ? void 0 : sessionState.userName) {\n            router.push(\"/dashboard\");\n        }\n    }, [\n        sessionState\n    ]);\n    const handleFetch = async ()=>{\n        // const response = await fetch('/api/users_data', {method: 'GET'})\n        const response = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"/api/users_data\", {\n            method: \"GET\"\n        });\n        console.log(\"asd ~ handleFetch ~ response:\", response.data);\n    // const data = await response.json()\n    // dispatch(setUsersState(data.users || []))\n    };\n    function handleInputChange(event) {\n        const { name, value } = event.target;\n        setLoginData({\n            ...loginData,\n            [name]: value\n        });\n        if (isError) setError(false);\n    }\n    function handleSubmit(event) {\n        event.preventDefault();\n        // avoid any function\n        if (isError) return true;\n        const session = usersState.find((user)=>user.userName === loginData.userName);\n        // request\n        usersState.find((user)=>{\n            if (loginData.userName === user.userName && loginData.password === user.password && +loginData.branchId === user.branchId) {\n                // response\n                dispatch((0,_store_authSlice__WEBPACK_IMPORTED_MODULE_3__.setSessionState)(session));\n                router.push(\"/dashboard\");\n            } else {\n                setError(true);\n            }\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                placeholder: \"Branch id\",\n                type: \"text\",\n                name: \"branchId\",\n                value: loginData.branchId,\n                onChange: handleInputChange,\n                className: \"mb-3\",\n                required: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\LoginForm.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                placeholder: \"User name\",\n                type: \"text\",\n                name: \"userName\",\n                value: loginData.userName,\n                onChange: handleInputChange,\n                className: \"mb-3\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\LoginForm.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                placeholder: \"Password\",\n                type: \"password\",\n                name: \"password\",\n                value: loginData.password,\n                onChange: handleInputChange,\n                className: \"mb-3\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\LoginForm.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                type: \"submit\",\n                label: \"LOGIN\",\n                className: \"w-full\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\LoginForm.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined),\n            isError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorAlert__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                className: \"mt-3\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\LoginForm.tsx\",\n                lineNumber: 108,\n                columnNumber: 18\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\LoginForm.tsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginForm, \"huZGIE0nfNc0TnThYipe8LINRcQ=\", false, function() {\n    return [\n        _store__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _store__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch\n    ];\n});\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNYO0FBQ2Q7QUFFeUM7QUFDVjtBQUVsQjtBQUNFO0FBQ1E7QUFVakQsTUFBTVcsWUFBc0M7O0lBQzFDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBWTtRQUFFYSxVQUFVO1FBQUlDLFVBQVU7UUFBSUMsVUFBVTtJQUFHO0lBQ2pHLE1BQU0sQ0FBQ0MsU0FBU0MsU0FBUyxHQUFHakIsK0NBQVFBLENBQUM7SUFFckMsTUFBTSxFQUFDa0IsVUFBVSxFQUFFQyxZQUFZLEVBQUMsR0FBR2Isc0RBQWNBLENBQUMsQ0FBQ2MsUUFBVUEsTUFBTUMsSUFBSTtJQUV2RSxNQUFNQyxTQUFTcEIsc0RBQVNBO0lBQ3hCLE1BQU1xQixXQUFXbEIsc0RBQWNBO0lBRS9CSixnREFBU0EsQ0FBQztRQUNSLElBQUksQ0FBQ2lCLFdBQVdNLE1BQU0sRUFDdEJDO0lBQ0gsR0FBRztRQUFDUDtLQUFXO0lBRWRqQixnREFBU0EsQ0FBQztRQUNSLElBQUlrQix5QkFBQUEsbUNBQUFBLGFBQWNMLFFBQVEsRUFBRTtZQUMxQlEsT0FBT0ksSUFBSSxDQUFDO1FBQ2Q7SUFDRixHQUFHO1FBQUNQO0tBQWE7SUFFbEIsTUFBTU0sY0FBYztRQUNuQixtRUFBbUU7UUFFakUsTUFBTUUsV0FBVyxNQUFNeEIsaURBQVMsQ0FBQyxtQkFBbUI7WUFBQzBCLFFBQVE7UUFBSztRQUNsRUMsUUFBUUMsR0FBRyxDQUFDLGlDQUFpQ0osU0FBU0ssSUFBSTtJQUMxRCxxQ0FBcUM7SUFDdkMsNENBQTRDO0lBQzdDO0lBRUMsU0FBU0Msa0JBQWtCQyxLQUEwQztRQUNuRSxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdGLE1BQU1HLE1BQU07UUFDcEN6QixhQUFhO1lBQUUsR0FBR0QsU0FBUztZQUFFLENBQUN3QixLQUFLLEVBQUVDO1FBQU07UUFDM0MsSUFBSXBCLFNBQ0ZDLFNBQVM7SUFDYjtJQUVBLFNBQVNxQixhQUFhSixLQUF1QztRQUMzREEsTUFBTUssY0FBYztRQUVwQixxQkFBcUI7UUFDckIsSUFBSXZCLFNBQ0YsT0FBTztRQUVULE1BQU13QixVQUFVdEIsV0FBV3VCLElBQUksQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBSzVCLFFBQVEsS0FBS0gsVUFBVUcsUUFBUTtRQUU1RSxVQUFVO1FBQ1ZJLFdBQVd1QixJQUFJLENBQUNDLENBQUFBO1lBQ2QsSUFBSS9CLFVBQVVHLFFBQVEsS0FBSzRCLEtBQUs1QixRQUFRLElBQ3RDSCxVQUFVSSxRQUFRLEtBQUsyQixLQUFLM0IsUUFBUSxJQUNwQyxDQUFDSixVQUFVRSxRQUFRLEtBQUs2QixLQUFLN0IsUUFBUSxFQUNuQztnQkFDRixXQUFXO2dCQUNYVSxTQUFTbkIsaUVBQWVBLENBQUNvQztnQkFDMUJsQixPQUFPSSxJQUFJLENBQUM7WUFDYixPQUFPO2dCQUNMVCxTQUFTO1lBQ1g7UUFDRjtJQUNGO0lBRUEscUJBQ0UsOERBQUMwQjtRQUFLQyxVQUFVTjs7MEJBQ2QsOERBQUMvQix5REFBS0E7Z0JBQ0pzQyxhQUFZO2dCQUNaQyxNQUFLO2dCQUNMWCxNQUFLO2dCQUNMQyxPQUFPekIsVUFBVUUsUUFBUTtnQkFDekJrQyxVQUFVZDtnQkFDVmUsV0FBVTtnQkFDVkMsUUFBUTs7Ozs7OzBCQUVWLDhEQUFDMUMseURBQUtBO2dCQUNKc0MsYUFBWTtnQkFDWkMsTUFBSztnQkFDTFgsTUFBSztnQkFDTEMsT0FBT3pCLFVBQVVHLFFBQVE7Z0JBQ3pCaUMsVUFBVWQ7Z0JBQ1ZlLFdBQVU7Ozs7OzswQkFFWiw4REFBQ3pDLHlEQUFLQTtnQkFDSnNDLGFBQVk7Z0JBQ1pDLE1BQUs7Z0JBQ0xYLE1BQUs7Z0JBQ0xDLE9BQU96QixVQUFVSSxRQUFRO2dCQUN6QmdDLFVBQVVkO2dCQUNWZSxXQUFVOzs7Ozs7MEJBRVosOERBQUN4QywwREFBTUE7Z0JBQUNzQyxNQUFLO2dCQUFTSSxPQUFNO2dCQUFRRixXQUFVOzs7Ozs7WUFDN0NoQyx3QkFBVSw4REFBQ1AsOERBQVVBO2dCQUFDdUMsV0FBVTs7Ozs7NEJBQVk7Ozs7Ozs7QUFHbkQ7R0EzRk10Qzs7UUFJK0JKLGtEQUFjQTtRQUVsQ0osa0RBQVNBO1FBQ1BHLGtEQUFjQTs7O0tBUDNCSztBQTRGTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Mb2dpbkZvcm0udHN4P2VlZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHsgc2V0VXNlcnNTdGF0ZSwgc2V0U2Vzc2lvblN0YXRlIH0gZnJvbSBcIkAvc3RvcmUvYXV0aFNsaWNlXCI7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIkAvY29tcG9uZW50cy9JbnB1dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvQnV0dG9uXCI7XHJcbmltcG9ydCBFcnJvckFsZXJ0IGZyb20gXCJAL2NvbXBvbmVudHMvRXJyb3JBbGVydFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgTG9naW5Gb3JtUHJvcHMgPSB7fTtcclxuXHJcbmludGVyZmFjZSBMb2dpbkRhdGEge1xyXG4gIGJyYW5jaElkOiBzdHJpbmc7XHJcbiAgdXNlck5hbWU6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBMb2dpbkZvcm06IFJlYWN0LkZDPExvZ2luRm9ybVByb3BzPiA9ICgpID0+IHtcclxuICBjb25zdCBbbG9naW5EYXRhLCBzZXRMb2dpbkRhdGFdID0gdXNlU3RhdGU8TG9naW5EYXRhPih7IGJyYW5jaElkOiAnJywgdXNlck5hbWU6ICcnLCBwYXNzd29yZDogJycgfSk7XHJcbiAgY29uc3QgW2lzRXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCB7dXNlcnNTdGF0ZSwgc2Vzc2lvblN0YXRlfSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aClcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCF1c2Vyc1N0YXRlLmxlbmd0aClcclxuXHRcdCAgaGFuZGxlRmV0Y2goKVxyXG5cdH0sIFt1c2Vyc1N0YXRlXSlcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNlc3Npb25TdGF0ZT8udXNlck5hbWUpIHtcclxuICAgICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKVxyXG4gICAgfVxyXG4gIH0sIFtzZXNzaW9uU3RhdGVdKVxyXG5cclxuXHRjb25zdCBoYW5kbGVGZXRjaCA9IGFzeW5jICgpID0+IHtcclxuXHRcdC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvdXNlcnNfZGF0YScsIHttZXRob2Q6ICdHRVQnfSlcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS91c2Vyc19kYXRhJywge21ldGhvZDogJ0dFVCd9KVxyXG4gICAgY29uc29sZS5sb2coXCJhc2QgfiBoYW5kbGVGZXRjaCB+IHJlc3BvbnNlOlwiLCByZXNwb25zZS5kYXRhKVxyXG4gICAgLy8gY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG5cdFx0Ly8gZGlzcGF0Y2goc2V0VXNlcnNTdGF0ZShkYXRhLnVzZXJzIHx8IFtdKSlcclxuXHR9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgc2V0TG9naW5EYXRhKHsgLi4ubG9naW5EYXRhLCBbbmFtZV06IHZhbHVlIH0pO1xyXG4gICAgaWYgKGlzRXJyb3IpXHJcbiAgICAgIHNldEVycm9yKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pikge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBhdm9pZCBhbnkgZnVuY3Rpb25cclxuICAgIGlmIChpc0Vycm9yKVxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG5cclxuICAgIGNvbnN0IHNlc3Npb24gPSB1c2Vyc1N0YXRlLmZpbmQodXNlciA9PiB1c2VyLnVzZXJOYW1lID09PSBsb2dpbkRhdGEudXNlck5hbWUpXHJcblxyXG4gICAgLy8gcmVxdWVzdFxyXG4gICAgdXNlcnNTdGF0ZS5maW5kKHVzZXIgPT4ge1xyXG4gICAgICBpZiAobG9naW5EYXRhLnVzZXJOYW1lID09PSB1c2VyLnVzZXJOYW1lICYmXHJcbiAgICAgICAgbG9naW5EYXRhLnBhc3N3b3JkID09PSB1c2VyLnBhc3N3b3JkICYmXHJcbiAgICAgICAgK2xvZ2luRGF0YS5icmFuY2hJZCA9PT0gdXNlci5icmFuY2hJZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgIC8vIHJlc3BvbnNlXHJcbiAgICAgICAgZGlzcGF0Y2goc2V0U2Vzc2lvblN0YXRlKHNlc3Npb24pKVxyXG5cdCAgICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRFcnJvcih0cnVlKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8SW5wdXRcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkJyYW5jaCBpZFwiXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIG5hbWU9XCJicmFuY2hJZFwiXHJcbiAgICAgICAgdmFsdWU9e2xvZ2luRGF0YS5icmFuY2hJZH1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgLz5cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VyIG5hbWVcIlxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBuYW1lPVwidXNlck5hbWVcIlxyXG4gICAgICAgIHZhbHVlPXtsb2dpbkRhdGEudXNlck5hbWV9XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1iLTNcIlxyXG4gICAgICAvPlxyXG4gICAgICA8SW5wdXRcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgdmFsdWU9e2xvZ2luRGF0YS5wYXNzd29yZH1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGxhYmVsPVwiTE9HSU5cIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxyXG4gICAgICB7aXNFcnJvciA/IDxFcnJvckFsZXJ0IGNsYXNzTmFtZT1cIm10LTNcIiAvPiA6IG51bGx9XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiYXhpb3MiLCJzZXRTZXNzaW9uU3RhdGUiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiSW5wdXQiLCJCdXR0b24iLCJFcnJvckFsZXJ0IiwiTG9naW5Gb3JtIiwibG9naW5EYXRhIiwic2V0TG9naW5EYXRhIiwiYnJhbmNoSWQiLCJ1c2VyTmFtZSIsInBhc3N3b3JkIiwiaXNFcnJvciIsInNldEVycm9yIiwidXNlcnNTdGF0ZSIsInNlc3Npb25TdGF0ZSIsInN0YXRlIiwiYXV0aCIsInJvdXRlciIsImRpc3BhdGNoIiwibGVuZ3RoIiwiaGFuZGxlRmV0Y2giLCJwdXNoIiwicmVzcG9uc2UiLCJnZXQiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInNlc3Npb24iLCJmaW5kIiwidXNlciIsImZvcm0iLCJvblN1Ym1pdCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm9uQ2hhbmdlIiwiY2xhc3NOYW1lIiwicmVxdWlyZWQiLCJsYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/LoginForm.tsx\n"));

/***/ })

});