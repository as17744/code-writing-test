const flatten = function (array) {
    const res = [];
    array.forEach((item) => {
        if (typeof item === 'number') {
            res.push(item);
        } else {
            res.push(...flatten(item));
        }
    });
    return res;
}
console.log(flatten([1, [2, 3, [4, 5, 6]], 8 ,9 , [10, 19]]))
