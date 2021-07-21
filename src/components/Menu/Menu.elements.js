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
border-bottom: 1px solid #C0C0C0;
`
export const TabItem = styled.div`
color: #BBBBBB;
font-size:15px;
font-weight:700;
cursor:pointer;
&:focus, &:hover{
    color: #3CBCB4
}
`
export const MenuContent = styled.div`
height:100%;
width:100%;
margin-top:30px;
/* margin: 0 20px; */
`