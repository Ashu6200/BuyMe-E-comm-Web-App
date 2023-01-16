import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styled from "styled-components";

const Price = ({ value, changePrice }) => {
  return (
    <Wrapper>
      <Slider
        value={value}
        onChange={changePrice}
        range
        min={1}
        max={10000}
        marks={{ 1: `${value[0]}`, 10000: `${value[1]}` }}
        step={100}
        tipForrmater={(value) => `${value}`}
      />
    </Wrapper>
  );
};

export default Price;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-right: 10%;
`;
