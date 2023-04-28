import Header from "components/Header/Header";
import img from "../../images/tweet-card-img.png"
import { Section, Message } from "./NotFound.styled";

const NotFound = () => {
    return (
        <Section>
            <Header />
            <Message>Oops! This page does not exist.</Message>
            <img src={img} alt="filler" />
        </Section>
    )
}

export default NotFound;