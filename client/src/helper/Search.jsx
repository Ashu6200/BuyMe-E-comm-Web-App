import React from "react";
import styled from "styled-components";

const Search = ({ value, changeInput }) => {
  return (
    <Wrapper>
      <input
        type="text"
        placeholder="Enter Product Name"
        value={value}
        onChange={changeInput}
      />
    </Wrapper>
  );
};

export default Search;
const Wrapper = styled.div`
  width: 90%;
  input {
    align-items: center;
    height: 20px;
    outline: none;
    border: 1px solid black;
    border-radius: 20px;
    width: 100%;
    padding: 5px 10px 5px 10px;
  }
`;
