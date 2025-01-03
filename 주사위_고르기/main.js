// https://www.acmicpc.net/problem/15650 이 문제도 풀어보쟝

// console.log(solution([[1, 2, 3, 4, 5, 6], [3, 3, 3, 3, 4, 4], [1, 3, 3, 4, 4, 4], [1, 1, 4, 4, 5, 5]]));
// // [1, 4]
// console.log(solution([[1, 2, 3, 4, 5, 6], [2, 2, 4, 4, 6, 6]]))
// // [2]
// console.log(solution([[40, 41, 42, 43, 44, 45], [43, 43, 42, 42, 41, 41], [1, 1, 80, 80, 80, 80], [70, 70, 1, 1, 70, 70]]))
// [1, 3]

solution([[40, 41, 42, 43, 44, 45], [43, 43, 42, 42, 41, 41], [1, 1, 80, 80, 80, 80], [70, 70, 1, 1, 70, 70]])

function solution(dice) {
    let answer = [];

    const results = [];

    const n = dice.length / 2;

    // 1. 주사위의 분리를 통해 나올 수 있는 경우의 수 -> n * (n-1)
    divide(results, dice, 0);

    return answer;
}

function divide(length) {
    const result = [];

    if (result.length === length / 2) {
        return;
    }

    for (let i = 0; i < length; i++) {
        result.push(i);

    }
}

//
// function divide(list, dice, index) {
//     if (list.length === (dice.length / 2)) return;
//
//     console.log('list', list);
//
//     if (!list.includes(dice[index])) {
//         list.push(dice);
//     }
//
//     divide(list, dice, index + 1);
// }

/**
 * 1. 주사위의 분리를 통해 나올 수 있는 경우의 수 -> (n * (n-1))/2
 * 2. (분리된 주사위의 갯수 * 6)**2 만큼 연산.
 *
 *
 * [문제 설명]
 * A와 B가 n개의 주사위를 가지고 승부를 합니다. 주사위의 6개 면에 각각 하나의 수가 쓰여 있으며,
 * 주사위를 던졌을 때 각 면이 나올 확률은 동일합니다.
 * 각 주사위는 1 ~ n의 번호를 가지고 있으며, 주사위에 쓰인 수의 구성은 모두 다릅니다.
 *
 * A가 먼저 n / 2개의 주사위를 가져가면 B가 남은 n / 2개의 주사위를 가져갑니다.
 * 각각 가져간 주사위를 모두 굴린 뒤, 나온 수들을 모두 합해 점수를 계산합니다.
 * 점수가 더 큰 쪽이 승리하며, 점수가 같다면 무승부입니다.
 *
 * A는 자신이 승리할 확률이 가장 높아지도록 주사위를 가져가려 합니다.
 *
 * 다음은 n = 4인 예시입니다.
 * 주사위	구성
 * #1	[1, 2, 3, 4, 5, 6]
 * #2	[3, 3, 3, 3, 4, 4]
 * #3	[1, 3, 3, 4, 4, 4]
 * #4	[1, 1, 4, 4, 5, 5]
 * 예를 들어 A가 주사위 #1, #2를 가져간 뒤 6, 3을 굴리고, B가 주사위 #3, #4를 가져간 뒤 4, 1을 굴린다면 A의 승리입니다. (6 + 3 > 4 + 1)
 * A가 가져가는 주사위 조합에 따라, 주사위를 굴린 1296가지 경우의 승패 결과를 세어보면 아래 표와 같습니다.
 *
 * A의 주사위	승	무	패
 * #1, #2	596	196	504
 * #1, #3	560	176	560
 * #1, #4	616	184	496
 * #2, #3	496	184	616
 * #2, #4	560	176	560
 * #3, #4	504	196	596
 * A가 승리할 확률이 가장 높아지기 위해선 주사위 #1, #4를 가져가야 합니다.
 *
 * 주사위에 쓰인 수의 구성을 담은 2차원 정수 배열 dice가 매개변수로 주어집니다.
 * 이때, 자신이 승리할 확률이 가장 높아지기 위해 A가 골라야 하는 주사위 번호를 오름차순으로 1차원 정수 배열에 담아
 * return 하도록 solution 함수를 완성해 주세요. 승리할 확률이 가장 높은 주사위 조합이 유일한 경우만 주어집니다.
 *
 * [제한사항]
 * 2 ≤ dice의 길이 = n ≤ 10
 * n은 2의 배수입니다.
 * dice[i]는 i+1번 주사위에 쓰인 6개의 수를 담고 있습니다.
 * dice[i]의 길이 = 6
 * 1 ≤ dice[i]의 원소 ≤ 100
 *
 * [입출력 예]
 * dice	result
 * [[1, 2, 3, 4, 5, 6], [3, 3, 3, 3, 4, 4], [1, 3, 3, 4, 4, 4], [1, 1, 4, 4, 5, 5]]  ->	[1, 4]
 * [[1, 2, 3, 4, 5, 6], [2, 2, 4, 4, 6, 6]] ->	[2]
 * [[40, 41, 42, 43, 44, 45], [43, 43, 42, 42, 41, 41], [1, 1, 80, 80, 80, 80], [70, 70, 1, 1, 70, 70]]	-> [1, 3]
 */

