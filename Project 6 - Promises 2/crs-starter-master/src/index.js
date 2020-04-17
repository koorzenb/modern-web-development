import {download, process, render} from "./download-utilies.js"
 
const files = ['./documents/1_p.md','./documents/2_p.md', './documents/3_p.md'];

 download(files)
.then(data => {
   process(data);
})
.catch(err => console.log(err));