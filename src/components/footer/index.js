import { Container, Row, Column, Text, Title, Link, Break } from "./styles/footer"

export const Footer = ({children, ...restProps}) => {
    return <Container {...restProps}>{children}</Container>
}
Footer.Text = ({children, ...restProps}) => {
    return <Text {...restProps}>{children}</Text>
}
Footer.Link = ({children, ...restProps}) => {
    return <Link {...restProps}>{children}</Link>
}
Footer.Contaiter = ({children, ...restProps}) => {
    return <Container {...restProps}>{children}</Container>
}
Footer.Row = ({children, ...restProps}) => {
    return <Row {...restProps}>{children}</Row>
}
Footer.Column = ({children, ...restProps}) => {
    return <Column {...restProps}>{children}</Column>
}
Footer.Break = ({children, ...restProps}) => {
    return <Break {...restProps}>{children}</Break>
}
Footer.Title = ({children, ...restProps}) => {
    return <Title {...restProps}>{children}</Title>
}
