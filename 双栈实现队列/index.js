const CQueue = function () {
    this.stack1 = []; // 存储插入值
    this.stack2 = []; // 倒序stack1,为了让栈尾输出
};

CQueue.prototype.appendTail = function (value) {
    this.stack1.push(value);
};

CQueue.prototype.deleteHead = function () {
    if (this.stack2.length === 0) {
        while(this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2.length === 0 ? -1 : this.stack2.pop();
};
