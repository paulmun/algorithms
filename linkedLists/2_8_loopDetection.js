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

function loopDetection(node){
	var curr = node,
		list = [];

	while(curr){
		if(list.indexOf(curr) > -1){
			console.log(curr);
			return curr;
		}
		list.push(curr);
		curr = curr.next;
	}

	console.log(false);
	return false;
}

var alpha = new SLList();
alpha.insert('a')
alpha.insert('b')
alpha.insert('c')
alpha.insert('d')
alpha.insert('e')
alpha.insert('f')
alpha.insert('g')

loopDetection(alpha.head);

var find = alpha.findNode('d')
var last = alpha.lastNode()
last.next = find

loopDetection(alpha.head);
