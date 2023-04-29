import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFavorites } from "redux/selectors";
import { follow, unfollow } from "redux/slices/userSlice";
import { tweetOperations } from "redux/operations";
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
    const [followersCount, setFollowersCount] = useState(followers);
    const favorites = useSelector(selectFavorites);
    const dispatch = useDispatch();

    useEffect(() => {
        const isInFavorites = favorites.includes(id);
        setIsFollowed(isInFavorites);
    }, [favorites, id]);

    const onFollowClick = () => {
        if (isFollowed) {
            dispatch(unfollow(id));
            dispatch(tweetOperations.removeFollower(id));
            setFollowersCount(followersCount - 1);
        } else {
            dispatch(follow(id));
            dispatch(tweetOperations.addFollower(id));
            setFollowersCount(followersCount + 1);
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
                <Followers>{followersCount} followers</Followers>
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