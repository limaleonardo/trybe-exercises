//E01
document.body.appendChild(document.createElement('h1')).id = 'title';

document.getElementById('title').innerText = 'Exercício 5.2 - JavaScript DOM';

//E02
document.body.appendChild(document.createElement('div')).id = 'main';

document.getElementById('main').className = 'main-content';



//E03
document.getElementById('main').appendChild(document.createElement('div')).id = 'center';

document.getElementById('center').className = 'center-content';

//E04
document.getElementById('center').appendChild(document.createElement('p')).innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam inventore sed fugit consequatur, blanditiis perspiciatis iusto nulla, hic repellendus consectetur debitis esse dolorem at. Pariatur accusamus quidem deleniti aspernatur omnis.'

//E05
document.getElementById('main').appendChild(document.createElement('div')).id = 'left';

document.getElementById('left').className = 'left-content';

//E06
document.getElementById('main').appendChild(document.createElement('div')).id = 'right';

document.getElementById('left').className = 'right-content';

//E07
document.getElementById('left').appendChild(document.createElement('img')).id = 'img';

document.getElementById('img').className = 'small-image';

document.getElementById('img').src = 'https://picsum.photos/200';

//E08


