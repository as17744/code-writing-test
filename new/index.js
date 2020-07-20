const myNew = function (func) {
    const obj = Object.create(func.prototype);
    const args = [].slice.call(arguments, 1);
    const res = func.apply(obj, args);
    return typeof res === 'object' ? res : obj;
}

const aa = function (name, age) {
    this.name = name;
    this.age = age;
}

aa.prototype.add = function (num) {
    this.age = this.age + num;
}

const a = myNew(aa, 'ahh', 13);
a.add(10);

console.log(a.age)