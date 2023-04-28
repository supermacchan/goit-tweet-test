import Header from "components/Header/Header";
import img from "../../images/tweet-card-img.png"
import { Wrapper, Message } from "./NotFound.styled";

const NotFound = () => {
    return (
        <Wrapper>
            <Header />
            <Message>Oops! This page does not exist.</Message>
            <img src={img} alt="filler" />
        </Wrapper>
    )
}

export default NotFound;