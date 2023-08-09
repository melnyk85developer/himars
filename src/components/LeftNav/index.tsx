import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { routeMain as routeProfile }  from '../../pages/Profile/ProfileContainer';
import { routeMain as routeMessages }  from '../../pages/Messages';
import { routeMain as routeMusic } from '../../pages/Music';
import { routeMain as routeShops } from '../../pages/Shops';
import { routeMain as routeVideo } from '../../pages/Video';
import { routeMain as routeFriends } from '../../pages/Friends/index';
import { routeMain as routeUsers } from '../../pages/Users/usersContainer';
import { AppStateType } from "../../store/reduxStore";
import "./styles.scss";

type PropsType = {
    authorizedUserId: string | undefined
}

const LeftNav: React.FC<PropsType> = (props) => {
    
    const userId = props.authorizedUserId
    // console.log("nav" + " " + userId)
    
    return (
        <nav className="Left_nav">
            <div className="Left_menu">
                <div className="LSidebar_Nav">
                    <ul>
                        <li><NavLink to={routeProfile(userId)} >Profile</NavLink></li>
                        <li><NavLink to={routeMessages()} >Message</NavLink></li>
                        <li><NavLink to={routeFriends()} >Friends</NavLink></li>
                        <li><NavLink to={routeMusic()} >Music</NavLink></li>
                        <li><NavLink to={routeVideo()} >Video</NavLink></li>
                        <li><NavLink to={routeShops()} >Shops</NavLink></li>
                        <li><NavLink to={routeUsers()} >Users</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
let mapStateToProps = (state: AppStateType) => ({
    authorizedUserId: state.auth.id
})
export default compose<React.ComponentType>(
    connect(mapStateToProps))(LeftNav);;