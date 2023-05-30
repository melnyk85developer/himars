import HiMarsMoks from "../fixtures/HiMarsMoks";

const users = HiMarsMoks.users;

let initialState = {
    friends: [] as Array<string>,
    users: users
}
type InitialStateType = typeof initialState;

const friendsReducer = (state = initialState, action: InitialStateType) => {
    return state;
}

export default friendsReducer;