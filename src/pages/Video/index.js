import React from "react";
import routeMain from "./routes.js";
import { NavLink } from 'react-router-dom';
import LSidebar from "../../components/LSidebar";
import RSidebar from "../../components/RSidebar";
import "./styles.scss";

const Video = () => {
    return (
        <section className="wrapContent">
            <LSidebar />
            <div className="contentVideo">
                <nav className="wrap_nav_video">
                    <div className="menu">
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/news">News</NavLink></li>
                            <li><NavLink to="/contacts">Comtacts</NavLink></li>
                        </ul>
                    </div>
                </nav>
                <h1> This is Video</h1>
            </div>
            <RSidebar />
        </section>
    )
}
export {routeMain};
export default Video;