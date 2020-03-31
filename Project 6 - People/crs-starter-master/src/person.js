/**
 * This class is a disposable base class for person and provides common properties for all person instances
 */
export class Person {
    /**
     * @constructor
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {number} age 
     */
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    /**
     * Dispose of memory
     */
    dispose() {
        this.firstName = null;
        this.lastName = null;
        this.age = null;
    }
}