import React from "react";
import { NavLink } from "react-router-dom";
import { routeMain as  routeProfile} from "../../../pages/Profile/ProfileContainer";
import userPhoto from "../../../assets/user.png"
import "./styles.scss";
import { UserType } from "../../../types/types";

type PropsType = {
    friends: UserType | any
}

const friendItem: React.FC<PropsType> = (props) => {
    return (
        <div className="wrapFriendsItem">
            <NavLink to={routeProfile(props.friends.id)}>
                <div className="friendsItem">
                    <img className="friendsAvatar" src={ props.friends.photos.small != null 
                                    ? props.friends.photos.small 
                                    : userPhoto}  alt="ava"/>
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