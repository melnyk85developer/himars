import { authAPI } from "services/getUsers";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA:
            return { 
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email, isAuth) => ({type: SET_USER_DATA, payload: 
    {userId, login, email, isAuth} })

export const getAuthUserData = () => async (dispatch) => {

    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let { userId, login, email } = response.data.data;
        dispatch(setAuthUserData(userId, login, email, true));
    }
}
export const login = (email, password, rememberMe) => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe);

    if(response.data.resultCode === 0){
        dispatch(getAuthUserData())
    } else {
        let messageError = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: messageError}));
    }
}
export const logout = () => async (dispatch) => {

    let response = await authAPI.logout()

    if(response.data.resultCode === 0){
        dispatch(setAuthUserData(null, null, null, false));
    }
}
export default authReducer;