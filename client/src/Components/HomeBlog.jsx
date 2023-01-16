import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const HomeBlog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resultBlog = await axios.get("/api/blogs/all");
      setBlogs(resultBlog.data);
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <div className="blog">
        <div className="header-area">
          <div className="heading">
            <div className="header">
              <h1>BuyMe Blogs</h1>
            </div>
            <div className="header">
              <Link to="/blogs">
                <button style={{cursor: "pointer"}}>View All Blogs</button>
              </Link>
            </div>
          </div>
          <hr />
        </div>
        <div className="blogData">
          <div className=" bloglist">
            {blogs.length === 0 ? (
              <h3>There are currently no blogs!</h3>
            ) : (
              <>
                {blogs.slice(-4).map((blog, index) => {
                  return (
                    <div className="blog" key={index}>
                      <div className="title">
                        <h3 className="name">{blog.title}</h3>
                      </div>
                      <div className="description">
                        <p className="para">{blog.description}</p>
                      </div>
                      <div className="info">
                        <span className="span-1">{blog.author}</span>
                        <span className="span-2">
                          {blog.createdAt.slice(0, 10)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeBlog;

const Wrapper = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  .blog {
    align-items: center;
    justify-content: center;
    .header-area {
      padding: 20px 90px 0 90px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #000;
      .heading {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .header {
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
    }
    .blogData {
      display: flex;
      padding: 0px 90px 0 90px;
      height: 370px;
      .bloglist {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 20px;
        height: 100%;
        .blog {
          width: 300px;
          height: 370px;
          text-align: justify;
          box-shadow: 5px 5px 5px 5px;
          padding: 0 15px 0 15px;
          border-radius: 20px;
          .title {
            height: 20%;
            .name {
              font-size: 18px;
              font-weight: 700;
              color: #2879fe;
            }
          }
          .description {
            height: 50%;
            .para {
              font-size: 15px;
              font-weight: 500;
            }
          }
          .info {
            display: flex;
            flex-direction: column;
            .span-1 {
              font-weight: 700;
            }
            .span-2 {
              font-size: 12px;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
`;

// const blog = [
//   {
//     author: "Ashu",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
//     title: "Lorem ipsum dolor sit amet",
//     createdAt: "23/12/2022",
//   },
//   {
//     author: "Aaru",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
//     title: "Lorem ipsum dolor sit amet",
//     createdAt: "23/12/2022",
//   },
//   {
//     author: "Aaru",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
//     title: "Lorem ipsum dolor sit amet",
//     createdAt: "23/12/2022",
//   },
//   {
//     author: "Aaru",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
//     title: "Lorem ipsum dolor sit amet",
//     createdAt: "23/12/2022",
//   },
//   {
//     author: "Aaru",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
//     title: "Lorem ipsum dolor sit amet",
//     createdAt: "23/12/2022",
//   },
// ];
