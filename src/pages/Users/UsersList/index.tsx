import React from "react";
import UsersItem from "../UsersItem";
import Paginator from "components/Paginator/Paginator";
import { UserType } from "types/types";

type PropsType = {
    totalItemsCount: number 
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number)=> void
    follow: (userId: number)=> void
}

const UsersList: React.FC<PropsType> = (props) => {
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
                    followingInProgress={props.followingInProgress} userDetailPage={undefined}                />
            ))}
        </div> 
    )
}
export default UsersList;