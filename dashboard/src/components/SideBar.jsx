import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { menuItems } from "../utils/data";

const SideBar = () => {
  return (
    <Wrapper>
      <div className="container">
        {menuItems.map((menu, index) => {
          return (
            <NavLink to={menu.link} key={index}>
              <div className="menu">
                <div className="icons">{menu.icon}</div>
                <div>
                  <span>{menu.name}</span>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default SideBar;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  .container {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow: 5px 5px 0px 5px #279dfe ;
    .menu {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
      padding: 15px;
      background: #fff;
      border-radius: 4px;
      font-weight: 600;
      .icons {
        font-size: 20px;
        color: #279dfe;
      }
    }
  }
`;
