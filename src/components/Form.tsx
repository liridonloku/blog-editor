import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useForm } from "react-hook-form";
import { User } from "../App";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Props {
  user: null | User;
  logOut: Function;
}

const Form: React.FC<Props> = ({ user, logOut }) => {
  const { register, handleSubmit } = useForm();
  const editorRef = useRef<any>(null);

  const navigate = useNavigate();

  const onSubmit = async (data: any, e: any) => {
    console.log(data);
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
    try {
      if (user) {
        const response = await axios({
          method: "post",
          url: "https://stark-bastion-85808.herokuapp.com/api/posts",
          data: `title=${data.title}&poster=${
            data.poster
          }&article=${editorRef.current.getContent()}&published=${
            data.published
          }`,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `${user.token}`,
          },
        });
        console.log(response);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header user={user} logOut={logOut} />
      <h1 className="text-center mb-4">New Post</h1>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Short Title
            </label>
            <input
              type="text"
              {...register("title")}
              id="title"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="poster" className="form-label">
              Poster image link
            </label>
            <input
              type="text"
              {...register("poster")}
              id="poster"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <Editor
              apiKey="your-api-key"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="<p></p>"
              init={{
                height: 500,
                menubar: true,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              {...register("published")}
              value=""
              id="flexCheckChecked"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Publish
            </label>
          </div>
          <div className="mb-3 text-center">
            <button type="submit" className="btn btn-primary px-4">
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
