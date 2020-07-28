const multiRequest = function (urls, max) {
    let count = 0;
    let curIndex = max - 1;
    const len = urls.length;
    const res = [];
    const task = (url, index) => {
        fetch(url).then((val) => {
            res[index] = val;
            count++;
            if (count >= len) {
                console.log(res);
            } else {
                curIndex++;
                if (urls[curIndex]) {
                    task(urls[curIndex], curIndex);
                }
            }
        })
    };
    for (let i = 0; i < max; i++) {
        if (urls[i]) {
            task(urls[i], i);
        }
    }
}

const fetch = (url) => {
    return new Promise((resolve) => {
        const time = Math.random() * 20;
        setTimeout(() => {
            resolve(`${url}-go`);
        }, time);
    });
};

multiRequest(['1', '2', '3', '4', '5', '6', '7', '8'], 10)