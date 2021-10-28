import { Container, Title, Subtitle } from "./styles/feature"

export const Feature = ({children, ...restProps}) => {
    return <Container {...restProps}>{children}</Container>
}

Feature.Title = ({children, ...restProps}) => {
    return <Title {...restProps}>{children}</Title>
}
Feature.Subtitle = ({children, ...restProps}) => {
    return <Subtitle {...restProps}>{children}</Subtitle>
}