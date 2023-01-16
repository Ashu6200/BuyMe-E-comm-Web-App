import React from "react";
import styled from "styled-components";
import Category from "./Category";
import Price from "./Price";
import Star from "./Star";
import Subcategory from "./Subcategory";

const ShopFliters = ({
  filterResult,
  category,
  filterResultRatings,
  rating,
  subCategory,
  changeChecked,
  selectedPrice,
  changePrice,
}) => {
  return (
    <Wrapper>
      <div className="filterOptions">
        <h4>Category</h4>
        <Category category={category} filterResult={filterResult} />
      </div>
      <div className="filterOptions">
        <h4>Subcategory</h4>
        <Subcategory subCategory={subCategory} changeChecked={changeChecked} />
      </div>
      <div className="filterOptions">
        <h4>Price</h4>
        <Price value={selectedPrice} changePrice={changePrice} />
      </div>
      <div className="filterOptions">
        <h4>Star</h4>
        <Star rating={rating} filterResultRatings={filterResultRatings} />
      </div>
    </Wrapper>
  );
};

export default ShopFliters;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .filterOptions {
    h4 {
      color: #2879fe;
    }
  }
`;
