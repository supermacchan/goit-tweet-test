import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
    selectTweets, 
    // selectTweetsLoading, 
    selectTweetsError, 
    selectFavorites,
    selectFilter
} from "redux/selectors";
import { tweetOperations } from "redux/operations";
import Header from "components/Header/Header";
import Filter from "components/Filter/Filter";
import TweetCard from "components/TweetCard/TweetCard";
// import Loader from "components/Loader/Loader";
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
    // const isLoading = useSelector(selectTweetsLoading);
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

    const filterCheck = async () => {
        switch (filter) {
            case "show all": {
                const result = await fetchAll(page + 1);
                return result;
            }
            case "follow": {
                const result = await fetchNotFollowed(page + 1);
                console.log(result);
                return result;
            }
            case "followings": {
                const result = await fetchFollowed(page + 1);
                console.log("switch");
                console.log(result);
                console.log(items);
                return result;
            }
            default:
                return;
        }
    };

    const handleLoadMore = async () => {
        const result = await filterCheck();
            
        if(result.length >= 6) {
            setPage((prevState => prevState + 1));
            setMoreAvailable(true);
            setItems(prevState => {
                return [...prevState, ...result];
            })
            console.log("finally");
            console.log(result);
            console.log(items);
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
        // const result = await fetchAll(page + 1);

        // if(result.length >= 6) {
        //     setPage((prevState => prevState + 1));
        //     setMoreAvailable(true);
        //     setItems(prevState => {
        //         return [...prevState, ...result];
        //     })

        //     return;
        // }
        
        // setPage(1);
        // setMoreAvailable(false);
        // toast("Looks like you've reached the end of the list");
    // }

    // reset page num to 1
    // useEffect(() => {
    //     return () => { setPage(1) }
    // }, []);

    // first render???
    useEffect(() => {
        const firstRender = async () => {
            const result = await dispatch(tweetOperations.fetchAllTweets({page: 1, itemsPerPage}));
            setItems(result.payload);
        };
        firstRender();
        // dispatch(tweetOperations.fetchAllTweets({itemsPerPage}));
        setPage(1);
        setMoreAvailable(true);
    }, [dispatch, itemsPerPage]);

    // useEffect(() => {
    //     console.log(page);
    //     console.log(items);
    //     console.log(users);
    //     dispatch(tweetOperations.fetchAllTweets({page, itemsPerPage}));
    // }, [dispatch, page, itemsPerPage]);

    const fetchAll = async (page) => {
        const result = await dispatch(tweetOperations.fetchAllTweets({page, itemsPerPage}));
        if (!page) {
            setItems(result.payload);
        }
        setMoreAvailable(true);
        return result.payload;
    }

    const fetchFollowed = async (page) => {
        const result = await dispatch(tweetOperations.fetchFollowed({favorites, page, itemsPerPage}));
        if (!page) {
            setItems(result.payload);
        }
        // setItems(result.payload);
        if (result.payload.length < itemsPerPage) {
            setMoreAvailable(false);
        } else {
            setMoreAvailable(true);
        }

        // setMoreAvailable(true);
        console.log("fetch followed");
        console.log(result.payload);
        console.log(items);
        return result.payload;
    }

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
        // setItems(result.payload);
        // setMoreAvailable(true);
        return result.payload;
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
                {/* {isLoading && <Loader />} */}
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