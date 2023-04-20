class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.head.next = this.tail;
 
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.tail) return undefined;

        const poppedNode = this.tail;
        let current = this.head;
        while(current.next.next) {
            current = current.next;
        }
        this.tail = current;
        this.tail.next = null;
        this.length--;
        return poppedNode;
    }

    shift() {
        if (!this.head) return undefined;

        let toReturn;
        if (this.length === 1) {
            toReturn = this.head;
            this.head = null;
            this.tail = null;
        } else {
            toReturn = this.head;
            this.head = this.head.next;
        }

        this.length--;
        toReturn.next = null;
        return toReturn;
    }

    unshift(value) {
        const newHead = new Node(value);
        if (!this.length) this.tail = newHead;

        newHead.next = this.head;
        this.head = newHead;
        this.length++;

        return this;
    }

    get(index) {
        if (index < 0 || index > this.length - 1) return undefined;
        let current = this.head;
        let i = 0;
        while(i !== index) {
            current = current.next;
            i++;
        }
        return current;
    }


    set(value, index) {
        if (index < 0 || this.length < index + 1) return undefined;
        const newNode = new Node(value);
        this.remove(index);
        this.insert(newNode.value, index);
        return this;
    }

    insert(value, index) {
        if (index < 0 || index > this.length) return undefined;


        const newNode = new Node(value);
        if(index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else if (index === this.length) {
            this.push(value)
            this.length--;
        } 
        else {
            const prevNode = this.get(index - 1);
            const nextNode = this.get(index);
            newNode.next = nextNode;
            prevNode.next = newNode;

        }

        this.length++;
        return this;
    }

    remove(index) {
        if (index < 0 || this.length < index + 1) return undefined;
        if (!this.length) return undefined;
        if (!this.length === 1) {
            let toRemove = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return toRemove;
        }

        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

        const previous = this.get(index - 1)
        const current = this.get(index);
        const next = this.get(index + 1);
        previous.next = next;
        this.length--;
        return current;
    }



    printAll() {
        let current = this.head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }

}

const test = new LinkedList();
test.push('Item 1');
test.push('Item 2');
test.push('Item 3')
test.unshift('Item 0')
test.set('New Value', 3)
console.log(test)
test.printAll()