//What is a function in JS
// console.log("Welcome to class")
// console.log("Welcome to class")
// console.log("Welcome to class")
// console.log("Welcome to class")
//Syntax

// function functionName(){
// 	block of code
// }
//DEFINING A FUNCTION
// function greet(){
// 	console.log("Hello");
// }
// //CALLING A FUNCTION
// greet();
// greet();
// greet();
// greet();
// greet();
// greet();
// function introduce(){
// 	console.log("Hello");
// 	console.log("My name is Nancy");
// 	console.log("I am learning Javascript")
// }
// introduce();

// adding parameters in a function

// function greet (name){
// 	console.log("Hello " + name);
// }
// greet("Nancy");
// greet("Ziza");
// greet("Philemon");

// function introduce(name,age){
// 	console.log(`My name is ${name}`);
// 	console.log(`I am ${age} years old`);
// }
// introduce("NAncy",27);
// introduce("Rose",23);

// function sum(a,b,c,d,e){
// 	console.log(a+b+c+d+e);
// }
// sum(2,7,34,90,56);
// function showName(){
// 	console.log("NAncy");	
// }
// let student=showName();
// console.log(student);

// function sumOfTwoNumbers(x,y){
// 	let sum;
// 	sum=x+y;
// 	return sum;
	
// }
// console.log(sumOfTwoNumbers(100,89));
// let sum =sumOfTwoNumbers(100,89)//189
// sum+=90;//sum=sum+90
// console.log(sum);

// function welcomeStudent (){
// 	function sayHello(){
// 		console.log ("Hello Student");
// 	};
// 	sayHello();
// 	console.log("We are learning Javascript Functions");
// }
// welcomeStudent();

// nested functions with parameters 

function outer(){
	function greet(name){
		return `Hello my name is ${name}`;
	};
	return greet("John");
}
console.log(outer());
