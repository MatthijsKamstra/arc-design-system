/**
 * ui-button — Light DOM, Bootstrap
 *
 * Attributes:
 *   variant  → Bootstrap color (primary, secondary, success, danger, warning, info) — default: primary
 *   size     → Bootstrap size (sm, lg) — optional
 *   disabled → aanwezig = disabled
 *
 * Usage:
 *   <ui-button variant="success" size="sm">Opslaan</ui-button>
 */
class UiButton extends HTMLElement {
	connectedCallback() {
		const variant = this.getAttribute('variant') || 'primary';
		const size = this.getAttribute('size');
		const disabled = this.hasAttribute('disabled');
		const label = this.textContent.trim();

		const sizeClass = size ? ` btn-${size}` : '';
		const disabledAttr = disabled ? ' disabled aria-disabled="true"' : '';

		this.innerHTML = `
      <button class="btn btn-${variant}${sizeClass}"${disabledAttr}>
        ${label}
      </button>
    `;
	}
}

customElements.define('ui-button', UiButton);
