import React, { useEffect, useState } from "react";
import logo from "../images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRpassword] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();
    if (password !== rpassword) {
      toast.error("Password does not match");
      return;
    }
    try {
      await axios.post("/api/users/register", {
        username,
        email,
        password,
      });
      toast.success("Successfully registered");
      navigate("/login");
    } catch (error) {
      toast.error("Registration failed, please try again");
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
              Welcome to <span>BuyMe</span> Register
            </p>
            <form className="formArea" onSubmit={registerHandler}>
              <label htmlFor="username" className="arealabel">
                Username
              </label>
              <input
                id="username"
                className="area-input"
                required
                label="Name"
                placeholder="Enter your Name"
                style={{
                  borderRadius: "20px",
                  outline: "none",
                  paddingLeft: "20px",
                }}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="email" className="arealabel">
                Email
              </label>
              <input
                id="email"
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
              <label htmlFor="password" className="arealabel">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="area-input"
                required
                label="Password"
                placeholder="Enter your password"
                style={{
                  borderRadius: "20px",
                  outline: "none",
                  paddingLeft: "20px",
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="r_password" className="arealabel">
                {" "}
                Retype Password
              </label>
              <input
                id="r_password"
                className="area-input"
                type="password"
                required
                label="Retype Password"
                placeholder="Retype your password"
                style={{
                  borderRadius: "20px",
                  outline: "none",
                  paddingLeft: "20px",
                }}
                onChange={(e) => setRpassword(e.target.value)}
              />

              <button type="submit">Register</button>

              <Link to="/login" className="link-login">
                "Already have an account? Login"
              </Link>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Register;

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
