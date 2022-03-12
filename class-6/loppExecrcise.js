//Exercise 1
let num = 1;

while (num <= 10){
    console.log('num', num);       
    num += 2
}

//Explanation-1 : initial num is 1 and its incresing by 2 till 10

//Exercise 2

let num2 = 1;
while(num2 <= 20){
    if(num2 % 4 === 0){
        console.log('num2', num2);
    }
    num2++;
}

//Explanation-2 : initial num2 is 1 and its incresing by 1 till 20. when num2 is 4 its divisable by 4 same for 8,12,16, and 20

//Exercise 3
// let num3 = 100;
// while(num3 < 150) {
//     console.log(num3 + 1)
//     num3--;
// }

//Explanation-3 : initial num3 is 100 and its decresing by 1 .
//in this case num3 will be always true and it will be infinity loop


//Exercise 4

let i = 0

for(i = 0; i <= 100; i++){
    console.log(i)
    i += 1
}

let number = 0
while(number <= 100){
    console.log(number)
    number += 2
}


//Exercise 5
let count = 1;
let x = "$";
for (a = 0; a<=5; a++){
    console.log(x.repeat(count));
    count +=1;
}

//Exercise 6
for (var z = 1; z < 101; z++) {
    if (z % 15 == 0) console.log("FizzBuzz");
    else if (z % 3 == 0) console.log("Fizz");
    else if (z % 5 == 0) console.log("Buzz");
    else console.log(z);
}