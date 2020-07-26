const jsonp = function (params) {
    // url
    // data
    // success
    // error
    // jsonCallback
    const $head = document.getElementsByTagName('head')[0];
    const tag = Math.floor(Math.random * 10000);
    const callBackName = params.jsonCallback ? `${params.jsonCallback}${tag}` : `callback${tag}`;
    let { data, url } = params;
    data.callBackName = callBackName;
    Object.keys(data).forEach((key) => {
        if (url.match(/\?/)) {
            url = `${url}&${key}=${data[key]}`;
        } else {
            url = `${url}?${key}=${data[key]}`;
        }
    });
    const $script = document.createElement('script');
    $script.src = url;
    window[callBackName] = function(data) {
        window[callBackName] = null;
        $head.removeChild($script);
        params.success && params.success(data);
    }
    $script.onerror = function () {
        window[callbackName] && (wibdow[callBackName] = null);
        $head.removeChild($script);
        params.error && params.error(data);
    };
    $head.appendChild($script);
}