const ajax = function (params) {
    // type 类型
    // url地址
    // data
    // success
    // error
    const xhr = new XMLHttpRequest();
    xhr.onreadyStateChange = function () {
        if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status <= 300) {
            const res = JSON.parse(xhr.responseText);
            params.success && params.success(res);
        } else {
            params.error && params.error(xhr.status);
        }
    }
    const { type, data, url } = params;
    const sendType = type.toUpperCase();
    let src = url;
    if (sendType === 'GET' && data) {
        Object.keys(data).forEach((key) => {
            if (src.match(/\?/)) {
                src = `${src}&${key}=${data[key]}`;
            } else {
                src = `${src}?${key}=${data[key]}`;
            }
        });
    }
    xhr.open(sendType, src, true);
    xhr.send(sendType === 'POST' ? data : null);
}