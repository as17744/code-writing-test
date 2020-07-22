const myAsync = function (fn) {
    return function () {
        return new Promise((resolve) => {
            const it = fn(...arguments);
            const step = (gen) => {
                if (gen.done) {
                    return resolve(gen.value);
                } else {
                    Promise.resolve(gen.value).then((value) => {
                        step(it.next(value)); 
                    });
                }
            };
            step(it.next());
        });
    };
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