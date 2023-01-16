import * as React from "react";
import { styled as s } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import styled from "styled-components";
import { toast } from "react-toastify";
import axios from "axios";

const EditBlog = ({ blog }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [title, setTitle] = React.useState(blog.title);
  const [description, setDescription] = React.useState(blog.description);

  const editBlogHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put("/api/blogs/update", {
        _id: blog._id,
        title,
        description,
      });

      console.log(data);
      toast.success("You have successfully updated the blog!");
    } catch (err) {
      toast.error("Updated failed, please try again!");
    }
  };

  return (
    <div>
      <span variant="outlined" onClick={handleClickOpen}>
        Edit Blog
      </span>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Wrapper>
          <div className="container">
            <div className="upper">
              <h2> Edit Blog Section </h2>
            </div>
            <Fields>
              <form className="form" onSubmit={editBlogHandler}>
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
      </BootstrapDialog>
    </div>
  );
};
export default EditBlog;

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
    height: "550px",
    maxWidth: "100%",
    borderRadius: "30px",
    boxShadow: "5px 5px 5px purple",
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
      .upper {
        height: 20%;
      }
      .middle {
        height: 60%;
        label {
          font-size: 18px;
          font-weight: bold;
        }
      }
      .bottom {
        height: 20%;
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
        background-color: purple;
      }
    }
  }
`;
