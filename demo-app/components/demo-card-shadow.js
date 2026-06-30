/**
 * demo-card-shadow — Shadow DOM variant
 *
 * Eigen ingekapselde CSS. Bootstrap bereikt deze component NIET.
 * Content via named slots en default slot.
 *
 * Slots:
 *   header  → named: slot="header"
 *   default → kaart-body (geen slot-attribuut nodig)
 *
 * Usage:
 *   <demo-card-shadow>
 *     <span slot="header">Titel</span>
 *     <p>Inhoud</p>
 *   </demo-card-shadow>
 */
class DemoCardShadow extends HTMLElement {
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
          border: 2px solid #6f42c1;
          border-radius: 0.5rem;
          overflow: hidden;
          font-family: system-ui, sans-serif;
        }

        .card-header {
          background: #6f42c1;
          color: #fff;
          padding: 0.75rem 1rem;
          font-weight: 600;
        }

        .card-body {
          padding: 1rem;
          background: #fff;
        }

        .card-footer {
          padding: 0.5rem 1rem;
          background: #f3f0fb;
          font-size: 0.8rem;
          color: #6f42c1;
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
          Shadow DOM — eigen CSS, Bootstrap bereikt dit niet
        </div>
      </div>
    `;
	}
}

customElements.define('demo-card-shadow', DemoCardShadow);

export { };

