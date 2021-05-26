(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{382:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"markdown"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown"}},[t._v("#")]),t._v(" Markdown")]),t._v(" "),a("h2",{attrs:{id:"基本语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本语法"}},[t._v("#")]),t._v(" 基本语法")]),t._v(" "),a("p",[t._v("https://markdown-it.github.io/")]),t._v(" "),a("p",[a("em",[a("a",{attrs:{href:"https://markdown-it.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://markdown-it.github.io/"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[a("a",{attrs:{href:"https://markdown-it.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://markdown-it.github.io/"),a("OutboundLink")],1)])]),t._v(" "),a("h1",{attrs:{id:"markdown-拓展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown-拓展"}},[t._v("#")]),t._v(" Markdown 拓展")]),t._v(" "),a("h2",{attrs:{id:"链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),a("h3",{attrs:{id:"内部链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内部链接"}},[t._v("#")]),t._v(" 内部链接")]),t._v(" "),a("blockquote",[a("p",[t._v("网站内部的链接，将会被转换成 <router-link> 用于 SPA 导航。同时，站内的每一个文件夹下的 README.md 或者 index.md 文件都会被自动编译为 index.html，对应的链接将被视为 /。")])]),t._v(" "),a("p",[t._v("以如下的文件结构为例：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".\n├─ README.md\n├─ foo\n│  ├─ README.md\n│  ├─ one.md\n│  └─ two.md\n└─ bar\n   ├─ README.md\n   ├─ three.md\n   └─ four.md\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("假设你现在在 foo/one.md 中：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[Home](/) \x3c!-- 跳转到根部的 README.md --\x3e\n[foo](/foo/) \x3c!-- 跳转到 foo 文件夹的 index.html --\x3e\n[foo heading](./#heading) \x3c!-- 跳转到 foo/index.html 的特定标题位置 --\x3e\n[bar - three](../bar/three.md) \x3c!-- 具体文件可以使用 .md 结尾（推荐） --\x3e\n[bar - four](../bar/four.html) \x3c!-- 也可以用 .html --\x3e\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("eg:\n"),a("RouterLink",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),a("RouterLink",{attrs:{to:"/foo/"}},[t._v("foo")]),t._v(" "),a("RouterLink",{attrs:{to:"/en/markdown/#heading"}},[t._v("foo heading")]),t._v(" "),a("RouterLink",{attrs:{to:"/en/bar/three.html"}},[t._v("bar - three")]),t._v(" "),a("RouterLink",{attrs:{to:"/en/bar/four.html"}},[t._v("bar - four")])],1),t._v(" "),a("h3",{attrs:{id:"链接的重定向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链接的重定向"}},[t._v("#")]),t._v(" 链接的重定向")]),t._v(" "),a("blockquote",[a("p",[t._v("VuePress 支持重定向到干净链接。如果一个链接 /foo 找不到，VuePress 会自行寻找一个可用的 /foo/ 或 /foo.html。")])]),t._v(" "),a("blockquote",[a("p",[t._v("反过来，当 /foo/ 或 /foo.html 中的一个找不到时，VuePress 也会尝试寻找另一个。借助这种特性，我们可以通过官方插件 "),a("a",{attrs:{href:"https://vuepress.github.io/plugins/clean-urls/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-plugin-clean-urls"),a("OutboundLink")],1),t._v(" 定制你的网站路径。")])]),t._v(" "),a("h3",{attrs:{id:"外部链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外部链接"}},[t._v("#")]),t._v(" 外部链接")]),t._v(" "),a("p",[t._v('外部的链接将会被自动地设置为 target="_blank" rel="noopener noreferrer":')]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("无论是否使用了 permalink 和 clean-urls 插件，你的相对路径都应该依赖于当前的文件结构来定义。在上面的例子中，即使你将 /foo/one.md 的路径设为了 /foo/one/，你依然应该通过 ./two.md 来访问 /foo/two.md。")])]),t._v(" "),a("h2",{attrs:{id:"front-matter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#front-matter"}},[t._v("#")]),t._v(" Front Matter")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("---\ntitle: Blogging Like a Hacker\nlang: en-US\n---\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"github-风格的表格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-风格的表格"}},[t._v("#")]),t._v(" GitHub 风格的表格")]),t._v(" "),a("p",[t._v("输入：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n")])])]),a("p",[t._v("输出")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Tables")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Are")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("Cool")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("col 3 is")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("right-aligned")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("$1600")])]),t._v(" "),a("tr",[a("td",[t._v("col 2 is")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("centered")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("$12")])]),t._v(" "),a("tr",[a("td",[t._v("zebra stripes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("are neat")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("$1")])])])]),t._v(" "),a("h2",{attrs:{id:"emoji"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#emoji"}},[t._v("#")]),t._v(" Emoji")]),t._v(" "),a("p",[t._v("输入")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(":tada: :100:\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("输出")]),t._v(" "),a("p",[t._v("🎉 💯")]),t._v(" "),a("p",[t._v("你可以在"),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个列表"),a("OutboundLink")],1),t._v("找到所有可用的 Emoji。")]),t._v(" "),a("h2",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),a("p",[t._v("输入")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[[toc]]\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("输出")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#基本语法"}},[t._v("基本语法")])]),a("li",[a("a",{attrs:{href:"#链接"}},[t._v("链接")]),a("ul",[a("li",[a("a",{attrs:{href:"#内部链接"}},[t._v("内部链接")])]),a("li",[a("a",{attrs:{href:"#链接的重定向"}},[t._v("链接的重定向")])]),a("li",[a("a",{attrs:{href:"#外部链接"}},[t._v("外部链接")])])])]),a("li",[a("a",{attrs:{href:"#front-matter"}},[t._v("Front Matter")])]),a("li",[a("a",{attrs:{href:"#github-风格的表格"}},[t._v("GitHub 风格的表格")])]),a("li",[a("a",{attrs:{href:"#emoji"}},[t._v("Emoji")])]),a("li",[a("a",{attrs:{href:"#目录"}},[t._v("目录")])]),a("li",[a("a",{attrs:{href:"#自定义容器-默认主题"}},[t._v("自定义容器 (默认主题)")])]),a("li",[a("a",{attrs:{href:"#代码块中的行高亮"}},[t._v("代码块中的行高亮")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"自定义容器-默认主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义容器-默认主题"}},[t._v("#")]),t._v(" 自定义容器 (默认主题)")]),t._v(" "),a("p",[t._v("输入")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("::: tip STOP\n这是一个提示\n:::\n\n::: warning 标题\n这是一个警告\n:::\n\n::: danger\n这是一个危险警告\n:::\n\n::: details 展开查看详情\n这是一个详情块，在 IE / Edge 中不生效\n:::\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("p",[t._v("输出")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("这是一个提示")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("标题")]),t._v(" "),a("p",[t._v("这是一个警告")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("这是一个危险警告")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("展开查看详情")]),t._v(" "),a("p",[t._v("这是一个详情块，在 IE / Edge 中不生效")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'你好，VuePress！'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("p标签"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("h2",{attrs:{id:"代码块中的行高亮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码块中的行高亮"}},[t._v("#")]),t._v(" 代码块中的行高亮")]),t._v(" "),a("p",[t._v("输入")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    ``` js {4,8-10} //不要有空格\n    export default {\n    data () {\n        return {\n        msg: 'Highlighted!'\n        }\n    },\n    methods: {\n        a () {\n            alert(1)\n        }\n    }\n    }\n    ```\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[t._v("输出")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Highlighted!'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v("除了单行以外，你也可指定多行，行数区间，或是两者都指定。")]),t._v(" "),a("p",[t._v("行数区间: 例如 {5-8}, {3-10}, {10-17}\n多个单行: 例如 {4,7,9}\n行数区间与多个单行: 例如 {4,7-13,16,23-27,40}")])])}),[],!1,null,null,null);s.default=e.exports}}]);