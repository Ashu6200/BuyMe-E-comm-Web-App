import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SideBar from "../components/SideBar";
import axios from "axios";
import UserHelper from "../helper/UserHelper";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resultUser = await axios.get("/api/users/all");
      const resultUserData = resultUser.data;
      const sortResultUserData = resultUserData.sort((a, b) =>
        b.createdAt.localeCompare(a.createdAt)
      );
      setUsers(sortResultUserData);
    };
    fetchData();
  }, []);
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
                <h2>BuyMe User Accouts List</h2>
              </div>
              <div className="lower">
                <Table>
                  <>
                    {users.length === 0 ? (
                      <h3>There are currently no User!</h3>
                    ) : (
                      <>
                        <table>
                          <thead className="tableHeader">
                            <tr>
                              <th className="first">Accounts</th>
                              <th>Actions</th>
                            </tr>
                            <tr>
                              <th className="first">Username</th>
                              <th>View User</th>
                              <th>Edit User</th>
                              <th>ChangePassword</th>
                              <th>Delete User</th>
                            </tr>
                          </thead>
                          {users.map((user) => (
                            <UserHelper user={user} key={user._id} />
                          ))}
                        </table>
                      </>
                    )}
                  </>
                </Table>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </Container>
  );
};

export default Users;

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

const Table = styled.div`
  margin: 20px;
  table {
    width: 100%;
    padding: 15px;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    thead {
      tr {
        gap: 20px;
        th {
          justify-content: flex-start;
          text-align: start;
          width: 300px;
        }
        .first {
          width: 600px;
        }
      }
    }
    tbody {
      margin-top: 50px;
      tr {
        td {
          padding: 10px;
          justify-content: flex-start;
          text-align: justify;
          button {
            padding: 10px;
            border: none;
            outline: none;
            border-radius: 5px;
            color: #ffffff;
            font-weight: 600;
          }
        }
      }
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
    display: flex;
    flex-direction: column;
    .upper {
      padding-bottom: 20px;
    }
    .lower {
    }
  }
`;
