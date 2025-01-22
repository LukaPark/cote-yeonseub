const solution = (arr, target) => {
    let res = false;

    for (let i = 0; i < arr.length; i++) {
        const diff = target - arr[i];
        if (diff < 0 || diff === arr[i]) {
            continue;
        }
        if (arr.includes(diff)) {
            res = true;
            break;
        }
    }

    return res;
};

console.log(solutionWithHash([1,2,3,4,8], 6));
console.log(solutionWithHash([2,5,6,9], 10));

// 계수 정렬을 알고리즘을 사용해 뱌욜 arr에서 문제에서 요구한 target을 찾는 함수
function countSort(arr, k) {
    // 해시테이블 생성 및 초기화
    const hashTable = new Array(k + 1).fill(0);

    for (const count of arr) {
        // 현재 원소의 값이 k 이하인 경우만 처리.
        if (count <= k) {
            // 현재 원소의 값을 인덱스로 하고, 해당 인덱스의 값을 1로 설정
            hashTable[count] = 1;
        }
    }

    return hashTable;
}

function solutionWithHash (arr, target) {
    const hashTable = countSort(arr, target);

    for (const num of arr) {
        const complement = target - num;
        // target에서 현재 원소를 뺀 값이 해시테이블에 있는지 확인.
        if (complement !== num && complement >= 0 && complement <= target && hashTable[complement] === 1) {
            return true;
        }
    }

    return false;
}