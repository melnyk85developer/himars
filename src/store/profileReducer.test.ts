import React from "react";
import profileReducer, { actions } from "./profileReducer";
import { ProfileType } from "../types/types";

let state = {
    posts: [
        {id: 1, message: "Hi Mars hello", likeCount: 12},
        {id: 2, message: "Hi Mars bla-bla", likeCount: 2},
        {id: 3, message: "Hi Mars dada", likeCount: 22},
        {id: 4, message: "Hi Mars hochu rabotat`", likeCount: 52},
        {id: 5, message: "Hi Mars hello huylo", likeCount: 32},
    ],
    profile: null,
    status: ''
}
it('lenght of posts should be incremented', () => {
    // 1. test data
    let action = actions.addPostActionCreator("HELLO HI MARS");
    
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);
});

it('message of new post should be correct', () => {
    // 1. test data
    let action = actions.addPostActionCreator("HELLO HI MARS");

    // 2. action
    let newState = profileReducer(state, action);
    
    // 3. expectation
    expect(newState.posts[4].message).toBe("HELLO HI MARS");
});

it('after deleting lenght of messages should be decrenent', () => {
    // 1. test data
    let action  = actions.deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it('after deleting length shouldnt decrenent if id is incorrect', () => {
    // 1. test data
    let action = actions.deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
})


