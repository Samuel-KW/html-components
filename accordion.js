(() => {
    let elem = document.createElement('style');
    elem.textContent = `ds-accordion button {
    margin-top: 5px;
    background-color: #eee;
    color: #000;
    font-size: 40px;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
    box-sizing: border-box;
}

ds-accordion div {
    color: #000;
    padding: 0 18px;
    background-color: #e4e4e4;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    box-sizing: border-box;
}`;
    document.head.appendChild(elem);

    class Accordion extends HTMLElement {
        constructor() {

            // Always call super first in constructor
            super();

            // Create the accordion button
            this.button = document.createElement('button');

            // Create panel container
            this.panel = document.createElement('div');
        }

        get value() {
            return this.getAttribute('value');
        }

        set value(val) {
            this.button.textContent = val;
            return this.setAttribute('value', val);
        }

        connectedCallback() {

            // Assign content to button if supplied
            this.button.textContent = this.getAttribute('value') ?? '';

            // Give class to the accordion button
            this.button.className = 'accordion';

            // Listen to button click
            this.button.addEventListener('click', () => {

                // Toggle active class
                this.button.classList.toggle('active');

                // Toggle max height of the accordion parent
                this.panel.style.maxHeight = this.panel.style.maxHeight == '0px' ? this.panel.scrollHeight + 'px' : 0;
            });

            // Apply default styles to the panel
            this.panel.style.maxHeight = 0;

            // Give class to panel container
            this.panel.className = 'panel';

            // Move elements into panel container
            while (this.childNodes.length) { this.panel.appendChild(this.firstChild); }

            // Add button and panel to accordion element
            this.appendChild(this.button);
            this.appendChild(this.panel);
        }
    }

    // Define the custom accordion element
    customElements.define('ds-accordion', Accordion);
})();