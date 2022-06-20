/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/

/* 1 - Creare una variabile per contenere il nome dell'utente
   2 - Chiedere all'utente il proprio nome
   3 - Creare una variabile per contenere il cognome dell'utente
   4 - Chiedere all'utente il proprio cognome
   5 - Creare una variabile per contenere il colore preferito dell'utente
   6 - Chiedere all'utente il suo colore preferito
   7 - Recuperare un elemento dal DOM per poi inserire il risultato
*/

const firstName = prompt ("qual'è il tuo nome?");
const lastName = prompt ("Qual'è il tuo cognome?");
const favouriteColor = prompt ("Qual'è il tuo colore preferito?");
const greeting = "21"

const password = document.getElementById('password');
password.innerHTML = `<strong>${firstName}</strong><strong>${lastName}</strong><strong>${favouriteColor}</strong><strong>${greeting}</strong>`;