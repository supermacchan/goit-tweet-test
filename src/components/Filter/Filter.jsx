import { useSelector, useDispatch } from "react-redux";
import { statusFilters } from "redux/constants";
import { setStatusFilter } from "redux/slices/filterSlice";
import { selectFilter } from "redux/selectors";
import { List, Button, ActiveButton } from "./Filter.styled";

const Filter = ({fetchAll, fetchFollowed, fetchNotFollowed}) => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    const filterOptions = Object.values(statusFilters);

    const handleFilterChange = (filter) => {
        dispatch(setStatusFilter(filter));
    }

    const fetchCards = (e) => {
        switch (e.currentTarget.value) {
            case "show all": {
                fetchAll();
                break;
            }
            case "follow": {
                fetchNotFollowed();
                break;
            }
            case "followings": {
                fetchFollowed();
                break;
            }
            default:
                return;
        }
    }

    return (
        <List>
            {filterOptions.map(option => {
                if (option === filter) {
                    return (
                        <li key={option}>
                            <ActiveButton 
                                type="button"
                                value={option}
                                selected={filter === statusFilters[option]}
                                onClick={(e) => {
                                    handleFilterChange(e.currentTarget.value);
                                    fetchCards(e);
                                }}
                            >
                                {option}
                            </ActiveButton>
                        </li>
                    )
                }

                return (
                    <li key={option}>
                        <Button 
                            type="button"
                            value={option}
                            selected={filter === statusFilters[option]}
                            onClick={(e) => {
                                handleFilterChange(e.currentTarget.value);
                                fetchCards(e);
                            }}
                        >
                            {option}
                        </Button>
                    </li>
                )
            })}
            {/* <li>
                <Button 
                    type="button"
                    selected={filter === statusFilters.all}
                    onClick={() => {
                        handleFilterChange(statusFilters.all);
                        fetchAll();
                    }}
                    style={isActive && {backgroundColor: "#fff"}}
                >
                    show all
                </Button>
            </li>
            <li>
                <Button 
                    type="button"
                    selected={filter === statusFilters.follow}
                    onClick={() => {
                        handleFilterChange(statusFilters.follow);
                        fetchNotFollowed();
                    }}
                >
                    follow
                </Button>
            </li>
            <li>
                <Button 
                    type="button"
                    selected={filter === statusFilters.following}
                    onClick={() => {
                        handleFilterChange(statusFilters.following);
                        fetchFollowed();
                    }}
                >
                    followings
                </Button>
            </li> */}
        </List>
    )
}

export default Filter;