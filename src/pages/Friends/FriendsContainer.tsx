import React, { useEffect, useState } from "react";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Friends from ".";
import { routeMain } from "../../pages/Friends";
import { 
    getFriends,
    getPageSize, 
    getTotalFriendsCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress } from "../../store/friendsSelectors";
import { requestFriends } from "../../store/friendsReducer";

import { UserType } from "../../types/types";
import { connect } from "react-redux";
import { AppStateType } from "../../store/reduxStore";

type MapStatePropsType = {
    totalFriendsCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    friends: Array<UserType>
    followingInProgress: Array<number>
}
type MapDispatchPropsType = {
    requestFriends: (currentPage: number, pageSize: number) => void
}
type OwnPropsType = {
    onPageChanged: (pageNumber: number) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


const FriendsContainer: React.FC<PropsType> = (props) => {
    useEffect(() => {
        props.requestFriends(props.currentPage, props.pageSize);
        // friendsAPI.getFriends().then(response => {
        //     setFriendsList(response.data.filter( item => item.followed === true));
        // }) 
    }, [])

    return <Friends friends={props.friends}/>
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        friends: getFriends(state),
        pageSize: getPageSize(state),
        totalFriendsCount: getTotalFriendsCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
export {routeMain};
export default compose<React.FC>(
    withAuthRedirect,
    connect
        <MapStatePropsType, 
        MapDispatchPropsType,
        OwnPropsType, 
        AppStateType>
        ( mapStateToProps, { requestFriends } )
)(FriendsContainer);;