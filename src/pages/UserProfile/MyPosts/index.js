import React from "react";
import Post from "./Post";
import "./styles.scss";
import {Field, reduxForm } from "redux-form";

const MyPosts = (props) => {

    let posts = props.posts.map( post => <Post
        key={post.id}
        id={post.id} 
        post={post.post} 
        like={post.like} 
        dislike={post.dislike}
    />)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className="borderPosts">
                <div className="posts">{posts}</div>
            </div>
        </div>
    )
}
const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="wrapMyPost">
            <Field name="newPostText" component={"textarea"} placeholder="Что у Вас нового?" className="inputPostProfile"/>

            <button className="buttonMyPost">Add Post</button>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;