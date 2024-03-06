// DOM manipulation
// 1- document.firstChild
// 2- document.lastChild
// 3- document.childNodes
// 4- document.parentElement
// 5- document.parentNode
// 6- document.previousElementSibling -> Previous sibling which is an element.
// 7- document.nextElementSibling     -> Next sibling which is an element.
// 8- document.firstElementChild      -> First child which is an element.
// 9- document.lastElementChild       -> Last child which is an element.

// Searching the DOM.
// 1- document.getElementsByTagName.
// 2- document.getElementById.
// 3- document.getElementsByClassName.
// 4- document.querySelector.
// 5- document.querySelectorAll.
// 6- document.getElementsByName.

// Table Links
// 1- table.rows               -> Collection of tr elements.
// 2- table.caption            -> Reference to <Caption>.
// 3- table.tHead              -> Reference to <thead>.
// 4- table.tFoot              -> Reference to <tfoot>.
// 5- table.tBodies            -> Collection of <tbody> elements.
// 6- tBody.rows               -> Collection of <tr> inside.
// 7- tr.cells                 -> Collection of <td> and <th>.
// 8- tr.sectionRowIndex       -> Index of <tr> inside enclosing element.
// 9- tr.rowIndex              -> Row number starting from 0.
//10- td.cellIndex             -> Number of cells inside enclosing <tr>.

// Another 3 methods to search the DOM.
// 1- elem.matches()  -> To check if elem matches the given css selector.
// 2- elem.closest()  -> To look for the nearest ancentor that matches the given css selector. The elem itself is also checked.
// 3- elem.contains() -> Returns true if elemB is inside elemA or when elemA == elemB.
// Example: 
// matches -> document.getElementsByTagName('div')[0].matches('.container'); -> true;
// closest -> document.getElementsByTagName('div')[0].closest('body');       -> <body id="bg-color">...</body>;
// contains -> document.getElementsByTagName('div')[0].contains('.box');     -> true;