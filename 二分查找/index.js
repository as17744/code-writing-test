const search = function (nums, target) {
    let left = 0;
    let right = num.length - 1;
    let res = -1;
    while (left <= right) {
        const pivot = left + Math.floor((right - left) / 2);
        if (nums[pivot] === target) {
            res = pivot;
            break;
        }
        if (nums[pivot] < target) {
            left = pivot + 1;
        }
        if (nums[pivot] > target) {
            right = pivot - 1;
        }
    }
    return res;
}