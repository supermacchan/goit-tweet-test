import { 
    Form, 
    MainTitle, 
    Label,
    Input,
    Button
 } from "./WelcomeForm.styled";

const WelcomeForm = () => {
    return (
        <Form>
            <MainTitle>Hi there, stranger!</MainTitle>
            <Label>How can we call you?</Label>
            <Input type="text" placeholder="Enter your name" />
            <Button type="sumbit">Send</Button>
        </Form>
    )
}

export default WelcomeForm;