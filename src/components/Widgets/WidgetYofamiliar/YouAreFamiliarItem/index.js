import React from "react";
import { NavLink } from "react-router-dom";
import { routeMain as  routeUserProfile} from "pages/UserProfile";
import "./styles.scss";

const YouAreFamiliarItem = (props) => {
    return (
        <div className="wrapFriendsWidget">
            <NavLink to={routeUserProfile(props.friends.id)}>
                <div className="friendItem">
                    <img className="miniAvatarFriend" src={props.friends.avatar} alt={props.friends.avatar}/>
                    <li className="friendLiItem"><p>{props.friends.name}</p></li>
                </div>
            </NavLink>
        </div>
    )
}

export default YouAreFamiliarItem;