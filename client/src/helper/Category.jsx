import React from "react";
import styled from "styled-components";

const Category = ({ category, filterResult }) => {
  return (
    <Wrapper>
      <div className="categoryList">
        <button onClick={() => filterResult()}>All</button>
        {category.map((Category, index) => (
          <>
            <button
              key={Category._id}
              onClick={() => filterResult(Category.label)}
            >
              {Category.label}
            </button>
          </>
        ))}
      </div>
    </Wrapper>
  );
};

export default Category;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  .categoryList {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    button {
      font-size: 15px;
      font-weight: 400;
      display: flex;
      flex-direction: column;
      height: 25px;
      border-radius: 10px;
      background: #fff;
      cursor: pointer;
      border: none;
    }
  }
`;

// const CategoryList = [
//   {
//     name: "Mens",
//   },
//   {
//     name: "Womens",
//   },
//   {
//     name: "Childs",
//   },
// ];
