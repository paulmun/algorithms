'use strict';

/*
Find Odd
Write a function that takes an array a as parameter. The array contains non-negative numbers. Every number in the array appears an even number of times, except for one number that appears an odd number of times. The function should return  the number that appears an odd number of times.
*/

(function(){

class RNA {

	constructor(){
		this.numbers = [];
	}

	// This method populates the array with num number of unique integers. There is one integer that is created that appears an odd number of times.
	populate(num){
		for (num; num > 1; num--) {
			var rand = Math.round(Math.random() * 100);

			this.numbers.push(rand, rand);
		}

		var rand = Math.floor(Math.random() * 100);
		this.numbers.push(rand);
	}


	// This method shuffles the array of numbers.
	shuffle(){
		var i = this.numbers.length;

		for (var j = 0; j < i; j++) {
			var x = Math.floor(Math.random() * i);
			var y = this.numbers[j];

			this.numbers[j] = this.numbers[x];
			this.numbers[x] = y;
		}

		console.log(this.numbers);
	}


	// Tracks all integers in the array of numbers in an object and then checks to see if the number of instances is even or odd. Returns the odd number.
	findOdd(){
		var dict = {};
		var i = this.numbers.length;

		for(var j = 0; j < i; j++){
			if (dict[this.numbers[j]]) {
				dict[this.numbers[j]]++;
			} else {
				dict[this.numbers[j]] = 1;
			}
		}

		for (var num in dict) {
			if (dict[num] % 2 != 0){
				return num;
			} 
		}
	}
}

var arr = new RNA();
console.log(arr.numbers);
arr.populate(6);
console.log(arr.numbers);
arr.shuffle();
console.log(arr.findOdd());

})();