import React from "react";
import { NavLink } from 'react-router-dom';

const LeftNaw = (props) => {
    return (
        <nav className="Left_nav">
            <div className="Left_menu">
                <div className="LSidebar_Nav">
                    <ul>
                        <li><NavLink to="himars/profile/" >Profile</NavLink></li>
                        <li><NavLink to="himars/home/" >Home</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default LeftNaw;