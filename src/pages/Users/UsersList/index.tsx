import React from "react";
import UsersItem from "../UsersItem";
import Paginator from "../../../components/Paginator/Paginator";
import { UserType } from "../../../types/types";
import UsersSearchForm from "../UsersSearchForm";
import { FilterType } from "../../../store/usersReducer";

type PropsType = {
    totalItemsCount: number 
    pageSize: number
    currentPage: number
    users: Array<UserType>
    followingInProgress: Array<number>
    onPageChanged: (pageNumber: number) => void
    onFilterChanged: (filter: FilterType) => void
    unfollow: (userId: number)=> void
    follow: (userId: number)=> void
}

const UsersList: React.FC<PropsType> = (props) => {
    return (
        <div className="wrapFriendsList">
            <div className="wrapperUsersPagination">
                <UsersSearchForm onFilterChanged={props.onFilterChanged}/>
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
                    followingInProgress={props.followingInProgress} 
                    userDetailPage={undefined} 
                    userId={undefined}                
                />
            ))}
        </div> 
    )
}
export default UsersList;