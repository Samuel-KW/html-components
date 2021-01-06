class Accordion extends HTMLElement {
    constructor() {

        // Always call super first in constructor
        super();
    }

    connectedCallback() {

        let button = document.createElement('button');

        
    }
}

customElements.define('accordion-parent', Accordion);