import { v1 as uuidv1 } from 'uuid';
import HiMarsMoks from "../fixtures/HiMarsMoks";

const SEND_MESSAGE = 'messages/SEND-MESSAGE';

const companions = HiMarsMoks.companions;
const messages = HiMarsMoks.messages;

type CompanionsType = {
    id: number
    name: string
}
type MessagesType = {
    id: string
    messages: string
}

let initialState = {
    companions: [] as Array<CompanionsType>,
    messages: [] as Array<MessagesType | any>
}

export type InitialStateType = typeof initialState;

const messagesReducer = (state = initialState, action: any): InitialStateType => {
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

type SendMessageCreatorType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorType => ({type: SEND_MESSAGE, newMessageBody})
export default messagesReducer;