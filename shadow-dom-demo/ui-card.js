/**
 * ui-card — Shadow DOM, custom CSS
 *
 * Demonstreert named slots + default slot in Shadow DOM.
 * Stijlen zijn volledig ingekapseld — geen globale CSS nodig.
 *
 * Slots:
 *   header  → kaart-header  (named: slot="header")
 *   default → kaart-body    (geen slot-attribuut nodig)
 *   footer  → kaart-footer  (named: slot="footer")
 *
 * Usage:
 *   <ui-card>
 *     <h3 slot="header">Gebruiker</h3>
 *     <p>Profielinformatie gaat hier.</p>
 *     <div slot="footer">
 *       <ui-button variant="primary" size="sm">Bewerk</ui-button>
 *     </div>
 *   </ui-card>
 */
class UiCard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }

        .card {
          background: #fff;
          border: 1px solid #dee2e6;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
        }

        .card-header {
          padding: 0.75rem 1rem;
          background: #f8f9fa;
          border-bottom: 1px solid #dee2e6;
          font-weight: 600;
        }

        /* Verberg header-sectie als geen slot-content aanwezig is */
        .card-header:not(:has(slot[name="header"] slot)) {
          display: none;
        }

        .card-body {
          padding: 1rem;
        }

        .card-footer {
          padding: 0.75rem 1rem;
          background: #f8f9fa;
          border-top: 1px solid #dee2e6;
        }

        /* Verberg footer-sectie als geen slot-content aanwezig is */
        .card-footer:not(:has(slot[name="footer"] slot)) {
          display: none;
        }
      </style>

      <div class="card">
        <div class="card-header">
          <slot name="header"></slot>
        </div>

        <div class="card-body">
          <slot></slot>
        </div>

        <div class="card-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
	}
}

customElements.define('ui-card', UiCard);
