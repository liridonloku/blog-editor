import React, { useEffect, useState } from "react";
import { User } from "../App";
import Header from "./Header";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Post } from "./Cards";
import parse from "html-react-parser";
import dompurify from "dompurify";
import defaultImage from "../assets/images.png";

interface Props {
  user: null | User;
  logOut: Function;
}

const SinglePost: React.FC<Props> = ({ user, logOut }) => {
  const [post, setpost] = useState<null | Post>();
  const { id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `https://stark-bastion-85808.herokuapp.com/api/posts/${id}`,
        });
        setpost(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPost();
  }, [id]);

  const htmlFrom = (htmlString: string) => {
    const cleanHtmlString = dompurify.sanitize(htmlString, {
      USE_PROFILES: { html: true },
    });
    const html = parse(cleanHtmlString);
    return html;
  };

  const changePublishedStatus = async () => {
    try {
      if (user?.token) {
        const response = await axios({
          method: "put",
          url: `https://stark-bastion-85808.herokuapp.com/api/posts/${id}`,
          data: {
            ...post,
            published: !post?.published,
          },
          headers: {
            Authorization: user.token,
          },
        });
        setpost(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header user={user} logOut={logOut} />
      {post && (
        <div className="container-sm">
          <div className="post-image d-flex justify-content-center mb-3">
            <img src={post.poster || defaultImage} alt="" />
          </div>
          <h1 className="text-center mb-3">{post.title}</h1>
          {htmlFrom(post.article)}
          <p className="text-center">
            Status:{" "}
            {post.published ? (
              <span className="text-success fw-bold">Published</span>
            ) : (
              <span className="text-danger fw-bold">NOT Published</span>
            )}
          </p>
          <div className="d-flex justify-content-center mb-3">
            {post.published ? (
              <button
                className="btn btn-secondary mx-2"
                onClick={changePublishedStatus}
              >
                Un-Publish
              </button>
            ) : (
              <button
                className="btn btn-success mx-2"
                onClick={changePublishedStatus}
              >
                Publish
              </button>
            )}
            <button className="btn btn-danger mx-2">Delete</button>
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePost;
