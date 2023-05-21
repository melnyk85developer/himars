import React from "react";
import { NavLink } from "react-router-dom";
import { routeMain as  routeProfile} from "pages/Profile";
import "./styles.scss";

const WidgetFriendsItem = (props) => {

    return (
        <div className="wrapFriendsWidget">
            <NavLink to={routeProfile(props.friends.id)}>
                <div className="friendItem">
                    <img className="miniAvatarFriend" src={props.friends.avatar} alt="ava"/>
                    <li className="friendLiItem"><p>{props.friends.name}</p></li>
                </div>
            </NavLink>
        </div>
    )
}

export default WidgetFriendsItem;