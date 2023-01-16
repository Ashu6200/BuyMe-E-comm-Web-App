import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link, useNavigate } from "react-router-dom";
import { BsEyeFill } from "react-icons/bs";
import axios from "axios";

const MyAccount = () => {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  // const userOldPass = userInfo.password;
  // const [oldPassword, setOldPassword] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  // const [rNewPassword, setRNewPassword] = useState("");

  const updateHandler = async (e) => {
    e.preventDefault();

    // async function compareIt(oldPassword) {
    //   const validPassword = await bcrypt.compare(oldPassword, userOldPass);
    //   if (validPassword !== true) {
    //     toast.error("The old password is not correct!");
    //     return;
    //   }
    //   if (newPassword === rNewPassword) {
    //     try {
    //       const { data } = await axios.put("/api/users/update", {
    //         _id: userInfo._id,
    //         newPassword,
    //       });

    //       localStorage.removeItem("userInfo", JSON.stringify(data));
    //       toast.success("Password updated successfully!");
    //       navigate("/login");
    //     } catch (error) {
    //       toast.error("Password not updated!");
    //     }
    //   } else {
    //     toast.error("Password doesn`t match!");
    //   }
    // }
    // compareIt(oldPassword);
  };

  const userId = userInfo._id;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resultOrders = await axios.get(`/api/orders/mine/${userId}`);
      setOrders(resultOrders.data);
    };

    fetchData();
  }, [userId, navigate, userInfo]);

  return (
    <Wrapper>
      <div className="Container">
        <h1>My Account</h1>
        <div className="About">
          <div className="info">
            <div className="image">
              <img
                src="https://miro.medium.com/max/2400/0*hDAyhnOx767w5qma.jpg"
                alt=""
              />
            </div>
            <div className="text">
              <h2>{userInfo.username}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Tabs>
            <TabList>
              <Tab>Your Order Lists</Tab>
              <Tab>Change Password</Tab>
            </TabList>
            <TabPanel>
              <OrderList>
                <div>
                  <h2>Your Orders</h2>
                </div>
                {orders.length === 0 ? (
                  <h3>Not yet ordered</h3>
                ) : (
                  <>
                    <div className="orderlist">
                      {orders.map((item) => (
                        <div className="list" key={item._id}>
                          <h3>ORDER ID : {item._id} </h3>
                          <Link
                            to={`/order/${item._id}`}
                            style={{ textDecoration: "none", color: "#2879fe" }}
                          >
                            View <BsEyeFill />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </OrderList>
            </TabPanel>
            <TabPanel>
              <ChangePassWord>
                <h2>Change Password</h2>
                <div className="formSection">
                  <form className="formArea" onSubmit={updateHandler}>
                    <label className="arealabel">Old Password</label>
                    <input
                      className="area-input"
                      required
                      label="Name"
                      placeholder="Enter your Old Password"
                      style={{
                        borderRadius: "20px",
                        outline: "none",
                        paddingLeft: "20px",
                      }}
                      // onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <label className="arealabel">Password</label>
                    <input
                      className="area-input"
                      required
                      label="Password"
                      placeholder="Enter your password"
                      style={{
                        borderRadius: "20px",
                        outline: "none",
                        paddingLeft: "20px",
                      }}
                      // onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <label className="arealabel"> Retype Password</label>
                    <input
                      className="area-input"
                      required
                      label="Retype Password"
                      placeholder="Retype your password"
                      style={{
                        borderRadius: "20px",
                        outline: "none",
                        paddingLeft: "20px",
                      }}
                      // onChange={(e) => setRNewPassword(e.target.value)}
                    />

                    <button type="submit">Change</button>
                  </form>
                </div>
              </ChangePassWord>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </Wrapper>
  );
};

export default MyAccount;

const ChangePassWord = styled.div`
  .formSection {
    .formArea {
      justify-content: center;
      width: 500px;
      display: flex;
      flex-direction: column;
      input {
        width: 100%;
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
        cursor: pointer;
      }
    }
  }
`;

const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  .orderlist {
    width: 500px;
    .list {
      justify-content: space-between;
      align-items: center;
      width: 500px;
      padding: 0px 20px 0 20px;
      display: flex;
      flex-direction: row;
    }
  }
`;
const Wrapper = styled.div`
  width: 100%;
  .Container {
    padding: 0 90px 0 90px;
    .About {
      display: flex;
      padding-bottom: 50px;
      .info {
        width: 70%;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: row;
        gap: 20px;
        .image {
          width: 80%;
          img {
            width: 100%;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
          }
        }
        .text {
          text-align: justify;
        }
      }
    }
  }
`;
