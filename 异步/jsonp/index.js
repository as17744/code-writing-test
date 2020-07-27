// url
// success
// error
// data
// jsonpCallback
const jsonp = function (params) {
    const $head = document.getElementsByTagName('head')[0];
    const data = params.data || {};
    const tag = Math.floor(Math.random() * 10000);
    const callBackName = params.jsonpCallback ? `${params.jsonpCallback}${tag}` : `callback${tag}`;
    data.callback = callBackName;
    let src = params.url;
    Object.keys(data).forEach((key, index) => {
        const hasTag = src.match(/\?/);
        if (hasTag) {
            src = `${src}&${key}=${data[key]}`;
        } else {
            src = `${src}?${key}=${data[key]}`;
        }
    });

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;

    window[callBackName] = function(res) {
        window[callBackName] = null;
        $head.removeChild(script);
        params.success(res);
    };

    script.onerror = function (err) {
        window[callBackName] && (window[callBackName] = null);
        $head.removeChild(script);
        params.error(err);
    }

    $head.appendChild(script);
}
jsonp({
    url: 'api.lwk.com/route/data',
    success() {
        console.log(132);
    },
    data: {
        a: 1,
        b: 2,
    },
})