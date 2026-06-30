# High Contrast Field Theme - Onderbouwing

Dit document onderbouwt waarom `themes/theme-high-contrast.css` geschikt is voor gebruik in fel buitenlicht (tablet/iPad in het veld), in zowel dark mode als light mode.

## Ontwerpdoel

Dit theme is gemaakt voor leesbaarheid en snelle herkenning, niet voor subtiele desktop-esthetiek.

## Ontwerpkeuzes die buiten werken ondersteunen

- Zeer groot contrast tussen tekst en achtergrond.
- Dikkere randen (`border-width: 2px`) op interactieve en informatieve componenten.
- Hoge fontgewichten op knoppen.
- Minder afhankelijkheid van glow, schaduw en subtiele tonal shifts.
- Korte radius (minder zachte vormen), waardoor contouren scherper zichtbaar zijn.

## Waarom dit werkt in fel licht

Buitenlicht verlaagt waarneembaar contrast op het scherm. Dit theme compenseert dat met:

- sterke luminantieverschillen
- duidelijke componentcontouren
- minder visuele ruis

Daardoor blijven panelen, formulieren en alerts beter afleesbaar bij reflectie en omgevingslicht.

## Dark mode en light mode

`theme-high-contrast.css` heeft:

- light basis in `:root`
- dark override in `[data-theme="dark"]`

Effect:

- Light mode: donkere tekst op lichte ondergrond, geoptimaliseerd voor daglicht.
- Dark mode: lichte tekst op donkere ondergrond, bruikbaar bij minder licht.
- In beide modi blijven randen en hiërarchie sterk zichtbaar.

## Verifieerbare checks (bewijsvoering)

Voer deze checks uit op `index.html`:

1. Zet theme op `Field Contrast`.
2. Test in light mode en dark mode.
3. Simuleer glare-conditie:
   - schermhelderheid omlaag
   - omgeving helder
4. Controleer taken op snelheid en foutkans:
   - primaire knop snel vinden
   - formuliergrenzen direct herkennen
   - alerttype direct onderscheiden

Acceptatie:

- Tekst blijft leesbaar zonder in te zoomen.
- Componentgrenzen blijven zichtbaar in beide modes.
- Primaire actie blijft direct vindbaar.

## Beperkingen

- Extreem direct zonlicht kan elk LCD/OLED-scherm beperken.
- Voor kritische veldtaken blijft hardware (anti-reflectie, helderheid) mede bepalend.

Dit theme zorgt dat de CSS-kant van die vergelijking maximaal op leesbaarheid is ingericht.
