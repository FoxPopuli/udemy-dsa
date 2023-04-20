
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.head.next = this.tail;
        } else {
            let prev = this.tail;
            this.tail.next = node;
            this.tail = node;
            this.tail.prev = prev;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;

        const tail = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
        return tail;
    }

    shift(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        return this;
    }

    unshift() {
        const oldHead = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        return oldHead;
    }

    get(index) {
        if (index > this.length - 1 || index < 0) return undefined;

        let current = this.head;
        for (let i = 0; i < index; i++) current = current.next;

        return current;
    }


    set(value, index) {
        if (index > this.length - 1 || index < 0) return undefined;

        let current = this.get(index);
        current.value = value;
    }

    insert(value, index) {
        if (index < 0 || index > this.length - 1) return false;

        this.length++;
        if (index === 0) {
            this.shift(value)
            return this;
        } else if (index === this.length - 1) {
            this.push(value);
            return this;
        }


        const newNode = new Node(value);

        const oldNode = this.get(index - 1);
        // console.log(oldNode)

        newNode.next = oldNode.next;
        newNode.prev = oldNode;
        oldNode.next = newNode;




        return this;
    }

    remove(index) {

        if (index === 0) return this.unshift();
        if (index === this.length - 1) return this.pop();
        
        const node = this.get(index);
        const forward = node.next;
        const back = node.prev;
        forward.prev = back;
        back.next = forward;
        this.length--;
        return node;

    }


    printNodes() {
        let current = this.head;
        while(current) {
            console.log(current);
            current = current.next;
        }
    }

    printValues() {
        let current = this.head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const list = new DoublyLinkedList();

list.push('Item 1');
list.push('Item 2');
list.push('Item 3');
list.shift('Item 0');
// list.unshift()
// list.pop()
// console.log(list.set('Hello', ))
list.insert('Sup', 2)
list.remove(2)
list.printNodes()
// console.log(list.get(2))
// list.printValues()
// console.log(list)