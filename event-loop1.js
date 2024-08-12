const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmidieately"));

fs.readFile("./file.txt", "utf-8", () => {
    console.log("Read file is completed")
});

setTimeout(() => console.log("Timer expired"), 0);

function printA() {
    console.log("Print A Value", a);
}

printA();

console.log("Last line of the file");

// OutPut:
// Print A Value 100
// Last line of the file
// Timer expired
// setImmidieately
// Read file is completed

// OutPut
// a = 100
// Last line of the file
// Process.nextTick
// Promise
// Timer expired
// setImmidieat
// File Reading CB


// output
// last line of the file
// nextTick
// promise
// Timer Expired
// Set Immidieate
// file reading cb
// 2nd next tick
// 2nd setImmidieate
// 2nd timmer

// Output
// Last line of the file
// next tick
// inner next tick
// Promise
// Timer Expired
// SetImmdiate
// FIle Reading CB