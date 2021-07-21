import styled from 'styled-components'

export const NavbarContainer = styled.div`
height: 60px;
width: 100%;
`
export const NavWrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
padding: 0 20px;
`
export const NavLogo = styled.div`
color:#657280;
font-weight:600;
font-size: clamp(1.4rem, 5vw, 1.8rem);
`
export const NavItem = styled.div`
display: flex;
flex-direction:row;
align-items:center;
height: 100%;
justify-content:space-between;
`
export const Item = styled.div`
color:#657280;
font-size: clamp(1.4rem, 5vw, 1.8rem);
margin: 0 10px;
`
export const Container = styled.div`
height: 50px;
width: 50px;
border-radius: 10px;
background:#F1F1F1;
box-shadow: -5px 5px 10px rgba(222, 222, 222, 0.2), 
            5px -5px 10px rgba(222, 222, 222, 0.2), 
            -5px -5px 10px rgba(255, 255, 255, 0.9),
            5px 5px 13px rgba(222, 222, 222, 0.9);
align-items: center;  
display: flex;
justify-content: center;

@media screen and (max-width: 480px) {
    height: 40px;
    width: 40px;
    border-radius: 10px;
}
`