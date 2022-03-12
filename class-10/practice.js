const arr = ['mushfiq', 26 , 'Web-developer']

const arr2 = [...arr]

console.log(arr2)


function sum (num1){
    return (num2) => {
        return num1 + num2
    }
}
console.log(sum(2)(3))
