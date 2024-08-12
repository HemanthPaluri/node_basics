console.log("very important file")

function calucate (a, b) {
    const sum = a + b;
	console.log(sum);
    return a+b
}
// console.log(this === module.exports);

// this.calucate = calucate;
// console.log(this)

module.exports = calucate;