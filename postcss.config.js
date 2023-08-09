module.exports = {
	plugins: [
		require("postcss-easy-import"),
		require("postcss-custom-selectors"),
		require("postcss-extend-rule"),
		require("postcss-custom-media"),
		require("cssnano")({
			preset: "default",
		}),
	],
};
