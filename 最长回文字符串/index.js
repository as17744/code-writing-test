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
    const DP = new Array(totalLen);
    for (let k = 0; k < totalLen; k++) {
        DP[k] = new Array(totalLen);
    }
    for (let len = 1; len <= totalLen; len++) {
        for (let start = 0; start < totalLen; start++) {
            const end = start + len - 1;
            if (len === 1) {
                DP[start][end] = true;
            } else if (len === 2) {
                DP[start][end] = s[start] === s[end];
            } else {
                DP[start][end] = s[start] === s[end] && DP[start + 1][end - 1];
            }
            if (DP[start][end] && len > result.length) {
                result = s.substring(start, end + 1);
            }
        }
    }
    return result;
};

// 中心扩散
const longestPalindrome3 = (s) => {
    const len = s.length;
    if (len < 2) {
        return s;
    }
    const expand = (left, right) => {
        while (left >= 0 && right <= len -1 && s[left] === s[right]) {
            left--;
            right++;
        }
        return {
            left: left + 1,
            right: right - 1,
            len: (right - left - 1),
        }
    };
    let result = '';
    for (let i = 0; i < len; i++) {
        let target = null;
        const obj1 = expand(i, i);
        const obj2 = expand(i, i + 1);
        target = obj1.len > obj2.len ? obj1 : obj2;
        if (target.len > result.length) {
            result = s.substring(target.left, target.right + 1);
        }
    }
    return result;
};
console.log(longestPalindrome3('aaabaaaaa'));