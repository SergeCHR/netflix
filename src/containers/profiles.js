import { Header } from "../components/header"
import logo from '../logo.svg'
import * as ROUTES from '../constants/routes'
import { Profiles } from "../components/profiles"

export const SelectProfileContainer = ({user, setProfile}) => {
    return <Header bg={false}>
        <Header.Frame>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"/>
        </Header.Frame>
        <Profiles>
            <Profiles.Title>
                Who's watching?
            </Profiles.Title>
            <Profiles.List>
                <Profiles.User onClick={()=>{setProfile({
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                })}}>
                    <Profiles.Picture src={user.photoURL}></Profiles.Picture>
                    <Profiles.Name>{user.displayName}</Profiles.Name>
                </Profiles.User>
            </Profiles.List>
        </Profiles>
    </Header>
}