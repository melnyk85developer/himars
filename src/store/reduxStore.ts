import { Action, applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appContentReducer from "./appContentReducer";
// import sidebarReducer from "./sidebarReducer";

let rootReducer = combineReducers({
    // sidebar: sidebarReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appContentReducer
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends {[keys: string]: (...args: any[]) => infer U} ? U : never

export type BaseThunkType<A extends Action = Action, R = Promise<void>> =  ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
// @ts-ignore
window.__store__ = store;

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;