// 주사위의 수를 입력 받고, 고를수 있는 경우의 수를 배열로 갖는 2차원 배열을 반환.
function divideCases(n) {
    const res = [];

    function add(current, start) {
        if (current.length === Math.floor(n / 2)) {
            res.push([...current]);
            return;
        }

        for (let i = start; i < n; i++) {
            current.push(i);
            add(current, i+1);
            current.pop();
        }
    }

    add([], 0);

    return res;
}

const getAllResult = (dices) => {
    const sums = new Map();

    function calcSums(diceIndex, currentSum) {
        if (diceIndex === dices.length) {
            // 모든 주사위를 다 던졌을때,
            sums.set(currentSum, (sums.get(currentSum) || 0) + 1);
            return;
        }

        for (const num of dices[diceIndex]) {
            calcSums(diceIndex+1, currentSum+num);
        }
    }

    calcSums(0, 0);
    return sums;
}

const cases = divideCases(6);

// console.log(getAllResult(cases));


function solution2(dice) {
    const n = dice.length;
    const half = n / 2;

    // 모든 가능한 조합을 생성하는 함수
    function getCombinations(arr, selectNumber) {
        const results = [];
        if (selectNumber === 1) return arr.map(el => [el]);

        arr.forEach((fixed, index, origin) => {
            const rest = origin.slice(index + 1);
            const combinations = getCombinations(rest, selectNumber - 1);
            const attached = combinations.map(el => [fixed, ...el]);
            results.push(...attached);
        });

        return results;
    }

    // 모든 가능한 주사위 값의 합을 계산하는 함수
    function getAllSumCases(diceIndices) {
        const sums = new Map();
        const diceCount = diceIndices.length;

        function calculateSums(currentIndex, currentSum) {
            if (currentIndex === diceCount) {
                sums.set(currentSum, (sums.get(currentSum) || 0) + 1);
                return;
            }

            const currentDice = dice[diceIndices[currentIndex]];
            for (let i = 0; i < 6; i++) {
                calculateSums(currentIndex + 1, currentSum + currentDice[i]);
            }
        }

        calculateSums(0, 0);
        return sums;
    }

    // 주사위 번호 배열 생성 (0부터 n-1까지)
    const diceNumbers = Array.from({length: n}, (_, i) => i);

    console.log(diceNumbers);
    // A가 선택할 수 있는 모든 조합 생성
    const possibleACombinations = getCombinations(diceNumbers, half);

    let maxWinRate = 0;
    let bestChoice = [];

    // 각 조합에 대해 승률 계산
    possibleACombinations.forEach(aDice => {
        // B의 주사위는 A가 선택하지 않은 나머지
        const bDice = diceNumbers.filter(num => !aDice.includes(num));

        // A와 B의 모든 가능한 주사위 합 계산
        const aSums = getAllSumCases(aDice);
        const bSums = getAllSumCases(bDice);

        let wins = 0;
        let draws = 0;
        let total = Math.pow(6, n); // 전체 경우의 수

        // 승패 계산
        for (const [aSum, aCount] of aSums) {
            for (const [bSum, bCount] of bSums) {
                const cases = aCount * bCount;
                if (aSum > bSum) wins += cases;
                else if (aSum === bSum) draws += cases;
            }
        }

        const winRate = wins / total;

        // 최고 승률 갱신
        if (winRate > maxWinRate) {
            maxWinRate = winRate;
            bestChoice = aDice;
        }
    });

    // 주사위 번호는 1부터 시작하므로 1을 더해줌
    return bestChoice.map(x => x + 1).sort((a, b) => a - b);
}

console.log(solution2([[40, 41, 42, 43, 44, 45], [43, 43, 42, 42, 41, 41], [1, 1, 80, 80, 80, 80], [70, 70, 1, 1, 70, 70]]));