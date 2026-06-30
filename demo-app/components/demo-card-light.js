/**
 * demo-card-light — Light DOM variant
 *
 * Geen Shadow DOM, geen slots. Bootstrap classes werken direct.
 * Content via data-* attributen (slot-vervanging in Light DOM).
 *
 * Attributes:
 *   [data-header]  → kaart-header
 *   [data-body]    → kaart-body
 *
 * Usage:
 *   <demo-card-light>
 *     <span data-header>Titel</span>
 *     <div data-body><p>Inhoud</p></div>
 *   </demo-card-light>
 */
class DemoCardLight extends HTMLElement {
	connectedCallback() {
		const header = this.querySelector('[data-header]');
		const body = this.querySelector('[data-body]');

		const headerHTML = header
			? `<div class="card-header fw-semibold">${header.innerHTML}</div>`
			: '';
		const bodyHTML = body
			? `<div class="card-body">${body.innerHTML}</div>`
			: '';

		this.innerHTML = `
      <div class="card border-primary">
        ${headerHTML}
        ${bodyHTML}
        <div class="card-footer text-muted small">
          Light DOM — Bootstrap classes werken direct
        </div>
      </div>
    `;
	}
}

customElements.define('demo-card-light', DemoCardLight);

export { };

