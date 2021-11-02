import { useContent } from "../hooks/use-content"
import { useState,useMemo, useEffect } from "react"
import selectionFilter from "../utils/selection-map"
import { SelectProfileContainer } from "../containers/profiles"
import { useAuthListener } from "../hooks/use-auth-listener"
import { Loading } from "../components/loading"
import { Header} from "../components/header"
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router"
import { Card } from "../components/card"
import {FooterContainer} from '../containers/footer'
import {Player} from '../components/player'
import Fuse from 'fuse.js'
export const BrowseContainer = () => {
    const history = useHistory();
    const auth = getAuth();
    const signOutHandler = () => {
        signOut(auth).then(() => {
             history.push(ROUTES.SIGN_IN)
        }).catch((error) => {
            console.error(error)
        });   
    }
    const {user} = useAuthListener({})
    const [profile, setProfile] = useState({
        displayName: '',
        photoURL: ''
    });

    const [category, setCategory] = useState('series')
    const [slideRows, setSlideRows] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [loading, setLoading] = useState(true);
    const {series} = useContent('series')
    const {films} = useContent('films')
    const slides = useMemo(()=>selectionFilter({series, films}), [series, films]);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
        }, [profile.displayName])
   useEffect(()=>{
       setSlideRows(slides[category])
       }, [slides, category])

    useEffect(()=>{
        
        if(searchTerm === '' || searchTerm.length < 4) return;
        const fuse = new Fuse(slideRows, {keys: ['data.description', 'data.title', 'data.genre']})
        const results = fuse.search(searchTerm).map(({item}) => item)  
        if(results.length != 0 && slideRows.length > 0){ 
            setSlideRows(results)
        }
        else{
            setSlideRows(slides[category])
        }
    }, [searchTerm])
    const profiles = <SelectProfileContainer user={user} setProfile={setProfile}></SelectProfileContainer>
    const headerContent = <>{loading ? <Loading src={user.photoURL}/> : <Loading.ReleaseBody/>}
        <Header src="joker1">
        <Header.Frame>
             <Header.Group>
                <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo}></Header.Logo>
                <Header.TextLink active={ category === 'series' ? 'true' : 'false'} onClick={()=>setCategory('series')}>Series</Header.TextLink>
                <Header.TextLink active={ category === 'films' ? 'true' : 'false'} onClick={()=>setCategory('films')}>Films</Header.TextLink>
            </Header.Group>
            <Header.Group>
                <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <Header.Profile>
                <Header.Picture src={user.photoURL}/>
                <Header.Dropdown>
                    <Header.Group>                      
                        <Header.Picture src={user.photoURL}/>
                        <Header.TextLink>{user.displayName}</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.TextLink onClick={signOutHandler}>Sign out</Header.TextLink>
                    </Header.Group>
                </Header.Dropdown>
                </Header.Profile>
            </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
            City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
            futile attempt to feel like he's part of the world around him.
          </Header.Text>
          <Header.PlayButton>Play!</Header.PlayButton>
        </Header.Feature>
        </Header>
       <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                  
                </Card.Item>
                
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
       <FooterContainer></FooterContainer>
        </>
    return profile.displayName ? headerContent : profiles;
}