class Node {
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

    push(data) {
        // 새로운 요소 생성
        const newNode = new Node(data);

        if (!this.head) { // 큐가 비어있다면
            this.head = newNode;
            this.tail = newNode;
        } else { // 아니라면 tail의 next를 새로운 요소로 설정 후 tail이 새로운 요소를 참조하도록 변경
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    pop() {
        if (!this.head) {  // head가 비어있다면
            return null;
        }

        // 두번째 요소를 head의 참조로 변경하면 자연스럽게 첫번째 요소가 사라짐.
        const removeNode = this.head;
        this.head = this.head.next;

        // 만약 두번째 요소가 없었다면, 큐가 비어있다는 뜻
        if (!this.head) {
            this.tail = null;
        }

        this.size--;

        return removeNode.data;
    }

    isEmpty() {
        return this.size === 0;
    }
}