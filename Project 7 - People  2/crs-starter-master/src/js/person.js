import { People } from "./people.js";

/**
 * Construct a Person instance. Manage it's ability to walk.
 */
export class Person extends People{
    get status() {
        return  `${this.firstName} ${this.lastName} ${this._isWalking === true ? "is walking" : "is idle"}.`;
    }

    /**
     * @constructor
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {number} age 
     */
    constructor(firstName, lastName, age) {
        super(firstName, lastName, age);
        this._statusWrapper = document.querySelector('#status');
    }

    /**
     * Dispose memory
     */
    dispose() {
        if(this._isWalking != null) {
            this._isWalking = null
        }
        
        this.status = null;
        this._statusWrapper = null;
        super.dispose();
    }

    /**
     * Handle walk functionality
     * @param {*} allow 
     */
    walk(allow) {
        if(this._isWalking === allow) return;

        const newClass = allow === true ? "start" : "stop";
        const oldClass = allow === true ? "stop" : "start";

        this._isWalking = allow;
        this._statusWrapper.innerHTML = this.status;
        this._statusWrapper.classList.replace(oldClass, newClass);
    }
}
