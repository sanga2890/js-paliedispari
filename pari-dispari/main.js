// Pari o Dispari?

// gioco pari o dispari contro il pc: chiedere all'utente un numero tra 1 e 5 e generare un numero random tra 1 e 5. Chiedere all'utente se sceglie pari o dispari, quindi fare la somma dei due numeri (giocata utente + giocata pc), quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno;

// chiedere all'utente di inserire un numero da 1 a 5;
var numero_utente = parseInt(prompt('Inserisci un numero tra 1 e 5:'))
console.log('Numero utente: ' + numero_utente);

// giocata del computer, ovvero genero un numero random tra 1 e 5;
var numero_pc = Math.floor(Math.random() * 5) + 1;
console.log('Numero PC: ' + numero_pc);

// chiedere all'utente di scegliere tra pari o dispari;
var pariOdispari = prompt('Scegli tra pari o dispari. Scrivi "p" se scegli pari o "d" se scegli dispari:')

// creo la condizione per la stampa di pari o dispari in base alla scelta dell'utente;
// stampo pari se l'utente scrive "p" o stampo dispari se l'utente sceglie "d";
if (pariOdispari == 'p') {
    console.log('Hai scelto: Pari');

} else if (pariOdispari == 'd'){
    console.log('Hai scelto: Dispari');

}

// faccio la somma tra numero_utente e numero_pc;
var totale = numero_pc + numero_utente;

// valuto se il risultato è pari o dispari;
var resto = totale % 2;
if (resto == 0 && pariOdispari== 'p') {
    console.log('il risultato della somma è: ' + totale);
    console.log('Complimenti! Hai vinto!');

} else if (resto != 0 && pariOdispari== 'd') {
    console.log('il risultato della somma è: ' + totale);
    console.log('Complimenti! Hai vinto!');

} else {
    console.log('il risultato della somma è: ' + totale);
    console.log('Mi dispiace, hai perso. Ritenta');
}
