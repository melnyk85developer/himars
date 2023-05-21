import { useEffect } from "react";
import { v1 as uuidv1 } from 'uuid';
import { profileAPI } from 'services/getUsers';
import HiMarsMoks from "../fixtures/HiMarsMoks";

const ADD_POST = 'profile/ADD-POST';
const SET_PROFILE = 'profile/SET-PROFILE';
const SET_STATUS = 'profile/SET_STATUS';

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
        default:
            return state;
    }
}
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId);

    // console.log(userId)

    dispatch(setProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))

}
export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if(response.data.resultCode === 0){
        dispatch(setStatus(status))
    }

}
export default profileReducer;