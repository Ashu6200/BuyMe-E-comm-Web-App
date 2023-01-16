import React, { useState } from "react";
import { styled as s } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";

const EditUser = ({ user }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const editUserHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put("/api/users/update", {
        _id: user._id,
        username,
        email,
      });

      console.log(data);
      toast.success("You have successfully updated the user!");
    } catch (err) {
      toast.error("Updated failed, please try again!");
    }
  };
  return (
    <div>
      <span variant="outlined" onClick={handleClickOpen}>
        Edit User
      </span>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Wrapper>
          <div className="container">
            <div className="upper">
              <h2> Edit User Section </h2>
            </div>
            <Fields>
              <form className="form" onSubmit={editUserHandler}>
                <h2>Edit this User: {user.username}</h2>
                <div className="fields">
                  <label htmlFor="name">Username</label>
                  <input
                    required
                    type="text"
                    id="name"
                    placeholder="Enter username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="fields">
                  <label htmlFor="email">Email</label>
                  <input
                    required
                    type="email"
                    id="email"
                    placeholder="Enter email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="fields">
                  <button type="submit">Update User Info</button>
                </div>
              </form>
            </Fields>
          </div>
        </Wrapper>
      </BootstrapDialog>
    </div>
  );
};

export default EditUser;

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
          background-color: purple;
        }
      }
    }
  }
`;
