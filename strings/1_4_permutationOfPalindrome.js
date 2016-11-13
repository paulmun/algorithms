function permudrome(s){
	var arr = [],
		count = {};

	for(var i = 0; i < s.length; i++){
		if(s.charAt(i) === ' ')continue;
		if(arr.indexOf(s.charAt(i) == -1)){
			arr.push(s.charAt(i));
		}
		if(count[s.charAt(i)])count[s.charAt(i)]++
		else{
			count[s.charAt(i)] = 1;
		}
	}

	count.singles = 0;

	for(var i = 0; i < arr.length; i++){
		if(count[arr[i]] % 2 == 1)count.singles++
	}
	if(count.singles > 1){
		console.log('false');
		return false;
	}
	else{
		console.log('true');
		return true;
	}
}

permudrome('racerac')
permudrome('apple')
permudrome('bubbubbubu')