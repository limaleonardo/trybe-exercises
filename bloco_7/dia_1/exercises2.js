//E01
let fatorial = number => (number === 0 || number === 1) ? 1 : number * fatorial(number-1);


console.log(fatorial(10));