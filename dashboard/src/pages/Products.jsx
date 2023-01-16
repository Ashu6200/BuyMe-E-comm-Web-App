import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SideBar from "../components/SideBar";
import ProductHelper from "../helper/ProductHelper";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resultProduct = await axios.get("/api/products/all");
      const resultProductData = resultProduct.data;
      const sortResultProductData = resultProductData.sort((a, b) =>
        b.createdAt.localeCompare(a.createdAt)
      );
      setProducts(sortResultProductData);
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
                <h2>BuyMe Products List</h2>
              </div>
              <div className="lower">
                <Table>
                  <>
                    {products.length === 0 ? (
                      <h3 className="no-data">
                        There are currently no Products!
                      </h3>
                    ) : (
                      <>
                        <table>
                          <thead className="tableHeader">
                            <tr>
                              <th className="first">Products</th>
                              <th>Actions</th>
                            </tr>
                            <tr>
                              <th className="first">Products Name</th>
                              <th>View Products</th>
                              <th>Edit Products</th>
                              <th>Delete Products</th>
                            </tr>
                          </thead>
                          {products.map((product) => (
                            <ProductHelper product={product} />
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

export default Products;

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
    overflow-y: scroll;
    box-shadow: 5px 5px 0px 5px #279dfe;
    ::-webkit-scrollbar {
      width: 1px;
      background-color: #279dfe;
    }
    .upper {
      padding-bottom: 20px;
      position: sticky;
      top: 0;
    }
  }
`;
