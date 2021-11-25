import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import ping, { pingEpic } from './ping';
import users, { fetchUserEpic } from './users';
import visibilityFilter from '../reducers/visibilityFilter';
import todos from '../reducers/todos';
import { catchError } from 'rxjs/operators';

const epics = [pingEpic, fetchUserEpic];
export const rootEpic = (action$, store$, dependencies) =>
    combineEpics(...epics)(action$, store$, dependencies).pipe(
        catchError((error, source) => {
            console.error(error);
            return source;
        })
    );

export const rootReducer = combineReducers({
    todos,
    visibilityFilter,
    ping,
    users,
});
