import {Todo} from "./todo.js";

/**
 * Get a handle on a footer containing inputs and buttons. Assign relevant click and focus event handlers and validate and control ui behaviour based on required conditions.
 */
export class ViewModel {

    /**
     * @constructor
     */
    constructor() {
        this._clickHandler = this._click.bind(this);
        this._setup();
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

        if(this._todo != null) {
            this._todo.dispose();
            this._todo = null;
        }

        this._todoList = null;

        super.dispose();
    }

    /**
     * Initial setup - Add event listeners
     */
    _setup() {
        const footer = document.querySelector('footer');
        this._form = footer.querySelector('form');
        this._buttons = footer.querySelectorAll('button');
        this._todoList = document.querySelector('#tasks ul');
        this._requiredFields = document.querySelectorAll('#controls input');

        const listClickHandler = this._listClick.bind(this);
        this._todoList.addEventListener('click', listClickHandler);
        
        this._requiredFieldsFocusHandler = this.validate.bind(this);

        for (const button of this._buttons) {
            button.addEventListener('click', this._clickHandler);
        }

        for (const field of this._requiredFields) {
            field.addEventListener('focusout', this._requiredFieldsFocusHandler);
        }
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
        attr && this[`${attr}`](e);
    }

    /**
     * Handle list click event
     * @param {*} e 
     */
    _listClick(e) {
        if(e.target.classList.contains('completed-checkbox')) {
            if(e.target.checked === true) {
                console.log("mark item as complete");
                this._todo.complete(true);
            }
            else {
                console.log("mark item as incomplete");
                this._todo.complete(false);
            }
        }
    }

    /**
     * Handle action of create button 
     */
    create(){
        this.validate();

        if (this._valid.length !== this._requiredFields.length) return;
        
        const title = document.getElementById("title");
        const date = document.getElementById("date");

        this._todo = new Todo(title.value, date.value);
        const fragment = document.createDocumentFragment();
        const item = document.createElement('li');
        const template = document.querySelector('#todo-item-template');
        const clone = template.content.cloneNode(true);

        const titleElement = clone.querySelector('.overview h4');
        const dateElement = clone.querySelector('.overview span');

        titleElement.innerHTML = title.value;
        dateElement.innerHTML = new Date(date.value).toDateString();

        item.appendChild(clone);
        fragment.appendChild(item);
        this._todoList.appendChild(fragment);

        // title.innerHTML = "";
        // date.innerHTML = "";
        this.close();
    }

    /**
     * Toggle form visiblity
     */
    toggleForm() {
        this._form.classList.toggle('hidden');

        for (const button of this._buttons) {                

            if(button.getAttribute('id') === "open") {
                button.classList.toggle('hidden');
            }
        }
    }


    /**
    * Handle action of open button 
    */
    open() {
        this.toggleForm();
    }

    /**
     * Handle action of close button
     */
    close() {
        this.toggleForm();
    }

    /**
     * Handle validation logic
     */
    validate() {
        this._valid = [];

        for (const input of this._requiredFields) {
            if(input.value != '') {
                if(input.classList.contains('error')) input.classList.remove('error');
                this._valid.push(input);

                for (const button of this._buttons) {                
                    if(button.getAttribute('id') === "create") button.removeAttribute('disabled');
                }
            }
            else {
                input.classList.add('error');

                for (const button of this._buttons) {                
                    if(button.getAttribute('id') === "create") button.setAttribute('disabled', 'disabled');
                }
            }          
        }
    }
}