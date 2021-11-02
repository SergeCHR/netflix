import {useState, useContext, createContext } from "react";
import { Container, Title, Text, Group, SubTitle, Item, Feature, FeatureTitle, FeatureText, FeatureClose, Maturity, Content, Meta, Entities, Image } from "./styles/card";
import {Player} from '../../components/player'
export const FeatureContext = createContext()

export const Card = ({children, ...restProps}) => {
    const [showFeature, setShowFeature] = useState(false)
    const [itemFeature, setItemFeature] = useState({})

    return <FeatureContext.Provider value={{showFeature, setShowFeature, itemFeature, setItemFeature}}>
            <Container {...restProps}>
                {children}
            </Container>
        </FeatureContext.Provider>
}

Card.Group = ({children, ...restProps}) => {
    return <Group {...restProps}>{children}</Group>
}
Card.Title = ({children, ...restProps}) => {
    return <Title {...restProps}>{children}</Title>
}
Card.SubTitle = ({children, ...restProps}) => {
    return <SubTitle {...restProps}>{children}</SubTitle>
}
Card.Image = ({...restProps}) => {
    return <Image {...restProps}/>
}
Card.Text = ({children, ...restProps}) => {
    return <Text {...restProps}>{children}</Text>
}
Card.Meta = ({children, ...restProps}) => {
    return <Meta {...restProps}>{children}</Meta>
}
Card.Entities = ({children, ...restProps}) => {
    return <Entities {...restProps}>{children}</Entities>
}
Card.Item =  function CardItem ({item, children, ...restProps}){
    const {setItemFeature, setShowFeature} = useContext(FeatureContext)
    return <Item onClick={()=>{
        setShowFeature(true)
        setItemFeature(item)
    }} {...restProps}>{children}</Item>
}
Card.Feature = function CardFeature({children, category, ...restProps}){
    const {itemFeature, setShowFeature, showFeature} = useContext(FeatureContext);
    return showFeature ? <Feature {...restProps} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
        <Content>
            <FeatureTitle>{itemFeature.title}</FeatureTitle>
            <FeatureText>{itemFeature.description}</FeatureText>
            <FeatureClose onClick={()=>setShowFeature(false)}>
                <img src="/images/icons/close.png" alt="Close"/>
            </FeatureClose>
            <Group margin="30px" flexDirection="row" alignItems="center">
                <Maturity rating={itemFeature.maturity}>
                    {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
                </Maturity>
                <FeatureText fontWeight="bold">
                    {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                </FeatureText>
                
            </Group>
            {children}
        </Content>
    </Feature> : null;
}
