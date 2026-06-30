# ARC CSS

A layered CSS design system built on modern CSS — `@layer`, `oklch()`, `color-mix()`, CSS nesting. One HTML codebase, multiple themes, zero build step required.

De showcase start op `Default Core`. Theme kiezen kan via de navbar-pulldown en via de theme-bar.

## Gebruik

```html
<!-- Design system core -->
<link rel="stylesheet" href="arc.css" />

<!-- Kies een theme (optioneel) -->
<link rel="stylesheet" href="themes/theme-cyber.css" />
```

Zonder theme laadt het systeem met de clean default palette.

## Themes

| Bestand                          | Naam       | Karakter                                   |
| -------------------------------- | ---------- | ------------------------------------------ |
| `themes/theme-high-contrast.css` | Contrast   | Outdoor leesbaarheid, sterke contrasten    |
| `themes/theme-colorblind.css`    | Colorblind | Kleurblind-vriendelijke contrastset        |
| `themes/theme-cyber.css`         | Cyber      | Space/cyberpunk, neon glow, Orbitron font  |
| `themes/theme-boy.css`           | Boy        | Blauw-gedreven, scherp en contrastrijk     |
| `themes/theme-girly.css`         | Girl       | Pink-gedreven, rond en speels              |
| `themes/theme-popie.css`         | Popie      | K-pop vibe, levendig, hoge contrasten      |
| `themes/theme-bootstrap.css`     | Bootstrap  | Bootstrap blauw, strak, vertrouwd          |
| `themes/theme-tailwind.css`      | Breeze     | Indigo, ronde hoeken, minimaal             |
| `themes/theme-corporate.css`     | Suite      | Navy blauw, conservatief                   |
| `themes/theme-editorial.css`     | Editorial  | Monochrome luxe, serif display, koper tint |

## Theme volgorde in de showcase

1. `Default Core`
2. `Contrast`
3. `Colorblind`
4. `Boy`
5. `Girl`
6. de overige themes

Voor `Contrast` en `Colorblind` is de hero-foto bewust uitgezet. Die themes sturen op leesbaarheid en betekenis, niet op decoratieve beeldlagen.

## Accessibility onderbouwing

- `colorblind-theme-proof.md` legt uit waarom `Colorblind` werkt in light en dark mode.
- `high-contrast-theme-proof.md` legt uit waarom `Contrast` werkt in light en dark mode.

## Theme kiezen in de showcase

- In de navbar staat een `select` met dezelfde theme-volgorde als de theme-bar.
- De forms-demo bevat ook een `select` voorbeeld dat dezelfde componentstijl gebruikt.

## Eigen theme maken

```css
@layer arc.theme {
  :root {
    --primary: oklch(70% 0.25 30);
    --font-display: "My Font";
    --r-md: 0.75rem;
  }
}
```

## Build

```bash
node build.js
# → dist/arc.css
# → dist/arc.cyber.css
# → dist/arc.popie.css
# → dist/arc.girly.css
# → dist/arc.boy.css
# → dist/arc.high-contrast.css
# → dist/arc.colorblind.css
# → dist/arc.bootstrap.css
# → dist/arc.tailwind.css
# → dist/arc.corporate.css
# → dist/arc.editorial.css
```

## Browser support

ARC CSS uses `@layer`, `oklch()`, `color-mix()`, CSS Nesting, `clamp()`, and `@property`. CSS Nesting is the limiting factor (~96% global coverage).

**Supported**

| Browser          | Min   | Current (May 2026) | Notes                   |
| ---------------- | ----- | ------------------ | ----------------------- |
| Chrome           | 112+  | 136                | Full support            |
| Edge             | 112+  | 136                | Full support            |
| Firefox          | 128+  | 138                | `@property` needs 128+  |
| Safari           | 16.5+ | 18.5               | CSS Nesting needs 16.5+ |
| Samsung Internet | 21+   | 27                 | Chromium-based          |

**Not supported**

| Browser           | Reason                        |
| ----------------- | ----------------------------- |
| Internet Explorer | No `@layer`, `oklch`, nesting |
| Firefox < 128     | Missing `@property`           |
| Safari < 16.5     | Missing CSS Nesting           |
| Chrome < 112      | Missing CSS Nesting           |
| Opera Mini        | No modern CSS support         |

## Structuur

```
arc-design-system/
├── arc.css               ← entry point
├── core/
│   ├── reset.css
│   ├── tokens.css        ← alle design tokens
│   ├── base.css
│   ├── grid.css
│   └── animations.css
├── components/
│   ├── hero.css
│   ├── buttons.css
│   ├── badges.css
│   ├── cards.css
│   ├── alerts.css
│   ├── forms.css
│   ├── nav.css
│   ├── progress.css
│   ├── extras.css
│   └── code-block.css
├── utilities/
│   └── utilities.css
├── themes/
│   ├── theme-high-contrast.css
│   ├── theme-colorblind.css
│   ├── theme-cyber.css
│   ├── theme-boy.css
│   ├── theme-girly.css
│   ├── theme-popie.css
│   ├── theme-bootstrap.css
│   ├── theme-tailwind.css
│   ├── theme-corporate.css
│   └── theme-editorial.css
├── colorblind-theme-proof.md
├── high-contrast-theme-proof.md
└── build.js
```
