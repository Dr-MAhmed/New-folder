// To change the content of any website just for fun: 
// document.designMode = 'on';

// CHAPTER 08 - Events and other DOM property.
console.log()  // -> Shows the elem DOM tree.
console.dir()  // -> Shows the elem as an object with its property.

// 02- tagName & nodeName
document.querySelector('.container').nodeName;
document.querySelector('.container').tagName;

// 03- innerHTML & outerHTML
document.querySelector('.container').innerHTML
document.querySelector('.container').innerHTML = 'This is another box';
document.querySelector('.container').outerHTML;
document.querySelector('.container').outerHTML = '<div>I am outerHtml</div>';

// 04- innerText, outerText & textContent
document.querySelector('div').innerText
document.querySelector('div').outerText
document.querySelector('div').textContent

// 05- Hidden Property
document.querySelector('div').hidden = false
document.querySelector('div').hidden

// 06- Attribute Methods
document.querySelector('div').setAttribute('class', 'container');
document.querySelector('div').getAttribute('class');
document.querySelector('div').removeAttribute('class');
document.querySelector('div').hasAttribute('class');
document.querySelector('div').attributes

// 07- Data Attribute
document.querySelector('div').dataset
document.querySelector('div').dataset.createdby
document.querySelector('div').dataset.boughtby

// 08- Insertion Methods
let div = document.createElement('div');
div.innerHTML = '<p>I have been created by <b>Hunny</b></p>';
div.setAttribute('class', 'red');
// 1- append() -> append at the end of node.
document.querySelector('.container').append(div);
// 2- prepend() -> Insert at the beginning of node
document.querySelector('.container').prepend(div);
// 3- before()  -> Insert before beginning of node
document.querySelector('.container').before(div);
// 4- after()   -> Insert after beginning of node
document.querySelector('.container').after(div);
// 5- replaceWith() -> Replaces node with the given node.
document.querySelector('.container').replaceWith(div);


// 09- Insert adjacent HTML / TEXT / ELEMENT
let divv = document.querySelector('.container');
// 1- beforebegin => Insert HTML immidiately before element
divv.insertAdjacentHTML("beforebegin", "<p>InsertAdjacentHTML</p>");
// 1- afterbegin => Insert HTML into element at the beginning.
divv.insertAdjacentHTML("afterbegin", "<p>InsertAdjacentHTML</p>");
// 1- beforeend => Insert HTML into element at the end.
divv.insertAdjacentHTML("beforeend", "<p>InsertAdjacentHTML</p>");
// 1- afterend => Insert HTML immidiately after element
divv.insertAdjacentHTML("afterend", "<p>InsertAdjacentHTML</p>");


// 10- Node Removal
let divvv = document.querySelector('.container');
divvv.remove()

// 11- className && classList
let divv2 = document.querySelector('.container');
divv2.classList.add('red');
divv2.classList.remove('red');
divv2.classList.toggle('red');
divv2.classList.contains('red');