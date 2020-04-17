import {download, process, render} from "./download-utilies.js"
 
 download()
.then(data => {
   process(data);
})
.catch(err => console.log(err));