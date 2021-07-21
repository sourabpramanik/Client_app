import React from 'react'
import MenuItem from '../components/MenuItem'
import styled from 'styled-components'
import { IoMdArrowDropdown } from "react-icons/io";
export default function Main({open}) {
    return (
        <div>
            {open===2?
                <Container>
                    <TopSection>
                        <h2><span>Acai Bowl</span></h2>
                        <IoMdArrowDropdown style={{color: "#3CBCB4", fontSize:"30px", transform: "rotate(180deg)"}}/>
                    </TopSection>
                   <Wrapper>
                    <MenuItem/>
                   </Wrapper>
                   <TopSection>
                        <h2><span>Acai Bowl</span></h2>
                        <IoMdArrowDropdown style={{color: "#3CBCB4", fontSize:"30px", transform: "rotate(180deg)"}}/>
                    </TopSection>
                   <Wrapper>
                    <MenuItem/>
                   </Wrapper>
                </Container>
                :
                null
            } 
        </div>
       
    )
}

const Container = styled.div`
height: 100%;
width:100%;
`
const Wrapper = styled.div`
/* width:100%; */
display: flex;
flex-direction:row;
justify-content:center;
margin: 0 20px;
`
const TopSection = styled.div`
display: flex;
flex-direction:row;
align-items:center;
h2 {
   width: 100%; 
   text-align: start; 
   border-bottom: 1px solid #C5C5C5; 
   line-height: 0.1em;
   margin: 10px 0 20px; 
   color: #4A5662;
} 

h2 span { 
    padding:0 10px;
    background : inherit;
}
`
