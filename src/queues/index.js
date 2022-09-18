class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enQueue(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return ++this.length;
  }

  deQueue() {
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

const queue = new Queue();
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);

queue.deQueue();
