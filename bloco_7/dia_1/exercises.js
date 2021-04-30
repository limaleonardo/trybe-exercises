//E01
const testingScope = (escopo) => (escopo ? (console.log (`Não devo ser utilizada fora do meu escopo (if)! ótimo, fui utilizada no escopo !)`)) : (Console.log ('Não devo ser utilizada fora meu escopo (else)')));
  
testingScope(true);

//E02
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

      function bubbleSort(array) {

        for (let index = 0; index < array.length; index += 1) {
          
          for (let index2 = index + 1; index2 <= array.length; index2 += 1) {
            
            if (array[index] >= array[index2]) {
              const temp = array[index];
              array[index] = array[index2];
              array[index2] = temp;
            }
          }          
        }
      }

      bubbleSort(oddsAndEvens);

      console.log(`O array ${oddsAndEvens.toString()}, se encontra ordenado de modo crescente!`);


//Bônus

const sortArray = array => array.sort((a, b) => a >= b ? 1 : -1);

sortArray(oddsAndEvens);

console.log(`O array ${oddsAndEvens.toString()}, se encontra ordenado de modo crescente!`);

