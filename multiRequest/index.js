const multiRequest = (urls, max) => {
    let result = [];
    let len = urls.length;
    let next = max - 1;
    let count = 0;
    const task = (url, index) => {
        request(url).then((val) => {
            result[index] = val;
            count++;
            if (count >= len) {
                console.log(result);
            } else {
                next = next + 1;
                if (urls[next]) {
                    task(urls[next], next);
                }
            }
        });
    };
    for (let i = 0; i < max; i++) {
        if (urls[i]) {
            task(urls[i], i);
        }
    }
};

// mock请求
const request = (url) => {
    return new Promise((resolve) => {
        const time = Math.random() * 20;
        setTimeout(() => {
            resolve(`${url}-go`);
        }, time);
    });
};

multiRequest(['1', '2', '3', '4', '5', '6', '7', '8'], 10)