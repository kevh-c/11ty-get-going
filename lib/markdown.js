import markdown from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";
import markdownItSub from "markdown-it-sub";
import markdownItSup from "markdown-it-sup";
import markdownItDefList from "markdown-it-deflist";
import markdownItFootnote from "markdown-it-footnote";
import markdownItEleventyImage from "markdown-it-eleventy-img";

export const markdownParser = () => {
	const parserOptions = {
		html: true,
		linkify: true,
	};

	const linkifyOptions = {
		fuzzyEmail: false,
	};

	const eleventyImageOptions = {
		imgOptions: {
			widths: [300, 600, 1200, 1800, 2150],
			urlPath: "/img/",
			outputDir: "./dist/img/",
			formats: ["avif", "jpeg"],
		},
		globalAttributes: {
			decoding: "async",
			loading: "lazy",
			sizes: "(max-width: 72rem) 100vw, 75vw",
		},
		renderImage(image, attributes) {
			const [Image, options] = image;
			const [src, attrs] = attributes;

			if (src.substring(src.lastIndexOf(".") + 1, src.length) == "gif") {
				options.formats = ["webp", "gif"];
				options.sharpOptions = {
					animated: true,
				};
			}

			Image(src, options);

			const metadata = Image.statsSync(src, options);
			const imageMarkup = Image.generateHTML(metadata, attrs, {
				whitespaceMode: "inline",
			});

			return `<figure>${imageMarkup}${
				attrs.title ? `<figcaption>${attrs.title}</figcaption>` : ""
			}</figure>`;
		},
	};

	const parser = markdown(parserOptions);

	parser.linkify.set(linkifyOptions);

	parser
		.use(markdownItAttrs)
		.use(markdownItSub)
		.use(markdownItSup)
		.use(markdownItDefList)
		.use(markdownItFootnote)
		.use(markdownItEleventyImage, eleventyImageOptions);

	parser.renderer.rules.footnote_block_open = () => {
		return `<section class="footnotes | content-aside flow">\n<h2>Footnotes</h2>\n<ol>\n`;
	};

	parser.renderer.rules.footnote_block_close = () => {
		return "</ol>\n</section>\n";
	};

	return parser;
};
