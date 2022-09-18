class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return ++this.length;
  }

  pop() {
    if (!this.head) return undefined;
    const node = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      node.next = null;
    }
    return node.value;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

stack.pop();
