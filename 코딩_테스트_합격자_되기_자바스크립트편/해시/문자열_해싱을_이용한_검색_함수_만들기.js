const solution = (stringList, queryList) => {
    // stringList의 각 문자열에 대해 다항 해시값을 계산
    const hashList = stringList.map(str => polynomialHash(str));

    // queryList의 각 문자열이 stringList에 있는지 확인.
    const result = [];

    for (const query of queryList) {
        const queryHash = polynomialHash(query);

        if (hashList.includes(queryHash)) {
            result.push(true);
        } else {
            result.push(false);
        }
    }

    return result;
}

const polynomialHash = (str) => {
    const p = 31; // 소수
    const m = 1_000_000_007; // 버킷의 크기

    let hashValue = 0;

    for (let i = 0; i < str.length; i++) {
        hashValue = (hashValue * p + str.charCodeAt(i)) % m;
    }

    return hashValue;
};

console.log(solution(['apple', 'banana', 'cherry'], ['banana', 'kiwi', 'melon', 'apple']));