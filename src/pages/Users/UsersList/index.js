import React from "react";
import UsersItem from "../UsersItem";
import Paginator from "components/Paginator/Paginator";

const UsersList = (props) => {
    return (
        <div className="wrapFriendsList">
            <div className="wrapperUsersPagination">
                <Paginator 
                    pageSize={props.pageSize} 
                    totalItemsCount={props.totalItemsCount} 
                    onPageChanged={props.onPageChanged} 
                    currentPage={props.currentPage} 
                />
            </div>
            {props.users.map( user => (
                <UsersItem 
                    key={user.id} 
                    user={user}
                    follow={props.follow}
                    unfollow={props.unfollow}
                    toggleFollowingProgress={props.toggleFollowingProgress}
                    followingInProgress={props.followingInProgress}
                />
            ))}
        </div> 
    )
}

export default UsersList;