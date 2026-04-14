let numbers=[10,20,30,40,55,15];

// check even numbers and return them 

let odds= numbers.filter(function(num){
	return num %2 !==0;
})
let evens= numbers.filter(function(num){
	return num %2 ==0;
})
console.log(evens)
console.log(odds)