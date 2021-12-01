import { message } from 'antd';
import { extend } from 'umi-request';

const errorHandler = function (error) {
    const codeMap = {
        '021': '发生错误啦',
        '022': '发生大大大大错误啦',
        // ....
    };
    if (error.response) {
        // 请求已发送但服务端返回状态码非 2xx 的响应
        message.error(
            `请求${error.request.url} 发生了错误:${JSON.stringify(error.data)}`
        );
    } else {
        // 请求初始化时出错或者没有响应返回的异常
        message.error(error.message);
    }

    throw error; // 如果throw. 错误将继续抛出.

    // 如果return, 则将值作为返回. 'return;' 相当于return undefined, 在处理结果时判断response是否有值即可.
    // return {some: 'data'};
};

export const request = extend({
    errorHandler,
    prefix: '/api',
    timeout: 1000 * 10,
    headers: {
        // 'Content-Type': 'multipart/form-data',
        token: localStorage.getItem('token'),
    },
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
request.interceptors.response.use(async (response) => {
    // const contentType = response.headers.get('Content-Type');
    const codeMaps = {
        502: '网关错误。',
        503: '服务不可用，服务器暂时过载或维护。',
        504: '网关超时。',
    };
    const data = await response.clone().json();
    const { code, msg } = data;
    // console.error(codeMaps[response.status]);
    if (code !== 0) {
        message.error(msg);
        if (3001 === code || 3002 === code) {
            window.location.href = `/form-login/sign?redirect=${window.location.href}`;
        }
        throw msg;
    }
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
                requestType: 'form',
                data: reqJson,
            });
    }
}

// 更新用户信息
export function changeInfo(reqJson) {
    return getAPI('/user/changeInfo', 'POST', reqJson);
}
// 已发布PayOrder
export function myOrder(reqJson) {
    return getAPI('/user/myOrder', 'POST', reqJson);
}
// 修改密码
export function changePassword(reqJson) {
    return getAPI('/user/changePassword', 'POST', reqJson);
}
// 支付下单接口
export function orderAdd(reqJson) {
    return getAPI('/order/add', 'POST', reqJson);
}
// 已发布根据国家ID获取支付通道信息
export function orderPayInfo(reqJson) {
    return getAPI('/order/payInfo', 'POST', reqJson);
}
// 搜索视频列表（分页）
export function videoSearch(reqJson) {
    return getAPI('/video/search', 'POST', reqJson);
}

// 个人播放权限检查
export function userAuth(reqJson) {
    return getAPI('/user/auth', 'POST', reqJson);
}

// 所有国家
export function countryList(reqJson) {
    return getAPI('/country/list', 'POST', reqJson);
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
    return getAPI('/tag/videoByPage', 'POST', reqJson);
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
    return getAPI('/user/history', 'POST', reqJson);
}
// MyList
export function myList(reqJson) {
    return getAPI('/user/myList', 'POST', reqJson);
}
// 个人信息
export function userInfo(reqJson) {
    return getAPI('/user/info', 'POST', reqJson);
}
// 分类视频列表（分页）
export function categoryVideoByPage(reqJson) {
    return getAPI('/category/videoByPage', 'POST', reqJson);
}
// 视频详情页
export function videoQueryById(reqJson) {
    return getAPI('/video/queryById', 'POST', reqJson);
}
// 所有分类
export function categoryList(reqJson) {
    return getAPI('/category/list', 'POST', reqJson);
}
// 首页接口数据
export function getData(reqJson) {
    return getAPI('/index/getData', 'POST', reqJson);
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
// changeInfo
myOrder
// changePassword
// orderAdd
// orderPayInfo
// videoSearch
// userAuth
// countryList
// clearMyList
// clearHistory
// deleteMyList
// deleteHistory
// tagVideoByPage
// addMyList
// addHistory
// userHistory
// myList
// userInfo
// categoryVideoByPage
// videoQueryById
// categoryList
// getData
// userLogin
// userRegister
*/
