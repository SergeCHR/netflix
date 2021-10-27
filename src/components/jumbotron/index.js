import { Inner, Container, Item, Pane, Title, Subtitle, Image } from "./styles/jumbotron"

export const Jumbotron = ({children, direction = 'row', ...restProps}) => {
    return(
        <Item >
            <Inner direction={direction}>{children}</Inner>
        </Item>
    )
}
Jumbotron.Item = ({children, ...restProps}) => {
    return <Item{...restProps} >{children}</Item>
}
Jumbotron.Container = ({children, ...restProps}) => {
    return (<Container {...restProps} >{children}</Container>)
}
Jumbotron.Pane = ({children, ...restProps}) => {
    return (<Pane {...restProps} >{children}</Pane>)
}
Jumbotron.Title = ({children, ...restProps}) => {
    return (<Title {...restProps} >{children}</Title>)
}
Jumbotron.Subtitle = ({children, ...restProps}) => {
    return (<Subtitle {...restProps} >{children}</Subtitle>)
}
Jumbotron.Image = ({...restProps}) => {
    return (<Image {...restProps} />)
}