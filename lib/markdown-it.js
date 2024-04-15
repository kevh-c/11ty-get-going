// 11ty image config. Change the following values to suit project needs
const imgFormats = ["avif", "jpeg"];
const imgWidths = [800, 500, 300];
const imgSizes = "(max-width: 72rem) 100vw, 75vw";
const imgUrlPath = "/img/";
const imgOutputDir = "./dist/img/";

// Library
const markdownIt = require("markdown-it");
const Image = require("@11ty/eleventy-img");

// Plugins
const mdAttrs = require("markdown-it-attrs");
const mdSup = require("markdown-it-sup");
const mdSub = require("markdown-it-sub");
const mdDefList = require("markdown-it-deflist");
const mdFootnote = require("markdown-it-footnote");

const attrsOptions = {
	allowedAttributes: ["id", "class", /^regex.*$/],
};

const md = markdownIt({ html: true, linkify: true })
	.use(mdAttrs, attrsOptions)
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

	return generated;
};

md.renderer.rules.footnote_block_open = () => {
	return `<section class="footnotes | content-aside flow">\n<h2>Footnotes</h2>\n<ol>\n`;
};

md.renderer.rules.footnote_block_close = () => {
	return "</ol>\n</section>\n";
};

module.exports = {
	md,
};
