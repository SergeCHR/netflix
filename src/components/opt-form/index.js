import React, {useState, useContext, createContext} from "react"

import { Container, Input, Button, Text, Break } from "./styles/opt-form"
const InputContext = createContext()

export const OptForm = ({children, ...restProps}) => {
    const [optInputValue, setOptInputValue] = useState('')
    return <InputContext.Provider value={{optInputValue, setOptInputValue}}>
        <Container {...restProps}>{children}</Container>
    </InputContext.Provider>
}

export const OptFormInput = ({children, ...restProps}) => {
    const {optInputValue, setOptInputValue} = useContext(InputContext)
    const optInputHandler = (event) => {
        setOptInputValue(event.target.value)
    }
    return <Input onChange={optInputHandler} value={optInputValue} {...restProps}/>
}
export const OptFormButton = ({children, ...restProps}) => {
    const {optInputValue, setOptInputValue} = useContext(InputContext)
    const submitHandler = () => {
        setOptInputValue('')
    }
    return <Button onClick={submitHandler} {...restProps}>{children}{<img src="/images/icons/chevron-right.png" alt="Try now"/>}</Button>
}
OptForm.Text = ({children, ...restProps}) => {
    return <Text {...restProps}>{children}</Text>
}
OptForm.Break = () => {
    return <Break/>
}