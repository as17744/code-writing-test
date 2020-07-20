const subCurry = function (fn) {
    const args = [].slice.call(arguments, 1);
    return function () {
        return fn.apply(this, args.concat([].slice.call(arguments)));
    };
};

const curry = function (fn) {
    const len = fn.length;
    const curArgs = [].slice.call(arguments, 1);
    let args = [];
    const subCurry = function () {
        if (args.length + arguments.length >= len) {
            return fn.apply(this, args.concat([].slice.call(arguments)));
        } else {
            args = args.concat([].slice.call(arguments));
            return subCurry;
        }
    }
    if (curArgs.length < len) {
        args = args.concat(curArgs);
        return subCurry;
    }
    return function () {
        return fn.apply(this, curArgs); 
    };
}

const add = (num1, num2, num3) => {
    return (num1 + num2 + num3);
};

const curryAdd = curry(add);
console.log(curryAdd(1)(9)(7))