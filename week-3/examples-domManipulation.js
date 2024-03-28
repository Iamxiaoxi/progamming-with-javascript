//The DOM is the model of the HTML file 
//saved as a JavaScript object in your browser's memory.
//The browser automatically builds the DOM for every webpage that it downloads. 
//For example, if you type a URL into your browser's address bar, 
//the browser would fetch the webpage that exists on this domai
const h2 = document.createElement('h2')
h2.innerText = "This is an h2 heading"
h2.setAttribute('id', 'sub-heading')
h2.setAttribute('class', 'secondary')
h2;
document.body.appendChild(h2)

//gui
