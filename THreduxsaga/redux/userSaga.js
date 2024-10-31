import { call, put, takeEvery } from 'redux-saga/effects';
import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure,
    addTodoRequest,
    addTodoSuccess,
    addTodoFailure,
} from '../redux/userSlice';

function* fetchUser(action) {
    try {
        const response = yield call(fetch, `https://6626ffbbb625bf088c0716e8.mockapi.io/popular/Todo/${action.payload}`);
        if (!response.ok) throw new Error('Failed to fetch user data');
        
        const data = yield response.json();
        yield put(fetchUserSuccess(data));
    } catch (error) {
        yield put(fetchUserFailure(error.message || 'Fetch user failed'));
    }
}

function* addTodoSaga(action) {
    try {
        const response = yield call(fetch, `https://6626ffbbb625bf088c0716e8.mockapi.io/popular/Todo/${action.payload.userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ todo: action.payload.todo }),
        });
        if (!response.ok) throw new Error('Failed to update todo');

        const data = yield response.json();
        yield put(addTodoSuccess(data));
    } catch (error) {
        yield put(addTodoFailure(error.message || 'Add todo failed'));
    }
}

export function* userSaga() {
    yield takeEvery(fetchUserRequest.type, fetchUser);
    yield takeEvery(addTodoRequest.type, addTodoSaga);
}
