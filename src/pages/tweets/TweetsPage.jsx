import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTweets, selectTweetsLoading, selectFilter, selectFavorites } from "redux/selectors";
import { tweetOperations } from "redux/operations";
import Header from "components/Header/Header";
import Filter from "components/Filter/Filter";
import TweetCard from "components/TweetCard/TweetCard";
import Loader from "components/Loader/Loader";
import { Wrapper, Section, List, Button } from "./TweetsPage.styled";

const TweetsPage = () => {
    const users = useSelector(selectTweets);
    const isLoading = useSelector(selectTweetsLoading);
    // const error = useSelector(selectTweetsError);
    const filter = useSelector(selectFilter);
    const favorites = useSelector(selectFavorites);
    const dispatch = useDispatch();

    useEffect(() => {
        switch(filter) {
            case "show all":
                dispatch(tweetOperations.fetchAllTweets());
                break;
            case "follow":
                dispatch(tweetOperations.fetchNotFollowed(favorites));
                break;
            case "followings":
                dispatch(tweetOperations.fetchFollowed(favorites));
                break;
            default: 
                dispatch(tweetOperations.fetchAllTweets());
                break;
        }   
    }, [dispatch, filter, favorites]);

    return (
        <Wrapper>
            <Header />
            <Section>
                <Filter />
                <List>
                    {isLoading && <Loader />}
                    {/* add error message */}
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
                <Button type="button">Load More</Button>
            </Section>
        </Wrapper>
    )
}

export default TweetsPage;