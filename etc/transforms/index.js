import { minify } from "html-minifier";

export const htmlmin = content => {
	if ((this.page.outputPath || "").endsWith(".html")) {
		let minified = minify(content, {
			minifyJS: true,
			minifyCSS: true,
			removeComments: true,
			preserveLineBreaks: true,
			collapseWhitespace: true,
			removeEmptyElements: true,
		});
		return minified;
	}
	return content;
};

// const { minify } = require("html-minifier");

// const htmlmin = content => {
// 	if ((this.page.outputPath || "").endsWith(".html")) {
// 		let minified = minify(content, {
// 			minifyJS: true,
// 			minifyCSS: true,
// 			removeComments: true,
// 			preserveLineBreaks: true,
// 			collapseWhitespace: true,
// 			removeEmptyElements: true,
// 		});
// 		return minified;
// 	}
// 	return content;
// };

// module.exports = {
// 	htmlmin,
// };
