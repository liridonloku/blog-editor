import React from "react";
import Header from "./Header";
import Cards from "./Cards";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <>
      <Header />
      <Cards />
    </>
  );
};

export default Home;
