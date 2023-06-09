// Downside is that it uses more memory than an SLL

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
            // Next and prev both point to null. Obvious if you think about it
            this.head = node;
            this.tail = node;
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

    unshift(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    shift() {
        if (this.length === 0) return undefined;

        const oldHead = this.head;
        this.head = this.head.next;

        if (this.length === 1) {
            this.tail = this.head;
        } else {
            this.head.prev = null;
        }
        this.length--;
        oldHead.next = null;
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
        return true;
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

        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        
        const node = this.get(index);
        const forward = node.next;
        const back = node.prev;

        forward.prev = back;
        back.next = forward;
        
        this.length--;
        return node;

    }

    reverse() {
        let node = this.head;
        [this.head, this.tail] = [this.tail, this.head];
        let next;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            [node.next, node.prev] = [node.prev, node.next];
            node = next;
        }
        return this;
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
list.unshift('Item 0');
console.log(list.shift())
console.log(list)
// list.reverse()
// list.remove(3)

// list.shift()
// console.log('Poppped:')
// console.log(list.pop())
// console.log(`\n`)
// console.log(list.set('Hello', ))
// list.insert('Sup', 2)
// list.remove(2)
list.printNodes()
// console.log(list.get(2))
// list.printValues()
// console.log(list)