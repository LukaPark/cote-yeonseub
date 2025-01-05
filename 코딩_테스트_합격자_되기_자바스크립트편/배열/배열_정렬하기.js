/**
 * # 배열 정렬하기 *
 * 정수 배열을 정렬해서 반환하는 함수.
 *
 * # 제약 조건
 * 1. 정수 배열의 길이는 2이상 10**5 이하
 * 2. 정수 배열의 각 데이터 값은 -100,000 이상 100,000 이하.
 *
 * # 입출력 예시
 * [1,-5,2,4,3] -> [-5,1,2,3,4]
 * [2,1,1,3,2,5,4] -> [1,1,2,2,3,4,5]
 * [6,1,7] -> [1,6,7]
 */
console.log(solution([1,-5,2,4,3]))
console.log(solution([2,1,1,3,2,5,4]))
console.log(solution([6,1,7]))
function solution(arr) {
    let result = [];

    result = arr.sort((a, b) => a - b);
    // sort() - 기존 배열을 변경
    // toSorted() - 원본 배열은 유지

    return result;
}