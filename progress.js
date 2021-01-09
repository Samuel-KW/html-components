class Progress extends HTMLElement {
    constructor() {

        // Always call super first in constructor
        super();
    }

    connectedCallback() {

        let parent = document.createElement('div');
        parent.style = 'background-color: #eee; height: 25px; min-width: 100px; width: auto; border: 1px solid #000;';

        let child = document.createElement('div');
        child.style = 'height: 25px; width: 0px; background-color: #b43bff; margin: 0; padding: 0;';

        child.appendChild(parent);
        this.appendChild(parent);

    }

    static get observedAttributes() {
        return ['value', 'initial', 'final'];
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

    attributeChangedCallback(name, old_value, new_value) {
        console.log(name, new_value);
    }
}

// Define the custom accordion element
customElements.define('ds-progress', Progress);