import { TodoBase} from "./todo-base.js";

/**
 * Construct a Todo instance. Manage it's complete state.
 */
export class Todo extends TodoBase{
    /**
     * @constructor
     * @param {string} title 
     * @param {date} date 
     * @param {boolean} complete 
     */
    constructor(title, date, complete=false) {
        super(title, date, complete);
    }

    /**
     * Dispose memory
     */
    dispose() {
        super.dispose();
    }

    /**
     * Handle complete state
     * @param {*} allow 
     */
    complete(value) {
        if(this.isComplete === value) return;
        
        this.isComplete = value;
    }
}