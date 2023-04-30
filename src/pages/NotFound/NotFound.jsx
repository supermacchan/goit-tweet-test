import { Wrapper, Message } from "./NotFound.styled";
import Header from "components/Header/Header";
import img from "../../images/tweet-card-img.png"

const NotFound = () => {
    return (
        <Wrapper>
            <Header />
            <Message>Oops! This page does not exist.</Message>
            <Message>You will be redirected to Main Page in a few seconds.</Message>
            <img src={img} alt="filler" />
        </Wrapper>
    )
}

export default NotFound;
