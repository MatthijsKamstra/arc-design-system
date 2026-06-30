# Web Components Workspace

Deze repo bevat meerdere kleine projecten naast elkaar. Ze draaien allemaal om web components, maar niet met dezelfde aanpak.

De workspace is opgesplitst in drie soorten werk:

- simpele Light DOM voorbeelden
- simpele Shadow DOM voorbeelden
- een aparte demo-app
- een apart CSS design system met themes en showcase

## Wat staat waar

### `light-dom-demo/`

Deze map is de Light DOM playground.

Hier gebeurt dit:

- componenten renderen direct in de gewone pagina-DOM
- Bootstrap classes werken meteen op de output
- content wordt doorgegeven via attributen, `innerHTML` of `data-*`

Gebruik deze map als je wilt laten zien hoe web components samenwerken met een bestaand globaal CSS-systeem.

### `shadow-dom-demo/`

Deze map is de Shadow DOM playground.

Hier gebeurt dit:

- componenten maken hun eigen shadow root
- styling zit opgesloten in de component
- content loopt via slots

Gebruik deze map als je componenten wilt bouwen die visueel en structureel geïsoleerd blijven van de pagina.

### `demo-app/`

Deze map is een kleine demo-app met meerdere pagina's.

Hier gebeurt dit:

- HTML-pagina's vormen samen een kleine applicatie
- web components worden gebruikt als bouwstenen in die app
- `js/app.js` is het centrale module-entrypoint
- `components/` bevat de componenten van de app zelf
- `css/` bevat de app-styling

Werk hier als het gaat om pagina-opbouw, navigatie, app-flow of componentgebruik in een realistische UI.

### `arc-design-system/`

Dit is een zelfstandig project binnen deze repo: een CSS design system.

Hier gebeurt dit:

- `arc.css` bepaalt layer-volgorde en imports
- `core/` bevat reset, tokens, basisstijlen en layoutfundament
- `components/` bevat de herbruikbare CSS-componenten
- `themes/` bevat de visuele varianten
- `build.js` bouwt de distributiebestanden in `dist/`
- `index.html` is de showcase en documentatiepagina

Werk hier als de vraag gaat over themes, tokens, component-CSS, browser support of build output.

### `source.md`

Dit is de inhoudelijke bron achter de repo. Hier staat de redenering achter Light DOM versus Shadow DOM.

### `terminology.md`

Dit document houdt termen en definities consistent.

### `CLAUDE.md`

Dit document is de projectkaart van deze workspace. Daar staat uitgebreider beschreven wat elke map doet en waar je wijzigingen moet maken.

## Snelle beslisregel

| Situatie                                        | Werk hier                        |
| ----------------------------------------------- | -------------------------------- |
| Je wilt Bootstrap direct laten meewerken        | `light-dom-demo/` of `demo-app/` |
| Je wilt volledige stijl-isolatie                | `shadow-dom-demo/`               |
| Je werkt aan een demo-app met meerdere pagina's | `demo-app/`                      |
| Je werkt aan tokens, themes of CSS-architectuur | `arc-design-system/`             |

## Hoe de onderdelen samenhangen

- `light-dom-demo/` en `shadow-dom-demo/` zijn kleine, losse voorbeelden
- `demo-app/` laat zien hoe componenten landen in een echte pagina-opzet
- `arc-design-system/` is een apart design system en geen web component demo

De belangrijkste keuze in deze repo is daarom niet alleen "wel of geen web component", maar vooral hoe styling werkt:

- Light DOM voor makkelijke integratie met bestaande CSS
- Shadow DOM voor isolatie

## Startpunten

- Voor componentgedrag: kijk eerst in `light-dom-demo/`, `shadow-dom-demo/` of `demo-app/components/`
- Voor app-opbouw: kijk in `demo-app/`
- Voor design tokens, layers en themes: kijk in `arc-design-system/`
- Voor achtergrond en definities: lees `source.md`, `terminology.md` en `CLAUDE.md`
