import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div key={comment}>
            <Comment comment={comment} />
            <div className="ml-5 border-l-2 border-black">
              <CommentsList comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsList;
