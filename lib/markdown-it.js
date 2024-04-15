// 11ty image config. Change the following values to suit project needs
const imgFormats = ["avif", "jpeg"];
const imgWidths = [300, 600, 1200, 1800, 2150];
const imgSizes = "(max-width: 72rem) 100vw, 75vw";
const imgUrlPath = "/img/";
const imgOutputDir = "./dist/img/";
const footnoteClass = "footnotes | content-aside flow";
const footnoteTitle = "Footnotes";

// Library
const markdownIt = require("markdown-it");
const Image = require("@11ty/eleventy-img");

// Plugins
const mdAttrs = require("markdown-it-attrs");
const mdSup = require("markdown-it-sup");
const mdSub = require("markdown-it-sub");
const mdDefList = require("markdown-it-deflist");
const mdFootnote = require("markdown-it-footnote");

const md = markdownIt({ html: true, linkify: true })
	.use(mdAttrs)
	.use(mdSup)
	.use(mdSub)
	.use(mdDefList)
	.use(mdFootnote);

md.linkify.set({ fuzzyEmail: false });

md.renderer.rules.image = function (tokens, idx, options, env, self) {
	const token = tokens[idx];
	const imgSrc = token.attrGet("src");
	const imgAlt = token.content;
	const imgTitle = token.attrGet("title");

	const htmlOpts = {
		title: imgTitle,
		alt: imgAlt,
		loading: "lazy",
		decoding: "async",
	};

	const imgOpts = {
		widths: imgWidths,
		formats: imgFormats,
		urlPath: imgUrlPath,
		outputDir: imgOutputDir,
	};

	// If the image file is a gif we want to make sure it maintains its animation
	function animated(url) {
		if (url.substring(url.lastIndexOf(".") + 1, url.length) == "gif") {
			imgOpts.formats = ["webp", "gif"];
			imgOpts.sharpOptions = {
				animated: true,
			};
			return;
		}
	}

	animated(imgSrc);

	Image(imgSrc, imgOpts);
	const metadata = Image.statsSync(imgSrc, imgOpts);

	const generated = Image.generateHTML(metadata, {
		sizes: imgSizes,
		...htmlOpts,
	});

	const figcaption = imgTitle ? `<figcaption>${imgTitle}</figcaption>` : "";

	return `<figure>${generated}${figcaption}</figure>`;
};

md.renderer.rules.footnote_block_open = () => {
	return `<section class="${footnoteClass}">\n<h2>${footnoteTitle}</h2>\n<ol>\n`;
};

md.renderer.rules.footnote_block_close = () => {
	return "</ol>\n</section>\n";
};

module.exports = {
	md,
};
