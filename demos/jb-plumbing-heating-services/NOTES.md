# NOTES — JB Plumbing & Heating Services demo

## Lead source
- Business Name: JB Plumbing & Heating Services
- Facebook: https://www.facebook.com/JBPlumbingAndHeatingService/
- Email: jb.plumbingandheating@hotmail.com
- Phone: 07878 078974
- Area: Yeovil, Sherborne, Somerset

## Images

All images were sourced from Facebook posts via `apify/facebook-posts-scraper` and downloaded locally. Facebook CDN URLs contain session tokens and expire — direct referencing is not used anywhere.

### In use

| File | Source | Method | Description | Used in |
|------|--------|--------|-------------|---------|
| `assets/img/p2-1.jpg` | Facebook post (logo image) | Downloaded | JB circular logo badge — blue water drop + orange flame | Nav, CTA card, Footer |
| `assets/img/p3-5.jpg` | Facebook post 3 | Downloaded | Rainfall shower head, wood-effect wall panels, en-suite conversion | Hero image |
| `assets/img/p1-4.jpg` | Facebook post 1 | Downloaded | Full bathroom AFTER — green herringbone tiles, walk-in shower, vanity, heated towel rail | Recent Projects (top-left) |
| `assets/img/p3-4.jpg` | Facebook post 3 | Downloaded | En-suite AFTER — floating vanity, herringbone floor, mirror, wood panels | Recent Projects (top-right), Services photo |
| `assets/img/p1-1.jpg` | Facebook post 1 | Downloaded | Old bathroom BEFORE — beige tiles, bathtub, wooden toilet seat | Before/After (before panel) |
| `assets/img/p1-5.jpg` | Facebook post 1 | Downloaded | Green herringbone corner walk-in shower close-up AFTER | Before/After (after panel) |

### Downloaded but not used in final build

| File | Description |
|------|-------------|
| `assets/img/p1-2.jpg` | Old shower in original bathroom (pre-renovation) |
| `assets/img/p1-3.jpg` | Mid-construction — stripped floor, exposed pipes |
| `assets/img/p3-1.jpg` | Bedroom before en-suite conversion (exposed timber framing) |
| `assets/img/p3-2.jpg` | During conversion — exposed brick wall |
| `assets/img/p3-3.jpg` | During conversion — bare timber framing |
| `assets/img/bathroom-sherborne-1.jpg` | Earlier scrape attempt (pre-main build) |
| `assets/img/bathroom-sherborne-2.jpg` | Earlier scrape attempt |
| `assets/img/bathroom-yeovil-1.jpg` | Earlier scrape attempt |
| `assets/img/bathroom-yeovil-2.jpg` | Earlier scrape attempt |
| `assets/img/bathroom-yeovil-3.jpg` | Earlier scrape attempt |
| `assets/img/ensuite-after.jpg` | Earlier scrape attempt |
| `assets/img/ensuite-before.jpg` | Earlier scrape attempt |
| `assets/img/kitchen-sink-1.jpg` | Earlier scrape attempt |

## Content sourcing
- Business name, trade, service area: from Facebook page
- Phone number: from Facebook page info (`apify/facebook-pages-scraper`)
- Email: from leads.xlsx (jb.plumbingandheating@hotmail.com)
- Project descriptions: inferred from post images (green herringbone bathroom, bedroom-to-en-suite conversion)
- No testimonials, no invented stats, no placeholder copy

## Build notes
- Built: 2026-06-29
- Slug: `jb-plumbing-heating-services`
- Live URL (after push): `tradereach.io/demos/jb-plumbing-heating-services/`
