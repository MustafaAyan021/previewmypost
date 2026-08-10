// @ts-check
import { readFileSync, existsSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Serve the dev server over HTTPS when local certs exist (run `npm run dev`).
// A secure context is required for the Web Share / download APIs used to save
// previews on phones — these are unavailable over plain-HTTP LAN addresses.
const httpsDev =
	existsSync('.certs/key.pem') && existsSync('.certs/cert.pem')
		? { key: readFileSync('.certs/key.pem'), cert: readFileSync('.certs/cert.pem') }
		: undefined;

export default defineConfig({
	site: 'https://previewmypost.com',
	redirects: {
		'/instagram-crop-checker': '/#preview-tool',
		'/instagram-safe-zone-checker': '/#preview-tool',
	},
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
		server: httpsDev ? { https: httpsDev } : undefined,
	},
});
