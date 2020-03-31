import{Person} from "./person.js";

export class People extends Person {
    get isWalking() {
         return this._isWalking;
    }

    set isWalking(newValue) {
        this._isWalking = newValue;
    }

    get status() {
        return this.isWalking === true ? console.log(`${this.firstName} ${this.lastName} is walking.`) :  console.log(`${this.firstName} ${this.lastName} is idle.`);
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
        this._status = this.status;
    }

    /**
     * Free up memory
     */
    dispose() {
        this.isWalking = null;
        this._status = null;
        super.dispose();
    }

    /**
     * Start walking (set isWalking flag to true)
     */
    startWalking() {
        this.isWalking = true;
        this._status = this.status;
    }

    /**
     * Stop walking (set isWalking flag to false)
     */
    stopWalking() {
        this.isWalking = false;
        this._status = this.status;
    }
}