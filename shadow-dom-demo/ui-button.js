/**
 * ui-button — Shadow DOM, custom CSS
 *
 * Attributes:
 *   variant  → kleurstijl (primary, secondary, success, danger) — default: primary
 *   size     → grootte (sm, lg) — optioneel
 *   disabled → aanwezig = disabled
 *
 * Slots:
 *   default slot → label van de knop
 *
 * Usage:
 *   <ui-button variant="success">Opslaan</ui-button>
 *   <ui-button variant="danger" size="sm">Verwijderen</ui-button>
 */
class UiButton extends HTMLElement {
	static get observedAttributes() {
		return ['variant', 'size', 'disabled'];
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback() {
		this.render();
	}

	render() {
		const variant = this.getAttribute('variant') || 'primary';
		const size = this.getAttribute('size');
		const disabled = this.hasAttribute('disabled');

		this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }

        button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4em;
          border: none;
          border-radius: 0.375rem;
          font-family: inherit;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.15s, opacity 0.15s;
          padding: 0.5rem 1rem;
          font-size: 1rem;
        }

        button[data-size="sm"] { padding: 0.25rem 0.5rem; font-size: 0.875rem; }
        button[data-size="lg"] { padding: 0.75rem 1.5rem; font-size: 1.125rem; }

        button:disabled { opacity: 0.6; cursor: not-allowed; }

        button[data-variant="primary"]   { background: #0d6efd; color: #fff; }
        button[data-variant="primary"]:hover:not(:disabled) { background: #0b5ed7; }

        button[data-variant="secondary"] { background: #6c757d; color: #fff; }
        button[data-variant="secondary"]:hover:not(:disabled) { background: #5c636a; }

        button[data-variant="success"]   { background: #198754; color: #fff; }
        button[data-variant="success"]:hover:not(:disabled) { background: #157347; }

        button[data-variant="danger"]    { background: #dc3545; color: #fff; }
        button[data-variant="danger"]:hover:not(:disabled) { background: #bb2d3b; }
      </style>

      <button
        data-variant="${variant}"
        ${size ? `data-size="${size}"` : ''}
        ${disabled ? 'disabled' : ''}
      >
        <slot></slot>
      </button>
    `;
	}
}

customElements.define('ui-button', UiButton);
