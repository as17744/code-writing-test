Promise.finally = function(fn) {
    return this.then(() => {
        Promise.resolve(fn()).then((val) => {
            return val;
        });
    }, () => {
        Promise.resolve(fn()).then((err) => {
            throw err;
        });
    });
}