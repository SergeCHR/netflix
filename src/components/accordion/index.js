
import React, {useState, useContext, createContext} from "react"
import { Container, Frame, Title, Item, Inner, Header, Body,  } from "./styles/accordion"

const ToggleContext = createContext()

export const Accordion = ({children, ...restProps}) => {
    return <Container {...restProps}>
        <Inner>{children}</Inner>
    </Container>
}
Accordion.Title = ({children, ...restProps}) => {
    return <Title {...restProps}>{children}</Title>
} 
Accordion.Frame = ({children, ...restProps}) => {
    return <Frame {...restProps}>{children}</Frame>
} 
export const AccordionItem = ({children, ...restProps}) => {
    const [toggleShow, setToggleShow] = useState(false);
    console.log();
    return <ToggleContext.Provider value={
        {toggleShow, setToggleShow}
    }><Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
} 
export const AccordionHeader = ({children, ...restProps}) => {
    const {toggleShow, setToggleShow} = useContext(ToggleContext)   
    return <Header  onClick={() => setToggleShow((prevState) => !prevState)} {...restProps}>{children}
    {toggleShow ? 
    <img src='/images/icons/close.png' alt="Close"/>
     : 
    <img src='/images/icons/add.png' alt="Open"></img>}
    </Header>
} 
export const AccordionBody = ({children, ...restProps}) => {
    const {toggleShow, setToggleShow} = useContext(ToggleContext)
    return toggleShow ?  <Body {...restProps}>{children}</Body> : null;
}  