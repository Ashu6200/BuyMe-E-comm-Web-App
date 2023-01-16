import React, { useState } from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import axios from "axios";
import { toast } from "react-toastify";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addBlogHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/blogs/add", {
        title,
        description,
      });

      console.log(data);
      toast.success("You have successfully added a new blog!");
      setTitle("");
      setDescription("");
    } catch (err) {
      toast.error("Error adding new blog!");
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
              <div className="upper">
                <h2> My New Blog </h2>
              </div>
              <Fields>
                <form className="form" onSubmit={addBlogHandler}>
                  <div className="fields">
                    <label htmlFor="title">Title</label>
                    <input
                      required
                      type="text"
                      id="title"
                      placeholder="Title of Blog"
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
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
                      placeholder="Description of Blog"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                    ></textarea>
                  </div>
                  <div className="fields">
                    <button type="submit">Save Blog</button>
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

export default AddBlog;

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
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  .container {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow: 5px 5px 0px 5px #279dfe;
    .upper {
      padding-bottom: 20px;
    }
  }
`;
const Fields = styled.div`
  width: 100%;
  padding-top: 70px;
  display: flex;
  justify-content: center;
  .form {
    justify-content: center;
    width: 70%;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .fields {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: flex-start;
      text-align: justify;
      label {
        font-size: 30px;
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
      button {
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
