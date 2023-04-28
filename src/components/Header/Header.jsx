import { Link } from "react-router-dom";
import { 
    HeaderContainer,
    HomePageLink,
    UserInfo,
    AvatarContainer,
    Img,
    Greeting
} from "./Header.styled";
import avatar from "../../images/avatar.png";

const Header = () => {
    return (
        <HeaderContainer>
            <Link to="/" style={{textDecoration: "none"}}>
                <HomePageLink>
                    Back to Home Page
                </HomePageLink>
            </Link>
            {/* user info */}
            <UserInfo>
                <AvatarContainer>
                    <Img src={avatar} alt="user avatar" />
                </AvatarContainer>
                {/* render if auth */}
                <Greeting>
                    Hi, User!
                </Greeting>
                {/* render if !auth */}
                <Greeting>
                    Hi, stranger!
                </Greeting>
            </UserInfo>
        </HeaderContainer>
    )
}

export default Header;