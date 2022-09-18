class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);

        if (!this.root) {
            this.root = node;
        } else {
            let current = this.root;
            while (true) {
                if (current.value === value) {
                    break;
                } else if (current.value > value) {
                    if (!current.left) {
                        current.left = node;
                        break;
                    }
                    current = current.left;
                } else if (current.value < value) {
                    if (!current.right) {
                        current.right = node;
                        break;
                    }
                    current = current.right;
                }
            }
        }
        return this;
    }

    find(value) {
        if (!this.root) return;
        let current = this.root;
        let node;

        while (current) {
            if (current.value === value) {
                node = current;
                break;
            } else if (current.value > value) {
                current = current.left;
            } else if (current.value < value) {
                current = current.right;
            }
        }
        return node?.value;
    }

    breadthFirstSearch() {
        if (!this.root) return [];
        const queue = [this.root];
        const visited = [];
        let node;

        while (queue.length) {
            node = queue.shift();
            visited.push(node.value);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        return visited;
    }

    preOrderDepathFirstSearch() {
        if (!this.root) return [];
        const visited = [];

        function traverse(node) {
            visited.push(node.value);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(this.root);
        return visited;
    }

    inOrderDepathFirstSearch() {
        if (!this.root) return [];
        const visited = [];

        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            visited.push(node.value);
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(this.root);
        return visited;
    }

    postOrderDepathFirstSearch() {
        if (!this.root) return [];
        const visited = [];

        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            visited.push(node.value);
        }
        traverse(this.root);
        return visited;
    }
}

const BST = new BinarySearchTree();
BST.insert(10);
BST.insert(6);
BST.insert(15);
BST.insert(3);
BST.insert(8);
BST.insert(20);

BST.breadthFirstSearch();
BST.preOrderDepathFirstSearch();
BST.inOrderDepathFirstSearch();
BST.postOrderDepathFirstSearch();
