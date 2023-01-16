import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchedProducts = async () => {
      const resultProducts = await axios.get("/api/products/all");
      setProducts(resultProducts.data);
    };
    fetchedProducts();
  }, []);

  return (
    <Wrapper>
      <Conatiner>
        <div className="Categories">
          <div className="Categories-header">
            <h1>BuyMe Products</h1>
          </div>
          <div className="Categories-header">
            <Link to="/shop">
              <button style={{cursor: "pointer"}}>View All Products</button>
            </Link>
          </div>
        </div>
        <hr />
      </Conatiner>
      <ProductData>
        <div className="productList">
          {products.length === 0 ? (
            <h3>There are currently no products!</h3>
          ) : (
            <>
              {products.slice(-4).map((products, index) => {
                return (
                  <div className="product" key={index}>
                    <Link to={`/product/${products._id}`}>
                      <div className="productBody">
                        <img src={products.image} alt="productImg" />
                      </div>
                    </Link>
                    <div className="productDetails">
                      <div className="footer">
                        <h3>{products.title}</h3>
                        <h3>{products.category}</h3>
                      </div>
                      <span>Product Information </span>
                      <div className="footer-sub">
                        <span>Price: ₹ {products.price}</span>
                        <span>Rating : {products.star}star</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </ProductData>
    </Wrapper>
  );
};

export default HomeProduct;

const Conatiner = styled.div`
  padding: 20px 90px 0 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #000;
  .Categories {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .Categories-header {
      font-size: 20px;
      font-weight: 700;
      button {
        border-radius: 20px;
        outline: none;
        border: none;
        height: 40px;
        padding: 10px;
        font-size: 14px;
        color: #fff;
        font-weight: 600;
        background-color: #2879fe;
      }
    }
  }
`;

const ProductData = styled.div`
  display: flex;
  padding: 0px 90px 0 90px;
  height: 370px;
  .productList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    .product {
      width: 300px;
      .productBody {
        height: 370px;
        img {
          border-radius: 20px;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .productDetails {
        padding: 0 15px 0 15px;
        display: flex;
        flex-direction: column;
        .footer {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          color: #2879fe;
        }
        .footer-sub {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          span {
            font-weight: 600;
          }
        }
      }
    }
  }
`;
const Wrapper = styled.div`
  width: 100%;
`;

// const Products = [
//   {
//     img: "https://miro.medium.com/max/2400/0*hDAyhnOx767w5qma.jpg",
//     name: "Acer Laptop",
//     category: "Laptop",
//     price: "200",
//     rating: "4",
//   },
//   {
//     img: "https://miro.medium.com/max/2400/0*hDAyhnOx767w5qma.jpg",
//     name: "Acer Laptop",
//     category: "Laptop",
//     price: "200",
//     rating: "4",
//   },
//   {
//     img: "https://miro.medium.com/max/2400/0*hDAyhnOx767w5qma.jpg",
//     name: "Acer Laptop",
//     category: "Laptop",
//     price: "200",
//     rating: "4",
//   },
//   {
//     img: "https://miro.medium.com/max/2400/0*hDAyhnOx767w5qma.jpg",
//     name: "Acer Laptop",
//     category: "Laptop",
//     price: "200",
//     rating: "4",
//   },
//   {
//     img: "https://miro.medium.com/max/2400/0*hDAyhnOx767w5qma.jpg",
//     name: "Acer Laptop",
//     category: "Laptop",
//     price: "200",
//     rating: "4",
//   },
// ];
