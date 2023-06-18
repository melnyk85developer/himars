import React from "react";
import Post from "./Post";
import AddNewPostForm, { AddPostFormValuesType } from "./AddNewPostForm"
import { PostType } from "types/types";
import "./styles.scss";

export type MapPropsType = {
    posts: Array<PostType>
}
export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}
const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props) => {

    let posts = [...props.posts].reverse().map( post => <Post
        key={post.id}
        id={post.id} 
        post={post.post} 
        like={post.like} 
        dislike={post.dislike}
    />)

    let onAddPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText);
    }

    return (
        <div>
            <AddNewPostForm onSubmit={onAddPost} />
            <div className="borderPosts">
                <div className="posts">{posts}</div>
            </div>
        </div>
    )
}

const MyPostMemorized = React.memo(MyPosts)

export default MyPostMemorized;