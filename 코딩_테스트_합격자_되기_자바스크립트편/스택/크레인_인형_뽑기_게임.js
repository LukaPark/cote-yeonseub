const solution = (board, moves) => {
    let removeCnt = 0;
    const n = board.length;
    const basket = [];

    const temp = Array.from({ length: n }, ()=> new Array(n).fill(Array.from({ length: n }).fill(0)));

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            temp[j][n-i-1] = board[i][j];
        }
    }
    const realBoard = temp.map(line => line.filter(num => num));

    moves.forEach((move) => {
        const idx = move-1;
        const targetBasket = realBoard[idx];
        let target;


        if (targetBasket.length > 0) {
            target = targetBasket.pop();

            if (basket.length > 0) {
                const top = basket[basket.length - 1];

                if (top === target) {
                    basket.pop();
                    removeCnt += 2;
                } else {
                    basket.push(target);
                }
            } else {
                basket.push(target);
            }
        }
    })

    return removeCnt;
}


const board = [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,2,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1],
]

// 0,0 -> 0, 4
// 0,1 -> 1, 4
// 3,0 -> 0, 2
const moves = [1,5,3,5,1,2,1,4];

console.log(solution(board, moves));
