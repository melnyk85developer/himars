import React from "react";
import routeMain from "./routes";
import LSidebar from "../../components/LSidebar/index";
import RSidebar from "../../components/RSidebar/index";
import "./styles.scss";

const Shops = () => {
    return (
        <section className="wrapContent">
            <LSidebar content={undefined} />
                <div className="contentShops">
                    <h1>This is Shops</h1>
                </div>
            <RSidebar content={undefined} />
        </section>
    )
}
export {routeMain};
export default Shops;