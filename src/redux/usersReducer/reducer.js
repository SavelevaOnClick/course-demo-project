import {ADD_USER, SET_LOADING} from "./actions";


const initialState = {
	users: ['Alex'],
	loading: false
}

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER :
			return {
				...state,
				users: [...state.users, action.data]
			}
			case SET_LOADING :
			return {
				...state,
				loading: action.data
			}
		default: return initialState
	}
}
