import { v1 as uuidv1 } from 'uuid';
import HiMarsMoks from "../fixtures/HiMarsMoks";
import { InferActionsTypes } from './reduxStore';

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
    messages: messages as Array<MessagesType | any>
}

const messagesReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch(action.type){
        case 'MESSAGES/SEND-MESSAGE':
            let body = action.newMessageBody;
            return { 
                ...state, 
                messages: [ ...state.messages, {id: uuidv1(), message: body} ]
            };
        default:
            return state;
    }
}
export const actions = {
    sendMessageCreator: (newMessageBody: string) => ({type: 'MESSAGES/SEND-MESSAGE', newMessageBody} as const)
}
export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
export default messagesReducer;