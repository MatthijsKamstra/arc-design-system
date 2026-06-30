# Colorblind Theme - Onderbouwing

Dit document onderbouwt waarom `themes/theme-colorblind.css` werkt voor gebruikers met kleurenzienstoornissen, in zowel dark mode als light mode.

## Ontwerpkeuzes

- Er is niet op één kleur-as geleund. Statuskleuren liggen uit elkaar in hue en in lichtheid.
- Betekenis wordt niet alleen door kleur gedragen.
- Contrast met de achtergrond is bewust groot gehouden.
- Tekst is zwaarder gezet (`font-weight` voor `.btn`, `.badge`, `.alert`) voor betere leesbaarheid in de praktijk.

## Waarom dit werkt bij kleurblindheid

### 1. Scheiding op meerdere dimensies

Kleuren verschillen op twee assen tegelijk:

- hue (blauw, oranje, groen, magenta)
- lightness (L-waarde in `oklch`)

Daardoor blijven elementen vaak nog onderscheidbaar als hue-waarneming gedeeltelijk wegvalt.

### 2. Veilige kleurparen

De kernparen in dit thema zijn gekozen om ook bij de meest voorkomende CVD-types (deuteranopie/protanopie/tritanopie) beter uit elkaar te blijven:

- blauw (`--cb-blue`) versus oranje (`--cb-orange`)
- blauw (`--primary`) versus goud (`--warning`)
- magenta (`--danger`) versus groen (`--success`) met extra lichtheidsverschil

### 3. Geen subtiele UI-afhankelijkheid

Randen en componentgewicht zijn duidelijker dan in zachte desktop-themes:

- duidelijke `--border`
- zwaardere labels en badges
- geen glow-afhankelijk semantisch signaal
- geen decoratieve hero-foto die contrast of betekenis visueel vertroebelt

## Dark mode en light mode

`theme-colorblind.css` definieert beide varianten expliciet:

- light basis in `:root`
- dark override in `[data-theme="dark"]`

Effect:

- In light mode is de tekst donker op lichte ondergrond.
- In dark mode is de tekst licht op donkere ondergrond.
- In beide modi blijft het relatieve statusverschil tussen primary/secondary/success/warning/danger behouden.

## Verifieerbare checks (bewijsvoering)

Voer deze checks uit op `index.html`:

1. Zet theme op `Colorblind`.
2. Test light en dark via de mode toggle.
3. Simuleer CVD in browser devtools (deuteranopia/protanopia/tritanopia).
4. Controleer dat je zonder kleurkennis nog kunt onderscheiden:
   - primaire knop vs secundaire knop
   - warning vs danger alert
   - badge-varianten naast elkaar

Acceptatie:

- Statusgroepen blijven zichtbaar onderscheiden in beide modes.
- Tekst blijft leesbaar op componentachtergronden.
- UI blijft bruikbaar zonder subtiele kleurgradaties.

## Beperkingen

- 100% perfect onderscheid voor alle vormen en ernst van CVD is niet realistisch.
- Kritische flows moeten naast kleur ook icoon, tekst of vormverschil gebruiken.

Dit theme maakt die basis veel robuuster dan een standaard esthetische palette.
