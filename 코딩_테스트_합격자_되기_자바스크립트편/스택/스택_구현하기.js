const stack = [] // 스택 초기화
const maxSize = 10; // 스택의 최대 크기.

function isFull(stack) {
    return stack.length === maxSize;
}

function isEmpty(stack) {
    return stack.length === 0;
}

function push(stack, item) {
    if (isFull(stack)) {
        console.log('Stack is Full');
    } else {
        stack.push(item);
    }
}

function pop(stack) {
    if (isEmpty(stack)) {
        console.log('Stack is Empty!');
        return null;
    } else {
        stack.pop();
    }
}