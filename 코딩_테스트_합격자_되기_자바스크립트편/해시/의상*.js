// function solution(clothes) {
//     let result = [];
//     const strings = clothes.map(cloth => cloth[0]+' '+cloth[1]);
//     const maxSize = new Set(clothes.map(cloth => cloth[1])).size;
//
//     if (maxSize === 1) {
//         return clothes.length;
//     }
//
//     for (let i = 2; i <= maxSize; i++) {
//         const combination = getCombination(strings, i);
//         result.push(...combination);
//     }
//
//     result = result.filter(res => {
//         const map = {};
//         res.forEach(string => {
//             const category = string.split(' ')[1];
//             map[category] = (map[category] || 0) + 1;
//         })
//
//         return Math.max(...Object.values(map)) === 1;
//     })
//
//     // console.log(result);
//
//     return result.length + clothes.length;
// }
//
// function getCombination(arr, n) {
//     if (n === 1) return arr.map(v => [v]);
//     const result = [];
//
//     arr.forEach((fixed, idx, arr) => {
//         const rest = arr.slice(idx+1);
//
//         const combis = getCombination(rest, n-1);
//
//         const combine = combis.map(comb => [fixed, ...comb]);
//
//         result.push(...combine);
//     })
//
//     return result;
// }

function solution(clothes) {
    const clothesByCategory = {};

    // 의류를 카테고리별로 분류
    clothes.forEach(([name, category]) => {
        clothesByCategory[category] = (clothesByCategory[category] || []).concat(name);
    });

    // 각 카테고리의 조합 수 계산
    const categorySizes = Object.keys(clothesByCategory).map(
        category => clothesByCategory[category].length
    );

    // 조합 계산
    const totalCombinations = categorySizes.reduce((acc, size) => acc * (size + 1), 1) - 1;

    return totalCombinations;
}


console.log(
    solution([
        ['yellow_hat', 'headgear'],
        ['yellow_hat2', 'headgear'],
        ['blue_sunglasses', 'eyewear'],
        ['blue_sunglasses1', 'eyewear'],
        ['green_turban', 'headgear'],
        ['green_turban2', 'headgear2'],
        ['green_turban3', 'headgear3'],
    ])
)
// console.log(
//     solution(
//         [["a", "A"], ["b", "B"], ["c", "C"], ["d", "D"], ["e", "E"], ["f", "F"], ["g", "G"], ["h", "H"], ["i", "I"], ["j", "J"], ["k", "K"], ["l", "L"], ["m", "M"], ["n", "N"], ["o", "O"], ["p", "P"], ["q", "Q"], ["r", "R"], ["s", "S"], ["t", "T"], ["u", "U"], ["v", "V"], ["w", "W"], ["x", "X"], ["y", "Y"], ["z", "Z"], ["ab", "AB"], ["ac", "AC"], ["ad", "AD"], ["ae", "AE"]]
//     )
// )
// 1073741823