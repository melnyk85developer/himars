import React from "react";
import "./styles.scss";

const MessageItem = (props) => {

    const rightImg = {
        marginLeft: "447px",
        zIndex: "0"
    }
    const leftImg = {
        marginLeft: "5px",
        zIndex: "0"
    }
    const rightMsg = {
        width: "90%",
        marginLeft: "100px",
        marginTop: "-5px"
    }
    const leftMsg = {
        width: "90%",
        marginLeft: "40px",
        marginTop: "-5px"
    }

    return (
        <div className="messageItem">
            <div className="item">
                <img style={!props.im === false ? rightImg : leftImg} className="miniAvatarMessage" src={props.avatar} alt="ava"/>
                <div >
                    <div style={!props.im === false ? rightMsg : leftMsg} className="messag"><p className="borderMessag">{props.message}</p></div>
                </div>
            </div>
        </div>
    )
}

export default MessageItem;