#!/usr/bin/env node
/**
 * ARC Design System — Build Script
 *
 * Concatenates all source files into a single distributable CSS file.
 * Run: node build.js
 *
 * Output:
 *   dist/arc.css           — design system only (no theme)
 *   dist/arc.cyber.css     — design system + cyber theme
 *   dist/arc.popie.css     — design system + popie theme
 *   dist/arc.girly.css     — design system + girly theme
 *   dist/arc.boy.css       — design system + boy theme
 *   dist/arc.high-contrast.css — design system + high-contrast theme
 *   dist/arc.colorblind.css — design system + colorblind-safe theme
 *   dist/arc.xyntrel.css   — design system + xyntrel theme
 *   dist/arc.bootstrap.css — design system + bootstrap theme
 *   dist/arc.tailwind.css  — design system + tailwind theme
 *   dist/arc.corporate.css — design system + corporate theme
 *   dist/arc.editorial.css — design system + editorial theme
 */

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const DIST = path.join(ROOT, "dist");

// Layer declaration header — placed after top-level theme @import rules
const LAYER_ORDER = `@layer
  arc.reset,
  arc.tokens,
  arc.base,
  arc.layout,
	arc.components.hero,
  arc.components.buttons,
  arc.components.badges,
  arc.components.cards,
  arc.components.alerts,
  arc.components.forms,
  arc.components.nav,
  arc.components.progress,
	arc.components.extras,
  arc.components.code,
  arc.utilities,
  arc.animations,
  arc.theme;

`;

// Source files in load order
const CORE_FILES = [
	"core/reset.css",
	"core/tokens.css",
	"core/base.css",
	"core/grid.css",
	"core/animations.css",
];

const COMPONENT_FILES = [
	"components/hero.css",
	"components/buttons.css",
	"components/badges.css",
	"components/cards.css",
	"components/alerts.css",
	"components/forms.css",
	"components/nav.css",
	"components/progress.css",
	"components/extras.css",
	"components/code-block.css",
];

const UTILITY_FILES = [
	"utilities/utilities.css",
];

const THEMES = {
	boy: "themes/theme-boy.css",
	girly: "themes/theme-girly.css",
	cyber: "themes/theme-cyber.css",
	"high-contrast": "themes/theme-high-contrast.css",
	colorblind: "themes/theme-colorblind.css",
	xyntrel: "themes/theme-xyntrel.css",
	popie: "themes/theme-popie.css",
	bootstrap: "themes/theme-bootstrap.css",
	tailwind: "themes/theme-tailwind.css",
	corporate: "themes/theme-corporate.css",
	editorial: "themes/theme-editorial.css",
};

function read(relPath) {
	const content = fs.readFileSync(path.join(ROOT, relPath), "utf8");
	return `/* ── ${relPath} ──────────────────────────────────────── */\n${content}`;
}

function readTheme(relPath) {
	const raw = fs.readFileSync(path.join(ROOT, relPath), "utf8");
	const imports = [];
	const bodyLines = [];

	raw.split(/\r?\n/).forEach((line) => {
		if (line.trim().startsWith("@import ")) {
			imports.push(line.trim());
		} else {
			bodyLines.push(line);
		}
	});

	return {
		imports,
		body: `/* ── ${relPath} ──────────────────────────────────────── */\n${bodyLines.join("\n")}`,
	};
}

function build(outName, themeFile) {
	const allFiles = [...CORE_FILES, ...COMPONENT_FILES, ...UTILITY_FILES];
	const theme = themeFile ? readTheme(themeFile) : null;
	const themeImports = theme ? Array.from(new Set(theme.imports)) : [];
	const parts = [
		`/* ============================================================\n   ARC Design System — Built ${new Date().toISOString().split("T")[0]}${themeFile ? `\n   Theme: ${themeFile}` : ""}\n   ============================================================ */\n`,
		...themeImports,
		LAYER_ORDER,
		...allFiles.map(read),
		theme ? theme.body : "",
	];

	const outPath = path.join(DIST, outName);
	fs.writeFileSync(outPath, parts.filter(Boolean).join("\n\n"));
	console.log(`✓  ${outName} (${Math.round(fs.statSync(outPath).size / 1024)}KB)`);
}

function cleanDist() {
	if (!fs.existsSync(DIST)) {
		fs.mkdirSync(DIST);
		return;
	}

	fs.readdirSync(DIST).forEach((name) => {
		if (name.endsWith(".css")) {
			fs.unlinkSync(path.join(DIST, name));
		}
	});
}

cleanDist();

// Build all variants
build("arc.css");
Object.entries(THEMES).forEach(([name, file]) => {
	build(`arc.${name}.css`, file);
});

console.log("\nAll done. Files are in dist/");
