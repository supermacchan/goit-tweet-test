import { 
    Card,
    AvatarContainer,
    Avatar
} from "./TweetCard.styled";
import logo from "../../images/logo.svg";
import img from "../../images/tweet-card-img.png"

const TweetCard = ({name, avatar, tweets, followers}) => {
    return (
        <Card>
            {/* upper card */}
            <div>
                <img src={logo} alt="GoIT logo" />
                <img src={img} alt="GoIT logo" />
                {/* line - ::after */}
            </div>
            {/* lower card */}
            <div>
                <AvatarContainer>
                    <Avatar src={avatar} alt="user avatar" />
                </AvatarContainer>
                <p>{name}</p>
                <p>{tweets} tweets</p>
                <p>{followers} followers</p>
                <button>Follow</button>
            </div>
        </Card>
    )
}

export default TweetCard;