import {JumbotronContainer} from '../containers/jumbotron'
import { FooterContainer } from '../containers/footer';
import { FAQs } from '../containers/accordion'
import { HeaderContainer } from '../containers/header';
import { OptForm, OptFormButton, OptFormInput } from '../components/opt-form'
import { Feature } from '../components/feautre'
export const Home = () => {
    return <>
    <HeaderContainer>
        <Feature>
            <Feature.Title>
                Unlimited films, TV programmes and more.
            </Feature.Title>
            <Feature.Subtitle>
                Watch anywhere, cancel at any time.
            </Feature.Subtitle>
            <OptForm>
                <OptFormInput placeholder="E-mail address"/>
                <OptFormButton>Try it now</OptFormButton>
                <OptForm.Break/>
                <OptForm.Text>Ready to watch? Enter your e-mail to restart or create your membership</OptForm.Text>
            </OptForm>
        </Feature>
    </HeaderContainer>
    <JumbotronContainer></JumbotronContainer>
    <FAQs></FAQs>
    <FooterContainer></FooterContainer>
    </>
}