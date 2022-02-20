import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import { mobile } from "../responsive";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;


  ${mobile({
    padding: "20px 0px 0px",
  })}
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => {
        return <Product item={item} key={item.id} />;
      })}
    </Container>
  );
};

export default Products;
