# TradeReach — Project Memory

## Purpose & Context

TradeReach is a standalone business (separate from Bytes Digital and Horizon Visual) — a content-as-a-service lead generation platform for tradespeople on a monthly subscription model. The service handles all content strategy: SEO blogs, social media posts, and Google Business Profile updates, written and published by TradeReach using AI. Tradespeople are the primary audience; the core value proposition is inbound lead generation without the client doing any marketing work themselves. Messaging deliberately emphasises time-saving and lead generation outcomes — AI is not mentioned to end customers.

---

## Key People & Clients

**Warren Britton** (Britton's Properties) — first and reference/proof-of-concept client. Somerset-based design and build company (kitchens, bathrooms, extensions, renovations, landscaping, general building) serving Somerset, North Somerset, Bristol, and the wider South West. On Growth tier + website package. Website built at reduced rate. Holds special significance as a reference account.

---

## Subscription Tiers

| Tier | Price | Includes |
|---|---|---|
| Social | £89/mo | 8 social posts (FB+IG), WhatsApp input |
| Starter | £149/mo | 4 social, 2 blogs, 2 GBP, 1 location |
| Growth | £249/mo | 8 social, 4 blogs, 4 GBP, 3 locations, snapshot |
| Pro | £399/mo | 12 social, 8 blogs, 8 GBP, unlimited locations, keyword strategy + call |
| Launch Bundle | £99/mo + £299 setup | Social tier + website |

All tiers use WhatsApp content capture.

**Additional services:** Website design (£299 setup + £29/mo hosting), business email (£8/mo via Google Workspace). Positioned as a natural entry point for tradespeople without a professional web presence. Webflow used for all builds. Bundle discounts available combining web + content tiers.

---

## Current State

- Warren Britton (Britton's Properties) is the active pilot client. WhatsApp content capture workflow is live and being run manually by James.
- **WhatsApp workflow:** Warren sends project photos + voice note/text → pipeline generates 5 outputs: Webflow CMS case study draft, blog post, 2 social captions, GBP update → Warren receives WhatsApp confirmation. Manual review and publish takes ~30 mins per project.

### Britton's Properties Webflow Site

- CMS collections for Projects and Reviews.
- Pages: Home, About, domestic service pages (static), Our Work (CMS), individual project pages (CMS template), Contact.
- Design system: Playfair Display (headings), DM Sans (body), sage green accent `#8B8F69`, charcoal `#1E1E1C`, off-white `#F7F6F2`. Class prefix: `bp-`.
- **CMS field ownership:** Warren edits only photos, location, service category, and a one-line note. All copy (descriptions, body, subtitle, scope tags, meta) is generated via the Claude pipeline — Warren never touches copy fields.

### GBP

- 13 service listings set up with prepared descriptions.
- 621-character business description ready.

### Brand & Design

- TradeReach brand and website design are established.
- Design guidelines PDF (v2, `TradeReach_Design_Guidelines_v2.pdf`) is the source of truth for all TradeReach work.

---

## On the Horizon

- Automate the WhatsApp content capture workflow once client volume justifies it (estimated threshold: 5–6 clients).
- Scale Webflow hosting as client volume grows (flagged as addressable later).
- Grow client base beyond the first reference account.

---

## Key Learnings & Principles

- Messaging to tradespeople prioritises skimmability, lead generation outcomes, time-saving, and value for money. AI is never mentioned to end customers.
- Website and email services serve as a low-friction entry point, since most trade clients lack a professional web presence.
- Warren's CMS permissions are deliberately restricted — copy fields are pipeline-owned to maintain quality and consistency.
- Manual-first approach is intentional at low client volume; automation is introduced when scale justifies it.
- Warren's site was built at a reduced rate to establish a strong proof-of-concept and reference account — a deliberate investment in credibility.

---

## Approach & Patterns

- Content pipeline triggered by client WhatsApp input (photos + voice/text), producing a fixed set of outputs per project submission.
- Strict design system discipline: all TradeReach work follows the v2 design guidelines PDF as source of truth; all Britton's Properties work uses the `bp-` class prefix and its own distinct design system.
- Pricing and packaging updated over time — user instructions take precedence over earlier conversation figures (e.g. current tier prices supersede original conversation figures).

---

## Tools & Resources

| Category | Tools |
|---|---|
| Content & automation | Claude API, Make, Airtable, Buffer, Google Business Profile API, Tally, Stripe |
| Web | Webflow |
| Client comms | WhatsApp (content capture trigger) |
| Email | Google Workspace (resold at £8/mo per mailbox) |

**Target running costs:** ~£85–100/mo at 10 clients; ~3–4 hrs/month manual work at that scale.
