const curry = function (fn) {
    return function curried (...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}

const add = (num1, num2, num3) => {
    return (num1 + num2 + num3);
};

const curryAdd = curry(add);
console.log(curryAdd(1)(9)(7))