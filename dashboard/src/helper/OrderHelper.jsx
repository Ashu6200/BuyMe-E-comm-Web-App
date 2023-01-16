import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const OrderHelper = ({ order }) => {
  const [isPaid, setIsPaid] = useState(order.isPaid);
  const [isDelivered, setIsDelivered] = useState(order.isDelivered);
  const paidHanldler = async () => {
    try {
      const { data } = await axios.put("/api/orders/update", {
        _id: order._id,
        isPaid: isPaid,
        isDelivered: isDelivered,
      });
      console.log(data);
      toast.success("You have successfully updated the Order");
    } catch (error) {
      toast.error("Updated failed, please try again!");
    }
  };
  return (
    <tbody>
      <tr key={order._id}>
        <td>{order._id}</td>
        <td>{order.name}</td>
        <td>
          <button style={{ backgroundColor: "#289dfe" }}>View Orders</button>
        </td>
        <td>
          {isPaid === false ? (
            <button
              style={{ backgroundColor: "purple" }}
              onClick={() => setIsPaid(true)}
            >
              Not Paid
            </button>
          ) : (
            <button
              style={{ backgroundColor: "purple" }}
              onClick={() => setIsPaid(false)}
            >
              Yes Is Paid
            </button>
          )}
        </td>
        <td>
          {isDelivered === false ? (
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => setIsDelivered(true)}
            >
              Not Delivered
            </button>
          ) : (
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => setIsDelivered(false)}
            >
              Yes Is Delivered
            </button>
          )}
        </td>
        <td>
          <button onClick={paidHanldler}>Update</button>
        </td>
      </tr>
    </tbody>
  );
};

export default OrderHelper;
