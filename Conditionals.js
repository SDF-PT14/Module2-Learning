// Conditionals help JavaScript make decisions
// if runs code when a condition is true
// else runs code when the condition is false
// else if checks additional conditions
// Conditionals rely on boolean expressions
//if statement
//if (condition){code to run}
//if (condition){code to run} else{}
//else if

// let myAge= 15;
// if (myAge>=18){
// 	console.log("you are an adult")
// }
// else{
// 	console.log("You are a minor")
// }

// let score =100;

// if (score>=80){
// 	console.log("Grade A");
// }
// else if(score>=60){
// 	console.log("Grade B");
// }
// else if (score>=50){
// 	console.log("Grade C");
// }
// else{
// 	console.log("Fail");
// }
//case1: if statement=> condition must be true 
//case2:if...else statement
//case3:if...else if ...else

// using logical operators in conditionals

let age=16;
let hasID=true;

if (age>=18 && hasID){
	console.log("Access granted");
}
else{
	console.log("You are not allowed")
}

let isAdmin=true;
let isTeacher=false;

if (isAdmin || isTeacher){
	console.log("You may enter");
}


