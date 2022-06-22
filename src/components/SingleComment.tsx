import React from "react";
import { Comment } from "./Comments";

interface Props {
  comment: Comment;
  deleteComment: Function;
}

const SingleComment: React.FC<Props> = ({ comment, deleteComment }) => {
  return (
    <>
      {comment && (
        <div className="card mb-3">
          <h5 className="card-header d-flex justify-content-between align-items-center">
            {comment.userName}
            <button
              className="btn btn-sm btn-danger"
              onClick={() => deleteComment(comment._id.toString())}
            >
              Delete
            </button>
          </h5>
          <div className="card-body">
            <p className="card-text">{comment.content}</p>
            <p className="text-end text-secondary card-text">
              {new Date(comment.date).toUTCString()}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleComment;
