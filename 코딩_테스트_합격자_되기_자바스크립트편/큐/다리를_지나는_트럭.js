class Queue {
    constructor(params) {
        this.queue = Array.from({ length: params.maxSize }).map(_ => 0);
        this.maxSize = params.maxSize;
        this.maxWeight = params.maxWeight;
        this.passing = 0;
    }

    push(weight) {
        this.queue.push(weight);
        this.passing += weight;
    }

    pop () {
        if (this.queue.length > 0) {
            this.passing -= this.queue[0];
            this.queue.shift();
        }
    }

    canPush(weight) {
        return this.passing + weight <= this.maxWeight;
    }
}

const solution = (bridge_length, weight, truck_weights) => {
    let daysLeft = 0;

    const bridge = new Queue({
        maxSize: bridge_length,
        maxWeight: weight,
    });

    while (truck_weights.length > 0) {
        if (bridge.queue.length > 0) bridge.pop();

        const canPush = bridge.canPush(truck_weights[0]);

        if (canPush) {
            bridge.push(truck_weights.shift());
        } else {
            bridge.push(0);
        }

        daysLeft++;
    }

    return daysLeft + bridge_length;
}

console.log(solution(2, 10, [7,4,5,6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10]));

