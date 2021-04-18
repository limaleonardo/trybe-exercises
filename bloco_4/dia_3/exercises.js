// E01
function square (n) {
  if (n < 1) {
    console.log('invald input');
  }
  for (let index = 0; index < n; index += 1) {
    let line = '';
    for (let index2 = 0; index2 < n; index2 += 1) {
      line += ' *';
    }
    console.log(line);
  }  
}
square(4);

// E02
function squareTriangle (n) {
  if (n < 1) {
    console.log('invald input');
  }
  
  let line = '';
  for (let index2 = 0; index2 < n; index2 += 1) {
    line += ' *';
    console.log(line);
  }  
}
squareTriangle(4);

//E03
function opositeTriangle (n) {
  for (let index = 0; index < n; index += 1) {
    let line = '';
    for (let index2 = 1; index2 <= n; index2 += 1) {
      if(index2 >= n - index){
        line += ' *';
      } else {
        line += "  ";
      }
    }
    console.log(line);
  }  
}
opositeTriangle(4);

//E04
function oddPiramide (n) {
  for (let index = 0; index < n; index += 1) {
    let line = '';
    if (index % 2 === 0) {
      line = ' ';
    } else {
      for (let index2 = 0; index2 < n; index2 +=)
    }
    }
    console.log(line);
  }  
}