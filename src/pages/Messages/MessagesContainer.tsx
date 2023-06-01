import React, { useEffect, useState } from "react";
import { compose } from "redux";
import { withAuthRedirect } from "hoc/withAuthRedirect.js";
import { friendsAPI } from "services/friendsApi";
import { connect } from "react-redux";
import { actions } from "store/messagesReducer";
import Messages from "./index.js";
import routeMain from "./routes.js";
import "./styles.scss";
import hiMarsApi from '../../fixtures/HiMarsMoks.js';
import { AppStateType } from "store/reduxStore.js";

const MessagesContainer = (props: any) => {
    const [usersList, setUsersList] = useState(hiMarsApi.users);

    useEffect(() => {
        friendsAPI.getFriends().then(response => {
            // setUsersList(response.data)
            setUsersList(hiMarsApi.users)
        }) 
    }, [])
    
    return <Messages sendMessage={props.sendMessage} usersList={usersList} messagesPage={props.messagesPage}/>
}

let mapStateToProps = (state: AppStateType) => {
    return {
        messagesPage: state.messagesPage,
    }
}

export {routeMain};
export default compose(
    connect(mapStateToProps, {...actions}),
    withAuthRedirect
)(MessagesContainer);