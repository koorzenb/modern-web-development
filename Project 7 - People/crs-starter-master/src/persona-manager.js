import {Persona} from "./persona.js";

export class PersonaManager extends Persona {
    // BK - remember to dispose
    get firstNameInput() {
        if (this._firstNameInput == null) {
            this._firstNameInput = document.querySelector("#firstName").value;
        }
        return this._firstNameInput;
    }

    set firstNameInput(newValue) {
        this._firstNameInput = newValue;
    }

    // BK - remember to dispose
    get lastNameInput() {
        if (this._lastNameInput == null) {
            this._lastNameInput = document.querySelector("#lastName").value;
        }
        return this._lastNameInput;
    }

    set ageInput(newValue) {
        this._ageInput = newValue;
    }

    // BK - remember to dispose
    get ageInput() {
        if (this._ageInput == null) {
            this._ageInput = document.querySelector("#age").value;
        }
        return this._ageInput;
    }

    set lastNameInput(newValue) {
        this._ageInput = newValue;
    }

    get createBtn() {
        if (this._createBtn == null) {
            this._createBtn = document.querySelector("#create");
        }
        return this._createBtn;
    }

    set createBtn(newValue) {
        this._createBtn = newValue;
    }

    get startBtn() {
        if (this._startBtn == null) {
            this._startBtn = document.querySelector("#start");
        }
        return this._startBtn;
    }

    set startBtn(newValue) {
        this._startBtn = newValue;
    }

    get stopBtn() {
        if (this._stopBtn == null) {
            this._stopBtn = document.querySelector("#stop");
        }
        return this._stopBtn;
    }

    set stopBtn(newValue) {
        this._stopBtn = newValue;
    }
    
    /**
     * @constructor
     */
    constructor() {
        super();
        this._init();

        this.createHandler = this.create.bind(this);
        this.startHandler = this.start.bind(this);
        this.stopHandler = this.stop.bind(this);
    }

    /**
     * Initial setup
     */
    _init() {
        this.fields = document.querySelectorAll('#controls input');

        for (const field of this.fields) {
            field.addEventListener('focusout', (event) => {
                this.validate();
            });
        }
    }

    /**
     * Free up memory
     */
    dispose() {
        this.createBtn.removeEventListener('click', this.createHandler);
        this.startBtn.removeEventListener('click', this.startHandler);
        this.stopBtn.removeEventListener('click', this.stopHandler);

        this.createHandler = null;
        this.startHandler = null;
        this.stopHandler = null;

        this.createBtn = null;
        this.startBtn = null;
        this.stopBtn = null;

        this.fields = null;

        if(this.persona != null) {
            this.persona.dispose();
            this.persona = null;
        }

        super.dispose();
    }

    /**
     * Create persona
     */
    create(){
        this.persona = new Persona(this.firstNameInput, this.lastNameInput, this.ageInput);
    }

    /**
     * Start walking 
     */
    start() {
        this.persona.startWalking();        
    }

    /**
     * Stop walking
     */
    stop() {
        this.persona.stopWalking();
    }

    /**
     * Validate
     */
    validate() {
        const filled = [];
        const inputs = document.getElementsByTagName('input');
        for (const input of inputs) {
            if(input.value != '') {
                filled.push(input);
                continue;
            }            
        }
    
        if (filled.length === inputs.length) {
            const buttons = document.getElementsByTagName('button');
            for (const button of buttons) {
                button.removeAttribute('disabled');

                const cb = button.getAttribute('id');
                // const handler = `this.${callback}.bind(this)`;
                // console.log(handler);
                
                
                 //button.addEventListener('click', `${this.createHandler}`); //TODO SA: How to do this?
            }


            this.createBtn.addEventListener('click', this.createHandler);
            this.startBtn.addEventListener('click', this.startHandler);
            this.stopBtn.addEventListener('click', this.stopHandler);

        } else {
            const buttons = document.getElementsByTagName('button');
            for (const button of buttons) {
                button.setAttribute("disabled", "");
            }

            this.clearStatus();
        }
    
    }
}