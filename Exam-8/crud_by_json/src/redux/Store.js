import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { reciptReducer } from "./Reducer";

const root = combineReducers({
    recipeBook:reciptReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Store = legacy_createStore(root, composeEnhancers(applyMiddleware(thunk)));