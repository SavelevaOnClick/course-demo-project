export const ADD_USER = 'ADD_USER'
export const ADD_USER_ASYNC = 'ADD_USER_ASYNC'
export const SET_LOADING = 'SET_LOADING'

export const setLoading = (data) => ({ data, type: SET_LOADING })
export const addUser = (data) => ({ data, type: ADD_USER })
export const addUserAsync = (data) => ({ data, type: ADD_USER_ASYNC })
