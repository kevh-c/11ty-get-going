const Image = require("@11ty/eleventy-img");

const picture = async function (src, title, alt, loading = "lazy") {
	const metadata = await Image(src, {
		widths: [300, 600, 1200, 1800, 2150],
		formats: ["avif", "jpeg"],
		urlPath: "/img/",
		outputDir: "./dist/img/",
	});

	const imageAttributes = {
		title,
		alt,
		sizes: "(max-width: 72rem) 100vw, 75vw",
		loading,
	};

	return Image.generateHTML(metadata, imageAttributes);
};

const figure = function (content, caption, className) {
	let classVal = "";
	let captionVal = "";
	if (className !== undefined) {
		classVal = `class=${className}`;
	}
	if (caption !== undefined) {
		captionVal = `<figcaption>${caption}</figcaption>`;
	}
	return `<figure ${classVal}>${content}${captionVal}</figure>`;
};

module.exports = {
	picture,
	figure,
};
