// Library
const mdInit = require("markdown-it");

// Plugins
const mdSup = require("markdown-it-sup");
const mdSub = require("markdown-it-sub");
const mdDefList = require("markdown-it-deflist");
const mdFootnote = require("markdown-it-footnote");

const md = mdInit({ html: true, linkify: true })
	.use(mdSup)
	.use(mdSub)
	.use(mdDefList)
	.use(mdFootnote);

md.linkify.set({ fuzzyEmail: false });

md.renderer.rules.footnote_block_open = () => {
	return `<section class="footnotes | content-aside flow">\n<h2>Footnotes</h2>\n<ol>\n`;
};

// md.renderer.rules.footnote_block_close = () => {
//   return '</ol>\n</section>\n';
// };

module.exports = {
	md,
};
