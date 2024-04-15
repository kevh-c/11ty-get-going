// Collection for posts
const posts = i => i.getFilteredByGlob("./src/content/posts/*.md").reverse();
const feed = i => i.getFilteredByGlob("./src/content/posts/*.md").reverse();
const curated = i =>
	i
		.getAllSorted()
		.filter(post => post.data.curated)
		.reverse();

module.exports = {
	posts,
	feed,
	curated,
};
