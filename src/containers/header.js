import {Header} from '../components/header'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

export const HeaderContainer = ({children, ...restProps}) => {
    return <Header {...restProps}>
        <Header.Frame>
            <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo}></Header.Logo>
            <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        </Header.Frame>
        {children}  
    </Header>
}