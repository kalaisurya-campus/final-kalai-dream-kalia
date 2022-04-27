import rootReducer from "../reducers";
import { applyMiddleware, createStore } from "redux";
import reduxSaga from "redux-saga";
import rootdatas from "../../sagas";

const reduxSagaMiddleWare = reduxSaga();
const store = createStore(rootReducer, applyMiddleware(reduxSagaMiddleWare));
reduxSagaMiddleWare.run(rootdatas);
export default store;
