//=>
// let getName= function(){
// 	return "Alice";
// }
// let getName=()=>{return "Nancy"}
// getName();

let introduce=(name,country)=>{
	console.log("My name is "+ name);
	console.log("I come from "+country);
}
introduce("Nancy","Rwanda");

// let getName=()=>console.log("Alice");
let getName=()=>"Nancy";
console.log(getName());