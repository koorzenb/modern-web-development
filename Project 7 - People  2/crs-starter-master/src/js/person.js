import { People } from "./people.js";

/**
 * Construct a Person instance. Manage it's ability to walk.
 */
export class Person extends People{
    get isWalking() {
         return this._isWalking || false;
    }

    set isWalking(newValue) {
        this._isWalking = newValue;
    }

    get status() {
        return  `${this.firstName} ${this.lastName} ${this.isWalking === true ? "is walking" : "is idle"}.`;
    }

    set status(newValue) {
        this._status = newValue;
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
        this.isWalking = null;
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