import React from "react";
// import store from "store/reduxStore.js";
import routeMain from "./routes.js";
import FriendsList from "./FriendsList";
import "./styles.scss";

const Friends = (props) => {
    return (
        <>
            {props.friendsList.length > 0 && <FriendsList friends={props.friendsList}/>}
        </>
    )
}
export {routeMain};
export default Friends;