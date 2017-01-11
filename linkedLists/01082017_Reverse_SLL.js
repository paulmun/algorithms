'use strict';

/*
January 8, 2017
Reverse a Linked List
Questions to ask Interviewer
    Is this a singly-linked or doubly-linked list?
    Am I allowed to use other data structures?
*/

(function(){

class SLL {

    constructor(){
        this.head = null;
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
        } else {
            this.head = new Node(val);
        }

        this.length++;
    }

    //Iterative solution to reversing the SLL. Implements an array to keep track of all Nodes in the list and iterates through the list backwards to move pointers in the opposite direciton. O(n)

    revIt(){
        var list = [];
        var run = this.head;

        while (run.next) {
            list.push(run);
            run = run.next;
        }

        list.push(run);

        for (var i = this.length - 1; i >= 1; i--) {
            list[i].next = list[i-1];
        }

        this.head = list[this.length-1];
        list[0].next = null;
    }

    //More efficient Iterative solution to  reversing the SLL.

    revIt2(){
        var cur = this.head;
        var run = cur.next;
        var sprint = run.next;

        while (run) {
            if (cur) {
                run.next = cur;
            }

            cur = run;
            run = sprint;

            if (sprint) {
                sprint = sprint.next;
            }
        }

        this.head.next = null;
        this.head = cur;
    }

    //Recursive solution to reversing the SLL.

    revRec(node){

        if (node && node.next) {
            this.revRec(node.next);
            node.next.next = node;
        } else {
            this.head = node;
        }

        if (node.next && node.next.next == node) {
            node.next = null;
        }

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
// sll.add(6);
// sll.add(7);
// sll.add(8);
// sll.add(9);
// sll.add(10);
// sll.add(11);
// sll.add(12);
// sll.add(13);
// sll.add(14);
// sll.add(15);
sll.list();
sll.revIt();
sll.list();
sll.revIt2();
sll.list();
sll.revRec(sll.head);
sll.list();
})();
