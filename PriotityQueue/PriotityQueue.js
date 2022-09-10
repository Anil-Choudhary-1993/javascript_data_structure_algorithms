class Node {
    constructor(value, priority) {
        this.value = value;
        this.priotity = priority;
    }
}

class PriotityQueue {
    constructor() {
        this.queue = [];
    }

    // enqueue(value) {
    //     this.queue.push(value);

    //     let currentIndex = this.queue.length - 1;
    //     let parentIndex = Math.floor((currentIndex - 1) / 2);
    //     let parent = this.queue[parentIndex];

    //     while (parentIndex >= 0 && parent > value) {
    //         this.queue[parentIndex] = value;
    //         this.queue[currentIndex] = parent;

    //         currentIndex = parentIndex
    //         parentIndex = Math.floor((parentIndex - 1) / 2);
    //         parent = this.queue[parentIndex];
    //     }
    //     return this.queue;
    // }

    // [55, 39, 41, 18, 27, 12, 33]

    enqueue(value, priotity) {
        const node = new Node(value, priotity);
        this.queue.push(node);

        let currentIndex = this.queue.length - 1;
        let parentIndex, parent;

        while (true) {
            parentIndex = Math.floor((currentIndex - 1) / 2);
            parent = this.queue[parentIndex];

            if (parent === undefined || parent.priotity > priotity) break;

            this.queue[parentIndex] = node;
            this.queue[currentIndex] = parent;

            currentIndex = parentIndex
        }
        return this.queue;
    }

    dequeue() {
        if (this.queue.length < 1) return;
        const value = this.queue[0];
        this.queue[0] = this.queue[this.queue.length - 1];
        this.queue.pop();

        let parentIndex = 0;
        let leftChildIndex, rightChildIndex;

        while (true) {
            leftChildIndex = 2 * parentIndex + 1;
            rightChildIndex = 2 * parentIndex + 2;

            if (this.queue[leftChildIndex]?.priotity > this.queue[parentIndex]?.priotity || this.queue[rightChildIndex]?.priotity > this.queue[parentIndex]?.priotity) {
                const maxIndex = this.queue[leftChildIndex]?.priotity > this.queue[rightChildIndex]?.priotity ? leftChildIndex : rightChildIndex;
                const temp = this.queue[parentIndex];
                this.queue[parentIndex] = this.queue[maxIndex]
                this.queue[maxIndex] = temp;
                parentIndex = maxIndex;
                continue;
            }
            break;
        }
        return value;
    }

}


const pQueue = new PriotityQueue();
pQueue.enqueue("cold", 1)
pQueue.enqueue("gunshot", 5)
pQueue.enqueue("fever", 2)
pQueue.enqueue("bone broken", 4)
pQueue.enqueue("theft", 8)

console.log(pQueue.queue)

pQueue.dequeue();
console.log(pQueue.queue)

pQueue.dequeue();
console.log(pQueue.queue)

pQueue.dequeue();
console.log(pQueue.queue)
