import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";

const MyOrder = () => {
  const [order, setOrder] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/orders/find/${id}`);
        setOrder(data);
      } catch (err) {
        toast.error("Order not found!");
      }
    };
    fetchData();
  }, [id]);

  return (
    <Wapper>
      <div className="container">
        <div>
          <h2>Order id: {id}</h2>
          <h2>
            <Link
              className="go-back"
              to="/account"
              style={{ color: "#279fde", textDecoration: "none" }}
            >
              Go back
            </Link>
          </h2>
        </div>
        <CartTable>
          <div className="left">
            <table>
              <thead>
                <tr>
                  <th>Product Image</th>
                  <th>Title</th>
                  <th>Size</th>
                  <th>Color</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {order.orderItems?.map((item) => (
                  <>
                    <tr key={item._id}>
                      <td>
                        <img src={item.image} alt="product" />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.size}</td>
                      <td>{item.color}</td>
                      <td>₹ {item.price}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <div className="right">
            <div className="bill">
              <div className="bill-group">
                <h4>Name: </h4>
                <h4>{order.name}</h4>
              </div>
              <div className="bill-group">
                <h4>Email: </h4>
                <h4>{order.email}</h4>
              </div>
              <div className="bill-group">
                <h4>Address: </h4>
                <span style={{ fontWeight: "700" }}>{order.address}</span>
              </div>
              <div className="bill-group">
                <h4>Phone: </h4>
                <h4>{order.phone}</h4>
              </div>
              <div className="bill-group">
                <h4>Is Delivered:</h4>
                <h4>{order.isDelivered === true ? "True" : "False"}</h4>
              </div>
              <div className="bill-group">
                <h4>Is Paid: </h4>
                <h4>{order.isPaid === true ? "True" : "False"}</h4>
              </div>
              <div className="bill-group">
                <h4>SubTotal: </h4>
                <h4>{order.subTotal}</h4>
              </div>
              <div className="bill-group">
                <h4>Tax: </h4>
                <h4>{order.taxPrice}</h4>
              </div>
              <div className="bill-group">
                <h4>Total:</h4>
                <h4>{order.totalPrice}</h4>
              </div>
            </div>
          </div>
        </CartTable>
      </div>
    </Wapper>
  );
};

export default MyOrder;

const Wapper = styled.div`
  width: 100%;
  .container {
    padding: 0 90px 0 90px;
    display: flex;
    flex-direction: column;
    .header {
    }
  }
`;
const CartTable = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  .left {
    width: 75%;
    table {
      width: 100%;
      border-bottom: 1px solid #e5e5e5;
      border-top: 1px solid #e5e5e5;
      thead {
        tr {
          th {
            justify-content: flex-start;
            text-align: start;
            width: 300px;
          }
        }
      }
      tbody {
        tr {
          td {
            img {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
  .right {
    width: 25%;
    .bill {
      background-color: #e5e5e5;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      padding: 20px;
      .bill-group {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
      }
    }
  }
`;
