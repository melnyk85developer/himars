import { friendsAPI } from "../services/friendsApi";
import { UserType } from "../types/types";
import { BaseThunkType, InferActionsTypes } from "./reduxStore";

let initialState = {
    friends: [] as Array<UserType>,
    pageSize: 100,
    totalFriendsCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
}
const friendsReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch(action.type){
        case "FRIENDS/SET_FRIENDS": 
            return { ...state, friends: action.friends }
        case "FRIENDS/SET_CURRENT_PAGE": 
            return { ...state, currentPage: action.currentPage }
        case "FRIENDS/SET_TOTAL_FRIENDS_COUNT": 
            return { ...state, totalFriendsCount: action.count }
        case "FRIENDS/TOGGLE_IS_FETCHING": 
            return { ...state, isFetching: action.isFetching }
        case "FRIENDS/TOGGLE_IS_FETCHING_PROGRESS": 
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
    setFriends: (friends: Array<UserType>) => ({ type: "FRIENDS/SET_FRIENDS", friends } as const),
    setCurrentPage: (currentPage: number) => ({ type: "FRIENDS/SET_CURRENT_PAGE", currentPage } as const),
    setFriendsTotalCount: (totalFriendsCount: number) => ({ type: "FRIENDS/SET_TOTAL_FRIENDS_COUNT", count: totalFriendsCount } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: "FRIENDS/TOGGLE_IS_FETCHING", isFetching } as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({ type: "FRIENDS/TOGGLE_IS_FETCHING_PROGRESS", isFetching, userId } as const),
}
export const requestFriends = (page: number, 
    pageSize: number): ThunkType => {
    return async (dispatch: any, getState: any) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(page));
        const data = await friendsAPI.getFriends(page, pageSize);
    console.log(data)

        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setFriends(data.items));
        dispatch(actions.setFriendsTotalCount(data.totalCount));
    }
}
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType =  BaseThunkType<ActionsTypes>
type InitialState = typeof initialState;
export default friendsReducer;