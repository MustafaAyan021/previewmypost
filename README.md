# Preview My Post

Preview My Post is a free, browser-based Instagram placement preview and visual QA tool. Upload once to compare Feed, Profile Grid, Explore, Reel cover, and Story reshare views before publishing.

## Product capabilities

- Up to 10 JPG, PNG, or WebP images per carousel
- Feed ratios: 1:1, 4:5, and 1.91:1
- Feed, Profile Grid, Explore, Reels, Story, and All Views modes
- Crop and safe-zone overlays, including Safe Everywhere
- Placement-specific crop, resolution, readability, and caption checks
- Editable fictional profile and post details
- Independent website and Instagram preview themes
- Per-preview PNG export and a ZIP export for all views
- Local browser image processing with no Instagram login or account connection

Uploaded post images are not persisted. Non-sensitive draft settings and an optimized profile image may be stored in the browser's local storage.

## Development

Requirements: Node.js 22.12 or newer and pnpm.

```sh
pnpm install
pnpm astro dev --background
```

Manage the background server with:

```sh
pnpm astro dev status
pnpm astro dev logs
pnpm astro dev stop
```

## Verification

```sh
pnpm astro check
pnpm build
pnpm preview
```

The production build is written to `dist/`.

## Deployment

The site uses Astro static output and can be deployed to any static host. The canonical production domain is `https://previewmypost.com`.

## Independence disclaimer

Preview My Post is an independent third-party preview tool and is not affiliated with, endorsed by, sponsored by, or officially connected with Instagram or Meta.
