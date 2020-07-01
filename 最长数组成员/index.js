const findLength = (A, B) => {
    let res = 0;
    const lenA = A.length;
    const lenB = B.length;
    const DP = new Array(lenA);
    const lenDP = DP.length;
    for (let m = 0; m < lenDP; m++) {
        DP[m] = new Array(lenB);
    }
    for (let i = 0; i < lenA; i++ ) {
        for (let j = 0; j < lenB; j++) {
            let last = 0;
            if (i > 0 && j > 0) {
                last = DP[i - 1][j - 1] || 0;
            }
            if (A[i] === B[j]) {
                DP[i][j] = last + 1;
                res = Math.max(res, DP[i][j]);
            }
        }
    }
    return res;
};

console.log(findLength([1, 0, 0, 0, 0], [0, 0, 0, 0, 0]));
