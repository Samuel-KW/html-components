class Accordion extends HTMLElement {
    constructor() {

        // Always call super first in constructor
        super();
    }

    connectedCallback() {

    }
}

// Define the custom accordion element
customElements.define('ds-progress', Accordion);