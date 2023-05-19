import React from "react";
import routeMain from "./routes.js";
import LSidebar from "../../components/LSidebar";
import RSidebar from "../../components/RSidebar";
import "./styles.scss";

const Shops = () => {
    return (
        <section className="wrapContent">
            <LSidebar />
                <div className="contentShops">
                    <h1>This is Shops</h1>
                </div>
            <RSidebar />
        </section>
    )
}
export {routeMain};
export default Shops;