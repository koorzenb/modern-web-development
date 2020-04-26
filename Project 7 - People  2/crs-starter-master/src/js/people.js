/**
 * This class serves as a model for People
 */
export class People {
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
    
    dispose() {
        this.firstName = null;
        this.lastName = null;
        this.age = null;
    }
}