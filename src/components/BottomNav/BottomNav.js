import React from 'react'
import styled from 'styled-components'
import {GiElectric} from 'react-icons/gi'
import {BiBookOpen} from 'react-icons/bi'
import {FiShoppingBag} from 'react-icons/fi'
export default function BottomNav() {
    return (
        <Container>
            <Wrapper>
                <NavItem>
                    <GiElectric/>
                </NavItem>
                 <NavItem>
                    <BiBookOpen/>
                </NavItem>
                 <NavItem>
                    <FiShoppingBag/>
                </NavItem>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
background: #F1F1F1;
height: 80px;
width: 100%;
position: fixed;
bottom: 0;
`
const Wrapper = styled.div`
display: flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
height: 100%;
width: 100%;
padding: 0 10rem;
@media screen and (max-width:768px){
    padding:0 20px;
}
`

const NavItem = styled.div`
box-shadow: -5px 5px 10px rgba(222, 222, 222, 0.2), 5px -5px 10px rgba(222, 222, 222, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(222, 222, 222, 0.9);
border-radius: 10px;
height: 40px;
width:40px;
background:#F1F1F1;
display: flex;
justify-content: center;
align-items:center;
font-size:1.5rem;
color: #BBBBBB;
&:hover, &:focus{
    box-shadow: inset -2px 2px 4px rgba(212, 212, 212, 0.2), inset 2px -2px 4px rgba(212, 212, 212, 0.2), inset -2px -2px 4px rgba(255, 255, 255, 0.9), inset 2px 2px 5px rgba(212, 212, 212, 0.9);
}
`
