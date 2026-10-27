let products = ["Keyboard", "Mouse", "Screen", "Headphones"];
let prices = [150, 80, 1200, 250];
let stocks = [10, 0, 5, 3];


for (let i = 0; i < products.length; i++) {
    console.log(products[i], prices[i], stocks[i]);
}


for (let i = 0; i < products.length; i++) {
    if (stocks[i] === 0) {
        console.log(products[i]);
    }
}


let total = 0;

for (let i = 0; i < products.length; i++) {
    total += prices[i] * stocks[i];
}

console.log("Total stock value:", total, "DH");


let maxIndex = 0;

for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[maxIndex]) {
        maxIndex = i;
    }
}

console.log("Most expensive product:", products[maxIndex]);
console.log("Price:", prices[maxIndex], "DH");



for (let i = 0; i < products.length; i++) {
    if (stocks[i] < 5) {
        console.log(products[i]);
    }
}