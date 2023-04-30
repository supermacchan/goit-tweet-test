import Header from "components/Header/Header";
import { Wrapper, Message, LoaderContainer } from "./NotFound.styled";
import { ProgressBar } from "react-loader-spinner";
import img from "../../images/tweet-card-img.png"

const NotFound = () => {
    return (
        <Wrapper>
            <Header />
            <Message>Oops! This page does not exist.</Message>
            <Message>You will be redirected to Main Page in a few seconds.</Message>
            <LoaderContainer>
                <ProgressBar
                    height="80"
                    width="80"
                    ariaLabel="progress-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass="progress-bar-wrapper"
                    borderColor = '#5736A3'
                    barColor = '#5CD3A8'
                />
            </LoaderContainer>
            <img src={img} alt="filler" />
        </Wrapper>
    )
}

export default NotFound;
