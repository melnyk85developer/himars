import React, { useEffect, useState } from "react";
import { friendsAPI } from "services/friendsApi";
import PeopleItem from "./WidgetPeopleItem";
import "./styles.scss";

const WidgetPeople = () => {
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        friendsAPI.getFriends().then(response => {
            setUsersList(response.data)
        }) 
    }, []);

    let users = usersList
    .map( users => <PeopleItem 
        key={users.id} 
        id={users.id}
        avatar={users.avatar}
        name={users.name}
        surname={users.surname}
    />)
    
    return (
        <div className="wrapPeople">
            <div className="borderWidgets">
            <div className="wrapH4Widgets">
                <h4>Люди</h4>
            </div>
                <div className="widgetFriends">
                    {users.slice(0,9)}
                </div>
            </div>
        </div>
    )
}

export default WidgetPeople;