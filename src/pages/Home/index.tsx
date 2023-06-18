import React from "react";
import routeMain from "./routes";
import { NavLink } from 'react-router-dom';
import LSidebar from "../../components/LSidebar/index";
import RSidebar from "../../components/RSidebar/index";
import "./styles.scss";

const Home = () => {
    return (
        <section className="wrapContent">
            <LSidebar content={undefined} />
            <div className="contentHome">
                <nav className="wrap_nav_video">
                    <div className="menu">
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/news">News</NavLink></li>
                            <li><NavLink to="/contacts">Comtacts</NavLink></li>
                        </ul>
                    </div>
                </nav>
                <h1> This is Home</h1>
            </div>
            <RSidebar content={undefined} />
        </section>
    )
}
export {routeMain};
export default Home;