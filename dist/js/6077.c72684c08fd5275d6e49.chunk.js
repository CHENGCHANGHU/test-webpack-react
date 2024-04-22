"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[6077],{6077:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.47.0(69991d66135e4a1fc1cf0b1ac4ad25d429866a0d)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n\n// src/basic-languages/st/st.ts\nvar conf = {\n  comments: {\n    lineComment: "//",\n    blockComment: ["(*", "*)"]\n  },\n  brackets: [\n    ["{", "}"],\n    ["[", "]"],\n    ["(", ")"],\n    ["var", "end_var"],\n    ["var_input", "end_var"],\n    ["var_output", "end_var"],\n    ["var_in_out", "end_var"],\n    ["var_temp", "end_var"],\n    ["var_global", "end_var"],\n    ["var_access", "end_var"],\n    ["var_external", "end_var"],\n    ["type", "end_type"],\n    ["struct", "end_struct"],\n    ["program", "end_program"],\n    ["function", "end_function"],\n    ["function_block", "end_function_block"],\n    ["action", "end_action"],\n    ["step", "end_step"],\n    ["initial_step", "end_step"],\n    ["transaction", "end_transaction"],\n    ["configuration", "end_configuration"],\n    ["tcp", "end_tcp"],\n    ["recource", "end_recource"],\n    ["channel", "end_channel"],\n    ["library", "end_library"],\n    ["folder", "end_folder"],\n    ["binaries", "end_binaries"],\n    ["includes", "end_includes"],\n    ["sources", "end_sources"]\n  ],\n  autoClosingPairs: [\n    { open: "[", close: "]" },\n    { open: "{", close: "}" },\n    { open: "(", close: ")" },\n    { open: "/*", close: "*/" },\n    { open: "\'", close: "\'", notIn: ["string_sq"] },\n    { open: \'"\', close: \'"\', notIn: ["string_dq"] },\n    { open: "var_input", close: "end_var" },\n    { open: "var_output", close: "end_var" },\n    { open: "var_in_out", close: "end_var" },\n    { open: "var_temp", close: "end_var" },\n    { open: "var_global", close: "end_var" },\n    { open: "var_access", close: "end_var" },\n    { open: "var_external", close: "end_var" },\n    { open: "type", close: "end_type" },\n    { open: "struct", close: "end_struct" },\n    { open: "program", close: "end_program" },\n    { open: "function", close: "end_function" },\n    { open: "function_block", close: "end_function_block" },\n    { open: "action", close: "end_action" },\n    { open: "step", close: "end_step" },\n    { open: "initial_step", close: "end_step" },\n    { open: "transaction", close: "end_transaction" },\n    { open: "configuration", close: "end_configuration" },\n    { open: "tcp", close: "end_tcp" },\n    { open: "recource", close: "end_recource" },\n    { open: "channel", close: "end_channel" },\n    { open: "library", close: "end_library" },\n    { open: "folder", close: "end_folder" },\n    { open: "binaries", close: "end_binaries" },\n    { open: "includes", close: "end_includes" },\n    { open: "sources", close: "end_sources" }\n  ],\n  surroundingPairs: [\n    { open: "{", close: "}" },\n    { open: "[", close: "]" },\n    { open: "(", close: ")" },\n    { open: \'"\', close: \'"\' },\n    { open: "\'", close: "\'" },\n    { open: "var", close: "end_var" },\n    { open: "var_input", close: "end_var" },\n    { open: "var_output", close: "end_var" },\n    { open: "var_in_out", close: "end_var" },\n    { open: "var_temp", close: "end_var" },\n    { open: "var_global", close: "end_var" },\n    { open: "var_access", close: "end_var" },\n    { open: "var_external", close: "end_var" },\n    { open: "type", close: "end_type" },\n    { open: "struct", close: "end_struct" },\n    { open: "program", close: "end_program" },\n    { open: "function", close: "end_function" },\n    { open: "function_block", close: "end_function_block" },\n    { open: "action", close: "end_action" },\n    { open: "step", close: "end_step" },\n    { open: "initial_step", close: "end_step" },\n    { open: "transaction", close: "end_transaction" },\n    { open: "configuration", close: "end_configuration" },\n    { open: "tcp", close: "end_tcp" },\n    { open: "recource", close: "end_recource" },\n    { open: "channel", close: "end_channel" },\n    { open: "library", close: "end_library" },\n    { open: "folder", close: "end_folder" },\n    { open: "binaries", close: "end_binaries" },\n    { open: "includes", close: "end_includes" },\n    { open: "sources", close: "end_sources" }\n  ],\n  folding: {\n    markers: {\n      start: new RegExp("^\\\\s*#pragma\\\\s+region\\\\b"),\n      end: new RegExp("^\\\\s*#pragma\\\\s+endregion\\\\b")\n    }\n  }\n};\nvar language = {\n  defaultToken: "",\n  tokenPostfix: ".st",\n  ignoreCase: true,\n  brackets: [\n    { token: "delimiter.curly", open: "{", close: "}" },\n    { token: "delimiter.parenthesis", open: "(", close: ")" },\n    { token: "delimiter.square", open: "[", close: "]" }\n  ],\n  keywords: [\n    "if",\n    "end_if",\n    "elsif",\n    "else",\n    "case",\n    "of",\n    "to",\n    "__try",\n    "__catch",\n    "__finally",\n    "do",\n    "with",\n    "by",\n    "while",\n    "repeat",\n    "end_while",\n    "end_repeat",\n    "end_case",\n    "for",\n    "end_for",\n    "task",\n    "retain",\n    "non_retain",\n    "constant",\n    "with",\n    "at",\n    "exit",\n    "return",\n    "interval",\n    "priority",\n    "address",\n    "port",\n    "on_channel",\n    "then",\n    "iec",\n    "file",\n    "uses",\n    "version",\n    "packagetype",\n    "displayname",\n    "copyright",\n    "summary",\n    "vendor",\n    "common_source",\n    "from",\n    "extends",\n    "implements"\n  ],\n  constant: ["false", "true", "null"],\n  defineKeywords: [\n    "var",\n    "var_input",\n    "var_output",\n    "var_in_out",\n    "var_temp",\n    "var_global",\n    "var_access",\n    "var_external",\n    "end_var",\n    "type",\n    "end_type",\n    "struct",\n    "end_struct",\n    "program",\n    "end_program",\n    "function",\n    "end_function",\n    "function_block",\n    "end_function_block",\n    "interface",\n    "end_interface",\n    "method",\n    "end_method",\n    "property",\n    "end_property",\n    "namespace",\n    "end_namespace",\n    "configuration",\n    "end_configuration",\n    "tcp",\n    "end_tcp",\n    "resource",\n    "end_resource",\n    "channel",\n    "end_channel",\n    "library",\n    "end_library",\n    "folder",\n    "end_folder",\n    "binaries",\n    "end_binaries",\n    "includes",\n    "end_includes",\n    "sources",\n    "end_sources",\n    "action",\n    "end_action",\n    "step",\n    "initial_step",\n    "end_step",\n    "transaction",\n    "end_transaction"\n  ],\n  typeKeywords: [\n    "int",\n    "sint",\n    "dint",\n    "lint",\n    "usint",\n    "uint",\n    "udint",\n    "ulint",\n    "real",\n    "lreal",\n    "time",\n    "date",\n    "time_of_day",\n    "date_and_time",\n    "string",\n    "bool",\n    "byte",\n    "word",\n    "dword",\n    "array",\n    "pointer",\n    "lword"\n  ],\n  operators: [\n    "=",\n    ">",\n    "<",\n    ":",\n    ":=",\n    "<=",\n    ">=",\n    "<>",\n    "&",\n    "+",\n    "-",\n    "*",\n    "**",\n    "MOD",\n    "^",\n    "or",\n    "and",\n    "not",\n    "xor",\n    "abs",\n    "acos",\n    "asin",\n    "atan",\n    "cos",\n    "exp",\n    "expt",\n    "ln",\n    "log",\n    "sin",\n    "sqrt",\n    "tan",\n    "sel",\n    "max",\n    "min",\n    "limit",\n    "mux",\n    "shl",\n    "shr",\n    "rol",\n    "ror",\n    "indexof",\n    "sizeof",\n    "adr",\n    "adrinst",\n    "bitadr",\n    "is_valid",\n    "ref",\n    "ref_to"\n  ],\n  builtinVariables: [],\n  builtinFunctions: [\n    "sr",\n    "rs",\n    "tp",\n    "ton",\n    "tof",\n    "eq",\n    "ge",\n    "le",\n    "lt",\n    "ne",\n    "round",\n    "trunc",\n    "ctd",\n    "\\u0441tu",\n    "ctud",\n    "r_trig",\n    "f_trig",\n    "move",\n    "concat",\n    "delete",\n    "find",\n    "insert",\n    "left",\n    "len",\n    "replace",\n    "right",\n    "rtc"\n  ],\n  // we include these common regular expressions\n  symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n  // C# style strings\n  escapes: /\\\\(?:[abfnrtv\\\\"\']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n  // The main tokenizer for our languages\n  tokenizer: {\n    root: [\n      [/(\\.\\.)/, "delimiter"],\n      [/\\b(16#[0-9A-Fa-f\\_]*)+\\b/, "number.hex"],\n      [/\\b(2#[01\\_]+)+\\b/, "number.binary"],\n      [/\\b(8#[0-9\\_]*)+\\b/, "number.octal"],\n      [/\\b\\d*\\.\\d+([eE][\\-+]?\\d+)?\\b/, "number.float"],\n      [/\\b(L?REAL)#[0-9\\_\\.e]+\\b/, "number.float"],\n      [/\\b(BYTE|(?:D|L)?WORD|U?(?:S|D|L)?INT)#[0-9\\_]+\\b/, "number"],\n      [/\\d+/, "number"],\n      [/\\b(T|DT|TOD)#[0-9:-_shmyd]+\\b/, "tag"],\n      [/\\%(I|Q|M)(X|B|W|D|L)[0-9\\.]+/, "tag"],\n      [/\\%(I|Q|M)[0-9\\.]*/, "tag"],\n      [/\\b[A-Za-z]{1,6}#[0-9]+\\b/, "tag"],\n      [/\\b(TO_|CTU_|CTD_|CTUD_|MUX_|SEL_)[A_Za-z]+\\b/, "predefined"],\n      [/\\b[A_Za-z]+(_TO_)[A_Za-z]+\\b/, "predefined"],\n      [/[;]/, "delimiter"],\n      [/[.]/, { token: "delimiter", next: "@params" }],\n      // identifiers and keywords\n      [\n        /[a-zA-Z_]\\w*/,\n        {\n          cases: {\n            "@operators": "operators",\n            "@keywords": "keyword",\n            "@typeKeywords": "type",\n            "@defineKeywords": "variable",\n            "@constant": "constant",\n            "@builtinVariables": "predefined",\n            "@builtinFunctions": "predefined",\n            "@default": "identifier"\n          }\n        }\n      ],\n      { include: "@whitespace" },\n      [/[{}()\\[\\]]/, "@brackets"],\n      [/"([^"\\\\]|\\\\.)*$/, "string.invalid"],\n      // non-teminated string\n      [/"/, { token: "string.quote", bracket: "@open", next: "@string_dq" }],\n      [/\'/, { token: "string.quote", bracket: "@open", next: "@string_sq" }],\n      [/\'[^\\\\\']\'/, "string"],\n      [/(\')(@escapes)(\')/, ["string", "string.escape", "string"]],\n      [/\'/, "string.invalid"]\n    ],\n    params: [\n      [/\\b[A-Za-z0-9_]+\\b(?=\\()/, { token: "identifier", next: "@pop" }],\n      [/\\b[A-Za-z0-9_]+\\b/, "variable.name", "@pop"]\n    ],\n    comment: [\n      [/[^\\/*]+/, "comment"],\n      [/\\/\\*/, "comment", "@push"],\n      // nested comment\n      ["\\\\*/", "comment", "@pop"],\n      [/[\\/*]/, "comment"]\n    ],\n    comment2: [\n      [/[^\\(*]+/, "comment"],\n      [/\\(\\*/, "comment", "@push"],\n      // nested comment\n      ["\\\\*\\\\)", "comment", "@pop"],\n      [/[\\(*]/, "comment"]\n    ],\n    whitespace: [\n      [/[ \\t\\r\\n]+/, "white"],\n      [/\\/\\/.*$/, "comment"],\n      [/\\/\\*/, "comment", "@comment"],\n      [/\\(\\*/, "comment", "@comment2"]\n    ],\n    string_dq: [\n      [/[^\\\\"]+/, "string"],\n      [/@escapes/, "string.escape"],\n      [/\\\\./, "string.escape.invalid"],\n      [/"/, { token: "string.quote", bracket: "@close", next: "@pop" }]\n    ],\n    string_sq: [\n      [/[^\\\\\']+/, "string"],\n      [/@escapes/, "string.escape"],\n      [/\\\\./, "string.escape.invalid"],\n      [/\'/, { token: "string.quote", bracket: "@close", next: "@pop" }]\n    ]\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxJQUFJLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixJQUFJO0FBQ3ZCO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsZ0JBQWdCLHFDQUFxQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0JBQXdCO0FBQ2hDLFdBQVc7QUFDWDtBQUNBO0FBQ0EsY0FBYyw2REFBNkQ7QUFDM0UsY0FBYyw2REFBNkQ7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQ0FBbUM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsd0RBQXdEO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHdEQUF3RDtBQUN0RTtBQUNBO0FBQ0E7QUFJRSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzLy5wbnBtL21vbmFjby1lZGl0b3JAMC40Ny4wL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvc3Qvc3QuanM/ZjVlMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBWZXJzaW9uOiAwLjQ3LjAoNjk5OTFkNjYxMzVlNGExZmMxY2YwYjFhYzRhZDI1ZDQyOTg2NmEwZClcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9tb25hY28tZWRpdG9yL2Jsb2IvbWFpbi9MSUNFTlNFLnR4dFxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblxuLy8gc3JjL2Jhc2ljLWxhbmd1YWdlcy9zdC9zdC50c1xudmFyIGNvbmYgPSB7XG4gIGNvbW1lbnRzOiB7XG4gICAgbGluZUNvbW1lbnQ6IFwiLy9cIixcbiAgICBibG9ja0NvbW1lbnQ6IFtcIigqXCIsIFwiKilcIl1cbiAgfSxcbiAgYnJhY2tldHM6IFtcbiAgICBbXCJ7XCIsIFwifVwiXSxcbiAgICBbXCJbXCIsIFwiXVwiXSxcbiAgICBbXCIoXCIsIFwiKVwiXSxcbiAgICBbXCJ2YXJcIiwgXCJlbmRfdmFyXCJdLFxuICAgIFtcInZhcl9pbnB1dFwiLCBcImVuZF92YXJcIl0sXG4gICAgW1widmFyX291dHB1dFwiLCBcImVuZF92YXJcIl0sXG4gICAgW1widmFyX2luX291dFwiLCBcImVuZF92YXJcIl0sXG4gICAgW1widmFyX3RlbXBcIiwgXCJlbmRfdmFyXCJdLFxuICAgIFtcInZhcl9nbG9iYWxcIiwgXCJlbmRfdmFyXCJdLFxuICAgIFtcInZhcl9hY2Nlc3NcIiwgXCJlbmRfdmFyXCJdLFxuICAgIFtcInZhcl9leHRlcm5hbFwiLCBcImVuZF92YXJcIl0sXG4gICAgW1widHlwZVwiLCBcImVuZF90eXBlXCJdLFxuICAgIFtcInN0cnVjdFwiLCBcImVuZF9zdHJ1Y3RcIl0sXG4gICAgW1wicHJvZ3JhbVwiLCBcImVuZF9wcm9ncmFtXCJdLFxuICAgIFtcImZ1bmN0aW9uXCIsIFwiZW5kX2Z1bmN0aW9uXCJdLFxuICAgIFtcImZ1bmN0aW9uX2Jsb2NrXCIsIFwiZW5kX2Z1bmN0aW9uX2Jsb2NrXCJdLFxuICAgIFtcImFjdGlvblwiLCBcImVuZF9hY3Rpb25cIl0sXG4gICAgW1wic3RlcFwiLCBcImVuZF9zdGVwXCJdLFxuICAgIFtcImluaXRpYWxfc3RlcFwiLCBcImVuZF9zdGVwXCJdLFxuICAgIFtcInRyYW5zYWN0aW9uXCIsIFwiZW5kX3RyYW5zYWN0aW9uXCJdLFxuICAgIFtcImNvbmZpZ3VyYXRpb25cIiwgXCJlbmRfY29uZmlndXJhdGlvblwiXSxcbiAgICBbXCJ0Y3BcIiwgXCJlbmRfdGNwXCJdLFxuICAgIFtcInJlY291cmNlXCIsIFwiZW5kX3JlY291cmNlXCJdLFxuICAgIFtcImNoYW5uZWxcIiwgXCJlbmRfY2hhbm5lbFwiXSxcbiAgICBbXCJsaWJyYXJ5XCIsIFwiZW5kX2xpYnJhcnlcIl0sXG4gICAgW1wiZm9sZGVyXCIsIFwiZW5kX2ZvbGRlclwiXSxcbiAgICBbXCJiaW5hcmllc1wiLCBcImVuZF9iaW5hcmllc1wiXSxcbiAgICBbXCJpbmNsdWRlc1wiLCBcImVuZF9pbmNsdWRlc1wiXSxcbiAgICBbXCJzb3VyY2VzXCIsIFwiZW5kX3NvdXJjZXNcIl1cbiAgXSxcbiAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgIHsgb3BlbjogXCJbXCIsIGNsb3NlOiBcIl1cIiB9LFxuICAgIHsgb3BlbjogXCJ7XCIsIGNsb3NlOiBcIn1cIiB9LFxuICAgIHsgb3BlbjogXCIoXCIsIGNsb3NlOiBcIilcIiB9LFxuICAgIHsgb3BlbjogXCIvKlwiLCBjbG9zZTogXCIqL1wiIH0sXG4gICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiLCBub3RJbjogW1wic3RyaW5nX3NxXCJdIH0sXG4gICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFtcInN0cmluZ19kcVwiXSB9LFxuICAgIHsgb3BlbjogXCJ2YXJfaW5wdXRcIiwgY2xvc2U6IFwiZW5kX3ZhclwiIH0sXG4gICAgeyBvcGVuOiBcInZhcl9vdXRwdXRcIiwgY2xvc2U6IFwiZW5kX3ZhclwiIH0sXG4gICAgeyBvcGVuOiBcInZhcl9pbl9vdXRcIiwgY2xvc2U6IFwiZW5kX3ZhclwiIH0sXG4gICAgeyBvcGVuOiBcInZhcl90ZW1wXCIsIGNsb3NlOiBcImVuZF92YXJcIiB9LFxuICAgIHsgb3BlbjogXCJ2YXJfZ2xvYmFsXCIsIGNsb3NlOiBcImVuZF92YXJcIiB9LFxuICAgIHsgb3BlbjogXCJ2YXJfYWNjZXNzXCIsIGNsb3NlOiBcImVuZF92YXJcIiB9LFxuICAgIHsgb3BlbjogXCJ2YXJfZXh0ZXJuYWxcIiwgY2xvc2U6IFwiZW5kX3ZhclwiIH0sXG4gICAgeyBvcGVuOiBcInR5cGVcIiwgY2xvc2U6IFwiZW5kX3R5cGVcIiB9LFxuICAgIHsgb3BlbjogXCJzdHJ1Y3RcIiwgY2xvc2U6IFwiZW5kX3N0cnVjdFwiIH0sXG4gICAgeyBvcGVuOiBcInByb2dyYW1cIiwgY2xvc2U6IFwiZW5kX3Byb2dyYW1cIiB9LFxuICAgIHsgb3BlbjogXCJmdW5jdGlvblwiLCBjbG9zZTogXCJlbmRfZnVuY3Rpb25cIiB9LFxuICAgIHsgb3BlbjogXCJmdW5jdGlvbl9ibG9ja1wiLCBjbG9zZTogXCJlbmRfZnVuY3Rpb25fYmxvY2tcIiB9LFxuICAgIHsgb3BlbjogXCJhY3Rpb25cIiwgY2xvc2U6IFwiZW5kX2FjdGlvblwiIH0sXG4gICAgeyBvcGVuOiBcInN0ZXBcIiwgY2xvc2U6IFwiZW5kX3N0ZXBcIiB9LFxuICAgIHsgb3BlbjogXCJpbml0aWFsX3N0ZXBcIiwgY2xvc2U6IFwiZW5kX3N0ZXBcIiB9LFxuICAgIHsgb3BlbjogXCJ0cmFuc2FjdGlvblwiLCBjbG9zZTogXCJlbmRfdHJhbnNhY3Rpb25cIiB9LFxuICAgIHsgb3BlbjogXCJjb25maWd1cmF0aW9uXCIsIGNsb3NlOiBcImVuZF9jb25maWd1cmF0aW9uXCIgfSxcbiAgICB7IG9wZW46IFwidGNwXCIsIGNsb3NlOiBcImVuZF90Y3BcIiB9LFxuICAgIHsgb3BlbjogXCJyZWNvdXJjZVwiLCBjbG9zZTogXCJlbmRfcmVjb3VyY2VcIiB9LFxuICAgIHsgb3BlbjogXCJjaGFubmVsXCIsIGNsb3NlOiBcImVuZF9jaGFubmVsXCIgfSxcbiAgICB7IG9wZW46IFwibGlicmFyeVwiLCBjbG9zZTogXCJlbmRfbGlicmFyeVwiIH0sXG4gICAgeyBvcGVuOiBcImZvbGRlclwiLCBjbG9zZTogXCJlbmRfZm9sZGVyXCIgfSxcbiAgICB7IG9wZW46IFwiYmluYXJpZXNcIiwgY2xvc2U6IFwiZW5kX2JpbmFyaWVzXCIgfSxcbiAgICB7IG9wZW46IFwiaW5jbHVkZXNcIiwgY2xvc2U6IFwiZW5kX2luY2x1ZGVzXCIgfSxcbiAgICB7IG9wZW46IFwic291cmNlc1wiLCBjbG9zZTogXCJlbmRfc291cmNlc1wiIH1cbiAgXSxcbiAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgIHsgb3BlbjogXCJ7XCIsIGNsb3NlOiBcIn1cIiB9LFxuICAgIHsgb3BlbjogXCJbXCIsIGNsb3NlOiBcIl1cIiB9LFxuICAgIHsgb3BlbjogXCIoXCIsIGNsb3NlOiBcIilcIiB9LFxuICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfSxcbiAgICB7IG9wZW46IFwidmFyXCIsIGNsb3NlOiBcImVuZF92YXJcIiB9LFxuICAgIHsgb3BlbjogXCJ2YXJfaW5wdXRcIiwgY2xvc2U6IFwiZW5kX3ZhclwiIH0sXG4gICAgeyBvcGVuOiBcInZhcl9vdXRwdXRcIiwgY2xvc2U6IFwiZW5kX3ZhclwiIH0sXG4gICAgeyBvcGVuOiBcInZhcl9pbl9vdXRcIiwgY2xvc2U6IFwiZW5kX3ZhclwiIH0sXG4gICAgeyBvcGVuOiBcInZhcl90ZW1wXCIsIGNsb3NlOiBcImVuZF92YXJcIiB9LFxuICAgIHsgb3BlbjogXCJ2YXJfZ2xvYmFsXCIsIGNsb3NlOiBcImVuZF92YXJcIiB9LFxuICAgIHsgb3BlbjogXCJ2YXJfYWNjZXNzXCIsIGNsb3NlOiBcImVuZF92YXJcIiB9LFxuICAgIHsgb3BlbjogXCJ2YXJfZXh0ZXJuYWxcIiwgY2xvc2U6IFwiZW5kX3ZhclwiIH0sXG4gICAgeyBvcGVuOiBcInR5cGVcIiwgY2xvc2U6IFwiZW5kX3R5cGVcIiB9LFxuICAgIHsgb3BlbjogXCJzdHJ1Y3RcIiwgY2xvc2U6IFwiZW5kX3N0cnVjdFwiIH0sXG4gICAgeyBvcGVuOiBcInByb2dyYW1cIiwgY2xvc2U6IFwiZW5kX3Byb2dyYW1cIiB9LFxuICAgIHsgb3BlbjogXCJmdW5jdGlvblwiLCBjbG9zZTogXCJlbmRfZnVuY3Rpb25cIiB9LFxuICAgIHsgb3BlbjogXCJmdW5jdGlvbl9ibG9ja1wiLCBjbG9zZTogXCJlbmRfZnVuY3Rpb25fYmxvY2tcIiB9LFxuICAgIHsgb3BlbjogXCJhY3Rpb25cIiwgY2xvc2U6IFwiZW5kX2FjdGlvblwiIH0sXG4gICAgeyBvcGVuOiBcInN0ZXBcIiwgY2xvc2U6IFwiZW5kX3N0ZXBcIiB9LFxuICAgIHsgb3BlbjogXCJpbml0aWFsX3N0ZXBcIiwgY2xvc2U6IFwiZW5kX3N0ZXBcIiB9LFxuICAgIHsgb3BlbjogXCJ0cmFuc2FjdGlvblwiLCBjbG9zZTogXCJlbmRfdHJhbnNhY3Rpb25cIiB9LFxuICAgIHsgb3BlbjogXCJjb25maWd1cmF0aW9uXCIsIGNsb3NlOiBcImVuZF9jb25maWd1cmF0aW9uXCIgfSxcbiAgICB7IG9wZW46IFwidGNwXCIsIGNsb3NlOiBcImVuZF90Y3BcIiB9LFxuICAgIHsgb3BlbjogXCJyZWNvdXJjZVwiLCBjbG9zZTogXCJlbmRfcmVjb3VyY2VcIiB9LFxuICAgIHsgb3BlbjogXCJjaGFubmVsXCIsIGNsb3NlOiBcImVuZF9jaGFubmVsXCIgfSxcbiAgICB7IG9wZW46IFwibGlicmFyeVwiLCBjbG9zZTogXCJlbmRfbGlicmFyeVwiIH0sXG4gICAgeyBvcGVuOiBcImZvbGRlclwiLCBjbG9zZTogXCJlbmRfZm9sZGVyXCIgfSxcbiAgICB7IG9wZW46IFwiYmluYXJpZXNcIiwgY2xvc2U6IFwiZW5kX2JpbmFyaWVzXCIgfSxcbiAgICB7IG9wZW46IFwiaW5jbHVkZXNcIiwgY2xvc2U6IFwiZW5kX2luY2x1ZGVzXCIgfSxcbiAgICB7IG9wZW46IFwic291cmNlc1wiLCBjbG9zZTogXCJlbmRfc291cmNlc1wiIH1cbiAgXSxcbiAgZm9sZGluZzoge1xuICAgIG1hcmtlcnM6IHtcbiAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKFwiXlxcXFxzKiNwcmFnbWFcXFxccytyZWdpb25cXFxcYlwiKSxcbiAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccyojcHJhZ21hXFxcXHMrZW5kcmVnaW9uXFxcXGJcIilcbiAgICB9XG4gIH1cbn07XG52YXIgbGFuZ3VhZ2UgPSB7XG4gIGRlZmF1bHRUb2tlbjogXCJcIixcbiAgdG9rZW5Qb3N0Zml4OiBcIi5zdFwiLFxuICBpZ25vcmVDYXNlOiB0cnVlLFxuICBicmFja2V0czogW1xuICAgIHsgdG9rZW46IFwiZGVsaW1pdGVyLmN1cmx5XCIsIG9wZW46IFwie1wiLCBjbG9zZTogXCJ9XCIgfSxcbiAgICB7IHRva2VuOiBcImRlbGltaXRlci5wYXJlbnRoZXNpc1wiLCBvcGVuOiBcIihcIiwgY2xvc2U6IFwiKVwiIH0sXG4gICAgeyB0b2tlbjogXCJkZWxpbWl0ZXIuc3F1YXJlXCIsIG9wZW46IFwiW1wiLCBjbG9zZTogXCJdXCIgfVxuICBdLFxuICBrZXl3b3JkczogW1xuICAgIFwiaWZcIixcbiAgICBcImVuZF9pZlwiLFxuICAgIFwiZWxzaWZcIixcbiAgICBcImVsc2VcIixcbiAgICBcImNhc2VcIixcbiAgICBcIm9mXCIsXG4gICAgXCJ0b1wiLFxuICAgIFwiX190cnlcIixcbiAgICBcIl9fY2F0Y2hcIixcbiAgICBcIl9fZmluYWxseVwiLFxuICAgIFwiZG9cIixcbiAgICBcIndpdGhcIixcbiAgICBcImJ5XCIsXG4gICAgXCJ3aGlsZVwiLFxuICAgIFwicmVwZWF0XCIsXG4gICAgXCJlbmRfd2hpbGVcIixcbiAgICBcImVuZF9yZXBlYXRcIixcbiAgICBcImVuZF9jYXNlXCIsXG4gICAgXCJmb3JcIixcbiAgICBcImVuZF9mb3JcIixcbiAgICBcInRhc2tcIixcbiAgICBcInJldGFpblwiLFxuICAgIFwibm9uX3JldGFpblwiLFxuICAgIFwiY29uc3RhbnRcIixcbiAgICBcIndpdGhcIixcbiAgICBcImF0XCIsXG4gICAgXCJleGl0XCIsXG4gICAgXCJyZXR1cm5cIixcbiAgICBcImludGVydmFsXCIsXG4gICAgXCJwcmlvcml0eVwiLFxuICAgIFwiYWRkcmVzc1wiLFxuICAgIFwicG9ydFwiLFxuICAgIFwib25fY2hhbm5lbFwiLFxuICAgIFwidGhlblwiLFxuICAgIFwiaWVjXCIsXG4gICAgXCJmaWxlXCIsXG4gICAgXCJ1c2VzXCIsXG4gICAgXCJ2ZXJzaW9uXCIsXG4gICAgXCJwYWNrYWdldHlwZVwiLFxuICAgIFwiZGlzcGxheW5hbWVcIixcbiAgICBcImNvcHlyaWdodFwiLFxuICAgIFwic3VtbWFyeVwiLFxuICAgIFwidmVuZG9yXCIsXG4gICAgXCJjb21tb25fc291cmNlXCIsXG4gICAgXCJmcm9tXCIsXG4gICAgXCJleHRlbmRzXCIsXG4gICAgXCJpbXBsZW1lbnRzXCJcbiAgXSxcbiAgY29uc3RhbnQ6IFtcImZhbHNlXCIsIFwidHJ1ZVwiLCBcIm51bGxcIl0sXG4gIGRlZmluZUtleXdvcmRzOiBbXG4gICAgXCJ2YXJcIixcbiAgICBcInZhcl9pbnB1dFwiLFxuICAgIFwidmFyX291dHB1dFwiLFxuICAgIFwidmFyX2luX291dFwiLFxuICAgIFwidmFyX3RlbXBcIixcbiAgICBcInZhcl9nbG9iYWxcIixcbiAgICBcInZhcl9hY2Nlc3NcIixcbiAgICBcInZhcl9leHRlcm5hbFwiLFxuICAgIFwiZW5kX3ZhclwiLFxuICAgIFwidHlwZVwiLFxuICAgIFwiZW5kX3R5cGVcIixcbiAgICBcInN0cnVjdFwiLFxuICAgIFwiZW5kX3N0cnVjdFwiLFxuICAgIFwicHJvZ3JhbVwiLFxuICAgIFwiZW5kX3Byb2dyYW1cIixcbiAgICBcImZ1bmN0aW9uXCIsXG4gICAgXCJlbmRfZnVuY3Rpb25cIixcbiAgICBcImZ1bmN0aW9uX2Jsb2NrXCIsXG4gICAgXCJlbmRfZnVuY3Rpb25fYmxvY2tcIixcbiAgICBcImludGVyZmFjZVwiLFxuICAgIFwiZW5kX2ludGVyZmFjZVwiLFxuICAgIFwibWV0aG9kXCIsXG4gICAgXCJlbmRfbWV0aG9kXCIsXG4gICAgXCJwcm9wZXJ0eVwiLFxuICAgIFwiZW5kX3Byb3BlcnR5XCIsXG4gICAgXCJuYW1lc3BhY2VcIixcbiAgICBcImVuZF9uYW1lc3BhY2VcIixcbiAgICBcImNvbmZpZ3VyYXRpb25cIixcbiAgICBcImVuZF9jb25maWd1cmF0aW9uXCIsXG4gICAgXCJ0Y3BcIixcbiAgICBcImVuZF90Y3BcIixcbiAgICBcInJlc291cmNlXCIsXG4gICAgXCJlbmRfcmVzb3VyY2VcIixcbiAgICBcImNoYW5uZWxcIixcbiAgICBcImVuZF9jaGFubmVsXCIsXG4gICAgXCJsaWJyYXJ5XCIsXG4gICAgXCJlbmRfbGlicmFyeVwiLFxuICAgIFwiZm9sZGVyXCIsXG4gICAgXCJlbmRfZm9sZGVyXCIsXG4gICAgXCJiaW5hcmllc1wiLFxuICAgIFwiZW5kX2JpbmFyaWVzXCIsXG4gICAgXCJpbmNsdWRlc1wiLFxuICAgIFwiZW5kX2luY2x1ZGVzXCIsXG4gICAgXCJzb3VyY2VzXCIsXG4gICAgXCJlbmRfc291cmNlc1wiLFxuICAgIFwiYWN0aW9uXCIsXG4gICAgXCJlbmRfYWN0aW9uXCIsXG4gICAgXCJzdGVwXCIsXG4gICAgXCJpbml0aWFsX3N0ZXBcIixcbiAgICBcImVuZF9zdGVwXCIsXG4gICAgXCJ0cmFuc2FjdGlvblwiLFxuICAgIFwiZW5kX3RyYW5zYWN0aW9uXCJcbiAgXSxcbiAgdHlwZUtleXdvcmRzOiBbXG4gICAgXCJpbnRcIixcbiAgICBcInNpbnRcIixcbiAgICBcImRpbnRcIixcbiAgICBcImxpbnRcIixcbiAgICBcInVzaW50XCIsXG4gICAgXCJ1aW50XCIsXG4gICAgXCJ1ZGludFwiLFxuICAgIFwidWxpbnRcIixcbiAgICBcInJlYWxcIixcbiAgICBcImxyZWFsXCIsXG4gICAgXCJ0aW1lXCIsXG4gICAgXCJkYXRlXCIsXG4gICAgXCJ0aW1lX29mX2RheVwiLFxuICAgIFwiZGF0ZV9hbmRfdGltZVwiLFxuICAgIFwic3RyaW5nXCIsXG4gICAgXCJib29sXCIsXG4gICAgXCJieXRlXCIsXG4gICAgXCJ3b3JkXCIsXG4gICAgXCJkd29yZFwiLFxuICAgIFwiYXJyYXlcIixcbiAgICBcInBvaW50ZXJcIixcbiAgICBcImx3b3JkXCJcbiAgXSxcbiAgb3BlcmF0b3JzOiBbXG4gICAgXCI9XCIsXG4gICAgXCI+XCIsXG4gICAgXCI8XCIsXG4gICAgXCI6XCIsXG4gICAgXCI6PVwiLFxuICAgIFwiPD1cIixcbiAgICBcIj49XCIsXG4gICAgXCI8PlwiLFxuICAgIFwiJlwiLFxuICAgIFwiK1wiLFxuICAgIFwiLVwiLFxuICAgIFwiKlwiLFxuICAgIFwiKipcIixcbiAgICBcIk1PRFwiLFxuICAgIFwiXlwiLFxuICAgIFwib3JcIixcbiAgICBcImFuZFwiLFxuICAgIFwibm90XCIsXG4gICAgXCJ4b3JcIixcbiAgICBcImFic1wiLFxuICAgIFwiYWNvc1wiLFxuICAgIFwiYXNpblwiLFxuICAgIFwiYXRhblwiLFxuICAgIFwiY29zXCIsXG4gICAgXCJleHBcIixcbiAgICBcImV4cHRcIixcbiAgICBcImxuXCIsXG4gICAgXCJsb2dcIixcbiAgICBcInNpblwiLFxuICAgIFwic3FydFwiLFxuICAgIFwidGFuXCIsXG4gICAgXCJzZWxcIixcbiAgICBcIm1heFwiLFxuICAgIFwibWluXCIsXG4gICAgXCJsaW1pdFwiLFxuICAgIFwibXV4XCIsXG4gICAgXCJzaGxcIixcbiAgICBcInNoclwiLFxuICAgIFwicm9sXCIsXG4gICAgXCJyb3JcIixcbiAgICBcImluZGV4b2ZcIixcbiAgICBcInNpemVvZlwiLFxuICAgIFwiYWRyXCIsXG4gICAgXCJhZHJpbnN0XCIsXG4gICAgXCJiaXRhZHJcIixcbiAgICBcImlzX3ZhbGlkXCIsXG4gICAgXCJyZWZcIixcbiAgICBcInJlZl90b1wiXG4gIF0sXG4gIGJ1aWx0aW5WYXJpYWJsZXM6IFtdLFxuICBidWlsdGluRnVuY3Rpb25zOiBbXG4gICAgXCJzclwiLFxuICAgIFwicnNcIixcbiAgICBcInRwXCIsXG4gICAgXCJ0b25cIixcbiAgICBcInRvZlwiLFxuICAgIFwiZXFcIixcbiAgICBcImdlXCIsXG4gICAgXCJsZVwiLFxuICAgIFwibHRcIixcbiAgICBcIm5lXCIsXG4gICAgXCJyb3VuZFwiLFxuICAgIFwidHJ1bmNcIixcbiAgICBcImN0ZFwiLFxuICAgIFwiXFx1MDQ0MXR1XCIsXG4gICAgXCJjdHVkXCIsXG4gICAgXCJyX3RyaWdcIixcbiAgICBcImZfdHJpZ1wiLFxuICAgIFwibW92ZVwiLFxuICAgIFwiY29uY2F0XCIsXG4gICAgXCJkZWxldGVcIixcbiAgICBcImZpbmRcIixcbiAgICBcImluc2VydFwiLFxuICAgIFwibGVmdFwiLFxuICAgIFwibGVuXCIsXG4gICAgXCJyZXBsYWNlXCIsXG4gICAgXCJyaWdodFwiLFxuICAgIFwicnRjXCJcbiAgXSxcbiAgLy8gd2UgaW5jbHVkZSB0aGVzZSBjb21tb24gcmVndWxhciBleHByZXNzaW9uc1xuICBzeW1ib2xzOiAvWz0+PCF+PzomfCtcXC0qXFwvXFxeJV0rLyxcbiAgLy8gQyMgc3R5bGUgc3RyaW5nc1xuICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxuICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcbiAgdG9rZW5pemVyOiB7XG4gICAgcm9vdDogW1xuICAgICAgWy8oXFwuXFwuKS8sIFwiZGVsaW1pdGVyXCJdLFxuICAgICAgWy9cXGIoMTYjWzAtOUEtRmEtZlxcX10qKStcXGIvLCBcIm51bWJlci5oZXhcIl0sXG4gICAgICBbL1xcYigyI1swMVxcX10rKStcXGIvLCBcIm51bWJlci5iaW5hcnlcIl0sXG4gICAgICBbL1xcYig4I1swLTlcXF9dKikrXFxiLywgXCJudW1iZXIub2N0YWxcIl0sXG4gICAgICBbL1xcYlxcZCpcXC5cXGQrKFtlRV1bXFwtK10/XFxkKyk/XFxiLywgXCJudW1iZXIuZmxvYXRcIl0sXG4gICAgICBbL1xcYihMP1JFQUwpI1swLTlcXF9cXC5lXStcXGIvLCBcIm51bWJlci5mbG9hdFwiXSxcbiAgICAgIFsvXFxiKEJZVEV8KD86RHxMKT9XT1JEfFU/KD86U3xEfEwpP0lOVCkjWzAtOVxcX10rXFxiLywgXCJudW1iZXJcIl0sXG4gICAgICBbL1xcZCsvLCBcIm51bWJlclwiXSxcbiAgICAgIFsvXFxiKFR8RFR8VE9EKSNbMC05Oi1fc2hteWRdK1xcYi8sIFwidGFnXCJdLFxuICAgICAgWy9cXCUoSXxRfE0pKFh8QnxXfER8TClbMC05XFwuXSsvLCBcInRhZ1wiXSxcbiAgICAgIFsvXFwlKEl8UXxNKVswLTlcXC5dKi8sIFwidGFnXCJdLFxuICAgICAgWy9cXGJbQS1aYS16XXsxLDZ9I1swLTldK1xcYi8sIFwidGFnXCJdLFxuICAgICAgWy9cXGIoVE9ffENUVV98Q1REX3xDVFVEX3xNVVhffFNFTF8pW0FfWmEtel0rXFxiLywgXCJwcmVkZWZpbmVkXCJdLFxuICAgICAgWy9cXGJbQV9aYS16XSsoX1RPXylbQV9aYS16XStcXGIvLCBcInByZWRlZmluZWRcIl0sXG4gICAgICBbL1s7XS8sIFwiZGVsaW1pdGVyXCJdLFxuICAgICAgWy9bLl0vLCB7IHRva2VuOiBcImRlbGltaXRlclwiLCBuZXh0OiBcIkBwYXJhbXNcIiB9XSxcbiAgICAgIC8vIGlkZW50aWZpZXJzIGFuZCBrZXl3b3Jkc1xuICAgICAgW1xuICAgICAgICAvW2EtekEtWl9dXFx3Ki8sXG4gICAgICAgIHtcbiAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgXCJAb3BlcmF0b3JzXCI6IFwib3BlcmF0b3JzXCIsXG4gICAgICAgICAgICBcIkBrZXl3b3Jkc1wiOiBcImtleXdvcmRcIixcbiAgICAgICAgICAgIFwiQHR5cGVLZXl3b3Jkc1wiOiBcInR5cGVcIixcbiAgICAgICAgICAgIFwiQGRlZmluZUtleXdvcmRzXCI6IFwidmFyaWFibGVcIixcbiAgICAgICAgICAgIFwiQGNvbnN0YW50XCI6IFwiY29uc3RhbnRcIixcbiAgICAgICAgICAgIFwiQGJ1aWx0aW5WYXJpYWJsZXNcIjogXCJwcmVkZWZpbmVkXCIsXG4gICAgICAgICAgICBcIkBidWlsdGluRnVuY3Rpb25zXCI6IFwicHJlZGVmaW5lZFwiLFxuICAgICAgICAgICAgXCJAZGVmYXVsdFwiOiBcImlkZW50aWZpZXJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHsgaW5jbHVkZTogXCJAd2hpdGVzcGFjZVwiIH0sXG4gICAgICBbL1t7fSgpXFxbXFxdXS8sIFwiQGJyYWNrZXRzXCJdLFxuICAgICAgWy9cIihbXlwiXFxcXF18XFxcXC4pKiQvLCBcInN0cmluZy5pbnZhbGlkXCJdLFxuICAgICAgLy8gbm9uLXRlbWluYXRlZCBzdHJpbmdcbiAgICAgIFsvXCIvLCB7IHRva2VuOiBcInN0cmluZy5xdW90ZVwiLCBicmFja2V0OiBcIkBvcGVuXCIsIG5leHQ6IFwiQHN0cmluZ19kcVwiIH1dLFxuICAgICAgWy8nLywgeyB0b2tlbjogXCJzdHJpbmcucXVvdGVcIiwgYnJhY2tldDogXCJAb3BlblwiLCBuZXh0OiBcIkBzdHJpbmdfc3FcIiB9XSxcbiAgICAgIFsvJ1teXFxcXCddJy8sIFwic3RyaW5nXCJdLFxuICAgICAgWy8oJykoQGVzY2FwZXMpKCcpLywgW1wic3RyaW5nXCIsIFwic3RyaW5nLmVzY2FwZVwiLCBcInN0cmluZ1wiXV0sXG4gICAgICBbLycvLCBcInN0cmluZy5pbnZhbGlkXCJdXG4gICAgXSxcbiAgICBwYXJhbXM6IFtcbiAgICAgIFsvXFxiW0EtWmEtejAtOV9dK1xcYig/PVxcKCkvLCB7IHRva2VuOiBcImlkZW50aWZpZXJcIiwgbmV4dDogXCJAcG9wXCIgfV0sXG4gICAgICBbL1xcYltBLVphLXowLTlfXStcXGIvLCBcInZhcmlhYmxlLm5hbWVcIiwgXCJAcG9wXCJdXG4gICAgXSxcbiAgICBjb21tZW50OiBbXG4gICAgICBbL1teXFwvKl0rLywgXCJjb21tZW50XCJdLFxuICAgICAgWy9cXC9cXCovLCBcImNvbW1lbnRcIiwgXCJAcHVzaFwiXSxcbiAgICAgIC8vIG5lc3RlZCBjb21tZW50XG4gICAgICBbXCJcXFxcKi9cIiwgXCJjb21tZW50XCIsIFwiQHBvcFwiXSxcbiAgICAgIFsvW1xcLypdLywgXCJjb21tZW50XCJdXG4gICAgXSxcbiAgICBjb21tZW50MjogW1xuICAgICAgWy9bXlxcKCpdKy8sIFwiY29tbWVudFwiXSxcbiAgICAgIFsvXFwoXFwqLywgXCJjb21tZW50XCIsIFwiQHB1c2hcIl0sXG4gICAgICAvLyBuZXN0ZWQgY29tbWVudFxuICAgICAgW1wiXFxcXCpcXFxcKVwiLCBcImNvbW1lbnRcIiwgXCJAcG9wXCJdLFxuICAgICAgWy9bXFwoKl0vLCBcImNvbW1lbnRcIl1cbiAgICBdLFxuICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgIFsvWyBcXHRcXHJcXG5dKy8sIFwid2hpdGVcIl0sXG4gICAgICBbL1xcL1xcLy4qJC8sIFwiY29tbWVudFwiXSxcbiAgICAgIFsvXFwvXFwqLywgXCJjb21tZW50XCIsIFwiQGNvbW1lbnRcIl0sXG4gICAgICBbL1xcKFxcKi8sIFwiY29tbWVudFwiLCBcIkBjb21tZW50MlwiXVxuICAgIF0sXG4gICAgc3RyaW5nX2RxOiBbXG4gICAgICBbL1teXFxcXFwiXSsvLCBcInN0cmluZ1wiXSxcbiAgICAgIFsvQGVzY2FwZXMvLCBcInN0cmluZy5lc2NhcGVcIl0sXG4gICAgICBbL1xcXFwuLywgXCJzdHJpbmcuZXNjYXBlLmludmFsaWRcIl0sXG4gICAgICBbL1wiLywgeyB0b2tlbjogXCJzdHJpbmcucXVvdGVcIiwgYnJhY2tldDogXCJAY2xvc2VcIiwgbmV4dDogXCJAcG9wXCIgfV1cbiAgICBdLFxuICAgIHN0cmluZ19zcTogW1xuICAgICAgWy9bXlxcXFwnXSsvLCBcInN0cmluZ1wiXSxcbiAgICAgIFsvQGVzY2FwZXMvLCBcInN0cmluZy5lc2NhcGVcIl0sXG4gICAgICBbL1xcXFwuLywgXCJzdHJpbmcuZXNjYXBlLmludmFsaWRcIl0sXG4gICAgICBbLycvLCB7IHRva2VuOiBcInN0cmluZy5xdW90ZVwiLCBicmFja2V0OiBcIkBjbG9zZVwiLCBuZXh0OiBcIkBwb3BcIiB9XVxuICAgIF1cbiAgfVxufTtcbmV4cG9ydCB7XG4gIGNvbmYsXG4gIGxhbmd1YWdlXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6077\n')}}]);