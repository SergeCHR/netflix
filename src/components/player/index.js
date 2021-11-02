import {useState, useContext, createContext} from 'react'
import {Container, Inner, Close, Button, Overlay} from './styles/player'
import ReactDOM from 'react-dom'

export const PlayerContext = createContext()

export const Player = ({children, ...restProps}) => {
    const [showPlayer, setShowPlayer] = useState(false)
    return <PlayerContext.Provider value={{showPlayer, setShowPlayer}}>
        <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
}  
Player.Video = function PlayerVideo({src, ...restProps}){
    const {showPlayer, setShowPlayer} = useContext(PlayerContext)
    return showPlayer ? ReactDOM.createPortal(
        <Overlay onClick={()=>{setShowPlayer(false)}}>
            <Inner>
                <video id="netflix-player" controls>
                    <source src={src} type="video/mp4" controls/>
                </video>
            </Inner>
            <Close/>
        </Overlay>, 
        document.body
    ) : null;
}
Player.Button = function PlayerButton({...restProps}){
    const {showPlayer, setShowPlayer} = useContext(PlayerContext)
    return <Button {...restProps} onClick={()=>{setShowPlayer(isShow => !isShow)}}>Play</Button>
}
