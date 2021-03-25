// E01
console.log("E01")
let a = 18, b = 4, c = 32, n = 0;
let soma = a + b;
console.log(soma)
let subtraction = a - b;
console.log(subtraction)
let multiplication = a * b;
console.log(multiplication)
let split = a / b;
console.log(split)
let mod = a % b;
console.log(mod)

//E02
console.log("E02")
if (a > b) {
  console.log(a);  
} else {
  console.log(b);
}

// E03
console.log("E03")
if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else {
  console.log(c);
}

//E04
console.log("E04")
switch (n) {
  case n > 0:
    console.log('positive');
    break;

  case n < 0:
    console.log('negative');
    break;
  
  default:
    console.log('zero');
    break;
}

