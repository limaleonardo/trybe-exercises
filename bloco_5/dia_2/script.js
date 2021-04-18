// Tópico 1
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

//Tópico 2
let e09 = document.getElementById('pai');
let tag = document.createElement('div');
e09.appendChild(tag);

let e10 = document.getElementById('elementoOndeVoceEsta');
let tag2 = document.createElement('div');
e10.appendChild(tag2);

let e11 = document.getElementById('primeiroFilhoDoFilho')
let tag3 = document.createElement('div');
e11.appendChild(tag3);

let e12 = document.getElementById('primeiroFilhoDoFilho').firstElementChild;
console.log(e12.parentElement.parentElement.nextElementSibling);

let e13 = document.getElementsByTagName('div');
console.log (e13);
for (let index = 0; index < e13.length; index += 1) {
  if(e13[index].id !== 'pai' || e13[index].id !== 'elementoOndeVoceEsta' || e13[index].id !== 'primeiroFilhoDoFilho') {
    document.body.removeChild(e13[index]);
  }
}
