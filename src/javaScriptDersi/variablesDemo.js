let var1 = 'string var demo' //Variables can be created with let keyword
let var2 = 'string with double quote' //strings can be declared with double quote (After save vs code changes it )

console.log(var1)
console.log(var2)
const var3 = 'hello world'
// var3 = 'change me if you dare' //constants cannot be re assigned otherwise exception thrown.

let a //In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

let b = null
console.log(a)
console.log(b)

// let vs var
// https://www.w3schools.com/js/js_let.asp
// let Cannot be Redeclared

// Block Scope
// {
//     let x = 2;
//   }
// x can NOT be used here

//   {
//     var x = 2;
//   }
//   // x CAN be used here

// JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// Numbers:
let length = 16
let weight = 7.5

// Strings:
let color = 'Yellow'
let lastName = 'Johnson'

// Booleans
let x = true
let y = false

// Object:
const person = { firstName: 'John', lastName: 'Doe' }

// Array object:
const cars = ['Saab', 'Volvo', 'BMW']

// Date object:
const date = new Date('2022-03-25')

let sx // Now x is undefined
sx = 5 // Now x is a Number
sx = 'John' // Now x is a String

let xss = BigInt('123456789012345678901234567890')
