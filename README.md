# 11ty Get going
Get Going is an 11ty starter project for simple blogs, small sites and prototypes.

**[View a demo](https://mellow-crepe-c98c31.netlify.app)**

The following starting points and integrations come included:

- [11ty Pagination](https://www.11ty.dev/docs/pagination/)
- [11ty Navigation](https://www.11ty.dev/docs/plugins/navigation/)
- [11ty Image](https://www.11ty.dev/docs/plugins/image/)
- [11ty RSS](https://www.11ty.dev/docs/plugins/rss/)
- [11ty Syntax Highlighting](https://www.11ty.dev/docs/plugins/syntaxhighlight/)
- [PostCSS](https://postcss.org/)
- [PostCSS CLI](https://www.npmjs.com/package/postcss-cli)
- [PostCSS Custom Media](https://www.npmjs.com/package/postcss-custom-media)
- [PostCSS Custom Selectors](https://www.npmjs.com/package/postcss-custom-selectors)
- [PostCSS Easy Import](https://www.npmjs.com/package/postcss-easy-import)
- [PostCSS Extend Rule](https://www.npmjs.com/package/postcss-extend-rule)
- [Markdown-it](https://www.npmjs.com/package/markdown-it)
- [Markdown-it Footnote](https://www.npmjs.com/package/markdown-it-footnote)
- [Markdown-it Definition Lists](https://www.npmjs.com/package/markdown-it-deflist)
- [Markdown-it Sub](https://www.npmjs.com/package/markdown-it-sub)
- [Markdown-it Sup](https://www.npmjs.com/package/markdown-it-sup)

## Requirements
[Node version manager](https://github.com/nvm-sh/nvm) is recommended then simply `nvm use` and it will pull the version from the `.nvmrc` file in this repo. Any Node LTS version should suffice for this template.

### Running the project
To run a version yourself, [clone the repo](https://github.com/kevh-c/11ty-get-going), `npm install`  and then `npm run serve` to view the demo project locally.

If you're intending to use Git LFS remember to `git lfs install` to enable it.

---

## Getting started
There's a little bit of housekeeping to do in order to make this template your own.

### Update template metadata
Eleventy uses [global data files](https://www.11ty.dev/docs/data-global/) to conveniently expose data to every template in an Eleventy project. In this template global data files can be found under `src/_11ty/data`. 

This template uses `config.js` to pull in useful default global values. These of course can be overridden in your content frontmatter thanks to Eleventys [data cascade](https://www.11ty.dev/docs/data-cascade/).

```js
// Required. The name of your project.
projectName: "11ty Get Going", 

// Required. A brief description of your project.
description: "Just another 11ty starter kit", 

// Required. A short name used exclusively in webmanifest.njk. Keep it under 12 characters to minimize the possibility of truncation. Can be safely deleted if you delete webmanifest.njk.
shortName: "11ty GG", 

// Required. Update development and production urls to your project requirements.
domain: process.env.ELEVENTY_RUN_MODE == "serve" ? "http://localhost:8080" : "https://example.com", 

// Required. SEO indexing behaviour.
robots: "index, follow",

// Required. Used exclusively in webmanifest.njk. This sometimes affects how an OS displays your site. Can be safely deleted if you delete webmanifest.njk.
themeColor: "#FFFFFF",

// Required. Used exclusively in webmanifest.njk. Recommend using the same value as body background color in your CSS. Can be safely deleted if you delete webmanifest.njk.
backgroundColor: "#FFFFFF", 

// Optional. Delete block if not used. Author values for project.
author: {
	name: "Author Name", 
	email: "author@email.com", 
},

// Optional. Delete block if you don't require link tags related to your idenity. Duplicate as many objects as you need!
identity: [
	{
		rel: "me",
		url: "URL-GOES-HERE",
	},
	{
		rel: "pgpkey",
		url: "URL-GOES-HERE",
	},
],

// Optional. Delete block if you don't require Opengraph.
og: {
	locale: "en_GB",
	type: "website",
	image: {
		rel: "/og-default.jpg",
		alt: "Default OG image displayed here",
	},
}
```

### Favicons and Opengraph

#### Favicons
Favicons are stored under `src/static/favicons` and are automatically passed through to their relevant directories on build. All you need to do is create the images for your project.

#### Opengraph
A default Opengraph image can be found under `src/static` and is named `og-default.jpg`. Much like the favicons all you need to do is create a relevant default image to be used. 

You can of course delete this file if you don't require Opengraph in your project. Please also update `eleventy.config.js` and remove this line: 

```js
eleventyConfig.addPassthroughCopy({ "src/static/og-default.jpg": "/og-default.jpg" });
```

### RSS logic
By default this template collects all posts under `src/content/posts` to populate the RSS feed. You would most likely want something different for your project. If you visit `src/_11ty/collections.js` and edit the following to fit your needs: 

```js
const feed = i => i.getFilteredByGlob("./src/content/posts/*.md").reverse();
```

### Responsive images
This template uses [Eleventy Image](https://www.11ty.dev/docs/plugins/image/) to generate responsive images and handles this all in `src/_11ty/shortcodes.js`. You will want to adapt widths, sizes and formats to suit your projects needs:

```js
const picture = async function (src, title, alt, loading = "lazy") {
	const metadata = await Image(src, {
		widths: [300, 600, 1200, 1800, 2150], // Edit relevant widths to export
		formats: ["avif", "jpeg"], // Edit relevant formats to export
		urlPath: "/img/",
		outputDir: "./dist/img/",
	});

	const imageAttributes = {
		title,
		alt,
		sizes: "(max-width: 72rem) 100vw, 75vw", // Edit relevant sizes based on your responsive layout
		loading,
	};

	return Image.generateHTML(metadata, imageAttributes);
};
```
You can of course use this markup to create a new shortcode for other use cases. Be sure to import this in `eleventy.config.js` though.

---

**With that all said and done you should be ready to get on with your project. Good going!**