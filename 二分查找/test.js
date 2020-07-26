const search = function (array, target) {
    let res = -1;
    let left = 0;
    let right = array.length - 1;
    while (right >= left) {
        const pivot = left + Math.floor((right - left) / 2);
        const cur = array[pivot];
        if (cur === target) {
            res = pivot;
            break;
        }
        if (cur > target) {
            right = pivot - 1;
        }
        if (cur < target) {
            left = pivot + 1;
        }
    }
    return res;
}
console.log(search([1, 2, 45, 77, 89, 100, 121, 130], 99));
