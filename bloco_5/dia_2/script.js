let e01 = document.getElementById('elementoOndeVoceEsta');
console.log(e01);

let e02 = e01.parentElement;
console.log (e02);

let e03 = e01.firstElementChild;
console.log (e03);

let e04 = e02.firstElementChild;
console.log (e04);

let e05 = e01.previousElementSibling;
console.log (e05);

let e06 = e01.parentElement.textContent;
console.log (e06);

let e07 = e01.nextElementSibling;
console.log (e07);

let e08 = e02.lastElementChild.previousElementSibling;
console.log (e08);