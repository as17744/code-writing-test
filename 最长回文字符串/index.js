const longestPalindrome = function(s) {
    const isPalindrome = (str) => {
        let len = str.length;
        let i = 0;
        let j = len - 1;
        let result = true;
        while (true) {
            if (str[i] === str[j]) {
                if (i === j || i === j - 1) {
                    break;
                }
                i++;
                j--;
            } else {
                result = false;
                break;
            }
        }
        return result;
    };
    let totalLen = s.length;
    if (totalLen < 2) {
        return s;
    }
    let returnVal = s[0];
    for (let i = 0; i < totalLen - 1; i++) {
        let cur = '';
        for (let j = totalLen - 1; j > i; j--) {
            if (s[i] === s[j]) {
                const preparedStr = s.substring(i, j + 1);
                if (isPalindrome(preparedStr)) {
                    cur = preparedStr;
                    break;
                }
            }
        }
        if (cur.length > returnVal.length) {
            returnVal = cur;
        }
    }
    return returnVal;
};


// 动态规划
const longestPalindrome2 = (s) => {
    const totalLen = s.length;
    let result = '';
    const DP = new Array(totalLen).fill(new Array(totalLen));
    for (let len = 1; len <= totalLen; len++) {
        for (let start = 0; start < totalLen; start++) {
            const end = start + len - 1;
            if (len === 1) {
                DP[start][end] = true;
            } else {
                
            }
        }
    }
};
console.log(longestPalindrome2('aaabaaaa'));