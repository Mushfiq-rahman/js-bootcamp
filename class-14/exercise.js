//Exercise-1
const numbers = arrayFromRange(1, 10);

console.log(numbers);
function arrayFromRange(min, max) {
   return Array.from({length:max-min+1},(v,k)=>k+min)
//TODO
}

//Exercise-2
const numbers2 = [1, 2, 3, 4]; 

console.log(includes(numbers2, -1));

function includes(array, searchElement) {
    console.log(array.includes(searchElement))
  //TODO
}

//Exercise-3

const numbers3 = [1, 2, 3, 4]; 

const output = except(numbers3, [1, 2]);

console.log(output); 

function except(array, excluded) {
    return array.splice(excluded.length)
  //TODO
} 

//Exercise-4

const numbers4 = [1, 2, 3, 1]; 

const count = countOccurrences(numbers4, 1); 

console.log(`Number of occurrence ${count}`);

function countOccurrences(array, searchElement) {
    return array.reduce((previousVal, currentVal) => {
        return previousVal + currentVal
    }, searchElement);
  //TODO
}

//Exercise-5

const arr = [1, 2, 3, 4]; 

const max = getMax([arr]);

console.log(max); 

function getMax(array) { 
    return arr.reduce((p, v) => { 
        return ( p > v ? p : v );
    });
  //TODO
}