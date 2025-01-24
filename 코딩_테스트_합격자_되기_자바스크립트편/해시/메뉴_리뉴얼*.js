const solution = (orders, courses) => {
    const result = [];

    for (let i = 0; i < courses.length; i++) {
        const targetLength = courses[i];
        const targetOrders = orders.filter(order => order.length >= targetLength);
        const menu = [];

        for (let j = 0; j < targetOrders.length; j++) {
            const menus = targetOrders[j].split('').sort();
            const comb = combinations(menus, targetLength);
            menu.push(...comb);
        }

        const bestMenus = {};
        for (const m of menu) {
            const key = m.join('');
            bestMenus[key] = (bestMenus[key] || 0) + 1;
        }

        const max = Math.max(...Object.values(bestMenus));

        if (max > 1) {
            for (const [key, value] of Object.entries(bestMenus)) {
                if (value === max) {
                    result.push(key);
                }
            }
        }
    }

    return result.sort();
};

function combinations(arr, n) {
    // 1개만 뽑는다면 그대로 조합을 반환하며, 탈출 조건으로 사용
    if (n === 1) return arr.map(v => [v]);
    const result = [];

    arr.forEach((fixed, idx, arr) => {
        // 현재 index 이후 요소를 추출
        // index번째는 선택된 요소
        const rest = arr.slice(idx+1);
        // 선택된 요소 이전 요소들을 제외하고 재귀 호출
        const combis = combinations(rest, n-1);
        // 선택된 요소와 재귀 호출을 통해 구한 조합을 합침.
        const combine = combis.map((v) => [fixed, ...v]);
        // 결과 값을 추가.
        result.push(...combine);
    })

    // 결과 반환
    return result;
}

console.log(
    solution(
        ['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'],
        [2,3,4]
    )
)