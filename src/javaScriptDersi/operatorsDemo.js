let a = 5
let b = 10
console.log(a + b)

let result = 10 + 5
console.log(result)

console.log('hello' + 'world')

console.log(100 === 100)
console.log(100 == '100')
console.log(100 === '100')

console.log(100 === 5)
console.log(100 >= 5)

if (100 > 5) console.log('100 greater than 5')

for (let i = 0; i < 5; i++) {
  console.log(i)
}

const person = { fname: 'John', lname: 'Doe', age: 25 }

for (let x in person) {
  console.log(person[x])
}
// The for in loop iterates over a person object
// Each iteration returns a key (x)
// The key is used to access the value of the key
// The value of the key is person[x]

const cars = ['BMW', 'Volvo', 'Mini'] //for iterable objects

for (let x of cars) {
  console.log(x)
}
