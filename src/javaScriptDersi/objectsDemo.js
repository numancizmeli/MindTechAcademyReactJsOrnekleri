const user = {
  name: 'Ali',
  age: 55,
}
console.log(user)
console.log(user.name)

const userTwo = {
  name: 'Ahmet',
  greet() {
    console.log('Hello')
    console.log(this.name)
  },
}

console.log(userTwo.greet())

// js de obje olusturmak icin yukaridaki gibi deger ve functionlari bir araya toplayabiliriz ya da blueprint metodu ile class kullanilabilirken

class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log('Hello')
    console.log(this.name)
  }
}

const usr = new User('Ayşe', 33)

console.log(usr.greet())
