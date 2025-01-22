const solution = (want, number, discount) => {
    const wannaMap = {};
    let cnt = 0;
    for (let i = 0; i < want.length; i++) {
        wannaMap[want[i]] = number[i];
    }

    for (let i = 0; i < discount.length - 9; i++) {
        let replica = {...wannaMap};

        for (let j = 0; j < 10; j++) {
            if (replica[discount[j+i]] > 0) {
                replica[discount[j+i]]--;
            } else {
                replica = {...wannaMap};
            }
        }

        console.log(replica);
        if (Math.max(...Object.values(replica)) === 0) {
            cnt++;
        }
    }


    return cnt;
}

console.log(solution(
    ['banana', 'apple', 'rice', 'pork', 'pot'],
    [3,2,2,2,1],
    [
        'chicken', 'apple', 'apple', 'banana', 'rice',
        'apple', 'pork', 'banana', 'pork', 'rice',
        'pot', 'banana', 'apple', 'banana'
    ]
))