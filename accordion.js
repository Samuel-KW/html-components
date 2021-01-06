class Accordion extends HTMLElement {
    constructor() {

        // Always call super first in constructor
        super();
    }

    connectedCallback() {

        // Create the accordion button
        const button = document.createElement('button');

        // Apply default styles to the button
        button.style = 'background-color: #eee; color: #000; font-size: 40px; cursor: pointer; padding: 18px; width: 100%; border: none; text-align: left; outline: none; font-size: 15px; transition: 0.4s; box-sizing: border-box;';
        
        // Assign content to button if supplied
        button.textContent = this.getAttribute('value') ?? '';

        // Give class to the accordion button
        button.className = 'accordion';

        // Listen to button click
        button.addEventListener('click', () => {

            // Toggle active class
            button.classList.toggle('active');

            // Toggle max height of the accordion parent
            panel.style.maxHeight = panel.style.maxHeight == '0px' ? panel.scrollHeight + 'px' : '0px';
        });

        // Create panel container
        const panel = document.createElement('div');

        // Apply default styles to the panel
        panel.style = 'color: #000; padding: 0 18px; background-color: #e4e4e4; max-height: 0; overflow: hidden; transition: max-height 0.2s ease-out; box-sizing: border-box;';
        
        // Give class to panel container
        panel.className = 'panel';

        while (this.childNodes.length) { panel.appendChild(this.firstChild); }

        this.appendChild(button);
        this.appendChild(panel);
    }
}

customElements.define('accordion-parent', Accordion);