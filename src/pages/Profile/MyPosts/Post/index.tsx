import React from "react";
import "./styles.scss";

type PropsType = {
    id: number | string
    post: string
    like: string
    dislike: string
    // likeCount: number;
}

const Post: React.FC<PropsType> = (props) => {

    return (
        <div className="post">
            <img src="data:image/jpeg;base64,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" alt="Post"/>

            <div className="wrap_post">
                <h3>Заголовок</h3>
                <div className="textPost"><p>{props.post}</p></div>
                <div className="wrapLikes">
                    <span><p className="like">like {props.like}</p></span>
                    <span><p className="dislike">dislike {props.dislike}</p></span>
                    {/* {props.likeCount} */}
                </div>
            </div>
        </div>
    )
}

export default Post;