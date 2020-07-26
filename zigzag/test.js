const zigzag = function (str, lines) {
    const len = str.length;
    if (len < 3 || lines >= len || lines === 1) {
        return str;
    }
    let goDown = true;
    let curColumn = 0;
    const resList = new Array(lines);
    for (let i = 0; i < len; i++) {
        resList[curColumn] = resList[curColumn] ? `${resList[curColumn]}${str[i]}` : str[i];
        curColumn = goDown ? curColumn + 1 : curColumn - 1;
        if (curColumn === 0 || curColumn === lines - 1) {
            goDown = !goDown;
        }
    }
    return resList.join('');
}
console.log(zigzag('LEETCODEISHIRING', 4))