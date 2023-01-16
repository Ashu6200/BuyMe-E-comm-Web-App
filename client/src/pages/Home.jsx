import React from "react";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import HomeBlog from "../Components/HomeBlog";
import HomeProduct from "../Components/HomeProduct";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <Banner />
      <HomeBlog />
      <Categories />
      <HomeProduct />
    </div>
  );
};

export default Home;
