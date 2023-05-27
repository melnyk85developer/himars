import React, { useEffect, useState } from "react";
import { compose } from "redux";
import { withAuthRedirect } from "hoc/withAuthRedirect.js";
import { friendsAPI } from "services/friendsApi";
import { connect } from "react-redux";
import { sendMessageCreator } from "store/messagesReducer";
import Messages from "./index.js";
import routeMain from "./routes.js";
import "./styles.scss";

const MessagesContainer = (props) => {
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        friendsAPI.getFriends().then(response => {
            setUsersList(response.data)
        }) 
    }, [])
    
    return <Messages sendMessage={props.sendMessage} usersList={usersList} messagesPage={props.messagesPage}/>
}

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        },

    }
}

export {routeMain};
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(MessagesContainer);