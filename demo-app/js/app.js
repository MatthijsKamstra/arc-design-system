/*
 * app.js — centraal JS-ingang punt
 *
 * Importeer hier alle scripts in de juiste volgorde.
 * HTML-pagina's laden alleen dit bestand als <script type="module">.
 *
 * Volgorde is bewust:
 *   1. Externe libraries
 *   2. Web Components (bouwen op de library)
 */

// Web Components
// Bootstrap JS wordt als gewone <script> in de HTML geladen (geen ES module),
// omdat Bootstrap's ESM build @popperjs/core als bare specifier importeert
// en dat zonder import map niet werkt in de browser.
import '../components/demo-card-light.js';
import '../components/demo-card-shadow.js';
import '../components/ui-nav.js';

