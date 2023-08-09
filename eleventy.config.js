// Enable type definitions: https://www.11ty.dev/docs/config/#type-definitions
/** @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig */

const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntax = require("@11ty/eleventy-plugin-syntaxhighlight");

const markdown = require("./src/_11ty/libraries/markdown-it");
const collections = require("./src/_11ty/collections");
const filters = require("./src/_11ty/filters");
const shortcodes = require("./src/_11ty/shortcodes");
const transforms = require("./src/_11ty/transforms");

module.exports = function (eleventyConfig) {
	// Plugins
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginSyntax);

	// Libraries
	eleventyConfig.setLibrary("md", markdown.md);

	// Collections
	eleventyConfig.addCollection("posts", collections.posts);
	eleventyConfig.addCollection("feed", collections.feed);
	eleventyConfig.addCollection("curated", collections.curated);

	// Filters
	eleventyConfig.addFilter("dateToDMY", filters.dateToDMY);
	eleventyConfig.addFilter("dateToTime", filters.dateToTime);
	eleventyConfig.addFilter("dateToYear", filters.dateToYear);
	eleventyConfig.addFilter("dateToMonth", filters.dateToMonth);
	eleventyConfig.addFilter("dateToUNIX", filters.dateToUNIX);

	// Shortcodes
	eleventyConfig.addShortcode("picture", shortcodes.picture);
	eleventyConfig.addPairedShortcode("figure", shortcodes.figure);

	// Transforms
	eleventyConfig.addTransform("htmlmin", transforms.htmlmin);

	// Passthrough copies
	eleventyConfig.addPassthroughCopy({ "src/static/fonts": "/fonts" });
	eleventyConfig.addPassthroughCopy({ "src/static/favicons/*": "/" });
	eleventyConfig.addPassthroughCopy({
		"src/static/og-default.jpg": "/og-default.jpg",
	});

	// Watch targets
	eleventyConfig.addWatchTarget("./src/_styles/**/*.css");

	return {
		dir: {
			input: "src",
			output: "dist",
			data: "_11ty/data",
		},
		templateFormats: ["html", "md", "njk", "11ty.js"],
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
	};
};
