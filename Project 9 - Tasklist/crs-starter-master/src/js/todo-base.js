/**
 * This class serves as a model for a Todo Item
 */
export class TodoBase {
    /**
     * @constructor
     * @param {string} title 
     * @param {date} date 
     * @param {boolean} completed 
     */
    constructor(title, date, complete) {
        this.title = title;
        this.date = date;
        this.isComplete = complete;
    }
    
    dispose() {
        this.title = null;
        this.date = null;
        this.isComplete = null;
    }
}