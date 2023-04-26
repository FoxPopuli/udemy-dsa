// Stacks

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
        return
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

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class TestQueue {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    shift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {

            let oldHead = this.head;
            this.head = newNode;
            this.head.next = oldHead;

            if (this.length === 1) oldHead.prev = this.head;
        }

        this.length++;
        return this;
    }

    pop() {
        const poppedNode = this.tail;


    }


}


class Queue {

}