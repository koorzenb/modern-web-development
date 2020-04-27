import {Person} from "./person.js";

/**
 * Get a handle on a form containing inputs and buttons. Validate all the inputs required, find create, start and stop buttons and add dynamic eventlisteners to manage creation of a Person as well as a it's ability to walk.
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
        for (const field of this._requiredFields) {
            field.removeEventListener('focusout', this._requiredFieldsFocusHandler);
        }

        for (const button of this._buttons) {
            button.removeEventListener('click', this._clickHandler);
        }

        this._requiredFields = null;
        this._clickHandler = null;
        this._buttons = null;
        this._form = null;

        if(this._person != null) {
            this._person.dispose();
            this._person = null;
        }

        super.dispose();
    }

    /**
     * Initial setup
     */
    _setup() {
        this._form = document.querySelector('#controls');
        this._buttons = this._form.querySelectorAll('button');
        this._requiredFields = document.querySelectorAll('#controls input');
        this._requiredFieldsFocusHandler = this.validate.bind(this);

        for (const button of this._buttons) {
            this.disable(button);
        }
        
       
        for (const field of this._requiredFields) {
            field.addEventListener('focusout', this._requiredFieldsFocusHandler);
        }
    }

    /**
     * Handle action of create button 
     */
    create(){
        const firstName = document.getElementById("firstName");
        const lastName = document.getElementById("lastName");
        const age = document.getElementById("age");

        for (const input of this._requiredFields) {
            this.disable(input)
        }

        for (const button of this._buttons) {                
            button.getAttribute('id') === "create" ? this.disable(button) : this.enable(button);
        }
        
        this._person = new Person(firstName.value, lastName.value, age.value);
    }

    /**
    * Handle action of start button 
    * Call Persons walk method with a parameter of true
    */
    start() {
        this._person.walk(true);        
    }

    /**
     * Handle action of stop button 
     * Call Persons walk method with a parameter of false
     */
    stop() {
        this._person.walk(false);        
    }

    /**
     * Handle validation logic
     * If all inputs are filled in, enable create button and addEventlisteners
     */
    validate() {
        const valid = [];

        for (const input of this._requiredFields) {
            if(input.value != '') {
                valid.push(input);
            }            
        }
    
        for (const button of this._buttons) {
            if (valid.length === this._requiredFields.length) {
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
