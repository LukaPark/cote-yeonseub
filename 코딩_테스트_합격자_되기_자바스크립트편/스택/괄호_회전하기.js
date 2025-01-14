/**
 * (), [], {} -> 형태가 올바른 문자열
 */
function solution(s) {
    let cnt = 0;
    let replica = s.split('');

    if (replica.length % 2 !== 0) return 0;

    replica.forEach((char, idx, origin) => {
        replica.push(replica[0]);
        replica = replica.slice(1);

        if (checkIsValid(replica)) {
            console.log(replica);
            cnt++;
        }
    })

    return cnt;
}

function checkIsValid (list) {
    let closed1 = 0;
    let closed2 = 0;
    let closed3 = 0;

    let latest = '';

    for (let i = 0; i < list.length; i++) {
        if (latest === '[' && (list[i] === '}' || list[i] === ')') || latest === '(' && (list[i] === ']' || list[i] === '}') || latest === '{' && (list[i] === ')' || list[i] === ']')) {
            latest = list[i];
            return false;
        }

        latest = list[i];

        if (list[i] === '[') closed1++;
        if (list[i] === '(') closed2++;
        if (list[i] === '{') closed3++;

        if (closed1 === 0 && list[i] === ']') return false;
        if (closed2 === 0 && list[i] === ')') return false;
        if (closed3 === 0 && list[i] === '}') return false;

        if (closed1 > 0 && list[i] === ']') closed1--;
        if (closed2 > 0 && list[i] === ')') closed2--;
        if (closed3 > 0 && list[i] === '}') closed3--;
    }

    return closed1 === 0 && closed2 === 0 && closed3 === 0;
}

// console.log(checkIsValid('[](){}'))
// console.log(solution('[](){}'))
console.log(solution('{}}{([])}[{}[{(})]]{{()}'))

const solutionWithStack = (s) => {
    const n = s.length;
    let answer = 0;

    for (let i = 0; i < n; i++) {
        const stack = [];
        let isCorrect = true;

        for (let j = 0; j < n; j++) {
            // 1. 괄호 문자열을 회전시키면서 참조
            const c = s[(i+j) % n];

            if (c === '[' || c === '(' || c === '{') {
                // 2. 열린 괄호는 푸시.
                stack.push(c);
            } else {
                if (stack.length === 0) {
                    // 3. 여는 괄호가 없을경우
                    isCorrect = false;
                    break;
                }

                // 4. 닫힌 괄호는 스택의 top과 짝이 맞는지 비교.
                const top = stack[stack.length - 1];
                if (c === ']' && top === '[') {
                    stack.pop();
                } else if (c === ')' && top === '(') {
                    stack.pop();
                } else if (c === '}' && top === '{') {
                    stack.pop();
                } else {
                    isCorrect = false;
                    break;
                }
            }
        }

        if (isCorrect && stack.length === 0) {
            answer++;
        }
    }

    return answer;
}