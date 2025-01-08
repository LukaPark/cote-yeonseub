/**
 * U: 위쪽
 * D: 아래
 * R: 오른쪽
 * L: 왼쪽
 */
// dirs: string
function solution(dirs) {
    const res = 0;
    let startPoint = [0, 0];

    const ways = new Set();

    dirs.split('').forEach((str) => {
        let x =startPoint[0];
        let y =startPoint[1];

        switch (str) {
            case 'U':
                if (y < 5) {
                    y += 1;
                }
                break;
            case 'D':
                if (y > -5) {
                    y -= 1;
                }
                break;
            case 'R':
                if (x < 5) {
                    x += 1;
                }
                break;
            case 'L':
                if (x > -5) {
                    x -= 1;
                }
                break;
        }
        if (startPoint[0] !== x || startPoint[1] !== y) {
            const path = `${startPoint[0]+x}, ${startPoint[1]+y}`
            ways.add(path);
        }
        startPoint = [x, y];
    })

    // [0, 0] [-1, 0]
    // [-1, 0] [0, 0] -> [-1, 0]

    // [0,0]
    // [0,1]
    return ways.size;
}

console.log(solution('ULURRDLLU'));
console.log(solution('LULLLLLLU'));