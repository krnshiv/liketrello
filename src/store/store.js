import { applyMiddleware, createStore } from "redux";
import rootReducers from "../reducers/index";
import thunk from 'redux-thunk'
// const reducer = () => {};

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
