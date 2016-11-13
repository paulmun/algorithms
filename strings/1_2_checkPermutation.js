function checkPerm(s1, s2){
	var check = [];

	for(var i = 0; i < s1.length; i++){
		check.push(s1.charAt(i));
		console.log(check);
	}

	for(var x = 0; x < s2.length; x++){
		if(check.indexOf(s2.charAt(x)) == -1){
			console.log('false');
			return false;
		}
		else{
			check.splice(check.indexOf(s2.charAt(x)),1)
			console.log(check)
		}
	}

	if(check){
		console.log('true');
		return true;
	}

	return false;
}

checkPerm('dog','cat');
checkPerm('nimbus','minsub');
checkPerm('logger','golergogo');