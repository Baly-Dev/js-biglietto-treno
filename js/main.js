// Input eta del passeggero
const age = parseInt(prompt('Inserisci la tua età: '))

// Input km che si intende percorrere
const km = parseInt(prompt('Inserisci i km che intendi percorrere: '))

// Definire prezzo per km (0.21)
const priceKm = 0.21

// Definire variabile per risultato
let result;

// Caloclo prezzo con relativi sconti per fascia di età
if (age <= 18){
    result = (km * priceKm) - ((km * priceKm) * 0.2)
}else if (age > 65){
    result = (km * priceKm) - ((km * priceKm) * 0.4)
} else {
    result = km * priceKm
}

// Formattazione dell'output finale
document.getElementById('res').innerHTML = `Il prezzo del tuo biglietto è di €${result.toFixed(2)}`