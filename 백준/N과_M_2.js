// 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
//
// 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
// 고른 수열은 오름차순이어야 한다.
main(4, 2);

function main(n, m) {
    const targetArray = Array.from({ length: n }, (_,i) => i+1);

    function getCombinations(arr, targetLength) {
        let result = [];
        if (targetLength === 1) return arr.map((el) => [el]);

        arr.forEach((fixed, idx, origin) => {
            const rest = origin.slice(idx+1);
            const combinations = getCombinations(rest, targetLength-1);
            const attached = combinations.map((combination) => [fixed, ...combination]);
            result.push(...attached);
        })

        return result;
    }
    const res = getCombinations(targetArray, m)

    res.forEach((el) => {
        console.log(el.join(' '));
    })
}