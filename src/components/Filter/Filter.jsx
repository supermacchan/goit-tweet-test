import { useSelector, useDispatch } from "react-redux";
import { statusFilters } from "redux/constants";
import { setStatusFilter } from "redux/slices/filterSlice";
import { selectFilter } from "redux/selectors";
import { List, Button } from "./Filter.styled";

const Filter = ({fetchAll, fetchFollowed, fetchNotFollowed}) => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const handleFilterChange = (filter) => {
        dispatch(setStatusFilter(filter));
    }

    return (
        <List>
            <li>
                <Button 
                    type="button"
                    selected={filter === statusFilters.all}
                    onClick={() => {
                        handleFilterChange(statusFilters.all);
                        fetchAll();
                    }}
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
            </li>
        </List>
    )
}

export default Filter;