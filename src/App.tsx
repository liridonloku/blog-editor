import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Form from "./components/Form";
import axios from "axios";
import SinglePost from "./components/Post";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  token: string;
}

const App: React.FC = () => {
  const [user, setuser] = useState<null | User>(null);

  useEffect(() => {
    const getUser = async () => {
      let token = localStorage.getItem("blogToken");
      if (typeof token === "string") {
        try {
          const response = await axios({
            method: "post",
            url: "https://stark-bastion-85808.herokuapp.com/users/verify",
            headers: {
              Authorization: token,
            },
          });
          setuser({ ...response.data, token });
        } catch (err) {
          console.log(err);
          localStorage.removeItem("blogToken");
        }
      }
    };
    getUser();
  }, []);

  const logOut = () => {
    localStorage.removeItem("blogToken");
    setuser(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home user={user} logOut={logOut} />} />
        <Route path="/login" element={<Login user={user} />} />
        <Route path="/form" element={<Form user={user} logOut={logOut} />} />
        <Route
          path="/:id"
          element={<SinglePost user={user} logOut={logOut} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
