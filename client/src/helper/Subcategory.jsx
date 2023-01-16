import React from "react";
import styled from "styled-components";

const Subcategory = ({ subCategory, changeChecked }) => {
  return (
    <Wrapper>
      <div className="SubcategoryList">
        <button>All</button>
        {subCategory.map((sub) => (
          <div className="subcategorycheckbox" key={sub._id}>
            <label htmlFor={sub.label} className="subcategoryLabel">
              {sub.label}
            </label>
            <input
              type="checkbox"
              className="f-check"
              checked={sub.checked}
              name=""
              onChange={() => changeChecked(sub._id)}
              id={sub.label}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Subcategory;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-right: 10%;

  .SubcategoryList {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    width: 100%;
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
    .subcategorycheckbox {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      width: 100%;
      label {
        font-size: 15px;
        font-weight: 400;
        display: flex;
        height: 25px;
        border-radius: 10px;
        cursor: pointer;
        border: none;
      }
    }
  }
`;
