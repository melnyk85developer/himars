import React from "react";
import routeMain from "./routes.js";
import LSidebar from "../../components/LSidebar";
import RSidebar from "../../components/RSidebar";
import "./styles.scss";

const Music = () => {
    return (
        <section className="wrapContent">
            <LSidebar />
                <div className="contentMusic">
                    <h1>This is Music</h1>
                </div>
            <RSidebar />
        </section>
    )
}
export {routeMain};
export default Music;