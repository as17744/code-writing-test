const convert = (str, numRow) => {
    const len = str.length;
    if (numRow === 1 || len <= numRow || len < 3) {
        return str;
    }
    const resList = new Array(numRow);
    let godown = true;
    let curRow = 0;
    for (let i = 0; i < len; i++) {
        resList[curRow] = resList[curRow] ? `${resList[curRow]}${str[i]}` : str[i];
        if (godown) {
            curRow++;
        } else {
            curRow--;
        }
        if (curRow === numRow - 1 || curRow === 0) {
            godown = !godown;
        } 
    }
    return resList.join('');
}
console.log(convert('LEETCODEISHIRING', 4))