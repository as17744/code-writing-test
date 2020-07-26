const ajax = function(params) {
    // url
    // type
    // data
    // success
    // error
    const xhr = new XMLHttpRequest();
    let { type, data, url, success, error } = params;
    type = type.toUppercase();
    xhr.onReadyStateChange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                success && success(data);
            } else {
                error && error(xhr.status);
            }
        }
    }
    if (xhr === 'GET' && data) {
        Object.keys(data).forEach((key) => {
            if (url.match(/\?/)) {
                url = `${url}&${key}=${data[key]}`;
            } else {
                url = `${url}?${key}=${data[key]}`;
            }
        });
    }
    xhr.open(type, url, true);
    xhr.send(type === 'POST' ? data : null);
}