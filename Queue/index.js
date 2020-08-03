const Queue = function () {
    this.onTask = false;
    this.funcList = [];
    this.timeList = [];
}

Queue.prototype.exec = function () {
    if (!this.onTask && this.timeList.length > 0 && this.funcList.length > 0) {
        const curTime = this.timeList.shift();
        const curFunc = this.funcList.shift();
        this.onTask = true;
        setTimeout(() => {
            curFunc();
            this.onTask = false;
            this.exec();
        }, curTime);
    }
}

Queue.prototype.task = function (time, func) {
    this.funcList.push(func);
    this.timeList.push(time);
    this.exec();
    return this;
}

new Queue().task(1000, () => { console.log(1) }).task(2000, () => { console.log(2) }).task(3000, () => { console.log(3) });

