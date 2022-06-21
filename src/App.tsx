import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import axios from "axios";

const App: React.FC = () => {
  const [user, setuser] = useState({});

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
          setuser(response.data);
        } catch (err) {
          console.log(err);
          localStorage.removeItem("blogToken");
        }
      }
    };
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login user={user} />} />
        {/* <Route path="/post-form" element={<Form/>} />*/}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
