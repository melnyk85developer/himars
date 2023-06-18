import React from "react";
import routeMain from "./routes";
import { NavLink } from 'react-router-dom';
import LSidebar from "../../components/LSidebar";
import RSidebar from "../../components/RSidebar";
import "./styles.scss";

const News = () => {
    return (
        <section className="wrapContent">
            <LSidebar content={undefined} />
            <div className="contentNews">
                <nav className="wrap_nav_video">
                    <div className="menu">
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/news">News</NavLink></li>
                            <li><NavLink to="/contacts">Comtacts</NavLink></li>
                        </ul>
                    </div>
                </nav>
                <h1> This is News</h1>
            </div>
            <RSidebar content={undefined} />
        </section>
    )
}
export {routeMain};
export default News;