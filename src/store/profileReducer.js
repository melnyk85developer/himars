import { v1 as uuidv1 } from 'uuid';
import { profileAPI } from 'services/api';
import { stopSubmit } from "redux-form";
import HiMarsMoks from "../fixtures/HiMarsMoks";

const ADD_POST = 'profile/ADD-POST';
const SET_PROFILE = 'profile/SET-PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'

const posts = HiMarsMoks.posts;

let initialState = {
    profile: null,
    status: "",
    posts
}

const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_POST: {
            let newPost = {
                id: uuidv1(),
                post: action.newPostText,
                like: 0,
                dislike: 0
            };
            return { 
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case SET_STATUS: {
            return { 
                ...state,
                status: action.status
            };
        }
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        case SAVE_PHOTO_SUCCESS:
                return {...state, profile: {...state.profile, photos: action.photos}}
            default:
            return state;
    }
}
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    try {
        const response = await profileAPI.updateStatus(status);
        if(response.data.resultCode === 0){
            dispatch(setStatus(status))
        }
    } catch(error){
        console.error("Erorr Update Status");
    }
}
export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if(response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id
    const response = await profileAPI.saveProfile(profile);
    if(response.data.resultCode === 0){
        dispatch(getProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}
export default profileReducer;