function solution(num) {
    const stack = [];

    while (num > 0) {
        const remainder = num % 2;
        stack.push(remainder);
        num = Math.floor(num / 2);
    }

    let binary = "";
    while (stack.length > 0) {
        binary += stack.pop();
    }

    return binary;


    // return parseInt(num.toString(2));
}

console.log(solution(12345));