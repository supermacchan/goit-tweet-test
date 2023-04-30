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
    Error,
    UpBtnContainer,
    UpButton
} from "./TweetsPage.styled";
import { toast } from "react-toastify";
import { BiUpArrow } from "react-icons/bi";
import { animateScroll } from 'react-scroll';

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
        // always shows first page of all tweets and sets filter to "show all"
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

        // render upon filter button click
        if (!page) {
            setItems(result.payload);
        }

        // checks if Load More button is needed
        if (result.payload.length < itemsPerPage) {
            setMoreAvailable(false);
        } else {
            setMoreAvailable(true);
        }

        return result.payload;
    }

    // ===== Fetch users that you already follow =====
    const fetchFollowed = async (page) => {
        const result = await dispatch(tweetOperations.fetchFollowed({favorites, page, itemsPerPage}));
        
        // render upon filter button click
        if (!page) {
            setItems(result.payload);
        }

        // checks if Load More button is needed
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
        
        // render upon filter button click
        if (!page) {
            setItems(result.payload);
        }

        // checks if Load More button is needed
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
        animateScroll.scrollMore(1000, {smooth: 'easeInOutQuint'});

        // if reached the end of the list
        if(result.length < itemsPerPage) {
            setPage(1);
            setMoreAvailable(false);

            toast("Looks like you've reached the end of the list");

            if (result.length !== 0) {
                setItems(prevState => {
                    return [...prevState, ...result];
                })
            }

            return;
        }

        setPage((prevState => prevState + 1));
        setMoreAvailable(true);
        setItems(prevState => {
            return [...prevState, ...result];
        })
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

            <UpBtnContainer>
                <UpButton type="button" onClick={() => {animateScroll.scrollToTop({smooth: 'easeInOutQuint'})}}>
                    <BiUpArrow style={{width: 40, height: 40}}/>
                </UpButton>
            </UpBtnContainer>
        </Wrapper>
    )
}

export default TweetsPage;