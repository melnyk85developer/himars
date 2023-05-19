import { useEffect } from "react";
import { v1 as uuidv1 } from 'uuid';
import { userProfileAPI } from "services/getUsers";
import HiMarsMoks from "../fixtures/HiMarsMoks";

const ADD_POST = 'userProfile/ADD-POST';
const SET_USER_PROFILE = 'userProfile/SET-USER-PROFILE';
const SET_STATUS = 'userProfile/SET_STATUS';

const posts = HiMarsMoks.posts;

let initialState = {
    profile: null,
    status: "",
    posts
}

const userProfileReducer = (state = initialState, action) => {

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
        case SET_USER_PROFILE: {
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
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const getUserProfile = (userId) => (dispatch) => {
    useEffect(() => {
        userProfileAPI.getUserProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }, [dispatch])
}
export const getStatus = (userId) => (dispatch) => {
    userProfileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data.data))
        })
}
export const updateStatus = (status) => (dispatch) => {
    userProfileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setStatus(response.data))
            }
        })
}
export default userProfileReducer;