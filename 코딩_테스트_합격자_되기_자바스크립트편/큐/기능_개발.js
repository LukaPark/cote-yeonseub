/**
 * progressess: 현재 진도율
 * speeds: 하루에 진행하는 진도율
 */
class Node {
    constructor(params) {
        this.data = params;
        this.next = null;
    }

    isComplete(day) {
        let diff = 0;

        if (this.data.progress + this.data.speed * day >= 100) {
            diff++;
            if (this.next) {
                diff += this.next.isComplete(day);
            }
        }

        return diff;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(item) {
        const newNode = new Node(item);

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

const solution = (progresses, speeds) => {
    const res = [];
    let cnt = 0;
    let day = 0;
    const queue = new Queue();

    progresses.forEach((progress, idx) => {
        queue.push({
            progress: progress,
            speed : speeds[idx],
        })
    });

    while (cnt < progresses.length) {
        let diff = queue.head.isComplete(day);
        if (diff > 0) {
            res.push(diff);
        }
        for (let i = 0; i < diff; i++) {
            queue.pop()
        }
        cnt+=diff;
        day++;
    }

    return res;
}

console.log(solution2([93, 30, 55], [1, 30, 5]));
// console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

function solution2(progresses, speeds) {
    const answer = [];
    const n = progresses.length;

    // 각 작업의 배포 가능일 계산.
    const daysLeft = progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[idx]));

    console.log(daysLeft);

    let count = 0;
    let maxDay = daysLeft[0];

    for (let i = 0; i < n; i++) {
        if (daysLeft[i] <= maxDay) {
            count++;
        } else {
            answer.push(count);
            count = 1;
            maxDay = daysLeft[i];
        }
    }

    answer.push(count);

    return answer;
}