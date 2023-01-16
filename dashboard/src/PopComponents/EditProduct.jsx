import React, { useState } from "react";
import { styled as s } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import styled from "styled-components";
import { toast } from "react-toastify";
import axios from "axios";
const EditProduct = ({ product }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [title, setTitle] = useState(product.title);
  const [category, setCategory] = useState(product.category);
  const [subCategory, setSubCategory] = useState(product.subcategory);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [star, setStar] = useState(product.star);
  const [sizes, setSizes] = useState(product.sizes);
  const [colors, setColors] = useState(product.colors);
  const [image, setImage] = useState(product.image);
  const [imageOne, setImageOne] = useState(product.imageOne);

  const editBlogHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put("/api/products/update", {
        _id: product._id,
        title,
        category,
        subCategory,
        description,
        price,
        star,
        sizes,
        colors,
        image,
        imageOne
      });

      console.log(data);
      toast.success("You have successfully updated the product!");
    } catch (err) {
      toast.error("Updated failed, please try again!");
    }
  };

  const handleChangeSize = (e, i) => {
    e.preventDefault();
    const clonedSizes = [...sizes];
    clonedSizes[`${i}`] = { value: e.target.value, key: i };
    setSizes(clonedSizes);
  };

  const handleChangeColor = (e, i) => {
    e.preventDefault();
    const clonedColors = [...colors];
    clonedColors[`${i}`] = { value: e.target.value, key: i };
    setColors(clonedColors);
  };
  return (
    <div>
      <span variant="outlined" onClick={handleClickOpen}>
        Edit Product
      </span>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Wrapper>
          <div className="container">
            <div className="content">
              <div className="upper">
                <h2 className="popup-title">Edit Product Section</h2>
              </div>
              <Fields>
                <form className="form" onSubmit={editBlogHandler}>
                  <h2 className="popup-title">
                    Edit Product : {product.title}
                  </h2>
                  <div className="upper">
                    <div className="fields">
                      <label htmlFor="title">Title</label>
                      <input
                        required
                        type="text"
                        id="title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                      />
                    </div>
                    <div className="fields">
                      <label htmlFor="cat">Category</label>
                      <input
                        required
                        type="text"
                        id="cat"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                      />
                    </div>
                    <div className="fields">
                      <label htmlFor="scat">SubCategory</label>
                      <input
                        required
                        type="text"
                        id="scat"
                        onChange={(e) => setSubCategory(e.target.value)}
                        value={subCategory}
                      />
                    </div>
                    <div className="fields">
                      <label htmlFor="price">Price</label>
                      <input
                        required
                        type="text"
                        id="price"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                      />
                    </div>
                    <div className="fields">
                      <label htmlFor="desc">Description</label>
                      <textarea
                        id="desc"
                        cols="30"
                        rows="10"
                        required
                        spellCheck={false}
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                      />
                    </div>
                    <div className="fields">
                      <label htmlFor="star">Star</label>
                      <input
                        required
                        type="text"
                        id="star"
                        onChange={(e) => setStar(e.target.value)}
                        value={star}
                      />
                    </div>
                    <div className="fields">
                      <label htmlFor="size">Sizes</label>
                      {product.sizes?.map((item, i) => (
                        <input
                          key={item.i}
                          type="text"
                          name="sizes"
                          onChange={(e) => handleChangeSize(e, i, item.i)}
                          value={sizes[`${i}`]?.title || ""}
                          id="size"
                        />
                      ))}
                    </div>
                    <div className="fields">
                      <label htmlFor="color">Colors</label>
                      {product.colors?.map((item, i) => (
                        <input
                          key={item.i}
                          type="text"
                          name="colors"
                          onChange={(e) => handleChangeColor(e, i, item.i)}
                          value={colors[`${i}`]?.title || ""}
                          id="color"
                        />
                      ))}
                    </div>
                    <div className="fields">
                      <label htmlFor="image">Image</label>
                      <input
                        required
                        type="text"
                        id="image"
                        onChange={(e) => setImage(e.target.value)}
                      />
                    </div>
                    <div className="fields">
                      <label htmlFor="imageOne">Image One</label>
                      <input
                        required
                        type="text"
                        id="imageOne"
                        onChange={(e) => setImageOne(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="button">
                    <button type="submit">Update Product</button>
                  </div>
                </form>
              </Fields>
            </div>
          </div>
        </Wrapper>
      </BootstrapDialog>
    </div>
  );
};

export default EditProduct;

const Fields = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  form {
    justify-content: center;
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .upper {
      width: 100%;
      .fields {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: flex-start;
        text-align: justify;
        label {
          font-size: 20px;
          font-weight: 700;
        }
        input {
          width: 100%;
          height: 20px;
          outline: none;
          border-radius: 20px;
          border: 1px solid #ccc;
          padding: 30px;
          font-family: Arial, Helvetica, sans-serif;
        }
        textarea {
          font-family: Arial, Helvetica, sans-serif;
          padding: 30px;
          border: 1px solid #ccc;
          width: 100%;
          height: 150px;
          outline: none;
          border-radius: 20px;
        }
      }
    }
    .button {
      width: 100%;
      button {
        width: 100%;
        padding: 10px;
        border: none;
        outline: none;
        border-radius: 5px;
        color: #ffffff;
        font-weight: 600;
        background-color: purple;
      }
    }
  }
`;
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
    boxShadow: "5px 5px 5px purple",
    "&::-webkit-scrollbar": {
      width: "1px",
    },
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
    }
  }
`;
