import React from "react";
import "./styles.scss";

const MessageList = (props) => {

    return (
        <div className="messages">
            {props.messages}
        </div>
    )
}
export default MessageList;