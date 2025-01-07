/**
 * 2차원 행력 arr1, arr2를 입력받아 arr1에 arr2를 곱한 결과를 반환하는 함수
 * @param arr1
 * @param arr2
 */

function solution(arr1, arr2) {
    const r1 = arr1.length;
    const c1 = arr1[0].length;

    const c2 = arr2[0].length;

    let res = Array.from({length: r1}, () => Array.from({ length: c2 }).fill(0));

    for (let i = 0; i < r1; i++) {
        for (let j = 0; j < c2; j++) {
            for (let k = 0; k < c1; k++) {
                res[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }

    return res;
}

console.log(solution([[1,4], [3,2], [4,1]], [[3,3], [3,3]]));

/**
 *  1(0,0), 4(0,1)      3(0,0) 3(0,1)
 *  3(1,0), 2(1,1)      3(1,0) 3(1,1)
 *  4(2,0), 1(2,1)
 */
/**
 *  (1*3)+(4*3) / (1*3)+(4*3)
 *  (3*3)+(2*3) / (3*3)+(2*3)
 *  (4*3)+(1*3) / (4*3)+(1*3)
 *
 *  [[15 15], [15 15], [15 15]]
 */