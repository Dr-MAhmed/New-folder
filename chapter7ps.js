// Chapter 7 Practice set...
// Problem No - 1
// Create a navbar and change the color of its 1st elem to red.
let firstElem = document.querySelector('nav').firstElementChild.firstElementChild.firstElementChild;
firstElem.style.color = 'red';

// Problem No - 2
// Create a table without tBody. Now use 'view page source' button to check whether it has a tbody or not.
/*
<table>
<tr>
<td>Name</td>
<td>ABout</td>
</tr>
</table> 
*/

// Problem No - 3
// Creat an element with 3 children now change the backgroundColor of first and last elem to green.
 let parentElement = document.getElementById('parentElement');
 let children = parentElement.children;
 children[0].style.backgroundColor = 'green';
 children[children.length - 1].style.backgroundColor = 'green';

// Problem No - 4
// Write a JS code to change the backgroundColor of all <li> tags to cyan.
let li = document.querySelectorAll('li');
li.forEach((e)=>{
    e.style.backgroundColor = "cyan"
})

