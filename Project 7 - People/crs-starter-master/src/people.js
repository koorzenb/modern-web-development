import{Person} from "./person.js";

export class People extends Person {
    get isWalking() {
         return this._isWalking;
    }

    set isWalking(newValue) {
        this._isWalking = newValue;
    }

    get status() {
        return this.isWalking === true ? `${this.firstName} ${this.lastName} is walking.` :  `${this.firstName} ${this.lastName} is idle.`;
    }

    /**
     * @constructor
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {number} age 
     */
    constructor(firstName, lastName, age) {
        super(firstName, lastName, age);
        this.isWalking = false;
        this.statusWrapper = document.querySelector('#status');

        if(firstName && lastName && age) {
            this.setStatus();
            this.statusWrapper.classList.add('stop');
        }
    }

    /**
     * Free up memory
     */
    dispose() {
        this.isWalking = null;
        this._status = null;
        this.statusWrapper = null;
        super.dispose();
    }

    /**
     * Set status html
     */
    setStatus() {
        this._status = this.status;
        this.statusWrapper.innerHTML = this._status;
    }

    /**
     * Clear status html
     */
    clearStatus() {
        this._status = null;
        this.statusWrapper.innerHTML = "";
    }

    /**
     * Start walking (set isWalking flag to true)
     */
    startWalking() {
        this.isWalking = true;

        this.setStatus();
        this.statusWrapper.classList.remove('stop');
        this.statusWrapper.classList.add('start');
    }

    /**
     * Stop walking (set isWalking flag to false)
     */
    stopWalking() {
        this.isWalking = false;

        this.setStatus();
        this.statusWrapper.classList.remove('start');
        this.statusWrapper.classList.add('stop');
    }
}