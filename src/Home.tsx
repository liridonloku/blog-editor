import React from "react";
import Header from "./Header";
import Posts from "./Posts";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <>
      <Header />
      <Posts />
    </>
  );
};

export default Home;
