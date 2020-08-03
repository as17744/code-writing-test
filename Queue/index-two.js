const Queue = function () {
    this.ready = true;
    this.func = null;
}

Queue.prototype.setReady = function (type) {
    this.ready = type;
    if (this.ready && typeof this.func === 'function') {
        this.func();
    }
}

Queue.prototype.task = function(num, func) {
    const nextQueue = new Queue();
    nextQueue.setReady(false);
    if (this.ready) {
        setTimeout(() => {
            func();
            nextQueue.setReady(true);
        }, num);
    } else {
        this.func = () => {
            setTimeout(() => {
                func();
                nextQueue.setReady(true);
            }, num);
        };
    }
    return nextQueue;
}

new Queue().task(1000, () => { console.log(1) }).task(2000, () => {console.log(2)}).task(3000, () => {console.log(3)});
