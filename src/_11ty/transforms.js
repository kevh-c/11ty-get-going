const htmlMinifier = require("html-minifier");

const htmlmin = function (content) {
	if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
		let minified = htmlMinifier.minify(content, {
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

module.exports = {
	htmlmin,
};
