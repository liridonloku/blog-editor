import axios from "axios";
import React, { useEffect, useState } from "react";
import { User } from "../App";
import { Post } from "./Cards";
import { useForm } from "react-hook-form";
import SingleComment from "./SingleComment";

interface Props {
  post: Post;
  user: null | User;
}

export interface Comment {
  _id: string;
  post: string;
  userName: string;
  content: string;
  date: Date;
}

const Comments: React.FC<Props> = ({ post, user }) => {
  const { register, handleSubmit, reset } = useForm();
  const [comments, setcomments] = useState<Comment[]>([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `https://stark-bastion-85808.herokuapp.com/api/posts/${post._id}/comments`,
        });
        setcomments(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getComments();
  }, [post._id]);

  const onSubmit = async (data: any, e: any) => {
    try {
      await axios({
        method: "post",
        url: `https://stark-bastion-85808.herokuapp.com/api/posts/${post._id}/comments`,
        data: {
          userName: data.userName,
          content: data.content,
        },
      });
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteComment = async (id: string) => {
    try {
      if (user?.token) {
        const response = await axios({
          method: "delete",
          url: `https://stark-bastion-85808.herokuapp.com/api/posts/${post._id}/comments/${id}`,
          headers: {
            Authorization: user?.token,
          },
        });
        console.log(response.data);
        setcomments(
          comments.filter((comment) => comment._id.toString() !== id)
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h2 className="text-center">Comments</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            User Name
          </label>
          <input
            type="text"
            {...register("userName")}
            id="userName"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Comment
          </label>
          <textarea
            rows={4}
            {...register("content")}
            id="content"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3 text-center">
          <button type="submit" className="btn btn-primary px-4">
            Post Comment
          </button>
        </div>
      </form>
      {comments.map((comment) => (
        <SingleComment
          key={comment._id}
          comment={comment}
          deleteComment={deleteComment}
        />
      ))}
    </>
  );
};

export default Comments;
