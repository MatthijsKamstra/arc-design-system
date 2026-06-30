# ARC CSS — Project Context

A layered pure-CSS design system. No preprocessor, no runtime JS for styling. One codebase, ten theme variants, zero dependencies.

---

## Architecture

### Layer order (defined in `arc.css` and mirrored in `build.js`)

```
arc.reset → arc.tokens → arc.base → arc.layout
→ arc.components.* (hero, buttons, badges, cards, alerts, forms, nav, progress, extras, code)
→ arc.utilities → arc.animations → arc.theme
```

`arc.theme` is last — this is how theme files override everything cleanly.

### Entry point: `arc.css`

Declares all layers then chains `@import` in the correct order. Any new component needs:

1. A new `arc.components.<name>` entry in the `@layer` declaration block
2. A matching `@import "./components/<name>.css" layer(arc.components.<name>);` line

### Build: `build.js`

Node.js script that concatenates source files into `dist/`. No bundler, no watch mode.

```bash
node build.js
# → dist/arc.css (no theme)
# → dist/arc.cyber.css … dist/arc.editorial.css (system + theme)
```

Expected output size: **50–60 KB per file**. After any change, run the build and verify sizes.

Two arrays drive the build:

- `CORE_FILES` — load order for core + component source files
- `THEMES` — map of `{ name: "themes/theme-<name>.css" }`

---

## Design tokens (`core/tokens.css`)

All tokens live in `:root {}` inside `@layer arc.tokens`.

| Category      | Token pattern                                                                      | Example              |
| ------------- | ---------------------------------------------------------------------------------- | -------------------- |
| Colors        | `--primary`, `--accent`, `--bg`, `--surface`, `--border`, `--text`, `--text-muted` | `oklch(56% 0.2 258)` |
| Typography    | `--font-display`, `--font-body`, `--font-mono`, `--text-xs` … `--text-7xl`         | `clamp(…)` values    |
| Spacing       | `--s1` … `--s8`, `--space-*` aliases                                               | `0.25rem` steps      |
| Border radius | `--r`, `--r-sm`, `--r-md`, `--r-lg`, `--r-full`                                    | base `--r`           |
| Hero          | `--hero-photo`, `--hero-photo-position`                                            | Picsum URL           |

**Color rule: `oklch()` only. No hex, no rgb.**

---

## Themes (`themes/`)

Each theme file wraps everything in `@layer arc.theme { :root { … } }`.

| File                      | Display name    | Character                            |
| ------------------------- | --------------- | ------------------------------------ |
| `theme-cyber.css`         | Cyber           | Space/cyberpunk, neon glow, Orbitron |
| `theme-boy.css`           | Boy             | Loud, sharp, high-impact             |
| `theme-girly.css`         | Girly           | Candy, rounded, dramatic             |
| `theme-high-contrast.css` | Field Contrast  | Outdoor readability in bright light  |
| `theme-colorblind.css`    | Colorblind Safe | CVD-safe contrast palette            |
| `theme-popie.css`         | Popie           | K-pop, vivid, high contrast          |
| `theme-bootstrap.css`     | Bootstrap       | Bootstrap blue, familiar             |
| `theme-tailwind.css`      | Breeze          | Indigo, minimal, rounded             |
| `theme-corporate.css`     | Suite           | Navy, conservative                   |
| `theme-editorial.css`     | Editorial       | Monochrome luxe, serif, copper       |

### Hero images (per theme)

```css
--hero-photo: url("https://picsum.photos/seed/arc-<seed>/2400/1400");
--hero-photo-position: center 44%;
```

Seeds follow the pattern `arc-<theme>-<keyword>`, e.g. `arc-cyber-neon`.

### New theme checklist

- [ ] `@import` Google Fonts (if custom font)
- [ ] Wrap all tokens in `@layer arc.theme { :root { … } }`
- [ ] Set `--primary`, `--accent`, `--bg`, `--surface`, `--border`, `--text`, `--text-muted` in `oklch()`
- [ ] Set `--font-display` and/or `--font-body`
- [ ] Set `--r` (border radius base)
- [ ] Set `--hero-photo` + `--hero-photo-position`
- [ ] Register in `build.js` `THEMES` object
- [ ] Add theme bar button in `index.html`
- [ ] Run `node build.js` and verify output

---

## Components (`components/`)

| File             | Layer                     | What it contains                                             |
| ---------------- | ------------------------- | ------------------------------------------------------------ |
| `hero.css`       | `arc.components.hero`     | Full-width photo hero, nebula/grid variants, cyber starfield |
| `extras.css`     | `arc.components.extras`   | Stats grid (`.stats-grid`, `.stat-card`) + timeline          |
| `buttons.css`    | `arc.components.buttons`  | `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-ghost`       |
| `badges.css`     | `arc.components.badges`   | `.badge`, `.badge-primary`, `.badge-success`, etc.           |
| `cards.css`      | `arc.components.cards`    | `.card`, `.card-body`, `.card-glow`                          |
| `alerts.css`     | `arc.components.alerts`   | `.alert`, `.alert-info`, `.alert-danger`, etc.               |
| `forms.css`      | `arc.components.forms`    | Input, select, textarea, label                               |
| `nav.css`        | `arc.components.nav`      | Top navigation bar                                           |
| `progress.css`   | `arc.components.progress` | `.progress`, `.progress-bar`                                 |
| `code-block.css` | `arc.components.code`     | `<pre><code>` styling                                        |

### New component checklist

- [ ] Create `components/<name>.css` with `@layer arc.components.<name> { … }`
- [ ] Add layer name to the `@layer` declaration block in `arc.css`
- [ ] Add `@import` line in `arc.css`
- [ ] Add to `CORE_FILES` in `build.js` (correct position in load order)
- [ ] Add demo section to `index.html`

---

## Showcase (`index.html`)

Single HTML file, no framework. Loads `arc.css` + active theme via `data-theme` attribute on `<html>`. Inline JS in `index.html` switches themes by swapping the `<link>` tag and setting `data-active-theme`.

When updating:

- Theme bar buttons: `<button data-theme="<name>">Label</button>`
- File structure code block: keep in sync with actual files
- Build output code block: keep in sync with `build.js` outputs
- Hero badge: update "N themes" count when themes are added

---

## Hard rules

- `oklch()` only for all color values
- No hex, no `rgb()`, no `hsl()`
- No CSS preprocessor syntax (no `$var`, no `&` outside native nesting)
- No JavaScript for visual styling
- No wrapper abstractions for single-use patterns
- Glow effects (`box-shadow` with color) only in cyber/popie/girly/boy themes — not corporate/editorial/bootstrap/tailwind
