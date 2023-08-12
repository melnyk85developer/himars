import React, { useEffect }  from "react";
import Users from "./index";
import routeMain from "./routes";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { connect } from 'react-redux';
import { compose } from "redux";
import { follow, 
            unfollow, 
            requestUsers, 
            FilterType} from "../../store/usersReducer";
import { 
        getUsers,
        getUserFilter,
        getPageSize, 
        getTotalUsersCount,
        getCurrentPage,
        getIsFetching,
        getFollowingInProgress } from "../../store/usersSelectors";
import { UserType } from "../../types/types";
import { AppStateType } from "../../store/reduxStore";

type MapStatePropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    users: Array<UserType>
    followingInProgress: Array<number>
    filter: FilterType
}
type MapDispatchPropsType = {
    requestUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}
type OwnPropsType = {
    onPageChanged: (pageNumber: number) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const UsersContainer: React.FC<PropsType> = (props) => {

    useEffect(() => {
        props.requestUsers(props.currentPage, props.pageSize, props.filter);
    }, [])

    const onPageChanged = (pageNumber: number) => {
        props.requestUsers(pageNumber, props.pageSize, props.filter);
    }

    const onFilterChanged = (filter: FilterType) => {
        props.requestUsers(1, props.pageSize, filter);
    }

    return (
        <>
            <Users 
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={onPageChanged}
                onFilterChanged={onFilterChanged}
                users={props.users}
                follow={props.follow}
                unfollow={props.unfollow}
                isFetching={props.isFetching}
                followingInProgress={props.followingInProgress}
            />
        </>
    )
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getUserFilter(state)
    }
}

export {routeMain};
export default compose<React.ComponentType>(
    withAuthRedirect,
    connect
        <MapStatePropsType, 
        MapDispatchPropsType, 
        OwnPropsType, 
        AppStateType>
        ( mapStateToProps,{
            follow, 
            unfollow, 
            requestUsers
        })
)(UsersContainer);