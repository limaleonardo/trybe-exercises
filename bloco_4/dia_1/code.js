
// parte II
const name = 'Leonardo Lima';
const birthCity = 'Guaratinguetá';
let birthYear = 1992;
birthYear = 2020;
console.log(name, birthCity, birthYear)

// parte III

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof(patientId));
console.log(typeof(isEnrolled));
console.log(typeof(patientInfo));
console.log(typeof(patientInfo.firstName));
console.log(typeof(patientInfo.lastName));
console.log(typeof(patientEmail));

//#####################################

let base = 5;
let heigth = 8;
let area = base * heigth;
let perimeter = (base * 2) + (heigth * 2);
console.log('The area is ' + area + '!');
console.log('The perimeter is ' + perimeter + '!');

// parte IV

let nota = 8;
if(nota >= 80) {
  console.log('Parabéns, você foi aprovada(o)!');
} else if(nota >= 60) {
  console.log('Você está na nossa lista de espera');
} else {
  console.log('Você foi reprovada(o)');
}

// parte V

let estado = 'lista';
switch (estado) {
  case 'aprovada':
    console.log('Parabéns, você foi aprovada(o)!');
    break;
  case 'lista':
    console.log('Você está na nossa lista de espera');
    break;
  case 'reprovada':
    console.log('Você foi reprovada(o)');
    break;
  default:
    console.log('Não se aplica')
    break;
}