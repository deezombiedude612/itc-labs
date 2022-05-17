const { description } = require("../../package");

module.exports = {
	title: "ITS30505",
	description: description,

	head: [
		["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
		["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
		["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" }],
		["link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css" }],
		["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css" }],
		["link", { rel: "icon", type: "image/png", href: "/assets/images/hhicon.png" }],
	],

	base: "/itc-labs/",

	themeConfig: {
		repo: "",
		editLinks: false,
		docsDir: "",
		editLinkText: "",
		lastUpdated: "Last Updated",
		sidebarDepth: 4,
		nav: [
			{
				text: "Practical Preparation",
				link: "/lab00",
			},
			{
				text: "TC Practical Labs",
				items: [
					{ text: "ITS30505: Introduction to Computing", link: "/" },
					{ text: "ITS30605: Web Programming", link: "https://deezombiedude612.github.io/wp-labs" },
					{ text: "ITS42004: Object-Oriented Programming", link: "https://deezombiedude612.github.io/oop-labs" },
				],
			},
		],
		sidebar: [
			"/",
			{
				title: "Lab Exercises",
				collapsable: false,
				children: ["/lab00", "/lab01", "/lab02", "/lab03", "/lab04", "/lab05", "/lab06", "/lab07", "/lab08"],
				// "/guide/": [
				// 	{
				// 		title: "Guide",
				// 		collapsable: false,
				// 		children: ["", "using-vue"],
				// 	},
				// ],
			},
			{
				title: "Archive",
				collapsable: true,
				children: [],
			},
		],
	},
	markdown: {
		lineNumbers: true,
		// extendMarkdown: (md) => {}
	},

	plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
