import WelcomeForm from "components/WelcomeForm/WelcomeForm";
import WelcomeMessage from "components/WelcomeMessage/WelcomeMessage";
import About from "components/About/About";

import { Wrapper, Section } from "./HomePage.styled";

const HomePage = () => {
    return (
        <Wrapper>
            <Section>
                <WelcomeForm />
                <WelcomeMessage />
                {/* <WelcomeForm /> || <WelcomeMessage /> - depending on auth */}
            </Section>
            <Section>
                <About />
            </Section>
        </Wrapper>
    )
}

export default HomePage;