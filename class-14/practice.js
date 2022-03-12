const num = [6, 2, 7, 4, 5]

const copiedArr = [...num]

console.log(copiedArr.sort())

for( let number in num){
    console.log(number)
}

const result = num.every((number) => {
    return number >= 1
})

console.log(result)

const mapTest = num.map(number => number * 2).join(' ')

console.log(mapTest)

const products = [
    {
        id: 1,
        name: 'T-shirt'
    },
    {
        id: 3,
        name: 'Shoe'
    },
    {
        id: 2,
        name: 'pant'
    }
]

const sortedResult = products.sort(function(a, b){
    if(a.id > b.id) return 1
    if(a.id < b.id) return -1
    return 0
})


console.log(sortedResult)



var comObj = {
    anotherObj: {
       anotherNewObj: {
          title: 'JavaScript ES6'
       }
    }
 };

 const { anotherObj: { anotherNewObj: { title } } } = comObj;

 console.log(title)

 const argumentsArr6 = (...anyName) => {
    for(var i = 0; i < anyName.length; i++) {
       console.log('Argument passed: ' + anyName[i]);
    }
 }

 argumentsArr6('Bangladesh', 'India', 'Sri Lanka')

 const argumentsMeth6 = (...anyName) => {
    anyName.map(oneArgs => console.log('Argument Passed: ' + oneArgs))
 }

 argumentsMeth6('Bangladesh', 'India', 'Sri Lanka')

