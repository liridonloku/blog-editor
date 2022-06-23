import React from "react";
import { Post } from "./Cards";
import defaultImage from "../assets/images.png";
import { Link } from "react-router-dom";

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
          <h5 className="card-title">
            <Link className="navbar-brand text-dark" to={`./${post._id}`}>
              {post.title}
            </Link>
          </h5>
          {post.published ? (
            <p className="card-text text-success">Published</p>
          ) : (
            <p className="card-text text-danger">Not published</p>
          )}
          <p className="card-text text-end">
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
