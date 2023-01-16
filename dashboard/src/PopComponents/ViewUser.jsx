import * as React from "react";
import { styled as s } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import styled from "styled-components";

export default function ViewUser({ user }) {
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
        View User Section
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
                <h2 className="popup-title">{user.username}</h2>
                <h3 className="popup-title">{user.email}</h3>
              </div>
              <div className="middle">
                <label htmlFor="title">Bio:</label>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="bottom">
                <button type="submit" onClick={handleClose}>
                  Close
                </button>
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
    height: "400px",
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
