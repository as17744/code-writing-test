const lengthOfLongestSubstring = (str) => {
    const len = str.length;
    let store = {};
    let curLen = 0;
    let max = 0;
    let pointerMove = 0;
    while (pointerMove < len) {
        const target = str[pointerMove];
        if (store[target]) {
            pointerMove = +store[target] + 1; // 上一次记录位子
            const newStart = str[pointerMove];
            store = {};
            store[newStart] = `${pointerMove}`;
            curLen = 1;
        } else {
            curLen++;
        }
        store[target] = `${pointerMove}`;
        max = Math.max(curLen, max);
        pointerMove++;
    }
    return max;
}
console.log(lengthOfLongestSubstring('abbacde'));