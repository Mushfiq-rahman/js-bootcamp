//factory function
function product (name, price, avaiability) {
  return {
      name,
      price,
      'is Avaiable' : avaiability,
      productDesc(){
            return `${this.name} -- $${this.price}`
      }
  }
}

console.log(product( 'T-Shirt', 10 , true))

function sayHi(age, profession){
   return (`Hi ${this} your age is ${age} and you are ${profession}`)
}

console.log(sayHi.call('mushfiq', 25, 'WebDeveloper'))

console.log(sayHi.apply('mushfiq', [25, 'WebDeveloper']))

//pass by value
let a = 10 
function passbyValue (a) {
     a = 20
}
passbyValue(a)
console.log(a)
//pass by ref
let obj = {value: 10}
function passbyValue (obj) {
    obj.value = 20
}
passbyValue(obj)
console.log(obj)