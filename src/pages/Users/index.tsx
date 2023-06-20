import React from "react";
import UsersList from "./UsersList";
import LSidebar from "../../components/LSidebar";
import RSidebar from "../../components/RSidebar";
import Preloader from "../../components/Priloader";
// import WidgetFriends from "../../components/Widgets/WidgetFriends";
// import WidgetPeople from "../../components/Widgets/WidgetsPeople";
// import WidgetYofamiliar from "../../components/Widgets/WidgetYofamiliar";
import { UserType } from "../../types/types";
import "./styles.scss";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}

const Users: React.FC<PropsType> = (props) => {
    return (
        <div className="wrapContent">
            <LSidebar 
                content={
                    <>
                        <div className="wrapWidgetFriendsProfile">
                            {/* <WidgetFriends /> */}
                        </div>
                        <div className="wrapWidgetPeopleProfile">
                            {/* <WidgetPeople /> */}
                        </div>
                    </>
                }
            />
            <div className="contentProfiles">
                {props.isFetching 
                    ? <Preloader/> 
                    : null}
                {props.users.length > 0 
                    && <UsersList 
                            users={props.users}
                            follow={props.follow} 
                            unfollow={props.unfollow} 
                            followingInProgress={props.followingInProgress} 
                            pageSize={props.pageSize} 
                            totalItemsCount={props.totalUsersCount} 
                            onPageChanged={props.onPageChanged} 
                            currentPage={props.currentPage}
                        />}
            </div>
            <RSidebar 
                content={
                    <>
                        {/* <WidgetYofamiliar /> */}
                    </>
                }
            />
        </div>
    )
}
export default Users;