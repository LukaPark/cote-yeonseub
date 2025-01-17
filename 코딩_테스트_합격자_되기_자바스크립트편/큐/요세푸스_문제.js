class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(item) {
        const newNode = new QueueNode(item);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    pop() {
        if (!this.head) return null;

        const removeNode = this.head;
        this.head = this.head.next;

        if (!this.head) this.tail = null;

        this.size--;

        return removeNode.data;
    }

    isEmpty() {
        return this.size === 0;
    }
}

const solution = (n, k) => {
    const queue = new Queue();

    Array.from({ length: n }).map((_, idx) => {
        queue.push(idx+1);
    });

    while (queue.size > 1) {
        for (let i = 0; i < k - 1; i++) {
            const front = queue.pop();
            queue.push(front);
        }
        queue.pop();
    }

    return queue.head.data;
};

console.log(solution(5, 2))