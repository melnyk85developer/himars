import React from "react";
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
        
class UsersContainer extends React.Component {
    componentDidMount(){
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }
    render(){
        return (
            <>
                <Users 
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    toggleIsFetching={this.props.toggleIsFetching}
                    isFetching={this.props.isFetching}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
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
    connect( mapStateToProps,{follow, unfollow, setCurrentPage,toggleFollowingProgress, requestUsers})
)(UsersContainer)