// È palindroma?

// creare una funzione per verificare se una parola è palindroma e stampare di conseguenza un messaggio appropriato;

// creo la funzione parolaPalindroma;
function parolaPalindroma(parola) {

// elimino eventuali spazi se invece di una parola viene inserita una frase;
var nospaces = parola.replace(/ /g, '');

// estrapolo ogni singola lettera della parola/frase senza spazi e la inserisco in un array;
var lettera = nospaces.split('')

// inverto l'ordine degli elementi che compongo l'array, ovvero le singole lettere;
var reverse = lettera.reverse()

// ricompogo la parola invertita sotto forma di stringa;
var reverse_ricomposta = reverse.join('')

// verfico che la parola inserita dall'utente sia palidroma, ovvero uguale alla stessa parola invertita;
if (nospaces == reverse_ricomposta ) {
    return true;
    // se è vero ritorno il risultato true;

} else {
    return false;
    // altrimenti se la parola è diversa dalla sua versione scritta a lettere invertite, non è palindroma e quindi ritorno il risultato false;
}
}
// fine della funzione parolaPalindroma;

// ora utilizzo la funzione creata;

// chiedo all'utente di inserire una parola e la stampo;
var parola_utente = prompt('Inserisci una parola:')
console.log('La parola inserita è: ' + parola_utente);

// creo una variabile per comparare il risultato della funzione;
var palindroma = parolaPalindroma(parola_utente)

// condizione per effettuare la verifica;
if (palindroma == true) {
    // se dalla funzione mi ritorna true allora stampo il seguente messaggio;
    console.log('La parola è palindroma');
} else {
    // altrimenti se dalla fuzione mi ritorna false stampo il seguente messaggio;
    console.log('La parola non è palindroma');
}
