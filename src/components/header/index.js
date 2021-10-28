import { Link as ReactRouterLink } from "react-router-dom";
import {Container, Logo, Background, ButtonLink} from "./styles/header"
export const Header = ({children, bg = true, ...restProps}) => {
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = ({children, ...restProps}) => {
    return <Container {...restProps}>{children}</Container>
}
Header.Logo = ({to, ...restProps}) => {
    return <ReactRouterLink to={to}>
        <Logo {...restProps}/>
    </ReactRouterLink>
}
Header.ButtonLink = ({children, ...restProps}) => {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}