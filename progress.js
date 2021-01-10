(() => {
    let elem = document.createElement('style');
    elem.textContent = `ds-progress div {
    background-color: #eee;
    min-width: 100px;
    margin-top: 5px;
    height: 25px;
    width: auto;
}

ds-progress span {
    transition: width 1s ease;
    background-color: #b43bff;
    display: block;
    height: 25px;
    padding: 0;
    margin: 0;
}`;
    document.head.appendChild(elem);

    class Progress extends HTMLElement {
        constructor() {

            // Always call super first in constructor
            super();

            this.parent = document.createElement('div');
            this.child = document.createElement('span');
        }

        connectedCallback() {

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

        attributeChangedCallback() {
            let initial = this.initial,
                final = this.final - initial,
                value = this.value - initial,
                width = (100 / final) * value;

            this.child.style.width = width >= 0 ? width + '%' : 0;
        }
    }

    // Define the custom progress element
    customElements.define('ds-progress', Progress);
})();