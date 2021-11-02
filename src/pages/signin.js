import { FooterContainer } from "../containers/footer"
import { HeaderContainer } from "../containers/header"
import Form from "../components/form"
import {useState} from "react"
import * as ROUTES from '../constants/routes'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router"

export const Signin = () => {
    const history = useHistory()
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const isInvalid = emailAddress === '' || password === '';
    const auth = getAuth();

    const handleSignIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, emailAddress, password)
        .then(() => {
        history.push(ROUTES.BROWSE)
        })
    .catch((error) => {
        setError(error.message)
    });
        setEmailAddress('')
        setPassword('')
    }

    return <><HeaderContainer>
        <Form>
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Base onSubmit={handleSignIn} method="POST">
                <Form.Input onChange={({target}) => {setEmailAddress(target.value)}}
                 placeholder="Email address" value={emailAddress}/>
                <Form.Input onChange={({target}) => {setPassword(target.value)}}
                 type="password" autoComplete="off"
                 placeholder = "Password" value={password}/>
                <Form.Submit disabled={isInvalid}>Sign Up</Form.Submit>
                <Form.Text>
                    New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
                </Form.Text>
                <Form.TextSmall>
                    This page is protected by Google reCAPTCHA to ensure you are not a bot. Learn more.
                </Form.TextSmall>
            </Form.Base>
        </Form>
    </HeaderContainer>
    <FooterContainer/>
    </>
}