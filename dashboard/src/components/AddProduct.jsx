import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import SideBar from "./SideBar";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [star, setStar] = useState("");
  const [sizes, setSizes] = useState([{ value: "", key: "" }]);
  const [colors, setColors] = useState([{ value: "", key: "" }]);
  const [image, setImage] = useState("");
  const [imageOne, setImageOne] = useState("");

  //for sizes add fields
  const handleChangeSize = (e, i) => {
    e.preventDefault();
    const clonedSizes = [...sizes];
    clonedSizes[`${i}`] = { value: e.target.value, key: i };
    setSizes(clonedSizes);
  };

  const addSizeFields = () => {
    setSizes([...sizes, { value: "", key: "" }]);
  };

  const removeSizeFields = (i) => {
    const newSizeValues = [...sizes];
    newSizeValues.splice(i, 1);
    setSizes(newSizeValues);
  };
  const handleChangeColor = (e, i) => {
    e.preventDefault();
    const clonedColors = [...colors];
    clonedColors[`${i}`] = { value: e.target.value, key: i };
    setColors(clonedColors);
  };

  const addColorFields = () => {
    setColors([...colors, { value: "", key: "" }]);
  };

  const removeColorFields = (i) => {
    const newColorValues = [...colors];
    newColorValues.splice(i, 1);
    setColors(newColorValues);
  };

  const addProductHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/products/add", {
        title,
        category,
        subcategory,
        description,
        price,
        star,
        sizes,
        colors,
        image,
        imageOne,
      });

      console.log(data);
      toast.success("You have successfully added a new Product!");
      setTitle("");
      setCategory("");
      setSubcategory("");
      setDescription("");
      setPrice("");
      setStar("");
      setSizes([{ value: "", key: "" }]);
      setColors([{ value: "", key: "" }]);
      setImage("");
      setImageOne("");
    } catch (err) {
      toast.error("Error adding new product!");
    }
  };

  return (
    <Container>
      <div className="body">
        <div className="left">
          <SideBar />
        </div>
        <div className="right">
          <Wrapper>
            <div className="container">
              <div className="header">
                <h2> Add Product </h2>
              </div>
              <Fields>
                <form className="form" onSubmit={addProductHandler}>
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
                        onChange={(e) => setSubcategory(e.target.value)}
                        value={subcategory}
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
                  </div>

                  <div className="bottom">
                    <div className="form-group">
                      <div className="form-groupValues">
                        <label htmlFor="size">Sizes</label>
                        {sizes.map((element, i) => (
                          <div className="d-flexAdd" key={i}>
                            <input
                              key={element.i}
                              type="text"
                              name="sizes"
                              onChange={(e) =>
                                handleChangeSize(e, i, element.i)
                              }
                              value={sizes[`${i}`]?.value || ""}
                              id="size"
                            />
                            {i ? (
                              <button
                                type="button"
                                className="btn-remove"
                                onClick={() => removeSizeFields(i)}
                              >
                                Remove
                              </button>
                            ) : null}
                          </div>
                        ))}
                      </div>
                      <div className="form-groupAdd">
                        <button
                          type="button"
                          className="btn-add"
                          onClick={() => addSizeFields()}
                        >
                          Add Field
                        </button>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-groupValues">
                        <label htmlFor="color">Colors</label>
                        {colors.map((element, i) => (
                          <div className="d-flexAdd" key={i}>
                            <input
                              key={element.i}
                              type="text"
                              name="colors"
                              onChange={(e) =>
                                handleChangeColor(e, i, element.i)
                              }
                              value={colors[`${i}`]?.value || ""}
                              id="color"
                            />
                            {i ? (
                              <button
                                type="button"
                                className="btn-remove"
                                onClick={() => removeColorFields(i)}
                              >
                                Remove
                              </button>
                            ) : null}
                          </div>
                        ))}
                      </div>
                      <div className="form-groupAdd">
                        <button
                          type="button"
                          className="btn-add"
                          onClick={() => addColorFields()}
                        >
                          Add Field
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="fields">
                    <label htmlFor="image">Image</label>
                    <input required type="text" id="image" onChange={(e) => setImage(e.target.value)} value={image}/>
                  </div>
                  <div className="fields">
                    <label htmlFor="imageOne">Image One</label>
                    <input required type="text" id="imageOne" onChange={(e) => setImageOne(e.target.value)} value={imageOne}/>
                  </div>
                  <div className="button">
                    <button type="submit">Save Product</button>
                  </div>
                </form>
              </Fields>
            </div>
          </Wrapper>
        </div>
      </div>
    </Container>
  );
};

export default AddProduct;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 90vh;
  .body {
    height: 90vh;
    display: flex;
    flex-direction: row;
    .left {
      width: 20%;
      height: 100%;
    }
    .right {
      width: 80%;
      height: 100%;
    }
  }
`;

const Fields = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  form {
    justify-content: center;
    width: 70%;
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
          height: 50px;
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
          height: 200px;
          outline: none;
          border-radius: 20px;
        }
      }
    }
    .bottom {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 10px;
      .form-group {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: flex-start;
        text-align: justify;
        .form-groupValues {
          width: 100%;
          label {
            font-size: 20px;
            font-weight: 700;
          }
          .d-flexAdd {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            input {
              width: 100%;
              height: 40px;
              outline: none;
              border-top-left-radius: 20px;
              border-bottom-left-radius: 20px;
              border: 1px solid #ccc;
              padding: 30px;
              font-family: Arial, Helvetica, sans-serif;
            }
            button {
              height: 60px;
              background-color: #ff0000;
              color: #ffffff;
              border-top-right-radius: 20px;
              border-bottom-right-radius: 20px;
              padding: 5px 10px;
              border: none;
              font-weight: 600;
              box-shadow: 0 0 3px #ff0000;
              transition: all 0.5s;
              display: block;
            }
          }
        }
        .form-groupAdd {
          width: 100%;
          button {
            width: 100%;
            height: 60px;
            background-color: #289dfe;
            color: #ffffff;
            border-radius: 20px;
            padding: 5px 10px;
            border: none;
            transition: all 0.5s;
            display: block;
            font-weight: 600;
            margin: 10px auto 0 auto;
          }
        }
      }
    }
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
        height: 50px;
        outline: none;
        border-radius: 20px;
        border: 1px solid #ccc;
        padding: 30px;
        font-family: Arial, Helvetica, sans-serif;
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
        background-color: #289dfe;
      }
    }
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  .container {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow-y: scroll;
    box-shadow: 5px 5px 0px 5px #279dfe;
    ::-webkit-scrollbar {
      width: 1px;
      background-color: #279dfe;
    }
    .header {
      width: 100%;
      background-color: white;
      padding-bottom: 20px;
      position: sticky;
      top: 0;
      justify-content: center;
    }
  }
`;
