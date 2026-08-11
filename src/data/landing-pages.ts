export type PreviewMode = 'all' | 'feed' | 'grid' | 'explore' | 'reels' | 'story';

export interface LandingPage {
	slug: string;
	mode: PreviewMode;
	eyebrow: string;
	h1: string;
	/** Short, varied anchor text used in Related Tools and the footer. */
	navLabel: string;
	title: string;
	description: string;
	intro: string;
	sections: { title: string; body: string }[];
	faqs: { question: string; answer: string }[];
}

// Each page below owns ONE Instagram placement. Intro, sections, and FAQs are
// placement-specific on purpose — concrete crops, ratios, and pixel sizes — so no
// two pages (or the homepage) repeat the same marketing prose or FAQ questions.
// The interactive tool component is shared; the surrounding copy is not.
// Note: "instagram-post-preview" intentionally has no landing page — the homepage (/)
// is the single canonical target for the primary keyword and that slug 301s to it.
export const landingPages: LandingPage[] = [
	{
		slug: 'instagram-grid-preview',
		mode: 'grid',
		eyebrow: 'Three-Column Grid Planner',
		h1: 'Instagram Profile Grid Preview & Crop Check',
		navLabel: 'Profile grid crop',
		title: 'Instagram Grid Preview — Profile Crop Checker',
		description: 'Preview your post in a realistic three-column Instagram profile grid and catch square thumbnail cropping before publishing.',
		intro: 'Instagram squeezes every post — 1:1, 4:5, or 1.91:1 — into a uniform square tile on your profile grid. Drop your image in and see which pixels survive that centre crop, and how the tile sits between the eight posts around it.',
		sections: [
			{ title: 'Feed Ratio vs. the Square Crop', body: 'Upload a 1080×1350 portrait and the feed shows all of it, but the profile grid keeps only the central 1080×1080 square — roughly the top and bottom 135 px are trimmed. Landscape 1.91:1 posts lose their left and right edges instead. The crop overlay marks exactly what falls outside the tile.' },
			{ title: 'Plan the Three-Column Rhythm', body: 'A grid is read three tiles wide and several rows down, not one post at a time. Move the upload through the nine positions to check colour balance, repetition, and whether the new post clashes with its neighbours before you commit.' },
			{ title: 'Keep the Subject Centre-Safe', body: 'Because the grid always crops from the centre, keep faces, logos, and text inside the middle square of a portrait shot. Decorative background can spill out to the 4:5 edges that only the feed will show.' },
		],
		faqs: [
			{ question: 'How do I preview my post in the Instagram profile grid?', answer: 'Upload a JPG, PNG, or WebP above — no login or account connection needed. The tool renders it as a square profile thumbnail inside a live three-column grid so you can confirm the crop before publishing.' },
			{ question: 'What size does Instagram crop grid thumbnails to?', answer: 'The classic profile grid uses a centred 1:1 square (about 1080×1080). Portrait posts lose their top and bottom to that square, and Instagram sometimes tests taller portrait tiles, so keep key content centred.' },
			{ question: 'Can I move the post around the grid?', answer: 'Yes. Choose any of the nine grid positions and the surrounding placeholder posts rearrange around your upload so you can judge the layout.' },
		],
	},
	{
		slug: 'instagram-feed-preview',
		mode: 'feed',
		eyebrow: 'Feed Post Simulator',
		h1: 'Instagram Feed Preview in Light & Dark Mode',
		navLabel: 'Feed post & caption',
		title: 'Instagram Feed Preview — Caption & Post Mockup',
		description: 'Preview your image, caption, profile details, and caption fold in an Instagram-style feed view with independent light and dark modes.',
		intro: 'The feed is where a post gets its longest look. Preview your image, profile row, engagement, and caption exactly as they stack in an Instagram feed card — in both light and dark mode — before you publish.',
		sections: [
			{ title: 'Use the Full 4:5 Height', body: 'The feed allows up to a 4:5 portrait (1080×1350), the tallest single-image format and the one that fills the most screen. Square 1:1 and landscape 1.91:1 render here too; switch ratios to see how much vertical space each claims as someone scrolls.' },
			{ title: 'Catch the Caption Fold', body: 'Instagram collapses captions after roughly the first two lines — about 125 characters — behind a “more” link. Toggle the collapsed and expanded states so your hook, offer, or key line survives above the fold.' },
			{ title: 'Test Light and Dark Cards', body: 'The same photo reads differently on a white card than on a near-black one. Flip the feed preview between light and dark mode to check contrast, borders, and how a light or transparent background behaves.' },
		],
		faqs: [
			{ question: 'How do I preview an Instagram feed post before posting?', answer: 'Upload your image above and the tool renders a full feed card — avatar, username, actions, and caption — with no login or Instagram connection. The fictional profile fields are for presentation testing only.' },
			{ question: 'How tall can a feed post be?', answer: 'The tallest single image the feed accepts is 4:5 portrait, about 1080×1350 pixels. Anything taller is cropped toward that ratio, so preview a 4:5 upload to use the maximum feed height.' },
			{ question: 'Can I expand the caption in the feed preview?', answer: 'Yes. Switch between the collapsed “more” state and the fully expanded caption to see both what a scroller notices first and the complete text.' },
		],
	},
	{
		slug: 'instagram-explore-preview',
		mode: 'explore',
		eyebrow: 'Thumbnail Readability Check',
		h1: 'Instagram Explore Preview at Thumbnail Size',
		navLabel: 'Explore thumbnails',
		title: 'Instagram Explore Preview — Thumbnail Crop Checker',
		description: 'See how your Instagram image may look in Explore and catch text readability or weak-subject issues at thumbnail size.',
		intro: 'On Explore, your post competes as a small tile in a dense discovery grid, often beside video and larger featured cells. Preview it at that reduced scale to see whether the subject and any text still read in a fraction of a second.',
		sections: [
			{ title: 'Design for a Tiny Cell', body: 'Explore lays posts out in a three-column mosaic where a standard tile is only a few hundred pixels wide and some cells span 2×2. Fine print and low-contrast subjects that look fine in the feed can dissolve here; this view shows the smallest version first.' },
			{ title: 'Win the Half-Second Scan', body: 'People flick past Explore quickly. One clear focal point, strong contrast, and minimal small text give a post its best chance of earning a tap. Use the preview to judge recognisability rather than fine detail.' },
			{ title: 'Mind the Centre Crop', body: 'Explore tiles are cropped to squares from the centre, so the edges of a portrait or landscape upload can disappear. Keep the essential subject clear of the top, bottom, and sides.' },
		],
		faqs: [
			{ question: 'How do I check how my post looks in Explore?', answer: 'Upload an image above and the tool places it inside an Explore-style discovery grid at thumbnail scale — no account needed — so you can judge clarity before publishing.' },
			{ question: 'What size are Explore thumbnails?', answer: 'Standard Explore tiles are small centred squares, with occasional larger 2×2 featured cells. Because they are so small, treat this as a legibility check rather than a detail check.' },
			{ question: 'How is thumbnail readability estimated?', answer: 'The tool uses image dimensions, the relative thumbnail scale, crop geometry, and simple content heuristics. Treat any warning as a prompt to review, not a guarantee.' },
		],
	},
	{
		slug: 'instagram-reel-cover-preview',
		mode: 'reels',
		eyebrow: 'Multi-Placement Reel Cover Test',
		h1: 'Instagram Reel Cover Preview Across 4 Placements',
		navLabel: 'Reel cover crops',
		title: 'Instagram Reel Cover Preview — Grid, Feed & Full Reel Crops',
		description: 'Compare a Reel cover in full vertical view, Reels tab, main profile grid, and feed. See crop boundaries side by side.',
		intro: 'A single Reel cover appears in four different crops — the full 9:16 player, the Reels tab, your profile grid, and sometimes the feed. Preview all four side by side so the title and logo survive every one.',
		sections: [
			{ title: 'One 9:16 Source, Four Windows', body: 'Design the cover at 1080×1920 (9:16). The full player shows all of it, the Reels tab shows a tall portrait window, the profile grid crops toward a square or portrait tile, and the feed shows a 4:5 slice. Each window hides a different part.' },
			{ title: 'Keep Titles in the Shared Safe Area', body: 'Text near the top or bottom of the 9:16 frame is the first thing lost in the grid and feed crops. Keep the title, logo, and face inside the combined safe overlay — roughly the central portrait band — with generous margins.' },
			{ title: 'Account for the Interface', body: 'In the full player the bottom of the cover carries the caption, audio label, and action buttons. Leave the lower portion clear so controls do not sit on top of your headline.' },
		],
		faqs: [
			{ question: 'How do I preview a Reel cover across placements?', answer: 'Upload your cover image above and the tool shows the full 9:16 view, the Reels tab, the profile grid, and the feed crop together — with no upload to Instagram and no account connection.' },
			{ question: 'What are the Reel cover dimensions and safe area?', answer: 'Design at 1080×1920 (9:16) and keep essential text and subjects within the central portrait band so they survive the grid and feed crops and clear the player’s bottom controls.' },
			{ question: 'Does this publish or upload a Reel?', answer: 'No. The tool previews a still cover image only. It never publishes, uploads, or connects to an Instagram account.' },
		],
	},
	{
		slug: 'instagram-story-preview',
		mode: 'story',
		eyebrow: 'Story Reshare Simulator',
		h1: 'Instagram Story Reshare Preview & Safe Zones',
		navLabel: 'Story reshare',
		title: 'Instagram Story Preview — Reshare Card & Safe Zones',
		description: 'Preview an Instagram post reshared to a Story with interface safe zones, editable username, backgrounds, and light or dark cards.',
		intro: 'Resharing a post to your Story drops it onto a 9:16 canvas where the top and bottom strips belong to Instagram’s interface. Preview the card placement so your profile row, taps, and reply bar never cover the important part.',
		sections: [
			{ title: 'Respect the 9:16 Interface Strips', body: 'A Story is 1080×1920. The top ~250 px holds your avatar, name, and close button; the bottom ~250 px holds the reply bar and actions. Keep the reshared card and any text inside the central safe zone the overlay marks.' },
			{ title: 'Check Card-on-Background Contrast', body: 'A reshared post sits as a card over a generated background. Switch the preview appearance to confirm the card separates clearly from that background in both light and dark treatments.' },
			{ title: 'Position for a Tap', body: 'Stories are watched full-screen and fleetingly. Place the card so the subject sits near the vertical centre, where the eye lands and where no interface element competes with it.' },
		],
		faqs: [
			{ question: 'How do I preview a post reshared to a Story?', answer: 'Upload your image above and the tool renders it as a card on a vertical Story canvas with interface safe zones — no login or account connection required.' },
			{ question: 'Where are the Story interface safe zones?', answer: 'Roughly the top and bottom eighths of the 9:16 canvas are reserved for Instagram’s controls. The overlay marks these strips so you can keep key content in the central band.' },
			{ question: 'Can I preview a custom Story background?', answer: 'The current version generates a restrained background from the active theme and image. Uploading a custom Story background is a possible future enhancement.' },
		],
	},
	{
		slug: 'instagram-carousel-preview',
		mode: 'feed',
		eyebrow: 'Carousel Preview',
		h1: 'Instagram Carousel Preview & First-Slide Check',
		navLabel: 'Carousel slides',
		title: 'Instagram Carousel Preview — Slides, Crop & Caption Check',
		description: 'Upload and preview Instagram carousel images, test the cover crop, swipe between slides, and check the caption fold before publishing.',
		intro: 'A carousel lives or dies on its first slide, and every slide shares that slide’s aspect ratio. Upload your set, review the cover in the feed and grid, and swipe the whole sequence before you publish.',
		sections: [
			{ title: 'The First Slide Sets the Ratio', body: 'Instagram applies the first slide’s aspect ratio — 1:1, 4:5, or 1.91:1 — to every slide in the carousel. Mixed-size images are cropped to match, so build the set around one ratio (4:5 for the most height) to avoid surprise trims.' },
			{ title: 'Earn the Swipe With Slide One', body: 'The cover is all most people see. Make it legible on its own, keep the hook inside the crop-safe centre, and remember it is also the tile that lands in your profile grid as a square.' },
			{ title: 'Review the Full Sequence', body: 'Add, remove, reorder, and swipe up to ten slides in the tool. Consistent dimensions keep the transition between slides smooth and prevent unexpected jumps in framing.' },
		],
		faqs: [
			{ question: 'How do I preview an Instagram carousel before posting?', answer: 'Upload your slides above and the tool lets you swipe the full sequence and check the cover in the feed and grid — no login or account connection needed.' },
			{ question: 'How many carousel slides can I preview?', answer: 'This tool supports up to ten slides. Instagram itself now allows up to twenty, but the first slide’s aspect ratio still governs the whole set.' },
			{ question: 'Do all carousel slides need the same aspect ratio?', answer: 'Effectively yes. Instagram crops every slide to the first slide’s ratio, so upload images at a consistent size to avoid unwanted cropping.' },
		],
	},
	{
		slug: 'instagram-caption-preview',
		mode: 'feed',
		eyebrow: 'Caption Fold Checker',
		h1: 'Instagram Caption Preview With “More” Cutoff',
		navLabel: 'Caption fold',
		title: 'Instagram Caption Preview — Check the Fold & Formatting',
		description: 'Preview an Instagram caption in collapsed and expanded feed states. Check the introduction, line breaks, counts, and “more” cutoff.',
		intro: 'Most people only ever read the first two lines of a caption. Paste yours in and see exactly where Instagram’s “more” cutoff falls, how line breaks render, and whether your hook survives the fold.',
		sections: [
			{ title: 'Beat the 125-Character Fold', body: 'Instagram collapses captions after roughly 125 characters or two lines and hides the rest behind “more”. Put the hook, offer, or key context first; the preview flags openings likely to lose their point below the fold.' },
			{ title: 'Format for Readability', body: 'Captions allow up to 2,200 characters and about 30 hashtags. Line breaks, emoji, and @mentions all shift where the fold lands. The field preserves your spacing so the collapsed and expanded states match what publishes.' },
			{ title: 'Preview Long and Short Together', body: 'Toggle the collapsed and expanded states to compare the two-line teaser with the full text, and adjust wording until both read well on their own.' },
		],
		faqs: [
			{ question: 'How do I preview an Instagram caption and its “more” cutoff?', answer: 'Type or paste your caption above and the tool shows the collapsed feed teaser and the expanded text side by side — no login required.' },
			{ question: 'How many characters before a caption is truncated?', answer: 'The feed shows roughly the first 125 characters or two lines before adding “more”. Captions can run up to 2,200 characters in total.' },
			{ question: 'Are my caption drafts saved anywhere?', answer: 'Draft text can be kept in your browser’s local storage on your own device. It is not sent to a server or to analytics by this site.' },
		],
	},
];
