import * as React from "react";
import { styled as s } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import styled from "styled-components";
const ViewBlog = ({ blog }) => {
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
        View Blog
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
                <h2 className="popup-title">View Blog Section</h2>
              </div>
              <div className="upper">
                <label htmlFor="title">Title: </label>
                <h4 className="popup-title">{blog.title}</h4>
              </div>
              <div className="middle">
                <label htmlFor="title">Description:</label>
                <p className="description">{blog.description}</p>
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
};

export default ViewBlog;

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
        label {
          font-size: 18px;
          font-weight: bold;
        }
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
