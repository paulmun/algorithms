Array.prototype.contains = function(data){
	var i = this.length;

	while(i--){
		if(this[i].data === data) {
			return this[i];
		}
	}
	return false;
}


var Node = function(data){
	this.data = data;
	this.edgeList = [];
}


Node.prototype.addEdge = function(end){
	this.edgeList.push(end);
}


var Graph = function(){
	this.nodeList = [];
}


Graph.prototype.addEdge = function(start,end){
	var first = this.nodeList.contains(start),
		second = this.nodeList.contains(end);
	
	if(first){
		var i = this.nodeList.length;
		while(i--){
			if(this.nodeList[i].data === start){
				this.nodeList[i].addEdge(end);
				break;
			}
		}
	}
	
	if(second){
		i = this.nodeListLength;
		while(i--){
			if(this.nodeList[i].data === end){
				this.nodeList[i].addEdge(start);
				break;
			}
		}
	}
	
	if(!first || !second){
		if(!first){
			var node = new Node(start);
			node.addEdge(end);
			this.nodeList(node);
		}

		if(!second){
			var node = new Node(end);
			node.addEdge(start);
			this.nodeList.push(node);
		}
	}
}


Graph.prototype.printNodes = function(){
	for(var i = 0; i < this.nodeList.length; i++){
		console.log(this.nodeList[i].data+';');
		console.log(this.nodeList[i].edgeList);
	}
}


Graph.prototype.depthFirst = function(start, end){
	var movement = [],
		paths = 0;

	function search(start){
		if(start == null)return false;

		var i = start.edgeList.length;
		
		movement.push(start);
		while(i--){
			if(start.edgeList[i].data === end){
				paths++;
				movement.push(start.edgeList[i].data);
			}
			else{
				search(start.edgeList[i]);
			}
		}
	}
}

var graph = new Graph();

graph.nodeList.push(
	new Node(1), 
	new Node(2), 
	new Node(3), 
	new Node(4), 
	new Node(5), 
	new Node(6), 
	new Node(7), 
	new Node(8), 
	new Node(9), 
	new Node(10), 
	new Node(11), 
	new Node(12), 
	new Node(13), 
	new Node(14), 
	new Node(15)
);

graph.printNodes();

graph.addEdge(1,2);
graph.addEdge(1,3);
graph.addEdge(2,1);
graph.addEdge(2,3);
graph.addEdge(3,4);
graph.addEdge(4,5);
graph.addEdge(4,1);
graph.addEdge(6,3);
graph.addEdge(6,7);
graph.addEdge(8,9);
graph.addEdge(9,5);
graph.addEdge(10,9);
graph.addEdge(10,11);
graph.addEdge(11,8);
graph.addEdge(11,12);
graph.addEdge(13,1);
graph.addEdge(12,13);
graph.addEdge(14,6);
graph.addEdge(15,2);
graph.addEdge(14,15);
graph.addEdge(13,14);

graph.printNodes();