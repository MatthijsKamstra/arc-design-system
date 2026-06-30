<slot> is one of the core features of Web Components, and it’s basically a way to create placeholders for content that comes from outside the component.

Think of it like:

    “This is my component layout. You can plug your own content into these specific spots.”

Simple explanation

A <slot> lets you inject HTML into a Web Component without losing structure or control of the component itself.

1. Basic example
   Component definition

<template id="card-template">
  <div class="card">
    <h2><slot name="title"></slot></h2>
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>

Using the component

<my-card>
  <span slot="title">Hello world</span>

  <p>This goes into the default slot.</p>
</my-card>

2. What happens internally

The browser does this mapping:
Slot Content
slot="title" “Hello world”
default slot <p>This goes into the default slot.</p>

So the component defines structure, but you provide content. 3. Default slot vs named slot
Default slot

<slot></slot>

Anything without a slot="" goes here.

Example:

<my-card>
  <p>This goes to default slot</p>
</my-card>

Named slot

<slot name="header"></slot>

Used like:

<div slot="header">Header content</div>

4. Why slots are powerful

Without slots, components would be:

❌ rigid
❌ hardcoded HTML
❌ not reusable

With slots:

✔ flexible layout
✔ reusable structure
✔ separation of layout vs content
✔ perfect for design systems 5. Real-world analogy

Think of a slot like:

🎁 A gift box (component)

    The box design is fixed

    But you decide what goes inside

Example:

    Card = box

    Slot = spaces inside the box

    You = content provider

6. Your design system use case

In your setup:
ui-card

<ui-card>
  <h3 slot="header">User</h3>
  <p>Profile content here</p>
</ui-card>

Inside component:

<div class="card">
  <div class="header">
    <slot name="header"></slot>
  </div>

  <div class="body">
    <slot></slot>
  </div>
</div>

So:

    layout is controlled by component

    content is controlled by you

7. Important detail people miss

Slots are NOT copied HTML.

They are:

    projected into the component

    still live in the original DOM

    reactive to changes

So if content updates outside, the slot updates automatically. 8. Key limitation (good to know)

Slots only work inside:

    Shadow DOM (true Web Components)

Without Shadow DOM:

    you don’t really need slots

    you just use normal children

9. One-line summary

   <slot> is a placeholder inside a Web Component where external content is inserted while keeping the component’s layout intact.

If you want, I can show you:

    how slots + CSS make a full card system

    or
    how to combine slots with Bootstrap cleanly

    or
    how to build a form system using slots (very powerful)

When I say no shadow how die I fill de nodes or params

Good question, this is exactly where people get confused when they move away from frameworks.

If you are using no Shadow DOM (light DOM components), then you don’t “use slots” anymore. Instead you rely on normal DOM children + attributes + inner HTML.

So the model changes slightly:

    Shadow DOM + slots = structured projection
    Light DOM = direct DOM composition

1. How you “pass content” without Shadow DOM
   A. Using inner HTML (most common)
   Component

class UiCard extends HTMLElement {
connectedCallback() {
this.innerHTML = `       <div class="card">
        <div class="header"></div>
        <div class="body"></div>
      </div>
    `;

    this.querySelector('.body').innerHTML = this.innerHTML;

}
}

customElements.define('ui-card', UiCard);

⚠️ This is a bit naive, but shows the idea.
Better version (recommended)

You treat children as content nodes:

class UiCard extends HTMLElement {
connectedCallback() {
const header = this.getAttribute('header');

    this.innerHTML = `
      <div class="card">
        ${header ? `<div class="header">${header}</div>` : ''}
        <div class="body">
          ${this.innerHTML}
        </div>
      </div>
    `;

}
}

customElements.define('ui-card', UiCard);

Usage

<ui-card header="User profile">
  <p>This is the body content</p>
</ui-card>

2. Passing “params” (attributes)

Attributes are your “props system”.
Example button

class UiButton extends HTMLElement {
connectedCallback() {
const variant = this.getAttribute('variant') || 'primary';
const label = this.textContent;

    this.innerHTML = `
      <button class="btn btn-${variant}">
        ${label}
      </button>
    `;

}
}

customElements.define('ui-button', UiButton);

Usage

<ui-button variant="success">Save</ui-button>

So:

    attributes = config / params

    inner text = simple content

    inner HTML = rich content

3. Passing complex content (no Shadow DOM)

Instead of slots, you use child selectors
Example: layout component

class UiPanel extends HTMLElement {
connectedCallback() {
const title = this.querySelector('[data-title]');
const body = this.querySelector('[data-body]');

    this.innerHTML = `
      <div class="panel">
        <div class="title">${title?.innerHTML || ''}</div>
        <div class="body">${body?.innerHTML || ''}</div>
      </div>
    `;

}
}

customElements.define('ui-panel', UiPanel);

Usage

<ui-panel>
  <div data-title>User</div>
  <div data-body>
    <p>Profile info here</p>
  </div>
</ui-panel>

This is basically your “slot replacement” in light DOM. 4. Passing state (advanced but still simple)

You can also pass data via dataset or attributes:

<ui-badge data-type="success" data-label="Active"></ui-badge>

