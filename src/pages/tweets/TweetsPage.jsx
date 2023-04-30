import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
    selectTweets, 
    selectTweetsError, 
    selectFavorites,
    selectFilter
} from "redux/selectors";
import { setStatusFilter } from "redux/slices/filterSlice";
import { tweetOperations } from "redux/operations";
import Header from "components/Header/Header";
import Filter from "components/Filter/Filter";
import TweetCard from "components/TweetCard/TweetCard";
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
    const error = useSelector(selectTweetsError);
    const favorites = useSelector(selectFavorites);
    const filter = useSelector(selectFilter);

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

    // ===== First Render =====
    useEffect(() => {
        const firstRender = async () => {
            dispatch(setStatusFilter("show all"));
            const result = await dispatch(tweetOperations.fetchAllTweets({page: 1, itemsPerPage}));
            setItems(result.payload);
        };

        firstRender();
        setPage(1);
        setMoreAvailable(true);
    }, [dispatch, itemsPerPage]);

    // ===== Items per page depending on window resize =====
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

    // ===== Fetch tweets depending on the Filter status =====
    const filterCheck = async () => {
        switch (filter) {
            case "show all": {
                const result = await fetchAll(page + 1);
                return result;
            }
            case "follow": {
                const result = await fetchNotFollowed(page + 1);
                return result;
            }
            case "followings": {
                const result = await fetchFollowed(page + 1);
                return result;
            }
            default:
                return;
        }
    };

    // ===== Fetch all tweets =====
    const fetchAll = async (page) => {
        const result = await dispatch(tweetOperations.fetchAllTweets({page, itemsPerPage}));
        if (!page) {
            setItems(result.payload);
        }
        setMoreAvailable(true);
        return result.payload;
    }

    // ===== Fetch users that you already follow =====
    const fetchFollowed = async (page) => {
        const result = await dispatch(tweetOperations.fetchFollowed({favorites, page, itemsPerPage}));
        if (!page) {
            setItems(result.payload);
        }

        if (result.payload.length < itemsPerPage) {
            setMoreAvailable(false);
        } else {
            setMoreAvailable(true);
        }

        return result.payload;
    }

    // ===== Fetch users that you don't follow =====
    const fetchNotFollowed = async (page) => {
        const result = await dispatch(tweetOperations.fetchNotFollowed({favorites, page, itemsPerPage}));
        if (!page) {
            setItems(result.payload);
        }

        if (result.payload.length < itemsPerPage) {
            setMoreAvailable(false);
        } else {
            setMoreAvailable(true);
        }

        return result.payload;
    }

    // ===== upon Load More button click =====
    const handleLoadMore = async () => {
        const result = await filterCheck();
            
        if(result.length >= 6) {
            setPage((prevState => prevState + 1));
            setMoreAvailable(true);
            setItems(prevState => {
                return [...prevState, ...result];
            })

            return;
        }

        if(result.length === 0) {
            setPage(1);
            setMoreAvailable(false);
            toast("Looks like you've reached the end of the list");
            return;
        }
          
        setItems(prevState => {
            return [...prevState, ...result];
        })

        setPage(1);
        setMoreAvailable(false);
        toast("Looks like you've reached the end of the list");
    };


    return (
        <Wrapper>
            <Header />
            <Section>
                <Filter
                    fetchAll={fetchAll}
                    fetchFollowed={fetchFollowed}
                    fetchNotFollowed={fetchNotFollowed}
                />

                {error && <Error>Oops! Something went wrong.</Error>}

                <List>
                    {!error && items.map(user => {
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
                {moreAvailable &&
                <Button type="button" onClick={handleLoadMore}>Load More</Button>}
            </Section>
        </Wrapper>
    )
}

export default TweetsPage;