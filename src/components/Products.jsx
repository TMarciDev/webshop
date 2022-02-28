import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${mobile({
    padding: "20px 0px 0px",
  })}
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      console.log("called");
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) => {
        //console.log(prev[1].createdAt.localeCompare(prev[0].createdAt));

        return [...prev].sort((a, b) => {
          return a.createdAt.localeCompare(b.createdAt);
        });
      });
    } else if (sort === "asc") {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => {
          return a.price - b.price;
        });
      });
    } else {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => {
          return b.price - a.price;
        });
      });
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => {
            return <Product item={item} key={item._id} />;
          })
        : products.slice(0, 5).map((item) => {
            return <Product item={item} key={item._id} />;
          })}
    </Container>
  );
};

export default Products;
