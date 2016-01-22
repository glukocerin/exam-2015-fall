'use strict';

// Create a function that counts all the letters in a string,
// and returns an object that has the letters as keys and the counts as values.

function countLetters (string) {
	var result = {};
	var res = string.split('');

	res.forEach(function(letter) {
		if(!(letter in result)) {
			result[letter] = 0;
		}
		result[letter]++;
	});
	return result;
}


console.log(countLetters('appletree')); // {a: 1, p: 2, l: 1, e: 3, t: 1, r: 1}
