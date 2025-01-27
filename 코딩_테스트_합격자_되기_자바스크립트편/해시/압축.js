function solution(msg) {
    const result = [];
    const dict = {};
    let message = msg;

    Array.from({ length: 26 }).map((_, idx) => {
        const key = String.fromCharCode('A'.charCodeAt(0)+idx);
        dict[key] = idx+1;
    })

    while(message.length > 0) {
        const idx = 0;
        let w = message.at(idx);

        let cnt = 1;

        while (dict[w]) {
            console.log(cnt);
            if (idx+cnt >= message.length) break;
            w = w.concat(message.at(idx+cnt))
            console.log(w);
            cnt++;
        }

        dict[w]=Object.keys(dict).length + 1;

        result.push(dict[w]);

        message = message.slice(1);
    }

    return result;
}

console.log(solution('KAKAO'));