# Sunidhi Goyal — Ancient-Technology Cave Portfolio

React 19 · Vite · Three.js / React Three Fiber · drei · Framer Motion · Lucide · simple-icons.
The default experience is an **immersive scroll-driven 3D cave**: the camera travels from a sunlit cave mouth, through ten
torch-lit chambers (Entrance → About → Education → Experience → Skills → Projects → Certifications → Achievements → Coding
profiles → Contact campfire) to a sunrise exit. A classic, fast, flat portfolio (the previous design) is kept as a fallback
and is one click away (**Classic view**) — it is also what visitors get without WebGL or with `prefers-reduced-motion`.
All content still lives in one data file (`src/data/portfolioData.js`).

## The cave experience

| Piece | File(s) |
| --- | --- |
| Cave geometry (displaced tube swept along a spline, chambers = bulges), camera stops, panel anchors | `src/cave/path.js` |
| Scroll → camera (plateau easing, quaternion slerps, parallax, damping) | `src/cave/CameraRig.jsx` |
| Procedural rock / wood / flame / mountain textures | `src/cave/textures.js`, `noise.js` |
| World-space triplanar rock material (no stretched UVs on the displaced mesh) | `src/cave/triplanar.js` |
| Tunnel + stalactites/stalagmites/boulders (instanced) | `src/cave/scene/Tunnel.jsx` |
| Torches: 10 real point lights are re-assigned to the nearest torches each frame (constant light count), flickering flame sprites | `scene/Torches.jsx` |
| Sky dome (day + sunrise), mountain layers, gorge, rope bridge, cliffs, waterfalls | `scene/Sky.jsx`, `scene/Exterior.jsx`, `scene/Waterfall.jsx` |
| Per-chamber props (shelves, workbench, gears, chests, crystals, banners, campfire, signposts, lanterns, vines) | `scene/Props.jsx` (`LAYOUT` table at the bottom) |
| Embers + dust (GPU-animated points), bats (instanced, shader wing-flap, never over text) | `scene/Particles.jsx`, `scene/Bats.jsx` |
| Carved parchment panels mounted in 3D as real DOM (selectable, accessible) | `scene/Panels3D.jsx`, `panels/` |
| Wooden nav, hero nameplate, sound toggle, mobile sheet, project dialog | `Hud.jsx`, `cave.css` |
| Procedural ambient audio (no recordings) | `audio.js` |

**Adding / editing content:** only touch `src/data/portfolioData.js`. Panels (`src/cave/panels/content.jsx`) read from it; nothing personal is
hard-coded in 3D code. Project cards use `project.screenshot` if set (e.g. `'/projects/foody.png'`, file in `public/projects/`);
`screenshot: null` is explicit for each project because no real screenshots were available — the card falls back to the
illustration. Missing links are `null` in the data (no “Live” button is rendered for them).

**Controls:** scroll, the wooden nav, ↑/↓ / PageUp/PageDown / ←/→ / Home / End (jump chamber by chamber), the mobile stepper. **Sound is OFF by default**;
the toggle (top right) starts a synthesised cave ambience (rumble, drips, fire crackle, crickets/birds near the cave mouths, bat flutter, waterfall) with a
volume slider. It pauses when the tab is hidden and never starts without a click. No copyrighted audio is used.

**URL flags:** `?view=classic` / `?view=cave` force a presentation; `?quality=lite` forces the reduced-cost 3D profile.

**Honest note on art:** the cave is generated entirely in code (procedural rock, light, fog, geometry). It is not a painted illustration.
To push it closer to a painted look, replace the generated textures in `src/cave/textures.js` with authored PBR/painted maps
(drop files in `public/cave/` and load them with `useTexture`) and swap the exterior crags for modelled cliffs.

## Requirements

**Node.js 20.19+ or 22.12+ (Node 22 LTS recommended)** and npm 9+. Vite 8 will not start on older Node versions
(on Node 10 it fails with `SyntaxError: Unexpected identifier` at `import module from 'node:module'`).
Check with `node -v`. If you use nvm, run `nvm install && nvm use` in this folder (an `.nvmrc` is included).
After changing Node versions, reinstall: `rm -rf node_modules && npm install`.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the production build → http://localhost:4173
```

Debug query flag (classic page): append `?view=classic&scene=full`, `?scene=lite` or `?scene=off` to force a 3D mode (`off` shows the no-WebGL fallback).

## Project structure

```
src/
  data/portfolioData.js     ← ALL content (edit this file only to change text/links/projects)
  components/
    layout/   Navbar, Footer, ThemeToggle
    sections/ Hero, About, Resume, Experience, Skills, Projects, Education,
              Certifications, Achievements, CodingProfiles, Contact
    three/    SceneRoot (lazy + error boundary), HeroScene (Canvas, backdrop, lights),
              ProfessionalAvatar, FloatingSkills, SceneFallback
    ui/       Button, SectionHeading, Reveal, Counter, TechIcon, SocialLinks,
              ProjectCard, ProjectModal, ProjectArt
  hooks/      useTheme, useActiveSection, useAnchorRect, usePointerTracker, useTypewriter, ...
  utils/      icons.js (brand-logo registry), sceneStore.js (DOM ↔ 3D shared state), webgl.js, motion.js
  styles/     tokens.css (themes), base.css, layout.css, sections.css, components.css
