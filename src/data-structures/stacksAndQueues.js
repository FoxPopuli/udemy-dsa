// Stacks (array implimentation)
// Linked list could be better since we don't need all the array methods 

// No matter what, insertion and removal need to be O(1) for both stacks and queues

class StackClass {
    #array = [];
    inheretedProp = 'Hi dude'

    constructor () {
        this.top = null;
        this.length = 0;
        this.inheretedProp = 'Hi'

    }

    push(value) {
        this.top = value;
        this.#array.push(value);
        this.length++;
    }

    pop() {
        const popped = this.#array.pop();
        this.top = this.#array[this.#array.length - 1];
        this.length--;
        return popped;
    }

    peek() {
        return this.top;
    }

    getLength() {
        return this.length;
    }

}

class NewStack extends StackClass {
    constructor() {
        super();
    }
}

const StackContructor = () => {
    const array = [];

    let top = null;
    let length = 0;


    const push = (value) => {
        array.push(value);
        top = value;
        length++;
        return array;
    }

    const pop = () => {
        const popped = array.pop();
        top = array[this.length - 1];
        return popped;

    }

    const peek = () => top;


    const getLength = () => length;

    const getAll = () => array;

    return {push, pop, peek, getLength, getAll};
}

const NewStackConstructor = () => {
    const proto = StackContructor();
    
    const newMethod = () => 'I am a new method';

    return Object.assign({}, proto, {newMethod});
}

const stackTests = () => {
    const testStack = new StackClass();
    testStack.push('Hello');
    testStack.push('There');
    testStack.push('Buddy')
    
    console.log(testStack.peek())
    console.log(testStack.getLength())
    console.log(testStack.pop());
    console.log(testStack.peek())
    console.log(testStack.inheretedProp);
    
    const newStack = new NewStack();
    console.log(newStack.inheretedProp)
    
    const newStack2 = NewStackConstructor();
    newStack2.push('First');
    console.log(newStack2.peek())
    console.log(newStack2.newMethod())
    
}
// stackTests();

// Stack (SLL implimentation with all methods constant time)


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    // Preferred way of impimenting a stack with large data sets
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        this.size++;
        return this;
    }

    pop() {
        if (!this.size) return undefined;

        const temp = this.first;

        if (this.size === 1) this.last = null;
        
        this.first = this.first.next;
        this.size--;

        return temp.value;

    }
}

// Queue (array implimentation)


class ArrayQueue {
    #array = [];
    #length = 0;

    add(value) {
        this.#array.unshift(value);
        this.#length++;
        return this;
    }

    peek() {
        return this.#array[this.#length - 1]
    }

    pop() {
        if (!this.#length) return undefined;
        this.#length--;
        return this.#array.pop();
    }
}

class Queue {
    // Preferred way of implimenting a queue (SLL)
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size++;
        return this;
    }

    dequeue() {
        if (!this.first) return undefined;
        
        const temp = this.first;
        this.first = this.first.next;
        if (this.size === 1) this.last = null;
        this.size--;
        return temp.value;
    }

}

const testQueue = new Queue();
testQueue.enqueue('Entry 1');
testQueue.enqueue('Entry 2');
testQueue.enqueue('Entry 3');
console.log(testQueue)
console.log(testQueue.dequeue())
console.log(testQueue.dequeue())
// console.log(testQueue.dequeue())
console.log(testQueue)