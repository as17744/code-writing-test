const maxSubArray = function (nums) {
    let pre = 0;
    let max = nums[0];
    nums.forEach((item) => {
        pre = Math.max(item + pre, item);
        max = Math.max(max, pre);
    })
    return max;
}