function solution(s) {
    let str = s;

    if (s.length % 2 > 0) {
        return 0;
    }

    str = check(str);

    return str ? 0 : 1;
}

function check(s) {
    const stack = [];
    let res;

    s.split('').forEach((char) => {
        const top = stack[stack.length - 1];

        if (top === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    })

    res = stack.join('');

    return res;
}
