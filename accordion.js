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
        button.className = 'accordion';

        button.addEventListener('click', () => {
            button.classList.toggle('active');

            panel.style.maxHeight = panel.style.maxHeight == '0px' ? panel.scrollHeight + 'px' : '0px';
        });

        const panel = document.createElement('div');
        panel.style = 'color: #000; padding: 0 18px; background-color: #e4e4e4; max-height: 0; overflow: hidden; transition: max-height 0.2s ease-out; box-sizing: border-box;';
        panel.className = 'panel';

        while (this.childNodes.length) { panel.appendChild(this.firstChild); }

        this.appendChild(button);
        this.appendChild(panel);
    }
}

customElements.define('accordion-parent', Accordion);