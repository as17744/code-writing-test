const myAsync = function(fn) {
    return function (...args) {
        return new Promise((resolve) => {
            const it = fn.apply(this, args);
            const step = (gen) => {
                if (gen.done) {
                    return resolve(gen.value);
                } else {
                    return Promise.resolve(gen.value).then((res) => {
                        return step(it.next(res));
                    });
                }
            };
            step(it.next());
        });
    }
}