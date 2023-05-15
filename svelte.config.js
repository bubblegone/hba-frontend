import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					// these are the aliases and paths to them
					$lib: path.resolve('./src/lib'),
					// '@scss': path.resolve('./src/lib/scss'),
					$components: path.resolve('./src/lib/components'),
					$ts: path.resolve('./src/lib/ts')
				}
			}
		}
	}
};

export default config;
