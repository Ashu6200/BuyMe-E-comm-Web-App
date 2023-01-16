import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiFillDelete,
} from "react-icons/ai";
import Checkout from "./Checkout";
import { Store } from "../context/StoreContext";
import { toast } from "react-toastify";

const CartItems = () => {
  const [open, setOpen] = useState(false);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const removeItemHandler = (item) => {
    ctxDispatch({
      type: "REMOVE_FROM_CART",
      payload: item,
    });
    toast.success("You have successfully deleted the product from the cart!");
  };

  const updateCartHandler = (item, quantity) => {
    ctxDispatch({
      type: "ADD_TO_CART",
      payload: { ...item, quantity },
    });
  };

  const subTotal = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  const taxPrice = 0.18 * subTotal;
  const totalPrice = taxPrice + subTotal;

  return (
    <Wapper>
      <div className="container">
        <div>
          <h2>Your Cart Items</h2>
        </div>
        <CartTable>
          <div className="left">
            {cartItems.length === 0 ? (
              <h3>You have not added any products to the cart!</h3>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Product Image</th>
                    <th>Title</th>
                    <th>Subcategory</th>
                    <th>Size</th>
                    <th>Color</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th style={{ width: "350px" }}>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <>
                    {cartItems.map((cart) => (
                      <tr>
                        <td>
                          <img src={cart.image} alt="product" />
                        </td>
                        <td>{cart.title}</td>
                        <td>{cart.subcategory}</td>
                        <td>{cart.size}</td>
                        <td>{cart.color}</td>
                        <td>₹ {cart.price}</td>
                        <td>{cart.star}</td>
                        <td>
                          <div style={{ alignItem: "center" }}>
                            <button
                              style={{
                                cursor: "pointer",
                                backgroundColor: "transparent",
                                border: "none",
                                outline: "none",
                              }}
                              onClick={() =>
                                updateCartHandler(cart, cart.quantity - 1)
                              }
                              disabled={cart.quantity === 1}
                            >
                              <AiFillMinusCircle style={{ fontSize: "20px" }} />
                            </button>
                            <span style={{ fontSize: "20px" }}>
                              {" "}
                              {cart.quantity}{" "}
                            </span>
                            <button
                              style={{
                                cursor: "pointer",
                                backgroundColor: "transparent",
                                border: "none",
                                outline: "none",
                              }}
                              onClick={() =>
                                updateCartHandler(cart, cart.quantity + 1)
                              }
                            >
                              <AiFillPlusCircle style={{ fontSize: "20px" }} />
                            </button>
                          </div>
                        </td>
                        <td>
                          <span
                            style={{ cursor: "pointer" }}
                            onClick={() => removeItemHandler(cart)}
                          >
                            <AiFillDelete
                              style={{ fontSize: "25px", color: "red" }}
                            />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </>
                </tbody>
              </table>
            )}
          </div>
          <div className="right">
            <div className="bill">
              <div className="bill-group">
                <span>SubTotal:</span>
                <span>{subTotal}</span>
              </div>
              <div className="bill-group">
                <span>Tax 18%:</span>
                <span>{taxPrice}</span>
              </div>
              <hr style={{ backgroundColor: "black" }} />
              <div className="bill-group">
                <h3>Total:</h3>
                <h3>{totalPrice}</h3>
              </div>
            </div>
            <div className="bill-btn">
              {cartItems.length > 0 && (
                <button onClick={() => setOpen(true)}>Checkout</button>
              )}
            </div>
          </div>
        </CartTable>
        {open ? (
          <Checkout
            setOpen={setOpen}
            cartItems={cartItems}
            subTotal={subTotal}
            taxPrice={taxPrice}
            totalPrice={totalPrice}
          />
        ) : null}
      </div>
    </Wapper>
  );
};

export default CartItems;

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
              object-fit: cover;
              border-radius: 50%;
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
        padding-bottom: 20px;
      }
    }
    .bill-btn {
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      button {
        display: flex;
        flex-direction: row;
        padding: 20px;
        background-color: #279fde;
        font-size: 15px;
        font-weight: 600;
        color: white;
        outline: none;
        border: none;
        cursor: pointer;
        border-radius: 20px;
      }
    }
  }
`;
