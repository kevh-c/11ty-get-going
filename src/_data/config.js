export default {
	projectName: "11ty Get Going",
	description: "Just another 11ty starter kit",
	shortName: "11ty GG",
	domain:
		process.env.ELEVENTY_RUN_MODE == "serve" ? "http://localhost:8080" : "https://example.com",
	robots: "index, follow",
	themeColor: "#FFFFFF",
	backgroundColor: "#FFFFFF",
	author: {
		name: "Author Name",
		email: "author@email.com",
	},
	identity: [
		{
			rel: "me",
			url: "URL-GOES-HERE",
		},
	],
	og: {
		locale: "en_GB",
		type: "website",
		image: {
			rel: "/og-default.jpg",
			alt: "Default OG image displayed here",
		},
	},
};
