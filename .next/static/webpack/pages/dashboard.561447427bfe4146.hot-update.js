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

/***/ "./src/components/UsersTable.tsx":
/*!***************************************!*\
  !*** ./src/components/UsersTable.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst UsersTable = ()=>{\n    _s();\n    const [loginData, setLoginData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        branchId: \"\",\n        userName: \"\",\n        password: \"\"\n    });\n    const [isError, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { usersState, sessionState } = (0,_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.auth);\n    console.log(\"asd ~ sessionState:\", sessionState);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    // useEffect(() => {\n    // \thandleFetch()\n    // }, [])\n    // useEffect(() => {\n    //   if (sessionState?.userName) {\n    //     router.push('/dashboard')\n    //   }\n    // }, [sessionState])\n    // const handleFetch = async () => {\n    // \tconst response = await fetch('/api/users_data', {method: 'GET'})\n    //   const data = await response.json()\n    // \tdispatch(setUsersState(data.users || []))\n    // }\n    // function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {\n    //   const { name, value } = event.target;\n    //   setLoginData({ ...loginData, [name]: value });\n    //   if (isError)\n    //     setError(false)\n    // }\n    // function handleSubmit(event: React.FormEvent<HTMLFormElement>) {\n    //   event.preventDefault();\n    //   const session = usersState.find(user => user.userName === loginData.userName)\n    //   // request\n    //   usersState.find(user => {\n    //     if (loginData.userName === user.userName &&\n    //       loginData.password === user.password &&\n    //       +loginData.branchId === user.branchId\n    //       ) {\n    //       // response\n    //       dispatch(setSessionState(session))\n    //       router.push('/dashboard')\n    //     } else {\n    //       setError(true)\n    //     }\n    //   })\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        className: \"table-auto w-full text-left\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: \"#\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: \"Brand ID\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: \"Username\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: \"Position\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: \"Action\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: \"1\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: \"0000\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: \"testuser\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: \"Malcolm Lockyer\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: \"Dev\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: \"REMOVE\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: \"2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: \"0000\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: \"testuser\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: \"Malcolm Lockyer\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: \"Dev\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: \"REMOVE\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: \"3\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: \"0000\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: \"testuser\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: \"Malcolm Lockyer\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: \"Dev\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: \"REMOVE\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nafmiranda\\\\Desktop\\\\xam-exam\\\\xam-exam\\\\src\\\\components\\\\UsersTable.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UsersTable, \"rP/kdlUJqUDRPryvUUkRnFDcLJg=\", false, function() {\n    return [\n        _store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _store__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch\n    ];\n});\n_c = UsersTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UsersTable);\nvar _c;\n$RefreshReg$(_c, \"UsersTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Vc2Vyc1RhYmxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBQ1g7QUFFaUI7QUFjekQsTUFBTUssYUFBd0M7O0lBQzVDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBWTtRQUFFTyxVQUFVO1FBQUlDLFVBQVU7UUFBSUMsVUFBVTtJQUFHO0lBQ2pHLE1BQU0sQ0FBQ0MsU0FBU0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNLEVBQUNZLFVBQVUsRUFBRUMsWUFBWSxFQUFDLEdBQUdWLHNEQUFjQSxDQUFDLENBQUNXLFFBQVVBLE1BQU1DLElBQUk7SUFDdkVDLFFBQVFDLEdBQUcsQ0FBQyx1QkFBdUJKO0lBRW5DLE1BQU1LLFNBQVNqQixzREFBU0E7SUFDeEIsTUFBTWtCLFdBQVdqQixzREFBY0E7SUFFL0Isb0JBQW9CO0lBQ3JCLGlCQUFpQjtJQUNqQixTQUFTO0lBRVIsb0JBQW9CO0lBQ3BCLGtDQUFrQztJQUNsQyxnQ0FBZ0M7SUFDaEMsTUFBTTtJQUNOLHFCQUFxQjtJQUV0QixvQ0FBb0M7SUFDcEMsb0VBQW9FO0lBRW5FLHVDQUF1QztJQUN4Qyw2Q0FBNkM7SUFDN0MsSUFBSTtJQUVILDJFQUEyRTtJQUMzRSwwQ0FBMEM7SUFDMUMsbURBQW1EO0lBQ25ELGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsSUFBSTtJQUVKLG1FQUFtRTtJQUNuRSw0QkFBNEI7SUFFNUIsa0ZBQWtGO0lBRWxGLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsa0RBQWtEO0lBQ2xELGdEQUFnRDtJQUNoRCw4Q0FBOEM7SUFDOUMsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQiwyQ0FBMkM7SUFDNUMsa0NBQWtDO0lBQ2pDLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLE9BQU87SUFDUCxJQUFJO0lBRUoscUJBQ0UsOERBQUNrQjtRQUFNQyxXQUFVOzswQkFDZiw4REFBQ0M7MEJBQ0MsNEVBQUNDOztzQ0FDQyw4REFBQ0M7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0E7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0E7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0E7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0E7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0E7c0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdSLDhEQUFDQzs7a0NBQ0MsOERBQUNGOzswQ0FDQyw4REFBQ0c7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0E7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0E7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0E7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0E7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0E7MENBQUcsNEVBQUNDOzhDQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FFZCw4REFBQ0o7OzBDQUNDLDhEQUFDRzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQTswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQTswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQTswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQTswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQTswQ0FBRyw0RUFBQ0M7OENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUVkLDhEQUFDSjs7MENBQ0MsOERBQUNHOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNBOzBDQUFHLDRFQUFDQzs4Q0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEI7R0E5Rk12Qjs7UUFJK0JELGtEQUFjQTtRQUdsQ0Ysa0RBQVNBO1FBQ1BDLGtEQUFjQTs7O0tBUjNCRTtBQStGTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Vc2Vyc1RhYmxlLnRzeD8zNzlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgc2V0VXNlcnNTdGF0ZSwgc2V0U2Vzc2lvblN0YXRlIH0gZnJvbSBcIkAvc3RvcmUvYXV0aFNsaWNlXCI7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL3N0b3JlXCI7XHJcblxyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIkAvY29tcG9uZW50cy9JbnB1dFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvQnV0dG9uXCI7XHJcbmltcG9ydCBFcnJvckFsZXJ0IGZyb20gXCJAL2NvbXBvbmVudHMvRXJyb3JBbGVydFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgVXNlcnNUYWJsZVByb3BzID0ge307XHJcblxyXG5pbnRlcmZhY2UgTG9naW5EYXRhIHtcclxuICBicmFuY2hJZDogc3RyaW5nO1xyXG4gIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgVXNlcnNUYWJsZTogUmVhY3QuRkM8VXNlcnNUYWJsZVByb3BzPiA9ICgpID0+IHtcclxuICBjb25zdCBbbG9naW5EYXRhLCBzZXRMb2dpbkRhdGFdID0gdXNlU3RhdGU8TG9naW5EYXRhPih7IGJyYW5jaElkOiAnJywgdXNlck5hbWU6ICcnLCBwYXNzd29yZDogJycgfSk7XHJcbiAgY29uc3QgW2lzRXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCB7dXNlcnNTdGF0ZSwgc2Vzc2lvblN0YXRlfSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aCk7XHJcbiAgY29uc29sZS5sb2coXCJhc2QgfiBzZXNzaW9uU3RhdGU6XCIsIHNlc3Npb25TdGF0ZSlcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdC8vIFx0aGFuZGxlRmV0Y2goKVxyXG5cdC8vIH0sIFtdKVxyXG4gIFxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBpZiAoc2Vzc2lvblN0YXRlPy51c2VyTmFtZSkge1xyXG4gIC8vICAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpXHJcbiAgLy8gICB9XHJcbiAgLy8gfSwgW3Nlc3Npb25TdGF0ZV0pXHJcblxyXG5cdC8vIGNvbnN0IGhhbmRsZUZldGNoID0gYXN5bmMgKCkgPT4ge1xyXG5cdC8vIFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS91c2Vyc19kYXRhJywge21ldGhvZDogJ0dFVCd9KVxyXG5cclxuICAvLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHQvLyBcdGRpc3BhdGNoKHNldFVzZXJzU3RhdGUoZGF0YS51c2VycyB8fCBbXSkpXHJcblx0Ly8gfVxyXG5cclxuICAvLyBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcclxuICAvLyAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcclxuICAvLyAgIHNldExvZ2luRGF0YSh7IC4uLmxvZ2luRGF0YSwgW25hbWVdOiB2YWx1ZSB9KTtcclxuICAvLyAgIGlmIChpc0Vycm9yKVxyXG4gIC8vICAgICBzZXRFcnJvcihmYWxzZSlcclxuICAvLyB9XHJcblxyXG4gIC8vIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pIHtcclxuICAvLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIC8vICAgY29uc3Qgc2Vzc2lvbiA9IHVzZXJzU3RhdGUuZmluZCh1c2VyID0+IHVzZXIudXNlck5hbWUgPT09IGxvZ2luRGF0YS51c2VyTmFtZSlcclxuXHJcbiAgLy8gICAvLyByZXF1ZXN0XHJcbiAgLy8gICB1c2Vyc1N0YXRlLmZpbmQodXNlciA9PiB7XHJcbiAgLy8gICAgIGlmIChsb2dpbkRhdGEudXNlck5hbWUgPT09IHVzZXIudXNlck5hbWUgJiZcclxuICAvLyAgICAgICBsb2dpbkRhdGEucGFzc3dvcmQgPT09IHVzZXIucGFzc3dvcmQgJiZcclxuICAvLyAgICAgICArbG9naW5EYXRhLmJyYW5jaElkID09PSB1c2VyLmJyYW5jaElkXHJcbiAgLy8gICAgICAgKSB7XHJcbiAgLy8gICAgICAgLy8gcmVzcG9uc2VcclxuICAvLyAgICAgICBkaXNwYXRjaChzZXRTZXNzaW9uU3RhdGUoc2Vzc2lvbikpXHJcblx0Ly8gICAgICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKVxyXG4gIC8vICAgICB9IGVsc2Uge1xyXG4gIC8vICAgICAgIHNldEVycm9yKHRydWUpXHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0pXHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlLWF1dG8gdy1mdWxsIHRleHQtbGVmdFwiPlxyXG4gICAgICA8dGhlYWQ+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgPHRoPkJyYW5kIElEPC90aD5cclxuICAgICAgICAgIDx0aD5Vc2VybmFtZTwvdGg+XHJcbiAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICA8dGg+UG9zaXRpb248L3RoPlxyXG4gICAgICAgICAgPHRoPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90aGVhZD5cclxuICAgICAgPHRib2R5PlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0ZD4xPC90ZD5cclxuICAgICAgICAgIDx0ZD4wMDAwPC90ZD5cclxuICAgICAgICAgIDx0ZD50ZXN0dXNlcjwvdGQ+XHJcbiAgICAgICAgICA8dGQ+TWFsY29sbSBMb2NreWVyPC90ZD5cclxuICAgICAgICAgIDx0ZD5EZXY8L3RkPlxyXG4gICAgICAgICAgPHRkPjxidXR0b24+UkVNT1ZFPC9idXR0b24+PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0ZD4yPC90ZD5cclxuICAgICAgICAgIDx0ZD4wMDAwPC90ZD5cclxuICAgICAgICAgIDx0ZD50ZXN0dXNlcjwvdGQ+XHJcbiAgICAgICAgICA8dGQ+TWFsY29sbSBMb2NreWVyPC90ZD5cclxuICAgICAgICAgIDx0ZD5EZXY8L3RkPlxyXG4gICAgICAgICAgPHRkPjxidXR0b24+UkVNT1ZFPC9idXR0b24+PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0ZD4zPC90ZD5cclxuICAgICAgICAgIDx0ZD4wMDAwPC90ZD5cclxuICAgICAgICAgIDx0ZD50ZXN0dXNlcjwvdGQ+XHJcbiAgICAgICAgICA8dGQ+TWFsY29sbSBMb2NreWVyPC90ZD5cclxuICAgICAgICAgIDx0ZD5EZXY8L3RkPlxyXG4gICAgICAgICAgPHRkPjxidXR0b24+UkVNT1ZFPC9idXR0b24+PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3Rib2R5PlxyXG4gICAgPC90YWJsZT5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBVc2Vyc1RhYmxlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsIlVzZXJzVGFibGUiLCJsb2dpbkRhdGEiLCJzZXRMb2dpbkRhdGEiLCJicmFuY2hJZCIsInVzZXJOYW1lIiwicGFzc3dvcmQiLCJpc0Vycm9yIiwic2V0RXJyb3IiLCJ1c2Vyc1N0YXRlIiwic2Vzc2lvblN0YXRlIiwic3RhdGUiLCJhdXRoIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsImRpc3BhdGNoIiwidGFibGUiLCJjbGFzc05hbWUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsInRkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/UsersTable.tsx\n"));

/***/ })

});