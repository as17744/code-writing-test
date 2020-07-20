Function.prototype.myBind = function(context) {
    const args = [].slice.call(arguments, 1);
    const self = this;
    return function () {
        return self.apply(context, args.concat([].slice.call(arguments)));
    };
};