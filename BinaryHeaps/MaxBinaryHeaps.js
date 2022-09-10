class MaxBinaryHeaps {
    constructor() {
        this.heap = [];
    }

    // insert(value) {
    //     this.heap.push(value);

    //     let currentIndex = this.heap.length - 1;
    //     let parentIndex = Math.floor((currentIndex - 1) / 2);
    //     let parent = this.heap[parentIndex];

    //     while (parentIndex >= 0 && parent > value) {
    //         this.heap[parentIndex] = value;
    //         this.heap[currentIndex] = parent;

    //         currentIndex = parentIndex
    //         parentIndex = Math.floor((parentIndex - 1) / 2);
    //         parent = this.heap[parentIndex];
    //     }
    //     return this.heap;
    // }

    // [55, 39, 41, 18, 27, 12, 33]

    insert(value) {
        this.heap.push(value);

        let currentIndex = this.heap.length - 1;
        let parentIndex, parent;

        while (true) {
            parentIndex = Math.floor((currentIndex - 1) / 2);
            parent = this.heap[parentIndex];

            if(parent === undefined || parent > value) break;
            
            this.heap[parentIndex] = value;
            this.heap[currentIndex] = parent;

            currentIndex = parentIndex
        }
        return this.heap;
    }

    remove() {
        if (this.heap.length < 1) return;
        const value = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();

        let parentIndex = 0;
        let leftChildIndex, rightChildIndex;

        while (true) {
            leftChildIndex = 2 * parentIndex + 1;
            rightChildIndex = 2 * parentIndex + 2;

            if (this.heap[leftChildIndex] > this.heap[parentIndex] || this.heap[rightChildIndex] > this.heap[parentIndex]) {
                const maxIndex = this.heap[leftChildIndex] > this.heap[rightChildIndex] ? leftChildIndex : rightChildIndex;
                const temp = this.heap[parentIndex];
                this.heap[parentIndex] =  this.heap[maxIndex]
                this.heap[maxIndex] =  temp;
                parentIndex = maxIndex;
                continue;
            }
            break;
        }
        return value;
    }

}


const heap = new MaxBinaryHeaps();
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)