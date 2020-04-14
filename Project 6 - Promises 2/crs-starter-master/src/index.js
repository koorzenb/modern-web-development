async function download () {
   const files = ['./documents/1_p.md','./documents/2_p.md', './documents/3_p.md'];

   let data = [];
   for (const file of files) {
      const response = await fetch(file);
      const partialData = await response.text();   
      data.push(partialData);
   }
   
   return data;
 }

 async function process(data) {
   let template = document.createElement('template');
   for (const item of data) {
      content.innerHTML += item;
   }

   await render(template);
}

 async function render (template) {
    const wrapper = document.querySelector('#content');
    wrapper.append(template.content.cloneNode(true));
 }
 
 download()
.then(data => {
   process(data);
})
.catch(err => console.log(err));