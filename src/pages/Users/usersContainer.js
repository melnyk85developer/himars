import React, { useEffect }  from "react";
import Users from "./index.js";
import routeMain from "./routes.js";
import { withAuthRedirect } from "hoc/withAuthRedirect.js";
import { connect } from 'react-redux';
import { compose } from "redux";
import { follow, 
            unfollow, 
            setCurrentPage, 
            toggleFollowingProgress,
            requestUsers } from "store/usersReducer.js";
import {getUsers,
        getPageSize, 
        getTotalUsersCount,
        getCurrentPage,
        getIsFetching,
        getFollowingInProgress} from "store/usersSelectors.js";
        
const UsersContainer = (props) => {

    useEffect(() => {
        props.requestUsers(props.currentPage, props.pageSize);
    }, [])

    const onPageChanged = (pageNumber) => {
        props.requestUsers(pageNumber, props.pageSize);
    }
    return (
        <Users 
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChanged={onPageChanged}
            users={props.users}
            follow={props.follow}
            unfollow={props.unfollow}
            toggleIsFetching={props.toggleIsFetching}
            isFetching={props.isFetching}
            followingInProgress={props.followingInProgress}
        />
    )
}
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
export {routeMain};
export default compose(
    withAuthRedirect,
    connect( mapStateToProps,{
            follow, 
            unfollow, 
            setCurrentPage,
            toggleFollowingProgress, 
            requestUsers
        })
)(UsersContainer);