import {all} from "@redux-saga/core/effects";
import watchUsers from './usersReducer/sagas'

export default function* rootSaga() {
	yield all([
		watchUsers()
	])
}
