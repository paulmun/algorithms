function urlify(string){
	var words = [];

	for(var i = 0; i < string.length; i++){
		if(string.charAt(i) == ' '){
			words.push('%20');
		}
		else{
			words.push(string.charAt(i));
		}
	}
	
	words = words.join('');
	console.log(words);
	return words;
}

urlify('bags on bags on bags')