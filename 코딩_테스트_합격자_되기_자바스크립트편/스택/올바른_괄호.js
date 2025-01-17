const solution = (str) => {
    const set = new Set(str);
    // 짝수가 아닌경우 = 한개의 괄호만 주어진 경우 false
    if (set.size !== 2) return false;

    const stack = [];

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === '(') {
            stack.push('open');
        } else {
            if (stack.length > 0) {
                stack.pop()
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
};

console.log(solution('()))'))

