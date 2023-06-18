import { createSelector } from 'reselect';
import { AppStateType } from './reduxStore';

const getFriendsSelector = (state: AppStateType) => {
    return state.friendsPage.friends
}
export const getFriends = createSelector(getFriendsSelector, (friends) => {
    return friends.filter(u => true);
})
export const getPageSize = (state: AppStateType) => {
    return state.friendsPage.pageSize
}
export const getTotalFriendsCount = (state: AppStateType) => {
    return state.friendsPage.totalFriendsCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.friendsPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.friendsPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.friendsPage.followingInProgress
}