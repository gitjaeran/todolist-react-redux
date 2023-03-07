//Redux 설정 - 중앙 state 관리
import { createStore } from "redux";
import { combineReducers } from "redux";
import data from "./modules/todoList";

//2개 API import
const rootReducer = combineReducers({ data });
const store = createStore(rootReducer);

export default store;
