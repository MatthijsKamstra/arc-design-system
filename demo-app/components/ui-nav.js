/**
 * ui-nav — Light DOM, Bootstrap
 *
 * Navigatiebalk als web component. Markeert automatisch de actieve pagina.
 *
 * Attribute:
 *   current → bestandsnaam van de huidige pagina (bijv. "index.html")
 *
 * Usage:
 *   <ui-nav current="users.html"></ui-nav>
 */
class UiNav extends HTMLElement {
  connectedCallback() {
    const current = this.getAttribute('current') || 'index.html';

    const links = [
      { href: 'index.html', label: 'Dashboard' },
      { href: 'users.html', label: 'Gebruikers' },
      { href: 'settings.html', label: 'Instellingen' },
      { href: 'components.html', label: 'Componenten' },
      { href: 'about.html', label: 'Over' },
    ];

    const items = links
      .map(({ href, label }) => {
        const isActive = href === current;
        return `
          <li class="nav-item">
            <a class="nav-link${isActive ? ' active fw-semibold' : ''}"
               ${isActive ? 'aria-current="page"' : ''}
               href="${href}">
              ${label}
            </a>
          </li>
        `;
      })
      .join('');

    this.innerHTML = `
      <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">WebComponents App</a>

          <button class="navbar-toggler" type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Menu openen">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="mainNav">
            <ul class="navbar-nav ms-auto">
              ${items}
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('ui-nav', UiNav);

export { };

