import HiMarsMoks from "../fixtures/HiMarsMoks";

// const friends = HiMarsMoks.friends;
const users = HiMarsMoks.users;

let initialState = {
    friends: [] as Array<string>,
    users
}
type InitialStateType = typeof initialState;

const friendsReducer = (state = initialState, action: any) => {
    return state;
}

export default friendsReducer;