import React from "react";
import Comment from "./Comment"

const comments = [
    {
        name: "이원섭",
        comment: "엄",
    },
    {
        name: "김형섭",
        comment: "준",
    },
    {
        name: "박태환",
        comment: "식",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;