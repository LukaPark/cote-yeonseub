/**
 * 실패율: 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어의 수
 * 전체 스테이지 개수 -> N
 * 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 -> stages
 *
 * 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨 있는 배열을 반환하는 함수.
 */
function solution(N, stages) {
    const fails = {};

    for (let i = 0; i < N; i++) {
        const targetLength = stages.filter(stage => stage > i).length;
        const failedCount = stages.filter(stage => stage === i+1).length;

        fails[i+1] = failedCount / targetLength;
    }

    const res = Object.entries(fails).sort((a, b) => b[1] - a[1])

    return res.map((v) => Number(v[0]));
}

console.log(solution(5, [2,1,2,6,2,4,3,3]));