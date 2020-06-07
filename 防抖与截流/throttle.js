// 截流
const throttle = function(func, wait) { 
    let allow = true;
    return function () {
        if (allow) {
            allow = false;
            setTimeout(() => {
                allow = true;
                func(...arguments);
            }, wait);
        }
    }
}