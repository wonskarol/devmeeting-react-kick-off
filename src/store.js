import { createStore, combineReducers } from "redux";
import products from "./reducers/products";

const store = createStore(combineReducers({ products }));

export default store;
