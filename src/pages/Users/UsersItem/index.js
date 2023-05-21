import React from "react";
import { NavLink } from "react-router-dom";
import { routeMain as  routeProfile} from "pages/Profile";
import userPhoto from "../../../assets/user.png";
import "./styles.scss";

const UsersItem = (props) => {
    return (
        <section className="wrapUsersItem">
            <div className="usersItem">
                <div className="wrapUserBlock_1">
                    <NavLink to={routeProfile(props.user.id)} className="navLink">
                        <div className="wrapUsersAvatar">
                            <img onClick={props.userDetailPage} 
                                 src={ props.user.photos.small != null 
                                    ? props.user.photos.small 
                                    : userPhoto} 
                                 alt="avatar" 
                                 className="usersAvatar"/>
                        </div>
                    </NavLink>
                </div>
                <div className="userData">
                    <div className="wrapUserBlock_2">
                        <li className="userName">
                            <p>{props.user.name}{' '}{props.user.surname}</p>
                        </li>
                    </div>
                    <div className="userFamilyStatus">
                        <p>Status:{' '}{props.user.status}</p>
                    </div>
                </div>
            </div>
            <div className="wrapAllButton">
                <div className="wrapButton">
                    { props.user.followed ? (
                        <button disabled={props.followingInProgress
                            .some( id => id === props.user.id)} 
                                onClick={ () => {props.unfollow(props.user.id)

                        }} className="btnFriendsTrue">Удалить из Друзей</button>
                        ) : (
                        <button disabled={props.followingInProgress
                            .some( id => id === props.user.id)} 
                                onClick={ () => {props.follow(props.user.id)

                        }} className="btnFriendsTrue">Добавить в Друзья</button>) 
                    }
                </div>
                <div className="wrapBtnMsg">
                    <button>Написать Сообшение</button>
                </div>
            </div>
        </section>
    )
}
export default UsersItem;