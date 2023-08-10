import React from "react";
import Discounted from "../components/Discounted";
import Featured from "../components/Featured";
import Landing from "../components/Landing";
import Explore from "../components/Explore";
import Highlights from "../components/Highlights";

const Home = () => {
  return (
    <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
};

export default Home