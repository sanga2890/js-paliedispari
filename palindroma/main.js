// È palindroma?

// creare una funzione per verificare se una parola è palindroma e stampare di conseguenza un messaggio appropriato;
// chiedo all' utente di inserire una parola;
var parola = prompt('Inserisci una parola:')
console.log('La parola inserita è: ' + parola);

// estrapolo ogni singola lettera e la inserisco in un array;
var lettera = parola.split('')
// inverto l'ordine degli elementi che compongo l'array, ovvero le singole lettere;
var reverse = lettera.reverse()
// ricompogo la parola invertita sotto forma di stringa;
var reverse_ricomposta = reverse.join('')

// verfico che la parola inserita dall'utente sia palidroma, ovvero uguale alla stessa parola invertita;
if (parola == reverse_ricomposta ) {
    // se è vero stampo la frase che mi conferma che la parola è palidroma;
    console.log('La parola è palindroma');

} else {
    // altrimenti stampo la frase che dice che la parola inserita non è palindroma, e quindi che la parola è diversa dalla sua versione scritta a lettere invertite;
    console.log('La parola non è palindroma');
}
