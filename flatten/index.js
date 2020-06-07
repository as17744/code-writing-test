const flatten = function(array) {
    const isArray = (val) => Object.prototype.toString.call(val) === '[object Array]';
    const result = [];
    if (!isArray(array)) {
        return result;
    }
    array.forEach((item) => {
        if (isArray(item)) {
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    });
    return result;
}

console.log(flatten([1, 3, 4, [7, 8, 9], [10, 11, [12, 13]], 100, []]));