import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import ChangePassword from "../PopComponents/ChangePassword";
import EditUser from "../PopComponents/EditUser";
import ViewUser from "../PopComponents/ViewUser";

const UserHelper = ({user}) => {
  const handlerDeleteUser = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.delete(`/api/users/delete/${user._id}`);

      if (data) {
        toast.success("User deleted successfully!");
      }
    } catch (err) {
      toast.error("User not deleted!");
    }
  };
  return (
    <tbody>
      <tr key={user._id}>
        <td>{user.username}</td>
        <td>
          <button style={{ backgroundColor: "#289dfe" }}>
            <ViewUser user={user} />
          </button>
        </td>
        <td>
          <button style={{ backgroundColor: "purple" }}>
            <EditUser user={user} />
          </button>
        </td>
        <td>
          <button style={{ backgroundColor: "green" }}>
            <ChangePassword user={user} />
          </button>
        </td>
        <td>
          <button
            style={{ backgroundColor: "red" }}
            onClick={handlerDeleteUser}
          >
            Delete User
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default UserHelper;
