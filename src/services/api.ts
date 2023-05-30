import axios from "axios";
import { UserType } from "types/types";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    // baseURL: 'https://63bb6f93cf99234bfa5b1191.mockapi.io/users/',
    headers: {
        "API-KEY": "d84c187e-a024-40d1-aa18-965665532015"
    }
})
export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}
export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}