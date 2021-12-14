import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import ping, { pingEpic } from './pingEpic';
import { catchError } from 'rxjs/operators';

const epics = [pingEpic]; //多个
export const rootEpic = (action$, store$, dependencies) =>
    combineEpics(...epics)(action$, store$, dependencies).pipe(
        catchError((error, source) => {
            console.error(error);
            return source;
        })
    );

export const rootReducer = combineReducers({
    ping, //多个
});
