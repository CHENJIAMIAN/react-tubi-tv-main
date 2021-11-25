import { filter, mapTo, mergeMap, map } from 'rxjs/operators';

export const pingEpic = (action$) =>
    action$.pipe(
        filter((action) => action.type === 'PING'),
        mapTo({ type: 'PONG' })
    );

// later...
// dispatch({ type: 'PING' });

export default (state = { isPinging: false }, action) => {
    switch (action.type) {
        case 'PING':
            return { isPinging: true };

        case 'PONG':
            return { isPinging: false };

        default:
            return state;
    }
};
