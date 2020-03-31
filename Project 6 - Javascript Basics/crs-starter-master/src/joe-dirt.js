import{People} from "./people.js";

export class JoeDirt extends People {
    /**
     * @constructor
     */
    constructor() {
        super("Joe", "Dirt", 25);
    }

    /**
     * Free up memory
     */
    dispose() {
        super.dispose();
    }
}