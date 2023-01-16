import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Categories = () => {
  return (
    <>
      <Conatiner>
        <div className="Categories">
          <div className="Categories-header">
            <h1>BuyMe Blogs</h1>
          </div>
          <div className="Categories-header">
            <Link to="/shop">
              <button>View All Categories</button>
            </Link>
          </div>
        </div>
        <hr />
      </Conatiner>
      <Wrapper>
        <div className="col">
          <div className="row">
            <img
              src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <Link
                to="/shop"
                className="link"
                style={{ textDecoration: "none", color: "black" }}
              >
                Sale
              </Link>
            </button>
          </div>
          <div className="row">
            <img
              src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <Link
                to="/shop"
                className="link"
                style={{ textDecoration: "none", color: "black" }}
              >
                Women
              </Link>
            </button>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <img
              src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <Link
                to="/shop"
                className="link"
                style={{ textDecoration: "none", color: "black" }}
              >
                New Season
              </Link>
            </button>
          </div>
        </div>
        <div className="col col-l">
          <div className="row">
            <div className="col">
              <div className="row">
                <img
                  src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <button>
                  <Link
                    to="/shop"
                    className="link"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Men
                  </Link>
                </button>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <img
                  src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <button>
                  <Link
                    to="/shop"
                    className="link"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Accessories
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <img
              src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <Link
                to="/shop"
                className="link"
                style={{ textDecoration: "none", color: "black" }}
              >
                Shoes
              </Link>
            </button>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Categories;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  gap: 10px;
  /* margin: 10px; */

  .col {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .col-l {
    flex: 2;
  }

  .row {
    flex: 1;
    display: flex;
    gap: 10px;
    position: relative;
    overflow: hidden;

    button {
      position: absolute;
      min-width: 100px;
      width: fit-content;
      height: 50px;
      padding: 10px;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      cursor: pointer;
      border: none;
      background-color: white;
      text-transform: uppercase;
      font-weight: 500;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
const Conatiner = styled.div`
  padding: 20px 90px 0 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #000;
  .Categories {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .Categories-header {
      font-size: 20px;
      font-weight: 700;
      button {
        border-radius: 20px;
        outline: none;
        border: none;
        height: 40px;
        padding: 10px;
        font-size: 14px;
        color: #fff;
        font-weight: 600;
        background-color: #2879fe;
      }
    }
  }
`;
