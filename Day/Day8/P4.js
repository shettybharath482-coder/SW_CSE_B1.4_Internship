// Variables in JS
var x = 10;
var x = 20;
x = 30;
console.log(x)

if (true) {
    var message = "Hello";
}
// var in JS is not block-scoped
console.log(message);
console.log(message);

// ****************************************************
// let keyword based variable
let score = 100;
//let score = 100; //SyntaxError: Identifier 'score' has already been declared
score = 160; // re-assignment is valid
console.log(score)

let secret; // Declare outside the block

if (true) {
    secret = "Password@123"; // Assign inside the block
}

console.log(secret); // Password@123