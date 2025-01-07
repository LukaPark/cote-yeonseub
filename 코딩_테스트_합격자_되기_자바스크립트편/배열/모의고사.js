// 1번 -> 1234512345...
// 2번 -> 2123242521232425...
// 3번 -> 33112244553311224455...

function solution(answers) {
    const answerList = [1,2,3,4,5];
    const answerList2 = [1,3,4,5];
    const answerList3 = [3,3,1,1,2,2,4,4,5,5];

    const first = [];
    const second = []
    const third = [];

    answers.forEach((num, idx) => {
        const f_answer = answerList[idx%5]
        const s_answer = idx % 2 === 0 ? 2 :answerList2[Math.floor(Math.abs(idx/2))%4]

        if (f_answer === num) first.push(num);
        if (s_answer === num) second.push(num);
        if (answerList3[idx%10] === num) third.push(num);
    })
    const res = [first.length, second.length, third.length];
    const Maxlength = Math.max(...res);
    const result = [];

    res.forEach((val, idx) => {
        if (Maxlength === val) {
            result.push(idx+1);
        }
    })

    return result;
}

console.log(solution([1,2,3,4,5]));
console.log(solution([1,3,2,4,2]));