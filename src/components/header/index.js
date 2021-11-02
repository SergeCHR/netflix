import { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {Container, Logo, Background, ButtonLink, Feature, FeatureCallOut, Text, PlayButton, Group
, Dropdown, Picture, Profile, Link, Search, SearchIcon, SearchInput} from "./styles/header"
export const Header = ({children, bg = true, ...restProps}) => {
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Feature = ({children, ...restProps}) => {
    return <Feature {...restProps}>{children}</Feature>
}
Header.Dropdown = ({children, ...restProps}) => {
    return <Dropdown {...restProps}>{children}</Dropdown> 
}
Header.Profile = ({children, ...restProps}) => {
    return <Profile {...restProps}>{children}</Profile> 
}
Header.Picture = ({src, ...restProps}) => {
    return <Picture src={`/images/users/${src}.png`} {...restProps}/>
}
Header.PlayButton = ({children, ...restProps}) => {
    return <PlayButton {...restProps}>{children}</PlayButton> 
}
Header.FeatureCallOut = ({children, ...restProps}) => {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut> 
}
Header.Text = ({children, ...restProps}) => {
    return <Text {...restProps}>{children}</Text> 
}

Header.Group = ({children, ...restProps}) => {
    return <Group {...restProps}>{children}</Group>
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
Header.TextLink = ({children, ...restProps}) => {
    return <Link {...restProps}>{children}</Link>
}
Header.Search = function HeaderSearch({searchTerm, setSearchTerm, ...restProps}){
    const [searchActive, setSearchActive] = useState(false)
    return <Search {...restProps}>
        <SearchIcon onClick={()=>{
            setSearchActive((prevState)=>!prevState)
        }}>
            <img src='/images/icons/search.png' alt='Search'></img>
        </SearchIcon>
        <SearchInput onChange={({target})=>{
            setSearchTerm(target.value)
        }} value={searchTerm} placeholder='Search films and series' active={searchActive}></SearchInput>
    </Search>
}