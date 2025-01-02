// 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
//
// 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
// 고른 수열은 오름차순이어야 한다.
main(4, 2);

function main(n, m) {
    const targetArray = Array.from({ length: n }, (_,i) => i+1);

    // 조합을 구하는 함수
    function getCombinations(arr, targetLength) {
        let result = [];
        // 재귀의 마지막 부분, 목표 길이가 1인 경우 에는, 전달 받은 리스트를 순회하며 각 숫자를 하나의 배열로 반환.
        if (targetLength === 1) return arr.map((el) => [el]);

        // arr에서 제일 앞 숫자는 고정하고, 나머지를 다시 조합.
        arr.forEach((fixed, idx, origin) => {
            // 고정할 숫자를 제외한 배열의 나머지
            const rest = origin.slice(idx+1);
            // 목표 길이를 - 1
            const combinations = getCombinations(rest, targetLength-1);
            // 만들어진 조합을 고정 숫자와 다시 합치기.
            const attached = combinations.map((combination) => [fixed, ...combination]);
            // 결과를 배열의 값만 모으기
            result.push(...attached);
        })

        return result;
    }
    const res = getCombinations(targetArray, m)

    res.forEach((el) => {
        console.log(el.join(' '));
    })
}