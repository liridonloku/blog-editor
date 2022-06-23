import axios from "axios";
import React, { useEffect, useState } from "react";
import { User } from "../App";
import Card from "./Card";

interface Props {
  user: null | User;
}

interface Author {
  firstName: string;
  lastName: string;
  email: string;
}

export interface Post {
  _id: string;
  title: string;
  poster: string;
  article: string;
  published: boolean;
  date: Date;
  author: Author;
}

const Cards: React.FC<Props> = ({ user }) => {
  const [posts, setposts] = useState<Array<Post>>([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios({
        method: "get",
        url: "https://stark-bastion-85808.herokuapp.com/api/posts/all",
        headers: {
          Authorization: `${user?.token}`,
        },
      });
      setposts(response.data);
    };
    if (user?.token) {
      getPosts();
    }
  }, [user?.token]);

  const renderCards = () => {
    return posts.map((post) => <Card key={post._id} post={post} />);
  };
  return (
    <main className="flex-grow-1">
      <h1 className="text-center">Posts</h1>
      <div className="container-fluid d-flex flex-wrap justify-content-center">
        {renderCards()}
      </div>
    </main>
  );
};

export default Cards;
