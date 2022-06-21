import React from "react";
import { Post } from "./Cards";
import defaultImage from "../assets/images.png";

interface Props {
  post: Post;
}

const Card: React.FC<Props> = ({ post }) => {
  return (
    <div className="col-xl-4">
      <div className="card m-3 shadow-sm">
        <img
          src={post.poster ? post.poster : defaultImage}
          onError={(e) => {
            if (e.currentTarget.src !== defaultImage) {
              e.currentTarget.onerror = null;
              e.currentTarget.src = defaultImage;
            }
          }}
          className="card-img-top"
          alt="Post"
        />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">
            {post.published ? "Published" : "Not published"}
          </p>
          <p className="card-text">
            <small className="text-muted">
              {new Date(post.date).toUTCString()}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
