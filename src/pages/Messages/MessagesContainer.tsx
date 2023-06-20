import React, { useEffect, useState } from "react";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { friendsAPI } from "../../services/friendsApi";
import { connect } from "react-redux";
import { InitialStateType, actions } from "../../store/messagesReducer";
import { AppStateType } from "../../store/reduxStore";
import Messages from "./index";
import routeMain from "./routes";
import "./styles.scss";

type PropsType = {
    messagesPage: InitialStateType
    companions: InitialStateType
    sendMessage: (massageText: string) => void
}

const MessagesContainer: React.FC<PropsType> = (props) => {
    const companions = props.messagesPage.companions
    const [usersList, setUsersList] = useState(companions);

    useEffect(() => {
        setUsersList(usersList)
    }, [usersList])
    
    return  <Messages 
                sendMessage={props.sendMessage} 
                messagesPage={props.messagesPage}
                companions={props.companions}
            />
}

let mapStateToProps = (state: AppStateType) => {
    return {
        messagesPage: state.messagesPage,
    }
}

export {routeMain};
export default compose<React.ComponentType>(
    connect(mapStateToProps, {...actions}),
    withAuthRedirect
)(MessagesContainer);