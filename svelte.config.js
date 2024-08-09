import autoprefixer from "autoprefixer";
import postcssImport from "postcss-import";
import adapter from "svelte-adapter-bun";
import { sveltePreprocess } from "svelte-preprocess";
import tailwindcss from "tailwindcss";
// import cssnano from "cssnano";

/** @type {import("@sveltejs/kit").Config} */
export default {
	preprocess: sveltePreprocess({
		sourceMap: true,
		postcss: {
			plugins: [
				postcssImport,
				tailwindcss,
				autoprefixer,
				// ...(production ? [cssnano] : []),
			],
		},
	}),

	kit: {
		adapter: adapter({
			out: "build",
			assets: true,
			development: true,
			precompress: true,
		}),
	},
};
