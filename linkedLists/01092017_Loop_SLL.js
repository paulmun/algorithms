/**
 * General Comments:
 * 1. jshint.com is your friend
 * 2. I have the sublime setting "trim_trailing_white_space_on_save" so there may be lines with edit that I actually didn't touch
 */

'use strict'; // This should be inside the IIFE

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
            run.next = new Node(val); // very picky point, you write new Node(val) twice
            this.tail = run.next;
        } else {
            this.head = new Node(val);
            this.tail = this.head;
        }

        this.length++;

        // consider "return this" to allow for chaining
    }

    /**
     * Your return types in this function are not of the same type. You return a boolean and a Node. Functions should only return one type
     * For this function, the name implies a boolean return, but if you wanted to return a Node, "null" is more semantically correct.
     */

    //Detects if a loop exists in the SLL. Modified to help detect start of loop. Will return node where loop was initially detected if loop exists.
    detectLoop(){
        var walk = this.head.next; // what happens if the list is empty?

        if (walk && walk.next) {
            var run = walk.next.next; // if you read the comment at the top, linter will say this is outside of scope. (I don't actually think it is, but linter is mostly best practices. mostly.)
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

        // what happens if there is a list of three nodes that does not contain a loop?
    }

    /**
     * What happens if you run this on a list that has no loop?
     * I like this solution, but I have no idea why it works
     * You shouldn't commit console.logs unless necessary <-- very picky
     */

    //Finds the start of the loop in the SLL if it exists.
    findLoop(){
        console.log('loop actually starts at: ' + this.tail.next.val);

        var walk = this.head;
        var walk2 = this.detectLoop().next;


        if (!walk) {
            return walk; // try to avoid using returns to break up a function's flow if possible
        }

        while (walk !== walk2) {
            // console.log('walk :' + walk.val);
            // console.log('walk2 :' + walk2.val);

            walk = walk.next;
            walk2 = walk2.next;
        }

        return walk;
    }

    //Creates a loop at a random point in the SLL.
    createLoop(){
        var i = Math.round(Math.random() * this.length-2);
        var run = this.head;

        for (i; i > 0; i--) { // since i is already defined and is not being set, "for (; i > 0; i--)" works as well, but I don't like how it looks. (partially why I prefer "for( ; i > 0; i-- )" {... )
            run = run.next;
        }

        this.tail.next = run;
        return run.val; // this return is never used. is it necessary?
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
