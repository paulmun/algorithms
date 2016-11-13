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


SLList.prototype.lastNode = function(){
	if(!this.head){
		return false;
	}
	var curr = this.head;
	while(curr.next){
		curr = curr.next;
	}
	return curr;
}


SLList.prototype.findNode = function(val){
	if(!this.head){
		console.log(false);
		return false;
	}
	var curr = this.head;
	while(curr.next){
		if(curr.val == val){
			return curr;
		}
		curr = curr.next;
	}
	return false;
}


function intersection(node, node2){
	var l1 = [],
		curr = node;

	while(curr){
		l1.push(curr);
		curr = curr.next;
	}
	curr = node2;
	while(curr){
		if(l1.indexOf(curr) > -1){
			console.log(curr);
			return curr
		}
		curr = curr.next;
	}

	console.log(false);
	return false;
}

var alpha = new SLList();
var bet = new SLList();

alpha.insert('a');
alpha.insert('b');
alpha.insert('c');
alpha.insert('d');
alpha.insert('e');
alpha.insert('f');
alpha.insert('g');
alpha.insert('h');
alpha.insert('i');
alpha.insert('j');

bet.insert('k');
bet.insert('l');
bet.insert('m');
bet.insert('n');
bet.insert('o');
bet.insert('p');
bet.insert('q');
bet.insert('r');
bet.insert('s');

var last = bet.lastNode();
last.next = alpha.findNode('f');
last = bet.lastNode();
intersection(alpha.head, bet.head);


