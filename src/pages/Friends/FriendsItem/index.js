import React from "react";
import { NavLink } from "react-router-dom";
import { routeMain as  routeUserProfile} from "pages/UserProfile";
import "./styles.scss";

const friendItem = (props) => {
    return (
        <div className="wrapFriendsItem">
            <NavLink to={routeUserProfile(props.friends.id)}>
                <div className="friendsItem">
                    <img className="friendsAvatar" src={props.friends.avatar} alt="ava"/>
                    <li className="friendsItem"><p>{props.friends.name}</p></li>
                    <li className="friendsSurname"><p>{props.friends.surname}</p></li>
                    <div className="messageText">
                        <p>Написать Сообшение</p>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}
export default friendItem;