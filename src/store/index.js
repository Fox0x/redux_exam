
import { applyMiddleware, combineReducers, createStore } from "redux";
import { cashReducer } from "./cashReducer";
import { userReducer } from "./userReducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    cash: cashReducer,
    users: userReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));