# Web Components — Terminologie

Correcte benamingen zodat je consistent communiceert.

---

## De vier pijlers van Web Components

| Term                | Uitleg                                                                                                      |
| ------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Custom Elements** | De API waarmee je eigen HTML-tags registreert (`customElements.define`)                                     |
| **Shadow DOM**      | Afgeschermde DOM-boom met eigen CSS-scope                                                                   |
| **HTML Templates**  | `<template>` en `<slot>` — herbruikbare HTML die niet direct rendert                                        |
| **ES Modules**      | Standaard JS-module systeem (`import` / `export`) — geen onderdeel van de spec maar onlosmakelijk verbonden |

---

## DOM-varianten

| DOM                   | Toelichting                                                               |
| --------------------- | ------------------------------------------------------------------------- |
| **Shadow DOM**        | Geïsoleerde DOM-boom, eigen CSS                                           |
| **Light DOM**         | Geen Shadow DOM — component rendert direct in de pagina-DOM               |
| **Open Shadow DOM**   | `attachShadow({ mode: 'open' })` — JS van buiten kan erin                 |
| **Closed Shadow DOM** | `attachShadow({ mode: 'closed' })` — volledig afgesloten, zelden gebruikt |

---

## Slots (alleen in Shadow DOM)

| Term                | Uitleg                                                           |
| ------------------- | ---------------------------------------------------------------- |
| **slot**            | Placeholder in een Shadow DOM component voor externe content     |
| **named slot**      | `<slot name="header">` — specifieke injectie-plek                |
| **default slot**    | `<slot>` zonder naam — vangt alles op zonder `slot=""`-attribuut |
| **slotted content** | De HTML die je van buiten in een slot stopt                      |
| **slot projection** | Het mechanisme — content wordt _geprojecteerd_, niet gekopieerd  |

---

## Component lifecycle callbacks

| Methode                      | Wanneer                                                   |
| ---------------------------- | --------------------------------------------------------- |
| `constructor()`              | Element aangemaakt — nog niet in DOM                      |
| `connectedCallback()`        | Element toegevoegd aan de DOM — hier render je            |
| `disconnectedCallback()`     | Element verwijderd uit de DOM — opruimen                  |
| `attributeChangedCallback()` | Attribuut gewijzigd — vereist `static observedAttributes` |
| `adoptedCallback()`          | Element verplaatst naar ander document — zelden gebruikt  |

---

## Light DOM patronen

| Term                  | Uitleg                                                                  |
| --------------------- | ----------------------------------------------------------------------- |
| **attribute**         | `variant="primary"` — configuratie van de component                     |
| **dataset**           | `data-type="success"` — alternatief voor attributen, via `this.dataset` |
| **innerHTML**         | Eenvoudige content meegeven als kinderen                                |
| **`data-*` selector** | `querySelector('[data-header]')` — slot-vervanging in Light DOM         |

---

## Verwante termen

| Term                            | Uitleg                                                        |
| ------------------------------- | ------------------------------------------------------------- |
| **Web Components**              | Verzamelnaam voor de vier pijlers samen                       |
| **Custom Element**              | Jouw eigen HTML-tag, bijv. `<ui-card>`                        |
| **Autonomous custom element**   | Erft van `HTMLElement` — meest gebruikt                       |
| **Customized built-in element** | Erft van bijv. `HTMLButtonElement` — beperkte browser-support |
| **host element**                | Het custom element zelf (`:host` in Shadow DOM CSS)           |
| **shadow root**                 | De root van de Shadow DOM-boom                                |
| **template**                    | `<template>` — HTML die niet rendert totdat je het kloont     |
