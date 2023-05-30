import React, { useEffect, useState } from "react";
import { compose } from "redux";
import { withAuthRedirect } from "hoc/withAuthRedirect.js";
import { friendsAPI } from "services/friendsApi";
import { connect } from "react-redux";
import { actions } from "store/messagesReducer";
import Messages from "./index.js";
import routeMain from "./routes.js";
import "./styles.scss";

import hiMarsApi from '../../fixtures/HiMarsMoks';

const MessagesContainer = (props) => {
    const [usersList, setUsersList] = useState(hiMarsApi.users);

    useEffect(() => {
        friendsAPI.getFriends().then(response => {
            // setUsersList(response.data)
            setUsersList(hiMarsApi.users)
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
            dispatch(actions.sendMessageCreator(newMessageBody));
        },

    }
}

export {routeMain};
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(MessagesContainer);