function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sum(primoNumero, secondoNumero ) {
    
    const mySum = primoNumero + secondoNumero;
    console.log(primoNumero + secondoNumero)
    return mySum;

}

let numeroRandomComputer = numeroRandom(1, 5);
console.log(numeroRandomComputer)

const pariDispari = prompt('scegli pari o dispari');
console.log(pariDispari);
let numeroUtente = parseInt(prompt('inserisci un numero da 1 a 5 '));

console.log(numeroUtente);


if(pariDispari('pari') && sum(numeroUtente, numeroRandomComputer) % 2 == 0){
    alert('pari')
}
else{
    alert('è disparo')
} 
console.log(sum(numeroUtente, numeroRandomComputer) % 2 == 0);
