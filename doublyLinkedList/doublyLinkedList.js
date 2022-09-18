class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) return false;
    const node = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = node.prev;
      this.tail.next = null;
      node.prev = null;
    }
    this.length--;
    return node;
  }

  unshift(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.length++;
    return this.length;
  }

  shift() {
    if (this.length === 0) return false;
    const node = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = node.next;
      this.head.prev = null;
      node.next = null;
    }
    this.length--;
    return node;
  }

  get(index) {
    if (index < 0 || index > this.length) return null;
    let count = 0;
    let node = this.head;
    while (count != index) {
      node = node.next;
      count++;
    }
    return node;
  }

  set(index, value) {
    const node = this.get(index);
    if (!node) return null;
    node.value = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    else if (index === 0) return this.unshift(value);
    else if (index === this.length) return this.push(value);
    else {
      const newNode = new Node(value);
      const current = this.get(index);
      current.prev.next = newNode;
      newNode.prev = current.prev;
      newNode.next = current;
      this.length++;
      return this.length;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    else if (index === 0) return this.shift();
    else if (index === this.length - 1) return this.pop();
    else {
      const current = this.get(index);
      current.prev = current.next;
      this.length--;
      return this.length;
    }
  }
}

const DbList = new DoublyLinkedList();
console.log("Push");
DbList.push(1);
DbList.push(2);
DbList.push(3);
DbList.push(4);

DbList.print();

console.log("Pop");
DbList.pop();
DbList.pop();

DbList.print();

console.log("Unshift");
DbList.unshift(-3);
DbList.unshift(-2);
DbList.unshift(-1);

DbList.print();

console.log("Shift");
DbList.shift();
DbList.shift();

DbList.print();

console.log("Get");
DbList.get(0);

console.log("Set");
DbList.set(0, 12);
DbList.print();

console.log("Insert");
DbList.insert(0, 10);
DbList.insert(2, 99);
DbList.print();

console.log("Remove");
DbList.remove(5);
DbList.print();

DbList.remove(0);
DbList.print();

DbList.remove(2);
DbList.print();
