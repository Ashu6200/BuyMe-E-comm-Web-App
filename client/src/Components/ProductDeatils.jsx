import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { Store } from "../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";

const ProductDeatils = () => {
  const navigate = useNavigate();
  const [selectedImg, setSelectedImg] = useState("");
  const [product, setProduct] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      const resultProduct = await axios.get(`/api/products/find/${id}`);
      setProduct(resultProduct.data);
    };

    fetchData();
  }, [id]);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, wish } = state;
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const addToWishHandler = () => {
    const existsItem = wish.wishItems.find((x) => x._id === product._id);
    const quantity = existsItem ? existsItem.quantity : 1;
    if (existsItem) {
      toast.error(
        "Sorry. You have already added the product to your wish list!"
      );
      return;
    }
    ctxDispatch({
      type: "ADD_TO_WISH",
      payload: { ...product, quantity },
    });
    toast.success("You have successfully added the product to the wishlist!");
    navigate("/wish");
  };
  const addToCartHandler = () => {
    const existsItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existsItem ? existsItem.quantity + 1 : 1;

    ctxDispatch({
      type: "ADD_TO_CART",
      payload: { ...product, quantity, size, color },
    });
    toast.success("You have successfully added the product to the cart!");
    navigate("/cart");
  };
  return (
    <Wrapper>
      <div className="Container" key={product._id}>
        <div className="productimages">
          <Images>
            <div className="grid">
              <figure>
                <img
                  src={`${product.image}`}
                  onClick={() => setSelectedImg(`${product.image}`)}
                  alt="ajsj"
                  className="box-image-style"
                />
              </figure>
              <figure>
                <img
                  src={`${product.image}`}
                  onClick={() => setSelectedImg(`${product.image}`)}
                  alt="ajsj"
                  className="box-image-style"
                />
              </figure>
              <figure>
                <img
                  src={`${product.image}`}
                  onClick={() => setSelectedImg(`${product.image}`)}
                  alt="ajsj"
                  className="box-image-style"
                />
              </figure>
              <figure>
                <img
                  src={`${product.image}`}
                  onClick={() => setSelectedImg(`${product.image}`)}
                  alt="ajsj"
                  className="box-image-style"
                />
              </figure>
            </div>
            <div className="main-screen">
              <img src={selectedImg || `${product.image}`} alt="" />
            </div>
          </Images>
        </div>
        <div className="productData">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <div className="product-data-warranty">
            <div className="product-warranty-data">
              <TbTruckDelivery className="warranty-icon" />
              <p>Free Delivery</p>
            </div>
            <div className="product-warranty-data">
              <TbReplace className="warranty-icon" />
              <p>30 Days Replacement</p>
            </div>
            <div className="product-warranty-data">
              <TbTruckDelivery className="warranty-icon" />
              <p>BuyMe Store Delivered</p>
            </div>
            <div className="product-warranty-data">
              <MdSecurity className="warranty-icon" />
              <p>2 Year Warranty</p>
            </div>
          </div>
          <div className="product-data-info">
            <div>
              <p>
                MRP: <span>{product.price}</span>
              </p>
              <p>
                Rating: <span> {product.star} </span>
              </p>
            </div>
            <div style={{ paddingRight: "90px" }}>
              <p>
                Category: <span>{product.category}</span>
              </p>
              <p>
                Company : <span> BuyMe </span>
              </p>
            </div>
          </div>
          <SizeColor>
            <div className="otherAction">
              <div className="color">
                <h4 className="sizeTitle">Sizes:</h4>
                <div className="sizeDiv">
                  {product.sizes?.map((size, index) => (
                    <>
                      <input
                        type="radio"
                        key={index}
                        id={size.title}
                        name="size"
                        value={size.title}
                        required
                        onChange={(e) => setSize(e.target.value)}
                      />
                      <label htmlFor={size.title}>{size.title}</label>
                    </>
                  ))}
                </div>
              </div>
              <div className="color">
                <h4 className="sizeTitle">Colors:</h4>
                <div className="sizeDiv">
                  {product.colors?.map((color, index) => (
                    <>
                      <input
                        key={index}
                        type="radio"
                        id={color.title}
                        name="color"
                        value={color.title}
                        required
                        onChange={(e) => setColor(e.target.value)}
                      />
                      <label htmlFor={color.title}>{color.title}</label>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </SizeColor>
          <hr />
          <Button>
            <div>
              <button
                style={{ backgroundColor: "green" }}
                onClick={addToWishHandler}
              >
                Add to Wishlist
              </button>
            </div>
            <div>
              <button onClick={addToCartHandler}>Add to Cart</button>
            </div>
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductDeatils;
const Images = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  width: 90%;
  padding-top: 40px;
  .grid {
    display: grid;
    grid-gap: 10px;
    width: 40%;
    top: 0;
    height: 650px;
    figure {
      height: 100%;
      img {
        width: 150px;
        height: 130px;
        object-fit: cover;
        border-radius: 20px;
      }
    }
  }
  .main-screen {
    width: 60%;
    padding-top: 12px;
    img {
      width: 100%;
      height: 650px;
      object-fit: cover;
      border-radius: 20px;
    }
  }
`;
const Button = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 90px;
  div {
    button {
      color: white;
      background-color: #2879fe;
      outline: none;
      border: none;
      height: 40px;
      width: 150px;
      padding: 10px;
      font-weight: 600;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
      cursor: pointer;
    }
  }
`;

const Wrapper = styled.div`
  padding: 30px 90px 0 90px;
  .Container {
    width: 100%;
    display: flex;
    flex-direction: row;
    .productimages {
      width: 50%;
      justify-content: center;
      align-items: center;
    }
    .productData {
      width: 50%;
      text-align: justify;
      .product-data-warranty {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        margin-bottom: 1rem;

        .product-warranty-data {
          text-align: center;

          .warranty-icon {
            background-color: rgba(220, 220, 220, 0.5);
            border-radius: 50%;
            width: 3rem;
            height: 3rem;
            padding: 0.6rem;
          }
          p {
            font-size: 15px;
            font-weight: 600;
            padding-top: 0.4rem;
          }
        }
      }

      .product-data-info {
        display: flex;
        flex-direction: row;
        font-size: 15px;
        padding: 0 90px 0 90px;
        justify-content: space-between;
        .product-data-price {
          font-weight: bold;
        }
        span {
          font-weight: bold;
        }
      }

      hr {
        max-width: 100%;
        width: 90%;
        border: 0.1rem solid #000;
        color: red;
      }
    }
  }
`;
const SizeColor = styled.div`
  display: flex;
  width: 100%;
  .otherAction {
    padding: 0 90px 0 90px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .color {
      .sizeTitle {
      }
      .sizeDiv {
      }
    }
  }
`;
