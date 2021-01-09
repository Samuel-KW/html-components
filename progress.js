class Progress extends HTMLElement {
    constructor() {

        // Always call super first in constructor
        super();

        this.parent = document.createElement('div');
        this.child = document.createElement('div');        
    }

    connectedCallback() {

        this.parent.style = 'margin-top: 5px; background-color: #eee; height: 25px; min-width: 100px; width: auto;';
        this.child.style = 'transition: width 1s ease; height: 25px; background-color: #b43bff; margin: 0; padding: 0;';

        this.attributeChangedCallback();

        this.parent.appendChild(this.child);
        this.appendChild(this.parent);
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

    attributeChangedCallback () {
        let initial = this.initial,
            final = this.final - initial,
            value = this.value - initial,
            width = (100 / final) * value;

        this.child.style.width = width >= 0 ? width + '%' : 0;
    }
}

// Define the custom accordion element
customElements.define('ds-progress', Progress);