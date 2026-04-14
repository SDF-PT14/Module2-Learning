// // Callback and Higher Order Functions 

// function printValue(value){
// 	console.log(value)
// }
// //call the function
// printValue(3);
// printValue(true);
// printValue("Hello")

// function greet (){
// 	console.log("Hello Nancy");
// }

// // function shout(name){
// // 	console.log(name.toUpperCase())
// // }

// function executeSomething(callback){
// 	callback()// greet(Nancy)
// }
// // executeSomething(shout);
// executeSomething(greet);

function operate(a,b,operation){
	return operation(a,b);
}
function add (x,y){
	return x+y;
}

console.log(operate(4,5,add));