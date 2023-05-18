
/*

Snack 4:
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.

**/


const userNumber = (prompt('Digita un numero a 4 cifre'));
let sumNumber = 0;
const numberArray=[];

for (let i = 0; i < userNumber.length; i++){
    
    if (i < userNumber.length){
        numberArray.push(parseInt(userNumber[i]))
        console.log(numberArray);
        sumNumber += numberArray[i];
        console.log(sumNumber)
    }
}



