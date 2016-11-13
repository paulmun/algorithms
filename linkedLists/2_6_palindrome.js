function Node(data){
	this.val = data;
	this.next = null;
}

function SLList(){
	this.head = null;
}

SLList.prototype.insert = function(newVal){
	if(!this.head){
		this.head = new Node(newVal);
	}
	else{
		var curr = this.head;
		while(curr.next){
			curr = curr.next;
		}
		curr.next = new Node(newVal);
	}
}

function linkedListPalindrome(Node){
	var curr = Node,
		letters = [];

	while(curr){
		letters.push(curr.val);
		curr = curr.next;
		console.log(letters);
	}

	for(var i = 0; i < Math.ceil(letters.length); i++){
		if(letters[i] != letters[letters.length-1-i]){
			console.log('false');
			return false;
		}
	}
	console.log('true');
	return true;
}

var newList = new SLList();
newList.insert('r')
newList.insert('a')
newList.insert('e')
newList.insert('e')
newList.insert('e')
newList.insert('a')
newList.insert('r')
linkedListPalindrome(newList.head);

