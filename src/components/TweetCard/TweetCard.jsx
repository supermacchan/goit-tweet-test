import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFavorites } from "redux/selectors";
import { follow, unfollow } from "redux/slices/userSlice";
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

const TweetCard = ({id, name, avatar, tweets, followers}) => {
    const [isFollowed, setIsFollowed] = useState(false);
    const favorites = useSelector(selectFavorites);
    const dispatch = useDispatch();

    useEffect(() => {
        const isInFavorites = favorites.includes(id);
        setIsFollowed(isInFavorites);
    }, [favorites, id]);

    const onFollowClick = () => {
        if (isFollowed) {
            dispatch(unfollow(id));
        } else {
            dispatch(follow(id));
        }

    }

    return (
        <Card>
            <UpperPart>
                <Name>{name}</Name>
                <Logo src={logo} alt="GoIT logo" />
                <Image src={img} alt="Filler" />
            </UpperPart>
            <LowerPart>
                <AvatarContainer>
                    <Avatar src={avatar} alt="user avatar" />
                </AvatarContainer>
                <Tweets>{tweets} tweets</Tweets>
                <Followers>{followers} followers</Followers>
                <Button type="button" onClick={onFollowClick}>
                    {isFollowed
                    ? "Following"
                    : "Follow"
                    }
                </Button>
            </LowerPart>
        </Card>
    )
}

export default TweetCard;