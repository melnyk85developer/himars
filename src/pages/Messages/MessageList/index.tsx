import React, { ReactNode } from "react";
import "./styles.scss";

type PropsTYpe = {
    messages: string | ReactNode
}

const MessageList: React.FC<PropsTYpe> = (props) => {

    return (
        <div className="messages">
            {props.messages}
        </div>
    )
}
export default MessageList;