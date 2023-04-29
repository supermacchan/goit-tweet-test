import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth, selectUser } from "redux/selectors";
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
    const auth = useSelector(selectAuth);
    const name = useSelector(selectUser);

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
                <Greeting>
                    { auth
                    ? `Hi, ${name}!`
                    : "Hi, stranger!"
                    }
                </Greeting>
            </UserInfo>
        </HeaderContainer>
    )
}

export default Header;