import React, { useEffect, useState } from "react";
import getFriends from "services/getFriends";
import YouAreFamiliarList from "./YouAreFamiliarList";
import "./styles.scss";

const WidgetYofamiliar = () => {

    const [youAreFamiliar, setYouAreFamiliar] = useState([]);

    useEffect(() => {
        getFriends().then(response => {
            setYouAreFamiliar(response.data.filter( item => item.followed === true));
        }) 
    }, [])

    return (
        <div className="wrapYofamiliar">
            <div className="borderWidgets">
            <div className="wrapH4Widgets">
                <h4>Возможно Вы знакомы</h4>
            </div>
                <div className="widgetFriends">
                    {youAreFamiliar.length > 0 && <YouAreFamiliarList youAreFamiliar={youAreFamiliar.slice(0,6)}/>}
                </div>
            </div>
        </div>
    )
}

export default WidgetYofamiliar;