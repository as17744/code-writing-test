Promise.all = function (list) {
    return new Promise((resolve, reject) => {
        const len = list.length;
        let count = 0;
        const task = (item, index) => {
            if (item && typeof item === 'object' && item instanceof Promise) {
                if (item._state === 1) {
                    // 结果返回
                    return task(item._val, index);
                }
                if (item._state === 2) {
                    // 失败
                    reject(item._val);
                }
                item().then((val) => {
                    task(val, index);
                }, reject);
                return;
            }
            count++;
            res[index] = item;
            if (count === len) {
                resolve(res);
            }
        };
        for (let i = 0; i < len; i++) {
            task(list[i], i);
        }
    });
}