const myAsync = function (fn) {
    return function (...args) {
        return new Promise((resolve) => {
            const it = fn.apply(this, args);
            const step = (gen) => {
                if (gen.done) {
                    return resolve(gen.value);
                } else {
                    Promise.resolve(gen.value).then((res) => {
                        step(it.next(res));
                    });
                }
            };
            step(it.next());
        });
    }
}

function pp() {
    return new Promise((resolve) => {
        // console.log(1);
        resolve(1);
    });
};
function dd() {
    return new Promise((resolve) => {
        // console.log(1);
        resolve(2);
    });
};

const bb = myAsync(function*() {
    const p = yield pp();
    const d = yield dd();
    console.log(p);
    console.log(d);
});


bb();