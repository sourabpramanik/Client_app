import React from 'react'
import { 
    NavbarContainer,
    NavWrapper,
    NavLogo,
    NavItem,
    Item,
    Container
} from './Navbar.elements.js'
import {IoQrCode} from 'react-icons/io5'
import {FiSearch} from 'react-icons/fi'
export default function Navbar() {
    return (
        <NavbarContainer>
            <NavWrapper>
                <NavLogo>Sacred Earth Cafe</NavLogo>
                <NavItem>
                    <Item>
                        <Container>
                            <IoQrCode/>
                        </Container>
                    </Item> 
                    <Item>
                        <Container>
                            <FiSearch/>
                        </Container>
                    </Item>                    
                </NavItem>
            </NavWrapper>
        </NavbarContainer>
    )
}
