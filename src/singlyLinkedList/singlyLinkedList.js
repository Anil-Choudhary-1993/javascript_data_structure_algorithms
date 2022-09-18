class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    print() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result);
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let node = this.head;
        let i = 0;
        while (i !== index) {
            node = node.next;
            i++;
        }
        return node;
    }

    set(index, value) {
        if (index < 0 || index >= this.length) return undefined;
        let node = this.get(index);
        node.value = value;
        return value;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return undefined;

        if (index === 0) {
            return this.unshift(value);
        } else if (index === this.length) {
            return this.push(value);
        } else {
            let prev = this.get(index - 1);
            let node = new Node(value);
            node.next = prev.next;
            prev.next = node;
        }

        this.length++;
        return this.length;
    }

    push(value) {
        const node = new Node(value);
        if (this.head) {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        } else {
            this.head = node;
        }
        this.tail = node;
        this.length++;
        return this.length;
    }

    pop() {
        if (this.length < 1) return undefined;
        let current = this.head;
        let prev = current;
        while (current.next) {
            prev = current;
            current = current.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        return current.value;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) {
            this.shift();
            return true;
        }
        if (index === this.length - 1) {
            this.pop();
            return true;
        }
        const prev = this.get(index - 1);

        console.log(prev.next.value);

        prev.next = prev.next.next;
        return true;
    }

    shift() {
        if (this.length < 1) return undefined;
        const node = this.head;
        this.head = node.next;
        this.length--;
        return node.value;
    }

    unshift(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
        return this.length;
    }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.print();

list.unshift(-3);
list.unshift(-2);
list.unshift(-1);
list.print();
