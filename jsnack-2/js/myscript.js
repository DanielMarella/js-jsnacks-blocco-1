
/*

Snack 2:
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

**/

const nameInvited = ['franco', 'ugo', 'ughetto', 'bepi', 'beppe', 'ubaldo', 'gaudi', 'claudio', 'kaio', 'beppino', 'giuseppina', 'zeudi'];

const userName = prompt('inserisci il tuo nome');
let NameFound = false;

for (let i= 0; i < nameInvited.length; i++){
    if(nameInvited[i] === userName){
        NameFound = true;
    }
}

if (NameFound) {
    console.log("la persona può partecipare alla festa");
}
    else {
    console.log("la persona non può partecipare alla festa");
}
