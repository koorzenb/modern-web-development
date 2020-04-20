export async function download (files) {
 
    let data = [];
    for (const file of files) {
       const response = await fetch(file);
       const partialData = await response.text();   
       data.push(partialData);
    }
    
    return data;
  }

 export function process(data) {
   const processData = data.map(item => {
      return `<li>${item}</li>`;
   });

   render(processData);
}

export function render (data) {
    const wrapper = document.querySelector('#content');
    wrapper.innerHTML = `${data.join('\n')}`;
}
