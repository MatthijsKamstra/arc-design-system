/**
 * ui-card — Light DOM, Bootstrap
 *
 * Content via data-* attributen (slot-vervanging in Light DOM):
 *   [data-header]  → kaart-header (optioneel)
 *   [data-body]    → kaart-body (verplicht)
 *   [data-footer]  → kaart-footer (optioneel)
 *
 * Attribute:
 *   class → extra Bootstrap utility classes op de kaart zelf
 *
 * Usage:
 *   <ui-card>
 *     <div data-header>Gebruiker</div>
 *     <div data-body>
 *       <p>Profielinformatie</p>
 *     </div>
 *     <div data-footer>
 *       <ui-button variant="primary" size="sm">Bewerk</ui-button>
 *     </div>
 *   </ui-card>
 */
class UiCard extends HTMLElement {
	connectedCallback() {
		const header = this.querySelector('[data-header]');
		const body = this.querySelector('[data-body]');
		const footer = this.querySelector('[data-footer]');

		const headerHTML = header
			? `<div class="card-header">${header.innerHTML}</div>`
			: '';

		const bodyHTML = body
			? `<div class="card-body">${body.innerHTML}</div>`
			: '';

		const footerHTML = footer
			? `<div class="card-footer">${footer.innerHTML}</div>`
			: '';

		this.innerHTML = `
      <div class="card">
        ${headerHTML}
        ${bodyHTML}
        ${footerHTML}
      </div>
    `;
	}
}

customElements.define('ui-card', UiCard);
