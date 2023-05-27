import React, { useEffect, useState } from "react";
import { compose } from "redux";
import { friendsAPI } from "services/friendsApi";
import { withAuthRedirect } from "hoc/withAuthRedirect";
import Friends from ".";
import { routeMain } from "pages/Friends";

const FriendsContainer = (props) => {
    const [friendsList, setFriendsList] = useState([]);

    useEffect(() => {
        friendsAPI.getFriends().then(response => {
            setFriendsList(response.data.filter( item => item.followed === true));
        }) 
    }, [])

    return <Friends friendsList={friendsList}/>
}
export {routeMain};
export default compose(
    withAuthRedirect
)(FriendsContainer);;