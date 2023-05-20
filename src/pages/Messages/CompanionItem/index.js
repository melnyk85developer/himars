import React from "react";
import { NavLink } from "react-router-dom";
import { routeMain as  routeDialog} from "pages/Dialog";
import "./styles.scss";

const CompanionItem = (props) => {
    return (
        <div className="companion">
            <NavLink to={routeDialog(props.id)}> 
                <div className="companionItem">
                    <img className="miniAvatarMsg" src={props.avatar} alt={props.avatar}/>
                    <div className="wrapLi">
                        <li className="liName">{props.name}</li>
                        <li className="liSurName">{props.surname}</li>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default CompanionItem;