function solution(str) {
    const stack = [];

    str.split('').forEach(char => {
        if (char === '(') {
            stack.push(char);
        } else {
            stack.pop();
        }
    })

    return stack.length === 0;
}

console.log(solution('(())()'));
console.log(solution('((())()'));