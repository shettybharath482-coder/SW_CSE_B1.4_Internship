// Variables in JS
var x = 10;
var x = 20;
x = 30;
console.log(x);
// console.log(x);

if (true) {
    var message = "Hello";
}
// var in JS is not block-scoped
console.log(message);
// console.log(message);

// ****************************************************
// let keyword based variable
let score = 100;
// let score = 100; // SyntaxError: Identifier 'score' has already been declared
score = 160; // re-assignment is valid
console.log(score);
// console.log(score);

if (true) {
    let secret = "Password@123"; // let in JS is block-scoped
    console.log(secret);
}
// console.log(secret); // ReferenceError: secret is not defined

// ****************************************************
// const: variable which cannot be reassigned after its declaration
if (true) {
    const pi = 3.14159;
    // pi = 27; // TypeError: Assignment to constant variable.
    console.log(pi);
}
// console.log(pi); // ReferenceError: pi is not defined

// ****************************************************
// var: function scoped | Not recommended
// let & const: block-scoped

function test() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;
    }

    console.log(a); // Works
    // console.log(b); // ReferenceError: b is not defined
    // console.log(c); // ReferenceError: c is not defined
}

// console.log(a); // ReferenceError: a is not defined

test();