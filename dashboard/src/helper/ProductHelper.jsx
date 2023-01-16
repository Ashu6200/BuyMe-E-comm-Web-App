import axios from "axios";
import React from "react";
import EditProduct from "../PopComponents/EditProduct";
import ViewProduct from "../PopComponents/ViewProduct";
import { toast } from "react-toastify";

const ProductHelper = ({ product }) => {
  const handlerDeleteBlog = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.delete(
        `/api/products/delete/${product._id}`
      );
      if (data) {
        toast.success("Product deleted successfully!");
      }
    } catch (err) {
      toast.error("Product not deleted!");
    }
  };
  return (
    <tbody>
      <tr key={product._id}>
        <td>{product.title}</td>
        <td>
          <button style={{ backgroundColor: "#289dfe" }}>
            <ViewProduct product={product} />
          </button>
        </td>
        <td>
          <button style={{ backgroundColor: "purple" }}>
            <EditProduct product={product} />
          </button>
        </td>
        <td>
          <button
            style={{ backgroundColor: "red" }}
            onClick={handlerDeleteBlog}
          >
            Delete Products
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default ProductHelper;
