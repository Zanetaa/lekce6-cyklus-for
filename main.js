// Použij výpis do konzole prohlížeče pomocí console.log('text')
// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)

//Moje řešení úkolu z hodiny:

 // První příklad - vypiš vzestupně čísla od 0 do 10
let vzestupnaRada = [];

for (let i = 1; i <= 11; i = i + 1) {
    vzestupnaRada.push(i);
    console.log('vzestupnaRada')
}

console.log('První příklad - vzestupná řada 0 - 10');

//TADY NAPIS CYKLUS



console.log('-------------------');



// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu

let vzestupnaRadaDva = [];

for (let i = 1; i < 11; i = i + 1) {
    vzestupnaRadaDva.push(i);
    console.log('vzestupnaRadaDva')
}

console.log('Druhý příklad - rozdíl mezi <= a <');

//TADY NAPIS CYKLUS

console.log('-------------------');



// Třetí příklad - vypiš sestupně čísla od 10 do 0

let sestupnaRada = [];

for (let i = 10; i >= 0; i = i - 1) {
    sestupnaRada.push(i);
    console.log('sestupnaRada')
}

console.log('Třetí příklad - sestupná řada 10 - 0');


//TADY NAPIS CYKLUS

console.log('-------------------'); 


//Řešení úkolu na while: 


// První příklad - vypiš vzestupně čísla od 0 do 10
console.log('První příklad - vzestupná řada 0 - 10');

//TADY NAPIS CYKLUS

let vzestupna = 0;

while (vzestupna<=10) {
    console.log(vzestupna);
    vzestupna = vzestupna + 1;
}


// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu

console.log('Druhý příklad - rozdíl mezi <= a <');

//TADY NAPIS CYKLUS

let vzestupnaDva = 0;

while (vzestupnaDva<10) {
    console.log(vzestupnaDva);
    vzestupnaDva = vzestupnaDva + 1;
}


// Třetí příklad - vypiš sestupně čísla od 10 do 0
console.log('Třetí příklad - sestupná řada 10 - 0');

//TADY NAPIS CYKLUS

let sestupna = 10;

while (sestupna) {
console.log(sestupna);
sestupna = sestupna -1;
}
