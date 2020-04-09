 import {ContentManager} from "./content-manager.js";

 const content = new ContentManager();
 content.files = ['./documents/1_p.md','./documents/2_p.md', './documents/3_p.md'];;

 const download = content.download();
 download
 .then(async (x) => {
    const frag = await content.process(x);
    content.render(frag);
 })
 .catch(err => console.log(err.message));