// 不用parseInt
var myAtoi = function(str) {
    str = str.trim();    
    const len = str.length;
    const resArray = [];
    let pointer = 0;
    const min = -Math.pow(2 ,31);
    const max = Math.pow(2, 31) - 1;
    let crementIcon = false;
    let pointIcon = false;
    while(pointer < len) {
        const cur = str[pointer].trim();
        if ((cur === '-' || cur === '+') && crementIcon) {
            break;
        }
        if ((!cur || isNaN(cur)) && cur !== '-' && cur !== '.' && cur !== '+') {
            break;
        }
        if (resArray.length === 0) {
            if (cur === '-' || cur === '+') {
                resArray.push(cur);
            }
            crementIcon = true;
        }
        if (!isNaN(cur) || (cur === '.' && !pointIcon)) {
            resArray.push(cur);
            if (cur === '.') {
                pointIcon = true;
            }
        }
        pointer++;
    }
    let value = resArray.join('');
    if (value === '+' || value === '-' || value === '.') {
        return 0;
    }
    if (value <= min) {
        return min;
    }
    if (value >= max) {
        return max;
    }
    return +value;
};

// 用parseInt

const myAtoi2 = function (str) {
    const val = parseInt(str, 10);
    if (!val) {
        return 0;
    }
    if (val <= min) {
        return min;
    }
    if (val >= max) {
        return max;
    }
    return val;
}

// 还可以用正则

console.log(myAtoi2("0-1"));