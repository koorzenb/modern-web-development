import {Person} from "./person.js";

/**
 * Get a handle on a form containing inputs and buttons. Consider all the inputs required, find create, start and stop buttons and add dynamic eventlisteners to manage creation of a Person as well as a it's ability to walk.
 */
export class ViewModel {

    /**
     * @constructor
     */
    constructor() {
        this._setup();

        this._clickHandler = this._click.bind(this);
    }

    /**
     * Dispose memory
     */
    dispose() {
        this._clickHandler = null;
        this.requiredFields = null;
        this.buttons = null;

        if(this.person != null) {
            this.person.dispose();
            this.person = null;
        }

        super.dispose();
    }

    /**
     * Initial setup
     */
    _setup() {
        const form = document.querySelector('#controls');
        this.requiredFields = document.querySelectorAll('#controls input');

        for (const field of this.requiredFields) {
            field.addEventListener('focusout', () => {
                this.validate(form);
            });
        }
    }

    /**
     * Handle action of create button 
     */
    create(){
        const firstName = document.getElementById("firstName");
        const lastName = document.getElementById("lastName");
        const age = document.getElementById("age");

        for (const input of this.requiredFields) {
            this.disable(input)
        }

        for (const button of this.buttons) {                
            button.getAttribute('id') === "create" ? this.disable(button) : this.enable(button);
        }
        
        this.person = new Person(firstName.value, lastName.value, age.value);
    }

    /**
    * Handle action of start button 
    * Call Persons walk method with a parameter of true
    */
    start() {
        this.person.walk(true);        
    }

    /**
     * Handle action of stop button 
     * Call Persons walk method with a parameter of false
     */
    stop() {
        this.person.walk(false);        
    }

    /**
     * Handle validation logic
     * If all inputs are filled in, enable create button and addEventlisteners
     */
    validate(form) {
        const valid = [];
        this.buttons = form.querySelectorAll('button');

        for (const input of this.requiredFields) {
            if(input.value != '') {
                valid.push(input);
            }            
        }
    
        for (const button of this.buttons) {
            if (valid.length === this.requiredFields.length) {
                if(button.getAttribute('id') === "create") this.enable(button);
                button.addEventListener('click', this._clickHandler);
            }
            else {
                this.disable(button);
            }
        }
    }

    /**
     * Enable element
     * @param {*} element - HTML element
     */
    enable(element) {
        element.removeAttribute('disabled');
    }
    
    /**
     * Disable element
     * @param {*} element - HTML element
     */
    disable(element) {
        element.setAttribute('disabled', 'disabled');
    }


    /**
     * Handle click event
     * @param {*} e 
     */
    _click(e) {
        if (e.target instanceof HTMLButtonElement) {
            e.preventDefault();
        }

        const attr = e.target.getAttribute("id");
        attr && this[`${attr}`]();
    }
}