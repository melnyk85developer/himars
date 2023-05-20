import { v1 as uuidv1 } from 'uuid';
import HiMarsMoks from "../fixtures/HiMarsMoks";

const SEND_MESSAGE = 'messages/SEND-MESSAGE';

const companions = HiMarsMoks.companions;
const messages = HiMarsMoks.messages;

let initialState = {
    companions,
    messages
}
const messagesReducer = (state = initialState, action) => {
    switch(action.type){
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return { 
                ...state, 
                messages: [ ...state.messages, {id: uuidv1(), message: body} ]
            };
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})
export default messagesReducer;