
let age = 18

if(age < 10){
  console.log("Stay home under your mom's supervision")
}else if (age >= 10 && age < 15){
  console.log('Try to gain knowldedge outside of home')
}else if(age >= 15 && age < 18){
    console.log('Prepare to cast vote')
}else if(age >= 18){
    console.log('Cast your vote')
}else{
    console.log('You are out of range')
}

switch(true){
    case  age < 10: 
    console.log("Stay home under your mom's supervision")
    break;
    case (age >= 10 && age < 15):
    console.log('Try to gain knowldedge outside of home')
    break;
    case (age >= 15 && age < 18):
    console.log('Prepare to cast vote')
    break; 
    case (age >= 18):
    console.log('Cast your vote')
    break;
    default:
    console.log('You are out of range') 
}