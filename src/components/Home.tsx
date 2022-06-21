import React, { useEffect } from "react";
import Header from "./Header";
import Cards from "./Cards";
import { useLocation, useNavigate } from "react-router-dom";
import { User } from "../App";

interface Props {
  user: null | User;
  logOut: Function;
}

const Home: React.FC<Props> = ({ user, logOut }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && location.pathname !== "/login") {
      navigate("/login");
    }
  });
  return (
    <>
      <Header user={user} logOut={logOut} />
      <Cards />
    </>
  );
};

export default Home;
