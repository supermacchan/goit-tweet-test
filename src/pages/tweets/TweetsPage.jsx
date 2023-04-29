import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
    selectTweets, 
    selectTweetsLoading, 
    selectTweetsError, 
    selectFavorites 
} from "redux/selectors";
import { tweetOperations } from "redux/operations";
import Header from "components/Header/Header";
import Filter from "components/Filter/Filter";
import TweetCard from "components/TweetCard/TweetCard";
import Loader from "components/Loader/Loader";
import { 
    Wrapper, 
    Section, 
    List, 
    Button, 
    Error 
} from "./TweetsPage.styled";

const TweetsPage = () => {
    const users = useSelector(selectTweets);
    const isLoading = useSelector(selectTweetsLoading);
    const error = useSelector(selectTweetsError);
    const favorites = useSelector(selectFavorites);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(tweetOperations.fetchAllTweets());
    }, [dispatch]);

    const fetchAll = () => {
        dispatch(tweetOperations.fetchAllTweets());
    }

    const fetchFollowed = () => {
        dispatch(tweetOperations.fetchFollowed(favorites));
    }

    const fetchNotFollowed = () => {
        dispatch(tweetOperations.fetchNotFollowed(favorites));
    }

    return (
        <Wrapper>
            <Header />
            <Section>
                <Filter
                    fetchAll={fetchAll}
                    fetchFollowed={fetchFollowed}
                    fetchNotFollowed={fetchNotFollowed}
                />
                {isLoading && <Loader />}
                {error && <Error>Oops! Nothing was found.</Error>}
                <List>
                    {users.map(user => {
                        return (
                            <TweetCard
                                key={user.id}
                                id={user.id}
                                name={user.user}
                                avatar={user.avatar}
                                tweets={user.tweets}
                                followers={user.followers}
                             />
                        )   
                    })}
                </List>
                {(users.length > 6) 
                && <Button type="button">Load More</Button>}
            </Section>
        </Wrapper>
    )
}

export default TweetsPage;