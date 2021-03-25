// E05
function triangleValidator (angle1, angle2, angle3) {
  if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
    return 'Favor informar valores válidos (números positivos apenas)';
  } else {
    return (angle1 + angle2 + angle3 === 180);
  }
}
console.log(triangleValidator(160, -60, 60));


// E06
function chessMoves(piece) {
  pieceLowerCase = piece.toLowerCase();
  switch (pieceLowerCase) {
    case 'rei':
      return(pieceLowerCase + ': Pode mover-se em qualquer direção, porém apenas uma casa por vez');
    case 'rainha':
    case 'dama':
      return(pieceLowerCase + ': Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.');
    case 'bispo':
      return(pieceLowerCase + ': Move-se na diagonal, quantas casas quiser.')
    case 'cavalo':
    case 'cavaleiro':
      return(pieceLowerCase + ': É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.');
    case 'peão':
      return(pieceLowerCase + ': Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.');
    case 'torre':
      return(pieceLowerCase + ': Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.');
    default:
      return(pieceLowerCase + ': Peça invalida');
  }
  
}
console.log(chessMoves('dama'));

// E07
function conversorDeNotas(nota) {
  if (nota < 0 || nota >100) {
    return ('Nota inválida');
  } else if (nota >= 90) {
    return 'A';    
  } else if (nota >= 80) {
    return 'B';    
  } else if (nota >= 70) {
    return 'C';    
  } else if (nota >= 60) {
    return 'D';    
  } else if (nota >= 50) {
    return 'E';    
  } else {
    return 'F';
  }
    
}

console.log(conversorDeNotas(190));

// E08
function isSomeEvenInThere(num1, num2, num3) {
  if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isSomeEvenInThere(3, 5, 7));

// E09
function isSomeOddInThere(num1, num2, num3) {
  if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isSomeOddInThere(3, 5, 7));

// E10
function profitCalculator(buyValue, sellValue) {
  if (buyValue < 0 || sellValue < 0) {
    return 'Valores inválidos';
  } else {
    let profit = sellValue - (buyValue + (buyValue * 0.2));
    return profit;
  }
}

console.log(profitCalculator(100, 200));

// E11
function inssCalculator(salary) {
  if (salary < 0) {
    return 'invalid-input';    
  } else if (salary <= 1556.94) {
    return (salary * 0.08);    
  } else if (salary <= 2594.92) {
    return (salary * 0.9);    
  } else if (salary <= 5189.82) {
    return (salary * 0.11);    
  } else {
    return (570.88);    
  }
}

function irCalculator(salary) {
  if (salary < 0) {
    return 'invalid-input';   
  }
  salaryCorrected = salary - inssCalculator(salary);
    
  if (salaryCorrected <= 1903.98) {
    return (0);    
  } else if (salaryCorrected <= 2826.65) {
    return ((salaryCorrected * 0.075) - 142.80);    
  } else if (salaryCorrected <= 3751.05) {
    return ((salaryCorrected * 0.15) - 354,80);    
  } else {
    return ((salaryCorrected * 0.275) - 869,36);    
  }
}

function liquidSalary(salary) {
  let liquidSalary = salary - inssCalculator(salary) - irCalculator(salary);
  return liquidSalary;
}
console.log(liquidSalary(3000));