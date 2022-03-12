const array = [0 , null, undefined , '', 2 , 3]

function countTruthy(array){
    marks = 0
    for(i = 0 ; i < array.length ; i++){
        marks = array[i];
        if(marks){
            console.log(`This is a truthy value: ${marks}`)
        }else{
            console.log(`This is a falsy value: ${marks}`)
        }
    }
}
countTruthy(array)

//exercise -2 
const add = [1, 2, 3, 4]

function sum(add){
    if (Array.isArray(add)){
        const arr = [...add]
        let addition = 0
        for(let i = 0 ; i < arr.length; i++){
            addition += add[i]
        }
        console.log(addition)
    } else{
        console.log('Something went wrong')
    }
}

sum([1, 2, 3, 4])