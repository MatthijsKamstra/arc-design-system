/**
 * ui-badge — Light DOM, Bootstrap
 *
 * Attributes (via dataset):
 *   data-type   → Bootstrap color (primary, success, danger, warning, info, secondary) — default: secondary
 *   data-label  → tekst in de badge
 *
 * Usage:
 *   <ui-badge data-type="success" data-label="Actief"></ui-badge>
 */
class UiBadge extends HTMLElement {
	connectedCallback() {
		const type = this.dataset.type || 'secondary';
		const label = this.dataset.label || this.textContent.trim();

		this.innerHTML = `
      <span class="badge bg-${type}">
        ${label}
      </span>
    `;
	}
}

customElements.define('ui-badge', UiBadge);
