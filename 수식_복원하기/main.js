function solution(expressions) {
    var answer = [];

    const trainExpressions = [];
    const prodExpressions = [];
    const availableNumbers = [];

    let maxNumber = 1;

    expressions.forEach((exp) => {
        // 정답 문제와 설명 문제 분리
        if (exp[exp.length - 1] === 'X') {
            trainExpressions.push(exp);
        } else {
            prodExpressions.push(exp);
        }

        // 전체 문제를 반복하면서 최소 진수 확인
        for (const char of exp) {
            if (char >= '0' && char <= '9') {
                maxNumber = Math.max(maxNumber, Number(char));
            }
        }
    });

    for (let i = maxNumber + 1; i <= 9; i++) {
        let corr = true;

        prodExpressions.forEach((item) => {
            const split = item.split(' ');
            let firstNumber = toDecimal(split[0], i);
            let secondNumber = toDecimal(split[2], i);
            let method = split[1];
            let lastNumber = toDecimal(split[4], i);

            if (method === '+') {
                if (firstNumber + secondNumber !== lastNumber) {
                    corr = false;
                }
            }
            if (method === '-') {
                if (firstNumber - secondNumber !== lastNumber) {
                    corr = false;
                }
            }
        });
        if (corr) availableNumbers.push(i);
    }

    // 가능한 진법 수가 1개 이상일 경우
    if (availableNumbers.length > 1) {
        // 1. 가능한 진법 모두에서 같은 결과를 반환할 경우 해당 결과 반환
        // 2. 가능한 진법들에서 다른 결과를 반환할 경우 '?' 반환
        answer = trainExpressions.map((question) => {
            let commonResult = 0;
            let results = new Set();

            availableNumbers.forEach((availableChar) => {
                const availableNumber = Number(availableChar);
                const split = question.split(' ');
                const firstNumber = toDecimal(split[0], availableNumber);
                const secondNumber = toDecimal(split[2], availableNumber);
                const result = split[1] === '+' ? (firstNumber + secondNumber).toString(availableNumber) : (firstNumber - secondNumber).toString(availableNumber);

                results.add(result);
                commonResult = result;
            });

            if (results.size > 1) {
                question = question.replace('X', '?');
            } else {
                question = question.replace('X', commonResult);
            }
            return question;
        });
        return answer;
    } else {
        // 가능한 진법 수가 1개일 경우
        trainExpressions.forEach((exp) => {
            let lastNum;

            const split = exp.split(' ');

            const firstNum = toDecimal(split[0], Number(availableNumbers[0]));
            const secondNum = toDecimal(split[2], Number(availableNumbers[0]));
            const method = split[1];

            if (method === '+') {
                lastNum = firstNum + secondNum;
            } else {
                lastNum = firstNum - secondNum;
            }

            exp = exp.replace('X', lastNum.toString(availableNumbers[0]));

            answer.push(exp);
        });
    }

    return answer;
}

function toDecimal(target, num) {
    let res = 0;
    // target은 2자리 수 이하의 정수 문자열
    const list = target.split('').reverse();

    res += Number(list[0]);
    if (list.length > 1) {
        res += Number(list[1]) * num;
    }
    if (list.length > 2) {
        res += Number(list[2]) * num * num;
    }
    return res;
}

// 10을 2진법 으로 바꾸면 ?
// 10%2 = 0 -> X -> 10 / 2 = 5
// 5%2 = 1 -> O -> 5 / 2 = 2
// 2&2 = 0 -> X -> 2 / 2 = 1
//
// 1010

// 10을 3진법으로 바꾸면 ?
// 10 % 3 = 1 -> X -> 10 / 3 = 3
// 3 % 3 = 0 -> O -> 3 / 3 = 1
// 1
// 101(3) -> 9 + 1 = 10

// 100, 2 ->
// 100, 9 ->

// 14 + 3 = 17
// 51 - 5 = 44
// 13 - 6 = X

// 10 -> 51 - 5 = 46
// 9 -> 51(46) - 5(5) = 45 (41)
// 8 -> 51(41) - 5(5) = 44 (36) // 8진법.

// 1. 각 숫자를 음절로 잘라서, 최대값 +1 진법 ~ 9진법.
// 2. 최소값 ~ 9진법 까지 반복문을 진행 후, 맞는 계산 여부 확인.
//      - 10진법으로 변환 후 수식 검산.