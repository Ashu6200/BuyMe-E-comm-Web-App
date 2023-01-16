import React, { useContext } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";
import { TbJewishStar } from "react-icons/tb";
import { IoMdMenu } from "react-icons/io";
import logo from "../images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Store } from "../context/StoreContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { state } = useContext(Store);
  const { cart, wish } = state;
  const cartItemsLength = cart.cartItems.reduce((a, c) => a + c.quantity, 0);
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    toast.success("You have Successfully logged out");
    navigate("/login");
  };
  return (
    <Wrapper>
      {userInfo && (
        <>
          <TopNavbar>
            <div className="topNabar-p">
              <p>Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className="topNabar-p">
              <p>Phone No: +91 7354327090</p>
            </div>
          </TopNavbar>
          <MiddelNavbar>
            <div className="middleNavbar-left">
              <Link to="/">
                <div className="logo">
                  <img src={logo} alt="BuyMe" />
                </div>
              </Link>
            </div>
            <div className="middleNavbar-center">
              <div className="searchbar">
                <input type="text" className="" placeholder="Seacrh Products" />
                <div className="icons">
                  <FaSearch
                    style={{
                      alignItem: "center",
                      paddingTop: "7px",
                      paddingLeft: "5px",
                      color: "white",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="middleNavbar-right">
              <Link
                to="/wish"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="icons">
                  <TbJewishStar />
                  <span
                    style={{
                      fontSize: "15px",
                      top: "0px",
                      paddingTop: "20px",
                    }}
                  >
                    {wish.wishItems.length}
                  </span>
                </div>
              </Link>
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="icons">
                  <BsBag />
                  {cartItemsLength ? (
                    <span
                      style={{
                        fontSize: "15px",
                        top: "0px",
                        paddingTop: "20px",
                      }}
                    >
                      {cartItemsLength}
                    </span>
                  ) : (
                    <span
                      style={{
                        fontSize: "15px",
                        top: "0px",
                        paddingTop: "20px",
                      }}
                    >
                      0
                    </span>
                  )}
                </div>
              </Link>
              <Link
                to="/account"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="icons">
                  <RiAccountCircleFill />
                </div>
              </Link>
              <div className="button">
                <button onClick={logoutHandler} style={{ cursor: "pointer" }}>
                  Logout
                </button>
              </div>
            </div>
          </MiddelNavbar>
          <BottomNavbar>
            <div className="navbarContent">
              <div>
                <IoMdMenu />
              </div>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <div>
                  <span>Home</span>
                </div>
              </Link>
              <Link
                to="/shop"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div>
                  <span>Our Store</span>
                </div>
              </Link>
              <Link
                to="/blogs"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div>
                  <span>Blog</span>
                </div>
              </Link>
              <Link
                to="/wish"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div>
                  <span>Wishlist</span>
                </div>
              </Link>
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div>
                  <span>Cart</span>
                </div>
              </Link>
              <div>
                <span>Returns Policy</span>
              </div>
              <div>
                <span>Shipping Policy</span>
              </div>
            </div>
          </BottomNavbar>
        </>
      )}
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* max-height: 80vh; */
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const TopNavbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #2879fe;
  height: 25px;
  padding-bottom: 5px;
  .topNabar-p {
    margin-bottom: 0;
    font-weight: 600;
    color: white;
  }
`;
const MiddelNavbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .middleNavbar-left {
    width: 15%;
    .logo {
      width: 100%;
      img {
        height: 50px;
      }
    }
  }
  .middleNavbar-center {
    width: 60%;
    .searchbar {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      input {
        width: 92%;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        padding-left: 20px;
        height: 35px;
        outline: none;
        border: 1px solid black;
      }
      .icons {
        background-color: #2879fe;
        align-items: center;
        height: 41px;
        width: 40px;
        font-size: 25px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
      }
    }
  }
  .middleNavbar-right {
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    .icons {
      font-size: 25px;
    }
    .button {
      button {
        background-color: red;
        height: 35px;
        border-radius: 20px;
        outline: none;
        border: none;
        font-weight: 600;
        padding: 10px;
        color: white;
      }
    }
  }
`;
const BottomNavbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #2879fe;
  .navbarContent {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 25px;
    gap: 20px;
    padding: 10px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    color: white;
    span {
      :hover {
        color: black;
      }
    }
  }
`;
