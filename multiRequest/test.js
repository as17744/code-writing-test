const multiRequest = function (urls, num) {
    const res = [];
    let count = 0;
    const max = urls.length;
    let curIndex = num - 1;
    const task = (url, index) => {
        request(url).then((val) => {
            count++;
            res[index] = val;
            if (count >= max) {
                console.log(res);
            } else {
                curIndex = curIndex + 1;
                if (urls[curIndex]) {
                    task(urls[curIndex], curIndex);
                }
            }
        })
    };
    for (let i = 0; i < num; i++) {
        if (urls[i]) {
            task(urls[i], i);
        }
    }
}

const request = (url) => {
    return new Promise((resolve) => {
        const time = Math.random() * 20;
        setTimeout(() => {
            resolve(`${url}-go`);
        }, time);
    });
};

multiRequest(['1', '2', '3', '4', '5', '6', '7', '8'], 10)