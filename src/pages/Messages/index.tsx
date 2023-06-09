import React from "react";
import routeMain from "./routes";
import LSidebar from "../../components/LSidebar/index.js";
import RSidebar from "../../components/RSidebar/index.js";
import MessageItem from "./MessageItem/index.js";
import CompanionItem from "./CompanionItem/index.js";
import MessageList from "./MessageList/index.js";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import { InitialStateType } from "store/messagesReducer";
// import WidgetFriends from "../../components/Widgets/WidgetFriends/index.js";
// import WidgetPeople from "../../components/Widgets/WidgetsPeople/index.js";
// import WidgetYofamiliar from "../../components/Widgets/WidgetYofamiliar/index.js";
import "./styles.scss";

type PropsType = {
    messagesPage: InitialStateType
    companions: InitialStateType
    sendMessage: (massageText: string) => void
}
export type NewMessageFormValuesType = {
    newMessageBody: string
}
type LoginFormValuesTypeKeys = Extract<keyof NewMessageFormValuesType, string>

const Messages: React.FC<PropsType> = (props) => {

    const companion = props.messagesPage.companions
        .map( (companion) => <CompanionItem
            key={companion.id} 
            id={companion.id}
            avatar={companion.avatar}
            name={companion.name}
            // surname={companion.surname}

        />)

    const messages = props.messagesPage.messages
        .map(message => <MessageItem
            key={message.id}
            id={message.id}
            message={message.message}
            avatar={message.avatar}
            im={message.im}
        />)

    const addNewMessage = (values: NewMessageFormValuesType) => {
        props.sendMessage(values.newMessageBody);
    }
    return (
        <section className="wrapContent">
            <LSidebar 
                content={
                    <div className="companions">{companion}</div>
                }
            />
            {messages.length > 0 && <MessageList messages={messages}/>}
            
            <div className="wrapTextareaMessages">

                <AddMessageForm onSubmit={addNewMessage}/>

            </div>

            <RSidebar 
                content={
                    <>
                        {/* <WidgetFriends friends={props.friends}/> */}
                        {/* <div className="wrapMessageWidgetYofamiliar"><WidgetYofamiliar users={props.users}/></div>
                        <div className="wrapMessgeWidgetPeople"><WidgetPeople users={props.users}/></div> */}
                    </>
                }

            />
        </section>
    )
}

export {routeMain};
export default Messages;