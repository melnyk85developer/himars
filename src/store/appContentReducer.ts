import { getAuthUserData } from "./authReducer";
import { InferActionsTypes } from "./reduxStore";

let initialState = {
    initialized: false,
}
export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const appContentReducer = (state = initialState, action: ActionsType): InitialStateType  => {
    switch(action.type){
        case 'APP_CONTENT/INITIALIZED_SUCCESS':
            return { 
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const actions = {
    initializedSuccess: () => ({type: 'APP_CONTENT/INITIALIZED_SUCCESS'} as const)
}

export const initializeAppContent = () => (dispatch: any) => {
    const promise = dispatch(getAuthUserData())
    
    Promise.all([promise]).then(() => {
        dispatch(actions.initializedSuccess())
    })
}
export default appContentReducer;