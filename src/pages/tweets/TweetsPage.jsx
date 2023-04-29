import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTweets, selectTweetsLoading } from "redux/selectors";
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
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(tweetOperations.fetchAllTweets());
    }, [dispatch]);

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