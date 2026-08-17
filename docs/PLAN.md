# Maison Iro — plan

Source: [SamurAIGPT/ai-tryon](https://github.com/SamurAIGPT/ai-tryon) (TryOn AI). Live app: [ai-tryon-smoky.vercel.app](https://ai-tryon-smoky.vercel.app/).

## 1. Brand

Three names considered:

1. **Maison Iro** — locked. Iro is the Yoruba wrapper. A house that dresses families and firms, not a try-on toy.
2. Atelier Sika — Akan gold; workshop energy. Strong, a little more “startup.”
3. The Fitting House — institutional, clear, less African in the mouth.

**One line:** Maison Iro is the virtual fitting room for African cloth houses — see the garment on a real body in Lagos, Nairobi, Accra, or Johannesburg before the line leaves the shop.

## 2. What `/` is now vs what it should be

`/` is the logged-in **Virtual Outfit Studio** (dual upload, prompt, generate). No marketing landing exists in the repo or on the live site.

- Move the studio to **`/studio`** (their word for the product).
- `/` becomes marketing in their look: zinc-950 page, violet → fuchsia CTAs, Outfit/Inter, glass header, screenshot frame like their output panel.

## 3. Landing clone (their layout language, our copy)

Their public site *is* the studio. We keep that chrome and write a house story on top.

| Section | Their shape | Our words |
| --- | --- | --- |
| Hero | Dark field, tight headline, violet-fuchsia button, framed preview | Fit the cloth to the body. Keep the house in the family. |
| Corridor strip | Logo / use-case row | Lagos boutiques, Nairobi stylists, Accra houses, Joburg e-commerce |
| How it works | 1–2–3 like their studio steps | Portrait → garment → fitting |
| Studio feature | Dual dropzones, aspect ratio, prompt | Same UI language, wealth copy |
| Gallery feature | Card grid | Wardrobe of the line — saved fittings for the next season |
| Pricing | 4 credit packs | Same grid, African-house framing |
| FAQ | Tight Qs | Photoshoots, credits, who it is for |
| CTA | Full-width generate bar energy | Open an account. Dress the line. |

No leftover “TryOn AI”, MuAPI, Botika, or “open-source alternative” voice on the public site.

## 4. Product + Team in the nav

Header and footer on marketing pages: **Product**, **Team**, Pricing, About, plus Log in / Sign up.

- `/product` — Maison Iro intro, README demo video (`public/product/demo.mp4`), ≥4 screenshots of this UI, how it works, CTA to Sign up.
- `/team` — ≥2 people (Adjoa Mensah, Kelechi Okonkwo, Naledi Mokoena), roles, bios, LinkedIn, photos.

## 5. Login / signup

They have `/login` (Google + MuAPI key). We keep the route and the dark card look. Screens become **email + password** (any pair works). Add `/signup` with the same chrome.

After login or signup → **`/studio`**. Session is a NextAuth JWT cookie. Logout clears it and returns to `/login`.

## 6. In-app home and screens we keep

| Route | Job |
| --- | --- |
| `/studio` | In-app home. Their studio. Do not redesign. |
| `/gallery` | Their wardrobe dashboard. Seed it. |
| `/pricing` | Their 4-pack grid. Demo purchase tops up credits. |

Do not rewrite sidebar, cards, dropzones, or the output frame.

## 7. What we mock

- Auth: email + password credentials. No Google, no Clerk, no Prisma adapter.
- Upload: data-URL fallback (already in the repo).
- Generate: 3s delay, then a canned fitting (already in the try-on route when no MuAPI key). Persist in a demo store so gallery stays full.
- Gallery: six fixture fittings (Lagos / Accra / Nairobi / Joburg looks). No empty state on the camera path.
- Credits: start at 2,400. Generate deducts 18. Pricing “purchase” adds the pack.
- API key modal: save to the demo user only. No real MuAPI.

One live-looking click: **Generate Try-On** returns a completed result after a short delay.

## 8. What we delete / stub so Vercel builds

- Treat `DEMO_MODE=1`, `VERCEL=1`, or missing `DATABASE_URL` as demo.
- Prisma client is a stub in demo — no Postgres pool at import time.
- NextAuth secret has a committed fallback so the host boots.
- Stripe checkout is a local credit top-up in demo (no Stripe session).
- No Docker. No GitHub Actions / Dependabot in this repo.
- `prisma generate` stays in `npm run build`. `prisma.config.ts` gets a dummy URL so generate does not require a real database.

## 9. Product-page media

- Demo video: upstream README asset, already in the clone as `614588183-d08bd94b-2efd-4529-bd14-c8e97c87f959.mp4` → `public/product/demo.mp4`.
- Screenshots: official README shot plus captures from the local studio, gallery, pricing, and a completed fitting.
