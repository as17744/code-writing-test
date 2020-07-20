Function.prototype.myCall = function (fn) {
    fn.func = this;
    const args = [].slice.call(arguments, 1);
    fn.func(...args);
    delete fn.func;
};

const a = function () {
    console.log(this.name);
}

const obj = {name: 'bbb'};

a.myCall(obj);
