const solution = (cards1, cards2, goal) => {
    let res = "Yes";

    for (const word of goal) {
        if (cards1[0] === word) {
            cards1 = cards1.slice(1);
        } else if (cards2[0] === word) {
            cards2 = cards2.slice(1);
        } else {
            res = "No";
            break;
        }
    };
    return res;
};

console.log(solution(['i', 'drink', 'water'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water']));