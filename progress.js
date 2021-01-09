class Progress extends HTMLElement {
    constructor() {

        // Always call super first in constructor
        super();
    }

    connectedCallback() {


        let child = document.createElement('div');

    }

    update() {
        
    }

    get value() {
        return Number(this.getAttribute('value'));
    }

    set value(val) {
        return this.setAttribute('value', val);
    }

    get initial() {
        return Number(this.getAttribute('initial'));
    }

    set initial(val) {
        return this.setAttribute('initial', val);
    }

    get final() {
        return Number(this.getAttribute('final'));
    }

    set final(val) {
        return this.setAttribute('final', val);
    }
}

// Define the custom accordion element
customElements.define('ds-progress', Progress);