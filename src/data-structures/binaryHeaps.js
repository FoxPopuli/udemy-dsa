
// Binary Heaps
// Each parent has at most 2 children
// All children of each nodeare as full as they can be
// Left nodes are filled in first
// No implied ordering between siblings
// 2 Types of binary heaps:
//      1) Max - Every child node is smaller than its parent
//      2) Min - Every child node is larger than its parent

// Used in priority queues, which are very common

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);

        let index = this.values.length - 1;
        const element = this.values[index];
        while(index > 0) {
            let parentIndex = Math.floor((index-1)/2);;
            let parent = this.values[parentIndex]

            if (parent >= element) break;
            this.values[parentIndex] = element
            this.values[index] = parent;

            index = parentIndex;
        }

        return this;
    }

    sinkDown() {
        let idx = 0;
        const element = this.values[0];
        while(true) {
            // 1) get child indices
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;

            // 2) Initialize child values
            let leftChild, rightChild;

            // 3) Keep track of if a swap happened this iteration
            let swap = null;


            // 4) Check if indices are in bounds and if so, assign child values
            if (this.values[leftChildIdx]) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }

            if (this.values[rightChildIdx]) {
                rightChild = this.values[rightChildIdx];
                if (
                    // What a travesty, find a way to fix 
                    // Ensures that the larger child gets assigned to swap
                    // if both are larger than element
                    (!swap && rightChild > element) ||
                    (swap && rightChild > leftChild) 
                ) {
                    swap = rightChildIdx;
                }
            }


            if (!swap) break;

            // 5) Do the swap
            this.values[idx]  = this.values[swap];
            this.values[swap] = element;

            // 6) Set current index to that of the swapped child
            idx = swap;
        }
    }

    extractMax() {
        const max = this.values[0]
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end
            this.sinkDown();
        }

        return max;

    }


}

 
const binary = new MaxBinaryHeap()
binary.insert(41)
binary.insert(43)
binary.insert(19)
binary.insert(12)
binary.insert(55)
console.log(binary)
console.log(binary.extractMax());
console.log(binary.extractMax());

console.log(binary)
// binary


// Priority queue
// Data structure where each element has a priority
// Elements with higher priorities are served before elements with lower priorities

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

// Priority Queue using a min binary heap

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];

            if (parent.priority < element.priority) break;

            this.values[parentIdx] = element;
            this.values[idx] = parent;

            idx = parentIdx;

        }

    }

    enqueue(val, priority) {
        const newNode = new Node(val, priority);
        this.values.push(newNode);
        // this.bubbleUp()
        return this;
    }

    dequeue() {
        return;
    }
}