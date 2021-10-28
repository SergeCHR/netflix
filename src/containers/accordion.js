import faqsData from '../fixtures/faqs.json'
import { Accordion, AccordionHeader, AccordionItem, AccordionBody } from '../components/accordion'
import { OptForm, OptFormButton, OptFormInput } from '../components/opt-form'
export const FAQs = () => {
    return <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqsData.map((item)=><AccordionItem key={item.id}>
            <AccordionHeader>{item.header}</AccordionHeader>
            <AccordionBody>{item.body}</AccordionBody>
        </AccordionItem>)}
        <OptForm>
        <OptFormInput placeholder="E-mail address"/>
        <OptFormButton>Try it now</OptFormButton>
        <OptForm.Break/>
        <OptForm.Text>Ready to watch? Enter your e-mail to restart or create your membership</OptForm.Text>
    </OptForm>
    </Accordion>
}