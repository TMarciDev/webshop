import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;

  ${mobile({
    height: "27vh",
  })}
`;
const Info = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  background-color: gray;
  padding-left: 13px;
  padding-right: 13px;
  opacity: 85%;
`;
const Button = styled.button`
  border: none;
  padding: 20px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = (props) => {
  return (
    <Container>
      <Link to={`/products/${props.item.cat}`}>
        <Image src={props.item.img} />
        <Info>
          <Title>{props.item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
