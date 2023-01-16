import React, { useContext } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Store } from "../context/StoreContext";

const WishList = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    wish: { wishItems },
  } = state;

  const removeItemHandler = (item) => {
    ctxDispatch({
      type: "REMOVE_FROM_WISH",
      payload: item,
    });
    toast.success(
      "You have successfully deleted the product from the wishlist!"
    );
  };
  return (
    <Wrapper>
      <Conatiner>
        <div className="Categories">
          <div className="Categories-header">
            <h1>Your WishList</h1>
          </div>
        </div>
        <hr />
      </Conatiner>
      <ProductData>
        <div className="productList">
          {wishItems.length === 0 ? (
            <h3>You have not added any products to the wish list!</h3>
          ) : (
            <>
              {wishItems.map((wish) => (
                <div className="product">
                  <div className="productBody">
                    <img src={wish.image} alt="productImg" />
                  </div>
                  <div className="productDetails">
                    <div className="footer">
                      <h3>{wish.title}</h3>
                      <h3>{wish.category}</h3>
                    </div>
                    <span>Product Information </span>
                    <div className="footer-sub">
                      <span>Price: {wish.prize}</span>
                      <span>Rating :{wish.star} star</span>
                    </div>
                    <button onClick={() => removeItemHandler(wish)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </ProductData>
    </Wrapper>
  );
};

export default WishList;

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
        button {
          font-size: 15px;
          font-weight: 600;
          color: white;
          background-color: red;
          height: 30px;
          width: 40%;
          border-radius: 20px;
          outline: none;
          border: none;
          cursor: pointer;
        }
      }
    }
  }
`;
const Wrapper = styled.div`
  width: 100%;
`;
