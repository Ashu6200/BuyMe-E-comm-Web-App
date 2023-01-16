import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const OurStoreProducts = ({ list }) => {
  return (
    <Wrapper>
      {list.length === 0 ? (
        <h3>There are currently no list!</h3>
      ) : (
        <>
          {list.map((products, index) => {
            return (
              <div className="product" key={index}>
                <div className="productBody">
                  <Link to={`/product/${products._id}`}>
                    <img src={products.image} alt="productImg" />
                  </Link>
                </div>
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
    </Wrapper>
  );
};

export default OurStoreProducts;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px 0 20px;
  gap: 10px;
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
