// import usersReducer, { InitialState, actions } from "./usersReducer";

// let state: InitialState;

// beforeEach(() => {

//     state = {
//         users: [
//             {
//                 id: "0", 
//                 name: "Maksym 0",
//                 surname: "Melnyk 0",
//                 followed: false,
//                 photos: {small: null, large: null},
//                 status: "status 0",
//                 filter: {
//                     term: '',
//                     friend: null as null | boolean
//                 }
//             },
//             {
//                 id: "1", 
//                 name: "Maksym 1",
//                 surname: "Pupkin 1",
//                 followed: false,
//                 photos: {small: null, large: null},
//                 status: "status 1",
//                 filter: {
//                     term: '',
//                     friend: null as null | boolean
//                 }
//             },
//             {
//                 id: "2", 
//                 name: "Maksym 2",
//                 surname: "Pupkin 2",
//                 followed: true,
//                 photos: {small: null, large: null},
//                 status: "status 2",
//                 filter: {
//                     term: '',
//                     friend: null as null | boolean
//                 }
//             },
//             {
//                 id: "3", 
//                 name: "Maksym 3",
//                 surname: "Pupkin 3",
//                 followed: true,
//                 photos: {small: null, large: null},
//                 status: "status 3",
//                 filter: {
//                     term: '',
//                     friend: null as null | boolean
//                 }
//             }
//         ],
//         pageSize: 10,
//         totalUsersCount: 0,
//         currentPage: 1,
//         isFetching: false,
//         followingInProgress: []
//     };
// }) 

// test('follow success', () => {
//     const newState = usersReducer(state, actions.followSuccess(1))
//     expect(newState.users[0].followed).toBeFalsy();
//     expect(newState.users[1].followed).toBeTruthy();
// })
// test('unfollow success', () => {
//     const newState = usersReducer(state, actions.unfollowSuccess(3))
//     expect(newState.users[2].followed).toBeTruthy();
//     expect(newState.users[3].followed).toBeFalsy();
// })
export default {}