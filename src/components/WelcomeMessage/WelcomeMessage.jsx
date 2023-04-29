import { 
    ImgContainer,
    Img,
    Greeting
 } from "./WelcomeMessage.styled";
import avatar from "../../images/avatar.png";

const WelcomeMessage = ({ name }) => {
    return (
        <> 
            <ImgContainer>
                <Img src={avatar} alt="user avatar" />
            </ImgContainer>
            <Greeting>Hi, {name}! Nice to see you!</Greeting>
        </>
    )
}

export default WelcomeMessage;