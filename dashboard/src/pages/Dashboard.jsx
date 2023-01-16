import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SideBar from "../components/SideBar";
import logo from "../images/dashboard.png";

const Dashboard = () => {
  const [users, setUsers] = useState(0); //defualt is 0
  const [blogs, setBlogs] = useState(0); //defualt is 0
  const [products, setProducts] = useState(0); //defualt is 0
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const resultUsers = await axios.get("/api/users/countUsers");
      setUsers(resultUsers.data);

      const resultBlogs = await axios.get("/api/blogs/countBlogs");
      setBlogs(resultBlogs.data);

      const resultProducts = await axios.get("/api/products/countProducts");
      setProducts(resultProducts.data);

      const resultOrders = await axios.get("/api/orders/countSumTotal");
      const resultDataOrders = resultOrders.data;
      const totalSum = resultDataOrders[0].total;
      console.log(totalSum);

      setSum(totalSum);
    };

    fetchData();
  }, []);
  return (
    <Container>
      <div className="body">
        <div className="left">
          <SideBar />
        </div>
        <div className="right">
          <Wrapper>
            <div className="container">
              <div className="upper">
                <div className="logo">
                  <img src={logo} alt="" />
                </div>
              </div>
              <div className="middle">
                <div className="middlecontainer">
                  <div className="box">
                    <div className="name">
                      <h3>Total Earning</h3>
                    </div>
                    <div className="info">
                      <h2>₹ {sum}</h2>
                    </div>
                  </div>
                  <div className="box">
                    <div className="name">
                      <h3>Total Products</h3>
                    </div>
                    <div className="info">
                      <h2>{products?.count}</h2>
                    </div>
                  </div>
                  <div className="box">
                    <div className="name">
                      <h3>Total Users</h3>
                    </div>
                    <div className="info">
                      <h2>{users?.count}</h2>
                    </div>
                  </div>
                  <div className="box">
                    <div className="name">
                      <h3>Total Blogs</h3>
                    </div>
                    <div className="info">
                      <h2>{blogs?.count}</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom">{/* <BarChart/> */}</div>
            </div>
          </Wrapper>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 90vh;
  .body {
    height: 90vh;
    display: flex;
    flex-direction: row;
    .left {
      width: 20%;
      height: 100%;
    }
    .right {
      width: 80%;
      height: 100%;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  .container {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow: 5px 5px 0px 5px #279dfe;
    display: flex;
    flex-direction: column;
    .upper {
      height: 20%;
      display: flex;
      flex-direction: row-reverse;
      .logo {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
        }
      }
    }
    .middle {
      height: 30%;
      width: 100%;
      padding: 20px;
      .middlecontainer {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 10px;
        .box {
          border-bottom: 1px solid black;
          width: 200px;
          height: 100px;
          border-radius: 30px;
          .name {
            border-top-left-radius: 30px;
            border-top-right-radius: 30px;
            background-color: #279dfe;
            width: 100%;
            text-align: center;
            justify-content: center;
            padding-bottom: 10px;
            padding-top: 10px;
            h3 {
              color: white;
            }
          }
          .info {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
    .bottom {
      height: 60%;
    }
  }
`;
