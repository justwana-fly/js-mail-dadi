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



// Array contenente i numeri dei dadi
const numeriDadi = [1, 2, 3, 4, 5, 6];

// Funzione per generare un numero casuale tra min e max
function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per generare il percorso dell'immagine del dado
function percorsoImmagineDado(numero) {
    return `dadi/${numero}.svg`;
}

// Funzione per lanciare i dadi per l'utente e il computer
function lancioDadi() {
    // Genera i numeri casuali dei dadi per user
    let numeroCasualeDado1User = generaNumeroCasuale(1, 6);
    let numeroCasualeDado2User = generaNumeroCasuale(1, 6);
    
    // Genera i numeri casuali dei dadi per il computer
    let numeroCasualeDado1Computer = generaNumeroCasuale(1, 6);
    let numeroCasualeDado2Computer = generaNumeroCasuale(1, 6);
    

    // percorsi delle immagini corrispondenti ai numeri casuali generati
    let percorsoDado1User = percorsoImmagineDado(numeroCasualeDado1User);
    let percorsoDado2User = percorsoImmagineDado(numeroCasualeDado2User);

    let percorsoDado1Computer = percorsoImmagineDado(numeroCasualeDado1Computer);
    let percorsoDado2Computer = percorsoImmagineDado(numeroCasualeDado2Computer);

    // immagini dei dadi al DOM per l'utente e il computer
    document.getElementById('dado1-user').innerHTML = `<img src="${percorsoDado1User}" alt="Dado User 1">`;
    document.getElementById('dado2-user').innerHTML = `<img src="${percorsoDado2User}" alt="Dado User 2">`;
    document.getElementById('dado1-computer').innerHTML = `<img src="${percorsoDado1Computer}" alt="Dado Computer 1">`;
    document.getElementById('dado2-computer').innerHTML = `<img src="${percorsoDado2Computer}" alt="Dado Computer 2">`;

    // calcola il punteggio per l'utente e il computer
    let punteggioUser = numeroCasualeDado1User + numeroCasualeDado2User;
    let punteggioComputer = numeroCasualeDado1Computer + numeroCasualeDado2Computer;

    // visualizza i punteggi nel console per l'utente e il computer
    console.log("User:", punteggioUser);
    console.log("Computer:", punteggioComputer);

    // calcolo risultato e visualizzalo nell`ID "risultato"
    let risultato;
    if (punteggioUser > punteggioComputer) {
        risultato = "User ha vinto";
    } else if (punteggioUser < punteggioComputer) {
        risultato = "Computer ha vinto";
    } else {
        risultato = "Pareggio";
    }
    document.getElementById('risultato').innerText = risultato;
}

// Collega il click del button "Lancia"
document.getElementById('lanciaDadi').addEventListener('click', lancioDadi);

// Lancio dei dadi all'avvio della pagina
lancioDadi();

