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
    for (const item of data) {
       render(item);
    }
 }
 
export function render (item) {
     const wrapper = document.querySelector('#content');
     wrapper.innerHTML = `${wrapper.innerHTML += item} <br /><br />`;
  }