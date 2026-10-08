// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://baggagegear.com',
	integrations: [mdx(), sitemap()],
	fonts: [
		// Headings: Fraunces (editorial serif with a travel-journal feel)
		{
			provider: fontProviders.google(),
			name: 'Fraunces',
			cssVariable: '--font-heading',
			weights: [600, 700],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['Georgia', 'Times New Roman', 'serif'],
		},
		// Body & UI: Figtree (clean, friendly, very readable)
		{
			provider: fontProviders.google(),
			name: 'Figtree',
			cssVariable: '--font-body',
			weights: [400, 500, 600, 700],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
		},
	],
});
