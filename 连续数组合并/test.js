const merge = function (array) {
    let len = array.length;
    if (len < 1) {
        return array;
    }
    let step = 0;
    let itemStartIndex = 0;
    const res = [];
    const pushAction = (left, right) => {
        if (left === right) {
            res.push(`${right}`);
        } else {
            res.push(`${left}->${right}`);
        }
    }
    for (let i = 0; i < len; i++) {
        if (array[itemStartIndex] + step !== array[i]) {
            pushAction(array[itemStartIndex], array[i - 1]);
            itemStartIndex = i;
            step = 0;
        }
        step++;
        if (i + 1 === len) {
            pushAction(array[itemStartIndex], array[i]);
        }
    }
    return res;
}
console.log(merge([1,2,3,4,6,7,9,13,15]))