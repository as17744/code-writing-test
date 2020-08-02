const eventBus = function () {
    this.events = {};
};

eventBus.prototype.on = function (event, fn) {
    if (this.events[event]) {
        this.events[event].push(fn);
    } else {
        this.events[event] = [];
        this.events[event].push(fn);
    }
}

eventBus.prototype.emit = function (event, ...arg) {
    const list = this.events[event];
    if (list) {
        list.forEach((fn) => {
            typeof fn === 'function' && fn(...arg);
        });
    }
};

eventBus.prototype.off = function (event, fn) {
    const list = this.events[event];
    let index = -1;
    if (list) {
        list.forEach((item, i) => {
            if (item === fn) {
                index = i;
            }
        });
    }
    if (index > -1) {
        list.splice(index, 1);
    }
}

eventBus.prototype.once = function (event, fn) {
    const realFunction = (...args) => {
        fn(...args);
        this.off(event, fn);
    }
    this.on(event, realFunction);
}
