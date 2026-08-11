// @ts-check
import { readFileSync, existsSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Dev server runs over plain HTTP by default. Opt into HTTPS only when you need a
// secure context — e.g. testing the Web Share / download APIs on a phone over the
// LAN — by running `HTTPS=true npm run dev` (requires certs in .certs/).
const httpsDev =
	process.env.HTTPS === 'true' && existsSync('.certs/key.pem') && existsSync('.certs/cert.pem')
		? { key: readFileSync('.certs/key.pem'), cert: readFileSync('.certs/cert.pem') }
		: undefined;

export default defineConfig({
	site: 'https://previewmypost.com',
	redirects: {
		'/instagram-crop-checker': '/#preview-tool',
		'/instagram-safe-zone-checker': '/#preview-tool',
		// The homepage is the single canonical target for "Instagram Post Preview".
		// Redirect the duplicate landing page to avoid keyword cannibalization.
		'/instagram-post-preview': '/',
	},
	integrations: [
		sitemap({
			serialize(item) {
				const url = new URL(item.url);
				if (url.pathname === '/') {
					item.priority = 1.0;
					item.changefreq = 'weekly';
				} else if (url.pathname.startsWith('/instagram-')) {
					item.priority = 0.8;
					item.changefreq = 'weekly';
				} else {
					item.priority = 0.3;
					item.changefreq = 'yearly';
				}
				item.lastmod = new Date().toISOString();
				return item;
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
		server: httpsDev ? { https: httpsDev } : undefined,
	},
});
