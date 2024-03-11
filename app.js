/*
let listaEmail = [
"nicoli.perla@example.com",
"rossi.mario@example.com",
"bianchi.luca@example.com",
"verdi.giulia@example.com",
"neri.paolo@example.com",
"gialli.francesca@example.com",
"marroni.andrea@example.com",
"rosa.chiara@example.com",
"arancioni.simone@example.com",
"blu.alessia@example.com",
"verdi.marco@example.com",
"rossi.elisa@example.com",
"bianchi.lorenzo@example.com",
"neri.sara@example.com",
"gialli.matteo@example.com",
"marroni.giovanna@example.com",
"rosa.nicola@example.com",
"arancioni.laura@example.com",
"blu.davide@example.com",
"verdi.valentina@example.com",
"rossi.federico@example.com",
"bianchi.martina@example.com",
"neri.filippo@example.com",
"gialli.elena@example.com",
"marroni.gabriele@example.com",
"rosa.silvia@example.com",
"arancioni.riccardo@example.com",
"blu.martina@example.com",
"verdi.giacomo@example.com",
"rossi.alice@example.com",
"bianchi.niccolo@example.com",
"neri.eleonora@example.com",
"gialli.gabriele@example.com",
"marroni.arianna@example.com",
"rosa.matteo@example.com",
"arancioni.anna@example.com",
"blu.martino@example.com",
"verdi.anna@example.com",
"rossi.matilde@example.com",
"bianchi.ludovico@example.com",
"neri.ilaria@example.com",
"gialli.giorgio@example.com",
"marroni.martina@example.com",
"rosa.andrea@example.com",
"arancioni.stefania@example.com",
"blu.alessandro@example.com",
"verdi.irene@example.com",
"rossi.martina@example.com",
"bianchi.lorenza@example.com",
"neri.luigi@example.com"];


let email = prompt("Inserisci la tua email").toLowerCase();

 let emailTrovata = false;

 for (let i = 0; i < listaEmail.length; i++) {
     if (email === listaEmail[i].toLowerCase()) {
         emailTrovata = true;
         break;
     }
 }

// let emailTrovata = listaEmail.includes(email);

if (emailTrovata) {
    console.log("La tua email c'è.");
} else {
    console.log("La tua email non c'è.");
}
*/


// Genera un numero casuale per user compreso tra 1 e 6
let numeroCasualeUser = Math.floor(Math.random() * 6) + 1;
console.log((" User ") + numeroCasualeUser) 

// Genera un numero casuale per computer compreso tra 1 e 6
let numeroCasualeComputer = Math.floor(Math.random() * 6) + 1;
console.log(("Computer ") + numeroCasualeComputer)

if (numeroCasualeUser > numeroCasualeComputer) {
    console.log("User ha vinto")
    
}
else if (numeroCasualeUser < numeroCasualeComputer) {
    console.log("Computer ha vinto")
    
}
else if (numeroCasualeUser === numeroCasualeComputer) {
    console.log("pareggio")
    
}
