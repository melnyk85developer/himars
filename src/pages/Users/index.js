import React from "react";
import UsersList from "./UsersList";
import LSidebar from "../../components/LSidebar/index.js";
import RSidebar from "../../components/RSidebar/index.js";
import Preloader from "components/Priloader";
import WidgetFriends from "../../components/Widgets/WidgetFriends";
import WidgetPeople from "../../components/Widgets/WidgetsPeople";
import WidgetYofamiliar from "../../components/Widgets/WidgetYofamiliar";
import "./styles.scss";

const Users = (props) => {
    return (
        <div className="wrapContent">
            <LSidebar 
                content={
                    <>
                        <div className="wrapWidgetFriendsProfile">
                            <WidgetFriends />
                        </div>
                        <div className="wrapWidgetPeopleProfile">
                            <WidgetPeople />
                        </div>
                    </>
                }
            />
            <div className="contentProfiles">
                {props.isFetching 
                    ? <Preloader className="preloader"/> 
                    : null}
                {props.users.length > 0 
                    && <UsersList 
                            users={props.users}
                            follow={props.follow} 
                            unfollow={props.unfollow} 
                            toggleFollowingProgress={props.toggleFollowingProgress} 
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
                        <WidgetYofamiliar />
                    </>
                }
            />
        </div>
    )
}
export default Users;