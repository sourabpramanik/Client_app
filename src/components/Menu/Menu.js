import React, {useState} from 'react'
import {
    MenuContainer,
    MenuWrapper,
    TabContainer,
    TabItem,
    MenuContent
} from './Menu.elements'
import Special from '../../pages/Special'
import Main from '../../pages/Main'
import Beverages from '../../pages/Beverages'
import Desserts from '../../pages/Desserts'
export default function Menu() {
    const [open, setOpen] = useState(2)

    const openPage = (id) =>{
       setOpen(id)
   }
    return (
        <MenuContainer>
           <MenuWrapper>
            <TabContainer>
                <TabItem onClick={()=>openPage(1)}>Special</TabItem>
                <TabItem onClick={()=>openPage(2)}>Main</TabItem>
                <TabItem onClick={()=>openPage(3)}>Beverages</TabItem>
                <TabItem onClick={()=>openPage(4)}>Desserts</TabItem>
            </TabContainer>
            <MenuContent>
                <Special open={open}/>
                <Main open={open}/>
                <Beverages open={open}/>
                <Desserts open={open}/>
            </MenuContent>            
           </MenuWrapper>
        </MenuContainer>
    )
}
