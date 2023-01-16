import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import EditBlog from "../PopComponents/EditBlog";
import ViewBlog from "../PopComponents/ViewBlog";

const PostHelper = ({ blog }) => {
  const handlerDeleteBlog = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.delete(`/api/blogs/delete/${blog._id}`);

      if (data) {
        toast.success("Blog deleted successfully!");
      }
    } catch (err) {
      toast.error("Blog not deleted!");
    }
  };
  return (
    <tbody>
      <tr key={blog._id}>
        <td>{blog.title}</td>
        <td>
          <button style={{ backgroundColor: "#289dfe" }}>
            <ViewBlog blog={blog} />
          </button>
        </td>
        <td>
          <button style={{ backgroundColor: "purple" }}>
            <EditBlog blog={blog} />
          </button>
        </td>
        <td>
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => handlerDeleteBlog}
          >
            Delete Blogs
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default PostHelper;
