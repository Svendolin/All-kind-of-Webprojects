/* This code is a repeat function for elements */

let allElements = document.getElementsByTagName('*');

Array.from(allElements).forEach(element => {
    if(element.getAttribute('repeat')) {
        repeatElement(element);
        // console.log('Found Element', element, );
    }
});


function repeatElement(element) {
    for (let i = 0; i < element.getAttribute('repeat'); i++) {
        const clone = element.outerHTML.replaceAll('{index}', i);
        const node = createElementFromHTML(clone);
        insertBefore(node, element)
    }
    element.remove();
}

function insertBefore(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
}

function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();  
    return div.firstChild;
  }