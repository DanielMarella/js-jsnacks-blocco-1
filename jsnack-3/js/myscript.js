
/*

Snack 3:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,  se è dispari inseriscilo nell’array.

**/

const oddNumber = [];

for( let i = 0 ; i < 6; i++){
    let userNumber= parseInt(prompt('Inserisci un numero qualsiasi'));
    if(userNumber % 2 === 1){
        oddNumber.push(userNumber);
    }
    
}
console.log(oddNumber);