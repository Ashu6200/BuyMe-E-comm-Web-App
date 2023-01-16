import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      toast.success("You have successfully logged in");
      navigate("/");
    } catch (err) {
      toast.error("Invalid email and password");
    }
  };
  useEffect(() => {
    //to check for if exist user then redirect from login to home page
    if (localStorage.getItem("userInfo")) {
      localStorage.getItem("userInfo");
      navigate("/");
    }
  }, [navigate]);

  return (
    <Wrapper>
      <div style={{ position: "absolute", display: "flex" }}>
        <div className="auth-left">
          <img src={logo} alt="#" />
          <div className="auth-title">
            <h1>BuyMe</h1>
            <span>Explore throughout the world</span>
          </div>
        </div>
        <div className="auth-right">
          <p>
            “Your most unhappy customers are your most important source of
            learning.”
            <br />
          </p>
          <div>
            <p>
              Welcome to <span>BuyMe</span> LogIn
            </p>
            <form className="formArea" onSubmit={loginHandler}>
              <label className="arealabel">Email</label>
              <input
                className="area-input"
                required
                label="Email"
                placeholder="Enter your Email"
                style={{
                  borderRadius: "20px",
                  outline: "none",
                  paddingLeft: "20px",
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="arealabel">Password</label>
              <input
                className="area-input"
                required
                type='password'
                label="Password"
                placeholder="Enter your password"
                style={{
                  borderRadius: "20px",
                  outline: "none",
                  paddingLeft: "20px",
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>

              <Link to="/register" className="link-login">
                "Don't have an account? Register"
              </Link>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  .bgImage {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
  .auth-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 20px;
    img {
      width: 40rem;
    }
    .auth-title {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      span {
        font-weight: 700;
      }
    }
  }
  .auth-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 20px;
    padding-left: 40px;
    p {
      width: 400px;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      font-weight: 700;
    }
    div {
      p {
        font-weight: 700;
        span {
          color: #2879fe;
        }
      }
      .formArea {
        display: flex;
        padding-top: 30px;
        flex-direction: column;
        .arealabel {
          display: flex;
          align-items: flex-start;
          padding-left: 10px;
        }
        .area-input {
          padding-top: 5px;
          height: 30px;
          margin-bottom: 25px;
          outline: none;
          align-items: center;
          justify-items: center;
          border: 1px solid black;
        }
        button {
          background-color: #2879fe;
          font-weight: 600;
          padding: 10px;
          height: 40px;
          border-radius: 20px;
          color: white;
          outline: none;
          border: none;
        }
        .link-login {
          text-decoration: none;
          color: black;
          margin-top: 10px;
        }
      }
    }
  }
`;
