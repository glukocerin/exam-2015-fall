'use strict';

// Write a function that checks, if an array contains a number
// that has 5 as divisor. If it has it should return true otherwise false.

function hasDivisableBy5(array) {
	var bool = false;
	array.forEach(function(number) {
		if(number % 5 === 0) {
			bool = true;
		} 
	});
	return bool;
}



console.log(hasDivisableBy5([1, 8, 3, 6, 2])); // false
console.log(hasDivisableBy5([11, 7, 15, 9])); // true


