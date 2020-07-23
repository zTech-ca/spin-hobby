import { createStore, applyMiddleware } from "redux";
import RootState from "./reducers";
import createSagaMiddleware from "redux-saga";
import runSagaMiddleware from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootState, {}, applyMiddleware(sagaMiddleware));

runSagaMiddleware(sagaMiddleware);

export default store;
