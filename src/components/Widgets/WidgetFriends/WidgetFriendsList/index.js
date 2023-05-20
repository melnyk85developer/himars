import React from "react";
import WidgetFriendsItem from "../WidgetFriendsItem";

const WidgetFriendsList = (props) => {
    return (
        <>
            {props.friends.map( item => (
                <WidgetFriendsItem key={item.id} friends={item}/>
            ))}
        </>
    )
}
export default WidgetFriendsList;