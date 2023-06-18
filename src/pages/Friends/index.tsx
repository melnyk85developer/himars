import React from "react";
// import store from "store/reduxStore.js";
import routeMain from "./routes";
import FriendsList from "./FriendsList";
import "./styles.scss";
import { UserType } from "types/types";

type PropsType = {
    friends: Array<UserType>
}
const Friends: React.FC<PropsType> = (props) => {
    return (
        <>
            {props.friends.length > 0 && <FriendsList friends={props.friends}/>}
        </>
    )
}
export {routeMain};
export default Friends;