```

## Changing content

Everything lives in `src/data/portfolioData.js`: profile, links, navigation, about text, experience, skills,
projects, education, certifications, achievements, coding-profile snapshots, contact and footer copy.
Technology logos are referenced by key (`springboot`, `mysql`, …) and resolved in `src/utils/icons.js`
(official marks from the `simple-icons` package; neutral glyphs where no official mark exists).

* **Add a project:** push an object onto `projects` (set `live: null` if there is no verified deployment — the card then shows “Live demo unavailable”).
* **Add an internship/job:** push onto `experience`.
* **Refresh coding stats:** edit `achievements` and `codingProfiles` and update the snapshot date. These are static numbers, not a live feed.

## Resume links

* **Open Full Resume** → the original Google Drive viewer.
* **Download Resume** → `https://drive.google.com/uc?export=download&id=<FILE_ID>`. Verified from a browser context without cookies:
  it redirects to `drive.usercontent.google.com` and returns the PDF (`%PDF-1.5`, ≈121 KB) as `application/octet-stream`.
  If Drive ever stops allowing it, the page text points visitors to the viewer link as a fallback.
* To swap the resume, change `RESUME_FILE_ID` at the top of `portfolioData.js` (the file must be shared “Anyone with the link”).

## Replacing the stylized avatar with a rigged model

`ProfessionalAvatar.jsx` is a **procedural, jointed avatar** (shoulders, elbows, head driven by damped procedural poses). It is *not*
a skinned mesh with authored animation clips. To upgrade:

1. Obtain a legally licensed rigged GLB with Idle and Arms-Folded clips (e.g. exported from Blender/Mixamo with proper licensing, or a commissioned model). Compress with `gltf-transform` (Draco/meshopt, ≤ ~2 MB).
2. Put it in `public/models/avatar.glb`.
3. Create `RiggedAvatar.jsx` using drei: `const { scene, animations } = useGLTF('/models/avatar.glb'); const { actions } = useAnimations(animations, scene)`.
   Cross-fade `actions.Idle` ↔ `actions.ArmsFolded` when `isFolded()` (from `utils/sceneStore.js`) changes, and rotate the head bone toward `sceneStore.pointer`.
4. In `HeroScene.jsx`, replace `<ProfessionalAvatar … />` with `<RiggedAvatar … />`. Placement, hover focus, scroll folding, theme and fallbacks are handled outside the avatar component, so nothing else needs to change. Keep the model’s height ≈ `AVATAR_H` (3.4 units) with its origin at the feet, or adjust the constant.

Do not use a real person’s photograph or likeness without permission; replace the avatar only with an approved portrait/model.

## Performance, accessibility, fallbacks

* 3D code (~250 kB gzip) is a lazy chunk loaded right after first paint; text content never waits for it.
* DPR capped at 1.5 (1 on low-power devices); “lite” mode (≤4 cores / ≤4 GB RAM / small touch screens) drops the badges and network lines and uses fewer particles.
* `prefers-reduced-motion`: render-on-demand canvas, no idle/orbit motion, instant pose changes, no typewriter, no counters animation, no smooth scrolling.
* WebGL missing, context lost, or chunk failing → flat SVG avatar illustration; the rest of the site is unaffected.
* Semantic landmarks, skip link, visible focus rings, ARIA tabs/dialog, keyboard-operable modal and tabs, 44 px touch targets, both themes designed for AA contrast.

## Environment variables

None are required and no secrets are used. Optional: `VITE_SITE_URL=https://your-domain` (e.g. in `.env.production`) so the Open Graph / Twitter image URL becomes absolute.

## Deploying

Any static host works (`dist/`): Vercel, Netlify, GitHub Pages (set `base` in `vite.config.js` if hosting under a sub-path).

## Licences & credits

* Logos: [simple-icons](https://simpleicons.org) (CC0 data). Brand marks remain trademarks of their owners and are used only to identify technologies.
* Fonts: Space Grotesk, Inter, JetBrains Mono via Google Fonts (SIL OFL).
* No stock photos or third-party 3D models are bundled.

## Source data & items that still need attention

Data was taken from the resume PDF (primary), GitHub profile + repository READMEs, and the public Codolio / LeetCode pages on 19 Oct 2026.

* **LinkedIn** blocks automated access, so nothing was taken from it. Add anything extra (About text, more experience) to `portfolioData.js`.
* **Foody database inconsistency:** the resume's tools line says MongoDB, while one bullet says MySQL. The site lists MongoDB (matches the GitHub profile) and avoids naming a database in the prose. Please confirm which is correct.
* **Smart Visitor Management System** (internship) has no public repository or demo, so it appears under Experience only.
* **Sweet Shop Management**: a Vercel frontend exists (`sweet-shop-management-rho-nine.vercel.app`) but its Render backend did not load data when tested, so no live-demo button is shown. Add `live:` once the backend is confirmed working.
* **Foody repository naming:** the resume links `Food-Delivery-Website-Updated-Version`; an older `Food-Store-Management` repo also exists on GitHub. The resume's link is used.
* **SortVision demo URL:** the resume/README link `sortiing-visualizer-tg8d.vercel.app`; the repo “About” field points at `sortiing-visualizer.vercel.app`. The resume's link is used and was reachable.
* **Company logo:** none bundled (no licensed asset); a monogram tile is shown.
* **Credential IDs** for certificates are not public, so none are shown. Certificate links go to Google Drive files.
* **Contact form:** there is no backend, so the form opens a pre-filled draft in the visitor's email app (clearly labelled). For a hosted form, add a service such as Formspree/EmailJS and replace `onSubmit` in `Contact.jsx`.
* **Phone number** (on the resume) is intentionally not published on the site.
* **Open-to-work / availability status** is not stated anywhere verifiable, so none is claimed.
