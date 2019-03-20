import axios from 'axios'

//定义全局请求内容
axios.defaults.timeout = 500000; //响应时间 
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'; //配置请求头
axios.defaults.withCredentials = true;

//全局拦截请求，获取到错误
axios.interceptors.request.use(function (config) {
    let time = window.Date.now();
    config.url = config.url.indexOf('?') > -1 ? config.url + '&_t=' + time : config.url + '?_t=' + time;
    return config
});

axios.interceptors.response.use(function (response) {
    if (response.data.status == '302') {
        window.localStorage.clear();
        window.sessionStorage.clear();
        let {
            protocol,
            host,
        } = window.location;
        let _url = protocol + '//' + host;
        window.location.href = window.location.origin || _url;
    }
    return response;

}, function (err) {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                err.message = '请求错误';
                break;
            case 401:
                err.message = '未授权，请重新登录';
                break;
            case 403:
                err.message = '拒绝访问';
                break;
            case 404:
                err.message = '请求出错';
                break;
            case 408:
                err.message = '请求超时';
                break;
            case 500:
                setTimeout(() => {
                    window.localStorage.clear();
                    window.sessionStorage.clear();
                    window.location.href = '/';
                }, 500);
                err.message = '服务器错误';
                break;
            case 501:
                err.message = '服务未实现';
                break;
            case 502:
                setTimeout(() => {
                    window.localStorage.clear();
                    window.sessionStorage.clear();
                    window.location.href = '/';
                }, 500);
                err.message = '网络错误';
                break;
            case 503:
                err.message = '服务不可用';
                break;
            case 504:
                err.message = '网络超时';
                break;
            case 505:
                err.message = 'HTTP版本不受支持';
                break;
            default:
                err.message = '连接出错';
        }
    } else {
        err.message = '连接服务器失败!'
    }
    return Promise.reject(err);
});

export default axios