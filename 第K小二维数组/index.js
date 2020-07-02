const matrix = [[1,5,9],[10,11,13],[12,13,15]];


// 方法1，暴力铺平
 const kthSmallest = function(matrix, k) {
    const flatten = (array) => {
        const result = [];
        let len = array.length;
        for (let i = 0; i < len; i++) {
            result.push(...array[i]);
        }
        return result;
    };
    const temp = flatten(matrix).sort((a, b) => a - b);
    return temp[k - 1];
};

// 方法2，归并算法
const kthSmallest2 = function(matrix, k) {
    const merge = (left, right) => {
        const res = [];
        let i = 0;
        let j = 0;
        const leftLen = left.length;
        const rightLen = right.length;
        while (i < leftLen && j < rightLen) {
            if (left[i] < right[j]) {
                res.push(left[i]);
                i++;
            } else {
                res.push(right[j]);
                j++;
            }
        }
        while (i < leftLen) {
            res.push(left[i]);
            i++;
        }
        while (j < rightLen) {
            res.push(right[j]);
            j++;
        }
        return res;
    };
    const mix = matrix.reduce((a, b) => merge(a, b));
    return mix[k - 1];
}
// console.log(kthSmallest(matrix, 8));
// 暴力铺平无论性能还是内存都优于归并算法