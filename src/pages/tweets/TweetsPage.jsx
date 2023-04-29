import { useEffect, useState } from "react";
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
import { toast } from "react-toastify";

const TweetsPage = () => {
    const users = useSelector(selectTweets);
    const isLoading = useSelector(selectTweetsLoading);
    const error = useSelector(selectTweetsError);
    const favorites = useSelector(selectFavorites);

    const dispatch = useDispatch();

    const [items, setItems] = useState(users);
    const [page, setPage] = useState(1);
    const [moreAvailable, setMoreAvailable] = useState(true);
    const [itemsPerPage, setItemsPerPage] = useState(() => {
        const width = window.innerWidth;

        if (width >= 992) {
            return 12;
        } else {
            return 6;
        }
    });

    useEffect(() => {
        const handleWindowResize = () => {
            const width = window.innerWidth;

            if (width >= 992) {
                setItemsPerPage(12);
            } else {
                setItemsPerPage(6);
            }
            };
            window.addEventListener('resize', handleWindowResize);

            return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    const handleLoadMore = async () => {
        const result = await fetchAll(page + 1);
        console.log(result);

        if(result.length >= 6) {
            setPage((prevState => prevState + 1));
            setMoreAvailable(true);
            setItems(prevState => {
                return [...prevState, ...result];
            })

            return;
        }
        
        setPage(1);
        setMoreAvailable(false);
        toast("Looks like you've reached the end of the list");
    }

    // reset page num to 1
    useEffect(() => {
        return () => { setPage(1) }
    }, []);

    // first render???
    useEffect(() => {
        dispatch(tweetOperations.fetchAllTweets({itemsPerPage}));
        setPage(1);
        setMoreAvailable(true);
    }, [dispatch, itemsPerPage]);

    useEffect(() => {
        dispatch(tweetOperations.fetchAllTweets({page, itemsPerPage}));
        // console.log(page);
    }, [dispatch, page, itemsPerPage]);

    const fetchAll = async (page) => {
        const result = await dispatch(tweetOperations.fetchAllTweets({page, itemsPerPage}));
        setMoreAvailable(true);
        console.log(result);
        return result.payload;
    }

    const fetchFollowed = () => {
        dispatch(tweetOperations.fetchFollowed(favorites));
        setMoreAvailable(true);
    }

    const fetchNotFollowed = () => {
        dispatch(tweetOperations.fetchNotFollowed(favorites));
        setMoreAvailable(true);
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
                    {items.map(user => {
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
                {moreAvailable
                && <Button type="button" onClick={handleLoadMore}>Load More</Button>}
            </Section>
        </Wrapper>
    )
}

export default TweetsPage;