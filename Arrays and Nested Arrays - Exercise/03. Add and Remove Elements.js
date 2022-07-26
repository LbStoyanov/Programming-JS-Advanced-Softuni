function solve(commands) {
    let result = [];
    for (let i = 0, len = commands.length; i < len; i++) {
        let currentCommand = commands[i];
        if (currentCommand === 'add') {
            result.push(i + 1)
        }else {
            result.pop();
        }
    }

    if (result.length === 0) {
        return 'Empty';
    }
    return result.join('\n');
}

solve(["add", "add", "add", "add"]);
