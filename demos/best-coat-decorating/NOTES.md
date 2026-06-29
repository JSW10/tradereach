# NOTES — Best Coat Decorating demo

## Lead source
- Business Name: Best Coat Decorating
- Facebook: https://www.facebook.com/BestCoatDecorating/
- Instagram: https://www.instagram.com/bestcoatdecorating/
- Email: bestcoatdecorating@gmail.com
- Phone: 07554 475682
- Area: Bristol, Bath, Pensford, Bishopston and surrounding areas

## Image sources

All images sourced from Facebook posts via `apify/facebook-posts-scraper` (dataset: Cei41Paxuhf9ijFKk).
Facebook CDN URLs contain session tokens and expire — all images downloaded locally. No CDN URLs referenced directly in HTML.

### In use

| File | Source post | Post date | Description | Used in |
|------|-------------|-----------|-------------|---------|
| `assets/img/lounge4.jpg` | Post 625642122902483 — "Lounge we just completed in Pensford" | Feb 2023 | Grey sofa, window, dark built-in shelving unit visible | Hero image |
| `assets/img/bathroom3.jpg` | Post 848940097239350 — bathroom painted in Benjamin Moore Bali 702 | Dec 2023 | Bathroom interior with orange door accent visible | Portfolio pi-1 |
| `assets/img/bathroom1.jpg` | Post 848940097239350 | Dec 2023 | Teal/green painted room with sash window | Portfolio pi-2 |
| `assets/img/lounge1.jpg` | Post 680293080770720 — "Lounge completed in Bishopston" (Tikkurila Helmi 10) | Apr 2023 | Freshly painted lounge interior | Portfolio pi-3 |
| `assets/img/lounge2.jpg` | Post 680293080770720 | Apr 2023 | Lounge interior, Bishopston | Portfolio pi-4 |
| `assets/img/bedroom1.jpg` | Post 625637862902909 — "Bedroom completed" | Feb 2023 | Decorated bedroom interior | Portfolio pi-5 |
| `assets/img/bathroom2.jpg` | Post 848940097239350 | Dec 2023 | Bathroom with teal painted walls | Portfolio pi-6 |
| `assets/img/lounge2.jpg` | Post 680293080770720 | Apr 2023 | Lounge, Bishopston | Gallery row 1 |
| `assets/img/bathroom5.jpg` | Post 848940097239350 | Dec 2023 | Bathroom detail | Gallery row 2 |
| `assets/img/living4.jpg` | Post 805824541550906 — "Living Room Re Fresh" (Tikkurila Everal Aqua 10) | Oct 2023 | Living room interior | Gallery row 3 |
| `assets/img/lounge3.jpg` | Post 680293080770720 | Apr 2023 | Lounge, Bishopston | Gallery row 4 |

### Downloaded but not used in final build

| File | Description |
|------|-------------|
| `assets/img/bathroom4.jpg` | Bathroom detail, Dec 2023 post |
| `assets/img/living1.jpg` | Living room, Oct 2023 post |
| `assets/img/living2.jpg` | Living room, Oct 2023 post |
| `assets/img/living3.jpg` | Living room with radiator, Oct 2023 post |
| `assets/img/lounge3.jpg` | Lounge with radiator detail, Bishopston Apr 2023 |
| `assets/img/beforeafter.jpg` | Before/after image, Dec 2022 post |

## Content sourcing
- Business name, trade, service area: from Facebook page and posts
- Phone number: from leads.xlsx (confirmed in Facebook posts as 07554475682)
- Email: from leads.xlsx (bestcoatdecorating@gmail.com — confirmed in post text)
- "15 years combined experience": from Facebook post (Jan 2024 "WHY CHOOSE US" post)
- "50+ reviews across Google, MyBuilder": from same post
- "Fully insured by AXA": from same post
- Services list (interior/exterior painting, wallpaper, dust-free sanding, woodwork, colour consultation): from multiple posts
- "Now taking bookings for 2026, exterior slots filling fast": from Jan 2026 post
- Specific projects mentioned: Pensford lounge (shelve colour), Bishopston lounge (Tikkurila Helmi 10), bathroom in Benjamin Moore Bali 702, Living Room Re Fresh (Tikkurila Everal Aqua 10)
- No testimonials invented. No stats fabricated. No placeholder copy.

## Build notes
- Built: 2026-06-29
- Slug: `best-coat-decorating`
- Live URL (after push): `tradereach.io/demos/best-coat-decorating/`
- All Facebook images downloaded locally — Facebook CDN URLs not referenced in HTML
- Instagram not scraped — sufficient images from Facebook
