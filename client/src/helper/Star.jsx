import React from "react";
import styled from "styled-components";

const Star = ({ rating, filterResultRatings }) => {
  return (
    <Wrapper>
      <div className="StarList">
        {rating.map((star) => (
          <button
            onClick={() => filterResultRatings(star.label)}
            key={star._id}
          >
            {star.label}
          </button>
        ))}
      </div>
    </Wrapper>
  );
};

export default Star;

const Wrapper = styled.div`
  display: flex;
  padding-left: 10%;
  padding-right: 10%;
  .StarList {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
`;
