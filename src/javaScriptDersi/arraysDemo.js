let arr = ['a', 'b', 'c', 'd', 'e']
console.log(arr)
console.log(arr[3])

arr.push('h')
console.log(arr)

console.log(
  arr.findIndex((item) => {
    return item === 'c'
  }),
)
console.log(arr.findIndex((item) => item === 'c'))

arr.map((item) => console.log(item))
arr.map((item, index) => console.log(item, index))
