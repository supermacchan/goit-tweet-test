import { 
    Card,
    UpperPart,
    AvatarContainer,
    Avatar,
    Logo,
    Image,
    LowerPart,
    Name,
    Tweets,
    Followers,
    Button
} from "./TweetCard.styled";
import logo from "../../images/logo.svg";
import img from "../../images/tweet-card-img.png"

const TweetCard = ({name, avatar, tweets, followers}) => {
    return (
        <Card>
            {/* upper card */}
            <UpperPart>
                <Name>{name}</Name>
                <Logo src={logo} alt="GoIT logo" />
                <Image src={img} alt="Filler" />
            </UpperPart>
            {/* lower card */}
            <LowerPart>
                <AvatarContainer>
                    <Avatar src={avatar} alt="user avatar" />
                </AvatarContainer>
                <Tweets>{tweets} tweets</Tweets>
                <Followers>{followers} followers</Followers>
                <Button type="button">Follow</Button>
            </LowerPart>
        </Card>
    )
}

export default TweetCard;