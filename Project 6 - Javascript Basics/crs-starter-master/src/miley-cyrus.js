import{People} from "./people.js";

export class MileyCyrus extends People {
    /**
     * @constructor
     */
    constructor() {
        super("Miley", "Cyrus", 21);
    }

    /**
     * Free up memory
     */
    dispose() {
        super.dispose();
    }
}