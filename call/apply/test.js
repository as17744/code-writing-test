Function.prototype.myCall = function (obj) {
    const args = Array.prototype.slice(arguments, 1);
    const fn = this;
    obj.fn = fn;
    obj.fn(...args);
    delete obj.fn;
}

const obj = {
    a: 478,
};
const fn = function () {
    console.log(this.a);
}
fn.call(obj);