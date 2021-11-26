import { extend } from 'umi-request';

const errorHandler = function (error) {
    const codeMap = {
        '021': '发生错误啦',
        '022': '发生大大大大错误啦',
        // ....
    };
    if (error.response) {
        // 请求已发送但服务端返回状态码非 2xx 的响应
        console.log(error.response.status);
        console.log(error.response.headers);
        console.log(error.data);
        console.log(error.request);
        console.log(codeMap[error.data.status]);
    } else {
        // 请求初始化时出错或者没有响应返回的异常
        console.log(error.message);
    }

    throw error; // 如果throw. 错误将继续抛出.

    // 如果return, 则将值作为返回. 'return;' 相当于return undefined, 在处理结果时判断response是否有值即可.
    // return {some: 'data'};
};

const request = extend({
    errorHandler,
    prefix: '/api',
    timeout: 1000,
    // headers: {
    //     'Content-Type': 'multipart/form-data',
    // },
});

// request拦截器, 改变url 或 options.
request.interceptors.request.use(
    (url, options) => {
        return {
            // url: `${url}&interceptors=yes`,
            // options: { ...options, interceptors: true },
            url,
            options,
        };
    },
    { global: true }
);

// 提前对响应做异常处理
request.interceptors.response.use((response) => {
    // const contentType = response.headers.get('Content-Type');
    const codeMaps = {
        502: '网关错误。',
        503: '服务不可用，服务器暂时过载或维护。',
        504: '网关超时。',
    };
    // console.error(codeMaps[response.status]);
    return response;
});

function getAPI(url, method, reqJson) {
    switch (method) {
        case 'GET':
            return request.get(url, {
                params: reqJson,
            });
        // .then( (response)=> {
        //     console.log(response);
        // })
        // .catch( (error)=> {
        //     console.log(error);
        // });
        case 'POST':
            return request.post(url, {
                data: reqJson,
            });
    }
}

// Clear-MyList
export function clearMyList(reqJson) {
    return getAPI('/user/clearMyList', 'POST', reqJson);
}
// Clear-History
export function clearHistory(reqJson) {
    return getAPI('/user/clearHistory', 'POST', reqJson);
}
// Delete-MyList
export function deleteMyList(reqJson) {
    return getAPI('/user/deleteMyList', 'POST', reqJson);
}
// Delete-History
export function deleteHistory(reqJson) {
    return getAPI('/user/deleteHistory', 'POST', reqJson);
}
// 标签Tag视频列表（分页）
export function tagVideoByPage(reqJson) {
    return getAPI('/tag/videoByPage', 'GET', reqJson);
}
// Add-MyList
export function addMyList(reqJson) {
    return getAPI('/user/addMyList', 'POST', reqJson);
}
// Add-History
export function addHistory(reqJson) {
    return getAPI('/user/addHistory', 'POST', reqJson);
}
// History
export function userHistory(reqJson) {
    return getAPI('/user/history', 'GET', reqJson);
}
// MyList
export function myList(reqJson) {
    return getAPI('/user/myList', 'GET', reqJson);
}
// 个人信息
export function userInfo(reqJson) {
    return getAPI('/user/info', 'GET', reqJson);
}
// 分类视频列表（分页）
export function categoryVideoByPage(reqJson) {
    return getAPI('/category/videoByPage', 'GET', reqJson);
}
// 视频详情页
export function videoQueryById(reqJson) {
    return getAPI('/video/queryById', 'GET', reqJson);
}
// 所有分类
export function categoryList(reqJson) {
    return getAPI('/category/list', 'GET', reqJson);
}
// 首页接口数据
export function getData(reqJson) {
    return getAPI('/index/getData', 'GET', reqJson);
}
// 登录接口
export function userLogin(reqJson) {
    return getAPI('/user/login', 'POST', reqJson);
}
// 注册接口
export function userRegister(reqJson) {
    return getAPI('/user/register', 'POST', reqJson);
}
/* 
clearMyList
clearHistory
deleteMyList
deleteHistory
tagVideoByPage
addMyList
addHistory
userHistory
myList
userInfo
categoryVideoByPage
videoQueryById
categoryList
getData
userLogin
userRegister
*/
