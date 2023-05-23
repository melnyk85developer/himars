import { authAPI, securityAPI } from "services/getUsers";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}
const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return { 
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
export const setAuthUserData = (id, login, email, isAuth) => ({
    type: SET_USER_DATA, payload: {id, login, email, isAuth} })
export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl} })

export const getAuthUserData = () => async (dispatch) => {

    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
        const { id, login, email } = response.data.data;
        dispatch(setAuthUserData(id, login, email, true));
    }
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    if(response.data.resultCode === 0){
        dispatch(getAuthUserData())
    } else {
        if(response.data.resultCode === 10){
            dispatch(getCaptchaUrl());
        }
        const messageError = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: messageError}));
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;    
    dispatch(getCaptchaUrlSuccess(captchaUrl));

}
export const logout = () => async (dispatch) => {

    const response = await authAPI.logout()

    if(response.data.resultCode === 0){
        dispatch(setAuthUserData(null, null, null, false));
    }
}
export default authReducer;