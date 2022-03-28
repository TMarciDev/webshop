import {
  BusinessCenterOutlined,
  KeyboardCapslockOutlined,
  LockOutlined,
} from "@material-ui/icons";
import React from "react";

import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  background-image: url("design_images/rounded.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;

  position: relative;
`;

const Wrapper = styled.div`
  width: 80vh;
  height: 80vh;
  position: absolute;

  right: 20vh;
  top: 10vh;

  backdrop-filter: blur(9px);
  border-radius: 20px;

  ${mobile({
    right: "0px",
    top: "0px",
    width: "96vw",
    height: "80wh",
    margin: "10vh 2vw",
  })}
`;
const WhiteBox = styled.div`
  width: 100%;
  height: 100%;

  background-color: #e7ecf1;
  opacity: 50%;

  filter: drop-shadow(-4px -3px 5px #505050);
  border-radius: 20px;
`;

const SiginContainer = styled.div`
  width: 100%;
  height: 100%;

  opacity: 100%;

  position: absolute;
  top: 0px;

  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex: 1;
  margin-right: 25px;
`;
const Message = styled.h1`
  margin-left: 90px;
  width: 195px;
  flex: 1;
  font-weight: 850;
  color: #4b4b4b;

  ${mobile({
    marginLeft: "20px"
  })}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0px 90px;
  flex: 3;

  ${mobile({
    margin: "0px 25px"
  })}
`;
const Label = styled.label`
  margin-left: 36px;
  margin-top: 25px;
  margin-bottom: 8px;
  color: #4b4b4b;

  font-weight: 550;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;
const Input = styled.input`
  margin-left: 12px;
  width: 100%;
  background-color: #f1f0f0;
  border: none;
  height: 37px;
  border-radius: 5px;

  &:focus {
    outline: none;
    filter: drop-shadow(-2px -1px 7px #505050);
    transition: all .2s ease;
  }
`;
const Checkbox = styled.input`
  margin-left: 5px;
  padding: 2px;
`;
const CheckboxLabel = styled.label`
  margin-left: 18px;
  color: #4b4b4b;
  font-weight: 550;
`;
const Button = styled.button`
  margin-top: 50px;
  margin-bottom: 50px;


  border: none;
  color: #ffffff;
  background-color: #0aa7bd;
  padding: 12px 0px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 650;
`;

const SmoothLogin = () => {
  return (
    <Container>
      <Wrapper>
        <WhiteBox></WhiteBox>
        <SiginContainer>
          <Logo>
            <KeyboardCapslockOutlined style={{ color: "#0AA7BD" }} /> Your Logo
          </Logo>
          <Message>Sign Into Your Account</Message>
          <Form>
            <Label>Company ID</Label>
            <InputContainer>
              <BusinessCenterOutlined style={{ color: "#0AA7BD" }} />
              <Input />
            </InputContainer>

            <Label>Password</Label>
            <InputContainer>
              <LockOutlined style={{ color: "#0AA7BD" }} />
              <Input />
            </InputContainer>
            <Label></Label>
            <InputContainer>
              <Checkbox type="checkbox" id="checkbox" />
              <CheckboxLabel for="checkbox">Remember me</CheckboxLabel>
            </InputContainer>

            <Button>Sign In</Button>
          </Form>
        </SiginContainer>
      </Wrapper>
    </Container>
  );
};

export default SmoothLogin;
