// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: 'https://previewmypost.com',
	redirects: {
		'/instagram-crop-checker': '/#preview-tool',
		'/instagram-safe-zone-checker': '/#preview-tool',
	},
	integrations: [sitemap()],
	vite: { plugins: [tailwindcss()] },
});
