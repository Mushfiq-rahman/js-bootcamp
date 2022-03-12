const isAdmin = false; 

const isEverythinOk = isAdmin ? 'yes its admin' : "Something went wrong";

console.log(isEverythinOk)


const grade = 87;

if(grade >= 90){
    console.log("Grade: A");
}else if (grade >= 80){
    console.log("Grade: B");
}else if(grade >= 70){
    console.log("Grade: C");
}else if(grade >= 60){
    console.log("Grade: D");
}else{
    console.log("Grade: F");
}

switch (true) {
	case grade >= 90:
		console.log("Grade: A");
		break;
	case grade >= 80:
		console.log("Grade: B");
		break;
	case grade >= 70:
		console.log("Grade: C");
		break;
	case grade >= 60:
		console.log("Grade:D");
		break;
	default:
		console.log("Grade: F");
}