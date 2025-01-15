const solution = (prices) => {
    const n = prices.length;
    console.log(n);
    // 가격이 떨어지지 않은 기간을 저장할 배열
    const answer = Array.from({length: n}).fill(0);

    console.log(answer);
    // 스택을 사용해 이전 가격과 현재 가격을 비교
    const stack = [0]; // 스택 초기화

    for (let i = 1; i < n; i++) {
        while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            const temp = stack.pop();
            answer[temp] = i - temp;
            console.log(answer);
        }
        stack.push(i);
    }

    while (stack.length > 0) {
        const j = stack.pop();

        answer[j] = n - 1 - j;
    }

    return answer;
}

// console.log(solution([1,2,3,2,3]))
console.log(solution([1,6,9,5]))

// console.log(solution([1,3,4,2,1,2,3,4,5,6,6,1,2,3,4,2,3,2,3]))
/**
 * 1,2,3
 * minV = 0;
 *
 * [1]
 *
 *
 *
 *
 */