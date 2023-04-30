import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth, selectUser } from "redux/selectors";
import { logOut } from "redux/slices/userSlice";
import { 
    HeaderContainer,
    Content,
    HomePageLink,
    UserInfo,
    AvatarContainer,
    Img,
    Greeting,
    LogoutBtn
} from "./Header.styled";
import { RiLogoutBoxLine } from "react-icons/ri";
import { toast } from "react-toastify";
import avatar from "../../images/avatar.png";

const Header = () => {
    const auth = useSelector(selectAuth);
    const name = useSelector(selectUser);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logOut());
        toast("You have successfully logged out");
    }

    return (
        <HeaderContainer>
            <Content>
                <Link to="/" style={{textDecoration: "none"}}>
                    <HomePageLink>
                        Back to Home Page
                    </HomePageLink>
                </Link>
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
                    { auth && 
                        <LogoutBtn type="button" onClick={onLogout}>
                            <RiLogoutBoxLine style={{height: "30px", width: "20px"}}/>
                        </LogoutBtn>
                    }
                </UserInfo>
            </Content>
        </HeaderContainer>
    )
}

export default Header;