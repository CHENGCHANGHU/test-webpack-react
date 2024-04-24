"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[9470],{2784:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  M: () => (/* reexport */ Editor)\n});\n\n// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\nvar react = __webpack_require__(959);\n// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.47.0/node_modules/monaco-editor/esm/vs/editor/editor.main.js + 307 modules\nvar editor_main = __webpack_require__(246);\n// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js\nvar jsx_runtime = __webpack_require__(1527);\n;// CONCATENATED MODULE: ./src/component/editor/Editor.tsx\n\n\n\n\nfunction Editor(_ref) {\n  var _ref$language = _ref.language,\n    language = _ref$language === void 0 ? 'markdown' : _ref$language,\n    _ref$wordWrapColumn = _ref.wordWrapColumn,\n    wordWrapColumn = _ref$wordWrapColumn === void 0 ? 120 : _ref$wordWrapColumn,\n    onReady = _ref.onReady;\n  var editorRef = (0,react.useRef)(null);\n  (0,react.useEffect)(function () {\n    if (!(editorRef !== null && editorRef !== void 0 && editorRef.current)) {\n      return;\n    }\n    onReady(editor_main/* editor */.j6.create(editorRef.current, {\n      value: '',\n      language: language,\n      fontSize: 14,\n      tabSize: 2,\n      wrappingStrategy: 'advanced',\n      wordWrap: 'wordWrapColumn',\n      wordWrapColumn: wordWrapColumn\n    }));\n  }, [onReady]);\n  return /*#__PURE__*/(0,jsx_runtime.jsx)(\"div\", {\n    className: \"editor\",\n    ref: editorRef\n  });\n}\n;\n;// CONCATENATED MODULE: ./src/component/editor/index.ts\n\n;// CONCATENATED MODULE: ./src/component/index.ts\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjc4NC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0Y7QUFDakI7QUFBQTtBQUVSLFNBQVNLLE1BQU1BLENBQUFDLElBQUEsRUFRM0I7RUFBQSxJQUFBQyxhQUFBLEdBQUFELElBQUEsQ0FQREUsUUFBUTtJQUFSQSxRQUFRLEdBQUFELGFBQUEsY0FBRyxVQUFVLEdBQUFBLGFBQUE7SUFBQUUsbUJBQUEsR0FBQUgsSUFBQSxDQUNyQkksY0FBYztJQUFkQSxjQUFjLEdBQUFELG1CQUFBLGNBQUcsR0FBRyxHQUFBQSxtQkFBQTtJQUNwQkUsT0FBTyxHQUFBTCxJQUFBLENBQVBLLE9BQU87RUFNUCxJQUFNQyxTQUFTLEdBQUdYLGdCQUFNLENBQWlCLElBQUksQ0FBQztFQUU5Q0QsbUJBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBSSxFQUFDWSxTQUFTLGFBQVRBLFNBQVMsZUFBVEEsU0FBUyxDQUFFQyxPQUFPLEdBQUU7TUFDdkI7SUFDRjtJQUNBRixPQUFPLENBQUNULDBCQUFhLENBQUNhLE1BQU0sQ0FDMUJILFNBQVMsQ0FBQ0MsT0FBTyxFQUNqQjtNQUNFRyxLQUFLLEVBQUUsRUFBRTtNQUNUUixRQUFRLEVBQVJBLFFBQVE7TUFDUlMsUUFBUSxFQUFFLEVBQUU7TUFDWkMsT0FBTyxFQUFFLENBQUM7TUFDVkMsZ0JBQWdCLEVBQUUsVUFBVTtNQUM1QkMsUUFBUSxFQUFFLGdCQUFnQjtNQUMxQlYsY0FBYyxFQUFkQTtJQUNGLENBQ0YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxFQUFFLENBQUNDLE9BQU8sQ0FBQyxDQUFDO0VBRWIsb0JBQ0VQLG1CQUFBO0lBQUtpQixTQUFTLEVBQUMsUUFBUTtJQUFDQyxHQUFHLEVBQUVWO0VBQVUsQ0FBTSxDQUFDO0FBRWxEO0FBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXRlbXBsYXRlLy4vc3JjL2NvbXBvbmVudC9lZGl0b3IvRWRpdG9yLnRzeD9lNTllIiwid2VicGFjazovL3JlYWN0LXRlbXBsYXRlLy4vc3JjL2NvbXBvbmVudC9lZGl0b3IvaW5kZXgudHM/Y2ViZCIsIndlYnBhY2s6Ly9yZWFjdC10ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnQvaW5kZXgudHM/OTY3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgbW9uYWNvIGZyb20gJ21vbmFjby1lZGl0b3InO1xuaW1wb3J0ICcuL0VkaXRvci5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdG9yKHtcbiAgbGFuZ3VhZ2UgPSAnbWFya2Rvd24nLFxuICB3b3JkV3JhcENvbHVtbiA9IDEyMCxcbiAgb25SZWFkeSxcbn06IHtcbiAgbGFuZ3VhZ2U/OiAnbWFya2Rvd24nO1xuICB3b3JkV3JhcENvbHVtbj86IG51bWJlcjtcbiAgb25SZWFkeTogKG1vbmFjb0VkaXRvcjogYW55KSA9PiB2b2lkO1xufSkge1xuICBjb25zdCBlZGl0b3JSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFlZGl0b3JSZWY/LmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb25SZWFkeShtb25hY28uZWRpdG9yLmNyZWF0ZShcbiAgICAgIGVkaXRvclJlZi5jdXJyZW50LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIGxhbmd1YWdlLFxuICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICAgIHRhYlNpemU6IDIsXG4gICAgICAgIHdyYXBwaW5nU3RyYXRlZ3k6ICdhZHZhbmNlZCcsXG4gICAgICAgIHdvcmRXcmFwOiAnd29yZFdyYXBDb2x1bW4nLFxuICAgICAgICB3b3JkV3JhcENvbHVtbixcbiAgICAgIH1cbiAgICApKTtcbiAgfSwgW29uUmVhZHldKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdG9yXCIgcmVmPXtlZGl0b3JSZWZ9PjwvZGl2PlxuICApO1xufTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgRWRpdG9yIH0gZnJvbSAnLi9FZGl0b3InOyIsImV4cG9ydCAqIGZyb20gJy4vZWRpdG9yJztcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJtb25hY28iLCJqc3giLCJfanN4IiwiRWRpdG9yIiwiX3JlZiIsIl9yZWYkbGFuZ3VhZ2UiLCJsYW5ndWFnZSIsIl9yZWYkd29yZFdyYXBDb2x1bW4iLCJ3b3JkV3JhcENvbHVtbiIsIm9uUmVhZHkiLCJlZGl0b3JSZWYiLCJjdXJyZW50IiwiZWRpdG9yIiwiY3JlYXRlIiwidmFsdWUiLCJmb250U2l6ZSIsInRhYlNpemUiLCJ3cmFwcGluZ1N0cmF0ZWd5Iiwid29yZFdyYXAiLCJjbGFzc05hbWUiLCJyZWYiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2784\n")},2876:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(959);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2784);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1527);\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var editor = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var handleEditorReady = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (monacoEditor) {\n    editor.current = monacoEditor;\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h1", {\n    children: ["page c", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_component__WEBPACK_IMPORTED_MODULE_1__/* .Editor */ .M, {\n      language: "markdown",\n      onReady: handleEditorReady\n    })]\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg3Ni5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRDO0FBQ1A7QUFBQTtBQUFBO0FBRXJDLDZCQUFlLHNDQUFXO0VBQ3hCLElBQU1PLE1BQU0sR0FBR04sNkNBQU0sQ0FBTSxJQUFJLENBQUM7RUFFaEMsSUFBTU8saUJBQWlCLEdBQUdSLGtEQUFXLENBQUMsVUFBQ1MsWUFBaUIsRUFBSztJQUMzREYsTUFBTSxDQUFDRyxPQUFPLEdBQUdELFlBQVk7RUFDL0IsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLG9CQUNFSCx1REFBQTtJQUFBSyxRQUFBLEdBQUksUUFFRixlQUFBUCxzREFBQSxDQUFDRix1REFBTTtNQUFDVSxRQUFRLEVBQUMsVUFBVTtNQUFDQyxPQUFPLEVBQUVMO0lBQWtCLENBQUUsQ0FBQztFQUFBLENBQ3hELENBQUM7QUFFVCIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXRlbXBsYXRlLy4vc3JjL3BhZ2UvUGFnZUMudHN4PzZmZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSBcIkAvY29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICBjb25zdCBlZGl0b3IgPSB1c2VSZWY8YW55PihudWxsKTtcblxuICBjb25zdCBoYW5kbGVFZGl0b3JSZWFkeSA9IHVzZUNhbGxiYWNrKChtb25hY29FZGl0b3I6IGFueSkgPT4ge1xuICAgIGVkaXRvci5jdXJyZW50ID0gbW9uYWNvRWRpdG9yO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aDE+XG4gICAgICBwYWdlIGNcbiAgICAgIDxFZGl0b3IgbGFuZ3VhZ2U9J21hcmtkb3duJyBvblJlYWR5PXtoYW5kbGVFZGl0b3JSZWFkeX0gLz5cbiAgICA8L2gxPlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZVJlZiIsIkVkaXRvciIsImpzeCIsIl9qc3giLCJqc3hzIiwiX2pzeHMiLCJlZGl0b3IiLCJoYW5kbGVFZGl0b3JSZWFkeSIsIm1vbmFjb0VkaXRvciIsImN1cnJlbnQiLCJjaGlsZHJlbiIsImxhbmd1YWdlIiwib25SZWFkeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2876\n')}}]);