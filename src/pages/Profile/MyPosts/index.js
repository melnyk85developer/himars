import React from "react";
import Post from "./Post";
import { Textarea } from "components/FormsControls/FormsControls";
import {Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "utils/validators/validators";
import "./styles.scss";

const maxLength3000 = maxLengthCreator(3000);

const MyPosts = React.memo(props => {

    let posts = [...props.posts].reverse().map( post => <Post
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
})
const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="wrapMyPost">
            <Field  validate={[required, maxLength3000]} name="newPostText" component={Textarea} placeholder="Что у Вас нового?" className="inputPostProfile"/>

            <button className="buttonMyPost">Add Post</button>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;