// 暴力操作
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

const lengthOfLongestSubstring2 = (str) => {
    let result = 0;
    let pointer = 0;
    const len = str.length;
    if (len < 2) {
        return str;
    }
    const store = {};
    for (let i = 0; i < len; i++) {
        if (i > 0) {
            if (str[i - 1] !== str[i]) {
                store[str[i - 1]] = false;
            }
            if (pointer === i) {
                pointer++;
            }
        }
        while (!store[str[pointer]] && pointer < len) {
            store[str[pointer]] = true;
            pointer++;
        }
        result = Math.max(result, pointer - i);
    }
    return result;
};

console.log(lengthOfLongestSubstring2('bd'));