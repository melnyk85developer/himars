import { usersAPI } from "services/usersApi";
import { UserType } from "types/types";
import { updateObjectInArray } from "utils/objectHelpers";
import { InferActionsTypes, BaseThunkType } from "./reduxStore";
import { Dispatch } from "react";

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
}
const usersReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch(action.type){
        case "USERS/FOLLOW":
            return { 
                ...state, 
                users: updateObjectInArray(state.users, action.userId, "id",  {followed: true} )
            }
        case "USERS/UNFOLLOW":
            return { 
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id",  {followed: false} )
            }
        case "USERS/SET_USERS": 
            return { ...state, users: action.users }
        case "USERS/SET_CURRENT_PAGE": 
            return { ...state, currentPage: action.currentPage }
        case "USERS/SET_TOTAL_USERS_COUNT": 
            return { ...state, totalUsersCount: action.count }
        case "USERS/TOGGLE_IS_FETCHING": 
            return { ...state, isFetching: action.isFetching }
        case "USERS/TOGGLE_IS_FETCHING_PROGRESS": 
            return { ...state, 
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}
export const actions = {
    followSuccess: (userId: number) => ({ type: "USERS/FOLLOW", userId } as const),
    unfollowSuccess: (userId: number) => ({ type: "USERS/UNFOLLOW", userId } as const),
    setUsers: (users: Array<UserType>) => ({ type: "USERS/SET_USERS", users } as const),
    setCurrentPage: (currentPage: number) => ({ type: "USERS/SET_CURRENT_PAGE", currentPage } as const),
    setUsersTotalCount: (totalUsersCount: number) => ({ type: "USERS/SET_TOTAL_USERS_COUNT", count: totalUsersCount } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: "USERS/TOGGLE_IS_FETCHING", isFetching } as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({ type: "USERS/TOGGLE_IS_FETCHING_PROGRESS", isFetching, userId } as const),
}
export const requestUsers = (page: number, 
    pageSize: number): ThunkType => {
    return async (dispatch: any, getState: any) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(page));
        const data = await usersAPI.getUsers(page, pageSize);
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setUsersTotalCount(data.totalCount));
    }
}
const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>, userId: number, apiMethod: any, actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    const response = await apiMethod(userId);
    if(response.data.resultCode === 0){
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
}
export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess);
    }
}
export const unfollow = (userId: number):ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess);
    }
}
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType =  BaseThunkType<ActionsTypes>
type InitialState = typeof initialState;
export default usersReducer;