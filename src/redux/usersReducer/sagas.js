import {call, put, select, takeLatest} from "@redux-saga/core/effects";
import {ADD_USER_ASYNC, setLoading} from "./actions";
import {usersSelector} from "./selectors";


export default function* watchUsers (){
	yield takeLatest(ADD_USER_ASYNC, addUserSaga)
}

const delay = time => new Promise(resolve => setTimeout(resolve, time));

function* addUserSaga(action){
	yield put(setLoading(true))
	const data = yield call(delay, 2000)
	const users = yield select(usersSelector)
	yield console.log( 'users --- ', users);
	yield put(setLoading(false))
}
