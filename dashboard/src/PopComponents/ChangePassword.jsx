import React, { useState } from "react";
import { styled as s } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";

const ChangePassword = ({ user }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const changePassHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      toast.error("Passwords don`t match!");
      return;
    } else {
      try {
        const { data } = await axios.put("/api/users/update", {
          _id: user._id,
          password,
        });

        console.log(data);
        toast.success("You have successfully updated the password!");
      } catch (err) {
        toast.error("Updated failed, please try again!");
      }
    }
  };

  return (
    <div>
      <span variant="outlined" onClick={handleClickOpen}>
        Change Password
      </span>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Wrapper>
          <div className="container">
            <div className="upper">
              <h2> Change Password Section </h2>
            </div>
            <Fields>
              <form className="form" onSubmit={changePassHandler}>
                <h2>Change Password of User: {user.username}</h2>
                <div className="fields">
                  <label htmlFor="pass"> New Password</label>
                  <input
                    required
                    type="password"
                    id="New password"
                    placeholder="New password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div className="fields">
                  <label htmlFor="r_pass">Retype New Password</label>
                  <input
                    required
                    type="password"
                    id="New password"
                    placeholder="Retype Newpassword"
                    onChange={(e) => setConfirmPass(e.target.value)}
                    value={confirmPass}
                  />
                </div>
                <div className="fields">
                  <button type="submit">Save Password</button>
                </div>
              </form>
            </Fields>
          </div>
        </Wrapper>
      </BootstrapDialog>
    </div>
  );
};

export default ChangePassword;

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
    boxShadow: "5px 5px 5px green",
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
      button {
        padding: 10px;
        border: none;
        outline: none;
        border-radius: 5px;
        color: #ffffff;
        font-weight: 600;
        background-color: green;
      }
    }
  }
`;
