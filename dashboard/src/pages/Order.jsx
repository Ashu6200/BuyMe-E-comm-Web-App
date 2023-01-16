import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SideBar from "../components/SideBar";
import OrderHelper from "../helper/OrderHelper";

const Order = () => {
  const [orders, serOrders] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resultorder = await axios.get("/api/orders/all");
      const resultorderData = resultorder.data;
      const sortResultOrderData = resultorderData.sort((a, b) =>
        b.createdAt.localeCompare(a.createdAt)
      );
      serOrders(sortResultOrderData);
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
                <h2>BuyMe Orders List</h2>
              </div>
              <div className="lower">
                <Table>
                  <>
                    {orders.length === 0 ? (
                      <h3>There are currently no Order!</h3>
                    ) : (
                      <>
                        <table>
                          <thead className="tableHeader">
                            <tr>
                              <th className="first">Order Id</th>
                              <th className="first">Orderd By :</th>
                              <th>View Order</th>
                              <th>Is Paid</th>
                              <th>Is Delivered</th>
                              <th>Submit Update</th>
                            </tr>
                          </thead>
                          {orders.map((order) => (
                            <OrderHelper order={order} key={order._id} />
                          ))}
                        </table>
                      </>
                    )}
                  </>
                </Table>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </Container>
  );
};

export default Order;

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
const Table = styled.div`
  margin: 20px;
  table {
    width: 100%;
    padding: 15px;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    thead {
      tr {
        gap: 20px;
        th {
          justify-content: flex-start;
          text-align: start;
          width: 600px;
        }
        .first {
          width: 600px;
        }
      }
    }
    tbody {
      margin-top: 50px;
      tr {
        td {
          padding: 10px;
          justify-content: flex-start;
          text-align: justify;
          button {
            padding: 10px;
            border: none;
            outline: none;
            border-radius: 5px;
            color: #ffffff;
            font-weight: 600;
          }
        }
      }
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
      padding-bottom: 20px;
    }
    .lower {
    }
  }
`;
