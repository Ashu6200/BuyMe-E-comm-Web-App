import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Search from "../helper/Search";
import ShopFliters from "../helper/ShopFliters";
import OurStoreProducts from "./OurStoreProducts";

const OurStore = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [rating, setRating] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([0, 10000]);

  const [list, setList] = useState(products);

  const [inputSearch, setInputSearch] = useState("");
  const [resultsFound, setResultsFound] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedRating, setSelectedRating] = useState();

  const filterResult = (catItem) => {
    setSelectedCategory(catItem);
  };

  const filterResultRatings = (starItem) => {
    setSelectedRating(starItem);
  };

  const handleChangeChecked = (id) => {
    const subcategoryList = subCategory;
    const changeCheckedSubcategory = subcategoryList.map((item) =>
      item._id === id ? { ...item, checked: !item.checked } : item
    );
    setSubCategory(changeCheckedSubcategory);
  };

  // change value for price
  const handleChangePrice = (value) => {
    setSelectedPrice(value);
  };

  useEffect(() => {
    const applyFilters = () => {
      let updateProductList = products;

      if (selectedCategory) {
        updateProductList = updateProductList.filter(
          (item) => item.category === selectedCategory
        );
      }
      const subcategoryChecked = subCategory
        .filter((item) => item.checked)
        .map((item) => item.label);
      if (subcategoryChecked.length) {
        updateProductList = updateProductList.filter((item) =>
          subcategoryChecked.includes(item.subcategory)
        );
      }
      if (selectedRating) {
        updateProductList = updateProductList.filter(
          (item) => item.star === selectedRating
        );
      }
      const minPrice = selectedPrice[0];
      const maxPrice = selectedPrice[1];

      updateProductList = updateProductList.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      );

      if (inputSearch) {
        updateProductList = updateProductList.filter(
          (item) =>
            item.title
              .toLowerCase()
              .search(inputSearch.toLowerCase().trim()) !== -1
        );
      }

      setList(updateProductList);

      !updateProductList.length
        ? setResultsFound(false)
        : setResultsFound(true);
    };
    applyFilters();
  }, [
    inputSearch,
    products,
    selectedCategory,
    selectedRating,
    subCategory,
    selectedPrice,
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const resultProducts = await axios.get("/api/products/all");
      const resultProductsData = resultProducts.data;
      const sortResultProductsData = resultProductsData.sort((a, b) =>b.createdAt.localeCompare(a.createdAt));
      setProducts(sortResultProductsData);

      const resultCategory = await axios.get("/api/category/all");
      setCategory(resultCategory.data);

      const resultRating = await axios.get("/api/rating/all");
      setRating(resultRating.data);

      const resultSubCategory = await axios.get("/api/subcategory/all");
      const resultSubCategoryData = resultSubCategory.data;
      setSubCategory(resultSubCategoryData);
    };

    fetchData();
  }, []);
  return (
    <Wrapper>
      <Conatiner>
        <div className="Categories">
          <div className="Categories-header">
            <h1>Our Products</h1>
          </div>
        </div>
      </Conatiner>
      <AllProducts>
        <div className="filterSection">
          <h2>Filters</h2>
          <div>
            <h4 style={{ color: "#2879fe" }}> Seacrh Your Products</h4>
            <Search
              value={inputSearch}
              changeInput={(e) => setInputSearch(e.target.value)}
            />
          </div>
          <div>
            <ShopFliters
              filterResult={filterResult}
              category={category}
              filterResultRatings={filterResultRatings}
              rating={rating}
              subCategory={subCategory}
              changeChecked={handleChangeChecked}
              selectedPrice={selectedPrice}
              changePrice={handleChangePrice}
            />
          </div>
        </div>
        <div className="Products">
          <h2>Products</h2>
          <div className="productList">
            {resultsFound ? (
              <OurStoreProducts list={list} />
            ) : (
              <h3>No Products</h3>
            )}
          </div>
        </div>
      </AllProducts>
    </Wrapper>
  );
};

export default OurStore;

const AllProducts = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 90px 0 90px;
  .filterSection {
    width: 25%;
    border-right: 1px solid black;
  }
  .Products {
    width: 75%;
    border-right: 1px solid black;
    h2 {
      padding-left: 25px;
    }
    .productList {
      align-items: center;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Conatiner = styled.div`
  padding: 0px 90px 0 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #000;
  .Categories {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .Categories-header {
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
`;
