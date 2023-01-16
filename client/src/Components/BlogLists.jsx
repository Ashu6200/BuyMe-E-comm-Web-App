import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const BlogLists = () => {
  const [blogslists, setBlogslits] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resultBlog = await axios.get("/api/blogs/all");
      const resultBlogData = resultBlog.data;
      const sortedBlogslits = resultBlogData.sort((a,b)=> b.createdAt.localeCompare(a.createdAt));
      setBlogslits(sortedBlogslits);
    };
    fetchData();
  }, []);
  return (
    <Wrapper>
      <div className="blog">
        <div className="header-area">
          <div className="heading">
            <div className="header">
              <h1>Our Blogs</h1>
            </div>
          </div>
          <hr />
        </div>
        <div className="blogData">
          <div className=" bloglist">
          {blogslists.length === 0 ? (
              <h3>There are currently no blogs!</h3>
            ) : (
              <>
                {blogslists.map((blog, index) => {
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
                        <span className="span-2">{blog.createdAt.slice(0,10)}</span>
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

export default BlogLists;

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
      .bloglist {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        align-items: center;
        justify-content: center;
        .blog {
          width: 270px;
          height: 370px;
          text-align: justify;
          box-shadow: 5px 5px 5px 5px;
          padding: 0 15px 0 15px;
          border-radius: 20px;
          .title {
            .name {
              font-size: 18px;
              font-weight: 700;
              color: #2879fe;
            }
          }
          .description {
            height: 60%;
            .para {
              font-size: 15px;
              font-weight: 500;
            }
          }
          .info {
            width: auto;
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
