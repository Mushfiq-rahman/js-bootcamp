//exercise-1

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(max(20, 25));

//exercise-2
function showNumber(num) {
  for (let i = 0; i < num; i++) {
    console.log(i);
  }
}
showNumber(20);

//exercise-3
function sum(num) {
  let total = 0;
  for (let i = 0; i < num; i++) {
    total += i;
  }
  console.log(total);
}
sum(10);

//exercise-4

function calculateAvg(arr) {
  let marks = 0;
  for (let i = 0; i < arr.length; i++) {
    marks += arr[i];
  }

  const averageNum = marks / arr.length;

  if (averageNum > 90) {
    console.log(`You got average marks of ${averageNum} which is grade A`);
  } else if (averageNum >= 80) {
    console.log(`You got average marks of ${averageNum} which is grade B`);
  } else if (averageNum >= 70) {
    console.log(`You got average marks of ${averageNum} which is grade C`);
  } else if (averageNum > 60) {
    console.log(`You got average marks of ${averageNum} which is grade D`);
  } else {
    console.log(`You got average marks of ${averageNum} which is grade F`);
  }
}

calculateAvg([60, 70, 90, 80, 55]);


//exercise-5

const movie = {
    title : 'a',
    releseYear : 2018,
    rating: 4.5,
    grade: 'b'
}

function showPopertise(movieData){
   for(key in movieData){
    console.log(movieData[key])
        if(typeof movieData[key] === 'string'){
            console.log(movieData[key])
        }
   }
}

showPopertise(movie)

