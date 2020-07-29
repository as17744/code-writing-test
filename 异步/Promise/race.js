Promise.race = function (list) {
    return new Promise ((resolve, reject) => {
        list.forEach((item) => {
            Promise.resolve(item).then(resolve, reject);
        })
    });
}