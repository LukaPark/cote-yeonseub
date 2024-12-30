// 정방향 별찍기
const main = (n) => {
    Array.from({ length: n }).forEach((_, i) => {
        let str = "";
        Array.from({ length: i+1 }).forEach((_, j) => {
            str += '*';
        })
        console.log(str)
    })
};

// 역방향 별찍기
const reverse = (n) => {
    Array.from({ length: n }).forEach((_, i) => {
        let str = '';
        for (let j = n; j > i; j--) {
            str += '*';
        }
        console.log(str);
    })
}

// 좌우 대칭 별찍기.
const rotateX = (n) => {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= n; j++) {
            if (i+j > n) {
                str += '*';
            } else {
                str += ' ';
            }
        }
        console.log(str)
    }
}

// 상하좌우대칭 별찍기
const rotateXY = (n) => {
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <=n; j++) {
            if (j >= i) {
                str += '*'
            } else {
                str += ' '
            }
        }
        console.log(str);
    }
}

main(5);
reverse(5);
rotateX(5)
rotateXY(5);
