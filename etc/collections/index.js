export const posts = i => i.getFilteredByGlob("./src/content/posts/*.md").reverse();
export const feed = i => i.getFilteredByGlob("./src/content/posts/*.md").reverse();
export const curated = i =>
	i
		.getAllSorted()
		.filter(post => post.data.curated)
		.reverse();
