import React from "react";
import routeMain from "./routes";
import LSidebar from "../../components/LSidebar";
import RSidebar from "../../components/RSidebar";
import "./styles.scss";

const Music = () => {
    return (
        <section className="wrapContent">
            <LSidebar content={undefined} />
                <div className="contentMusic">
                    <h1>This is Music</h1>
                </div>
            <RSidebar content={undefined} />
        </section>
    )
}
export {routeMain};
export default Music;