/**
 * ui-badge — Shadow DOM, custom CSS
 *
 * Attributes:
 *   variant → kleurstijl (success, danger, warning, info, secondary) — default: secondary
 *
 * Slots:
 *   default slot → badge-tekst
 *
 * Usage:
 *   <ui-badge variant="success">Actief</ui-badge>
 *   <ui-badge variant="danger">Geblokkeerd</ui-badge>
 */
class UiBadge extends HTMLElement {
	static get observedAttributes() {
		return ['variant'];
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
		const variant = this.getAttribute('variant') || 'secondary';

		this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }

        span {
          display: inline-block;
          padding: 0.25em 0.6em;
          font-size: 0.75rem;
          font-weight: 600;
          line-height: 1;
          border-radius: 0.375rem;
          white-space: nowrap;
        }

        span[data-variant="success"]   { background: #d1e7dd; color: #0a3622; }
        span[data-variant="danger"]    { background: #f8d7da; color: #58151c; }
        span[data-variant="warning"]   { background: #fff3cd; color: #664d03; }
        span[data-variant="info"]      { background: #cff4fc; color: #055160; }
        span[data-variant="secondary"] { background: #e9ecef; color: #41464b; }
        span[data-variant="primary"]   { background: #cfe2ff; color: #084298; }
      </style>

      <span data-variant="${variant}">
        <slot></slot>
      </span>
    `;
	}
}

customElements.define('ui-badge', UiBadge);
