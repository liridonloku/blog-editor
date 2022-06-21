import React from "react";
import Header from "./Header";
import Cards from "./Cards";

interface Props {
  user: {};
}

const Home: React.FC<Props> = ({ user }) => {
  return (
    <>
      <Header user={user} />
      <Cards />
    </>
  );
};

export default Home;
