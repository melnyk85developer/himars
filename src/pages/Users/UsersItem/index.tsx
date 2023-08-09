import React, { MouseEventHandler } from "react";
import { NavLink } from "react-router-dom";
import { routeMain as  routeProfile} from "../../../pages/Profile";
import userPhoto from "../../../assets/user.png";
import { UserType } from "../../../types/types";
import "./styles.scss";

type PropsType = {
    user: UserType | any
    followingInProgress: Array<number>
    userDetailPage: MouseEventHandler<HTMLImageElement> | undefined;
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}
type UserIdTypes = {
    userId: string | undefined | number | null
}

const UsersItem: React.FC<PropsType & UserIdTypes> = (props) => {

    let userId = props.user.id as string | undefined //===

    return (
        <section className="wrapUsersItem">
            <div className="usersItem">
                <div className="wrapUserBlock_1">
                    <NavLink to={routeProfile(userId)} className="navLink">
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