

let nombres = [23, 15, 42, 9, 31, 18, 42, 5];

let max = nombres[0];
let min = nombres[0];
let indexMax = 0;
let indexMin = 0;

/* -1 means the value has not been found yet. */
let recherche = 31;
let indexRecherche = -1;

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] > max) {
        max = nombres[i];
        indexMax = i;
    }

    if (nombres[i] < min) {
        min = nombres[i];
        indexMin = i;
    }

    if (nombres[i] === recherche && indexRecherche === -1) {
        indexRecherche = i;
    }
}

console.log("Maximum :", max, "(Index :", indexMax + ")");
console.log("Minimum :", min, "(Index :", indexMin + ")");

if (indexRecherche !== -1) {
    console.log("La valeur " + recherche + " est présente dans le tableau.");
} else {
    console.log("La valeur " + recherche + " est absente du tableau.");
}
