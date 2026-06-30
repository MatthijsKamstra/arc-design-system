# Web Components — Project Map

Dit document legt uit wat elke map in deze workspace doet, hoe de voorbeelden zich tot elkaar verhouden, en waar je moet werken voor een bepaald type wijziging.

## Overzicht

Deze repo bevat niet één app, maar meerdere kleine projecten naast elkaar.

- `light-dom-demo/` is de simpele Light DOM playground.
- `shadow-dom-demo/` is de simpele Shadow DOM playground.
- `demo-app/` is een kleine multi-page demo-app die web components gebruikt.
- `arc-design-system/` is een apart CSS design system met eigen build, themes en showcase.
- `source.md` en `terminology.md` zijn referentie-documenten.

De rode draad in de repo is dezelfde keuze:

- Gebruik je een globaal CSS-systeem zoals Bootstrap, dan werk je meestal met Light DOM.
- Wil je componenten volledig isoleren, dan werk je met Shadow DOM.

## Root folders

### `light-dom-demo/`

Deze map laat zien hoe je web components bouwt zonder Shadow DOM, direct in de gewone pagina-DOM.

Hier gebeurt het volgende:

- Componenten renderen direct in de DOM van de pagina.
- Bootstrap classes werken meteen op de gegenereerde markup.
- Content wordt doorgegeven via attributen, `innerHTML`, of `data-*` markers.
- Dit is de plek voor voorbeelden waarbij hergebruik en simpele integratie belangrijker zijn dan style-isolatie.

Gebruik deze map als je wilt laten zien hoe een component werkt in een Bootstrap-omgeving zonder extra complexiteit.

### `shadow-dom-demo/`

Deze map laat de andere kant zien: componenten met Shadow DOM en eigen afgeschermde styling.

Hier gebeurt het volgende:

- Componenten maken hun eigen shadow root.
- Styles zitten opgesloten in de component zelf.
- Content gaat via default en named slots.
- Dit zijn voorbeelden voor standalone widgets of componenten die niet mogen lekken naar de rest van de pagina.

Gebruik deze map als je isolatie wilt demonstreren of als Bootstrap juist niet leidend is.

### `demo-app/`

Dit is een kleine demo-app met meerdere HTML-pagina's. De app gebruikt web components als gewone bouwstenen in een meer realistische UI.

Hier gebeurt het volgende:

- De pagina's delen een vaste navigatie en een gedeelde stijl.
- `js/app.js` is het centrale module-entrypoint dat alle components importeert.
- De HTML-pagina's laden alleen `js/app.js` en hoeven losse componentbestanden niet zelf te kennen.
- De app laat zien hoe Light DOM en Shadow DOM componenten samen in een gewone applicatie gebruikt worden.

#### `demo-app/components/`

Hier staan de web components van de demo-app.

- `ui-nav.js` bouwt de navigatiebalk en markeert de actieve pagina.
- `demo-card-light.js` is een Light DOM component.
- `demo-card-shadow.js` is een Shadow DOM component.

Dit is de map waar je een component wijzigt als het gedrag of de rendering van de app-component zelf moet veranderen.

#### `demo-app/css/`

Hier staat de styling van de demo-app.

- `app.css` is de hoofdlayer voor layout en pagina-opmaak.
- `custom.css` is extra of afwijkende styling bovenop de basis.

Werk hier als de app-layout, spacing, visuele hiërarchie of pagina-opmaak moet veranderen.

#### `demo-app/js/`

Hier staat de centrale JavaScript bootstrap van de app.

- `app.js` importeert de componenten in de juiste volgorde.
- De HTML-pagina's gebruiken dit bestand als enige module-entrypoint.

Werk hier als je nieuwe components wilt registreren of de opstartvolgorde van de app wilt aanpassen.

### `arc-design-system/`

Dit is een zelfstandig project binnen de repo: een CSS design system met moderne CSS-features, meerdere themes en een eigen buildscript.

Hier gebeurt het volgende:

- `arc.css` definieert layer-volgorde en importeert alle onderdelen.
- `core/` bevat tokens, reset, base layout en animaties.
- `components/` bevat de herbruikbare UI-blokken van het design system.
- `themes/` bevat visuele varianten zoals cyber, corporate en editorial.
- `build.js` concateneert alles naar `dist/` distributiebestanden.
- `index.html` is de showcase waarin alle onderdelen en themes getoond worden.
- De showcase heeft zowel een theme-bar als een navbar-pulldown voor theme-keuze.
- `colorblind-theme-proof.md` en `high-contrast-theme-proof.md` onderbouwen de accessibility-themes.

Werk in deze map als de vraag gaat over het design system zelf, niet over de web component demo-app.

### `source.md`

Dit is de bronuitleg achter de repo. Hier staat de inhoudelijke redenatie over Light DOM versus Shadow DOM.

Gebruik dit document als je terug wilt naar de uitgangspunten achter de architectuurkeuzes.

### `terminology.md`

Dit document legt termen en begrippen uit die in de repo terugkomen.

Gebruik dit als woordenlijst of om begrippen consistent te houden in documentatie.

## Hoe de mappen samenhangen

- `light-dom-demo/` en `shadow-dom-demo/` zijn kleine, losse leer- en demo-omgevingen.
- `demo-app/` laat zien hoe web components in een echte pagina-structuur landen.
- `arc-design-system/` is geen componentdemo, maar een apart design system project.

Met andere woorden:

- Wil je componentgedrag uitleggen, kijk eerst naar `light-dom-demo/`, `shadow-dom-demo/` of `demo-app/components/`.
- Wil je styling-architectuur, tokens en themes uitleggen, kijk naar `arc-design-system/`.

## Praktische beslisregel

Gebruik deze vuistregel bij nieuwe componenten:

| Situatie                                                      | Aanpak             |
| ------------------------------------------------------------- | ------------------ |
| Bootstrap of globale utility classes moeten direct werken     | Light DOM          |
| Component moet volledig geïsoleerd zijn                       | Shadow DOM         |
| Component leeft in de demo-app tussen gewone Bootstrap markup | Meestal Light DOM  |
| Component is een zelfstandige widget met eigen styling        | Meestal Shadow DOM |

## Waar je moet aanpassen

| Vraag                                    | Juiste plek                    |
| ---------------------------------------- | ------------------------------ |
| Nieuwe simpele Bootstrap component       | `light-dom-demo/`              |
| Nieuwe geïsoleerde shadow component      | `shadow-dom-demo/`             |
| Nieuwe app-pagina of app-UI              | `demo-app/`                    |
| Nieuwe app-component                     | `demo-app/components/`         |
| Nieuwe theme of design-system component  | `arc-design-system/`           |
| Architectuurkeuze of begrippen uitleggen | `source.md` / `terminology.md` |

## Belangrijkste nuance

Het belangrijkste verschil in deze repo is niet "web components of niet", maar hoe de component met styling omgaat.

- Light DOM kiest voor makkelijke integratie met bestaande CSS.
- Shadow DOM kiest voor isolatie en voorspelbaar gedrag.

Dat onderscheid bepaalt in vrijwel alle gevallen in welke map je moet zijn.
