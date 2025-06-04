import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			// default options are shown:
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: false
		})
	}
};

export default config;
