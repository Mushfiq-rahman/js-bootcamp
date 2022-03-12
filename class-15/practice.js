const number = [1, 3, 5, 7, 10]

// function summation(){
//     let total = 0
//     for (let num of number){
//       total += num
//     }
//     return total
    
// }
// console.log(summation())

const total = number.map(num => {
    return  num * 2
})
console.log(total)

const retult = number.find(num => num === 5 )
const result = number.filter(num => num % 2 == 0 )

console.log(result)

const add = number.reduce((acc, curr) => 
    acc + curr
)

console.log(add)

const prod = {
    value1: 1,
    value2: 2,
    value3: 3,
}

console.log(Object.keys(prod))

let totalprod = 0

for(let product in prod){
    totalprod +=  prod[product]
    console.log(prod[product])
}

console.log(totalprod)

for(let [key, value] of Object.entries(prod)){
    console.log(key, value)
}

