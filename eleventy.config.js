// Enable type definitions: https://www.11ty.dev/docs/config/#type-definitions
/** @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig */

import pluginNavigation from "@11ty/eleventy-navigation";
import pluginRss from "@11ty/eleventy-plugin-rss";
import pluginSyntax from "@11ty/eleventy-plugin-syntaxhighlight";

import { markdownParser } from "./lib/markdown.js";
import * as collections from "./etc/collections/index.js";
import * as filters from "./etc/filters/index.js";
import { htmlmin } from "./etc/transforms/index.js";

export default function (eleventyConfig) {
	// Plugins
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginSyntax);

	// Libraries
	eleventyConfig.setLibrary("md", markdownParser());

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

	// Passthrough copies
	eleventyConfig.addPassthroughCopy({ "src/static/fonts": "/fonts" });
	eleventyConfig.addPassthroughCopy({ "src/static/favicons/*": "/" });
	eleventyConfig.addPassthroughCopy({
		"src/static/og-default.jpg": "/og-default.jpg",
	});

	// Watch targets
	eleventyConfig.addWatchTarget("./src/_styles/**/*.css");

	// Transforms
	eleventyConfig.addTransform("htmlmin", htmlmin);

	return {
		dir: {
			input: "src",
			output: "dist",
			data: "_data",
		},
		templateFormats: ["html", "md", "njk", "11ty.js"],
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
	};
}
