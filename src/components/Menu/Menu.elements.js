import styled from 'styled-components'

export const MenuContainer = styled.div`
height:100vh;
width:100%;
`
export const MenuWrapper = styled.div`
height:100%;
width:100%;
`
export const TabContainer = styled.div`
display: flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
padding: 20px 30px;

`
export const TabItem = styled.div`
color: #BBBBBB;
font-size:15px;
font-weight:700;
cursor:pointer;
box-shadow: -5px 5px 10px rgba(229, 229, 229, 0.2), 5px -5px 10px rgba(229, 229, 229, 0.2), -5px -5px 10px rgba(253, 253, 253, 0.9), 5px 5px 13px rgba(229, 229, 229, 0.9), inset 1px 1px 2px rgba(253, 253, 253, 0.3), inset -1px -1px 2px rgba(229, 229, 229, 0.5);
border-radius: 0px 0px 15px 15px;
&:focus, &:hover{
    color: #3CBCB4;
    border-radius: 0px 0px -15px -15px;
}
`
export const MenuContent = styled.div`
height:100%;
width:100%;
margin-top:30px;
/* margin: 0 20px; */

`