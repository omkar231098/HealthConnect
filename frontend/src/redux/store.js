import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";


import {reducer as adminReducer} from "./AdminReducer/reducer"

const rootReducer = combineReducers({

 

  adminReducer

});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
//export const store = legacy_createStore(patientReducer,applyMiddleware(thunk))
