import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import logo from "../images/Logo.png";

const Navbar = () => {
  const adminInfo = localStorage.getItem("adminInfo")
    ? JSON.parse(localStorage.getItem("adminInfo"))
    : null;
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("adminInfo");
    toast.success("You have successfully logged out as an Admin!");
    navigate("/login");
  };

  useEffect(() => {
    if (!localStorage.getItem("adminInfo")) {
      localStorage.getItem("adminInfo");
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      {adminInfo && (
        <Wrapper>
          <div className="container">
            <div className="logo">
              <img src={logo} alt="BuyMe" />
              <h4> Dashboard</h4>
            </div>
            <>
              <div className="serach">
                <input type="text" placeholder="Search " />
                <button type="submit">Seacrh</button>
              </div>
              <div className="options">
                <button onClick={logoutHandler}>Logout</button>
              </div>
            </>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Navbar;

const Wrapper = styled.div`
  width: 100%;
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 5px 5px #279dfe;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    .logo {
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      img {
        width: 150px;
      }
    }
    .serach {
      width: 70%;
      display: flex;
      input {
        width: 90%;
        height: 40px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        padding-left: 10px;
        outline: none;
        border: 1px solid black;
      }
      button {
        height: 40px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        padding-right: 10px;
        outline: none;
        border: none;
        width: 90px;
        color: white;
        font-weight: 600;
        background-color: #279dfe;
      }
    }
    .options {
      width: 20%;
      display: flex;
      padding-right: 100px;
      justify-content: flex-end;
      button {
        height: 40px;
        border-radius: 20px;
        padding-right: 10px;
        outline: none;
        border: none;
        width: 90px;
        font-weight: 600;
        color: white;
        background-color: red;
      }
    }
  }
`;
