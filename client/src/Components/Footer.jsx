import React from "react";
import styled from "styled-components";

const Footer = () => {
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  return (
    <>
      {userInfo && (
        <Wrapper>
          <div className="top">
            <div className="item">
              <h1>Categories</h1>
              <span>Women</span>
              <span>Men</span>
              <span>Shoes</span>
              <span>Accessories</span>
              <span>New Arrivals</span>
            </div>
            <div className="item">
              <h1>Links</h1>
              <span>FAQ</span>
              <span>Pages</span>
              <span>Stores</span>
              <span>Compare</span>
              <span>Cookies</span>
            </div>
            <div className="item">
              <h1>About</h1>
              <span>
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor
                sit amet conse ctetur adipisicing elit, seddo eiusmod tempor
                incididunt ut labore etdolore.
              </span>
            </div>
            <div className="item">
              <h1>Contact</h1>
              <span>
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor
                sit amet conse ctetur adipisicing elit, seddo eiusmod tempor
                incididunt ut labore etdolore.
              </span>
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <span className="logo">BUY ME</span>
              <span className="copyright">
                © Copyright 2023. All Rights Reserved
              </span>
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Footer;

const Wrapper = styled.div`
  margin: 100px 200px 20px 200px;
  padding-top: 40px;

  .top {
    display: flex;
    gap: 50px;

    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;
      text-align: justify;
      font-size: 14px;

      h1 {
        font-size: 20px;
        font-weight: 500;
        /* color: #555; */
      }

      span {
        color: black;
      }
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
    .left {
      display: flex;
      align-items: center;

      .logo {
        color: #2879fe;
        font-weight: bold;
        font-size: 24px;
      }

      .copyright {
        margin-left: 20px;
        font-size: 12px;
      }
    }
    .right {
      img {
        height: 50px;
      }
    }
  }
`;
