const bigNumAdd = function (num1, num2) {
    const len1 = num1.length;
    const len2 = num2.length;
    const len = Math.max(len1, len2);
    let res = '';
    let advance = 0;
    for (let i = len - 1; i >= 0; i--) {
        const i1 = i - (len - len1);
        const i2 = i - (len - len2);
        const sum = (num1[i1] ? +num1[i1] : 0) + (num2[i2] ? +num2[i2] : 0) + advance;
        res = `${sum % 10}${res}`;
        advance = Math.floor(sum / 10);
    }
    if (advance > 0) {
        res = `${advance}${res}`;
    }
    return res;
}