import React from 'react'
import styled from 'styled-components'
import {BiFoodTag} from 'react-icons/bi'
import {IoAddOutline} from 'react-icons/io5'

export default function MenuItem() {
    return (
        <Wrapper>
            <Container>
                <DishImg src="/assets/img.jpg"/>
                <DishContent>
                    <Name>Sunrise Acai Bowl</Name>
                    <SubContent>
                        <BiFoodTag style={{color:"#5BAC81", fontSize:"1.5rem", background:'none'}}/>
                        <Price>₹299</Price>
                    </SubContent>
                    
                </DishContent>
                <BtnWrap>
                    <Circle>
                        <IoAddOutline style={{color:"#5BAC81", fontSize:"1.5rem", background:'none'}}/>
                    </Circle>
                    <AddBtn>
                        Add
                    </AddBtn>
                </BtnWrap>
            </Container>
            <Container>
                <DishImg src="/assets/img.jpg"/>
                <DishContent>
                    <Name>Sunrise Acai Bowl</Name>
                    <SubContent>
                        <BiFoodTag style={{color:"#5BAC81", fontSize:"1.5rem", background:'none'}}/>
                        <Price>₹299</Price>
                    </SubContent>
                    
                </DishContent>
                <BtnWrap>
                    <Circle>
                        <IoAddOutline style={{color:"#5BAC81", fontSize:"1.5rem", background:'none'}}/>
                    </Circle>
                    <AddBtn>
                        Add
                    </AddBtn>
                </BtnWrap>
            </Container>
            <Container>
                <DishImg src="/assets/img.jpg"/>
                <DishContent>
                    <Name>Items name in two line will increase the height</Name>
                    <SubContent>
                        <BiFoodTag style={{color:"#5BAC81", fontSize:"1.5rem", background:'none'}}/>
                        <Price>₹299</Price>
                    </SubContent>
                    
                </DishContent>
                <BtnWrap>
                    <Circle>
                        <IoAddOutline style={{color:"#5BAC81", fontSize:"1.5rem", background:'none'}}/>
                    </Circle>
                    <AddBtn>
                        Add
                    </AddBtn>
                </BtnWrap>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction:column;
justify-content:center;
`

const Container = styled.div`
width:100%;
height:fit-content;
box-shadow: inset -2px 2px 4px rgba(220, 220, 220, 0.2), 
            inset 2px -2px 4px rgba(220, 220, 220, 0.2), 
            inset -2px -2px 4px rgba(255, 255, 255, 0.9), 
            inset 2px 2px 5px rgba(220, 220, 220, 0.9);
/* box-sizing: border-box; */
appearance: none;
-webkit-appearance: none;
background: #F6F6F6;
margin: 20px 0;
padding: 10px;
border-radius:10px;
display: flex;
flex-direction:row;
position: relative;
/* @media screen and (max-width: 600px) {
    margin: 10px 20px;
} */
`
const DishImg = styled.img`
height:80px;
width:80px;
border-radius:10px;
object-fit:cover;
`
const DishContent = styled.div`
background: transparent;
display: flex;
flex-direction: column;
justify-content:space-between;
padding-left:2rem;
position: relative;
`
const Name = styled.h3`
background: transparent;
color: #4A5662;
align-self:flex-start;
max-width:200px;
`
const SubContent = styled.div`
background: transparent;
display: flex;
flex-direction:row;
justify-content:space-between;
position:absolute;
bottom:10px;
`
const Price = styled.h3`
background: transparent;
color: #4A5662;
padding-left: 2px;
`
const BtnWrap = styled.div`
position: absolute;
right:10px;
bottom:10px;
display: flex;
flex-direction: row;
align-items:center;
justify-content:center;
background: #F0F0F3;
height: 40px;
width: 80px;
box-shadow: -5px 5px 10px rgba(221, 221, 224, 0.2), 
             5px -5px 10px rgba(221, 221, 224, 0.2), 
             -5px -5px 10px rgba(255, 255, 255, 0.9), 
             5px 5px 13px rgba(221, 221, 224, 0.9);
border-radius:10px;
`
const Circle = styled.div`
box-shadow: inset -2px 2px 4px rgba(222, 222, 222, 0.2), 
            inset 2px -2px 4px rgba(222, 222, 222, 0.2), 
            inset -2px -2px 4px rgba(255, 255, 255, 0.9), 
            inset 2px 2px 5px rgba(222, 222, 222, 0.9);
height:25px;
width:25px;
border-radius:50%;
display: flex;
align-items:center;
justify-content:center;
`
const AddBtn = styled.button`
color: #4A5662;
font-size:1.2rem;
font-weight:600 ;
outline:none;
border:none;
margin-left:8px ;
`