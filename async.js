const fs = require("fs");
const https = require("https");

console.log("Hello World");

var a = 12345,
    b = 98765;

https.get("https://dummyjson.com/products/1", (res)=> {
    console.log("Fetch Dta successfully");
});

setTimeout(() => {
    console.log("setTime out called after 5 sec");
}, 5000)

fs.readFile("./file.txt", "utf8", (err, data) => {
    console.log("file data:", data)
});

fs.readFileSync("./file.txt", "utf8", (err, data) => {
    console.log("file data:", data)
});

function multi(a, b) {
    return a * b;
}

var c = multi(a, b);

console.log("product: ", c)

// Dry Run
// -----------------------------------
// Hello World
// product:  1219253925
// file data: sample data of file
// Fetch Dta successfully
// setTime out called after 5 sec