# 11ty Get going
Get Going is an 11ty starter project for simple blogs, small sites and prototypes.

_Now upgraded to use ES6 modules and 11ty v3.0_ 🎉

**[View a demo](https://mellow-crepe-c98c31.netlify.app)**

The following starting points and integrations come included:

- [11ty Pagination](https://www.11ty.dev/docs/pagination/)
- [11ty Navigation](https://www.11ty.dev/docs/plugins/navigation/)
- [11ty Image](https://www.11ty.dev/docs/plugins/image/)
- [11ty RSS](https://www.11ty.dev/docs/plugins/rss/)
- [11ty Syntax Highlighting](https://www.11ty.dev/docs/plugins/syntaxhighlight/)
- [Eleventy Plugin: Lightning CSS](https://www.npmjs.com/package/@11tyrocks/eleventy-plugin-lightningcss)
- [Markdown-it](https://www.npmjs.com/package/markdown-it)
- [Markdown-it Footnote](https://www.npmjs.com/package/markdown-it-footnote)
- [Markdown-it Definition Lists](https://www.npmjs.com/package/markdown-it-deflist)
- [Markdown-it Sub](https://www.npmjs.com/package/markdown-it-sub)
- [Markdown-it Sup](https://www.npmjs.com/package/markdown-it-sup)
- [Markdown-it-eleventy-img](https://www.npmjs.com/package/markdown-it-eleventy-img)

## Requirements
[Node version manager](https://github.com/nvm-sh/nvm) is recommended then simply `nvm use` and it will pull the version from the `.nvmrc` file in this repo. Any Node LTS version should suffice for this template.

### Running the project
To run a version yourself, [clone the repo](https://github.com/kevh-c/11ty-get-going), `npm install`  and then `npm run serve` to view the demo project locally.

If you're intending to use Git LFS remember to `git lfs install` to enable it.

---

## Getting started
There's a little bit of housekeeping to do in order to make this template your own.

### Update global configs for this template
This project uses a single file to capture project-wide metadata, basically to populate all the stuff in a `<head>` tag on your pages. This can be found under `src/data/config.js`. These of course can be overridden in your content frontmatter thanks to Eleventys [data cascade](https://www.11ty.dev/docs/data-cascade/).

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

If you decide to delete this file (for example if you don't require Opengraph in your project), then you must update `eleventy.config.js` and remove this line: 

```js
eleventyConfig.addPassthroughCopy({ "src/static/og-default.jpg": "/og-default.jpg" });
```

### RSS logic
By default this template collects all posts under `src/content/posts` to populate the RSS feed. You would most likely want something different for your project. If you visit `etc/collections/index.js` and edit the following to fit your needs: 

```js
export const feed = i => i.getFilteredByGlob("./src/content/posts/*.md").reverse();
```

### Responsive images
Images are stored in their original format under `src/media`, although you can organise images in any way in this project.

This project adheres to Markdown syntax as much as possible and uses [Markdown-it-eleventy-img](https://www.npmjs.com/package/markdown-it-eleventy-img) in order to leverage the magic of [Eleventy Image](https://www.11ty.dev/docs/plugins/image/) to generate responsive images based on your needs (so you can do something like this `![The depths of space showing an immense variety of colour across millions of stars.](./src/media/jeremy-thomas-E0AHdsENmDg-unsplash.jpg "Space by Jeremy Thomas")` and get all the responsive benefits without much effort). 

For images imported using Markdown syntax, this project wraps images in a `<figure>` by default and a `<figcaption>` is rendered if a `title` attribute is applied to your image (e.g. `![Alt text](..link/to/image.jpg "Title text")`).

Finally, if a gif is imported it is assumed this is animated, so relevant logic is set to make that possible.

You will most likely want to adapt widths, sizes and formats to suit your projects needs. You will want to edit the Markdown-it library located in `lib/markdown.js` and find these object keys:

```js
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
...
..
.
```

---

**With that all said and done you should be ready to get on with your project. Good going!**