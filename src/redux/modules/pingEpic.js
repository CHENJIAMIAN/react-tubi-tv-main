import { filter, mapTo, mergeMap, map } from 'rxjs/operators';

export const pingEpic = (action$) =>
    action$.pipe(
        filter((action) => action.type === 'PING'),
        mapTo({ type: 'PONG' })
    );

// later...
// dispatch({ type: 'PING' });

export default (
    state = {
        isPinging: false,
        // 用于控制是否显示头部的搜索和登录(登录注册页面不显示), 当goFormLogin时,即到注册登录页面时,isStayFormLogin为true
        isHidePartOfHeader: false,
    },
    action
) => {
    switch (action.type) {
        case 'PING':
            return { isPinging: true };

        case 'PONG':
            return { isPinging: false };

        case 'CHANGE_IS_HIDE_PART_OF_HEADER':
            return {
                isHidePartOfHeader: action.payload,
            };

        default:
            return state;
    }
};
