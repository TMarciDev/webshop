import { ListItem } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
`
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
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    background-color: gray;
    padding-left: 13px;
    padding-right: 13px;
    opacity: 85%;

`
const Button = styled.button`
    border: none;
    padding: 20px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`

const CategoryItem = (props) => {

  return (
    <Container>
        <Image src={props.item.img} />
        <Info>
            <Title>{props.item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem