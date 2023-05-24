import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = 'appContent/INITIALIZED_SUCCESS';

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false,
    // globalError: null
}
const appContentReducer = (state = initialState, action: any): InitialStateType  => {
    switch(action.type){
        case INITIALIZED_SUCCESS:
            return { 
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS;
}

export const initializedSuccess = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS})

export const initializeAppContent = () => (dispatch: any) => {
    const promise = dispatch(getAuthUserData())
    
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess())
    })
}
export default appContentReducer;