import { FooterContainer } from "../containers/footer"
import { HeaderContainer } from "../containers/header"
import Form from "../components/form"
import {useState} from "react"
import * as ROUTES from '../constants/routes'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useHistory } from "react-router"

export const Signup = () => {
    const history = useHistory()
    const [firstName, setFirstName] = useState('')
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const isInvalid = firstName === '' || emailAddress === '' || password === '';
    const auth = getAuth();

    const handleSignUp = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, emailAddress, password)
        .then((result) => {
            updateProfile(result.user, {displayName: firstName,
                photoURL: Math.floor(Math.random()*5+1),})            
            }).then(
                history.push(ROUTES.SIGN_IN)
        )
        .catch((error) => {
            setError(error.message)
        });
            setFirstName('')
            setEmailAddress('')
            setPassword('')
        }

    return <><HeaderContainer>
        <Form>
            <Form.Title>Sign Up</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Base onSubmit={handleSignUp} method="POST">
                <Form.Input onChange={({target}) => {setFirstName(target.value)}}
                 placeholder="First name" value={firstName}/>
                <Form.Input onChange={({target}) => {setEmailAddress(target.value)}}
                 placeholder="Email address" value={emailAddress}/>
                <Form.Input onChange={({target}) => {setPassword(target.value)}}
                 type="password" autoComplete="off"
                 placeholder = "Password" value={password}/>
                <Form.Submit disabled={isInvalid}>Sign Up</Form.Submit>
                <Form.Text>
                    Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in.</Form.Link>
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