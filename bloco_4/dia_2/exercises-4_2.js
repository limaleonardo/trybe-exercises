let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//E01
function printArray(array) {
  for (index = 0; index < array.length; index += 1) {
  console.log(array[index]);
  }
}

printArray(numbers);

//E02
function somaArray(array) {
  let soma = 0;
  for (index = 0; index < array.length; index += 1) {
  soma += array[index];
  }
  return soma;
}

console.log(somaArray(numbers));

//E03
function averageArray(array) {
  average = somaArray(array) / array.length;
  return average;
}

console.log(averageArray(numbers));

//E04
if (averageArray(numbers) > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

//E05
function smallestValue(array) {
  let smallest = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (smallest < array[index]) {
      smallest = array[index];
    }
  }
  return smallest;
}

console.log(smallestValue(numbers));

//E06
function howManyOdds(array) {
  let odds = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 2 !== 0) {
      odds += 1;
    }    
  }
  return odds;
}

console.log(howManyOdds(numbers));

//E07
function smallestValue(array) {
  let smallest = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (smallest > array[index]) {
      smallest = array[index];
    }
  }
  return smallest;
}

console.log(smallestValue(numbers))

//E08
function createArray (numberOfItems){
  let array = [];
  for (let index = 1; index <= numberOfItems; index += 1) {
    array.push(index);     
  }
  return array;
}

//console.log(createArray(25));

//E09
let newNumbers = createArray(25);

function halfOf(array) {
  let split = [];
  for (let index = 0; index < array.length; index += 1) {
    split.push(array[index]/2);    
  }
  return split;
}

console.log(halfOf(newNumbers));