import * as React from "react";
import { styled as s } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import styled from "styled-components";

export default function ViewProduct({ product }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <span variant="outlined" onClick={handleClickOpen}>
        View Product Section
      </span>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Wrapper>
          <div className="container">
            <div className="content">
              <div className="fields">
                <label className="popup-title">Title: </label>
                <p className="description">{product.title} </p>
              </div>
              <div className="fields">
                <label htmlFor="title">Category:</label>
                <p className="description">{product.category}</p>
              </div>
              <div className="fields">
                <label htmlFor="title">Subcategory:</label>
                <p className="description">{product.subcategory}</p>
              </div>
              <div className="fields">
                <label htmlFor="title">Description:</label>
                <p className="description">{product.description}</p>
              </div>
              <div className="fields">
                <label htmlFor="title">Price:</label>
                <p className="description">₹{product.price}</p>
              </div>
              <div className="fields">
                <label htmlFor="title">Star:</label>
                <p className="description">{product.star}</p>
              </div>
              <div className="fields">
                <label htmlFor="title">Sizes: </label>
                <div className="popup-images">
                  {product.sizes?.map((item) => (
                    <span className="item">{item.title}, </span>
                  ))}
                </div>
              </div>
              <div className="fields">
                <label htmlFor="title">Colors:</label>
                <div className="popup-images">
                  {product.colors?.map((item) => (
                    <span className="item">{item.title}, </span>
                  ))}
                </div>
              </div>
              <div className="fields">
                <label htmlFor="title">Images:</label>
                <div className="popup-images">
                  <img src={product.image} alt={product.title} />
                  <img src={product.imageOne} alt={product.title} />
                </div>
              </div>
              <div className="fields">
                <button onClick={handleClose}>Close</button>
              </div>
            </div>
          </div>
        </Wrapper>
      </BootstrapDialog>
    </div>
  );
}

const BootstrapDialog = s(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    width: "60%",
    maxWidth: "auto",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
    width: "700px",
    // height: "600px",
    maxWidth: "100%",
    borderRadius: "30px",
    boxShadow: "5px 5px 5px #298dfe",
  },
}));
const Wrapper = styled.div`
  width: 100%;
  padding: 30px;
  height: 100%;
  .container {
    width: 100%;
    height: 100%;
    .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .fields {
        display: flex;
        flex-direction: row;
        gap: 10px;
        label {
          margin-bottom: 10px;
          font-size: 15px;
          font-weight: bold;
        }
        .popup-images {
          img {
            width: 90px;
            height: 90px;
            object-fit: contain;
          }
        }
        button {
          padding: 10px;
          border: none;
          outline: none;
          border-radius: 5px;
          color: #ffffff;
          font-weight: 600;
          background-color: red;
        }
      }
    }
  }
`;
