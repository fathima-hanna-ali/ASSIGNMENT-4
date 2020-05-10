function findLarge(a, b) {
	if(a > b)
		return a;
	else if(a === b)
		return 0;
	else
		return b;
}



var first = Number(prompt('Enter first number')); 
var second = Number(prompt('Enter second number')); 

console.log(findLarge(first, second));

