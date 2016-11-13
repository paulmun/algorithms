function oneAway(str1, str2){
	var dif1 = 0,
		error = 0,
		word = [];

	for(var i = str2.length -1; i >= 0; i--){
		word.push(str2[i]);
	}
	if(Math.abs(str1.length-str2.length) > 1){
		return false;
	}
	for(var i = 0; i < word.length; i++){
		var letter = word.pop();
		if(str1.charAt(str1.length-i) == letter)continue;
		else if(str1.length-1-i == letter){
			error ++;
			i++;
			if(error > 1) return false;
			continue;
		}
		error ++;
		if(error > 1) return false;
		continue;
	}
	console.log(true)
	return true;
}

oneAway('dog','dg')
oneAway('baseball','bsaeball')
oneAway('chicken','cat')

