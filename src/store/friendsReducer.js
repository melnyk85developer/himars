import HiMarsMoks from "../fixtures/HiMarsMoks";

const friends = HiMarsMoks.friends;
const users = HiMarsMoks.users;

let initialState = {
    friends,
    users
}

const friendsReducer = (state = initialState, action) => {
    return state;
}

export default friendsReducer;