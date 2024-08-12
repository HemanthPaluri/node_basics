const calucate = require("./sample.js")

var name ="Hemanth Paluri";

var a =10;
var b = 20;

// console.log(name);
// console.log(a+b);

// console.log(global);
// console.log(this);
// console.log(globalThis === global);
console.log(this)

const sum = calucate(a, b);
console.log(sum);
