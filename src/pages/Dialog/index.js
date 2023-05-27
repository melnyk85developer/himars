import React, { useEffect, useState } from "react";
import { friendsAPI } from "services/friendsApi";
// import { useParams } from "react-router-dom";
import CompanionItem from "pages/Messages/CompanionItem/index.js";
import routeMain from "./routes.js";
import LSidebar from "../../components/LSidebar/index.js";
import RSidebar from "../../components/RSidebar/index.js";
import WidgetYofamiliar from "../../components/Widgets/WidgetYofamiliar/index.js";
import "./styles.scss";

const Dialog = (props) => {
    // const {id} = useParams();
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        friendsAPI.getFriends().then(response => {
            setUsersList(response.data)
        }) 
    }, [])

    let companion = usersList
    .map( companion => <CompanionItem
        key={companion.id} 
        id={companion.id}
        avatar={companion.avatar}
        name={companion.name}
        surname={companion.surname}

    />)

    return (
        <section>
            <div className="wrapContent">
                <LSidebar 
                    content={
                        <div className="companions">{companion}</div>
                    }
                />
                <div className="contentProfiles">
                    <p>Диалог с пользователем</p>
                    {/* {filtered.name}
                    {filtered.surname} */}
                </div>
                <RSidebar 
                content={
                    <>
                        <WidgetYofamiliar />
                    </>
                }
                />
            </div>
        </section>
    )
}
export {routeMain};
export default Dialog;