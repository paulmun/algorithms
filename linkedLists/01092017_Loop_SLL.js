'use strict';

(function(){

/* 
January 9, 2017
Detecting a loop in a SLL
Finding the start of the Loop in the SLL (if loop exists);

Questions to ask Interviewer
    Is this a singly-linked or doubly-linked list?
    Am I allowed to use other data structures?
    Is a loop guaranteed? 
*/

class SLL {

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //Iterates through SLL and stores a new Node() with the value taken in as a parameter. O(n)

    add(val){
        var run = this.head;

        if (run) {
            while (run.next) {
                run = run.next;
            }
            run.next = new Node(val);
            this.tail = run.next;
        } else {
            this.head = new Node(val);
            this.tail = this.head;
        }

        this.length++;
    }

    //Detects if a loop exists in the SLL. Modified to help detect start of loop. Will return node where loop was initially detected if loop exists.

    detectLoop(){
        var walk = this.head.next;

        if (walk && walk.next) {
            var run = walk.next.next;
        }

        while (run) {

            if (walk === run) {
                return walk;
            }

            if (run.next) {
                walk = walk.next;
                run = run.next.next;
            } else {
                return false;
            }
        }
    }
    
    //Finds the start of the loop in the SLL if it exists.
    
    findLoop(){
        console.log('loop actually starts at: ' + this.tail.next.val);

        var walk = this.head;
        var walk2 = this.detectLoop().next;


        if (!walk) {
            return walk;
        } 

        while (walk !== walk2) {
            console.log('walk :' + walk.val);
            console.log('walk2 :' + walk2.val);

            walk = walk.next;
            walk2 = walk2.next;
        }

        return walk;
    }

    //Creates a loop at a random point in the SLL.
    
    createLoop(){
        var i = Math.round(Math.random() * this.length-2);
        var run = this.head;

        for (i; i > 0; i--) {
            run = run.next;
        }

        this.tail.next = run;
        return run.val;
    }


    //Function to manually set a loop point for testing purposes.
    
    setLoop(num){
        var run = this.head;

        for (num; num > 1; num--) {
            run = run.next;
        }

        this.tail.next = run;
    }

    //Prints the Nodes in the SLL in order starting from this.head. O(n) Placed in a separate method in order allow flexibility of printing the list from within any other method or independant of any other method.

    list(){
        var cur = this.head;

        while (cur) {
            console.log(cur.val);
            cur = cur.next;
        }
    }

}

class Node {

    constructor(val){
        this.val = val;
        this.next = null;
    }

}

var sll = new SLL();
sll.add(1);
sll.add(2);
sll.add(3);
sll.add(4);
sll.add(5);
sll.add(6);
sll.add(7);
sll.add(8);
sll.add(9);
sll.add(10);
sll.add(11);
sll.add(12);
sll.add(13);
sll.add(14);
sll.add(15);
sll.createLoop();
console.log('loop detected at: ' + sll.detectLoop().val);
console.log('loop found at: ' + sll.findLoop().val);
})();