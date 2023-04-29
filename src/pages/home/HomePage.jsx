import { useSelector } from "react-redux";
import { selectAuth, selectUser } from "redux/selectors";
import WelcomeForm from "components/WelcomeForm/WelcomeForm";
import WelcomeMessage from "components/WelcomeMessage/WelcomeMessage";
import About from "components/About/About";

import { Wrapper, Section } from "./HomePage.styled";

const HomePage = () => {
    const auth = useSelector(selectAuth);
    const username = useSelector(selectUser);

    return (
        <Wrapper>
            <Section>
                { auth
                ? <WelcomeMessage name={username} />
                : <WelcomeForm /> }
            </Section>
            <Section>
                <About />
            </Section>
        </Wrapper>
    )
}

export default HomePage;