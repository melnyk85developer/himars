import { v1 as uuidv1 } from 'uuid';
import { profileAPI } from '../services/profileApi';
import { FormAction, stopSubmit } from "redux-form";
import { ProfileType, PostType, PhotosType } from '../types/types';
import HiMarsMoks from "../fixtures/HiMarsMoks";
import { BaseThunkType, InferActionsTypes } from './reduxStore';

const posts = HiMarsMoks.posts;

let initialState = {
    profile: null as ProfileType | null,
    posts: posts as Array<PostType | any>,
    status: ''
}
const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch(action.type){
        case 'PROFILE/ADD-POST': {
            const newPost = {
                id: uuidv1(),
                post: action.newPostText,
                like: 0,
                dislike: 0
            };
            return { 
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case 'PROFILE/SET_STATUS': {
            return { 
                ...state,
                status: action.status
            };
        }
        case 'PROFILE/SET-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'PROFILE/DELETE_POST':
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        case 'PROFILE/SAVE_PHOTO_SUCCESS':
                return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
            default:
            return state;
    }
}
export const actions = {
    addPostActionCreator: (newPostText: string) => ({type: 'PROFILE/ADD-POST', newPostText} as const),
    setProfile: (profile: ProfileType) => ({type: 'PROFILE/SET-PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'PROFILE/SET_STATUS', status} as const),
    deletePost: (postId: number | null | string) => ({type: 'PROFILE/DELETE_POST', postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'PROFILE/SAVE_PHOTO_SUCCESS', photos} as const)
}
export const getProfile = (userId: string | undefined | number | null): ThunkType => async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(actions.setProfile(data));
}
export const getStatus = (userId: string | undefined | number | null): ThunkType => async (dispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(data))
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        const data = await profileAPI.updateStatus(status)
        if(data.resultCode === 0){
            dispatch(actions.setStatus(status))
        }
    } catch(error){
        console.error("Erorr Update Status")
    }
}
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    const data = await profileAPI.savePhoto(file)
    if(data.resultCode === 0){
        dispatch(actions.savePhotoSuccess(data.data.photos))
    }
}
export const saveProfile = (profile:  ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.id
    const data = await profileAPI.saveProfile(profile);
    if(data.resultCode === 0){
        if(userId !== null){
            dispatch(getProfile(userId))
        }else{
            throw new Error("userId can't be null")
        }
    } else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}));
        return Promise.reject(data.messages[0]);
    }
}
export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>
export default profileReducer;