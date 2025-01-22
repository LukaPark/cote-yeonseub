const solution = (participants, completion) => {
    const obj = {};
    participants.map(participant => {
        obj[participant] = obj[participant] ? obj[participant]+1 : 1;
    })

    completion.map(name => {
        obj[name]--;
    })

    for (const key in obj) {
        if (obj[key] > 0) return key;
    }
};

const polynomialHash= (arr, str) => {
    const p = 31;
    const m = arr.length;
    let hashValue = 0;

    for (let i = 0; i < str.length; i++) {
        hashValue = (hashValue * p + str.charCodeAt(i)) % m;
    }

    return hashValue;
}

const solution2 = (_, $) => _.find(
        _ => !$[_]--, $.map(_ => $[_] = ($[_] | 0) + 1)
    )

console.log(solution2(['leo', 'kiki', 'eden'], ['eden', 'kiki']));