//E01
const createEmploye = (name) => {
  const arrayOfNames = name.split(' ');
  let emailName = '';
  for (let index = 0; index < arrayOfNames.length; index += 1) {
    index === 0 ? emailName = `${arrayOfNames[index]}` : emailName += `_${arrayOfNames[index]}`;
  }
  const email = `${emailName}@trybe.com.br`;
  return {Nome: name, email: email};
}

const newEmployees = (callBack, array) => {
  const employees = {}    
  for (let index = 0; index < array.length; index += 1) {
    employees[`id${index + 1}`] = callBack(array[index]);
  }
  return employees;
};

const newwestEmployees = ['joão arauju', 'gabriel amaral', 'jujuba flamejante', 'maria gabriela'];
console.table(newEmployees(createEmploye, newwestEmployees));

//E02
const compareResult = (bet, result) => {
  return(bet === result);
}

const lotery = (bet, callBack) => {
  const result = Math.ceil(Math.random() * 15);
  console.log(`${bet}, ${result}`);
  callBack(bet, result) ? console.log ('Parabéns você ganhou!') : console.log('Tente de novo');
}

const bets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const bet of bets) {
  lotery(bet, compareResult);
}