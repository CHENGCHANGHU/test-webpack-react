"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[258],{258:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.47.0(69991d66135e4a1fc1cf0b1ac4ad25d429866a0d)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n\n// src/basic-languages/fsharp/fsharp.ts\nvar conf = {\n  comments: {\n    lineComment: "//",\n    blockComment: ["(*", "*)"]\n  },\n  brackets: [\n    ["{", "}"],\n    ["[", "]"],\n    ["(", ")"]\n  ],\n  autoClosingPairs: [\n    { open: "{", close: "}" },\n    { open: "[", close: "]" },\n    { open: "(", close: ")" },\n    { open: \'"\', close: \'"\' }\n  ],\n  surroundingPairs: [\n    { open: "{", close: "}" },\n    { open: "[", close: "]" },\n    { open: "(", close: ")" },\n    { open: \'"\', close: \'"\' },\n    { open: "\'", close: "\'" }\n  ],\n  folding: {\n    markers: {\n      start: new RegExp("^\\\\s*//\\\\s*#region\\\\b|^\\\\s*\\\\(\\\\*\\\\s*#region(.*)\\\\*\\\\)"),\n      end: new RegExp("^\\\\s*//\\\\s*#endregion\\\\b|^\\\\s*\\\\(\\\\*\\\\s*#endregion\\\\s*\\\\*\\\\)")\n    }\n  }\n};\nvar language = {\n  defaultToken: "",\n  tokenPostfix: ".fs",\n  keywords: [\n    "abstract",\n    "and",\n    "atomic",\n    "as",\n    "assert",\n    "asr",\n    "base",\n    "begin",\n    "break",\n    "checked",\n    "component",\n    "const",\n    "constraint",\n    "constructor",\n    "continue",\n    "class",\n    "default",\n    "delegate",\n    "do",\n    "done",\n    "downcast",\n    "downto",\n    "elif",\n    "else",\n    "end",\n    "exception",\n    "eager",\n    "event",\n    "external",\n    "extern",\n    "false",\n    "finally",\n    "for",\n    "fun",\n    "function",\n    "fixed",\n    "functor",\n    "global",\n    "if",\n    "in",\n    "include",\n    "inherit",\n    "inline",\n    "interface",\n    "internal",\n    "land",\n    "lor",\n    "lsl",\n    "lsr",\n    "lxor",\n    "lazy",\n    "let",\n    "match",\n    "member",\n    "mod",\n    "module",\n    "mutable",\n    "namespace",\n    "method",\n    "mixin",\n    "new",\n    "not",\n    "null",\n    "of",\n    "open",\n    "or",\n    "object",\n    "override",\n    "private",\n    "parallel",\n    "process",\n    "protected",\n    "pure",\n    "public",\n    "rec",\n    "return",\n    "static",\n    "sealed",\n    "struct",\n    "sig",\n    "then",\n    "to",\n    "true",\n    "tailcall",\n    "trait",\n    "try",\n    "type",\n    "upcast",\n    "use",\n    "val",\n    "void",\n    "virtual",\n    "volatile",\n    "when",\n    "while",\n    "with",\n    "yield"\n  ],\n  // we include these common regular expressions\n  symbols: /[=><!~?:&|+\\-*\\^%;\\.,\\/]+/,\n  escapes: /\\\\(?:[abfnrtv\\\\"\']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n  integersuffix: /[uU]?[yslnLI]?/,\n  floatsuffix: /[fFmM]?/,\n  // The main tokenizer for our languages\n  tokenizer: {\n    root: [\n      // identifiers and keywords\n      [\n        /[a-zA-Z_]\\w*/,\n        {\n          cases: {\n            "@keywords": { token: "keyword.$0" },\n            "@default": "identifier"\n          }\n        }\n      ],\n      // whitespace\n      { include: "@whitespace" },\n      // [< attributes >].\n      [/\\[<.*>\\]/, "annotation"],\n      // Preprocessor directive\n      [/^#(if|else|endif)/, "keyword"],\n      // delimiters and operators\n      [/[{}()\\[\\]]/, "@brackets"],\n      [/[<>](?!@symbols)/, "@brackets"],\n      [/@symbols/, "delimiter"],\n      // numbers\n      [/\\d*\\d+[eE]([\\-+]?\\d+)?(@floatsuffix)/, "number.float"],\n      [/\\d*\\.\\d+([eE][\\-+]?\\d+)?(@floatsuffix)/, "number.float"],\n      [/0x[0-9a-fA-F]+LF/, "number.float"],\n      [/0x[0-9a-fA-F]+(@integersuffix)/, "number.hex"],\n      [/0b[0-1]+(@integersuffix)/, "number.bin"],\n      [/\\d+(@integersuffix)/, "number"],\n      // delimiter: after number because of .\\d floats\n      [/[;,.]/, "delimiter"],\n      // strings\n      [/"([^"\\\\]|\\\\.)*$/, "string.invalid"],\n      // non-teminated string\n      [/"""/, "string", \'@string."""\'],\n      [/"/, "string", \'@string."\'],\n      // literal string\n      [/\\@"/, { token: "string.quote", next: "@litstring" }],\n      // characters\n      [/\'[^\\\\\']\'B?/, "string"],\n      [/(\')(@escapes)(\')/, ["string", "string.escape", "string"]],\n      [/\'/, "string.invalid"]\n    ],\n    whitespace: [\n      [/[ \\t\\r\\n]+/, ""],\n      [/\\(\\*(?!\\))/, "comment", "@comment"],\n      [/\\/\\/.*$/, "comment"]\n    ],\n    comment: [\n      [/[^*(]+/, "comment"],\n      [/\\*\\)/, "comment", "@pop"],\n      [/\\*/, "comment"],\n      [/\\(\\*\\)/, "comment"],\n      [/\\(/, "comment"]\n    ],\n    string: [\n      [/[^\\\\"]+/, "string"],\n      [/@escapes/, "string.escape"],\n      [/\\\\./, "string.escape.invalid"],\n      [\n        /("""|"B?)/,\n        {\n          cases: {\n            "$#==$S2": { token: "string", next: "@pop" },\n            "@default": "string"\n          }\n        }\n      ]\n    ],\n    litstring: [\n      [/[^"]+/, "string"],\n      [/""/, "string.escape"],\n      [/"/, { token: "string.quote", next: "@pop" }]\n    ]\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjU4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsT0FBTyxLQUFLO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLFFBQVEsWUFBWSxHQUFHO0FBQzdCLE1BQU0sdUJBQXVCO0FBQzdCLE1BQU0sdUJBQXVCO0FBQzdCLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTSxRQUFRLFlBQVksR0FBRztBQUM3QixNQUFNLHVCQUF1QjtBQUM3QixNQUFNLHVCQUF1QjtBQUM3QixNQUFNLHVCQUF1QjtBQUM3QixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLDRDQUE0QyxJQUFJLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdCQUF3QjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyQ0FBMkM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsK0JBQStCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHFDQUFxQztBQUNuRDtBQUNBO0FBQ0E7QUFJRSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzLy5wbnBtL21vbmFjby1lZGl0b3JAMC40Ny4wL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvZnNoYXJwL2ZzaGFycC5qcz9jMzVmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFZlcnNpb246IDAuNDcuMCg2OTk5MWQ2NjEzNWU0YTFmYzFjZjBiMWFjNGFkMjVkNDI5ODY2YTBkKVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L21vbmFjby1lZGl0b3IvYmxvYi9tYWluL0xJQ0VOU0UudHh0XG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXG4vLyBzcmMvYmFzaWMtbGFuZ3VhZ2VzL2ZzaGFycC9mc2hhcnAudHNcbnZhciBjb25mID0ge1xuICBjb21tZW50czoge1xuICAgIGxpbmVDb21tZW50OiBcIi8vXCIsXG4gICAgYmxvY2tDb21tZW50OiBbXCIoKlwiLCBcIiopXCJdXG4gIH0sXG4gIGJyYWNrZXRzOiBbXG4gICAgW1wie1wiLCBcIn1cIl0sXG4gICAgW1wiW1wiLCBcIl1cIl0sXG4gICAgW1wiKFwiLCBcIilcIl1cbiAgXSxcbiAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgIHsgb3BlbjogXCJ7XCIsIGNsb3NlOiBcIn1cIiB9LFxuICAgIHsgb3BlbjogXCJbXCIsIGNsb3NlOiBcIl1cIiB9LFxuICAgIHsgb3BlbjogXCIoXCIsIGNsb3NlOiBcIilcIiB9LFxuICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfVxuICBdLFxuICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgeyBvcGVuOiBcIntcIiwgY2xvc2U6IFwifVwiIH0sXG4gICAgeyBvcGVuOiBcIltcIiwgY2xvc2U6IFwiXVwiIH0sXG4gICAgeyBvcGVuOiBcIihcIiwgY2xvc2U6IFwiKVwiIH0sXG4gICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9XG4gIF0sXG4gIGZvbGRpbmc6IHtcbiAgICBtYXJrZXJzOiB7XG4gICAgICBzdGFydDogbmV3IFJlZ0V4cChcIl5cXFxccyovL1xcXFxzKiNyZWdpb25cXFxcYnxeXFxcXHMqXFxcXChcXFxcKlxcXFxzKiNyZWdpb24oLiopXFxcXCpcXFxcKVwiKSxcbiAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccyovL1xcXFxzKiNlbmRyZWdpb25cXFxcYnxeXFxcXHMqXFxcXChcXFxcKlxcXFxzKiNlbmRyZWdpb25cXFxccypcXFxcKlxcXFwpXCIpXG4gICAgfVxuICB9XG59O1xudmFyIGxhbmd1YWdlID0ge1xuICBkZWZhdWx0VG9rZW46IFwiXCIsXG4gIHRva2VuUG9zdGZpeDogXCIuZnNcIixcbiAga2V5d29yZHM6IFtcbiAgICBcImFic3RyYWN0XCIsXG4gICAgXCJhbmRcIixcbiAgICBcImF0b21pY1wiLFxuICAgIFwiYXNcIixcbiAgICBcImFzc2VydFwiLFxuICAgIFwiYXNyXCIsXG4gICAgXCJiYXNlXCIsXG4gICAgXCJiZWdpblwiLFxuICAgIFwiYnJlYWtcIixcbiAgICBcImNoZWNrZWRcIixcbiAgICBcImNvbXBvbmVudFwiLFxuICAgIFwiY29uc3RcIixcbiAgICBcImNvbnN0cmFpbnRcIixcbiAgICBcImNvbnN0cnVjdG9yXCIsXG4gICAgXCJjb250aW51ZVwiLFxuICAgIFwiY2xhc3NcIixcbiAgICBcImRlZmF1bHRcIixcbiAgICBcImRlbGVnYXRlXCIsXG4gICAgXCJkb1wiLFxuICAgIFwiZG9uZVwiLFxuICAgIFwiZG93bmNhc3RcIixcbiAgICBcImRvd250b1wiLFxuICAgIFwiZWxpZlwiLFxuICAgIFwiZWxzZVwiLFxuICAgIFwiZW5kXCIsXG4gICAgXCJleGNlcHRpb25cIixcbiAgICBcImVhZ2VyXCIsXG4gICAgXCJldmVudFwiLFxuICAgIFwiZXh0ZXJuYWxcIixcbiAgICBcImV4dGVyblwiLFxuICAgIFwiZmFsc2VcIixcbiAgICBcImZpbmFsbHlcIixcbiAgICBcImZvclwiLFxuICAgIFwiZnVuXCIsXG4gICAgXCJmdW5jdGlvblwiLFxuICAgIFwiZml4ZWRcIixcbiAgICBcImZ1bmN0b3JcIixcbiAgICBcImdsb2JhbFwiLFxuICAgIFwiaWZcIixcbiAgICBcImluXCIsXG4gICAgXCJpbmNsdWRlXCIsXG4gICAgXCJpbmhlcml0XCIsXG4gICAgXCJpbmxpbmVcIixcbiAgICBcImludGVyZmFjZVwiLFxuICAgIFwiaW50ZXJuYWxcIixcbiAgICBcImxhbmRcIixcbiAgICBcImxvclwiLFxuICAgIFwibHNsXCIsXG4gICAgXCJsc3JcIixcbiAgICBcImx4b3JcIixcbiAgICBcImxhenlcIixcbiAgICBcImxldFwiLFxuICAgIFwibWF0Y2hcIixcbiAgICBcIm1lbWJlclwiLFxuICAgIFwibW9kXCIsXG4gICAgXCJtb2R1bGVcIixcbiAgICBcIm11dGFibGVcIixcbiAgICBcIm5hbWVzcGFjZVwiLFxuICAgIFwibWV0aG9kXCIsXG4gICAgXCJtaXhpblwiLFxuICAgIFwibmV3XCIsXG4gICAgXCJub3RcIixcbiAgICBcIm51bGxcIixcbiAgICBcIm9mXCIsXG4gICAgXCJvcGVuXCIsXG4gICAgXCJvclwiLFxuICAgIFwib2JqZWN0XCIsXG4gICAgXCJvdmVycmlkZVwiLFxuICAgIFwicHJpdmF0ZVwiLFxuICAgIFwicGFyYWxsZWxcIixcbiAgICBcInByb2Nlc3NcIixcbiAgICBcInByb3RlY3RlZFwiLFxuICAgIFwicHVyZVwiLFxuICAgIFwicHVibGljXCIsXG4gICAgXCJyZWNcIixcbiAgICBcInJldHVyblwiLFxuICAgIFwic3RhdGljXCIsXG4gICAgXCJzZWFsZWRcIixcbiAgICBcInN0cnVjdFwiLFxuICAgIFwic2lnXCIsXG4gICAgXCJ0aGVuXCIsXG4gICAgXCJ0b1wiLFxuICAgIFwidHJ1ZVwiLFxuICAgIFwidGFpbGNhbGxcIixcbiAgICBcInRyYWl0XCIsXG4gICAgXCJ0cnlcIixcbiAgICBcInR5cGVcIixcbiAgICBcInVwY2FzdFwiLFxuICAgIFwidXNlXCIsXG4gICAgXCJ2YWxcIixcbiAgICBcInZvaWRcIixcbiAgICBcInZpcnR1YWxcIixcbiAgICBcInZvbGF0aWxlXCIsXG4gICAgXCJ3aGVuXCIsXG4gICAgXCJ3aGlsZVwiLFxuICAgIFwid2l0aFwiLFxuICAgIFwieWllbGRcIlxuICBdLFxuICAvLyB3ZSBpbmNsdWRlIHRoZXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zXG4gIHN5bWJvbHM6IC9bPT48IX4/OiZ8K1xcLSpcXF4lO1xcLixcXC9dKy8sXG4gIGVzY2FwZXM6IC9cXFxcKD86W2FiZm5ydHZcXFxcXCInXXx4WzAtOUEtRmEtZl17MSw0fXx1WzAtOUEtRmEtZl17NH18VVswLTlBLUZhLWZdezh9KS8sXG4gIGludGVnZXJzdWZmaXg6IC9bdVVdP1t5c2xuTEldPy8sXG4gIGZsb2F0c3VmZml4OiAvW2ZGbU1dPy8sXG4gIC8vIFRoZSBtYWluIHRva2VuaXplciBmb3Igb3VyIGxhbmd1YWdlc1xuICB0b2tlbml6ZXI6IHtcbiAgICByb290OiBbXG4gICAgICAvLyBpZGVudGlmaWVycyBhbmQga2V5d29yZHNcbiAgICAgIFtcbiAgICAgICAgL1thLXpBLVpfXVxcdyovLFxuICAgICAgICB7XG4gICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgIFwiQGtleXdvcmRzXCI6IHsgdG9rZW46IFwia2V5d29yZC4kMFwiIH0sXG4gICAgICAgICAgICBcIkBkZWZhdWx0XCI6IFwiaWRlbnRpZmllclwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgLy8gd2hpdGVzcGFjZVxuICAgICAgeyBpbmNsdWRlOiBcIkB3aGl0ZXNwYWNlXCIgfSxcbiAgICAgIC8vIFs8IGF0dHJpYnV0ZXMgPl0uXG4gICAgICBbL1xcWzwuKj5cXF0vLCBcImFubm90YXRpb25cIl0sXG4gICAgICAvLyBQcmVwcm9jZXNzb3IgZGlyZWN0aXZlXG4gICAgICBbL14jKGlmfGVsc2V8ZW5kaWYpLywgXCJrZXl3b3JkXCJdLFxuICAgICAgLy8gZGVsaW1pdGVycyBhbmQgb3BlcmF0b3JzXG4gICAgICBbL1t7fSgpXFxbXFxdXS8sIFwiQGJyYWNrZXRzXCJdLFxuICAgICAgWy9bPD5dKD8hQHN5bWJvbHMpLywgXCJAYnJhY2tldHNcIl0sXG4gICAgICBbL0BzeW1ib2xzLywgXCJkZWxpbWl0ZXJcIl0sXG4gICAgICAvLyBudW1iZXJzXG4gICAgICBbL1xcZCpcXGQrW2VFXShbXFwtK10/XFxkKyk/KEBmbG9hdHN1ZmZpeCkvLCBcIm51bWJlci5mbG9hdFwiXSxcbiAgICAgIFsvXFxkKlxcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8oQGZsb2F0c3VmZml4KS8sIFwibnVtYmVyLmZsb2F0XCJdLFxuICAgICAgWy8weFswLTlhLWZBLUZdK0xGLywgXCJudW1iZXIuZmxvYXRcIl0sXG4gICAgICBbLzB4WzAtOWEtZkEtRl0rKEBpbnRlZ2Vyc3VmZml4KS8sIFwibnVtYmVyLmhleFwiXSxcbiAgICAgIFsvMGJbMC0xXSsoQGludGVnZXJzdWZmaXgpLywgXCJudW1iZXIuYmluXCJdLFxuICAgICAgWy9cXGQrKEBpbnRlZ2Vyc3VmZml4KS8sIFwibnVtYmVyXCJdLFxuICAgICAgLy8gZGVsaW1pdGVyOiBhZnRlciBudW1iZXIgYmVjYXVzZSBvZiAuXFxkIGZsb2F0c1xuICAgICAgWy9bOywuXS8sIFwiZGVsaW1pdGVyXCJdLFxuICAgICAgLy8gc3RyaW5nc1xuICAgICAgWy9cIihbXlwiXFxcXF18XFxcXC4pKiQvLCBcInN0cmluZy5pbnZhbGlkXCJdLFxuICAgICAgLy8gbm9uLXRlbWluYXRlZCBzdHJpbmdcbiAgICAgIFsvXCJcIlwiLywgXCJzdHJpbmdcIiwgJ0BzdHJpbmcuXCJcIlwiJ10sXG4gICAgICBbL1wiLywgXCJzdHJpbmdcIiwgJ0BzdHJpbmcuXCInXSxcbiAgICAgIC8vIGxpdGVyYWwgc3RyaW5nXG4gICAgICBbL1xcQFwiLywgeyB0b2tlbjogXCJzdHJpbmcucXVvdGVcIiwgbmV4dDogXCJAbGl0c3RyaW5nXCIgfV0sXG4gICAgICAvLyBjaGFyYWN0ZXJzXG4gICAgICBbLydbXlxcXFwnXSdCPy8sIFwic3RyaW5nXCJdLFxuICAgICAgWy8oJykoQGVzY2FwZXMpKCcpLywgW1wic3RyaW5nXCIsIFwic3RyaW5nLmVzY2FwZVwiLCBcInN0cmluZ1wiXV0sXG4gICAgICBbLycvLCBcInN0cmluZy5pbnZhbGlkXCJdXG4gICAgXSxcbiAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICBbL1sgXFx0XFxyXFxuXSsvLCBcIlwiXSxcbiAgICAgIFsvXFwoXFwqKD8hXFwpKS8sIFwiY29tbWVudFwiLCBcIkBjb21tZW50XCJdLFxuICAgICAgWy9cXC9cXC8uKiQvLCBcImNvbW1lbnRcIl1cbiAgICBdLFxuICAgIGNvbW1lbnQ6IFtcbiAgICAgIFsvW14qKF0rLywgXCJjb21tZW50XCJdLFxuICAgICAgWy9cXCpcXCkvLCBcImNvbW1lbnRcIiwgXCJAcG9wXCJdLFxuICAgICAgWy9cXCovLCBcImNvbW1lbnRcIl0sXG4gICAgICBbL1xcKFxcKlxcKS8sIFwiY29tbWVudFwiXSxcbiAgICAgIFsvXFwoLywgXCJjb21tZW50XCJdXG4gICAgXSxcbiAgICBzdHJpbmc6IFtcbiAgICAgIFsvW15cXFxcXCJdKy8sIFwic3RyaW5nXCJdLFxuICAgICAgWy9AZXNjYXBlcy8sIFwic3RyaW5nLmVzY2FwZVwiXSxcbiAgICAgIFsvXFxcXC4vLCBcInN0cmluZy5lc2NhcGUuaW52YWxpZFwiXSxcbiAgICAgIFtcbiAgICAgICAgLyhcIlwiXCJ8XCJCPykvLFxuICAgICAgICB7XG4gICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgIFwiJCM9PSRTMlwiOiB7IHRva2VuOiBcInN0cmluZ1wiLCBuZXh0OiBcIkBwb3BcIiB9LFxuICAgICAgICAgICAgXCJAZGVmYXVsdFwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgXSxcbiAgICBsaXRzdHJpbmc6IFtcbiAgICAgIFsvW15cIl0rLywgXCJzdHJpbmdcIl0sXG4gICAgICBbL1wiXCIvLCBcInN0cmluZy5lc2NhcGVcIl0sXG4gICAgICBbL1wiLywgeyB0b2tlbjogXCJzdHJpbmcucXVvdGVcIiwgbmV4dDogXCJAcG9wXCIgfV1cbiAgICBdXG4gIH1cbn07XG5leHBvcnQge1xuICBjb25mLFxuICBsYW5ndWFnZVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///258\n')}}]);