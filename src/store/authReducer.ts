import { ResultCodeForCaptchaEnum, ResultCodesEnum } from "services/api";
import { authAPI } from "services/authApi";
import { securityAPI } from "services/securityApi";
import { stopSubmit } from "redux-form";
import { BaseThunkType } from "./reduxStore";
import { InferActionsTypes } from "./reduxStore";

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null
}
const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch(action.type){
        case 'AUTH/SET_USER_DATA':
        case 'AUTH/GET_CAPTCHA_URL_SUCCESS':
            return { 
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
export const actions = {
    setAuthUserData: (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
        type: 'AUTH/SET_USER_DATA',
        payload: {id, login, email, isAuth}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'AUTH/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl} })
}
export const getAuthUserData = (): ThunkType => async (dispatch) => {

    const meData = await authAPI.me();

    if (meData.resultCode === ResultCodesEnum.Success) {
        const { id, login, email } = meData.data;
        dispatch(actions.setAuthUserData(id, login, email, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string | any): ThunkType => async (dispatch) => {

    const loginData = await authAPI.login(email, password, rememberMe, captcha);

    if(loginData.resultCode === ResultCodesEnum.Success){

        dispatch(getAuthUserData());

    } else {
        if(loginData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired){

            dispatch(getCaptchaUrl());
        }
        const messageError = loginData.messages.length > 0 ? loginData.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: messageError}));
    }
}
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url;    
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))

}
export const logout = (): ThunkType => async (dispatch: any) => {

    const response = await authAPI.logout()

    if(response.data.resultCode === 0){
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
}
export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>
export default authReducer;