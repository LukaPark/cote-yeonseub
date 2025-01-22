const solution = (logs) => {
    const nameMap = new Map();
    const result = [];

    for (const log of logs) {
        const [action, uid, name] = log.split(' ');

        if (action !== 'Leave') nameMap.set(uid, name);
    }

    for (const log of logs) {
        const [action, uid, _] = log.split(' ');

        let action_msg  = '';

        if (action === 'Enter') {
            action_msg = '님이 들어왔습니다.';
        } else if (action === 'Leave') {
            action_msg = '님이 나갔습니다.';
        }
        if (action_msg) result.push(`${nameMap.get(uid)}${action_msg}`);
    }

    return result;
};

console.log(solution(
    ['Enter uid1234 Muzi', 'Enter uid4567 Prodo', 'Leave uid1234', 'Enter uid1234 Prodo', 'Change uid4567 Ryan'],
));
// ['Prodo님이 들어왔습니다.', 'Ryan님이 들어왔습니다.', 'Prodo님이 나갔습니다.', 'Prodo님이 들어왔습니다.']