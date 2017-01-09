// Where is IIFE??
"use strict";

/*
January 8, 2017
Reverse a Linked List

Questions to ask Interviewer
    Is this a singly-linked or doubly-linked list?
    Am I allowed to use other data structures?
*/

class SLL {

    constructor(val){
        // I don't think Linked List constructors typically accept parameters. This might be better as
        // this.head = null;
        this.head = new Node(val);

        // length is used in your array solution, but can be removed if you don't use this version
        this.length = 1;
    }

    /**
     * 1. Comments that describe a function typically go above a function and not inside.
     *    The Sublime Package DocBlockr makes this process very easy. Just start a line with /**, hit enter and it autocompletes some basic fields
     * 2. What are these variable names... Very undescriptive lol
     */
    add(val){
    //Iterates through SLL and stores a new Node() with the value taken in as a parameter. O(n)
        var c = this.head;

        // If you change the SLL constructor to start without a node, this breaks if the list is empty.
        while(c.next){

            // why do you redeclare the variable "c"?
            var c = c.next;
        }

        c.next = new Node(val);
        this.length++;
    }

    /**
     * 1. Variable names..
     * 2. You want to simplify Big-O notation. O(2n) === O(n). Saying O(2n) may suggest you don't understand the concept
     */
    revIt(){
    //Iterative solution to reversing the SLL. Implements an array to keep track of all Nodes in the list and iterates through the list backwards to move pointers in the opposite direciton. O(2n)
        var l = [];
        var c = this.head;

        // Consider using the conventional formatting for loops, notice the spacing on the sides
     // while (c.next) {...
        while(c.next){
            l.push(c);
            c = c.next;
        }

        l.push(c);

        // Consider using the conventional formatting for loops, notice the spacing on the sides
     // for (var i = this.length - 1; i >= 1; i--) {...
        for(var i = this.length - 1; i >= 1; i--){
            l[i].next = l[i-1];
        }

        this.head = l[this.length-1];
        l[0].next = null;
    }

    revIt2(){
    //More efficient Iterative solution to  reversing the SLL.
        var c = this.head;
        var r = c.next;
        var s = r.next;

        while(r){
            // Similar to loops, consider the standard convention for spacings for if blocks
         // if (c && r) {...
            if(c && r){ // the "r" in this line is redundant because you check if r exists on the line above
                r.next = c;
            }

            c = r;
            r = s;

            if(s){
                s = s.next;
            }
        }

        this.head.next = null;
        this.head = c;
    }

    revRec(node){
    //Recursive solution to reversing the SLL.
        if(node && node.next){
            this.revRec(node.next);
            node.next.next = node;
        } else{
            this.head = node;
        }

        if(node.next && node.next.next == node){
            node.next = null;
        }
    }

    list(){
    //Prints the Nodes in the SLL in order starting from this.head. O(n) Placed in a separate method in order allow flexibility of printing the list from within any other method or independant of any other method.
        var c = this.head;

        while(c){
            // Don't print the node, print the value.
            console.log(c);
            c = c.next;
        }
    }

}

class Node {

    constructor(val){
        this.val = val;
        this.next = null;
    }

}

var sll = new SLL(1);
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
