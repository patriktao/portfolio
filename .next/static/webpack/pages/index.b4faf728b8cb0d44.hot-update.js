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

/***/ "./components/NavBar.tsx":
/*!*******************************!*\
  !*** ./components/NavBar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/config */ \"./node_modules/next/config.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useScrollspy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useScrollspy */ \"./hooks/useScrollspy.tsx\");\n/* harmony import */ var history_throttled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history-throttled */ \"./node_modules/history-throttled/dist-cjs/index.js\");\n/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contexts/ThemeContext */ \"./contexts/ThemeContext.tsx\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ids = [\n    \"home\",\n    \"about\",\n    \"skills\",\n    \"experience\",\n    \"extracurricular\",\n    \"portfolio\"\n];\nconst menuItemClass = \"block text-gray-700 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:hover:bg-gradient-to-r from-green-400 to-[--color-theme] md:hover:bg-clip-text md:hover:text-transparent hover:scale-110 ease-out duration-100\";\nconst selectedMenuItemClass = \"block md:border-0 md:p-0 bg-gradient-to-r from-green-400 to-[--color-theme] bg-clip-text text-transparent\";\nconst NavItem = (param)=>/*#__PURE__*/ {\n    let { name , className  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"#\".concat(name.toLowerCase()),\n            className: className,\n            children: name\n        }, void 0, false, {\n            fileName: \"/Users/patriktao/GitHub/portfolio/components/NavBar.tsx\",\n            lineNumber: 26,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/patriktao/GitHub/portfolio/components/NavBar.tsx\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, undefined);\n};\n_c = NavItem;\nconst capitalize = (str)=>str.charAt(0).toUpperCase() + str.slice(1);\nconst NavBar = ()=>{\n    _s();\n    const { getTheme , setTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_5__.ThemeContext);\n    const { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_2___default()();\n    const pdfPath = publicRuntimeConfig.PDF_PATH;\n    const activeId = (0,_hooks_useScrollspy__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ids, 300);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const currentTheme = localStorage.theme || (window.matchMedia(\"(prefers-color-scheme: dark)\").matches ? \"dark\" : \"light\");\n        document.documentElement.classList.toggle(\"dark\", currentTheme === \"dark\");\n        setTheme(currentTheme);\n    }, [\n        setTheme\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (true) {\n            (0,history_throttled__WEBPACK_IMPORTED_MODULE_4__.replaceState)(\"Updated\", activeId, \"#\".concat(activeId));\n        }\n    }, [\n        activeId\n    ]);\n    const themeSwitch = ()=>{\n        const newTheme = document.documentElement.classList.contains(\"dark\") ? \"light\" : \"dark\";\n        document.documentElement.classList.toggle(\"dark\", newTheme === \"dark\");\n        localStorage.setItem(\"theme\", newTheme);\n        setTheme(newTheme);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"fixed top-2 left-0 w-full z-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 backdrop-blur-[12px] bg-white/50 dark:bg-gray-700/50 rounded-3xl shadow-sm border border-gray-100/20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-between items-center h-14\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#home\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-xl font-semibold whitespace-nowrap dark:text-white text-gray-700 hover:bg-gradient-to-r hover:from-green-400 hover:to-[--color-theme] hover:bg-clip-text hover:text-transparent hover:scale-110 ease-out duration-100\",\n                            children: \"Patrik Tao\"\n                        }, void 0, false, {\n                            fileName: \"/Users/patriktao/GitHub/portfolio/components/NavBar.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/patriktao/GitHub/portfolio/components/NavBar.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden lg:flex\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex flex-row space-x-6 text-md items-center\",\n                            children: [\n                                ids.map((id)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                        name: capitalize(id),\n                                        className: id === activeId ? selectedMenuItemClass : menuItemClass\n                                    }, id, false, {\n                                        fileName: \"/Users/patriktao/GitHub/portfolio/components/NavBar.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 17\n                                    }, undefined)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: pdfPath,\n                                        target: \"_blank\",\n                                        rel: \"noopener noreferrer\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"text-md bg-gradient-to-r hover:scale-95 ease-out duration-100 from-green-400 to-[--color-theme] py-1 px-3 rounded-xl inline-flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                    className: \"fill-current w-3 h-3 mr-2\",\n                                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                                    viewBox: \"0 0 20 20\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                        d: \"M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/patriktao/GitHub/portfolio/components/NavBar.tsx\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 23\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/patriktao/GitHub/portfolio/components/NavBar.tsx\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"Resume\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/patriktao/GitHub/portfolio/components/NavBar.tsx\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/patriktao/GitHub/portfolio/components/NavBar.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/patriktao/GitHub/portfolio/components/NavBar.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/patriktao/GitHub/portfolio/components/NavBar.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/patriktao/GitHub/portfolio/components/NavBar.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/patriktao/GitHub/portfolio/components/NavBar.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: pdfPath,\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"flex items-center lg:hidden text-black hover:underline dark:text-white\",\n                                children: \"Get Resume\"\n                            }, void 0, false, {\n                                fileName: \"/Users/patriktao/GitHub/portfolio/components/NavBar.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"relative flex items-center cursor-pointer\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        className: \"sr-only peer\",\n                                        checked: getTheme() === \"dark\",\n                                        onChange: themeSwitch\n                                    }, void 0, false, {\n                                        fileName: \"/Users/patriktao/GitHub/portfolio/components/NavBar.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-[64px] h-[33px] bg-teal-100 rounded-full peer peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-gray-800 dark:bg-gray-700 peer-checked:bg-teal-900 z-10\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"grid grid-cols-2 h-8\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsMoonStarsFill, {\n                                                    className: \"relative left-[38px] top-[8px] z-20 \".concat(getTheme() === \"light\" ? \"hidden\" : \"block\")\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/patriktao/GitHub/portfolio/components/NavBar.tsx\",\n                                                    lineNumber: 110,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsSunFill, {\n                                                    className: \"relative right-[22px] top-[8px] z-20 \".concat(getTheme() === \"light\" ? \"block\" : \"hidden\")\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/patriktao/GitHub/portfolio/components/NavBar.tsx\",\n                                                    lineNumber: 111,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/patriktao/GitHub/portfolio/components/NavBar.tsx\",\n                                            lineNumber: 109,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/patriktao/GitHub/portfolio/components/NavBar.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/patriktao/GitHub/portfolio/components/NavBar.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/patriktao/GitHub/portfolio/components/NavBar.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/patriktao/GitHub/portfolio/components/NavBar.tsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/patriktao/GitHub/portfolio/components/NavBar.tsx\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/patriktao/GitHub/portfolio/components/NavBar.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavBar, \"1itiEfcs4v3e1OYYZag4XZq14YQ=\", false, function() {\n    return [\n        _hooks_useScrollspy__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c1 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1;\n$RefreshReg$(_c, \"NavItem\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVOzBDQUNYOzs7Ozs7MENBSUQsOERBQUM2QztnQ0FBTTdDLFdBQVU7O2tEQUNmLDhEQUFDOEM7d0NBQ0NDLE1BQUs7d0NBQ0wvQyxXQUFVO3dDQUNWZ0QsU0FBU3JDLGVBQWU7d0NBQ3hCc0MsVUFBVXRCOzs7Ozs7a0RBRVosOERBQUNLO3dDQUFJaEMsV0FBVTtrREFDYiw0RUFBQ2dDOzRDQUFJaEMsV0FBVTs7OERBQ2IsOERBQUNQLDJEQUFlQTtvREFBQ08sV0FBVyx1Q0FBbUYsT0FBNUNXLGVBQWUsVUFBVSxXQUFXLE9BQU87Ozs7Ozs4REFDOUcsOERBQUNqQixxREFBU0E7b0RBQUNNLFdBQVcsd0NBQW9GLE9BQTVDVyxlQUFlLFVBQVUsVUFBVSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTM0g7R0F0Rk1EOztRQUthcEIsMkRBQVlBOzs7TUFMekJvQjtBQXdGTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdkJhci50c3g/MzAyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGdldENvbmZpZyBmcm9tIFwibmV4dC9jb25maWdcIjtcbmltcG9ydCB1c2VTY3JvbGxzcHkgZnJvbSBcIkAvaG9va3MvdXNlU2Nyb2xsc3B5XCI7XG5pbXBvcnQgeyBGYWRlIH0gZnJvbSBcInJlYWN0LWF3ZXNvbWUtcmV2ZWFsXCI7XG5pbXBvcnQgeyByZXBsYWNlU3RhdGUgfSBmcm9tIFwiaGlzdG9yeS10aHJvdHRsZWRcIjtcbmltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHRzL1RoZW1lQ29udGV4dFwiO1xuaW1wb3J0IHtcbiAgQnNNb29uU3RhcnNGaWxsLFxuICBCc1N1bkZpbGwsXG59IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuXG5jb25zdCBpZHMgPSBbXG4gIFwiaG9tZVwiLFxuICBcImFib3V0XCIsXG4gIFwic2tpbGxzXCIsXG4gIFwiZXhwZXJpZW5jZVwiLFxuICBcImV4dHJhY3VycmljdWxhclwiLFxuICBcInBvcnRmb2xpb1wiLFxuXTtcblxuY29uc3QgbWVudUl0ZW1DbGFzcyA9IGBibG9jayB0ZXh0LWdyYXktNzAwIHJvdW5kZWQgbWQ6aG92ZXI6YmctdHJhbnNwYXJlbnQgbWQ6Ym9yZGVyLTAgbWQ6cC0wIGRhcms6dGV4dC13aGl0ZSBtZDpob3ZlcjpiZy1ncmFkaWVudC10by1yIGZyb20tZ3JlZW4tNDAwIHRvLVstLWNvbG9yLXRoZW1lXSBtZDpob3ZlcjpiZy1jbGlwLXRleHQgbWQ6aG92ZXI6dGV4dC10cmFuc3BhcmVudCBob3ZlcjpzY2FsZS0xMTAgZWFzZS1vdXQgZHVyYXRpb24tMTAwYDtcbmNvbnN0IHNlbGVjdGVkTWVudUl0ZW1DbGFzcyA9IGBibG9jayBtZDpib3JkZXItMCBtZDpwLTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyZWVuLTQwMCB0by1bLS1jb2xvci10aGVtZV0gYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnRgO1xuXG5jb25zdCBOYXZJdGVtID0gKHsgbmFtZSwgY2xhc3NOYW1lIH0pID0+IChcbiAgPGxpPlxuICAgIDxhIGhyZWY9e2AjJHtuYW1lLnRvTG93ZXJDYXNlKCl9YH0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAge25hbWV9XG4gICAgPC9hPlxuICA8L2xpPlxuKTtcblxuY29uc3QgY2FwaXRhbGl6ZSA9IChzdHIpID0+IHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcblxuY29uc3QgTmF2QmFyID0gKCkgPT4ge1xuICBjb25zdCB7IGdldFRoZW1lLCBzZXRUaGVtZSB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuICBjb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xuICBjb25zdCBwZGZQYXRoID0gcHVibGljUnVudGltZUNvbmZpZy5QREZfUEFUSDtcblxuICBjb25zdCBhY3RpdmVJZCA9IHVzZVNjcm9sbHNweShpZHMsIDMwMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50VGhlbWUgPSBsb2NhbFN0b3JhZ2UudGhlbWUgfHwgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzID8gXCJkYXJrXCIgOiBcImxpZ2h0XCIpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiLCBjdXJyZW50VGhlbWUgPT09IFwiZGFya1wiKTtcbiAgICBzZXRUaGVtZShjdXJyZW50VGhlbWUpO1xuICB9LCBbc2V0VGhlbWVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXBsYWNlU3RhdGUoXCJVcGRhdGVkXCIsIGFjdGl2ZUlkLCBgIyR7YWN0aXZlSWR9YCk7XG4gICAgfVxuICB9LCBbYWN0aXZlSWRdKTtcblxuICBjb25zdCB0aGVtZVN3aXRjaCA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdUaGVtZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXJrXCIpID8gXCJsaWdodFwiIDogXCJkYXJrXCI7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIsIG5ld1RoZW1lID09PSBcImRhcmtcIik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBuZXdUaGVtZSk7XG4gICAgc2V0VGhlbWUobmV3VGhlbWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMiBsZWZ0LTAgdy1mdWxsIHotNTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LTggYmFja2Ryb3AtYmx1ci1bMTJweF0gYmctd2hpdGUvNTAgZGFyazpiZy1ncmF5LTcwMC81MCByb3VuZGVkLTN4bCBzaGFkb3ctc20gYm9yZGVyIGJvcmRlci1ncmF5LTEwMC8yMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgaC0xNFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjaG9tZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZSB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWdyYWRpZW50LXRvLXIgaG92ZXI6ZnJvbS1ncmVlbi00MDAgaG92ZXI6dG8tWy0tY29sb3ItdGhlbWVdIGhvdmVyOmJnLWNsaXAtdGV4dCBob3Zlcjp0ZXh0LXRyYW5zcGFyZW50IGhvdmVyOnNjYWxlLTExMCBlYXNlLW91dCBkdXJhdGlvbi0xMDBcIj5cbiAgICAgICAgICAgICAgUGF0cmlrIFRhb1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXhcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHNwYWNlLXgtNiB0ZXh0LW1kIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICB7aWRzLm1hcCgoaWQpID0+IChcbiAgICAgICAgICAgICAgICA8TmF2SXRlbVxuICAgICAgICAgICAgICAgICAgbmFtZT17Y2FwaXRhbGl6ZShpZCl9XG4gICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpZCA9PT0gYWN0aXZlSWQgPyBzZWxlY3RlZE1lbnVJdGVtQ2xhc3MgOiBtZW51SXRlbUNsYXNzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17cGRmUGF0aH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LW1kIGJnLWdyYWRpZW50LXRvLXIgaG92ZXI6c2NhbGUtOTUgZWFzZS1vdXQgZHVyYXRpb24tMTAwIGZyb20tZ3JlZW4tNDAwIHRvLVstLWNvbG9yLXRoZW1lXSBweS0xIHB4LTMgcm91bmRlZC14bCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdy0zIGgtMyBtci0yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEzIDhWMkg3djZIMmw4IDggOC04aC01ek0wIDE4aDIwdjJIMHYtMnpcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+UmVzdW1lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTRcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9e3BkZlBhdGh9XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBsZzpoaWRkZW4gdGV4dC1ibGFjayBob3Zlcjp1bmRlcmxpbmUgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgR2V0IFJlc3VtZVxuICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzci1vbmx5IHBlZXJcIlxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2dldFRoZW1lKCkgPT09IFwiZGFya1wifVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGVtZVN3aXRjaH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs2NHB4XSBoLVszM3B4XSBiZy10ZWFsLTEwMCByb3VuZGVkLWZ1bGwgcGVlciBwZWVyLWZvY3VzOnJpbmctNCBwZWVyLWZvY3VzOnJpbmctdGVhbC0zMDAgZGFyazpwZWVyLWZvY3VzOnJpbmctZ3JheS04MDAgZGFyazpiZy1ncmF5LTcwMCBwZWVyLWNoZWNrZWQ6YmctdGVhbC05MDAgei0xMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBoLThcIj5cbiAgICAgICAgICAgICAgICAgIDxCc01vb25TdGFyc0ZpbGwgY2xhc3NOYW1lPXtgcmVsYXRpdmUgbGVmdC1bMzhweF0gdG9wLVs4cHhdIHotMjAgJHtnZXRUaGVtZSgpID09PSBcImxpZ2h0XCIgPyBcImhpZGRlblwiIDogXCJibG9ja1wifWB9IC8+XG4gICAgICAgICAgICAgICAgICA8QnNTdW5GaWxsIGNsYXNzTmFtZT17YHJlbGF0aXZlIHJpZ2h0LVsyMnB4XSB0b3AtWzhweF0gei0yMCAke2dldFRoZW1lKCkgPT09IFwibGlnaHRcIiA/IFwiYmxvY2tcIiA6IFwiaGlkZGVuXCJ9YH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsImdldENvbmZpZyIsInVzZVNjcm9sbHNweSIsInJlcGxhY2VTdGF0ZSIsIlRoZW1lQ29udGV4dCIsIkJzTW9vblN0YXJzRmlsbCIsIkJzU3VuRmlsbCIsImlkcyIsIm1lbnVJdGVtQ2xhc3MiLCJzZWxlY3RlZE1lbnVJdGVtQ2xhc3MiLCJOYXZJdGVtIiwibmFtZSIsImNsYXNzTmFtZSIsImxpIiwiYSIsImhyZWYiLCJ0b0xvd2VyQ2FzZSIsImNhcGl0YWxpemUiLCJzdHIiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiTmF2QmFyIiwiZ2V0VGhlbWUiLCJzZXRUaGVtZSIsInB1YmxpY1J1bnRpbWVDb25maWciLCJwZGZQYXRoIiwiUERGX1BBVEgiLCJhY3RpdmVJZCIsImN1cnJlbnRUaGVtZSIsImxvY2FsU3RvcmFnZSIsInRoZW1lIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRoZW1lU3dpdGNoIiwibmV3VGhlbWUiLCJjb250YWlucyIsInNldEl0ZW0iLCJuYXYiLCJkaXYiLCJzcGFuIiwidWwiLCJtYXAiLCJpZCIsInRhcmdldCIsInJlbCIsImJ1dHRvbiIsInN2ZyIsInhtbG5zIiwidmlld0JveCIsInBhdGgiLCJkIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NavBar.tsx\n"));

/***/ })

});