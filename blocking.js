const crypto = require("node:crypto");


console.log("Hello World");

var a = 12345,
    b = 98765;

const key = crypto.pbkdf2Sync("password", "salt", 5000, 50, "sha512");
console.log("password from sync: ", key.toString("hex"));

crypto.pbkdf2("password", "salt", 50, 50, "sha512", (err, key) =>{
    console.log("Key from non sync: ", key.toString("hex"))
});