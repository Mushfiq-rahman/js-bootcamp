const arr = [1, 2, 3, 4, 5]

console.log(arr[1])

arr[1] = 5

console.log(arr)

arr.push(6)
arr.unshift(0)
arr.splice(2, 0, 4)
arr.shift()

for( let num of arr){
    console.log(num)
}

const product = [
    {
        id: 1,
        name: 'T-Shirt',
        price: 10
    },
    {
        id: 3,
        name: 'T-Shirt',
        price: 10
    },
    {
        id: 2,
        name: 'Shoes',
        price: 20
    }
]

const result = product.filter((productInfo) => productInfo.name === 'T-Shirt'
) 

console.log(result)

const str = 'I am Mushfiq'
const res = str.split(' ')
console.log(res)

var Person = function(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
 }

var samir = new Person('Samir Hossain', 22, 'Student');
var kinan = new Person('Kinan Hossain', 29, 'Businessman');
var jamil = new Person('Jamil Hossain', 18, 'Driver');
var jamil = new Person('Zawad Ahmed', 1, 'Child');
var zonayed = new Person('Zonayed Ahmed', 21, 'Developer');

console.log(samir)

var Personwitmethod = function(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.dateOfBirth = function() {
       console.log(this.name + ' is born in ' + (2018 - this.age));
    }
 }

 var samirwithmethod = new Personwitmethod('Samir Hossain', 22, 'Student');
 samirwithmethod.dateOfBirth();

