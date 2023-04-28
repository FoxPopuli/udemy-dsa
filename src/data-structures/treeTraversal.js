import {Queue} from "./stacksAndQueues"
import { BST } from "./trees"
// Traversing a tree = visiting every node
// Works on every kind of tree
// Two types of traversals:
//      1) Breadth first search (BFS)
//          a) Can have a huge memory complexity for a wide tree, or virtually none for a narrow tree
//      2) Depth first search (DFS) => 3 different methods
//          a) Can use lots of memory for long, narrow trees, but not much for short, wide trees

// BFS
// Searches horizontally

class BST_BFS extends BST {
    constructor() {
        super();
    }

    traverse() {
        const data = [];
        let node;
        
        const queue = new Queue();
        queue.enqueue(this.root);
        
        while(queue.size) {
            node = queue.dequeue()
            data.push(node);
            if (node.left) queue.enqueue(node.left);
            if (node.right) queue.enqueue(node.right);

        }

        return data;

    }
}

// DFS - Traverses vertically

class BST_DFS extends BST {
    constructor() {
        super();
    }
    

    traverse_PreOrder() {
        // Useful for linearizing a tree in such a way that it can be easily
        // reconstructed or copied (iterating though and inserting in that order will reconstruct the tree)
        const data = [];
        let current = this.root;
        
        const helper = (node) => {
            data.push(node);
            if (node.left) helper(node.left);
            if (node.right) helper(node.right);
        }

        helper(current);
        return data;
    }

    traverse_PostOrder() {
        const data = [];
        let current = this.root;
        
        const helper = (node) => {
            if (node.left) helper(node.left);
            if (node.right) helper(node.right);
            data.push(node);

        }

        helper(current);
        return data;
    }

    traverse_inPlace() {
        //  Returns ordered data for a BST
        const data = [];
        const helper = (node) => {
            if(node.left) helper(node.left);
            data.push(node);
            if(node.right) helper(node.right);
        }
        helper(this.root);
        return data;
    }
}

const tree = new BST_DFS()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

// console.log(tree.traverse())
console.log(tree.traverse_PreOrder())
console.log(tree.traverse_PostOrder())
console.log(tree.traverse_inPlace())



const traverse = (tree) => {

}
const queue = new Queue()


