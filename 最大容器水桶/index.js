const maxArea = (height) => {
    const len = height.length;
    let start = 0;
    let end = len - 1;
    let res = 0;
    while (start < end) {
        const left = height[start];
        const right = height[end];
        res = Math.max((end - start) * (Math.min(left, right)), res);
        if (left <= right) {
            start++;
        } else {
            end--;
        }
    }
    return res;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