class UiBadge extends HTMLElement {
connectedCallback() {
const type = this.dataset.type;
const label = this.dataset.label;

    this.innerHTML = `
      <span class="badge badge-${type}">
        ${label}
      </span>
    `;

}
}

customElements.define('ui-badge', UiBadge);

5.  Think of it like this
    Shadow DOM approach

        “structured injection points” (slots)

        strict separation

        framework-like behavior

Light DOM approach (your choice)

    children = content

    attributes = configuration

    querySelector = structure extraction

6. Mental model shift

Instead of:

    “Where do I put the slot?”

You think:

    “What do I read from the DOM?”

or

    “What attributes define behavior?”

7. Recommended pattern for your setup

For your design system, keep it simple:
Use:
✔ Attributes

For configuration

<ui-button variant="primary">

✔ Inner HTML

For content

<ui-card>
  <p>content</p>
</ui-card>

✔ data-\* attributes

For structured sections

<div data-header>

8. When NOT to use Shadow DOM (your case)

Avoid Shadow DOM when:

    using Bootstrap

    using global CSS system

    building design system components

    wanting simple debugging

    wanting predictable styling

9. One-line summary

   Without Shadow DOM, you “fill components” using attributes for configuration and normal child DOM (querySelector/innerHTML) for content instead of slots.

If you want next step, I can
show you a clean pattern that makes this feel like real props + slots combined (without Shadow DOM) — basically a lightweight React-like mental model but still pure Web Platform.

Pro and cons

Here’s a clear, practical comparison of Light DOM components vs Shadow DOM components in your exact setup (Bootstrap + Web Components + design system).
🟦 Light DOM (no Shadow DOM)
✔ What it is

Your component renders directly into the page DOM:

    uses normal HTML structure

    inherits global CSS (Bootstrap + your CSS)

    no encapsulation

👍 Pros

1. Bootstrap works perfectly

Everything “just works”:

    btn

    card

    navbar

    utility classes

No extra setup needed. 2. Very simple mental model

You’re just doing:

    innerHTML

    attributes

    querySelector

No Shadow DOM rules to remember. 3. Easy debugging

You can inspect everything directly in DevTools:

    no hidden DOM tree

    no encapsulation barriers

4. Great for design systems

Perfect for:

    UI components

    layout systems

    forms

    pages

5. Low complexity

No:

    slot wiring

    style isolation issues

    Shadow DOM quirks

👎 Cons

1. CSS pollution risk

   global CSS can leak in

   your styles can conflict with page styles

2. Less encapsulation

A component is not “self-contained”

    styles depend on global environment

3. Harder to reuse outside your app

If you embed it somewhere else:

    it may break visually

4. No true “component isolation”

Everything shares the same DOM/CSS space
🟨 Shadow DOM
✔ What it is

A component has its own:

    isolated DOM

    isolated CSS scope

    optional slots for content

👍 Pros

1. True encapsulation

Nothing leaks in or out:

    styles are isolated

    structure is protected

2. Portable components

You can move it anywhere:

<widget-weather></widget-weather>

and it still works. 3. No CSS conflicts

    no Bootstrap collisions

    no global overrides

    no unexpected styling bugs

4. Great for widgets / micro apps

Perfect for:

    charts

    maps

    chat widgets

    AI components

    third-party embeds

5. Cleaner internal structure

Component owns everything:

    HTML

    CSS

    behavior

👎 Cons

1. Bootstrap does NOT apply automatically

This is the big one.

You must:

    re-import CSS inside Shadow DOM
    or

    not use Bootstrap inside it

2. More complexity

You now deal with:

    attachShadow

    slot behavior

    style boundaries

3. Harder debugging

DevTools shows:

    shadow root separation

    hidden structure layers

4. Duplication risk

If you inject Bootstrap inside components:

    repeated CSS loading patterns

    performance overhead

5. Not ideal for UI-heavy apps

Shadow DOM fights:

    design systems

    shared styling

    Bootstrap-based layouts

🧠 When to use what (your setup)

Given your architecture:
✔ Use LIGHT DOM for:

    UI design system (ui-button, ui-card, ui-input)

    layout system (ui-stack, app-nav)

    pages

    anything Bootstrap-based

👉 This is your main system
✔ Use SHADOW DOM for:

    standalone widgets

    isolated features

    embeddable modules

    experimental components

Examples:

    weather widget

    chat widget

    AI assistant box

    charts/visualizations

🟩 Best-of-both rule (simple)

    If it depends on Bootstrap or your design system → Light DOM
    If it must be fully independent → Shadow DOM

⚖️ Quick decision table
Feature Light DOM Shadow DOM
Bootstrap support ✅ perfect ❌ manual
Encapsulation ❌ low ✅ strong
Simplicity ✅ high ❌ medium
Reusability outside app ⚠️ medium ✅ high
Debugging ✅ easy ⚠️ harder
Design systems ✅ ideal ❌ awkward
Widgets ⚠️ okay ✅ ideal
🚀 Bottom line for you

For your current direction:

👉 80–90% Light DOM (design system + app UI)
👉 10–20% Shadow DOM (special widgets only)

That gives you:

    simplicity

    Bootstrap harmony

    modern component structure

    optional isolation where it matters

If you want next step, I can help you
design a real component “spec system” (like naming rules, props conventions, and folder structure) so this starts feeling like a real internal framework without actually becoming one.
