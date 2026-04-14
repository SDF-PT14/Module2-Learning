// Scope: the area in your codes where a variable can be accessed
// Global scope 
// let school="Moringa"

// function showSchool(){
// 	school="ALX"
// 	console.log(school);
// }
// showSchool()
// console.log(school)

// //function scope

// function greet(){
// 	var message ="Hello Student";
// 	message="Welcome"
// 	console.log(message);
// }
// greet();
// console.log(message)
// //block scope

// if (true){
// 	var color = "blue";
// 	console.log(color)
// }
// console.log(color)

// nested scope
// let school = "Code Academy";// Global variable 
// function outerFunction(){
// 	let teacher="Nancy";
// 	function innerFunction(){
// 		let student = "Alice";
// 		console.log(school);
// 		console.log(teacher);
// 		console.log(student)
// 	}
// 	innerFunction()
// 	if (true){
// 			let message="Welcome to Class"
// 			let student="John"
// 			console.log(student)
// 		}
	
// 	// console.log(student);
// }
// outerFunction()

let appName="Student Portal";// global scope
function login(){
	let user="Nancy";// function scope
	if (true){
		let message ="Welcome";// block scope
		console.log(appName);//works
		console.log(user)//works
		console.log(message)//works 
	}
	console.log(user)// works
	// console.log(message)//fails
}
login()
console.log(appName)// works
// console.log(user);// fails





