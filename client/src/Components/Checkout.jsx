import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Checkout = ({ setOpen, cartItems, subTotal, taxPrice, totalPrice }) => {
  const navigate = useNavigate();

  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const userId = userInfo._id;

  const [name, setName] = useState(userInfo.username);
  const [email, setEmail] = useState(userInfo.email);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const orderProductHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/orders", {
        orderItems: cartItems,
        userId: userId,
        name: name,
        email: email,
        address: address,
        phone: phone,
        subTotal: subTotal,
        taxPrice: taxPrice,
        totalPrice: totalPrice,
      });

      if (data) {
        localStorage.removeItem("cartItems");
        setOpen(false);
        toast.success("You have successfully ordered!");
        navigate("/account");
      }
    } catch (err) {
      toast.error("Order Failed!");
    }
  };
  return (
    <Wrapper>
      <div className="header">
        <h2 className="title"> You will pay after delivery! </h2>
        <button className="close-form" onClick={() => setOpen(false)}>
          Close
        </button>
      </div>
      <form onSubmit={orderProductHandler}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            required
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            required
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            id="address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            required
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
          />
        </div>
        <div className="co-btn">
          <button type="submit">Order</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Checkout;
const Wrapper = styled.div`
  width: 100%;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #ffffff;
    border-bottom: 1px solid #e1e1e1;
    button {
      border-radius: 20px;
      outline: none;
      border: none;
      height: 40px;
      padding: 10px;
      font-size: 14px;
      color: #fff;
      font-weight: 600;
      background-color: red;
      width: 80px;
      cursor: pointer;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #ffffff;
    width: 100%;
    align-items: center;
    .form-group {
      justify-content: flex-start;
      width: 60%;
      padding-bottom: 20px;
      input {
        width: 100%;
        height: 50px;
      }
    }
    button {
      padding-top: 10px;
      border-radius: 20px;
      outline: none;
      border: none;
      height: 40px;
      padding: 10px;
      font-size: 14px;
      color: #fff;
      font-weight: 600;
      background-color: #279dfe;
      width: 200px;
      cursor: pointer;
    }
  }
`;
