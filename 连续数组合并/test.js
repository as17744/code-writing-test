const merge = function (nums) {
    let itemStartIndex = 0;
    let step = 0;
    const len = nums.length;
    const res = [];
    const pushTask = (left, right) => {
        if (left === right) {
            res.push(`${left}`);
        } else {
            res.push(`${left}->${right}`);
        }
    }
    for (let i = 0; i < len; i++) {
        if (nums[itemStartIndex] + step !== nums[i]) {
            pushTask(nums[itemStartIndex], nums[i - 1]);
            itemStartIndex = i;
            step = 0;
        }
        step++;
        if (i === len - 1) {
            pushTask(nums[itemStartIndex], nums[i]);
        }
    }
    return res;
}
console.log(merge([1,2,3,4,6,7,9,13,15]))