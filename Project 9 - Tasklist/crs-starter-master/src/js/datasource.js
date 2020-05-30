// readData() and saveData() is defined in store.js. Move those methods Headers. Else you have a seperation of concern issue 
export class DataSource {
    get store() {
        return this._store;
    }

    set store(newValue) {
        this._store = newValue;
        this.data = newValue.readData();
    }

    // remove empty constr
    constructor(){
    }

    /**
     * Dispose memory
     */
    dispose(){
        this.store = null;
    }

    /**
     * Save data
     */
    save() {
        this.store.saveData(this.data);
    }

}