const solution = (arr) => {
    let answer = [];
    let prev = null;

    arr.map(num => {
        if (num !== prev) answer.push(num);
        prev = num;
    })

    return answer;
};

console.log(solution([1,1,3,3,0,1,1]))