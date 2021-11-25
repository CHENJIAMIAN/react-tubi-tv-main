import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { filter, mapTo, mergeMap, map } from 'rxjs/operators';

// action creators
const fetchUser = (username) => ({ type: 'FETCH_USER', payload: username });
const fetchUserFulfilled = (payload) => ({
    type: 'FETCH_USER_FULFILLED',
    payload,
});

// epic
export const fetchUserEpic = (action$) =>
    action$.pipe(
        ofType('FETCH_USER'),
        mergeMap((action) =>
            ajax
                .getJSON(`https://api.github.com/users/${action.payload}`)
                .pipe(map((response) => fetchUserFulfilled(response)))
        )
    );

// later...
// dispatch(fetchUser('torvalds'));

export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_USER_FULFILLED':
            return {
                ...state,
                // `login` is the username
                [action.payload.login]: action.payload,
            };

        default:
            return state;
    }
};
