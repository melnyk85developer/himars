import React from "react";
import { NavLink } from "react-router-dom";
// import { routeMain as  routeDialog} from "pages/Dialog";
import "./styles.scss";

export type PropsType = {
    id: string
    name: string
    surname: string
    avatar: string
}
const CompanionItem: React.FC<PropsType> = (props) => {
    const dialog = "dialog" + props.id

    return (
        <div className="companion">
            {/* <NavLink to={routeDialog(props.id)}>  */}
            <NavLink to={dialog}> 
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