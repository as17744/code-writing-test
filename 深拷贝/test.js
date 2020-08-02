const deepCopy = function(data) {
    if (data === null || (typeof data !== 'object' && typeof data !== 'function')) {
        return data;
    }
    let res = null;
    const type = Object.prototype.toString.call(data);
    if (type === '[object Array]') {
        res = [];
        data.forEach((item) => {
            res.push(deepCopy(item));
        });
    }
    if (type === '[object Object]') {
        res = {};
        for (key in data) {
            if (data.hasOwnProperty(key)) {
                res[key] = deepCopy(data[key]);
            }
        }
    }
    if (type === '[object Function]') {
        res = new Function(`return ${data.toString()}`)();
    }
    return res;
}

const example = {
    a: 1,
    b: 2,
    c: 3,
    d: {
        e: 4,
        f: 5,
        g: {
            h: 6,
        }
    },
    i: {
        j: 7,
    },
    k: [{}, [], 123, { bbb: 222 }],
    l: null,
    m: undefined,
    n: function() {
        console.log(9);
    },
};

console.log(deepCopy(example));
console.log(deepCopy(example) === example);
deepCopy(example).n();