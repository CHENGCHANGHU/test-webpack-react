"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[4480],{4480:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.47.0(69991d66135e4a1fc1cf0b1ac4ad25d429866a0d)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n\n// src/basic-languages/pug/pug.ts\nvar conf = {\n  comments: {\n    lineComment: "//"\n  },\n  brackets: [\n    ["{", "}"],\n    ["[", "]"],\n    ["(", ")"]\n  ],\n  autoClosingPairs: [\n    { open: \'"\', close: \'"\', notIn: ["string", "comment"] },\n    { open: "\'", close: "\'", notIn: ["string", "comment"] },\n    { open: "{", close: "}", notIn: ["string", "comment"] },\n    { open: "[", close: "]", notIn: ["string", "comment"] },\n    { open: "(", close: ")", notIn: ["string", "comment"] }\n  ],\n  folding: {\n    offSide: true\n  }\n};\nvar language = {\n  defaultToken: "",\n  tokenPostfix: ".pug",\n  ignoreCase: true,\n  brackets: [\n    { token: "delimiter.curly", open: "{", close: "}" },\n    { token: "delimiter.array", open: "[", close: "]" },\n    { token: "delimiter.parenthesis", open: "(", close: ")" }\n  ],\n  keywords: [\n    "append",\n    "block",\n    "case",\n    "default",\n    "doctype",\n    "each",\n    "else",\n    "extends",\n    "for",\n    "if",\n    "in",\n    "include",\n    "mixin",\n    "typeof",\n    "unless",\n    "var",\n    "when"\n  ],\n  tags: [\n    "a",\n    "abbr",\n    "acronym",\n    "address",\n    "area",\n    "article",\n    "aside",\n    "audio",\n    "b",\n    "base",\n    "basefont",\n    "bdi",\n    "bdo",\n    "blockquote",\n    "body",\n    "br",\n    "button",\n    "canvas",\n    "caption",\n    "center",\n    "cite",\n    "code",\n    "col",\n    "colgroup",\n    "command",\n    "datalist",\n    "dd",\n    "del",\n    "details",\n    "dfn",\n    "div",\n    "dl",\n    "dt",\n    "em",\n    "embed",\n    "fieldset",\n    "figcaption",\n    "figure",\n    "font",\n    "footer",\n    "form",\n    "frame",\n    "frameset",\n    "h1",\n    "h2",\n    "h3",\n    "h4",\n    "h5",\n    "h6",\n    "head",\n    "header",\n    "hgroup",\n    "hr",\n    "html",\n    "i",\n    "iframe",\n    "img",\n    "input",\n    "ins",\n    "keygen",\n    "kbd",\n    "label",\n    "li",\n    "link",\n    "map",\n    "mark",\n    "menu",\n    "meta",\n    "meter",\n    "nav",\n    "noframes",\n    "noscript",\n    "object",\n    "ol",\n    "optgroup",\n    "option",\n    "output",\n    "p",\n    "param",\n    "pre",\n    "progress",\n    "q",\n    "rp",\n    "rt",\n    "ruby",\n    "s",\n    "samp",\n    "script",\n    "section",\n    "select",\n    "small",\n    "source",\n    "span",\n    "strike",\n    "strong",\n    "style",\n    "sub",\n    "summary",\n    "sup",\n    "table",\n    "tbody",\n    "td",\n    "textarea",\n    "tfoot",\n    "th",\n    "thead",\n    "time",\n    "title",\n    "tr",\n    "tracks",\n    "tt",\n    "u",\n    "ul",\n    "video",\n    "wbr"\n  ],\n  // we include these common regular expressions\n  symbols: /[\\+\\-\\*\\%\\&\\|\\!\\=\\/\\.\\,\\:]+/,\n  escapes: /\\\\(?:[abfnrtv\\\\"\']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n  tokenizer: {\n    root: [\n      // Tag or a keyword at start\n      [\n        /^(\\s*)([a-zA-Z_-][\\w-]*)/,\n        {\n          cases: {\n            "$2@tags": {\n              cases: {\n                "@eos": ["", "tag"],\n                "@default": ["", { token: "tag", next: "@tag.$1" }]\n              }\n            },\n            "$2@keywords": ["", { token: "keyword.$2" }],\n            "@default": ["", ""]\n          }\n        }\n      ],\n      // id\n      [\n        /^(\\s*)(#[a-zA-Z_-][\\w-]*)/,\n        {\n          cases: {\n            "@eos": ["", "tag.id"],\n            "@default": ["", { token: "tag.id", next: "@tag.$1" }]\n          }\n        }\n      ],\n      // class\n      [\n        /^(\\s*)(\\.[a-zA-Z_-][\\w-]*)/,\n        {\n          cases: {\n            "@eos": ["", "tag.class"],\n            "@default": ["", { token: "tag.class", next: "@tag.$1" }]\n          }\n        }\n      ],\n      // plain text with pipe\n      [/^(\\s*)(\\|.*)$/, ""],\n      { include: "@whitespace" },\n      // keywords\n      [\n        /[a-zA-Z_$][\\w$]*/,\n        {\n          cases: {\n            "@keywords": { token: "keyword.$0" },\n            "@default": ""\n          }\n        }\n      ],\n      // delimiters and operators\n      [/[{}()\\[\\]]/, "@brackets"],\n      [/@symbols/, "delimiter"],\n      // numbers\n      [/\\d+\\.\\d+([eE][\\-+]?\\d+)?/, "number.float"],\n      [/\\d+/, "number"],\n      // strings:\n      [/"/, "string", \'@string."\'],\n      [/\'/, "string", "@string.\'"]\n    ],\n    tag: [\n      [/(\\.)(\\s*$)/, [{ token: "delimiter", next: "@blockText.$S2." }, ""]],\n      [/\\s+/, { token: "", next: "@simpleText" }],\n      // id\n      [\n        /#[a-zA-Z_-][\\w-]*/,\n        {\n          cases: {\n            "@eos": { token: "tag.id", next: "@pop" },\n            "@default": "tag.id"\n          }\n        }\n      ],\n      // class\n      [\n        /\\.[a-zA-Z_-][\\w-]*/,\n        {\n          cases: {\n            "@eos": { token: "tag.class", next: "@pop" },\n            "@default": "tag.class"\n          }\n        }\n      ],\n      // attributes\n      [/\\(/, { token: "delimiter.parenthesis", next: "@attributeList" }]\n    ],\n    simpleText: [\n      [/[^#]+$/, { token: "", next: "@popall" }],\n      [/[^#]+/, { token: "" }],\n      // interpolation\n      [\n        /(#{)([^}]*)(})/,\n        {\n          cases: {\n            "@eos": [\n              "interpolation.delimiter",\n              "interpolation",\n              {\n                token: "interpolation.delimiter",\n                next: "@popall"\n              }\n            ],\n            "@default": ["interpolation.delimiter", "interpolation", "interpolation.delimiter"]\n          }\n        }\n      ],\n      [/#$/, { token: "", next: "@popall" }],\n      [/#/, ""]\n    ],\n    attributeList: [\n      [/\\s+/, ""],\n      [\n        /(\\w+)(\\s*=\\s*)("|\')/,\n        ["attribute.name", "delimiter", { token: "attribute.value", next: "@value.$3" }]\n      ],\n      [/\\w+/, "attribute.name"],\n      [\n        /,/,\n        {\n          cases: {\n            "@eos": {\n              token: "attribute.delimiter",\n              next: "@popall"\n            },\n            "@default": "attribute.delimiter"\n          }\n        }\n      ],\n      [/\\)$/, { token: "delimiter.parenthesis", next: "@popall" }],\n      [/\\)/, { token: "delimiter.parenthesis", next: "@pop" }]\n    ],\n    whitespace: [\n      [/^(\\s*)(\\/\\/.*)$/, { token: "comment", next: "@blockText.$1.comment" }],\n      [/[ \\t\\r\\n]+/, ""],\n      [/\x3c!--/, { token: "comment", next: "@comment" }]\n    ],\n    blockText: [\n      [\n        /^\\s+.*$/,\n        {\n          cases: {\n            "($S2\\\\s+.*$)": { token: "$S3" },\n            "@default": { token: "@rematch", next: "@popall" }\n          }\n        }\n      ],\n      [/./, { token: "@rematch", next: "@popall" }]\n    ],\n    comment: [\n      [/[^<\\-]+/, "comment.content"],\n      [/--\x3e/, { token: "comment", next: "@pop" }],\n      [/\x3c!--/, "comment.content.invalid"],\n      [/[<\\-]/, "comment.content"]\n    ],\n    string: [\n      [\n        /[^\\\\"\'#]+/,\n        {\n          cases: {\n            "@eos": { token: "string", next: "@popall" },\n            "@default": "string"\n          }\n        }\n      ],\n      [\n        /@escapes/,\n        {\n          cases: {\n            "@eos": { token: "string.escape", next: "@popall" },\n            "@default": "string.escape"\n          }\n        }\n      ],\n      [\n        /\\\\./,\n        {\n          cases: {\n            "@eos": {\n              token: "string.escape.invalid",\n              next: "@popall"\n            },\n            "@default": "string.escape.invalid"\n          }\n        }\n      ],\n      // interpolation\n      [/(#{)([^}]*)(})/, ["interpolation.delimiter", "interpolation", "interpolation.delimiter"]],\n      [/#/, "string"],\n      [\n        /["\']/,\n        {\n          cases: {\n            "$#==$S2": { token: "string", next: "@pop" },\n            "@default": { token: "string" }\n          }\n        }\n      ]\n    ],\n    // Almost identical to above, except for escapes and the output token\n    value: [\n      [\n        /[^\\\\"\']+/,\n        {\n          cases: {\n            "@eos": { token: "attribute.value", next: "@popall" },\n            "@default": "attribute.value"\n          }\n        }\n      ],\n      [\n        /\\\\./,\n        {\n          cases: {\n            "@eos": { token: "attribute.value", next: "@popall" },\n            "@default": "attribute.value"\n          }\n        }\n      ],\n      [\n        /["\']/,\n        {\n          cases: {\n            "$#==$S2": { token: "attribute.value", next: "@pop" },\n            "@default": { token: "attribute.value" }\n          }\n        }\n      ]\n    ]\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUlFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvLnBucG0vbW9uYWNvLWVkaXRvckAwLjQ3LjAvbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9wdWcvcHVnLmpzPzAzMDkiXSwic291cmNlc0NvbnRlbnQiOlsiLyohLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVmVyc2lvbjogMC40Ny4wKDY5OTkxZDY2MTM1ZTRhMWZjMWNmMGIxYWM0YWQyNWQ0Mjk4NjZhMGQpXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvbW9uYWNvLWVkaXRvci9ibG9iL21haW4vTElDRU5TRS50eHRcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cbi8vIHNyYy9iYXNpYy1sYW5ndWFnZXMvcHVnL3B1Zy50c1xudmFyIGNvbmYgPSB7XG4gIGNvbW1lbnRzOiB7XG4gICAgbGluZUNvbW1lbnQ6IFwiLy9cIlxuICB9LFxuICBicmFja2V0czogW1xuICAgIFtcIntcIiwgXCJ9XCJdLFxuICAgIFtcIltcIiwgXCJdXCJdLFxuICAgIFtcIihcIiwgXCIpXCJdXG4gIF0sXG4gIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogW1wic3RyaW5nXCIsIFwiY29tbWVudFwiXSB9LFxuICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiwgbm90SW46IFtcInN0cmluZ1wiLCBcImNvbW1lbnRcIl0gfSxcbiAgICB7IG9wZW46IFwie1wiLCBjbG9zZTogXCJ9XCIsIG5vdEluOiBbXCJzdHJpbmdcIiwgXCJjb21tZW50XCJdIH0sXG4gICAgeyBvcGVuOiBcIltcIiwgY2xvc2U6IFwiXVwiLCBub3RJbjogW1wic3RyaW5nXCIsIFwiY29tbWVudFwiXSB9LFxuICAgIHsgb3BlbjogXCIoXCIsIGNsb3NlOiBcIilcIiwgbm90SW46IFtcInN0cmluZ1wiLCBcImNvbW1lbnRcIl0gfVxuICBdLFxuICBmb2xkaW5nOiB7XG4gICAgb2ZmU2lkZTogdHJ1ZVxuICB9XG59O1xudmFyIGxhbmd1YWdlID0ge1xuICBkZWZhdWx0VG9rZW46IFwiXCIsXG4gIHRva2VuUG9zdGZpeDogXCIucHVnXCIsXG4gIGlnbm9yZUNhc2U6IHRydWUsXG4gIGJyYWNrZXRzOiBbXG4gICAgeyB0b2tlbjogXCJkZWxpbWl0ZXIuY3VybHlcIiwgb3BlbjogXCJ7XCIsIGNsb3NlOiBcIn1cIiB9LFxuICAgIHsgdG9rZW46IFwiZGVsaW1pdGVyLmFycmF5XCIsIG9wZW46IFwiW1wiLCBjbG9zZTogXCJdXCIgfSxcbiAgICB7IHRva2VuOiBcImRlbGltaXRlci5wYXJlbnRoZXNpc1wiLCBvcGVuOiBcIihcIiwgY2xvc2U6IFwiKVwiIH1cbiAgXSxcbiAga2V5d29yZHM6IFtcbiAgICBcImFwcGVuZFwiLFxuICAgIFwiYmxvY2tcIixcbiAgICBcImNhc2VcIixcbiAgICBcImRlZmF1bHRcIixcbiAgICBcImRvY3R5cGVcIixcbiAgICBcImVhY2hcIixcbiAgICBcImVsc2VcIixcbiAgICBcImV4dGVuZHNcIixcbiAgICBcImZvclwiLFxuICAgIFwiaWZcIixcbiAgICBcImluXCIsXG4gICAgXCJpbmNsdWRlXCIsXG4gICAgXCJtaXhpblwiLFxuICAgIFwidHlwZW9mXCIsXG4gICAgXCJ1bmxlc3NcIixcbiAgICBcInZhclwiLFxuICAgIFwid2hlblwiXG4gIF0sXG4gIHRhZ3M6IFtcbiAgICBcImFcIixcbiAgICBcImFiYnJcIixcbiAgICBcImFjcm9ueW1cIixcbiAgICBcImFkZHJlc3NcIixcbiAgICBcImFyZWFcIixcbiAgICBcImFydGljbGVcIixcbiAgICBcImFzaWRlXCIsXG4gICAgXCJhdWRpb1wiLFxuICAgIFwiYlwiLFxuICAgIFwiYmFzZVwiLFxuICAgIFwiYmFzZWZvbnRcIixcbiAgICBcImJkaVwiLFxuICAgIFwiYmRvXCIsXG4gICAgXCJibG9ja3F1b3RlXCIsXG4gICAgXCJib2R5XCIsXG4gICAgXCJiclwiLFxuICAgIFwiYnV0dG9uXCIsXG4gICAgXCJjYW52YXNcIixcbiAgICBcImNhcHRpb25cIixcbiAgICBcImNlbnRlclwiLFxuICAgIFwiY2l0ZVwiLFxuICAgIFwiY29kZVwiLFxuICAgIFwiY29sXCIsXG4gICAgXCJjb2xncm91cFwiLFxuICAgIFwiY29tbWFuZFwiLFxuICAgIFwiZGF0YWxpc3RcIixcbiAgICBcImRkXCIsXG4gICAgXCJkZWxcIixcbiAgICBcImRldGFpbHNcIixcbiAgICBcImRmblwiLFxuICAgIFwiZGl2XCIsXG4gICAgXCJkbFwiLFxuICAgIFwiZHRcIixcbiAgICBcImVtXCIsXG4gICAgXCJlbWJlZFwiLFxuICAgIFwiZmllbGRzZXRcIixcbiAgICBcImZpZ2NhcHRpb25cIixcbiAgICBcImZpZ3VyZVwiLFxuICAgIFwiZm9udFwiLFxuICAgIFwiZm9vdGVyXCIsXG4gICAgXCJmb3JtXCIsXG4gICAgXCJmcmFtZVwiLFxuICAgIFwiZnJhbWVzZXRcIixcbiAgICBcImgxXCIsXG4gICAgXCJoMlwiLFxuICAgIFwiaDNcIixcbiAgICBcImg0XCIsXG4gICAgXCJoNVwiLFxuICAgIFwiaDZcIixcbiAgICBcImhlYWRcIixcbiAgICBcImhlYWRlclwiLFxuICAgIFwiaGdyb3VwXCIsXG4gICAgXCJoclwiLFxuICAgIFwiaHRtbFwiLFxuICAgIFwiaVwiLFxuICAgIFwiaWZyYW1lXCIsXG4gICAgXCJpbWdcIixcbiAgICBcImlucHV0XCIsXG4gICAgXCJpbnNcIixcbiAgICBcImtleWdlblwiLFxuICAgIFwia2JkXCIsXG4gICAgXCJsYWJlbFwiLFxuICAgIFwibGlcIixcbiAgICBcImxpbmtcIixcbiAgICBcIm1hcFwiLFxuICAgIFwibWFya1wiLFxuICAgIFwibWVudVwiLFxuICAgIFwibWV0YVwiLFxuICAgIFwibWV0ZXJcIixcbiAgICBcIm5hdlwiLFxuICAgIFwibm9mcmFtZXNcIixcbiAgICBcIm5vc2NyaXB0XCIsXG4gICAgXCJvYmplY3RcIixcbiAgICBcIm9sXCIsXG4gICAgXCJvcHRncm91cFwiLFxuICAgIFwib3B0aW9uXCIsXG4gICAgXCJvdXRwdXRcIixcbiAgICBcInBcIixcbiAgICBcInBhcmFtXCIsXG4gICAgXCJwcmVcIixcbiAgICBcInByb2dyZXNzXCIsXG4gICAgXCJxXCIsXG4gICAgXCJycFwiLFxuICAgIFwicnRcIixcbiAgICBcInJ1YnlcIixcbiAgICBcInNcIixcbiAgICBcInNhbXBcIixcbiAgICBcInNjcmlwdFwiLFxuICAgIFwic2VjdGlvblwiLFxuICAgIFwic2VsZWN0XCIsXG4gICAgXCJzbWFsbFwiLFxuICAgIFwic291cmNlXCIsXG4gICAgXCJzcGFuXCIsXG4gICAgXCJzdHJpa2VcIixcbiAgICBcInN0cm9uZ1wiLFxuICAgIFwic3R5bGVcIixcbiAgICBcInN1YlwiLFxuICAgIFwic3VtbWFyeVwiLFxuICAgIFwic3VwXCIsXG4gICAgXCJ0YWJsZVwiLFxuICAgIFwidGJvZHlcIixcbiAgICBcInRkXCIsXG4gICAgXCJ0ZXh0YXJlYVwiLFxuICAgIFwidGZvb3RcIixcbiAgICBcInRoXCIsXG4gICAgXCJ0aGVhZFwiLFxuICAgIFwidGltZVwiLFxuICAgIFwidGl0bGVcIixcbiAgICBcInRyXCIsXG4gICAgXCJ0cmFja3NcIixcbiAgICBcInR0XCIsXG4gICAgXCJ1XCIsXG4gICAgXCJ1bFwiLFxuICAgIFwidmlkZW9cIixcbiAgICBcIndiclwiXG4gIF0sXG4gIC8vIHdlIGluY2x1ZGUgdGhlc2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnNcbiAgc3ltYm9sczogL1tcXCtcXC1cXCpcXCVcXCZcXHxcXCFcXD1cXC9cXC5cXCxcXDpdKy8sXG4gIGVzY2FwZXM6IC9cXFxcKD86W2FiZm5ydHZcXFxcXCInXXx4WzAtOUEtRmEtZl17MSw0fXx1WzAtOUEtRmEtZl17NH18VVswLTlBLUZhLWZdezh9KS8sXG4gIHRva2VuaXplcjoge1xuICAgIHJvb3Q6IFtcbiAgICAgIC8vIFRhZyBvciBhIGtleXdvcmQgYXQgc3RhcnRcbiAgICAgIFtcbiAgICAgICAgL14oXFxzKikoW2EtekEtWl8tXVtcXHctXSopLyxcbiAgICAgICAge1xuICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICBcIiQyQHRhZ3NcIjoge1xuICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgIFwiQGVvc1wiOiBbXCJcIiwgXCJ0YWdcIl0sXG4gICAgICAgICAgICAgICAgXCJAZGVmYXVsdFwiOiBbXCJcIiwgeyB0b2tlbjogXCJ0YWdcIiwgbmV4dDogXCJAdGFnLiQxXCIgfV1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiJDJAa2V5d29yZHNcIjogW1wiXCIsIHsgdG9rZW46IFwia2V5d29yZC4kMlwiIH1dLFxuICAgICAgICAgICAgXCJAZGVmYXVsdFwiOiBbXCJcIiwgXCJcIl1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICAvLyBpZFxuICAgICAgW1xuICAgICAgICAvXihcXHMqKSgjW2EtekEtWl8tXVtcXHctXSopLyxcbiAgICAgICAge1xuICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICBcIkBlb3NcIjogW1wiXCIsIFwidGFnLmlkXCJdLFxuICAgICAgICAgICAgXCJAZGVmYXVsdFwiOiBbXCJcIiwgeyB0b2tlbjogXCJ0YWcuaWRcIiwgbmV4dDogXCJAdGFnLiQxXCIgfV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICAvLyBjbGFzc1xuICAgICAgW1xuICAgICAgICAvXihcXHMqKShcXC5bYS16QS1aXy1dW1xcdy1dKikvLFxuICAgICAgICB7XG4gICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgIFwiQGVvc1wiOiBbXCJcIiwgXCJ0YWcuY2xhc3NcIl0sXG4gICAgICAgICAgICBcIkBkZWZhdWx0XCI6IFtcIlwiLCB7IHRva2VuOiBcInRhZy5jbGFzc1wiLCBuZXh0OiBcIkB0YWcuJDFcIiB9XVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIC8vIHBsYWluIHRleHQgd2l0aCBwaXBlXG4gICAgICBbL14oXFxzKikoXFx8LiopJC8sIFwiXCJdLFxuICAgICAgeyBpbmNsdWRlOiBcIkB3aGl0ZXNwYWNlXCIgfSxcbiAgICAgIC8vIGtleXdvcmRzXG4gICAgICBbXG4gICAgICAgIC9bYS16QS1aXyRdW1xcdyRdKi8sXG4gICAgICAgIHtcbiAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgXCJAa2V5d29yZHNcIjogeyB0b2tlbjogXCJrZXl3b3JkLiQwXCIgfSxcbiAgICAgICAgICAgIFwiQGRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIC8vIGRlbGltaXRlcnMgYW5kIG9wZXJhdG9yc1xuICAgICAgWy9be30oKVxcW1xcXV0vLCBcIkBicmFja2V0c1wiXSxcbiAgICAgIFsvQHN5bWJvbHMvLCBcImRlbGltaXRlclwiXSxcbiAgICAgIC8vIG51bWJlcnNcbiAgICAgIFsvXFxkK1xcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8vLCBcIm51bWJlci5mbG9hdFwiXSxcbiAgICAgIFsvXFxkKy8sIFwibnVtYmVyXCJdLFxuICAgICAgLy8gc3RyaW5nczpcbiAgICAgIFsvXCIvLCBcInN0cmluZ1wiLCAnQHN0cmluZy5cIiddLFxuICAgICAgWy8nLywgXCJzdHJpbmdcIiwgXCJAc3RyaW5nLidcIl1cbiAgICBdLFxuICAgIHRhZzogW1xuICAgICAgWy8oXFwuKShcXHMqJCkvLCBbeyB0b2tlbjogXCJkZWxpbWl0ZXJcIiwgbmV4dDogXCJAYmxvY2tUZXh0LiRTMi5cIiB9LCBcIlwiXV0sXG4gICAgICBbL1xccysvLCB7IHRva2VuOiBcIlwiLCBuZXh0OiBcIkBzaW1wbGVUZXh0XCIgfV0sXG4gICAgICAvLyBpZFxuICAgICAgW1xuICAgICAgICAvI1thLXpBLVpfLV1bXFx3LV0qLyxcbiAgICAgICAge1xuICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICBcIkBlb3NcIjogeyB0b2tlbjogXCJ0YWcuaWRcIiwgbmV4dDogXCJAcG9wXCIgfSxcbiAgICAgICAgICAgIFwiQGRlZmF1bHRcIjogXCJ0YWcuaWRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIC8vIGNsYXNzXG4gICAgICBbXG4gICAgICAgIC9cXC5bYS16QS1aXy1dW1xcdy1dKi8sXG4gICAgICAgIHtcbiAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgXCJAZW9zXCI6IHsgdG9rZW46IFwidGFnLmNsYXNzXCIsIG5leHQ6IFwiQHBvcFwiIH0sXG4gICAgICAgICAgICBcIkBkZWZhdWx0XCI6IFwidGFnLmNsYXNzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICAvLyBhdHRyaWJ1dGVzXG4gICAgICBbL1xcKC8sIHsgdG9rZW46IFwiZGVsaW1pdGVyLnBhcmVudGhlc2lzXCIsIG5leHQ6IFwiQGF0dHJpYnV0ZUxpc3RcIiB9XVxuICAgIF0sXG4gICAgc2ltcGxlVGV4dDogW1xuICAgICAgWy9bXiNdKyQvLCB7IHRva2VuOiBcIlwiLCBuZXh0OiBcIkBwb3BhbGxcIiB9XSxcbiAgICAgIFsvW14jXSsvLCB7IHRva2VuOiBcIlwiIH1dLFxuICAgICAgLy8gaW50ZXJwb2xhdGlvblxuICAgICAgW1xuICAgICAgICAvKCN7KShbXn1dKikofSkvLFxuICAgICAgICB7XG4gICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgIFwiQGVvc1wiOiBbXG4gICAgICAgICAgICAgIFwiaW50ZXJwb2xhdGlvbi5kZWxpbWl0ZXJcIixcbiAgICAgICAgICAgICAgXCJpbnRlcnBvbGF0aW9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0b2tlbjogXCJpbnRlcnBvbGF0aW9uLmRlbGltaXRlclwiLFxuICAgICAgICAgICAgICAgIG5leHQ6IFwiQHBvcGFsbFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIkBkZWZhdWx0XCI6IFtcImludGVycG9sYXRpb24uZGVsaW1pdGVyXCIsIFwiaW50ZXJwb2xhdGlvblwiLCBcImludGVycG9sYXRpb24uZGVsaW1pdGVyXCJdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgWy8jJC8sIHsgdG9rZW46IFwiXCIsIG5leHQ6IFwiQHBvcGFsbFwiIH1dLFxuICAgICAgWy8jLywgXCJcIl1cbiAgICBdLFxuICAgIGF0dHJpYnV0ZUxpc3Q6IFtcbiAgICAgIFsvXFxzKy8sIFwiXCJdLFxuICAgICAgW1xuICAgICAgICAvKFxcdyspKFxccyo9XFxzKikoXCJ8JykvLFxuICAgICAgICBbXCJhdHRyaWJ1dGUubmFtZVwiLCBcImRlbGltaXRlclwiLCB7IHRva2VuOiBcImF0dHJpYnV0ZS52YWx1ZVwiLCBuZXh0OiBcIkB2YWx1ZS4kM1wiIH1dXG4gICAgICBdLFxuICAgICAgWy9cXHcrLywgXCJhdHRyaWJ1dGUubmFtZVwiXSxcbiAgICAgIFtcbiAgICAgICAgLywvLFxuICAgICAgICB7XG4gICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgIFwiQGVvc1wiOiB7XG4gICAgICAgICAgICAgIHRva2VuOiBcImF0dHJpYnV0ZS5kZWxpbWl0ZXJcIixcbiAgICAgICAgICAgICAgbmV4dDogXCJAcG9wYWxsXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIkBkZWZhdWx0XCI6IFwiYXR0cmlidXRlLmRlbGltaXRlclwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgWy9cXCkkLywgeyB0b2tlbjogXCJkZWxpbWl0ZXIucGFyZW50aGVzaXNcIiwgbmV4dDogXCJAcG9wYWxsXCIgfV0sXG4gICAgICBbL1xcKS8sIHsgdG9rZW46IFwiZGVsaW1pdGVyLnBhcmVudGhlc2lzXCIsIG5leHQ6IFwiQHBvcFwiIH1dXG4gICAgXSxcbiAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICBbL14oXFxzKikoXFwvXFwvLiopJC8sIHsgdG9rZW46IFwiY29tbWVudFwiLCBuZXh0OiBcIkBibG9ja1RleHQuJDEuY29tbWVudFwiIH1dLFxuICAgICAgWy9bIFxcdFxcclxcbl0rLywgXCJcIl0sXG4gICAgICBbLzwhLS0vLCB7IHRva2VuOiBcImNvbW1lbnRcIiwgbmV4dDogXCJAY29tbWVudFwiIH1dXG4gICAgXSxcbiAgICBibG9ja1RleHQ6IFtcbiAgICAgIFtcbiAgICAgICAgL15cXHMrLiokLyxcbiAgICAgICAge1xuICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICBcIigkUzJcXFxccysuKiQpXCI6IHsgdG9rZW46IFwiJFMzXCIgfSxcbiAgICAgICAgICAgIFwiQGRlZmF1bHRcIjogeyB0b2tlbjogXCJAcmVtYXRjaFwiLCBuZXh0OiBcIkBwb3BhbGxcIiB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgWy8uLywgeyB0b2tlbjogXCJAcmVtYXRjaFwiLCBuZXh0OiBcIkBwb3BhbGxcIiB9XVxuICAgIF0sXG4gICAgY29tbWVudDogW1xuICAgICAgWy9bXjxcXC1dKy8sIFwiY29tbWVudC5jb250ZW50XCJdLFxuICAgICAgWy8tLT4vLCB7IHRva2VuOiBcImNvbW1lbnRcIiwgbmV4dDogXCJAcG9wXCIgfV0sXG4gICAgICBbLzwhLS0vLCBcImNvbW1lbnQuY29udGVudC5pbnZhbGlkXCJdLFxuICAgICAgWy9bPFxcLV0vLCBcImNvbW1lbnQuY29udGVudFwiXVxuICAgIF0sXG4gICAgc3RyaW5nOiBbXG4gICAgICBbXG4gICAgICAgIC9bXlxcXFxcIicjXSsvLFxuICAgICAgICB7XG4gICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgIFwiQGVvc1wiOiB7IHRva2VuOiBcInN0cmluZ1wiLCBuZXh0OiBcIkBwb3BhbGxcIiB9LFxuICAgICAgICAgICAgXCJAZGVmYXVsdFwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAvQGVzY2FwZXMvLFxuICAgICAgICB7XG4gICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgIFwiQGVvc1wiOiB7IHRva2VuOiBcInN0cmluZy5lc2NhcGVcIiwgbmV4dDogXCJAcG9wYWxsXCIgfSxcbiAgICAgICAgICAgIFwiQGRlZmF1bHRcIjogXCJzdHJpbmcuZXNjYXBlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIC9cXFxcLi8sXG4gICAgICAgIHtcbiAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgXCJAZW9zXCI6IHtcbiAgICAgICAgICAgICAgdG9rZW46IFwic3RyaW5nLmVzY2FwZS5pbnZhbGlkXCIsXG4gICAgICAgICAgICAgIG5leHQ6IFwiQHBvcGFsbFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJAZGVmYXVsdFwiOiBcInN0cmluZy5lc2NhcGUuaW52YWxpZFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgLy8gaW50ZXJwb2xhdGlvblxuICAgICAgWy8oI3spKFtefV0qKSh9KS8sIFtcImludGVycG9sYXRpb24uZGVsaW1pdGVyXCIsIFwiaW50ZXJwb2xhdGlvblwiLCBcImludGVycG9sYXRpb24uZGVsaW1pdGVyXCJdXSxcbiAgICAgIFsvIy8sIFwic3RyaW5nXCJdLFxuICAgICAgW1xuICAgICAgICAvW1wiJ10vLFxuICAgICAgICB7XG4gICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgIFwiJCM9PSRTMlwiOiB7IHRva2VuOiBcInN0cmluZ1wiLCBuZXh0OiBcIkBwb3BcIiB9LFxuICAgICAgICAgICAgXCJAZGVmYXVsdFwiOiB7IHRva2VuOiBcInN0cmluZ1wiIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICBdLFxuICAgIC8vIEFsbW9zdCBpZGVudGljYWwgdG8gYWJvdmUsIGV4Y2VwdCBmb3IgZXNjYXBlcyBhbmQgdGhlIG91dHB1dCB0b2tlblxuICAgIHZhbHVlOiBbXG4gICAgICBbXG4gICAgICAgIC9bXlxcXFxcIiddKy8sXG4gICAgICAgIHtcbiAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgXCJAZW9zXCI6IHsgdG9rZW46IFwiYXR0cmlidXRlLnZhbHVlXCIsIG5leHQ6IFwiQHBvcGFsbFwiIH0sXG4gICAgICAgICAgICBcIkBkZWZhdWx0XCI6IFwiYXR0cmlidXRlLnZhbHVlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIC9cXFxcLi8sXG4gICAgICAgIHtcbiAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgXCJAZW9zXCI6IHsgdG9rZW46IFwiYXR0cmlidXRlLnZhbHVlXCIsIG5leHQ6IFwiQHBvcGFsbFwiIH0sXG4gICAgICAgICAgICBcIkBkZWZhdWx0XCI6IFwiYXR0cmlidXRlLnZhbHVlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIC9bXCInXS8sXG4gICAgICAgIHtcbiAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgXCIkIz09JFMyXCI6IHsgdG9rZW46IFwiYXR0cmlidXRlLnZhbHVlXCIsIG5leHQ6IFwiQHBvcFwiIH0sXG4gICAgICAgICAgICBcIkBkZWZhdWx0XCI6IHsgdG9rZW46IFwiYXR0cmlidXRlLnZhbHVlXCIgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIF1cbiAgfVxufTtcbmV4cG9ydCB7XG4gIGNvbmYsXG4gIGxhbmd1YWdlXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4480\n')}}]);