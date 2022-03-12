
let myInfoObj = {
    name : 'Mushfiq',
    age: '25.',
    occupation: 'Web Developer.',
    decription: '\"javascript\"'
}

let myInfo = "I am " + myInfoObj.name + " age " + myInfoObj.age + " I am a " + myInfoObj.occupation + " I love " + myInfoObj.decription

console.log(myInfo)

const someObj = {}

someObj._name = 'Mushfiq';

someObj.age = 25;

var prop = 'color';

someObj[prop] = 'red'

// someObj.123 = true  // throws error for invalid key 

console.log(someObj)

let movieArr = [
    {
        id: 1,
        name: 'SpiderMan home Comming',
        category: 'action',
        rating: 9.5
    },
    {
        id: 2,
        name: 'IronMan',
        category: 'action',
        rating: 8.8
    },
    {
        id: 3,
        name: 'IronMan 2',
        category: 'action',
        rating: 9.5
    },
    {
        id: 4,
        name: 'Avengers',
        category: 'action',
        rating: 8.9
    },
]
const index = movieArr[3]
console.log(index.name + " got " + index.rating + " Ratings " + "and its category is " + index.category)
