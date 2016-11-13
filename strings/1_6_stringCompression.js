function stringComp(str){
	var counter = 0,
		counts = [],
		letters = [];
	for(var i = 0; i < str.length; i++){
		counter ++;
		if(!str[i+1] || str[i] != str[i+1]){
			counts.push(counter);
			counter = 0;
		}
	}
	if(counts.length*2 >= str.length){
		return str;
	}
	else{
		for(var i = 0; i < str.length; i++){
			letters.push(str[i]);
		}
		for(var i = 0; i < counts.length; i++){
			letters.splice(i*2+1, counts[i]-1, counts[i]);
		}
		return letters.join("");
	}
}

console.log(stringComp("aaaaabbbbbcccccccd"));
console.log(stringComp("abbccd"));