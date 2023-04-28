import { Form } from "./WelcomeForm.styled";

const WelcomeForm = () => {
    return (
        <Form>
            <h2>Welcome!</h2>
            <h3>How can we call you?</h3>
            <input type="text" />
            <button type="sumbit">Send</button>
        </Form>
    )
}

export default WelcomeForm;