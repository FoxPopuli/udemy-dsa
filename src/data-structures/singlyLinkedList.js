// Linked list is an ordered data structure in which every item (node) has a value and a link to the next element, or null if it's the last element


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

    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = this.head;
        
        // newTail lags one instance behind the current node
        while (current.next) {
            newTail = current
            current = current.next
        }

        newTail.next = null
        this.tail = newTail;
        this.length--;

        // Need to account for the edge case of having just one item
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current; 
    }

    // Removes and returns the head
    shift() {
        if (!this.head) return undefined;

        let currentHead = this.head
        this.head = currentHead.next;
        currentHead.next = null;
        this.length--;

        if (this.length === 0) this.tail = null;

        return currentHead;
    }

    // Adds new head
    unshift(value) {
        const newHead = new Node(value)
        if (!this.head) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = this.head
            this.head = newHead;
        }


        this.length++;
        return this;
    }

    get(index) {
        if (index < 0) return undefined;
        
        let currentNode = this.head;
        let i = 0;
        while (i < index) {
            currentNode = currentNode.next;
            i++;
            if (!currentNode) return undefined;
        }

        return currentNode;
    }

    insert(index, value) {
        if (index === 0) {
            this.unshift(value);
            return true
        }

        if (index === this.length) {
            this.push(value);
            return true;
        }

        const currentNode = this.get(index);
        if (!currentNode) return false;

        const newNode = new Node(value);
        const prevNode = this.get(index - 1)
        prevNode.next = newNode
        newNode.next = currentNode;
        this.length++;
        return true;
    }

    set(index, value) {
        const updatedNode = this.get(index);
        if (!updatedNode) return false;
        updatedNode.value = value;
        return this;
    }

    remove(index) {

        const foundNode = this.get(index);
        if (!foundNode) return false;

        // Edge cases
        if (index === 0) {
            return this.shift();
        } else if (!foundNode.next) {
            return this.pop();
        }

        const prevNode = this.get(index - 1);
        const nextNode = this.get(index + 1);
        prevNode.next = nextNode;
        this.length--;
        return foundNode;
    }

    printAll() {
        let current = this.head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }


    // Classic interview question
    // Reverse a linked list in place
    reverse() {
        // 1) initialize node to OLD HEAD, which will be the new tail;
        let node = this.head;

        // 2) Swap the head and the tail
        [this.head, this.tail] = [this.tail, this.head];

        // 3) Initialize prev and next
        let prev = null;
        let next;

        // 4) Loop through
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }

}




const list = new SinglyLinkedList()
list.push('Item 1');
list.push('Item 2');
list.push('Item 3');
list.unshift('Item 0');

// list.insert(4, 'Item 4');
list.reverse()
list.printAll()
// console.log(list)



const range = (n) => [...new Array(n).keys()];

