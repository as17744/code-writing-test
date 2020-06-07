// 防抖
const debounce = function (func, wait) {
    let timeout = null;
    return function () {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            func(...arguments);
            timeout = null;
        }, wait);
    }
};