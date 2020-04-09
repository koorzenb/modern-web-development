export class ContentManager {
    get files() {
        return this._files;
    }

    set files(newValue) {
        this._files = newValue;
    }
    
    /**
     * Standard connected callback
     */
    connectedCallback() {
        this.files = this.files;
    }

    /**
     * Disconnect - dispose all memory
     */
    disconnectedCallback() {
        this.files = null;
    }

    /**
     * Fetch data for partial files
     */
    async download(){
        const partials = [];
        for (const file of this.files) {
            let response = await fetch(file);
            let data = await response.text();
            partials.push(data);
        }
        
        return partials;
    }

    /**
     * Process items
     * @param {Array} - array containing content from partial files
     */
   async process(items){
        const docFragment = new DocumentFragment();
        for (const item of items) {
            const wrapper = document.createElement('p');
            wrapper.innerHTML = item;
            docFragment.appendChild(wrapper);
        }

        return docFragment;
    }

    /*Render content item to body*/
    render(item) {
        document.querySelector('#content').appendChild(item);
    }
}