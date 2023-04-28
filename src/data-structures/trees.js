// Regular trees
// Have a root and children. Nodes only link from parents to children
// Parents can have multiple children but children can only have one parent

import { captureRejectionSymbol } from "events";

// import { esbuildMinify } from "terser-webpack-plugin";


// Binary trees
// Special type of tree in which parents can only have up to 2 children

// Binary Search Tree (BST)
// Special type of binary tree in which everything to the left of the parent is less than the parent
// Everything to the right of the parent is greater than the parent

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        // this.root = this.root || newNode;

        let current = this.root;
        while(true) {
        
            if (value === current.value) return undefined;

            if (value < current.value) {
                if (current.left) {
                    current = current.left
                } else {
                    current.left = newNode;
                    return this;
                }
            } else {
                if (current.right) {
                    current = current.right;
                } else {
                    current.right = newNode;
                    return this;
                }
            }

        }

    }


    find(value) {
        if (!this.root) return false;

        let current = this.root;
        while(current) {
            if (current.value === value) return true;
            current = current.value < value ? current.right : current.left;
        }
        return false;

    }
}

const tree = new BST();
// tree.root = new Node (10)

tree.insert(5)
tree.insert(6)
tree.insert(1)
tree.insert(12)
// console.log(tree.find(1));
// console.log(tree)

const nodeFactory = (value) => {
    let right = null;
    let left = null;
    return {value, right, left};
}

const node = nodeFactory(10);


const treeFactory = () => {
    let root = null;

    const insert = (value) => {
        const newNode = nodeFactory(value);
        if (!root) {
            root = newNode;
            return this;
        }
        

        let current = root;

        let i = 0;

        while(current) {
            if (current.value === value) return this;
            if (current.value > value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;

            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }

            if (i > 40) break;
            i++;
        }
    }

    const getRoot = () => root;

    const find = (value) => {
        if (!root) return false;


        let current = root;
        while(current) {
            if (current.value === value) return true;
            current = current.value > value ? current.left : current.right;
        }

        return false;
    }

    return {root, getRoot, insert, find}


}

const newTree = treeFactory();
newTree.insert(5)
newTree.insert(10)
newTree.insert(4)
// console.log(newTree.getRoot())
// console.log(newTree.find(11))