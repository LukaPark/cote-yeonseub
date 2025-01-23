class Node {
    constructor(params) {
        this.index = params.index;
        this.plays = params.plays;
    }
}

class Genre {
    constructor(params) {
        this.total = params.plays;
        this.items = params.items;
    }

    add(node) {
        this.total += node.plays;
        this.items.push(node);
    }

    getTop2() {
        const res = this.items.sort((a, b) => b.plays - a.plays);

        return res.slice(0, 2);
    }
}

const solution = (genres, plays) => {
    const result = [];
    const map = {};

    genres.forEach((genre, idx) => {
        const newNode = new Node({
            index: idx,
            plays: plays[idx]
        });

        if (map[genre]) {
            map[genre].add(newNode);
        } else {
            map[genre] = new Genre({
                plays: plays[idx],
                items: [newNode],
            });
        }
    });
    const sortedMapArray = Object.values(map).sort((a, b) => b.total - a.total);

    sortedMapArray.forEach(genre => {
        result.push(...genre.getTop2().map(node => node.index));
    })

    return result;
}

const bookSolution = (genres, plays) => {
    let answer = [];
    const genreObj = {};
    const playObj = {};

    // 1. 장르별 총 재생 횟수와 각 곡의 재생 횟수 저장
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];

        if (!(genre in genreObj)) {
            genreObj[genre] = [];
            playObj[genre] = 0;
        }

        genreObj[genre].push([i, play]);
        playObj[genre] += play;
    }

    // 2. 총 재생 횟수가 많은 장르 순으로 정렬
    const sortedGenres = Object.keys(playObj).sort((a, b) => {
        return playObj[b] - playObj[a];
    });

    // 3. 각 장르 내에서 노래를 재생 횟수 순으로 정렬해 최대 2곡까지 선택
    for (const genre of sortedGenres) {
        const sortedSongs = genreObj[genre].sort((a, b) => {
            return a[1] === b[1] ? a[0] - b[0] : b[1] - a[1];
        });

        answer.push(...sortedSongs.slice(0, 2).map(song => song[0]));
    }

    return answer;
}

console.log(bookSolution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500]))