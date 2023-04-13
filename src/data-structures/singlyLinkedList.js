// Linked list is an ordered data structure in which every item (node) has a value and a link to the next element, or null if it's the last element

import { captureRejectionSymbol } from "events";

// Structure tracks the head (first node), tail (last node) and length

// Random access is not allowed ie can't jump to a particular value, must traverse the list to find a value (stairs rather than elevator)
// Trade off is that linked lists are good at insertion and deletion (main reason to use a linked list)

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Technically a linked list, but it sucks
const first = new Node("Hi");
first.next = new Node('Sup');
first.next.next = new Node('Ahh');
first.next.next.next = new Node('Wew');

// Properly this time
class SinglyLinkedList {
    // No constructor argumnents, using push instead
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }

        this.length++;

        return this;
    }

    // to pop we have to traverse
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next
        }
    }

    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = this.head;
        
        while (current.next) {
            newTail = current
            current = current.next
        }

        newTail.next = null

        this.tail = newTail;


        this.length--;

        return current;
    }
}

const list = new SinglyLinkedList()
list.push('Item 1');
list.push('Item 2');
list.push('Item 3');
console.log(list.pop())
console.log(list);
