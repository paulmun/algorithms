function isUnique(s){
	var check = [];
	for(var i = 0; i < s.length; i++){
		if(check.indexOf(s[i]) == -1){
			check.push(s[i]);
		}
		else{
			console.log('false');
			return false;
		}
	}
	console.log('true');
	return true;
}

isUnique('blah blah blah');
isUnique('asdfghjkl');