const solution = (id_list, reports, k) => {
    const alertMap = {};

    id_list.map(uid => {
        alertMap[uid] = 0;
    })

    const map = new Map();

    reports.map(report => {
        const split = report.split(' ');

        if (map.has(split[1])) {
            if (map.get(split[1]).reporters.includes(split[0])) return;

            map.get(split[1]).reportCount++;
            map.get(split[1]).reporters.push(split[0]);
        } else {
            const item = {
                reportCount: 1,
                reporters: [split[0]],
            }

            map.set(split[1], item);
        }
    })

    console.log(map);

    for (let entry of map.entries()) {
        const items = entry[1];

        if (items.reportCount >= k) {
            items.reporters.map(reporter => {
                alertMap[reporter]++;
            })
        }
    }

    return Object.values(alertMap);
}

console.log(solution(['muzi', 'frodo','apeach', 'neo'], ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'], 2));

console.log(solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3));