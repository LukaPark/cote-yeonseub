function solution(arr) {
    const set = [...(new Set(arr))];

    return set.sort((a, b) => b - a);
}

console.log(solution([4,2,2,1,3,4]))
console.log(solution([2,1,1,3,2,5,4]))