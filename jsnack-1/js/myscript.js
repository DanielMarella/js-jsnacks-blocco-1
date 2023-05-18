
/*

Snack 1:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

**/

/* Creo un ciclo for che si ripeta per 10 volte
    Creo la variabile userNumber e chiedo all'utente 10 volte un numero
        Creo un ciclo all'interno del for che mi vada a scrivere il numero appena inserito e mi  vada a fare la somma di tutti i numeri che inserisco
            esco dal ciclo
*/

let sumNumber = 0;
for (i = 0; i < 10; i++){
    const userNumber = parseInt(prompt('Scrivi un numero'));
        sumNumber += userNumber;
        console.log(sumNumber);
}
console.log('la somma finale è: ' + sumNumber);


