import { minify } from "html-minifier";

export const htmlmin = function (content) {
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
