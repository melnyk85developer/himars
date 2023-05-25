import { ThunkAction } from "redux-thunk";
import { usersAPI } from "services/api";
import { PhotosType, UserType } from "types/types";
import { updateObjectInArray } from "utils/objectHelpers";
import { AppStateType } from "./reduxStore";
import { Dispatch } from "react";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FETCHING_PROGRESS = 'users/TOGGLE_IS_FETCHING_PROGRESS';

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
}

type InitialState = typeof initialState;

const usersReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch(action.type){
        case FOLLOW:
            return { 
                ...state, 
                users: updateObjectInArray(state.users, action.userId, "id",  {followed: true} )
            }
        case UNFOLLOW:
            return { 
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id",  {followed: false} )
            }
        case SET_USERS: 
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE: 
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT: 
            return { ...state, totalUsersCount: action.count }
        case TOGGLE_IS_FETCHING: 
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FETCHING_PROGRESS: 
            return { ...state, 
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}
type ActionsTypes = 
                    SetUsersType |
                    FollowSuccessActionType | 
                    UnollowSuccessActionType |
                    SetCurrentPageActionType |
                    ToggleIsFetchingActionType |
                    SetUsersTotalCountActionType |
                    ToggleFollowingProgressActionType
type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({ type: FOLLOW, userId })
type UnollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): UnollowSuccessActionType => ({ type: UNFOLLOW, userId })
type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersType => ({ type: SET_USERS, users })
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage })
type SetUsersTotalCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}
export const setUsersTotalCount = (totalUsersCount: number): SetUsersTotalCountActionType => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching })
type ToggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FETCHING_PROGRESS
    userId: number
    isFetching: boolean
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => ({ type: TOGGLE_IS_FETCHING_PROGRESS, isFetching, userId })

type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType =  ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestUsers = (page: number, 
    pageSize: number): ThunkType => {
    return async (dispatch: any, getState: any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        const data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
    }
}
const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: (userId: number) => FollowSuccessActionType | UnollowSuccessActionType) => {
    dispatch(toggleFollowingProgress(true, userId));
    const response = await apiMethod(userId);
    if(response.data.resultCode === 0){
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}
export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}
export const unfollow = (userId: number):ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
}
export default usersReducer;