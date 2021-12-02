import {applyMiddleware, createStore as reduxCreateStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./rootReducer"
import rootSaga from "./rootSaga"


const sagaMiddleware = createSagaMiddleware()

const createStore = () => {
	const store = reduxCreateStore(rootReducer, applyMiddleware(sagaMiddleware))
	sagaMiddleware.run(rootSaga)
	
	return {store};
};

export default createStore;
