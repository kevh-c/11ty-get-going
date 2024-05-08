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

## Installing and running the template
[Clone the repo](https://github.com/kevh-c/11ty-get-going), `npm install`  and then `npm run serve`.

---

## Getting started
There's a little bit of housekeeping to do in order to make this template your own:

### Global configuration
This template captures global metadata in `src/_data/config.js`. This basically populates all the stuff you might find in a `<head>` tag. These of course can be overridden for specific pages in your content frontmatter.

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

## Optional things

### Git LFS
This template comes with a handy `.gitattributes` file and tracks the following file formats for [Git Large File Storage](https://git-lfs.com/):

- `*.jpg`
- `*.png`
- `*.gif`
- `*.mp4`
- `*.webm`
- `*.woff`
- `*.woff2`

If you want to fine-tune your own gitattributes file I highly recommend checking out this [gitattributes template repo](https://github.com/gitattributes/gitattributes) and make your own.

To enable Git LFS for your project simply run `git lfs install` and follow any instructions from there.

### Favicons and Opengraph

#### Favicons
Favicons are stored under `src/static/favicons` and are automatically passed through to their relevant directories on build. All you need to do is create the images for your project.

#### Opengraph
A default Opengraph image can be found under `src/static` and is named `og-default.jpg`. Much like the favicons all you need to do is create a relevant default image to be used.

### RSS
By default this template collects all posts under `src/content/posts` to populate the RSS feed. You may want something different for your project in which case, edit `etc/collections/index.js` and the exported `feed` constant to fit your needs.

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