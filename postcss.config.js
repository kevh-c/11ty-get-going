import { default as easyImport } from "postcss-easy-import";
import { default as customSelectors } from "postcss-custom-selectors";
import { default as extendRule } from "postcss-extend-rule";
import { default as customMedia } from "postcss-custom-media";
import { default as nano } from "cssnano";

export default {
	plugins: [easyImport, customSelectors, extendRule, customMedia, nano({ preset: "default" })],
};
