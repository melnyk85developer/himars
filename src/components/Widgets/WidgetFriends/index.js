import React, { useEffect, useState } from "react";
import getFriends from "services/getFriends";
import WidgetFriendsList from "./WidgetFriendsList"
import "./styles.scss";

const WidgetFriends = () => {
    const [friendsList, setFriendsList] = useState([]);

    useEffect(() => {
        getFriends().then(response => {
            setFriendsList(response.data.filter( item => item.followed === true));
        }) 
    }, []);
    
    return (
        <div className="borderWidgets">
            <div className="wrapH4Widgets">
                <h4>Друзья</h4>
            </div>
            <div className="widgetFriends">
                {friendsList.length > 0 && <WidgetFriendsList friends={friendsList.slice(0,6)}/>}
            </div>
        </div>
    )
}
export default WidgetFriends;