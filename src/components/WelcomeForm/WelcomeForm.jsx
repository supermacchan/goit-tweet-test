import { useState } from "react";
import { 
    Form, 
    MainTitle, 
    Label,
    Input,
    Button
 } from "./WelcomeForm.styled";

const WelcomeForm = () => {
    const [name, setName] = useState('');

    const onFormSubmit = e => {
        e.preventDefault();
        console.log(name);
        reset();
    }

    const reset = () => {
        setName('');
    }

    return (
        <Form onSubmit={onFormSubmit}>
            <MainTitle>Hi there, stranger!</MainTitle>
            <Label>How can we call you?</Label>
            <Input 
                type="text"
                placeholder="Enter your name" 
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
            />
            <Button type="sumbit">Send</Button>
        </Form>
    )
}

export default WelcomeForm;