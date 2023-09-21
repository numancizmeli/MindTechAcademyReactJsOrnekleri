// Function is called, the return value will end up in x
let x = myFunction(4, 3)

function myFunction(a, b) {
  // Function returns the product of a and b
  return a * b
}

// anonyms functions
const myFunction = (a, b) => {
  return a * b
}

const myFunctionWithOneParam = (a) => {
  return a * 10
} // parantezleri vs code ekkliyor return curly kaldırısak return yerine bunu da yazabiliriz.

const myFunctionWithOneParamNoReturn = (a) => a * 10
