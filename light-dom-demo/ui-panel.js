/**
 * ui-panel — Light DOM, Bootstrap
 *
 * Layout component met titel, body en optionele acties.
 * Demonstreert het querySelector-patroon als Light DOM slot-vervanging.
 *
 * Content via data-* attributen:
 *   [data-title]   → paneel-titel
 *   [data-body]    → hoofd-inhoud
 *   [data-actions] → actieknoppen rechts naast de titel (optioneel)
 *
 * Usage:
 *   <ui-panel>
 *     <span data-title>Overzicht</span>
 *     <div data-actions>
 *       <ui-button variant="outline-primary" size="sm">Toevoegen</ui-button>
 *     </div>
 *     <div data-body>
 *       <p>Hier staat de inhoud van het paneel.</p>
 *     </div>
 *   </ui-panel>
 */
class UiPanel extends HTMLElement {
	connectedCallback() {
		const title = this.querySelector('[data-title]');
		const body = this.querySelector('[data-body]');
		const actions = this.querySelector('[data-actions]');

		const actionsHTML = actions
			? `<div class="ms-auto">${actions.innerHTML}</div>`
			: '';

		const titleHTML = title
			? `<div class="d-flex align-items-center border-bottom pb-2 mb-3">
           <h5 class="mb-0">${title.innerHTML}</h5>
           ${actionsHTML}
         </div>`
			: '';

		const bodyHTML = body ? body.innerHTML : '';

		this.innerHTML = `
      <div class="p-3 bg-white rounded shadow-sm">
        ${titleHTML}
        <div>${bodyHTML}</div>
      </div>
    `;
	}
}

customElements.define('ui-panel', UiPanel);
